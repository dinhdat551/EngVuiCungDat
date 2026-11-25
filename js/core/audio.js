/* EngVui – âm thanh: hiệu ứng (Web Audio), đọc tiếng Anh (Speech Synthesis), nhận giọng nói (Speech Recognition) */
(function () {
  const settings = () => EV.store.state.settings;

  /* ---------- hiệu ứng âm thanh tổng hợp, không cần file ---------- */
  let ctx = null;
  function ac() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(freq, at, dur, type, vol, slideTo) {
    const c = ac();
    if (!c) return;
    const t0 = c.currentTime + at;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol || 0.15, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(c.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.05);
  }
  const SFX = {
    correct() { tone(784, 0, 0.12, 'triangle', 0.18); tone(1175, 0.09, 0.28, 'triangle', 0.18); },
    wrong() { tone(233, 0, 0.16, 'square', 0.06, 196); tone(174, 0.13, 0.28, 'square', 0.06, 131); },
    tap() { tone(660, 0, 0.05, 'sine', 0.06); },
    match() { tone(988, 0, 0.09, 'triangle', 0.12); tone(1319, 0.06, 0.12, 'triangle', 0.1); },
    mismatch() { tone(196, 0, 0.14, 'square', 0.05); },
    combo() { [880, 1109, 1319].forEach((f, i) => tone(f, i * 0.06, 0.14, 'triangle', 0.12)); },
    complete() {
      [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.11, 0.26, 'triangle', 0.16));
      tone(1319, 0.46, 0.55, 'triangle', 0.14);
      tone(784, 0.46, 0.55, 'sine', 0.08);
    },
    chest() { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, i * 0.07, 0.2, 'sine', 0.12)); },
    fail() { [392, 330, 262].forEach((f, i) => tone(f, i * 0.16, 0.3, 'triangle', 0.13)); },
    claim() { tone(1047, 0, 0.1, 'triangle', 0.12); tone(1568, 0.08, 0.2, 'triangle', 0.12); },
  };
  function sfx(name) {
    if (!settings().sound) return;
    try { if (SFX[name]) SFX[name](); } catch (e) { /* bỏ qua */ }
  }

  /* ---------- đọc tiếng Anh bằng file có sẵn (thư mục audio/) ----------
     Các gói zip do tools/gen_audio.py tạo từ giọng Windows, nên mọi thiết bị đều nghe giống nhau.
     audio/index.json cho biết chữ nào nằm trong gói nào. Gói chỉ được tải khi cần và chỉ giữ tối đa
     MAX_PACKS gói trong bộ nhớ, để điện thoại không bị nặng. Chữ nào không có thì dùng giọng của máy. */
  const PACK_DIR = 'audio/';
  const MAX_PACKS = 3;
  const WAIT_MS = 4000;            // chờ gói tải tối đa bấy lâu, quá thì chuyển sang giọng của máy
  let index = null;                // { packs: [tên gói], k: { chữ: "số gói:số file" } }
  let indexLoading = null;
  const packs = {};                // số gói -> { zip, urls: { số file: blob URL }, used }
  const packLoads = {};            // số gói -> Promise đang tải
  let player = null;
  let reqId = 0;                   // mỗi lần đọc/dừng tăng lên để bỏ yêu cầu cũ còn đang chờ tải
  let loadingFor = 0;              // mã yêu cầu đang chờ gói âm thanh tải xong (để biết là sắp có tiếng)
  const packKey = (t) => String(t).trim().toLowerCase();

  function loadIndex() {
    if (index) return Promise.resolve(index);
    if (indexLoading) return indexLoading;
    if (typeof JSZip === 'undefined' || typeof fetch !== 'function') return Promise.resolve(null);
    indexLoading = fetch(PACK_DIR + 'index.json')
      .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then((j) => { index = j; return index; })
      .catch(() => { indexLoading = null; return null; });
    return indexLoading;
  }
  function evictPacks(keep) {
    const ids = Object.keys(packs);
    while (ids.length > MAX_PACKS) {
      const oldest = ids.filter((i) => i !== String(keep)).sort((a, b) => packs[a].used - packs[b].used)[0];
      if (oldest === undefined) break;
      Object.values(packs[oldest].urls).forEach((u) => URL.revokeObjectURL(u));
      delete packs[oldest];
      ids.splice(ids.indexOf(oldest), 1);
    }
  }
  function loadPackFile(pi) {
    if (packs[pi]) { packs[pi].used = Date.now(); return Promise.resolve(packs[pi]); }
    if (packLoads[pi]) return packLoads[pi];
    packLoads[pi] = fetch(PACK_DIR + index.packs[pi] + '.zip')
      .then((r) => { if (!r.ok) throw new Error('HTTP ' + r.status); return r.arrayBuffer(); })
      .then((buf) => JSZip.loadAsync(buf))
      .then((zip) => {
        delete packLoads[pi];
        packs[pi] = { zip, urls: {}, used: Date.now() };
        evictPacks(pi);
        return packs[pi];
      })
      .catch(() => { delete packLoads[pi]; return null; });
    return packLoads[pi];
  }
  function clipUrl(p, file) {
    p.used = Date.now();
    if (p.urls[file]) return Promise.resolve(p.urls[file]);
    const f = p.zip.file(file + '.mp3');
    if (!f) return Promise.resolve(null);
    return f.async('blob').then((b) => {
      p.urls[file] = URL.createObjectURL(new Blob([b], { type: 'audio/mpeg' }));
      return p.urls[file];
    });
  }
  function playUrl(url, o) {
    if (!player) player = new Audio();
    player.pause();
    player.src = url;
    player.playbackRate = o.slow ? 0.75 : 1;
    player.onended = o.onend || null;
    const p = player.play();
    if (p && typeof p.catch === 'function') p.catch(() => { /* bỏ qua: trình duyệt chặn tự phát */ });
  }
  // iPhone/Safari chỉ cho phát tiếng khi có thao tác chạm. Mở khóa sẵn phần tử audio ở lần chạm đầu tiên
  // để các lần phát sau (sau khi gói tải xong) vẫn được phép.
  const SILENT = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
  let primed = false;
  function prime() {
    if (primed) return;
    primed = true;
    try {
      if (!player) player = new Audio();
      player.src = SILENT;
      const p = player.play();
      if (p && typeof p.catch === 'function') p.catch(() => { /* bỏ qua */ });
    } catch (e) { /* bỏ qua */ }
  }
  ['pointerdown', 'touchend', 'click', 'keydown'].forEach((ev) => document.addEventListener(ev, prime, { capture: true, passive: true }));

  // true nếu chữ này có trong gói (sẽ tự phát khi tải xong, hoặc chuyển sang giọng máy nếu chờ quá lâu)
  function speakPacked(text, o, id) {
    if (!index) { loadIndex(); return false; }
    const hit = index.k[packKey(text)];
    if (!hit) return false;
    const [pi, file] = hit.split(':');
    let settled = false;
    const fallback = () => {
      if (settled) return;
      settled = true;
      if (id === reqId) speakSynth(text, o);
    };
    const timer = setTimeout(fallback, WAIT_MS);
    loadingFor = id;
    loadPackFile(Number(pi)).then((p) => {
      if (settled) return null;
      if (!p) { clearTimeout(timer); fallback(); return null; }
      return clipUrl(p, file).then((url) => {
        clearTimeout(timer);
        if (loadingFor === id) loadingFor = 0;
        if (settled) return;
        settled = true;
        if (id !== reqId) return;
        if (url) playUrl(url, o); else speakSynth(text, o);
      });
    });
    return true;
  }
  // Báo trước các gói sắp dùng để tải sẵn (gọi khi bắt đầu bài học). Tối đa 2 gói mỗi lần.
  function warm(list) {
    if (!index) { loadIndex().then(() => { if (index) warm(list); }); return; }
    const want = [];
    (list || []).forEach((t) => {
      const hit = t && index.k[packKey(t)];
      if (hit && !want.includes(Number(hit.split(':')[0]))) want.push(Number(hit.split(':')[0]));
    });
    want.slice(0, 2).forEach((pi) => { if (!packs[pi]) loadPackFile(pi); });
  }

  /* ---------- bài nghe nhiều người nói (Nghe hiểu) ----------
     Mỗi bài nghe là một file mp3 ghép sẵn nhiều giọng, tên trong index.json là mã "#l:<chủ đề>:<số>".
     Nếu gói chưa tải được thì đọc từng câu bằng giọng của máy, luân phiên giọng theo người nói. */
  const CLIP_WAIT_MS = 15000;      // gói nghe hiểu lớn hơn nên chờ lâu hơn
  function clip(key, o) {
    o = o || {};
    const id = ++reqId;
    if (player) player.pause();
    if (synth) { clearTimeout(speakTimer); synth.cancel(); }
    const run = () => {
      if (id !== reqId) return;
      const hit = index && index.k[packKey(key)];
      if (!hit) { speakLines(o); return; }
      const [pi, file] = hit.split(':');
      let settled = false;
      const timer = setTimeout(() => { if (!settled) { settled = true; if (id === reqId) speakLines(o); } }, CLIP_WAIT_MS);
      loadPackFile(Number(pi)).then((p) => {
        if (settled) return null;
        if (!p) { clearTimeout(timer); settled = true; if (id === reqId) speakLines(o); return null; }
        return clipUrl(p, file).then((url) => {
          clearTimeout(timer);
          if (settled) return;
          settled = true;
          if (id !== reqId) return;
          if (url) playUrl(url, o); else speakLines(o);
        });
      });
    };
    if (index) run(); else loadIndex().then(run);
    return true;
  }

  /* ---------- đọc tiếng Anh ---------- */
  const synth = window.speechSynthesis || null;
  let voices = [];
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter((v) => /^en([-_]|$)/i.test(v.lang));
  }
  if (synth) {
    loadVoices();
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', loadVoices);
    else synth.onvoiceschanged = loadVoices;
  }
  const PREFERRED = [
    /Microsoft (Ava|Emma|Jenny|Aria|Andrew|Brian|Guy|Ana).*Natural/i,
    /Google US English/i,
    /Samantha/i,
    /Microsoft Zira/i,
    /Google UK English Female/i,
    /Microsoft (David|Mark)/i,
  ];
  function pickVoice() {
    const want = settings().voice;
    if (want) {
      const v = voices.find((x) => x.voiceURI === want || x.name === want);
      if (v) return v;
    }
    for (const re of PREFERRED) {
      const v = voices.find((x) => re.test(x.name));
      if (v) return v;
    }
    return voices.find((x) => /en[-_]US/i.test(x.lang)) || voices[0] || null;
  }
  // Chữ viết tắt mà giọng đọc hay đọc thành từ (IT → "it", US → "us") → tách chữ cái để đánh vần.
  const SPELL = /\b(IT|US|PE|CV|DIY|WTO|AI|VR|AR|PC|OS|UI|UX|API|HTML|CSS|URL|HTTP|HTTPS|SQL|VPN|LAN|WAN|SSD|HDD|USB|CPU|GPU|DNS|DHCP|VLAN|SSL|TLS|CDN|SEO|IDE|XML|XSS|CSRF|MQTT|HDMI|NFT|DDoS|SDK|GPS|GPIO|ADC|PWM|UART|SPI|IDS|IPS|SBOM|WPA|SSID|QoS|FYI|IoT|CORS|OOP|RFID|LED|DOM|GDPR|NPC|DeFi)\b/g;
  const spellOut = (s) => String(s).replace(SPELL, (m) => m.toUpperCase().split('').join(' '));
  let speakTimer = null;
  function speak(text, opts) {
    if (!text) return false;
    const o = opts || {};
    reqId++;
    if (player) player.pause();
    if (speakPacked(text, o, reqId)) return true;
    return speakSynth(text, o);
  }
  function speakSynth(text, o) {
    if (!synth) return false;
    try {
      if (!voices.length) loadVoices(); // một số máy nạp danh sách giọng chậm
      const busy = synth.speaking || synth.pending;
      synth.cancel();
      clearTimeout(speakTimer);
      const u = new SpeechSynthesisUtterance(spellOut(text));
      const v = pickVoice();
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-US'; }
      const base = Number(settings().rate) || 0.9;
      u.rate = o.rate || (o.slow ? Math.max(0.45, base * 0.6) : base);
      if (o.onend) u.onend = o.onend;
      // Nói ngay trong thao tác chạm của người dùng (iPhone/Android chỉ cho đọc trong thao tác đó).
      // Chỉ trì hoãn khi vừa hủy một câu đang đọc, vì Chrome lỗi nếu nói ngay sau khi hủy.
      if (busy) speakTimer = setTimeout(() => synth.speak(u), 60);
      else synth.speak(u);
      return true;
    } catch (e) {
      return false;
    }
  }
  // Dự phòng khi chưa có file bài nghe: đọc lần lượt từng câu, mỗi người nói một giọng (nếu máy có từ hai giọng trở lên)
  function speakLines(o) {
    if (!synth || !o.lines || !o.lines.length) return false;
    try {
      if (!voices.length) loadVoices();
      synth.cancel();
      const who = [];
      const base = Number(settings().rate) || 0.9;
      o.lines.forEach((l) => {
        if (!who.includes(l.s)) who.push(l.s);
        const u = new SpeechSynthesisUtterance(spellOut(l.en));
        const v = voices.length > 1 ? voices[who.indexOf(l.s) % Math.min(voices.length, 2)] : pickVoice();
        if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = 'en-US'; }
        u.rate = o.slow ? Math.max(0.45, base * 0.6) : base;
        synth.speak(u);
      });
      return true;
    } catch (e) {
      return false;
    }
  }
  // true nếu đang đọc hoặc sắp đọc (đang chờ gói âm thanh). Dùng để các thao tác khác không ngắt tiếng.
  function busy() {
    if (loadingFor && loadingFor === reqId) return true;
    if (player && !player.paused && !player.ended && player.currentTime > 0) return true;
    return !!(synth && (synth.speaking || synth.pending));
  }
  const stop = () => {
    reqId++;
    if (player) player.pause();
    if (synth) { clearTimeout(speakTimer); synth.cancel(); }
  };

  /* ---------- nhận diện giọng nói ---------- */
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  function listen(h) {
    if (!SR) { if (h.onError) h.onError('unsupported'); return () => {}; }
    let rec;
    try {
      rec = new SR();
    } catch (e) {
      if (h.onError) h.onError('unsupported');
      return () => {};
    }
    rec.lang = 'en-US';
    rec.interimResults = true;
    rec.maxAlternatives = 4;
    rec.continuous = false;
    let finals = null;
    rec.onresult = (e) => {
      const res = e.results[e.results.length - 1];
      const alts = Array.from(res).map((a) => a.transcript);
      if (res.isFinal) finals = alts;
      else if (h.onInterim) h.onInterim(alts[0] || '');
    };
    rec.onerror = (e) => { if (h.onError) h.onError(e.error || 'error'); };
    rec.onend = () => { if (h.onEnd) h.onEnd(finals); };
    try { rec.start(); } catch (e) { if (h.onError) h.onError('start'); }
    return () => { try { rec.stop(); } catch (e) { /* bỏ qua */ } };
  }

  loadIndex();

  EV.audio = {
    sfx, speak, clip, stop, warm, busy,
    canSpeak: () => !!synth || !!index,
    canListen: () => !!SR,
    voices: () => voices.slice(),
    currentVoice: () => pickVoice(),
  };
})();
