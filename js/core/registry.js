/* EngVui – nơi các file dữ liệu (js/data/gradeN.js) đăng ký nội dung từng lớp. */
window.EV = window.EV || {};
EV.gradesData = EV.gradesData || {};
EV.registerGrade = function (data) {
  if (!data || !data.grade || !Array.isArray(data.units)) return;
  EV.gradesData[data.grade] = data;
};
/* Từ vựng nâng cao (js/data/adv/*.js): mỗi Unit có thêm một bài tùy chọn ở cuối Unit.
   Khóa là mã Unit (g8u3), giá trị { words, sentences, quiz }. Nạp nhiều file thì gộp lại. */
EV.advData = EV.advData || {};
EV.registerAdv = function (data) {
  if (!data || typeof data !== 'object') return;
  Object.keys(data).forEach((k) => { EV.advData[k] = data[k]; });
};
/* Mục Ngữ pháp (js/data/grammar.js) đăng ký danh sách chủ đề. */
EV.grammarData = EV.grammarData || null;
EV.registerGrammar = function (data) {
  if (!data || !Array.isArray(data.topics)) return;
  EV.grammarData = data;
};
/* Mục Luyện thi (js/data/exam.js): chủ đề TOEIC, IELTS. */
EV.examData = EV.examData || null;
EV.registerExam = function (data) {
  if (!data || !Array.isArray(data.topics)) return;
  EV.examData = data;
};
/* Mục Phát âm và Shadowing (js/data/pron.js). */
EV.pronData = EV.pronData || null;
EV.registerPron = function (data) {
  if (!data || !Array.isArray(data.topics)) return;
  EV.pronData = data;
};

/* Giải thích từ vựng (js/data/explain/exp*.js): EV.explainData[mã chủ đề][từ viết thường] = lời giải thích ngắn. */
EV.explainData = EV.explainData || {};
EV.registerExplain = function (map) {
  if (!map || typeof map !== 'object') return;
  Object.keys(map).forEach((id) => { EV.explainData[id] = Object.assign(EV.explainData[id] || {}, map[id]); });
};
/* Từ vựng bổ sung cho các chủ đề đã đăng ký (js/data/it_words.js): thêm từ và câu mẫu vào chủ đề theo mã, bỏ qua mục đã có. */
EV.extendTopics = function (map) {
  const B = EV.examData;
  if (!B || !map) return;
  B.topics.forEach((t) => {
    const x = map[t.id];
    if (!x) return;
    const hw = new Set((t.words || []).map((w) => String(w[0]).toLowerCase()));
    (x.words || []).forEach((w) => { const k = String(w[0]).toLowerCase(); if (!hw.has(k)) { (t.words = t.words || []).push(w); hw.add(k); } });
    const hs = new Set((t.sentences || []).map((s) => String(s[0]).toLowerCase()));
    (x.sentences || []).forEach((s) => { const k = String(s[0]).toLowerCase(); if (!hs.has(k)) { (t.sentences = t.sentences || []).push(s); hs.add(k); } });
  });
};

/* Dữ liệu bổ sung cho Ngữ pháp và Luyện thi (js/data/*_plus.js, aviation.js...): thêm nhóm và chủ đề vào bộ đã đăng ký,
   bỏ qua nhóm/chủ đề trùng mã để nạp hai lần cũng không bị nhân đôi. */
(function () {
  function extend(base, add) {
    if (!add || !Array.isArray(add.topics)) return base;
    if (!base) return add;
    const gids = new Set((base.groups || []).map((g) => g.id));
    (add.groups || []).forEach((g) => { if (!gids.has(g.id)) { base.groups.push(g); gids.add(g.id); } });
    const tids = new Set(base.topics.map((t) => t.id));
    add.topics.forEach((t) => { if (!tids.has(t.id)) { base.topics.push(t); tids.add(t.id); } });
    base.names = Array.from(new Set((base.names || []).concat(add.names || [])));
    return base;
  }
  EV.extendGrammar = function (data) { EV.grammarData = extend(EV.grammarData, data); };
  EV.extendExam = function (data) { EV.examData = extend(EV.examData, data); };
})();
