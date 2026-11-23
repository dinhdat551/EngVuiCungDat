/* EngVui – tiện ích dùng chung */
(function () {
  const U = {};

  U.$ = (sel, root = document) => root.querySelector(sel);
  U.$$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  U.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  U.frag = (html) => {
    const t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };

  /* ---------- ngẫu nhiên ---------- */
  U.randInt = (a, b, rng = Math.random) => a + Math.floor(rng() * (b - a + 1));
  U.shuffle = (arr, rng = Math.random) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  U.pick = (arr, rng = Math.random) => arr[Math.floor(rng() * arr.length)];
  U.sample = (arr, n, rng = Math.random) => U.shuffle(arr, rng).slice(0, n);
  U.uniqBy = (arr, fn) => {
    const seen = new Set();
    return arr.filter((x) => {
      const k = fn(x);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  };
  U.hash = (str) => {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  };
  // mulberry32 – bộ sinh số ngẫu nhiên có hạt giống (để bảng xếp hạng, nhiệm vụ ổn định theo ngày/tuần)
  U.seeded = (seed) => {
    let a = typeof seed === 'number' ? seed : U.hash(String(seed));
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };

  /* ---------- ngày giờ (giờ địa phương) ---------- */
  const pad = (n) => String(n).padStart(2, '0');
  U.dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  U.parseDay = (k) => {
    const [y, m, d] = k.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  U.dayDiff = (a, b) => Math.round((U.parseDay(b) - U.parseDay(a)) / 86400000);
  U.addDays = (k, n) => {
    const d = U.parseDay(k);
    d.setDate(d.getDate() + n);
    return U.dayKey(d);
  };
  U.weekStart = (d = new Date()) => {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); // thứ Hai
    return x;
  };
  U.weekId = (d = new Date()) => U.dayKey(U.weekStart(d));
  U.fmtNum = (n) => Math.round(n).toLocaleString('vi-VN');
  U.fmtClock = (ms) => {
    const s = Math.max(0, Math.round(ms / 1000));
    return `${Math.floor(s / 60)}:${pad(s % 60)}`;
  };
  U.fmtDuration = (ms) => {
    const m = Math.max(0, Math.ceil(ms / 60000));
    if (m < 60) return `${m} phút`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h} giờ ${m % 60 ? (m % 60) + ' phút' : ''}`.trim();
    const d = Math.floor(h / 24);
    return `${d} ngày ${h % 24 ? (h % 24) + ' giờ' : ''}`.trim();
  };
  U.clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  /* ---------- xử lý văn bản tiếng Anh ---------- */
  const CONTRACTIONS = [
    [/\bi'm\b/g, 'i am'], [/\bcan't\b/g, 'cannot'], [/\bwon't\b/g, 'will not'], [/\bshan't\b/g, 'shall not'],
    [/\blet's\b/g, 'let us'],
    [/\b(he|she|it|that|what|where|who|there|here|how|when|this)'s\b/g, '$1 is'],
    [/\b([a-z]+)n't\b/g, '$1 not'],
    [/\b([a-z]+)'ll\b/g, '$1 will'], [/\b([a-z]+)'ve\b/g, '$1 have'],
    [/\b([a-z]+)'d\b/g, '$1 would'], [/\b([a-z]+)'re\b/g, '$1 are'],
    [/\bcan not\b/g, 'cannot'],
  ];
  // Chuẩn hóa để so sánh đáp án: bỏ dấu câu, chữ thường, mở rộng dạng viết tắt.
  U.norm = (s) => {
    let t = String(s == null ? '' : s).normalize('NFC').toLowerCase()
      .replace(/[‘’`´]/g, "'");
    t = t.replace(/[^\p{L}\p{N}' ]+/gu, ' ');
    t = t.replace(/(^|\s)'+/g, '$1').replace(/'+(?=\s|$)/g, '');
    CONTRACTIONS.forEach(([re, rep]) => { t = t.replace(re, rep); });
    return t.replace(/\s+/g, ' ').trim();
  };
  // Tách câu thành các cụm {pre, core, post} để giữ dấu câu khi hiển thị.
  U.chunks = (s) => {
    const out = [];
    String(s).replace(/[‘’]/g, "'").split(/\s+/).filter(Boolean).forEach((raw) => {
      const m = raw.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);
      const pre = m[1] || '';
      const core = m[2] || '';
      const post = m[3] || '';
      if (!core) {
        if (out.length) out[out.length - 1].post += raw;
        return;
      }
      out.push({ pre, core, post });
    });
    return out;
  };
  U.tokenize = (s) => U.chunks(s).map((c) => c.core);
  // Tên riêng nhiều chữ (Ho Chi Minh City, Hoan Kiem Lake, Mr Long) đi liền thành một cụm, không tách thẻ.
  // Nhận kết quả của U.chunks, trả về [{ from, to }] (chỉ số cụm) cho mỗi tên gồm từ 2 chữ trở lên.
  const NAME_STOP = new Set(['the', 'a', 'an', 'is', 'are', 'was', 'were', 'do', 'does', 'did', 'can', 'could', 'will',
    'would', 'should', 'may', 'must', 'shall', 'have', 'has', 'while', 'when', 'if', 'both', 'neither', 'either', 'his',
    'her', 'my', 'your', 'our', 'their', 'its', 'this', 'that', 'these', 'those', 'there', 'here', 'what', 'who', 'where',
    'why', 'how', 'which', 'whose', 'hello', 'hi', 'dear', 'thank', 'thanks', 'please', 'let', 'yes', 'no', 'sorry',
    'good', 'nice', 'and', 'but', 'so', 'because', 'after', 'before', 'learning', 'today', 'tomorrow', 'yesterday',
    'on', 'in', 'at', 'for', 'from', 'to', 'with', 'you', 'he', 'she', 'it', 'we', 'they']);
  const NAME_CONTRACTION = /^(it|that|what|who|he|she|there|here|where|how|when|this|they|we|you|i|let)'(s|re|ll|ve|d|m)$|n't$/i;
  const isNameWord = (c) => /^\p{Lu}/u.test(c.core) && c.core !== 'I' && !NAME_CONTRACTION.test(c.core);
  U.nameGroups = (ch) => {
    const out = [];
    for (let i = 0; i < ch.length;) {
      if (!isNameWord(ch[i])) { i++; continue; }
      let j = i;
      while (j + 1 < ch.length && !ch[j].post && !ch[j + 1].pre && isNameWord(ch[j + 1])) j++;
      let a = i;
      // Bỏ các chữ thường gặp đứng đầu câu (Is Nam, While Mai, The Moon); "Can Gio" là tên riêng nên giữ
      if (!/^Can Gio\b/.test(ch.slice(i, j + 1).map((c) => c.core).join(' '))) {
        while (a < j && NAME_STOP.has(ch[a].core.toLowerCase())) a++;
      }
      if (j > a) out.push({ from: a, to: j });
      i = j + 1;
    }
    return out;
  };
  U.lev = (a, b) => {
    if (a === b) return 0;
    const m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    let prev = new Array(n + 1);
    for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  };
  // So sánh câu trả lời tự gõ, cho phép lỗi chính tả rất nhỏ.
  U.gradeText = (input, target, strict) => {
    const a = U.norm(input), b = U.norm(target);
    if (!a) return { ok: false };
    if (a === b) return { ok: true };
    const tol = strict
      ? (b.length >= 7 ? 1 : 0)
      : (b.length <= 4 ? 0 : b.length <= 12 ? 1 : Math.min(3, Math.floor(b.length / 12)));
    const d = U.lev(a, b);
    if (d <= tol) return { ok: true, typo: true };
    return { ok: false };
  };

  // Hai từ chỉ khác nhau do đảo hai chữ cái liền nhau (shcool / school)
  const swapped = (x, y) => {
    if (x.length !== y.length) return false;
    const d = [];
    for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) d.push(i);
    return d.length === 2 && d[1] === d[0] + 1 && x[d[0]] === y[d[1]] && x[d[1]] === y[d[0]];
  };
  // Chấm câu tự gõ ở bài ngữ pháp: so từng từ. Chỉ bỏ qua 1 lỗi gõ nhầm trong một từ từ 4 chữ cái,
  // và không bỏ qua khác biệt ở đuôi từ (read/reads, play/played) vì đó chính là điểm ngữ pháp.
  U.gradeGrammar = (input, target) => {
    const a = U.norm(input).split(' ').filter(Boolean), b = U.norm(target).split(' ').filter(Boolean);
    if (!a.length || a.length !== b.length) return { ok: false };
    let typos = 0;
    for (let i = 0; i < a.length; i++) {
      const x = a[i], y = b[i];
      if (x === y) continue;
      if (Math.min(x.length, y.length) < 4 || x.startsWith(y) || y.startsWith(x)) return { ok: false };
      if (U.lev(x, y) > 1 && !swapped(x, y)) return { ok: false };
      typos++;
    }
    if (typos > 1) return { ok: false };
    return typos ? { ok: true, typo: true } : { ok: true };
  };

  U.debounce = (fn, ms) => {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  };

  EV.util = U;
})();
