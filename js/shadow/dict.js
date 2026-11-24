/* EngVui – Shadowing: chú thích từ (phiên âm IPA, nghĩa) và dịch cụm từ, câu.
   - IPA: ưu tiên tra mạng (dictionaryapi.dev); thiếu hoặc không có mạng thì dùng từ điển phát âm CMU đóng gói sẵn (js/shadow/cmudict.txt).
   - Nghĩa tiếng Việt của từ: vốn từ của chính app trước, không có thì dịch qua MyMemory.
   - Dịch cụm từ và câu: MyMemory (qua mạng, gọi trực tiếp từ máy người học nên hạn mức tính theo từng máy). */
(function () {
  const C = EV.course;
  const LS = 'engvui.shadow.dict.v1';
  const EMAIL_KEY = 'engvui.shadow.mm.email';
  const lsGet = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* bỏ qua */ } };

  const clean = (w) => String(w || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/^[^a-z0-9']+|[^a-z0-9']+$/g, '');

  /* ---------- bộ nhớ đệm nhỏ (giữ tối đa ~400 mục) ---------- */
  let cache = null;
  const loadCache = () => {
    if (cache) return cache;
    try { cache = JSON.parse(lsGet(LS) || '{}'); } catch (e) { cache = {}; }
    if (!cache.t) cache = { t: {}, w: {} };
    return cache;
  };
  const saveCache = () => {
    const c = loadCache();
    ['t', 'w'].forEach((k) => { const keys = Object.keys(c[k]); if (keys.length > 400) keys.slice(0, keys.length - 400).forEach((x) => delete c[k][x]); });
    lsSet(LS, JSON.stringify(c));
  };

  /* ---------- từ điển phát âm CMU (offline) ---------- */
  let cmu = null;
  let cmuP = null;
  function loadCmu() {
    if (cmu) return Promise.resolve(cmu);
    if (!cmuP) {
      cmuP = fetch('js/shadow/cmudict.txt').then((r) => { if (!r.ok) throw new Error('cmudict'); return r.text(); }).then((t) => {
        const m = new Map();
        t.split('\n').forEach((l) => { const i = l.indexOf('\t'); if (i > 0) m.set(l.slice(0, i), l.slice(i + 1)); });
        cmu = m;
        return m;
      }).catch(() => { cmuP = null; return new Map(); });
    }
    return cmuP;
  }
  const VOICELESS = /[pkfθsʃ]$|tʃ$/;
  const SIBILANT = /(s|z|ʃ|ʒ|tʃ|dʒ)$/;
  function cmuIpa(m, w) {
    if (m.has(w)) return m.get(w);
    let b;
    if (w.endsWith("'s") && m.has(w.slice(0, -2))) b = m.get(w.slice(0, -2));
    else if (/s$/.test(w)) {
      const base = [w.slice(0, -1), w.endsWith('ies') ? w.slice(0, -3) + 'y' : '', w.endsWith('es') ? w.slice(0, -2) : ''].find((x) => x && m.has(x));
      if (base) { const i = m.get(base); return i + (SIBILANT.test(i) ? 'ɪz' : VOICELESS.test(i) ? 's' : 'z'); }
    }
    if (b) return b + (SIBILANT.test(b) ? 'ɪz' : VOICELESS.test(b) ? 's' : 'z');
    if (/ed$/.test(w)) {
      const base = [w.slice(0, -2), w.slice(0, -1), w.slice(0, -3)].find((x) => x && m.has(x));
      if (base) { const i = m.get(base); return i + (/[td]$/.test(i) ? 'ɪd' : VOICELESS.test(i) ? 't' : 'd'); }
    }
    if (/ing$/.test(w)) {
      const base = [w.slice(0, -3), w.slice(0, -3) + 'e', w.slice(0, -4)].find((x) => x && m.has(x));
      if (base) return m.get(base) + 'ɪŋ';
    }
    return '';
  }

  /* ---------- tra từ điển trực tuyến ---------- */
  async function fetchJson(url, ms) {
    const ctl = new AbortController();
    const to = setTimeout(() => ctl.abort(), ms || 5000);
    try {
      const r = await fetch(url, { signal: ctl.signal });
      return { ok: r.ok, status: r.status, data: r.ok ? await r.json() : null };
    } catch (e) {
      return { ok: false, status: 0, data: null };
    } finally { clearTimeout(to); }
  }
  async function onlineWord(w) {
    if (navigator.onLine === false) return null;
    const r = await fetchJson('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(w), 4500);
    if (!r.ok || !Array.isArray(r.data)) return null;
    let ipa = '';
    const defs = [];
    r.data.forEach((e) => {
      if (!ipa) {
        const ph = (e.phonetics || []).find((p) => p.text && /-us\./i.test(p.audio || '')) || (e.phonetics || []).find((p) => p.text);
        ipa = ph ? ph.text : (e.phonetic || '');
      }
      (e.meanings || []).forEach((m) => {
        const d = m.definitions && m.definitions[0];
        if (d && d.definition && defs.length < 3) defs.push({ pos: m.partOfSpeech || '', def: d.definition });
      });
    });
    return { ipa: ipa.replace(/^\/+|\/+$/g, '').replace(/͡/g, ''), defs };
  }

  /* ---------- vốn từ của app (từ và nghĩa tiếng Việt) ---------- */
  let gloss = null;
  function glossary() {
    if (gloss) return gloss;
    gloss = new Map();
    const add = (w) => { if (w && w.en && w.vi) { const k = String(w.en).toLowerCase().trim(); if (!gloss.has(k)) gloss.set(k, w.vi); } };
    try {
      C.availableGrades().forEach((g) => { const G = C.getGrade(g); if (G) G.units.forEach((u) => (u.words || []).forEach(add)); });
      ['gm', 'ex', 'pr'].forEach((b) => { const bk = C.topicBook(b); if (bk) bk.topics.forEach((t) => (t.words || []).forEach(add)); });
    } catch (e) { /* thiếu dữ liệu thì bỏ qua */ }
    return gloss;
  }
  function glossLookup(w) {
    const g = glossary();
    const forms = [w];
    if (/ies$/.test(w)) forms.push(w.slice(0, -3) + 'y');
    if (/(es|s)$/.test(w)) forms.push(w.slice(0, -1), w.slice(0, -2));
    if (/ed$/.test(w)) forms.push(w.slice(0, -2), w.slice(0, -1));
    if (/ing$/.test(w)) forms.push(w.slice(0, -3), w.slice(0, -3) + 'e');
    const hit = forms.find((f) => g.has(f));
    return hit ? { vi: g.get(hit), base: hit !== w ? hit : '' } : null;
  }

  /* ---------- dịch (MyMemory) ---------- */
  const decodeEntities = (s) => { const t = document.createElement('textarea'); t.innerHTML = s; return t.value; };
  async function myMemory(text) {
    const email = (lsGet(EMAIL_KEY) || '').trim();
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) + '&langpair=en|vi' + (email ? '&de=' + encodeURIComponent(email) : '');
    const r = await fetchJson(url, 9000);
    if (!r.ok || !r.data) {
      if (r.status === 429) throw new Error('quota');
      throw new Error(navigator.onLine === false ? 'offline' : 'net');
    }
    const d = r.data;
    const t = d.responseData && d.responseData.translatedText ? String(d.responseData.translatedText) : '';
    if (+d.responseStatus === 429 || /MYMEMORY WARNING|USED ALL AVAILABLE/i.test(t)) throw new Error('quota');
    if (+d.responseStatus !== 200 || !t) throw new Error('net');
    return decodeEntities(t);
  }
  // Cắt chuỗi dài thành các đoạn ≤ 450 ký tự (giới hạn của MyMemory là 500)
  function chunks(text) {
    if (text.length <= 450) return [text];
    const parts = text.split(/(?<=[.!?,;])\s+/);
    const out = [];
    let cur = '';
    parts.forEach((p) => { if ((cur + ' ' + p).trim().length > 450) { if (cur) out.push(cur); cur = p; } else cur = (cur + ' ' + p).trim(); });
    if (cur) out.push(cur);
    return out;
  }
  async function translate(text) {
    text = String(text || '').replace(/\s+/g, ' ').trim();
    if (!text) return '';
    const c = loadCache();
    const key = text.toLowerCase();
    if (c.t[key]) return c.t[key];
    const out = [];
    for (const part of chunks(text)) out.push(await myMemory(part));
    const vi = out.join(' ');
    c.t[key] = vi;
    saveCache();
    return vi;
  }

  /* ---------- tra một từ ---------- */
  // Trả về ngay IPA và định nghĩa; nghĩa tiếng Việt lấy bằng viMeaning() để không chặn giao diện
  async function lookup(word, opts) {
    const w = clean(word);
    if (!w) return null;
    const c = loadCache();
    if (c.w[w] && !(opts && opts.fresh)) return c.w[w];
    const wantOnline = !(opts && opts.offlineFirst);
    let on = null;
    const m = await loadCmu();
    const off = cmuIpa(m, w);
    if (wantOnline) on = await onlineWord(w);
    const res = {
      word: w,
      ipa: (on && on.ipa) || off || '',
      src: on && on.ipa ? 'online' : off ? 'offline' : '',
      defs: (on && on.defs) || [],
    };
    if (res.ipa && (res.src === 'online' || !wantOnline || navigator.onLine === false)) { c.w[w] = res; saveCache(); }
    return res;
  }
  // IPA nhanh cho nhiều từ (cụm từ, câu): dùng từ điển offline, chỉ tra mạng khi thiếu
  async function ipaOf(word, online) {
    const w = clean(word);
    if (!w) return '';
    const c = loadCache();
    if (c.w[w] && c.w[w].ipa) return c.w[w].ipa;
    const m = await loadCmu();
    const off = cmuIpa(m, w);
    if (off) return off;
    if (online) { const r = await lookup(w); return r ? r.ipa : ''; }
    return '';
  }
  // Nghĩa tiếng Việt của một từ: vốn từ của app, nếu không có thì dịch qua mạng
  async function viMeaning(word) {
    const w = clean(word);
    const g = glossLookup(w);
    if (g) return { vi: g.vi, src: 'app', base: g.base };
    return { vi: await translate(w), src: 'mt' };
  }

  EV.shadow = EV.shadow || {};
  EV.shadow.dict = {
    clean, lookup, ipaOf, viMeaning, translate, cmuReady: loadCmu,
    email: () => (lsGet(EMAIL_KEY) || ''),
    setEmail: (e) => lsSet(EMAIL_KEY, String(e || '').trim()),
  };
})();
