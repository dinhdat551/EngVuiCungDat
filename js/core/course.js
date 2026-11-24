/* EngVui – cấu trúc khóa học: Cấp → Lớp → Unit → Bài (node) */
(function () {
  const U = EV.util;

  const LEVELS = [
    { id: 1, name: 'Cấp 1', full: 'Tiểu học', grades: [1, 2, 3, 4, 5], color: '#58CC02', dark: '#46A302', emoji: '🎒' },
    { id: 2, name: 'Cấp 2', full: 'Trung học cơ sở', grades: [6, 7, 8, 9], color: '#1CB0F6', dark: '#1899D6', emoji: '📘' },
    { id: 3, name: 'Cấp 3', full: 'Trung học phổ thông', grades: [10, 11, 12], color: '#CE82FF', dark: '#A568CC', emoji: '🎓' },
  ];

  const UNIT_COLORS = [
    ['#58CC02', '#46A302'],
    ['#CE82FF', '#A568CC'],
    ['#00CD9C', '#00A47D'],
    ['#1CB0F6', '#1899D6'],
    ['#FF9600', '#D97F00'],
    ['#FF86D0', '#DB6BB0'],
    ['#FF4B4B', '#D63A3A'],
    ['#2B70C9', '#1F5AA6'],
  ];

  const NODE_META = {
    v1: { title: 'Từ vựng 1', icon: 'star', kind: 'vocab', xp: 10 },
    v2: { title: 'Từ vựng 2', icon: 'star', kind: 'vocab', xp: 10 },
    chest: { title: 'Rương báu', icon: 'chest', kind: 'chest', xp: 0 },
    ph: { title: 'Mẫu câu', icon: 'chat', kind: 'phrases', xp: 10 },
    gr: { title: 'Ngữ pháp', icon: 'book', kind: 'grammar', xp: 10 },
    ls: { title: 'Luyện nghe', icon: 'headphones', kind: 'listening', xp: 10 },
    va: { title: 'Từ vựng nâng cao', icon: 'star', kind: 'vocab', xp: 15 },
    test: { title: 'Kiểm tra Unit', icon: 'trophy', kind: 'test', xp: 20 },
    rv: { title: 'Review', icon: 'review', kind: 'review', xp: 20 },
  };

  // Unit cuối của mỗi chặng Review 1–4 trong sách Global Success
  const VOCAB_ONLY = !!(EV.config && EV.config.vocabOnly);
  const reviewEnds = (g) => (VOCAB_ONLY ? [] : reviewEndsSgk(g));
  const reviewEndsSgk = (g) => (g <= 2 ? [4, 8, 12, 16] : g <= 5 ? [5, 10, 15, 20] : g <= 9 ? [3, 6, 9, 12] : [3, 5, 8, 10]);

  const levelOf = (g) => (g <= 5 ? 1 : g <= 9 ? 2 : 3);
  const cache = {};

  function makeNode(unit, key, extra) {
    const m = NODE_META[key];
    return Object.assign({
      key, id: `${unit.id}:${key}`, unitId: unit.id, grade: unit.grade,
      title: m.title, icon: m.icon, kind: m.kind, xp: m.xp,
    }, extra || {});
  }

  const splitBar = (x) => String(x || '').split('|').map((s) => s.trim()).filter(Boolean);
  // Câu, ngữ pháp, quiz: dùng chung cho Unit và chủ đề ngữ pháp
  function content(id, raw) {
    return {
      sentences: (raw.sentences || []).map((s, k) => ({ en: s[0], vi: s[1], key: `${id}:s:${k}`, unitId: id, kind: 'sentence' })),
      grammar: (raw.grammar || []).map((x) => ({ title: x[0], text: x[1], examples: splitBar(x[2]) })),
      quiz: (raw.quiz || []).map((q, k) => ({
        q: q[0], answer: q[1], wrong: q[2] || [], explain: q[3] || '', key: `${id}:q:${k}`, unitId: id, kind: 'quiz',
      })),
    };
  }

  function buildUnit(g, raw, i) {
    const id = `g${g}u${raw.n}`;
    const [color, dark] = UNIT_COLORS[i % UNIT_COLORS.length];
    const unit = Object.assign({
      id, grade: g, n: raw.n, title: raw.title, vi: raw.vi || '', icon: raw.icon || '📘', color, dark,
      words: (raw.words || []).map((w) => ({
        en: w[0], vi: w[1], emoji: w[2] || '', key: `${id}:w:${String(w[0]).toLowerCase()}`, unitId: id, kind: 'word',
      })),
    }, content(id, raw));
    // Từ vựng nâng cao: tách riêng khỏi words để bài kiểm tra, ôn tập, nghe không hỏi từ chưa học
    const A = (EV.advData && EV.advData[id]) || null;
    unit.advWords = A ? (A.words || []).map((w) => ({
      en: w[0], vi: w[1], emoji: w[2] || '', key: `${id}:w:${String(w[0]).toLowerCase()}`, unitId: id, kind: 'word', adv: true,
    })) : [];
    unit.advSentences = A ? (A.sentences || []).map((s, k) => ({ en: s[0], vi: s[1], key: `${id}:as:${k}`, unitId: id, kind: 'sentence' })) : [];
    unit.advQuiz = A ? (A.quiz || []).map((q, k) => ({
      q: q[0], answer: q[1], wrong: q[2] || [], explain: q[3] || '', key: `${id}:aq:${k}`, unitId: id, kind: 'quiz',
    })) : [];
    const W = unit.words;
    const nodes = [];
    if (W.length >= 8) {
      const half = Math.ceil(W.length / 2);
      nodes.push(makeNode(unit, 'v1', { words: W.slice(0, half) }));
      nodes.push(makeNode(unit, 'v2', { words: W.slice(half) }));
    } else if (W.length) {
      nodes.push(makeNode(unit, 'v1', { words: W, title: 'Từ vựng' }));
    }
    if (EV.config.economy) nodes.push(makeNode(unit, 'chest'));   // rương báu cho đá quý: chỉ khi bật economy
    if (VOCAB_ONLY) {
      // Bản chỉ luyện từ: Từ vựng 1, 2, rương, rồi kiểm tra từ vựng (không có mẫu câu, ngữ pháp, luyện nghe)
      nodes.push(makeNode(unit, 'test', { title: 'Kiểm tra từ vựng' }));
    } else {
      if (unit.sentences.length) nodes.push(makeNode(unit, 'ph'));
      if (unit.quiz.length) nodes.push(makeNode(unit, 'gr'));
      nodes.push(makeNode(unit, 'ls'));
      nodes.push(makeNode(unit, 'test'));
    }
    // Bài tùy chọn ở cuối Unit: không chặn bài sau, không tính vào số bài của Unit
    if (unit.advWords.length) nodes.push(makeNode(unit, 'va', { words: unit.advWords, adv: true }));
    nodes.forEach((n, idx) => { n.index = idx; });
    unit.nodes = nodes;
    unit.lessonCount = nodes.filter((n) => n.kind !== 'chest' && !n.adv).length;
    return unit;
  }

  function getGrade(g) {
    g = Number(g);
    if (cache[g]) return cache[g];
    const raw = EV.gradesData[g];
    if (!raw || !raw.units || !raw.units.length) return null;
    const units = raw.units.map((u, i) => buildUnit(g, u, i));
    const grade = { grade: g, book: raw.book || `Tiếng Anh ${g}`, level: levelOf(g), units, nodes: [] };
    // Bài Review nằm sau Unit cuối của chặng, ôn lại các Unit trong chặng. Không tính vào số bài của Unit.
    const ends = reviewEnds(g);
    let from = 0, k = 0;
    units.forEach((u, i) => {
      if (!ends.includes(u.n)) return;
      k++;
      u.review = makeNode(u, 'rv', { title: `Review ${k}`, n: k, units: units.slice(from, i + 1), index: u.nodes.length });
      from = i + 1;
    });
    units.forEach((u) => {
      u.nodes.forEach((n) => grade.nodes.push(n));
      if (u.review) grade.nodes.push(u.review);
    });
    cache[g] = grade;
    return grade;
  }

  /* ---------- chuyên đề ngoài SGK: Ngữ pháp (mã gm-<id>) và Luyện thi (mã ex-<id>) ----------
     Mỗi chủ đề là một "Unit" đặc biệt (isTopic) nên tiến độ, lỗi sai, ôn tập dùng lại được code của Unit. */
  const BOOKS = { gm: () => EV.grammarData, ex: () => EV.examData, pr: () => EV.pronData };
  const bookCache = {};
  function buildTopic(raw, group, book) {
    const id = `${book}-${raw.id}`;
    const t = Object.assign({
      id, book, isTopic: true, mock: !!raw.mock, grade: raw.grade || 6, n: 0, group: raw.group, title: raw.title, en: raw.en || '',
      tag: raw.tag || '', vi: raw.title, desc: raw.desc || '', icon: raw.icon || '📝',
      color: group ? group.color : '#1CB0F6', dark: group ? group.dark : '#1899D6',
      words: (raw.words || []).map((w) => ({
        en: w[0], vi: w[1], emoji: w[2] || '', key: `${id}:w:${String(w[0]).toLowerCase()}`, unitId: id, kind: 'word',
      })),
      formula: (raw.formula || []).map((f) => ({ k: f[0], v: f[1] })),
      transforms: (raw.transform || []).map((x, k) => ({
        src: x[0], task: x[1], answers: splitBar(x[2]), vi: x[3] || '', key: `${id}:t:${k}`, unitId: id, kind: 'transform',
      })),
      extra: raw.extra || [],
      // Bài đọc hiểu (chỉ có ở một số chủ đề Luyện thi): đoạn văn + câu hỏi trắc nghiệm hoặc True/False/Not Given
      reading: raw.reading ? {
        title: raw.reading.title, kind: raw.reading.kind || 'article', text: raw.reading.text || [], nospeak: !!raw.reading.nospeak,
        questions: (raw.reading.questions || []).map((q, k) => ({
          q: q[0], answer: q[1], wrong: q[2] || [], explain: q[3] || '', key: `${id}:r:${k}`, unitId: id, kind: 'reading',
        })),
      } : null,
      // Bài nghe hiểu (Luyện thi): mỗi bài nghe là một đoạn hội thoại/bài nói do nhiều người đọc, kèm câu hỏi.
      // lines: [người nói, câu, nghĩa]; clip là mã file âm thanh trong gói audio/ (xem tools/audio_texts.js)
      listening: (raw.listening || []).map((L, i) => ({
        idx: i, clip: `#l:${id}:${i}`, title: L.title, kind: L.kind || 'conversation', exam: L.exam || '',
        hide: !!L.hide, speakers: L.speakers || {},
        lines: (L.lines || []).map((x) => ({ s: x[0], en: x[1], vi: x[2] || '' })),
        questions: (L.questions || []).map((q, k) => ({
          q: q[0], answer: q[1], wrong: q[2] || [], explain: q[3] || '', key: `${id}:l:${i}.${k}`, unitId: id, kind: 'listening', li: i, qi: k,
        })),
      })),
      // Điền từ vào chỗ trống (gõ): [câu có ___, [các đáp án chấp nhận], gợi ý, giải thích]
      gaps: (raw.gaps || []).map((x, k) => ({
        q: x[0], answers: x[1], hint: x[2] || '', explain: x[3] || '', key: `${id}:g:${k}`, unitId: id, kind: 'gap',
      })),
      // Phát âm: cặp từ dễ nhầm, chọn âm khác, trọng âm, phân loại đuôi; kind "shadow" là chủ đề nói theo
      kind: raw.kind || '',
      pairs: (raw.pairs || []).map((x, k) => ({
        a: { en: x[0], ipa: x[1], vi: x[2] }, b: { en: x[3], ipa: x[4], vi: x[5] }, key: `${id}:m:${k}`, unitId: id, kind: 'pair',
      })),
      odd: (raw.odd || []).map((x, k) => ({ words: x[0], answer: x[1], explain: x[2] || '', key: `${id}:o:${k}`, unitId: id, kind: 'odd' })),
      stress: (raw.stress || []).map((x, k) => ({
        en: x[0], syl: String(x[1]).split('|'), idx: x[2], ipa: x[3] || '', vi: x[4] || '', key: `${id}:x:${k}`, unitId: id, kind: 'stress',
      })),
      classes: raw.classes || [],
      classify: (raw.classify || []).map((x, k) => ({ mark: x[0], cls: x[1], key: `${id}:c:${k}`, unitId: id, kind: 'classify' })),
    }, content(id, raw));
    const node = (key, title, icon, kind, xp, more) => Object.assign({ key, id: `${id}:${key}`, unitId: id, grade: t.grade, title, icon, kind, xp }, more || {});
    if (book === 'gm') {
      // Ngữ pháp: một bài luyện duy nhất
      t.node = node('gm', t.title, 'book', 'topic', 10);
      t.nodes = [t.node];
    } else if (book === 'pr') {
      // Phát âm: một bài luyện; chủ đề shadowing là bài nói theo
      t.node = t.kind === 'shadow' ? node('p', 'Luyện nói theo', 'mic', 'shadow', 10) : node('p', 'Luyện phát âm', 'speaker', 'pron', 10);
      t.nodes = [t.node];
    } else {
      // Luyện thi: Từ vựng 1, Từ vựng 2 (chia đôi danh sách từ) rồi Luyện đề.
      // Đề thi thử (mock): không có từ vựng, chỉ một bài làm trọn đề theo thứ tự
      const W = t.words;
      // Chia từ vựng thành các bài khoảng 7 từ (chủ đề 8–14 từ vẫn là hai bài như trước)
      const parts = W.length > 1 ? Math.min(8, Math.max(2, Math.ceil(W.length / 7))) : 1;
      const size = Math.ceil(W.length / parts);
      t.nodes = [];
      if (t.mock) {
        t.node = node('mock', 'Đề thi thử', 'trophy', 'exam', 40);
        t.nodes.push(t.node);
      } else {
        for (let p = 0; p < parts && W.length; p++) {
          t.nodes.push(node('v' + (p + 1), parts > 1 ? 'Từ vựng ' + (p + 1) : 'Từ vựng', 'star', 'vocab', 10, { words: W.slice(p * size, (p + 1) * size) }));
        }
        if (t.reading) t.nodes.push(node('r', 'Đọc hiểu', 'book', 'reading', 15));
        if (t.listening.length) t.nodes.push(node('l', 'Nghe hiểu', 'headphones', 'listenc', 15));
        t.node = node('p', 'Luyện đề', 'trophy', 'exam', 15);
        // Chủ đề chỉ có bài đọc/nghe (không có câu hỏi ngữ pháp, từ, câu mẫu) thì không có bài Luyện đề
        if (t.quiz.length || t.sentences.length || t.gaps.length || !t.nodes.length) t.nodes.push(t.node);
        else t.node = t.nodes[0];
      }
    }
    return t;
  }
  function topicBook(book) {
    if (bookCache[book]) return bookCache[book];
    const raw = BOOKS[book] && BOOKS[book]();
    if (!raw || !raw.topics || !raw.topics.length) return null;
    const groups = raw.groups || [];
    const topics = raw.topics.map((t) => buildTopic(t, groups.find((g) => g.id === t.group), book));
    bookCache[book] = { book, groups, topics, names: raw.names || [] };
    return bookCache[book];
  }
  const grammarBook = () => topicBook('gm');
  const pronBook = () => topicBook('pr');
  const examBook = () => topicBook('ex');
  const getTopic = (id) => {
    const B = topicBook(String(id).split('-')[0]);
    return B ? B.topics.find((t) => t.id === id) || null : null;
  };

  function getUnit(unitId) {
    if (/^(gm|ex|pr)-/.test(unitId || '')) return getTopic(unitId);
    const m = /^g(\d+)u(\d+)$/.exec(unitId || '');
    if (!m) return null;
    const grade = getGrade(+m[1]);
    return grade ? grade.units.find((u) => u.n === +m[2]) || null : null;
  }

  function getNode(nodeId) {
    const [unitId, key] = String(nodeId).split(':');
    const unit = getUnit(unitId);
    if (!unit) return null;
    if (key === 'rv') return unit.review || null;
    if (unit.isTopic) return unit.nodes.find((n) => n.key === key) || null;
    return unit.nodes.find((n) => n.key === key) || null;
  }

  // Tìm lại từ/câu/quiz theo khóa (dùng cho ôn lỗi sai, sổ từ vựng)
  function resolveItem(key) {
    const [unitId, kind, rest] = String(key).split(':');
    const unit = getUnit(unitId);
    if (!unit) return null;
    if (kind === 'w') return unit.words.find((w) => w.key === key) || (unit.advWords || []).find((w) => w.key === key) || null;
    if (kind === 's') return unit.sentences[+rest] || null;
    if (kind === 'q') return unit.quiz[+rest] || null;
    if (kind === 'as') return (unit.advSentences || [])[+rest] || null;
    if (kind === 'aq') return (unit.advQuiz || [])[+rest] || null;
    if (kind === 't') return (unit.transforms || [])[+rest] || null;
    if (kind === 'r') return unit.reading ? unit.reading.questions[+rest] || null : null;
    if (kind === 'g') return (unit.gaps || [])[+rest] || null;
    if (kind === 'l') {
      const [li, qi] = String(rest).split('.').map(Number);
      const L = (unit.listening || [])[li];
      return L ? L.questions[qi] || null : null;
    }
    const pr = { m: 'pairs', o: 'odd', x: 'stress', c: 'classify' }[kind];
    if (pr) return (unit[pr] || [])[+rest] || null;
    return null;
  }

  const availableGrades = () => Object.keys(EV.gradesData).map(Number).filter((g) => getGrade(g)).sort((a, b) => a - b);

  /* ---------- từ điển gợi ý nghĩa khi rê chuột vào từ ---------- */
  const COMMON = {
    'i': 'tôi, mình', 'you': 'bạn', 'he': 'anh ấy, cậu ấy', 'she': 'cô ấy, bạn ấy (nữ)', 'it': 'nó', 'we': 'chúng tôi, chúng ta',
    'they': 'họ, chúng nó', 'me': 'tôi', 'him': 'anh ấy', 'us': 'chúng tôi', 'them': 'họ',
    'my': 'của tôi', 'your': 'của bạn', 'his': 'của anh ấy', 'her': 'của cô ấy; cô ấy', 'its': 'của nó', 'our': 'của chúng tôi', 'their': 'của họ',
    'mine': 'của tôi', 'yours': 'của bạn', 'ours': 'của chúng tôi', 'theirs': 'của họ', 'hers': 'của cô ấy',
    'the': '(mạo từ) cái, con, những…', 'a': 'một', 'an': 'một',
    'this': 'này, đây', 'that': 'kia, đó; rằng', 'these': 'những … này', 'those': 'những … kia',
    'is': 'là, thì, ở', 'am': 'là, thì, ở', 'are': 'là, thì, ở', 'be': 'là, thì, ở', 'was': 'đã là, đã ở', 'were': 'đã là, đã ở', 'been': 'đã từng là', 'being': 'đang là',
    'do': 'làm; (trợ động từ)', 'does': 'làm; (trợ động từ)', 'did': 'đã làm; (trợ động từ quá khứ)', 'done': 'đã làm xong',
    'have': 'có', 'has': 'có', 'had': 'đã có',
    'can': 'có thể', 'could': 'có thể (quá khứ)', 'will': 'sẽ', 'would': 'sẽ; muốn', 'should': 'nên', 'must': 'phải',
    'may': 'có thể, được phép', 'might': 'có lẽ', 'shall': 'sẽ', 'need': 'cần', 'want': 'muốn', 'like': 'thích; giống như',
    'not': 'không', 'no': 'không', 'yes': 'vâng, có', 'cannot': 'không thể', 'please': 'làm ơn', 'thank': 'cảm ơn', 'thanks': 'cảm ơn',
    'and': 'và', 'but': 'nhưng', 'or': 'hoặc', 'so': 'vì vậy; rất', 'because': 'bởi vì', 'if': 'nếu', 'when': 'khi; khi nào',
    'while': 'trong khi', 'although': 'mặc dù', 'though': 'mặc dù', 'however': 'tuy nhiên', 'than': 'hơn', 'then': 'sau đó',
    'what': 'cái gì', 'where': 'ở đâu', 'who': 'ai', 'whom': 'ai', 'whose': 'của ai', 'which': 'cái nào', 'why': 'tại sao', 'how': 'như thế nào',
    'how many': 'bao nhiêu (đếm được)', 'how much': 'bao nhiêu (không đếm được); giá bao nhiêu', 'how old': 'bao nhiêu tuổi', 'how often': 'bao lâu một lần',
    'in': 'trong, ở', 'on': 'trên; vào (ngày)', 'at': 'ở, tại; lúc', 'to': 'đến; để', 'from': 'từ', 'with': 'với', 'without': 'không có',
    'for': 'cho; trong (khoảng)', 'of': 'của', 'about': 'về; khoảng', 'by': 'bằng; bởi', 'under': 'dưới', 'behind': 'phía sau',
    'next to': 'bên cạnh', 'near': 'gần', 'opposite': 'đối diện', 'between': 'ở giữa', 'in front of': 'phía trước', 'into': 'vào trong',
    'up': 'lên', 'down': 'xuống', 'out': 'ra ngoài', 'over': 'qua, trên', 'after': 'sau khi', 'before': 'trước khi', 'around': 'xung quanh',
    'there': 'ở đó', 'here': 'ở đây', 'there is': 'có (số ít)', 'there are': 'có (số nhiều)',
    'very': 'rất', 'too': 'cũng; quá', 'also': 'cũng', 'really': 'thật sự', 'much': 'nhiều', 'many': 'nhiều', 'some': 'một vài, một ít',
    'any': 'bất kỳ; nào', 'all': 'tất cả', 'every': 'mỗi, mọi', 'each': 'mỗi', 'more': 'hơn, nhiều hơn', 'most': 'nhất; hầu hết',
    'a lot of': 'nhiều', 'lots of': 'nhiều', 'other': 'khác', 'another': 'một … khác', 'only': 'chỉ', 'just': 'vừa mới; chỉ',
    'always': 'luôn luôn', 'usually': 'thường xuyên', 'often': 'thường', 'sometimes': 'thỉnh thoảng', 'never': 'không bao giờ', 'rarely': 'hiếm khi',
    'now': 'bây giờ', 'today': 'hôm nay', 'tomorrow': 'ngày mai', 'yesterday': 'hôm qua', 'tonight': 'tối nay', 'soon': 'sớm',
    'already': 'đã … rồi', 'yet': 'chưa; vẫn', 'still': 'vẫn', 'ago': 'cách đây', 'last': 'trước; cuối cùng', 'next': 'tiếp theo',
    'every day': 'mỗi ngày', 'morning': 'buổi sáng', 'afternoon': 'buổi chiều', 'evening': 'buổi tối', 'night': 'ban đêm',
    'week': 'tuần', 'weekend': 'cuối tuần', 'year': 'năm', 'month': 'tháng', 'day': 'ngày', 'time': 'thời gian; lần',
    'go': 'đi', 'goes': 'đi', 'come': 'đến', 'get': 'lấy, nhận; trở nên', 'make': 'làm, tạo ra', 'take': 'cầm, lấy', 'give': 'cho',
    'see': 'nhìn thấy', 'look': 'nhìn', 'look at': 'nhìn vào', 'watch': 'xem', 'listen': 'nghe', 'listen to': 'nghe', 'hear': 'nghe thấy',
    'say': 'nói', 'tell': 'kể, bảo', 'talk': 'nói chuyện', 'speak': 'nói', 'ask': 'hỏi', 'answer': 'trả lời', 'know': 'biết',
    'think': 'nghĩ', 'play': 'chơi', 'read': 'đọc', 'write': 'viết', 'eat': 'ăn', 'drink': 'uống', 'live': 'sống', 'work': 'làm việc',
    'study': 'học', 'learn': 'học', 'help': 'giúp đỡ', 'love': 'yêu, rất thích', 'visit': 'thăm', 'use': 'sử dụng', 'buy': 'mua',
    'open': 'mở', 'close': 'đóng', 'sit': 'ngồi', 'stand': 'đứng', 'run': 'chạy', 'walk': 'đi bộ', 'swim': 'bơi', 'sing': 'hát', 'dance': 'nhảy múa',
    'good': 'tốt, giỏi', 'bad': 'tệ', 'big': 'to, lớn', 'small': 'nhỏ', 'new': 'mới', 'old': 'cũ; già', 'happy': 'vui vẻ', 'nice': 'đẹp, tốt',
    'great': 'tuyệt vời', 'beautiful': 'đẹp', 'favourite': 'yêu thích', 'important': 'quan trọng', 'different': 'khác biệt', 'same': 'giống nhau',
    'hello': 'xin chào', 'hi': 'chào', 'goodbye': 'tạm biệt', 'bye': 'tạm biệt', 'sorry': 'xin lỗi', 'ok': 'được, ổn',
    "let's": 'chúng ta hãy', 'let': 'để, cho phép', 'people': 'mọi người', 'thing': 'đồ vật, điều', 'things': 'những thứ', 'way': 'cách; con đường',
    'one': 'một', 'two': 'hai', 'three': 'ba', 'four': 'bốn', 'five': 'năm', 'six': 'sáu', 'seven': 'bảy', 'eight': 'tám', 'nine': 'chín', 'ten': 'mười',
    'went': 'đã đi (quá khứ của go)', 'saw': 'đã thấy (quá khứ của see)', 'made': 'đã làm (quá khứ của make)', 'took': 'đã lấy (quá khứ của take)',
    'ate': 'đã ăn (quá khứ của eat)', 'drank': 'đã uống', 'came': 'đã đến (quá khứ của come)', 'got': 'đã nhận (quá khứ của get)',
    'bought': 'đã mua (quá khứ của buy)', 'wrote': 'đã viết', 'swam': 'đã bơi', 'ran': 'đã chạy', 'flew': 'đã bay', 'gave': 'đã cho',
    'told': 'đã kể', 'said': 'đã nói', 'thought': 'đã nghĩ', 'felt': 'đã cảm thấy', 'left': 'đã rời đi; bên trái', 'met': 'đã gặp',
    'taught': 'đã dạy', 'found': 'đã tìm thấy', 'won': 'đã thắng', 'lost': 'đã mất; đã thua', 'sang': 'đã hát', 'drew': 'đã vẽ',
    'rode': 'đã cưỡi, đã đạp', 'wore': 'đã mặc', 'spoke': 'đã nói', 'broke': 'đã làm vỡ', 'began': 'đã bắt đầu', 'became': 'đã trở thành',
    'built': 'đã xây', 'sent': 'đã gửi', 'spent': 'đã dành, đã tiêu', 'stood': 'đã đứng', 'sat': 'đã ngồi', 'slept': 'đã ngủ',
    'kept': 'đã giữ', 'brought': 'đã mang', 'caught': 'đã bắt', 'fell': 'đã ngã', 'heard': 'đã nghe', 'knew': 'đã biết', 'paid': 'đã trả',
    'put': 'đặt, để', 'sold': 'đã bán', 'woke': 'đã thức dậy', 'had to': 'đã phải', 'have to': 'phải', 'has to': 'phải', 'used to': 'đã từng',
    'going to': 'sẽ, dự định', 'would like': 'muốn', "i'd like": 'tôi muốn', "i'm": 'tôi là', "it's": 'nó là', "don't": 'không',
    "doesn't": 'không', "didn't": 'đã không', "can't": 'không thể', "isn't": 'không phải là', "aren't": 'không phải là', "won't": 'sẽ không',
    "what's": 'là gì', "where's": 'ở đâu', "that's": 'đó là', "there's": 'có', "he's": 'anh ấy là', "she's": 'cô ấy là', "you're": 'bạn là',
    "they're": 'họ là', "we're": 'chúng tôi là', "i'll": 'tôi sẽ', "haven't": 'chưa', "hasn't": 'chưa', "wasn't": 'đã không',
  };

  const dictCache = {};
  function dictFor(g) {
    if (dictCache[g]) return dictCache[g];
    const d = new Map();
    const addGrade = (gg) => {
      const G = getGrade(gg);
      if (G) G.units.forEach((u) => u.words.concat(u.advWords || []).forEach((w) => {
        const k = w.en.toLowerCase();
        if (!d.has(k)) d.set(k, w.vi);
      }));
    };
    addGrade(g);
    Object.keys(COMMON).forEach((k) => { if (!d.has(k)) d.set(k, COMMON[k]); });
    for (let x = g - 1; x >= 1; x--) addGrade(x);
    for (let x = g + 1; x <= 12; x++) addGrade(x);
    dictCache[g] = d;
    return d;
  }

  function lookup(dicts, phrase, single) {
    for (const d of dicts) if (d.has(phrase)) return d.get(phrase);
    if (!single) return null;
    const tries = [];
    const p = phrase;
    if (p.endsWith("'s")) tries.push(p.slice(0, -2));
    if (p.endsWith('ies')) tries.push(p.slice(0, -3) + 'y');
    if (p.endsWith('es')) tries.push(p.slice(0, -2));
    if (p.endsWith('s')) tries.push(p.slice(0, -1));
    if (p.endsWith('ied')) tries.push(p.slice(0, -3) + 'y');
    if (/(\w)\1ed$/.test(p)) tries.push(p.replace(/(\w)\1ed$/, '$1'));
    if (p.endsWith('ed')) tries.push(p.slice(0, -2), p.slice(0, -1));
    if (/(\w)\1ing$/.test(p)) tries.push(p.replace(/(\w)\1ing$/, '$1'));
    if (p.endsWith('ing')) tries.push(p.slice(0, -3), p.slice(0, -3) + 'e');
    if (p.endsWith('er')) tries.push(p.slice(0, -2), p.slice(0, -1));
    if (p.endsWith('est')) tries.push(p.slice(0, -3), p.slice(0, -2));
    for (const t of tries) {
      if (t.length < 2) continue;
      for (const d of dicts) if (d.has(t)) return d.get(t);
    }
    return null;
  }

  // Trả về danh sách cụm từ kèm nghĩa gợi ý (ưu tiên từ vựng của unit hiện tại)
  function hintTokens(sentence, unit) {
    const g = unit ? unit.grade : 6;
    const dicts = [];
    if (unit) dicts.push(new Map(unit.words.concat(unit.advWords || []).map((w) => [w.en.toLowerCase(), w.vi])));
    dicts.push(dictFor(g));
    const ch = U.chunks(sentence);
    const out = [];
    let i = 0;
    while (i < ch.length) {
      let len = Math.min(4, ch.length - i);
      let found = null;
      for (; len >= 1; len--) {
        let ok = true;
        for (let k = i; k < i + len - 1; k++) if (ch[k].post) { ok = false; break; }
        if (!ok) continue;
        const phrase = ch.slice(i, i + len).map((c) => c.core.toLowerCase()).join(' ');
        const h = lookup(dicts, phrase, len === 1);
        if (h) { found = { len, hint: h }; break; }
      }
      if (!found) {
        out.push({ pre: ch[i].pre, core: ch[i].core, post: ch[i].post, hint: null });
        i++;
      } else {
        const grp = ch.slice(i, i + found.len);
        out.push({ pre: grp[0].pre, core: grp.map((c) => c.core).join(' '), post: grp[grp.length - 1].post, hint: found.hint });
        i += found.len;
      }
    }
    return out;
  }

  // Danh từ riêng (để giữ chữ hoa khi xáo thẻ từ)
  const properCache = {};
  function properNouns(g) {
    if (properCache[g]) return properCache[g];
    const set = new Set(['I']);
    const G = getGrade(g);
    if (G) {
      G.units.forEach((u) => {
        u.sentences.concat(u.advSentences || []).forEach((s) => {
          const ch = U.chunks(s.en);
          ch.forEach((c, idx) => {
            const prevEnds = idx === 0 || /[.?!]/.test(ch[idx - 1].post);
            if (!prevEnds && /^[A-Z]/.test(c.core)) set.add(c.core);
          });
        });
        u.words.forEach((w) => U.tokenize(w.en).forEach((t) => { if (/^[A-Z]/.test(t)) set.add(t); }));
      });
    }
    properCache[g] = set;
    return set;
  }

  EV.course = {
    VOCAB_ONLY, LEVELS, NODE_META, levelOf, getGrade, getUnit, getNode, resolveItem, availableGrades, hintTokens, properNouns,
    grammarBook, examBook, pronBook, topicBook, getTopic,
    level: (id) => LEVELS.find((l) => l.id === id),
  };
})();
