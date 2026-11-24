/* EngVui – CNTT mở rộng, đợt 1 (nhóm "Chuyên ngành CNTT"): phần mềm, thao tác máy tính, IoT, blockchain, kinh doanh số, mạng xã hội, quản trị mạng, kiến trúc hệ thống.
   Nội dung tự soạn. Định dạng giống js/data/exam.js; kiểm tra bằng tools/validate_it.py. Phần trong ngoặc là JSON chuẩn. */
EV.extendExam({
  "names": ["Wi-Fi", "Bluetooth", "Windows", "Linux", "Android", "iOS", "Zip", "NAT", "DNS", "DHCP", "VLAN", "MAC", "RFID", "API"],
  "groups": [],
  "topics": [
    {
      "id": "itsoft", "group": 6, "grade": 11, "icon": "💿", "tag": "CNTT",
      "title": "Cài đặt và quản lý phần mềm", "en": "Installing and managing software",
      "desc": "Cài đặt, gỡ cài đặt, phiên bản, bản dùng thử, mã nguồn mở và tương thích.",
      "words": [
        ["uninstall", "gỡ cài đặt", ""],
        ["version", "phiên bản", ""],
        ["trial version", "bản dùng thử", ""],
        ["freeware", "phần mềm miễn phí", ""],
        ["open source", "mã nguồn mở", ""],
        ["compatibility", "khả năng tương thích", ""],
        ["shortcut", "lối tắt", ""],
        ["file extension", "đuôi tệp", ""],
        ["zip file", "tệp nén", ""],
        ["desktop", "màn hình nền", "🖥️"],
        ["licence key", "mã bản quyền", "🔑"],
        ["setup wizard", "trình cài đặt từng bước", ""],
        ["plug-in", "phần bổ trợ", ""],
        ["release notes", "ghi chú phát hành", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong hướng dẫn cài đặt", "Dùng động từ nguyên mẫu để hướng dẫn từng bước: Download the file. Run the setup wizard.", "Download the latest version from the official website. | Enter the licence key to activate the software."]
      ],
      "quiz": [
        ["You can use the ___ for thirty days before you must buy the full program.", "trial version", ["file extension", "shortcut", "zip file"], "Bản dùng thử trong một thời gian là trial version."],
        ["To remove a program from your computer, you must ___ it.", "uninstall", ["download", "upgrade", "bookmark"], "Xóa chương trình khỏi máy là gỡ cài đặt: uninstall."],
        ["The ___ at the end of a file name, such as docx, tells the computer which program can open it.", "file extension", ["shortcut", "desktop", "version"], "Phần đuôi tên tệp là đuôi tệp: file extension."],
        ["Check the ___ before you install, because some old programs do not work on new systems.", "compatibility", ["freeware", "shortcut", "plug-in"], "Kiểm tra khả năng chạy được trên hệ thống mới là tương thích: compatibility."],
        ["A ___ is a file that holds several files in a smaller size.", "zip file", ["shortcut", "licence key", "setup wizard"], "Tệp gói nhiều tệp với dung lượng nhỏ hơn là tệp nén: zip file."],
        ["Anyone can read and change the code of ___ software.", "open source", ["trial", "desktop", "zip"], "Ai cũng đọc và sửa được mã là phần mềm mã nguồn mở: open source."]
      ],
      "sentences": [
        ["Download the latest version from the official website.", "Hãy tải phiên bản mới nhất từ trang web chính thức."],
        ["Click the shortcut on the desktop to open the program.", "Hãy bấm vào lối tắt trên màn hình nền để mở chương trình."],
        ["The setup wizard guides you through each step of the installation.", "Trình cài đặt hướng dẫn bạn qua từng bước của quá trình cài."],
        ["Freeware is free to use, but open source also lets you read the code.", "Phần mềm miễn phí dùng không mất tiền còn mã nguồn mở còn cho phép đọc mã."],
        ["Read the release notes to learn what the new version changes.", "Hãy đọc ghi chú phát hành để biết phiên bản mới thay đổi gì."],
        ["Enter the licence key to activate the software.", "Hãy nhập mã bản quyền để kích hoạt phần mềm."]
      ],
      "transform": [
        ["The user installed the plug-in.", "Chuyển sang câu bị động", "The plug-in was installed by the user.", "Phần bổ trợ đã được người dùng cài."],
        ["The program supports this file extension.", "Viết lại thành câu hỏi Yes/No", "Does the program support this file extension?", "Chương trình có hỗ trợ đuôi tệp này không?"],
        ["You can use the trial version for free.", "Viết lại ở dạng phủ định", "You cannot use the trial version for free.|You can not use the trial version for free.", "Bạn không thể dùng bản dùng thử miễn phí."]
      ]
    },
    {
      "id": "itdesk", "group": 6, "grade": 10, "icon": "🖱️", "tag": "CNTT",
      "title": "Thao tác máy tính hằng ngày", "en": "Everyday computer use",
      "desc": "Nhấp chuột, kéo thả, sao chép, dán, thanh công cụ và trình duyệt.",
      "words": [
        ["click", "nhấp chuột", ""],
        ["double-click", "nhấp đúp", ""],
        ["right-click", "nhấp chuột phải", ""],
        ["drag and drop", "kéo và thả", ""],
        ["copy and paste", "sao chép và dán", ""],
        ["select", "chọn", ""],
        ["cursor", "con trỏ chuột", ""],
        ["tab", "thẻ trình duyệt", ""],
        ["search bar", "thanh tìm kiếm", "🔎"],
        ["bookmark", "dấu trang", "🔖"],
        ["undo", "hoàn tác", ""],
        ["scroll bar", "thanh cuộn", ""],
        ["toolbar", "thanh công cụ", ""],
        ["pop-up", "cửa sổ bật lên", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong hướng dẫn thao tác", "Dùng động từ nguyên mẫu để chỉ từng thao tác: Select the text. Open a new tab.", "Type your question in the search bar and press Enter. | Drag and drop the file into the folder."]
      ],
      "quiz": [
        ["To open a file quickly, ___ its icon with the left mouse button.", "double-click", ["right-click", "bookmark", "undo"], "Nhấp nhanh hai lần để mở tệp là double-click."],
        ["___ the item with the right mouse button to see a menu of more options.", "Right-click", ["Double-click", "Select", "Undo"], "Nhấp chuột phải để hiện menu thêm lựa chọn là right-click."],
        ["Press the keyboard shortcut for ___ if you delete a paragraph by mistake.", "undo", ["bookmark", "pop-up", "cursor"], "Xóa nhầm thì dùng hoàn tác: undo."],
        ["Save the page as a ___ so that you can open it again with one click.", "bookmark", ["cursor", "pop-up", "scroll bar"], "Lưu trang để mở lại bằng một cú nhấp là dấu trang: bookmark."],
        ["Move the ___ to the text, and click where you want to start typing.", "cursor", ["toolbar", "bookmark", "scroll bar"], "Di chuyển con trỏ chuột đến vị trí muốn gõ: cursor."],
        ["Use the ___ on the right side of the window to move up and down the page.", "scroll bar", ["toolbar", "search bar", "tab"], "Thanh bên phải cửa sổ để lên xuống trang là thanh cuộn: scroll bar."]
      ],
      "sentences": [
        ["Drag and drop the file into the folder.", "Hãy kéo và thả tệp vào thư mục."],
        ["Select the text, and then copy and paste it into a new document.", "Hãy chọn đoạn văn bản rồi sao chép và dán vào tài liệu mới."],
        ["Open a new tab to search for the answer.", "Hãy mở một thẻ mới để tìm câu trả lời."],
        ["Type your question in the search bar and press Enter.", "Hãy gõ câu hỏi vào thanh tìm kiếm rồi nhấn Enter."],
        ["A pop-up window asked me to sign in.", "Một cửa sổ bật lên yêu cầu tôi đăng nhập."],
        ["The toolbar has buttons for the most common actions.", "Thanh công cụ có các nút cho những thao tác thường dùng nhất."]
      ],
      "transform": [
        ["The user closed the pop-up.", "Chuyển sang câu bị động", "The pop-up was closed by the user.", "Cửa sổ bật lên đã được người dùng đóng."],
        ["You can undo the last action.", "Viết lại ở dạng phủ định", "You cannot undo the last action.|You can not undo the last action.", "Bạn không thể hoàn tác thao tác cuối."],
        ["The cursor moves across the screen.", "Viết lại thành câu hỏi Yes/No", "Does the cursor move across the screen?", "Con trỏ có di chuyển trên màn hình không?"]
      ]
    },
    {
      "id": "itiot", "group": 6, "grade": 12, "icon": "🏠", "tag": "CNTT",
      "title": "Internet vạn vật (IoT)", "en": "Internet of Things",
      "desc": "Nhà thông minh, cảm biến không dây, điện kế thông minh và giám sát từ xa.",
      "words": [
        ["smart home", "nhà thông minh", "🏠"],
        ["connectivity", "khả năng kết nối", ""],
        ["real-time data", "dữ liệu thời gian thực", ""],
        ["smart meter", "đồng hồ điện thông minh", ""],
        ["actuator", "cơ cấu chấp hành", ""],
        ["thermostat", "bộ điều nhiệt", ""],
        ["smart speaker", "loa thông minh", ""],
        ["wireless sensor", "cảm biến không dây", ""],
        ["edge device", "thiết bị biên", ""],
        ["telemetry", "đo lường từ xa", ""],
        ["remote monitoring", "giám sát từ xa", ""],
        ["Bluetooth", "kết nối Bluetooth", ""],
        ["beacon", "thiết bị phát tín hiệu định vị", ""],
        ["RFID tag", "thẻ nhận dạng RFID", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả dữ liệu của thiết bị", "Dùng be + V3 để nói điều xảy ra với dữ liệu: The data is sent by the sensor.", "The data is sent by the sensor. | The temperature is controlled by the thermostat."]
      ],
      "quiz": [
        ["A ___ keeps the temperature of a room at the level you choose.", "thermostat", ["beacon", "actuator", "smart meter"], "Giữ nhiệt độ phòng ở mức đã chọn là bộ điều nhiệt: thermostat."],
        ["A ___ measures how much electricity a house uses and sends the data to the power company.", "smart meter", ["thermostat", "beacon", "actuator"], "Đo điện và gửi dữ liệu cho công ty điện là điện kế thông minh."],
        ["The part that turns an electrical signal into movement, such as opening a valve, is the ___.", "actuator", ["beacon", "thermostat", "smart speaker"], "Bộ phận biến tín hiệu điện thành chuyển động là actuator."],
        ["___ data is processed and shown immediately, without any delay.", "Real-time", ["Stored", "Backup", "Old"], "Dữ liệu xử lý và hiển thị ngay là dữ liệu thời gian thực: real-time."],
        ["Doctors use ___ to check the condition of patients who are at home.", "remote monitoring", ["connectivity", "beacon", "thermostat"], "Theo dõi bệnh nhân ở nhà từ xa là giám sát từ xa."],
        ["A ___ is a small device that sends signals so that phones nearby can find their position.", "beacon", ["smart speaker", "actuator", "thermostat"], "Thiết bị nhỏ phát tín hiệu để điện thoại xác định vị trí là beacon."]
      ],
      "sentences": [
        ["A smart home can turn on the lights when you arrive.", "Nhà thông minh có thể bật đèn khi bạn về tới."],
        ["The wireless sensor sends data to the cloud every minute.", "Cảm biến không dây gửi dữ liệu lên đám mây mỗi phút."],
        ["A smart speaker answers questions when you use your voice.", "Loa thông minh trả lời câu hỏi khi bạn dùng giọng nói."],
        ["Telemetry sends measurements from a faraway device to a control centre.", "Đo lường từ xa gửi số đo từ thiết bị ở xa đến trung tâm điều khiển."],
        ["Good connectivity is important for every edge device.", "Kết nối tốt rất quan trọng với mọi thiết bị biên."],
        ["An RFID tag lets a scanner identify a product without touching it.", "Thẻ RFID cho phép máy quét nhận ra sản phẩm mà không cần chạm vào."]
      ],
      "transform": [
        ["The sensor sends the data.", "Chuyển sang câu bị động", "The data is sent by the sensor.", "Dữ liệu được cảm biến gửi đi."],
        ["The thermostat controls the temperature.", "Chuyển sang câu bị động", "The temperature is controlled by the thermostat.", "Nhiệt độ được bộ điều nhiệt kiểm soát."],
        ["The smart speaker understands English.", "Viết lại thành câu hỏi Yes/No", "Does the smart speaker understand English?", "Loa thông minh có hiểu tiếng Anh không?"]
      ]
    },
    {
      "id": "itblock", "group": 6, "grade": 12, "icon": "⛓️", "tag": "CNTT",
      "title": "Blockchain và tiền số", "en": "Blockchain and digital currency",
      "desc": "Sổ cái, khối, nút mạng, ví điện tử, hợp đồng thông minh và đồng thuận.",
      "words": [
        ["blockchain", "chuỗi khối", ""],
        ["ledger", "sổ cái", ""],
        ["public ledger", "sổ cái công khai", ""],
        ["block", "khối dữ liệu", ""],
        ["node", "nút mạng", ""],
        ["consensus", "sự đồng thuận", ""],
        ["mining", "việc đào để xác thực khối", ""],
        ["wallet", "ví điện tử", ""],
        ["smart contract", "hợp đồng thông minh", ""],
        ["digital asset", "tài sản số", ""],
        ["cryptocurrency", "tiền mã hóa", ""],
        ["decentralised", "phi tập trung", ""],
        ["peer-to-peer", "ngang hàng", ""],
        ["validator", "bên xác thực giao dịch", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả giao dịch", "Dùng be + V3 để nói điều xảy ra với giao dịch và khối: Every transaction is checked.", "The block is added to the chain by the network. | Every transaction is checked by the validator."]
      ],
      "quiz": [
        ["A ___ is a record book that lists every transaction in order.", "ledger", ["wallet", "node", "validator"], "Sổ ghi mọi giao dịch theo thứ tự là sổ cái: ledger."],
        ["Each computer that keeps a copy of the blockchain and helps run the network is called a ___.", "node", ["wallet", "ledger", "block"], "Máy giữ bản sao chuỗi khối và vận hành mạng là nút: node."],
        ["A digital ___ stores the keys that you need to send or receive digital assets.", "wallet", ["node", "block", "consensus"], "Nơi lưu khóa để gửi, nhận tài sản số là ví: wallet."],
        ["A ___ is a program on the blockchain that runs automatically when its conditions are met.", "smart contract", ["digital asset", "node", "wallet"], "Chương trình tự chạy khi đủ điều kiện là hợp đồng thông minh."],
        ["The network members must reach ___ before a new block is added to the chain.", "consensus", ["mining", "wallet", "cryptocurrency"], "Các bên phải thống nhất trước khi thêm khối là đồng thuận: consensus."],
        ["In a ___ system, no single company or government controls the whole network.", "decentralised", ["centralised", "private", "paid"], "Không công ty hay chính phủ nào kiểm soát toàn mạng là phi tập trung: decentralised."]
      ],
      "sentences": [
        ["Every block contains a list of transactions.", "Mỗi khối chứa một danh sách giao dịch."],
        ["A blockchain is a ledger that many computers share.", "Chuỗi khối là một sổ cái mà nhiều máy tính cùng dùng chung."],
        ["Mining uses a lot of electricity.", "Việc đào tiêu tốn rất nhiều điện."],
        ["Cryptocurrency exists only in digital form.", "Tiền mã hóa chỉ tồn tại ở dạng số."],
        ["A smart contract runs automatically when both sides follow the rules.", "Hợp đồng thông minh tự chạy khi cả hai bên tuân theo quy tắc."],
        ["A peer-to-peer network has no central server.", "Mạng ngang hàng không có máy chủ trung tâm."]
      ],
      "transform": [
        ["The network adds the block to the chain.", "Chuyển sang câu bị động", "The block is added to the chain by the network.", "Khối được mạng thêm vào chuỗi."],
        ["The validator checks every transaction.", "Chuyển sang câu bị động", "Every transaction is checked by the validator.", "Mọi giao dịch được bên xác thực kiểm tra."],
        ["The wallet stores the private key.", "Viết lại thành câu hỏi Yes/No", "Does the wallet store the private key?", "Ví có lưu khóa bí mật không?"]
      ]
    },
    {
      "id": "itbiz", "group": 6, "grade": 11, "icon": "🛒", "tag": "CNTT",
      "title": "Thương mại điện tử và kinh doanh số", "en": "E-commerce and digital business",
      "desc": "Cửa hàng trực tuyến, giỏ hàng, cổng thanh toán, tỷ lệ chuyển đổi và giữ chân khách.",
      "words": [
        ["e-commerce", "thương mại điện tử", ""],
        ["online store", "cửa hàng trực tuyến", ""],
        ["shopping cart", "giỏ hàng", "🛒"],
        ["checkout", "bước thanh toán", ""],
        ["payment gateway", "cổng thanh toán", ""],
        ["landing page", "trang đích", ""],
        ["conversion rate", "tỷ lệ chuyển đổi", ""],
        ["funnel", "phễu bán hàng", ""],
        ["customer retention", "việc giữ chân khách hàng", ""],
        ["churn", "tỷ lệ khách bỏ đi", ""],
        ["marketplace", "sàn giao dịch trực tuyến", ""],
        ["pricing plan", "gói giá dịch vụ", ""],
        ["user base", "tập người dùng", ""],
        ["venture capital", "vốn đầu tư mạo hiểm", ""]
      ],
      "grammar": [
        ["Câu bị động trong báo cáo kinh doanh", "Dùng be + V3 để báo cáo kết quả mà không cần nêu người làm: Churn was reduced.", "Every payment is processed by the gateway. | Churn was reduced by the company."]
      ],
      "quiz": [
        ["___ means buying and selling goods and services over the Internet.", "E-commerce", ["Churn", "Funnel", "Checkout"], "Mua bán qua Internet là thương mại điện tử: e-commerce."],
        ["Customers put items in the ___ before they pay.", "shopping cart", ["funnel", "marketplace", "landing page"], "Khách bỏ hàng vào giỏ hàng trước khi trả tiền."],
        ["The ___ is the percentage of visitors who buy something.", "conversion rate", ["churn", "user base", "pricing plan"], "Tỷ lệ khách truy cập thực sự mua hàng là tỷ lệ chuyển đổi."],
        ["A high ___ means that many customers stop using the service every month.", "churn", ["conversion rate", "checkout", "marketplace"], "Nhiều khách bỏ dịch vụ mỗi tháng là churn cao."],
        ["A ___ is a web page designed so that visitors take one action, such as signing up.", "landing page", ["payment gateway", "marketplace", "funnel"], "Trang thiết kế để khách làm một hành động là trang đích."],
        ["A ___ connects the online store with the bank so that card payments can be processed.", "payment gateway", ["landing page", "funnel", "churn"], "Nối cửa hàng với ngân hàng để xử lý thẻ là cổng thanh toán."]
      ],
      "sentences": [
        ["The online store offers free delivery for large orders.", "Cửa hàng trực tuyến miễn phí giao hàng cho đơn lớn."],
        ["A customer adds a product to the shopping cart and goes to the checkout.", "Khách thêm sản phẩm vào giỏ hàng rồi sang bước thanh toán."],
        ["A marketplace connects many sellers with buyers.", "Sàn giao dịch kết nối nhiều người bán với người mua."],
        ["The company wants to improve customer retention.", "Công ty muốn cải thiện việc giữ chân khách hàng."],
        ["Venture capital helps a young company grow fast.", "Vốn đầu tư mạo hiểm giúp một công ty trẻ lớn nhanh."],
        ["Each pricing plan includes different features.", "Mỗi gói giá bao gồm các tính năng khác nhau."]
      ],
      "transform": [
        ["The gateway processes every payment.", "Chuyển sang câu bị động", "Every payment is processed by the gateway.", "Mọi khoản thanh toán được cổng thanh toán xử lý."],
        ["The company reduced churn.", "Chuyển sang câu bị động", "Churn was reduced by the company.", "Tỷ lệ rời bỏ đã được công ty giảm."],
        ["The store has a mobile app.", "Viết lại thành câu hỏi Yes/No", "Does the store have a mobile app?", "Cửa hàng có ứng dụng di động không?"]
      ]
    },
    {
      "id": "itsocial", "group": 6, "grade": 10, "icon": "💬", "tag": "CNTT",
      "title": "Mạng xã hội và nội dung số", "en": "Social media",
      "desc": "Bảng tin, hashtag, người theo dõi, quyền riêng tư và kiểm duyệt nội dung.",
      "words": [
        ["follower", "người theo dõi", ""],
        ["hashtag", "thẻ chủ đề", ""],
        ["feed", "bảng tin", ""],
        ["privacy settings", "cài đặt riêng tư", ""],
        ["content creator", "người sáng tạo nội dung", ""],
        ["engagement", "mức độ tương tác", ""],
        ["moderation", "việc kiểm duyệt nội dung", ""],
        ["trending", "đang thịnh hành", ""],
        ["profile", "trang cá nhân", ""],
        ["direct message", "tin nhắn riêng", ""],
        ["tag", "gắn thẻ ai đó", ""],
        ["mention", "nhắc đến", ""],
        ["post", "bài đăng", ""],
        ["comment", "bình luận", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách nền tảng hoạt động", "Dùng hiện tại đơn để nói điều nền tảng luôn làm: My feed shows posts from the people I follow.", "The creator posts every day. | A trending topic is something that many people are talking about."]
      ],
      "quiz": [
        ["A ___ is a word with the sign # in front that groups posts about the same topic.", "hashtag", ["feed", "profile", "mention"], "Từ có dấu # gom các bài cùng chủ đề là hashtag."],
        ["Check your ___ to decide who can see your photos.", "privacy settings", ["engagement", "hashtag", "moderation"], "Quyết định ai xem được ảnh là cài đặt riêng tư."],
        ["Every day, a ___ makes videos or articles for people on the platform.", "content creator", ["feed", "profile", "hashtag"], "Người làm video, bài viết mỗi ngày là người sáng tạo nội dung."],
        ["A ___ is a message that only one person or a small group can read.", "direct message", ["post", "hashtag", "feed"], "Tin chỉ một người hay nhóm nhỏ đọc được là tin nhắn riêng."],
        ["___ shows how much people like, share and comment on your content.", "Engagement", ["Moderation", "Trending", "Profile"], "Mức người ta thích, chia sẻ, bình luận là mức tương tác: engagement."],
        ["Moderators remove harmful content, and this work is called ___.", "moderation", ["engagement", "mention", "tagging"], "Gỡ nội dung có hại là kiểm duyệt: moderation."]
      ],
      "sentences": [
        ["My feed shows posts from the people I follow.", "Bảng tin của tôi hiển thị bài của những người tôi theo dõi."],
        ["Add a hashtag so that more people can find your post.", "Hãy thêm hashtag để nhiều người tìm thấy bài đăng của bạn."],
        ["The influencer has one million followers.", "Người có ảnh hưởng đó có một triệu người theo dõi."],
        ["Please do not tag me in that photo.", "Làm ơn đừng gắn thẻ tôi trong bức ảnh đó."],
        ["Direct messages are private, but a post can be seen by everyone.", "Tin nhắn riêng thì riêng tư còn bài đăng thì ai cũng thấy được."],
        ["A trending topic is something that many people are talking about.", "Chủ đề thịnh hành là điều mà nhiều người đang nói đến."]
      ],
      "transform": [
        ["The user changed the privacy settings.", "Chuyển sang câu bị động", "The privacy settings were changed by the user.", "Cài đặt riêng tư đã được người dùng thay đổi."],
        ["Moderators removed the comment.", "Chuyển sang câu bị động", "The comment was removed by moderators.", "Bình luận đã bị người kiểm duyệt xóa."],
        ["The creator posts every day.", "Viết lại thành câu hỏi Yes/No", "Does the creator post every day?", "Người sáng tạo có đăng bài mỗi ngày không?"]
      ]
    },
    {
      "id": "itnetadv", "group": 6, "grade": 12, "icon": "🧭", "tag": "CNTT",
      "title": "Quản trị mạng nâng cao", "en": "Network administration",
      "desc": "Bảng định tuyến, NAT, DHCP, VLAN, DNS, cáp quang và đo chất lượng kết nối.",
      "words": [
        ["routing table", "bảng định tuyến", ""],
        ["NAT", "chuyển đổi địa chỉ mạng", ""],
        ["port forwarding", "chuyển tiếp cổng", ""],
        ["ping", "lệnh kiểm tra kết nối", ""],
        ["packet loss", "tình trạng mất gói dữ liệu", ""],
        ["MAC address", "địa chỉ MAC", ""],
        ["access point", "điểm truy cập Wi-Fi", ""],
        ["repeater", "bộ khuếch đại tín hiệu", ""],
        ["fibre optic", "cáp quang", ""],
        ["DNS server", "máy chủ phân giải tên miền", ""],
        ["default gateway", "cổng mặc định", ""],
        ["modem", "thiết bị modem", ""],
        ["DHCP", "giao thức cấp IP tự động", ""],
        ["VLAN", "mạng LAN ảo", ""]
      ],
      "grammar": [
        ["Câu bị động khi cấu hình thiết bị", "Dùng be + V3 để nói điều đã được làm với thiết bị: The access point was configured.", "The routing table is used by the router. | The access point was configured by the administrator."]
      ],
      "quiz": [
        ["The ___ translates a domain name such as example.com into an IP address.", "DNS server", ["modem", "repeater", "access point"], "Máy chủ đổi tên miền thành địa chỉ IP là DNS server."],
        ["Use the ping command to test the connection; if the result shows high ___, some data does not arrive.", "packet loss", ["fibre optic", "routing table", "VLAN"], "Một phần dữ liệu không đến nơi là mất gói: packet loss."],
        ["A ___ cable sends light through glass, so it can carry data at very high speed.", "fibre optic", ["modem", "repeater", "DHCP"], "Cáp truyền ánh sáng qua sợi thủy tinh là cáp quang."],
        ["The network uses ___ to give each new device an IP address automatically.", "DHCP", ["VLAN", "NAT", "ping"], "Cấp địa chỉ IP tự động cho thiết bị mới là DHCP."],
        ["A ___ extends the Wi-Fi signal to rooms that are far from the router.", "repeater", ["modem", "default gateway", "MAC address"], "Thiết bị mở rộng sóng Wi-Fi là bộ khuếch đại: repeater."],
        ["Every network card has a unique ___ that is set at the factory.", "MAC address", ["routing table", "default gateway", "VLAN"], "Mã duy nhất gắn sẵn cho card mạng là địa chỉ MAC."]
      ],
      "sentences": [
        ["The router checks its routing table before it sends a packet.", "Bộ định tuyến xem bảng định tuyến trước khi gửi một gói dữ liệu."],
        ["A modem connects your home network to the Internet service provider.", "Modem nối mạng gia đình bạn với nhà cung cấp dịch vụ Internet."],
        ["Port forwarding lets people reach a server inside your home network.", "Chuyển tiếp cổng cho phép người khác truy cập máy chủ trong mạng nhà bạn."],
        ["NAT lets many devices share one public IP address.", "NAT cho phép nhiều thiết bị dùng chung một địa chỉ IP công cộng."],
        ["An access point gives wireless devices a connection to the wired network.", "Điểm truy cập cho thiết bị không dây kết nối vào mạng có dây."],
        ["A VLAN separates the traffic of different departments.", "VLAN tách lưu lượng của các phòng ban khác nhau."]
      ],
      "transform": [
        ["The router uses the routing table.", "Chuyển sang câu bị động", "The routing table is used by the router.", "Bảng định tuyến được bộ định tuyến sử dụng."],
        ["The administrator configured the access point.", "Chuyển sang câu bị động", "The access point was configured by the administrator.", "Điểm truy cập đã được quản trị viên cấu hình."],
        ["The network has packet loss.", "Viết lại ở dạng phủ định", "The network does not have packet loss.", "Mạng không bị mất gói dữ liệu."]
      ]
    },
    {
      "id": "itarch", "group": 6, "grade": 12, "icon": "🏗️", "tag": "CNTT",
      "title": "Kiến trúc hệ thống phần mềm", "en": "Software architecture",
      "desc": "Nguyên khối, dịch vụ nhỏ, hàng đợi, nhân bản, khả năng mở rộng và chịu lỗi.",
      "words": [
        ["architecture", "kiến trúc hệ thống", ""],
        ["scalable", "có thể mở rộng", ""],
        ["monolith", "ứng dụng nguyên khối", ""],
        ["microservice", "dịch vụ nhỏ độc lập", ""],
        ["API gateway", "cổng API", ""],
        ["message queue", "hàng đợi thông điệp", ""],
        ["distributed", "phân tán", ""],
        ["fault tolerance", "khả năng chịu lỗi", ""],
        ["high availability", "tính sẵn sàng cao", ""],
        ["stateless", "không lưu trạng thái", ""],
        ["replication", "sự nhân bản dữ liệu", ""],
        ["sharding", "việc chia nhỏ dữ liệu", ""],
        ["serverless", "không cần quản lý máy chủ", ""],
        ["single point of failure", "điểm lỗi duy nhất", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả luồng xử lý", "Dùng be + V3 để mô tả đường đi của yêu cầu: The request is sent to the service.", "The request is sent to the service by the gateway. | The monolith was split into microservices by the team."]
      ],
      "quiz": [
        ["A ___ system can handle more users by adding more machines.", "scalable", ["fragile", "outdated", "crowded"], "Thêm máy để phục vụ nhiều người dùng hơn là có thể mở rộng: scalable."],
        ["The ___ style builds the whole application as one single unit.", "monolith", ["microservice", "message queue", "API gateway"], "Xây cả ứng dụng thành một khối là kiểu nguyên khối: monolith."],
        ["A ___ is a small service that does one job and talks to other services.", "microservice", ["monolith", "replication", "sharding"], "Dịch vụ nhỏ làm một việc và giao tiếp với dịch vụ khác là microservice."],
        ["The ___ is the single entrance that receives all client requests and sends them to the right service.", "API gateway", ["message queue", "replication", "sharding"], "Cổng nhận mọi yêu cầu và chuyển đến đúng dịch vụ là API gateway."],
        ["A ___ holds messages until a service is ready to process them.", "message queue", ["API gateway", "monolith", "replication"], "Giữ thông điệp cho đến khi dịch vụ sẵn sàng xử lý là hàng đợi thông điệp."],
        ["If one server fails and the system keeps working, the system has good ___.", "fault tolerance", ["sharding", "architecture", "replication"], "Một máy hỏng mà hệ thống vẫn chạy là khả năng chịu lỗi."]
      ],
      "sentences": [
        ["A monolith is simple to start, but it is hard to scale.", "Ứng dụng nguyên khối dễ bắt đầu nhưng khó mở rộng."],
        ["Each microservice has its own database.", "Mỗi dịch vụ nhỏ có cơ sở dữ liệu riêng."],
        ["An API gateway sends each request to the correct service.", "Cổng API gửi mỗi yêu cầu đến đúng dịch vụ."],
        ["A message queue lets services work at different speeds.", "Hàng đợi thông điệp cho phép các dịch vụ làm việc với tốc độ khác nhau."],
        ["Replication copies data to several servers for safety.", "Nhân bản sao chép dữ liệu sang nhiều máy chủ để an toàn."],
        ["A single point of failure can stop the whole system.", "Một điểm lỗi duy nhất có thể làm dừng cả hệ thống."]
      ],
      "transform": [
        ["The gateway sends the request to the service.", "Chuyển sang câu bị động", "The request is sent to the service by the gateway.", "Yêu cầu được cổng gửi đến dịch vụ."],
        ["The team split the monolith into microservices.", "Chuyển sang câu bị động", "The monolith was split into microservices by the team.", "Khối nguyên khối đã được nhóm tách thành các dịch vụ nhỏ."],
        ["The system has high availability.", "Viết lại ở dạng phủ định", "The system does not have high availability.", "Hệ thống không có tính sẵn sàng cao."]
      ]
    }
  ]
}
);
