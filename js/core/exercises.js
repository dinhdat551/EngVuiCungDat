/* EngVui – sinh bài tập tự động từ dữ liệu giáo trình */
(function () {
  const U = EV.util;
  const C = EV.course;

  const itemOf = (x) => (x ? { kind: x.kind, key: x.key } : null);

  /* ---------- ngữ cảnh theo unit ---------- */
  const ctxCache = {};
  function ctxFor(unit) {
    if (ctxCache[unit.id]) return ctxCache[unit.id];
    const grade = C.getGrade(unit.grade);
    let pool = grade.units.flatMap((u) => u.words);
    [unit.grade - 1, unit.grade + 1, unit.grade - 2, unit.grade + 2].forEach((g2) => {
      const G2 = pool.length < 80 ? C.getGrade(g2) : null;
      if (G2) pool = pool.concat(G2.units.flatMap((u) => u.words));
    });
    const ctx = {
      unit, grade, g: unit.grade, pool,
      sentences: grade.units.flatMap((u) => u.sentences),
      proper: C.properNouns(unit.grade),
    };
    // Chủ đề ngữ pháp: thêm các tên riêng hay đứng đầu câu (Tom, Mai…) để thẻ từ giữ chữ hoa
    if (unit.isTopic) {
      const B = C.topicBook(unit.book);
      ctx.proper = new Set([...ctx.proper, ...B.names]);
      // Chủ đề có từ vựng (Luyện thi): phương án nhiễu ưu tiên từ cùng nhóm (TOEIC hoặc IELTS)
      if (unit.words.length) ctx.pool = B.topics.filter((t) => t.group === unit.group).flatMap((t) => t.words).concat(ctx.pool);
    }
    ctxCache[unit.id] = ctx;
    return ctx;
  }

  function distractWords(ctx, target, n, filter) {
    const seenEn = new Set([target.en.toLowerCase()]);
    const seenVi = new Set([target.vi.toLowerCase()]);
    const seenEmoji = new Set([target.emoji]);
    const cands = U.shuffle(ctx.unit.words).concat(U.shuffle(ctx.pool));
    const out = [];
    for (const w of cands) {
      const e = w.en.toLowerCase(), v = w.vi.toLowerCase();
      if (seenEn.has(e) || seenVi.has(v)) continue;
      if (filter && !filter(w, seenEmoji)) continue;
      seenEn.add(e);
      seenVi.add(v);
      if (w.emoji) seenEmoji.add(w.emoji);
      out.push(w);
      if (out.length >= n) break;
    }
    return out;
  }

  /* ---------- thẻ từ cho bài sắp xếp câu ---------- */
  function tileText(core, idx, ch, proper) {
    const startsSentence = idx === 0 || /[.?!]/.test(ch[idx - 1].post);
    if (!startsSentence) return core;
    if (proper.has(core) || /^I('|$)/.test(core) || /^[A-Z0-9]{2,}/.test(core)) return core;
    return core.charAt(0).toLowerCase() + core.slice(1);
  }
  function sentenceTiles(ctx, s) {
    const ch = U.chunks(s.en);
    const groups = U.nameGroups(ch);
    const out = [];
    for (let i = 0; i < ch.length; i++) {
      const g = groups.find((x) => x.from === i);
      if (g) {
        // Tên riêng nhiều chữ (Ho Chi Minh City) là một thẻ, giữ nguyên chữ hoa
        out.push(ch.slice(g.from, g.to + 1).map((c) => c.core).join(' '));
        i = g.to;
      } else {
        out.push(tileText(ch[i].core, i, ch, ctx.proper));
      }
    }
    return out;
  }
  function extraTiles(ctx, s, tokens, n) {
    const have = new Set(tokens.map((t) => t.toLowerCase()));
    const out = [];
    const take = (list) => {
      for (const t of U.shuffle(list)) {
        if (out.length >= n) return;
        const k = t.toLowerCase();
        if (have.has(k)) continue;
        have.add(k);
        out.push(t);
      }
    };
    take(ctx.unit.sentences.filter((x) => x !== s).flatMap((x) => sentenceTiles(ctx, x)));
    if (out.length < n) take(U.sample(ctx.sentences, 10).flatMap((x) => sentenceTiles(ctx, x)));
    if (out.length < n) take(ctx.pool.filter((w) => !/\s/.test(w.en)).map((w) => w.en));
    return out;
  }

  function mk(ctx, ex) {
    if (ex) ex.unit = ctx.unit;
    return ex;
  }

  // Cách nói tương đương: học sinh chọn cách nào cũng đúng (Bye/Goodbye, Hi/Hello...).
  const SYNONYMS = [['goodbye', 'bye'], ['hello', 'hi'], ['thank you', 'thanks'], ['okay', 'ok']];
  const matchCase = (from, to) => (/^[A-Z]/.test(from) ? to.charAt(0).toUpperCase() + to.slice(1) : to);
  // Trả về danh sách câu đúng: câu gốc đứng đầu, sau đó là các câu thay từ tương đương.
  function alternatives(en) {
    const out = [en];
    for (let i = 0; i < out.length && out.length < 12; i++) {
      SYNONYMS.forEach(([a, b]) => {
        [[a, b], [b, a]].forEach(([from, to]) => {
          const re = new RegExp('\\b' + from + '\\b', 'i');
          const m = out[i].match(re);
          if (!m) return;
          const next = out[i].replace(re, matchCase(m[0], to));
          if (!out.includes(next)) out.push(next);
        });
      });
    }
    return out;
  }

  const TFNG = ['True', 'False', 'Not Given'];
  const TFNG_TIP = {
    head: '💡 Mẹo làm bài', title: 'True, False hay Not Given?',
    text: 'True: thông tin trong bài khớp với câu đã cho. False: bài đọc nói ngược lại. '
      + 'Not Given: bài đọc không nhắc đến thông tin đó, dù câu nghe có vẻ hợp lý. Chỉ dựa vào bài đọc, không dựa vào hiểu biết riêng.',
    examples: [],
  };

  const plain = (w) => String(w).replace(/[\[\]]/g, '');
  // Từ viết hoa âm tiết được nhấn: com-PU-ter
  const stressLabel = (s) => s.syl.map((x, i) => (i === s.idx ? x.toUpperCase() : x.toLowerCase())).join('-');

  /* ---------- các dạng bài ---------- */
  const X = {
    picture(ctx, w, isNew) {
      if (!w.emoji) return null;
      const ds = distractWords(ctx, w, 3, (d, seen) => d.emoji && !seen.has(d.emoji));
      if (ds.length < 2) return null;
      return mk(ctx, {
        type: 'picture', word: w, isNew, item: itemOf(w),
        options: U.shuffle([w].concat(ds)).map((o) => ({ text: o.en, emoji: o.emoji, say: o.en, correct: o === w })),
      });
    },
    select(ctx, w, dir, isNew) {
      const ds = distractWords(ctx, w, 3);
      if (ds.length < 2) return null;
      return mk(ctx, {
        type: 'select', dir, word: w, isNew, item: itemOf(w),
        options: U.shuffle([w].concat(ds)).map((o) => ({
          text: dir === 'en2vi' ? o.vi : o.en, say: dir === 'vi2en' ? o.en : null, correct: o === w,
        })),
      });
    },
    listen(ctx, w, mode) {
      const ds = distractWords(ctx, w, 3);
      if (ds.length < 2) return null;
      return mk(ctx, {
        type: 'listen', mode, word: w, item: itemOf(w),
        options: U.shuffle([w].concat(ds)).map((o) => ({ text: mode === 'meaning' ? o.vi : o.en, correct: o === w })),
      });
    },
    match(ctx, words) {
      const ws = U.uniqBy(U.uniqBy(words, (w) => w.en.toLowerCase()), (w) => w.vi.toLowerCase()).slice(0, 5);
      if (ws.length < 3) return null;
      const pairs = ws.map((w, i) => ({ id: i, en: w.en, vi: w.vi, item: itemOf(w) }));
      return mk(ctx, {
        type: 'match', pairs,
        left: U.shuffle(pairs.map((p) => p.id)), right: U.shuffle(pairs.map((p) => p.id)),
        items: pairs.map((p) => p.item),
      });
    },
    typeWord(ctx, w) {
      // Nhiều từ có cùng nghĩa tiếng Việt (luggage/baggage, bike/bicycle): gõ từ nào cũng đúng
      const vi = w.vi.trim().toLowerCase();
      const answers = [w.en];
      ctx.unit.words.concat(ctx.pool).forEach((o) => {
        if (o.vi.trim().toLowerCase() === vi && !answers.some((a) => a.toLowerCase() === o.en.toLowerCase())) answers.push(o.en);
      });
      return mk(ctx, { type: 'typeWord', word: w, answer: w.en, answers, item: itemOf(w) });
    },
    listenWord(ctx, w) {
      return mk(ctx, { type: 'listenType', word: w, answer: w.en, item: itemOf(w) });
    },
    wordBank(ctx, s, listen) {
      if (!s) return null;
      const tokens = sentenceTiles(ctx, s);
      if (tokens.length < 2) return null;
      const nExtra = ctx.g <= 2 ? 2 : (ctx.g <= 5 || tokens.length > 12) ? 3 : 4;
      const tiles = U.shuffle(tokens.concat(extraTiles(ctx, s, tokens, nExtra))).map((t, i) => ({ id: i, text: t }));
      return mk(ctx, {
        type: listen ? 'listenTiles' : 'wordBank', sentence: s, answer: s.en, answers: alternatives(s.en), tiles, item: itemOf(s),
      });
    },
    translate(ctx, s, dir) {
      if (!s) return null;
      const others = U.shuffle(ctx.unit.sentences.filter((x) => x !== s))
        .concat(U.shuffle(ctx.sentences.filter((x) => x.unitId !== s.unitId)).slice(0, 8));
      const ds = U.uniqBy(others.filter((x) => x.vi !== s.vi && x.en !== s.en), (x) => x.vi).slice(0, 2);
      if (ds.length < 2) return null;
      return mk(ctx, {
        type: 'translate', dir, sentence: s, item: itemOf(s),
        options: U.shuffle([s].concat(ds)).map((o) => ({
          text: dir === 'en2vi' ? o.vi : o.en, say: dir === 'vi2en' ? o.en : null, correct: o === s,
        })),
      });
    },
    fill(ctx, s, onlyWords) {
      if (!s) return null;
      const ch = U.chunks(s.en);
      const low = ch.map((c) => c.core.toLowerCase());
      const cands = [];
      (onlyWords || ctx.unit.words).forEach((w) => {
        const wt = U.tokenize(w.en).map((t) => t.toLowerCase());
        if (!wt.length) return;
        for (let i = 0; i + wt.length <= low.length; i++) {
          let ok = wt.every((t, k) => low[i + k] === t);
          for (let k = i; ok && k < i + wt.length - 1; k++) if (ch[k].post) ok = false;
          if (ok) { cands.push({ w, i, len: wt.length }); break; }
        }
      });
      if (!cands.length) return null;
      const c = U.pick(cands);
      const lowS = ' ' + low.join(' ') + ' ';
      const notInSentence = (d) => !lowS.includes(' ' + U.tokenize(d.en).join(' ').toLowerCase() + ' ');
      let ds = distractWords(ctx, c.w, 3, (d) => notInSentence(d) && U.tokenize(d.en).length === c.len);
      if (ds.length < 2) ds = distractWords(ctx, c.w, 3, notInSentence);
      if (ds.length < 2) return null;
      return mk(ctx, {
        type: 'fill', sentence: s, blank: { i: c.i, len: c.len }, word: c.w, item: itemOf(c.w),
        options: U.shuffle([c.w].concat(ds)).map((o) => ({ text: o.en, correct: o === c.w })),
      });
    },
    quiz(ctx, q) {
      if (!q) return null;
      return mk(ctx, {
        type: 'quiz', quiz: q, item: itemOf(q),
        options: U.shuffle([{ text: q.answer, correct: true }].concat(q.wrong.map((t) => ({ text: t, correct: false })))),
      });
    },
    // Nghe hiểu: nghe cả đoạn (nhiều người nói) rồi trả lời. Phần chữ chỉ hiện sau khi trả lời.
    // task.hide (Part 2 TOEIC): phương án chỉ ghi A, B, C và đọc trong bài nghe
    listenComp(ctx, task, q) {
      if (!task || !q) return null;
      const base = { type: 'listenComp', task, question: q, item: itemOf(q) };
      if (Array.isArray(q.answer)) return mk(ctx, Object.assign(base, { fill: true, answers: q.answer, answer: q.answer[0] }));
      let options = [{ text: q.answer, correct: true }].concat(q.wrong.map((t) => ({ text: t, correct: false })));
      options = task.hide ? options.sort((a, b) => (a.text < b.text ? -1 : 1)) : U.shuffle(options);
      return mk(ctx, Object.assign(base, { options, fixedOrder: !!task.hide }));
    },
    // Điền từ (gõ) vào chỗ trống; có thể có vài đáp án đúng
    gapFill(ctx, g) {
      return g ? mk(ctx, { type: 'gapFill', gap: g, answer: g.answers[0], answers: g.answers, item: itemOf(g) }) : null;
    },
    listenSentence(ctx, s) {
      return s ? mk(ctx, { type: 'listenType', sentence: s, answer: s.en, answers: alternatives(s.en), item: itemOf(s) }) : null;
    },
    speak(ctx, s) {
      return s ? mk(ctx, { type: 'speak', sentence: s, answer: s.en, item: itemOf(s) }) : null;
    },
    tip(ctx, gram) {
      return gram ? mk(ctx, { type: 'tip', grammar: gram }) : null;
    },
    // Phát âm: nghe một từ trong cặp dễ nhầm rồi chọn đúng từ đã nghe
    minimal(ctx, p) {
      if (!p) return null;
      const target = Math.random() < 0.5 ? p.a : p.b;
      return mk(ctx, {
        type: 'minimal', pair: p, target, item: itemOf(p),
        options: [p.a, p.b].map((w) => ({ text: w.en, sub: w.ipa, correct: w === target })),
        explain: `${p.a.en} ${p.a.ipa}: ${p.a.vi} · ${p.b.en} ${p.b.ipa}: ${p.b.vi}`,
      });
    },
    // Chọn từ có phần gạch chân phát âm khác (phần gạch chân viết trong [ ])
    odd(ctx, o) {
      if (!o) return null;
      const options = U.shuffle(o.words.map((w, i) => ({ text: plain(w), mark: w, correct: i === o.answer })));
      return mk(ctx, { type: 'odd', mode: 'sound', options, item: itemOf(o), explain: o.explain });
    },
    // Chọn âm tiết mang trọng âm (giữ thứ tự âm tiết)
    stress(ctx, s) {
      if (!s) return null;
      return mk(ctx, {
        type: 'stress', stress: s, fixedOrder: true, item: itemOf(s),
        options: s.syl.map((x, i) => ({ text: x, correct: i === s.idx })),
        explain: `${stressLabel(s)} ${s.ipa}: ${s.vi}`,
      });
    },
    // Phân loại cách đọc phần gạch chân (đuôi -s, -ed)
    classify(ctx, c) {
      if (!c || !ctx.unit.classes.length) return null;
      return mk(ctx, {
        type: 'classify', cls: c, word: plain(c.mark), fixedOrder: true, item: itemOf(c),
        options: ctx.unit.classes.map((k) => ({ text: k, correct: k === c.cls })),
      });
    },
    // Shadowing: nghe câu mẫu rồi nói theo (không trừ tim khi chưa đạt)
    shadow(ctx, s) {
      return s ? mk(ctx, { type: 'shadow', sentence: s, answer: s.en, item: itemOf(s) }) : null;
    },
    // Câu hỏi đọc hiểu: True/False/Not Given giữ thứ tự cố định, trắc nghiệm thường thì xáo phương án
    reading(ctx, q) {
      const R = ctx.unit.reading;
      if (!q || !R) return null;
      const opts = [{ text: q.answer, correct: true }].concat(q.wrong.map((t) => ({ text: t, correct: false })));
      const tfng = TFNG.includes(q.answer) && opts.length === 3 && opts.every((o) => TFNG.includes(o.text));
      const options = tfng ? TFNG.map((t) => opts.find((o) => o.text === t)) : U.shuffle(opts);
      return mk(ctx, { type: 'reading', reading: R, question: q, tfng, fixedOrder: tfng, options, item: itemOf(q) });
    },
    // Biến đổi câu (chủ đề ngữ pháp): xếp thẻ từ hoặc gõ câu đã biến đổi. Thẻ thừa lấy từ câu gốc
    // (ví dụ "plays" khi phải đổi sang "does … play") và danh sách extra của chủ đề.
    transform(ctx, t) {
      if (!t || !t.answers.length) return null;
      const tokens = sentenceTiles(ctx, { en: t.answers[0] });
      const have = new Set(tokens.map((x) => x.toLowerCase()));
      const n = ctx.g <= 5 ? 3 : 4;
      const extra = [];
      const add = (w, max) => {
        const k = w.toLowerCase();
        if (extra.length >= max || have.has(k)) return;
        have.add(k);
        extra.push(w);
      };
      // Từ lấy từ câu gốc về chữ thường (trừ tên riêng, I, chữ viết tắt), kể cả từ đứng đầu lời nói trong ngoặc kép
      const lower = (w) => (ctx.proper.has(w) || /^I('|$)/.test(w) || /^[A-Z0-9]{2,}/.test(w) ? w : w.charAt(0).toLowerCase() + w.slice(1));
      U.shuffle(sentenceTiles(ctx, { en: t.src }).map(lower)).forEach((w) => add(w, 2));
      U.shuffle(ctx.unit.extra || []).forEach((w) => add(w, n));
      const tiles = U.shuffle(tokens.concat(extra)).map((x, i) => ({ id: i, text: x }));
      return mk(ctx, { type: 'transform', transform: t, answer: t.answers[0], answers: t.answers, tiles, item: itemOf(t) });
    },
  };

  function rotation(g) {
    if (g <= 2) return ['listenText', 'picture', 'vi2en', 'listenText'];
    if (g <= 5) return ['listenText', 'vi2en', 'type', 'picture'];
    return ['listenMeaning', 'vi2en', 'type', 'listenText'];
  }
  function practiceFor(ctx, w, kind) {
    switch (kind) {
      case 'listenText': return X.listen(ctx, w, 'text');
      case 'listenMeaning': return X.listen(ctx, w, 'meaning');
      case 'vi2en': return X.select(ctx, w, 'vi2en');
      case 'en2vi': return X.select(ctx, w, 'en2vi');
      case 'type': return X.typeWord(ctx, w);
      case 'listenType': return X.listenWord(ctx, w);
      case 'picture': return X.picture(ctx, w) || X.select(ctx, w, 'vi2en');
      default: return X.select(ctx, w, 'vi2en');
    }
  }
  function sentencePractice(ctx, s, listenOnly) {
    if (listenOnly) return X.wordBank(ctx, s, true);
    const kinds = ctx.g >= 6 ? ['bank', 'translate', 'fill', 'listen'] : ['bank', 'translate', 'fill'];
    const k = U.pick(kinds);
    if (k === 'translate') return X.translate(ctx, s, ctx.g >= 6 ? U.pick(['en2vi', 'vi2en']) : 'en2vi') || X.wordBank(ctx, s);
    if (k === 'fill') return X.fill(ctx, s) || X.wordBank(ctx, s);
    if (k === 'listen') return X.wordBank(ctx, s, true);
    return X.wordBank(ctx, s);
  }
  const containsWord = (s, w) => (' ' + U.norm(s.en) + ' ').includes(' ' + U.norm(w.en) + ' ');

  /* ---------- các loại bài học ---------- */
  function vocabLesson(ctx, words) {
    const g = ctx.g;
    const rot = rotation(g);
    let r = 0;
    const next = (w) => {
      for (let t = 0; t < rot.length; t++) {
        const ex = practiceFor(ctx, w, rot[r++ % rot.length]);
        if (ex) return ex;
      }
      return null;
    };
    const out = [];
    words.forEach((w, i) => {
      const usePic = w.emoji && (g <= 5 || Math.random() < 0.4);
      out.push((usePic && X.picture(ctx, w, true)) || X.select(ctx, w, 'en2vi', true));
      if (i % 2 === 1) out.push(next(U.pick([words[i - 1], w])));
    });
    if (words.length % 2 === 1) out.push(next(words[words.length - 1]));
    out.push(X.match(ctx, U.sample(words, 5)));
    U.sample(words, 2).forEach((w) => out.push(next(w)));
    const withWord = ctx.unit.sentences.filter((s) => words.some((w) => containsWord(s, w)));
    const f = withWord.length ? X.fill(ctx, U.pick(withWord), words) : null;
    if (f) out.splice(out.length - 1, 0, f);
    return out.filter(Boolean).slice(0, 14);
  }

  // Từ vựng nâng cao của Unit: từ khó hơn kèm vài câu và câu hỏi riêng. Từ nhiễu ưu tiên từ nâng cao cùng lớp
  function advLesson(ctx, node) {
    const u = ctx.unit;
    const G = ctx.grade;
    const unit = Object.assign(Object.create(u), { words: u.advWords, sentences: u.advSentences, quiz: u.advQuiz });
    const a = Object.assign({}, ctx, {
      unit,
      pool: G.units.flatMap((x) => x.advWords || []).concat(ctx.pool),
      sentences: G.units.flatMap((x) => x.advSentences || []).concat(ctx.sentences),
    });
    const words = node.words;
    const rot = rotation(ctx.g);
    let r = 0;
    const next = (w) => {
      for (let t = 0; t < rot.length; t++) {
        const ex = practiceFor(a, w, rot[r++ % rot.length]);
        if (ex) return ex;
      }
      return null;
    };
    const out = [];
    words.forEach((w, i) => {
      out.push(X.select(a, w, 'en2vi', true));
      if (i === 1 || i === 5) out.push(next(U.pick([words[i - 1], w])));
    });
    out.push(X.match(a, U.sample(words, 5)));
    const S = U.shuffle(unit.sentences);
    const withWord = S.filter((s) => words.some((w) => containsWord(s, w)));
    const f = withWord.length ? X.fill(a, U.pick(withWord), words) : null;
    if (f) out.push(f);
    if (S[0]) out.push(X.translate(a, S[0], 'en2vi') || X.wordBank(a, S[0], true));
    if (S[1]) out.push(X.wordBank(a, S[1]));
    U.shuffle(unit.quiz).slice(0, 2).forEach((q) => out.push(X.quiz(a, q)));
    return out.filter(Boolean).slice(0, 17);
  }

  function phrasesLesson(ctx) {
    const S = ctx.unit.sentences.slice(0, 6);
    const out = [];
    S.forEach((s, i) => {
      out.push(X.translate(ctx, s, 'en2vi') || X.wordBank(ctx, s, true));
      if (i > 0) out.push(X.wordBank(ctx, S[i - 1]));
    });
    if (S.length) out.push(X.wordBank(ctx, S[S.length - 1]));
    const fills = U.shuffle(S).map((s) => X.fill(ctx, s)).filter(Boolean).slice(0, 2);
    fills.forEach((f, k) => out.splice(Math.round(out.length * (k + 1) / (fills.length + 1)), 0, f));
    if (ctx.g >= 6) out.push(X.translate(ctx, U.pick(S), 'vi2en'));
    if (S.length <= 3) {
      out.push(X.match(ctx, U.sample(ctx.unit.words, 5)));
      U.sample(ctx.unit.words, 2).forEach((w) => out.push(X.listen(ctx, w, 'text')));
    }
    return out.filter(Boolean).slice(0, 14);
  }

  function grammarLesson(ctx) {
    const u = ctx.unit;
    const tips = u.grammar.map((gm) => X.tip(ctx, gm));
    const quizzes = U.shuffle(u.quiz).map((q) => X.quiz(ctx, q));
    const banks = U.sample(u.sentences, 2).map((s) => X.wordBank(ctx, s));
    const fills = U.shuffle(u.sentences).map((s) => X.fill(ctx, s)).filter(Boolean).slice(0, 2);
    const half = Math.ceil(quizzes.length / 2);
    const out = [tips[0]].concat(quizzes.slice(0, half), [banks[0], fills[0], tips[1]], quizzes.slice(half), [banks[1], fills[1]]);
    // ôn lại 1–2 câu ngữ pháp ở cuối để ghi nhớ
    U.sample(u.quiz, u.quiz.length >= 4 ? 2 : 1).forEach((q) => out.push(X.quiz(ctx, q)));
    return out.filter(Boolean);
  }

  function listeningLesson(ctx) {
    const g = ctx.g;
    const u = ctx.unit;
    const out = [];
    U.sample(u.words, 4).forEach((w, i) => out.push(X.listen(ctx, w, g >= 6 && i % 2 ? 'meaning' : 'text')));
    U.sample(u.sentences, 3).forEach((s) => out.push(X.wordBank(ctx, s, true)));
    if (g >= 3 && g <= 5) {
      U.sample(u.words, 2).forEach((w) => out.push(X.listenWord(ctx, w)));
    } else if (g >= 6) {
      out.push(X.listenWord(ctx, U.pick(u.words)));
      U.sample(u.sentences.filter((s) => U.tokenize(s.en).length <= 10), 2).forEach((s) => out.push(X.listenSentence(ctx, s)));
    }
    let body = U.shuffle(out.filter(Boolean));
    if (EV.store.speakingEnabled()) {
      const s = U.pick(u.sentences.filter((x) => U.tokenize(x.en).length <= 10));
      if (s) body.splice(Math.floor(body.length * 0.6), 0, X.speak(ctx, s));
    }
    return body.slice(0, 13);
  }

  // Bản chỉ luyện từ: kiểm tra Unit toàn bằng từ vựng (mọi từ của Unit, nhiều dạng, thêm nối cặp và điền từ)
  function wordTestLesson(ctx) {
    const g = ctx.g;
    const u = ctx.unit;
    const kinds = g <= 2 ? ['picture', 'listenText', 'vi2en', 'en2vi'] : g <= 5
      ? ['vi2en', 'listenText', 'type', 'picture', 'en2vi'] : ['vi2en', 'type', 'listenMeaning', 'listenType', 'en2vi'];
    const out = U.shuffle(u.words).slice(0, 12).map((w, i) => practiceFor(ctx, w, kinds[i % kinds.length]));
    const f = U.shuffle(u.sentences).map((s) => X.fill(ctx, s)).find(Boolean);
    if (f) out.push(f);
    const body = U.shuffle(out.filter(Boolean));
    const m = X.match(ctx, U.sample(u.words, 5));
    if (m) body.splice(Math.floor(body.length / 2), 0, m);
    return body.slice(0, 15);
  }

  function testLesson(ctx) {
    if (C.VOCAB_ONLY) return wordTestLesson(ctx);
    const g = ctx.g;
    const u = ctx.unit;
    const kinds = g <= 2 ? ['picture', 'listenText', 'vi2en'] : g <= 5
      ? ['vi2en', 'listenText', 'type', 'picture'] : ['vi2en', 'type', 'listenMeaning', 'listenType'];
    const out = [];
    U.shuffle(u.words).slice(0, 6).forEach((w, i) => out.push(practiceFor(ctx, w, kinds[i % kinds.length])));
    const S = U.shuffle(u.sentences);
    S.slice(0, 4).forEach((s, i) => out.push(X.wordBank(ctx, s, i % 2 === 1)));
    if (S[4]) out.push(X.translate(ctx, S[4], g >= 6 ? 'vi2en' : 'en2vi'));
    U.shuffle(u.quiz).slice(0, 3).forEach((q) => out.push(X.quiz(ctx, q)));
    const f = S.map((s) => X.fill(ctx, s)).find(Boolean);
    if (f) out.push(f);
    const body = U.shuffle(out.filter(Boolean));
    const m = X.match(ctx, U.sample(u.words, 5));
    if (m) body.splice(Math.floor(body.length / 2), 0, m);
    return body.slice(0, 16);
  }

  // Bài Review: trộn từ vựng, mẫu câu, ngữ pháp của mọi Unit trong chặng
  function reviewLesson(units) {
    const g = units[0].grade;
    const ctxOf = (x) => ctxFor(C.getUnit(x.unitId));
    const per = (n) => Math.ceil(n / units.length);
    const kinds = g <= 2 ? ['picture', 'listenText', 'vi2en'] : g <= 5
      ? ['vi2en', 'listenText', 'type', 'picture'] : ['vi2en', 'type', 'listenMeaning', 'listenType'];
    const out = [];
    U.shuffle(units.flatMap((u) => U.sample(u.words, per(7)))).slice(0, 7)
      .forEach((w, i) => out.push(practiceFor(ctxOf(w), w, kinds[i % kinds.length])));
    U.shuffle(units.flatMap((u) => U.sample(u.sentences, per(5)))).slice(0, 5).forEach((s, i) => {
      const ctx = ctxOf(s);
      if (i === 3) out.push(X.fill(ctx, s) || X.wordBank(ctx, s, true));
      else if (i === 4) out.push(X.translate(ctx, s, g >= 6 ? 'vi2en' : 'en2vi') || X.wordBank(ctx, s));
      else out.push(X.wordBank(ctx, s, i === 1));
    });
    U.shuffle(units.flatMap((u) => U.sample(u.quiz, 2))).slice(0, g <= 2 ? 2 : 3).forEach((q) => out.push(X.quiz(ctxOf(q), q)));
    const body = U.shuffle(out.filter(Boolean));
    const mu = U.pick(units.filter((u) => u.words.length >= 3));
    const m = mu ? X.match(ctxFor(mu), U.sample(mu.words, 5)) : null;
    if (m) body.splice(Math.floor(body.length / 2), 0, m);
    return body.slice(0, 16);
  }

  // Bài luyện một chủ đề ngữ pháp: thẻ công thức, lý thuyết, trắc nghiệm, xếp câu, dịch, biến đổi câu
  function topicLesson(ctx) {
    const t = ctx.unit;
    const q = U.shuffle(t.quiz).map((x) => X.quiz(ctx, x));
    const tr = U.shuffle(t.transforms).slice(0, 3).map((x) => X.transform(ctx, x));
    const S = U.shuffle(t.sentences);
    const formula = X.tip(ctx, { head: '📐 Công thức', title: t.title, text: t.desc, examples: [], formula: t.formula });
    const tips = t.grammar.map((gm) => X.tip(ctx, gm));
    const gp = U.shuffle(t.gaps || []).slice(0, 4).map((x) => X.gapFill(ctx, x));
    return withGaps([
      formula, tips[0], q[0], q[1], X.wordBank(ctx, S[0]), q[2], tr[0],
      tips[1], q[3], q[4], X.translate(ctx, S[1], ctx.g <= 5 ? 'en2vi' : U.pick(['en2vi', 'vi2en'])), tr[1],
      q[5], X.wordBank(ctx, S[2], true), tr[2], q[6],
    ].filter(Boolean), gp);
  }
  // Xen các câu điền từ vào giữa bài (cách đều nhau), sau câu mở đầu
  function withGaps(list, gaps) {
    gaps = gaps.filter(Boolean);
    if (!gaps.length) return list;
    const out = list.slice();
    const step = Math.max(2, Math.floor(out.length / (gaps.length + 1)));
    gaps.forEach((g, i) => out.splice(Math.min(out.length, 3 + i * (step + 1)), 0, g));
    return out;
  }

  // Bài Luyện đề của một chủ đề TOEIC/IELTS: trắc nghiệm kiểu Part 5, viết lại câu, nối từ, xếp câu, dịch
  function examLesson(ctx) {
    const t = ctx.unit;
    const q = U.shuffle(t.quiz).map((x) => X.quiz(ctx, x));
    const tr = U.shuffle(t.transforms).slice(0, 3).map((x) => X.transform(ctx, x));
    const S = U.shuffle(t.sentences);
    const tips = [];
    if (t.formula.length) tips.push(X.tip(ctx, { head: '📐 Ghi nhớ', title: t.title, text: t.desc, examples: [], formula: t.formula }));
    if (t.grammar[0]) tips.push(X.tip(ctx, Object.assign({ head: '💡 Mẹo làm bài' }, t.grammar[0])));
    const gp = U.shuffle(t.gaps || []).slice(0, 3).map((x) => X.gapFill(ctx, x));
    return withGaps(tips.concat([
      q[0], q[1], t.words.length >= 4 ? X.match(ctx, U.sample(t.words, 5)) : null, q[2], tr[0], S[0] ? X.wordBank(ctx, S[0]) : null,
      q[3], (S[1] && (X.fill(ctx, S[1]) || X.translate(ctx, S[1], 'en2vi'))) || null, tr[1], q[4],
      S[2] ? X.translate(ctx, S[2], U.pick(['en2vi', 'vi2en'])) : null, q[5], S[3] ? X.wordBank(ctx, S[3], true) : null, tr[2], q[6],
    ]).filter(Boolean), gp);
  }

  // Đề thi thử: làm trọn đề theo đúng thứ tự (không xáo câu, không lấy ngẫu nhiên),
  // gồm các câu trắc nghiệm rồi đến câu đọc hiểu. Không có phần từ vựng hay câu nói.
  function mockLesson(ctx) {
    const t = ctx.unit;
    const tips = [X.tip(ctx, { head: '📋 Hướng dẫn', title: t.title, text: t.desc, examples: [], formula: [] })];
    const q = t.quiz.map((x) => X.quiz(ctx, x)).filter(Boolean);
    const gp = (t.gaps || []).map((x) => X.gapFill(ctx, x));
    const r = t.reading ? t.reading.questions.map((x) => X.reading(ctx, x)).filter(Boolean) : [];
    return tips.concat(q, gp, r);
  }

  // Bài nghe hiểu: lần lượt từng bài nghe, mỗi bài nghe có các câu hỏi theo thứ tự trong đề
  const LISTEN_TIP = { head: '🎧 Cách làm bài nghe', title: 'Nghe trước, đọc đáp án sau',
    text: 'Trong đề thật bạn chỉ được nghe một lần. Hãy đọc câu hỏi, nghe cả đoạn rồi chọn đáp án. '
      + 'Ở đây bạn có thể nghe lại và nghe chậm; phần chữ của bài nghe hiện ra sau khi trả lời để bạn đối chiếu.', examples: [], formula: [] };
  function listenCompLesson(ctx) {
    const out = [X.tip(ctx, LISTEN_TIP)];
    (ctx.unit.listening || []).forEach((L) => L.questions.forEach((q) => out.push(X.listenComp(ctx, L, q))));
    return out.filter(Boolean);
  }

  // Chọn từ có trọng âm khác: 3 từ cùng vị trí trọng âm + 1 từ khác, cùng số âm tiết
  function oddStress(ctx, list, n) {
    const groups = {};
    list.forEach((s) => { const k = `${s.syl.length}:${s.idx}`; (groups[k] = groups[k] || []).push(s); });
    const keys = Object.keys(groups).filter((k) => groups[k].length >= 3);
    const out = [];
    for (let tries = 0; tries < 8 && keys.length && out.length < n; tries++) {
      const k = U.pick(keys);
      const len = +k.split(':')[0];
      const others = list.filter((s) => s.syl.length === len && `${s.syl.length}:${s.idx}` !== k);
      if (!others.length) continue;
      const odd = U.pick(others);
      const pick = U.sample(groups[k], 3).concat(odd);
      out.push(mk(ctx, {
        type: 'odd', mode: 'stress', item: itemOf(odd),
        options: U.shuffle(pick.map((s) => ({ text: s.en, correct: s === odd }))),
        explain: pick.map(stressLabel).join(', '),
      }));
    }
    return out;
  }

  // Bài phát âm: thẻ ghi nhớ, rồi trộn nghe cặp từ, phân loại đuôi, trọng âm, chọn âm khác; thêm đọc to nếu bật
  // Chủ đề shadowing: nghe rồi nói theo từng câu, xen 2 câu nghe xếp thẻ
  function pronLesson(ctx) {
    const t = ctx.unit;
    const out = [];
    if (t.formula.length) out.push(X.tip(ctx, { head: t.kind === 'shadow' ? '🎧 Cách luyện' : '📐 Ghi nhớ', title: t.title, text: t.desc, examples: [], formula: t.formula }));
    if (t.grammar[0]) out.push(X.tip(ctx, t.grammar[0]));
    if (t.kind === 'shadow') {
      const S = U.shuffle(t.sentences).slice(0, 6);
      S.forEach((s, i) => {
        out.push(X.shadow(ctx, s));
        if (i === 2 || i === 5) out.push(X.wordBank(ctx, s, true));
      });
      return out.filter(Boolean);
    }
    const body = [];
    U.shuffle(t.pairs).slice(0, 6).forEach((p) => body.push(X.minimal(ctx, p)));
    U.shuffle(t.classify).slice(0, 7).forEach((c) => body.push(X.classify(ctx, c)));
    U.shuffle(t.stress).slice(0, 6).forEach((s) => body.push(X.stress(ctx, s)));
    oddStress(ctx, t.stress, 2).forEach((e) => body.push(e));
    U.shuffle(t.odd).slice(0, 4).forEach((o) => body.push(X.odd(ctx, o)));
    const b = U.shuffle(body.filter(Boolean)).slice(0, 14);
    if (t.grammar[1]) b.splice(Math.floor(b.length / 2), 0, X.tip(ctx, t.grammar[1]));
    if (EV.store.speakingEnabled()) U.sample(t.sentences, 2).forEach((s) => b.push(X.speak(ctx, s)));
    return out.concat(b).filter(Boolean);
  }

  // Bài đọc hiểu: câu hỏi theo đúng thứ tự trong đề (thường đi theo trình tự đoạn văn)
  function readingLesson(ctx) {
    const R = ctx.unit.reading;
    if (!R) return [];
    const qs = R.questions.map((q) => X.reading(ctx, q)).filter(Boolean);
    return (qs.some((e) => e.tfng) ? [X.tip(ctx, TFNG_TIP)] : []).concat(qs);
  }

  function forNode(node) {
    const unit = C.getUnit(node.unitId);
    if (!unit) return [];
    const ctx = ctxFor(unit);
    if (unit.isTopic) {
      if (unit.mock) return mockLesson(ctx);
      if (node.kind === 'vocab') return vocabLesson(ctx, node.words);
      if (node.kind === 'reading') return readingLesson(ctx);
      if (node.kind === 'listenc') return listenCompLesson(ctx);
      if (unit.book === 'pr') return pronLesson(ctx);
      return unit.book === 'ex' ? examLesson(ctx) : topicLesson(ctx);
    }
    switch (node.key) {
      case 'v1':
      case 'v2': return vocabLesson(ctx, node.words);
      case 'va': return advLesson(ctx, node);
      case 'ph': return phrasesLesson(ctx);
      case 'gr': return grammarLesson(ctx);
      case 'ls': return listeningLesson(ctx);
      case 'test': return testLesson(ctx);
      case 'rv': return reviewLesson(node.units);
      default: return [];
    }
  }

  // Bài kiểm tra "nhảy cóc" tới một unit: ôn nội dung 2 unit liền trước
  function jumpLesson(grade, unitIndex) {
    const G = C.getGrade(grade);
    if (!G) return [];
    const prev = G.units.slice(Math.max(0, unitIndex - 2), unitIndex);
    const out = [];
    prev.forEach((u) => {
      const ctx = ctxFor(u);
      const rot = rotation(ctx.g);
      if (C.VOCAB_ONLY) {
        U.sample(u.words, prev.length === 1 ? 10 : 6).forEach((w, i) => out.push(practiceFor(ctx, w, rot[i % rot.length])));
        return;
      }
      U.sample(u.words, prev.length === 1 ? 5 : 3).forEach((w, i) => out.push(practiceFor(ctx, w, rot[i % rot.length])));
      U.sample(u.sentences, prev.length === 1 ? 3 : 2).forEach((s) => out.push(X.wordBank(ctx, s)));
      U.sample(u.quiz, prev.length === 1 ? 2 : 1).forEach((q) => out.push(X.quiz(ctx, q)));
    });
    return U.shuffle(out.filter(Boolean)).slice(0, 12);
  }

  // Luyện từ theo nhóm chủ đề (TOEIC hoặc IELTS): khoảng 7 từ đã học còn yếu + vài từ mới (có câu giới thiệu).
  // Trả về cả danh sách từ để từ mới được đưa vào Sổ từ vựng khi làm xong.
  function groupWordsLesson(book, groupId) {
    const B = C.topicBook(book);
    if (!B) return { exercises: [], wordKeys: [] };
    const L = EV.store.state.learned;
    const all = B.topics.filter((t) => t.group === groupId).flatMap((t) => t.words);
    const learned = all.filter((w) => L[w.key]).sort((a, b) => (L[a.key].s - L[b.key].s) || (L[a.key].t - L[b.key].t));
    const old = U.sample(learned.slice(0, 16), 7);
    const neu = U.shuffle(all.filter((w) => !L[w.key])).slice(0, Math.max(3, 10 - old.length));
    const words = old.concat(neu).slice(0, 10);
    if (!words.length) return { exercises: [], wordKeys: [] };
    const ctxOf = (w) => ctxFor(C.getUnit(w.unitId));
    const kinds = ['vi2en', 'type', 'listenMeaning', 'en2vi', 'listenType'];
    const intro = neu.map((w) => X.select(ctxOf(w), w, 'en2vi', true));
    const drill = U.shuffle(words).map((w, i) => practiceFor(ctxOf(w), w, kinds[i % kinds.length]));
    const fills = U.shuffle(words).map((w) => {
      const s = C.getUnit(w.unitId).sentences.find((x) => containsWord(x, w));
      return s ? X.fill(ctxOf(w), s, [w]) : null;
    }).filter(Boolean).slice(0, 2);
    const body = U.shuffle(drill.concat(fills).filter(Boolean));
    const m = words.length >= 3 ? X.match(ctxOf(words[0]), U.sample(words, 5)) : null;
    if (m) body.splice(Math.floor(body.length / 2), 0, m);
    return { exercises: intro.filter(Boolean).concat(body).slice(0, 16), wordKeys: words.map((w) => w.key) };
  }

  /* ---------- luyện tập ---------- */
  function studiedUnits() {
    const ids = new Set();
    Object.keys(EV.store.state.progress).forEach((k) => {
      const [uid, key] = k.split(':');
      if (key !== 'chest') ids.add(uid);
    });
    return Array.from(ids).map((id) => C.getUnit(id)).filter(Boolean);
  }

  function exerciseForItem(it, mode) {
    const unit = C.getUnit(it.unitId);
    if (!unit) return null;
    const ctx = ctxFor(unit);
    if (it.kind === 'word') {
      if (mode === 'listen') return X.listen(ctx, it, ctx.g >= 6 ? U.pick(['text', 'meaning']) : 'text');
      return practiceFor(ctx, it, U.pick(rotation(ctx.g)));
    }
    if (it.kind === 'sentence') {
      if (mode === 'speak') return X.speak(ctx, it);
      return sentencePractice(ctx, it, mode === 'listen');
    }
    if (it.kind === 'quiz') return X.quiz(ctx, it);
    if (it.kind === 'transform') return X.transform(ctx, it);
    if (it.kind === 'reading') return X.reading(ctx, it);
    if (it.kind === 'gap') return X.gapFill(ctx, it);
    if (it.kind === 'listening') return X.listenComp(ctx, (unit.listening || [])[it.li], it);
    if (it.kind === 'pair') return X.minimal(ctx, it);
    if (it.kind === 'odd') return X.odd(ctx, it);
    if (it.kind === 'stress') return X.stress(ctx, it);
    if (it.kind === 'classify') return X.classify(ctx, it);
    return null;
  }

  function practiceLesson(mode, opt) {
    const st = EV.store.state;
    let items = [];
    if (mode === 'mistakes') {
      items = st.mistakes.slice(0, 12).map((k) => C.resolveItem(k)).filter(Boolean);
    } else if (mode === 'unit') {
      const u = C.getUnit(opt);
      if (u) items = U.sample(u.words, 6).concat(U.sample(u.sentences, 3), U.sample(u.quiz, 2));
    } else {
      const units = studiedUnits();
      if (!units.length) return [];
      const words = units.flatMap((u) => u.words.filter((w) => st.learned[w.key]));
      const allWords = words.length >= 4 ? words : units.flatMap((u) => u.words);
      const sents = units.flatMap((u) => u.sentences);
      const weak = allWords.slice().sort((a, b) => {
        const A = st.learned[a.key] || { s: 0, t: 0 }, B = st.learned[b.key] || { s: 0, t: 0 };
        return (A.s - B.s) || (A.t - B.t);
      });
      if (mode === 'speak') {
        items = U.sample(sents.filter((s) => U.tokenize(s.en).length <= 12), 6);
      } else if (mode === 'listen') {
        items = U.sample(weak.slice(0, 20), 5).concat(U.sample(sents, 5));
      } else {
        items = U.sample(weak.slice(0, 16), 7).concat(U.sample(sents, 4), U.sample(units.flatMap((u) => u.quiz), 2));
      }
    }
    if (C.VOCAB_ONLY) items = items.filter((it) => it.kind === 'word');
    if (C.VOCAB_ONLY && mode !== 'mistakes' && mode !== 'unit' && items.length < 10) {
      // chỉ còn từ nên lấy thêm từ cho đủ bài
      const units = studiedUnits();
      const have = new Set(items.map((i) => i.key));
      const learned = units.flatMap((u) => u.words.filter((w) => st.learned[w.key] && !have.has(w.key)));
      items = items.concat(U.sample(learned, 10 - items.length));
    } else if (C.VOCAB_ONLY && mode === 'unit') {
      const u = C.getUnit(opt);
      if (u) items = U.sample(u.words, 10);
    }
    let out = U.shuffle(items).map((it) => exerciseForItem(it, mode)).filter(Boolean);
    if (mode === 'mistakes' && out.length < 8) out = out.concat(practiceLesson('review').slice(0, 10 - out.length));
    if (mode !== 'speak' && mode !== 'listen') {
      const ws = items.filter((i) => i.kind === 'word');
      if (ws.length >= 3) {
        const m = X.match(ctxFor(C.getUnit(ws[0].unitId)), ws.filter((w) => w.unitId === ws[0].unitId).length >= 3
          ? ws.filter((w) => w.unitId === ws[0].unitId) : ws);
        if (m) out.splice(Math.floor(out.length / 2), 0, m);
      }
    }
    return out.slice(0, 14);
  }

  EV.ex = { forNode, jumpLesson, practiceLesson, studiedUnits, ctxFor, groupWordsLesson };
})();
