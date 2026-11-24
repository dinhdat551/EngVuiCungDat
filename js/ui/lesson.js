/* EngVui – trình chạy bài học (giống Duolingo): tiến độ, tim, kiểm tra đáp án, kết quả */
(function () {
  const U = EV.util;
  const A = EV.audio;
  const Art = EV.art;
  const UI = EV.ui;
  const S = () => EV.store;

  const PRAISE = ['Tuyệt vời!', 'Chính xác!', 'Giỏi quá!', 'Xuất sắc!', 'Hay lắm!', 'Đúng rồi!', 'Làm tốt lắm!'];
  const CHOICE_TYPES = ['select', 'picture', 'listen', 'translate', 'fill', 'quiz', 'reading', 'minimal', 'odd', 'stress', 'classify', 'listenComp'];
  // Câu nghe hiểu dạng điền từ (IELTS) thì gõ đáp án, không bấm chọn
  const isChoice = (ex) => !!ex && CHOICE_TYPES.includes(ex.type) && !ex.fill;
  const LC_KIND = { conversation: 'Hội thoại', talk: 'Bài nói', announcement: 'Thông báo', qa: 'Hỏi đáp ngắn', lecture: 'Bài giảng', monologue: 'Bài nói một người', discussion: 'Thảo luận', form: 'Điền thông tin' };
  // Câu đã điền đủ chỗ trống, bỏ gợi ý trong ngoặc (He ___ (manage) thành He managed) để đọc to
  const filledOf = (g) => g.q.replace('___', g.answers[0]).replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').replace(/\s+([.,?!])/g, '$1').trim();
  const plainW = (w) => String(w).replace(/[\[\]]/g, '');
  const markedW = (w) => U.esc(w).replace(/\[([^\]]*)\]/g, '<u class="snd">$1</u>');
  const stressText = (s) => s.syl.map((x, i) => (i === s.idx ? x.toUpperCase() : x.toLowerCase())).join('-');
  const TFNG_VI = { True: 'Đúng', False: 'Sai', 'Not Given': 'Không có thông tin' };
  const RD_KIND = { email: '📧 Email', notice: '📢 Thông báo', article: '📰 Bài đọc' };
  let L = null;
  let root = null;
  let kbPref = false;

  const stage = () => root.querySelector('.ls-stage');
  const settings = () => S().state.settings;

  /* ---------- tiện ích hiển thị ---------- */
  const title = (t) => `<h1 class="ex-title">${t}</h1>`;
  function tagHTML(ex) {
    if (ex.retry) return '<div class="ex-tag retry">↻ Lỗi sai trước đó</div>';
    if (ex.isNew) return '<div class="ex-tag new">✦ Từ mới</div>';
    return '';
  }
  const spk = (cls) => `<button class="spk ${cls || ''}" data-say="normal" aria-label="Nghe">${Art.icon('speaker')}</button>`;
  const spkRow = () => `<div class="listen-hero">${spk('big')}<button class="spk slow" data-say="slow" aria-label="Nghe chậm">${Art.icon('turtle')}</button></div>`;
  function hinted(sentence, unit) {
    return EV.course.hintTokens(sentence, unit).map((t) => {
      const w = t.hint
        ? `<span class="hw" tabindex="0" data-hint="${U.esc(t.hint)}" data-word="${U.esc(t.core)}">${U.esc(t.core)}</span>`
        : `<span class="nw" data-word="${U.esc(t.core)}">${U.esc(t.core)}</span>`;
      return `${U.esc(t.pre)}${w}${U.esc(t.post)}`;
    }).join(' ');
  }
  const bubble = (content, mood) => `<div class="bubble-row"><div class="bubble-mascot">${Art.mascot(mood || 'happy')}</div><div class="bubble">${content}</div></div>`;
  function choiceList(ex, cls, say) {
    return `<div class="choices ${cls || ''}">${ex.options.map((o, i) => `
      <button class="choice" data-i="${i}"><span class="kbd">${i + 1}</span><span class="choice-text">${U.esc(o.text)}</span></button>`).join('')}</div>`;
  }
  function blankSentence(ex) {
    const ch = U.chunks(ex.sentence.en);
    const { i, len } = ex.blank;
    const parts = [];
    ch.forEach((c, k) => {
      if (k === i) parts.push(`${U.esc(c.pre)}<span class="blank" data-blank>&nbsp;</span>${U.esc(ch[i + len - 1].post)}`);
      else if (k < i || k >= i + len) parts.push(U.esc(c.pre + c.core + c.post));
    });
    return parts.join(' ');
  }

  function sayTextOf(ex) {
    if (!ex) return null;
    switch (ex.type) {
      case 'select': return ex.dir === 'en2vi' ? ex.word.en : null;
      case 'listen': return ex.word.en;
      case 'listenTiles': return ex.sentence.en;
      case 'listenType': return ex.word ? ex.word.en : ex.sentence.en;
      case 'translate': return ex.dir === 'en2vi' ? ex.sentence.en : null;
      case 'speak': return ex.sentence.en;
      case 'transform': return ex.transform.src;
      case 'minimal': return ex.target.en;
      case 'stress': return ex.stress.en;
      case 'classify': return ex.word;
      case 'shadow': return ex.sentence.en;
      default: return null;
    }
  }
  function afterSayOf(ex) {
    switch (ex.type) {
      case 'transform': return ex.answer;
      case 'minimal': return ex.target.en;
      case 'stress': return ex.stress.en;
      case 'classify': return ex.word;
      case 'wordBank': case 'fill': return ex.sentence.en;
      case 'translate': return ex.dir === 'vi2en' ? ex.sentence.en : null;
      case 'quiz': return ex.quiz.q.includes('___') ? ex.quiz.q.replace('___', ex.quiz.answer) : null;
      case 'gapFill': return filledOf(ex.gap);
      case 'picture': case 'typeWord': return ex.word.en;
      case 'select': return ex.dir === 'vi2en' ? ex.word.en : null;
      default: return null;
    }
  }
  function correctText(ex) {
    switch (ex.type) {
      case 'select': return ex.dir === 'en2vi' ? ex.word.vi : ex.word.en;
      case 'picture': return ex.word.en;
      case 'listen': return ex.mode === 'meaning' ? `${ex.word.en} – ${ex.word.vi}` : ex.word.en;
      case 'translate': return ex.dir === 'en2vi' ? ex.sentence.vi : ex.sentence.en;
      case 'fill': return ex.sentence.en;
      case 'quiz': return ex.quiz.q.replace('___', ex.quiz.answer);
      case 'typeWord': return ex.word.en;
      case 'listenType': return ex.word ? ex.word.en : ex.sentence.en;
      case 'transform': return ex.answer;
      case 'minimal': return `${ex.target.en} ${ex.target.ipa}`;
      case 'odd': return ex.options.find((o) => o.correct).text;
      case 'stress': return `${stressText(ex.stress)} ${ex.stress.ipa}`;
      case 'classify': return `${ex.word}: ${ex.cls.cls}`;
      case 'reading': return ex.tfng ? `${ex.question.answer} (${TFNG_VI[ex.question.answer]})` : ex.question.answer;
      case 'gapFill': return ex.answers.join(' / ');
      case 'listenComp': return ex.fill ? ex.answers.join(' / ') : ex.question.answer;
      default: return ex.sentence ? ex.sentence.en : '';
    }
  }
  function meaningOf(ex) {
    if (ex.type === 'translate') return ex.dir === 'en2vi' ? '' : ex.sentence.vi;
    if (ex.type === 'transform') return ex.transform.vi;
    if (ex.type === 'minimal') return ex.target.vi;
    if (ex.type === 'stress') return ex.stress.vi;
    if (ex.type === 'shadow') return ex.sentence.vi;
    if (ex.type === 'wordBank' || ex.type === 'fill') return ex.sentence.vi;
    if (ex.type === 'listenTiles' || ex.type === 'speak') return ex.sentence.vi;
    if (ex.type === 'listenType') return ex.word ? ex.word.vi : ex.sentence.vi;
    if (ex.type === 'typeWord' || ex.type === 'picture') return ex.word.vi;
    if (ex.type === 'listen' && ex.mode === 'text') return ex.word.vi;
    if (ex.type === 'select' && ex.dir === 'vi2en') return ex.word.vi;
    return '';
  }

  /* ---------- các dạng bài: HTML + gắn sự kiện ---------- */
  const R = {};

  R.select = {
    html(ex) {
      if (ex.dir === 'en2vi') {
        const word = ex.isNew
          ? `<span class="hero-word hw" data-hint="${U.esc(ex.word.vi)}" data-word="${U.esc(ex.word.en)}" tabindex="0">${U.esc(ex.word.en)}</span>`
          : `<span class="hero-word">${U.esc(ex.word.en)}</span>`;
        return `${tagHTML(ex)}${title('Chọn nghĩa đúng')}<div class="word-hero">${spk()}${word}</div>${choiceList(ex, 'list')}`;
      }
      return `${tagHTML(ex)}${title(`Chọn từ tiếng Anh có nghĩa là “${U.esc(ex.word.vi)}”`)}
        ${ex.word.emoji ? `<div class="hero-emoji">${Art.emoji(ex.word.emoji)}</div>` : ''}${choiceList(ex, 'grid2')}`;
    },
  };
  R.picture = {
    html(ex) {
      return `${tagHTML(ex)}${title(`Đâu là “${U.esc(ex.word.vi)}”?`)}
        <div class="pic-grid n${ex.options.length}">${ex.options.map((o, i) => `
          <button class="choice pic-card" data-i="${i}"><span class="pic-emoji">${Art.emoji(o.emoji)}</span>
          <span class="pic-label"><span class="kbd">${i + 1}</span><span>${U.esc(o.text)}</span></span></button>`).join('')}</div>`;
    },
  };
  R.listen = {
    html(ex) {
      return `${title(ex.mode === 'meaning' ? 'Nghe và chọn nghĩa đúng' : 'Nghe và chọn từ bạn nghe được')}${spkRow()}${choiceList(ex, 'grid2')}`;
    },
  };
  R.translate = {
    html(ex) {
      if (ex.dir === 'en2vi') {
        return `${tagHTML(ex)}${title('Chọn nghĩa đúng của câu')}
          ${bubble(`<div class="en-sentence">${spk('mini')}<span>${hinted(ex.sentence.en, ex.unit)}</span></div>`)}${choiceList(ex, 'list')}`;
      }
      return `${tagHTML(ex)}${title('Chọn câu tiếng Anh đúng')}${bubble(`<div class="vi-sentence">${U.esc(ex.sentence.vi)}</div>`)}${choiceList(ex, 'list')}`;
    },
  };
  R.fill = {
    html(ex) {
      return `${tagHTML(ex)}${title('Điền vào chỗ trống')}
        <div class="fill-sentence">${blankSentence(ex)}</div>
        <div class="fill-vi">${U.esc(ex.sentence.vi)}</div>
        <div class="chips">${ex.options.map((o, i) => `<button class="choice chip" data-i="${i}"><span class="kbd">${i + 1}</span><span>${U.esc(o.text)}</span></button>`).join('')}</div>`;
    },
  };
  R.quiz = {
    html(ex) {
      const q = U.esc(ex.quiz.q).replace('___', '<span class="blank" data-blank>&nbsp;</span>');
      return `${tagHTML(ex)}${title('Chọn đáp án đúng')}<div class="quiz-q">${q}</div>${choiceList(ex, 'list')}`;
    },
  };
  // Đọc hiểu: đoạn văn (cuộn được, bấm từ để xem nghĩa, nút nghe cả bài) + câu hỏi
  R.reading = {
    html(ex) {
      const rd = ex.reading;
      const tf = (o) => (ex.tfng ? ` <small class="tf-vi">${TFNG_VI[o.text]}</small>` : '');
      return `<div class="rd-card">
          <div class="rd-head"><span class="rd-kind">${RD_KIND[rd.kind] || RD_KIND.article}</span><b class="rd-title">${U.esc(rd.title)}</b>
            ${rd.nospeak ? '' : `<button class="spk mini rd-spk" data-say-text="${U.esc(rd.text.join(' '))}" aria-label="Nghe cả bài">${Art.icon('speaker')}</button>`}</div>
          <div class="rd-text">${rd.text.map((p) => `<p>${hinted(p, ex.unit)}</p>`).join('')}</div>
        </div>
        ${tagHTML(ex)}<h1 class="ex-title rd-q">${U.esc(ex.question.q)}</h1>
        <div class="choices list">${ex.options.map((o, i) => `
          <button class="choice" data-i="${i}"><span class="kbd">${i + 1}</span><span class="choice-text">${U.esc(o.text)}${tf(o)}</span></button>`).join('')}</div>`;
    },
  };
  // Nghe hiểu: nút nghe (và nghe chậm) thay cho đoạn văn. Chữ của bài nghe chỉ hiện sau khi trả lời.
  const spkName = (task, s) => {
    const sp = (task.speakers || {})[s];
    return sp && sp.name ? sp.name : s;
  };
  function scriptHTML(task) {
    return `<div class="lc-script"><div class="lc-script-h"><b>${U.esc(task.title)}</b></div>${task.lines.map((l) => `
      <p class="lc-line"><b>${U.esc(spkName(task, l.s))}:</b> ${U.esc(l.en)}${l.vi ? `<small>${U.esc(l.vi)}</small>` : ''}</p>`).join('')}</div>`;
  }
  R.listenComp = {
    html(ex) {
      const t = ex.task, q = ex.question;
      const tf = LC_KIND[t.kind] || 'Bài nghe';
      const body = ex.fill
        ? '<input class="text-input big" type="text" placeholder="Nhập từ bạn nghe được (tối đa 3 từ)" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Câu trả lời">'
        : `<div class="choices ${t.hide ? 'abc' : 'list'}">${ex.options.map((o, i) => `
          <button class="choice" data-i="${i}"><span class="kbd">${i + 1}</span><span class="choice-text">${U.esc(o.text)}</span></button>`).join('')}</div>`;
      const qHTML = U.esc(q.q).replace('___', '<span class="blank" data-blank>&nbsp;</span>');
      return `<div class="lc-card">
          <div class="lc-head"><span class="lc-kind">🎧 ${U.esc(t.exam ? t.exam + ' · ' : '')}${tf}</span><span class="lc-count" data-lc-count></span></div>
          <div class="listen-hero lc-hero">${spk('big')}<button class="spk slow" data-say="slow" aria-label="Nghe chậm">${Art.icon('turtle')}</button></div>
          <p class="lc-hint">Bấm để nghe. Bạn có thể nghe lại và nghe chậm.</p>
        </div>
        ${tagHTML(ex)}<h1 class="ex-title rd-q">${qHTML}</h1>${body}<div class="lc-reveal" data-lc-reveal hidden>${scriptHTML(t)}</div>`;
    },
    mount(st, ex) { if (ex.fill) mountText(st.querySelector('.text-input')); },
  };
  R.gapFill = {
    html(ex) {
      const g = ex.gap;
      const sentence = U.esc(g.q).replace('___', '<span class="blank gap-blank" data-blank>&nbsp;</span>');
      return `${tagHTML(ex)}${title('Điền từ vào chỗ trống')}<div class="quiz-q">${sentence}</div>
        <input class="text-input big" type="text" placeholder="Nhập từ còn thiếu" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Câu trả lời">`;
    },
    mount(st) { mountText(st.querySelector('.text-input')); },
  };
  function mountChoices() { /* xử lý qua sự kiện chung (data-i) */ }
  CHOICE_TYPES.forEach((t) => { if (R[t] && !R[t].mount) R[t].mount = mountChoices; }); // dạng khai báo sau (phát âm, đọc hiểu) không cần mount

  function choose(i) {
    if (!L || L.phase !== 'answer' || !L.ex.options) return;
    const o = L.ex.options[i];
    if (!o) return;
    L.answer = i;
    U.$$('[data-i]', stage()).forEach((b) => b.classList.toggle('sel', +b.dataset.i === i));
    const blank = stage().querySelector('[data-blank]');
    if (blank) { blank.textContent = o.text; blank.classList.add('filled'); }
    if (o.say && settings().autoSpeak) A.speak(o.say);
    else A.sfx('tap');
    setCanCheck(true);
  }

  R.typeWord = {
    html(ex) {
      const w = ex.word;
      const young = ex.unit.grade <= 5;
      const hint = young
        ? w.en.split('').map((c, i) => (c === ' ' ? '<i class="gap"></i>' : `<i>${i === 0 || c === '-' || c === "'" ? U.esc(c) : '_'}</i>`)).join('')
        : `<span>Bắt đầu bằng “${U.esc(w.en[0])}” · ${w.en.replace(/[\s'-]/g, '').length} chữ cái</span>`;
      return `${tagHTML(ex)}${title('Viết từ tiếng Anh')}
        <div class="type-prompt">${w.emoji ? `<div class="type-emoji">${Art.emoji(w.emoji)}</div>` : ''}
          <div class="type-vi">${U.esc(w.vi)}</div><div class="type-hint">${hint}</div></div>
        <input class="text-input big" type="text" placeholder="Nhập từ tiếng Anh" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Câu trả lời">`;
    },
    mount(st) { mountText(st.querySelector('.text-input')); },
  };
  R.listenType = {
    html(ex) {
      const input = ex.word
        ? '<input class="text-input big" type="text" placeholder="Nhập từ bạn nghe được" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Câu trả lời">'
        : '<textarea class="text-input" rows="3" placeholder="Nhập câu bạn nghe được bằng tiếng Anh" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Câu trả lời"></textarea>';
      return `${tagHTML(ex)}${title(ex.word ? 'Nghe và viết lại từ' : 'Nghe và viết lại câu')}${spkRow()}${input}`;
    },
    mount(st) { mountText(st.querySelector('.text-input')); },
  };
  function mountText(input) {
    input.addEventListener('input', () => {
      L.answer = input.value.trim() || null;
      setCanCheck(!!L.answer);
    });
    if (window.matchMedia('(pointer: fine)').matches) setTimeout(() => input.focus(), 60);
  }

  R.wordBank = {
    html(ex) {
      let prompt;
      if (ex.type === 'listenTiles') prompt = `${title('Nhấn vào những gì bạn nghe')}${spkRow()}`;
      else if (ex.type === 'transform') {
        prompt = `<div class="tf-task">✏️ ${U.esc(ex.transform.task)}</div>${title('Viết lại câu')}
          ${bubble(`<div class="en-sentence">${spk('mini')}<span>${hinted(ex.transform.src, ex.unit)}</span></div>`, 'think')}`;
      } else prompt = `${title('Dịch câu này')}${bubble(`<div class="vi-sentence">${U.esc(ex.sentence.vi)}</div>`)}`;
      return `${tagHTML(ex)}${prompt}
        <div class="bank-wrap">
          <div class="answer-area"></div>
          <div class="bank"></div>
          <textarea class="text-input kb-input" rows="3" placeholder="Nhập câu trả lời bằng tiếng Anh" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Câu trả lời"></textarea>
        </div>
        <button class="link-btn kb-toggle" type="button">${Art.icon('keyboard')}<span></span></button>`;
    },
    mount(st, ex) {
      const s = L.exState = { used: [], kb: kbPref };
      const area = st.querySelector('.answer-area');
      const bank = st.querySelector('.bank');
      const ta = st.querySelector('.kb-input');
      const tog = st.querySelector('.kb-toggle');
      const draw = (popId) => {
        area.innerHTML = s.used.map((id) => `<button class="tile ${id === popId ? 'pop' : ''}" data-a="${id}">${U.esc(ex.tiles[id].text)}</button>`).join('');
        bank.innerHTML = ex.tiles.map((t) => (s.used.includes(t.id)
          ? `<span class="tile ghost" aria-hidden="true">${U.esc(t.text)}</span>`
          : `<button class="tile" data-t="${t.id}">${U.esc(t.text)}</button>`)).join('');
        if (!s.kb) {
          L.answer = s.used.length ? s.used.map((id) => ex.tiles[id].text) : null;
          setCanCheck(!!L.answer);
        }
      };
      const mode = () => {
        st.querySelector('.bank-wrap').classList.toggle('kb', s.kb);
        tog.querySelector('span').textContent = s.kb ? 'Dùng thẻ từ' : 'Dùng bàn phím';
        if (s.kb) {
          L.answer = ta.value.trim() || null;
          setCanCheck(!!L.answer);
          setTimeout(() => ta.focus(), 30);
        } else draw();
      };
      s.add = (id) => {
        if (L.phase !== 'answer' || s.used.includes(id)) return;
        s.used.push(id);
        // Bài nghe ghép từ: đang đọc câu hỏi thì chỉ phát tiếng chạm, không ngắt câu đang đọc
        if (settings().autoSpeak && !(ex.type === 'listenTiles' && A.busy())) A.speak(ex.tiles[id].text); else A.sfx('tap');
        draw(id);
      };
      s.removeLast = () => { if (s.used.length) { s.used.pop(); A.sfx('tap'); draw(); } };
      bank.addEventListener('click', (e) => {
        const b = e.target.closest('[data-t]');
        if (b) s.add(+b.dataset.t);
      });
      area.addEventListener('click', (e) => {
        const b = e.target.closest('[data-a]');
        if (!b || L.phase !== 'answer') return;
        s.used = s.used.filter((x) => x !== +b.dataset.a);
        A.sfx('tap');
        draw();
      });
      ta.addEventListener('input', () => {
        L.answer = ta.value.trim() || null;
        setCanCheck(!!L.answer);
      });
      tog.addEventListener('click', () => {
        if (L.phase !== 'answer') return;
        s.kb = !s.kb;
        kbPref = s.kb;
        mode();
      });
      draw();
      mode();
    },
  };
  R.listenTiles = R.wordBank;
  R.transform = R.wordBank;

  R.match = {
    html(ex) {
      const n = ex.pairs.length;
      const col = (ids, side) => ids.map((id, k) => {
        const p = ex.pairs[id];
        const num = side === 'l' ? k + 1 : n + k + 1;
        return `<button class="mtile" data-side="${side}" data-id="${id}"><span class="kbd">${num % 10}</span><span class="mtext">${U.esc(side === 'l' ? p.en : p.vi)}</span></button>`;
      }).join('');
      return `${title('Chọn các cặp từ tương ứng')}<div class="match-grid"><div class="mcol">${col(ex.left, 'l')}</div><div class="mcol">${col(ex.right, 'r')}</div></div>`;
    },
    mount(st) {
      L.exState = { l: null, r: null, matched: new Set(), busy: false };
      st.querySelectorAll('.mtile').forEach((b) => b.addEventListener('click', () => pickMatch(b)));
    },
  };
  function pickMatch(b) {
    const s = L.exState;
    const ex = L.ex;
    if (L.phase !== 'answer' || s.busy) return;
    const id = +b.dataset.id;
    const side = b.dataset.side;
    if (s.matched.has(id) && b.classList.contains('done')) return;
    if (side === 'l' && settings().autoSpeak) A.speak(ex.pairs[id].en); else A.sfx('tap');
    s[side] = s[side] === id ? null : id;
    U.$$(`.mtile[data-side="${side}"]`, stage()).forEach((x) => x.classList.toggle('sel', +x.dataset.id === s[side]));
    if (s.l == null || s.r == null) return;
    const lb = stage().querySelector(`.mtile[data-side="l"][data-id="${s.l}"]`);
    const rb = stage().querySelector(`.mtile[data-side="r"][data-id="${s.r}"]`);
    if (s.l === s.r) {
      s.matched.add(s.l);
      [lb, rb].forEach((x) => { x.classList.remove('sel'); x.classList.add('ok'); x.disabled = true; });
      setTimeout(() => [lb, rb].forEach((x) => x.classList.add('done')), 380);
      A.sfx('match');
      if (s.matched.size === ex.pairs.length) {
        L.phase = 'wait';
        setTimeout(() => { L.phase = 'answer'; L.answer = 'done'; applyResult({ ok: true }); }, 480);
      }
    } else {
      [lb, rb].forEach((x) => { x.classList.remove('sel'); x.classList.add('bad'); });
      A.sfx('mismatch');
      L.wrong++;
      L.combo = 0;
      S().itemResult(ex.pairs[s.l].item, false, L.cfg.mode);
      s.busy = true;
      setTimeout(() => { [lb, rb].forEach((x) => x.classList.remove('bad')); s.busy = false; }, 550);
    }
    s.l = null;
    s.r = null;
  }

  // Phát âm: nghe rồi chọn một trong hai từ dễ nhầm
  R.minimal = {
    html(ex) {
      return `${tagHTML(ex)}${title('Nghe và chọn từ bạn nghe được')}${spkRow()}
        <div class="choices grid2">${ex.options.map((o, i) => `
          <button class="choice mp-card" data-i="${i}"><span class="kbd">${i + 1}</span><span class="mp-word">${U.esc(o.text)}</span><span class="mp-ipa">${U.esc(o.sub)}</span></button>`).join('')}</div>`;
    },
  };
  R.odd = {
    html(ex) {
      const q = ex.mode === 'stress' ? 'Chọn từ có trọng âm khác các từ còn lại' : 'Chọn từ có phần gạch chân được phát âm khác các từ còn lại';
      return `${tagHTML(ex)}${title(q)}
        <div class="choices grid2">${ex.options.map((o, i) => `
          <button class="choice" data-i="${i}"><span class="kbd">${i + 1}</span><span class="choice-text odd-word">${ex.mode === 'stress' ? U.esc(o.text) : markedW(o.mark)}</span></button>`).join('')}</div>`;
    },
  };
  R.stress = {
    html(ex) {
      const s = ex.stress;
      return `${tagHTML(ex)}${title('Trọng âm rơi vào âm tiết nào?')}
        <div class="word-hero">${spk()}<span class="hero-word">${U.esc(s.en)}</span></div>
        <div class="stress-vi">${U.esc(s.vi)}</div>
        <div class="choices syl-row">${ex.options.map((o, i) => `
          <button class="choice syl" data-i="${i}"><span class="kbd">${i + 1}</span><span class="choice-text">${U.esc(o.text)}</span></button>`).join('')}</div>`;
    },
  };
  R.classify = {
    html(ex) {
      return `${tagHTML(ex)}${title('Phần gạch chân trong từ này được đọc là gì?')}
        <div class="word-hero">${spk()}<span class="hero-word">${markedW(ex.cls.mark)}</span></div>
        ${choiceList(ex, 'grid3')}`;
    },
  };

  // Micro dùng chung cho bài đọc to và shadowing: nghe, chọn phương án khớp nhất, tô các từ đã nói đúng
  function mountMic(st, ex, onResult) {
    const btn = st.querySelector('[data-mic]');
    if (!btn) return;
    const label = btn.querySelector('span');
    const idle = label.textContent;
    const heard = st.querySelector('.heard');
    let stopFn = null;
    let listening = false;
    let errored = false;
    const ERR = {
      'not-allowed': 'Trình duyệt chưa cho phép dùng micro. Hãy cấp quyền micro hoặc bỏ qua câu này.',
      'service-not-allowed': 'Trình duyệt không cho phép nhận diện giọng nói ở trang này.',
      'no-speech': 'Mình chưa nghe thấy gì, bạn thử lại nhé!',
      'audio-capture': 'Không tìm thấy micro trên thiết bị.',
      network: 'Nhận diện giọng nói cần kết nối Internet.',
      unsupported: 'Trình duyệt này chưa hỗ trợ nhận diện giọng nói.',
    };
    btn.addEventListener('click', () => {
      if (L.phase !== 'answer') return;
      if (listening) { if (stopFn) stopFn(); return; }
      A.stop();
      listening = true;
      errored = false;
      btn.classList.add('rec');
      label.textContent = 'Đang nghe… nhấn để dừng';
      heard.textContent = '';
      stopFn = A.listen({
        onInterim: (t) => { heard.textContent = t; },
        onError: (err) => {
          errored = true;
          heard.textContent = ERR[err] || 'Không nhận diện được giọng nói, bạn thử lại nhé.';
        },
        onEnd: (finals) => {
          listening = false;
          btn.classList.remove('rec');
          label.textContent = idle;
          if (!L || L.ex !== ex) return;
          if (!finals || !finals.length) {
            if (!errored) heard.textContent = 'Mình chưa nghe rõ, bạn thử lại nhé!';
            return;
          }
          const best = bestSpeech(finals, ex.sentence.en);
          heard.innerHTML = `Bạn đã nói: <b>${U.esc(best.text)}</b>`;
          const said = new Set(U.norm(best.text).split(' '));
          U.$$('.speak-target [data-word]', st).forEach((w) => {
            if (U.norm(w.dataset.word).split(' ').every((x) => said.has(x))) w.classList.add('said');
          });
          if (onResult) onResult(best);
          L.answer = best;
          check();
        },
      });
    });
  }

  // Shadowing: nghe câu mẫu (có nghe chậm), ẩn hoặc hiện chữ, nói theo; không có micro thì tự đánh giá
  R.shadow = {
    html(ex) {
      const mic = A.canListen()
        ? `<button class="mic-btn" type="button" data-mic>${Art.icon('mic')}<span>Nhấn để nói theo</span></button>`
        : `<button class="btn btn-outline" type="button" data-self>🗣️ Tôi đã nói theo</button>
           <p class="muted small">Trình duyệt này chưa nhận được giọng nói. Hãy nói theo thành tiếng rồi bấm nút trên.</p>`;
      return `${tagHTML(ex)}${title('Nghe rồi nói theo')}${spkRow()}
        <div class="sh-box">
          <button class="link-btn sh-toggle" type="button" data-sh-toggle>👁 Hiện câu</button>
          <div class="sh-text" hidden><div class="en-sentence"><span class="speak-target">${hinted(ex.sentence.en, ex.unit)}</span></div>
            <div class="sh-vi">${U.esc(ex.sentence.vi)}</div></div>
        </div>
        <div class="speak-zone">${mic}<div class="heard"></div></div>`;
    },
    mount(st) {
      const box = st.querySelector('.sh-text');
      const tog = st.querySelector('[data-sh-toggle]');
      const show = () => { box.hidden = false; tog.textContent = '🙈 Ẩn câu'; };
      tog.addEventListener('click', () => { if (box.hidden) show(); else { box.hidden = true; tog.textContent = '👁 Hiện câu'; } });
      const self = st.querySelector('[data-self]');
      if (self) {
        self.addEventListener('click', () => {
          if (L.phase !== 'answer') return;
          show();
          L.answer = { score: 1, self: true, text: '' };
          check();
        });
      } else mountMic(st, L.ex, show);
    },
  };

  R.speak = {
    html(ex) {
      return `${tagHTML(ex)}${title('Đọc to câu này')}
        ${bubble(`<div class="en-sentence">${spk('mini')}<span class="speak-target">${hinted(ex.sentence.en, ex.unit)}</span></div>`)}
        <div class="speak-zone">
          <button class="mic-btn" type="button" data-mic>${Art.icon('mic')}<span>Nhấn để nói</span></button>
          <div class="heard"></div>
        </div>`;
    },
    mount(st, ex) { mountMic(st, ex); },
  };
  function bestSpeech(alts, target) {
    const tw = U.norm(target).split(' ').filter(Boolean);
    let best = { score: 0, text: alts[0] || '' };
    alts.forEach((a) => {
      const said = new Set(U.norm(a).split(' '));
      const score = tw.filter((w) => said.has(w)).length / Math.max(1, tw.length);
      if (score > best.score) best = { score, text: a };
    });
    return best;
  }

  R.tip = {
    html(ex) {
      const g = ex.grammar;
      const formula = (g.formula || []).map((f) => `<div class="f-row"><b>${U.esc(f.k)}</b><span>${U.esc(f.v)}</span></div>`).join('');
      return `<div class="tip-card">
        <div class="tip-head">${U.esc(g.head || '💡 Ghi nhớ ngữ pháp')}</div>
        <h1 class="tip-title">${U.esc(g.title)}</h1>
        ${g.text ? `<p class="tip-text">${U.esc(g.text)}</p>` : ''}
        ${formula ? `<div class="formula">${formula}</div>` : ''}
        ${g.examples.length ? `<div class="tip-ex">${g.examples.map((e) => `<button class="tip-line" data-say-text="${U.esc(e)}">${Art.icon('speaker')}<span>${U.esc(e)}</span></button>`).join('')}</div>` : ''}
      </div>`;
    },
    mount() {},
  };

  /* ---------- chấm điểm ---------- */
  function grade(ex, ans) {
    if (isChoice(ex)) {
      const o = ex.options[ans];
      return { ok: !!(o && o.correct) };
    }
    switch (ex.type) {
      case 'gapFill':
      case 'listenComp': {
        const rs = ex.answers.map((t) => U.gradeText(ans, t, true));
        return rs.find((r) => r.ok && !r.typo) || rs.find((r) => r.ok) || { ok: false };
      }
      case 'typeWord': {
        const rs = (ex.answers || [ex.answer]).map((t) => U.gradeText(ans, t, true));
        return rs.find((r) => r.ok && !r.typo) || rs.find((r) => r.ok) || { ok: false };
      }
      case 'listenType': {
        const rs = (ex.answers || [ex.answer]).map((t) => U.gradeText(ans, t, !!ex.word));
        return rs.find((r) => r.ok && !r.typo) || rs.find((r) => r.ok) || { ok: false };
      }
      case 'wordBank':
      case 'listenTiles':
      case 'transform': {
        // Khớp với đáp án nào cũng được (câu biến đổi có thể có vài cách viết đúng)
        const typed = ex.type === 'transform' ? U.gradeGrammar : U.gradeText;
        const rs = (ex.answers || [ex.answer]).map((t) => (typeof ans === 'string'
          ? typed(ans, t) : { ok: U.norm(ans.join(' ')) === U.norm(t) }));
        return rs.find((r) => r.ok && !r.typo) || rs.find((r) => r.ok) || { ok: false };
      }
      case 'speak': return { ok: ans.score >= 0.7, score: ans.score };
      case 'shadow': return { ok: ans.score >= 0.6, score: ans.score, self: !!ans.self };
      case 'match': return { ok: true };
      default: return { ok: false };
    }
  }

  /* ---------- vòng đời bài học ---------- */
  function start(cfg) {
    const ex = (cfg.exercises || []).filter(Boolean);
    if (!ex.length) {
      UI.toast('Chưa có nội dung cho bài này.', 'warn');
      return false;
    }
    S().refreshHearts();
    const heartsOn = !S().heartsUnlimited() && cfg.mode !== 'practice';
    if (heartsOn && S().state.hearts <= 0) {
      EV.app.showHearts(true);
      return false;
    }
    L = {
      cfg, queue: ex.slice(), total: ex.length, done: 0, correct: 0, wrong: 0, combo: 0, maxCombo: 0,
      startedAt: Date.now(), heartsOn, ex: null, answer: null, phase: 'answer', exState: {},
    };
    root.innerHTML = `
      <div class="ls-top">
        <button class="icon-btn ls-quit" data-l="quit" aria-label="Thoát bài học">${Art.icon('close')}</button>
        <div class="ls-progress"><div class="ls-progress-fill"></div><div class="ls-combo"></div></div>
        ${EV.config.economy ? `<div class="ls-hearts ${heartsOn ? '' : 'inf'}" title="${heartsOn ? 'Số tim còn lại' : 'Không giới hạn tim'}"><span>❤️</span><b></b></div>` : '<span class="ls-hearts-gap"></span>'}
      </div>
      <div class="ls-body"><div class="ls-stage"></div></div>
      <div class="ls-footer"><div class="ls-footer-inner"></div></div>`;
    root.classList.add('open');
    document.body.classList.add('in-lesson');
    // Tải sẵn gói âm thanh của bài này để bấm nghe là phát ngay
    try { A.warm(ex.map((x) => sayTextOf(x)).concat(ex.map((x) => afterSayOf(x)), ex.map((x) => (x.task ? x.task.clip : null)))); } catch (e) { /* bỏ qua */ }
    next();
    return true;
  }

  function next() {
    if (!L) return;
    L.hold = null;
    A.stop();            // sang câu khác thì dừng ngay phần đang đọc của câu trước
    if (!L.queue.length) { finish(); return; }
    L.ex = L.queue.shift();
    L.answer = null;
    L.exState = {};
    const ex = L.ex;
    L.phase = ex.type === 'tip' ? 'tip' : 'answer';
    const st = stage();
    st.classList.remove('enter');
    st.innerHTML = `<div class="ex ex-${ex.type}">${R[ex.type].html(ex)}</div>`;
    void st.offsetWidth;
    st.classList.add('enter');
    root.querySelector('.ls-body').scrollTop = 0;
    if (R[ex.type].mount) R[ex.type].mount(st, ex);
    setFooter(L.phase === 'tip' ? 'tip' : 'check');
    updateTop();
    const say = sayTextOf(ex);
    if (say && settings().autoSpeak) setTimeout(() => { if (L && L.ex === ex) A.speak(say); }, 250);
    if (ex.type === 'listenComp' && settings().autoSpeak) setTimeout(() => { if (L && L.ex === ex) playTask(ex, false); }, 350);
  }
  // Phát bài nghe của câu hỏi hiện tại (và đếm số lần nghe)
  function playTask(ex, slow) {
    const t = ex.task;
    const c = stage().querySelector('[data-lc-count]');
    ex.plays = (ex.plays || 0) + 1;
    if (c) c.textContent = `Đã nghe ${ex.plays} lần`;
    A.clip(t.clip, { slow, lines: t.lines, speakers: t.speakers });
  }

  function setCanCheck(on) {
    const b = root.querySelector('[data-l="check"]');
    if (b) b.disabled = !on;
  }

  function setFooter(mode, res) {
    const f = root.querySelector('.ls-footer');
    const inner = f.querySelector('.ls-footer-inner');
    f.className = 'ls-footer' + (mode === 'feedback' ? (res.ok ? ' ok' : ' bad') : '');
    if (mode === 'check') {
      const speakEx = L.ex.type === 'speak';
      inner.innerHTML = `<button class="btn btn-outline ls-skip" data-l="${speakEx ? 'nospeak' : 'skip'}">${speakEx ? 'Không nói được lúc này' : 'Bỏ qua'}</button>
        <button class="btn btn-primary ls-check primary-action" data-l="check" disabled>Kiểm tra</button>`;
    } else if (mode === 'tip') {
      inner.innerHTML = '<span></span><button class="btn btn-primary primary-action" data-l="continue">Tiếp tục</button>';
    } else if (mode === 'feedback') {
      inner.innerHTML = `${feedbackHTML(res)}<button class="btn ${res.ok ? 'btn-primary' : 'btn-danger'} primary-action" data-l="continue">Tiếp tục</button>`;
      const b = inner.querySelector('[data-l="continue"]');
      if (b && window.matchMedia('(pointer: fine)').matches) setTimeout(() => b.focus({ preventScroll: true }), 30);
    } else {
      inner.innerHTML = res;
    }
  }

  function feedbackHTML(res) {
    const ex = L.ex;
    const meaning = meaningOf(ex);
    let body = '';
    if (res.ok) {
      if (res.typo) body += `<div class="fb-line">Chú ý chính tả: <b>${U.esc(correctText(ex))}</b></div>`;
      if (ex.type === 'speak') body += `<div class="fb-line">Phát âm tốt lắm! (${Math.round(res.score * 100)}% số từ)</div>`;
      if (ex.type === 'shadow') {
        body += res.self ? '<div class="fb-line">Hãy nghe lại câu mẫu và so sánh với cách bạn nói.</div>'
          : `<div class="fb-line">Nói theo tốt! (${Math.round(res.score * 100)}% số từ khớp câu mẫu)</div>`;
        body += `<div class="fb-line">Câu mẫu: <b>${U.esc(ex.sentence.en)}</b></div>`;
      }
      if (meaning && ex.type !== 'picture') body += `<div class="fb-line">Nghĩa: ${U.esc(meaning)}</div>`;
      if (ex.type === 'quiz' && ex.quiz.explain) body += `<div class="fb-line">${U.esc(ex.quiz.explain)}</div>`;
      if ((ex.type === 'reading' || ex.type === 'listenComp') && ex.question.explain) body += `<div class="fb-line">${U.esc(ex.question.explain)}</div>`;
      if (ex.type === 'gapFill' && ex.gap.explain) body += `<div class="fb-line">${U.esc(ex.gap.explain)}</div>`;
    } else if (ex.type === 'speak' || ex.type === 'shadow') {
      body += `<div class="fb-line">Câu mẫu: <b>${U.esc(ex.sentence.en)}</b></div><div class="fb-line">Hãy nghe lại${ex.type === 'shadow' ? ' (thử nghe chậm)' : ''} và luyện thêm nhé.</div>`;
    } else {
      body += `<div class="fb-line">Đáp án đúng:</div><div class="fb-answer">${U.esc(correctText(ex))}</div>`;
      if (meaning && !['select', 'translate'].includes(ex.type)) body += `<div class="fb-line">Nghĩa: ${U.esc(meaning)}</div>`;
      if (ex.type === 'quiz' && ex.quiz.explain) body += `<div class="fb-line">💡 ${U.esc(ex.quiz.explain)}</div>`;
      if ((ex.type === 'reading' || ex.type === 'listenComp') && ex.question.explain) body += `<div class="fb-line">💡 ${U.esc(ex.question.explain)}</div>`;
      if (ex.type === 'gapFill' && ex.gap.explain) body += `<div class="fb-line">💡 ${U.esc(ex.gap.explain)}</div>`;
    }
    if (ex.explain && ex.type !== 'shadow') body += `<div class="fb-line">${res.ok ? '' : '💡 '}${U.esc(ex.explain)}</div>`;
    const ttl = res.ok ? U.pick(PRAISE) : (res.skipped ? 'Đã bỏ qua' : (['speak', 'shadow'].includes(ex.type) ? 'Gần đúng rồi!' : 'Chưa đúng rồi!'));
    return `<div class="fb">
      <div class="fb-badge">${Art.icon(res.ok ? 'check' : 'close')}</div>
      <div class="fb-body"><div class="fb-title">${ttl}</div>${body}</div>
    </div>`;
  }

  function check() {
    if (!L || L.phase !== 'answer' || L.answer == null) return;
    applyResult(grade(L.ex, L.answer));
  }

  function applyResult(res) {
    const ex = L.ex;
    L.phase = 'feedback';
    U.$$('input, textarea', stage()).forEach((x) => { x.readOnly = true; });
    if (res.ok) {
      L.done++;
      L.correct++;
      L.combo++;
      L.maxCombo = Math.max(L.maxCombo, L.combo);
      A.sfx('correct');
      if (ex.type === 'match') (ex.items || []).forEach((it) => S().itemResult(it, true, L.cfg.mode));
      else S().itemResult(ex.item, true, L.cfg.mode);
      if (L.combo >= 5 && L.combo % 5 === 0) showCombo();
    } else if (ex.type === 'speak' || ex.type === 'shadow') {
      L.done++;
      A.sfx('wrong');
    } else {
      L.wrong++;
      L.combo = 0;
      A.sfx('wrong');
      if (L.heartsOn) S().loseHeart();
      S().itemResult(ex.item, false, L.cfg.mode);
      L.queue.push(retryOf(ex));
    }
    markChoices(res);
    if (ex.type === 'listenComp') { const r = stage().querySelector('[data-lc-reveal]'); if (r) r.hidden = false; }
    setFooter('feedback', res);
    updateTop();
    const after = afterSayOf(ex);
    if (after && settings().autoSpeak && (res.ok || ex.type !== 'quiz')) {
      // Đọc đáp án: nhấn Tiếp tục khi đang đọc thì chờ đọc xong rồi mới sang câu (nhấn lần hai để bỏ qua ngay)
      const hold = { done: false, cb: null, timer: null };
      L.hold = hold;
      const fin = () => {
        if (hold.done) return;
        hold.done = true;
        clearTimeout(hold.timer);
        const cb = hold.cb;
        hold.cb = null;
        if (cb && L && L.hold === hold) cb();
      };
      hold.timer = setTimeout(fin, 7000);
      setTimeout(() => {
        if (!L || L.ex !== ex) return;
        if (!A.speak(after, { onend: fin })) fin();
      }, 350);
    }
  }

  function markChoices(res) {
    const ex = L.ex;
    if (!ex.options || L.answer == null) return;
    U.$$('[data-i]', stage()).forEach((b) => {
      const i = +b.dataset.i;
      b.disabled = true;
      if (ex.options[i].correct && res.ok) b.classList.add('ok');
      if (i === L.answer && !res.ok) b.classList.add('bad');
    });
  }

  function retryOf(ex) {
    const c = Object.assign({}, ex, { retry: true, isNew: false });
    if (c.options && !c.fixedOrder) c.options = U.shuffle(c.options);
    if (c.tiles) c.tiles = U.shuffle(c.tiles).map((t, i) => ({ id: i, text: t.text }));
    if (c.left) { c.left = U.shuffle(c.left); c.right = U.shuffle(c.right); }
    return c;
  }

  function showCombo() {
    const el = root.querySelector('.ls-combo');
    el.textContent = `🔥 ${L.combo} câu đúng liên tiếp!`;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    setTimeout(() => A.sfx('combo'), 200);
  }

  function updateTop() {
    if (!L) return;
    const pct = L.total ? Math.min(100, (100 * L.done) / L.total) : 0;
    const fill = root.querySelector('.ls-progress-fill');
    if (fill) fill.style.width = pct + '%';
    const hb = root.querySelector('.ls-hearts b');
    if (hb) hb.textContent = L.heartsOn ? S().state.hearts : '∞';
  }

  function cont() {
    if (!L) return;
    if (L.phase === 'tip') {
      L.done++;
      next();
      return;
    }
    if (L.phase !== 'feedback') return;
    const h = L.hold;
    if (h && !h.done && !h.cb) {
      // Đang đọc đáp án: chững lại một nhịp để nghe xong rồi mới chuyển câu
      const btn = root.querySelector('.ls-footer .primary-action');
      if (btn) { btn.dataset.label = btn.textContent; btn.textContent = 'Đang đọc đáp án…'; btn.classList.add('waiting'); }
      h.cb = () => cont();
      return;
    }
    if (h && !h.done) { h.done = true; clearTimeout(h.timer); h.cb = null; }   // nhấn lần hai: bỏ qua phần đang đọc
    if (L.heartsOn && S().state.hearts <= 0) { outOfHearts(); return; }
    next();
  }

  function outOfHearts() {
    L.phase = 'nohearts';
    A.sfx('fail');
    const canBuy = S().state.gems >= S().CONST.REFILL_COST;
    stage().innerHTML = `<div class="ls-center">
      <div class="big-mascot">${Art.mascot('sad')}</div>
      <h1>Bạn đã hết tim!</h1>
      <p class="muted">Hồi đầy tim để học tiếp, hoặc luyện tập để kiếm thêm tim. Tim cũng tự hồi 1 tim mỗi 30 phút.</p>
      <div class="stack-btns">
        <button class="btn btn-blue btn-block" data-l="refill" ${canBuy ? '' : 'disabled'}>Hồi đầy tim · 💎 ${S().CONST.REFILL_COST}</button>
        <button class="btn btn-outline btn-block" data-l="go-practice">Luyện tập để kiếm tim</button>
      </div></div>`;
    setFooter('custom', '<span></span><button class="btn btn-ghost" data-l="close">Kết thúc bài học</button>');
    root.querySelector('.ls-top').classList.add('dim');
  }

  function finish() {
    const cfg = L.cfg;
    L.phase = 'results';
    const timeMs = Date.now() - L.startedAt;
    const answered = L.correct + L.wrong;
    const accuracy = answered ? Math.round((100 * L.correct) / answered) : 100;
    const perfect = L.wrong === 0;
    let xp = cfg.xp || 10;
    if (perfect && cfg.mode !== 'practice') xp += 5;
    if (L.maxCombo >= 10) xp += 2;
    const boosted = S().isBoosted();
    if (boosted) xp *= 2;
    const summary = S().completeLesson({
      xp, accuracy, perfect, maxCombo: L.maxCombo, timeMs,
      nodeId: cfg.node ? cfg.node.id : null, kind: cfg.kind,
      wordKeys: cfg.wordKeys || [], practice: cfg.mode === 'practice', practiceMode: cfg.practiceMode,
    });
    if (cfg.onPass) cfg.onPass(summary);
    L.summary = summary;
    A.sfx('complete');
    UI.confetti();
    root.querySelector('.ls-top').classList.add('dim');
    const accLabel = accuracy >= 100 ? 'Hoàn hảo' : accuracy >= 90 ? 'Tuyệt vời' : accuracy >= 70 ? 'Tốt' : 'Cố lên';
    const timeLabel = timeMs < 90000 ? 'Siêu nhanh' : timeMs < 240000 ? 'Nhanh' : 'Thời gian';
    const head = cfg.mode === 'jump' ? 'Nhảy cóc thành công!'
      : cfg.kind === 'test' ? 'Vượt qua bài kiểm tra!'
        : cfg.kind === 'review' ? `Hoàn thành ${cfg.node.title}!`
        : cfg.kind === 'topic' ? 'Hoàn thành chủ đề ngữ pháp!'
        : cfg.kind === 'exam' ? 'Hoàn thành bài luyện đề!'
        : cfg.kind === 'reading' ? 'Hoàn thành bài đọc hiểu!'
        : cfg.kind === 'listenc' ? 'Hoàn thành bài nghe hiểu!'
        : cfg.kind === 'pron' ? 'Hoàn thành bài phát âm!'
        : cfg.kind === 'shadow' ? 'Hoàn thành bài nói theo!'
        : perfect ? 'Bài học hoàn hảo!' : 'Hoàn thành bài học!';
    const ach = summary.newAchievements.map(({ a, level }) => `<div class="ach-pill">${a.icon} Thành tích mới: <b>${a.name}</b> · Cấp ${level}</div>`).join('');
    stage().innerHTML = `<div class="result">
      <div class="big-mascot">${Art.mascot('cheer')}</div>
      <h1 class="result-title">${head}</h1>
      ${summary.goalReached ? '<p class="result-sub">🎉 Bạn đã đạt mục tiêu hằng ngày!</p>' : ''}
      ${cfg.mode === 'practice' && !S().heartsUnlimited() ? '<p class="result-sub">❤️ +1 tim nhờ luyện tập</p>' : ''}
      <div class="result-cards">
        <div class="rcard gold"><div class="rcard-h">Tổng KN</div><div class="rcard-b">⚡ <span data-count="${xp}">0</span></div></div>
        <div class="rcard green"><div class="rcard-h">${accLabel}</div><div class="rcard-b">🎯 <span data-count="${accuracy}" data-suffix="%">0</span></div></div>
        <div class="rcard blue"><div class="rcard-h">${timeLabel}</div><div class="rcard-b">⏱ ${U.fmtClock(timeMs)}</div></div>
      </div>
      ${boosted ? '<p class="result-sub">⚡ Đang nhân đôi KN!</p>' : ''}
      ${ach}
    </div>`;
    U.$$('[data-count]', stage()).forEach((el) => UI.countUp(el, +el.dataset.count, 900, el.dataset.suffix || ''));
    setFooter('custom', '<span></span><button class="btn btn-primary btn-wide primary-action" data-l="after-results">Tiếp tục</button>');
  }

  function showStreak() {
    L.phase = 'streak';
    const st = S().state;
    const n = st.streak.count;
    const monday = U.weekStart();
    const today = U.dayKey();
    const labels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const days = labels.map((lab, i) => {
      const d = new Date(monday);
      d.setDate(d.getDate() + i);
      const k = U.dayKey(d);
      const on = st.activeDays.includes(k);
      const frozen = st.streak.frozen.includes(k);
      return `<div class="wd ${on ? 'on' : ''} ${frozen ? 'frozen' : ''} ${k === today ? 'today' : ''}"><span>${lab}</span><i>${on ? '✓' : frozen ? '❄' : ''}</i></div>`;
    }).join('');
    const msg = n === 1 ? 'Khởi đầu tuyệt vời! Hãy quay lại vào ngày mai để giữ chuỗi nhé.'
      : n < 7 ? `Bạn đã học ${n} ngày liên tiếp. Giữ vững phong độ nhé!`
        : `Thật ấn tượng! ${n} ngày học liên tiếp!`;
    stage().innerHTML = `<div class="streak-screen">
      <div class="streak-flame">🔥</div>
      <div class="streak-num">${n}</div>
      <div class="streak-label">ngày streak!</div>
      <div class="week-row">${days}</div>
      <p class="muted">${msg}</p>
    </div>`;
    A.sfx('claim');
    setFooter('custom', '<span></span><button class="btn btn-primary btn-wide primary-action" data-l="close">Tiếp tục</button>');
  }

  function close() {
    if (!L) return;
    const cfg = L.cfg;
    const finished = L.phase === 'results' || L.phase === 'streak';
    L = null;
    A.stop();
    root.classList.remove('open');
    document.body.classList.remove('in-lesson');
    setTimeout(() => { if (!L) root.innerHTML = ''; }, 200);
    if (cfg.onClose) cfg.onClose(finished);
    EV.app.render();
  }

  function askQuit() {
    if (!L) return;
    if (L.phase === 'results' || L.phase === 'streak' || L.phase === 'nohearts') { close(); return; }
    UI.modal({
      className: 'confirm',
      html: `<div class="confirm-box">
        <div class="confirm-mascot">${Art.mascot('sad')}</div>
        <h2>Khoan đã, đừng đi!</h2>
        <p class="muted">Nếu thoát bây giờ, bạn sẽ mất tiến độ của bài học này.</p>
        <div class="confirm-actions">
          <button class="btn btn-blue btn-block" data-close>Tiếp tục học</button>
          <button class="btn btn-ghost btn-danger-text btn-block" data-quit>Thoát bài học</button>
        </div></div>`,
      onMount(body, closeModal) {
        body.querySelector('[data-quit]').onclick = () => { closeModal(); close(); };
      },
    });
  }

  function skipSpeaking() {
    S().state.speakOffUntil = Date.now() + S().CONST.SPEAK_OFF_MS;
    S().save();
    const before = L.queue.length;
    L.queue = L.queue.filter((e) => e.type !== 'speak');
    L.total -= before - L.queue.length;
    L.done++;
    UI.toast('Đã tạm tắt bài tập nói trong 1 giờ.');
    next();
  }

  const ACTIONS = {
    quit: askQuit,
    check,
    skip: () => { if (L.phase === 'answer') applyResult({ ok: false, skipped: true }); },
    nospeak: () => { if (L.phase === 'answer') skipSpeaking(); },
    continue: cont,
    'after-results': () => { if (L.summary && L.summary.streakExtended) showStreak(); else close(); },
    close,
    refill: () => {
      if (S().buyRefill()) {
        UI.toast('❤️ Đã hồi đầy tim!');
        root.querySelector('.ls-top').classList.remove('dim');
        next();
      }
    },
    'go-practice': () => { close(); location.hash = '#/practice'; },
  };

  function numberKey(n) {
    const ex = L.ex;
    if (isChoice(ex)) { choose(n === 0 ? 9 : n - 1); return; }
    if (ex.type === 'match') {
      const k = n === 0 ? 10 : n;
      const cnt = ex.pairs.length;
      let btn = null;
      if (k <= cnt) btn = stage().querySelector(`.mcol:first-child .mtile:nth-child(${k})`);
      else if (k <= cnt * 2) btn = stage().querySelector(`.mcol:last-child .mtile:nth-child(${k - cnt})`);
      if (btn && !btn.disabled) btn.click();
    }
  }

  function onKey(e) {
    if (!L || UI.modalOpen()) return;
    const tag = (e.target.tagName || '').toLowerCase();
    const typing = tag === 'input' || tag === 'textarea';
    if (e.key === 'Enter') {
      if (typing && e.shiftKey) return;
      e.preventDefault();
      const b = root.querySelector('.ls-footer .primary-action');
      if (b && !b.disabled) b.click();
      return;
    }
    if (e.key === 'Escape') { askQuit(); return; }
    if (typing || L.phase !== 'answer') return;
    if (/^[0-9]$/.test(e.key)) { e.preventDefault(); numberKey(+e.key); return; }
    if (e.key === 'Backspace' && L.exState && L.exState.removeLast && !L.exState.kb) { e.preventDefault(); L.exState.removeLast(); }
  }

  function init() {
    root = document.getElementById('lesson');
    root.addEventListener('click', (e) => {
      if (!L) return;
      const act = e.target.closest('[data-l]');
      if (act) { const fn = ACTIONS[act.dataset.l]; if (fn) fn(act); return; }
      const ch = e.target.closest('[data-i]');
      if (ch && isChoice(L.ex)) { choose(+ch.dataset.i); return; }
      const say = e.target.closest('[data-say]');
      if (say) {
        if (L.ex && L.ex.type === 'listenComp') { playTask(L.ex, say.dataset.say === 'slow'); return; }
        const t = sayTextOf(L.ex);
        if (t) A.speak(t, { slow: say.dataset.say === 'slow' });
        return;
      }
      const sayT = e.target.closest('[data-say-text]');
      if (sayT) { A.speak(sayT.dataset.sayText); return; }
      const hw = e.target.closest('.hw, .nw');
      if (hw) {
        U.$$('.hw.show', root).forEach((x) => { if (x !== hw) x.classList.remove('show'); });
        if (hw.classList.contains('hw')) hw.classList.toggle('show');
        A.speak(hw.dataset.word);
      }
    });
    document.addEventListener('keydown', onKey);
  }

  // peek(): chỉ dùng để kiểm thử tự động (đọc bài tập hiện tại)
  EV.lesson = { init, start, isOpen: () => !!L, peek: () => L, texts: (ex) => ({ say: sayTextOf(ex), after: afterSayOf(ex) }) };
})();
