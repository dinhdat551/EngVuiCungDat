/* EngVui – Nghe hiểu TOEIC: Part 2 (hỏi và đáp), Part 3 (hội thoại), Part 4 (bài nói).
   Nội dung tự soạn theo đúng dạng câu hỏi của đề TOEIC, không phải đề thi chính thức.
   Giọng đọc: nhiều người nói (nam, nữ), tạo bằng tools/gen_audio.py. Part 2 chỉ hiện A, B, C; lời thoại hiện sau khi trả lời. */
(function () {
  const N = { name: 'Narrator', v: 'F3' };
  // Part 2: một câu hỏi + ba lời đáp. q: người hỏi, a: [đáp án A, B, C], ans: 0..2
  function qa(title, qv, rv, q, a, ans, why) {
    const L = 'ABC';
    const lines = [['Q', q]];
    a.forEach((t, i) => { lines.push(['N', `${L[i]}.`]); lines.push(['R', t]); });
    const wrong = [0, 1, 2].filter((i) => i !== ans).map((i) => L[i]);
    return {
      title, kind: 'qa', exam: 'TOEIC Part 2', hide: true,
      speakers: { Q: { name: 'Speaker 1', v: qv }, R: { name: 'Speaker 2', v: rv }, N },
      lines,
      questions: [['Chọn câu trả lời phù hợp nhất với câu hỏi.', L[ans], wrong, why]],
    };
  }
  const W = (v) => ({ name: 'Woman', v });
  const M = (v) => ({ name: 'Man', v });

  EV.extendExam({
    names: ['Garcia', 'Thompson', 'Patel', 'Chen', 'Brown', 'Wilson', 'Anderson', 'Adams'],
    groups: [{ id: 12, title: 'Nghe TOEIC', desc: 'Part 2 hỏi đáp, Part 3 hội thoại, Part 4 bài nói: nghe rồi trả lời', color: '#F97316', dark: '#D4600B' }],
    topics: [
      /* ---------- Part 2 ---------- */
      {
        id: 'lt-p2-1', group: 12, grade: 12, icon: '🎧', tag: 'TOEIC Part 2',
        title: 'Part 2 · Hỏi và đáp (1)', en: 'Question and response', desc: 'Nghe một câu hỏi và ba lời đáp, chọn lời đáp phù hợp nhất. 6 câu, nghe kỹ đầu câu hỏi (Where, When, Who, Why, How).',
        listening: [
          qa('Where is the printer?', 'M1', 'F1', 'Where is the printer?', ['It\'s on the second floor.', 'I\'ll print it for you.', 'About twenty pages.'], 0, 'Where hỏi về nơi chốn: "It\'s on the second floor" (ở tầng hai). B và C không trả lời câu hỏi về vị trí.'),
          qa('When does the conference start?', 'F1', 'M2', 'When does the conference start?', ['In the main hall.', 'Two hundred people.', 'At nine o\'clock tomorrow.'], 2, 'When hỏi về thời gian: "At nine o\'clock tomorrow". A trả lời cho Where, B trả lời cho How many.'),
          qa('Who is running the training?', 'M2', 'F2', 'Who is running the training?', ['Next Thursday.', 'In Room four.', 'Ms Garcia from Human Resources.'], 2, 'Who hỏi về người: "Ms Garcia from Human Resources". A là thời gian, B là địa điểm.'),
          qa('Why was the flight cancelled?', 'F2', 'M1', 'Why was the flight cancelled?', ['Because of the storm.', 'I\'d like a window seat.', 'At gate twelve.'], 0, 'Why hỏi lý do: "Because of the storm" (vì bão). B và C không liên quan.'),
          qa('How long does the trip take?', 'M1', 'F1', 'How long does the trip take?', ['By train.', 'It\'s very expensive.', 'About three hours.'], 2, 'How long hỏi khoảng thời gian: "About three hours". A trả lời How (bằng phương tiện gì), B nói về giá.'),
          qa('Would you like tea or coffee?', 'F1', 'M2', 'Would you like tea or coffee?', ['Yes, I would.', 'Coffee, please.', 'I like the cafeteria.'], 1, 'Câu hỏi lựa chọn (A or B) cần chọn một: "Coffee, please". Trả lời Yes là không phù hợp.'),
        ],
      },
      {
        id: 'lt-p2-2', group: 12, grade: 12, icon: '🎧', tag: 'TOEIC Part 2',
        title: 'Part 2 · Hỏi và đáp (2)', en: 'Question and response', desc: 'Câu đề nghị, câu hỏi đuôi, câu gián tiếp và câu nhận xét: những dạng khó hơn của Part 2.',
        listening: [
          qa('Could you send me the report?', 'F2', 'M1', 'Could you send me the report today?', ['The report is very long.', 'Sure, I\'ll email it this afternoon.', 'Yes, I went there yesterday.'], 1, 'Could you ... ? là lời nhờ vả; đồng ý bằng "Sure, I\'ll email it this afternoon". Các đáp án còn lại không đáp lại lời nhờ.'),
          qa('You haven\'t seen my charger?', 'M2', 'F1', 'You haven\'t seen my laptop charger, have you?', ['No, I haven\'t. Have you checked the meeting room?', 'Yes, it\'s a new model.', 'She charges a lot.'], 0, 'Câu hỏi đuôi: trả lời "No, I haven\'t" rồi gợi ý tìm ở phòng họp. B và C lặp lại từ "charger" gây nhiễu.'),
          qa('The air conditioning isn\'t working', 'F1', 'M2', 'The air conditioning isn\'t working.', ['The conditions are good.', 'It\'s in the cabinet.', 'Let me call maintenance.'], 2, 'Đây là câu nói về sự cố; đáp lại bằng giải pháp: "Let me call maintenance". A và B giống âm nhưng khác nghĩa.'),
          qa('Why don\'t we have lunch together?', 'M1', 'F2', 'Why don\'t we have lunch together?', ['Good idea. Where shall we go?', 'The lunch menu has changed.', 'I put them on the table.'], 0, 'Why don\'t we ...? là lời rủ rê; đồng ý bằng "Good idea. Where shall we go?".'),
          qa('What time does the supermarket close?', 'F2', 'M1', 'What time does the supermarket close?', ['It\'s open every day.', 'At ten o\'clock tonight.', 'About a kilometre from here.'], 1, 'What time hỏi giờ: "At ten o\'clock tonight". A nói về ngày mở cửa, C nói khoảng cách.'),
          qa('Where should I put these boxes?', 'M2', 'F1', 'Where should I put these boxes?', ['They\'re quite heavy.', 'Yes, I bought some.', 'Next to the door, please.'], 2, 'Where hỏi vị trí: "Next to the door, please". A nhận xét về trọng lượng, B không trả lời câu hỏi.'),
        ],
      },

      /* ---------- Part 3 ---------- */
      {
        id: 'lt-p3-1', group: 12, grade: 12, icon: '🏢', tag: 'TOEIC Part 3',
        title: 'Part 3 · Văn phòng', en: 'Conversations: office', desc: 'Hai đoạn hội thoại về lịch họp và thiết bị văn phòng, mỗi đoạn ba câu hỏi.',
        listening: [
          {
            title: 'Moving a meeting', kind: 'conversation', exam: 'TOEIC Part 3',
            speakers: { W: W('F1'), M: M('M1') },
            lines: [
              ['W', 'Hi, Tom. I\'m afraid I can\'t attend tomorrow\'s sales meeting. My client has asked to meet me at ten.', 'Chào Tom. Tôi e là tôi không dự được cuộc họp bán hàng ngày mai. Khách hàng của tôi yêu cầu gặp lúc mười giờ.'],
              ['M', 'That\'s a problem. We need you to present the quarterly figures. Could we move the meeting to the afternoon?', 'Vậy thì phiền đấy. Chúng ta cần chị trình bày số liệu quý. Có thể dời cuộc họp sang buổi chiều không?'],
              ['W', 'Yes, after two o\'clock would be fine. But I\'m not sure whether the conference room is free then.', 'Được, sau hai giờ thì ổn. Nhưng tôi không chắc phòng họp lúc đó có trống không.'],
              ['M', 'I\'ll check the booking system now. Oh, it\'s free from two thirty to four. I\'ll reserve it and send everyone a new invitation.', 'Để tôi xem hệ thống đặt phòng ngay. À, phòng trống từ hai giờ rưỡi đến bốn giờ. Tôi sẽ đặt và gửi lời mời mới cho mọi người.'],
              ['W', 'Thanks. I\'ll bring printed copies of the report for everyone.', 'Cảm ơn anh. Tôi sẽ mang bản in báo cáo cho mọi người.'],
            ],
            questions: [
              ['Why can\'t the woman attend the meeting?', 'She has to meet a client.', ['She is on holiday.', 'She is ill.', 'Her flight is cancelled.'], 'Chị ấy nói khách hàng yêu cầu gặp lúc mười giờ.'],
              ['What does the man offer to do?', 'Change the time of the meeting', ['Present the report himself', 'Cancel the meeting', 'Call the client'], 'Anh ấy đề nghị dời cuộc họp sang buổi chiều và đặt phòng.'],
              ['What will the woman bring to the meeting?', 'Printed copies of a report', ['Lunch for everyone', 'A new computer', 'A client\'s contract'], 'Chị sẽ mang bản in báo cáo (printed copies of the report).'],
            ],
          },
          {
            title: 'A broken photocopier', kind: 'conversation', exam: 'TOEIC Part 3',
            speakers: { W: W('F2'), M: M('M2') },
            lines: [
              ['M', 'Excuse me, Ms Chen. The photocopier on the third floor has stopped working again.', 'Xin lỗi chị Chen. Máy photocopy ở tầng ba lại hỏng nữa rồi.'],
              ['W', 'Again? The technician repaired it only last week. Have you called the service centre?', 'Lại nữa à? Kỹ thuật viên mới sửa tuần trước thôi. Anh đã gọi trung tâm bảo hành chưa?'],
              ['M', 'Yes, but they said they can\'t send anyone until Friday.', 'Rồi, nhưng họ nói đến thứ Sáu mới cử người đến được.'],
              ['W', 'That\'s too late. We need to print the training materials by Thursday. Let\'s use the machine in the marketing department.', 'Muộn quá. Chúng ta cần in tài liệu đào tạo trước thứ Năm. Hãy dùng máy ở phòng marketing.'],
              ['M', 'Good idea. I\'ll ask them if we can use it this afternoon.', 'Ý hay đấy. Tôi sẽ hỏi họ xem chiều nay có dùng được không.'],
            ],
            questions: [
              ['What is the problem?', 'A machine is not working.', ['A meeting room is full.', 'A report is missing.', 'A technician is late.'], 'Máy photocopy hỏng (has stopped working).'],
              ['When can the service centre send someone?', 'On Friday', ['On Wednesday', 'Today', 'Next month'], 'Họ nói không thể cử ai đến cho đến thứ Sáu (until Friday).'],
              ['What does the woman suggest?', 'Using a machine in another department', ['Buying a new photocopier', 'Cancelling the training', 'Printing at home'], 'Chị đề nghị dùng máy ở phòng marketing.'],
            ],
          },
        ],
      },
      {
        id: 'lt-p3-2', group: 12, grade: 12, icon: '🏨', tag: 'TOEIC Part 3',
        title: 'Part 3 · Du lịch và nhà hàng', en: 'Conversations: travel and dining', desc: 'Đặt phòng khách sạn và đặt bàn nhà hàng.',
        listening: [
          {
            title: 'Changing a hotel booking', kind: 'conversation', exam: 'TOEIC Part 3',
            speakers: { W: W('F1'), M: M('M1') },
            lines: [
              ['W', 'Good morning, Grand Palm Hotel. How can I help you?', 'Chào buổi sáng, khách sạn Grand Palm đây. Tôi có thể giúp gì ạ?'],
              ['M', 'Hello. I booked a double room for the fifth of May, but my plans have changed. I\'d like to stay one more night.', 'Xin chào. Tôi đã đặt phòng đôi cho ngày mùng năm tháng Năm, nhưng kế hoạch đã thay đổi. Tôi muốn ở thêm một đêm.'],
              ['W', 'Let me check. We have the same room available on the sixth, but the price will be higher because it\'s a weekend.', 'Để tôi kiểm tra. Chúng tôi còn phòng đó vào ngày mùng sáu, nhưng giá sẽ cao hơn vì là cuối tuần.'],
              ['M', 'How much more will it be?', 'Sẽ cao hơn bao nhiêu ạ?'],
              ['W', 'Twenty dollars more. Breakfast is included, and you can check out as late as noon.', 'Cao hơn hai mươi đô. Bữa sáng đã bao gồm và ông có thể trả phòng muộn nhất lúc mười hai giờ trưa.'],
              ['M', 'That\'s fine. Please add the extra night to my booking.', 'Được ạ. Làm ơn thêm một đêm vào đặt phòng của tôi.'],
            ],
            questions: [
              ['Why is the man calling?', 'To stay an extra night', ['To cancel his reservation', 'To book a meeting room', 'To complain about noise'], 'Ông ấy muốn ở thêm một đêm.'],
              ['Why will the price be higher?', 'The extra night is on a weekend.', ['The room is bigger.', 'Breakfast is not included.', 'There is a festival in town.'], 'Giá cao hơn vì là cuối tuần (it\'s a weekend).'],
              ['What does the woman say about checking out?', 'It can be as late as noon.', ['It must be before eight.', 'It costs extra.', 'It is not possible on weekends.'], 'Trả phòng muộn nhất lúc mười hai giờ trưa (as late as noon).'],
            ],
          },
          {
            title: 'Making a restaurant reservation', kind: 'conversation', exam: 'TOEIC Part 3',
            speakers: { W: W('F3'), M: M('M2') },
            lines: [
              ['M', 'Good evening, Blue Bay Restaurant. How can I help you?', 'Chào buổi tối, nhà hàng Blue Bay đây. Tôi có thể giúp gì ạ?'],
              ['W', 'I\'d like to reserve a table for eight people this Saturday at seven o\'clock. It\'s for a retirement party.', 'Tôi muốn đặt một bàn cho tám người vào thứ Bảy này lúc bảy giờ. Đó là tiệc về hưu.'],
              ['M', 'I\'m sorry, we are fully booked at seven. We have a table at eight thirty, or I can offer you a private room at seven for an extra fee.', 'Tiếc quá, chúng tôi đã kín bàn lúc bảy giờ. Chúng tôi có bàn lúc tám giờ rưỡi, hoặc tôi có thể sắp xếp phòng riêng lúc bảy giờ với phụ phí.'],
              ['W', 'How much is the private room?', 'Phòng riêng giá bao nhiêu ạ?'],
              ['M', 'Fifty dollars, and you can bring a cake without paying a service charge.', 'Năm mươi đô, và chị có thể mang bánh kem đến mà không mất phí phục vụ.'],
              ['W', 'Good. I\'ll take the private room. My name is Patel.', 'Được. Tôi lấy phòng riêng. Tên tôi là Patel.'],
            ],
            questions: [
              ['What is the occasion?', 'A retirement party', ['A birthday', 'A business lunch', 'A wedding'], 'Đó là tiệc về hưu (a retirement party).'],
              ['What problem does the man mention?', 'The restaurant has no tables at the requested time.', ['The kitchen is closed.', 'The menu has changed.', 'The party is too small.'], 'Nhà hàng kín bàn lúc bảy giờ (fully booked at seven).'],
              ['What will the woman probably do?', 'Reserve the private room', ['Choose a different restaurant', 'Cancel her booking', 'Come at eight thirty'], 'Chị ấy nói I\'ll take the private room.'],
            ],
          },
        ],
      },
      {
        id: 'lt-p3-3', group: 12, grade: 12, icon: '🛍️', tag: 'TOEIC Part 3',
        title: 'Part 3 · Mua sắm và dịch vụ', en: 'Conversations: shopping and services', desc: 'Trả hàng đã mua và hỏi thông tin tại phòng tập.',
        listening: [
          {
            title: 'Returning an item', kind: 'conversation', exam: 'TOEIC Part 3',
            speakers: { W: W('F1'), M: M('M1') },
            lines: [
              ['W', 'Hello. I bought this jacket last week, but it\'s too small. Can I exchange it for a larger size?', 'Xin chào. Tôi mua chiếc áo khoác này tuần trước nhưng nó nhỏ quá. Tôi đổi sang cỡ lớn hơn được không?'],
              ['M', 'Certainly. Do you have your receipt with you?', 'Được chứ. Chị có mang hóa đơn không?'],
              ['W', 'I\'m afraid I left it at home, but I paid by credit card.', 'Tôi e là tôi để quên ở nhà, nhưng tôi đã trả bằng thẻ tín dụng.'],
              ['M', 'That\'s fine. I can find the purchase on the system if you show me the card. Unfortunately, we don\'t have the large size in black at the moment.', 'Không sao. Tôi có thể tra giao dịch trên hệ thống nếu chị cho tôi xem thẻ. Tiếc là hiện chúng tôi không còn cỡ lớn màu đen.'],
              ['W', 'Then I\'d like a refund instead.', 'Vậy tôi xin hoàn tiền.'],
              ['M', 'No problem. The money will go back to your card within five working days.', 'Không vấn đề gì. Tiền sẽ được hoàn vào thẻ của chị trong vòng năm ngày làm việc.'],
            ],
            questions: [
              ['What is the woman\'s problem?', 'The jacket does not fit.', ['The jacket is damaged.', 'The jacket is the wrong colour.', 'She lost her card.'], 'Áo nhỏ quá (too small).'],
              ['Why is a refund necessary?', 'The larger size is not in stock.', ['She lost the receipt.', 'The store is closing.', 'She bought it online.'], 'Cửa hàng không còn cỡ lớn màu đen.'],
              ['How long will the refund take?', 'Up to five working days', ['One hour', 'Two weeks', 'A month'], 'Trong vòng năm ngày làm việc.'],
            ],
          },
          {
            title: 'Joining a gym', kind: 'conversation', exam: 'TOEIC Part 3',
            speakers: { W: W('F2'), M: M('M2') },
            lines: [
              ['M', 'Welcome to City Fitness. Are you interested in a membership?', 'Chào mừng đến City Fitness. Chị quan tâm đến thẻ hội viên phải không?'],
              ['W', 'Yes. What\'s the difference between the monthly and the yearly plan?', 'Vâng. Gói theo tháng và gói theo năm khác nhau thế nào?'],
              ['M', 'The monthly plan is forty dollars. The yearly plan is four hundred dollars, so you save eighty dollars, and it includes two free sessions with a personal trainer.', 'Gói tháng là bốn mươi đô. Gói năm là bốn trăm đô nên chị tiết kiệm được tám mươi đô, và có hai buổi miễn phí với huấn luyện viên riêng.'],
              ['W', 'That sounds good. Is the swimming pool open on weekends?', 'Nghe hấp dẫn đấy. Hồ bơi có mở vào cuối tuần không?'],
              ['M', 'Yes, from eight in the morning until six in the evening. It\'s closed on public holidays.', 'Có, từ tám giờ sáng đến sáu giờ chiều. Hồ bơi đóng cửa vào các ngày lễ.'],
            ],
            questions: [
              ['What does the woman want to know?', 'The difference between two plans', ['The location of the gym', 'The name of the trainer', 'The price of a locker'], 'Chị hỏi gói tháng và gói năm khác nhau thế nào.'],
              ['How much can the woman save with the yearly plan?', 'Eighty dollars', ['Forty dollars', 'Four hundred dollars', 'Twenty dollars'], '12 × 40 = 480, gói năm 400 nên tiết kiệm 80 đô.'],
              ['When is the swimming pool closed?', 'On public holidays', ['On weekends', 'In the evenings', 'On Mondays'], 'Hồ bơi đóng cửa vào các ngày lễ (public holidays).'],
            ],
          },
        ],
      },

      /* ---------- Part 4 ---------- */
      {
        id: 'lt-p4-1', group: 12, grade: 12, icon: '📞', tag: 'TOEIC Part 4',
        title: 'Part 4 · Tin nhắn và thông báo', en: 'Talks: messages and announcements', desc: 'Tin nhắn thoại của phòng khám và thông báo của cửa hàng.',
        listening: [
          {
            title: 'A voicemail from a clinic', kind: 'talk', exam: 'TOEIC Part 4',
            speakers: { A: { name: 'Speaker', v: 'F1' } },
            lines: [
              ['A', 'Hello, this is Anna from Riverside Dental Clinic calling for Mr Wilson. I\'m calling to remind you about your appointment tomorrow, Wednesday, at ten fifteen.', 'Xin chào, tôi là Anna ở phòng khám nha khoa Riverside, gọi cho ông Wilson. Tôi gọi để nhắc ông về cuộc hẹn ngày mai, thứ Tư, lúc mười giờ mười lăm.'],
              ['A', 'Please arrive ten minutes early and bring your insurance card. Also, our parking lot will be closed for repairs this week, so you may want to use the car park across the street.', 'Xin ông đến sớm mười phút và mang theo thẻ bảo hiểm. Ngoài ra, bãi đỗ xe của chúng tôi sẽ đóng cửa để sửa chữa trong tuần này, nên ông có thể dùng bãi đỗ xe bên kia đường.'],
              ['A', 'If you need to change your appointment, please call us back at five five five, zero one four two before six o\'clock this evening. Thank you.', 'Nếu cần đổi lịch hẹn, xin gọi lại cho chúng tôi theo số năm năm năm, không một bốn hai trước sáu giờ tối nay. Cảm ơn ông.'],
            ],
            questions: [
              ['Why is the speaker calling?', 'To remind a patient about an appointment', ['To confirm a payment', 'To cancel a clinic', 'To sell insurance'], 'Tôi gọi để nhắc ông về cuộc hẹn ngày mai.'],
              ['What does the speaker ask Mr Wilson to bring?', 'His insurance card', ['His passport', 'A photograph', 'A payment receipt'], 'Xin mang theo thẻ bảo hiểm (insurance card).'],
              ['What problem does the speaker mention?', 'The parking lot is closed.', ['The clinic is moving.', 'The dentist is ill.', 'The appointment is full.'], 'Bãi đỗ xe đóng cửa để sửa chữa.'],
            ],
          },
          {
            title: 'A store announcement', kind: 'announcement', exam: 'TOEIC Part 4',
            speakers: { A: { name: 'Announcer', v: 'M1' } },
            lines: [
              ['A', 'Attention, shoppers. Welcome to Greenfield Department Store. For one day only, tomorrow, all winter coats on the second floor are thirty percent off.', 'Xin quý khách chú ý. Chào mừng đến cửa hàng bách hóa Greenfield. Chỉ trong một ngày, ngày mai, tất cả áo khoác mùa đông ở tầng hai được giảm ba mươi phần trăm.'],
              ['A', 'Customers who spend more than a hundred dollars will receive a free umbrella, while supplies last. Our store will open one hour earlier than usual, at eight o\'clock.', 'Khách hàng chi tiêu hơn một trăm đô sẽ nhận một chiếc ô miễn phí, đến khi hết hàng. Cửa hàng sẽ mở cửa sớm hơn thường lệ một tiếng, lúc tám giờ.'],
              ['A', 'Please note that the café on the third floor will be closed tomorrow. Thank you for shopping with us.', 'Xin lưu ý quán cà phê ở tầng ba sẽ đóng cửa vào ngày mai. Cảm ơn quý khách đã mua sắm tại cửa hàng của chúng tôi.'],
            ],
            questions: [
              ['What is being advertised?', 'A one-day discount on coats', ['A new restaurant', 'A free delivery service', 'A fashion show'], 'Áo khoác mùa đông giảm ba mươi phần trăm trong một ngày.'],
              ['How can customers get a free umbrella?', 'By spending more than a hundred dollars', ['By joining a club', 'By showing a coupon', 'By arriving before eight'], 'Chi tiêu hơn một trăm đô sẽ nhận ô miễn phí.'],
              ['What is mentioned about the café?', 'It will be closed tomorrow.', ['It will serve free coffee.', 'It has moved to the second floor.', 'It will open early.'], 'Quán cà phê tầng ba sẽ đóng cửa ngày mai.'],
            ],
          },
        ],
      },
      {
        id: 'lt-p4-2', group: 12, grade: 12, icon: '🎙️', tag: 'TOEIC Part 4',
        title: 'Part 4 · Hướng dẫn và họp', en: 'Talks: tours and meetings', desc: 'Hướng dẫn viên bảo tàng và đoạn trích cuộc họp về phần mềm mới.',
        listening: [
          {
            title: 'A museum tour', kind: 'talk', exam: 'TOEIC Part 4',
            speakers: { A: { name: 'Tour guide', v: 'F2' } },
            lines: [
              ['A', 'Good morning, everyone, and welcome to the City History Museum. My name is Maria, and I\'ll be your guide today. The tour will take about ninety minutes.', 'Chào buổi sáng mọi người, chào mừng đến Bảo tàng Lịch sử Thành phố. Tôi tên là Maria và là hướng dẫn viên của quý vị hôm nay. Chuyến tham quan kéo dài khoảng chín mươi phút.'],
              ['A', 'We\'ll begin on the first floor, where you can see photographs of the city from the nineteenth century. After that, we\'ll move to the second floor to see the collection of old maps.', 'Chúng ta sẽ bắt đầu ở tầng một, nơi quý vị có thể xem ảnh về thành phố từ thế kỷ mười chín. Sau đó, chúng ta sẽ lên tầng hai xem bộ sưu tập bản đồ cổ.'],
              ['A', 'Please remember that flash photography is not allowed. If you have any questions, feel free to ask me at any time. Now, let\'s start by looking at the first exhibit.', 'Xin nhớ rằng không được chụp ảnh có đèn flash. Nếu có câu hỏi, quý vị cứ hỏi tôi bất cứ lúc nào. Bây giờ, chúng ta hãy xem hiện vật đầu tiên.'],
            ],
            questions: [
              ['Who is the speaker?', 'A tour guide', ['A museum manager', 'A photographer', 'A teacher'], 'Tôi sẽ là hướng dẫn viên của quý vị (I\'ll be your guide).'],
              ['How long will the tour last?', 'About ninety minutes', ['About thirty minutes', 'About two hours', 'All day'], 'Khoảng chín mươi phút.'],
              ['What are visitors asked not to do?', 'Use flash photography', ['Ask questions', 'Visit the second floor', 'Talk to each other'], 'Không được chụp ảnh có đèn flash.'],
            ],
          },
          {
            title: 'A meeting about new software', kind: 'talk', exam: 'TOEIC Part 4',
            speakers: { A: { name: 'Manager', v: 'M2' } },
            lines: [
              ['A', 'Thank you all for coming. As you know, our company will start using a new scheduling program next month. I\'d like to explain how the change will affect your work.', 'Cảm ơn mọi người đã đến. Như mọi người biết, công ty sẽ bắt đầu dùng một chương trình lập lịch mới vào tháng sau. Tôi muốn giải thích sự thay đổi sẽ ảnh hưởng đến công việc của mọi người thế nào.'],
              ['A', 'First, all staff must attend a training session. There will be two sessions next week: one on Tuesday morning and one on Thursday afternoon. Each session lasts two hours.', 'Thứ nhất, toàn bộ nhân viên phải dự một buổi tập huấn. Tuần sau sẽ có hai buổi: một buổi sáng thứ Ba và một buổi chiều thứ Năm. Mỗi buổi kéo dài hai tiếng.'],
              ['A', 'Second, the old program will stop working on the thirtieth, so please enter all your current appointments into the new system before that date. If you have any problems, contact Mr Brown in the IT department.', 'Thứ hai, chương trình cũ sẽ ngừng hoạt động vào ngày ba mươi, nên hãy nhập mọi cuộc hẹn hiện tại vào hệ thống mới trước ngày đó. Nếu gặp vấn đề, hãy liên hệ ông Brown ở phòng CNTT.'],
            ],
            questions: [
              ['What is the main topic of the talk?', 'A new computer program', ['A new office building', 'A holiday schedule', 'A job offer'], 'Công ty sẽ dùng chương trình lập lịch mới.'],
              ['What must all staff do?', 'Attend a training session', ['Work on Saturdays', 'Buy new computers', 'Write a report'], 'Toàn bộ nhân viên phải dự buổi tập huấn.'],
              ['Who should employees contact if they have problems?', 'Mr Brown', ['Ms Chen', 'The manager', 'Human Resources'], 'Liên hệ ông Brown ở phòng CNTT.'],
            ],
          },
        ],
      },
    ],
  });
})();
