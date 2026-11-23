/* EngVui – mục Luyện thi: chủ đề từ vựng và dạng câu hay gặp trong TOEIC và IELTS.
   Không phải đề thi chính thức; nội dung tự soạn để luyện kỹ năng.
   Định dạng giống js/data/grammar.js, thêm:
     words: [[en, vi, emoji|""]]   (chia thành hai bài Từ vựng 1, Từ vựng 2)
     tag:   dòng mô tả ngắn phần thi liên quan
   Phần trong ngoặc là JSON chuẩn (để tools/validate_data.py đọc được). */
EV.registerExam({
  "names": ["Mr", "Ms", "Mrs", "Lee", "Tran", "Kim", "Smith", "Hoi", "Ha", "Da", "Singapore", "Sweden"],
  "groups": [
    {"id": 4, "title": "TOEIC 0–300", "desc": "Từ vựng đời sống và câu cơ bản, làm quen với TOEIC", "color": "#1CB0F6", "dark": "#1899D6"},
    {"id": 1, "title": "TOEIC 300–600", "desc": "Từ vựng công sở, câu Part 2–6 ở mức trung bình", "color": "#00CD9C", "dark": "#00A47D"},
    {"id": 5, "title": "TOEIC 600–900", "desc": "Hợp đồng, kỹ thuật, kết hợp từ và cặp từ dễ nhầm", "color": "#CE82FF", "dark": "#A568E0"},
    {"id": 2, "title": "IELTS", "desc": "Từ vựng học thuật, Writing và Speaking", "color": "#FF4B4B", "dark": "#D63A3A"},
    {"id": 3, "title": "Cụm từ", "desc": "Phrasal verbs, collocation, idioms", "color": "#FF9600", "dark": "#D97F00"},
    {"id": 6, "title": "Chuyên ngành CNTT", "desc": "Tiếng Anh cho ngành công nghệ thông tin", "color": "#4F6BED", "dark": "#3B55D0"}
  ],
  "topics": [
    {
      "id": "office", "group": 1, "grade": 12, "icon": "🏢", "tag": "Part 1–5",
      "title": "Văn phòng và công việc", "en": "Office life",
      "desc": "Đồng nghiệp, hạn chót, phòng ban, giấy tờ hằng ngày.",
      "words": [
        ["colleague", "đồng nghiệp", "👥"],
        ["deadline", "hạn chót", "⏰"],
        ["photocopier", "máy photocopy", "🖨️"],
        ["supervisor", "người giám sát, cấp trên", ""],
        ["assignment", "nhiệm vụ được giao", ""],
        ["department", "phòng ban", "🏢"],
        ["schedule", "lịch trình; lên lịch", "📅"],
        ["submit", "nộp", "📤"],
        ["approve", "phê duyệt", "✅"],
        ["reception", "quầy lễ tân", "🛎️"],
        ["supplies", "đồ dùng, vật tư", "📎"],
        ["extension", "số máy lẻ; sự gia hạn", "☎️"]
      ],
      "grammar": [
        ["Mẹo Part 5: đọc cả câu", "Đừng chỉ nhìn chỗ trống. Xem từ đứng trước và sau chỗ trống để biết cần danh từ, động từ, tính từ hay trạng từ, rồi mới xét nghĩa.", "Please submit the report by Friday. | The supervisor approved our request."],
        ["Cụm từ hay gặp ở văn phòng", "Nhiều câu TOEIC kiểm tra cụm cố định: meet a deadline, submit a report, be in charge of, be responsible for, on behalf of.", "She is in charge of the sales department. | I am calling on behalf of Mr Lee."]
      ],
      "quiz": [
        ["All employees must ___ their reports by five o'clock.", "submit", ["submission", "submitted", "submitting"], "Sau must là động từ nguyên mẫu."],
        ["Ms Tran is responsible ___ training new staff.", "for", ["of", "to", "with"], "Cụm cố định: be responsible for."],
        ["The manager ___ the budget yesterday afternoon.", "approved", ["approves", "approval", "approving"], "yesterday afternoon chỉ quá khứ nên dùng approved."],
        ["We need to order more office ___ such as paper and pens.", "supplies", ["supply", "supplied", "supplier"], "such as paper and pens chỉ nhiều thứ: danh từ số nhiều supplies."],
        ["The project was finished ___ the deadline.", "before", ["during", "until", "since"], "before the deadline: trước hạn chót."],
        ["Please call me at extension 205 if you have ___ questions.", "any", ["some", "much", "every"], "Mệnh đề if mang nghĩa nghi vấn thường dùng any."],
        ["Mr Lee works in the accounting ___.", "department", ["depart", "departure", "departed"], "Sau the accounting cần danh từ chỉ nơi làm việc: department."],
        ["Our team leader is ___ in charge of the new project.", "currently", ["current", "currency", "currents"], "Đứng giữa is và cụm in charge of cần trạng từ: currently."]
      ],
      "sentences": [
        ["Could you make ten copies of this document?", "Bạn có thể phô tô tài liệu này thành mười bản được không?"],
        ["The meeting room is next to the reception desk.", "Phòng họp ở cạnh quầy lễ tân."],
        ["I have to meet a deadline this afternoon.", "Chiều nay tôi phải hoàn thành cho kịp hạn chót."],
        ["Please send the file to all the staff in my department.", "Hãy gửi tệp này cho toàn bộ nhân viên trong phòng tôi."],
        ["My supervisor asked me to finish the assignment by Monday.", "Cấp trên yêu cầu tôi hoàn thành nhiệm vụ trước thứ Hai."],
        ["The photocopier on the second floor is out of order.", "Máy photocopy ở tầng hai bị hỏng."]
      ],
      "transform": [
        ["The report must be submitted by Friday.", "Chuyển sang câu chủ động, bắt đầu bằng You", "You must submit the report by Friday.", "Bạn phải nộp báo cáo trước thứ Sáu."],
        ["Mr Lee is responsible for the budget.", "Viết lại với in charge of", "Mr Lee is in charge of the budget.", "Ông Lee phụ trách ngân sách."],
        ["The manager approved the plan.", "Chuyển sang câu bị động", "The plan was approved by the manager. | The plan was approved.", "Kế hoạch đã được quản lý phê duyệt."],
        ["We ran out of paper.", "Viết lại với have no paper left", "We have no paper left.", "Chúng tôi hết giấy rồi."],
        ["Can you help me with this assignment?", "Viết lại lịch sự hơn với Could you", "Could you help me with this assignment?", "Anh chị có thể giúp tôi với nhiệm vụ này được không?"]
      ],
      "extra": ["is", "was", "by", "for", "to"],
      "reading": {
        "title": "Office renovation next week",
        "kind": "email",
        "text": [
          "Dear colleagues,",
          "As you know, the third floor of our building will be renovated next week. Work will begin on Monday, June 10, and is expected to finish by Friday, June 14. During this time, the meeting rooms on the third floor will not be available.",
          "Staff in the Marketing and Sales departments will temporarily move to the second floor. Please pack your personal items before you leave on Friday afternoon. Boxes and labels can be picked up at the reception desk.",
          "The IT team will set up your computers in the new work area over the weekend, so you can start working as usual on Monday morning. If you have any questions, please contact me at extension 214.",
          "Thank you for your understanding.",
          "Linda Park, Office Manager"
        ],
        "questions": [
          [
            "What is the main purpose of the email?",
            "To inform staff about a temporary move",
            [
              "To announce a new office manager",
              "To invite staff to a meeting",
              "To ask for help with the IT system"
            ],
            "Email báo tầng ba sẽ sửa chữa và nhân viên hai phòng tạm chuyển xuống tầng hai."
          ],
          [
            "When is the renovation expected to finish?",
            "By June 14",
            [
              "On June 10",
              "Over the weekend",
              "At the end of June"
            ],
            "Trong bài: is expected to finish by Friday, June 14."
          ],
          [
            "Where can employees get boxes?",
            "At the reception desk",
            [
              "From the IT team",
              "On the third floor",
              "In the meeting rooms"
            ],
            "Trong bài: Boxes and labels can be picked up at the reception desk."
          ],
          [
            "What will the IT team do?",
            "Set up computers in the new work area",
            [
              "Repair the meeting rooms",
              "Pack employees' personal items",
              "Answer questions at extension 214"
            ],
            "Trong bài: The IT team will set up your computers in the new work area over the weekend."
          ],
          [
            "The word \"temporarily\" in the email is closest in meaning to",
            "for a short time",
            [
              "permanently",
              "quickly",
              "unexpectedly"
            ],
            "temporarily nghĩa là tạm thời, chỉ trong một thời gian ngắn."
          ]
        ]
      }
    },
    {
      "id": "hr", "group": 1, "grade": 12, "icon": "🤝", "tag": "Part 3–7",
      "title": "Tuyển dụng và nhân sự", "en": "Recruitment and HR",
      "desc": "Ứng tuyển, phỏng vấn, lương, thăng chức.",
      "words": [
        ["applicant", "người nộp đơn", "📨"],
        ["candidate", "ứng viên", "🙋"],
        ["interview", "cuộc phỏng vấn", "🤝"],
        ["position", "vị trí công việc", "💼"],
        ["qualification", "bằng cấp, trình độ", "🎓"],
        ["experience", "kinh nghiệm", ""],
        ["salary", "tiền lương", "💰"],
        ["hire", "thuê, tuyển dụng", ""],
        ["promote", "thăng chức", "📈"],
        ["retire", "nghỉ hưu", "👴"],
        ["benefits", "phúc lợi", "🎁"],
        ["vacancy", "vị trí còn trống", "🪑"]
      ],
      "grammar": [
        ["Cụm từ về tuyển dụng", "Hay gặp: apply for a position, be qualified for, hire new staff, be promoted to, retire from.", "She applied for the position of sales manager. | He was promoted to team leader last year."],
        ["Danh từ chỉ người và chỉ việc", "Nhiều từ có hai dạng danh từ: người làm (applicant, employee, employer) và hành động (application, employment). Đọc nghĩa câu để chọn đúng.", "We received fifty applications. | All applicants must have a degree."]
      ],
      "quiz": [
        ["We received more than fifty ___ for the position.", "applications", ["apply", "applying", "applied"], "Sau more than fifty cần danh từ số nhiều; thứ nhận được là đơn: applications."],
        ["Ms Kim was ___ to marketing director last month.", "promoted", ["promotion", "promote", "promoting"], "Bị động: was + V3."],
        ["The company plans to ___ ten new employees this year.", "hire", ["hiring", "hired", "hires"], "plan to + động từ nguyên mẫu."],
        ["Candidates must have at least two years of ___ in sales.", "experience", ["experienced", "experiencing", "experiment"], "Sau of cần danh từ: experience (kinh nghiệm, không đếm được)."],
        ["He is highly ___ for this job.", "qualified", ["qualification", "qualify", "qualifying"], "Sau trạng từ highly cần tính từ: qualified."],
        ["There is a ___ for an accountant in our office.", "vacancy", ["vacant", "vacation", "vacate"], "Sau a cần danh từ: vacancy (vị trí còn trống)."],
        ["Mr Smith will ___ next year after thirty years with the company.", "retire", ["retirement", "retired", "retiring"], "Sau will là động từ nguyên mẫu."],
        ["The interview will be held ___ Monday morning.", "on", ["in", "at", "by"], "Ngày trong tuần, kể cả Monday morning, dùng on."]
      ],
      "sentences": [
        ["I would like to apply for the position of sales assistant.", "Tôi muốn nộp đơn xin vị trí trợ lý bán hàng."],
        ["The interview lasted about thirty minutes.", "Buổi phỏng vấn kéo dài khoảng ba mươi phút."],
        ["She has five years of experience in marketing.", "Cô ấy có năm năm kinh nghiệm trong lĩnh vực tiếp thị."],
        ["All candidates must bring a copy of their CV.", "Tất cả ứng viên phải mang theo một bản CV."],
        ["He was promoted to manager after two years.", "Anh ấy được thăng chức lên quản lý sau hai năm."],
        ["The company offers good benefits and a high salary.", "Công ty có phúc lợi tốt và mức lương cao."]
      ],
      "transform": [
        ["The company hired three new engineers.", "Chuyển sang câu bị động", "Three new engineers were hired by the company. | Three new engineers were hired.", "Ba kỹ sư mới đã được công ty tuyển dụng."],
        ["They promoted her to team leader.", "Chuyển sang câu bị động", "She was promoted to team leader. | She was promoted to team leader by them.", "Cô ấy được thăng chức lên trưởng nhóm."],
        ["He has the right qualifications for the job.", "Viết lại với is qualified for", "He is qualified for the job.", "Anh ấy đủ trình độ cho công việc này."],
        ["I want to apply for this job.", "Viết lại lịch sự với would like", "I would like to apply for this job.", "Tôi muốn nộp đơn cho công việc này."],
        ["She stopped working at the age of sixty.", "Viết lại với retired", "She retired at the age of sixty.", "Bà ấy nghỉ hưu ở tuổi sáu mươi."]
      ],
      "extra": ["was", "were", "is", "by", "for"],
      "reading": {
        "title": "Job opening: Sales Assistant", "kind": "notice",
        "text": [
          "Bright Star Travel is looking for a full-time Sales Assistant to join our busy team in Da Nang.",
          "Main duties: answering customer questions by phone and email, preparing travel documents and helping the sales manager with monthly reports.",
          "Requirements: a university degree or college qualification, at least one year of experience in customer service, and good English. Experience in the travel industry is an advantage but is not required.",
          "We offer a competitive salary, health insurance, 15 days of paid holiday and free training courses. Successful candidates will also receive a discount on company tours.",
          "To apply, please email your CV and a cover letter to our Human Resources department by July 31. Only shortlisted candidates will be contacted for an interview."
        ],
        "questions": [
          ["What position is being advertised?", "Sales Assistant", ["Sales Manager", "Tour Guide", "Human Resources Officer"], "Trong bài: is looking for a full-time Sales Assistant."],
          ["What is one of the main duties?", "Preparing travel documents", ["Leading tours", "Hiring new staff", "Repairing computers"], "Trong bài: preparing travel documents."],
          ["What is NOT required for the job?", "Experience in the travel industry", ["Good English", "A degree or college qualification", "Customer service experience"], "Trong bài: Experience in the travel industry is an advantage but is not required."],
          ["Which benefit is mentioned?", "A discount on company tours", ["A company car", "Free lunch every day", "A yearly bonus"], "Trong bài: will also receive a discount on company tours."],
          ["Who will be contacted for an interview?", "Only shortlisted candidates", ["All applicants", "Current employees", "Customers of the company"], "Trong bài: Only shortlisted candidates will be contacted for an interview."]
        ]
      }
    },
    {
      "id": "meeting", "group": 1, "grade": 12, "icon": "📋", "tag": "Part 2–5",
      "title": "Cuộc họp và lịch làm việc", "en": "Meetings and schedules",
      "desc": "Sắp xếp, hoãn, hủy cuộc họp; giới từ chỉ thời gian.",
      "words": [
        ["agenda", "chương trình cuộc họp", "📋"],
        ["attend", "tham dự", "🙋"],
        ["postpone", "hoãn lại", "⏸️"],
        ["cancel", "hủy bỏ", "❌"],
        ["reschedule", "sắp xếp lại lịch", "🔁"],
        ["conference", "hội nghị", "🎤"],
        ["participant", "người tham gia", "👥"],
        ["presentation", "bài thuyết trình", "📊"],
        ["minutes", "biên bản cuộc họp", "📝"],
        ["appointment", "cuộc hẹn", "📅"],
        ["available", "có thể gặp, rảnh", ""],
        ["confirm", "xác nhận", "✔️"]
      ],
      "grammar": [
        ["Giới từ chỉ thời gian", "TOEIC hay hỏi giới từ: at + giờ (at three o'clock), on + ngày (on Monday), in + tháng, năm (in June), by + hạn chót (by Friday), until + mốc kéo dài đến (until noon).", "The meeting starts at nine. | Please reply by Friday. | The office is closed until Monday."],
        ["Hoãn, hủy, dời lịch", "postpone và put off là hoãn sang sau; cancel là hủy hẳn; reschedule là xếp lại lịch; bring forward là dời lên sớm hơn.", "The meeting has been postponed until next week. | We had to cancel the conference."]
      ],
      "quiz": [
        ["The sales meeting will start ___ ten o'clock.", "at", ["on", "in", "by"], "Giờ cụ thể dùng at."],
        ["Please confirm your attendance ___ Friday.", "by", ["until", "at", "since"], "Hạn chót dùng by."],
        ["The conference has been ___ until next month because of the storm.", "postponed", ["postpone", "postponing", "postponement"], "Bị động hiện tại hoàn thành: has been + V3."],
        ["All ___ should arrive fifteen minutes early.", "participants", ["participate", "participation", "participated"], "Chủ ngữ chỉ người, số nhiều: participants."],
        ["Is Mr Lee ___ for a meeting on Thursday?", "available", ["availability", "avail", "availably"], "Sau is cần tính từ: available (rảnh)."],
        ["She gave an excellent ___ on the new product.", "presentation", ["present", "presented", "presenting"], "Sau an excellent cần danh từ: presentation."],
        ["Could you send me the ___ of yesterday's meeting?", "minutes", ["minute", "minuting", "minuted"], "Biên bản cuộc họp luôn ở dạng số nhiều: the minutes."],
        ["I have to ___ my appointment with the dentist.", "reschedule", ["rescheduling", "rescheduled", "reschedules"], "Sau have to là động từ nguyên mẫu."]
      ],
      "sentences": [
        ["The meeting has been moved to Thursday afternoon.", "Cuộc họp đã được dời sang chiều thứ Năm."],
        ["Let's go through the agenda first.", "Chúng ta hãy xem qua chương trình họp trước."],
        ["I'm afraid I can't attend the conference.", "Tôi e là không thể tham dự hội nghị."],
        ["Could we reschedule our appointment for next week?", "Chúng ta có thể dời cuộc hẹn sang tuần sau được không?"],
        ["Please confirm the time and place of the meeting.", "Vui lòng xác nhận thời gian và địa điểm cuộc họp."],
        ["The presentation will last about twenty minutes.", "Bài thuyết trình sẽ kéo dài khoảng hai mươi phút."]
      ],
      "transform": [
        ["They postponed the meeting.", "Chuyển sang câu bị động", "The meeting was postponed. | The meeting was postponed by them.", "Cuộc họp đã bị hoãn."],
        ["We will put off the conference until May.", "Viết lại với postpone", "We will postpone the conference until May.", "Chúng tôi sẽ hoãn hội nghị đến tháng Năm."],
        ["Are you free on Monday?", "Viết lại với available", "Are you available on Monday?", "Thứ Hai bạn có rảnh không?"],
        ["The meeting won't take place.", "Viết lại với has been cancelled", "The meeting has been cancelled. | The meeting has been canceled.", "Cuộc họp đã bị hủy."],
        ["Mr Lee went to the conference.", "Viết lại với attended", "Mr Lee attended the conference.", "Ông Lee đã tham dự hội nghị."]
      ],
      "extra": ["was", "been", "is", "at", "on"],
      "reading": {
        "title": "Change to Monday's team meeting", "kind": "email",
        "text": [
          "Hi team,",
          "I'm afraid I have to reschedule our weekly meeting. Our director has asked me to attend a conference in Ha Noi on Monday, so the meeting will be moved from Monday at 9 a.m. to Tuesday at 2 p.m. It will still take place in Room 402.",
          "The main item on the agenda is the plan for the new product launch in October. Please bring your ideas for the launch event. James will also give a short presentation on the results of the customer survey.",
          "If you are not available on Tuesday afternoon, please let me know by Friday so that I can send you the minutes after the meeting.",
          "Thanks, Hana Sato, Project Manager"
        ],
        "questions": [
          ["Why is the meeting being rescheduled?", "The writer has to attend a conference.", ["The meeting room is not available.", "James is on holiday.", "The director is ill."], "Trong bài: Our director has asked me to attend a conference in Ha Noi on Monday."],
          ["When will the meeting take place?", "On Tuesday afternoon", ["On Monday morning", "On Friday", "On Tuesday morning"], "Trong bài: will be moved … to Tuesday at 2 p.m."],
          ["What is the main topic of the meeting?", "A product launch", ["A customer complaint", "A new office", "Staff holidays"], "Trong bài: The main item on the agenda is the plan for the new product launch."],
          ["What will James do?", "Give a presentation", ["Write the minutes", "Book a room", "Organise the launch event"], "Trong bài: James will also give a short presentation."],
          ["What should staff who cannot attend do?", "Tell Ms Sato by Friday", ["Send their ideas by email", "Attend on Monday instead", "Call the director"], "Trong bài: please let me know by Friday."]
        ]
      }
    },
    {
      "id": "order", "group": 1, "grade": 12, "icon": "🚚", "tag": "Part 4–7",
      "title": "Đặt hàng và giao hàng", "en": "Orders and deliveries",
      "desc": "Đơn hàng, hóa đơn, giao hàng, hoàn tiền.",
      "words": [
        ["order", "đơn hàng; đặt hàng", "🛒"],
        ["invoice", "hóa đơn", "🧾"],
        ["delivery", "việc giao hàng", "🚚"],
        ["shipment", "lô hàng", "🚢"],
        ["supplier", "nhà cung cấp", "🏭"],
        ["customer", "khách hàng", "🧍"],
        ["refund", "tiền hoàn lại", "💵"],
        ["discount", "sự giảm giá", "🏷️"],
        ["warehouse", "nhà kho", "📦"],
        ["damaged", "bị hư hỏng", "💔"],
        ["in stock", "còn hàng", ""],
        ["out of stock", "hết hàng", ""]
      ],
      "grammar": [
        ["Từ loại trong Part 5", "Sau mạo từ và tính từ là danh từ (a quick delivery). Trước danh từ là tính từ (a damaged item). Bổ nghĩa cho động từ là trạng từ (shipped quickly).", "The delivery was late. | We received a damaged box. | The order was shipped quickly."],
        ["Cụm hay gặp khi mua bán", "place an order, in stock, out of stock, free of charge, give a refund, offer a discount.", "I would like to place an order. | This item is out of stock."]
      ],
      "quiz": [
        ["I would like to ___ an order for twenty chairs.", "place", ["put on", "take", "do"], "Cụm cố định: place an order."],
        ["Unfortunately, this model is out ___ stock.", "of", ["in", "on", "from"], "Cụm cố định: out of stock."],
        ["The ___ will arrive within three working days.", "shipment", ["ship", "shipped", "shipping to"], "Sau The cần danh từ: shipment (lô hàng)."],
        ["Customers who receive ___ goods can ask for a refund.", "damaged", ["damage", "damaging", "damages"], "Trước danh từ goods cần tính từ: damaged (bị hư hỏng)."],
        ["Please check the ___ carefully before you pay.", "invoice", ["invoiced", "invoicing", "invoiceable"], "Sau the cần danh từ: invoice (hóa đơn)."],
        ["All orders over 500 dollars are delivered free ___ charge.", "of", ["for", "from", "with"], "Cụm cố định: free of charge (miễn phí)."],
        ["The package was delivered ___ than expected.", "sooner", ["soon", "soonest", "more soon"], "So sánh hơn với than: sooner."],
        ["We offer a ten percent ___ to all new customers.", "discount", ["discounted", "discounting", "discountable"], "Sau a ten percent cần danh từ: discount."]
      ],
      "sentences": [
        ["I'd like to order three boxes of printer paper.", "Tôi muốn đặt ba thùng giấy in."],
        ["Your order will be shipped tomorrow morning.", "Đơn hàng của bạn sẽ được gửi đi vào sáng mai."],
        ["We are sorry, but this item is out of stock.", "Chúng tôi xin lỗi, mặt hàng này đã hết."],
        ["The goods were damaged during delivery.", "Hàng hóa bị hư hỏng trong quá trình giao."],
        ["Could you send us a copy of the invoice?", "Bạn có thể gửi cho chúng tôi một bản hóa đơn không?"],
        ["The customer asked for a full refund.", "Khách hàng yêu cầu hoàn lại toàn bộ tiền."]
      ],
      "transform": [
        ["The supplier sent the goods yesterday.", "Chuyển sang câu bị động", "The goods were sent by the supplier yesterday. | The goods were sent yesterday by the supplier. | The goods were sent yesterday.", "Hàng hóa đã được nhà cung cấp gửi hôm qua."],
        ["We don't have this product at the moment.", "Viết lại với out of stock", "This product is out of stock at the moment. | This product is out of stock.", "Sản phẩm này hiện đã hết hàng."],
        ["Delivery is free.", "Viết lại với free of charge", "Delivery is free of charge.", "Giao hàng miễn phí."],
        ["They will give you your money back.", "Viết lại với give you a refund", "They will give you a refund.", "Họ sẽ hoàn tiền cho bạn."],
        ["I want to buy twenty desks.", "Viết lại lịch sự với would like to place an order for", "I would like to place an order for twenty desks.", "Tôi muốn đặt mua hai mươi cái bàn."]
      ],
      "extra": ["was", "were", "is", "in", "of"],
      "reading": {
        "title": "Problem with order number 4521",
        "kind": "email",
        "text": [
          "Dear Customer Service Team,",
          "I am writing about my order number 4521, which I placed on your website on March 3. I ordered twelve office chairs and two meeting tables for our new office.",
          "The shipment arrived yesterday, two days later than promised. When we opened the boxes, we found that three of the chairs were damaged. In addition, only one meeting table was delivered.",
          "We need all the furniture before our new staff start work next Monday. Could you please send three replacement chairs and the missing table as soon as possible? If this is not possible, I would like a refund for the damaged and missing items.",
          "I have attached photos of the damaged chairs. I look forward to your reply.",
          "Best regards, David Kim, Office Manager, Bright Star Travel"
        ],
        "questions": [
          [
            "Why did Mr Kim write the email?",
            "To report a problem with an order",
            [
              "To place a new order",
              "To cancel his order",
              "To ask about delivery prices"
            ],
            "Cả email nói về đơn hàng bị giao muộn, có ghế hỏng và thiếu bàn."
          ],
          [
            "How many chairs were damaged?",
            "Three",
            [
              "Two",
              "Twelve",
              "One"
            ],
            "Trong bài: three of the chairs were damaged."
          ],
          [
            "What is true about the delivery?",
            "It arrived late.",
            [
              "It arrived before March 3.",
              "It included two tables.",
              "It was sent to the wrong office."
            ],
            "Trong bài: The shipment arrived yesterday, two days later than promised."
          ],
          [
            "What does Mr Kim want if replacements cannot be sent?",
            "His money back for some items",
            [
              "A discount on his next order",
              "A new delivery date",
              "Free delivery"
            ],
            "Trong bài: I would like a refund for the damaged and missing items."
          ],
          [
            "What did Mr Kim send with the email?",
            "Photos of the damaged chairs",
            [
              "A copy of the invoice",
              "A list of new staff",
              "The office address"
            ],
            "Trong bài: I have attached photos of the damaged chairs."
          ]
        ]
      }
    },
    {
      "id": "trip", "group": 1, "grade": 12, "icon": "✈️", "tag": "Part 1–4",
      "title": "Công tác và du lịch", "en": "Business travel",
      "desc": "Đặt chỗ, sân bay, khách sạn, chi phí đi lại.",
      "words": [
        ["itinerary", "lịch trình chuyến đi", "🗺️"],
        ["boarding pass", "thẻ lên máy bay", "🎫"],
        ["departure", "sự khởi hành", "🛫"],
        ["arrival", "sự đến nơi", "🛬"],
        ["luggage", "hành lý", "🧳"],
        ["reservation", "sự đặt chỗ", "📞"],
        ["accommodation", "chỗ ở", "🏨"],
        ["delay", "sự chậm trễ; hoãn", "⏳"],
        ["aisle seat", "ghế cạnh lối đi", "💺"],
        ["check in", "làm thủ tục (nhận phòng, lên máy bay)", ""],
        ["expense", "chi phí", "💳"],
        ["destination", "điểm đến", "📍"]
      ],
      "grammar": [
        ["Luggage là danh từ không đếm được", "luggage, baggage, information, equipment, advice không có dạng số nhiều. Dùng much, some hoặc a piece of.", "How much luggage do you have? | I have two pieces of luggage."],
        ["Cụm hay gặp khi đi công tác", "make a reservation, check in, check out, book a flight, be delayed, business trip, travel expenses.", "I made a reservation for two nights. | Our flight was delayed by two hours."]
      ],
      "quiz": [
        ["Our flight was ___ because of bad weather.", "delayed", ["delay", "delaying", "delays"], "Bị động: was + V3."],
        ["I'd like to make a ___ for a double room.", "reservation", ["reserve", "reserved", "reserving"], "Sau a cần danh từ: reservation."],
        ["Passengers must show their boarding ___ at the gate.", "passes", ["passing", "passed", "passer"], "Nhiều hành khách, nhiều thẻ: danh từ số nhiều passes."],
        ["How much ___ are you taking with you?", "luggage", ["luggages", "baggages", "suitcases"], "How much đi với danh từ không đếm được; luggage không thêm s."],
        ["The hotel is located ___ the city centre.", "in", ["at", "on", "to"], "in the city centre: ở trung tâm thành phố."],
        ["Please keep your receipts so we can pay your travel ___.", "expenses", ["expensive", "expend", "expensively"], "Cụm danh từ travel expenses: chi phí đi lại."],
        ["The train to Da Nang ___ at seven every morning.", "departs", ["departure", "departing", "depart"], "Lịch trình cố định dùng hiện tại đơn; chủ ngữ số ít: departs."],
        ["We will ___ in at the hotel after lunch.", "check", ["checking", "checked", "checks"], "Sau will là động từ nguyên mẫu: check in."]
      ],
      "sentences": [
        ["I'd like an aisle seat, please.", "Làm ơn cho tôi ghế cạnh lối đi."],
        ["The flight to Singapore has been delayed.", "Chuyến bay đi Singapore đã bị hoãn."],
        ["Where can I pick up my luggage?", "Tôi có thể lấy hành lý ở đâu?"],
        ["Please send me the itinerary for the business trip.", "Vui lòng gửi cho tôi lịch trình chuyến công tác."],
        ["The company will pay for your accommodation.", "Công ty sẽ trả tiền chỗ ở cho bạn."],
        ["We arrived at our destination late at night.", "Chúng tôi đến nơi vào lúc đêm muộn."]
      ],
      "transform": [
        ["The plane left two hours late.", "Viết lại với was delayed", "The plane was delayed by two hours. | The plane was delayed for two hours. | The plane was delayed two hours.", "Máy bay bị hoãn hai tiếng."],
        ["I booked a room for three nights.", "Viết lại với made a reservation", "I made a reservation for three nights. | I made a room reservation for three nights.", "Tôi đã đặt phòng ba đêm."],
        ["What time does the train leave?", "Viết lại với departure time", "What is the departure time of the train? | What is the train's departure time?", "Giờ khởi hành của tàu là mấy giờ?"],
        ["The company pays for our hotel.", "Chuyển sang câu bị động", "Our hotel is paid for by the company.", "Khách sạn của chúng tôi do công ty chi trả."],
        ["I have two bags.", "Viết lại với pieces of luggage", "I have two pieces of luggage.", "Tôi có hai kiện hành lý."]
      ],
      "extra": ["is", "was", "by", "of", "for"],
      "reading": {
        "title": "Asia Marketing Conference: travel information",
        "kind": "notice",
        "text": [
          "The following employees will attend the Asia Marketing Conference in Singapore from October 8 to October 10: Anna Lee, Tom Hill and Minh Tran.",
          "Flight: The group will fly with Sky Air on October 7. The flight departs from Tan Son Nhat Airport at 9.15 a.m. Please check in at least two hours before departure.",
          "Accommodation: Rooms have been reserved at the Harbour View Hotel, which is a ten-minute walk from the conference centre. Breakfast is included in the room price.",
          "Expenses: The company will pay for flights, hotel rooms and the conference fee. Other meals and taxi fares will be paid back after the trip. Please keep all your receipts and give them to the Finance department by October 20."
        ],
        "questions": [
          [
            "When will the employees fly to Singapore?",
            "On October 7",
            [
              "On October 8",
              "On October 10",
              "On October 20"
            ],
            "Trong bài: The group will fly with Sky Air on October 7."
          ],
          [
            "At what time should the employees check in at the latest?",
            "7.15 a.m.",
            [
              "9.15 a.m.",
              "8.15 a.m.",
              "10.15 a.m."
            ],
            "Máy bay cất cánh lúc 9.15 và phải làm thủ tục trước ít nhất hai tiếng, nên muộn nhất là 7.15."
          ],
          [
            "What is mentioned about the hotel?",
            "It is close to the conference centre.",
            [
              "It is next to the airport.",
              "It does not serve breakfast.",
              "The employees booked it themselves."
            ],
            "Trong bài: a ten-minute walk from the conference centre."
          ],
          [
            "Which cost will be paid back after the trip?",
            "Taxi fares",
            [
              "Hotel rooms",
              "The conference fee",
              "Breakfast"
            ],
            "Trong bài: Other meals and taxi fares will be paid back after the trip."
          ],
          [
            "What should employees do with their receipts?",
            "Give them to the Finance department",
            [
              "Send them to the hotel",
              "Show them at the airport",
              "Keep them until next year"
            ],
            "Trong bài: give them to the Finance department by October 20."
          ]
        ]
      }
    },
    {
      "id": "wordform", "group": 1, "grade": 12, "icon": "🔤", "tag": "Part 5–6",
      "title": "Từ loại (word form)", "en": "Word forms",
      "desc": "Nhận biết danh từ, động từ, tính từ, trạng từ qua đuôi và vị trí.",
      "words": [
        ["decide", "quyết định (động từ)", ""],
        ["decision", "sự quyết định", ""],
        ["success", "sự thành công", "🏆"],
        ["successful", "thành công (tính từ)", ""],
        ["successfully", "một cách thành công", ""],
        ["product", "sản phẩm", "📦"],
        ["production", "sự sản xuất", "🏭"],
        ["efficient", "hiệu quả (tính từ)", ""],
        ["efficiently", "một cách hiệu quả", ""],
        ["employee", "nhân viên", "🧑‍💼"],
        ["employer", "chủ, người thuê lao động", ""],
        ["employment", "việc làm", ""]
      ],
      "formula": [
        ["Danh từ", "-tion, -sion, -ment, -ness, -ity, -ance, -er, -or, -ee: decision, payment, employee"],
        ["Động từ", "-ize, -ify, -en: organize, simplify, widen"],
        ["Tính từ", "-ful, -less, -ive, -able, -al, -ous, -ent: useful, active, available, efficient"],
        ["Trạng từ", "thường là tính từ + -ly: quickly, efficiently"],
        ["Vị trí", "a / the / tính từ + danh từ · be / become / seem + tính từ · tính từ + danh từ · động từ + trạng từ"]
      ],
      "grammar": [
        ["Nhìn vị trí để đoán từ loại", "Sau a, an, the, my, this hoặc sau tính từ là danh từ. Trước danh từ là tính từ. Sau be, become, seem là tính từ. Bổ nghĩa cho động từ là trạng từ.", "The decision was difficult. | She is a successful manager. | He works efficiently."],
        ["Danh từ chỉ người", "-er, -or thường chỉ người làm việc gì (employer, supervisor). -ee chỉ người nhận hoặc được tác động (employee, trainee).", "The employer pays the employees every month."]
      ],
      "quiz": [
        ["The manager made an important ___ yesterday.", "decision", ["decide", "decisive", "decisively"], "Sau tính từ important cần danh từ."],
        ["The new product was launched ___.", "successfully", ["success", "successful", "succeed"], "Bổ nghĩa cho động từ launched cần trạng từ."],
        ["She is one of the most ___ salespeople in the company.", "successful", ["success", "successfully", "succeed"], "Trước danh từ salespeople cần tính từ."],
        ["The factory increased its ___ by twenty percent.", "production", ["produced", "productive", "productively"], "Sau its cần danh từ."],
        ["Our team needs to work more ___.", "efficiently", ["efficient", "efficiency", "efficiencies"], "Bổ nghĩa cho động từ work cần trạng từ."],
        ["This new machine is very ___.", "efficient", ["efficiently", "efficiency", "efficiencies"], "Sau be và very cần tính từ."],
        ["The company has more than five hundred ___.", "employees", ["employ", "employment", "employed"], "Sau số lượng cần danh từ số nhiều chỉ người."],
        ["Please ___ which supplier we should use.", "decide", ["decision", "decisive", "decisively"], "Sau Please cần động từ nguyên mẫu."]
      ],
      "sentences": [
        ["We need to make a decision today.", "Hôm nay chúng ta cần đưa ra quyết định."],
        ["The meeting ended successfully.", "Cuộc họp đã kết thúc thành công."],
        ["Our new product is very popular.", "Sản phẩm mới của chúng tôi rất được ưa chuộng."],
        ["The employees are happy with their new employer.", "Các nhân viên hài lòng với chủ mới."],
        ["This software helps us work more efficiently.", "Phần mềm này giúp chúng tôi làm việc hiệu quả hơn."],
        ["Production will start next month.", "Việc sản xuất sẽ bắt đầu vào tháng sau."]
      ],
      "transform": [
        ["He decided quickly.", "Viết lại với made a quick decision", "He made a quick decision.", "Anh ấy đã quyết định nhanh chóng."],
        ["The project was a success.", "Viết lại với successful", "The project was successful.", "Dự án đã thành công."],
        ["She works in an efficient way.", "Viết lại với efficiently", "She works efficiently.", "Cô ấy làm việc hiệu quả."],
        ["They employ fifty people.", "Viết lại với employees", "They have fifty employees.", "Họ có năm mươi nhân viên."],
        ["The meeting ended with success.", "Viết lại với successfully", "The meeting ended successfully.", "Cuộc họp kết thúc thành công."]
      ],
      "extra": ["success", "decide", "efficient", "employ", "a"],
      "reading": {
        "title": "New energy-saving policy", "kind": "notice",
        "text": [
          "To all employees:",
          "Starting next month, the company will introduce a new energy-saving policy. Our electricity costs increased significantly last year, and we believe that small changes can make a big difference.",
          "All employees are asked to turn off their computers and lights before leaving the office. Air conditioners should be set no lower than 25 degrees. In addition, the heating and cooling systems will be switched off automatically at 7 p.m.",
          "Department managers will be responsible for checking that these rules are followed. The department that reduces its energy use most successfully will receive a reward at the end of the year.",
          "Thank you for your cooperation. Facilities Department"
        ],
        "questions": [
          ["Why is the company introducing the policy?", "Electricity costs have risen.", ["Some computers were stolen.", "The office is too cold.", "A new building has opened."], "Trong bài: Our electricity costs increased significantly last year."],
          ["What are employees asked to do?", "Turn off computers before leaving", ["Work from home", "Buy new air conditioners", "Arrive before 7 p.m."], "Trong bài: turn off their computers and lights before leaving the office."],
          ["The word \"significantly\" in the notice is closest in meaning to", "considerably", ["slightly", "suddenly", "secretly"], "significantly: đáng kể, gần nghĩa với considerably."],
          ["Who will check that the rules are followed?", "Department managers", ["The Facilities Department", "All employees", "The director"], "Trong bài: Department managers will be responsible for checking."],
          ["What will the most successful department receive?", "A reward", ["New computers", "A day off", "A new office"], "Trong bài: will receive a reward at the end of the year."]
        ]
      }
    },
    {
      "id": "edu", "group": 2, "grade": 12, "icon": "🎓", "tag": "Speaking, Writing Task 2",
      "title": "Giáo dục", "en": "Education",
      "desc": "Học phí, học bổng, học nghề, nêu quan điểm về giáo dục.",
      "words": [
        ["curriculum", "chương trình học", "📚"],
        ["tuition fees", "học phí", "💸"],
        ["compulsory", "bắt buộc", ""],
        ["academic", "thuộc về học thuật", ""],
        ["vocational", "thuộc về dạy nghề", "🛠️"],
        ["graduate", "tốt nghiệp", "🎓"],
        ["scholarship", "học bổng", "🏅"],
        ["literacy", "khả năng đọc viết", "📖"],
        ["distance learning", "học từ xa", "💻"],
        ["assessment", "sự đánh giá", "📝"],
        ["critical thinking", "tư duy phản biện", "🧠"],
        ["drop out", "bỏ học", "🚪"]
      ],
      "grammar": [
        ["Collocation về giáo dục", "IELTS đánh giá cao việc dùng đúng cụm từ: acquire knowledge, gain qualifications, pursue higher education, compulsory education, tuition fees, broaden your horizons.", "Many students pursue higher education abroad. | Travelling can broaden your horizons."],
        ["Nêu quan điểm trong Writing Task 2", "Dùng mẫu câu rõ ràng: In my opinion, …; I strongly believe that …; It is often argued that …; On the other hand, …", "In my opinion, education should be free. | It is often argued that exams cause stress."]
      ],
      "quiz": [
        ["Many students ___ higher education in other countries.", "pursue", ["chase", "hunt", "catch"], "Collocation: pursue higher education (theo học bậc cao hơn)."],
        ["Primary education is ___ in Viet Nam, so all children must go to school.", "compulsory", ["optional", "voluntary", "academic"], "compulsory nghĩa là bắt buộc, hợp với vế so all children must go to school."],
        ["Studying abroad can ___ your horizons.", "broaden", ["lengthen", "heighten", "deepen"], "Collocation: broaden your horizons (mở rộng tầm nhìn)."],
        ["She won a full ___ to study at a university in Australia.", "scholarship", ["scholar", "scholarly", "schooling"], "Học bổng là scholarship; scholar là học giả."],
        ["The number of students who ___ out of school has fallen.", "drop", ["fall", "leave", "quit"], "Cụm động từ drop out of school: bỏ học."],
        ["___ skills such as critical thinking are important for university students.", "Academic", ["Academy", "Academically", "Academics"], "Trước danh từ skills cần tính từ: academic."],
        ["Rising tuition ___ make it difficult for poor students to go to university.", "fees", ["fares", "tickets", "bills"], "Collocation: tuition fees (học phí)."],
        ["___, online learning is more flexible than classroom learning.", "In my opinion", ["On my opinion", "In my view of", "To my opinion"], "Cụm đúng là In my opinion."]
      ],
      "sentences": [
        ["Education should be free for everyone.", "Giáo dục nên miễn phí cho tất cả mọi người."],
        ["Vocational training helps young people find jobs.", "Đào tạo nghề giúp người trẻ tìm được việc làm."],
        ["Distance learning has become more popular in recent years.", "Học từ xa ngày càng phổ biến trong những năm gần đây."],
        ["Many students cannot afford high tuition fees.", "Nhiều sinh viên không đủ khả năng chi trả học phí cao."],
        ["Schools should teach critical thinking skills.", "Nhà trường nên dạy kỹ năng tư duy phản biện."],
        ["Some people believe that exams are not the best form of assessment.", "Một số người cho rằng thi cử không phải là hình thức đánh giá tốt nhất."]
      ],
      "transform": [
        ["Children have to go to school until the age of fifteen.", "Viết lại với compulsory", "School is compulsory until the age of fifteen. | Education is compulsory until the age of fifteen.", "Việc đi học là bắt buộc đến năm mười lăm tuổi."],
        ["Many students leave school early.", "Viết lại với drop out of", "Many students drop out of school. | Many students drop out of school early.", "Nhiều học sinh bỏ học sớm."],
        ["I think that university should be free.", "Viết lại với In my opinion", "In my opinion, university should be free.", "Theo tôi, đại học nên miễn phí."],
        ["Studying abroad helps students learn about the world.", "Viết lại với broaden their horizons", "Studying abroad helps students broaden their horizons. | Studying abroad helps students to broaden their horizons.", "Du học giúp sinh viên mở rộng tầm nhìn."],
        ["University students have to pay a lot of money to study.", "Viết lại với tuition fees are high", "University tuition fees are high. | Tuition fees at university are high.", "Học phí đại học rất cao."]
      ],
      "extra": ["is", "are", "of", "in", "to"],
      "reading": {
        "title": "The value of vocational education", "kind": "article",
        "text": [
          "In many countries, young people are encouraged to go to university after secondary school. A university degree is often seen as the best way to find a well-paid job. As a result, vocational courses, which teach practical skills for specific jobs, are sometimes regarded as a second choice.",
          "However, this view is changing. Many economies now face a shortage of skilled workers such as electricians, plumbers and mechanics. In some countries, these workers can earn as much as, or even more than, many university graduates.",
          "Vocational education also has other advantages. Courses are usually shorter and cheaper than university degrees, so students can start working earlier and avoid large debts. Many programmes include work placements, which allow students to gain real experience with employers.",
          "Critics argue that some vocational courses train students for jobs that may disappear because of automation. For this reason, experts recommend that vocational programmes should also teach general skills such as communication and problem-solving."
        ],
        "questions": [
          ["Vocational courses are sometimes seen as less attractive than university.", "True", ["False", "Not Given"], "Trong bài: are sometimes regarded as a second choice."],
          ["Many economies do not have enough skilled workers.", "True", ["False", "Not Given"], "Trong bài: Many economies now face a shortage of skilled workers."],
          ["Vocational courses usually take longer than university degrees.", "False", ["True", "Not Given"], "Bài nói ngược lại: Courses are usually shorter and cheaper than university degrees."],
          ["Most vocational students prefer practical work to studying.", "Not Given", ["True", "False"], "Bài không nói học viên học nghề thích gì hơn."],
          ["What is an advantage of work placements?", "Students gain real work experience.", ["Students avoid all exams.", "Students earn a high salary.", "Students can study abroad."], "Trong bài: allow students to gain real experience with employers."],
          ["What do experts recommend?", "Teaching general skills as well as job skills", ["Closing vocational schools", "Making courses longer", "Training more university lecturers"], "Trong bài: should also teach general skills such as communication and problem-solving."]
        ]
      }
    },
    {
      "id": "env", "group": 2, "grade": 12, "icon": "🌍", "tag": "Writing Task 2",
      "title": "Môi trường", "en": "The environment",
      "desc": "Ô nhiễm, biến đổi khí hậu, năng lượng; nêu nguyên nhân và kết quả.",
      "words": [
        ["pollution", "sự ô nhiễm", "🏭"],
        ["climate change", "biến đổi khí hậu", "🌡️"],
        ["renewable energy", "năng lượng tái tạo", "☀️"],
        ["fossil fuels", "nhiên liệu hóa thạch", "⛽"],
        ["emissions", "khí thải", "💨"],
        ["deforestation", "nạn phá rừng", "🪓"],
        ["endangered", "có nguy cơ tuyệt chủng", "🐼"],
        ["recycle", "tái chế", "♻️"],
        ["sustainable", "bền vững", "🌱"],
        ["carbon footprint", "lượng khí thải carbon cá nhân", "👣"],
        ["biodiversity", "đa dạng sinh học", "🦋"],
        ["waste", "rác thải; lãng phí", "🗑️"]
      ],
      "grammar": [
        ["Collocation về môi trường", "reduce emissions, protect endangered species, raise awareness, take measures, switch to renewable energy, have a negative impact on.", "Governments should take measures to reduce emissions. | Plastic has a negative impact on marine life."],
        ["Nêu nguyên nhân và kết quả", "Nguyên nhân: due to, because of, be caused by. Kết quả: lead to, result in, as a result.", "Deforestation leads to the loss of biodiversity. | Air pollution is caused by traffic and factories."]
      ],
      "quiz": [
        ["Governments should take ___ to reduce air pollution.", "measures", ["measurements", "measuring", "meters"], "Collocation: take measures (áp dụng biện pháp)."],
        ["Burning fossil fuels ___ in higher carbon emissions.", "results", ["leads", "causes", "makes"], "result in: dẫn đến. lead cần đi với to, cause không đi với in."],
        ["Many animals are ___ because their habitats are being destroyed.", "endangered", ["endangering", "danger", "dangerously"], "Sau be cần tính từ: endangered (có nguy cơ tuyệt chủng)."],
        ["We should switch ___ renewable energy such as solar and wind power.", "to", ["on", "into", "for"], "Cụm switch to: chuyển sang."],
        ["Traffic jams are one of the main causes ___ air pollution.", "of", ["for", "to", "in"], "cause of: nguyên nhân của."],
        ["Deforestation has a negative ___ on biodiversity.", "impact", ["impacted", "affect", "affecting"], "Collocation: have a negative impact on. affect là động từ."],
        ["People need to ___ awareness of environmental problems.", "raise", ["rise", "arise", "grow"], "raise awareness: nâng cao nhận thức. rise là nội động từ, không có tân ngữ."],
        ["We must find more ___ ways to produce food.", "sustainable", ["sustain", "sustainably", "sustainability"], "Trước danh từ ways cần tính từ."]
      ],
      "sentences": [
        ["Climate change is one of the biggest problems today.", "Biến đổi khí hậu là một trong những vấn đề lớn nhất hiện nay."],
        ["We should recycle more and waste less.", "Chúng ta nên tái chế nhiều hơn và lãng phí ít hơn."],
        ["Many countries are investing in renewable energy.", "Nhiều quốc gia đang đầu tư vào năng lượng tái tạo."],
        ["Deforestation leads to the loss of wildlife habitats.", "Nạn phá rừng dẫn đến việc mất môi trường sống của động vật hoang dã."],
        ["Cycling to work can reduce your carbon footprint.", "Đạp xe đi làm có thể giảm lượng khí thải carbon của bạn."],
        ["Air pollution is mainly caused by traffic and factories.", "Ô nhiễm không khí chủ yếu do giao thông và nhà máy gây ra."]
      ],
      "transform": [
        ["Factories cause water pollution.", "Chuyển sang câu bị động", "Water pollution is caused by factories.", "Ô nhiễm nguồn nước do các nhà máy gây ra."],
        ["Cutting down forests leads to floods.", "Viết lại với results in", "Cutting down forests results in floods. | Deforestation results in floods.", "Chặt phá rừng dẫn đến lũ lụt."],
        ["Many people don't know about the problem.", "Viết lại bắt đầu bằng We need to raise awareness", "We need to raise awareness of the problem. | We need to raise awareness about the problem.", "Chúng ta cần nâng cao nhận thức về vấn đề này."],
        ["Plastic harms sea animals.", "Viết lại với has a negative impact on", "Plastic has a negative impact on sea animals.", "Nhựa có tác động tiêu cực đến sinh vật biển."],
        ["The air is dirty because there are too many cars.", "Viết lại với because of", "The air is dirty because of too many cars. | The air is dirty because of the large number of cars.", "Không khí bẩn vì có quá nhiều ô tô."]
      ],
      "extra": ["is", "by", "to", "of", "for"],
      "reading": {
        "title": "Why cities need trees",
        "kind": "article",
        "text": [
          "Trees are often seen as simple decoration in cities, but research shows that they provide many practical benefits. A single large tree can absorb around 20 kilograms of carbon dioxide each year, and trees also trap dust and other pollutants from the air.",
          "Urban trees can also help to cool cities. Streets without trees can be several degrees hotter than streets with plenty of shade, a problem known as the urban heat island effect. As summers become hotter because of climate change, this cooling effect is becoming more important.",
          "In addition, green spaces appear to benefit people's mental health. Several studies have found that people who live near parks report lower levels of stress. However, scientists are still not sure whether the trees themselves or other factors, such as exercise in parks, are responsible for this improvement.",
          "Despite these benefits, many cities are losing trees because of new roads and buildings. Some local governments have therefore set targets to increase tree cover, for example by planting a tree for every baby born in the city."
        ],
        "questions": [
          [
            "Trees can remove some pollutants from the air.",
            "True",
            [
              "False",
              "Not Given"
            ],
            "Trong bài: trees also trap dust and other pollutants from the air."
          ],
          [
            "Streets with trees are usually hotter than streets without trees.",
            "False",
            [
              "True",
              "Not Given"
            ],
            "Bài nói ngược lại: streets without trees can be several degrees hotter."
          ],
          [
            "Scientists have proved that trees directly reduce stress.",
            "False",
            [
              "True",
              "Not Given"
            ],
            "Bài nói scientists are still not sure, tức là chưa chứng minh được."
          ],
          [
            "Planting trees is cheaper than building new roads.",
            "Not Given",
            [
              "True",
              "False"
            ],
            "Bài không so sánh chi phí trồng cây và làm đường."
          ],
          [
            "What is the urban heat island effect?",
            "Higher temperatures in areas without trees",
            [
              "Trees absorbing carbon dioxide",
              "The loss of trees because of new roads",
              "Stress caused by hot weather"
            ],
            "Trong bài: streets without trees can be several degrees hotter … known as the urban heat island effect."
          ],
          [
            "Why are many cities losing trees?",
            "Because of new roads and buildings",
            [
              "Because of climate change",
              "Because trees are expensive to plant",
              "Because of air pollution"
            ],
            "Trong bài: many cities are losing trees because of new roads and buildings."
          ]
        ]
      }
    },
    {
      "id": "tech", "group": 2, "grade": 12, "icon": "🤖", "tag": "Speaking, Writing Task 2",
      "title": "Công nghệ", "en": "Technology",
      "desc": "Thiết bị, mạng xã hội, trí tuệ nhân tạo; nêu ưu và nhược điểm.",
      "words": [
        ["device", "thiết bị", "📱"],
        ["artificial intelligence", "trí tuệ nhân tạo", "🤖"],
        ["innovation", "sự đổi mới", "💡"],
        ["automation", "sự tự động hóa", "⚙️"],
        ["social media", "mạng xã hội", "💬"],
        ["screen time", "thời gian dùng màn hình", "⏲️"],
        ["cyberbullying", "bắt nạt trên mạng", ""],
        ["privacy", "quyền riêng tư", "🔒"],
        ["digital", "thuộc về kỹ thuật số", ""],
        ["addicted", "nghiện", ""],
        ["access", "sự truy cập, tiếp cận", "🔑"],
        ["breakthrough", "bước đột phá", "🚀"]
      ],
      "grammar": [
        ["Ưu và nhược điểm", "Mẫu câu hay dùng: One advantage of … is that …; A major drawback of … is …; … has both benefits and drawbacks.", "One advantage of smartphones is that they keep us connected. | A major drawback of social media is cyberbullying."],
        ["Collocation về công nghệ", "have access to, be addicted to, keep up with technology, rely on, a technological breakthrough, invade privacy.", "Many people rely on their phones. | Children can easily become addicted to games."]
      ],
      "quiz": [
        ["Many teenagers are addicted ___ social media.", "to", ["with", "on", "in"], "be addicted to: nghiện."],
        ["People in rural areas often do not have ___ to the internet.", "access", ["accessible", "accessing", "excess"], "Collocation: have access to."],
        ["Artificial ___ is changing the way we work.", "intelligence", ["intelligent", "intelligently", "intellect"], "Cụm danh từ cố định: artificial intelligence."],
        ["One ___ of online shopping is that it saves time.", "advantage", ["advantageous", "advance", "advent"], "Sau One cần danh từ: advantage (ưu điểm)."],
        ["It is hard to keep up ___ the latest technology.", "with", ["on", "to", "for"], "keep up with: theo kịp."],
        ["Some apps collect personal data and invade users' ___.", "privacy", ["private", "privately", "privatize"], "Sau users' cần danh từ: privacy."],
        ["The invention of the internet was a major technological ___.", "breakthrough", ["breakdown", "outbreak", "breakup"], "breakthrough là bước đột phá; breakdown là sự hỏng hóc."],
        ["Children today spend too much time ___ screens.", "in front of", ["in front", "opposite to", "before of"], "Cụm đúng: in front of."]
      ],
      "sentences": [
        ["Technology has changed the way we communicate.", "Công nghệ đã thay đổi cách chúng ta giao tiếp."],
        ["Many jobs may disappear because of automation.", "Nhiều công việc có thể biến mất vì tự động hóa."],
        ["Parents should limit their children's screen time.", "Cha mẹ nên hạn chế thời gian dùng màn hình của con."],
        ["Social media can have a negative effect on mental health.", "Mạng xã hội có thể ảnh hưởng tiêu cực đến sức khỏe tinh thần."],
        ["Artificial intelligence can help doctors find diseases earlier.", "Trí tuệ nhân tạo có thể giúp bác sĩ phát hiện bệnh sớm hơn."],
        ["We should protect our privacy online.", "Chúng ta nên bảo vệ quyền riêng tư của mình trên mạng."]
      ],
      "transform": [
        ["Many people cannot live without their phones.", "Viết lại với rely on", "Many people rely on their phones.", "Nhiều người phụ thuộc vào điện thoại."],
        ["Smartphones are useful because they keep us connected.", "Viết lại bắt đầu bằng One advantage of smartphones", "One advantage of smartphones is that they keep us connected.", "Một ưu điểm của điện thoại thông minh là giúp chúng ta kết nối."],
        ["Many villages cannot use the internet.", "Viết lại với do not have access to", "Many villages do not have access to the internet.", "Nhiều làng không được tiếp cận internet."],
        ["He plays computer games all the time and cannot stop.", "Viết lại với is addicted to", "He is addicted to computer games.", "Cậu ấy nghiện trò chơi điện tử."],
        ["Robots will do many jobs in the future.", "Chuyển sang câu bị động", "Many jobs will be done by robots in the future. | In the future, many jobs will be done by robots.", "Trong tương lai, nhiều công việc sẽ do robot đảm nhận."]
      ],
      "extra": ["is", "to", "on", "of", "by"],
      "reading": {
        "title": "Teenagers and screen time",
        "kind": "article",
        "text": [
          "Most teenagers today spend several hours a day looking at screens. In a recent survey of 2,000 students in the UK, the average student spent about seven hours a day on phones, computers and televisions, not including time spent on schoolwork.",
          "Many parents worry that this is harmful. Too much screen time has been linked to poor sleep, especially when teenagers use their phones late at night. The blue light from screens can make it harder for the brain to prepare for sleep.",
          "However, some researchers argue that the type of activity matters more than the number of hours. Chatting with friends, learning a new skill or making videos may have very different effects from scrolling through social media for hours.",
          "Experts therefore suggest simple rules rather than strict limits. For example, families can agree to keep phones out of bedrooms at night and to turn off screens during meals. Such rules seem to work best when parents follow them too."
        ],
        "questions": [
          [
            "The survey included time spent on homework.",
            "False",
            [
              "True",
              "Not Given"
            ],
            "Trong bài: not including time spent on schoolwork."
          ],
          [
            "Using a phone late at night can affect sleep.",
            "True",
            [
              "False",
              "Not Given"
            ],
            "Trong bài: screen time has been linked to poor sleep, especially when teenagers use their phones late at night."
          ],
          [
            "Teenagers in the UK spend more time on screens than teenagers in other countries.",
            "Not Given",
            [
              "True",
              "False"
            ],
            "Bài chỉ nói về khảo sát ở Anh, không so sánh với nước khác."
          ],
          [
            "According to some researchers, what matters more than the number of hours?",
            "The kind of activity",
            [
              "The type of screen",
              "The time of day",
              "The age of the user"
            ],
            "Trong bài: the type of activity matters more than the number of hours."
          ],
          [
            "What do experts recommend?",
            "Simple family rules about screens",
            [
              "Banning phones for teenagers",
              "A strict limit of one hour a day",
              "Buying screens without blue light"
            ],
            "Trong bài: Experts therefore suggest simple rules rather than strict limits."
          ]
        ]
      }
    },
    {
      "id": "health", "group": 2, "grade": 12, "icon": "🥗", "tag": "Speaking, Writing Task 2",
      "title": "Sức khỏe", "en": "Health",
      "desc": "Ăn uống, luyện tập, sức khỏe tinh thần; đưa ra giải pháp.",
      "words": [
        ["balanced diet", "chế độ ăn cân bằng", "🥗"],
        ["obesity", "bệnh béo phì", ""],
        ["sedentary", "ít vận động", "🛋️"],
        ["nutrition", "dinh dưỡng", "🍎"],
        ["mental health", "sức khỏe tinh thần", "🧘"],
        ["stress", "sự căng thẳng", "😣"],
        ["life expectancy", "tuổi thọ trung bình", ""],
        ["junk food", "đồ ăn vặt không lành mạnh", "🍟"],
        ["workout", "buổi tập thể dục", "🏋️"],
        ["prevent", "ngăn ngừa", "🛡️"],
        ["treatment", "sự điều trị", "💊"],
        ["well-being", "sự khỏe mạnh và hạnh phúc", ""]
      ],
      "grammar": [
        ["Collocation về sức khỏe", "lead a healthy lifestyle, follow a balanced diet, do regular exercise, reduce stress, prevent diseases, be at risk of.", "People who lead a sedentary lifestyle are at risk of obesity. | Regular exercise helps reduce stress."],
        ["Đưa ra giải pháp", "Mẫu câu: One solution is to …; Governments should …; It would be better if …", "One solution is to tax junk food. | Schools should offer more sports activities."]
      ],
      "quiz": [
        ["Doctors advise people to follow a ___ diet.", "balanced", ["balance", "balancing", "balances"], "Trước danh từ diet cần tính từ: balanced."],
        ["People who sit all day are at ___ of heart disease.", "risk", ["danger", "chance", "threat"], "Cụm cố định: be at risk of (có nguy cơ)."],
        ["Regular exercise can help ___ many diseases.", "prevent", ["prevention", "preventive", "prevented"], "help + động từ nguyên mẫu."],
        ["Eating too much junk food can lead ___ obesity.", "to", ["in", "on", "for"], "lead to: dẫn đến."],
        ["A ___ lifestyle means you do not move very much.", "sedentary", ["sedentarily", "sediment", "sedate"], "sedentary lifestyle: lối sống ít vận động."],
        ["Life ___ has increased thanks to better healthcare.", "expectancy", ["expectation", "expected", "expecting"], "Collocation: life expectancy (tuổi thọ trung bình)."],
        ["Meditation is a good way to ___ stress.", "reduce", ["reduction", "rise", "increase"], "reduce stress: giảm căng thẳng."],
        ["Mental health is just as important ___ physical health.", "as", ["than", "like", "to"], "So sánh bằng: as important as."]
      ],
      "sentences": [
        ["A balanced diet includes plenty of fruit and vegetables.", "Chế độ ăn cân bằng gồm nhiều rau và trái cây."],
        ["Obesity is becoming a serious problem among children.", "Béo phì đang trở thành vấn đề nghiêm trọng ở trẻ em."],
        ["Too much stress can harm your mental health.", "Căng thẳng quá mức có thể gây hại cho sức khỏe tinh thần."],
        ["Governments should put a tax on junk food.", "Chính phủ nên đánh thuế đồ ăn vặt."],
        ["Doing a short workout every day keeps you fit.", "Tập thể dục ngắn mỗi ngày giúp bạn khỏe mạnh."],
        ["Prevention is better than cure.", "Phòng bệnh hơn chữa bệnh."]
      ],
      "transform": [
        ["People who don't exercise may get heart disease.", "Viết lại với are at risk of", "People who don't exercise are at risk of heart disease.", "Người không tập thể dục có nguy cơ mắc bệnh tim."],
        ["Eating junk food causes obesity.", "Viết lại với leads to", "Eating junk food leads to obesity.", "Ăn đồ ăn vặt dẫn đến béo phì."],
        ["Exercise helps you feel less stressed.", "Viết lại với reduce stress", "Exercise helps reduce stress. | Exercise helps you reduce stress. | Exercise helps to reduce stress.", "Tập thể dục giúp giảm căng thẳng."],
        ["The government could tax sugary drinks.", "Viết lại bắt đầu bằng One solution is", "One solution is to tax sugary drinks.", "Một giải pháp là đánh thuế đồ uống có đường."],
        ["Mental health and physical health are equally important.", "Viết lại với as important as", "Mental health is as important as physical health.", "Sức khỏe tinh thần quan trọng như sức khỏe thể chất."]
      ],
      "extra": ["is", "to", "of", "as", "than"],
      "reading": {
        "title": "The benefits of walking",
        "kind": "article",
        "text": [
          "Walking is one of the simplest forms of exercise, yet it offers remarkable health benefits. It requires no special equipment, and almost everyone can do it, whatever their age or fitness level.",
          "Regular walking strengthens the heart and can lower the risk of heart disease and type 2 diabetes. Health organisations often recommend at least 150 minutes of moderate activity per week, which is about 30 minutes of brisk walking on five days.",
          "The popular goal of 10,000 steps a day did not come from medical research. It first appeared in an advertising campaign for a step counter in Japan in the 1960s. More recent studies suggest that health benefits begin at a much lower number, around 7,000 steps a day for many adults.",
          "Walking also has benefits for the mind. People who walk outdoors, especially in green areas, often report feeling calmer and more creative afterwards."
        ],
        "questions": [
          [
            "Walking requires expensive equipment.",
            "False",
            [
              "True",
              "Not Given"
            ],
            "Trong bài: It requires no special equipment."
          ],
          [
            "The 10,000-step goal was first suggested by doctors.",
            "False",
            [
              "True",
              "Not Given"
            ],
            "Trong bài: It first appeared in an advertising campaign, không phải từ nghiên cứu y khoa."
          ],
          [
            "Walking in the morning is healthier than walking in the evening.",
            "Not Given",
            [
              "True",
              "False"
            ],
            "Bài không nhắc đến thời điểm đi bộ trong ngày."
          ],
          [
            "How much activity do health organisations recommend?",
            "At least 150 minutes a week",
            [
              "At least 10,000 steps a day",
              "30 minutes every day of the week",
              "7,000 steps once a week"
            ],
            "Trong bài: at least 150 minutes of moderate activity per week."
          ],
          [
            "What do recent studies suggest?",
            "Benefits can start below 10,000 steps a day",
            [
              "Walking only helps young people",
              "10,000 steps is the minimum for good health",
              "Step counters are not accurate"
            ],
            "Trong bài: health benefits begin at a much lower number, around 7,000 steps a day."
          ]
        ]
      }
    },
    {
      "id": "graph", "group": 2, "grade": 12, "icon": "📈", "tag": "Writing Task 1",
      "title": "Mô tả biểu đồ", "en": "Describing graphs",
      "desc": "Tăng, giảm, dao động, đạt đỉnh; động từ và danh từ chỉ xu hướng.",
      "words": [
        ["increase", "tăng", "📈"],
        ["decrease", "giảm", "📉"],
        ["fluctuate", "dao động", "〰️"],
        ["peak", "đạt đỉnh", "⛰️"],
        ["remain stable", "giữ ổn định", "➖"],
        ["sharply", "một cách mạnh, đột ngột", ""],
        ["gradually", "dần dần", ""],
        ["significantly", "đáng kể", ""],
        ["slightly", "nhẹ, không đáng kể", ""],
        ["proportion", "tỉ lệ", "🥧"],
        ["overall", "nhìn chung", ""],
        ["respectively", "lần lượt, tương ứng", ""]
      ],
      "formula": [
        ["Động từ + trạng từ", "The number of … + increased / decreased / rose / fell + sharply / gradually / slightly"],
        ["Tính từ + danh từ", "There was a + sharp / gradual / slight + increase / decrease / rise / fall + in …"],
        ["Số liệu", "rose from 20% to 35% · fell by 10% · reached a peak of 50% · remained stable at 30%"],
        ["Câu tổng quan", "Overall, … · It is clear that … · In general, …"]
      ],
      "grammar": [
        ["Hai cách diễn đạt xu hướng", "Có thể dùng động từ + trạng từ (increased sharply) hoặc There was a + tính từ + danh từ (There was a sharp increase). Đổi qua lại hai cách giúp bài viết không lặp từ.", "Sales increased sharply in 2020. | There was a sharp increase in sales in 2020."],
        ["Giới từ đi với số liệu", "from … to: từ … đến; by: tăng hoặc giảm một lượng; at: ở mức; of: đạt đỉnh ở mức.", "The price rose from 10 to 15 dollars. | It fell by 5 percent. | It remained stable at 20 percent."]
      ],
      "quiz": [
        ["The number of tourists rose ___ 2 million to 3 million.", "from", ["by", "at", "of"], "rise from … to …: tăng từ … đến …"],
        ["Sales fell ___ 15 percent in March.", "by", ["from", "at", "with"], "fall by: giảm một lượng."],
        ["There was a ___ increase in the price of rice.", "sharp", ["sharply", "sharpen", "sharpness"], "Trước danh từ increase cần tính từ."],
        ["The unemployment rate increased ___ between 2010 and 2015.", "gradually", ["gradual", "grade", "graduated"], "Bổ nghĩa cho động từ increased cần trạng từ."],
        ["Oil prices reached a ___ of 100 dollars in 2008.", "peak", ["pick", "peek", "pack"], "reach a peak of: đạt đỉnh ở mức."],
        ["The temperature remained ___ at 25 degrees for three days.", "stable", ["stably", "stability", "stabilize"], "remain + tính từ: remained stable."],
        ["___, the number of cars increased over the period.", "Overall", ["Overally", "Over all of", "In overall"], "Câu tổng quan thường mở đầu bằng Overall."],
        ["The figures for men and women were 40% and 60% ___.", "respectively", ["respectfully", "respective", "respecting"], "respectively: lần lượt, tương ứng."]
      ],
      "sentences": [
        ["The number of students increased sharply in 2020.", "Số lượng sinh viên tăng mạnh vào năm 2020."],
        ["Overall, car sales rose over the period.", "Nhìn chung, doanh số ô tô tăng trong suốt giai đoạn."],
        ["The price of gold fluctuated between 2015 and 2020.", "Giá vàng dao động trong khoảng từ năm 2015 đến 2020."],
        ["Unemployment fell slightly in the second year.", "Tỉ lệ thất nghiệp giảm nhẹ vào năm thứ hai."],
        ["The figure remained stable at thirty percent.", "Con số giữ ổn định ở mức ba mươi phần trăm."],
        ["Electricity use reached a peak in July.", "Lượng điện tiêu thụ đạt đỉnh vào tháng Bảy."]
      ],
      "transform": [
        ["Sales increased sharply in 2019.", "Viết lại bắt đầu bằng There was a", "There was a sharp increase in sales in 2019.", "Doanh số tăng mạnh vào năm 2019."],
        ["There was a gradual decrease in the birth rate.", "Viết lại bắt đầu bằng The birth rate", "The birth rate decreased gradually.", "Tỉ lệ sinh giảm dần."],
        ["The price went up from 10 to 15 dollars.", "Viết lại với rose", "The price rose from 10 to 15 dollars.", "Giá tăng từ 10 lên 15 đô la."],
        ["The number of visitors did not change.", "Viết lại với remained stable", "The number of visitors remained stable.", "Số lượng du khách giữ ổn định."],
        ["There was a slight fall in profits.", "Viết lại bắt đầu bằng Profits fell", "Profits fell slightly.", "Lợi nhuận giảm nhẹ."]
      ],
      "extra": ["increase", "decrease", "rise", "fall", "sharp"],
      "reading": {
        "title": "A model Task 1 answer: coffee sales", "kind": "article",
        "text": [
          "The line graph shows the number of cups of coffee sold per day in three cafés in a city centre over a six-month period, from January to June.",
          "Overall, sales at Café Blue rose steadily, while those at Café Green fell. Sales at Café Red fluctuated but ended at roughly the same level as they began.",
          "In January, Café Green sold the most coffee, at around 300 cups a day, compared with 200 cups at Café Blue and 150 cups at Café Red. Over the next five months, sales at Café Green decreased gradually to about 180 cups.",
          "In contrast, Café Blue saw a significant increase, reaching a peak of 350 cups in June. Café Red's sales rose sharply to 250 cups in March but then dropped back to about 150 cups by the end of the period."
        ],
        "questions": [
          ["Which café sold the most coffee in January?", "Café Green", ["Café Blue", "Café Red", "All three sold the same amount."], "Trong bài: In January, Café Green sold the most coffee."],
          ["What happened to sales at Café Blue?", "They increased steadily.", ["They fell slightly.", "They remained stable.", "They fluctuated."], "Trong bài: sales at Café Blue rose steadily."],
          ["About how many cups did Café Green sell per day in June?", "180", ["300", "150", "350"], "Trong bài: decreased gradually to about 180 cups."],
          ["When were Café Red's sales highest?", "In March", ["In January", "In June", "In April"], "Trong bài: rose sharply to 250 cups in March but then dropped back."],
          ["Which word in the answer means \"went up and down\"?", "fluctuated", ["decreased", "peaked", "rose"], "fluctuate: dao động, lúc tăng lúc giảm."]
        ]
      }
    },
    {
      "id": "linking", "group": 2, "grade": 12, "icon": "🔗", "tag": "Writing Task 1–2",
      "title": "Từ nối và diễn đạt lại", "en": "Linking words and paraphrasing",
      "desc": "However, although, despite, whereas…; viết lại câu giữ nguyên nghĩa.",
      "words": [
        ["however", "tuy nhiên", ""],
        ["therefore", "vì vậy", ""],
        ["moreover", "hơn nữa", ""],
        ["although", "mặc dù (+ mệnh đề)", ""],
        ["despite", "mặc dù (+ danh từ)", ""],
        ["whereas", "trong khi (đối lập)", ""],
        ["for instance", "ví dụ như", ""],
        ["as a result", "kết quả là", ""],
        ["in contrast", "ngược lại", ""],
        ["consequently", "do đó, hệ quả là", ""],
        ["in addition", "ngoài ra", ""],
        ["on the other hand", "mặt khác", ""]
      ],
      "formula": [
        ["Thêm ý", "Moreover, … · In addition, … · Furthermore, …"],
        ["Đối lập", "However, … · In contrast, … · On the other hand, … · A, whereas B"],
        ["Nhượng bộ", "Although + mệnh đề, … · Despite / In spite of + danh từ hoặc V-ing, …"],
        ["Kết quả", "Therefore, … · As a result, … · Consequently, …"],
        ["Ví dụ", "For example, … · For instance, … · such as + danh từ"]
      ],
      "grammar": [
        ["Although hay despite", "Although đi với một mệnh đề (có chủ ngữ và động từ). Despite và in spite of đi với danh từ hoặc V-ing.", "Although it was raining, we went out. | Despite the rain, we went out."],
        ["Diễn đạt lại (paraphrase)", "IELTS thưởng điểm cho việc diễn đạt cùng một ý bằng cấu trúc khác: đổi từ loại, dùng từ đồng nghĩa, đổi chủ động và bị động, đổi từ nối.", "The population grew quickly. | There was rapid growth in the population."]
      ],
      "quiz": [
        ["___ the weather was bad, the match continued.", "Although", ["Despite", "However", "Because of"], "Theo sau là mệnh đề (the weather was bad) nên dùng Although."],
        ["___ the heavy traffic, we arrived on time.", "Despite", ["Although", "However", "Even"], "Theo sau là cụm danh từ nên dùng Despite."],
        ["The city is crowded. ___, it is a great place to live.", "However", ["Therefore", "Although", "Despite"], "Hai ý đối lập, đứng đầu câu và có dấu phẩy: However."],
        ["He studied very hard. ___, he passed the exam easily.", "As a result", ["However", "In contrast", "Despite"], "Ý sau là kết quả của ý trước."],
        ["Some people prefer cities, ___ others prefer the countryside.", "whereas", ["however", "despite", "therefore"], "whereas nối hai mệnh đề đối lập trong cùng một câu."],
        ["Many fruits, ___ oranges and lemons, are rich in vitamin C.", "such as", ["for instance of", "for example of", "like as"], "such as + danh từ để nêu ví dụ."],
        ["Online courses are cheap. ___, they are very flexible.", "Moreover", ["However", "Although", "Whereas"], "Thêm một ưu điểm nữa: Moreover."],
        ["Despite ___ tired, she finished her homework.", "being", ["she was", "be", "was"], "Sau despite dùng V-ing hoặc danh từ."]
      ],
      "sentences": [
        ["Although the test was difficult, most students passed.", "Mặc dù bài kiểm tra khó nhưng hầu hết học sinh đều đỗ."],
        ["Despite the high cost, many people buy electric cars.", "Dù giá cao, nhiều người vẫn mua ô tô điện."],
        ["Living in a city is exciting. However, it can be stressful.", "Sống ở thành phố rất thú vị. Tuy nhiên, nó có thể gây căng thẳng."],
        ["Some students learn best alone, whereas others prefer group work.", "Một số học sinh học tốt nhất khi học một mình, trong khi số khác thích làm việc nhóm."],
        ["Fuel prices rose. As a result, fewer people drove to work.", "Giá nhiên liệu tăng. Kết quả là ít người lái xe đi làm hơn."],
        ["Many sports, such as swimming and cycling, are good for the heart.", "Nhiều môn thể thao như bơi và đạp xe tốt cho tim."]
      ],
      "transform": [
        ["Although it rained, we played football.", "Viết lại với Despite the rain", "Despite the rain, we played football. | We played football despite the rain.", "Dù trời mưa, chúng tôi vẫn chơi bóng đá."],
        ["Despite being ill, he went to work.", "Viết lại với Although", "Although he was ill, he went to work. | He went to work although he was ill.", "Mặc dù bị ốm, anh ấy vẫn đi làm."],
        ["The rent is high. Therefore, many young people live with their parents.", "Viết lại thành một câu với Because", "Because the rent is high, many young people live with their parents. | Many young people live with their parents because the rent is high.", "Vì tiền thuê nhà cao, nhiều người trẻ sống cùng bố mẹ."],
        ["The population grew rapidly.", "Viết lại bắt đầu bằng There was rapid growth", "There was rapid growth in the population. | There was a rapid growth in the population.", "Dân số tăng nhanh."],
        ["Cities are noisy, but the countryside is quiet.", "Viết lại với whereas", "Cities are noisy, whereas the countryside is quiet. | Whereas cities are noisy, the countryside is quiet.", "Thành phố thì ồn ào, trong khi nông thôn yên tĩnh."]
      ],
      "extra": ["although", "despite", "however", "but", "of"],
      "reading": {
        "title": "Should homework be banned?", "kind": "article",
        "text": [
          "Homework has been part of school life for generations. Nevertheless, in recent years some parents and teachers have argued that it should be reduced or even banned, especially for younger children.",
          "Those who oppose homework claim that it causes stress and leaves children with little time for play, sport and family life. Moreover, some studies suggest that homework has only a small effect on the achievement of primary school pupils.",
          "On the other hand, supporters believe that homework helps students review what they have learned and develop independent study habits. In addition, it allows parents to see what their children are studying at school.",
          "In my view, homework should not be banned. However, it should be short, meaningful and suitable for the age of the students. For example, reading a book for twenty minutes may be more useful than completing a long worksheet."
        ],
        "questions": [
          ["Some parents want less homework for young children.", "True", ["False", "Not Given"], "Trong bài: some parents and teachers have argued that it should be reduced … especially for younger children."],
          ["Research shows that homework greatly improves primary pupils' results.", "False", ["True", "Not Given"], "Bài nói ngược lại: homework has only a small effect on the achievement of primary school pupils."],
          ["Most teachers in the writer's country give too much homework.", "Not Given", ["True", "False"], "Bài không nhắc đến giáo viên ở nước của người viết."],
          ["What is the writer's opinion?", "Homework should be kept but made shorter and more useful.", ["Homework should be banned for all students.", "Homework should be longer.", "Parents should do homework with their children."], "Trong bài: homework should not be banned. However, it should be short, meaningful and suitable."],
          ["Which phrase introduces the opposite view in the third paragraph?", "On the other hand", ["Moreover", "In addition", "For example"], "On the other hand mở đầu ý kiến của phía ủng hộ bài tập về nhà."],
          ["The word \"Nevertheless\" in the first paragraph is closest in meaning to", "However", ["Therefore", "Moreover", "For instance"], "Nevertheless: tuy nhiên, nghĩa gần với However."]
        ]
      }
    },
    {
      "id": "finance", "group": 1, "grade": 12, "icon": "🏦", "tag": "Part 3–7",
      "title": "Tài chính và ngân hàng", "en": "Banking and finance",
      "desc": "Tài khoản, chuyển khoản, khoản vay, ngân sách.",
      "words": [
        ["account", "tài khoản", "🏦"],
        ["deposit", "gửi tiền; tiền đặt cọc", "📥"],
        ["withdraw", "rút tiền", "🏧"],
        ["balance", "số dư", "⚖️"],
        ["transfer", "chuyển khoản", "🔄"],
        ["loan", "khoản vay", "🪙"],
        ["interest rate", "lãi suất", ""],
        ["budget", "ngân sách", "📒"],
        ["payment", "sự thanh toán", "💳"],
        ["receipt", "biên lai", "🧾"],
        ["overdue", "quá hạn", ""],
        ["accountant", "kế toán viên", "🧮"]
      ],
      "grammar": [
        ["Cụm hay gặp ở ngân hàng", "open an account, make a deposit, withdraw money, transfer money to, apply for a loan, pay by credit card, pay in cash.", "I would like to open a savings account. | You can pay by credit card or in cash."],
        ["Giới từ đi với tiền", "pay for + thứ mua, spend … on, borrow … from, lend … to, charge a fee for.", "We spent two thousand dollars on new computers. | She borrowed money from the bank."]
      ],
      "quiz": [
        ["I would like to ___ some money from my account.", "withdraw", ["withdrawal", "withdrawn", "withdrawing"], "Sau would like to là động từ nguyên mẫu."],
        ["The company spent too much money ___ advertising last year.", "on", ["for", "in", "at"], "spend money on something."],
        ["Please pay the invoice ___ the end of the month.", "by", ["until", "since", "during"], "Hạn chót dùng by."],
        ["Your account ___ is shown at the top of the statement.", "balance", ["balanced", "balancing", "balancer"], "Cụm danh từ account balance: số dư tài khoản."],
        ["Mr Lee applied ___ a loan to expand his business.", "for", ["to", "with", "at"], "apply for a loan: xin vay."],
        ["The payment is three weeks ___, so we must send a reminder.", "overdue", ["overdo", "overdone", "overdoing"], "overdue: quá hạn (tính từ, đứng sau is)."],
        ["Customers can ___ money to other accounts online.", "transfer", ["transferring", "transferred", "transfers"], "Sau can là động từ nguyên mẫu."],
        ["We need an experienced ___ to manage our finances.", "accountant", ["account", "accounted", "accountable"], "Sau an experienced cần danh từ chỉ người: accountant."]
      ],
      "sentences": [
        ["I'd like to open a savings account.", "Tôi muốn mở một tài khoản tiết kiệm."],
        ["Can I pay by credit card?", "Tôi có thể trả bằng thẻ tín dụng không?"],
        ["The bank charges a small fee for each transfer.", "Ngân hàng tính một khoản phí nhỏ cho mỗi lần chuyển khoản."],
        ["Please keep the receipt for your records.", "Vui lòng giữ biên lai để lưu hồ sơ."],
        ["Our marketing budget has been cut by ten percent.", "Ngân sách marketing của chúng tôi đã bị cắt mười phần trăm."],
        ["The interest rate on this loan is quite low.", "Lãi suất của khoản vay này khá thấp."]
      ],
      "transform": [
        ["The bank lent him ten thousand dollars.", "Viết lại bắt đầu bằng He borrowed", "He borrowed ten thousand dollars from the bank.", "Anh ấy vay ngân hàng mười nghìn đô la."],
        ["We spent a lot of money on the new website.", "Viết lại bắt đầu bằng The new website cost", "The new website cost a lot of money. | The new website cost us a lot of money.", "Trang web mới tốn rất nhiều tiền."],
        ["The payment date for this bill has passed.", "Viết lại với is overdue", "This bill is overdue.", "Hóa đơn này đã quá hạn."],
        ["You can take money out of this machine.", "Viết lại với withdraw", "You can withdraw money from this machine.", "Bạn có thể rút tiền từ máy này."],
        ["Someone must approve the budget.", "Chuyển sang câu bị động", "The budget must be approved.", "Ngân sách phải được phê duyệt."]
      ],
      "extra": ["from", "to", "for", "is", "be"],
      "reading": {
        "title": "Changes to online banking fees", "kind": "notice",
        "text": [
          "Notice to all customers of Green Valley Bank",
          "From September 1, we are making some changes to our online banking service. Transfers between your own Green Valley accounts will remain free. However, transfers to accounts at other banks will cost 1.50 dollars each, instead of 1 dollar.",
          "Customers who make more than ten transfers a month can avoid this fee by upgrading to our Premium account. Premium customers also receive a higher interest rate on their savings.",
          "In addition, our mobile app will be updated on August 30. After the update, you will need to log in again with your password. For security reasons, the bank will never ask for your password by email or phone.",
          "If you have any questions, please visit your nearest branch or call our customer service line, which is open from 8 a.m. to 8 p.m. every day."
        ],
        "questions": [
          ["What is the notice mainly about?", "Changes to a banking service", ["The opening of a new branch", "A new savings account for students", "Problems with the mobile app"], "Thông báo nói về thay đổi phí chuyển khoản và cập nhật ứng dụng."],
          ["How much will a transfer to another bank cost from September 1?", "1.50 dollars", ["1 dollar", "Nothing", "5 dollars"], "Trong bài: transfers to accounts at other banks will cost 1.50 dollars each."],
          ["How can customers avoid the new fee?", "By upgrading to a Premium account", ["By visiting a branch", "By making fewer transfers each month", "By using the mobile app"], "Trong bài: can avoid this fee by upgrading to our Premium account."],
          ["What will customers need to do after August 30?", "Log in again", ["Change their password", "Visit a branch", "Open a new account"], "Trong bài: After the update, you will need to log in again with your password."],
          ["What does the bank say about passwords?", "It will never ask for them by email or phone.", ["Customers should give them to staff.", "They must be changed every month.", "They will be sent by phone."], "Trong bài: the bank will never ask for your password by email or phone."]
        ]
      }
    },
    {
      "id": "marketing", "group": 1, "grade": 12, "icon": "📣", "tag": "Part 3–7",
      "title": "Marketing và bán hàng", "en": "Marketing and sales",
      "desc": "Quảng cáo, khảo sát khách hàng, doanh số, ra mắt sản phẩm.",
      "words": [
        ["advertisement", "quảng cáo", "📺"],
        ["campaign", "chiến dịch", "📣"],
        ["launch", "ra mắt (sản phẩm)", "🚀"],
        ["target", "nhắm tới; mục tiêu", "🎯"],
        ["survey", "cuộc khảo sát", "📋"],
        ["competitor", "đối thủ cạnh tranh", "🥊"],
        ["revenue", "doanh thu", "💹"],
        ["brand", "thương hiệu", "™️"],
        ["sample", "hàng mẫu", "🧪"],
        ["promotion", "chương trình khuyến mãi", "🎉"],
        ["feedback", "ý kiến phản hồi", "💬"],
        ["sales figures", "số liệu bán hàng", "📊"]
      ],
      "grammar": [
        ["Cụm hay gặp trong marketing", "launch a product, run a campaign, carry out a survey, target young customers, increase sales, receive feedback.", "The company will launch its new phone in May. | We carried out a survey of 500 customers."],
        ["Nói về doanh số", "Dùng rise, fall, increase by, compared with, higher than để nói về số liệu bán hàng.", "Sales rose by 15 percent compared with last year. | Our revenue was higher than expected."]
      ],
      "quiz": [
        ["The company will ___ its new product next month.", "launch", ["launching", "launched", "launches"], "Sau will là động từ nguyên mẫu."],
        ["We carried ___ a survey to find out what customers want.", "out", ["on", "up", "off"], "carry out a survey: tiến hành khảo sát."],
        ["The new advertising ___ was very successful.", "campaign", ["campaigned", "campaigning", "campaigner"], "Sau advertising cần danh từ chỉ sự việc: campaign."],
        ["Our main ___ has just lowered its prices.", "competitor", ["compete", "competitive", "competitively"], "Sau main cần danh từ: competitor (đối thủ)."],
        ["Sales increased ___ 20 percent in the first quarter.", "by", ["with", "at", "of"], "increase by + mức tăng."],
        ["This product is aimed ___ teenagers.", "at", ["to", "for", "on"], "be aimed at: nhắm vào."],
        ["Free ___ were given to customers at the supermarket.", "samples", ["sampled", "sampling", "sample"], "Sau Free cần danh từ số nhiều (động từ là were): samples."],
        ["We received positive ___ from our customers.", "feedback", ["feedbacks", "feeding", "fed"], "feedback là danh từ không đếm được, không thêm s."]
      ],
      "sentences": [
        ["The advertisement will appear on TV next week.", "Quảng cáo sẽ xuất hiện trên ti vi vào tuần sau."],
        ["Our target customers are young professionals.", "Khách hàng mục tiêu của chúng tôi là người trẻ đi làm."],
        ["The summer promotion offers twenty percent off all shoes.", "Chương trình khuyến mãi mùa hè giảm hai mươi phần trăm cho mọi loại giày."],
        ["Sales figures for March were better than expected.", "Số liệu bán hàng tháng Ba tốt hơn dự kiến."],
        ["We need to know more about our competitors.", "Chúng ta cần biết thêm về các đối thủ cạnh tranh."],
        ["Customer feedback helps us improve our products.", "Ý kiến phản hồi của khách hàng giúp chúng tôi cải thiện sản phẩm."]
      ],
      "transform": [
        ["The company will introduce a new brand of tea.", "Viết lại với launch", "The company will launch a new brand of tea.", "Công ty sẽ ra mắt một thương hiệu trà mới."],
        ["Sales went up from 100 to 120 units.", "Viết lại với increased by", "Sales increased by 20 units.", "Doanh số tăng 20 sản phẩm."],
        ["We asked 500 customers about our service.", "Viết lại bắt đầu bằng We carried out a survey", "We carried out a survey of 500 customers. | We carried out a survey of 500 customers about our service.", "Chúng tôi đã khảo sát 500 khách hàng."],
        ["This advertisement is for young people.", "Viết lại với is aimed at", "This advertisement is aimed at young people.", "Quảng cáo này nhắm tới người trẻ."],
        ["Our revenue was lower this year than last year.", "Viết lại bắt đầu bằng Last year", "Last year our revenue was higher. | Last year, our revenue was higher. | Last year our revenue was higher than this year.", "Năm ngoái doanh thu của chúng tôi cao hơn."]
      ],
      "extra": ["for", "to", "by", "at", "with"],
      "reading": {
        "title": "Spring campaign results", "kind": "email",
        "text": [
          "Hi everyone,",
          "I am pleased to share the results of our spring advertising campaign for FreshFruit juice. The campaign ran from March 1 to April 30 and included TV advertisements, social media posts and free samples in supermarkets.",
          "Overall, sales rose by 18 percent compared with the same period last year. The free samples were especially effective: in the supermarkets where we offered samples, sales nearly doubled. The TV advertisements, however, were more expensive than expected and did not lead to a large increase in sales.",
          "For the summer campaign, we plan to spend less on TV and more on in-store promotions. We will discuss the details at our meeting on Thursday at 2 p.m. Please read the attached report before then.",
          "Best wishes, Sarah Wong, Marketing Manager"
        ],
        "questions": [
          ["What is the purpose of the email?", "To report the results of a campaign", ["To introduce a new product", "To invite staff to a party", "To announce a price increase"], "Email chia sẻ kết quả chiến dịch quảng cáo mùa xuân."],
          ["How long did the spring campaign last?", "About two months", ["About one month", "About three months", "About two weeks"], "Chiến dịch chạy từ 1/3 đến 30/4, khoảng hai tháng."],
          ["What was the most effective part of the campaign?", "Free samples in supermarkets", ["TV advertisements", "Social media posts", "Price discounts"], "Trong bài: The free samples were especially effective … sales nearly doubled."],
          ["What is suggested about the TV advertisements?", "They cost more than planned.", ["They doubled sales.", "They will be used more in summer.", "They were shown only in April."], "Trong bài: were more expensive than expected."],
          ["What should staff do before Thursday?", "Read a report", ["Visit a supermarket", "Prepare a presentation", "Contact customers"], "Trong bài: Please read the attached report before then."]
        ]
      }
    },
    {
      "id": "dining", "group": 1, "grade": 12, "icon": "🍽️", "tag": "Part 1–4",
      "title": "Nhà hàng và sự kiện", "en": "Restaurants and events",
      "desc": "Đặt bàn, gọi món, tổ chức tiệc và sự kiện công ty.",
      "words": [
        ["menu", "thực đơn", "🍽️"],
        ["book a table", "đặt bàn", "📞"],
        ["catering", "dịch vụ cung cấp đồ ăn", "🍱"],
        ["banquet", "tiệc lớn, yến tiệc", "🥂"],
        ["venue", "địa điểm tổ chức", "🏛️"],
        ["guest", "khách mời", "🙂"],
        ["host", "chủ trì; tổ chức", "🎙️"],
        ["dessert", "món tráng miệng", "🍰"],
        ["vegetarian", "ăn chay; món chay", "🥦"],
        ["bill", "hóa đơn tính tiền", "💵"],
        ["waiter", "người phục vụ bàn", "💁"],
        ["award ceremony", "lễ trao giải", "🎖️"]
      ],
      "grammar": [
        ["Gọi món và yêu cầu lịch sự", "Dùng would like, could, may cho lịch sự: I'd like …, Could we have …?, May I see …?", "I'd like the chicken salad, please. | Could we have the bill, please?"],
        ["Tổ chức sự kiện", "hold an event, book a venue, send invitations, arrange catering, be held at, take place on.", "The dinner will be held at the Riverside Hotel. | The award ceremony takes place on Friday evening."]
      ],
      "quiz": [
        ["Could we ___ the bill, please?", "have", ["having", "had", "has"], "Could we + động từ nguyên mẫu."],
        ["The annual dinner will be ___ at the Grand Hotel.", "held", ["hold", "holding", "holds"], "Bị động: will be + V3; hold, held, held."],
        ["I'd like to book a table ___ four people.", "for", ["to", "with", "of"], "book a table for + số người."],
        ["All guests are asked to arrive ___ 7 p.m.", "by", ["until", "since", "during"], "Hạn chót: by."],
        ["The restaurant offers several ___ dishes for people who do not eat meat.", "vegetarian", ["vegetation", "vegetarianism", "vegetate"], "vegetarian dishes: món chay."],
        ["The ___ for the conference has not been chosen yet.", "venue", ["vein", "value", "avenue"], "venue: địa điểm tổ chức."],
        ["Mr Smith will ___ the award ceremony this year.", "host", ["hosted", "hosting", "hosts"], "Sau will là động từ nguyên mẫu."],
        ["Would you like to see the ___ menu?", "dessert", ["desert", "deserted", "deserving"], "dessert (món tráng miệng) khác desert (sa mạc)."]
      ],
      "sentences": [
        ["I'd like to book a table for two at seven o'clock.", "Tôi muốn đặt bàn cho hai người lúc bảy giờ."],
        ["Could we see the menu, please?", "Cho chúng tôi xem thực đơn được không?"],
        ["The company dinner will be held at a hotel near the river.", "Bữa tối của công ty sẽ được tổ chức ở một khách sạn gần sông."],
        ["A local company will provide the catering for the event.", "Một công ty địa phương sẽ cung cấp đồ ăn cho sự kiện."],
        ["More than two hundred guests attended the banquet.", "Hơn hai trăm khách đã dự bữa tiệc."],
        ["The waiter brought us some water and bread.", "Người phục vụ mang cho chúng tôi nước và bánh mì."]
      ],
      "transform": [
        ["I want the fish soup.", "Viết lại lịch sự với I'd like", "I'd like the fish soup. | I'd like the fish soup, please.", "Tôi muốn món súp cá."],
        ["Give us the bill.", "Viết lại lịch sự với Could we have", "Could we have the bill? | Could we have the bill, please?", "Cho chúng tôi xin hóa đơn được không?"],
        ["They will hold the party in the garden.", "Chuyển sang câu bị động", "The party will be held in the garden.", "Bữa tiệc sẽ được tổ chức trong vườn."],
        ["The ceremony is on Friday.", "Viết lại với takes place on", "The ceremony takes place on Friday. | The ceremony will take place on Friday.", "Buổi lễ diễn ra vào thứ Sáu."],
        ["I reserved a table for six people.", "Viết lại với booked", "I booked a table for six people. | I booked a table for six.", "Tôi đã đặt bàn cho sáu người."]
      ],
      "extra": ["for", "at", "is", "be", "was"],
      "reading": {
        "title": "Annual staff dinner", "kind": "email",
        "text": [
          "Dear all,",
          "Our annual staff dinner will take place on Friday, December 15, at the Riverside Hotel. Drinks will be served from 6.30 p.m., and dinner will begin at 7.15 p.m. The evening will also include our annual award ceremony, hosted by our director, Mr Brown.",
          "The hotel will provide a three-course meal. Vegetarian and gluten-free options are available, but you must tell us about any special dietary needs by December 5.",
          "Staff are welcome to bring one guest each. Please reply to this email by December 5 to confirm how many people will attend. Free parking is available at the hotel, but spaces are limited, so we recommend taking a taxi or the bus.",
          "We look forward to seeing you there! Emma Clark, Events Coordinator"
        ],
        "questions": [
          ["What is the email mainly about?", "A company dinner", ["A new hotel opening", "A training course", "A holiday schedule"], "Email mời dự bữa tối thường niên của nhân viên."],
          ["What time will dinner start?", "At 7.15 p.m.", ["At 6.30 p.m.", "At 7 p.m.", "At 8 p.m."], "Trong bài: dinner will begin at 7.15 p.m."],
          ["What will Mr Brown do?", "Host the award ceremony", ["Cook the meal", "Book the hotel", "Drive staff to the hotel"], "Trong bài: award ceremony, hosted by our director, Mr Brown."],
          ["By when must staff reply?", "December 5", ["December 15", "December 1", "December 10"], "Trong bài: Please reply to this email by December 5."],
          ["Why does Ms Clark recommend a taxi or the bus?", "Parking spaces are limited.", ["The hotel is far from the office.", "Taxis are free.", "The hotel has no car park."], "Trong bài: spaces are limited, so we recommend taking a taxi or the bus."]
        ]
      }
    },
    {
      "id": "factory", "group": 1, "grade": 12, "icon": "⚙️", "tag": "Part 4–7",
      "title": "Sản xuất và nhà máy", "en": "Manufacturing",
      "desc": "Dây chuyền, thiết bị, kiểm tra chất lượng, an toàn lao động.",
      "words": [
        ["factory", "nhà máy", "🏭"],
        ["assembly line", "dây chuyền lắp ráp", "⚙️"],
        ["equipment", "thiết bị, dụng cụ", "🔧"],
        ["maintenance", "sự bảo trì", "🛠️"],
        ["inspection", "sự kiểm tra", "🔍"],
        ["defect", "lỗi, khuyết tật (sản phẩm)", "❗"],
        ["quality control", "kiểm soát chất lượng", "✅"],
        ["output", "sản lượng", ""],
        ["raw materials", "nguyên liệu thô", "🪵"],
        ["safety", "sự an toàn", "🦺"],
        ["operate", "vận hành", "🎛️"],
        ["efficiency", "hiệu suất", "⚡"]
      ],
      "grammar": [
        ["Bị động khi mô tả quy trình", "Khi mô tả quy trình sản xuất, dùng câu bị động vì sản phẩm quan trọng hơn người làm: be made, be checked, be packed, be shipped.", "The parts are checked before they are packed. | All products are tested for safety."],
        ["Cụm hay gặp ở nhà máy", "carry out an inspection, operate a machine, wear safety equipment, meet quality standards, reduce costs, increase output.", "All workers must wear safety equipment. | The new machine will increase output."]
      ],
      "quiz": [
        ["All machines are ___ once a month.", "inspected", ["inspect", "inspecting", "inspection"], "Bị động: are + V3."],
        ["Workers must wear safety ___ at all times.", "equipment", ["equipments", "equip", "equipped"], "equipment không đếm được, không thêm s."],
        ["The factory ___ more than 5,000 bottles a day.", "produces", ["product", "production", "productive"], "Chủ ngữ số ít, hiện tại đơn: produces."],
        ["Only trained staff are allowed to ___ this machine.", "operate", ["operation", "operator", "operating"], "be allowed to + động từ nguyên mẫu."],
        ["A number of ___ were found in the last shipment.", "defects", ["defective", "defected", "defectively"], "A number of + danh từ số nhiều."],
        ["Regular ___ helps prevent machines from breaking down.", "maintenance", ["maintain", "maintained", "maintains"], "Làm chủ ngữ cần danh từ: maintenance."],
        ["The new system has improved our ___ by 30 percent.", "efficiency", ["efficient", "efficiently", "efficiencies"], "Sau our cần danh từ số ít: efficiency."],
        ["The raw materials are delivered ___ the factory every Monday.", "to", ["at", "in", "by"], "deliver something to a place."]
      ],
      "sentences": [
        ["The factory runs twenty-four hours a day.", "Nhà máy hoạt động hai mươi bốn giờ mỗi ngày."],
        ["Every product is checked before it leaves the factory.", "Mọi sản phẩm đều được kiểm tra trước khi rời nhà máy."],
        ["Please report any safety problems to your supervisor.", "Hãy báo mọi vấn đề an toàn cho người giám sát."],
        ["The assembly line was stopped for maintenance.", "Dây chuyền lắp ráp đã dừng để bảo trì."],
        ["We need to reduce the number of defects.", "Chúng ta cần giảm số lượng sản phẩm lỗi."],
        ["The price of raw materials has gone up.", "Giá nguyên liệu thô đã tăng."]
      ],
      "transform": [
        ["Workers pack the boxes by hand.", "Chuyển sang câu bị động", "The boxes are packed by hand. | The boxes are packed by hand by workers. | The boxes are packed by workers by hand.", "Các thùng hàng được đóng gói bằng tay."],
        ["An engineer inspected the machine yesterday.", "Chuyển sang câu bị động", "The machine was inspected by an engineer yesterday. | The machine was inspected yesterday by an engineer. | The machine was inspected yesterday.", "Hôm qua máy đã được một kỹ sư kiểm tra."],
        ["The machine broke, so production stopped.", "Viết lại bắt đầu bằng Production stopped because", "Production stopped because the machine broke. | Production stopped because the machine broke down.", "Việc sản xuất dừng lại vì máy hỏng."],
        ["The factory makes more products now.", "Viết lại với has increased its output", "The factory has increased its output.", "Nhà máy đã tăng sản lượng."],
        ["You must not use this machine without training.", "Viết lại bắt đầu bằng Only trained staff", "Only trained staff can use this machine. | Only trained staff may use this machine. | Only trained staff are allowed to use this machine.", "Chỉ nhân viên đã qua đào tạo mới được dùng máy này."]
      ],
      "extra": ["is", "are", "was", "by", "be"],
      "reading": {
        "title": "Safety inspection next Tuesday", "kind": "notice",
        "text": [
          "Notice to all production staff",
          "A safety inspection will be carried out at the factory next Tuesday, May 21. Inspectors from the city council will visit all areas, including the assembly lines, the warehouse and the staff canteen.",
          "On the day of the inspection, all workers must wear helmets, gloves and safety shoes. Please make sure that walkways are kept clear and that boxes are not stored near fire exits.",
          "Assembly line 3 will be stopped from 10 a.m. to 12 p.m. so that the inspectors can check the machines. Workers on this line will attend a short safety training session in Meeting Room B during this time.",
          "If you notice any safety problem before the inspection, please report it to your supervisor immediately. Thank you for your cooperation."
        ],
        "questions": [
          ["Who will carry out the inspection?", "Inspectors from the city council", ["The factory supervisors", "A group of new workers", "Engineers from a machine company"], "Trong bài: Inspectors from the city council will visit all areas."],
          ["Which place will the inspectors visit?", "The staff canteen", ["The car park", "The main office", "The sales department"], "Trong bài: including the assembly lines, the warehouse and the staff canteen."],
          ["What must workers do on the day of the inspection?", "Wear safety equipment", ["Work extra hours", "Stop all machines", "Clean the canteen"], "Trong bài: all workers must wear helmets, gloves and safety shoes."],
          ["What will happen to assembly line 3?", "It will stop for two hours.", ["It will be closed for a day.", "It will be moved to the warehouse.", "It will be replaced."], "Trong bài: will be stopped from 10 a.m. to 12 p.m."],
          ["What should workers do if they find a safety problem?", "Tell their supervisor", ["Call the city council", "Stop the assembly line", "Write a report for the inspectors"], "Trong bài: please report it to your supervisor immediately."]
        ]
      }
    },
    {
      "id": "city", "group": 2, "grade": 12, "icon": "🏙️", "tag": "Writing Task 2",
      "title": "Thành phố và đô thị hóa", "en": "Cities and urbanisation",
      "desc": "Giao thông, nhà ở, so sánh thành thị và nông thôn.",
      "words": [
        ["urbanisation", "đô thị hóa", "🏙️"],
        ["traffic congestion", "ùn tắc giao thông", "🚗"],
        ["public transport", "giao thông công cộng", "🚌"],
        ["housing shortage", "sự thiếu nhà ở", "🏚️"],
        ["infrastructure", "cơ sở hạ tầng", "🏗️"],
        ["rural", "thuộc về nông thôn", "🌾"],
        ["urban", "thuộc về đô thị", "🌆"],
        ["commute", "đi lại từ nhà đến chỗ làm", "🚆"],
        ["overcrowded", "quá đông đúc", "👥"],
        ["pedestrian", "người đi bộ", "🚶"],
        ["migrate", "di cư", "🦢"],
        ["cost of living", "chi phí sinh hoạt", "💲"]
      ],
      "grammar": [
        ["Collocation về thành phố", "traffic congestion, public transport, a housing shortage, the cost of living, move to the city, improve infrastructure, reduce air pollution.", "Many young people move to the city to find work. | Governments should invest in public transport."],
        ["So sánh thành thị và nông thôn", "Dùng so sánh hơn và từ nối đối lập: whereas, while, compared with, in contrast.", "Life in the city is more expensive than life in the countryside. | Cities offer more jobs, whereas rural areas are quieter."]
      ],
      "quiz": [
        ["Many people ___ to cities to look for better jobs.", "migrate", ["migration", "migrant", "migratory"], "Sau chủ ngữ Many people cần động từ: migrate."],
        ["The government should invest more ___ public transport.", "in", ["on", "to", "for"], "invest in: đầu tư vào."],
        ["Traffic ___ is a serious problem in big cities.", "congestion", ["congested", "congest", "congesting"], "Cụm danh từ traffic congestion: ùn tắc giao thông."],
        ["Housing in the city centre is ___ expensive than in the suburbs.", "more", ["most", "much", "very"], "So sánh hơn với than: more expensive."],
        ["Many workers ___ for more than an hour every day.", "commute", ["commuter", "commuting", "commutes"], "Chủ ngữ số nhiều, hiện tại đơn: commute."],
        ["Life in ___ areas is often quieter than life in cities.", "rural", ["rurally", "rurality", "ruralize"], "Trước danh từ areas cần tính từ: rural."],
        ["The city needs better ___ such as roads and bridges.", "infrastructure", ["structural", "infrastructural", "construct"], "such as roads and bridges là ví dụ về cơ sở hạ tầng: infrastructure."],
        ["The streets are ___ with tourists in summer.", "overcrowded", ["overcrowding", "crowd", "crowds"], "be overcrowded with: quá đông."]
      ],
      "sentences": [
        ["Urbanisation has changed many parts of Viet Nam.", "Đô thị hóa đã làm thay đổi nhiều vùng ở Việt Nam."],
        ["Public transport can reduce traffic congestion.", "Giao thông công cộng có thể giảm ùn tắc."],
        ["The cost of living in big cities is rising.", "Chi phí sinh hoạt ở các thành phố lớn đang tăng."],
        ["Many young people leave rural areas to find work.", "Nhiều người trẻ rời nông thôn để tìm việc."],
        ["There is a housing shortage in the capital.", "Thủ đô đang thiếu nhà ở."],
        ["Cities should create more space for pedestrians.", "Các thành phố nên tạo thêm không gian cho người đi bộ."]
      ],
      "transform": [
        ["Too many people live in this city.", "Viết lại với is overcrowded", "This city is overcrowded.", "Thành phố này quá đông đúc."],
        ["There are not enough houses in the city.", "Viết lại bắt đầu bằng There is a housing shortage", "There is a housing shortage in the city.", "Thành phố đang thiếu nhà ở."],
        ["Living in the city costs more than living in the countryside.", "Viết lại bắt đầu bằng Life in the city is", "Life in the city is more expensive than life in the countryside. | Life in the city is more expensive than in the countryside.", "Sống ở thành phố đắt đỏ hơn ở nông thôn."],
        ["Cities have more jobs. Rural areas are more peaceful.", "Nối hai câu bằng whereas", "Cities have more jobs, whereas rural areas are more peaceful. | Whereas cities have more jobs, rural areas are more peaceful.", "Thành phố có nhiều việc làm hơn, trong khi nông thôn yên bình hơn."],
        ["The government should spend money on buses and trains.", "Viết lại với invest in public transport", "The government should invest in public transport.", "Chính phủ nên đầu tư vào giao thông công cộng."]
      ],
      "extra": ["is", "are", "than", "in", "but"],
      "reading": {
        "title": "The growth of cities", "kind": "article",
        "text": [
          "In 1950, fewer than one third of the world's population lived in cities. Today the figure is more than half, and the United Nations expects it to reach about two thirds by 2050. Much of this growth is taking place in Asia and Africa.",
          "People move to cities mainly for work and education. Cities usually offer higher wages and better schools and hospitals than rural areas. However, rapid growth also creates problems. In many large cities, there is a serious shortage of affordable housing, and roads cannot cope with the number of vehicles.",
          "Some cities have responded by investing heavily in public transport. Singapore, for example, limits the number of cars on its roads and has built an efficient metro system. Other cities are encouraging people to work from home for part of the week in order to reduce traffic at peak times.",
          "Experts argue that the most successful cities will be those that plan for growth rather than simply react to it."
        ],
        "questions": [
          ["In 1950, most people in the world lived in cities.", "False", ["True", "Not Given"], "Trong bài: In 1950, fewer than one third … lived in cities."],
          ["The United Nations expects the share of people living in cities to keep growing.", "True", ["False", "Not Given"], "Trong bài: expects it to reach about two thirds by 2050."],
          ["Housing in rural areas is cheaper than housing in cities.", "Not Given", ["True", "False"], "Bài chỉ nói thành phố thiếu nhà ở giá phải chăng, không so sánh giá với nông thôn."],
          ["According to the passage, why do people move to cities?", "Mainly for jobs and education", ["Mainly for cheaper housing", "Mainly for cleaner air", "Mainly for public transport"], "Trong bài: People move to cities mainly for work and education."],
          ["What has Singapore done?", "Limited the number of cars", ["Built more roads", "Moved schools to rural areas", "Banned working from home"], "Trong bài: Singapore … limits the number of cars on its roads."],
          ["What do experts believe?", "Cities should plan for growth in advance.", ["Cities should stop growing.", "Only Asian cities will succeed.", "People should move back to rural areas."], "Trong bài: the most successful cities will be those that plan for growth."]
        ]
      }
    },
    {
      "id": "work", "group": 2, "grade": 12, "icon": "💼", "tag": "Speaking, Writing Task 2",
      "title": "Công việc và nghề nghiệp", "en": "Work and careers",
      "desc": "Chọn nghề, cân bằng công việc và cuộc sống, làm việc từ xa.",
      "words": [
        ["career", "sự nghiệp", "🧗"],
        ["job satisfaction", "sự hài lòng với công việc", "😊"],
        ["work-life balance", "cân bằng công việc và cuộc sống", "🧘"],
        ["remote work", "làm việc từ xa", "🏠"],
        ["unemployment", "tình trạng thất nghiệp", ""],
        ["skilled", "có tay nghề", "🧰"],
        ["self-employed", "tự làm chủ", "🧑‍💻"],
        ["income", "thu nhập", "💰"],
        ["workload", "khối lượng công việc", "🗂️"],
        ["flexible hours", "giờ làm linh hoạt", "🕘"],
        ["burnout", "sự kiệt sức", "🔥"],
        ["internship", "kỳ thực tập", "🎒"]
      ],
      "grammar": [
        ["Collocation về công việc", "pursue a career, earn a good income, achieve a work-life balance, have a heavy workload, gain work experience, be self-employed.", "Many graduates want to pursue a career in technology. | Nurses often have a heavy workload."],
        ["Nói về lựa chọn", "Dùng prefer A to B, would rather A than B, the most important factor is … để nói về lựa chọn nghề nghiệp.", "I prefer job satisfaction to a high salary. | I would rather work from home than in an office."]
      ],
      "quiz": [
        ["Many young people want to ___ a career in medicine.", "pursue", ["chase", "hunt", "catch"], "Collocation: pursue a career."],
        ["Nurses often have a heavy ___.", "workload", ["working", "worker", "workman"], "Collocation: a heavy workload."],
        ["It is difficult to achieve a good work-life ___.", "balance", ["balanced", "balancing", "scale"], "Cụm danh từ cố định: work-life balance."],
        ["The ___ rate among young people has fallen.", "unemployment", ["unemployed", "employ", "employing"], "Cụm danh từ: unemployment rate (tỉ lệ thất nghiệp)."],
        ["I prefer working from home ___ working in an office.", "to", ["than", "over to", "from"], "prefer A to B."],
        ["She would rather have a lower salary ___ work long hours.", "than", ["to", "from", "over"], "would rather A than B."],
        ["Doing an ___ is a good way to gain work experience.", "internship", ["intern", "internal", "internet"], "Sau an cần danh từ chỉ kỳ thực tập: internship."],
        ["Many people become ___ because they want to be their own boss.", "self-employed", ["self-employment", "employer", "employing"], "become + tính từ: self-employed (tự làm chủ)."]
      ],
      "sentences": [
        ["Job satisfaction is more important than a high salary.", "Sự hài lòng với công việc quan trọng hơn lương cao."],
        ["Remote work allows people to spend more time with their families.", "Làm việc từ xa giúp mọi người dành nhiều thời gian hơn cho gia đình."],
        ["Skilled workers are in high demand.", "Lao động có tay nghề đang được săn đón."],
        ["Long working hours can lead to burnout.", "Làm việc nhiều giờ có thể dẫn đến kiệt sức."],
        ["Many companies now offer flexible hours.", "Nhiều công ty hiện có giờ làm linh hoạt."],
        ["An internship can help students choose a career.", "Một kỳ thực tập có thể giúp sinh viên chọn nghề."]
      ],
      "transform": [
        ["I like working at home more than working in an office.", "Viết lại với prefer … to", "I prefer working at home to working in an office.", "Tôi thích làm việc ở nhà hơn làm ở văn phòng."],
        ["He works for himself.", "Viết lại với is self-employed", "He is self-employed.", "Anh ấy tự làm chủ."],
        ["She has too much work to do.", "Viết lại với has a heavy workload", "She has a heavy workload.", "Cô ấy có khối lượng công việc nặng."],
        ["A lot of people cannot find jobs.", "Viết lại bắt đầu bằng Unemployment is", "Unemployment is high.", "Tỉ lệ thất nghiệp cao."],
        ["I would prefer a job I enjoy to a well-paid job.", "Viết lại với would rather … than", "I would rather have a job I enjoy than a well-paid job. | I would rather do a job I enjoy than a well-paid job.", "Tôi thà có công việc mình thích còn hơn công việc lương cao."]
      ],
      "extra": ["than", "to", "has", "is", "more"],
      "reading": {
        "title": "Working from home", "kind": "article",
        "text": [
          "Before 2020, working from home was unusual in most countries. During the COVID-19 pandemic, however, millions of office workers had no choice but to work remotely. Many companies found that their staff could work effectively outside the office, and some decided to continue the practice.",
          "Supporters of remote work point out that employees save time and money by not commuting. Several surveys have also found that people who work from home report higher job satisfaction and a better work-life balance.",
          "On the other hand, remote work has disadvantages. Some workers feel lonely and find it difficult to separate their working life from their home life. Managers also worry that young employees learn less when they cannot watch and ask experienced colleagues.",
          "As a result, many organisations now use a hybrid model, in which employees spend two or three days a week in the office and work from home on the other days."
        ],
        "questions": [
          ["Working from home was common in most countries before 2020.", "False", ["True", "Not Given"], "Trong bài: Before 2020, working from home was unusual in most countries."],
          ["People who work from home save money on travel.", "True", ["False", "Not Given"], "Trong bài: employees save time and money by not commuting."],
          ["Remote workers are paid more than office workers.", "Not Given", ["True", "False"], "Bài không nói đến tiền lương của người làm từ xa."],
          ["What concern do managers have?", "Young staff may learn less.", ["Workers may spend more money.", "Offices may become too crowded.", "Staff may work too many hours."], "Trong bài: Managers also worry that young employees learn less."],
          ["What is a hybrid model?", "Working partly in the office and partly at home", ["Working only from home", "Working for two companies", "Working at night and at weekends"], "Trong bài: spend two or three days a week in the office and work from home on the other days."]
        ]
      }
    },
    {
      "id": "tourism", "group": 2, "grade": 12, "icon": "🗺️", "tag": "Speaking, Writing Task 2",
      "title": "Du lịch", "en": "Tourism",
      "desc": "Du lịch đại chúng, du lịch sinh thái, tác động đến địa phương.",
      "words": [
        ["tourist attraction", "điểm tham quan", "🗽"],
        ["mass tourism", "du lịch đại chúng", "🚌"],
        ["ecotourism", "du lịch sinh thái", "🌿"],
        ["souvenir", "quà lưu niệm", "🎁"],
        ["local residents", "người dân địa phương", "🏘️"],
        ["heritage site", "di sản", "🏯"],
        ["peak season", "mùa cao điểm", "🌞"],
        ["overtourism", "tình trạng quá tải du lịch", "🚧"],
        ["cultural exchange", "giao lưu văn hóa", "🌏"],
        ["hospitality", "ngành dịch vụ lưu trú, ăn uống", "🛎️"],
        ["sightseeing", "việc đi tham quan", "📸"],
        ["foreign currency", "ngoại tệ", "💱"]
      ],
      "grammar": [
        ["Collocation về du lịch", "attract tourists, boost the local economy, a tourist attraction, a heritage site, peak season, damage the environment, cultural exchange.", "Tourism can boost the local economy. | Ha Long Bay attracts millions of tourists every year."],
        ["Tác động tích cực và tiêu cực", "Tích cực: create jobs, bring in foreign currency, promote cultural exchange. Tiêu cực: cause pollution, raise prices, put pressure on local services.", "Tourism creates jobs for local people. | Too many visitors can damage heritage sites."]
      ],
      "quiz": [
        ["Tourism can ___ the local economy.", "boost", ["boosting", "boosted", "booster"], "Sau can là động từ nguyên mẫu; boost the economy: thúc đẩy kinh tế."],
        ["Ha Long Bay ___ millions of visitors every year.", "attracts", ["attraction", "attractive", "attracting"], "Chủ ngữ số ít, hiện tại đơn: attracts."],
        ["Hotels are often full during the peak ___.", "season", ["seasonal", "seasoning", "seasoned"], "Cụm danh từ peak season: mùa cao điểm."],
        ["Too many tourists can put pressure ___ local services.", "on", ["in", "to", "at"], "put pressure on: gây áp lực lên."],
        ["Hoi An is a famous ___ site.", "heritage", ["heritable", "inherit", "heir"], "Cụm danh từ heritage site: di sản."],
        ["Ecotourism aims to protect nature ___ supporting local people.", "while", ["during", "whereas", "despite"], "while + V-ing: đồng thời, trong khi."],
        ["Tourists often buy ___ to take home.", "souvenirs", ["memories", "reminders", "remembers"], "souvenir: quà lưu niệm."],
        ["Local ___ complain about noise from tourist bars.", "residents", ["residence", "reside", "residential"], "Sau Local cần danh từ chỉ người: residents."]
      ],
      "sentences": [
        ["Tourism creates many jobs for local people.", "Du lịch tạo ra nhiều việc làm cho người dân địa phương."],
        ["Hoi An Ancient Town is a popular tourist attraction.", "Phố cổ Hội An là một điểm tham quan nổi tiếng."],
        ["Prices go up during the peak season.", "Giá cả tăng vào mùa cao điểm."],
        ["Ecotourism helps protect forests and wildlife.", "Du lịch sinh thái giúp bảo vệ rừng và động vật hoang dã."],
        ["Mass tourism can damage heritage sites.", "Du lịch đại chúng có thể làm hư hại các di sản."],
        ["Travelling abroad encourages cultural exchange.", "Du lịch nước ngoài thúc đẩy giao lưu văn hóa."]
      ],
      "transform": [
        ["Many tourists visit Da Nang every year.", "Viết lại bắt đầu bằng Da Nang attracts", "Da Nang attracts many tourists every year.", "Đà Nẵng thu hút nhiều du khách mỗi năm."],
        ["Tourism helps the local economy grow.", "Viết lại với boosts", "Tourism boosts the local economy.", "Du lịch thúc đẩy kinh tế địa phương."],
        ["There are too many tourists in the old town.", "Viết lại với is overcrowded with", "The old town is overcrowded with tourists.", "Phố cổ quá đông du khách."],
        ["Tourists damage the coral reefs.", "Chuyển sang câu bị động", "The coral reefs are damaged by tourists.", "Rạn san hô bị du khách làm hư hại."],
        ["Tourism creates jobs, but it also causes pollution.", "Viết lại với Although", "Although tourism creates jobs, it also causes pollution. | Although tourism creates jobs, it causes pollution.", "Mặc dù du lịch tạo việc làm, nó cũng gây ô nhiễm."]
      ],
      "extra": ["is", "are", "by", "but", "of"],
      "reading": {
        "title": "The problem of overtourism", "kind": "article",
        "text": [
          "Tourism is one of the world's largest industries. It creates jobs, brings in foreign currency and helps people from different cultures understand each other. However, in some popular destinations, the number of visitors has grown so large that it now causes serious problems. This situation is known as overtourism.",
          "In cities such as Venice and Barcelona, local residents complain that crowds, noise and rising rents have made their neighbourhoods difficult to live in. Short-term holiday rentals have also reduced the number of homes available for local families.",
          "Natural sites are affected too. In 2018, Maya Bay in Thailand was closed to visitors after large numbers of boats and swimmers damaged its coral reefs. The beach reopened a few years later with strict limits on the number of visitors per day.",
          "To manage the problem, some destinations have introduced tourist taxes or daily visitor limits. Others are encouraging travellers to visit in the low season or to explore less famous places."
        ],
        "questions": [
          ["Tourism helps people understand other cultures.", "True", ["False", "Not Given"], "Trong bài: helps people from different cultures understand each other."],
          ["Short-term holiday rentals have increased the number of homes for local families.", "False", ["True", "Not Given"], "Bài nói ngược lại: have also reduced the number of homes available for local families."],
          ["Venice has the highest tourist tax in Europe.", "Not Given", ["True", "False"], "Bài không so sánh mức thuế du lịch giữa các thành phố."],
          ["Why was Maya Bay closed?", "Its coral reefs had been damaged.", ["A new hotel was being built.", "There were not enough visitors.", "The water became too cold."], "Trong bài: closed to visitors after large numbers of boats and swimmers damaged its coral reefs."],
          ["Which solution is mentioned in the passage?", "Limiting the number of visitors per day", ["Building more hotels", "Banning all boats", "Closing airports"], "Trong bài: some destinations have introduced tourist taxes or daily visitor limits."]
        ]
      }
    },
    {
      "id": "media", "group": 2, "grade": 12, "icon": "📺", "tag": "Writing Task 2",
      "title": "Truyền thông và quảng cáo", "en": "Media and advertising",
      "desc": "Tin tức, tin giả, quảng cáo nhắm vào trẻ em.",
      "words": [
        ["journalist", "nhà báo", "📰"],
        ["headline", "tiêu đề bài báo", "🗞️"],
        ["fake news", "tin giả", "🤥"],
        ["source", "nguồn tin", "🔎"],
        ["influencer", "người có ảnh hưởng trên mạng", "🤳"],
        ["commercial", "quảng cáo trên truyền hình, đài", "📻"],
        ["consumer", "người tiêu dùng", "🛍️"],
        ["persuade", "thuyết phục", "🗣️"],
        ["mislead", "gây hiểu lầm, đánh lừa", "🙈"],
        ["broadcast", "phát sóng", "📡"],
        ["reliable", "đáng tin cậy", "👍"],
        ["censorship", "sự kiểm duyệt", "🚫"]
      ],
      "grammar": [
        ["Collocation về truyền thông", "spread fake news, a reliable source, check the facts, target children, persuade consumers to buy, freedom of the press.", "Fake news spreads quickly on social media. | Always check the facts before you share a story."],
        ["Nêu hai quan điểm", "Dùng: Some people argue that …, while others believe that …; There are several reasons why …", "Some people argue that advertising is useful, while others believe it is harmful."]
      ],
      "quiz": [
        ["Fake news can ___ quickly on social media.", "spread", ["spreads", "spreading", "spreaded"], "Sau can là động từ nguyên mẫu; spread giữ nguyên ở mọi dạng."],
        ["It is important to get news from ___ sources.", "reliable", ["reliably", "reliance", "rely"], "Trước danh từ sources cần tính từ."],
        ["Advertisements often ___ children to ask for toys.", "persuade", ["persuasion", "persuasive", "persuading"], "Chủ ngữ số nhiều, hiện tại đơn: persuade."],
        ["Some adverts ___ consumers with false information.", "mislead", ["misleads", "misleading", "mislaid"], "Chủ ngữ số nhiều, hiện tại đơn: mislead."],
        ["The match will be ___ live on national TV.", "broadcast", ["broadcasting", "broadcasts", "broadcaster"], "Bị động: will be + V3; broadcast giữ nguyên."],
        ["Many young people follow ___ on social media.", "influencers", ["influential", "influenced", "influencing"], "Sau follow cần danh từ chỉ người: influencers."],
        ["Readers should always check the ___ of a story.", "source", ["sauce", "sort", "sore"], "source: nguồn tin."],
        ["Some governments control the media through ___.", "censorship", ["censor", "censored", "censoring"], "Sau through cần danh từ chỉ sự việc: censorship."]
      ],
      "sentences": [
        ["Fake news can spread faster than true stories.", "Tin giả có thể lan truyền nhanh hơn tin thật."],
        ["Journalists should report the facts fairly.", "Nhà báo nên đưa tin một cách công bằng."],
        ["Many advertisements are aimed at children.", "Nhiều quảng cáo nhắm vào trẻ em."],
        ["Influencers are paid to promote products online.", "Người có ảnh hưởng được trả tiền để quảng bá sản phẩm trên mạng."],
        ["The headline was misleading.", "Tiêu đề bài báo gây hiểu lầm."],
        ["Television is still an important source of news.", "Truyền hình vẫn là một nguồn tin quan trọng."]
      ],
      "transform": [
        ["People share false stories on social media.", "Viết lại với spread fake news", "People spread fake news on social media.", "Mọi người lan truyền tin giả trên mạng xã hội."],
        ["This website is not reliable.", "Viết lại bắt đầu bằng This is not a", "This is not a reliable website.", "Đây không phải là một trang web đáng tin cậy."],
        ["Advertisements make children ask for toys.", "Viết lại với persuade children to", "Advertisements persuade children to ask for toys.", "Quảng cáo thuyết phục trẻ em đòi mua đồ chơi."],
        ["They broadcast the news at seven every evening.", "Chuyển sang câu bị động", "The news is broadcast at seven every evening.", "Bản tin được phát sóng lúc bảy giờ mỗi tối."],
        ["Some people think advertising is useful. Others think it is harmful.", "Nối hai câu bằng while", "Some people think advertising is useful, while others think it is harmful. | While some people think advertising is useful, others think it is harmful.", "Một số người cho rằng quảng cáo có ích, trong khi số khác cho rằng nó có hại."]
      ],
      "extra": ["is", "are", "to", "by", "but"],
      "reading": {
        "title": "Advertising to children", "kind": "article",
        "text": [
          "Children today see thousands of advertisements every year, on television, on websites and in mobile games. Because young children often cannot tell the difference between advertising and entertainment, many experts believe they need special protection.",
          "Some countries have introduced strict rules. Sweden and Norway, for example, do not allow television advertisements aimed at children under 12. In the United Kingdom, adverts for food high in fat, sugar or salt cannot be shown during children's programmes.",
          "However, the internet has made such rules harder to enforce. Online, advertising is often mixed with other content. A video in which a popular influencer opens and plays with a new toy may look like entertainment, but the influencer may have been paid by the toy company.",
          "Many researchers say that the best solution is education. If children learn to recognise advertising and understand its purpose, they will be better able to make their own decisions as consumers."
        ],
        "questions": [
          ["Young children can always recognise an advertisement.", "False", ["True", "Not Given"], "Trong bài: young children often cannot tell the difference between advertising and entertainment."],
          ["Sweden does not allow TV adverts aimed at children under 12.", "True", ["False", "Not Given"], "Trong bài: Sweden and Norway … do not allow television advertisements aimed at children under 12."],
          ["Toy companies spend more on online adverts than on TV adverts.", "Not Given", ["True", "False"], "Bài không so sánh chi phí quảng cáo trên mạng và trên ti vi."],
          ["Why is it harder to control advertising online?", "Adverts are often mixed with other content.", ["Children do not use the internet.", "Online adverts are always free.", "Influencers never advertise toys."], "Trong bài: Online, advertising is often mixed with other content."],
          ["What solution do many researchers suggest?", "Teaching children about advertising", ["Banning the internet for children", "Paying influencers more", "Showing more adverts on TV"], "Trong bài: the best solution is education."]
        ]
      }
    },
    {
      "id": "service", "group": 1, "grade": 12, "icon": "🎧", "tag": "Part 2–7",
      "title": "Chăm sóc khách hàng", "en": "Customer service",
      "desc": "Khiếu nại, xin lỗi, bảo hành, đổi hàng.",
      "words": [
        ["complaint", "lời phàn nàn", "😠"],
        ["apologize", "xin lỗi", "🙇"],
        ["replacement", "hàng thay thế", "🔁"],
        ["warranty", "sự bảo hành", "🛡️"],
        ["inquiry", "câu hỏi, yêu cầu thông tin", "❓"],
        ["representative", "nhân viên đại diện", ""],
        ["satisfied", "hài lòng", "😊"],
        ["inconvenience", "sự bất tiện", ""],
        ["resolve", "giải quyết", ""],
        ["policy", "chính sách", "📜"],
        ["exchange", "đổi hàng", "🔄"],
        ["hotline", "đường dây nóng", "☎️"]
      ],
      "grammar": [
        ["Câu lịch sự khi xử lý khiếu nại", "We apologize for the inconvenience. · We will look into the matter. · Please accept our apologies. · I'm sorry to hear that.", "We apologize for any inconvenience this may cause. | I'm sorry to hear that your order was late."],
        ["Giới từ hay gặp", "apologize for, complain about, be satisfied with, under warranty, exchange … for …", "The camera is still under warranty. | She complained about the noise."]
      ],
      "quiz": [
        ["We apologize ___ the delay in delivering your order.", "for", ["about", "to", "with"], "apologize for something."],
        ["Most customers were ___ with the new service.", "satisfied", ["satisfying", "satisfy", "satisfaction"], "be satisfied with: hài lòng với."],
        ["Your laptop is still under ___, so the repair is free.", "warranty", ["warrant", "warranted", "warn"], "under warranty: còn bảo hành."],
        ["Please ask our customer service ___ if you need help.", "representative", ["represent", "representation", "represented"], "Sau customer service cần danh từ chỉ người: representative."],
        ["We are sorry for any ___ this may have caused.", "inconvenience", ["inconvenient", "inconveniently", "convenience"], "Sau any cần danh từ: inconvenience."],
        ["The problem was ___ within 24 hours.", "resolved", ["resolve", "resolution", "resolving"], "Bị động: was + V3."],
        ["You can ___ the shirt for a larger size.", "exchange", ["exchanging", "exchanged", "exchanges"], "Sau can là động từ nguyên mẫu."],
        ["We received a ___ about the noise from the kitchen.", "complaint", ["complain", "complained", "complaining"], "Sau a cần danh từ: complaint."]
      ],
      "sentences": [
        ["I'd like to make a complaint about my order.", "Tôi muốn khiếu nại về đơn hàng của mình."],
        ["We apologize for the inconvenience.", "Chúng tôi xin lỗi vì sự bất tiện."],
        ["The printer is still under warranty.", "Máy in vẫn còn bảo hành."],
        ["Can I exchange these shoes for a smaller size?", "Tôi có thể đổi đôi giày này lấy cỡ nhỏ hơn không?"],
        ["Please call our hotline for more information.", "Vui lòng gọi đường dây nóng để biết thêm thông tin."],
        ["Our goal is to keep every customer satisfied.", "Mục tiêu của chúng tôi là làm mọi khách hàng hài lòng."]
      ],
      "transform": [
        ["We are sorry that your order was late.", "Viết lại với apologize for the delay", "We apologize for the delay. | We apologize for the delay of your order.", "Chúng tôi xin lỗi vì sự chậm trễ."],
        ["The customer was happy with the service.", "Viết lại với satisfied with", "The customer was satisfied with the service.", "Khách hàng hài lòng với dịch vụ."],
        ["They solved the problem quickly.", "Chuyển sang câu bị động với resolved", "The problem was resolved quickly.", "Vấn đề đã được giải quyết nhanh chóng."],
        ["She said the room was too noisy.", "Viết lại với complained about the noise", "She complained about the noise in the room. | She complained about the noise.", "Cô ấy phàn nàn về tiếng ồn trong phòng."],
        ["The company will give you a new phone.", "Viết lại với send you a replacement", "The company will send you a replacement. | The company will send you a replacement phone.", "Công ty sẽ gửi cho bạn điện thoại thay thế."]
      ],
      "extra": ["for", "with", "about", "was", "to"],
      "reading": {
        "title": "Re: Broken coffee machine", "kind": "email",
        "text": [
          "Dear Ms Park,",
          "Thank you for contacting SmartHome Appliances, and we apologize for the problem with your coffee machine. I am sorry to hear that it stopped working only two weeks after you bought it.",
          "Because your machine is still under warranty, we can offer you two options. We can send a technician to repair it at your home free of charge, or you can return it to any of our stores and exchange it for a new one.",
          "If you choose a repair, please call our hotline to arrange a convenient time. A technician is usually available within three working days. If you prefer an exchange, please bring the machine and your receipt to the store.",
          "As an apology for the inconvenience, we have also added a 15 percent discount voucher to your customer account, which you can use on your next purchase.",
          "Kind regards, Daniel Lim, Customer Service Representative"
        ],
        "questions": [
          ["Why did Mr Lim write the email?", "To respond to a customer's complaint", ["To advertise a new coffee machine", "To ask for a payment", "To confirm a delivery date"], "Email trả lời khiếu nại về máy pha cà phê bị hỏng."],
          ["What is the problem with Ms Park's machine?", "It stopped working.", ["It was delivered late.", "It is the wrong colour.", "It was too expensive."], "Trong bài: it stopped working only two weeks after you bought it."],
          ["What must Ms Park bring if she wants an exchange?", "Her receipt", ["Her warranty card", "A discount voucher", "A letter from a technician"], "Trong bài: please bring the machine and your receipt to the store."],
          ["How soon is a technician usually available?", "Within three working days", ["On the same day", "Within two weeks", "Next month"], "Trong bài: A technician is usually available within three working days."],
          ["What has the company given Ms Park?", "A discount voucher", ["A free coffee machine", "Free coffee for a year", "A cash refund"], "Trong bài: we have also added a 15 percent discount voucher to your customer account."]
        ]
      }
    },
    {
      "id": "officetech", "group": 1, "grade": 12, "icon": "💻", "tag": "Part 3–7",
      "title": "Công nghệ văn phòng", "en": "Office technology",
      "desc": "Phần mềm, mật khẩu, sao lưu, hỗ trợ kỹ thuật.",
      "words": [
        ["software", "phần mềm", "💿"],
        ["install", "cài đặt", "⬇️"],
        ["update", "cập nhật", "🔃"],
        ["password", "mật khẩu", "🔑"],
        ["log in", "đăng nhập", ""],
        ["attachment", "tệp đính kèm", "📎"],
        ["back up", "sao lưu", "💾"],
        ["network", "mạng", "🌐"],
        ["technician", "kỹ thuật viên", "🧑‍🔧"],
        ["malfunction", "sự trục trặc", ""],
        ["upgrade", "nâng cấp", "⬆️"],
        ["IT department", "phòng công nghệ thông tin", ""]
      ],
      "grammar": [
        ["Cụm hay gặp về máy tính", "install software, update the system, back up files, log in to an account, reset a password, send an attachment.", "Please back up your files before the update. | I can't log in to my account."],
        ["Hướng dẫn và yêu cầu", "Dùng câu mệnh lệnh và please để hướng dẫn: Please save your work. · Make sure you … · Do not …", "Make sure you save your work before you leave. | Do not share your password with anyone."]
      ],
      "quiz": [
        ["Please ___ your files before the system update.", "back up", ["backing up", "backed up", "backup of"], "Sau Please là động từ nguyên mẫu: back up."],
        ["The new software will be ___ on all computers next week.", "installed", ["install", "installing", "installation"], "Bị động: will be + V3."],
        ["I can't log ___ to my email account.", "in", ["on", "at", "up"], "log in to: đăng nhập vào."],
        ["Please do not share your ___ with anyone.", "password", ["pass", "passing", "passport"], "password: mật khẩu."],
        ["The file was too large to send as an ___.", "attachment", ["attach", "attached", "attaching"], "Sau an cần danh từ: attachment."],
        ["If the printer does not work, contact a ___.", "technician", ["technical", "technique", "technology"], "Sau a cần danh từ chỉ người: technician."],
        ["The company plans to ___ its computer network.", "upgrade", ["upgrading", "upgraded", "upgrades"], "plan to + động từ nguyên mẫu."],
        ["The meeting was delayed because of a ___ in the projector.", "malfunction", ["malfunctioned", "malfunctioning", "function"], "Sau a cần danh từ: malfunction (sự trục trặc)."]
      ],
      "sentences": [
        ["Please restart your computer after the update.", "Vui lòng khởi động lại máy tính sau khi cập nhật."],
        ["I forgot my password again.", "Tôi lại quên mật khẩu rồi."],
        ["The report is in the attachment.", "Báo cáo nằm trong tệp đính kèm."],
        ["The network will be down for two hours tonight.", "Tối nay mạng sẽ ngừng hoạt động hai giờ."],
        ["Contact the IT department if you need help.", "Liên hệ phòng công nghệ thông tin nếu bạn cần giúp."],
        ["We need to upgrade our software.", "Chúng ta cần nâng cấp phần mềm."]
      ],
      "transform": [
        ["The technician will install the new program tomorrow.", "Chuyển sang câu bị động", "The new program will be installed tomorrow. | The new program will be installed by the technician tomorrow. | The new program will be installed tomorrow by the technician.", "Chương trình mới sẽ được cài đặt vào ngày mai."],
        ["Make a copy of your files every week.", "Viết lại với back up", "Back up your files every week.", "Hãy sao lưu tệp mỗi tuần."],
        ["I sent the file with the email.", "Viết lại với as an attachment", "I sent the file as an attachment.", "Tôi đã gửi tệp dưới dạng tệp đính kèm."],
        ["Remember to save your work.", "Viết lại bắt đầu bằng Make sure you", "Make sure you save your work.", "Nhớ lưu công việc của bạn."],
        ["You must not tell anyone your password.", "Viết lại bắt đầu bằng Do not share", "Do not share your password with anyone.", "Không chia sẻ mật khẩu với bất kỳ ai."]
      ],
      "extra": ["be", "by", "to", "with", "on"],
      "reading": {
        "title": "Network upgrade this weekend", "kind": "notice",
        "text": [
          "To all staff, from the IT Department",
          "Our computer network will be upgraded this weekend. The work will begin at 8 p.m. on Friday and should be completed by 6 a.m. on Monday. During this time, email, the company website and the shared drive will not be available.",
          "Before you leave on Friday, please save all your work and back up any important files to the shared drive. Laptops should be left in the office and connected to the network so that new security software can be installed automatically.",
          "When you log in on Monday morning, you will be asked to create a new password. Your new password must contain at least 12 characters, including a number and a symbol.",
          "If you experience any problems after the upgrade, please contact the IT help desk on extension 300."
        ],
        "questions": [
          ["What is the notice mainly about?", "A network upgrade", ["A new office building", "A training course", "A holiday schedule"], "Thông báo về việc nâng cấp mạng máy tính cuối tuần."],
          ["Which service will be unavailable during the work?", "Email", ["The telephone system", "The staff canteen", "The car park"], "Trong bài: email, the company website and the shared drive will not be available."],
          ["What should employees do with their laptops?", "Leave them in the office", ["Take them home", "Return them to the IT department", "Turn them off"], "Trong bài: Laptops should be left in the office and connected to the network."],
          ["What will employees have to do on Monday?", "Create a new password", ["Install new software", "Attend a meeting", "Back up their files"], "Trong bài: you will be asked to create a new password."],
          ["What must a new password include?", "A number and a symbol", ["The employee's name", "Exactly 12 letters", "Only capital letters"], "Trong bài: at least 12 characters, including a number and a symbol."]
        ]
      }
    },
    {
      "id": "family", "group": 2, "grade": 12, "icon": "👪", "tag": "Speaking, Writing Task 2",
      "title": "Gia đình và xã hội", "en": "Family and society",
      "desc": "Khoảng cách thế hệ, dân số già, nuôi dạy con cái.",
      "words": [
        ["generation gap", "khoảng cách thế hệ", "👵"],
        ["nuclear family", "gia đình hạt nhân", "👪"],
        ["extended family", "đại gia đình", ""],
        ["upbringing", "sự nuôi dạy", ""],
        ["elderly", "cao tuổi", "🧓"],
        ["ageing population", "dân số già hóa", ""],
        ["childcare", "việc chăm sóc trẻ", "🧒"],
        ["household chores", "việc nhà", "🧹"],
        ["independent", "tự lập", "🚶‍♀️"],
        ["role model", "tấm gương", "🌟"],
        ["bond", "mối gắn kết", "🫶"],
        ["single-parent family", "gia đình đơn thân", ""]
      ],
      "grammar": [
        ["Collocation về gia đình", "a close-knit family, share household chores, bring up children, take care of elderly parents, a strong bond, the generation gap.", "My grandparents brought up five children. | Many young couples share household chores."],
        ["Nêu xu hướng xã hội", "Dùng các cấu trúc: There has been a rise in …; More and more people …; It is becoming increasingly common to …", "More and more young adults live alone. | It is becoming increasingly common to have children later in life."]
      ],
      "quiz": [
        ["My grandparents brought ___ six children.", "up", ["out", "on", "over"], "bring up: nuôi dạy."],
        ["In many countries, the population is ___ quickly.", "ageing", ["aged", "age", "ages"], "Hiện tại tiếp diễn: is ageing (đang già hóa)."],
        ["Parents are the first role ___ for their children.", "models", ["modelling", "modelled", "modeller"], "role model: tấm gương."],
        ["The generation ___ can cause misunderstandings between parents and teenagers.", "gap", ["space", "hole", "distance"], "generation gap: khoảng cách thế hệ."],
        ["Children should help with household ___.", "chores", ["works", "housing", "homes"], "household chores: việc nhà."],
        ["Young people today want to become ___ at an earlier age.", "independent", ["independence", "independently", "depend"], "become + tính từ: independent."],
        ["An ___ family includes grandparents, aunts, uncles and cousins.", "extended", ["extend", "extensive", "extension"], "extended family: đại gia đình."],
        ["There has been a rise ___ the number of single-parent families.", "in", ["of", "on", "at"], "a rise in: sự gia tăng về."]
      ],
      "sentences": [
        ["I grew up in an extended family.", "Tôi lớn lên trong một đại gia đình."],
        ["There is a strong bond between my mother and me.", "Giữa mẹ và tôi có sự gắn bó bền chặt."],
        ["Many elderly people live alone.", "Nhiều người cao tuổi sống một mình."],
        ["Childcare is very expensive in big cities.", "Chi phí trông trẻ ở các thành phố lớn rất đắt."],
        ["Children should learn to be independent.", "Trẻ em nên học cách tự lập."],
        ["My father is my role model.", "Bố là tấm gương của tôi."]
      ],
      "transform": [
        ["My grandmother raised me.", "Viết lại với brought up", "My grandmother brought me up. | I was brought up by my grandmother.", "Bà đã nuôi dạy tôi."],
        ["The number of old people in our country is growing.", "Viết lại bắt đầu bằng We have an", "We have an ageing population.", "Dân số của chúng ta đang già hóa."],
        ["Everyone in my family does the housework together.", "Viết lại với share household chores", "Everyone in my family shares household chores. | We share household chores in my family.", "Mọi người trong gia đình tôi cùng làm việc nhà."],
        ["More single-parent families exist now.", "Viết lại bắt đầu bằng There has been a rise in", "There has been a rise in the number of single-parent families. | There has been a rise in single-parent families.", "Số gia đình đơn thân đã tăng lên."],
        ["Parents and teenagers often think differently.", "Viết lại bắt đầu bằng There is a generation gap", "There is a generation gap between parents and teenagers. | There is often a generation gap between parents and teenagers.", "Giữa cha mẹ và con tuổi teen thường có khoảng cách thế hệ."]
      ],
      "extra": ["up", "in", "is", "of", "by"],
      "reading": {
        "title": "Three generations under one roof", "kind": "article",
        "text": [
          "In the past, it was common in many countries for three generations to live under one roof. Children grew up with their grandparents nearby, and elderly people were cared for by their own families. In recent decades, however, the nuclear family has become the most common type of household in many cities.",
          "There are several reasons for this change. Young people often move away from their home towns to study or work, and homes in big cities are usually too small for large families. In addition, many young couples value their privacy and independence.",
          "Nevertheless, multigenerational living has some clear advantages. Grandparents can help with childcare, which allows both parents to work. At the same time, older people are less likely to feel lonely when they live with their children and grandchildren.",
          "As populations age, some governments now offer tax benefits to families who look after elderly relatives at home. It remains to be seen whether such policies will change how people choose to live."
        ],
        "questions": [
          ["In the past, it was unusual for three generations to live together.", "False", ["True", "Not Given"], "Bài nói ngược lại: In the past, it was common … for three generations to live under one roof."],
          ["Homes in big cities are often too small for large families.", "True", ["False", "Not Given"], "Trong bài: homes in big cities are usually too small for large families."],
          ["Most grandparents prefer to live alone.", "Not Given", ["True", "False"], "Bài không nói ông bà thích sống một mình hay không."],
          ["According to the passage, how can grandparents help?", "By taking care of children", ["By paying for housing", "By finding jobs for parents", "By teaching at schools"], "Trong bài: Grandparents can help with childcare."],
          ["What have some governments done?", "Offered tax benefits to families caring for elderly relatives", ["Built more large houses", "Stopped people from living alone", "Paid grandparents to move to cities"], "Trong bài: offer tax benefits to families who look after elderly relatives at home."]
        ]
      }
    },
    {
      "id": "culture", "group": 2, "grade": 12, "icon": "🎭", "tag": "Speaking, Writing Task 2",
      "title": "Văn hóa và nghệ thuật", "en": "Culture and the arts",
      "desc": "Truyền thống, bảo tàng, nghệ thuật và toàn cầu hóa.",
      "words": [
        ["tradition", "truyền thống", "🏮"],
        ["cultural identity", "bản sắc văn hóa", ""],
        ["museum", "bảo tàng", "🏺"],
        ["exhibition", "cuộc triển lãm", "🖼️"],
        ["performance", "buổi biểu diễn", "🎻"],
        ["artist", "nghệ sĩ", "🎨"],
        ["craft", "nghề thủ công", "🧶"],
        ["globalisation", "toàn cầu hóa", "🌍"],
        ["preserve", "bảo tồn", ""],
        ["folk music", "nhạc dân gian", "🪕"],
        ["funding", "nguồn kinh phí", "💶"],
        ["admission fee", "phí vào cửa", "🎟️"]
      ],
      "grammar": [
        ["Collocation về văn hóa", "preserve traditions, cultural identity, a sense of belonging, government funding, free admission, traditional crafts.", "It is important to preserve traditional crafts. | Globalisation may weaken cultural identity."],
        ["Nhượng bộ và đối lập", "Dùng although, while, despite để thừa nhận ý kiến trái chiều trước khi nêu quan điểm của mình.", "Although museums are expensive to run, they should be free. | While some people prefer modern music, others love folk songs."]
      ],
      "quiz": [
        ["It is important to ___ traditional festivals.", "preserve", ["preservation", "preserved", "preserving"], "to + động từ nguyên mẫu."],
        ["The museum is holding an ___ of modern art.", "exhibition", ["exhibited", "exhibiting", "exhibitor"], "Sau an cần danh từ chỉ sự kiện: exhibition."],
        ["Many people believe that museums should offer free ___.", "admission", ["admit", "admitted", "admissible"], "free admission: vào cửa miễn phí."],
        ["Globalisation can threaten local cultural ___.", "identity", ["identify", "identical", "identification"], "cultural identity: bản sắc văn hóa."],
        ["The government should provide more ___ for the arts.", "funding", ["funded", "fundamental", "fundraiser"], "provide funding for: cấp kinh phí cho."],
        ["Traditional ___ such as pottery and weaving are disappearing.", "crafts", ["craft's", "crafty", "crafted"], "Danh từ số nhiều: crafts."],
        ["The concert included a ___ by a famous violinist.", "performance", ["perform", "performer", "performed"], "Sau a cần danh từ chỉ sự việc: performance."],
        ["___ many young people prefer pop music, folk music is still popular in rural areas.", "Although", ["Despite", "However", "Because"], "Although + mệnh đề."]
      ],
      "sentences": [
        ["Tet is the most important tradition in Viet Nam.", "Tết là truyền thống quan trọng nhất ở Việt Nam."],
        ["The exhibition attracted thousands of visitors.", "Cuộc triển lãm thu hút hàng nghìn khách tham quan."],
        ["Many traditional crafts are disappearing.", "Nhiều nghề thủ công truyền thống đang mai một."],
        ["Museums help us understand our history.", "Bảo tàng giúp chúng ta hiểu lịch sử của mình."],
        ["The government should support local artists.", "Chính phủ nên hỗ trợ các nghệ sĩ địa phương."],
        ["Folk music is part of our cultural identity.", "Nhạc dân gian là một phần bản sắc văn hóa của chúng ta."]
      ],
      "transform": [
        ["We must protect our traditions.", "Viết lại với preserve", "We must preserve our traditions.", "Chúng ta phải bảo tồn truyền thống."],
        ["You don't have to pay to enter the museum.", "Viết lại bắt đầu bằng The museum offers free", "The museum offers free admission.", "Bảo tàng cho vào cửa miễn phí."],
        ["Museums are expensive to run. They should be free.", "Nối hai câu bằng Although", "Although museums are expensive to run, they should be free.", "Mặc dù bảo tàng tốn kém để vận hành, chúng nên miễn phí."],
        ["The government gives money to the arts.", "Viết lại với provides funding for", "The government provides funding for the arts.", "Chính phủ cấp kinh phí cho nghệ thuật."],
        ["A famous artist painted this picture.", "Chuyển sang câu bị động", "This picture was painted by a famous artist.", "Bức tranh này do một họa sĩ nổi tiếng vẽ."]
      ],
      "extra": ["is", "was", "by", "for", "despite"],
      "reading": {
        "title": "Should museums be free?", "kind": "article",
        "text": [
          "In the United Kingdom, most national museums, such as the British Museum and the Natural History Museum, have been free to enter since 2001. After admission fees were removed, the number of visitors to these museums rose significantly.",
          "Supporters of free admission argue that culture should be available to everyone, not only to those who can afford a ticket. They also point out that museums play an important role in education, as schools regularly bring students to see exhibitions.",
          "On the other hand, museums are expensive to run. Buildings must be maintained, valuable objects must be protected, and staff must be paid. Without ticket income, museums depend heavily on government funding and private donations, which can be reduced when the economy is weak.",
          "Some museums have found a middle way. Entry to the main collection is free, but visitors pay for special exhibitions or are invited to make a voluntary donation."
        ],
        "questions": [
          ["Most national museums in the UK have been free since 2001.", "True", ["False", "Not Given"], "Trong bài: most national museums … have been free to enter since 2001."],
          ["Visitor numbers fell after admission fees were removed.", "False", ["True", "Not Given"], "Bài nói ngược lại: the number of visitors … rose significantly."],
          ["The British Museum is the most visited museum in the world.", "Not Given", ["True", "False"], "Bài không so sánh lượng khách với các bảo tàng khác trên thế giới."],
          ["Why are museums expensive to run?", "They must maintain buildings and pay staff.", ["They must build new schools.", "They must buy tickets for students.", "They must travel abroad."], "Trong bài: Buildings must be maintained … and staff must be paid."],
          ["What is the \"middle way\" mentioned in the passage?", "A free main collection with paid special exhibitions", ["Opening only at weekends", "Closing some museums", "Charging only foreign visitors"], "Trong bài: Entry to the main collection is free, but visitors pay for special exhibitions."]
        ]
      }
    },
    {
      "id": "pvwork", "group": 3, "grade": 12, "icon": "🧰", "tag": "TOEIC Part 5–7",
      "title": "Phrasal verbs công sở", "en": "Phrasal verbs at work",
      "desc": "set up, carry out, put off, call off, fill in, turn down…",
      "words": [
        ["set up", "thành lập, thiết lập", "🏗️"],
        ["carry out", "tiến hành, thực hiện", ""],
        ["put off", "trì hoãn", "⏸️"],
        ["call off", "hủy bỏ", "🚫"],
        ["fill in", "điền (vào mẫu đơn)", "📝"],
        ["hand in", "nộp", "📤"],
        ["look into", "xem xét, điều tra", "🔍"],
        ["take over", "tiếp quản", ""],
        ["run out of", "hết, cạn", ""],
        ["follow up", "liên hệ lại, theo dõi tiếp", ""],
        ["sign up", "đăng ký", "✍️"],
        ["turn down", "từ chối", "👎"]
      ],
      "grammar": [
        ["Phrasal verb là gì", "Phrasal verb là động từ đi với giới từ hoặc trạng từ, tạo thành nghĩa mới. Nhiều câu TOEIC Part 5 kiểm tra việc chọn đúng từ đi sau động từ.", "The meeting was put off until Friday. | Please fill in this form."],
        ["Vị trí tân ngữ", "Với nhiều phrasal verb, tân ngữ là danh từ có thể đứng giữa hoặc sau (fill in the form, fill the form in). Nếu tân ngữ là đại từ thì phải đứng giữa: fill it in.", "Please hand in your report. | Please hand it in by Monday."]
      ],
      "quiz": [
        ["Please fill ___ this application form.", "in", ["on", "at", "over"], "fill in: điền vào."],
        ["The company plans to set ___ a new office in Da Nang.", "up", ["on", "in", "off"], "set up: thành lập."],
        ["We have run ___ of paper. Can you order some more?", "out", ["off", "over", "away"], "run out of: hết."],
        ["The outdoor concert was called ___ because of the storm.", "off", ["on", "up", "out"], "call off: hủy bỏ."],
        ["Our team will carry ___ a survey next month.", "out", ["on", "off", "over"], "carry out: tiến hành."],
        ["She turned ___ the job offer because the salary was too low.", "down", ["off", "out", "over"], "turn down: từ chối."],
        ["The manager promised to look ___ the complaint.", "into", ["after", "for", "up"], "look into: xem xét, điều tra."],
        ["Please hand ___ your reports before Friday.", "in", ["up", "on", "off"], "hand in: nộp."]
      ],
      "sentences": [
        ["The meeting has been put off until next week.", "Cuộc họp đã được hoãn đến tuần sau."],
        ["Please fill in your name and address.", "Vui lòng điền tên và địa chỉ của bạn."],
        ["We need to carry out more tests.", "Chúng ta cần tiến hành thêm các bài kiểm tra."],
        ["Ms Tran will take over as manager next month.", "Chị Trần sẽ tiếp quản vị trí quản lý vào tháng sau."],
        ["I'll follow up with the client tomorrow.", "Ngày mai tôi sẽ liên hệ lại với khách hàng."],
        ["Many employees signed up for the training course.", "Nhiều nhân viên đã đăng ký khóa đào tạo."]
      ],
      "transform": [
        ["They postponed the conference.", "Viết lại với put off", "They put off the conference. | They put the conference off.", "Họ đã hoãn hội nghị."],
        ["The company was established in 2010.", "Viết lại với was set up", "The company was set up in 2010.", "Công ty được thành lập năm 2010."],
        ["We have no more printer ink.", "Viết lại với have run out of", "We have run out of printer ink.", "Chúng tôi hết mực in rồi."],
        ["She refused the offer.", "Viết lại với turned down", "She turned down the offer. | She turned the offer down.", "Cô ấy đã từ chối lời đề nghị."],
        ["The police will investigate the problem.", "Viết lại với look into", "The police will look into the problem.", "Cảnh sát sẽ điều tra vấn đề."]
      ],
      "extra": ["up", "off", "in", "out", "on"]
    },
    {
      "id": "pvdaily", "group": 3, "grade": 12, "icon": "🔌", "tag": "Speaking, Part 1–4",
      "title": "Phrasal verbs thông dụng", "en": "Everyday phrasal verbs",
      "desc": "get up, look after, give up, find out, pick up, put on…",
      "words": [
        ["get up", "thức dậy", "🌅"],
        ["look after", "chăm sóc", "🧸"],
        ["look for", "tìm kiếm", "🔦"],
        ["give up", "từ bỏ, bỏ cuộc", "🏳️"],
        ["find out", "phát hiện ra, tìm hiểu", "💡"],
        ["turn on", "bật", "🔛"],
        ["turn off", "tắt", "📴"],
        ["pick up", "nhặt lên; đón", "🚗"],
        ["grow up", "lớn lên", "🌱"],
        ["come back", "quay lại", "🔙"],
        ["take off", "cất cánh; cởi ra", "🛫"],
        ["put on", "mặc vào, đeo vào", "🧥"]
      ],
      "grammar": [
        ["Học cả cụm", "Nghĩa của phrasal verb thường khác hẳn động từ gốc: give up là từ bỏ, look after là chăm sóc. Hãy học cả cụm cùng một câu ví dụ.", "She gave up sugar last year. | Who looks after your cat?"],
        ["Một cụm, nhiều nghĩa", "Một số cụm có nhiều nghĩa tùy ngữ cảnh: take off là cất cánh hoặc cởi ra; pick up là nhặt lên hoặc đón ai.", "The plane took off at six. | Take off your shoes, please."]
      ],
      "quiz": [
        ["Can you ___ after my dog this weekend?", "look", ["take", "get", "give"], "look after: chăm sóc."],
        ["I usually get ___ at six o'clock.", "up", ["on", "off", "out"], "get up: thức dậy."],
        ["Don't give ___! You can do it.", "up", ["off", "on", "away"], "give up: bỏ cuộc."],
        ["Please turn ___ the lights when you leave the room.", "off", ["on", "up", "in"], "turn off: tắt."],
        ["I'm looking ___ my keys. Have you seen them?", "for", ["after", "at", "up"], "look for: tìm."],
        ["She grew ___ in a small village.", "up", ["on", "out", "off"], "grow up: lớn lên."],
        ["What time does the plane take ___?", "off", ["on", "up", "out"], "take off: cất cánh."],
        ["It's cold outside. Put ___ your coat.", "on", ["off", "up", "in"], "put on: mặc vào."]
      ],
      "sentences": [
        ["I get up at six every morning.", "Tôi dậy lúc sáu giờ mỗi sáng."],
        ["My grandmother looks after my little brother.", "Bà tôi chăm sóc em trai tôi."],
        ["Could you pick me up after school?", "Bạn có thể đón tôi sau giờ học không?"],
        ["I want to find out more about this course.", "Tôi muốn tìm hiểu thêm về khóa học này."],
        ["He never gives up.", "Anh ấy không bao giờ bỏ cuộc."],
        ["Please turn off your phone during the film.", "Vui lòng tắt điện thoại khi xem phim."]
      ],
      "transform": [
        ["Who takes care of your cat?", "Viết lại với looks after", "Who looks after your cat?", "Ai chăm sóc con mèo của bạn?"],
        ["She stopped eating sugar.", "Viết lại với gave up", "She gave up eating sugar. | She gave up sugar.", "Cô ấy đã bỏ ăn đường."],
        ["I'm trying to find my glasses.", "Viết lại với looking for", "I'm looking for my glasses.", "Tôi đang tìm kính."],
        ["Wear your jacket.", "Viết lại với Put on", "Put on your jacket. | Put your jacket on.", "Mặc áo khoác vào."],
        ["I will return in ten minutes.", "Viết lại với come back", "I will come back in ten minutes.", "Mười phút nữa tôi sẽ quay lại."]
      ],
      "extra": ["up", "off", "on", "for", "after"]
    },
    {
      "id": "colloc", "group": 3, "grade": 12, "icon": "🧱", "tag": "TOEIC, IELTS Writing",
      "title": "Collocation: make, do, take, have", "en": "Common collocations",
      "desc": "make a decision, do research, take a break, pay attention…",
      "words": [
        ["make a decision", "đưa ra quyết định", "🤔"],
        ["make a mistake", "mắc lỗi", "✖️"],
        ["make progress", "tiến bộ", "📶"],
        ["do homework", "làm bài tập về nhà", "📚"],
        ["do research", "nghiên cứu", "🔬"],
        ["do business", "kinh doanh, làm ăn", "💼"],
        ["take a break", "nghỉ giải lao", "☕"],
        ["take notes", "ghi chép", "🗒️"],
        ["take part in", "tham gia", "🙋"],
        ["have a meeting", "họp", "👥"],
        ["have fun", "vui vẻ", "🎉"],
        ["pay attention", "chú ý", "👀"]
      ],
      "grammar": [
        ["make hay do", "make thường dùng khi tạo ra điều gì mới (make a plan, make a decision). do dùng cho công việc, nhiệm vụ nói chung (do homework, do the housework, do research).", "She made a big decision. | I do my homework after dinner."],
        ["Học theo cụm", "Collocation là những từ hay đi với nhau. Nói make homework hay do a decision là sai dù người nghe vẫn hiểu. Hãy học cả cụm thay vì từng từ.", "take a break | have a meeting | pay attention"]
      ],
      "quiz": [
        ["I ___ a mistake in my report.", "made", ["did", "took", "had"], "make a mistake."],
        ["Have you ___ your homework yet?", "done", ["made", "taken", "had"], "do homework."],
        ["Let's ___ a short break.", "take", ["make", "do", "get"], "take a break."],
        ["Scientists are ___ research on the new virus.", "doing", ["making", "taking", "having"], "do research."],
        ["She has ___ great progress in English this year.", "made", ["done", "taken", "had"], "make progress."],
        ["All students must ___ part in the competition.", "take", ["make", "do", "have"], "take part in."],
        ["Please ___ attention to the safety instructions.", "pay", ["make", "do", "take"], "pay attention to."],
        ["We ___ a meeting every Monday morning.", "have", ["make", "do", "take"], "have a meeting."]
      ],
      "sentences": [
        ["It's time to make a decision.", "Đã đến lúc đưa ra quyết định."],
        ["Everyone makes mistakes.", "Ai cũng mắc lỗi."],
        ["My company does business with Japan.", "Công ty tôi làm ăn với Nhật Bản."],
        ["Students should take notes in class.", "Học sinh nên ghi chép trong lớp."],
        ["We had a lot of fun at the party.", "Chúng tôi đã rất vui ở bữa tiệc."],
        ["You are not paying attention.", "Bạn không chú ý gì cả."]
      ],
      "transform": [
        ["I decided quickly.", "Viết lại với made a decision", "I made a decision quickly. | I made a quick decision.", "Tôi đã quyết định nhanh."],
        ["She participated in the race.", "Viết lại với took part in", "She took part in the race.", "Cô ấy đã tham gia cuộc đua."],
        ["Let's rest for ten minutes.", "Viết lại với take a break", "Let's take a break for ten minutes.", "Chúng ta nghỉ mười phút nhé."],
        ["His English has improved a lot.", "Viết lại bắt đầu bằng He has made", "He has made a lot of progress in English.", "Tiếng Anh của cậu ấy tiến bộ nhiều."],
        ["Listen carefully to the teacher.", "Viết lại với Pay attention to", "Pay attention to the teacher.", "Hãy chú ý nghe giáo viên."]
      ],
      "extra": ["make", "do", "take", "have", "get"]
    },
    {
      "id": "idioms", "group": 3, "grade": 12, "icon": "💬", "tag": "IELTS Speaking",
      "title": "Idioms cho IELTS Speaking", "en": "Idioms for speaking",
      "desc": "a piece of cake, once in a blue moon, under the weather…",
      "words": [
        ["a piece of cake", "dễ như ăn bánh", "🍰"],
        ["once in a blue moon", "năm thì mười họa, rất hiếm khi", "🌕"],
        ["under the weather", "hơi mệt, không khỏe", "🤒"],
        ["break the ice", "phá vỡ sự ngại ngùng", "🧊"],
        ["hit the books", "học hành chăm chỉ", "📖"],
        ["on cloud nine", "vui sướng tột độ", "☁️"],
        ["cost an arm and a leg", "đắt cắt cổ", "💸"],
        ["in the long run", "về lâu dài", "⏳"],
        ["keep in touch", "giữ liên lạc", "📱"],
        ["make ends meet", "xoay xở đủ sống", "🪙"],
        ["a big fan of", "rất thích (ai, cái gì)", "⭐"],
        ["from time to time", "thỉnh thoảng", "🔁"]
      ],
      "grammar": [
        ["Dùng idiom sao cho tự nhiên", "Idiom giúp câu nói tự nhiên hơn trong IELTS Speaking, nhưng chỉ nên dùng một vài idiom đúng ngữ cảnh. Dùng quá nhiều hoặc sai ngữ cảnh sẽ không được điểm cao.", "The test was a piece of cake. | I go to the cinema once in a blue moon."],
        ["Không dùng trong bài viết học thuật", "Idiom hợp với văn nói và văn thân mật. Trong IELTS Writing Task 2 nên dùng từ trang trọng hơn, ví dụ very expensive thay cho cost an arm and a leg.", "A new car costs an arm and a leg. | A new car is very expensive."]
      ],
      "quiz": [
        ["The exam was a piece of ___. Everyone passed.", "cake", ["bread", "pie", "candy"], "a piece of cake: rất dễ."],
        ["I only eat fast food once in a blue ___.", "moon", ["sky", "sun", "star"], "once in a blue moon: rất hiếm khi."],
        ["I'm feeling a bit under the ___ today, so I'll stay at home.", "weather", ["rain", "cloud", "storm"], "under the weather: hơi mệt."],
        ["He told a joke to break the ___.", "ice", ["snow", "window", "glass"], "break the ice: phá vỡ sự ngại ngùng."],
        ["That designer bag cost an arm and a ___.", "leg", ["foot", "hand", "head"], "cost an arm and a leg: rất đắt."],
        ["She was on cloud ___ after winning the prize.", "nine", ["seven", "ten", "one"], "on cloud nine: vui sướng tột độ."],
        ["Let's keep in ___ after the course ends.", "touch", ["talk", "call", "line"], "keep in touch: giữ liên lạc."],
        ["Exercise may be hard, but in the long ___ it will make you healthier.", "run", ["way", "time", "walk"], "in the long run: về lâu dài."]
      ],
      "sentences": [
        ["Cooking rice is a piece of cake.", "Nấu cơm dễ như ăn bánh."],
        ["I see my cousins once in a blue moon.", "Năm thì mười họa tôi mới gặp anh chị em họ."],
        ["Many families work hard to make ends meet.", "Nhiều gia đình làm việc vất vả để đủ sống."],
        ["I'm a big fan of Korean films.", "Tôi rất thích phim Hàn Quốc."],
        ["I have to hit the books before the exam.", "Tôi phải học hành chăm chỉ trước kỳ thi."],
        ["We go camping from time to time.", "Thỉnh thoảng chúng tôi đi cắm trại."]
      ],
      "transform": [
        ["The test was very easy.", "Viết lại với a piece of cake", "The test was a piece of cake.", "Bài kiểm tra dễ như ăn bánh."],
        ["I rarely go to the cinema.", "Viết lại với once in a blue moon", "I go to the cinema once in a blue moon.", "Tôi rất hiếm khi đi xem phim."],
        ["That phone is extremely expensive.", "Viết lại với costs an arm and a leg", "That phone costs an arm and a leg.", "Chiếc điện thoại đó đắt cắt cổ."],
        ["I feel a little ill today.", "Viết lại với under the weather", "I feel a little under the weather today. | I feel under the weather today. | I'm feeling a bit under the weather today.", "Hôm nay tôi hơi mệt."],
        ["I really like football.", "Viết lại với a big fan of", "I'm a big fan of football.", "Tôi rất thích bóng đá."]
      ],
      "extra": ["very", "is", "of", "the", "a"]
    },
    {
      "id": "lv0fam", "group": 4, "grade": 12, "icon": "👪", "tag": "TOEIC Part 1–2",
      "title": "Gia đình và các mối quan hệ", "en": "Family and relationships",
      "desc": "Người thân, họ hàng và cách nói về gia đình.",
      "words": [
        ["parent", "bố hoặc mẹ", "👪"],
        ["brother", "anh trai hoặc em trai", "👦"],
        ["sister", "chị gái hoặc em gái", "👧"],
        ["husband", "chồng", "🤵"],
        ["wife", "vợ", "👰"],
        ["cousin", "anh chị em họ", ""],
        ["grandmother", "bà", "👵"],
        ["grandfather", "ông", "👴"],
        ["neighbor", "hàng xóm", "🏘️"],
        ["relative", "họ hàng, người thân", ""]
      ],
      "grammar": [
        ["Tính từ sở hữu", "My, your, his, her, our, their đứng trước danh từ và không đi kèm a hay the. Ví dụ: my brother, không phải a my brother.", "My brother is a doctor. | Their parents live in Hue."],
        ["Hỏi về gia đình", "Các câu hỏi thông dụng: Do you have any brothers? hoặc How many sisters do you have?", "Do you have any brothers or sisters? | How many children do they have?"]
      ],
      "quiz": [
        ["My ___ is a teacher at a high school in Hanoi.", "mother", ["mothers", "motherly", "mothering"], "Sau mạo từ my cần danh từ số ít chỉ người."],
        ["She has two ___, and both of them are doctors.", "brothers", ["brother's", "brotherly", "brotherhood"], "Có two nên cần danh từ số nhiều: brothers."],
        ["Our ___ invited us to a barbecue last Sunday.", "neighbors", ["neighborhood", "neighborly", "neighbored"], "Chủ ngữ chỉ người nên dùng neighbors (hàng xóm)."],
        ["My grandparents ___ in a small village near the river.", "live", ["lives", "living", "lived"], "Chủ ngữ số nhiều nên động từ không thêm -s, dùng hiện tại đơn."],
        ["Her ___ works as a nurse in the city hospital.", "husband", ["husbands", "husbandry", "husbanded"], "Sau Her cần danh từ số ít chỉ người: husband (chồng)."],
        ["Do you ___ any brothers or sisters?", "have", ["has", "having", "had"], "Chủ ngữ you dùng have, câu hỏi đã có do."],
        ["I usually visit my ___ on weekends.", "grandparents", ["grandchildren", "grandsons", "godparents"], "Grandparents là ông bà; grandchildren là cháu."]
      ],
      "sentences": [
        ["My sister lives in Ho Chi Minh City with her husband.", "Chị gái tôi sống ở TP Hồ Chí Minh cùng chồng."],
        ["Our grandparents celebrate their wedding anniversary every June.", "Ông bà chúng tôi kỷ niệm ngày cưới vào mỗi tháng Sáu."],
        ["My relative is a famous singer in our hometown.", "Người họ hàng của tôi là ca sĩ nổi tiếng ở quê chúng tôi."],
        ["Our neighbors often help us when we need something.", "Hàng xóm thường giúp chúng tôi khi chúng tôi cần gì đó."],
        ["My parents have two children, my brother and me.", "Bố mẹ tôi có hai người con là anh trai tôi và tôi."]
      ],
      "transform": [
        ["My brother is a teacher.", "Chuyển sang câu hỏi Yes/No với your", "Is your brother a teacher?", "Anh trai bạn có phải là giáo viên không?"],
        ["She has a brother.", "Chuyển sang câu phủ định", "She does not have a brother. | She doesn't have a brother.", "Cô ấy không có anh trai."],
        ["My parents live in Hue.", "Chuyển sang câu hỏi Wh- về nơi ở", "Where do your parents live?", "Bố mẹ bạn sống ở đâu?"],
        ["Tom is my cousin.", "Viết lại: Tom và tôi là anh em họ", "Tom and I are cousins.", "Tom và tôi là anh em họ."]
      ],
      "extra": ["family", "home", "very", "the", "a"]
    },
    {
      "id": "lv0time", "group": 4, "grade": 12, "icon": "🕒", "tag": "TOEIC Part 1–2",
      "title": "Thời gian và ngày tháng", "en": "Time and dates",
      "desc": "Ngày trong tuần, tháng, giờ giấc và cách hẹn lịch.",
      "words": [
        ["Monday", "thứ Hai", "📅"],
        ["week", "tuần", "🗓️"],
        ["month", "tháng", "🌙"],
        ["year", "năm", "📆"],
        ["hour", "giờ (60 phút)", "⏱️"],
        ["minute", "phút", "⏲️"],
        ["noon", "buổi trưa, 12 giờ trưa", "🕛"],
        ["tomorrow", "ngày mai", "🌅"],
        ["yesterday", "hôm qua", "🌇"],
        ["morning", "buổi sáng", "🌄"]
      ],
      "grammar": [
        ["Giới từ chỉ thời gian: at, on, in", "Dùng at với giờ (at seven), on với ngày (on Monday), in với tháng, năm và buổi (in July, in 2025, in the morning).", "The meeting is at nine. | We travel on Monday. | She was born in 1990."],
        ["Thì và dấu hiệu thời gian", "Yesterday, last year, ago đi với quá khứ đơn. Tomorrow, next week đi với tương lai.", "I visited Da Nang last year. | We will meet next week."]
      ],
      "quiz": [
        ["The meeting starts ___ nine o'clock every morning.", "at", ["on", "in", "for"], "Giờ cụ thể đi với at: at nine o'clock."],
        ["Our office is closed ___ Sunday.", "on", ["at", "in", "to"], "Ngày trong tuần đi với on."],
        ["The company was founded ___ 1995.", "in", ["on", "at", "for"], "Năm đi với in."],
        ["We will send the report ___ Friday.", "on", ["in", "at", "during"], "Ngày cụ thể đi với on."],
        ["I ___ my grandparents last week.", "visited", ["visit", "will visit", "visiting"], "Last week là dấu hiệu quá khứ, nên dùng quá khứ đơn: visited."],
        ["We have worked here ___ three years.", "for", ["since", "during", "from"], "For + khoảng thời gian; since + mốc thời điểm."],
        ["There are sixty ___ in one hour.", "minutes", ["minute", "minuted", "minutely"], "Sau số đếm lớn hơn 1 dùng danh từ số nhiều: minutes."]
      ],
      "sentences": [
        ["The meeting is scheduled for Monday morning at nine.", "Cuộc họp được lên lịch vào sáng thứ Hai lúc chín giờ."],
        ["I will call you tomorrow afternoon.", "Tôi sẽ gọi cho bạn vào chiều mai."],
        ["Our store opens at eight and closes in the evening.", "Cửa hàng chúng tôi mở cửa lúc tám giờ và đóng cửa vào buổi tối."],
        ["The team finished the project last month.", "Cả nhóm đã hoàn thành dự án vào tháng trước."],
        ["It takes about twenty minutes to walk to the station.", "Đi bộ đến ga mất khoảng hai mươi phút."]
      ],
      "transform": [
        ["The meeting starts at nine.", "Viết lại với begins", "The meeting begins at nine.", "Cuộc họp bắt đầu lúc chín giờ."],
        ["We finished the report yesterday.", "Chuyển sang câu hỏi Wh- về thời gian", "When did you finish the report?", "Bạn hoàn thành báo cáo khi nào?"],
        ["It takes two hours to drive there.", "Viết lại, bắt đầu bằng The drive", "The drive there takes two hours.", "Đi đến đó mất hai giờ."],
        ["I have worked here for three years.", "Chuyển sang câu hỏi Yes/No", "Have you worked here for three years?", "Bạn đã làm việc ở đây được ba năm chưa?"]
      ],
      "extra": ["day", "time", "early", "late", "the"]
    },
    {
      "id": "lv0shop", "group": 4, "grade": 12, "icon": "🛍️", "tag": "TOEIC Part 1–2",
      "title": "Mua sắm và quần áo", "en": "Shopping and clothes",
      "desc": "Cửa hàng, giá cả, kích cỡ và cách hỏi mua hàng.",
      "words": [
        ["shirt", "áo sơ mi", "👔"],
        ["jacket", "áo khoác", "🧥"],
        ["shoes", "giày", "👟"],
        ["price", "giá", "🏷️"],
        ["cheap", "rẻ", "💰"],
        ["expensive", "đắt", "💸"],
        ["bargain", "món hời, hàng giảm giá", "🎁"],
        ["change", "tiền thối lại", "💱"],
        ["size", "kích cỡ", "📏"],
        ["cashier", "thu ngân", "💵"]
      ],
      "grammar": [
        ["So sánh hơn", "Tính từ ngắn thêm -er: cheap thành cheaper. Tính từ dài dùng more: more expensive.", "This shirt is cheaper than that one. | These shoes are more expensive."],
        ["Hỏi giá", "How much is this? hỏi một món. How much are these? hỏi nhiều món.", "How much is this jacket? | How much are these shoes?"]
      ],
      "quiz": [
        ["This jacket is much ___ than the blue one.", "cheaper", ["cheap", "cheapest", "cheaply"], "So sánh hơn của tính từ ngắn: cheaper."],
        ["Could I have a ___ for my purchase, please?", "receipt", ["receipts", "recipe", "receiving"], "Hóa đơn là receipt, đi với mạo từ a nên dùng số ít."],
        ["Do you have this shirt in a larger ___?", "size", ["sizes", "sized", "sizing"], "A larger size: cỡ lớn hơn, danh từ số ít."],
        ["The ___ at the counter will take your payment.", "cashier", ["cashiers", "cash", "cashed"], "The cashier: nhân viên thu ngân, số ít."],
        ["The store is offering a 20 percent ___ on all winter coats.", "discount", ["discounts", "discounted", "discounting"], "A ... discount: giảm giá, danh từ số ít."],
        ["Those leather ___ are the most expensive in the store.", "shoes", ["shoe", "shoeing", "shoed"], "Those đi với danh từ số nhiều: shoes."],
        ["How ___ is this jacket?", "much", ["many", "long", "often"], "Hỏi giá một món dùng How much."]
      ],
      "sentences": [
        ["I bought a new jacket at the mall last weekend.", "Cuối tuần trước tôi đã mua một chiếc áo khoác mới ở trung tâm thương mại."],
        ["Please keep your receipt in case you need to return the shirt.", "Hãy giữ hóa đơn phòng khi bạn cần trả lại áo sơ mi."],
        ["The shoes were on sale, so they were much cheaper.", "Đôi giày đang giảm giá nên rẻ hơn nhiều."],
        ["Do you have this dress in a smaller size?", "Bạn có chiếc váy này cỡ nhỏ hơn không?"],
        ["The cashier gave me a discount because I was a member.", "Nhân viên thu ngân giảm giá cho tôi vì tôi là thành viên."]
      ],
      "transform": [
        ["This jacket is cheaper than that one.", "Viết lại với more expensive, đảo chiều so sánh", "That one is more expensive than this jacket.", "Chiếc kia đắt hơn chiếc áo khoác này."],
        ["The shirt costs twenty dollars.", "Chuyển sang câu hỏi giá", "How much does the shirt cost?", "Chiếc áo sơ mi giá bao nhiêu?"],
        ["I need a bigger size.", "Viết lại thành câu hỏi lịch sự, bắt đầu bằng Do you", "Do you have a bigger size?", "Bạn có cỡ lớn hơn không?"],
        ["The store gave me a discount.", "Viết lại với I got", "I got a discount from the store.", "Tôi được giảm giá ở cửa hàng."]
      ],
      "extra": ["price", "color", "very", "the", "a"]
    },
    {
      "id": "lv3acc", "group": 1, "grade": 12, "icon": "🧮", "tag": "TOEIC Part 5–7",
      "title": "Kế toán và ngân sách", "en": "Accounting and budget",
      "desc": "Chi phí, hóa đơn, doanh thu và báo cáo tài chính cơ bản.",
      "words": [
        ["cost", "giá, chi phí", "🏷️"],
        ["payroll", "bảng lương", "🧾"],
        ["turnover", "doanh số, doanh thu", "📈"],
        ["statement", "bảng sao kê tài khoản", "📑"],
        ["profit", "lợi nhuận", "💹"],
        ["tax", "thuế", "🏛️"],
        ["audit", "kiểm toán", "🔍"],
        ["reimburse", "hoàn trả tiền đã chi", "💵"],
        ["auditor", "kiểm toán viên", "🕵️"],
        ["deficit", "thâm hụt", "📉"]
      ],
      "grammar": [
        ["Từ loại trong cụm kế toán", "Sau mạo từ hoặc tính từ thường là danh từ: the annual budget, a monthly expense.", "The annual budget was approved. | Our expenses rose this quarter."],
        ["Bị động trong báo cáo", "Báo cáo thường dùng bị động: The invoice was sent, costs were reduced.", "The invoice was sent last week. | Costs were reduced by ten percent."]
      ],
      "quiz": [
        ["The company will ___ your travel costs after the trip.", "reimburse", ["reimbursement", "reimbursing", "reimbursable"], "Sau will cần động từ nguyên mẫu: reimburse."],
        ["The annual ___ must be approved by the board before June.", "budget", ["budgetary", "budgeted", "budgeting"], "Chủ ngữ cần danh từ: budget (ngân sách)."],
        ["Our total ___ increased by fifteen percent this year.", "revenue", ["revolve", "revolution", "revealed"], "Revenue là doanh thu, chủ ngữ cần danh từ."],
        ["The company made a ___ of two million dollars last year.", "profit", ["profitable", "profiting", "profitably"], "Sau a cần danh từ: profit (lợi nhuận); profitable là tính từ."],
        ["Please check the ___ on your bank statement.", "balance", ["balanced", "balancing", "balanceable"], "The balance: số dư, danh từ sau the."],
        ["The auditors ___ the financial records every year.", "examine", ["examined", "examining", "examination"], "Every year là hiện tại đơn; chủ ngữ số nhiều nên dùng động từ nguyên mẫu."],
        ["Our monthly ___ rose sharply because of the new office rent.", "expenses", ["expensive", "expensively", "expend"], "Chủ ngữ cần danh từ: expenses (chi phí)."]
      ],
      "sentences": [
        ["The finance team will review the monthly budget on Friday.", "Nhóm tài chính sẽ xem lại ngân sách tháng vào thứ Sáu."],
        ["Please attach all receipts to your expense report.", "Hãy đính kèm mọi hóa đơn vào báo cáo chi phí của bạn."],
        ["The invoice has not been paid yet.", "Hóa đơn này vẫn chưa được thanh toán."],
        ["Our profit margin improved after we cut unnecessary costs.", "Biên lợi nhuận của chúng tôi tăng sau khi cắt giảm chi phí không cần thiết."],
        ["The accountant will reimburse you within ten working days.", "Kế toán sẽ hoàn trả tiền cho bạn trong vòng mười ngày làm việc."]
      ],
      "transform": [
        ["The manager approved the budget.", "Chuyển sang câu bị động", "The budget was approved by the manager.", "Ngân sách đã được quản lý phê duyệt."],
        ["Our sales rose by ten percent.", "Viết lại với increased", "Our sales increased by ten percent.", "Doanh số của chúng tôi tăng mười phần trăm."],
        ["We have to pay the invoice by Monday.", "Viết lại với must", "We must pay the invoice by Monday.", "Chúng tôi phải thanh toán hóa đơn trước thứ Hai."],
        ["The accounts were checked by the auditor.", "Chuyển sang câu chủ động, bắt đầu bằng The auditor", "The auditor checked the accounts.", "Kiểm toán viên đã kiểm tra các sổ sách."]
      ],
      "extra": ["money", "report", "very", "the", "a"]
    },
    {
      "id": "lv3ship", "group": 1, "grade": 12, "icon": "📦", "tag": "TOEIC Part 4, 7",
      "title": "Vận chuyển và giao hàng", "en": "Shipping and delivery",
      "desc": "Đơn vị vận chuyển, theo dõi kiện hàng, giao hàng trễ và xử lý đơn.",
      "words": [
        ["consignment", "lô hàng ký gửi", "🧳"],
        ["courier", "nhân viên giao hàng", "🛵"],
        ["tracking", "theo dõi đơn hàng", "🔎"],
        ["package", "kiện hàng, bưu kiện", "📦"],
        ["depot", "kho bãi, trạm tập kết", "🏭"],
        ["fragile", "dễ vỡ", "⚠️"],
        ["backorder", "đơn hàng đang chờ nhập về", "⏳"],
        ["dispatch", "gửi đi, điều phối", "🚚"],
        ["carrier", "đơn vị vận chuyển", "🚛"],
        ["address", "địa chỉ", "🏠"]
      ],
      "grammar": [
        ["Mẹo Part 4: nghe từ khóa", "Thông báo thường nói về trễ hàng hay đổi địa chỉ. Chú ý các cụm như be delayed, be delivered to, be out of stock.", "Your package has been delayed. | The shipment will be delivered on Tuesday."],
        ["Will và be going to", "Dùng will cho quyết định ngay lúc nói. Dùng be going to cho việc đã có kế hoạch.", "I will send the tracking number today. | The shipment is going to arrive tomorrow."]
      ],
      "quiz": [
        ["Your order has been ___ because of bad weather.", "delayed", ["delay", "delaying", "delays"], "Sau has been cần quá khứ phân từ, câu bị động: delayed."],
        ["A ___ will bring the package to your office tomorrow morning.", "courier", ["couriers", "couriering", "couriered"], "Sau A cần danh từ số ít: courier."],
        ["Please keep the ___ number so you can track your order.", "tracking", ["track", "tracked", "trackable"], "Tracking number là số theo dõi đơn hàng."],
        ["Fragile items must be ___ carefully.", "handled", ["handle", "handling", "handles"], "Bị động với must be: handled."],
        ["The ___ is located on the north side of the city.", "warehouse", ["warehouses", "warehousing", "warehoused"], "Chủ ngữ số ít với is located: warehouse."],
        ["We ___ the shipment to the customer last Monday.", "dispatched", ["dispatch", "dispatches", "dispatching"], "Last Monday là quá khứ, nên dùng dispatched."],
        ["Please send the ___ to this address by Friday.", "package", ["packed", "packing", "packager"], "The package: kiện hàng, danh từ số ít."]
      ],
      "sentences": [
        ["Our carrier will deliver the shipment within three days.", "Đơn vị vận chuyển sẽ giao lô hàng trong vòng ba ngày."],
        ["The package was damaged during transport, so we sent a replacement.", "Kiện hàng bị hư hại trong lúc vận chuyển nên chúng tôi đã gửi hàng thay thế."],
        ["You can check the status of your order with the tracking number.", "Bạn có thể kiểm tra tình trạng đơn hàng bằng mã theo dõi."],
        ["The warehouse dispatches orders every afternoon.", "Nhà kho gửi đơn hàng mỗi buổi chiều."],
        ["Due to heavy traffic, the delivery will be delayed until Thursday.", "Do kẹt xe nặng, việc giao hàng sẽ bị trễ đến thứ Năm."]
      ],
      "transform": [
        ["The courier delivered the package yesterday.", "Chuyển sang câu bị động", "The package was delivered by the courier yesterday.", "Kiện hàng đã được nhân viên giao hôm qua."],
        ["We will ship your order on Monday.", "Chuyển sang câu bị động", "Your order will be shipped on Monday.", "Đơn hàng của bạn sẽ được gửi vào thứ Hai."],
        ["Send the package to my office.", "Viết lại thành câu lịch sự, bắt đầu bằng Could you", "Could you send the package to my office?", "Bạn có thể gửi kiện hàng đến văn phòng tôi được không?"],
        ["The courier left the package at the door.", "Viết lại với was left, dạng bị động", "Was the package left at the door by the courier?", "Kiện hàng có được nhân viên giao đặt ở cửa không?"]
      ],
      "extra": ["order", "office", "very", "the", "a"]
    },
    {
      "id": "lv3hotel", "group": 1, "grade": 12, "icon": "🏨", "tag": "TOEIC Part 3–4",
      "title": "Khách sạn và lưu trú", "en": "Hotels and accommodation",
      "desc": "Đặt phòng, nhận phòng, trả phòng và dịch vụ khách sạn.",
      "words": [
        ["occupancy", "tỷ lệ phòng có khách", "📊"],
        ["registration", "thủ tục nhận phòng", "🛎️"],
        ["check out", "trả phòng", "🚪"],
        ["vacant", "còn trống (tính từ)", "🛏️"],
        ["lobby", "sảnh", "🏛️"],
        ["concierge", "nhân viên hỗ trợ khách", "🎩"],
        ["booking", "việc đặt phòng", "📅"],
        ["amenity", "tiện nghi", "🏊"],
        ["single room", "phòng đơn", "🛌"],
        ["surcharge", "phụ phí", "💵"]
      ],
      "grammar": [
        ["Bị động trong thông báo khách sạn", "Thông báo thường dùng bị động: Your room has been reserved. The reservation was confirmed.", "Your reservation has been confirmed. | The room will be cleaned at noon."],
        ["Check in và check out", "Đây là cụm động từ. Ở dạng danh từ: check-in time, check-out time.", "Check-out time is at eleven. | Please check in at the front desk."]
      ],
      "quiz": [
        ["Guests must ___ before eleven in the morning on the day they leave.", "check out", ["check-out", "checking out", "checked out"], "Sau must cần động từ nguyên mẫu: check out."],
        ["Your ___ has been confirmed for two nights.", "reservation", ["reserve", "reserved", "reserving"], "Sau tính từ sở hữu your cần danh từ: reservation."],
        ["The hotel has no ___ rooms left tonight.", "vacant", ["vacancy", "vacate", "vacated"], "Trước danh từ rooms cần tính từ: vacant (trống)."],
        ["Please leave your room key at the front ___.", "desk", ["deck", "dusk", "disk"], "Front desk là quầy lễ tân."],
        ["We would like a ___ room for two people.", "double", ["single", "dual", "duplicate"], "Phòng cho hai người là double room."],
        ["A ___ of fifty dollars is required when you book the room.", "deposit", ["deposits", "depositing", "depot"], "A deposit: tiền đặt cọc, danh từ số ít."],
        ["Hotel guests can use the pool and other ___.", "amenities", ["amenity", "amenable", "amenity's"], "Other đi với danh từ số nhiều: amenities."]
      ],
      "sentences": [
        ["I would like to make a reservation for two nights.", "Tôi muốn đặt phòng cho hai đêm."],
        ["Check-in starts at two in the afternoon.", "Giờ nhận phòng bắt đầu lúc hai giờ chiều."],
        ["The hotel lobby is on the first floor next to the restaurant.", "Sảnh khách sạn ở tầng một, cạnh nhà hàng."],
        ["The concierge can recommend good places to eat nearby.", "Nhân viên hỗ trợ có thể gợi ý những chỗ ăn ngon gần đây."],
        ["Breakfast is included in the price, and the room has a balcony.", "Giá phòng đã bao gồm bữa sáng, và phòng có ban công."]
      ],
      "transform": [
        ["The hotel reserved a room for us.", "Chuyển sang câu bị động", "A room was reserved for us by the hotel.", "Khách sạn đã đặt một phòng cho chúng tôi."],
        ["The receptionist will check you in at noon.", "Viết lại bằng câu bị động", "You will be checked in at noon by the receptionist.", "Bạn sẽ được nhân viên lễ tân làm thủ tục nhận phòng lúc trưa."],
        ["We have no rooms available tonight.", "Viết lại với There are no", "There are no rooms available tonight.", "Tối nay không còn phòng trống."],
        ["Could you tell me when check-out time is?", "Viết lại thành câu hỏi ngắn, bắt đầu bằng When", "When is check-out time?", "Mấy giờ là giờ trả phòng?"]
      ],
      "extra": ["room", "hotel", "very", "the", "a"]
    },
    {
      "id": "lv6contract", "group": 5, "grade": 12, "icon": "📑", "tag": "TOEIC Part 5–7",
      "title": "Hợp đồng và thỏa thuận", "en": "Contracts and agreements",
      "desc": "Điều khoản, trách nhiệm, gia hạn và chấm dứt hợp đồng.",
      "words": [
        ["agreement", "thỏa thuận", "🤝"],
        ["contract", "hợp đồng", "📄"],
        ["clause", "điều khoản trong hợp đồng", "📜"],
        ["liability", "trách nhiệm pháp lý", "⚖️"],
        ["terminate", "chấm dứt", "🛑"],
        ["renew", "gia hạn", "🔄"],
        ["binding", "có ràng buộc pháp lý", "🔗"],
        ["penalty", "tiền phạt", "⚠️"],
        ["amend", "sửa đổi", "✏️"],
        ["stipulate", "quy định, ghi rõ", ""]
      ],
      "grammar": [
        ["Mệnh đề quan hệ trong hợp đồng", "Hợp đồng hay dùng which hoặc that để bổ sung thông tin: The clause that covers payment is in Section 3.", "The agreement, which expires in May, can be renewed. | The penalty that applies is listed in Section 4."],
        ["Câu điều kiện trong hợp đồng", "If + hiện tại đơn, will + động từ nguyên mẫu: If either party terminates the contract, a fee will be charged.", "If the goods are late, the buyer will receive a refund. | If you cancel early, a penalty will apply."]
      ],
      "quiz": [
        ["The ___ shall remain binding for two years from the signing date.", "contract", ["contractor", "contractual", "contracted"], "Chủ ngữ cần danh từ chỉ văn bản: contract, không phải nhà thầu (contractor)."],
        ["Either party may ___ the agreement with thirty days notice.", "terminate", ["termination", "terminated", "terminable"], "Sau may cần động từ nguyên mẫu: terminate (chấm dứt)."],
        ["The company will not be held ___ for any damage caused by delays.", "liable", ["liability", "liably", "liabilities"], "Be held liable for: chịu trách nhiệm pháp lý, cần tính từ."],
        ["The contract can be ___ for another year if both sides agree.", "renewed", ["renew", "renewing", "renewal"], "Can be cần quá khứ phân từ trong câu bị động: renewed."],
        ["Please read the ___ in Section 5 carefully before signing.", "clause", ["cause", "close", "class"], "Clause: điều khoản trong hợp đồng."],
        ["Any changes to the contract must be ___ in writing.", "amended", ["amend", "amendment", "amending"], "Must be cần quá khứ phân từ: amended (được sửa đổi)."],
        ["If the tenant leaves early, a ___ of two months rent will apply.", "penalty", ["penalize", "penalized", "penal"], "A penalty: tiền phạt, danh từ sau mạo từ a."]
      ],
      "sentences": [
        ["The agreement is binding once both parties have signed it.", "Thỏa thuận có hiệu lực ràng buộc khi cả hai bên đã ký."],
        ["Either party may terminate the contract with written notice.", "Mỗi bên đều có thể chấm dứt hợp đồng bằng thông báo bằng văn bản."],
        ["The supplier is liable for any damage caused during delivery.", "Nhà cung cấp chịu trách nhiệm pháp lý với mọi thiệt hại xảy ra khi giao hàng."],
        ["Please review the clause on payment terms before you sign.", "Vui lòng xem kỹ điều khoản về điều kiện thanh toán trước khi ký."],
        ["The lease can be renewed for another two years.", "Hợp đồng thuê có thể được gia hạn thêm hai năm."]
      ],
      "transform": [
        ["The buyer must pay the penalty.", "Chuyển sang câu bị động", "The penalty must be paid by the buyer.", "Người mua phải trả khoản tiền phạt."],
        ["We will terminate the contract next month.", "Chuyển sang câu bị động", "The contract will be terminated next month.", "Hợp đồng sẽ bị chấm dứt vào tháng tới."],
        ["Both parties agreed to amend the terms.", "Chuyển sang câu bị động, bắt đầu bằng The terms", "The terms were amended by both parties.", "Các điều khoản đã được hai bên sửa đổi."],
        ["If you do not pay on time, you will be charged a fee.", "Viết lại với Unless", "Unless you pay on time, you will be charged a fee.", "Trừ khi bạn thanh toán đúng hạn, bạn sẽ bị tính phí."]
      ],
      "extra": ["party", "signed", "very", "the", "a"]
    },
    {
      "id": "lv6quality", "group": 5, "grade": 12, "icon": "🔬", "tag": "TOEIC Part 6–7",
      "title": "Kiểm soát chất lượng", "en": "Quality control",
      "desc": "Kiểm tra, lỗi sản phẩm, tiêu chuẩn và thu hồi hàng.",
      "words": [
        ["flaw", "khuyết điểm, lỗi nhỏ", "⚠️"],
        ["verification", "sự xác minh", "🔍"],
        ["tolerance", "dung sai", "📏"],
        ["compliance", "sự tuân thủ", "✅"],
        ["specification", "thông số kỹ thuật", "📋"],
        ["recall", "thu hồi sản phẩm", "🔙"],
        ["failure", "sự hỏng hóc", "🔧"],
        ["certify", "chứng nhận", "🏅"],
        ["rigorous", "nghiêm ngặt, kỹ lưỡng", "🧐"],
        ["deviation", "sự sai lệch", "📉"]
      ],
      "grammar": [
        ["Danh từ đi với giới từ cố định", "Compliance with, deviation from, inspection of là các cụm hay gặp trong Part 5.", "Compliance with safety rules is mandatory. | Any deviation from the specification must be reported."],
        ["Bị động với động từ tình thái", "Đề hay dùng must be hoặc should be cộng quá khứ phân từ: The products must be tested before shipment.", "All units should be inspected before delivery. | The defect must be reported immediately."]
      ],
      "quiz": [
        ["The factory must maintain strict ___ with safety regulations.", "compliance", ["comply", "compliant", "complying"], "Sau tính từ strict cần danh từ: compliance with."],
        ["Any ___ from the design specifications must be approved in advance.", "deviation", ["deviate", "deviated", "deviating"], "Sau any cần danh từ: deviation."],
        ["The engineers carried out a thorough ___ of the machinery.", "inspection", ["inspector", "inspect", "inspected"], "Sau a thorough cần danh từ: inspection."],
        ["The company decided to ___ the faulty batch of medicine.", "recall", ["recalls", "recalled", "recalling"], "Sau to cần động từ nguyên mẫu: recall."],
        ["Each unit is ___ before it leaves the warehouse.", "inspected", ["inspect", "inspection", "inspector"], "Bị động với is: inspected."],
        ["The product failed because of a minor ___ in the circuit.", "defect", ["defective", "defection", "defeat"], "Sau a minor cần danh từ: defect (lỗi)."],
        ["Our technicians will ___ the machine for accuracy next week.", "certify", ["certificate", "certified", "certifying"], "Sau will cần động từ nguyên mẫu: certify."]
      ],
      "sentences": [
        ["All products must pass a rigorous inspection before they are shipped.", "Mọi sản phẩm phải qua kiểm tra nghiêm ngặt trước khi giao đi."],
        ["The machine has a minor malfunction that needs to be repaired.", "Máy có một trục trặc nhỏ cần được sửa chữa."],
        ["The specification allows a tolerance of two millimeters.", "Thông số kỹ thuật cho phép dung sai hai milimét."],
        ["Our supplier must show proof of compliance with safety standards.", "Nhà cung cấp phải chứng minh đã tuân thủ tiêu chuẩn an toàn."],
        ["The company will recall every item that has a defect.", "Công ty sẽ thu hồi mọi sản phẩm có lỗi."]
      ],
      "transform": [
        ["They inspected the products carefully.", "Chuyển sang câu bị động", "The products were inspected carefully.", "Các sản phẩm đã được kiểm tra cẩn thận."],
        ["The engineer must certify the design.", "Chuyển sang câu bị động", "The design must be certified by the engineer.", "Thiết kế phải được kỹ sư chứng nhận."],
        ["The machine stopped working because of a fault.", "Viết lại với malfunction", "The machine stopped working because of a malfunction.", "Máy ngừng hoạt động do trục trặc."],
        ["Please report any defect to the quality team.", "Viết lại thành câu bị động, bắt đầu bằng Any defect", "Any defect must be reported to the quality team.", "Mọi lỗi phải được báo cho nhóm chất lượng."]
      ],
      "extra": ["quality", "product", "very", "the", "a"]
    },
    {
      "id": "lv6rnd", "group": 5, "grade": 12, "icon": "🧪", "tag": "TOEIC Part 6–7",
      "title": "Nghiên cứu và phát triển", "en": "Research and development",
      "desc": "Thí nghiệm, công bố kết quả, đổi mới và đề xuất dự án.",
      "words": [
        ["laboratory", "phòng thí nghiệm", "🧪"],
        ["prototype", "mẫu thử", "🛠️"],
        ["hypothesis", "giả thuyết", "💡"],
        ["invention", "phát minh", "🚀"],
        ["patent", "bằng sáng chế", "📜"],
        ["discovery", "khám phá", "🌟"],
        ["experiment", "thí nghiệm", "🔬"],
        ["feasibility", "tính khả thi", "✔️"],
        ["publish", "công bố", "📰"],
        ["collaborate", "hợp tác", "🤝"]
      ],
      "grammar": [
        ["Từ loại trong nghiên cứu", "Sau mạo từ và tính từ cần danh từ: a breakthrough, the feasibility. Sau động từ tình thái cần động từ nguyên mẫu: will collaborate.", "The team made a breakthrough in battery design. | We will publish the results next year."],
        ["Although, despite và in spite of", "Dùng để nói trái ý. Although đi với mệnh đề, despite và in spite of đi với danh từ.", "Although the prototype failed, the team kept working. | Despite the delay, the experiment was successful."]
      ],
      "quiz": [
        ["The research team ___ a new method for purifying water.", "developed", ["development", "develop", "developing"], "Câu có chủ ngữ và động từ quá khứ: developed."],
        ["Scientists must ___ their results in a peer-reviewed journal.", "publish", ["publication", "publicly", "publisher"], "Sau must cần động từ nguyên mẫu; publicly là trạng từ."],
        ["The ___ of the new project was confirmed by the board.", "feasibility", ["feasible", "feasibly", "feasibleness"], "Sau The cần danh từ: feasibility (tính khả thi)."],
        ["Although the first ___ failed, the team tried again.", "prototype", ["prototypical", "prototyped", "prototyping"], "Sau the first cần danh từ số ít: prototype."],
        ["Thanks to the new ___, the company reduced production costs.", "innovation", ["innovate", "innovative", "innovator"], "Sau the new cần danh từ: innovation (sự đổi mới)."],
        ["In spite ___ the budget cuts, the lab continued its experiments.", "of", ["on", "to", "for"], "In spite of là cụm cố định."],
        ["The company filed a ___ for its new battery technology.", "patent", ["patently", "patient", "patch"], "A patent: bằng sáng chế, danh từ sau mạo từ a."]
      ],
      "sentences": [
        ["The laboratory tests every new prototype before production starts.", "Phòng thí nghiệm kiểm tra mọi mẫu thử mới trước khi bắt đầu sản xuất."],
        ["Our hypothesis was supported by the results of the experiment.", "Giả thuyết của chúng tôi được kết quả thí nghiệm ủng hộ."],
        ["The team hopes to make a breakthrough within the next two years.", "Nhóm hy vọng đạt được bước đột phá trong hai năm tới."],
        ["We plan to collaborate with a university on this research.", "Chúng tôi dự định hợp tác với một trường đại học trong nghiên cứu này."],
        ["The study will be published after the feasibility report is complete.", "Nghiên cứu sẽ được công bố sau khi báo cáo khả thi hoàn tất."]
      ],
      "transform": [
        ["The scientists developed a new vaccine.", "Chuyển sang câu bị động", "A new vaccine was developed by the scientists.", "Một loại vắc-xin mới đã được các nhà khoa học phát triển."],
        ["Although the test was difficult, the team finished it.", "Viết lại với Despite", "Despite the difficult test, the team finished it.", "Mặc dù bài kiểm tra khó, nhóm vẫn hoàn thành."],
        ["The results will be shared next week.", "Viết lại với We will share", "We will share the results next week.", "Chúng tôi sẽ chia sẻ kết quả vào tuần tới."],
        ["Scientists tested the new drug for two years.", "Chuyển sang câu hỏi Wh- hỏi về thời gian", "How long did scientists test the new drug?", "Các nhà khoa học đã thử nghiệm loại thuốc mới trong bao lâu?"]
      ],
      "extra": ["research", "test", "very", "the", "a"]
    },
    {
      "id": "lv6confuse", "group": 5, "grade": 12, "icon": "🔀", "tag": "TOEIC Part 5–6",
      "title": "Từ dễ nhầm và kết hợp từ", "en": "Confusing words and collocations",
      "desc": "Cặp từ gần nghĩa hay bị nhầm, và các kết hợp từ thường gặp.",
      "words": [
        ["affect", "ảnh hưởng (động từ)", "🌊"],
        ["effect", "ảnh hưởng, tác động (danh từ)", "💥"],
        ["economic", "thuộc về kinh tế", "💹"],
        ["economical", "tiết kiệm", "💰"],
        ["adapt", "thích nghi, điều chỉnh", "🔄"],
        ["adopt", "áp dụng, chấp nhận", "✔️"],
        ["complement", "bổ sung, làm đầy đủ", "➕"],
        ["compliment", "lời khen", "👏"],
        ["principal", "hiệu trưởng; chính, chủ yếu", "🏫"],
        ["principle", "nguyên tắc", "📐"]
      ],
      "grammar": [
        ["Phân biệt cặp từ dễ nhầm", "Affect là động từ, effect là danh từ. Economic là thuộc về kinh tế, economical là tiết kiệm.", "The new law will affect small firms. | The economical car saves fuel."],
        ["Kết hợp từ hay gặp", "Các cụm cố định: take effect (có hiệu lực), reach an agreement, meet the requirements, adopt a policy.", "The new policy will take effect in May. | We must adopt a clear policy."]
      ],
      "quiz": [
        ["The new rules will ___ on the first day of next month.", "take effect", ["take affect", "make effect", "have effect"], "Take effect là cụm cố định: có hiệu lực."],
        ["The price increase will ___ our sales in the coming months.", "affect", ["affection", "affected", "affective"], "Sau will cần động từ nguyên mẫu: affect (tác động đến)."],
        ["The company's ___ growth slowed down last quarter.", "economic", ["economics", "economize", "economically"], "Trước danh từ growth cần tính từ: economic (thuộc kinh tế)."],
        ["This compact car is very ___ and uses little fuel.", "economical", ["economic", "economics", "economize"], "Economical nghĩa là tiết kiệm; economic là thuộc về kinh tế."],
        ["Please accept my ___ on your excellent presentation.", "compliment", ["complement", "complimentary", "compliments"], "Compliment on: lời khen dành cho ai về điều gì."],
        ["We need to ___ to the new software system quickly.", "adapt", ["adopt", "adopted", "adaptable"], "Adapt to: thích nghi với. Adopt không đi với to."],
        ["The company's ___ is to put customers first.", "principle", ["principal", "principally", "principles"], "Principle là nguyên tắc; principal là hiệu trưởng hoặc chính."]
      ],
      "sentences": [
        ["The new tax will affect small businesses in the region.", "Thuế mới sẽ ảnh hưởng đến các doanh nghiệp nhỏ trong vùng."],
        ["The new rules take effect as soon as the board approves them.", "Quy định mới có hiệu lực ngay khi hội đồng quản trị phê duyệt."],
        ["Our company will adopt a flexible schedule for staff.", "Công ty chúng tôi sẽ áp dụng lịch làm việc linh hoạt cho nhân viên."],
        ["The new training program will complement our current courses.", "Chương trình đào tạo mới sẽ bổ sung cho các khóa học hiện có."],
        ["Our principal goal is to reduce waste in the factory.", "Mục tiêu chính của chúng tôi là giảm lãng phí trong nhà máy."]
      ],
      "transform": [
        ["The new policy will affect every department.", "Viết lại với have an effect on", "The new policy will have an effect on every department.", "Chính sách mới sẽ tác động đến mọi phòng ban."],
        ["The team adopted a new method.", "Chuyển sang câu hỏi Yes/No", "Did the team adopt a new method?", "Nhóm đã áp dụng phương pháp mới chưa?"],
        ["The changes will be effective next month.", "Viết lại với take effect", "The changes will take effect next month.", "Các thay đổi sẽ có hiệu lực vào tháng tới."],
        ["They praised her presentation.", "Viết lại với pay a compliment", "They paid her a compliment on her presentation.", "Họ khen ngợi bài thuyết trình của cô ấy."]
      ],
      "extra": ["change", "rules", "very", "the", "a"]
    },
    {
      "id": "lv0food", "group": 4, "grade": 12, "icon": "🍜", "tag": "TOEIC Part 1–2",
      "title": "Đồ ăn và đồ uống", "en": "Food and drinks",
      "desc": "Các món ăn, đồ uống và cách gọi món, hỏi số lượng.",
      "words": [
        ["bread", "bánh mì", "🍞"],
        ["rice", "cơm, gạo", "🍚"],
        ["milk", "sữa", "🥛"],
        ["egg", "quả trứng", "🥚"],
        ["chicken", "thịt gà", "🍗"],
        ["vegetable", "rau củ", "🥦"],
        ["fruit", "trái cây", "🍎"],
        ["soup", "món súp", "🍲"],
        ["coffee", "cà phê", "☕"],
        ["tea", "trà", "🍵"]
      ],
      "grammar": [
        ["Danh từ đếm được và không đếm được", "Đếm được có số nhiều: an egg, two eggs. Không đếm được không có số nhiều: some rice, a cup of tea. Dùng much với không đếm được, many với đếm được.", "We need some rice. | How many eggs do you need?"],
        ["Gọi món và đề nghị", "Các mẫu thông dụng: Would you like...? I'd like... Can I have...?", "Would you like some coffee? | I'd like a bowl of soup, please."]
      ],
      "quiz": [
        ["Would you like some ___ with your coffee?", "milk", ["milks", "milky", "milking"], "Milk không đếm được, dùng some; không có dạng milks."],
        ["I need two ___ for the cake recipe.", "eggs", ["egging", "eggy", "egged"], "Có số lượng two nên danh từ đếm được ở số nhiều: eggs."],
        ["How ___ rice do we need for ten people?", "much", ["many", "few", "often"], "Rice không đếm được nên hỏi bằng how much."],
        ["There isn't ___ bread left in the kitchen.", "any", ["some", "many", "a"], "Câu phủ định với danh từ không đếm được dùng any."],
        ["I'd like a ___ of tea, please.", "cup", ["cups", "cupping", "cupped"], "A cup of tea: một tách trà."],
        ["The ___ is served with fresh vegetables and rice.", "chicken", ["chickens", "chick", "chickened"], "Chicken là thịt gà, không đếm được."],
        ["Please bring me a ___ of soup.", "bowl", ["bowls", "bowling", "bowled"], "A bowl of soup: một bát súp."]
      ],
      "sentences": [
        ["We usually have rice and vegetables for lunch.", "Chúng tôi thường ăn cơm với rau vào bữa trưa."],
        ["Would you like a cup of coffee or some tea?", "Bạn muốn một tách cà phê hay chút trà?"],
        ["The fruit in this shop is fresh every morning.", "Trái cây ở cửa hàng này tươi mỗi buổi sáng."],
        ["Please put the eggs and milk in the fridge.", "Hãy cất trứng và sữa vào tủ lạnh."],
        ["The soup is too hot, so let it cool for a minute.", "Súp còn quá nóng, hãy để nguội một chút."]
      ],
      "transform": [
        ["There is some milk in the fridge.", "Chuyển sang câu hỏi Yes/No", "Is there any milk in the fridge?", "Trong tủ lạnh có sữa không?"],
        ["We have a lot of rice.", "Chuyển sang câu phủ định", "We do not have a lot of rice. | We don't have much rice.", "Chúng tôi không có nhiều gạo."],
        ["I would like a cup of tea.", "Viết lại thành câu hỏi lịch sự, bắt đầu bằng Would you like", "Would you like a cup of tea?", "Bạn có muốn một tách trà không?"],
        ["He eats three eggs every morning.", "Chuyển sang câu hỏi Wh- hỏi về số lượng", "How many eggs does he eat every morning?", "Anh ấy ăn mấy quả trứng mỗi sáng?"]
      ],
      "extra": ["food", "drink", "very", "the", "a"]
    },
    {
      "id": "lv0weather", "group": 4, "grade": 12, "icon": "🌦️", "tag": "TOEIC Part 1–2",
      "title": "Thời tiết và mùa", "en": "Weather and seasons",
      "desc": "Thời tiết hằng ngày, các mùa và cách nói về dự báo.",
      "words": [
        ["weather", "thời tiết", "☀️"],
        ["rain", "mưa", "🌧️"],
        ["sunny", "có nắng", "🌞"],
        ["cloudy", "nhiều mây", "☁️"],
        ["windy", "có gió", "💨"],
        ["snow", "tuyết", "❄️"],
        ["summer", "mùa hè", "🏖️"],
        ["winter", "mùa đông", "⛄"],
        ["storm", "bão", "⛈️"],
        ["temperature", "nhiệt độ", "🌡️"]
      ],
      "grammar": [
        ["It khi nói về thời tiết", "Khi nói về thời tiết dùng It làm chủ ngữ: It is sunny today. It's raining now.", "It is cold in winter. | It was windy yesterday."],
        ["Dự báo thời tiết", "Dự báo thường dùng will hoặc be going to: It will rain tomorrow. It is going to be cloudy.", "It will be sunny this weekend. | It is going to snow tonight."]
      ],
      "quiz": [
        ["It is very ___ today, so please bring an umbrella.", "rainy", ["rain", "rainfall", "rained"], "Sau It is very cần tính từ: rainy (có mưa)."],
        ["The ___ in July is usually very hot here.", "summer", ["summery", "summerly", "warmly"], "Summer là mùa hè, danh từ sau mạo từ The."],
        ["The ___ is 35 degrees this afternoon.", "temperature", ["temperatures", "thermal", "warm"], "Temperature là nhiệt độ, chủ ngữ số ít."],
        ["Snow is expected to ___ in the mountains tonight.", "fall", ["falls", "falling", "fell"], "Expected to + động từ nguyên mẫu: fall (rơi)."],
        ["It was ___ yesterday, so we stayed inside.", "windy", ["wind", "winding", "windily"], "It was + tính từ: windy (có gió)."],
        ["The storm ___ the power lines last night, and the district lost electricity.", "damaged", ["damage", "damages", "damaging"], "Last night là dấu hiệu quá khứ đơn: damaged."],
        ["Make sure to wear a ___ coat, because it will be very cold in winter.", "warm", ["warmth", "warmly", "warming"], "Trước danh từ coat cần tính từ: warm."]
      ],
      "sentences": [
        ["The weather is cool and cloudy in the early morning.", "Thời tiết buổi sáng sớm mát mẻ và nhiều mây."],
        ["It usually snows in the mountains during winter.", "Mùa đông ở vùng núi thường có tuyết."],
        ["The temperature dropped below ten degrees last night.", "Nhiệt độ đã giảm xuống dưới mười độ đêm qua."],
        ["Please check the forecast before you plan the outdoor event.", "Hãy xem dự báo trước khi lên kế hoạch cho sự kiện ngoài trời."],
        ["The storm delayed several flights from the airport.", "Cơn bão đã làm chậm nhiều chuyến bay từ sân bay."]
      ],
      "transform": [
        ["It is raining now.", "Chuyển sang câu hỏi Yes/No", "Is it raining now?", "Bây giờ trời có đang mưa không?"],
        ["The weather was cold last week.", "Chuyển sang câu hỏi Wh- về thời tiết", "How was the weather last week?", "Thời tiết tuần trước thế nào?"],
        ["It will be sunny tomorrow.", "Viết lại với be going to", "It is going to be sunny tomorrow.", "Ngày mai trời sẽ nắng."],
        ["The storm damaged the roofs.", "Chuyển sang câu bị động", "The roofs were damaged by the storm.", "Mái nhà đã bị cơn bão làm hỏng."]
      ],
      "extra": ["sky", "cold", "very", "the", "a"]
    },
    {
      "id": "lv0transport", "group": 4, "grade": 12, "icon": "🚌", "tag": "TOEIC Part 1–2",
      "title": "Phương tiện giao thông", "en": "Transportation",
      "desc": "Phương tiện đi lại, ga bến và cách chỉ đường cơ bản.",
      "words": [
        ["bus", "xe buýt", "🚌"],
        ["train", "tàu hỏa", "🚆"],
        ["taxi", "xe taxi", "🚕"],
        ["bicycle", "xe đạp", "🚲"],
        ["motorbike", "xe máy", "🏍️"],
        ["ferry", "phà", "⛴️"],
        ["station", "nhà ga, bến", "🚉"],
        ["ticket", "vé", "🎫"],
        ["platform", "sân ga", "🚏"],
        ["traffic", "giao thông, kẹt xe", "🚦"]
      ],
      "grammar": [
        ["By và on foot", "Dùng by với phương tiện: by bus, by train, by car. Đi bộ dùng on foot.", "We go to school by bus. | They came here on foot."],
        ["Giới từ chỉ vị trí", "Các giới từ hay gặp khi chỉ đường: next to, opposite, between, along, across.", "The bus stop is next to the bank. | The station is across the river."]
      ],
      "quiz": [
        ["We usually travel to work ___ bus.", "by", ["on", "with", "in"], "Dùng by với tên phương tiện: by bus."],
        ["The train leaves from ___ three.", "platform", ["platforms", "platformed", "plateau"], "From platform three: từ sân ga số ba."],
        ["Please buy a ___ before you get on the bus.", "ticket", ["tickets", "ticketing", "ticketed"], "A ticket: một vé, danh từ số ít sau a."],
        ["The bank is ___ the station, on the other side of the road.", "opposite", ["opposed", "opposing", "oppose"], "Opposite là đối diện."],
        ["Heavy ___ on the highway made us arrive late.", "traffic", ["trafficked", "trafficker", "trafficking"], "Heavy traffic: giao thông đông, kẹt xe."],
        ["Many students ___ to school on bicycles.", "ride", ["rides", "riding", "rode"], "Chủ ngữ số nhiều nên động từ không thêm -s."],
        ["The ferry ___ at seven every morning.", "leaves", ["leave", "leaving", "left"], "Chủ ngữ số ít The ferry nên thêm -s."]
      ],
      "sentences": [
        ["The bus stop is next to the post office.", "Trạm xe buýt ở cạnh bưu điện."],
        ["I take a taxi to the airport when I am late.", "Tôi bắt taxi ra sân bay khi bị muộn."],
        ["The train arrives at the station every thirty minutes.", "Tàu đến ga mỗi ba mươi phút."],
        ["You can rent a bicycle near the lake for two hours.", "Bạn có thể thuê xe đạp gần hồ trong hai giờ."],
        ["The ferry crosses the river between the two towns.", "Chiếc phà băng qua sông giữa hai thị trấn."]
      ],
      "transform": [
        ["We go to school by bus.", "Chuyển sang câu hỏi Wh- hỏi phương tiện", "How do you go to school?", "Bạn đi học bằng phương tiện gì?"],
        ["The train is faster than the bus.", "Viết lại với slower, đảo chiều so sánh", "The bus is slower than the train.", "Xe buýt chậm hơn tàu hỏa."],
        ["The station is across the river.", "Viết lại với on the other side of", "The station is on the other side of the river.", "Nhà ga ở bên kia sông."],
        ["They walked to the market.", "Viết lại với on foot", "They went to the market on foot.", "Họ đi bộ đến chợ."]
      ],
      "extra": ["road", "car", "very", "the", "a"]
    },
    {
      "id": "lv3air", "group": 1, "grade": 12, "icon": "✈️", "tag": "TOEIC Part 3–4",
      "title": "Hàng không và sân bay", "en": "Airlines and airports",
      "desc": "Chuyến bay, cổng lên máy bay, hành lý và thông báo sân bay.",
      "words": [
        ["flight", "chuyến bay", "✈️"],
        ["takeoff", "sự cất cánh", "🛫"],
        ["landing", "sự hạ cánh", "🛬"],
        ["boarding", "sự lên máy bay", "🎫"],
        ["gate", "cổng lên máy bay", "🚪"],
        ["baggage", "hành lý", "🧳"],
        ["cancellation", "sự hủy chuyến", "❌"],
        ["passenger", "hành khách", "🧍"],
        ["pilot", "phi công", "👨‍✈️"],
        ["terminal", "nhà ga sân bay", "🏢"]
      ],
      "grammar": [
        ["Giới từ với sân bay", "At chỉ địa điểm chung (at the airport), on chỉ máy bay hoặc chuyến bay (on the flight), in chỉ khu vực bên trong (in the terminal).", "Please wait at the gate. | Passengers are on the flight. | The café is in the terminal."],
        ["Thông báo chuyến bay", "Thông báo thường dùng bị động và hiện tại tiếp diễn: The flight has been cancelled. Boarding is starting at Gate 5.", "The flight has been delayed. | Boarding is now taking place at Gate 12."]
      ],
      "quiz": [
        ["Our flight to Singapore has been ___ due to bad weather.", "cancelled", ["cancel", "cancelling", "cancels"], "Has been + quá khứ phân từ, câu bị động: cancelled."],
        ["Passengers should arrive at the ___ at least two hours before departure.", "terminal", ["terminating", "terminally", "terminator"], "Terminal là nhà ga sân bay."],
        ["Please check your ___ at the counter before boarding.", "luggage", ["luggages", "luggaging", "luggagely"], "Luggage không đếm được, không có dạng số nhiều."],
        ["The ___ of flight VN 204 has been moved to half past ten.", "departure", ["depart", "departed", "departing"], "Departure là sự khởi hành, danh từ đứng sau mạo từ The."],
        ["All ___ must show a valid passport at the gate.", "passengers", ["passenger", "passengered", "passenging"], "All đi với danh từ số nhiều: passengers."],
        ["The ___ announced that the plane would land early.", "pilot", ["pilots", "pilotage", "piloted"], "The pilot là chủ ngữ số ít."],
        ["Our ___ was delayed, so we missed the connecting flight.", "arrival", ["arrive", "arrived", "arriving"], "Our + danh từ: arrival là sự đến nơi."]
      ],
      "sentences": [
        ["Our flight departs from the international terminal at nine.", "Chuyến bay của chúng tôi khởi hành từ nhà ga quốc tế lúc chín giờ."],
        ["Please keep your baggage with you at all times.", "Vui lòng luôn giữ hành lý bên mình."],
        ["The landing time has changed because of strong winds.", "Giờ hạ cánh đã thay đổi do gió mạnh."],
        ["Boarding will start forty minutes before takeoff.", "Việc lên máy bay sẽ bắt đầu bốn mươi phút trước khi cất cánh."],
        ["The airline cancelled several flights to the north.", "Hãng hàng không đã hủy nhiều chuyến bay đi miền Bắc."]
      ],
      "transform": [
        ["The airline cancelled our flight.", "Chuyển sang câu bị động", "Our flight was cancelled by the airline.", "Chuyến bay của chúng tôi đã bị hãng hàng không hủy."],
        ["Passengers must check in two hours early.", "Viết lại với have to", "Passengers have to check in two hours early.", "Hành khách phải làm thủ tục trước hai giờ."],
        ["Our plane landed at noon.", "Chuyển sang câu hỏi Yes/No", "Did your plane land at noon?", "Máy bay của bạn có hạ cánh lúc trưa không?"],
        ["The flight will be delayed by one hour.", "Viết lại với There will be a one-hour delay", "There will be a one-hour delay on the flight.", "Chuyến bay sẽ bị trễ một giờ."]
      ],
      "extra": ["ticket", "check", "very", "the", "a"]
    },
    {
      "id": "lv3realty", "group": 1, "grade": 12, "icon": "🏢", "tag": "TOEIC Part 5–7",
      "title": "Bất động sản và cơ sở vật chất", "en": "Real estate and facilities",
      "desc": "Căn hộ, hợp đồng thuê, sửa chữa và bảo trì tòa nhà.",
      "words": [
        ["apartment", "căn hộ", "🏢"],
        ["rent", "tiền thuê; thuê", "💰"],
        ["landlord", "chủ nhà cho thuê", "🔑"],
        ["lease", "hợp đồng thuê", "📄"],
        ["tenant", "người thuê nhà", "🧑"],
        ["location", "vị trí", "📍"],
        ["repair", "sửa chữa", "🔧"],
        ["elevator", "thang máy", "🛗"],
        ["parking", "bãi đỗ xe", "🅿️"],
        ["renovation", "cải tạo, sửa sang", "🏗️"]
      ],
      "grammar": [
        ["Danh từ ghép chỉ nhà cửa", "Các cụm như office space, parking lot, lease agreement: danh từ đứng đầu bổ nghĩa cho danh từ sau.", "The office space is on the fifth floor. | The lease agreement expires in May."],
        ["Mệnh đề quan hệ với which và where", "Which bổ nghĩa cho vật, where chỉ nơi chốn.", "The apartment, which has two rooms, is for rent. | This is the building where the meeting is held."]
      ],
      "quiz": [
        ["The landlord agreed to ___ the kitchen next month.", "renovate", ["renovation", "renovated", "renovating"], "Sau agreed to cần động từ nguyên mẫu: renovate."],
        ["The ___ of the apartment is close to the train station.", "location", ["locate", "located", "locally"], "Chủ ngữ cần danh từ: location (vị trí)."],
        ["Tenants must pay the monthly ___ by the fifth day of each month.", "rent", ["renter", "rented", "renting"], "Monthly rent: tiền thuê hằng tháng."],
        ["The lift in the building is out of ___ and needs repair.", "order", ["orders", "ordered", "ordering"], "Out of order: bị hỏng."],
        ["Please sign the ___ before you move into the apartment.", "lease", ["leased", "leasing", "leases"], "The lease: hợp đồng thuê, số ít sau the."],
        ["The ___ team will repair the air conditioner tomorrow.", "maintenance", ["maintain", "maintained", "maintainable"], "Maintenance team: đội bảo trì, danh từ đứng trước danh từ team."],
        ["Parking is available in the ___ behind the office building.", "lot", ["lots", "loth", "lottery"], "Parking lot: bãi đỗ xe."]
      ],
      "sentences": [
        ["The apartment has two bedrooms and a small balcony.", "Căn hộ có hai phòng ngủ và một ban công nhỏ."],
        ["The landlord will repair the elevator this week.", "Chủ nhà sẽ sửa thang máy trong tuần này."],
        ["Tenants are responsible for the cost of minor repairs.", "Người thuê chịu trách nhiệm chi phí sửa chữa nhỏ."],
        ["The office space is larger than the one we rented last year.", "Diện tích văn phòng lớn hơn căn chúng tôi đã thuê năm ngoái."],
        ["Please read the lease carefully before you sign it.", "Hãy đọc kỹ hợp đồng thuê trước khi ký."]
      ],
      "transform": [
        ["The company rents the office space.", "Chuyển sang câu bị động", "The office space is rented by the company.", "Không gian văn phòng được công ty thuê."],
        ["We will renovate the lobby next spring.", "Chuyển sang câu bị động", "The lobby will be renovated next spring.", "Sảnh sẽ được cải tạo vào mùa xuân tới."],
        ["The tenant has to pay the rent in advance.", "Viết lại với must", "The tenant must pay the rent in advance.", "Người thuê phải trả tiền thuê trước."],
        ["The building is near the park.", "Viết lại với close to", "The building is close to the park.", "Tòa nhà ở gần công viên."]
      ],
      "extra": ["building", "room", "very", "the", "a"]
    },
    {
      "id": "lv6project", "group": 5, "grade": 12, "icon": "📊", "tag": "TOEIC Part 6–7",
      "title": "Quản lý dự án và thời hạn", "en": "Project management and deadlines",
      "desc": "Cột mốc, tiến độ, phân công công việc và các cụm nói về thời hạn.",
      "words": [
        ["milestone", "cột mốc", "🏁"],
        ["timeline", "dòng thời gian", "🗓️"],
        ["deliverable", "sản phẩm bàn giao", "📦"],
        ["stakeholder", "bên liên quan", "👥"],
        ["overrun", "sự vượt (chi phí, thời gian)", "📈"],
        ["allocate", "phân bổ", "📌"],
        ["progress", "tiến độ", "📊"],
        ["priority", "ưu tiên", "⭐"],
        ["delegate", "giao việc cho người khác", "🤲"],
        ["backlog", "công việc tồn đọng", "🏋️"]
      ],
      "grammar": [
        ["Động từ đi với to-infinitive", "Các động từ như plan, decide, agree, expect đi với to và động từ nguyên mẫu: We plan to finish by June.", "They agreed to extend the deadline. | We expect to launch the product soon."],
        ["Cụm từ về tiến độ", "On schedule: đúng tiến độ. Behind schedule: chậm tiến độ. Ahead of schedule: sớm tiến độ.", "The project is ahead of schedule. | We are behind schedule because of the delay."]
      ],
      "quiz": [
        ["We plan ___ the project by the end of June.", "to finish", ["finish", "finishing", "finished"], "Plan đi với to + động từ nguyên mẫu."],
        ["The project is running two weeks ___ schedule.", "behind", ["beyond", "under", "before"], "Behind schedule: chậm tiến độ."],
        ["Each team member must complete their ___ by Friday.", "deliverables", ["delivers", "delivering", "delivered"], "Deliverables là các sản phẩm bàn giao, danh từ số nhiều sau their."],
        ["The manager will ___ the tasks to the new staff members.", "delegate", ["delegation", "delegated", "delegating"], "Will cần động từ nguyên mẫu: delegate (giao việc)."],
        ["The ___ for the next phase has been approved by the board.", "milestone", ["milestones", "milestoned", "milestoning"], "The milestone: cột mốc, danh từ số ít."],
        ["Our team is making good ___ on the new website.", "progress", ["progressive", "progressed", "progressing"], "Make good progress: đạt tiến độ tốt."],
        ["Please ___ the urgent tasks first.", "prioritize", ["priority", "prioritized", "prioritizing"], "Please + động từ nguyên mẫu: prioritize (ưu tiên)."]
      ],
      "sentences": [
        ["The project team meets every Monday to review the timeline.", "Nhóm dự án họp mỗi thứ Hai để xem lại dòng thời gian."],
        ["The first milestone is due at the end of next month.", "Cột mốc đầu tiên đến hạn vào cuối tháng sau."],
        ["Several stakeholders asked for a progress report this week.", "Một số bên liên quan đã yêu cầu báo cáo tiến độ trong tuần này."],
        ["We are ahead of schedule, so we can launch early.", "Chúng tôi đang sớm tiến độ nên có thể ra mắt sớm."],
        ["Her workload increased after the new project started.", "Khối lượng công việc của cô ấy tăng sau khi dự án mới bắt đầu."]
      ],
      "transform": [
        ["The team will finish the report on time.", "Chuyển sang câu bị động", "The report will be finished on time by the team.", "Báo cáo sẽ được nhóm hoàn thành đúng hạn."],
        ["We are behind schedule.", "Viết lại với The project is delayed", "The project is behind schedule.", "Dự án đang chậm tiến độ."],
        ["The manager gave the tasks to the new staff.", "Viết lại với delegated", "The manager delegated the tasks to the new staff.", "Quản lý đã giao việc cho nhân viên mới."],
        ["Who will allocate the budget for the project?", "Viết lại thành câu trần thuật với will allocate", "Someone will allocate the budget for the project.", "Ai đó sẽ phân bổ ngân sách cho dự án."]
      ],
      "extra": ["team", "deadline", "very", "the", "a"]
    },
    {
      "id": "lv6para", "group": 5, "grade": 12, "icon": "🔁", "tag": "TOEIC Part 2–7",
      "title": "Đồng nghĩa và diễn đạt lại", "en": "Synonyms and paraphrasing",
      "desc": "Từ đồng nghĩa hay gặp để hiểu các câu được diễn đạt lại trong đề thi.",
      "words": [
        ["approximately", "khoảng chừng", "🔢"],
        ["inform", "thông báo", "📢"],
        ["decline", "từ chối", "❌"],
        ["assist", "hỗ trợ", "🤝"],
        ["require", "yêu cầu, đòi hỏi", "📋"],
        ["obtain", "có được, lấy được", "📥"],
        ["sufficient", "đủ", "✔️"],
        ["commence", "bắt đầu", "▶️"],
        ["inquire", "hỏi, thắc mắc", "❓"],
        ["convene", "triệu tập cuộc họp", "🗣️"]
      ],
      "grammar": [
        ["Diễn đạt lại bằng từ đồng nghĩa", "Đề TOEIC hay thay một từ bằng từ có nghĩa tương đương: inform là let know, begin là commence, ask là inquire. Hãy nắm ý chính thay vì tìm từ trùng.", "We will inform you soon. | Please let us know your decision."],
        ["Đổi từ loại mà giữ nghĩa", "Có thể đổi danh từ thành động từ: a decision thành decide, a quick response thành respond quickly.", "They decided to postpone the event. | We will respond quickly."]
      ],
      "quiz": [
        ["The manager will ___ you about the new schedule next week.", "inform", ["informs", "informed", "information"], "Inform nghĩa là thông báo; sau will cần động từ nguyên mẫu."],
        ["Please ___ us know if the date is not convenient.", "let", ["ask", "push", "offer"], "Let us know nghĩa là cho chúng tôi biết, tương đương inform."],
        ["The company decided to ___ the launch until next year.", "postpone", ["postponed", "postpones", "postponing"], "Sau to cần động từ nguyên mẫu: postpone (hoãn lại)."],
        ["The team hopes to ___ the project before the deadline.", "complete", ["complain", "compete", "comply"], "Complete nghĩa là hoàn thành, tương đương finish."],
        ["Could you ___ me with these reports?", "assist", ["assistant", "assisted", "assistance"], "Assist là hỗ trợ, tương đương help."],
        ["We cannot ___ the order until we receive payment.", "process", ["procession", "processed", "processing"], "Cannot + động từ nguyên mẫu: process (xử lý)."],
        ["Please ___ your name and address on the form.", "provide", ["provider", "provision", "provided"], "Provide nghĩa là cung cấp, tương đương give."]
      ],
      "sentences": [
        ["We would like to inform all staff about the new policy.", "Chúng tôi muốn thông báo cho toàn bộ nhân viên về chính sách mới."],
        ["Please let us know if the date is not convenient.", "Hãy cho chúng tôi biết nếu ngày này không tiện."],
        ["The team will commence work on the project on Monday.", "Nhóm sẽ bắt đầu làm dự án vào thứ Hai."],
        ["Approximately forty people attended the seminar.", "Khoảng bốn mươi người đã tham dự buổi hội thảo."],
        ["The manager declined the request because the budget was insufficient.", "Quản lý từ chối đề nghị vì ngân sách không đủ."]
      ],
      "transform": [
        ["The meeting was postponed until Friday.", "Viết lại với rescheduled, giữ nghĩa", "The meeting was rescheduled for Friday.", "Cuộc họp đã được dời sang thứ Sáu."],
        ["The manager will inform the staff of the change.", "Viết lại với let know", "The manager will let the staff know about the change.", "Quản lý sẽ cho nhân viên biết về thay đổi."],
        ["Could you help me with the report?", "Viết lại với assist", "Could you assist me with the report?", "Bạn có thể hỗ trợ tôi với báo cáo không?"],
        ["They began the project in May.", "Viết lại với commence", "They commenced the project in May.", "Họ đã bắt đầu dự án vào tháng Năm."]
      ],
      "extra": ["meeting", "change", "very", "the", "a"]
    },
    {
      "id": "lv0place", "group": 4, "grade": 12, "icon": "🏙️", "tag": "TOEIC Part 1–2",
      "title": "Địa điểm và tòa nhà", "en": "Places and buildings",
      "desc": "Các nơi trong thành phố như bệnh viện, thư viện, chợ, và cách nói vị trí.",
      "words": [
        ["hospital", "bệnh viện", "🏥"],
        ["library", "thư viện", "📚"],
        ["gallery", "phòng trưng bày", "🖼️"],
        ["school", "trường học", "🏫"],
        ["park", "công viên", "🌳"],
        ["market", "chợ", "🛒"],
        ["bridge", "cầu", "🌉"],
        ["stadium", "sân vận động", "🏟️"],
        ["theater", "rạp hát", "🎭"],
        ["pharmacy", "hiệu thuốc", "💊"]
      ],
      "grammar": [
        ["There is và There are", "Dùng There is với danh từ số ít, There are với danh từ số nhiều: There is a bank near here. There are two parks.", "There is a library on Main Street. | There are many shops in the market."],
        ["Giới từ chỉ vị trí", "In, on, at với nơi chốn: in the city, on the street, at the corner.", "The gallery is on the left. | The school is at the end of the road."]
      ],
      "quiz": [
        ["There ___ a hospital near the train station.", "is", ["are", "be", "were"], "Hospital là danh từ số ít nên dùng There is."],
        ["There are two ___ in front of the school.", "trees", ["tree", "treed", "treeing"], "Có two nên danh từ ở số nhiều: trees."],
        ["The library is ___ the bank and the post office.", "between", ["among", "inside", "beneath"], "Between dùng cho hai vật: between A and B."],
        ["The ___ is open every day except Monday.", "market", ["markets", "marketing", "marketed"], "The market là chủ ngữ số ít, đi với is."],
        ["The pharmacy is ___ the hospital.", "next to", ["nextto", "near of", "beside of"], "Next to: cạnh, bên cạnh."],
        ["Students can borrow books from the ___ every Tuesday.", "library", ["librarian", "libraries", "librarying"], "The library là nơi mượn sách; librarian là thủ thư."],
        ["The new bridge will ___ the two districts next year.", "connect", ["connection", "connected", "connecting"], "Will cần động từ nguyên mẫu: connect."]
      ],
      "sentences": [
        ["The hospital is on the left side of the main road.", "Bệnh viện nằm ở phía bên trái của con đường chính."],
        ["Visitors can see ancient objects at the gallery every weekend.", "Khách tham quan có thể xem các hiện vật cổ tại phòng trưng bày mỗi cuối tuần."],
        ["The school has a large playground behind the library.", "Trường có sân chơi lớn phía sau thư viện."],
        ["The stadium can hold more than fifty thousand people.", "Sân vận động có thể chứa hơn năm mươi nghìn người."],
        ["The market opens early, so buy vegetables before nine.", "Chợ mở sớm nên hãy mua rau trước chín giờ."]
      ],
      "transform": [
        ["There is a bank near the station.", "Chuyển sang câu hỏi Yes/No", "Is there a bank near the station?", "Có ngân hàng nào gần nhà ga không?"],
        ["There are three parks in the city.", "Chuyển sang câu phủ định", "There are not three parks in the city. | There aren't three parks in the city.", "Thành phố không có ba công viên."],
        ["The pharmacy is next to the hospital.", "Viết lại với beside", "The pharmacy is beside the hospital.", "Hiệu thuốc nằm cạnh bệnh viện."],
        ["The bridge connects the two districts.", "Chuyển sang câu bị động", "The two districts are connected by the bridge.", "Hai quận được nối với nhau bằng cây cầu."]
      ],
      "extra": ["city", "street", "very", "the", "a"]
    },
    {
      "id": "lv0direct", "group": 4, "grade": 12, "icon": "🧭", "tag": "TOEIC Part 1–2",
      "title": "Chỉ đường", "en": "Directions and locations",
      "desc": "Cách hỏi đường, chỉ đường và mô tả vị trí các tòa nhà.",
      "words": [
        ["left", "bên trái", "⬅️"],
        ["right", "bên phải", "➡️"],
        ["straight", "thẳng", "⬆️"],
        ["corner", "góc đường", "📐"],
        ["intersection", "ngã tư", "🔀"],
        ["behind", "phía sau", "🔙"],
        ["nearby", "gần đây", "📍"],
        ["turn", "rẽ", "↩️"],
        ["block", "dãy nhà, khu phố", "🧱"],
        ["direction", "phương hướng", "🧭"]
      ],
      "grammar": [
        ["Mệnh lệnh khi chỉ đường", "Dùng động từ nguyên mẫu để ra lệnh: Turn left at the corner. Go straight ahead.", "Turn right at the bank. | Walk straight for two blocks."],
        ["Hỏi đường lịch sự", "Các câu hỏi thông dụng: Excuse me, where is the post office? Could you tell me how to get to the station?", "Excuse me, where is the bus stop? | Could you tell me how to get to the library?"]
      ],
      "quiz": [
        ["Turn ___ at the second traffic light.", "right", ["rightly", "rights", "righted"], "Turn right: rẽ phải."],
        ["The post office is ___ the bank, across the street.", "opposite", ["opposed", "oppose", "opposing"], "Opposite nghĩa là đối diện."],
        ["Walk ___ for two blocks, then turn left.", "straight", ["strait", "straightly", "straighten"], "Straight là thẳng; strait là eo biển."],
        ["The school is ___ the intersection.", "at", ["in", "on", "into"], "At the intersection: ở ngã tư."],
        ["The hotel is ___ the station, so it is easy to find.", "near", ["nearby", "nearest", "nearness"], "Near là gần; nearby là trạng từ, không đứng sau is trước danh từ."],
        ["Please ___ right at the bank and continue for five minutes.", "turn", ["turns", "turned", "turning"], "Please + động từ nguyên mẫu: turn."],
        ["The bus stop is on the ___ side of the road.", "left", ["leftover", "leftist", "leave"], "The left side: phía bên trái."]
      ],
      "sentences": [
        ["Go straight ahead until you reach the big intersection.", "Đi thẳng cho đến khi tới ngã tư lớn."],
        ["The office is behind the bank, next to the bus stop.", "Văn phòng nằm sau ngân hàng, cạnh trạm xe buýt."],
        ["Could you tell me where the nearest pharmacy is?", "Bạn có thể cho tôi biết hiệu thuốc gần nhất ở đâu không?"],
        ["Turn left at the corner, and the library is on your right.", "Rẽ trái ở góc đường, thư viện ở bên phải bạn."],
        ["The restaurant is nearby, just across the street from the hotel.", "Nhà hàng ở gần đây, ngay bên kia đường đối diện khách sạn."]
      ],
      "transform": [
        ["Turn left at the corner.", "Viết lại thành câu lịch sự, bắt đầu bằng Could you", "Could you turn left at the corner?", "Bạn có thể rẽ trái ở góc đường không?"],
        ["The post office is across from the school.", "Viết lại với opposite", "The post office is opposite the school.", "Bưu điện đối diện trường học."],
        ["The library is two blocks away from here.", "Chuyển sang câu hỏi Wh- hỏi khoảng cách", "How far is the library from here?", "Thư viện cách đây bao xa?"],
        ["You must walk straight for ten minutes.", "Viết lại với have to", "You have to walk straight for ten minutes.", "Bạn phải đi thẳng trong mười phút."]
      ],
      "extra": ["road", "map", "very", "the", "a"]
    },
    {
      "id": "lv0numbers", "group": 4, "grade": 12, "icon": "🔢", "tag": "TOEIC Part 1–2",
      "title": "Số và số lượng", "en": "Numbers and quantities",
      "desc": "Số đếm, phần trăm, phân số và các từ chỉ số lượng.",
      "words": [
        ["number", "số", "🔢"],
        ["percent", "phần trăm", "💯"],
        ["half", "một nửa", "➗"],
        ["double", "gấp đôi", "✖️"],
        ["dozen", "một tá (mười hai)", "🥚"],
        ["hundred", "một trăm", "💯"],
        ["thousand", "một nghìn", "🔟"],
        ["several", "vài, một số", "🔸"],
        ["quarter", "một phần tư", "🕐"],
        ["total", "tổng cộng", "➕"]
      ],
      "grammar": [
        ["Many, much, few, little", "Many và few đi với danh từ đếm được: many students, few errors. Much và little đi với danh từ không đếm được: much time, little money.", "Many people came to the event. | We have little time left."],
        ["Cách đọc phần trăm và phân số", "Phần trăm: ten percent. Phân số: one third, a quarter, a half. Ví dụ: one third of the staff are women.", "Sales rose by ten percent. | One third of the staff are women."]
      ],
      "quiz": [
        ["We have sold two ___ tickets so far this week.", "hundred", ["twos", "second", "twice"], "Hundred là một trăm; hai trăm là two hundred."],
        ["Only a ___ of the employees attended the training.", "few", ["fewer", "less", "little"], "Only a few: chỉ một vài; đi với danh từ đếm được."],
        ["There is ___ milk left in the bottle.", "little", ["few", "many", "fewer"], "Milk không đếm được nên dùng little."],
        ["Sales increased by ___ percent last year.", "twenty", ["twentieth", "twenties", "twentyish"], "Twenty percent: hai mươi phần trăm."],
        ["Each box contains a ___ of twelve eggs.", "dozen", ["dozens", "hundreds", "double"], "A dozen là một tá, tức mười hai."],
        ["One ___ of the budget was spent on advertising.", "quarter", ["quarters", "quarterly", "quartet"], "One quarter là một phần tư."],
        ["Several ___ have already applied for the position.", "candidates", ["candidate", "candidating", "candidacies"], "Several đi với danh từ số nhiều: candidates."]
      ],
      "sentences": [
        ["Several customers asked for a larger discount on their orders.", "Vài khách hàng đã yêu cầu giảm giá lớn hơn cho đơn hàng."],
        ["About half of the workers come to the office by bus.", "Khoảng một nửa số công nhân đi làm bằng xe buýt."],
        ["The total cost of the project is two thousand dollars.", "Tổng chi phí của dự án là hai nghìn đô la."],
        ["Our profit doubled after the new product was launched.", "Lợi nhuận của chúng tôi tăng gấp đôi sau khi ra mắt sản phẩm mới."],
        ["Only a few people attended the first meeting.", "Chỉ có một vài người tham dự cuộc họp đầu tiên."]
      ],
      "transform": [
        ["Half of the students passed the test.", "Viết lại với fifty percent", "Fifty percent of the students passed the test.", "Năm mươi phần trăm số học sinh đã qua bài kiểm tra."],
        ["Sales doubled this year.", "Viết lại với increased by one hundred percent", "Sales increased by one hundred percent this year.", "Doanh số tăng một trăm phần trăm năm nay."],
        ["There are many people in the hall.", "Viết lại với a large number of", "A large number of people are in the hall.", "Có rất đông người trong hội trường."],
        ["Only a few guests came to the party.", "Viết lại với hardly any", "Hardly any guests came to the party.", "Hầu như không có khách nào đến bữa tiệc."]
      ],
      "extra": ["more", "less", "very", "the", "a"]
    },
    {
      "id": "lv0daily", "group": 4, "grade": 12, "icon": "🌅", "tag": "TOEIC Part 1–2",
      "title": "Hoạt động hằng ngày", "en": "Daily activities",
      "desc": "Sinh hoạt hằng ngày, thói quen và cách kể về một ngày của mình.",
      "words": [
        ["wake up", "thức dậy", "🌞"],
        ["brush", "đánh răng", "🪥"],
        ["shower", "tắm vòi sen", "🚿"],
        ["cook", "nấu ăn", "🍳"],
        ["clean", "dọn dẹp", "🧹"],
        ["drive", "lái xe", "🚗"],
        ["relax", "thư giãn", "🛋️"],
        ["exercise", "tập thể dục", "🏃"],
        ["sleep", "ngủ", "😴"],
        ["shop", "mua sắm", "🛍️"]
      ],
      "grammar": [
        ["Thói quen với hiện tại đơn", "Dùng hiện tại đơn cho thói quen. Với he, she, it thêm -s: She wakes up at six. We usually cook dinner at home.", "I brush my teeth twice a day. | He exercises in the park every morning."],
        ["Trạng từ chỉ tần suất", "Always, usually, often, sometimes, never đứng trước động từ thường: I often drive to work.", "They always eat breakfast together. | She never sleeps before midnight."]
      ],
      "quiz": [
        ["She ___ up at six every morning.", "wakes", ["wake", "waking", "woke"], "Chủ ngữ she ở hiện tại đơn nên thêm -s: wakes up."],
        ["I usually ___ dinner for my family on Sundays.", "cook", ["cooks", "cooking", "cooked"], "Sau I usually là động từ nguyên mẫu: cook."],
        ["He ___ to work by motorbike every day.", "drives", ["drive", "driving", "drove"], "Chủ ngữ he số ít, hiện tại đơn: drives."],
        ["We always ___ the house on Saturday morning.", "clean", ["cleans", "cleaning", "cleaned"], "Sau always là động từ nguyên mẫu với we: clean."],
        ["They ___ to the gym three times a week.", "go", ["goes", "going", "went"], "Chủ ngữ they là số nhiều nên dùng go."],
        ["Do you ___ every morning before breakfast?", "exercise", ["exercises", "exercising", "exercised"], "Câu hỏi với do nên dùng động từ nguyên mẫu."],
        ["My son ___ at nine every night.", "sleeps", ["sleep", "sleeping", "slept"], "Chủ ngữ my son số ít, thêm -s."]
      ],
      "sentences": [
        ["I wake up early and take a shower before work.", "Tôi dậy sớm và tắm trước khi đi làm."],
        ["My mother cooks breakfast while my father cleans the kitchen.", "Mẹ tôi nấu bữa sáng trong khi bố tôi dọn bếp."],
        ["We usually drive to the office in the morning.", "Chúng tôi thường lái xe đến văn phòng vào buổi sáng."],
        ["Do you relax by reading a book in the evening?", "Bạn có thư giãn bằng cách đọc sách buổi tối không?"],
        ["She exercises for thirty minutes and then goes to sleep.", "Cô ấy tập thể dục ba mươi phút rồi đi ngủ."]
      ],
      "transform": [
        ["He wakes up at seven.", "Chuyển sang câu phủ định", "He does not wake up at seven. | He doesn't wake up at seven.", "Anh ấy không thức dậy lúc bảy giờ."],
        ["They cook dinner together.", "Chuyển sang câu hỏi Yes/No", "Do they cook dinner together?", "Họ có cùng nhau nấu bữa tối không?"],
        ["I always brush my teeth before bed.", "Viết lại với usually, giữ nghĩa gần", "I usually brush my teeth before bed.", "Tôi thường đánh răng trước khi đi ngủ."],
        ["She goes to the gym every day.", "Chuyển sang câu hỏi Wh- hỏi về tần suất", "How often does she go to the gym?", "Cô ấy đi phòng tập bao lâu một lần?"]
      ],
      "extra": ["morning", "evening", "very", "the", "a"]
    },
    {
      "id": "lv0verbs", "group": 4, "grade": 12, "icon": "🧩", "tag": "TOEIC Part 5",
      "title": "Động từ và tính từ thông dụng", "en": "Common verbs and adjectives",
      "desc": "Những động từ và tính từ hay xuất hiện trong câu Part 5.",
      "words": [
        ["improve", "cải thiện", "📈"],
        ["rise", "tăng lên", "⬆️"],
        ["reduce", "giảm", "⬇️"],
        ["replace", "thay thế", "🔁"],
        ["receive", "nhận", "📨"],
        ["convenient", "thuận tiện", "✅"],
        ["necessary", "cần thiết", "❗"],
        ["popular", "phổ biến", "⭐"],
        ["consider", "cân nhắc", "🤔"],
        ["agree", "đồng ý", "🤝"]
      ],
      "grammar": [
        ["Tính từ đuôi -able và -ful", "Tính từ thường đứng sau be hoặc trước danh từ: The room is available. This is a useful guide.", "The manager is available today. | This is a useful guide."],
        ["Động từ đi với giới từ", "Một số cụm cố định: agree with, consider doing, receive from, replace with.", "I agree with your plan. | We will replace the old printer with a new one."]
      ],
      "quiz": [
        ["The new computer is ___ for all staff members.", "available", ["availability", "availing", "avail"], "Is available: có sẵn (tính từ)."],
        ["Sales will ___ next year because of the new product.", "increase", ["increasing", "increased", "increasingly"], "Will cần động từ nguyên mẫu: increase."],
        ["We need to ___ the cost of our products.", "reduce", ["reducing", "reduced", "reduction"], "Need to + động từ nguyên mẫu: reduce."],
        ["We ___ the shipment from the supplier yesterday.", "received", ["receive", "receiving", "receipt"], "Yesterday là dấu hiệu quá khứ: received."],
        ["The old printer must be ___ with a new one.", "replaced", ["replace", "replacing", "replacement"], "Bị động với must be: replaced."],
        ["It is ___ to check the documents before signing.", "necessary", ["necessity", "necessarily", "necessitate"], "It is necessary to: cần thiết phải."],
        ["This restaurant is very ___ with local customers.", "popular", ["popularity", "popularize", "popularly"], "Is very popular: rất phổ biến."]
      ],
      "sentences": [
        ["We hope the new system will improve customer service.", "Chúng tôi hy vọng hệ thống mới sẽ cải thiện dịch vụ khách hàng."],
        ["Please consider all the options before you make a decision.", "Hãy cân nhắc mọi lựa chọn trước khi quyết định."],
        ["The meeting room is available from two to four in the afternoon.", "Phòng họp có sẵn từ hai đến bốn giờ chiều."],
        ["These changes are necessary to reduce waste in the factory.", "Những thay đổi này cần thiết để giảm lãng phí trong nhà máy."],
        ["Our new product has become very popular with young people.", "Sản phẩm mới của chúng tôi đã rất phổ biến với giới trẻ."]
      ],
      "transform": [
        ["The company increased its prices.", "Chuyển sang câu bị động", "Its prices were increased by the company.", "Giá của công ty đã được tăng lên."],
        ["We replaced the old system last month.", "Chuyển sang câu bị động", "The old system was replaced last month.", "Hệ thống cũ đã được thay thế vào tháng trước."],
        ["It is necessary to sign the form.", "Viết lại với must", "You must sign the form.", "Bạn phải ký vào mẫu đơn."],
        ["The product is very popular.", "Viết lại với many people like", "Many people like the product.", "Nhiều người thích sản phẩm này."]
      ],
      "extra": ["more", "less", "very", "the", "a"]
    },
    {
      "id": "lv3inv", "group": 1, "grade": 12, "icon": "🗃️", "tag": "TOEIC Part 5–7",
      "title": "Tồn kho và vật tư", "en": "Inventory and supplies",
      "desc": "Hàng tồn kho, thiếu hụt hàng, đặt hàng lại và kiểm kê kho.",
      "words": [
        ["inventory", "hàng tồn kho", "🗃️"],
        ["stock", "hàng trong kho", "📊"],
        ["vendor", "nhà cung cấp", "🏭"],
        ["shortage", "sự thiếu hụt", "⚠️"],
        ["restock", "bổ sung hàng", "🔄"],
        ["reorder", "đặt hàng lại", "🔁"],
        ["quantity", "số lượng", "🔢"],
        ["count", "đếm, kiểm kê", "✋"],
        ["storage", "kho chứa", "🗄️"],
        ["distribute", "phân phối", "📤"]
      ],
      "grammar": [
        ["Out of stock và in stock", "Out of stock là hết hàng. In stock là còn hàng. Be out of cũng dùng với danh từ khác: be out of order, be out of paper.", "The blue shirt is out of stock. | We are out of paper."],
        ["When và until trong câu tương lai", "Sau when và until dùng hiện tại đơn để nói về tương lai: We will reorder when the stock falls below ten.", "Please call us when the shipment arrives. | Keep the items in storage until they are needed."]
      ],
      "quiz": [
        ["The red bag is currently ___ of stock.", "out", ["on", "off", "in"], "Out of stock: hết hàng."],
        ["We need to ___ our supplies before the end of the month.", "reorder", ["reorders", "reordered", "reordering"], "Need to + động từ nguyên mẫu: reorder."],
        ["There is a ___ of paper in the office this week.", "shortage", ["shortages", "shortly", "short"], "A shortage of: sự thiếu hụt."],
        ["Please ___ the items in the storage room tonight.", "count", ["counts", "counting", "counted"], "Please + động từ nguyên mẫu: count."],
        ["The ___ of the order is ten boxes.", "quantity", ["quantities", "quantify", "quantitative"], "Quantity là số lượng, chủ ngữ số ít."],
        ["Our ___ delivers the goods every Thursday.", "vendor", ["vendors", "vended", "vending"], "Our vendor là chủ ngữ số ít, đi với delivers."],
        ["The factory will ___ the products to stores across the country.", "distribute", ["distribution", "distributed", "distributor"], "Will cần động từ nguyên mẫu: distribute."]
      ],
      "sentences": [
        ["Our inventory is checked every Friday afternoon.", "Hàng tồn kho của chúng tôi được kiểm tra mỗi chiều thứ Sáu."],
        ["The stock of winter coats is running low.", "Số áo khoác mùa đông sắp hết."],
        ["We have ordered more supplies because of the shortage.", "Chúng tôi đã đặt thêm vật tư vì thiếu hụt."],
        ["The storage room must be cleaned before the new shipment arrives.", "Kho chứa phải được dọn sạch trước khi lô hàng mới đến."],
        ["The vendor restocks the shelves twice a week.", "Nhà cung cấp bổ sung hàng lên kệ hai lần một tuần."]
      ],
      "transform": [
        ["We ran out of paper.", "Viết lại với be out of", "We are out of paper.", "Chúng tôi hết giấy rồi."],
        ["The shop has no stock of this item.", "Viết lại với out of stock", "This item is out of stock.", "Mặt hàng này đã hết hàng."],
        ["The factory delivers the goods every week.", "Chuyển sang câu bị động", "The goods are delivered by the factory every week.", "Hàng hóa được nhà máy giao mỗi tuần."],
        ["How many boxes do we need to order?", "Viết lại thành câu trần thuật, bắt đầu bằng We need to know", "We need to know how many boxes to order.", "Chúng tôi cần biết cần đặt bao nhiêu thùng."]
      ],
      "extra": ["stock", "shelf", "very", "the", "a"]
    },
    {
      "id": "lv6hr", "group": 5, "grade": 12, "icon": "🎯", "tag": "TOEIC Part 5–7",
      "title": "Nhân sự nâng cao và thăng tiến", "en": "Advanced HR and career growth",
      "desc": "Đánh giá năng lực, thăng tiến, đào tạo và chính sách phúc lợi.",
      "words": [
        ["bonus", "tiền thưởng", "💵"],
        ["productivity", "năng suất", "⚙️"],
        ["evaluation", "sự đánh giá", "📝"],
        ["credential", "chứng chỉ, bằng cấp", "🎓"],
        ["retirement", "sự nghỉ hưu", "🌅"],
        ["training", "đào tạo", "🏋️"],
        ["mentor", "người hướng dẫn", "🧭"],
        ["resign", "từ chức", "🚪"],
        ["eligible", "đủ điều kiện", "✅"],
        ["benefit", "phúc lợi", "🎁"]
      ],
      "grammar": [
        ["Tính từ đi với giới từ", "Eligible for (đủ điều kiện cho), responsible for (chịu trách nhiệm về), qualified for (đủ trình độ cho).", "She is eligible for a bonus. | He is responsible for the training program."],
        ["Câu điều kiện loại 1 trong nhân sự", "If + hiện tại đơn, will + động từ nguyên mẫu: If you complete the training, you will be considered for a bonus.", "If she passes the review, she will receive a bonus. | If you resign, you must give one month notice."]
      ],
      "quiz": [
        ["She is ___ for a bonus after two years of excellent service.", "eligible", ["eligibility", "eligibly", "eligibles"], "Is eligible for: đủ điều kiện cho."],
        ["Each employee receives a ___ review every six months.", "performance", ["performing", "performer", "performed"], "Performance review là đánh giá hiệu suất, danh từ ghép."],
        ["The company offers free ___ courses for all new staff.", "training", ["trainer", "trained", "trainees"], "Training courses là các khóa đào tạo."],
        ["Mr Lee plans to ___ next year after thirty years of work.", "retire", ["retirement", "retired", "retiring"], "Plans to + động từ nguyên mẫu: retire (nghỉ hưu)."],
        ["Each candidate must meet the minimum ___ for the job.", "qualifications", ["qualify", "qualified", "qualifying"], "Minimum qualifications: trình độ tối thiểu."],
        ["Employees who ___ must give one month's notice.", "resign", ["resigned", "resignation", "resigns"], "Who resign: chủ ngữ số nhiều nên dùng động từ nguyên mẫu."],
        ["The new health ___ include dental and vision care.", "benefits", ["beneficial", "benefited", "beneficiary"], "Benefits là phúc lợi, số nhiều đi với include."]
      ],
      "sentences": [
        ["Her performance evaluation was excellent this year.", "Đánh giá hiệu suất của cô ấy năm nay rất tốt."],
        ["The company will announce the promotions at the end of the month.", "Công ty sẽ công bố các đợt thăng chức vào cuối tháng."],
        ["Our mentor helps new staff adapt to the work quickly.", "Người hướng dẫn của chúng tôi giúp nhân viên mới làm quen với công việc nhanh chóng."],
        ["Retirement benefits are explained in the employee handbook.", "Chế độ hưu trí được giải thích trong sổ tay nhân viên."],
        ["The candidate has the qualifications required for the position.", "Ứng viên có đủ trình độ cần thiết cho vị trí này."]
      ],
      "transform": [
        ["The manager promoted him last year.", "Chuyển sang câu bị động", "He was promoted by the manager last year.", "Anh ấy được quản lý thăng chức năm ngoái."],
        ["She completed the training course.", "Chuyển sang câu phủ định", "She did not complete the training course. | She didn't complete the training course.", "Cô ấy đã không hoàn thành khóa đào tạo."],
        ["Our staff are eligible for the bonus.", "Viết lại với qualify for", "Our staff qualify for the bonus.", "Nhân viên của chúng tôi đủ điều kiện nhận tiền thưởng."],
        ["Who will evaluate the new employees?", "Viết lại thành câu trần thuật với will evaluate", "Someone will evaluate the new employees.", "Ai đó sẽ đánh giá nhân viên mới."]
      ],
      "extra": ["staff", "manager", "very", "the", "a"]
    },
    {
      "id": "lv6nego", "group": 5, "grade": 12, "icon": "🗣️", "tag": "TOEIC Part 3–4",
      "title": "Đàm phán và thương lượng", "en": "Negotiation",
      "desc": "Đề xuất, nhượng bộ, thương lượng giá và điều khoản.",
      "words": [
        ["negotiate", "đàm phán", "🗣️"],
        ["proposal", "đề xuất", "📝"],
        ["concession", "sự nhượng bộ", "🤲"],
        ["compromise", "thỏa hiệp", "⚖️"],
        ["deal", "thỏa thuận, giao dịch", "🤝"],
        ["offer", "chào giá", "🎁"],
        ["terms", "điều khoản", "📑"],
        ["counteroffer", "đề nghị đối ứng", "🔁"],
        ["accept", "chấp nhận", "✅"],
        ["reject", "bác bỏ, từ chối", "❌"]
      ],
      "grammar": [
        ["Cụm từ đàm phán", "Make a proposal, make an offer, reach a compromise, come to an agreement: các cụm cố định hay gặp.", "We made a proposal to the client. | Both sides reached a compromise."],
        ["Câu điều kiện loại 2 trong đàm phán", "If + quá khứ đơn, would + động từ nguyên mẫu: If they agreed to lower the price, we would sign the deal.", "If the supplier accepted our terms, we would place a larger order. | I would accept the offer if the terms were better."]
      ],
      "quiz": [
        ["Both sides finally reached a ___ after three days of talks.", "compromise", ["compromising", "compromised", "compromiser"], "Reach a compromise: đạt thỏa hiệp."],
        ["The client rejected our first ___ because the price was too high.", "proposal", ["proposed", "proposing", "proposals"], "Our first proposal: đề xuất đầu tiên, số ít."],
        ["The company made a generous ___ to its suppliers.", "offer", ["offers", "offering", "offered"], "A generous offer: một đề nghị hậu hĩnh."],
        ["They agreed to make a small ___ on the delivery date.", "concession", ["concede", "conceded", "conceding"], "A small concession: một nhượng bộ nhỏ."],
        ["Please review the ___ of the contract before we sign.", "terms", ["termed", "terminal", "terminate"], "The terms of the contract: các điều khoản hợp đồng."],
        ["If the supplier ___ our terms, we would sign the contract today.", "accepted", ["accept", "accepting", "accepts"], "Câu điều kiện loại 2 dùng quá khứ đơn: accepted."],
        ["The buyer decided to ___ the offer because the price was too high.", "reject", ["rejection", "rejected", "rejecting"], "Decided to + động từ nguyên mẫu: reject."]
      ],
      "sentences": [
        ["We would like to make a proposal for a longer contract.", "Chúng tôi muốn đề xuất một hợp đồng dài hạn hơn."],
        ["The supplier made a concession and lowered the price by five percent.", "Nhà cung cấp đã nhượng bộ và giảm giá năm phần trăm."],
        ["Both parties hope to reach a compromise before the deadline.", "Cả hai bên đều hy vọng đạt được thỏa hiệp trước hạn chót."],
        ["The counteroffer was lower than we expected.", "Đề nghị đối ứng thấp hơn chúng tôi mong đợi."],
        ["Please read the terms carefully before you accept the deal.", "Hãy đọc kỹ các điều khoản trước khi chấp nhận thỏa thuận."]
      ],
      "transform": [
        ["They rejected our offer.", "Chuyển sang câu bị động", "Our offer was rejected by them.", "Đề nghị của chúng tôi đã bị họ từ chối."],
        ["The buyer accepted the terms.", "Chuyển sang câu hỏi Yes/No", "Did the buyer accept the terms?", "Người mua có chấp nhận điều khoản không?"],
        ["We will make a counteroffer tomorrow.", "Viết lại với plan to", "We plan to make a counteroffer tomorrow.", "Chúng tôi dự định đưa ra đề nghị đối ứng vào ngày mai."],
        ["If the price is too high, we will not buy it.", "Viết lại với unless", "We will not buy it unless the price is lower.", "Chúng tôi sẽ không mua trừ khi giá thấp hơn."]
      ],
      "extra": ["buyer", "seller", "very", "the", "a"]
    },
    {
      "id": "lv6fin", "group": 5, "grade": 12, "icon": "📈", "tag": "TOEIC Part 5–7",
      "title": "Đầu tư và tài chính doanh nghiệp", "en": "Investment and corporate finance",
      "desc": "Đầu tư, cổ đông, cổ tức, vay vốn và danh mục tài sản.",
      "words": [
        ["investment", "khoản đầu tư", "💼"],
        ["shareholder", "cổ đông", "🧾"],
        ["dividend", "cổ tức", "💵"],
        ["equity", "vốn chủ sở hữu", "📘"],
        ["portfolio", "danh mục đầu tư", "📁"],
        ["return", "lợi nhuận đầu tư", "🔁"],
        ["risk", "rủi ro", "⚠️"],
        ["asset", "tài sản", "🏠"],
        ["credit", "tín dụng, khoản vay", "💳"],
        ["fund", "quỹ", "🏦"]
      ],
      "grammar": [
        ["Động từ và giới từ tài chính", "Invest in: đầu tư vào. Borrow from: vay từ. Be in debt: mắc nợ.", "The company invested in new technology. | They borrowed money from the bank."],
        ["So sánh trong báo cáo đầu tư", "Dùng more, less, higher, lower với các chỉ số: Returns are higher than last year. The risk is lower this quarter.", "Profits are higher than expected. | Costs were lower in the second quarter."]
      ],
      "quiz": [
        ["The company decided to ___ in renewable energy next year.", "invest", ["investor", "investment", "investing"], "Decided to + động từ nguyên mẫu: invest in."],
        ["Each ___ will receive a dividend at the end of the year.", "shareholder", ["shareholders", "shareholding", "shares"], "Each đi với danh từ số ít: shareholder."],
        ["The fund has a ___ of ten companies in different industries.", "portfolio", ["portfolios", "porto", "portable"], "A portfolio of: danh mục gồm."],
        ["The bank approved a ___ of two million dollars for the new factory.", "credit", ["lend", "lent", "lending"], "A credit: khoản tín dụng, danh từ số ít sau a."],
        ["Investors are worried about the ___ of losing money in the market.", "risk", ["risky", "riskier", "risking"], "The risk of: nguy cơ của việc."],
        ["The ___ on this investment was higher than expected.", "return", ["returns", "returned", "returning"], "The return on: lợi nhuận trên khoản đầu tư."],
        ["Our total ___ include cash, property, and equipment.", "assets", ["asset", "assetted", "assetting"], "Assets là tài sản, số nhiều đi với include."]
      ],
      "sentences": [
        ["The investment will help the company grow in the long term.", "Khoản đầu tư sẽ giúp công ty phát triển trong dài hạn."],
        ["Shareholders voted to approve the dividend payment.", "Các cổ đông đã biểu quyết thông qua việc trả cổ tức."],
        ["The bank offered a low interest credit to small businesses.", "Ngân hàng cung cấp khoản tín dụng lãi suất thấp cho doanh nghiệp nhỏ."],
        ["Investors should consider the risk before they buy shares.", "Nhà đầu tư nên cân nhắc rủi ro trước khi mua cổ phiếu."],
        ["The fund holds a portfolio of government bonds and stocks.", "Quỹ nắm giữ danh mục gồm trái phiếu chính phủ và cổ phiếu."]
      ],
      "transform": [
        ["The company invested two million dollars in the project.", "Chuyển sang câu bị động", "Two million dollars were invested in the project by the company.", "Hai triệu đô la đã được công ty đầu tư vào dự án."],
        ["They borrowed money from the bank.", "Chuyển sang câu hỏi Yes/No", "Did they borrow money from the bank?", "Họ có vay tiền từ ngân hàng không?"],
        ["The risk is low this year.", "Viết lại với not high", "The risk is not high this year.", "Rủi ro năm nay không cao."],
        ["Our assets are worth more than our debts.", "Viết lại với exceed", "Our assets exceed our debts.", "Tài sản của chúng tôi vượt quá nợ."]
      ],
      "extra": ["money", "market", "very", "the", "a"]
    },
    {
      "id": "lv6logi", "group": 5, "grade": 12, "icon": "🚛", "tag": "TOEIC Part 6–7",
      "title": "Logistics và chuỗi cung ứng", "en": "Logistics and supply chain",
      "desc": "Vận tải hàng hóa, hải quan, xuất nhập khẩu và tuyến đường giao hàng.",
      "words": [
        ["logistics", "hậu cần, logistics", "🚚"],
        ["supply chain", "chuỗi cung ứng", "🔗"],
        ["freight", "hàng hóa vận chuyển", "🚢"],
        ["customs", "hải quan", "🛃"],
        ["import", "nhập khẩu", "📥"],
        ["export", "xuất khẩu", "📤"],
        ["transit", "quá cảnh, đang vận chuyển", "🛤️"],
        ["route", "tuyến đường", "🗺️"],
        ["forwarder", "đại lý giao nhận", "📮"],
        ["clearance", "thủ tục thông quan", "✔️"]
      ],
      "grammar": [
        ["Cụm từ chuỗi cung ứng", "In transit: đang vận chuyển. Subject to: tùy thuộc vào. Responsible for: chịu trách nhiệm về.", "The goods are in transit. | Delivery dates are subject to change."],
        ["By và through trong câu bị động", "By nêu tác nhân thực hiện. Through nêu đường đi hoặc quá trình.", "The order was approved by the manager. | Parcels pass through the warehouse first."]
      ],
      "quiz": [
        ["The shipment is currently ___ transit to the central warehouse.", "in", ["on", "at", "by"], "In transit: đang trên đường vận chuyển."],
        ["Goods must pass ___ customs before they can be delivered.", "through", ["by", "across", "over"], "Pass through customs: đi qua hải quan."],
        ["The company wants to ___ its products to Japan next year.", "export", ["exports", "exported", "exporter"], "Wants to + động từ nguyên mẫu: export."],
        ["Our ___ handles all the paperwork for overseas shipments.", "forwarder", ["forwarders", "forwarded", "forwarding"], "Our forwarder: đại lý giao nhận, chủ ngữ số ít."],
        ["The delivery schedule is ___ to change because of bad weather.", "subject", ["subjects", "subjective", "subjectively"], "Subject to change: có thể thay đổi."],
        ["The truck will take a shorter ___ to the port.", "route", ["routine", "routing", "routed"], "A shorter route: một tuyến đường ngắn hơn."],
        ["Goods are ___ by the port authority before they leave the country.", "cleared", ["clearing", "clearance", "clear"], "Are cleared by: được thông quan bởi."]
      ],
      "sentences": [
        ["Our logistics team plans the delivery routes every week.", "Nhóm logistics của chúng tôi lên kế hoạch tuyến giao hàng mỗi tuần."],
        ["The supply chain was disrupted by the storm last month.", "Chuỗi cung ứng đã bị gián đoạn bởi cơn bão tháng trước."],
        ["Freight charges will increase after the new tax takes effect.", "Phí vận chuyển hàng hóa sẽ tăng sau khi thuế mới có hiệu lực."],
        ["The export documents must be signed before the goods are shipped.", "Chứng từ xuất khẩu phải được ký trước khi hàng được gửi đi."],
        ["Customs clearance usually takes two to three working days.", "Thủ tục thông quan thường mất hai đến ba ngày làm việc."]
      ],
      "transform": [
        ["The forwarder sent the documents yesterday.", "Chuyển sang câu bị động", "The documents were sent by the forwarder yesterday.", "Chứng từ đã được đại lý giao nhận gửi hôm qua."],
        ["We import most of our raw materials.", "Chuyển sang câu bị động", "Most of our raw materials are imported.", "Phần lớn nguyên liệu thô của chúng tôi được nhập khẩu."],
        ["The goods are still in transit.", "Viết lại với on the way", "The goods are still on the way.", "Hàng hóa vẫn đang trên đường."],
        ["Customs cleared the shipment.", "Chuyển sang câu bị động", "The shipment was cleared by customs.", "Lô hàng đã được hải quan thông quan."]
      ],
      "extra": ["port", "cargo", "very", "the", "a"]
    },
    {
      "id": "lv6events", "group": 5, "grade": 12, "icon": "🎤", "tag": "TOEIC Part 3–7",
      "title": "Hội nghị và sự kiện", "en": "Conferences and events",
      "desc": "Hội nghị, diễn giả, hội thảo, chương trình và gian hàng triển lãm.",
      "words": [
        ["summit", "hội nghị cấp cao", "🎤"],
        ["keynote", "bài phát biểu chính", "🗣️"],
        ["speaker", "diễn giả", "🎙️"],
        ["attendee", "người tham dự", "🙋"],
        ["seminar", "hội thảo", "📚"],
        ["timetable", "thời gian biểu", "📋"],
        ["site", "địa điểm tổ chức", "🏛️"],
        ["workshop", "hội thảo thực hành", "🛠️"],
        ["fair", "hội chợ triển lãm", "🖼️"],
        ["booth", "gian hàng", "🏪"]
      ],
      "grammar": [
        ["Mời tham dự sự kiện", "Các mẫu thông dụng: We would like to invite you to... The event is open to all staff.", "We would like to invite you to the conference. | The workshop is open to the public."],
        ["Thì hiện tại trong lịch trình", "Lịch trình sự kiện dùng hiện tại tiếp diễn hoặc is scheduled to: The keynote is starting soon. The seminar is scheduled to begin at nine.", "The keynote is starting soon. | The seminar will be held in Hall B."]
      ],
      "quiz": [
        ["The ___ is scheduled to start at nine tomorrow.", "conference", ["conferred", "conferring", "conferences"], "Is scheduled: chủ ngữ số ít, nên dùng conference."],
        ["Each ___ will receive a name badge at the registration desk.", "attendee", ["attend", "attended", "attending"], "Each đi với danh từ số ít: attendee."],
        ["The ___ for the workshop is on the third floor.", "venue", ["venues", "venturing", "vent"], "The venue là địa điểm tổ chức, chủ ngữ số ít với is."],
        ["Please review the ___ before the meeting begins.", "agenda", ["agree", "agreed", "agreeable"], "Agenda là chương trình nghị sự."],
        ["The company will ___ a booth at the trade fair next year.", "exhibit", ["exhibition", "exhibited", "exhibitor"], "Will cần động từ nguyên mẫu: exhibit (trưng bày)."],
        ["The ___ on climate change was very informative.", "seminar", ["seminars", "seminaring", "seminal"], "The seminar was: hội thảo, chủ ngữ số ít đi với was."],
        ["Our speaker ___ at the conference at nine tomorrow morning.", "will speak", ["spoke", "speaking", "speaks"], "Tomorrow là dấu hiệu tương lai: will speak."]
      ],
      "sentences": [
        ["We would like to invite you to the annual conference.", "Chúng tôi xin mời bạn tham dự hội nghị thường niên."],
        ["The keynote speaker is an expert in digital marketing.", "Diễn giả chính là chuyên gia về tiếp thị số."],
        ["Attendees must register online before the workshop begins.", "Người tham dự phải đăng ký trực tuyến trước khi hội thảo bắt đầu."],
        ["The fair is open to the public on Saturday.", "Hội chợ mở cửa cho công chúng vào thứ Bảy."],
        ["The booth will display our newest products and prices.", "Gian hàng sẽ trưng bày các sản phẩm mới nhất và bảng giá của chúng tôi."]
      ],
      "transform": [
        ["The seminar will be held in Hall B.", "Chuyển sang câu bị động với is held", "Hall B is where the seminar will be held.", "Hội thảo sẽ diễn ra tại Hội trường B."],
        ["The organizers invited all attendees to lunch.", "Chuyển sang câu bị động", "All attendees were invited to lunch by the organizers.", "Tất cả người tham dự được ban tổ chức mời ăn trưa."],
        ["The speaker gave a long speech.", "Viết lại với delivered", "The speaker delivered a long speech.", "Diễn giả đã có một bài phát biểu dài."],
        ["We will hold the summit in June.", "Chuyển sang câu bị động", "The summit will be held in June.", "Hội nghị cấp cao sẽ được tổ chức vào tháng Sáu."]
      ],
      "extra": ["event", "guest", "very", "the", "a"]
    },
    {
      "id": "dt0", "mock": true, "group": 4, "grade": 12, "icon": "📝", "tag": "Đề thi thử · 0–300",
      "title": "Đề thi thử 0–300 · Số 1", "en": "Mock test 0–300 No. 1",
      "desc": "Đề gồm 15 câu điền từ và một bài đọc 5 câu. Làm trọn đề theo thứ tự, không dừng lại tra cứu.",
      "grammar": [
        ["Cách làm đề", "Đề này dành cho người mới làm quen với TOEIC. Hãy đọc kỹ từng câu, xem từ đứng trước và sau chỗ trống, rồi chọn đáp án.", "She goes to school by bus. | There are two apples on the table."]
      ],
      "quiz": [
        ["We ___ to school by bus every morning.", "go", ["goes", "going", "went"], "Chủ ngữ we dùng động từ nguyên mẫu go."],
        ["She has three ___, and all of them live in Hanoi.", "sisters", ["sister's", "sisterly", "sisterhood"], "Có three nên danh từ phải ở số nhiều: sisters."],
        ["There ___ two apples and one banana on the table.", "are", ["is", "be", "was"], "Chủ ngữ gồm nhiều danh từ nên dùng are."],
        ["How ___ eggs do you need for this cake?", "many", ["much", "few", "some"], "Eggs đếm được nên hỏi bằng how many."],
        ["The store is ___ the bank, on the other side of the street.", "opposite", ["opposed", "opposing", "opposition"], "Opposite nghĩa là đối diện."],
        ["It is very ___ in winter, so wear a warm coat.", "cold", ["coldly", "coldness", "colder"], "Very + tính từ gốc: cold."],
        ["I ___ my teeth twice a day.", "brush", ["brushes", "brushing", "brushed"], "Chủ ngữ I dùng động từ nguyên mẫu brush."],
        ["The meeting starts ___ half past nine on Monday.", "at", ["in", "on", "to"], "Giờ cụ thể đi với at."],
        ["Please put some ___ in the soup.", "salt", ["salty", "salted", "salting"], "Salt là danh từ không đếm được, cần danh từ sau some."],
        ["Sales rose by ___ percent last month.", "ten", ["tenth", "tens", "tenner"], "Ten percent: mười phần trăm."],
        ["The bus ___ at the station at seven every day.", "stops", ["stop", "stopping", "stopped"], "Chủ ngữ the bus số ít nên thêm -s."],
        ["My brother ___ in the library on Sundays.", "works", ["work", "working", "worked"], "Hiện tại đơn với chủ ngữ số ít: works."],
        ["Turn ___ at the corner, and you will see the park.", "left", ["leftover", "leftist", "lefts"], "Turn left: rẽ trái."],
        ["The ___ is 30 degrees today, so it is very hot.", "temperature", ["temperatures", "thermal", "warm"], "Temperature là nhiệt độ, chủ ngữ số ít với is."],
        ["Please ___ the door when you leave the room.", "close", ["closed", "closing", "closes"], "Câu mệnh lệnh dùng động từ nguyên mẫu: close."]
      ],
      "reading": {
        "title": "Thông báo chợ cuối tuần", "kind": "notice",
        "text": [
          "The Weekend Market opens every Saturday and Sunday from 7 a.m. to 12 noon at Green Park, next to the library.",
          "You can buy fresh fruit, vegetables, eggs, bread and tea from more than thirty stalls. Some stalls sell clothes and shoes too.",
          "Parking is available near the bridge. The entrance is free, but please bring your own bags. The market is closed on rainy days."
        ],
        "questions": [
          ["When is the market open?", "On Saturday and Sunday mornings", ["Every weekday afternoon", "Only on Monday", "Every evening"], "Chợ mở thứ Bảy và Chủ nhật từ 7 giờ sáng đến 12 giờ trưa."],
          ["Where is the market?", "Next to the library in Green Park", ["Next to the hospital", "Near the train station", "In the city museum"], "Chợ nằm ở Green Park, cạnh thư viện."],
          ["What can visitors buy at the market?", "Fresh food such as fruit and eggs", ["Cars and motorbikes", "Furniture", "Train tickets"], "Chợ bán trái cây, rau, trứng, bánh mì và trà."],
          ["What should visitors bring?", "Their own bags", ["A parking ticket", "A special card", "Their own chairs"], "Thông báo yêu cầu mang túi riêng."],
          ["When is the market closed?", "On rainy days", ["On Sundays", "On public holidays", "During summer"], "Chợ đóng cửa vào những ngày mưa."]
        ]
      }
    },
    {
      "id": "dt3", "mock": true, "group": 1, "grade": 12, "icon": "📝", "tag": "Đề thi thử · 300–600",
      "title": "Đề thi thử 300–600 · Số 1", "en": "Mock test 300–600 No. 1",
      "desc": "Đề gồm 15 câu điền từ về công sở và một bài đọc email 5 câu. Làm trọn đề theo thứ tự.",
      "grammar": [
        ["Cách làm đề", "Đề này kiểm tra từ loại, thì và cấu trúc bị động. Xem kỹ dấu hiệu thời gian như last month, by Friday, yesterday.", "The report was submitted yesterday. | Please review the file by Friday."]
      ],
      "quiz": [
        ["Please ___ the monthly report to the manager by Friday.", "submit", ["submission", "submitting", "submitted"], "Please + động từ nguyên mẫu: submit."],
        ["The conference room ___ on the third floor, next to the lobby.", "is located", ["located", "locating", "locate"], "Dạng bị động: is located, chủ ngữ số ít."],
        ["All ___ must register at the front desk before the seminar begins.", "attendees", ["attend", "attendee's", "attending"], "All đi với danh từ số nhiều: attendees."],
        ["We ___ the new office space last month and moved in on June 1.", "rented", ["rent", "renting", "rents"], "Last month là dấu hiệu quá khứ: rented."],
        ["The shipment will be ___ to the warehouse on Tuesday.", "delivered", ["deliver", "delivering", "deliveries"], "Will be + quá khứ phân từ: delivered."],
        ["Our profit has been ___ this year because of the new product.", "profitable", ["profiting", "profitably", "profits"], "Has been + tính từ: profitable (có lãi)."],
        ["Could you ___ me with the new software?", "help", ["helpful", "helped", "helping"], "Could you + động từ nguyên mẫu: help."],
        ["The hotel offers a free ___ for all guests every morning.", "breakfast", ["breakfasts", "breakfasted", "breakfasting"], "A free breakfast: một bữa sáng miễn phí."],
        ["Please ___ the document before you send it to the client.", "review", ["reviews", "reviewing", "reviewed"], "Please + động từ nguyên mẫu: review."],
        ["The ___ of the new product was delayed because of a shortage of parts.", "launch", ["launches", "launched", "launching"], "The launch of: việc ra mắt, danh từ số ít."],
        ["Our IT ___ will fix the printer this afternoon.", "team", ["teamwork", "teamed", "teaming"], "Our IT team: nhóm IT, danh từ đứng sau IT."],
        ["Each ___ must sign the form before leaving the office.", "employee", ["employees", "employment", "employ"], "Each đi với danh từ số ít: employee."],
        ["The manager asked us to ___ our work by Monday.", "complete", ["completed", "completion", "completing"], "Asked us to + động từ nguyên mẫu: complete."],
        ["The company ___ five new employees last month.", "hired", ["hire", "hiring", "hires"], "Last month là quá khứ: hired."],
        ["The annual budget meeting ___ at ten o'clock on Thursday.", "begins", ["begin", "beginning", "began"], "Lịch đã định, chủ ngữ số ít: begins."]
      ],
      "reading": {
        "title": "Email xác nhận cuộc họp", "kind": "email",
        "text": [
          "Subject: Monthly sales meeting. Dear all, the monthly sales meeting has been moved from Wednesday to Thursday at 10 a.m. in Room 204. Please bring your sales reports and the updated inventory list.",
          "Because the shipment from our vendor is delayed, we will discuss the stock shortage first. Lunch will be served after the meeting.",
          "If you cannot attend, please tell Mai so she can prepare enough seats and food. Thank you, Linh."
        ],
        "questions": [
          ["What has changed about the meeting?", "The day has been changed to Thursday", ["The room has been changed to Room 304", "The meeting has been cancelled", "The time has been changed to 2 p.m."], "Cuộc họp đổi từ thứ Tư sang thứ Năm; giờ và phòng không đổi."],
          ["What should attendees bring?", "Sales reports and the updated inventory list", ["Their laptops and chargers", "A signed contract", "Lunch money"], "Email yêu cầu mang báo cáo bán hàng và danh sách tồn kho."],
          ["Why will the stock shortage be discussed first?", "A shipment from the vendor is delayed", ["The price of goods has increased", "The warehouse is being renovated", "A new employee has resigned"], "Lô hàng từ nhà cung cấp bị trễ."],
          ["What should a person do if they cannot attend?", "Tell Mai that they cannot attend", ["Send a written apology to the manager", "Call the vendor directly", "Attend the meeting online only"], "Email yêu cầu báo cho Mai để chuẩn bị chỗ ngồi và đồ ăn."],
          ["What will be served after the meeting?", "Lunch", ["Coffee and cake", "Breakfast", "Tea and bread"], "Email ghi: Lunch will be served after the meeting."]
        ]
      }
    },
    {
      "id": "dt6", "mock": true, "group": 5, "grade": 12, "icon": "📝", "tag": "Đề thi thử · 600–900",
      "title": "Đề thi thử 600–900 · Số 1", "en": "Mock test 600–900 No. 1",
      "desc": "Đề gồm 15 câu ngữ pháp nâng cao và một bài đọc 5 câu. Làm trọn đề theo thứ tự, không xáo câu.",
      "grammar": [
        ["Cách làm đề", "Đề này kiểm tra câu điều kiện loại 3, đảo ngữ, bị động tương lai và giới từ cố định. Đọc hết câu trước khi chọn.", "If we had started earlier, we would have finished. | Not only did they meet the target, but they also finished early."]
      ],
      "quiz": [
        ["The contract will ___ automatically unless either party gives written notice.", "renew", ["renewal", "renewed", "renewing"], "Will + động từ nguyên mẫu: renew."],
        ["Both companies must comply ___ the safety standards set by the government.", "with", ["to", "for", "on"], "Comply with: tuân thủ."],
        ["The ___ of the product is confirmed by three independent laboratories.", "quality", ["qualify", "qualified", "qualifying"], "Chủ ngữ cần danh từ: quality (chất lượng)."],
        ["If the supplier had delivered on time, we ___ the project earlier.", "would have finished", ["would finish", "finish", "finished"], "Câu điều kiện loại 3 dùng would have + quá khứ phân từ."],
        ["The report ___ by the auditors before the board meeting next week.", "will be reviewed", ["will review", "reviewed", "reviewing"], "Tương lai bị động: will be + quá khứ phân từ."],
        ["Investors ___ the risks before they committed their funds.", "had assessed", ["were assessing", "assessing", "assess"], "Hành động xảy ra trước một hành động quá khứ khác: had assessed."],
        ["Our ___ with the supplier has lasted for ten years.", "partnership", ["partially", "partnered", "partnering"], "Chủ ngữ cần danh từ: partnership (quan hệ hợp tác)."],
        ["Several proposals were rejected because they failed to ___ the requirements.", "meet", ["meeting", "met", "meets"], "Failed to + động từ nguyên mẫu: meet."],
        ["The consultant ___ the new strategy to the board last week.", "presented", ["present", "presenting", "presentation"], "Last week là quá khứ: presented."],
        ["Attached ___ the revised terms for your review.", "are", ["is", "be", "been"], "Đảo ngữ với danh từ số nhiều: attached are the terms."],
        ["The company decided to ___ its operations in Asia to reduce costs.", "consolidate", ["consolidation", "consolidated", "consolidating"], "Decided to + động từ nguyên mẫu: consolidate."],
        ["___ the delay, the project remained on budget.", "Despite", ["Although", "However", "Because"], "Despite + danh từ: mặc dù có sự chậm trễ."],
        ["Our new logistics ___ has reduced delivery times by twenty percent.", "system", ["systems", "systematic", "systemize"], "Logistics system: hệ thống hậu cần, danh từ số ít đi với has."],
        ["The buyer insisted ___ a lower price before signing the agreement.", "on", ["at", "for", "to"], "Insist on: khăng khăng đòi."],
        ["Not only ___ the budget, but the team also finished early.", "did they meet", ["they met", "met they", "they did meet"], "Đảo ngữ sau Not only: did they meet."]
      ],
      "reading": {
        "title": "Báo cáo về chuỗi cung ứng", "kind": "article",
        "text": [
          "Last year, Greenway Logistics introduced a new inventory system across its eight regional warehouses. The system tracks freight shipments in real time and alerts managers when stock falls below the minimum level.",
          "Early results are encouraging. Delivery times have fallen by about twenty percent, and customs clearance is faster because documents are now sent electronically. However, the company admits that the system was expensive to install and that some suppliers still struggle to use it.",
          "Greenway plans to extend the system to its overseas partners next year. A pilot program in Singapore will begin in March, and the board has approved an additional budget for training staff in the new software."
        ],
        "questions": [
          ["What does the new system do?", "It tracks shipments and warns managers about low stock", ["It designs new products for customers", "It calculates employee bonuses", "It negotiates prices with suppliers"], "Hệ thống theo dõi lô hàng theo thời gian thực và cảnh báo khi hàng tồn thấp."],
          ["How much have delivery times decreased?", "By about twenty percent", ["By about fifty percent", "By about ten percent", "They have not changed"], "Thời gian giao hàng giảm khoảng hai mươi phần trăm."],
          ["What drawback is mentioned in the article?", "The system was expensive to install", ["The system is too slow", "Customers dislike the system", "The system stores no data"], "Bài viết nói hệ thống đắt để cài đặt."],
          ["Where will the pilot program begin?", "In Singapore", ["In Hanoi", "In the head office", "In Manila"], "Chương trình thử nghiệm bắt đầu ở Singapore vào tháng Ba."],
          ["Why has the board approved an additional budget?", "To train staff in the new software", ["To hire new board members", "To build more warehouses", "To pay customs fees"], "Ngân sách bổ sung để đào tạo nhân viên dùng phần mềm mới."]
        ]
      }
    },
    {
      "id": "dt1", "mock": true, "group": 4, "grade": 12, "icon": "📝", "tag": "Đề thi thử · 0–300",
      "title": "Đề thi thử 0–300 · Số 2", "en": "Mock test 0–300 No. 2",
      "desc": "Đề gồm 15 câu điền từ và một thông báo thư viện 5 câu. Làm trọn đề theo thứ tự, không dừng lại tra cứu.",
      "grammar": [
        ["Cách làm đề", "Đề này kiểm tra thì hiện tại đơn, some và many, giới từ chỉ nơi chốn và thứ trong tuần. Trước khi chọn động từ, hãy xem chủ ngữ là số ít hay số nhiều.", "My sister lives near the school. | There are many students in the class."]
      ],
      "quiz": [
        ["My father ___ a doctor at the city hospital.", "is", ["are", "be", "am"], "Chủ ngữ my father là số ít nên dùng is."],
        ["They ___ football in the park every Sunday.", "play", ["plays", "playing", "played"], "Chủ ngữ they dùng động từ nguyên mẫu play."],
        ["I have ___ pens, so you can take one.", "some", ["a", "an", "much"], "Pens là danh từ đếm được số nhiều; câu khẳng định dùng some."],
        ["How ___ brothers do you have?", "many", ["much", "long", "some"], "Brothers đếm được nên hỏi how many."],
        ["The bank is ___ to the post office, on the left side.", "next", ["nearly", "nearest", "nearby"], "Next to: bên cạnh."],
        ["It is very ___ today, so take an umbrella.", "wet", ["wetly", "wetness", "wetter"], "Very + tính từ gốc: wet."],
        ["I ___ breakfast at seven every morning.", "have", ["has", "having", "had"], "Chủ ngữ I và thói quen hằng ngày dùng hiện tại đơn: have."],
        ["The class starts ___ Monday morning.", "on", ["in", "at", "to"], "Thứ trong tuần đi với on."],
        ["Please ___ your shoes before you enter the house.", "take off", ["take on", "take out", "take up"], "Take off: cởi (giày, dép)."],
        ["She ___ her homework every evening after dinner.", "does", ["do", "doing", "did"], "Chủ ngữ she số ít, hiện tại đơn: does."],
        ["We bought ___ bread at the bakery this morning.", "some", ["many", "fewer", "one"], "Bread là danh từ không đếm được, dùng some."],
        ["My sister ___ to music in her room every night.", "listens", ["listen", "listening", "listened"], "Thói quen hiện tại với chủ ngữ số ít: listens."],
        ["The hotel room has a nice ___ of the sea.", "view", ["views", "viewing", "viewed"], "A nice view: một tầm nhìn đẹp, danh từ số ít sau a."],
        ["Her grandmother ___ in a small village near the river.", "lives", ["live", "living", "lived"], "Hiện tại đơn, chủ ngữ số ít: lives."],
        ["Can you ___ me the way to the post office?", "show", ["shows", "showing", "shown"], "Can + động từ nguyên mẫu: show."]
      ],
      "reading": {
        "title": "Thông báo thư viện", "kind": "notice",
        "text": [
          "The City Library is open from Tuesday to Sunday, from 9 a.m. to 8 p.m. It is closed on Mondays.",
          "Members can borrow up to five books for two weeks. Books can be renewed once by phone or online if no one else has reserved them.",
          "The library has a children's room on the second floor. Children under twelve must be accompanied by an adult. Food is not allowed in the reading room."
        ],
        "questions": [
          ["On which day is the library closed?", "On Monday", ["On Sunday", "On Tuesday", "On Friday"], "Thư viện đóng cửa vào thứ Hai."],
          ["How many books can a member borrow at one time?", "Five books", ["Two books", "Ten books", "Fifteen books"], "Thành viên được mượn tối đa năm cuốn."],
          ["How can a book be renewed?", "By phone or online", ["In person at the entrance", "By sending a letter", "By paying a fine"], "Sách có thể gia hạn qua điện thoại hoặc trực tuyến."],
          ["Who must go with children under twelve?", "An adult", ["Another child", "A librarian", "A bus driver"], "Trẻ dưới 12 tuổi phải có người lớn đi cùng."],
          ["What is not allowed in the reading room?", "Food", ["Books", "Pencils", "Laptops"], "Không được mang đồ ăn vào phòng đọc."]
        ]
      }
    },
    {
      "id": "dt4", "mock": true, "group": 1, "grade": 12, "icon": "📝", "tag": "Đề thi thử · 300–600",
      "title": "Đề thi thử 300–600 · Số 2", "en": "Mock test 300–600 No. 2",
      "desc": "Đề gồm 15 câu điền từ về công sở và một bài đọc email 5 câu. Làm trọn đề theo thứ tự.",
      "grammar": [
        ["Cách làm đề", "Đề này kiểm tra thì quá khứ đơn, cấu trúc bị động và cụm từ đi với giới từ. Xem kỹ các dấu hiệu như last year, last month, last spring.", "The office moved last year. | The proposal is expected to pass."]
      ],
      "quiz": [
        ["The new hire ___ her training last Monday and started work on Tuesday.", "began", ["begin", "beginning", "begins"], "Last Monday là dấu hiệu quá khứ: began."],
        ["All ___ must wear their badges while they are in the building.", "visitors", ["visit", "visited", "visiting"], "All đi với danh từ số nhiều: visitors."],
        ["The proposal ___ to be approved at the next board meeting.", "is expected", ["expects", "expecting", "expect"], "Dạng bị động: is expected to, nghĩa là được dự kiến."],
        ["Please ___ your expense reports to the accounting department by Friday.", "send", ["sending", "sent", "sends"], "Please + động từ nguyên mẫu: send."],
        ["The factory ___ its production by 15 percent last year.", "increased", ["increasing", "increase", "increases"], "Last year là quá khứ: increased."],
        ["Our new office is ___ the main station, so staff can walk there.", "near", ["nearly", "nearest", "nearby"], "Near + danh từ: gần. Nearby không đi với the."],
        ["The marketing team ___ a new campaign last spring.", "launched", ["launch", "launching", "launches"], "Last spring là quá khứ: launched."],
        ["Ms. Tran is responsible ___ the quality of all products in the factory.", "for", ["to", "with", "about"], "Responsible for: chịu trách nhiệm về."],
        ["Our suppliers ___ in three different countries.", "are based", ["based", "basing", "bases"], "Be based in: có trụ sở tại."],
        ["Please ___ your password regularly to keep your account safe.", "change", ["changes", "changed", "changing"], "Please + động từ nguyên mẫu: change."],
        ["The price of the laptop ___ by ten percent last month.", "dropped", ["drops", "dropping", "drop"], "Last month là quá khứ: dropped."],
        ["Each department ___ a monthly report to the director.", "submits", ["submit", "submitting", "submitted"], "Each đi với động từ số ít: submits."],
        ["The sales ___ is expected to grow next year.", "forecast", ["forecasts", "forecasted", "forecaster"], "Sales forecast: dự báo doanh số, danh từ số ít."],
        ["The new policy will take ___ on the first day of next month.", "effect", ["effective", "effectively", "effects"], "Take effect: có hiệu lực. Effect là danh từ."],
        ["The board ___ the proposal after a long discussion.", "accepted", ["accept", "accepting", "acceptable"], "Sự việc đã xong trong quá khứ: accepted."]
      ],
      "reading": {
        "title": "Email thông báo lịch đào tạo", "kind": "email",
        "text": [
          "Subject: New training schedule. Dear staff, the customer service training has been moved from Friday to Thursday morning. It will begin at 9 a.m. in the main training room on the fourth floor.",
          "Staff who work the night shift may attend the afternoon session at 2 p.m. instead. Please confirm your choice with Hoa by Wednesday.",
          "The training is free and includes lunch. Please remember to bring your employee card, because it will be checked at the door. Thank you, Duc."
        ],
        "questions": [
          ["What has changed about the training?", "The day has changed to Thursday", ["The room has moved to the first floor", "The training has been cancelled", "The start time has changed to 10 a.m."], "Buổi đào tạo chuyển từ thứ Sáu sang thứ Năm; giờ bắt đầu vẫn là 9 giờ sáng."],
          ["Who may attend the afternoon session?", "Staff working the night shift", ["Managers only", "New employees", "Visitors from other companies"], "Nhân viên ca đêm có thể tham dự buổi chiều."],
          ["What should staff do by Wednesday?", "Confirm their choice with Hoa", ["Send a written report to Duc", "Bring their own lunch", "Book a training room"], "Phải xác nhận lựa chọn với Hoa trước thứ Tư."],
          ["Where will the training take place?", "In the main training room on the fourth floor", ["In the main hall on the first floor", "In the cafeteria", "In the director's office"], "Buổi đào tạo diễn ra ở phòng đào tạo chính, tầng 4."],
          ["What must employees bring?", "Their employee card", ["Their laptops", "A signed contract", "Their lunch"], "Thẻ nhân viên sẽ được kiểm tra ở cửa."]
        ]
      }
    },
    {
      "id": "dt7", "mock": true, "group": 5, "grade": 12, "icon": "📝", "tag": "Đề thi thử · 600–900",
      "title": "Đề thi thử 600–900 · Số 2", "en": "Mock test 600–900 No. 2",
      "desc": "Đề gồm 15 câu ngữ pháp và từ vựng nâng cao, cùng một bài báo 5 câu. Làm trọn đề theo thứ tự, không xáo câu.",
      "grammar": [
        ["Cách làm đề", "Đề này kiểm tra đảo ngữ, câu điều kiện loại 3, câu bị động và cụm từ đi với giới từ. Đọc hết câu trước khi chọn đáp án.", "Had we known earlier, we would have acted. | Not until Monday did the report arrive."]
      ],
      "quiz": [
        ["Had the board known about the risk, it ___ a different decision.", "would have made", ["would make", "makes", "made"], "Đảo ngữ điều kiện loại 3 dùng would have + quá khứ phân từ."],
        ["The investors ___ to accept the terms if the company had revised its offer.", "would have agreed", ["would agree", "agreed", "agree"], "Điều kiện loại 3 với had revised: would have agreed."],
        ["Not until the audit was finished ___ the error discovered.", "was", ["were", "had", "did"], "Đảo ngữ với Not until: trợ động từ was đứng trước chủ ngữ the error."],
        ["The merger ___ to be completed by the end of the fiscal year.", "is expected", ["expects", "expecting", "expect"], "Bị động: is expected to, dự kiến hoàn thành."],
        ["The firm's ___ to reduce waste has saved millions in disposal costs.", "commitment", ["commit", "committed", "committing"], "Sau sở hữu cách cần danh từ: commitment (cam kết)."],
        ["We are ___ to the proposal to close the plant next year.", "opposed", ["opposite", "oppose", "opposition"], "Be opposed to: phản đối."],
        ["The auditors ___ several irregularities in the accounts last quarter.", "identified", ["identify", "identifying", "identity"], "Last quarter là dấu hiệu quá khứ: identified."],
        ["Should any delays ___, please inform the client immediately.", "occur", ["occurs", "occurred", "occurring"], "Đảo ngữ với Should dùng động từ nguyên mẫu: occur."],
        ["The new regulation ___ all companies to report their emissions annually.", "requires", ["require", "required", "requiring"], "Chủ ngữ regulation số ít nên dùng requires."],
        ["Rarely ___ such a large order in such a short time.", "have we received", ["we have received", "we received", "received we"], "Đảo ngữ sau Rarely: have + chủ ngữ + quá khứ phân từ."],
        ["The project manager, along with her team, ___ the final report yesterday.", "submitted", ["submit", "submitting", "submits"], "Yesterday là quá khứ: submitted. Cụm along with không đổi số của chủ ngữ."],
        ["The company's ___ growth has slowed in the second half of the year.", "overall", ["overly", "overlay", "overlap"], "Overall là tính từ, nghĩa tổng thể, đứng trước danh từ growth."],
        ["The contract was ___ after both parties agreed to the new terms.", "signed", ["sign", "signing", "signature"], "Bị động với was: signed."],
        ["Despite ___ the deadline, the team delivered a high-quality product.", "missing", ["miss", "misses", "missed"], "Despite + động từ thêm -ing: missing."],
        ["The bank will ___ the loan once the documents have been verified.", "approve", ["approval", "approved", "approving"], "Will + động từ nguyên mẫu: approve."]
      ],
      "reading": {
        "title": "Bài báo về trang trại năng lượng mặt trời", "kind": "article",
        "text": [
          "Brightline Energy announced on Monday that it will build a solar farm in the northern province. The project is expected to cost about 120 million dollars and will be completed within three years.",
          "The company says the farm will supply electricity to nearly 40,000 homes once it is running. Analysts believe the deal could help the firm attract new investors, although some local residents have raised concerns about land use.",
          "A public hearing will be held next month to discuss the environmental impact. Brightline has promised to plant trees around the site and to hire at least half of its workers from the local area."
        ],
        "questions": [
          ["What is the main purpose of the announcement?", "To describe a new solar farm project", ["To report a drop in profits", "To announce a merger with another firm", "To ask residents for funding"], "Thông báo mô tả dự án trang trại năng lượng mặt trời mới."],
          ["How long will the project take to finish?", "About three years", ["About one year", "About six months", "About five years"], "Dự án sẽ hoàn thành trong vòng ba năm."],
          ["What concern have some local residents raised?", "How the land will be used", ["The high price of electricity", "The noise from a factory", "The lack of jobs in the area"], "Một số cư dân lo ngại về việc sử dụng đất."],
          ["What will happen next month?", "A public hearing about the environmental impact", ["The farm will open to visitors", "The company will sell its shares", "Workers will be hired from abroad"], "Sẽ có buổi điều trần công khai về tác động môi trường."],
          ["What has the company promised to do?", "Plant trees and hire local workers", ["Sell electricity at a discount", "Move its head office abroad", "Stop all new construction"], "Công ty hứa trồng cây và tuyển ít nhất một nửa lao động địa phương."]
        ]
      }
    },
    {
      "id": "itbasic", "group": 6, "grade": 12, "icon": "💻", "tag": "Chuyên ngành CNTT",
      "title": "Công nghệ thông tin cơ bản", "en": "Basic IT vocabulary",
      "desc": "Phần cứng, phần mềm, mạng, mật khẩu và các thao tác máy tính hằng ngày.",
      "words": [
        ["program", "chương trình", "💿"],
        ["hardware", "phần cứng", "🖥️"],
        ["database", "cơ sở dữ liệu", "🗄️"],
        ["server", "máy chủ", ""],
        ["internet", "mạng internet", "🌐"],
        ["login", "đăng nhập", "🔐"],
        ["download", "tải xuống", "⬇️"],
        ["upload", "tải lên", "⬆️"],
        ["bug", "lỗi trong phần mềm", "🐛"],
        ["keyboard", "bàn phím", "⌨️"],
        ["virus", "phần mềm độc hại", "🦠"],
        ["application", "ứng dụng", "📱"],
        ["developer", "lập trình viên", "👨‍💻"],
        ["restart", "khởi động lại", "🔁"]
      ],
      "grammar": [
        ["Động từ khuyết thiếu trong hướng dẫn", "Can, must và should đi trước động từ nguyên mẫu, không thêm -s. Ví dụ: You must save your work before you close the file.", "You should back up your files every week. | The program can run on Windows and Linux."],
        ["Câu bị động trong mô tả hệ thống", "Dạng bị động gồm be cộng quá khứ phân từ. Dùng khi nói về việc được làm mà không cần nhắc người làm.", "The data is stored on a secure server. | The file was deleted by mistake."]
      ],
      "quiz": [
        ["Please ___ your password before you log in to the system.", "enter", ["enters", "entering", "entered"], "Please + động từ nguyên mẫu: enter."],
        ["The new ___ will make our website load much faster.", "program", ["programmer", "programmed", "programming"], "Chủ ngữ là một vật nên dùng program (chương trình), không phải người."],
        ["Our IT team will ___ the servers every night at midnight.", "restart", ["restarts", "restarted", "restarting"], "Will + động từ nguyên mẫu: restart."],
        ["You need a valid ___ to access the system.", "login", ["logins", "logging", "logged"], "A valid login: thông tin đăng nhập hợp lệ, danh từ số ít sau a."],
        ["The ___ is down, so we cannot access any files today.", "server", ["servers", "serve", "serving"], "The server là chủ ngữ số ít, nghĩa là máy chủ."],
        ["Did you ___ the file from the internet before you installed it?", "download", ["downloads", "downloaded", "downloading"], "Did you + động từ nguyên mẫu: download."],
        ["The programmer found a ___ in the code and fixed it quickly.", "bug", ["bugs", "buggy", "bugging"], "A bug: một lỗi phần mềm, danh từ số ít sau a."],
        ["All ___ connected to the internet must have a valid address.", "devices", ["device", "devised", "deviation"], "All đi với danh từ số nhiều: devices (thiết bị)."],
        ["Our company stores customer records in a secure ___.", "database", ["databases", "data", "datably"], "A secure database: một cơ sở dữ liệu an toàn, số ít sau a."],
        ["I cannot type this letter because the ___ is broken.", "keyboard", ["keyboards", "keyed", "keying"], "The keyboard là chủ ngữ số ít: bàn phím."]
      ],
      "sentences": [
        ["The developer fixed the bug before the release date.", "Lập trình viên đã sửa lỗi trước ngày phát hành."],
        ["Please save your work regularly so you do not lose any data.", "Hãy lưu công việc thường xuyên để không mất dữ liệu."],
        ["The internet is slow today because many people are watching videos.", "Mạng hôm nay chậm vì nhiều người đang xem video."],
        ["Our developers are building a new application for mobile phones.", "Các lập trình viên của chúng tôi đang xây dựng một ứng dụng mới cho điện thoại di động."],
        ["Never share your password with anyone, even a close colleague.", "Không bao giờ chia sẻ mật khẩu với bất kỳ ai, kể cả đồng nghiệp thân."]
      ],
      "transform": [
        ["The team tested the program yesterday.", "Chuyển sang câu bị động", "The program was tested by the team yesterday.", "Chương trình được nhóm kiểm tra hôm qua."],
        ["The IT department installs new programs every month.", "Chuyển sang câu bị động", "New programs are installed by the IT department every month.", "Phòng CNTT cài đặt phần mềm mới mỗi tháng."],
        ["Nobody can open this file without a password.", "Chuyển sang câu bị động với can", "This file cannot be opened without a password. | This file can't be opened without a password.", "Không ai có thể mở tệp này nếu không có mật khẩu."],
        ["The virus deleted all the files.", "Chuyển sang câu bị động", "All the files were deleted by the virus.", "Virus đã xóa toàn bộ các tệp."]
      ],
      "extra": ["folder", "screen", "very", "the", "a"]
    }
  ]
});
