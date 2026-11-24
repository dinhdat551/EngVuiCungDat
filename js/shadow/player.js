/* EngVui – Shadowing: màn luyện karaoke (nghe mẫu, nhại theo, thu âm, chấm điểm) */
(function () {
  const U = EV.util;
  const UI = EV.ui;
  const SH = EV.shadow;
  const SC = SH.score;
  const DB = SH.db;
  const ASR = SH.asr;
  const H = SH.h;
  const esc = H.esc;
  const clamp = U.clamp;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const route = () => location.hash.replace(/^#\/?/, '').split('/');

  let P = null;   // trạng thái của clip đang mở

  /* ---------- dọn dẹp khi rời màn hình ---------- */
  SH.leave = function () {
    if (!P) return;
    stopAll();
    if (P.replay) P.replay.pause();
    P.urls.forEach((u) => URL.revokeObjectURL(u));
    P.dead = true;
    P = null;
  };
  function stopAll() {
    if (!P) return;
    P.token++;
    if (P.raf) P.raf();
    cancelAnimationFrame(P.meterRaf);
    try { P.media.pause(); } catch (e) { /* bỏ qua */ }
    if (P.rec) { P.rec.cancel(); P.rec = null; }
    if (P.replay) P.replay.pause();
    P.busy = '';
  }

  /* =========================================================
     Mở clip
     ========================================================= */
  async function renderPlayer(main, id) {
    main.onclick = null;
    main.innerHTML = '<p class="muted">Đang mở clip…</p>';
    let clip = null;
    try { clip = await DB.get(id); } catch (e) { /* bỏ qua */ }
    const back = '<p><a class="link" href="#/shadow">← Danh sách clip</a></p>';
    if (!clip) { main.innerHTML = `${back}<div class="notice">Không tìm thấy clip này. Có thể nó đã bị xóa.</div>`; return; }
    const urls = [];
    let url = clip.src;
    if (!url) {
      let blob = null;
      try { blob = await DB.media(id); } catch (e) { /* bỏ qua */ }
      if (!blob) { main.innerHTML = `${back}<div class="notice">Không tìm thấy video/âm thanh của clip này.</div>`; return; }
      url = URL.createObjectURL(blob);
      urls.push(url);
    }
    const r = route();
    if (r[0] !== 'shadow' || decodeURIComponent(r[1] || '') !== id) { urls.forEach((u) => URL.revokeObjectURL(u)); return; }
    P = { clip, lines: clip.lines, idx: 0, rate: 1, mode: 'seq', token: 0, raf: 0, meterRaf: 0, rec: null, busy: '', last: {}, urls, url, media: null, replay: null, dead: false };
    draw(main);
    setIdx(0, true);
    if (ASR.wasReady()) ASR.load().catch(() => { /* chấm cơ bản nếu không nạp được */ });
    prepareRefs();
  }

  // Giọng mẫu của từng câu được tính một lần (lúc thêm clip). Clip có sẵn thì tính ở lần mở đầu tiên.
  async function prepareRefs() {
    const p = P;
    if (!p.lines.some((l) => !l.ref)) return;
    status('⏳ Đang phân tích giọng mẫu (chỉ lần đầu)…');
    try {
      let blob = p.clip.src ? await (await fetch(p.clip.src)).blob() : await DB.media(p.clip.id);
      const full = await ASR.decodeBlob(blob);
      p.lines.forEach((l) => {
        if (l.ref) return;
        const ref = SC.describe(full.subarray(Math.max(0, Math.floor(l.s * SC.SR)), Math.min(full.length, Math.ceil(l.e * SC.SR))));
        if (ref) l.ref = ref;
      });
      await DB.save(p.clip, null);
    } catch (e) { /* vẫn luyện được, chỉ thiếu điểm nhịp/ngữ điệu */ }
    if (P === p) status('');
  }

  /* =========================================================
     Giao diện
     ========================================================= */
  const $ = (s) => document.querySelector('#main ' + s);

  function lineHTML(l, i) {
    const b = P.clip.best && P.clip.best[i];
    return `<div class="sh-line" data-i="${i}">
      <span class="sh-n">${i + 1}</span>
      <span class="sh-text">${l.words.map((w) => `<span class="sh-w">${esc(w.w)}</span>`).join(' ')}</span>
      <span class="sh-best ${b ? scoreCls(b.score) : ''}">${b ? b.score : ''}</span></div>`;
  }
  const scoreCls = (s) => (s >= 75 ? 'good' : s >= 50 ? 'mid' : 'low');

  function draw(main) {
    const c = P.clip;
    const audio = c.kind === 'audio';
    main.innerHTML = `<div class="sh-player">
      <div class="sh-ptop"><a class="link" href="#/shadow">← Danh sách clip</a><h1 class="sh-ptitle">${esc(c.title)}</h1></div>
      <div class="sh-stage ${audio ? 'audio' : ''}"><video id="sh-v" playsinline preload="auto"></video>${audio ? '<div class="sh-cover">🎧</div>' : ''}</div>
      <div class="sh-lyrics" id="sh-lyrics">${P.lines.map(lineHTML).join('')}</div>
      <div class="sh-status" id="sh-status" aria-live="polite"></div>
      <div class="sh-meterbar" id="sh-meterbar" hidden><i></i></div>
      <div class="sh-ctl">
        <button class="sh-btn" data-p="prev" title="Câu trước (←)">⏮</button>
        <button class="sh-btn big" data-p="play" id="sh-play" title="Phím cách">▶ Nghe mẫu</button>
        <button class="sh-btn big rec" data-p="rec" id="sh-rec" title="Phím R">🎤 Nhại theo</button>
        <button class="sh-btn" data-p="next" title="Câu sau (→)">⏭</button>
      </div>
      <div class="sh-opts">
        <div class="sh-chips" id="sh-rate"><span>Tốc độ</span>${[0.7, 0.85, 1].map((r) => `<button data-rate="${r}" class="${r === P.rate ? 'on' : ''}">${r}×</button>`).join('')}</div>
        <div class="sh-chips" id="sh-mode"><span>Cách luyện</span><button data-mode="seq" class="on">Nghe rồi nhại</button><button data-mode="together">Nói song song 🎧</button></div>
      </div>
      <p class="muted small" id="sh-hint"></p>
      <div id="sh-res"></div>
      <div id="sh-note"></div>
    </div>`;
    P.media = $('#sh-v');
    P.media.src = P.url;
    P.media.preservesPitch = true;
    P.media.onerror = () => status('⚠️ Không phát được tệp này trên thiết bị. Hãy thử thêm lại dưới dạng MP4/MP3.');
    main.onclick = onClick;
    hint();
    engineNote();
  }

  function status(t) { const el = $('#sh-status'); if (el) el.innerHTML = t || ''; }
  function hint() {
    const el = $('#sh-hint');
    if (el) el.textContent = P.mode === 'seq'
      ? 'Bấm “Nhại theo”: máy phát câu mẫu, rồi đến lượt bạn đọc theo chữ sáng lên (không có tiếng mẫu).'
      : 'Bạn đọc cùng lúc với câu mẫu như bóng với hình. Hãy đeo tai nghe để micro không thu tiếng mẫu.';
  }
  function engineNote() {
    const el = $('#sh-note');
    if (!el) return;
    if (ASR.wasReady() || ASR.state().status === 'ready') { el.innerHTML = ''; return; }
    el.innerHTML = `<div class="notice sh-enote">🎯 Hiện app chấm <b>nhịp điệu</b> và <b>ngữ điệu</b>. Muốn chấm cả <b>đọc đúng từng từ</b>, hãy tải mô hình nhận dạng giọng nói (${ASR.MODELS[ASR.modelKey()].mb} MB, một lần, chạy offline).
      <button class="btn btn-primary btn-sm" data-p="loadasr">⬇ Tải mô hình</button><span class="muted small" id="sh-lp"></span></div>`;
  }

  function setUI() {
    const b = P.busy;
    const play = $('#sh-play'), rec = $('#sh-rec');
    if (!play) return;
    play.textContent = b === 'play' ? '⏹ Dừng' : '▶ Nghe mẫu';
    rec.textContent = b === 'rec' ? '⏹ Xong' : b === 'listen' ? '⏹ Hủy' : '🎤 Nhại theo';
    rec.classList.toggle('live', b === 'rec');
    play.disabled = b === 'rec' || b === 'listen' || b === 'score';
    rec.disabled = b === 'play' || b === 'score';
    document.querySelectorAll('#main [data-p="prev"], #main [data-p="next"]').forEach((x) => { x.disabled = !!b; });
    const lyr = $('#sh-lyrics');
    if (lyr) lyr.classList.toggle('busy', !!b);
    const line = lyr && lyr.querySelector('.sh-line.active');
    if (line) line.classList.toggle('me', b === 'rec');
    const mb = $('#sh-meterbar');
    if (mb) mb.hidden = b !== 'rec';
  }

  function setIdx(i, instant) {
    P.idx = clamp(i, 0, P.lines.length - 1);
    const lyr = $('#sh-lyrics');
    lyr.querySelectorAll('.sh-line').forEach((el, k) => {
      el.classList.toggle('active', k === P.idx);
      if (k !== P.idx) { el.classList.remove('me'); el.querySelectorAll('.sh-w').forEach((w) => w.style.removeProperty('--p')); }
    });
    const el = lyr.children[P.idx];
    if (el) lyr.scrollTo({ top: Math.max(0, el.offsetTop - lyr.clientHeight / 3), behavior: instant ? 'auto' : 'smooth' });
    paint(P.idx, -1);
    const r = P.last[P.idx];
    $('#sh-res').innerHTML = r ? resultHTML(r) : '';
    setUI();
  }

  // Tô sáng từng từ theo thời gian t (giây) trên dòng i
  function paint(i, t) {
    const el = $('#sh-lyrics') && $('#sh-lyrics').children[i];
    if (!el) return;
    const words = P.lines[i].words;
    el.querySelectorAll('.sh-w').forEach((node, k) => {
      const w = words[k];
      const p = t < 0 ? 0 : clamp((t - w.s) / Math.max(0.06, w.e - w.s), 0, 1);
      const v = p.toFixed(2);
      if (node.dataset.p !== v) { node.dataset.p = v; node.style.setProperty('--p', v); }
    });
  }

  /* =========================================================
     Phát câu mẫu / karaoke im lặng
     ========================================================= */
  // audio=true: phát tiếng của video; audio=false: chỉ chạy chữ sáng (lượt của người học)
  function runLine(i, o) {
    return new Promise((resolve) => {
      const my = ++P.token;
      const L = P.lines[i];
      const v = P.media;
      const t0 = performance.now();
      const lead = o.lead || 0;
      if (o.audio) {
        v.muted = false;
        v.volume = o.volume == null ? 1 : o.volume;
        v.playbackRate = P.rate;
        v.currentTime = L.s;
        v.play().catch(() => { status('⚠️ Trình duyệt chặn phát âm thanh, hãy bấm lại.'); });
      } else v.pause();
      const tick = () => {
        if (!P || my !== P.token) { resolve(false); return; }
        const t = o.audio ? v.currentTime : L.s + Math.max(0, (performance.now() - t0) / 1000 - lead) * P.rate;
        paint(i, t);
        if (t >= L.e - 0.02 || (o.audio && v.ended)) {
          if (o.audio) v.pause();
          paint(i, L.e + 1);
          resolve(true);
          return;
        }
        P.raf = later(tick);
      };
      P.raf = later(tick);
    });
  }
  // Chạy hàm ở khung hình kế tiếp, hoặc sau 120 ms nếu trang đang ẩn (khóa màn hình, chuyển ứng dụng)
  function later(fn) {
    let done = false;
    let id = 0;
    let tm = 0;
    const run = () => { if (done) return; done = true; cancelAnimationFrame(id); clearTimeout(tm); fn(); };
    id = requestAnimationFrame(run);
    tm = setTimeout(run, 120);
    return () => { done = true; cancelAnimationFrame(id); clearTimeout(tm); };
  }

  async function doPlay() {
    if (P.busy === 'play') { stopAll(); setUI(); paint(P.idx, -1); return; }
    if (P.busy) return;
    P.busy = 'play';
    setUI();
    status('');
    const ok = await runLine(P.idx, { audio: true });
    if (P && ok) { P.busy = ''; setUI(); }
  }

  /* =========================================================
     Thu âm và chấm điểm
     ========================================================= */
  function meterLoop() {
    const bar = $('#sh-meterbar i');
    const rec = P.rec;
    const my = P.token;
    const tick = () => {
      if (!P || !P.rec || P.rec !== rec) return;
      if (bar) bar.style.width = Math.round(clamp(rec.level() * 160, 2, 100)) + '%';
      P.meterRaf = requestAnimationFrame(tick);
    };
    P.meterRaf = requestAnimationFrame(tick);
    return my;
  }

  async function doRecord() {
    if (P.busy === 'rec') { await finishRec(); return; }
    if (P.busy === 'listen') { stopAll(); setUI(); paint(P.idx, -1); status(''); return; }
    if (P.busy) return;
    const i = P.idx;
    status('🎤 Đang mở micro…');
    let rec;
    try { rec = await ASR.record(); } catch (e) { status(`⚠️ ${esc(e.message)}`); return; }
    if (!P || P.dead) { rec.cancel(); return; }
    const p = P;
    p.rec = rec;
    if (p.mode === 'seq') {
      p.busy = 'listen';
      setUI();
      status('🔊 Nghe câu mẫu…');
      const ok = await runLine(i, { audio: true });
      if (!ok || P !== p || p.rec !== rec) return;
      await sleep(350);
      if (P !== p || p.rec !== rec) return;
    }
    p.busy = 'rec';
    setUI();
    status('🎤 <b>Đến lượt bạn!</b> Đọc theo chữ sáng lên');
    meterLoop();
    rec.start();
    const ok = await runLine(i, p.mode === 'seq' ? { audio: false, lead: 0.9 } : { audio: true, volume: 0.6 });
    if (!ok || P !== p || p.rec !== rec) return;
    await sleep(700);
    if (P !== p || p.rec !== rec) return;
    await finishRec();
  }

  async function finishRec() {
    const p = P;
    const rec = p.rec;
    if (!rec) return;
    const i = p.idx;
    p.token++;
    if (p.raf) p.raf();
    cancelAnimationFrame(p.meterRaf);
    try { p.media.pause(); } catch (e) { /* bỏ qua */ }
    p.rec = null;
    p.busy = 'score';
    setUI();
    status('⏳ Đang chấm điểm…');
    let out;
    try { out = await rec.stop(); } catch (e) { p.busy = ''; setUI(); status(`⚠️ ${esc(e.message)}`); return; }
    try { await score(i, out); } catch (e) { status(`⚠️ Không chấm được: ${esc(e.message || e)}`); }
    if (P === p) { p.busy = ''; setUI(); paint(i, -1); }
  }

  async function score(i, out) {
    const p = P;
    const L = p.lines[i];
    const usr = SC.describe(out.samples);
    if (!usr) { status('🔇 Mình chưa nghe thấy giọng bạn. Hãy nói to hơn, lại gần micro và thử lại.'); return; }
    const cmp = L.ref ? SC.compare(L.ref, Object.assign({}, usr, { span: usr.span * p.rate })) : { rhythm: null, intonation: null };
    let acc = null;
    let note = '';
    if (ASR.wasReady() || ASR.state().status === 'ready') {
      try {
        if (ASR.state().status !== 'ready') status('⏳ Đang nạp mô hình chấm điểm…');
        const r = await ASR.transcribe(out.samples);
        acc = SC.accuracy(L.text, r.text);
      } catch (e) { note = 'Không chấm được phần lời nói (' + e.message + '), điểm chỉ gồm nhịp điệu và ngữ điệu.'; }
    }
    if (P !== p) return;
    const parts = { accuracy: acc ? acc.score : null, rhythm: cmp.rhythm, intonation: cmp.intonation };
    const total = SC.overall(parts);
    const url = URL.createObjectURL(out.blob);
    p.urls.push(url);
    p.last[i] = { i, total, parts, marks: acc ? acc.marks : null, hyp: acc ? acc.hyp : '', ratio: cmp.ratio, url, note, basic: !acc };
    status('');
    const prev = p.clip.best && p.clip.best[i];
    p.clip.best = p.clip.best || {};
    if (!prev || total > prev.score) p.clip.best[i] = { score: total, at: Date.now() };
    p.clip.tries = (p.clip.tries || 0) + 1;
    if (p.idx === i) $('#sh-res').innerHTML = resultHTML(p.last[i]);
    const badge = $('#sh-lyrics').children[i].querySelector('.sh-best');
    const b = p.clip.best[i].score;
    badge.textContent = b;
    badge.className = 'sh-best ' + scoreCls(b);
    maybeReward(p);
    DB.save(p.clip, null).catch(() => { /* bỏ qua */ });
  }

  // Thưởng KN một lần khi mọi câu của clip đạt từ 60 điểm
  function maybeReward(p) {
    const c = p.clip;
    if (c.rewarded || !p.lines.every((_, k) => c.best[k] && c.best[k].score >= 60)) return;
    c.rewarded = true;
    const xp = Math.min(40, 10 + 2 * p.lines.length);
    try {
      EV.store.completeLesson({ xp, accuracy: H.avg(H.bestOf(c)), timeMs: 0, kind: 'shadow', practice: false, wordKeys: [], maxCombo: 0, perfect: false });
      UI.confetti(90);
      UI.toast(`🎉 Hoàn thành clip! +${xp} KN`);
      EV.app.renderChrome('shadow');
    } catch (e) { /* bỏ qua */ }
  }

  /* =========================================================
     Kết quả
     ========================================================= */
  const tone = (v) => (v == null ? '' : v >= 75 ? 'good' : v >= 50 ? 'mid' : 'low');
  function tips(r) {
    const t = [];
    if (r.marks && r.parts.accuracy < 85) {
      const bad = r.marks.filter((m) => m.st === 'bad' || m.st === 'miss').map((m) => m.w.replace(/[^\p{L}\p{N}']/gu, ''));
      if (bad.length) t.push(`Chú ý các từ: <b>${bad.slice(0, 4).map(esc).join(', ')}</b>. Nghe lại ở tốc độ 0.7× rồi đọc thật rõ từng từ.`);
    }
    if (r.parts.rhythm != null && r.parts.rhythm < 65) {
      t.push(r.ratio > 1.25 ? 'Bạn đang đọc <b>chậm hơn</b> mẫu; thử nối các từ liền mạch hơn.' : r.ratio < 0.8 ? 'Bạn đang đọc <b>nhanh hơn</b> mẫu; hãy chậm lại và ngắt đúng chỗ.' : 'Nhịp nhấn nhá chưa giống mẫu; hãy nhấn mạnh những âm tiết mạnh như người nói.');
    }
    if (r.parts.intonation != null && r.parts.intonation < 65) t.push('Giọng lên xuống chưa giống mẫu; để ý chỗ người nói lên giọng và hạ giọng cuối câu.');
    if (!t.length) t.push(r.total >= 90 ? 'Tuyệt vời! Sang câu tiếp theo nhé.' : 'Khá tốt! Thử thêm một lần để đạt điểm cao hơn.');
    return t;
  }
  function resultHTML(r) {
    const row = (name, v, hintTxt) => `<div class="sh-brow"><span>${name}</span><div class="sh-meter"><i class="${tone(v)}" style="width:${v == null ? 0 : v}%"></i></div><b>${v == null ? '—' : v}</b>${v == null && hintTxt ? `<small class="muted">${hintTxt}</small>` : ''}</div>`;
    return `<div class="card sh-result">
      <div class="sh-rtop">
        <div class="sh-ring ${tone(r.total)}" style="--v:${r.total}"><b>${r.total}</b></div>
        <div><div class="sh-label">${SC.label(r.total)}</div><div class="muted small">Điểm cao nhất của câu này: <b>${(P.clip.best[r.i] || {}).score || r.total}</b></div></div>
      </div>
      <div class="sh-bars">
        ${row('Lời nói', r.parts.accuracy, 'cần tải mô hình')}
        ${row('Nhịp điệu', r.parts.rhythm)}
        ${row('Ngữ điệu', r.parts.intonation, 'chưa đủ tiếng để đo')}
      </div>
      ${r.marks ? `<div class="sh-marks">${r.marks.map((m) => `<span class="sh-m ${m.st}" title="${m.hyp ? 'Máy nghe là: ' + esc(m.hyp) : 'Máy không nghe thấy từ này'}">${esc(m.w)}</span>`).join(' ')}</div>
        <div class="muted small">Xanh: đúng · Cam: gần đúng · Đỏ: sai hoặc thiếu. Máy nghe được: “${esc(r.hyp || '…')}”</div>` : ''}
      <ul class="sh-tips">${tips(r).map((x) => `<li>${x}</li>`).join('')}</ul>
      ${r.note ? `<p class="muted small">${esc(r.note)}</p>` : ''}
      <div class="sh-ract"><button class="btn btn-outline btn-sm" data-p="replay">🔁 Nghe lại giọng mình</button><button class="btn btn-outline btn-sm" data-p="rec">🎤 Thử lại</button>${P.idx < P.lines.length - 1 ? '<button class="btn btn-primary btn-sm" data-p="next">Câu tiếp ⏭</button>' : ''}</div>
      <p class="muted small">Điểm do máy ước lượng, chỉ mang tính tham khảo để bạn tự luyện.</p>
    </div>`;
  }

  /* =========================================================
     Điều khiển
     ========================================================= */
  async function onClick(e) {
    if (!P) return;
    const ln = e.target.closest('.sh-line');
    if (ln && !P.busy) { setIdx(+ln.dataset.i); return; }
    const rate = e.target.closest('[data-rate]');
    if (rate) {
      P.rate = +rate.dataset.rate;
      $('#sh-rate').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === rate));
      return;
    }
    const mode = e.target.closest('[data-mode]');
    if (mode) {
      if (P.busy) return;
      P.mode = mode.dataset.mode;
      $('#sh-mode').querySelectorAll('button').forEach((b) => b.classList.toggle('on', b === mode));
      hint();
      return;
    }
    const b = e.target.closest('[data-p]');
    if (!b || b.disabled) return;
    const k = b.dataset.p;
    if (k === 'play') doPlay();
    else if (k === 'rec') doRecord();
    else if (k === 'prev') { if (!P.busy) setIdx(P.idx - 1); }
    else if (k === 'next') { if (!P.busy) setIdx(P.idx + 1); }
    else if (k === 'replay') replay();
    else if (k === 'loadasr') loadAsr(b);
  }

  function replay() {
    const r = P.last[P.idx];
    if (!r || P.busy) return;
    if (P.replay) P.replay.pause();
    P.replay = new Audio(r.url);
    P.replay.play().catch(() => status('⚠️ Không phát được bản thu.'));
  }

  async function loadAsr(btn) {
    const lp = $('#sh-lp');
    btn.disabled = true;
    const off = ASR.onState((s) => { if (lp) lp.textContent = ` ${Math.round(s.progress * 100)}%`; });
    try {
      await ASR.load();
      off();
      engineNote();
      UI.toast('Đã bật chấm lời nói chính xác ✅');
    } catch (err) {
      off();
      btn.disabled = false;
      if (lp) lp.textContent = ' Không tải được: ' + err.message;
    }
  }

  document.addEventListener('keydown', (e) => {
    if (!P || e.ctrlKey || e.metaKey || e.altKey || UI.modalOpen()) return;
    if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || ''))) return;
    if (e.key === ' ') { e.preventDefault(); doPlay(); }
    else if (e.key === 'r' || e.key === 'R') doRecord();
    else if (e.key === 'ArrowLeft' && !P.busy) setIdx(P.idx - 1);
    else if (e.key === 'ArrowRight' && !P.busy) setIdx(P.idx + 1);
  });

  SH.renderPlayer = renderPlayer;
})();
