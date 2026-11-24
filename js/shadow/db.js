/* EngVui – Shadowing: kho lưu clip của người dùng (IndexedDB). Video/âm thanh được giữ nguyên trong máy, không tải lên đâu cả. */
(function () {
  const NAME = 'engvui-shadow';
  let dbp = null;

  function open() {
    if (dbp) return dbp;
    dbp = new Promise((resolve, reject) => {
      if (!window.indexedDB) { reject(new Error('Trình duyệt không hỗ trợ lưu trữ clip')); return; }
      const rq = indexedDB.open(NAME, 1);
      rq.onupgradeneeded = () => {
        const d = rq.result;
        d.createObjectStore('clips', { keyPath: 'id' });
        d.createObjectStore('media');
      };
      rq.onsuccess = () => resolve(rq.result);
      rq.onerror = () => { dbp = null; reject(rq.error); };
    });
    return dbp;
  }

  // Chạy một giao dịch trên nhiều kho, trả về kết quả của hàm fn
  function run(stores, mode, fn) {
    return open().then((d) => new Promise((resolve, reject) => {
      const t = d.transaction(stores, mode);
      let out;
      const rq = fn.apply(null, stores.map((s) => t.objectStore(s)));
      if (rq && 'onsuccess' in rq) rq.onsuccess = () => { out = rq.result; };
      t.oncomplete = () => resolve(out);
      t.onerror = () => reject(t.error);
      t.onabort = () => reject(t.error || new Error('Không lưu được (có thể hết dung lượng)'));
    }));
  }

  const db = {
    list: () => run(['clips'], 'readonly', (c) => c.getAll()).then((rows) => rows.sort((a, b) => b.createdAt - a.createdAt)),
    get: (id) => run(['clips'], 'readonly', (c) => c.get(id)),
    media: (id) => run(['media'], 'readonly', (m) => m.get(id)),
    // blob chỉ cần khi tạo mới; khi cập nhật điểm/lời thì truyền null
    save(meta, blob) {
      return run(['clips', 'media'], 'readwrite', (c, m) => {
        if (blob) m.put(blob, meta.id);
        return c.put(meta);
      });
    },
    remove: (id) => run(['clips', 'media'], 'readwrite', (c, m) => { m.delete(id); return c.delete(id); }),
    // xin trình duyệt đừng tự xóa dữ liệu khi thiếu chỗ
    persist() { try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) { /* bỏ qua */ } },
  };

  EV.shadow = EV.shadow || {};
  EV.shadow.db = db;
})();
