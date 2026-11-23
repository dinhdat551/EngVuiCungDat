/* EngVui – Nghe hiểu IELTS: Section 1 (điền biểu mẫu), Section 2 (bài nói một người), Section 3 (thảo luận học thuật),
   Section 4 (bài giảng). Câu điền từ: gõ tối đa 3 từ hoặc số, nghe xong mới viết (có thể nghe lại và nghe chậm).
   Nội dung tự soạn theo dạng đề IELTS Listening, không phải đề thi chính thức. Giọng do tools/gen_audio.py tạo. */
(function () {
  const s = (name, v) => ({ name, v });
  EV.extendExam({
    names: ['Henderson', 'Lakeside', 'Harbour', 'Willow', 'Pier', 'Saturday', 'Claire'],
    groups: [{ id: 13, title: 'Nghe IELTS', desc: 'Section 1–4: điền thông tin, bài nói, thảo luận học thuật, bài giảng', color: '#EF4444', dark: '#C93030' }],
    topics: [
      /* ---------- Section 1 ---------- */
      {
        id: 'li-s1', group: 13, grade: 12, icon: '📝', tag: 'IELTS Section 1',
        title: 'Section 1 · Điền thông tin cá nhân', en: 'Everyday conversation: form completion',
        desc: 'Hai cuộc hội thoại đời sống (đăng ký câu lạc bộ, đặt tour). Nghe và điền tên, số, ngày giờ, giá tiền.',
        listening: [
          {
            title: 'Joining a sports club', kind: 'form', exam: 'IELTS Section 1',
            speakers: { R: s('Receptionist', 'F1'), C: s('Customer', 'M1') },
            lines: [
              ['R', 'Good morning, Lakeside Sports Club. How can I help you?', 'Chào buổi sáng, câu lạc bộ thể thao Lakeside. Tôi có thể giúp gì ạ?'],
              ['C', 'Hi, I\'d like to join the club. I\'ve just moved to the area.', 'Chào chị, tôi muốn đăng ký vào câu lạc bộ. Tôi vừa chuyển đến khu này.'],
              ['R', 'Of course. I\'ll take some details. Could I have your family name, please?', 'Dĩ nhiên rồi. Tôi sẽ ghi vài thông tin. Cho tôi xin họ của anh nhé?'],
              ['C', 'It\'s Henderson. That\'s H, E, N, D, E, R, S, O, N.', 'Là Henderson. Đánh vần là H, E, N, D, E, R, S, O, N.'],
              ['R', 'Thank you, Mr Henderson. Are you interested in the standard membership or the premium membership?', 'Cảm ơn ông Henderson. Ông muốn thẻ tiêu chuẩn hay thẻ cao cấp?'],
              ['C', 'What\'s the difference?', 'Hai loại khác nhau thế nào?'],
              ['R', 'Standard gives you the gym and the swimming pool for thirty-five dollars a month. Premium also includes classes, and it costs fifty-five dollars.', 'Thẻ tiêu chuẩn cho ông dùng phòng tập và hồ bơi với giá ba mươi lăm đô một tháng. Thẻ cao cấp có thêm các lớp học và giá năm mươi lăm đô.'],
              ['C', 'I\'ll go for the standard one. I mainly want to swim in the mornings.', 'Tôi chọn thẻ tiêu chuẩn. Tôi chủ yếu muốn bơi vào buổi sáng.'],
              ['R', 'Fine. When would you like to start?', 'Được ạ. Ông muốn bắt đầu khi nào?'],
              ['C', 'Next Monday, the ninth of June, if possible.', 'Thứ Hai tuần sau, ngày chín tháng Sáu, nếu được.'],
              ['R', 'No problem. And how did you hear about us?', 'Không vấn đề gì. Còn ông biết đến chúng tôi bằng cách nào?'],
              ['C', 'I saw your advertisement at the library, but actually it was a friend who told me about the club first.', 'Tôi thấy quảng cáo của chị ở thư viện, nhưng thật ra một người bạn đã nói với tôi về câu lạc bộ trước.'],
            ],
            questions: [
              ['Family name: ___', ['Henderson'], [], 'Người gọi đánh vần H-E-N-D-E-R-S-O-N: Henderson.'],
              ['Type of membership: ___', ['standard', 'standard membership'], [], 'Anh ấy chọn gói standard (tiêu chuẩn).'],
              ['Monthly fee: $ ___', ['35', 'thirty-five', 'thirty five'], [], 'Thẻ tiêu chuẩn giá thirty-five dollars một tháng.'],
              ['Start date: ___ June', ['9', '9th', 'ninth', 'nine'], [], 'Bắt đầu vào Monday, the ninth of June.'],
              ['Heard about the club from: ___', ['a friend', 'friend', 'friends'], [], 'Có nhắc đến quảng cáo ở thư viện (gây nhiễu), nhưng người nói rõ: a friend told me first.'],
            ],
          },
          {
            title: 'Booking a harbour tour', kind: 'form', exam: 'IELTS Section 1',
            speakers: { A: s('Agent', 'F2'), C: s('Caller', 'M2') },
            lines: [
              ['A', 'Harbour Tours, good afternoon.', 'Harbour Tours xin chào.'],
              ['C', 'Hello. I\'d like to book a boat tour of the harbour for this Saturday.', 'Xin chào. Tôi muốn đặt tour thuyền tham quan bến cảng vào thứ Bảy này.'],
              ['A', 'Certainly. We have two departures on Saturday, at ten thirty and at two fifteen.', 'Được ạ. Thứ Bảy chúng tôi có hai chuyến, lúc mười giờ ba mươi và hai giờ mười lăm.'],
              ['C', 'The morning one would be better. How long does it last?', 'Chuyến buổi sáng thì tiện hơn. Tour kéo dài bao lâu?'],
              ['A', 'About two hours. We meet at Pier Nine, next to the fish market.', 'Khoảng hai tiếng. Chúng ta gặp nhau ở Cầu tàu Chín, cạnh chợ cá.'],
              ['C', 'How much is it?', 'Giá bao nhiêu ạ?'],
              ['A', 'Adults are twenty-two dollars, and children under twelve go free. Is anyone in your group under twelve?', 'Người lớn hai mươi hai đô, trẻ dưới mười hai tuổi được miễn phí. Nhóm của anh có ai dưới mười hai tuổi không?'],
              ['C', 'Yes, my daughter is ten, so that\'s two adults and one child.', 'Có, con gái tôi mười tuổi, vậy là hai người lớn và một trẻ em.'],
              ['A', 'That\'ll be forty-four dollars altogether. Please arrive fifteen minutes early, and bring a hat and sunscreen, because there is no shade on the boat.', 'Tổng cộng là bốn mươi bốn đô. Xin hãy đến sớm mười lăm phút và mang theo mũ và kem chống nắng, vì trên thuyền không có bóng râm.'],
            ],
            questions: [
              ['Departure time: ___ a.m.', ['10.30', '10:30', 'ten thirty', '10 30'], [], 'Anh ấy chọn chuyến buổi sáng lúc ten thirty.'],
              ['Meeting place: Pier ___', ['nine', '9'], [], 'Gặp ở Pier Nine, cạnh chợ cá.'],
              ['Length of the tour: ___ hours', ['two', '2'], [], 'Tour kéo dài khoảng hai tiếng.'],
              ['Total cost: $ ___', ['44', 'forty-four', 'forty four'], [], 'Hai người lớn x 22 đô = 44 đô; trẻ em miễn phí.'],
              ['Things to bring: a hat and ___', ['sunscreen', 'sun screen', 'sun cream'], [], 'Mang theo mũ và kem chống nắng (sunscreen).'],
            ],
          },
        ],
      },

      /* ---------- Section 2 ---------- */
      {
        id: 'li-s2', group: 13, grade: 12, icon: '🗣️', tag: 'IELTS Section 2',
        title: 'Section 2 · Bài nói một người', en: 'Monologue: social and public information',
        desc: 'Thông báo thư viện và hướng dẫn tham quan công viên: nghe và chọn đáp án đúng.',
        listening: [
          {
            title: 'New facilities at the library', kind: 'monologue', exam: 'IELTS Section 2',
            speakers: { L: s('Librarian', 'F1') },
            lines: [
              ['L', 'Good evening, everyone, and welcome to the opening of the new wing of Eastfield Library. I\'d like to tell you about the main changes.', 'Chào buổi tối mọi người và chào mừng đến buổi khai trương cánh mới của thư viện Eastfield. Tôi xin giới thiệu những thay đổi chính.'],
              ['L', 'First, the children\'s section has moved from the first floor to the ground floor. This makes it much easier for parents with prams, and it is next to the new café.', 'Trước hết, khu thiếu nhi đã chuyển từ tầng một xuống tầng trệt. Điều này thuận tiện hơn cho các phụ huynh đẩy xe nôi, và khu này nằm cạnh quán cà phê mới.'],
              ['L', 'Second, members can now borrow up to eight books at a time instead of five, and they can keep each book for four weeks.', 'Thứ hai, hội viên giờ có thể mượn tối đa tám cuốn một lần thay vì năm cuốn và được giữ mỗi cuốn bốn tuần.'],
              ['L', 'Third, the library will stay open until nine o\'clock on weekdays. Until now, we closed at six.', 'Thứ ba, thư viện sẽ mở cửa đến chín giờ tối các ngày trong tuần. Cho đến nay chúng tôi đóng cửa lúc sáu giờ.'],
              ['L', 'Finally, there is a new computer room on the second floor. It has twenty computers, but it is very popular, so I strongly advise you to book a time in advance on our website.', 'Cuối cùng, có phòng máy tính mới ở tầng hai. Phòng có hai mươi máy tính nhưng rất đông người dùng, nên tôi khuyên quý vị đặt giờ trước trên trang web của chúng tôi.'],
            ],
            questions: [
              ['Which part of the library has moved to the ground floor?', 'The children\'s section', ['The computer room', 'The study room', 'The café'], 'Khu thiếu nhi chuyển xuống tầng trệt (the children\'s section).'],
              ['How many books can members borrow now?', 'Eight', ['Five', 'Ten', 'Four'], 'Hội viên giờ mượn tối đa tám cuốn (eight) thay vì năm.'],
              ['What time does the library close on weekdays now?', '9 p.m.', ['6 p.m.', '8 p.m.', '10 p.m.'], 'Mở đến chín giờ tối; trước đây đóng lúc sáu giờ.'],
              ['What does the speaker advise about the computer room?', 'Book a time in advance', ['Bring your own laptop', 'Visit only at weekends', 'Pay a small fee'], 'Khuyên đặt giờ trước trên trang web.'],
            ],
          },
          {
            title: 'A guided walk in Willow Park', kind: 'monologue', exam: 'IELTS Section 2',
            speakers: { G: s('Park guide', 'M1') },
            lines: [
              ['G', 'Welcome to Willow Park. My name is Peter, and I\'ll be leading your walk this morning. The park covers one hundred and twenty hectares, so we will see only a small part of it today.', 'Chào mừng đến công viên Willow. Tôi là Peter, người sẽ dẫn đoàn đi dạo sáng nay. Công viên rộng một trăm hai mươi héc-ta nên hôm nay chúng ta chỉ đi một phần nhỏ.'],
              ['G', 'We\'ll start at the visitor centre, then follow the boardwalk through the wetlands. It is about one and a half kilometres long, and you may see herons and ducks.', 'Chúng ta sẽ bắt đầu ở trung tâm du khách rồi đi theo lối đi gỗ qua vùng đất ngập nước. Lối này dài khoảng một cây số rưỡi và quý vị có thể thấy diệc và vịt.'],
              ['G', 'Photography is welcome, but please don\'t fly drones, as they disturb the birds. Dogs are allowed, but they must stay on a lead.', 'Quý vị cứ chụp ảnh thoải mái nhưng xin đừng thả máy bay không người lái vì chúng làm chim hoảng sợ. Chó được phép vào nhưng phải được dắt bằng dây.'],
              ['G', 'You can have a picnic only in the area beside the lake. Please take your rubbish home with you. The café closes at four o\'clock, and we will return to the car park at half past three.', 'Quý vị chỉ được ăn picnic ở khu vực cạnh hồ. Xin mang rác về. Quán cà phê đóng cửa lúc bốn giờ và chúng ta sẽ trở lại bãi đỗ xe lúc ba giờ rưỡi.'],
            ],
            questions: [
              ['How large is Willow Park?', '120 hectares', ['12 hectares', '1,200 hectares', '20 hectares'], 'Công viên rộng a hundred and twenty hectares.'],
              ['What are visitors not allowed to do?', 'Fly drones', ['Take photographs', 'Bring dogs', 'Walk on the boardwalk'], 'Không được thả drone vì làm chim hoảng sợ.'],
              ['Where may visitors have a picnic?', 'Beside the lake', ['In the wetlands', 'At the visitor centre', 'In the car park'], 'Chỉ được ăn picnic ở khu vực cạnh hồ.'],
              ['What time will the group return to the car park?', '3.30 p.m.', ['3.00 p.m.', '4.00 p.m.', '4.30 p.m.'], 'Trở lại bãi đỗ xe lúc half past three (3.30). Bốn giờ là giờ quán cà phê đóng cửa.'],
            ],
          },
        ],
      },

      /* ---------- Section 3 ---------- */
      {
        id: 'li-s3', group: 13, grade: 12, icon: '👥', tag: 'IELTS Section 3',
        title: 'Section 3 · Thảo luận học thuật', en: 'Academic discussion',
        desc: 'Sinh viên và giảng viên thảo luận bài thuyết trình và một khảo sát tâm lý. Chú ý đổi ý giữa chừng của người nói.',
        listening: [
          {
            title: 'Planning a group presentation', kind: 'discussion', exam: 'IELTS Section 3',
            speakers: { T: s('Tutor', 'F1'), A: s('Daniel', 'M1'), B: s('Mai', 'F2') },
            lines: [
              ['T', 'So, Daniel and Mai, how is your presentation on renewable energy going?', 'Vậy Daniel và Mai, bài thuyết trình về năng lượng tái tạo của các em tiến triển thế nào?'],
              ['A', 'We were going to talk about wind power, but we couldn\'t find enough data about our region.', 'Chúng em định nói về điện gió, nhưng không tìm đủ số liệu về khu vực của mình.'],
              ['B', 'So we\'ve decided to focus on solar power instead. The local council has published figures for the last ten years.', 'Nên tụi em quyết định tập trung vào điện mặt trời. Hội đồng địa phương đã công bố số liệu mười năm gần đây.'],
              ['T', 'That sounds sensible. Remember that the presentation should last fifteen minutes, with no more than ten slides.', 'Nghe hợp lý đấy. Hãy nhớ bài thuyết trình dài mười lăm phút, tối đa mười slide.'],
              ['A', 'We\'ll each speak for about the same time. Mai will introduce the topic, and I\'ll explain the results.', 'Mỗi đứa tụi em sẽ nói thời lượng gần bằng nhau. Mai sẽ giới thiệu chủ đề, còn em sẽ trình bày kết quả.'],
              ['T', 'Good. I suggest adding a graph to show how installation costs have fallen. That will make your argument stronger.', 'Tốt. Cô gợi ý thêm một biểu đồ cho thấy chi phí lắp đặt đã giảm thế nào. Điều đó sẽ làm lập luận của các em thuyết phục hơn.'],
              ['B', 'Good idea. Can we practise in front of you next Wednesday?', 'Ý hay ạ. Tụi em tập trước mặt cô vào thứ Tư tuần sau được không?'],
              ['T', 'Yes, come to my office at two o\'clock.', 'Được, hãy đến văn phòng cô lúc hai giờ.'],
            ],
            questions: [
              ['Why did the students change their topic?', 'There was not enough local data on wind power.', ['The tutor disliked wind power.', 'Solar power was cheaper.', 'The council banned wind power.'], 'Họ không tìm đủ số liệu về điện gió ở khu vực của mình.'],
              ['How long should the presentation last?', 'Fifteen minutes', ['Ten minutes', 'Twenty minutes', 'Thirty minutes'], 'Bài thuyết trình dài fifteen minutes, tối đa mười slide.'],
              ['What does the tutor suggest adding?', 'A graph about costs', ['A video', 'A list of references', 'A map of the region'], 'Cô gợi ý thêm biểu đồ chi phí lắp đặt giảm.'],
              ['When will the students practise?', 'Next Wednesday at two o\'clock', ['This Friday at nine', 'Next Monday at noon', 'Tomorrow afternoon'], 'Thứ Tư tuần sau lúc hai giờ.'],
            ],
          },
          {
            title: 'Designing a student survey', kind: 'discussion', exam: 'IELTS Section 3',
            speakers: { A: s('Kim', 'F3'), B: s('Tom', 'M2') },
            lines: [
              ['A', 'Tom, have you decided how many students we should include in our survey on sleep habits?', 'Tom, cậu đã quyết định nên khảo sát bao nhiêu sinh viên về thói quen ngủ chưa?'],
              ['B', 'Our tutor said a hundred would be enough, but I think we should aim for one hundred and fifty, in case some people don\'t answer.', 'Giảng viên bảo một trăm là đủ, nhưng tớ nghĩ ta nên hướng tới một trăm năm mươi, phòng khi có người không trả lời.'],
              ['A', 'Good point. Should we use interviews or an online questionnaire?', 'Có lý. Ta nên dùng phỏng vấn hay phiếu hỏi trực tuyến?'],
              ['B', 'Interviews give more detail, but they take a long time. An online questionnaire is quicker, and students can answer it at any time.', 'Phỏng vấn cho nhiều chi tiết hơn nhưng mất nhiều thời gian. Phiếu trực tuyến nhanh hơn và sinh viên trả lời lúc nào cũng được.'],
              ['A', 'Then let\'s use the questionnaire, and add two interviews for extra information.', 'Vậy ta dùng phiếu hỏi trực tuyến và thêm hai cuộc phỏng vấn để lấy thêm thông tin.'],
              ['B', 'We also need ethics approval before we start. The form must be handed in by the end of this month.', 'Chúng ta cũng cần được duyệt về đạo đức nghiên cứu trước khi bắt đầu. Đơn phải nộp trước cuối tháng này.'],
              ['A', 'I\'ll write the first draft this weekend.', 'Tớ sẽ viết bản nháp đầu tiên vào cuối tuần này.'],
            ],
            questions: [
              ['How many students does Tom want to include?', '150', ['100', '50', '200'], 'Tom muốn hướng tới one hundred and fifty (150), vì có thể có người không trả lời.'],
              ['Why do they choose an online questionnaire?', 'It is quicker and flexible.', ['It is cheaper than interviews.', 'The tutor requires it.', 'It gives more detail.'], 'Phiếu trực tuyến nhanh hơn và trả lời lúc nào cũng được.'],
              ['What must they hand in by the end of the month?', 'An ethics approval form', ['The final report', 'A list of questions', 'A budget'], 'Đơn xin duyệt đạo đức nghiên cứu phải nộp trước cuối tháng.'],
              ['What will Kim do this weekend?', 'Write a first draft', ['Interview two students', 'Meet the tutor', 'Collect the answers'], 'Kim sẽ viết bản nháp đầu tiên vào cuối tuần.'],
            ],
          },
        ],
      },

      /* ---------- Section 4 ---------- */
      {
        id: 'li-s4', group: 13, grade: 12, icon: '🎓', tag: 'IELTS Section 4',
        title: 'Section 4 · Bài giảng học thuật', en: 'Academic lecture: note completion',
        desc: 'Hai bài giảng ngắn (ong mật, không gian xanh đô thị). Nghe và điền vào ghi chú.',
        listening: [
          {
            title: 'The life of honey bees', kind: 'lecture', exam: 'IELTS Section 4',
            speakers: { L: s('Lecturer', 'M2') },
            lines: [
              ['L', 'Today I would like to talk about honey bees, which live in large groups called colonies. A single colony can contain up to sixty thousand bees in the summer.', 'Hôm nay tôi muốn nói về ong mật, loài sống thành các đàn lớn gọi là colony. Một đàn có thể chứa tới sáu mươi nghìn con ong vào mùa hè.'],
              ['L', 'Most of them are worker bees. In summer, a worker bee lives for only about six weeks, and she spends her life collecting food, cleaning the hive and protecting the colony.', 'Phần lớn là ong thợ. Vào mùa hè, một con ong thợ chỉ sống khoảng sáu tuần và dành cả đời đi tìm thức ăn, dọn tổ và bảo vệ đàn.'],
              ['L', 'In contrast, the queen bee may live for several years. During the busy season, she can lay up to two thousand eggs a day.', 'Ngược lại, ong chúa có thể sống vài năm. Vào mùa cao điểm, nó có thể đẻ tới hai nghìn trứng mỗi ngày.'],
              ['L', 'When a worker finds a good source of food, she returns to the hive and tells the others where it is, using a special movement called the waggle dance. The direction of the dance shows the direction of the flowers.', 'Khi một ong thợ tìm được nguồn thức ăn tốt, nó quay về tổ và báo cho các con khác biết vị trí bằng một chuyển động đặc biệt gọi là điệu nhảy lắc (waggle dance). Hướng của điệu nhảy cho biết hướng của những bông hoa.'],
              ['L', 'The food they collect is called nectar. Back in the hive, the bees turn the nectar into honey, which they store for the winter.', 'Thức ăn chúng thu thập được gọi là mật hoa (nectar). Về tổ, ong biến mật hoa thành mật ong và dự trữ cho mùa đông.'],
            ],
            questions: [
              ['A colony can contain up to ___ bees in summer.', ['60,000', '60000', 'sixty thousand', '60 000'], [], 'Một đàn có thể chứa tới sixty thousand con.'],
              ['In summer, a worker bee lives for about ___ weeks.', ['six', '6'], [], 'Ong thợ mùa hè sống khoảng six weeks.'],
              ['The queen bee can lay up to ___ eggs a day.', ['2,000', '2000', 'two thousand', '2 000'], [], 'Ong chúa đẻ tới two thousand trứng mỗi ngày.'],
              ['Bees tell others where food is by doing the ___ dance.', ['waggle'], [], 'Điệu nhảy gọi là waggle dance.'],
              ['Bees make honey from ___.', ['nectar'], [], 'Ong biến nectar (mật hoa) thành mật ong.'],
            ],
          },
          {
            title: 'Green spaces in cities', kind: 'lecture', exam: 'IELTS Section 4',
            speakers: { L: s('Lecturer', 'F2') },
            lines: [
              ['L', 'In today\'s lecture, I want to look at the benefits of green spaces in cities. Research shows that parks can lower the temperature of the surrounding streets by up to three degrees on a hot day.', 'Trong bài giảng hôm nay, tôi muốn nói về lợi ích của không gian xanh trong thành phố. Nghiên cứu cho thấy công viên có thể làm nhiệt độ các con phố xung quanh giảm tới ba độ vào một ngày nóng.'],
              ['L', 'Trees also clean the air, because their leaves absorb harmful gases from traffic. This is important in cities with heavy pollution.', 'Cây xanh cũng làm sạch không khí vì lá của chúng hấp thụ các khí độc hại từ giao thông. Điều này rất quan trọng ở những thành phố ô nhiễm nặng.'],
              ['L', 'There are also social and health benefits. A study of five thousand residents found that people who live within three hundred metres of a park exercise more and report lower stress.', 'Còn có lợi ích về xã hội và sức khỏe. Một nghiên cứu trên năm nghìn cư dân cho thấy người sống trong phạm vi ba trăm mét quanh công viên tập thể dục nhiều hơn và ít căng thẳng hơn.'],
              ['L', 'Many cities now have clear plans. For example, our city intends to plant fifty thousand new trees by the year 2030.', 'Nhiều thành phố hiện có kế hoạch rõ ràng. Ví dụ, thành phố của chúng ta dự định trồng năm mươi nghìn cây mới trước năm 2030.'],
              ['L', 'Finally, green roofs, which are roofs covered with plants, help to reduce heating costs in winter, because they keep buildings warm.', 'Cuối cùng, mái nhà xanh, tức mái nhà phủ cây, giúp giảm chi phí sưởi ấm vào mùa đông vì giữ cho tòa nhà ấm.'],
            ],
            questions: [
              ['Parks can lower street temperatures by up to ___ degrees.', ['three', '3'], [], 'Công viên làm giảm tới three degrees.'],
              ['Trees\' leaves absorb ___ from traffic.', ['harmful gases', 'gases', 'harmful gas'], [], 'Lá cây hấp thụ khí độc hại (harmful gases) từ giao thông.'],
              ['People within ___ metres of a park exercise more.', ['300', 'three hundred', 'three hundred metres'], [], 'Trong phạm vi three hundred metres.'],
              ['The city plans to plant ___ new trees by 2030.', ['50,000', '50000', 'fifty thousand', '50 000'], [], 'Kế hoạch là fifty thousand cây mới.'],
              ['Green roofs help reduce ___ costs in winter.', ['heating', 'heating costs'], [], 'Mái nhà xanh giảm chi phí heating (sưởi ấm).'],
            ],
          },
        ],
      },
    ],
  });
})();
