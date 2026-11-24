/* EngVui – Shadowing: màn danh sách clip và hộp thoại thêm clip (chọn đoạn video, tự tách lời) */
(function () {
  const U = EV.util;
  const UI = EV.ui;
  const esc = U.esc;
  const SH = EV.shadow;
  const SC = SH.score;
  const DB = SH.db;
  const ASR = SH.asr;
  const SR = SC.SR;

  /* ---------- tiện ích ---------- */
  const pad2 = (n) => (n < 10 ? '0' : '') + n;
  const fmtT = (s) => { s = Math.max(0, s || 0); const m = Math.floor(s / 60); return `${m}:${pad2(+(s - m * 60).toFixed(1))}`.replace(/(\.\d)$/, '$1'); };
  const fmtS = (s) => { s = Math.max(0, Math.round(s || 0)); return `${Math.floor(s / 60)}:${pad2(s % 60)}`; };
  function parseT(str) {
    const p = String(str).trim().replace(',', '.').split(':').map(Number);
    if (!p.length || p.some((x) => isNaN(x))) return NaN;
    return p.length === 1 ? p[0] : p.length === 2 ? p[0] * 60 + p[1] : p[0] * 3600 + p[1] * 60 + p[2];
  }
  const uid = () => 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const round3 = (x) => Math.round(x * 1000) / 1000;
  const mb = (n) => (n / 1048576 >= 10 ? Math.round(n / 1048576) : (n / 1048576).toFixed(1)) + ' MB';

  function encodeWav(x, sr) {
    const n = x.length;
    const buf = new ArrayBuffer(44 + n * 2);
    const v = new DataView(buf);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt ');
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, sr, true); v.setUint32(28, sr * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true);
    w(36, 'data'); v.setUint32(40, n * 2, true);
    for (let i = 0; i < n; i++) { const s = Math.max(-1, Math.min(1, x[i])); v.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true); }
    return new Blob([buf], { type: 'audio/wav' });
  }

  // Khi không nhận dạng được: chia đều thời gian theo độ dài chữ (kém chính xác hơn nhưng vẫn luyện được)
  function fallbackLines(text, start, end) {
    const sents = String(text).split(/\n+|(?<=[.!?…])\s+/).map((s) => s.trim()).filter(Boolean);
    const wt = sents.map((s) => Math.max(4, s.length));
    const tot = wt.reduce((a, b) => a + b, 0);
    let t = start;
    return sents.map((s, i) => {
      const d = (end - start) * wt[i] / tot;
      const words = SC.wordsFromText(s, t, t + d);
      const line = { text: s, s: round3(t), e: round3(t + d), words };
      t += d;
      return line;
    });
  }

  const avg = (a) => (a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : 0);
  const bestOf = (clip) => Object.values(clip.best || {}).map((b) => b.score);
  SH.h = { esc, fmtT, fmtS, parseT, uid, round3, mb, encodeWav, avg, bestOf };

  /* ---------- clip có sẵn (tùy chọn): audio/shadow/index.json ----------
     Đặt trong thư mục audio/ để quy trình triển khai GitHub Pages tự sao chép lên.
     Mỗi phần tử: { id, title, kind, src, start, end, lines: [{ text, s, e, words: [{ w, s, e }] }] } */
  async function loadBuiltins() {
    try {
      const r = await fetch('audio/shadow/index.json', { cache: 'no-cache' });
      if (!r.ok) return [];
      const list = await r.json();
      return Array.isArray(list) ? list.filter((c) => c && c.id && c.src && Array.isArray(c.lines)) : [];
    } catch (e) { return []; }
  }
  SH.loadBuiltins = loadBuiltins;

  /* =========================================================
     Màn danh sách
     ========================================================= */
  const route = () => location.hash.replace(/^#\/?/, '').split('/');

  function clipCard(c, builtin) {
    const b = bestOf(c);
    const done = (c.lines || []).length && b.length ? `${b.length}/${c.lines.length} câu · TB ${avg(b)} điểm` : `${(c.lines || []).length} câu`;
    return `<div class="sh-clip">
      <button class="sh-clip-main" data-open="${esc(c.id)}">
        <span class="sh-clip-ico">${c.kind === 'audio' ? '🎧' : '🎬'}</span>
        <span class="sh-clip-body"><b>${esc(c.title)}</b><small>${done}${c.end ? ' · ' + fmtS(c.end - (c.start || 0)) : ''}${builtin ? ' · Có sẵn' : ''}</small></span>
      </button>
      ${builtin ? '' : `<button class="sh-clip-del" data-del="${esc(c.id)}" title="Xóa clip" aria-label="Xóa clip">🗑</button>`}
    </div>`;
  }

  function engineCard() {
    const stt = ASR.state();
    const m = ASR.MODELS[ASR.modelKey()];
    const ready = ASR.wasReady() || stt.status === 'ready';
    return `<div class="card sh-engine" id="sh-engine">
      <div class="sh-engine-head"><b>${ready ? '✅ Chấm lời nói chính xác: đã bật' : '🎯 Bật chấm lời nói chính xác'}</b></div>
      <p class="muted small">${ready
    ? 'Mô hình nhận dạng giọng nói đã có trên máy, chạy hoàn toàn offline và không gửi giọng của bạn đi đâu.'
    : `Để chấm xem bạn đọc đúng từng từ và tự tách lời video, EngVui cần tải mô hình nhận dạng giọng nói một lần (${m.mb} MB). Chưa tải thì app vẫn chấm nhịp điệu và ngữ điệu.`}</p>
      ${ready ? '' : `<div class="sh-engine-row">
        <select id="sh-model" class="sh-select">${Object.keys(ASR.MODELS).map((k) => `<option value="${k}" ${k === ASR.modelKey() ? 'selected' : ''}>${esc(ASR.MODELS[k].label)}</option>`).join('')}</select>
        <button class="btn btn-primary btn-sm" data-act-sh="load">⬇ Tải mô hình</button></div>
        <div class="sh-bar" hidden><i></i></div><p class="muted small sh-engine-msg"></p>`}
    </div>`;
  }

  async function renderLibrary(main) {
    main.innerHTML = '<h1 class="page-title">Shadowing</h1><p class="muted">Đang tải…</p>';
    let mine = [];
    try { mine = await DB.list(); } catch (e) { /* trình duyệt không cho lưu */ }
    const builtins = await loadBuiltins();
    const r = route();
    if (r[0] !== 'shadow' || r[1]) return;   // người dùng đã chuyển trang trong lúc chờ
    const bi = builtins;
    main.innerHTML = `
      <h1 class="page-title">🎙️ Shadowing</h1>
      <p class="page-sub">Nghe một đoạn video, nhại theo từng câu như hát karaoke và nhận điểm về lời, nhịp điệu và ngữ điệu.</p>
      <div class="card sh-how">
        <div class="sh-steps">
          <div><span>1</span><b>Chọn clip</b><small>Video hoặc âm thanh của bạn, cắt đúng đoạn muốn luyện</small></div>
          <div><span>2</span><b>Tự tách lời</b><small>Máy nghe và gõ lời, đánh dấu từng từ theo thời gian</small></div>
          <div><span>3</span><b>Nhại theo</b><small>Từ nào sáng lên thì đọc từ đó, rồi xem điểm</small></div>
        </div>
        <button class="btn btn-primary btn-block" data-act-sh="add">➕ Thêm video / âm thanh của bạn</button>
        <p class="muted small center">Tệp chỉ lưu trong máy bạn, không tải lên đâu cả. Hãy dùng nội dung bạn có quyền sử dụng.</p>
      </div>
      ${engineCard()}
      <div class="section-head"><h2>Clip của bạn</h2><span class="muted">${mine.length} clip</span></div>
      <div class="sh-list">${mine.length ? mine.map((c) => clipCard(c, false)).join('') : '<div class="empty small"><p class="muted">Chưa có clip nào. Bấm “Thêm video / âm thanh của bạn” để bắt đầu.</p></div>'}</div>
      ${bi.length ? `<div class="section-head"><h2>Clip có sẵn</h2><span class="muted">${bi.length} clip</span></div>
        <div class="sh-list">${bi.map((c) => clipCard(mine.find((m) => m.id === c.id) || c, true)).join('')}</div>` : ''}`;
    main.onclick = (e) => onLibraryClick(e, main, builtins);
    const sel = main.querySelector('#sh-model');
    if (sel) sel.onchange = () => { ASR.pickModel(sel.value); };
  }

  async function onLibraryClick(e, main, builtins) {
    const open = e.target.closest('[data-open]');
    if (open) {
      const id = open.dataset.open;
      const b = builtins.find((c) => c.id === id);
      if (b && !(await DB.get(id).catch(() => null))) {
        try { await DB.save(Object.assign({ createdAt: Date.now(), best: {}, builtin: true }, b)); } catch (err) { /* vẫn mở được từ bản gốc */ }
      }
      location.hash = '#/shadow/' + encodeURIComponent(id);
      return;
    }
    const del = e.target.closest('[data-del]');
    if (del) {
      const ok = await UI.confirm({ mascot: 'sad', title: 'Xóa clip này?', text: 'Video/âm thanh và điểm luyện tập của clip sẽ bị xóa khỏi máy.', ok: 'Xóa', cancel: 'Giữ lại', danger: true });
      if (ok) { try { await DB.remove(del.dataset.del); } catch (err) { /* bỏ qua */ } renderLibrary(main); }
      return;
    }
    const act = e.target.closest('[data-act-sh]');
    if (!act) return;
    if (act.dataset.actSh === 'add') openImport(() => renderLibrary(main));
    if (act.dataset.actSh === 'load') loadEngine(main);
  }

  async function loadEngine(main) {
    const card = main.querySelector('#sh-engine');
    const bar = card.querySelector('.sh-bar');
    const msg = card.querySelector('.sh-engine-msg');
    const btn = card.querySelector('[data-act-sh="load"]');
    btn.disabled = true;
    bar.hidden = false;
    msg.textContent = 'Đang tải mô hình… cần kết nối mạng, chỉ một lần.';
    const off = ASR.onState((s) => { bar.firstElementChild.style.width = Math.round(s.progress * 100) + '%'; msg.textContent = `Đang tải mô hình… ${Math.round(s.progress * 100)}%`; });
    try {
      await ASR.load();
      off();
      UI.toast('Đã bật chấm lời nói chính xác ✅');
      card.outerHTML = engineCard();
    } catch (e) {
      off();
      btn.disabled = false;
      msg.textContent = 'Không tải được: ' + e.message + ' Kiểm tra mạng rồi thử lại.';
    }
  }

  /* =========================================================
     Hộp thoại thêm clip
     ========================================================= */
  function openImport(onDone) {
    const W = { file: null, url: '', kind: 'video', dur: 0, title: '', text: '', model: ASR.modelKey(), keep: true, cancelled: false, full: null, lines: [], note: '' };
    let body = null;
    let closeModal = null;
    const $ = (s) => body.querySelector(s);

    UI.modal({
      full: true,
      className: 'sh-modal',
      html: '<div id="sh-wiz"></div>',
      onMount(b, close) { body = b.querySelector('#sh-wiz'); closeModal = close; step1(); },
      onClose() { W.cancelled = true; if (W.url) URL.revokeObjectURL(W.url); if (ASR.state().status === 'loading') ASR.terminate(); },
    });

    /* ----- bước 1: chọn tệp và đoạn ----- */
    function step1() {
      body.innerHTML = `
        <h2 class="sh-wiz-title">➕ Thêm clip luyện Shadowing</h2>
        <label class="btn btn-outline btn-block sh-pick">📁 ${W.file ? 'Đổi tệp khác' : 'Chọn video hoặc file âm thanh'}<input type="file" id="w-file" accept="video/*,audio/*" hidden></label>
        <div id="w-prev" ${W.file ? '' : 'hidden'}>
          <video id="w-v" class="sh-wv" controls playsinline preload="metadata" ${W.kind === 'audio' ? 'style="max-height:60px"' : ''}></video>
          <p class="muted small" id="w-info"></p>
          <div class="sh-range">
            <div class="sh-rfield"><label for="w-s">Bắt đầu</label><input id="w-s" inputmode="decimal" value="0:00"><button class="btn btn-outline btn-sm" data-w="set-s">⏱ Lấy giờ hiện tại</button></div>
            <div class="sh-rfield"><label for="w-e">Kết thúc</label><input id="w-e" inputmode="decimal" value=""><button class="btn btn-outline btn-sm" data-w="set-e">⏱ Lấy giờ hiện tại</button></div>
          </div>
          <div class="sh-rrow"><button class="btn btn-outline btn-sm" data-w="try">▶ Nghe thử đoạn đã chọn</button><span class="muted small" id="w-len"></span></div>
          <label class="sh-lbl" for="w-title">Tên clip</label>
          <input id="w-title" class="sh-input" maxlength="80" placeholder="Ví dụ: Giới thiệu bản thân" value="${esc(W.title)}">
          <details class="sh-more"><summary>Đã có lời hoặc phụ đề? (không bắt buộc)</summary>
            <p class="muted small">Dán lời chuẩn để sửa lỗi nghe nhầm, hoặc dán/chọn phụ đề .srt/.vtt để dùng luôn mốc thời gian có sẵn (không cần nhận dạng giọng nói).</p>
            <textarea id="w-text" class="sh-input" rows="4" placeholder="Dán lời tại đây…">${esc(W.text)}</textarea>
            <label class="btn btn-outline btn-sm sh-pick2">📄 Chọn tệp phụ đề<input type="file" id="w-subs" accept=".srt,.vtt,.txt,text/plain" hidden></label>
          </details>
          <div class="sh-modelrow">
            <label class="sh-lbl" for="w-model">Độ chính xác khi tách lời</label>
            <select id="w-model" class="sh-select">${Object.keys(ASR.MODELS).map((k) => `<option value="${k}" ${k === W.model ? 'selected' : ''}>${esc(ASR.MODELS[k].label)}</option>`).join('')}</select>
            <small class="muted">${ASR.wasReady() ? 'Mô hình đã có trên máy, chạy offline.' : 'Lần đầu cần mạng để tải mô hình, các lần sau dùng offline.'}</small>
          </div>
          <label class="sh-check"><input type="checkbox" id="w-keep" ${W.keep ? 'checked' : ''}> Giữ cả hình ảnh video <small class="muted">(chiếm dung lượng bằng tệp gốc; bỏ chọn để chỉ lưu âm thanh của đoạn đã cắt, rất nhẹ)</small></label>
          <button class="btn btn-primary btn-block" data-w="go">🪄 Tự động tách lời</button>
        </div>`;
      const v = $('#w-v');
      if (W.file) { v.src = W.url; fillInfo(); }
      $('#w-file').onchange = (e) => onFile(e.target.files[0]);
      if (!W.file) return;
      v.onloadedmetadata = () => { W.dur = isFinite(v.duration) ? v.duration : 0; if (!$('#w-e').value) $('#w-e').value = fmtT(Math.min(W.dur || 60, 60)); fillInfo(); updateLen(); };
      $('#w-subs').onchange = async (e) => { const f = e.target.files[0]; if (f) { $('#w-text').value = await f.text(); W.text = $('#w-text').value; } };
      ['w-s', 'w-e'].forEach((id) => { $('#' + id).oninput = updateLen; });
      $('#w-model').onchange = (e) => { W.model = e.target.value; ASR.pickModel(W.model); };
      body.onclick = (e) => {
        const b = e.target.closest('[data-w]');
        if (!b) return;
        const k = b.dataset.w;
        if (k === 'set-s') { $('#w-s').value = fmtT(v.currentTime); updateLen(); }
        if (k === 'set-e') { $('#w-e').value = fmtT(v.currentTime); updateLen(); }
        if (k === 'try') tryRange(v);
        if (k === 'go') go();
      };
      updateLen();
    }
    function onFile(f) {
      if (!f) return;
      if (W.url) URL.revokeObjectURL(W.url);
      W.file = f;
      W.url = URL.createObjectURL(f);
      W.kind = /^audio\//.test(f.type) || /\.(mp3|wav|m4a|aac|ogg|flac)$/i.test(f.name) ? 'audio' : 'video';
      W.title = W.title || f.name.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').slice(0, 80);
      W.full = null;
      W.keep = f.size < 150 * 1048576 && W.kind === 'video';
      step1();
    }
    function fillInfo() {
      const i = $('#w-info');
      if (i) i.textContent = `${W.file.name} · ${mb(W.file.size)}${W.dur ? ' · dài ' + fmtS(W.dur) : ''}`;
    }
    function range() {
      const s = parseT($('#w-s').value);
      let e = parseT($('#w-e').value);
      if (isNaN(e)) e = W.dur;
      return { s, e };
    }
    function updateLen() {
      const { s, e } = range();
      const len = e - s;
      const el = $('#w-len');
      if (!el) return;
      el.textContent = isNaN(len) || len <= 0 ? 'Thời gian chưa hợp lệ' : `Đoạn dài ${fmtS(len)}${len > 120 ? ' (nên chọn ngắn hơn 2 phút để luyện hiệu quả)' : ''}`;
      el.classList.toggle('warn', isNaN(len) || len <= 0 || len > 300);
    }
    function tryRange(v) {
      const { s, e } = range();
      if (isNaN(s) || isNaN(e) || e <= s) return;
      v.currentTime = s;
      v.play();
      const stop = () => { if (v.currentTime >= e) { v.pause(); v.removeEventListener('timeupdate', stop); } };
      v.addEventListener('timeupdate', stop);
    }

    /* ----- bước 2: xử lý ----- */
    async function go() {
      const { s, e } = range();
      W.title = ($('#w-title').value || '').trim() || 'Clip của tôi';
      W.text = $('#w-text').value;
      W.keep = $('#w-keep').checked;
      if (isNaN(s) || isNaN(e) || e - s < 1) { UI.toast('Hãy chọn đoạn dài ít nhất 1 giây', 'warn'); return; }
      if (e - s > 300) { UI.toast('Đoạn quá dài. Hãy chọn tối đa 5 phút', 'warn'); return; }
      W.start = s;
      W.end = e;
      body.innerHTML = `<h2 class="sh-wiz-title">🪄 Đang chuẩn bị clip</h2>
        <div class="sh-prog"><div class="sh-bar big"><i style="width:4%"></i></div><p class="sh-prog-msg">Đang đọc âm thanh…</p><p class="muted small sh-prog-sub">Việc này chạy trên máy bạn nên có thể mất vài chục giây. Vui lòng giữ màn hình này mở.</p></div>
        <button class="btn btn-outline btn-block" data-w="cancel">Hủy</button>`;
      body.onclick = (ev) => { if (ev.target.closest('[data-w="cancel"]')) closeModal(); };
      const set = (msg, p) => {
        if (W.cancelled) return;
        const m = body.querySelector('.sh-prog-msg');
        if (m) m.textContent = msg;
        if (p != null) { const b = body.querySelector('.sh-bar i'); if (b) b.style.width = Math.max(4, Math.round(p * 100)) + '%'; }
      };
      try {
        if (!W.full) W.full = await ASR.decodeBlob(W.file);
        if (W.cancelled) return;
        const seg = W.full.subarray(Math.floor(s * SR), Math.min(W.full.length, Math.floor(e * SR)));
        if (seg.length < SR * 0.5) throw new Error('Đoạn đã chọn nằm ngoài độ dài của tệp.');
        const txt = W.text.trim();
        let lines = null;
        W.note = '';
        if (/-->/.test(txt)) {
          set('Đang đọc phụ đề…', 0.9);
          lines = SC.parseSubs(txt).filter((c) => c.e > s - 0.2 && c.s < e + 0.2)
            .map((c) => { const cs = Math.max(c.s, s); const ce = Math.min(c.e, e); return { text: c.text, s: round3(cs), e: round3(ce), words: SC.wordsFromText(c.text, cs, ce) }; });
          if (!lines.length) throw new Error('Phụ đề không có câu nào nằm trong đoạn đã chọn.');
          W.note = 'Mốc thời gian từng từ được chia đều theo độ dài chữ trong mỗi câu phụ đề.';
        } else {
          try {
            set(ASR.wasReady() ? 'Đang nạp mô hình nhận dạng…' : `Đang tải mô hình nhận dạng (${ASR.MODELS[W.model].mb} MB, chỉ một lần)…`, 0.05);
            const off = ASR.onState((st) => { if (st.status === 'loading') set(`Đang tải mô hình nhận dạng… ${Math.round(st.progress * 100)}%`, 0.05 + st.progress * 0.55); });
            try { await ASR.load(W.model); } finally { off(); }
            if (W.cancelled) return;
            set('Đang nghe và tách lời…', 0.65);
            const r = await ASR.transcribe(seg);
            if (W.cancelled) return;
            if (!r.words.length) throw new Error('Không nghe thấy lời nói nào trong đoạn này.');
            let words = r.words;
            if (txt) words = SC.retime(txt, r.words);
            lines = SC.buildLines(words.map((w) => ({ w: w.w, s: round3(w.s + s), e: round3(w.e + s) })));
          } catch (err) {
            if (!txt) throw err;
            lines = fallbackLines(txt, s, e);
            W.note = 'Không chạy được nhận dạng giọng nói (' + err.message + '). Thời gian được chia đều theo độ dài chữ, bạn có thể nghe thử từng câu bên dưới.';
          }
        }
        W.lines = lines;
        if (!W.cancelled) step3();
      } catch (err) {
        if (W.cancelled) return;
        body.innerHTML = `<h2 class="sh-wiz-title">Chưa làm được</h2><div class="notice">${esc(err.message)}</div>
          <button class="btn btn-primary btn-block" data-w="back">← Quay lại</button>`;
        body.onclick = (ev) => { if (ev.target.closest('[data-w="back"]')) step1(); };
      }
    }

    /* ----- bước 3: xem và sửa lời ----- */
    function step3() {
      const rows = () => W.lines.map((l, i) => `<div class="sh-erow" data-i="${i}">
          <button class="sh-mini" data-w="play" title="Nghe câu này">▶</button>
          <span class="sh-et">${fmtT(l.s)}</span>
          <input class="sh-etext" value="${esc(l.text)}" aria-label="Lời câu ${i + 1}">
          <button class="sh-mini" data-w="merge" title="Gộp với câu dưới" ${i === W.lines.length - 1 ? 'disabled' : ''}>⤵</button>
          <button class="sh-mini" data-w="del" title="Xóa câu">✕</button></div>`).join('');
      body.innerHTML = `<h2 class="sh-wiz-title">✏️ Kiểm tra lời</h2>
        <p class="muted small">Máy tách được <b>${W.lines.length}</b> câu. Hãy nghe thử và sửa lỗi chính tả nếu có (sửa chữ xong, thời gian từng từ sẽ được chia lại).</p>
        ${W.note ? `<div class="notice small">${esc(W.note)}</div>` : ''}
        <video id="w-pv" class="sh-wv" playsinline preload="auto" style="${W.kind === 'audio' ? 'display:none' : 'max-height:140px'}"></video>
        <div class="sh-elist" id="w-list">${rows()}</div>
        <div class="sh-wiz-foot"><button class="btn btn-outline" data-w="back">← Chọn lại đoạn</button><button class="btn btn-primary" data-w="save" ${W.lines.length ? '' : 'disabled'}>💾 Lưu và luyện ngay</button></div>`;
      const pv = $('#w-pv');
      pv.src = W.url;
      let stopAt = 0;
      pv.ontimeupdate = () => { if (stopAt && pv.currentTime >= stopAt) { pv.pause(); stopAt = 0; } };
      const redraw = () => { $('#w-list').innerHTML = rows(); $('[data-w="save"]').disabled = !W.lines.length; };
      body.onchange = (e) => {
        const inp = e.target.closest('.sh-etext');
        if (!inp) return;
        const i = +inp.closest('.sh-erow').dataset.i;
        const t = inp.value.trim();
        if (!t) { W.lines.splice(i, 1); redraw(); return; }
        W.lines[i] = SC.retimeLine(W.lines[i], t);
      };
      body.onclick = async (e) => {
        const b = e.target.closest('[data-w]');
        if (!b) return;
        const k = b.dataset.w;
        const i = b.closest('.sh-erow') ? +b.closest('.sh-erow').dataset.i : -1;
        if (k === 'play') { const l = W.lines[i]; pv.currentTime = l.s; stopAt = l.e; pv.play(); }
        if (k === 'del') { W.lines.splice(i, 1); redraw(); }
        if (k === 'merge') {
          const a = W.lines[i], n = W.lines[i + 1];
          W.lines.splice(i, 2, { text: a.text + ' ' + n.text, s: a.s, e: n.e, words: a.words.concat(n.words) });
          redraw();
        }
        if (k === 'back') step1();
        if (k === 'save') save(b);
      };
    }

    /* ----- lưu ----- */
    async function save(btn) {
      btn.disabled = true;
      btn.textContent = 'Đang lưu…';
      try {
        const keepVideo = W.keep && W.kind === 'video';
        const shift = keepVideo ? 0 : W.start;
        const lines = W.lines.filter((l) => l.text.trim()).map((l) => {
          const a = Math.max(0, Math.floor(l.s * SR)), z = Math.min(W.full.length, Math.ceil(l.e * SR));
          const ref = SC.describe(W.full.subarray(a, z));
          const out = { text: l.text.trim(), s: round3(l.s - shift), e: round3(l.e - shift), words: l.words.map((w) => ({ w: w.w, s: round3(w.s - shift), e: round3(w.e - shift) })) };
          if (ref) out.ref = ref;
          return out;
        });
        let blob = W.file;
        if (!keepVideo) blob = encodeWav(W.full.subarray(Math.floor(W.start * SR), Math.min(W.full.length, Math.floor(W.end * SR))), SR);
        const meta = {
          id: uid(), title: W.title, kind: keepVideo ? 'video' : 'audio', createdAt: Date.now(),
          start: keepVideo ? round3(W.start) : 0, end: keepVideo ? round3(W.end) : round3(W.end - W.start), lines, best: {},
        };
        await DB.save(meta, blob);
        DB.persist();
        W.cancelled = true;
        closeModal();
        if (onDone) onDone();
        location.hash = '#/shadow/' + meta.id;
      } catch (err) {
        btn.disabled = false;
        btn.textContent = '💾 Lưu và luyện ngay';
        UI.toast('Không lưu được: ' + (err.message || err), 'warn');
      }
    }
  }

  SH.openImport = openImport;
  SH.renderLibrary = renderLibrary;

  /* ---------- đăng ký màn hình ---------- */
  function renderShadow(main) {
    if (SH.leave) SH.leave();
    const r = route();
    if (r[1] && SH.renderPlayer) { SH.renderPlayer(main, decodeURIComponent(r[1])); return; }
    main.onclick = null;
    renderLibrary(main);
  }
  EV.screens.render.shadow = renderShadow;
})();
