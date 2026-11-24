/* EngVui – Shadowing: chấm điểm, ghép lời, tách câu.
   File này chỉ tính toán (không đụng DOM) nên chạy được cả trong Node để kiểm thử: tools/test_shadow.js */
(function (g) {
  const SR = 16000;
  const HOP = 320;          // 20 ms một khung
  const WIN = 512;
  const N_PTS = 48;         // số điểm khi co giãn đường cong về cùng độ dài
  const LMIN = 40;          // 400 Hz
  const LMAX = 228;         // 70 Hz

  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const SENT_END = /[.!?…]["')\]”’]*$/;

  /* =========================================================
     Từ ngữ và so khớp
     ========================================================= */
  const norm = (w) => String(w).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9']/g, '').replace(/^'+|'+$/g, '');
  const tokens = (text) => String(text || '').split(/\s+/).filter(Boolean).map((w) => ({ w, n: norm(w) })).filter((t) => t.n);

  function lev(a, b) {
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = Array.from({ length: n + 1 }, (_, j) => j);
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  const sim = (a, b) => (a === b ? 1 : 1 - lev(a, b) / Math.max(a.length, b.length));

  // Ghép hai dãy từ (đã chuẩn hóa) bằng quy hoạch động. Trả về, với mỗi từ chuẩn, chỉ số từ nghe được (hoặc -1).
  function align(R, H) {
    const m = R.length, n = H.length;
    const S = [];
    for (let i = 0; i < m; i++) { S[i] = []; for (let j = 0; j < n; j++) S[i][j] = sim(R[i], H[j]); }
    const sub = (i, j) => (S[i][j] >= 0.5 ? 1 - S[i][j] : 1.2);
    const D = Array.from({ length: m + 1 }, () => new Float64Array(n + 1));
    for (let i = 1; i <= m; i++) D[i][0] = i;
    for (let j = 1; j <= n; j++) D[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) D[i][j] = Math.min(D[i - 1][j] + 1, D[i][j - 1] + 1, D[i - 1][j - 1] + sub(i - 1, j - 1));
    }
    const map = R.map(() => ({ h: -1, sim: 0 }));
    let i = m, j = n;
    while (i > 0 && j > 0) {
      if (Math.abs(D[i][j] - (D[i - 1][j - 1] + sub(i - 1, j - 1))) < 1e-9) { map[i - 1] = { h: j - 1, sim: S[i - 1][j - 1] }; i--; j--; }
      else if (Math.abs(D[i][j] - (D[i - 1][j] + 1)) < 1e-9) i--;
      else j--;
    }
    return map;
  }

  // Độ chính xác lời nói: so lời chuẩn với lời nhận dạng được từ giọng người học.
  function accuracy(refText, hypText) {
    const R = tokens(refText), H = tokens(hypText);
    if (!R.length) return null;
    const al = align(R.map((t) => t.n), H.map((t) => t.n));
    let pts = 0, used = 0;
    const marks = al.map((a, i) => {
      if (a.h < 0) return { w: R[i].w, st: 'miss', hyp: '' };
      used++;
      const hyp = H[a.h].w;
      if (a.sim >= 0.999) { pts += 1; return { w: R[i].w, st: 'ok', hyp }; }
      if (a.sim >= 0.75) { pts += 0.65; return { w: R[i].w, st: 'close', hyp }; }
      if (a.sim >= 0.5) { pts += 0.25; return { w: R[i].w, st: 'bad', hyp }; }
      return { w: R[i].w, st: 'bad', hyp };
    });
    const extra = Math.max(0, H.length - used);
    const penalty = Math.min(0.3, 0.5 * extra / R.length);
    return { score: Math.round(clamp(pts / R.length * (1 - penalty), 0, 1) * 100), marks, extra, hyp: hypText };
  }

  /* =========================================================
     Phân tích âm thanh: cao độ (F0), năng lượng
     ========================================================= */
  function analyse(x) {
    const nF = Math.max(0, Math.floor((x.length - WIN) / HOP) + 1);
    const rms = new Float32Array(nF);
    const f0 = new Float32Array(nF);
    const cs = new Float64Array(WIN + 1);
    for (let f = 0; f < nF; f++) {
      const off = f * HOP;
      let s = 0;
      for (let i = 0; i < WIN; i++) s += x[off + i] * x[off + i];
      rms[f] = Math.sqrt(s / WIN);
    }
    const sorted = Array.from(rms).sort((a, b) => a - b);
    const p90 = sorted.length ? sorted[Math.floor(sorted.length * 0.9)] : 0;
    const thr = Math.max(0.004, 0.12 * p90);
    const r = new Float32Array(LMAX + 2);
    for (let f = 0; f < nF; f++) {
      if (rms[f] <= thr) continue;
      const off = f * HOP;
      let mean = 0;
      for (let i = 0; i < WIN; i++) mean += x[off + i];
      mean /= WIN;
      cs[0] = 0;
      for (let i = 0; i < WIN; i++) { const v = x[off + i] - mean; cs[i + 1] = cs[i] + v * v; }
      let rmax = 0;
      for (let L = LMIN - 1; L <= LMAX + 1; L++) {
        let num = 0;
        for (let i = 0; i < WIN - L; i++) num += (x[off + i] - mean) * (x[off + i + L] - mean);
        const e0 = cs[WIN - L] - cs[0];
        const e1 = cs[WIN] - cs[L];
        r[L] = num / Math.sqrt(e0 * e1 + 1e-12);
        if (L >= LMIN && L <= LMAX && r[L] > rmax) rmax = r[L];
      }
      if (rmax < 0.5) continue;
      for (let L = LMIN; L <= LMAX; L++) {
        if (r[L] >= 0.9 * rmax && r[L] >= r[L - 1] && r[L] >= r[L + 1]) { f0[f] = SR / L; break; }
      }
    }
    // lọc trung vị 5 khung, bỏ đoạn hữu thanh quá ngắn
    const sm = new Float32Array(nF);
    for (let f = 0; f < nF; f++) {
      if (!f0[f]) continue;
      const v = [];
      for (let k = -2; k <= 2; k++) if (f0[f + k] > 0) v.push(f0[f + k]);
      v.sort((a, b) => a - b);
      sm[f] = v[Math.floor(v.length / 2)];
    }
    let f = 0;
    while (f < nF) {
      if (!sm[f]) { f++; continue; }
      let e = f;
      while (e < nF && sm[e]) e++;
      if (e - f < 3) for (let k = f; k < e; k++) sm[k] = 0;
      f = e;
    }
    return { rms, f0: sm, nF, thr };
  }

  const median = (a) => { const s = a.slice().sort((p, q) => p - q); return s[Math.floor(s.length / 2)]; };
  const smooth3 = (a) => a.map((v, i) => (a[Math.max(0, i - 1)] + v + a[Math.min(a.length - 1, i + 1)]) / 3);
  function zscore(a) {
    const m = a.reduce((s, v) => s + v, 0) / a.length;
    const sd = Math.sqrt(a.reduce((s, v) => s + (v - m) * (v - m), 0) / a.length);
    return sd < 1e-6 ? a.map(() => 0) : a.map((v) => (v - m) / sd);
  }
  function pearson(a, b) {
    const n = Math.min(a.length, b.length);
    let ma = 0, mb = 0;
    for (let i = 0; i < n; i++) { ma += a[i]; mb += b[i]; }
    ma /= n; mb /= n;
    let sab = 0, saa = 0, sbb = 0;
    for (let i = 0; i < n; i++) { const x = a[i] - ma, y = b[i] - mb; sab += x * y; saa += x * x; sbb += y * y; }
    return saa < 1e-9 || sbb < 1e-9 ? 0 : sab / Math.sqrt(saa * sbb);
  }

  // Rút gọn một đoạn tiếng nói thành vài con số để so sánh: độ dài tiếng nói, đường cong năng lượng, đường cong cao độ.
  function describe(x) {
    const A = analyse(x);
    let first = -1, last = -1;
    for (let f = 0; f < A.nF; f++) if (A.rms[f] > A.thr) { if (first < 0) first = f; last = f; }
    if (first < 0 || last - first < 15) return null;
    const n = last - first + 1;
    const logE = smooth3(Array.from(A.rms.subarray(first, last + 1)).map((v) => Math.log(v + 1e-4)));
    const env = new Array(N_PTS);
    const pitchRaw = new Array(N_PTS);
    const voicedAll = [];
    for (let f = first; f <= last; f++) if (A.f0[f] > 0) voicedAll.push(A.f0[f]);
    const med = voicedAll.length ? median(voicedAll) : 0;
    let voicedBins = 0;
    for (let k = 0; k < N_PTS; k++) {
      const a = Math.floor(k * n / N_PTS), b = Math.max(a + 1, Math.floor((k + 1) * n / N_PTS));
      let s = 0;
      const ps = [];
      for (let i = a; i < b; i++) {
        s += logE[i];
        const v = A.f0[first + i];
        if (v > 0 && med) ps.push(12 * Math.log2(v / med));
      }
      env[k] = s / (b - a);
      if (ps.length) { pitchRaw[k] = median(ps); voicedBins++; } else pitchRaw[k] = NaN;
    }
    let pitch = null, pstd = 0;
    if (voicedBins >= 8) {
      // điền chỗ vô thanh bằng nội suy tuyến tính
      const p = pitchRaw.slice();
      let lastIdx = -1;
      for (let k = 0; k < N_PTS; k++) {
        if (isNaN(p[k])) continue;
        if (lastIdx < 0) for (let q = 0; q < k; q++) p[q] = p[k];
        else for (let q = lastIdx + 1; q < k; q++) p[q] = p[lastIdx] + (p[k] - p[lastIdx]) * (q - lastIdx) / (k - lastIdx);
        lastIdx = k;
      }
      for (let q = lastIdx + 1; q < N_PTS; q++) p[q] = p[lastIdx];
      pitch = smooth3(p);
      const mean = pitch.reduce((s, v) => s + v, 0) / N_PTS;
      pstd = Math.sqrt(pitch.reduce((s, v) => s + (v - mean) * (v - mean), 0) / N_PTS);
    }
    return { span: n * HOP / SR, env: zscore(env), pitch, pstd: Math.round(pstd * 100) / 100 };
  }

  const mapR = (r) => Math.round(100 * clamp((r + 0.05) / 0.85, 0, 1));
  function durFactor(ratio) {
    const L = Math.abs(Math.log(ratio)), T = Math.log(1.25);
    return L <= T ? 1 : Math.max(0.4, 1 - (L - T) * 1.2);
  }

  // So giọng người học với mẫu: nhịp điệu (năng lượng + tốc độ) và ngữ điệu (cao độ)
  function compare(ref, usr) {
    if (!ref || !usr) return { rhythm: null, intonation: null };
    const rhythm = Math.round(mapR(pearson(ref.env, usr.env)) * durFactor(usr.span / ref.span));
    let intonation = null;
    if (ref.pitch && usr.pitch) {
      const flat = ref.pstd > 0.01 ? clamp(usr.pstd / ref.pstd, 0, 1) : 1;
      intonation = Math.round(mapR(pearson(ref.pitch, usr.pitch)) * (0.75 + 0.25 * flat));
    }
    return { rhythm, intonation, ratio: Math.round(usr.span / ref.span * 100) / 100 };
  }

  function overall(parts) {
    const W = { accuracy: 0.55, rhythm: 0.25, intonation: 0.2 };
    let s = 0, w = 0;
    Object.keys(W).forEach((k) => { if (parts[k] != null) { s += parts[k] * W[k]; w += W[k]; } });
    return w ? Math.round(s / w) : 0;
  }
  const label = (s) => (s >= 90 ? 'Xuất sắc!' : s >= 75 ? 'Rất tốt' : s >= 60 ? 'Khá ổn' : s >= 40 ? 'Cần luyện thêm' : 'Thử lại nhé');

  /* =========================================================
     Tách câu, phụ đề, gán thời gian cho từng từ
     ========================================================= */
  // Chia đều thời gian theo số ký tự khi không có mốc từng từ (lời nhập tay, phụ đề)
  function wordsFromText(text, s, e) {
    const ws = String(text || '').split(/\s+/).filter(Boolean);
    if (!ws.length) return [];
    const weight = ws.map((w) => Math.max(2, w.replace(/[^\p{L}\p{N}]/gu, '').length) + (/[,;:.!?…]$/.test(w) ? 2 : 0));
    const total = weight.reduce((a, b) => a + b, 0);
    let t = s;
    return ws.map((w, i) => {
      const d = (e - s) * weight[i] / total;
      const o = { w, s: round3(t), e: round3(t + d) };
      t += d;
      return o;
    });
  }
  const round3 = (x) => Math.round(x * 1000) / 1000;

  function buildLines(words, o) {
    const opt = Object.assign({ maxWords: 16, gap: 0.9 }, o);
    const groups = [];
    let cur = [];
    words.forEach((w, i) => {
      cur.push(w);
      const next = words[i + 1];
      const end = SENT_END.test(w.w);
      const pause = next && next.s - w.e > opt.gap;
      const long = cur.length >= opt.maxWords && (/[,;:]$/.test(w.w) || cur.length >= opt.maxWords + 6);
      if (end || pause || long) { groups.push(cur); cur = []; }
    });
    if (cur.length) groups.push(cur);
    const merged = [];
    groups.forEach((L) => {
      const prev = merged[merged.length - 1];
      if (prev && L.length < 3 && prev.length + L.length <= opt.maxWords + 4 && L[0].s - prev[prev.length - 1].e < 1.2 && !SENT_END.test(prev[prev.length - 1].w)) prev.push(...L);
      else merged.push(L);
    });
    // chừa một chút đệm hai đầu mỗi câu, nhưng không bao giờ chồng sang câu bên cạnh
    return merged.map((ws, i) => {
      const prevE = merged[i - 1] ? merged[i - 1][merged[i - 1].length - 1].e : -Infinity;
      const nextS = merged[i + 1] ? merged[i + 1][0].s : Infinity;
      const last = ws[ws.length - 1];
      return {
        text: ws.map((w) => w.w).join(' '),
        s: round3(Math.max(0, ws[0].s - Math.max(0, Math.min(0.08, (ws[0].s - prevE) / 2)))),
        e: round3(last.e + Math.max(0, Math.min(0.15, (nextS - last.e) / 2))),
        words: ws,
      };
    });
  }

  // Đổi lời của một câu (sau khi người dùng sửa) và chia lại thời gian từng từ
  const retimeLine = (line, text) => {
    const first = line.words && line.words.length ? line.words[0].s : line.s;
    const last = line.words && line.words.length ? line.words[line.words.length - 1].e : line.e;
    const words = wordsFromText(text, first, last);
    return Object.assign({}, line, { text: words.map((w) => w.w).join(' '), words });
  };

  // SRT / VTT -> [{ s, e, text }]
  function parseSubs(txt) {
    const out = [];
    const toSec = (t) => {
      const p = t.replace(',', '.').split(':').map(Number);
      return p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p[0] * 60 + p[1];
    };
    String(txt || '').replace(/\r/g, '').replace(/^\uFEFF/, '').split(/\n{2,}/).forEach((block) => {
      const m = block.match(/((?:\d+:)?\d\d:\d\d[.,]\d{1,3})\s*-->\s*((?:\d+:)?\d\d:\d\d[.,]\d{1,3})/);
      if (!m) return;
      const rest = block.slice(block.indexOf(m[0]) + m[0].length).split('\n');
      rest.shift();   // phần còn lại của dòng thời gian (cài đặt VTT)
      const body = rest.join(' ').replace(/<[^>]+>|\{[^}]*\}/g, '').replace(/\s+/g, ' ').trim();
      if (body) out.push({ s: toSec(m[1]), e: toSec(m[2]), text: body });
    });
    return out;
  }

  // Gán thời gian của lời nhận dạng (ASR) cho bản lời chuẩn mà người dùng dán vào
  function retime(correctText, asrWords) {
    const R = tokens(correctText);
    const H = asrWords.map((w) => ({ w: w.w, s: w.s, e: w.e, n: norm(w.w) })).filter((w) => w.n);
    if (!R.length || !H.length) return [];
    const al = align(R.map((t) => t.n), H.map((t) => t.n));
    const out = R.map((t, i) => (al[i].h >= 0 && al[i].sim >= 0.5 ? { w: t.w, s: H[al[i].h].s, e: H[al[i].h].e, fixed: true } : { w: t.w }));
    const t0 = H[0].s, t1 = H[H.length - 1].e;
    let i = 0;
    while (i < out.length) {
      if (out[i].fixed) { i++; continue; }
      let j = i;
      while (j < out.length && !out[j].fixed) j++;
      const a = i ? out[i - 1].e : t0;
      const b = j < out.length ? out[j].s : t1;
      const span = Math.max(b - a, 0.08 * (j - i));
      const wt = out.slice(i, j).map((o) => Math.max(2, o.w.length));
      const tot = wt.reduce((p, q) => p + q, 0);
      let t = a;
      for (let k = i; k < j; k++) { const d = span * wt[k - i] / tot; out[k].s = t; out[k].e = t + d; t += d; }
      i = j;
    }
    let prevE = 0;
    return out.map((o) => {
      const s = Math.max(o.s, prevE);
      const e = Math.max(o.e, s + 0.05);
      prevE = e;
      return { w: o.w, s: round3(s), e: round3(e) };
    });
  }

  const api = { SR, norm, tokens, lev, sim, align, accuracy, analyse, describe, compare, overall, label, wordsFromText, buildLines, retimeLine, parseSubs, retime, pearson };
  g.EV = g.EV || {};
  g.EV.shadow = g.EV.shadow || {};
  g.EV.shadow.score = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
