/* EngVui – cấu hình của bản cài đặt (nạp trước mọi file khác).
   Bản chính để mặc định. Bản "chỉ luyện từ" (thư mục Test2) dùng:
     vocabOnly: true              chỉ có bài từ vựng và kiểm tra từ vựng, không có mẫu câu, ngữ pháp, luyện nghe câu
     storageKey: 'engvui-tu:v1'   khóa lưu riêng, để hai bản không ghi đè tiến độ của nhau khi mở cùng trình duyệt
   Mục Ngữ pháp và Luyện thi tự ẩn khi không nạp js/data/grammar.js và js/data/exam.js. */
window.EV = window.EV || {};
EV.config = Object.assign({
  vocabOnly: false,
  storageKey: 'engvui:v1',
  appTitle: 'EngVui – Học tiếng Anh miễn phí',
  welcome: 'Bài học ngắn như trò chơi, học tiếng Anh từ Lớp 1 đến Lớp 12, luyện thi TOEIC và IELTS.',
  economy: false,   // false: tạm ẩn tim, đá quý, rương báu và cửa hàng (học không bị trừ tim); đặt true để bật lại
  league: false,    // false: tạm ẩn bảng xếp hạng/giải đấu; đặt true để bật lại
  quests: false,    // false: tạm ẩn Nhiệm vụ hằng ngày; đặt true để bật lại
  mission: 'Trang web nhằm mục đích phục vụ học tập miễn phí cho mọi người',
  contact: '',   // điền email liên hệ để chủ sở hữu bản quyền báo gỡ nội dung (nếu có)
  donate: { name: 'DINH TUAN DAT', bank: 'TPBank', number: '42037234682', shown: '4203 7234 682', qr: 'img/donate-qr.jpg' },
}, EV.config || {});
