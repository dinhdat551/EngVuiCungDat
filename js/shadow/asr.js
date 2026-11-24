/* EngVui – Shadowing: nhận dạng giọng nói (Whisper chạy trong máy), giải mã audio/video, thu âm micro */
(function () {
  const SR = 16000;
  const FLAG = 'engvui.shadow.asr';
  const MODELS = {
    fast: { id: 'onnx-community/whisper-tiny.en_timestamped', label: 'Nhanh (Whisper tiny, ~41 MB)', mb: 41 },
    good: { id: 'onnx-community/whisper-base.en_timestamped', label: 'Chính xác hơn (Whisper base, ~77 MB)', mb: 77 },
  };

  const lsGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } };
  const modelKey = () => (MODELS[lsGet(FLAG + '.pick')] ? lsGet(FLAG + '.pick') : 'fast');

  /* ---------- luồng nền ---------- */
  let worker = null;
  let seq = 0;
  let loading = null;
  const waiters = new Map();
  const subs = new Set();
  const st = { status: 'idle', model: null, progress: 0, error: '' };
  const setState = (p) => { Object.assign(st, p); subs.forEach((f) => f(st)); };

  function ensureWorker() {
    if (worker) return worker;
    worker = new Worker('js/shadow/asr-worker.js', { type: 'module' });
    worker.onmessage = ({ data: m }) => {
      const w = waiters.get(m.id);
      if (m.type === 'progress') { setState({ progress: m.p, bytes: m.bytes }); return; }
      if (!w) return;
      waiters.delete(m.id);
      if (m.type === 'error') w.rej(new Error(m.message)); else w.res(m);
    };
    worker.onerror = (e) => {
      const err = new Error('Không chạy được bộ nhận dạng giọng nói trên thiết bị này' + (e && e.message ? ` (${e.message})` : ''));
      waiters.forEach((w) => w.rej(err));
      waiters.clear();
      worker = null;
      loading = null;
      setState({ status: 'error', error: err.message });
    };
    return worker;
  }
  function call(msg, transfer) {
    return new Promise((res, rej) => {
      const id = ++seq;
      waiters.set(id, { res, rej });
      ensureWorker().postMessage(Object.assign({ id }, msg), transfer || []);
    });
  }

  // Nạp mô hình (tải lần đầu, các lần sau lấy từ bộ nhớ đệm)
  function load(key) {
    key = key || modelKey();
    if (st.status === 'ready' && st.model === key) return Promise.resolve();
    if (loading && st.model === key) return loading;
    setState({ status: 'loading', model: key, progress: 0, error: '' });
    loading = call({ type: 'load', model: MODELS[key].id }).then(() => {
      setState({ status: 'ready', progress: 1 });
      lsSet(FLAG, key);
      loading = null;
    }, (e) => {
      setState({ status: 'error', error: e.message });
      loading = null;
      throw e;
    });
    return loading;
  }

  // samples: Float32Array mono 16 kHz  ->  { text, words: [{ w, s, e }] }
  async function transcribe(samples) {
    await load();
    const m = await call({ type: 'run', audio: samples.slice() });
    const words = (m.chunks || []).map((c) => {
      const s = c.timestamp && c.timestamp[0] != null ? c.timestamp[0] : 0;
      const e = c.timestamp && c.timestamp[1] != null ? c.timestamp[1] : s + 0.3;
      return { w: String(c.text || '').trim(), s: Math.round(s * 1000) / 1000, e: Math.round(Math.max(e, s + 0.05) * 1000) / 1000 };
    }).filter((w) => w.w && !/^[[(♪*].*[\])♪*]$|^♪+$/.test(w.w));   // bỏ nhãn như [BLANK_AUDIO], (music)
    return { text: words.map((w) => w.w).join(' '), words };
  }

  /* ---------- giải mã âm thanh ---------- */
  // Giải mã tệp audio/video thành tín hiệu mono 16 kHz (trình duyệt tự tách tiếng từ video)
  async function decodeBlob(blob) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) throw new Error('Trình duyệt không hỗ trợ xử lý âm thanh');
    const ctx = new AC({ sampleRate: SR });
    try {
      const buf = await blob.arrayBuffer();
      const ab = await ctx.decodeAudioData(buf);
      const out = new Float32Array(ab.length);
      for (let c = 0; c < ab.numberOfChannels; c++) {
        const ch = ab.getChannelData(c);
        for (let i = 0; i < out.length; i++) out[i] += ch[i] / ab.numberOfChannels;
      }
      return out;
    } catch (e) {
      throw new Error('Không đọc được âm thanh của tệp này. Hãy thử định dạng MP4, WebM, MP3 hoặc WAV, hoặc cắt ngắn tệp.');
    } finally {
      try { ctx.close(); } catch (e) { /* bỏ qua */ }
    }
  }

  /* ---------- thu âm ---------- */
  async function record() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) throw new Error('Thiết bị này không hỗ trợ thu âm trong trình duyệt');
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, channelCount: 1 } });
    } catch (e) {
      throw new Error(e && e.name === 'NotAllowedError' ? 'Bạn chưa cho phép dùng micro. Hãy bật quyền micro cho trang web/ứng dụng rồi thử lại.' : 'Không mở được micro: ' + ((e && e.message) || e));
    }
    const mime = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'].find((t) => MediaRecorder.isTypeSupported(t));
    const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
    const chunks = [];
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    const stopped = new Promise((res) => { rec.onstop = res; });
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    const an = ctx.createAnalyser();
    an.fftSize = 512;
    ctx.createMediaStreamSource(stream).connect(an);
    const buf = new Uint8Array(an.fftSize);
    const release = () => { stream.getTracks().forEach((t) => t.stop()); try { ctx.close(); } catch (e) { /* bỏ qua */ } };
    // Micro được mở sẵn (để hỏi quyền trước) nhưng chỉ bắt đầu ghi khi gọi start()
    return {
      start() { if (rec.state === 'inactive') rec.start(); },
      level() { an.getByteTimeDomainData(buf); let m = 0; for (let i = 0; i < buf.length; i++) m = Math.max(m, Math.abs(buf[i] - 128)); return m / 128; },
      async stop() {
        if (rec.state !== 'inactive') rec.stop();
        await stopped;
        release();
        const blob = new Blob(chunks, { type: rec.mimeType || mime || 'audio/webm' });
        if (blob.size < 800) throw new Error('Không thu được âm thanh. Kiểm tra micro rồi thử lại.');
        return { blob, samples: await decodeBlob(blob) };
      },
      cancel() { try { if (rec.state !== 'inactive') rec.stop(); } catch (e) { /* bỏ qua */ } release(); },
    };
  }

  function terminate() {
    if (worker) { worker.terminate(); worker = null; }
    waiters.forEach((w) => w.rej(new Error('Đã dừng')));
    waiters.clear();
    loading = null;
    setState({ status: 'idle', progress: 0 });
  }

  EV.shadow = EV.shadow || {};
  EV.shadow.asr = {
    SR, MODELS,
    state: () => st,
    onState(fn) { subs.add(fn); return () => subs.delete(fn); },
    modelKey,
    pickModel: (k) => { if (MODELS[k]) lsSet(FLAG + '.pick', k); },
    // đã từng tải mô hình thành công trên máy này
    wasReady: () => !!MODELS[lsGet(FLAG)],
    load, transcribe, decodeBlob, record, terminate,
  };
})();
