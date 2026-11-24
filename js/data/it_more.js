/* EngVui – CNTT bổ sung (nhóm "Chuyên ngành CNTT"): game (phát triển và thiết kế), web (HTTP, JavaScript trình duyệt), bảo mật (ứng dụng web, phòng thủ mạng, mật mã).
   Nội dung tự soạn. Định dạng giống js/data/exam.js; kiểm tra bằng tools/validate_it.py. Phần trong ngoặc là JSON chuẩn. */
EV.extendExam({
  "names": ["HTTP", "HTTPS", "SQL", "DOM", "JavaScript", "AJAX", "SSL"],
  "groups": [],
  "topics": [
    {
      "id": "itgame", "group": 6, "grade": 11, "icon": "🎮", "tag": "CNTT",
      "title": "Phát triển game", "en": "Game development",
      "desc": "Game engine, sprite, khung hình, va chạm, vật lý và các thuật ngữ làm game.",
      "words": [
        ["game engine", "bộ máy phát triển game", ""],
        ["sprite", "hình ảnh 2D của nhân vật, vật thể", ""],
        ["frame rate", "tốc độ khung hình", ""],
        ["collision", "sự va chạm", ""],
        ["physics", "vật lý trong game", ""],
        ["rendering", "việc kết xuất hình ảnh", ""],
        ["texture", "ảnh phủ bề mặt vật thể", ""],
        ["animation", "hoạt ảnh", ""],
        ["multiplayer", "nhiều người chơi", "👥"],
        ["leaderboard", "bảng xếp hạng", "🏆"],
        ["gameplay", "lối chơi", ""],
        ["controller", "tay cầm điều khiển", "🎮"],
        ["loading screen", "màn hình chờ tải", ""],
        ["lag", "độ trễ gây giật hình", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách game hoạt động", "Dùng hiện tại đơn để nói điều game luôn làm: The engine handles graphics. Ngôi thứ ba số ít thêm s.", "The game engine handles graphics, sound and physics. | The loading screen appears between levels."]
      ],
      "quiz": [
        ["A ___ is software that gives developers ready-made tools to build a game.", "game engine", ["leaderboard", "texture", "controller"], "Phần mềm có sẵn công cụ để làm game là game engine."],
        ["A higher ___ makes the movement in a game look smoother.", "frame rate", ["leaderboard", "loading screen", "texture"], "Số khung hình mỗi giây cao hơn làm chuyển động mượt hơn: frame rate."],
        ["When two objects touch in a game, the engine checks for a ___.", "collision", ["texture", "leaderboard", "sprite"], "Hai vật chạm nhau là va chạm: collision."],
        ["Online players complain about ___ when the game reacts slowly to their actions.", "lag", ["texture", "sprite", "leaderboard"], "Game phản hồi chậm gây giật là lag."],
        ["A ___ is a flat two-dimensional image that represents a character or object in a game.", "sprite", ["texture", "controller", "leaderboard"], "Ảnh 2D đại diện nhân vật hay vật thể là sprite."],
        ["The ___ shows the names and scores of the best players.", "leaderboard", ["controller", "loading screen", "frame rate"], "Bảng ghi tên và điểm người chơi giỏi nhất là leaderboard."]
      ],
      "sentences": [
        ["The game engine handles graphics, sound and physics.", "Game engine xử lý đồ họa, âm thanh và vật lý."],
        ["A higher frame rate makes the animation look smoother.", "Tốc độ khung hình cao hơn làm hoạt ảnh trông mượt hơn."],
        ["The loading screen appears while the game loads the next level.", "Màn hình chờ hiện ra trong lúc game tải màn chơi kế tiếp."],
        ["Lag makes multiplayer games difficult to play.", "Độ trễ làm các game nhiều người chơi khó chơi."],
        ["Collision detection decides whether two objects touch each other.", "Phát hiện va chạm quyết định hai vật thể có chạm nhau hay không."]
      ],
      "transform": [
        ["The engine renders the whole scene.", "Chuyển sang câu bị động", "The whole scene is rendered by the engine.", "Toàn bộ cảnh được game engine kết xuất."],
        ["The designer created a new sprite.", "Chuyển sang câu bị động", "A new sprite was created by the designer.", "Một sprite mới đã được nhà thiết kế tạo ra."],
        ["The game supports multiplayer mode.", "Viết lại thành câu hỏi Yes/No", "Does the game support multiplayer mode?", "Game có hỗ trợ chế độ nhiều người chơi không?"]
      ]
    },
    {
      "id": "itgamed", "group": 6, "grade": 11, "icon": "🕹️", "tag": "CNTT",
      "title": "Thiết kế game", "en": "Game design",
      "desc": "Mục tiêu, độ khó, trùm cuối, điểm lưu, nhiệm vụ và cốt truyện.",
      "words": [
        ["objective", "mục tiêu của màn chơi", ""],
        ["difficulty", "độ khó", ""],
        ["boss", "trùm cuối", "👹"],
        ["power-up", "vật phẩm tăng sức mạnh", ""],
        ["checkpoint", "điểm lưu tiến trình tạm", ""],
        ["respawn", "hồi sinh tại điểm xuất hiện", ""],
        ["quest", "nhiệm vụ trong game", ""],
        ["tutorial", "màn hướng dẫn", ""],
        ["health bar", "thanh máu", ""],
        ["combo", "chuỗi đòn liên tiếp", ""],
        ["open world", "thế giới mở", ""],
        ["storyline", "cốt truyện", ""],
        ["sandbox", "game thế giới tự do sáng tạo", ""],
        ["NPC", "nhân vật do máy điều khiển", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả sự kiện trong game", "Dùng be + V3 khi nói về điều xảy ra với nhân vật hay vật phẩm: The boss was defeated.", "The boss was defeated by the player. | Progress is saved at every checkpoint."]
      ],
      "quiz": [
        ["A ___ is a point in a level where the game saves your progress for a moment.", "checkpoint", ["power-up", "combo", "boss"], "Điểm game lưu tạm tiến trình là checkpoint."],
        ["After the character dies, he will ___ at the last checkpoint.", "respawn", ["unlock", "upgrade", "collect"], "Hồi sinh tại điểm lưu gần nhất là respawn."],
        ["The ___ shows how much life the player still has.", "health bar", ["quest", "storyline", "tutorial"], "Thanh cho biết còn bao nhiêu máu là health bar."],
        ["A strong enemy that you must defeat at the end of a level is called a ___.", "boss", ["combo", "quest", "checkpoint"], "Kẻ thù mạnh ở cuối màn là trùm cuối: boss."],
        ["The first level of the game is a ___ that teaches you the basic controls.", "tutorial", ["boss", "storyline", "combo"], "Màn đầu dạy các thao tác cơ bản là tutorial."],
        ["Players love the freedom of the ___ in this game, where they can explore a huge map.", "open world", ["checkpoint", "tutorial", "power-up"], "Bản đồ rộng lớn tự do khám phá là thế giới mở: open world."]
      ],
      "sentences": [
        ["The objective of the level is to find the key.", "Mục tiêu của màn chơi là tìm chìa khóa."],
        ["A power-up gives the player extra speed for ten seconds.", "Vật phẩm tăng sức mạnh cho người chơi thêm tốc độ trong mười giây."],
        ["Higher difficulty means stronger enemies.", "Độ khó cao hơn nghĩa là kẻ thù mạnh hơn."],
        ["An NPC gives the player a quest.", "Một nhân vật do máy điều khiển giao nhiệm vụ cho người chơi."],
        ["A combo is a series of attacks in a row.", "Combo là một chuỗi đòn tấn công liên tiếp."],
        ["The storyline of this game is very exciting.", "Cốt truyện của game này rất hấp dẫn."]
      ],
      "transform": [
        ["The player defeated the boss.", "Chuyển sang câu bị động", "The boss was defeated by the player.", "Trùm cuối đã bị người chơi đánh bại."],
        ["The game saves progress at every checkpoint.", "Chuyển sang câu bị động", "Progress is saved at every checkpoint by the game.", "Tiến trình được game lưu tại mọi điểm lưu."],
        ["The tutorial explains the controls.", "Viết lại thành câu hỏi Yes/No", "Does the tutorial explain the controls?", "Phần hướng dẫn có giải thích các nút điều khiển không?"]
      ]
    },
    {
      "id": "ithttp", "group": 6, "grade": 12, "icon": "🔗", "tag": "CNTT",
      "title": "HTTP, hosting và hiệu năng web", "en": "HTTP and web performance",
      "desc": "Mã trạng thái, HTTPS, CDN, SEO, chuyển hướng và tốc độ tải trang.",
      "words": [
        ["HTTP", "giao thức truyền trang web", ""],
        ["HTTPS", "HTTP có mã hóa", "🔒"],
        ["status code", "mã trạng thái phản hồi", ""],
        ["REST", "kiểu thiết kế API REST", ""],
        ["SSL certificate", "chứng chỉ SSL", ""],
        ["CDN", "mạng phân phối nội dung", ""],
        ["load time", "thời gian tải trang", ""],
        ["SEO", "tối ưu hóa công cụ tìm kiếm", ""],
        ["web server", "máy chủ web", ""],
        ["redirect", "chuyển hướng", ""],
        ["query string", "chuỗi truy vấn trên URL", ""],
        ["header", "phần tiêu đề của yêu cầu", ""],
        ["payload", "dữ liệu mà yêu cầu mang theo", ""],
        ["caching", "việc lưu đệm", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả luồng yêu cầu", "Dùng be + V3 để nói điều xảy ra với dữ liệu trên đường truyền: A status code is returned by the server.", "A status code is returned by the web server. | The images are stored by the CDN."]
      ],
      "quiz": [
        ["The ___ 404 means that the server cannot find the page you asked for.", "status code", ["payload", "redirect", "header"], "Số 404 là mã trạng thái: status code."],
        ["A ___ is a network of servers around the world that delivers website content from a place near the user.", "CDN", ["SEO", "payload", "header"], "Mạng máy chủ phân phối nội dung gần người dùng là CDN."],
        ["Websites use ___ so that data between the browser and the server is encrypted.", "HTTPS", ["REST", "SEO", "caching"], "Mã hóa dữ liệu giữa trình duyệt và máy chủ là HTTPS."],
        ["Good ___ helps a website appear higher in search results.", "SEO", ["caching", "redirect", "payload"], "Giúp trang web lên cao trong kết quả tìm kiếm là SEO."],
        ["A ___ sends the visitor automatically from an old address to a new one.", "redirect", ["header", "payload", "caching"], "Tự đưa khách từ địa chỉ cũ sang mới là chuyển hướng: redirect."],
        ["___ stores a copy of a page so that it loads faster the next time.", "Caching", ["Redirect", "Payload", "Header"], "Lưu bản sao để lần sau tải nhanh hơn là caching."]
      ],
      "sentences": [
        ["The browser sends an HTTP request to the web server.", "Trình duyệt gửi yêu cầu HTTP đến máy chủ web."],
        ["A valid SSL certificate shows that the website is secure.", "Chứng chỉ SSL hợp lệ cho thấy trang web an toàn."],
        ["A CDN reduces the load time for users in other countries.", "CDN giảm thời gian tải cho người dùng ở nước khác."],
        ["The server returns a status code with every response.", "Máy chủ trả về một mã trạng thái cùng mỗi phản hồi."],
        ["The payload is the data that a request carries.", "Payload là dữ liệu mà một yêu cầu mang theo."],
        ["Add a redirect from the old URL to the new page.", "Hãy thêm một chuyển hướng từ URL cũ sang trang mới."]
      ],
      "transform": [
        ["The web server returns a status code.", "Chuyển sang câu bị động", "A status code is returned by the web server.", "Mã trạng thái được máy chủ web trả về."],
        ["The CDN stores the images.", "Chuyển sang câu bị động", "The images are stored by the CDN.", "Hình ảnh được CDN lưu trữ."],
        ["The site uses HTTPS.", "Viết lại ở dạng phủ định", "The site does not use HTTPS.", "Trang web không dùng HTTPS."]
      ]
    },
    {
      "id": "itjs", "group": 6, "grade": 12, "icon": "⚡", "tag": "CNTT",
      "title": "JavaScript trên trình duyệt", "en": "JavaScript in the browser",
      "desc": "DOM, sự kiện, bất đồng bộ, fetch và cách trang web phản hồi người dùng.",
      "words": [
        ["DOM", "mô hình đối tượng của trang", ""],
        ["event", "sự kiện", ""],
        ["event listener", "bộ lắng nghe sự kiện", ""],
        ["click event", "sự kiện nhấp chuột", ""],
        ["element", "phần tử trong trang", ""],
        ["asynchronous", "bất đồng bộ", ""],
        ["promise", "đối tượng hứa trả kết quả sau", ""],
        ["AJAX", "kỹ thuật tải dữ liệu không tải lại trang", ""],
        ["fetch", "lấy dữ liệu từ máy chủ", ""],
        ["script tag", "thẻ nhúng mã script", ""],
        ["console", "bảng điều khiển của trình duyệt", ""],
        ["bundle", "gói mã đã gộp lại", ""],
        ["form validation", "kiểm tra dữ liệu biểu mẫu", ""],
        ["local storage", "bộ nhớ cục bộ của trình duyệt", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách mã trình duyệt chạy", "Dùng hiện tại đơn để nói điều mã luôn làm khi có sự kiện: The listener runs when the user clicks the button.", "The script changes the element. | The page uses asynchronous code."]
      ],
      "quiz": [
        ["The ___ represents a web page as a tree of objects that JavaScript can change.", "DOM", ["bundle", "console", "promise"], "Cây các đối tượng đại diện cho trang web là DOM."],
        ["A button click is one kind of ___ that the program can respond to.", "event", ["bundle", "promise", "element"], "Việc bấm nút là một sự kiện: event."],
        ["The code that waits for a user action and then runs a function is called an event ___.", "listener", ["bundle", "element", "console"], "Đoạn mã chờ hành động của người dùng là bộ lắng nghe: listener."],
        ["___ code does not stop the page while it waits for data from the server.", "Asynchronous", ["Static", "Local", "Visual"], "Mã không làm trang đứng chờ là bất đồng bộ: asynchronous."],
        ["Developers read error messages in the browser ___ when something goes wrong.", "console", ["bundle", "promise", "element"], "Nơi hiển thị thông báo lỗi trong trình duyệt là console."],
        ["Use ___ to check that the user typed a valid email before sending the form.", "form validation", ["local storage", "fetch", "bundle"], "Kiểm tra dữ liệu người dùng nhập trước khi gửi là form validation."]
      ],
      "sentences": [
        ["JavaScript can change any element in the DOM.", "JavaScript có thể thay đổi mọi phần tử trong DOM."],
        ["The event listener runs when the user clicks the button.", "Bộ lắng nghe sự kiện chạy khi người dùng bấm nút."],
        ["Asynchronous code lets the page stay responsive.", "Mã bất đồng bộ giúp trang luôn phản hồi mượt."],
        ["A promise returns the result after the data arrives.", "Promise trả kết quả sau khi dữ liệu đến."],
        ["The script uses fetch to get data from the server.", "Đoạn mã dùng fetch để lấy dữ liệu từ máy chủ."],
        ["Local storage keeps small data in the browser.", "Local storage giữ dữ liệu nhỏ trong trình duyệt."]
      ],
      "transform": [
        ["The listener handles the click event.", "Chuyển sang câu bị động", "The click event is handled by the listener.", "Sự kiện nhấp được bộ lắng nghe xử lý."],
        ["The script changes the element.", "Chuyển sang câu bị động", "The element is changed by the script.", "Phần tử được đoạn mã thay đổi."],
        ["The page uses asynchronous code.", "Viết lại thành câu hỏi Yes/No", "Does the page use asynchronous code?", "Trang có dùng mã bất đồng bộ không?"]
      ]
    },
    {
      "id": "itwebsec", "group": 6, "grade": 12, "icon": "🛡️", "tag": "CNTT",
      "title": "Bảo mật ứng dụng web", "en": "Web application security",
      "desc": "SQL injection, XSS, băm mật khẩu, token và cách chống tấn công trang web.",
      "words": [
        ["SQL injection", "tấn công chèn lệnh SQL", ""],
        ["XSS", "tấn công chèn script chéo trang", ""],
        ["CSRF", "tấn công giả mạo yêu cầu chéo trang", ""],
        ["session hijacking", "chiếm quyền phiên đăng nhập", ""],
        ["input validation", "kiểm tra dữ liệu đầu vào", ""],
        ["hashing", "việc băm dữ liệu", ""],
        ["salt", "chuỗi ngẫu nhiên thêm vào khi băm", ""],
        ["token", "mã xác thực", ""],
        ["penetration test", "kiểm thử xâm nhập", ""],
        ["exploit", "khai thác lỗ hổng", ""],
        ["brute force", "tấn công dò mật khẩu hàng loạt", ""],
        ["rate limiting", "giới hạn số yêu cầu", ""],
        ["privilege escalation", "leo thang đặc quyền", ""],
        ["whitelist", "danh sách cho phép", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong khuyến nghị bảo mật", "Dùng động từ nguyên mẫu để khuyến nghị: Validate every input. Never trust data from users.", "Validate every input. | Never store a password as plain text."]
      ],
      "quiz": [
        ["The attacker typed database commands into a login form to steal data. This attack is called ___.", "SQL injection", ["brute force", "salt", "hashing"], "Chèn lệnh cơ sở dữ liệu vào ô nhập là SQL injection."],
        ["___ means checking all data that users send, so that dangerous characters cannot enter the system.", "Input validation", ["Hashing", "Rate limiting", "Penetration test"], "Kiểm tra mọi dữ liệu người dùng gửi là input validation."],
        ["Instead of saving passwords as plain text, a secure website saves the result of ___.", "hashing", ["exploit", "whitelist", "token"], "Lưu kết quả băm thay vì mật khẩu thô là hashing."],
        ["A ___ is a random value added to a password before hashing to make it harder to crack.", "salt", ["token", "whitelist", "exploit"], "Giá trị ngẫu nhiên thêm vào trước khi băm là salt."],
        ["A security expert performs a ___ to find weaknesses by attacking the system legally.", "penetration test", ["whitelist", "brute force", "session hijacking"], "Tấn công hợp pháp để tìm điểm yếu là penetration test."],
        ["Limiting the number of login attempts helps stop a ___ attack.", "brute force", ["salt", "whitelist", "token"], "Thử mật khẩu hàng loạt là tấn công brute force."]
      ],
      "sentences": [
        ["Input validation helps prevent SQL injection.", "Kiểm tra dữ liệu đầu vào giúp ngăn chặn SQL injection."],
        ["A secure website stores a salted hash instead of the real password.", "Trang web an toàn lưu giá trị băm có salt thay vì mật khẩu thật."],
        ["Attackers use an exploit to take advantage of a weakness.", "Kẻ tấn công dùng một đoạn khai thác để lợi dụng điểm yếu."],
        ["A token proves that the user has already logged in.", "Token chứng minh người dùng đã đăng nhập."],
        ["Rate limiting blocks a brute force attack by limiting login attempts.", "Giới hạn số yêu cầu chặn tấn công dò mật khẩu bằng cách hạn chế số lần đăng nhập."],
        ["A whitelist allows only trusted addresses to connect.", "Danh sách cho phép chỉ cho các địa chỉ đáng tin kết nối."]
      ],
      "transform": [
        ["The website stores the password as a hash.", "Chuyển sang câu bị động", "The password is stored as a hash by the website.", "Mật khẩu được trang web lưu dưới dạng băm."],
        ["The tester found a vulnerability in the login page.", "Chuyển sang câu bị động", "A vulnerability in the login page was found by the tester.", "Người kiểm thử đã tìm thấy một lỗ hổng ở trang đăng nhập."],
        ["The server checks every input.", "Viết lại ở dạng phủ định", "The server does not check every input.", "Máy chủ không kiểm tra mọi dữ liệu đầu vào."]
      ]
    },
    {
      "id": "itnetsec", "group": 6, "grade": 12, "icon": "🚨", "tag": "CNTT",
      "title": "Phòng thủ mạng và ứng phó sự cố", "en": "Network defence and incident response",
      "desc": "DDoS, botnet, honeypot, zero-day, đánh giá rủi ro và chính sách bảo mật.",
      "words": [
        ["intrusion detection", "phát hiện xâm nhập", ""],
        ["DDoS", "tấn công từ chối dịch vụ phân tán", ""],
        ["packet sniffing", "nghe lén gói dữ liệu", ""],
        ["honeypot", "hệ thống bẫy nhử tin tặc", ""],
        ["zero-day", "lỗ hổng chưa có bản vá", ""],
        ["incident response", "ứng phó sự cố", ""],
        ["threat", "mối đe dọa", ""],
        ["risk assessment", "đánh giá rủi ro", ""],
        ["endpoint", "thiết bị đầu cuối", ""],
        ["botnet", "mạng máy tính bị điều khiển", ""],
        ["spoofing", "giả mạo danh tính trên mạng", ""],
        ["man-in-the-middle", "tấn công xen giữa", ""],
        ["network segmentation", "phân đoạn mạng", ""],
        ["security policy", "chính sách bảo mật", ""]
      ],
      "grammar": [
        ["Câu bị động trong báo cáo sự cố bảo mật", "Dùng be + V3 để báo cáo điều đã xảy ra mà không cần nêu rõ người làm: The threat was blocked.", "The threat was blocked by the firewall. | The incident was investigated by the security team."]
      ],
      "quiz": [
        ["A ___ attack floods a website with so much traffic that real users cannot open it.", "DDoS", ["spoofing", "honeypot", "zero-day"], "Làm ngập trang web bằng lưu lượng khổng lồ là tấn công DDoS."],
        ["A ___ is a fake system that attracts hackers so that experts can study their methods.", "honeypot", ["botnet", "endpoint", "threat"], "Hệ thống giả để nhử tin tặc là honeypot."],
        ["A ___ is a weakness that criminals use before the software company knows about it.", "zero-day", ["honeypot", "botnet", "spoofing"], "Lỗ hổng bị lợi dụng khi nhà phát triển chưa biết là zero-day."],
        ["A ___ is a large group of infected computers controlled by one criminal.", "botnet", ["honeypot", "endpoint", "spoofing"], "Đội quân máy tính nhiễm mã độc do một kẻ điều khiển là botnet."],
        ["Splitting a big network into smaller parts, called network ___, limits the damage of an attack.", "segmentation", ["spoofing", "sniffing", "detection"], "Chia mạng lớn thành phần nhỏ là phân đoạn mạng: segmentation."],
        ["Before choosing security tools, a company carries out a ___ to find the biggest dangers.", "risk assessment", ["packet sniffing", "botnet", "honeypot"], "Đánh giá để tìm nguy cơ lớn nhất là risk assessment."]
      ],
      "sentences": [
        ["Intrusion detection software warns the team about strange activity.", "Phần mềm phát hiện xâm nhập cảnh báo nhóm về hoạt động lạ."],
        ["A botnet can send millions of requests in a DDoS attack.", "Một botnet có thể gửi hàng triệu yêu cầu trong một cuộc tấn công DDoS."],
        ["Packet sniffing lets an attacker read unprotected data.", "Nghe lén gói dữ liệu cho phép kẻ tấn công đọc dữ liệu không được bảo vệ."],
        ["Every employee must follow the security policy.", "Mọi nhân viên phải tuân theo chính sách bảo mật."],
        ["The team started incident response as soon as the alarm sounded.", "Nhóm bắt đầu ứng phó sự cố ngay khi chuông báo động vang lên."],
        ["In a man-in-the-middle attack, the criminal secretly reads the messages.", "Trong tấn công xen giữa, kẻ xấu bí mật đọc các tin nhắn."]
      ],
      "transform": [
        ["The firewall blocked the threat.", "Chuyển sang câu bị động", "The threat was blocked by the firewall.", "Mối đe dọa đã bị tường lửa chặn."],
        ["The security team investigated the incident.", "Chuyển sang câu bị động", "The incident was investigated by the security team.", "Sự cố đã được nhóm bảo mật điều tra."],
        ["The company has a security policy.", "Viết lại thành câu hỏi Yes/No", "Does the company have a security policy?", "Công ty có chính sách bảo mật không?"]
      ]
    },
    {
      "id": "itcrypto", "group": 6, "grade": 12, "icon": "🔑", "tag": "CNTT",
      "title": "Mật mã học cơ bản", "en": "Basic cryptography",
      "desc": "Mã hóa, khóa công khai và bí mật, hàm băm và chữ ký số.",
      "words": [
        ["cipher", "thuật toán mã hóa", ""],
        ["plaintext", "văn bản gốc chưa mã hóa", ""],
        ["ciphertext", "văn bản đã mã hóa", ""],
        ["decrypt", "giải mã", ""],
        ["symmetric", "đối xứng", ""],
        ["asymmetric", "bất đối xứng", ""],
        ["public key", "khóa công khai", ""],
        ["private key", "khóa bí mật", "🔑"],
        ["key exchange", "việc trao đổi khóa", ""],
        ["hash", "giá trị băm", ""],
        ["checksum", "tổng kiểm tra", ""],
        ["digital signature", "chữ ký số", ""],
        ["integrity", "tính toàn vẹn dữ liệu", ""],
        ["confidentiality", "tính bí mật thông tin", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả quá trình mã hóa", "Dùng be + V3 để mô tả điều xảy ra với thông điệp: The message is encrypted by the sender.", "The message is encrypted by the sender. | The file was decrypted by the receiver."]
      ],
      "quiz": [
        ["Readable text before encryption is called ___.", "plaintext", ["ciphertext", "checksum", "integrity"], "Văn bản đọc được trước khi mã hóa là plaintext."],
        ["Unreadable text after encryption is called ___.", "ciphertext", ["plaintext", "checksum", "integrity"], "Văn bản không đọc được sau khi mã hóa là ciphertext."],
        ["In ___ encryption, the same key is used to lock and unlock the data.", "symmetric", ["asymmetric", "digital", "public"], "Dùng cùng một khóa để khóa và mở là mã hóa đối xứng: symmetric."],
        ["Anyone can use your ___ to send you an encrypted message, but only you can read it with your private key.", "public key", ["checksum", "ciphertext", "hash"], "Khóa ai cũng dùng được để gửi tin cho bạn là khóa công khai."],
        ["A ___ proves that a message really came from the sender and was not changed.", "digital signature", ["checksum", "cipher", "plaintext"], "Chứng minh tin đúng từ người gửi và không bị sửa là chữ ký số."],
        ["A ___ is a short value calculated from a file, and it changes if even one byte of the file changes.", "checksum", ["private key", "cipher", "plaintext"], "Giá trị ngắn tính từ tệp, đổi một byte là đổi theo: checksum."]
      ],
      "sentences": [
        ["A cipher changes plaintext into ciphertext.", "Thuật toán mã hóa biến văn bản gốc thành văn bản đã mã hóa."],
        ["Only the owner of the private key can decrypt the message.", "Chỉ chủ nhân của khóa bí mật mới giải mã được tin nhắn."],
        ["Symmetric encryption is fast, but both sides must share the same key.", "Mã hóa đối xứng nhanh nhưng cả hai bên phải dùng chung một khóa."],
        ["Key exchange lets two people agree on a secret key over the Internet.", "Trao đổi khóa cho phép hai người thống nhất một khóa bí mật qua Internet."],
        ["A hash is a fixed-length value that represents data.", "Giá trị băm là một giá trị có độ dài cố định đại diện cho dữ liệu."],
        ["Encryption protects confidentiality, and a digital signature protects integrity.", "Mã hóa bảo vệ tính bí mật còn chữ ký số bảo vệ tính toàn vẹn."]
      ],
      "transform": [
        ["The sender encrypts the message.", "Chuyển sang câu bị động", "The message is encrypted by the sender.", "Tin nhắn được người gửi mã hóa."],
        ["The receiver decrypted the file with a private key.", "Chuyển sang câu bị động", "The file was decrypted by the receiver with a private key.", "Tệp đã được người nhận giải mã bằng khóa bí mật."],
        ["Asymmetric encryption uses two keys.", "Viết lại thành câu hỏi Yes/No", "Does asymmetric encryption use two keys?", "Mã hóa bất đối xứng có dùng hai khóa không?"]
      ]
    }
  ]
}
);
