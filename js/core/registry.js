/* EngVui – nơi các file dữ liệu (js/data/gradeN.js) đăng ký nội dung từng lớp. */
window.EV = window.EV || {};
EV.gradesData = EV.gradesData || {};
EV.registerGrade = function (data) {
  if (!data || !data.grade || !Array.isArray(data.units)) return;
  EV.gradesData[data.grade] = data;
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
