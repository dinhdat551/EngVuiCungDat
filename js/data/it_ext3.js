/* EngVui – CNTT mở rộng, đợt 3 (nhóm "Lập trình"): Python, kiểu dữ liệu và bộ nhớ, thuật toán nâng cao, API, kiểm thử, Agile, frontend, đa luồng, học máy, lập trình nhúng, lập trình an toàn.
   Nội dung tự soạn. Định dạng giống js/data/exam.js; kiểm tra bằng tools/validate_it.py. Phần trong ngoặc là JSON chuẩn. */
EV.extendExam({
  "names": ["Python", "CSS", "HTML", "API", "JSON", "CORS", "GPIO", "Big", "Scrum", "Dijkstra"],
  "groups": [],
  "topics": [
    {
      "id": "pgpython", "group": 15, "grade": 11, "icon": "🐍", "tag": "Lập trình",
      "title": "Python thực hành", "en": "Practical Python",
      "desc": "Thụt lề, danh sách, từ điển, hàm lambda, môi trường ảo và xử lý ngoại lệ.",
      "words": [
        ["indentation", "thụt lề đầu dòng", ""],
        ["list", "danh sách", ""],
        ["tuple", "bộ giá trị không đổi", ""],
        ["dictionary", "từ điển các cặp khóa và giá trị", ""],
        ["slice", "lát cắt của danh sách", ""],
        ["lambda", "hàm ẩn danh ngắn gọn", ""],
        ["generator", "bộ sinh giá trị từng bước", ""],
        ["decorator", "hàm trang trí", ""],
        ["pip", "công cụ cài thư viện Python", ""],
        ["virtual environment", "môi trường ảo", ""],
        ["exception handling", "việc xử lý ngoại lệ", ""],
        ["iterate", "lặp qua từng phần tử", ""],
        ["docstring", "chuỗi mô tả hàm", ""],
        ["f-string", "chuỗi định dạng có biến", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong hướng dẫn lập trình", "Dùng động từ nguyên mẫu để hướng dẫn từng bước: Use pip to install a package.", "Use pip to install a package. | Add a docstring to every function."]
      ],
      "quiz": [
        ["Python uses ___ instead of brackets to show which lines belong to a block of code.", "indentation", ["slice", "docstring", "lambda"], "Python dùng thụt lề để chỉ ra khối mã: indentation."],
        ["A ___ stores pairs of keys and values, such as a name and a phone number.", "dictionary", ["tuple", "slice", "generator"], "Cấu trúc lưu các cặp khóa và giá trị là dictionary."],
        ["A ___ cannot be changed after it is created, unlike a list.", "tuple", ["generator", "decorator", "docstring"], "Không thay đổi được sau khi tạo là tuple."],
        ["Use ___ to install a library such as requests on your computer.", "pip", ["docstring", "lambda", "indentation"], "Công cụ cài thư viện Python là pip."],
        ["A ___ keeps the libraries of one project separate from other projects.", "virtual environment", ["tuple", "decorator", "generator"], "Tách thư viện của từng dự án là môi trường ảo."],
        ["To ___ over a list means to visit each item one by one.", "iterate", ["slice", "decorate", "unpack"], "Duyệt từng phần tử lần lượt là iterate."]
      ],
      "sentences": [
        ["Python uses indentation to define blocks of code.", "Python dùng thụt lề để xác định các khối mã."],
        ["A list can hold items of different types.", "Danh sách có thể chứa các phần tử thuộc nhiều kiểu khác nhau."],
        ["Use pip to install a package.", "Hãy dùng pip để cài một gói thư viện."],
        ["A lambda is a small function without a name.", "Lambda là một hàm nhỏ không có tên."],
        ["A docstring explains what a function does.", "Chuỗi mô tả giải thích hàm làm gì."],
        ["Exception handling stops the program from crashing when an error occurs.", "Xử lý ngoại lệ ngăn chương trình sập khi có lỗi xảy ra."]
      ],
      "transform": [
        ["The programmer installed the package with pip.", "Chuyển sang câu bị động", "The package was installed with pip by the programmer.", "Gói đã được lập trình viên cài bằng pip."],
        ["The loop iterates over the list.", "Viết lại thành câu hỏi Yes/No", "Does the loop iterate over the list?", "Vòng lặp có duyệt qua danh sách không?"],
        ["The function has a docstring.", "Viết lại ở dạng phủ định", "The function does not have a docstring.", "Hàm không có chuỗi mô tả."]
      ]
    },
    {
      "id": "pgtypes", "group": 15, "grade": 12, "icon": "🧮", "tag": "Lập trình",
      "title": "Kiểu dữ liệu và bộ nhớ", "en": "Data types and memory",
      "desc": "Ép kiểu, tràn số, con trỏ rỗng, kiểu tĩnh và động, có dấu và không dấu.",
      "words": [
        ["type", "kiểu dữ liệu", ""],
        ["cast", "ép kiểu", ""],
        ["overflow", "tràn số", ""],
        ["stack memory", "bộ nhớ ngăn xếp", ""],
        ["null pointer", "con trỏ rỗng", ""],
        ["memory address", "địa chỉ bộ nhớ", ""],
        ["static", "tĩnh", ""],
        ["dynamic", "động", ""],
        ["primitive", "nguyên thủy", ""],
        ["wrapper", "lớp bọc", ""],
        ["signed", "có dấu", ""],
        ["unsigned", "không dấu", ""],
        ["type error", "lỗi kiểu dữ liệu", ""],
        ["strongly typed", "kiểu dữ liệu chặt chẽ", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả trình biên dịch", "Dùng be + V3 để nói điều trình biên dịch làm với mã: The type is checked by the compiler.", "The type is checked by the compiler. | The value is cast to an integer by the program."]
      ],
      "quiz": [
        ["To ___ a value means to convert it from one data type to another.", "cast", ["wrap", "sign", "iterate"], "Chuyển một giá trị sang kiểu khác là ép kiểu: cast."],
        ["When a calculation gives a number that is too large for its type, the result is an integer ___.", "overflow", ["wrapper", "cast", "address"], "Số quá lớn so với kiểu dữ liệu gây ra tràn số: overflow."],
        ["A ___ number can be negative, but an unsigned number cannot.", "signed", ["static", "dynamic", "primitive"], "Số có thể âm là số có dấu: signed."],
        ["Accessing a ___ makes the program crash, because it points to nothing.", "null pointer", ["memory address", "type error", "wrapper"], "Con trỏ không trỏ tới đâu cả là con trỏ rỗng: null pointer."],
        ["In a ___ typed language, you cannot add a number to text without converting it.", "strongly", ["weakly", "randomly", "slowly"], "Không cho cộng số với chữ nếu chưa chuyển kiểu là ngôn ngữ kiểu chặt chẽ."],
        ["Types such as integer and boolean are ___ types, built into the language.", "primitive", ["dynamic", "unsigned", "visual"], "Các kiểu có sẵn như số nguyên, đúng sai là kiểu nguyên thủy: primitive."]
      ],
      "sentences": [
        ["Every variable has a type, such as integer or string.", "Mỗi biến đều có một kiểu, chẳng hạn số nguyên hoặc chuỗi."],
        ["A cast converts a float to an integer.", "Phép ép kiểu chuyển số thực thành số nguyên."],
        ["A null pointer points to no valid memory address.", "Con trỏ rỗng không trỏ đến địa chỉ bộ nhớ hợp lệ nào."],
        ["Overflow happens when a number is too large for its type.", "Tràn số xảy ra khi một số quá lớn so với kiểu của nó."],
        ["A static type is checked before the program runs.", "Kiểu tĩnh được kiểm tra trước khi chương trình chạy."],
        ["A type error appears when you use a value in the wrong way.", "Lỗi kiểu xuất hiện khi bạn dùng một giá trị sai cách."]
      ],
      "transform": [
        ["The compiler checks the type.", "Chuyển sang câu bị động", "The type is checked by the compiler.", "Kiểu dữ liệu được trình biên dịch kiểm tra."],
        ["The program casts the value to an integer.", "Chuyển sang câu bị động", "The value is cast to an integer by the program.", "Giá trị được chương trình ép sang số nguyên."],
        ["The language is strongly typed.", "Viết lại ở dạng phủ định", "The language is not strongly typed.", "Ngôn ngữ này không có kiểu chặt chẽ."]
      ]
    },
    {
      "id": "pgalgo2", "group": 15, "grade": 12, "icon": "🧠", "tag": "Lập trình",
      "title": "Thuật toán nâng cao", "en": "Advanced algorithms",
      "desc": "Tham lam, quy hoạch động, quay lui, chia để trị và độ phức tạp.",
      "words": [
        ["greedy", "tham lam", ""],
        ["dynamic programming", "quy hoạch động", ""],
        ["backtracking", "quay lui", ""],
        ["divide and conquer", "chia để trị", ""],
        ["time complexity", "độ phức tạp thời gian", ""],
        ["space complexity", "độ phức tạp bộ nhớ", ""],
        ["Big O", "ký hiệu Big O", ""],
        ["heuristic", "phương pháp ước lượng nhanh", ""],
        ["shortest path", "đường đi ngắn nhất", ""],
        ["minimum", "giá trị nhỏ nhất", ""],
        ["maximum", "giá trị lớn nhất", ""],
        ["hash collision", "đụng độ giá trị băm", ""],
        ["worst case", "trường hợp xấu nhất", ""],
        ["base case", "trường hợp cơ sở", ""]
      ],
      "grammar": [
        ["So sánh hơn khi nói về thuật toán", "Dùng more + tính từ dài + than hoặc tính từ ngắn + er: Binary search is faster than linear search.", "Binary search has a lower time complexity than linear search. | A hash table is more efficient than a long list."]
      ],
      "quiz": [
        ["A ___ algorithm always chooses the best option at the current step, without thinking about later steps.", "greedy", ["recursive", "random", "sorted"], "Luôn chọn phương án tốt nhất hiện tại là thuật toán tham lam: greedy."],
        ["___ breaks a big problem into smaller parts, solves each part and combines the results.", "Divide and conquer", ["Backtracking", "Heuristic", "Greedy"], "Chia bài toán lớn thành phần nhỏ rồi gộp kết quả là chia để trị."],
        ["In recursion, the ___ stops the function from calling itself forever.", "base case", ["worst case", "hash collision", "minimum"], "Điều kiện dừng của hàm đệ quy là trường hợp cơ sở: base case."],
        ["___ saves the results of small problems so that the program does not solve them again.", "Dynamic programming", ["Backtracking", "Greedy", "Heuristic"], "Lưu kết quả bài toán con để khỏi giải lại là quy hoạch động."],
        ["We use Big O notation to describe the ___ of an algorithm.", "time complexity", ["hash collision", "base case", "shortest path"], "Big O mô tả độ phức tạp thời gian của thuật toán."],
        ["A ___ happens when two different keys give the same hash value.", "hash collision", ["base case", "worst case", "heuristic"], "Hai khóa khác nhau cho cùng giá trị băm là đụng độ: hash collision."]
      ],
      "sentences": [
        ["A greedy algorithm picks the best choice at each step.", "Thuật toán tham lam chọn phương án tốt nhất ở mỗi bước."],
        ["Merge sort uses divide and conquer.", "Sắp xếp trộn dùng phương pháp chia để trị."],
        ["Binary search has a lower time complexity than linear search.", "Tìm kiếm nhị phân có độ phức tạp thời gian thấp hơn tìm kiếm tuyến tính."],
        ["Dynamic programming stores earlier results to save time.", "Quy hoạch động lưu các kết quả trước đó để tiết kiệm thời gian."],
        ["Backtracking tries one option and goes back when it fails.", "Quay lui thử một lựa chọn và quay lại khi thất bại."],
        ["A heuristic gives a good answer quickly but not always the best one.", "Phương pháp ước lượng cho đáp án tốt nhanh chóng nhưng không phải lúc nào cũng tốt nhất."]
      ],
      "transform": [
        ["The algorithm finds the shortest path.", "Chuyển sang câu bị động", "The shortest path is found by the algorithm.", "Đường đi ngắn nhất được thuật toán tìm ra."],
        ["The program returns the maximum value.", "Chuyển sang câu bị động", "The maximum value is returned by the program.", "Giá trị lớn nhất được chương trình trả về."],
        ["The function has a base case.", "Viết lại thành câu hỏi Yes/No", "Does the function have a base case?", "Hàm có trường hợp cơ sở không?"]
      ]
    },
    {
      "id": "pgapi", "group": 15, "grade": 12, "icon": "🔌", "tag": "Lập trình",
      "title": "Làm việc với API", "en": "Working with APIs",
      "desc": "Khóa xác thực, token, giới hạn tốc độ, phân trang, thử lại và webhook.",
      "words": [
        ["authentication key", "khóa xác thực", ""],
        ["bearer token", "mã token cấp quyền truy cập", ""],
        ["rate limit", "giới hạn tốc độ gọi", ""],
        ["throttle", "hạn chế lưu lượng", ""],
        ["pagination", "việc phân trang kết quả", ""],
        ["query parameter", "tham số truy vấn", ""],
        ["request body", "nội dung của yêu cầu", ""],
        ["response format", "định dạng phản hồi", ""],
        ["timeout", "hết thời gian chờ", ""],
        ["retry", "thử lại", ""],
        ["API version", "phiên bản của API", ""],
        ["webhook", "cơ chế gọi ngược khi có sự kiện", ""],
        ["CORS", "chia sẻ tài nguyên khác nguồn", ""],
        ["idempotent", "lặp lại vẫn cho cùng kết quả", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả yêu cầu và phản hồi", "Dùng be + V3 để nói điều xảy ra với dữ liệu trong API: The request body is sent by the client.", "The request body is sent by the client. | The rate of requests is limited by the server."]
      ],
      "quiz": [
        ["The API returns only twenty items at a time, so you must use ___ to get the next page.", "pagination", ["timeout", "webhook", "retry"], "Lấy từng trang kết quả kế tiếp là phân trang: pagination."],
        ["When the server does not answer within thirty seconds, the client shows a ___ error.", "timeout", ["pagination", "webhook", "throttle"], "Máy chủ không trả lời trong thời gian quy định là timeout."],
        ["The client sends the data of a new user in the ___ of a POST request.", "request body", ["query parameter", "API version", "response format"], "Dữ liệu gửi kèm yêu cầu POST nằm trong nội dung yêu cầu: request body."],
        ["A ___ lets one service send a message to another service automatically when an event happens.", "webhook", ["timeout", "pagination", "throttle"], "Dịch vụ tự gọi dịch vụ khác khi có sự kiện là webhook."],
        ["If you send too many requests, the server may ___ your connection and slow it down.", "throttle", ["paginate", "decorate", "translate"], "Máy chủ hạn chế lưu lượng của bạn là throttle."],
        ["An operation is ___ if repeating it many times gives the same result.", "idempotent", ["temporary", "expensive", "secret"], "Lặp lại nhiều lần vẫn cho cùng kết quả là idempotent."]
      ],
      "sentences": [
        ["Send your authentication key in the header of every request.", "Hãy gửi khóa xác thực trong phần tiêu đề của mỗi yêu cầu."],
        ["The API uses a bearer token to identify the user.", "API dùng một token để nhận biết người dùng."],
        ["A rate limit stops a client from sending too many requests.", "Giới hạn tốc độ ngăn máy khách gửi quá nhiều yêu cầu."],
        ["Use a query parameter to filter the results.", "Hãy dùng tham số truy vấn để lọc kết quả."],
        ["The client will retry the request if a timeout occurs.", "Máy khách sẽ thử lại yêu cầu nếu xảy ra hết thời gian chờ."],
        ["Always check the API version before you update your code.", "Luôn kiểm tra phiên bản API trước khi cập nhật mã của bạn."]
      ],
      "transform": [
        ["The client sends the request body.", "Chuyển sang câu bị động", "The request body is sent by the client.", "Nội dung yêu cầu được máy khách gửi đi."],
        ["The server limits the rate of requests.", "Chuyển sang câu bị động", "The rate of requests is limited by the server.", "Tốc độ yêu cầu bị máy chủ giới hạn."],
        ["The API supports pagination.", "Viết lại thành câu hỏi Yes/No", "Does the API support pagination?", "API có hỗ trợ phân trang không?"]
      ]
    },
    {
      "id": "pgtest2", "group": 15, "grade": 12, "icon": "✅", "tag": "Lập trình",
      "title": "Kiểm thử phần mềm chuyên sâu", "en": "Software testing in depth",
      "desc": "Hộp đen, hộp trắng, kiểm thử tích hợp, kiểm thử tải và phân loại lỗi.",
      "words": [
        ["test plan", "kế hoạch kiểm thử", ""],
        ["black box", "kiểm thử hộp đen", ""],
        ["white box", "kiểm thử hộp trắng", ""],
        ["integration test", "kiểm thử tích hợp", ""],
        ["load test", "kiểm thử chịu tải", ""],
        ["acceptance test", "kiểm thử nghiệm thu", ""],
        ["smoke test", "kiểm thử nhanh các chức năng cơ bản", ""],
        ["mock", "đối tượng giả lập", ""],
        ["flaky test", "bài kiểm thử lúc đạt lúc không", ""],
        ["automated test", "kiểm thử tự động", ""],
        ["bug triage", "phân loại và xếp ưu tiên lỗi", ""],
        ["severity", "mức độ nghiêm trọng", ""],
        ["release candidate", "bản ứng viên phát hành", ""],
        ["test suite", "bộ kiểm thử", ""]
      ],
      "grammar": [
        ["Câu bị động khi báo cáo kết quả kiểm thử", "Dùng be + V3 để báo cáo điều đã làm: The integration test was run.", "The integration test was run by the team. | The test plan was written by the tester."]
      ],
      "quiz": [
        ["In ___ testing, the tester checks the output without looking at the code inside.", "black box", ["white box", "load", "smoke"], "Chỉ kiểm tra kết quả, không xem mã bên trong là kiểm thử hộp đen."],
        ["A ___ test checks how the system behaves when thousands of users visit at the same time.", "load", ["smoke", "acceptance", "unit"], "Kiểm tra hệ thống khi hàng nghìn người truy cập là kiểm thử tải: load test."],
        ["A ___ test sometimes passes and sometimes fails without any change in the code.", "flaky", ["smoke", "black box", "automated"], "Lúc đạt lúc không dù mã không đổi là flaky test."],
        ["The customer performs the final ___ test to confirm that the system meets the requirements.", "acceptance", ["smoke", "flaky", "load"], "Khách hàng kiểm tra cuối để nghiệm thu là acceptance test."],
        ["During ___, the team decides which bugs to fix first according to their severity.", "bug triage", ["release candidate", "test suite", "smoke test"], "Phân loại và xếp thứ tự ưu tiên lỗi là bug triage."],
        ["A ___ is a version that could be released if no serious bug is found.", "release candidate", ["test plan", "test suite", "mock"], "Bản có thể phát hành nếu không tìm thấy lỗi nặng là release candidate."]
      ],
      "sentences": [
        ["The test plan describes what, when and how the team will test.", "Kế hoạch kiểm thử mô tả nhóm sẽ kiểm thử cái gì, khi nào và bằng cách nào."],
        ["Developers write a mock to replace a real database in a test.", "Lập trình viên viết đối tượng giả lập để thay cơ sở dữ liệu thật trong bài kiểm thử."],
        ["A smoke test checks that the basic functions work after a new build.", "Kiểm thử nhanh xem các chức năng cơ bản có chạy sau bản dựng mới không."],
        ["An automated test runs again every time the code changes.", "Kiểm thử tự động chạy lại mỗi khi mã thay đổi."],
        ["The team uses severity to decide which bug is most serious.", "Nhóm dùng mức độ nghiêm trọng để quyết định lỗi nào nặng nhất."],
        ["Run the whole test suite before the release candidate is approved.", "Hãy chạy toàn bộ bộ kiểm thử trước khi bản ứng viên được duyệt."]
      ],
      "transform": [
        ["The team ran the integration test.", "Chuyển sang câu bị động", "The integration test was run by the team.", "Kiểm thử tích hợp đã được nhóm chạy."],
        ["The tester wrote the test plan.", "Chuyển sang câu bị động", "The test plan was written by the tester.", "Kế hoạch kiểm thử đã được người kiểm thử viết."],
        ["The test suite takes a long time.", "Viết lại ở dạng phủ định", "The test suite does not take a long time.", "Bộ kiểm thử không mất nhiều thời gian."]
      ]
    },
    {
      "id": "pgagile2", "group": 15, "grade": 12, "icon": "🔄", "tag": "Lập trình",
      "title": "Quy trình Agile và Scrum", "en": "Agile and Scrum",
      "desc": "Chủ sản phẩm, điểm ước lượng, lập trình cặp, nợ kỹ thuật và đóng băng mã.",
      "words": [
        ["product owner", "chủ sản phẩm", ""],
        ["scrum master", "người điều phối Scrum", ""],
        ["sprint planning", "họp lập kế hoạch sprint", ""],
        ["backlog refinement", "tinh chỉnh danh sách việc", ""],
        ["velocity", "tốc độ làm việc của nhóm", ""],
        ["story point", "điểm ước lượng công việc", ""],
        ["epic", "nhóm tính năng lớn", ""],
        ["pair programming", "lập trình cặp", ""],
        ["continuous delivery", "chuyển giao liên tục", ""],
        ["technical debt", "nợ kỹ thuật", ""],
        ["code freeze", "đóng băng mã nguồn", ""],
        ["definition of done", "tiêu chí hoàn thành", ""],
        ["increment", "phần sản phẩm hoàn thiện thêm", ""],
        ["burndown chart", "biểu đồ công việc còn lại", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả vai trò trong nhóm", "Dùng hiện tại đơn để nói trách nhiệm thường xuyên: The product owner keeps the backlog in order.", "The product owner orders the backlog. | The team measures its velocity."]
      ],
      "quiz": [
        ["The ___ decides which features are most important for the customer.", "product owner", ["scrum master", "epic", "increment"], "Người quyết định tính năng quan trọng nhất là chủ sản phẩm."],
        ["The ___ helps the team follow Scrum rules and removes obstacles.", "scrum master", ["product owner", "velocity", "epic"], "Người giúp nhóm theo quy tắc Scrum và gỡ vướng mắc là scrum master."],
        ["A ___ is a unit used to estimate how big and difficult a task is.", "story point", ["burndown chart", "code freeze", "velocity"], "Đơn vị ước lượng độ lớn, độ khó của việc là điểm ước lượng: story point."],
        ["In ___, two developers work together at one computer, and one writes while the other reviews.", "pair programming", ["code freeze", "sprint planning", "continuous delivery"], "Hai người cùng làm trên một máy là lập trình cặp."],
        ["Quick and messy solutions create ___, which makes future changes slower and more expensive.", "technical debt", ["velocity", "epic", "increment"], "Giải pháp làm vội gây ra nợ kỹ thuật: technical debt."],
        ["During a ___, developers stop adding new features so that the team can test and fix the release.", "code freeze", ["sprint planning", "pair programming", "backlog refinement"], "Ngừng thêm tính năng để kiểm thử, sửa lỗi là đóng băng mã: code freeze."]
      ],
      "sentences": [
        ["At sprint planning, the team chooses the tasks for the next sprint.", "Ở buổi lập kế hoạch sprint, nhóm chọn các việc cho sprint tiếp theo."],
        ["The product owner keeps the backlog in order of importance.", "Chủ sản phẩm sắp xếp danh sách việc theo mức quan trọng."],
        ["An epic is a large feature that the team splits into smaller stories.", "Epic là một tính năng lớn mà nhóm chia thành các câu chuyện nhỏ hơn."],
        ["The burndown chart shows how much work is left.", "Biểu đồ cho thấy còn lại bao nhiêu công việc."],
        ["The definition of done says when a story is really finished.", "Tiêu chí hoàn thành cho biết khi nào một câu chuyện thật sự xong."],
        ["Continuous delivery lets the team release small changes often.", "Chuyển giao liên tục cho phép nhóm phát hành các thay đổi nhỏ thường xuyên."]
      ],
      "transform": [
        ["The product owner ordered the backlog.", "Chuyển sang câu bị động", "The backlog was ordered by the product owner.", "Danh sách việc đã được chủ sản phẩm sắp xếp."],
        ["The team measures its velocity.", "Chuyển sang câu bị động", "Its velocity is measured by the team.", "Tốc độ làm việc được nhóm đo."],
        ["The team uses pair programming.", "Viết lại thành câu hỏi Yes/No", "Does the team use pair programming?", "Nhóm có dùng lập trình cặp không?"]
      ]
    },
    {
      "id": "pgfront", "group": 15, "grade": 11, "icon": "🎛️", "tag": "Lập trình",
      "title": "Frontend: CSS và bố cục", "en": "Frontend layout",
      "desc": "Thiết kế đáp ứng, flexbox, lưới, truy vấn media, lề trong và lề ngoài.",
      "words": [
        ["responsive design", "thiết kế đáp ứng nhiều màn hình", ""],
        ["viewport", "vùng hiển thị của trình duyệt", ""],
        ["flexbox", "bố cục flexbox", ""],
        ["grid layout", "bố cục lưới", ""],
        ["media query", "truy vấn theo thiết bị", ""],
        ["breakpoint", "ngưỡng đổi bố cục", ""],
        ["selector", "bộ chọn phần tử", ""],
        ["hover", "rê chuột lên phần tử", ""],
        ["pseudo-class", "lớp giả trong CSS", ""],
        ["box model", "mô hình hộp", ""],
        ["margin", "lề ngoài", ""],
        ["padding", "lề trong", ""],
        ["component", "thành phần giao diện dùng lại", ""],
        ["single-page application", "ứng dụng một trang", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách CSS hoạt động", "Dùng hiện tại đơn để nói điều luôn xảy ra: Flexbox arranges items in a row or a column.", "The page uses flexbox. | The button changes colour on hover."]
      ],
      "quiz": [
        ["The ___ is the area of the web page that you can see on your screen.", "viewport", ["margin", "selector", "component"], "Khu vực trang bạn nhìn thấy trên màn hình là viewport."],
        ["Use a ___ to apply different styles when the screen is narrower than six hundred pixels.", "media query", ["selector", "pseudo-class", "box model"], "Áp dụng kiểu khác khi màn hình hẹp là truy vấn media: media query."],
        ["The ___ is the space between the content of an element and its border.", "padding", ["margin", "viewport", "breakpoint"], "Khoảng trống giữa nội dung và đường viền là lề trong: padding."],
        ["The ___ is the space outside the border of an element.", "margin", ["padding", "viewport", "selector"], "Khoảng trống bên ngoài đường viền là lề ngoài: margin."],
        ["A ___ is a reusable part of the interface, such as a button or a menu.", "component", ["breakpoint", "viewport", "pseudo-class"], "Phần giao diện dùng lại được là thành phần: component."],
        ["A CSS ___ chooses which HTML elements a style rule applies to.", "selector", ["viewport", "margin", "component"], "Phần chọn phần tử để áp dụng kiểu là selector."]
      ],
      "sentences": [
        ["Responsive design makes a website look good on phones and computers.", "Thiết kế đáp ứng làm trang web đẹp trên cả điện thoại và máy tính."],
        ["A media query changes the layout at a certain breakpoint.", "Truy vấn media đổi bố cục tại một ngưỡng nhất định."],
        ["Flexbox arranges items in a row or a column.", "Flexbox sắp xếp các phần tử theo hàng hoặc cột."],
        ["The box model includes content, padding, border and margin.", "Mô hình hộp gồm nội dung, lề trong, đường viền và lề ngoài."],
        ["The button changes colour on hover.", "Nút đổi màu khi rê chuột lên."],
        ["A single-page application loads one page and updates it without reloading.", "Ứng dụng một trang tải một trang và cập nhật nó mà không tải lại."]
      ],
      "transform": [
        ["The designer changed the margin.", "Chuyển sang câu bị động", "The margin was changed by the designer.", "Lề ngoài đã được nhà thiết kế thay đổi."],
        ["The page uses flexbox.", "Viết lại thành câu hỏi Yes/No", "Does the page use flexbox?", "Trang có dùng flexbox không?"],
        ["The layout is responsive.", "Viết lại ở dạng phủ định", "The layout is not responsive.", "Bố cục không đáp ứng nhiều màn hình."]
      ]
    },
    {
      "id": "pgconcurrency", "group": 15, "grade": 12, "icon": "⏱️", "tag": "Lập trình",
      "title": "Lập trình đồng thời và đa luồng", "en": "Concurrency and multithreading",
      "desc": "Luồng, bế tắc, tranh chấp, khóa mutex, bộ lập lịch và đồng bộ hóa.",
      "words": [
        ["concurrency", "tính đồng thời", ""],
        ["parallelism", "tính song song", ""],
        ["multithreading", "đa luồng", ""],
        ["thread pool", "nhóm luồng dùng chung", ""],
        ["race condition", "tình trạng tranh chấp", ""],
        ["deadlock", "bế tắc", ""],
        ["starvation", "tình trạng đói tài nguyên", ""],
        ["mutex", "khóa loại trừ lẫn nhau", ""],
        ["semaphore", "cờ hiệu giới hạn truy cập", ""],
        ["synchronisation", "sự đồng bộ hóa", ""],
        ["critical section", "vùng găng", ""],
        ["shared resource", "tài nguyên dùng chung", ""],
        ["scheduler", "bộ lập lịch", ""],
        ["context switch", "chuyển ngữ cảnh", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả tài nguyên", "Dùng be + V3 để nhấn mạnh vật được bảo vệ hay chọn: The shared resource is protected by the mutex.", "The next thread is selected by the scheduler. | The shared resource is protected by the mutex."]
      ],
      "quiz": [
        ["A ___ happens when two threads wait for each other forever, so neither can continue.", "deadlock", ["starvation", "context switch", "scheduler"], "Hai luồng chờ nhau mãi là bế tắc: deadlock."],
        ["A ___ happens when the result depends on which thread finishes first.", "race condition", ["deadlock", "starvation", "mutex"], "Kết quả phụ thuộc luồng nào xong trước là tình trạng tranh chấp."],
        ["A ___ allows only one thread at a time to enter a critical section.", "mutex", ["scheduler", "thread pool", "race condition"], "Chỉ cho một luồng vào vùng găng mỗi lần là mutex."],
        ["The ___ decides which thread uses the processor and for how long.", "scheduler", ["mutex", "deadlock", "semaphore"], "Bộ quyết định luồng nào dùng bộ xử lý là bộ lập lịch: scheduler."],
        ["A ___ keeps a number of ready threads so that the program does not create a new thread for every task.", "thread pool", ["mutex", "deadlock", "critical section"], "Giữ sẵn một số luồng để tái sử dụng là nhóm luồng: thread pool."],
        ["___ means running several tasks at exactly the same time on different processor cores.", "Parallelism", ["Deadlock", "Starvation", "Synchronisation"], "Chạy nhiều tác vụ cùng lúc trên nhiều lõi là tính song song."]
      ],
      "sentences": [
        ["Multithreading lets a program do several things at once.", "Đa luồng cho phép chương trình làm nhiều việc cùng lúc."],
        ["A mutex protects a shared resource from two threads at the same time.", "Mutex bảo vệ tài nguyên dùng chung khỏi hai luồng cùng truy cập."],
        ["A race condition can produce a different result every time.", "Tình trạng tranh chấp có thể cho kết quả khác nhau mỗi lần."],
        ["A deadlock stops two threads from moving forward.", "Bế tắc làm hai luồng không thể tiến lên."],
        ["The scheduler switches the processor between threads, and each switch is a context switch.", "Bộ lập lịch chuyển bộ xử lý giữa các luồng và mỗi lần chuyển là một lần chuyển ngữ cảnh."],
        ["Parallelism needs more than one processor core.", "Tính song song cần nhiều hơn một lõi xử lý."]
      ],
      "transform": [
        ["The scheduler selects the next thread.", "Chuyển sang câu bị động", "The next thread is selected by the scheduler.", "Luồng kế tiếp được bộ lập lịch chọn."],
        ["The mutex protects the shared resource.", "Chuyển sang câu bị động", "The shared resource is protected by the mutex.", "Tài nguyên dùng chung được mutex bảo vệ."],
        ["The program uses multithreading.", "Viết lại thành câu hỏi Yes/No", "Does the program use multithreading?", "Chương trình có dùng đa luồng không?"]
      ]
    },
    {
      "id": "pgml", "group": 15, "grade": 12, "icon": "📈", "tag": "Lập trình",
      "title": "Lập trình học máy", "en": "Machine learning programming",
      "desc": "Epoch, hàm mất mát, tập huấn luyện, siêu tham số và các hiện tượng khớp.",
      "words": [
        ["epoch", "một lượt học qua toàn bộ dữ liệu", ""],
        ["gradient", "độ dốc dùng để cập nhật mô hình", ""],
        ["loss function", "hàm mất mát", ""],
        ["tensor", "mảng nhiều chiều", ""],
        ["training set", "tập huấn luyện", ""],
        ["test set", "tập kiểm tra", ""],
        ["validation set", "tập kiểm định", ""],
        ["hyperparameter", "siêu tham số", ""],
        ["backpropagation", "thuật toán lan truyền ngược", ""],
        ["learning rate", "tốc độ học", ""],
        ["batch size", "kích thước lô dữ liệu", ""],
        ["underfitting", "hiện tượng chưa khớp dữ liệu", ""],
        ["regularisation", "kỹ thuật điều chuẩn", ""],
        ["activation function", "hàm kích hoạt", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả huấn luyện mô hình", "Dùng be + V3 để nói điều xảy ra với dữ liệu và mô hình: Each batch is processed by the model.", "Each batch is processed by the model. | The hyperparameters were tuned by engineers."]
      ],
      "quiz": [
        ["One ___ means that the model has seen every example in the training data once.", "epoch", ["tensor", "gradient", "batch size"], "Một lượt duyệt hết dữ liệu huấn luyện là một epoch."],
        ["The ___ measures how wrong the model's predictions are.", "loss function", ["activation function", "learning rate", "test set"], "Hàm đo mức sai của dự đoán là hàm mất mát: loss function."],
        ["The model learns from the ___ and is finally judged on the test set.", "training set", ["tensor", "epoch", "gradient"], "Mô hình học từ tập huấn luyện: training set."],
        ["Engineers use the ___ to choose settings such as the learning rate while they build the model.", "validation set", ["test set", "epoch", "tensor"], "Dùng tập kiểm định để chọn thiết lập khi xây dựng mô hình."],
        ["If the ___ is too high, the model may jump over the best solution.", "learning rate", ["epoch", "tensor", "test set"], "Tốc độ học quá cao có thể làm mô hình bỏ qua lời giải tốt nhất."],
        ["A model with ___ is too simple, so it performs badly on both the training and the test data.", "underfitting", ["regularisation", "backpropagation", "hyperparameter"], "Mô hình quá đơn giản, kém trên cả hai tập là chưa khớp: underfitting."]
      ],
      "sentences": [
        ["A tensor is a multi-dimensional array of numbers.", "Tensor là một mảng nhiều chiều chứa các số."],
        ["The loss function shows how far the prediction is from the correct answer.", "Hàm mất mát cho thấy dự đoán lệch bao xa so với đáp án đúng."],
        ["Backpropagation uses the gradient to update the weights.", "Lan truyền ngược dùng độ dốc để cập nhật các trọng số."],
        ["Use the test set only after the training is finished.", "Chỉ dùng tập kiểm tra sau khi huấn luyện xong."],
        ["A hyperparameter, such as the batch size, is chosen before training.", "Siêu tham số, chẳng hạn kích thước lô, được chọn trước khi huấn luyện."],
        ["Regularisation helps a model avoid overfitting.", "Điều chuẩn giúp mô hình tránh bị quá khớp."]
      ],
      "transform": [
        ["The model processes each batch.", "Chuyển sang câu bị động", "Each batch is processed by the model.", "Mỗi lô dữ liệu được mô hình xử lý."],
        ["Engineers tuned the hyperparameters.", "Chuyển sang câu bị động", "The hyperparameters were tuned by engineers.", "Các siêu tham số đã được kỹ sư tinh chỉnh."],
        ["The model uses a validation set.", "Viết lại thành câu hỏi Yes/No", "Does the model use a validation set?", "Mô hình có dùng tập kiểm định không?"]
      ]
    },
    {
      "id": "pgembedded", "group": 15, "grade": 12, "icon": "🔧", "tag": "Lập trình",
      "title": "Lập trình nhúng", "en": "Embedded programming",
      "desc": "Vi điều khiển, chân GPIO, ngắt, cổng nối tiếp, điện trở và cập nhật phần sụn.",
      "words": [
        ["microcontroller", "vi điều khiển", ""],
        ["GPIO", "chân vào ra đa dụng", ""],
        ["interrupt", "ngắt", ""],
        ["serial port", "cổng nối tiếp", ""],
        ["baud rate", "tốc độ baud", ""],
        ["flash memory", "bộ nhớ flash", ""],
        ["bootloader", "chương trình khởi động", ""],
        ["debugger", "công cụ gỡ lỗi", ""],
        ["breadboard", "bảng cắm thử mạch", ""],
        ["firmware update", "việc cập nhật phần sụn", ""],
        ["voltage", "điện áp", ""],
        ["resistor", "điện trở", ""],
        ["analog", "tương tự", ""],
        ["low power", "tiết kiệm điện năng", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả thiết bị nhúng", "Dùng be + V3 để nói điều thiết bị đã làm hoặc đã được làm: The firmware was updated by the engineer.", "The voltage is read by the microcontroller. | The firmware was updated by the engineer."]
      ],
      "quiz": [
        ["A ___ is a tiny computer on a single chip that controls devices such as washing machines.", "microcontroller", ["resistor", "breadboard", "debugger"], "Máy tính nhỏ trên một chip điều khiển thiết bị là vi điều khiển."],
        ["Use ___ to react to a button press immediately, without checking the pin all the time.", "interrupts", ["resistors", "breadboards", "debuggers"], "Phản ứng ngay khi nhấn nút mà không phải kiểm tra liên tục là dùng ngắt: interrupts."],
        ["You can build and test a circuit on a ___ without any soldering.", "breadboard", ["resistor", "debugger", "bootloader"], "Cắm thử mạch không cần hàn là bảng cắm thử: breadboard."],
        ["A ___ limits the flow of electric current in a circuit.", "resistor", ["debugger", "bootloader", "breadboard"], "Linh kiện hạn chế dòng điện là điện trở: resistor."],
        ["The ___ is the small program that starts first and loads the main firmware.", "bootloader", ["debugger", "baud rate", "resistor"], "Chương trình nhỏ chạy đầu tiên để nạp phần sụn là bootloader."],
        ["Both devices must use the same ___ so that they understand each other over the serial port.", "baud rate", ["voltage", "resistor", "breadboard"], "Hai thiết bị phải cùng tốc độ baud mới hiểu nhau."]
      ],
      "sentences": [
        ["A microcontroller reads the sensor and controls the motor.", "Vi điều khiển đọc cảm biến và điều khiển động cơ."],
        ["Connect the GPIO pin to the LED through a resistor.", "Hãy nối chân GPIO với đèn LED qua một điện trở."],
        ["A debugger helps you find errors in embedded code.", "Công cụ gỡ lỗi giúp bạn tìm lỗi trong mã nhúng."],
        ["The flash memory stores the firmware even when the power is off.", "Bộ nhớ flash lưu phần sụn ngay cả khi tắt nguồn."],
        ["Always check the voltage before you connect a new sensor.", "Luôn kiểm tra điện áp trước khi nối cảm biến mới."],
        ["A low power design makes the battery last longer.", "Thiết kế tiết kiệm điện làm pin dùng được lâu hơn."]
      ],
      "transform": [
        ["The microcontroller reads the voltage.", "Chuyển sang câu bị động", "The voltage is read by the microcontroller.", "Điện áp được vi điều khiển đọc."],
        ["The engineer updated the firmware.", "Chuyển sang câu bị động", "The firmware was updated by the engineer.", "Phần sụn đã được kỹ sư cập nhật."],
        ["The device has a serial port.", "Viết lại thành câu hỏi Yes/No", "Does the device have a serial port?", "Thiết bị có cổng nối tiếp không?"]
      ]
    },
    {
      "id": "pgsecure", "group": 15, "grade": 12, "icon": "🔐", "tag": "Lập trình",
      "title": "Lập trình an toàn", "en": "Secure coding",
      "desc": "Tràn bộ đệm, đặc quyền tối thiểu, quản lý bí mật, ký mã và mô hình đe dọa.",
      "words": [
        ["buffer overflow", "tràn bộ đệm", ""],
        ["memory safety", "an toàn bộ nhớ", ""],
        ["least privilege", "đặc quyền tối thiểu", ""],
        ["secure by design", "bảo mật ngay từ khâu thiết kế", ""],
        ["dependency scanning", "quét thư viện phụ thuộc", ""],
        ["secret management", "quản lý khóa và mật khẩu bí mật", ""],
        ["code signing", "ký mã phần mềm", ""],
        ["audit log", "nhật ký kiểm toán", ""],
        ["static analysis", "phân tích tĩnh mã nguồn", ""],
        ["threat model", "mô hình hóa mối đe dọa", ""],
        ["security review", "việc rà soát bảo mật", ""],
        ["hardening", "việc gia cố hệ thống", ""],
        ["attack surface", "bề mặt tấn công", ""],
        ["zero trust", "mô hình không tin cậy mặc định", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong quy tắc lập trình an toàn", "Dùng động từ nguyên mẫu hoặc Never để đưa ra quy tắc: Apply least privilege. Never store a secret in the code.", "Apply the principle of least privilege to every account. | Never store a secret in the source code."]
      ],
      "quiz": [
        ["A ___ happens when a program writes more data into memory than the space can hold.", "buffer overflow", ["code signing", "audit log", "hardening"], "Ghi nhiều dữ liệu hơn vùng nhớ chứa được là tràn bộ đệm."],
        ["The rule of ___ says that every user and program should have only the permissions it really needs.", "least privilege", ["code signing", "threat model", "audit log"], "Chỉ cấp đúng quyền cần thiết là nguyên tắc đặc quyền tối thiểu."],
        ["Never put passwords in the source code; use ___ to store them safely.", "secret management", ["static analysis", "code signing", "hardening"], "Lưu khóa và mật khẩu an toàn là quản lý bí mật."],
        ["The ___ records who did what and when, so investigators can follow events later.", "audit log", ["threat model", "code signing", "hardening"], "Ghi lại ai làm gì, khi nào là nhật ký kiểm toán: audit log."],
        ["___ checks the code for dangerous patterns without running the program.", "Static analysis", ["Code signing", "Hardening", "Dependency scanning"], "Kiểm tra mã mà không chạy chương trình là phân tích tĩnh."],
        ["Every extra open port or feature makes the ___ of the system bigger.", "attack surface", ["audit log", "threat model", "code signing"], "Mỗi cổng hay tính năng thêm làm bề mặt tấn công lớn hơn."]
      ],
      "sentences": [
        ["A buffer overflow can let an attacker run harmful code.", "Tràn bộ đệm có thể cho kẻ tấn công chạy mã độc."],
        ["Memory safety prevents many serious bugs.", "An toàn bộ nhớ ngăn được nhiều lỗi nghiêm trọng."],
        ["Apply the principle of least privilege to every account.", "Hãy áp dụng nguyên tắc đặc quyền tối thiểu cho mọi tài khoản."],
        ["Dependency scanning finds libraries with known vulnerabilities.", "Quét thư viện phụ thuộc tìm ra những thư viện có lỗ hổng đã biết."],
        ["Code signing proves that the software has not been changed.", "Ký mã chứng minh phần mềm chưa bị thay đổi."],
        ["Zero trust means that no user or device is trusted by default.", "Không tin cậy mặc định nghĩa là không người dùng hay thiết bị nào được tin sẵn."]
      ],
      "transform": [
        ["The scanner found the vulnerable library.", "Chuyển sang câu bị động", "The vulnerable library was found by the scanner.", "Thư viện có lỗ hổng đã được công cụ quét tìm thấy."],
        ["The team reviews every change for security.", "Chuyển sang câu bị động", "Every change is reviewed for security by the team.", "Mọi thay đổi được nhóm rà soát về bảo mật."],
        ["The system keeps an audit log.", "Viết lại thành câu hỏi Yes/No", "Does the system keep an audit log?", "Hệ thống có lưu nhật ký kiểm toán không?"]
      ]
    }
  ]
}
);
