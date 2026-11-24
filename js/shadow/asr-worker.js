/* EngVui – Shadowing: luồng nền chạy mô hình Whisper (transformers.js + onnxruntime-web, chạy ngay trong máy người dùng).
   Âm thanh không rời khỏi thiết bị; chỉ mô hình (một lần) và thư viện được tải từ CDN, sau đó nằm trong bộ nhớ đệm trình duyệt. */
const LIB = 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.5.2/dist/transformers.min.js';
let T = null;
let pipe = null;
let current = null;
const files = {};

self.onmessage = async ({ data: m }) => {
  try {
    if (m.type === 'load') {
      if (!T) {
        T = await import(LIB);
        T.env.allowLocalModels = false;
        T.env.useBrowserCache = true;
      }
      if (current !== m.model) {
        pipe = null;
        Object.keys(files).forEach((k) => delete files[k]);
        pipe = await T.pipeline('automatic-speech-recognition', m.model, {
          dtype: 'q8',
          device: 'wasm',
          progress_callback: (p) => {
            if (!p || !p.file) return;
            if (p.status === 'progress' || p.status === 'download') files[p.file] = { l: p.loaded || 0, t: p.total || 0 };
            if (p.status === 'done' && files[p.file]) files[p.file].l = files[p.file].t;
            const all = Object.values(files);
            const tot = all.reduce((a, b) => a + b.t, 0);
            const ld = all.reduce((a, b) => a + b.l, 0);
            self.postMessage({ type: 'progress', id: m.id, p: tot ? Math.min(1, ld / tot) : 0, bytes: tot });
          },
        });
        current = m.model;
      }
      self.postMessage({ type: 'ready', id: m.id });
    } else if (m.type === 'run') {
      if (!pipe) throw new Error('Chưa nạp mô hình nhận dạng');
      const out = await pipe(m.audio, { return_timestamps: 'word', chunk_length_s: 30, stride_length_s: 5 });
      self.postMessage({ type: 'result', id: m.id, text: out.text || '', chunks: out.chunks || [] });
    }
  } catch (err) {
    self.postMessage({ type: 'error', id: m.id, message: String((err && err.message) || err) });
  }
};
