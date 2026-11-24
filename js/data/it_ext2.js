/* EngVui – CNTT mở rộng, đợt 2 (nhóm "Chuyên ngành CNTT"): nghề nghiệp, email công việc, lưu trữ, thực tế ảo, robot công nghiệp, pháp lý và đạo đức.
   Nội dung tự soạn. Định dạng giống js/data/exam.js; kiểm tra bằng tools/validate_it.py. Phần trong ngoặc là JSON chuẩn. */
EV.extendExam({
  "names": ["USB", "GDPR", "SSD", "HDD", "RAID", "VR", "AR"],
  "groups": [],
  "topics": [
    {
      "id": "itcareer", "group": 6, "grade": 11, "icon": "👩‍💻", "tag": "CNTT",
      "title": "Nghề nghiệp trong ngành CNTT", "en": "IT careers",
      "desc": "Các vị trí công việc, kỹ năng, phỏng vấn lập trình và làm việc từ xa.",
      "words": [
        ["software engineer", "kỹ sư phần mềm", ""],
        ["system administrator", "quản trị viên hệ thống", ""],
        ["data analyst", "nhà phân tích dữ liệu", ""],
        ["tester", "người kiểm thử phần mềm", ""],
        ["project manager", "quản lý dự án", ""],
        ["tech lead", "trưởng nhóm kỹ thuật", ""],
        ["coding interview", "buổi phỏng vấn lập trình", ""],
        ["technical skill", "kỹ năng chuyên môn", ""],
        ["soft skill", "kỹ năng mềm", ""],
        ["certification", "chứng chỉ chuyên môn", ""],
        ["remote job", "công việc làm từ xa", ""],
        ["team player", "người biết làm việc nhóm", ""],
        ["junior", "cấp thấp, mới vào nghề", ""],
        ["senior", "cấp cao, nhiều kinh nghiệm", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả công việc", "Dùng hiện tại đơn để nói về nhiệm vụ thường ngày của một nghề: A tester looks for bugs.", "A software engineer designs, builds and tests programs. | The project manager sets the schedule."]
      ],
      "quiz": [
        ["A ___ looks after the servers and networks of a company.", "system administrator", ["data analyst", "tester", "project manager"], "Người chăm sóc máy chủ và mạng là quản trị viên hệ thống."],
        ["A ___ studies numbers to help a company make better decisions.", "data analyst", ["tester", "tech lead", "system administrator"], "Người nghiên cứu số liệu để đưa ra quyết định là nhà phân tích dữ liệu."],
        ["A ___ looks for bugs in a program before users see it.", "tester", ["project manager", "data analyst", "tech lead"], "Người tìm lỗi trước khi người dùng thấy là người kiểm thử: tester."],
        ["Communication and teamwork are examples of a ___.", "soft skill", ["certification", "coding interview", "remote job"], "Giao tiếp, làm việc nhóm là kỹ năng mềm: soft skill."],
        ["During a ___, the candidate must solve a programming problem while the interviewers watch.", "coding interview", ["certification", "remote job", "soft skill"], "Giải bài lập trình trước mặt người phỏng vấn là coding interview."],
        ["A ___ developer has many years of experience and often helps newer members.", "senior", ["junior", "remote", "technical"], "Nhiều năm kinh nghiệm và hướng dẫn người mới là cấp cao: senior."]
      ],
      "sentences": [
        ["A software engineer designs, builds and tests programs.", "Kỹ sư phần mềm thiết kế, xây dựng và kiểm thử chương trình."],
        ["The project manager sets the schedule and the budget.", "Quản lý dự án đặt lịch trình và ngân sách."],
        ["A tech lead guides the team on technical decisions.", "Trưởng nhóm kỹ thuật dẫn dắt nhóm trong các quyết định kỹ thuật."],
        ["She earned a cloud certification last year.", "Cô ấy đã lấy một chứng chỉ điện toán đám mây năm ngoái."],
        ["Good teamwork is a soft skill that every team player needs.", "Làm việc nhóm tốt là kỹ năng mềm mà người cộng tác nào cũng cần."],
        ["Many companies now offer a remote job to skilled developers.", "Nhiều công ty giờ đưa ra công việc làm từ xa cho lập trình viên giỏi."]
      ],
      "transform": [
        ["The company hired a new tester.", "Chuyển sang câu bị động", "A new tester was hired by the company.", "Một người kiểm thử mới đã được công ty thuê."],
        ["The tech lead reviews the code.", "Chuyển sang câu bị động", "The code is reviewed by the tech lead.", "Mã được trưởng nhóm kỹ thuật duyệt."],
        ["He is a senior engineer.", "Viết lại ở dạng phủ định", "He is not a senior engineer.|He isn't a senior engineer.", "Anh ấy không phải là kỹ sư cấp cao."]
      ]
    },
    {
      "id": "itemail", "group": 6, "grade": 11, "icon": "✉️", "tag": "CNTT",
      "title": "Email và giao tiếp công việc trong CNTT", "en": "Workplace emails for IT",
      "desc": "Báo cáo tiến độ, tệp đính kèm, đầu việc, xin lỗi, bàn giao và cách kết thư.",
      "words": [
        ["status update", "cập nhật tiến độ", ""],
        ["attached file", "tệp đính kèm", "📎"],
        ["meeting notes", "biên bản cuộc họp", ""],
        ["action item", "đầu việc cần làm", ""],
        ["apologise", "xin lỗi", ""],
        ["change request", "yêu cầu thay đổi", ""],
        ["handover", "việc bàn giao công việc", ""],
        ["reminder", "lời nhắc", ""],
        ["kind regards", "trân trọng (cuối thư)", ""],
        ["as soon as possible", "càng sớm càng tốt", ""],
        ["in the meantime", "trong lúc đó", ""],
        ["heads-up", "lời báo trước", ""],
        ["out of office", "đang vắng mặt, nghỉ phép", ""],
        ["subject line", "dòng tiêu đề email", ""]
      ],
      "grammar": [
        ["Lời đề nghị lịch sự với Could you", "Dùng Could you + động từ nguyên mẫu để nhờ ai làm gì, thêm please cho nhẹ nhàng hơn.", "Could you send me the status update? | Could you please resend the attached file?"]
      ],
      "quiz": [
        ["Please find the ___ with the full report.", "attached file", ["subject line", "reminder", "heads-up"], "Tệp gửi kèm email là tệp đính kèm: attached file."],
        ["I am writing to give you a short ___ on the progress of the project.", "status update", ["handover", "reminder", "subject line"], "Báo cáo ngắn về tiến độ là cập nhật tiến độ: status update."],
        ["Each ___ in the meeting notes has an owner and a deadline.", "action item", ["subject line", "handover", "reminder"], "Việc cần làm ghi trong biên bản là action item."],
        ["The customer sent a ___ asking us to add one more report to the system.", "change request", ["handover", "status update", "subject line"], "Khách đề nghị thêm báo cáo là yêu cầu thay đổi: change request."],
        ["Please reply ___, because the customer is waiting.", "as soon as possible", ["in the meantime", "kind regards", "out of office"], "Khách đang chờ nên cần trả lời càng sớm càng tốt."],
        ["I will be ___ until Monday, so I cannot answer emails.", "out of office", ["attached file", "as soon as possible", "in the meantime"], "Vắng mặt đến thứ Hai là out of office."]
      ],
      "sentences": [
        ["Please write a clear subject line so that people understand the topic.", "Hãy viết dòng tiêu đề rõ ràng để mọi người hiểu chủ đề."],
        ["I apologise for the delay in my reply.", "Tôi xin lỗi vì trả lời chậm."],
        ["The team lead sent the meeting notes to everyone after the call.", "Trưởng nhóm gửi biên bản cuộc họp cho mọi người sau cuộc gọi."],
        ["Here is a short heads-up about tonight's maintenance.", "Đây là một thông báo trước ngắn về đợt bảo trì tối nay."],
        ["In the meantime, please use the temporary link.", "Trong lúc đó, hãy dùng liên kết tạm thời."],
        ["The engineer wrote a handover document before he left the project.", "Kỹ sư viết tài liệu bàn giao trước khi rời dự án."]
      ],
      "transform": [
        ["I attached the file to the email.", "Chuyển sang câu bị động", "The file was attached to the email by me.", "Tệp đã được tôi đính kèm vào email."],
        ["The manager approved the change request.", "Chuyển sang câu bị động", "The change request was approved by the manager.", "Yêu cầu thay đổi đã được quản lý phê duyệt."],
        ["Please send me the status update.", "Viết lại thành lời đề nghị lịch sự với Could you", "Could you send me the status update?|Could you please send me the status update?", "Bạn có thể gửi cho tôi bản cập nhật tiến độ không?"]
      ]
    },
    {
      "id": "itstorage", "group": 6, "grade": 10, "icon": "💽", "tag": "CNTT",
      "title": "Lưu trữ dữ liệu", "en": "Data storage",
      "desc": "Đơn vị đo dung lượng, SSD, HDD, RAID, ổ đĩa ngoài và phân vùng.",
      "words": [
        ["megabyte", "đơn vị khoảng một triệu byte", ""],
        ["gigabyte", "đơn vị khoảng một tỷ byte", ""],
        ["terabyte", "đơn vị khoảng một nghìn tỷ byte", ""],
        ["capacity", "dung lượng chứa", ""],
        ["storage device", "thiết bị lưu trữ", ""],
        ["flash drive", "ổ USB", "💾"],
        ["external drive", "ổ đĩa gắn ngoài", ""],
        ["SSD", "ổ cứng thể rắn", ""],
        ["HDD", "ổ cứng cơ", ""],
        ["RAID", "hệ thống nhiều ổ đĩa dự phòng", ""],
        ["partition", "phân vùng ổ đĩa", ""],
        ["format", "định dạng ổ đĩa", ""],
        ["disk space", "dung lượng đĩa còn trống", ""],
        ["read speed", "tốc độ đọc dữ liệu", ""]
      ],
      "grammar": [
        ["So sánh hơn khi nói về thiết bị", "Dùng tính từ ngắn + er hoặc more + tính từ dài + than: An SSD is faster than an HDD.", "A terabyte is much larger than a megabyte. | An SSD has a higher read speed than an HDD."]
      ],
      "quiz": [
        ["A ___ is bigger than a gigabyte and equals about one thousand gigabytes.", "terabyte", ["megabyte", "partition", "format"], "Khoảng một nghìn gigabyte là một terabyte."],
        ["Replacing the old hard disk with a fast ___ makes the computer start much faster.", "SSD", ["partition", "RAID", "capacity"], "Ổ cứng thể rắn không có bộ phận chuyển động nên nhanh hơn: SSD."],
        ["A ___ is a small portable device that you plug into a USB port to carry files.", "flash drive", ["RAID", "partition", "format"], "Thiết bị nhỏ cắm cổng USB để mang tệp là flash drive."],
        ["To ___ a disk means to erase it and prepare it for a new file system.", "format", ["copy", "scan", "print"], "Xóa sạch và chuẩn bị đĩa cho hệ thống tệp mới là định dạng: format."],
        ["___ combines several disks so that data is safe even if one disk fails.", "RAID", ["Partition", "Capacity", "Format"], "Gộp nhiều ổ đĩa để dữ liệu vẫn an toàn khi một ổ hỏng là RAID."],
        ["The ___ of this drive is two terabytes, so it can hold a lot of videos.", "capacity", ["partition", "format", "read speed"], "Lượng dữ liệu ổ chứa được là dung lượng: capacity."]
      ],
      "sentences": [
        ["This flash drive has a capacity of sixty-four gigabytes.", "Chiếc ổ USB này có dung lượng sáu mươi bốn gigabyte."],
        ["A terabyte is much larger than a megabyte.", "Một terabyte lớn hơn một megabyte rất nhiều."],
        ["An SSD has a higher read speed than an HDD.", "SSD có tốc độ đọc cao hơn HDD."],
        ["Create a partition to separate your work files from your games.", "Hãy tạo một phân vùng để tách tệp công việc khỏi trò chơi."],
        ["Make a copy of your files on an external drive.", "Hãy sao chép tệp của bạn sang một ổ đĩa gắn ngoài."],
        ["The computer shows a message when there is not enough disk space.", "Máy tính hiện thông báo khi không còn đủ dung lượng đĩa."]
      ],
      "transform": [
        ["The technician formatted the disk.", "Chuyển sang câu bị động", "The disk was formatted by the technician.", "Ổ đĩa đã được kỹ thuật viên định dạng."],
        ["The drive has a large capacity.", "Viết lại thành câu hỏi Yes/No", "Does the drive have a large capacity?", "Ổ đĩa có dung lượng lớn không?"],
        ["The SSD reads data quickly.", "Viết lại ở dạng phủ định", "The SSD does not read data quickly.", "SSD không đọc dữ liệu nhanh."]
      ]
    },
    {
      "id": "itvr", "group": 6, "grade": 12, "icon": "🥽", "tag": "CNTT",
      "title": "Thực tế ảo và thực tế tăng cường", "en": "Virtual and augmented reality",
      "desc": "Kính VR, theo dõi chuyển động, góc nhìn, phản hồi xúc giác và âm thanh không gian.",
      "words": [
        ["augmented reality", "thực tế tăng cường", ""],
        ["mixed reality", "thực tế hỗn hợp", ""],
        ["headset", "kính, thiết bị đội đầu", "🥽"],
        ["motion tracking", "theo dõi chuyển động", ""],
        ["field of view", "góc nhìn", ""],
        ["simulation", "sự mô phỏng", ""],
        ["immersive", "nhập vai, đắm chìm", ""],
        ["haptic feedback", "phản hồi xúc giác", ""],
        ["spatial audio", "âm thanh không gian", ""],
        ["360-degree video", "video 360 độ", ""],
        ["depth sensor", "cảm biến độ sâu", ""],
        ["avatar", "hình đại diện", ""],
        ["motion sickness", "chứng say chuyển động", ""],
        ["refresh rate", "tần số làm mới màn hình", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả thiết bị theo dõi", "Dùng be + V3 để nói điều thiết bị làm với dữ liệu: The motion of the player is tracked by the headset.", "The distance is measured by the depth sensor. | The motion of the player is tracked by the headset."]
      ],
      "quiz": [
        ["In ___, a phone camera shows the real room with digital furniture added on top.", "augmented reality", ["motion sickness", "haptic feedback", "refresh rate"], "Thêm vật thể số lên cảnh thật là thực tế tăng cường."],
        ["The ___ in a virtual world is a character that represents you.", "avatar", ["headset", "simulation", "field of view"], "Nhân vật đại diện cho bạn trong thế giới ảo là avatar."],
        ["The controller vibrates to give you ___ when you touch a virtual object.", "haptic feedback", ["spatial audio", "motion tracking", "refresh rate"], "Rung để bạn cảm nhận khi chạm vật ảo là phản hồi xúc giác."],
        ["A wider ___ lets you see more of the virtual world without turning your head.", "field of view", ["refresh rate", "avatar", "depth sensor"], "Thấy được nhiều hơn mà không quay đầu nhờ góc nhìn rộng."],
        ["Some users feel dizzy in VR because of ___, especially when the image moves too fast.", "motion sickness", ["haptic feedback", "spatial audio", "simulation"], "Chóng mặt khi hình ảnh chuyển động nhanh là say chuyển động."],
        ["Pilots practise in a flight ___ before they fly a real plane.", "simulation", ["avatar", "headset", "refresh rate"], "Buồng tập bay giả lập là sự mô phỏng: simulation."]
      ],
      "sentences": [
        ["The headset covers your eyes and shows a virtual world.", "Kính che mắt bạn và hiển thị một thế giới ảo."],
        ["Motion tracking follows the movement of your head and hands.", "Theo dõi chuyển động bám theo cử động đầu và tay của bạn."],
        ["Spatial audio makes sounds seem to come from different directions.", "Âm thanh không gian làm âm thanh có vẻ đến từ các hướng khác nhau."],
        ["An immersive game makes the player feel like part of the story.", "Trò chơi nhập vai khiến người chơi cảm thấy mình là một phần của câu chuyện."],
        ["A high refresh rate reduces blur in fast scenes.", "Tần số làm mới cao giảm nhòe ở các cảnh nhanh."],
        ["Students explore ancient cities in a 360-degree video.", "Học sinh khám phá các thành phố cổ trong một video 360 độ."]
      ],
      "transform": [
        ["The headset tracks the motion of the player.", "Chuyển sang câu bị động", "The motion of the player is tracked by the headset.", "Chuyển động của người chơi được kính theo dõi."],
        ["The depth sensor measures the distance.", "Chuyển sang câu bị động", "The distance is measured by the depth sensor.", "Khoảng cách được cảm biến độ sâu đo."],
        ["The game uses haptic feedback.", "Viết lại thành câu hỏi Yes/No", "Does the game use haptic feedback?", "Game có dùng phản hồi xúc giác không?"]
      ]
    },
    {
      "id": "itrobot", "group": 6, "grade": 12, "icon": "🦾", "tag": "CNTT",
      "title": "Robot công nghiệp", "en": "Industrial robots",
      "desc": "Cánh tay robot, động cơ servo, bộ kẹp, hiệu chỉnh và lập kế hoạch đường đi.",
      "words": [
        ["robotic arm", "cánh tay robot", "🦾"],
        ["servo motor", "động cơ servo", ""],
        ["gripper", "bộ phận kẹp", ""],
        ["end effector", "đầu công tác của robot", ""],
        ["industrial robot", "robot công nghiệp", ""],
        ["collaborative robot", "robot cộng tác", ""],
        ["programmable", "có thể lập trình", ""],
        ["obstacle", "chướng ngại vật", ""],
        ["path planning", "lập kế hoạch đường đi", ""],
        ["calibrate", "hiệu chỉnh", ""],
        ["safety fence", "hàng rào an toàn", ""],
        ["joint", "khớp của robot", ""],
        ["torque", "mô-men xoắn", ""],
        ["precision", "độ chính xác cao", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả công việc của robot", "Dùng be + V3 để nhấn mạnh vật được tác động: The parts are picked up by the robot.", "The parts are picked up by the robot. | The sensor was calibrated by engineers."]
      ],
      "quiz": [
        ["A ___ robot is designed to work safely next to humans without a safety fence.", "collaborative", ["industrial", "humanoid", "wireless"], "Robot làm việc an toàn cạnh con người không cần hàng rào là robot cộng tác."],
        ["The ___ at the end of the robotic arm picks up and holds objects.", "gripper", ["servo motor", "safety fence", "joint"], "Bộ phận kẹp ở đầu cánh tay là gripper."],
        ["A ___ moves a robot joint to an exact position.", "servo motor", ["gripper", "obstacle", "safety fence"], "Động cơ đưa khớp đến vị trí chính xác là động cơ servo."],
        ["The robot uses ___ to find a safe route around objects on the factory floor.", "path planning", ["torque", "precision", "joint"], "Tìm đường an toàn tránh vật cản là lập kế hoạch đường đi."],
        ["Engineers must ___ the sensors regularly, or the robot will make errors.", "calibrate", ["weld", "paint", "pack"], "Chỉnh lại cảm biến cho chính xác là hiệu chỉnh: calibrate."],
        ["Robots in car factories work with great ___, so every part is placed in exactly the right position.", "precision", ["obstacle", "torque", "joint"], "Đặt chi tiết đúng vị trí nhờ độ chính xác cao: precision."]
      ],
      "sentences": [
        ["The robotic arm lifts the box and places it on the belt.", "Cánh tay robot nhấc chiếc hộp và đặt lên băng chuyền."],
        ["A servo motor controls the angle of each joint.", "Động cơ servo điều khiển góc của từng khớp."],
        ["The gripper opens and closes to hold different objects.", "Bộ kẹp mở ra và đóng lại để giữ các vật khác nhau."],
        ["A programmable robot can learn a new task from new instructions.", "Robot có thể lập trình học nhiệm vụ mới từ chỉ dẫn mới."],
        ["The sensors detect an obstacle and the robot stops.", "Cảm biến phát hiện chướng ngại vật và robot dừng lại."],
        ["A safety fence keeps workers away from an industrial robot.", "Hàng rào an toàn giữ công nhân tránh xa robot công nghiệp."]
      ],
      "transform": [
        ["The robot picks up the parts.", "Chuyển sang câu bị động", "The parts are picked up by the robot.", "Các chi tiết được robot nhặt lên."],
        ["Engineers calibrated the sensor.", "Chuyển sang câu bị động", "The sensor was calibrated by engineers.", "Cảm biến đã được các kỹ sư hiệu chỉnh."],
        ["The robot has a gripper.", "Viết lại thành câu hỏi Yes/No", "Does the robot have a gripper?", "Robot có bộ phận kẹp không?"]
      ]
    },
    {
      "id": "itlegal", "group": 6, "grade": 12, "icon": "⚖️", "tag": "CNTT",
      "title": "Pháp lý và đạo đức trong CNTT", "en": "IT law and ethics",
      "desc": "Bản quyền, sở hữu trí tuệ, bảo vệ dữ liệu, sự đồng ý và dấu vết số.",
      "words": [
        ["copyright", "bản quyền tác giả", ""],
        ["intellectual property", "sở hữu trí tuệ", ""],
        ["trademark", "nhãn hiệu đã đăng ký", ""],
        ["piracy", "nạn sao chép lậu", ""],
        ["consent", "sự đồng ý", ""],
        ["data protection", "bảo vệ dữ liệu cá nhân", ""],
        ["privacy law", "luật về quyền riêng tư", ""],
        ["GDPR", "quy định bảo vệ dữ liệu của EU", ""],
        ["terms of service", "điều khoản dịch vụ", ""],
        ["cookie policy", "chính sách cookie", ""],
        ["disclaimer", "tuyên bố miễn trách nhiệm", ""],
        ["open-source licence", "giấy phép mã nguồn mở", ""],
        ["ethical hacking", "tấn công thử nghiệm hợp pháp", ""],
        ["digital footprint", "dấu vết số", ""]
      ],
      "grammar": [
        ["Câu bị động trong văn bản pháp lý", "Dùng be + V3 để nói điều luật và công ty làm với dữ liệu: Personal data is protected by the law.", "User data is collected by the company. | Personal data is protected by the law."]
      ],
      "quiz": [
        ["Copying and selling films or software without permission is called ___.", "piracy", ["consent", "disclaimer", "trademark"], "Sao chép và bán phim, phần mềm trái phép là piracy."],
        ["You must give your ___ before a company can collect your personal data.", "consent", ["piracy", "trademark", "copyright"], "Công ty chỉ được thu thập dữ liệu khi bạn đồng ý: consent."],
        ["The ___ of a book belongs to the author, so nobody can copy it without permission.", "copyright", ["consent", "disclaimer", "cookie policy"], "Quyền của tác giả đối với tác phẩm là bản quyền: copyright."],
        ["A ___ is a name, logo or symbol that identifies a company's products and is protected by law.", "trademark", ["disclaimer", "consent", "piracy"], "Tên, logo nhận diện sản phẩm được luật bảo vệ là nhãn hiệu: trademark."],
        ["Companies hire experts for ___ to find weaknesses in their systems legally.", "ethical hacking", ["piracy", "consent", "trademark"], "Thuê chuyên gia tấn công thử hợp pháp là ethical hacking."],
        ["Every post, search and photo you share online adds to your ___.", "digital footprint", ["disclaimer", "copyright", "trademark"], "Mọi hoạt động trực tuyến để lại dấu vết số: digital footprint."]
      ],
      "sentences": [
        ["Intellectual property includes inventions, designs and software.", "Sở hữu trí tuệ gồm phát minh, thiết kế và phần mềm."],
        ["Read the terms of service before you create an account.", "Hãy đọc điều khoản dịch vụ trước khi tạo tài khoản."],
        ["The website asks for your consent to use cookies.", "Trang web xin sự đồng ý của bạn để dùng cookie."],
        ["Data protection laws such as GDPR give people more control over their information.", "Luật bảo vệ dữ liệu như GDPR cho người dân nhiều quyền kiểm soát thông tin hơn."],
        ["An open-source licence tells people how they may use and share the code.", "Giấy phép mã nguồn mở cho biết người ta được dùng và chia sẻ mã thế nào."],
        ["Piracy harms the people who create films and music.", "Sao chép lậu gây hại cho những người làm phim và nhạc."]
      ],
      "transform": [
        ["The company collects user data.", "Chuyển sang câu bị động", "User data is collected by the company.", "Dữ liệu người dùng được công ty thu thập."],
        ["The law protects personal data.", "Chuyển sang câu bị động", "Personal data is protected by the law.", "Dữ liệu cá nhân được luật bảo vệ."],
        ["Users gave their consent.", "Viết lại ở dạng phủ định", "Users did not give their consent.", "Người dùng đã không đồng ý."]
      ]
    }
  ]
}
);
