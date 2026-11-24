/* EngVui – Tiếng Anh chuyên ngành CNTT (nhóm "Chuyên ngành CNTT"): mạng, phần cứng, an ninh mạng, đám mây, AI, hỗ trợ kỹ thuật, dự án phần mềm, thiết kế giao diện, phân tích dữ liệu.
   Nội dung tự soạn. Định dạng giống js/data/exam.js; kiểm tra bằng tools/validate_it.py. Phần trong ngoặc là JSON chuẩn. */
EV.extendExam({
  "names": ["Wi-Fi", "Python", "Java", "JavaScript", "Linux", "Ubuntu", "Windows", "Android", "iOS", "Google", "Microsoft", "Excel", "GitHub", "Git"],
  "groups": [],
  "topics": [
    {
      "id": "itnet", "group": 6, "grade": 11, "icon": "🌐", "tag": "CNTT",
      "title": "Mạng máy tính", "en": "Computer networks",
      "desc": "Bộ định tuyến, giao thức, băng thông, tường lửa và những thuật ngữ về mạng.",
      "words": [
        ["router", "bộ định tuyến", "📡"],
        ["switch", "bộ chuyển mạch", ""],
        ["bandwidth", "băng thông", ""],
        ["protocol", "giao thức", ""],
        ["firewall", "tường lửa", "🧱"],
        ["packet", "gói dữ liệu", "📦"],
        ["latency", "độ trễ mạng", ""],
        ["IP address", "địa chỉ IP", ""],
        ["domain name", "tên miền", ""],
        ["gateway", "cổng kết nối giữa hai mạng", ""],
        ["proxy", "máy chủ trung gian", ""],
        ["ethernet", "mạng cáp Ethernet", ""],
        ["broadband", "Internet băng thông rộng", ""],
        ["topology", "cấu trúc kết nối mạng", ""]
      ],
      "grammar": [
        ["Câu bị động trong báo cáo kỹ thuật", "Khi người làm không quan trọng, dùng be + V3: Packets are sent through the router. Thêm by + người nếu cần nhấn mạnh.", "The data is sent by the router. | The switch was installed yesterday."]
      ],
      "quiz": [
        ["A ___ sends data packets between different networks.", "router", ["monitor", "keyboard", "printer"], "Thiết bị chuyển gói dữ liệu giữa các mạng là bộ định tuyến: router."],
        ["Video calls need low ___, or the sound will arrive late.", "latency", ["topology", "protocol", "gateway"], "Âm thanh đến trễ là do độ trễ mạng cao: latency."],
        ["A high-speed ___ connection lets many people stream videos at the same time.", "broadband", ["packet", "proxy", "topology"], "Kết nối nhanh cho nhiều người xem video là băng thông rộng: broadband."],
        ["A ___ is a set of rules that computers follow when they send data to each other.", "protocol", ["gateway", "domain name", "router"], "Bộ quy tắc để máy tính trao đổi dữ liệu là giao thức: protocol."],
        ["Instead of typing a long number, you can type the ___ of the website, such as example.com.", "domain name", ["IP address", "packet", "switch"], "Tên dễ nhớ thay cho dãy số là tên miền: domain name."],
        ["The company uses a ___ to block unwanted traffic from the Internet.", "firewall", ["topology", "broadband", "packet"], "Chặn lưu lượng không mong muốn là tường lửa: firewall."]
      ],
      "sentences": [
        ["The router sends each packet to the right device.", "Bộ định tuyến gửi từng gói dữ liệu đến đúng thiết bị."],
        ["A firewall checks every packet that enters the network.", "Tường lửa kiểm tra mọi gói dữ liệu đi vào mạng."],
        ["Slow Internet may be caused by low bandwidth or high latency.", "Internet chậm có thể do băng thông thấp hoặc độ trễ cao."],
        ["Every website has an IP address and a domain name.", "Mỗi trang web có một địa chỉ IP và một tên miền."],
        ["A proxy sits between your computer and the Internet.", "Máy chủ trung gian nằm giữa máy tính của bạn và Internet."]
      ],
      "transform": [
        ["The router sends the data.", "Chuyển sang câu bị động", "The data is sent by the router.", "Dữ liệu được bộ định tuyến gửi đi."],
        ["The network administrator installed a new switch.", "Chuyển sang câu bị động", "A new switch was installed by the network administrator.", "Một bộ chuyển mạch mới đã được quản trị viên mạng lắp đặt."],
        ["The firewall blocks the connection.", "Viết lại ở dạng phủ định", "The firewall does not block the connection.", "Tường lửa không chặn kết nối."]
      ]
    },
    {
      "id": "ithw", "group": 6, "grade": 11, "icon": "🖥️", "tag": "CNTT",
      "title": "Phần cứng máy tính", "en": "Computer hardware",
      "desc": "Bộ xử lý, bo mạch chủ, bộ nhớ, thiết bị ngoại vi và các linh kiện bên trong máy tính.",
      "words": [
        ["processor", "bộ xử lý", "🧠"],
        ["motherboard", "bo mạch chủ", ""],
        ["RAM", "bộ nhớ truy cập ngẫu nhiên", ""],
        ["graphics card", "card đồ họa", ""],
        ["monitor", "màn hình máy tính", "🖥️"],
        ["peripheral", "thiết bị ngoại vi", ""],
        ["cooling fan", "quạt tản nhiệt", ""],
        ["power supply", "bộ nguồn", "🔌"],
        ["USB port", "cổng USB", ""],
        ["circuit board", "bảng mạch điện tử", ""],
        ["chip", "vi mạch, chip", ""],
        ["memory card", "thẻ nhớ", "💾"],
        ["adapter", "bộ chuyển đổi nguồn, đầu nối", ""],
        ["heat sink", "tấm tản nhiệt", ""]
      ],
      "grammar": [
        ["Danh từ ghép trong tiếng Anh CNTT", "Hai danh từ đứng cạnh nhau, danh từ đầu bổ nghĩa cho danh từ sau và không thêm s: power supply, memory card, circuit board.", "This computer has a fast graphics card. | The USB port is on the left."]
      ],
      "quiz": [
        ["The ___ is the main board that connects the processor, memory and other parts.", "motherboard", ["monitor", "adapter", "cooling fan"], "Bo mạch chính nối các linh kiện là bo mạch chủ: motherboard."],
        ["A computer needs more ___ to run many programs at the same time without slowing down.", "RAM", ["monitor", "adapter", "heat sink"], "Nhiều chương trình chạy cùng lúc cần thêm bộ nhớ RAM."],
        ["A printer is a ___ that connects to a computer.", "peripheral", ["motherboard", "processor", "power supply"], "Máy in nối với máy tính là thiết bị ngoại vi: peripheral."],
        ["The ___ blows air through the case to stop the computer from overheating.", "cooling fan", ["power supply", "monitor", "graphics card"], "Quạt thổi khí để máy khỏi quá nóng là quạt tản nhiệt: cooling fan."],
        ["Gamers buy a powerful ___ to show smooth, detailed images.", "graphics card", ["USB port", "adapter", "motherboard"], "Hiển thị hình ảnh mượt, chi tiết cần card đồ họa mạnh."],
        ["The ___ gives electricity to every part inside the computer.", "power supply", ["heat sink", "chip", "monitor"], "Bộ phận cấp điện cho các linh kiện là bộ nguồn: power supply."]
      ],
      "sentences": [
        ["The processor is the brain of the computer.", "Bộ xử lý là bộ não của máy tính."],
        ["Plug the flash drive into the USB port.", "Hãy cắm ổ USB vào cổng USB."],
        ["A heat sink keeps the chip cool.", "Tấm tản nhiệt giữ cho chip mát."],
        ["You can store photos on a memory card.", "Bạn có thể lưu ảnh trên thẻ nhớ."],
        ["The monitor shows the image from the graphics card.", "Màn hình hiển thị hình ảnh từ card đồ họa."]
      ],
      "transform": [
        ["The technician replaced the power supply.", "Chuyển sang câu bị động", "The power supply was replaced by the technician.", "Bộ nguồn đã được kỹ thuật viên thay."],
        ["This laptop has a fast processor.", "Viết lại thành câu hỏi Yes/No", "Does this laptop have a fast processor?", "Chiếc laptop này có bộ xử lý nhanh không?"],
        ["The cooling fan makes a lot of noise.", "Viết lại ở dạng phủ định", "The cooling fan does not make a lot of noise.", "Quạt tản nhiệt không gây nhiều tiếng ồn."]
      ]
    },
    {
      "id": "itsec", "group": 6, "grade": 11, "icon": "🔒", "tag": "CNTT",
      "title": "An ninh mạng", "en": "Cybersecurity",
      "desc": "Mã độc, lừa đảo, mã hóa, xác thực và cách bảo vệ dữ liệu.",
      "words": [
        ["encryption", "sự mã hóa", ""],
        ["malware", "phần mềm độc hại", ""],
        ["phishing", "lừa đảo qua email giả mạo", "🎣"],
        ["authentication", "sự xác thực", ""],
        ["vulnerability", "lỗ hổng bảo mật", ""],
        ["breach", "vụ xâm phạm dữ liệu", ""],
        ["two-factor", "hai yếu tố (xác thực)", ""],
        ["antivirus", "phần mềm diệt virus", ""],
        ["patch", "bản vá lỗi", ""],
        ["spyware", "phần mềm gián điệp", ""],
        ["biometric", "thuộc sinh trắc học", ""],
        ["access control", "kiểm soát quyền truy cập", ""],
        ["identity theft", "đánh cắp danh tính", ""],
        ["scam", "trò lừa đảo", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong hướng dẫn bảo mật", "Dùng động từ nguyên mẫu để ra lệnh hoặc khuyên. Thêm Do not hoặc Never để cấm.", "Use a strong password. | Never click a link in a suspicious email."]
      ],
      "quiz": [
        ["Hackers sent an email that looked real to trick users into giving their passwords. This attack is called ___.", "phishing", ["encryption", "biometric", "antivirus"], "Email giả để lấy mật khẩu là lừa đảo phishing."],
        ["Software companies release a ___ to fix a security problem in a program.", "patch", ["scam", "breach", "spyware"], "Bản sửa lỗi bảo mật là bản vá: patch."],
        ["___ secretly collects information about what a user does on a computer.", "Spyware", ["Antivirus", "Encryption", "Authentication"], "Thu thập thông tin lén lút là phần mềm gián điệp: spyware."],
        ["Fingerprint and face scans are examples of ___ security.", "biometric", ["wireless", "public", "financial"], "Dấu vân tay, quét khuôn mặt là sinh trắc học: biometric."],
        ["A data ___ happens when criminals get into a company system and steal customer information.", "breach", ["patch", "scam", "vulnerability"], "Kẻ xấu xâm nhập và lấy dữ liệu khách hàng là vụ xâm phạm: breach."],
        ["To protect your account, turn on ___ authentication, which asks for a password and a code.", "two-factor", ["biometric", "wireless", "antivirus"], "Mật khẩu cộng mã xác nhận là xác thực hai yếu tố: two-factor."]
      ],
      "sentences": [
        ["Strong encryption protects private messages.", "Mã hóa mạnh bảo vệ tin nhắn riêng tư."],
        ["Never click a link in a suspicious email, because it may be phishing.", "Đừng bao giờ bấm vào liên kết trong email đáng ngờ vì đó có thể là lừa đảo."],
        ["An antivirus program can find and remove malware.", "Phần mềm diệt virus có thể tìm và xóa mã độc."],
        ["Hackers use a vulnerability to enter the system.", "Tin tặc lợi dụng một lỗ hổng để vào hệ thống."],
        ["Identity theft happens when a criminal uses your personal data.", "Đánh cắp danh tính xảy ra khi tội phạm dùng dữ liệu cá nhân của bạn."],
        ["Access control decides who can open each file.", "Kiểm soát truy cập quyết định ai được mở từng tệp."]
      ],
      "transform": [
        ["Hackers stole the customer data.", "Chuyển sang câu bị động", "The customer data was stolen by hackers.", "Dữ liệu khách hàng đã bị tin tặc đánh cắp."],
        ["The company fixed the vulnerability.", "Chuyển sang câu bị động", "The vulnerability was fixed by the company.", "Lỗ hổng đã được công ty vá."],
        ["You should share your password.", "Viết lại ở dạng phủ định", "You should not share your password.|You shouldn't share your password.", "Bạn không nên chia sẻ mật khẩu."]
      ]
    },
    {
      "id": "itcloud", "group": 6, "grade": 11, "icon": "☁️", "tag": "CNTT",
      "title": "Đám mây và dữ liệu", "en": "Cloud and data",
      "desc": "Lưu trữ đám mây, sao lưu, trung tâm dữ liệu và phân tích dữ liệu lớn.",
      "words": [
        ["cloud storage", "lưu trữ đám mây", "☁️"],
        ["backup", "bản sao lưu", ""],
        ["data centre", "trung tâm dữ liệu", ""],
        ["virtual machine", "máy ảo", ""],
        ["scalability", "khả năng mở rộng", ""],
        ["hosting", "dịch vụ lưu trữ website", ""],
        ["big data", "dữ liệu lớn", ""],
        ["analytics", "phân tích dữ liệu", "📈"],
        ["dashboard", "bảng điều khiển hiển thị số liệu", ""],
        ["downtime", "thời gian ngừng hoạt động", ""],
        ["redundancy", "sự dự phòng", ""],
        ["sync", "đồng bộ hóa", ""],
        ["subscription", "gói đăng ký thuê bao", ""],
        ["dataset", "tập dữ liệu", ""]
      ],
      "grammar": [
        ["Câu bị động trong báo cáo kỹ thuật", "Dùng be + V3 để mô tả quy trình mà người thực hiện không quan trọng: Files are copied to the cloud every night.", "The data is stored in the cloud. | The files were backed up last night."]
      ],
      "quiz": [
        ["Copying your files to another place so you can recover them is called making a ___.", "backup", ["dashboard", "dataset", "subscription"], "Sao chép tệp để khôi phục khi cần là sao lưu: backup."],
        ["When the website is not working for a short time, we call it ___.", "downtime", ["scalability", "analytics", "redundancy"], "Thời gian dịch vụ không hoạt động là downtime."],
        ["A ___ shows important numbers and charts on one screen.", "dashboard", ["backup", "subscription", "data centre"], "Màn hình tổng hợp số liệu, biểu đồ là dashboard."],
        ["Good ___ means a system can handle more users without becoming slow.", "scalability", ["downtime", "sync", "dataset"], "Khả năng đáp ứng thêm người dùng mà không chậm là scalability."],
        ["A ___ is a large building full of servers that store and process data.", "data centre", ["virtual machine", "dashboard", "subscription"], "Tòa nhà chứa nhiều máy chủ là trung tâm dữ liệu: data centre."],
        ["Companies use ___ to find patterns in very large amounts of data.", "analytics", ["backup", "hosting", "sync"], "Tìm quy luật trong dữ liệu lớn là phân tích dữ liệu: analytics."]
      ],
      "sentences": [
        ["Cloud storage lets you open your files on any device.", "Lưu trữ đám mây cho phép bạn mở tệp trên mọi thiết bị."],
        ["The data centre keeps the servers cool and safe.", "Trung tâm dữ liệu giữ cho các máy chủ mát và an toàn."],
        ["A virtual machine acts like a separate computer inside a real one.", "Máy ảo hoạt động như một máy tính riêng bên trong máy thật."],
        ["Our hosting company promised very little downtime.", "Công ty cung cấp dịch vụ lưu trữ của chúng tôi hứa sẽ hầu như không ngừng hoạt động."],
        ["Photos sync automatically when the phone connects to Wi-Fi.", "Ảnh tự động đồng bộ khi điện thoại kết nối Wi-Fi."]
      ],
      "transform": [
        ["The company stores the data in the cloud.", "Chuyển sang câu bị động", "The data is stored in the cloud by the company.", "Dữ liệu được công ty lưu trên đám mây."],
        ["Users pay a monthly subscription.", "Viết lại thành câu hỏi Yes/No", "Do users pay a monthly subscription?", "Người dùng có trả phí thuê bao hằng tháng không?"],
        ["The engineers backed up the files last night.", "Chuyển sang câu bị động", "The files were backed up by the engineers last night.", "Các tệp đã được kỹ sư sao lưu tối qua."]
      ]
    },
    {
      "id": "itai", "group": 6, "grade": 12, "icon": "🤖", "tag": "CNTT",
      "title": "Trí tuệ nhân tạo và học máy", "en": "AI and machine learning",
      "desc": "Mô hình, dữ liệu huấn luyện, độ chính xác và các thuật ngữ về AI.",
      "words": [
        ["training data", "dữ liệu huấn luyện", ""],
        ["model", "mô hình học máy", ""],
        ["prediction", "kết quả dự đoán", ""],
        ["classification", "sự phân loại", ""],
        ["accuracy", "độ chính xác", ""],
        ["label", "nhãn dữ liệu", ""],
        ["feature", "đặc trưng của dữ liệu", ""],
        ["natural language", "ngôn ngữ tự nhiên", ""],
        ["image recognition", "nhận dạng hình ảnh", ""],
        ["generative", "có khả năng tạo nội dung mới", ""],
        ["prompt", "câu lệnh đầu vào cho AI", ""],
        ["parameter", "tham số", ""],
        ["supervised", "có giám sát", ""],
        ["overfitting", "hiện tượng quá khớp", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách hệ thống hoạt động", "Dùng hiện tại đơn để nói về sự thật và quy trình: The model learns from examples. Chủ ngữ ngôi thứ ba số ít thêm s.", "The model makes a prediction from new data. | Supervised learning needs labels."]
      ],
      "quiz": [
        ["A machine learning ___ learns patterns from examples and then makes decisions.", "model", ["prompt", "label", "feature"], "Thứ học quy luật từ ví dụ rồi ra quyết định là mô hình: model."],
        ["To train a spam filter, engineers need a lot of ___ with many examples of spam and normal email.", "training data", ["natural language", "image recognition", "prediction"], "Các ví dụ dùng để dạy mô hình là dữ liệu huấn luyện."],
        ["A ___ is the correct answer attached to an example, such as cat or dog.", "label", ["prompt", "parameter", "feature"], "Đáp án đúng gắn với mỗi ví dụ là nhãn: label."],
        ["The model has high ___ if most of its answers are correct.", "accuracy", ["overfitting", "prompt", "label"], "Phần lớn câu trả lời đúng là độ chính xác cao: accuracy."],
        ["When a model remembers the training examples too well and fails on new data, this is called ___.", "overfitting", ["accuracy", "classification", "supervised"], "Nhớ quá kỹ dữ liệu huấn luyện, kém với dữ liệu mới là overfitting."],
        ["A ___ is the instruction or question you type to a generative AI tool.", "prompt", ["label", "model", "parameter"], "Câu lệnh hay câu hỏi bạn nhập cho công cụ AI là prompt."]
      ],
      "sentences": [
        ["The model makes a prediction from new data.", "Mô hình đưa ra dự đoán từ dữ liệu mới."],
        ["Image recognition helps a phone find faces in photos.", "Nhận dạng hình ảnh giúp điện thoại tìm khuôn mặt trong ảnh."],
        ["Supervised learning needs data with correct labels.", "Học có giám sát cần dữ liệu có nhãn đúng."],
        ["Generative AI can write text when you give it a clear prompt.", "AI tạo sinh có thể viết văn bản khi bạn đưa câu lệnh rõ ràng."],
        ["Natural language processing lets computers understand human language.", "Xử lý ngôn ngữ tự nhiên giúp máy tính hiểu ngôn ngữ con người."]
      ],
      "transform": [
        ["Engineers trained the model on large data.", "Chuyển sang câu bị động", "The model was trained on large data by engineers.", "Mô hình được kỹ sư huấn luyện trên dữ liệu lớn."],
        ["The system classifies every email.", "Chuyển sang câu bị động", "Every email is classified by the system.", "Mọi email được hệ thống phân loại."],
        ["The model has high accuracy.", "Viết lại ở dạng phủ định", "The model does not have high accuracy.", "Mô hình không có độ chính xác cao."]
      ]
    },
    {
      "id": "itsup", "group": 6, "grade": 11, "icon": "🛠️", "tag": "CNTT",
      "title": "Hỗ trợ kỹ thuật", "en": "IT support",
      "desc": "Xử lý sự cố, khởi động lại, cấu hình và trao đổi với người dùng.",
      "words": [
        ["troubleshoot", "tìm và sửa sự cố", ""],
        ["reboot", "khởi động lại máy", ""],
        ["configure", "cấu hình, thiết lập", ""],
        ["outage", "sự cố mất dịch vụ", ""],
        ["workaround", "giải pháp tạm thời", ""],
        ["escalate", "chuyển lên cấp cao hơn xử lý", ""],
        ["remote access", "truy cập từ xa", ""],
        ["user account", "tài khoản người dùng", ""],
        ["reset", "đặt lại", ""],
        ["diagnose", "chẩn đoán nguyên nhân", ""],
        ["crash", "sập, treo đột ngột", ""],
        ["freeze", "đơ, đứng hình", ""],
        ["glitch", "trục trặc nhỏ", ""],
        ["error message", "thông báo lỗi", ""]
      ],
      "grammar": [
        ["Lời đề nghị lịch sự với Could you", "Dùng Could you + động từ nguyên mẫu để nhờ ai làm gì một cách lịch sự, thêm please cho nhẹ nhàng hơn.", "Could you restart the computer? | Could you please send me a screenshot?"]
      ],
      "quiz": [
        ["If your computer is frozen, try to ___ it by turning it off and on again.", "reboot", ["configure", "escalate", "diagnose"], "Tắt và bật lại máy là khởi động lại: reboot."],
        ["There is no official solution yet, so the engineers use a ___ to keep the system running.", "workaround", ["glitch", "ticket", "freeze"], "Cách làm tạm khi chưa có giải pháp chính thức là workaround."],
        ["A power ___ stopped the whole office network for two hours.", "outage", ["workaround", "reset", "account"], "Mất điện khiến dịch vụ ngừng là sự cố mất dịch vụ: outage."],
        ["To ___ a problem means to find out what is wrong.", "diagnose", ["configure", "escalate", "reboot"], "Tìm ra nguyên nhân của sự cố là chẩn đoán: diagnose."],
        ["If a helpdesk worker cannot solve the problem, he will ___ it to a senior engineer.", "escalate", ["freeze", "reset", "configure"], "Chuyển vấn đề lên kỹ sư cấp cao hơn là escalate."],
        ["The program closed suddenly, and the screen displayed a long red ___.", "error message", ["workaround", "user account", "remote access"], "Dòng chữ báo lỗi hiện trên màn hình là thông báo lỗi: error message."]
      ],
      "sentences": [
        ["Please reboot the router and wait for two minutes.", "Hãy khởi động lại bộ định tuyến và chờ hai phút."],
        ["The technician used remote access to fix my laptop.", "Kỹ thuật viên dùng truy cập từ xa để sửa laptop của tôi."],
        ["A software glitch made the screen freeze.", "Một trục trặc phần mềm làm màn hình bị đơ."],
        ["We need to configure a new user account for the new employee.", "Chúng ta cần thiết lập một tài khoản mới cho nhân viên mới."],
        ["The system crashed during the update.", "Hệ thống bị sập trong lúc cập nhật."]
      ],
      "transform": [
        ["The technician fixed the problem.", "Chuyển sang câu bị động", "The problem was fixed by the technician.", "Sự cố đã được kỹ thuật viên khắc phục."],
        ["The helpdesk escalates difficult tickets.", "Chuyển sang câu bị động", "Difficult tickets are escalated by the helpdesk.", "Các yêu cầu khó được bộ phận hỗ trợ chuyển cấp cao hơn."],
        ["Please reset your password.", "Viết lại thành lời đề nghị lịch sự với Could you", "Could you reset your password?|Could you please reset your password?", "Bạn có thể đặt lại mật khẩu không?"]
      ]
    },
    {
      "id": "itproj", "group": 6, "grade": 12, "icon": "📋", "tag": "CNTT",
      "title": "Làm dự án phần mềm", "en": "Software projects",
      "desc": "Agile, yêu cầu, kiểm thử, triển khai và cách cả nhóm làm việc.",
      "words": [
        ["agile", "phương pháp phát triển linh hoạt", ""],
        ["requirement", "yêu cầu của khách hàng", ""],
        ["deployment", "việc triển khai phần mềm", ""],
        ["code review", "việc đọc duyệt mã của đồng nghiệp", ""],
        ["version control", "quản lý phiên bản", ""],
        ["testing", "việc kiểm thử", ""],
        ["scope", "phạm vi dự án", ""],
        ["standup", "cuộc họp đứng hằng ngày", ""],
        ["retrospective", "buổi họp nhìn lại sau mỗi sprint", ""],
        ["roadmap", "lộ trình phát triển", "🗺️"],
        ["feature", "tính năng", ""],
        ["bug report", "báo cáo lỗi", ""],
        ["documentation", "tài liệu hướng dẫn", ""],
        ["user story", "câu chuyện người dùng", ""]
      ],
      "grammar": [
        ["Thì tương lai đơn cho kế hoạch và lời hứa", "Dùng will + động từ nguyên mẫu để nói điều sẽ xảy ra hoặc lời hứa với khách hàng. Phủ định là will not.", "We will release the new feature next week. | The team will not change the scope."]
      ],
      "quiz": [
        ["A short daily team meeting where everyone says what they are doing is called a ___.", "standup", ["roadmap", "retrospective", "deployment"], "Họp ngắn hằng ngày, mỗi người nói công việc của mình là standup."],
        ["At the end of each sprint, the team holds a ___ to talk about what went well and what to improve.", "retrospective", ["standup", "requirement", "deployment"], "Buổi họp nhìn lại cuối sprint là retrospective."],
        ["Another developer checks your code in a ___ before it joins the main project.", "code review", ["deployment", "roadmap", "standup"], "Đồng nghiệp đọc duyệt mã trước khi gộp là code review."],
        ["The customer changed the ___, so the team had to add two new functions.", "requirement", ["standup", "deployment", "version control"], "Khách đổi yêu cầu nên phải thêm chức năng: requirement."],
        ["Putting the finished program on the server so that users can use it is called ___.", "deployment", ["testing", "documentation", "agile"], "Đưa chương trình đã xong lên máy chủ cho người dùng là deployment."],
        ["Team members write a ___ in the form: As a user, I want to log in so that I can see my account.", "user story", ["bug report", "feature", "roadmap"], "Mẫu câu mô tả nhu cầu người dùng là user story."]
      ],
      "sentences": [
        ["Our team works in an agile way with short sprints.", "Nhóm chúng tôi làm việc theo cách agile với các sprint ngắn."],
        ["The roadmap shows which features we will build next.", "Lộ trình cho thấy những tính năng chúng tôi sẽ làm tiếp theo."],
        ["Please write a clear bug report with the steps to repeat the problem.", "Hãy viết báo cáo lỗi rõ ràng kèm các bước lặp lại sự cố."],
        ["Good documentation helps new developers understand the project.", "Tài liệu tốt giúp lập trình viên mới hiểu dự án."],
        ["Version control keeps a history of every change in the code.", "Quản lý phiên bản lưu lại lịch sử mọi thay đổi trong mã."],
        ["We must finish testing before the release.", "Chúng ta phải hoàn thành kiểm thử trước khi phát hành."]
      ],
      "transform": [
        ["The team finished the testing yesterday.", "Chuyển sang câu bị động", "The testing was finished by the team yesterday.", "Việc kiểm thử đã được nhóm hoàn tất hôm qua."],
        ["The manager approved the scope.", "Chuyển sang câu bị động", "The scope was approved by the manager.", "Phạm vi đã được quản lý phê duyệt."],
        ["We will release the new feature next week.", "Viết lại ở dạng phủ định", "We will not release the new feature next week.|We won't release the new feature next week.", "Chúng tôi sẽ không phát hành tính năng mới vào tuần sau."]
      ]
    },
    {
      "id": "itux", "group": 6, "grade": 11, "icon": "🎨", "tag": "CNTT",
      "title": "Thiết kế giao diện UI và UX", "en": "UI and UX design",
      "desc": "Bố cục, màu sắc, phông chữ, điều hướng và trải nghiệm người dùng.",
      "words": [
        ["user interface", "giao diện người dùng", ""],
        ["user experience", "trải nghiệm người dùng", ""],
        ["accessibility", "khả năng tiếp cận", ""],
        ["navigation", "điều hướng trong ứng dụng", ""],
        ["typography", "nghệ thuật chọn và sắp xếp chữ", ""],
        ["icon", "biểu tượng nhỏ", ""],
        ["user flow", "luồng thao tác của người dùng", ""],
        ["persona", "chân dung người dùng giả định", ""],
        ["button", "nút bấm", "🔘"],
        ["layout", "bố cục", ""],
        ["colour scheme", "bảng phối màu", "🎨"],
        ["contrast", "độ tương phản", ""],
        ["font", "phông chữ", ""],
        ["scroll", "cuộn trang", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách hệ thống hoạt động", "Dùng hiện tại đơn để nói về sự thật và thói quen của người dùng: Users scroll down the page. Ngôi thứ ba số ít thêm s.", "A clear layout makes a page easier to understand. | Users scroll down the page."]
      ],
      "quiz": [
        ["A fictional person who represents a typical user of the product is called a ___.", "persona", ["layout", "button", "font"], "Nhân vật giả định đại diện người dùng điển hình là persona."],
        ["___ means designing a product so that people with disabilities can use it.", "Accessibility", ["Typography", "Navigation", "Contrast"], "Thiết kế để người khuyết tật cũng dùng được là accessibility."],
        ["Good ___ helps users find their way around a website easily.", "navigation", ["typography", "contrast", "scroll"], "Giúp người dùng tìm đường trong trang web là điều hướng: navigation."],
        ["The text is hard to read because there is not enough ___ between the grey letters and the grey background.", "contrast", ["navigation", "persona", "icon"], "Chữ xám trên nền xám thiếu độ tương phản: contrast."],
        ["___ is the art of choosing and arranging fonts to make text readable and attractive.", "Typography", ["Accessibility", "Persona", "Navigation"], "Nghệ thuật chọn và sắp chữ là typography."],
        ["The magnifying glass symbol for search is a typical ___.", "icon", ["persona", "layout", "contrast"], "Hình kính lúp biểu thị tìm kiếm là một biểu tượng: icon."]
      ],
      "sentences": [
        ["A clear layout makes a page easier to understand.", "Bố cục rõ ràng làm trang dễ hiểu hơn."],
        ["Designers choose a colour scheme that fits the brand.", "Nhà thiết kế chọn bảng màu phù hợp với thương hiệu."],
        ["The user flow shows each step a customer takes to buy a product.", "Luồng thao tác cho thấy từng bước khách hàng làm để mua một sản phẩm."],
        ["A large button is easy to tap on a phone screen.", "Nút lớn dễ chạm trên màn hình điện thoại."],
        ["User experience describes how a person feels when using a product.", "Trải nghiệm người dùng mô tả cảm giác của một người khi dùng sản phẩm."],
        ["Do not use too many fonts on one page.", "Đừng dùng quá nhiều phông chữ trên một trang."]
      ],
      "transform": [
        ["The designer changed the layout.", "Chuyển sang câu bị động", "The layout was changed by the designer.", "Bố cục đã được nhà thiết kế thay đổi."],
        ["The page has a clear navigation menu.", "Viết lại ở dạng phủ định", "The page does not have a clear navigation menu.", "Trang không có menu điều hướng rõ ràng."],
        ["Users scroll down the page.", "Viết lại thành câu hỏi Yes/No", "Do users scroll down the page?", "Người dùng có cuộn xuống trang không?"]
      ]
    },
    {
      "id": "itstat", "group": 6, "grade": 11, "icon": "📊", "tag": "CNTT",
      "title": "Phân tích dữ liệu và thống kê", "en": "Data analysis",
      "desc": "Trung bình, trung vị, biểu đồ, giá trị ngoại lai và cách đọc số liệu.",
      "words": [
        ["median", "trung vị", ""],
        ["average", "giá trị trung bình", ""],
        ["outlier", "giá trị ngoại lai", ""],
        ["correlation", "mối tương quan", ""],
        ["variance", "phương sai", ""],
        ["bar chart", "biểu đồ cột", "📊"],
        ["histogram", "biểu đồ tần suất", ""],
        ["scatter plot", "biểu đồ phân tán", ""],
        ["missing value", "giá trị bị thiếu", ""],
        ["clustering", "sự phân cụm", ""],
        ["spreadsheet", "bảng tính", ""],
        ["statistics", "thống kê", ""],
        ["probability", "xác suất", ""],
        ["visualisation", "sự trực quan hóa dữ liệu", ""]
      ],
      "grammar": [
        ["Câu bị động trong báo cáo kỹ thuật", "Trong báo cáo phân tích, dùng bị động để tập trung vào dữ liệu: The data was cleaned. The results are shown in Figure 1.", "The data was cleaned by the analyst. | The data is collected carefully by scientists."]
      ],
      "quiz": [
        ["The ___ is the middle value when all numbers are arranged in order.", "median", ["average", "variance", "outlier"], "Giá trị ở giữa khi xếp theo thứ tự là trung vị: median."],
        ["To find the ___, add all the numbers and divide by how many there are.", "average", ["median", "variance", "outlier"], "Cộng tất cả rồi chia cho số phần tử là trung bình: average."],
        ["In the list 10, 12, 11 and 500, the number 500 is the ___.", "outlier", ["median", "correlation", "histogram"], "Giá trị khác hẳn các số còn lại là giá trị ngoại lai: outlier."],
        ["A ___ shows how two variables are related, for example height and weight.", "correlation", ["histogram", "outlier", "spreadsheet"], "Mức độ liên hệ giữa hai biến là tương quan: correlation."],
        ["A ___ uses bars to show how many values fall into each range.", "histogram", ["scatter plot", "correlation", "outlier"], "Các cột cho biết số giá trị trong từng khoảng là histogram."],
        ["Before analysis, data scientists must clean the data and deal with each ___, which is an empty cell.", "missing value", ["outlier", "variance", "probability"], "Ô trống trong dữ liệu là giá trị bị thiếu: missing value."]
      ],
      "sentences": [
        ["The average score of the class is seven point five.", "Điểm trung bình của lớp là bảy phẩy năm."],
        ["A bar chart compares the sales of different products.", "Biểu đồ cột so sánh doanh số của các sản phẩm khác nhau."],
        ["Outliers can change the result of an analysis.", "Giá trị ngoại lai có thể làm thay đổi kết quả phân tích."],
        ["A scatter plot helps us see the correlation between two sets of data.", "Biểu đồ phân tán giúp ta thấy tương quan giữa hai tập dữ liệu."],
        ["Probability measures how likely an event is.", "Xác suất đo mức độ có thể xảy ra của một sự kiện."],
        ["Many people use a spreadsheet to organise numbers.", "Nhiều người dùng bảng tính để sắp xếp số liệu."]
      ],
      "transform": [
        ["The analyst cleaned the data.", "Chuyển sang câu bị động", "The data was cleaned by the analyst.", "Dữ liệu đã được nhà phân tích làm sạch."],
        ["The chart shows the trend.", "Viết lại thành câu hỏi Yes/No", "Does the chart show the trend?", "Biểu đồ có cho thấy xu hướng không?"],
        ["Scientists collect the data carefully.", "Chuyển sang câu bị động", "The data is collected carefully by scientists.", "Dữ liệu được các nhà khoa học thu thập cẩn thận."]
      ]
    }
  ]
}
);
