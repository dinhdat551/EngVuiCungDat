/* EngVui – Tiếng Anh cho lập trình viên (nhóm "Lập trình"): thuật ngữ cơ bản, dữ liệu và thuật toán, hướng đối tượng, web, cơ sở dữ liệu, gỡ lỗi, công cụ, khoa học máy tính, ngôn ngữ lập trình, DevOps, di động, Linux.
   Nội dung tự soạn. Định dạng giống js/data/exam.js; kiểm tra bằng tools/validate_it.py. Phần trong ngoặc là JSON chuẩn. */
EV.extendExam({
  "names": ["Python", "Java", "JavaScript", "Linux", "Ubuntu", "Unix", "Git", "GitHub", "Android", "iOS", "Windows", "Docker", "SQL"],
  "groups": [
    {"id": 15, "title": "Lập trình", "desc": "Thuật ngữ và tiếng Anh dành cho lập trình viên", "color": "#00B8D9", "dark": "#0095B3"}
  ],
  "topics": [
    {
      "id": "pgbasic", "group": 15, "grade": 11, "icon": "💻", "tag": "Lập trình",
      "title": "Lập trình cơ bản: biến và kiểu dữ liệu", "en": "Programming basics",
      "desc": "Biến, hằng, kiểu dữ liệu, mảng, toán tử và cách khai báo.",
      "words": [
        ["variable", "biến", ""],
        ["constant", "hằng số", ""],
        ["value", "giá trị", ""],
        ["declare", "khai báo", ""],
        ["assign", "gán giá trị", ""],
        ["string", "chuỗi ký tự", ""],
        ["integer", "số nguyên", ""],
        ["float", "số thực dấu phẩy động", ""],
        ["boolean", "kiểu đúng sai", ""],
        ["null", "giá trị rỗng", ""],
        ["array", "mảng", ""],
        ["expression", "biểu thức", ""],
        ["operator", "toán tử", ""],
        ["keyword", "từ khóa của ngôn ngữ", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả hành động của chương trình", "Dùng be + V3 khi nói về điều xảy ra với dữ liệu: The value is stored in a variable.", "A variable was declared by the programmer. | The value is stored in a variable by the program."]
      ],
      "quiz": [
        ["A ___ is a name that stores a value which can change while the program runs.", "variable", ["constant", "operator", "keyword"], "Tên lưu giá trị có thể thay đổi là biến: variable."],
        ["A ___ is a value that must not change after you set it.", "constant", ["variable", "expression", "array"], "Giá trị không được đổi sau khi đặt là hằng số: constant."],
        ["The value 42 has the data type ___, and 3.14 has the type float.", "integer", ["string", "boolean", "array"], "42 là số nguyên: integer."],
        ["A ___ value can only be true or false.", "boolean", ["integer", "string", "array"], "Chỉ nhận đúng hoặc sai là kiểu boolean."],
        ["You can store a list of ten scores in one ___.", "array", ["constant", "operator", "keyword"], "Lưu nhiều giá trị trong một danh sách có thứ tự là mảng: array."],
        ["In the expression two plus three, the plus sign is the ___.", "operator", ["variable", "keyword", "string"], "Dấu cộng thực hiện phép tính là toán tử: operator."]
      ],
      "sentences": [
        ["Declare a variable before you use it.", "Hãy khai báo biến trước khi dùng nó."],
        ["The program assigns the value five to the variable.", "Chương trình gán giá trị năm cho biến."],
        ["A string is a sequence of characters such as a name.", "Chuỗi là một dãy ký tự, ví dụ một cái tên."],
        ["An array stores several values in one place.", "Mảng lưu nhiều giá trị ở cùng một chỗ."],
        ["The value null means that there is no value.", "Giá trị null nghĩa là không có giá trị."]
      ],
      "transform": [
        ["The programmer declared a variable.", "Chuyển sang câu bị động", "A variable was declared by the programmer.", "Một biến đã được lập trình viên khai báo."],
        ["The program stores the value in a variable.", "Chuyển sang câu bị động", "The value is stored in a variable by the program.", "Giá trị được chương trình lưu trong một biến."],
        ["The program can store text.", "Viết lại ở dạng phủ định", "The program cannot store text.|The program can not store text.", "Chương trình không thể lưu văn bản."]
      ]
    },
    {
      "id": "pgflow", "group": 15, "grade": 11, "icon": "🔁", "tag": "Lập trình",
      "title": "Hàm, vòng lặp và điều kiện", "en": "Functions, loops and conditions",
      "desc": "Hàm, tham số, vòng lặp, câu lệnh điều kiện và cú pháp.",
      "words": [
        ["function", "hàm", ""],
        ["parameter", "tham số của hàm", ""],
        ["argument", "đối số truyền vào hàm", ""],
        ["loop", "vòng lặp", "🔁"],
        ["condition", "điều kiện", ""],
        ["syntax", "cú pháp", ""],
        ["comment", "chú thích trong mã", ""],
        ["scope", "phạm vi của biến", ""],
        ["identifier", "tên định danh", ""],
        ["script", "tập lệnh", ""],
        ["input", "dữ liệu đầu vào", ""],
        ["nested loop", "vòng lặp lồng nhau", ""],
        ["if statement", "câu lệnh if", ""],
        ["return value", "giá trị trả về", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách mã chạy", "Dùng hiện tại đơn để mô tả điều chương trình luôn làm: The loop repeats the task. Ngôi thứ ba số ít thêm s.", "The function returns a value. | The loop repeats the task ten times."]
      ],
      "quiz": [
        ["A ___ is a block of code that does one task and can be used again.", "function", ["comment", "syntax", "scope"], "Khối mã làm một việc và dùng lại được là hàm: function."],
        ["A ___ repeats the same instructions many times.", "loop", ["comment", "identifier", "script"], "Lặp lại cùng các lệnh nhiều lần là vòng lặp: loop."],
        ["When you call a function, the actual value you send to it is called the ___.", "argument", ["syntax", "identifier", "comment"], "Giá trị thật truyền vào hàm là đối số: argument."],
        ["Programmers write a ___ to explain the code, and the computer ignores it.", "comment", ["condition", "loop", "scope"], "Dòng giải thích mà máy bỏ qua là chú thích: comment."],
        ["The code runs only when the ___ is true.", "condition", ["comment", "syntax", "loop"], "Mã chỉ chạy khi điều kiện đúng: condition."],
        ["The grammar rules of a programming language are called its ___.", "syntax", ["scope", "comment", "identifier"], "Quy tắc ngữ pháp của ngôn ngữ lập trình là cú pháp: syntax."]
      ],
      "sentences": [
        ["A function can take a parameter and give back a return value.", "Hàm có thể nhận một tham số và trả về một giá trị."],
        ["The loop runs ten times and then stops.", "Vòng lặp chạy mười lần rồi dừng."],
        ["An if statement checks a condition.", "Câu lệnh if kiểm tra một điều kiện."],
        ["A nested loop is a loop inside another loop.", "Vòng lặp lồng nhau là vòng lặp nằm trong vòng lặp khác."],
        ["Add a comment to explain the code.", "Hãy thêm chú thích để giải thích đoạn mã."]
      ],
      "transform": [
        ["The function returns a value.", "Viết lại thành câu hỏi Yes/No", "Does the function return a value?", "Hàm có trả về giá trị không?"],
        ["The loop repeats the task ten times.", "Viết lại ở dạng phủ định", "The loop does not repeat the task ten times.", "Vòng lặp không lặp lại tác vụ mười lần."],
        ["The programmer wrote a comment.", "Chuyển sang câu bị động", "A comment was written by the programmer.", "Một chú thích đã được lập trình viên viết."]
      ]
    },
    {
      "id": "pgdata", "group": 15, "grade": 12, "icon": "🌳", "tag": "Lập trình",
      "title": "Cấu trúc dữ liệu và thuật toán", "en": "Data structures and algorithms",
      "desc": "Ngăn xếp, hàng đợi, danh sách liên kết, sắp xếp, tìm kiếm và đệ quy.",
      "words": [
        ["stack", "ngăn xếp", ""],
        ["queue", "hàng đợi", ""],
        ["linked list", "danh sách liên kết", ""],
        ["graph", "đồ thị", ""],
        ["hash table", "bảng băm", ""],
        ["sorting", "việc sắp xếp", ""],
        ["complexity", "độ phức tạp", ""],
        ["pointer", "con trỏ", ""],
        ["node", "nút", ""],
        ["index", "chỉ số vị trí", ""],
        ["iteration", "sự lặp", ""],
        ["binary search", "tìm kiếm nhị phân", ""],
        ["recursion", "đệ quy", ""],
        ["heap", "đống (cấu trúc dữ liệu)", ""]
      ],
      "grammar": [
        ["So sánh hơn khi nói về hiệu năng", "Dùng tính từ ngắn + er hoặc more + tính từ dài + than: Binary search is faster than checking every item.", "Binary search is faster than checking every item one by one. | A hash table is more efficient than a long list."]
      ],
      "quiz": [
        ["A ___ follows the rule last in, first out.", "stack", ["queue", "graph", "heap"], "Vào sau ra trước là ngăn xếp: stack."],
        ["A ___ follows the rule first in, first out, like people waiting in a line.", "queue", ["stack", "pointer", "index"], "Vào trước ra trước là hàng đợi: queue."],
        ["In an array, the ___ shows the position of an element, and it usually starts at zero.", "index", ["node", "pointer", "heap"], "Số chỉ vị trí phần tử là chỉ số: index."],
        ["A ___ stores the memory address of another value.", "pointer", ["index", "iteration", "complexity"], "Biến lưu địa chỉ bộ nhớ của giá trị khác là con trỏ: pointer."],
        ["When a function calls itself to solve a smaller problem, this technique is called ___.", "recursion", ["iteration", "complexity", "sorting"], "Hàm tự gọi chính nó để giải bài nhỏ hơn là đệ quy: recursion."],
        ["___ search works on a sorted list by checking the middle item and cutting the list in half each time.", "Binary", ["Linear", "Random", "Circular"], "Chia đôi danh sách đã sắp xếp mỗi lần là tìm kiếm nhị phân: binary."]
      ],
      "sentences": [
        ["A stack adds and removes items from the top.", "Ngăn xếp thêm và lấy phần tử ở đỉnh."],
        ["A queue serves the first item that arrived.", "Hàng đợi phục vụ phần tử đến đầu tiên."],
        ["Each node in a linked list points to the next node.", "Mỗi nút trong danh sách liên kết trỏ tới nút tiếp theo."],
        ["A hash table finds a value quickly by using a key.", "Bảng băm tìm giá trị nhanh nhờ dùng khóa."],
        ["Sorting puts items in order, for example from small to large.", "Sắp xếp đưa các phần tử vào thứ tự, ví dụ từ nhỏ đến lớn."],
        ["Binary search is faster than checking every item one by one.", "Tìm kiếm nhị phân nhanh hơn việc kiểm tra từng phần tử một."]
      ],
      "transform": [
        ["The program removes the first item from the queue.", "Chuyển sang câu bị động", "The first item is removed from the queue by the program.", "Mục đầu tiên được chương trình lấy ra khỏi hàng đợi."],
        ["A pointer stores an address.", "Viết lại thành câu hỏi Yes/No", "Does a pointer store an address?", "Con trỏ có lưu một địa chỉ không?"],
        ["The algorithm sorts the list quickly.", "Chuyển sang câu bị động", "The list is sorted quickly by the algorithm.", "Danh sách được thuật toán sắp xếp nhanh chóng."]
      ]
    },
    {
      "id": "pgoop", "group": 15, "grade": 12, "icon": "🧩", "tag": "Lập trình",
      "title": "Lập trình hướng đối tượng", "en": "Object-oriented programming",
      "desc": "Lớp, đối tượng, kế thừa, đa hình, đóng gói và giao diện.",
      "words": [
        ["object", "đối tượng", ""],
        ["class", "lớp (khuôn mẫu đối tượng)", ""],
        ["instance", "thể hiện của một lớp", ""],
        ["attribute", "thuộc tính", ""],
        ["method", "phương thức", ""],
        ["constructor", "hàm khởi tạo", ""],
        ["inheritance", "tính kế thừa", ""],
        ["polymorphism", "tính đa hình", ""],
        ["encapsulation", "tính đóng gói", ""],
        ["abstraction", "sự trừu tượng hóa", ""],
        ["interface", "giao diện (tập các phương thức)", ""],
        ["override", "ghi đè", ""],
        ["module", "mô-đun", ""],
        ["design pattern", "mẫu thiết kế", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả quan hệ giữa các lớp", "Dùng be + V3 khi chủ thể là mã chương trình: The method is overridden by the subclass.", "The object is created by the constructor. | The method is overridden by the subclass."]
      ],
      "quiz": [
        ["A ___ is a blueprint that describes what an object has and what it can do.", "class", ["method", "module", "constructor"], "Bản thiết kế cho đối tượng là lớp: class."],
        ["The variable car1 refers to one ___ of the class Car.", "instance", ["constructor", "inheritance", "polymorphism"], "Một đối tượng cụ thể tạo từ lớp là một thể hiện: instance."],
        ["A subclass gets the properties of its parent class through ___.", "inheritance", ["encapsulation", "override", "interface"], "Lớp con thừa hưởng từ lớp cha nhờ kế thừa: inheritance."],
        ["A ___ is a special method that runs when a new object is created.", "constructor", ["module", "attribute", "design pattern"], "Phương thức chạy khi tạo đối tượng mới là hàm khởi tạo: constructor."],
        ["___ means hiding the internal data of an object and allowing access only through methods.", "Encapsulation", ["Inheritance", "Polymorphism", "Iteration"], "Giấu dữ liệu bên trong, chỉ truy cập qua phương thức là đóng gói."],
        ["A subclass can ___ a method of its parent class to give it a new behaviour.", "override", ["instance", "import", "delete"], "Viết lại phương thức của lớp cha là ghi đè: override."]
      ],
      "sentences": [
        ["Every object has attributes and methods.", "Mỗi đối tượng có thuộc tính và phương thức."],
        ["A class is like a plan, and an object is the real thing built from it.", "Lớp giống bản kế hoạch còn đối tượng là sản phẩm thật được tạo từ đó."],
        ["The constructor sets the starting values of the object.", "Hàm khởi tạo đặt các giá trị ban đầu cho đối tượng."],
        ["A dog class can inherit from an animal class.", "Lớp chó có thể kế thừa từ lớp động vật."],
        ["Polymorphism lets different objects respond to the same method in different ways.", "Đa hình cho phép các đối tượng khác nhau phản hồi cùng một phương thức theo cách khác nhau."],
        ["Encapsulation protects the data inside an object.", "Đóng gói bảo vệ dữ liệu bên trong đối tượng."]
      ],
      "transform": [
        ["The constructor creates the object.", "Chuyển sang câu bị động", "The object is created by the constructor.", "Đối tượng được hàm khởi tạo tạo ra."],
        ["The subclass overrides the method.", "Chuyển sang câu bị động", "The method is overridden by the subclass.", "Phương thức bị lớp con ghi đè."],
        ["A class has many attributes.", "Viết lại thành câu hỏi Yes/No", "Does a class have many attributes?", "Một lớp có nhiều thuộc tính không?"]
      ]
    },
    {
      "id": "pgweb", "group": 15, "grade": 11, "icon": "🌍", "tag": "Lập trình",
      "title": "Phát triển web", "en": "Web development",
      "desc": "Giao diện web, máy chủ, API, yêu cầu và phản hồi.",
      "words": [
        ["frontend", "phần giao diện người dùng thấy", ""],
        ["backend", "phần xử lý trên máy chủ", ""],
        ["HTML", "ngôn ngữ đánh dấu trang web", ""],
        ["CSS", "ngôn ngữ định kiểu trang web", ""],
        ["framework", "bộ khung phát triển phần mềm", ""],
        ["API", "giao diện lập trình ứng dụng", ""],
        ["request", "yêu cầu gửi tới máy chủ", ""],
        ["response", "phản hồi từ máy chủ", ""],
        ["endpoint", "điểm cuối của API", ""],
        ["cookie", "tệp nhỏ trình duyệt lưu lại", "🍪"],
        ["session", "phiên làm việc", ""],
        ["JSON", "định dạng dữ liệu JSON", ""],
        ["URL", "địa chỉ trang web", ""],
        ["template", "mẫu giao diện", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả cách web hoạt động", "Dùng hiện tại đơn để mô tả quy trình lặp lại: The browser sends a request, and the server sends a response.", "The server sends the response. | The browser stores the cookie."]
      ],
      "quiz": [
        ["The ___ is the part of a website that users see and click in the browser.", "frontend", ["backend", "endpoint", "session"], "Phần người dùng nhìn thấy và bấm là frontend."],
        ["The ___ runs on the server and handles data and business logic.", "backend", ["frontend", "cookie", "template"], "Phần chạy trên máy chủ xử lý dữ liệu là backend."],
        ["___ is the language that defines the structure of a web page, such as headings and paragraphs.", "HTML", ["CSS", "JSON", "URL"], "Ngôn ngữ định nghĩa cấu trúc trang là HTML."],
        ["___ controls the colours, fonts and layout of a web page.", "CSS", ["HTML", "JSON", "API"], "Ngôn ngữ điều khiển màu, phông chữ, bố cục là CSS."],
        ["When you open a page, the browser sends a ___ to the server, and the server sends a response back.", "request", ["cookie", "template", "framework"], "Trình duyệt gửi yêu cầu tới máy chủ: request."],
        ["A small file that a website saves in your browser to remember you is called a ___.", "cookie", ["framework", "template", "layout"], "Tệp nhỏ trang web lưu trong trình duyệt để nhớ bạn là cookie."]
      ],
      "sentences": [
        ["The frontend shows the page, and the backend handles the data.", "Frontend hiển thị trang còn backend xử lý dữ liệu."],
        ["A browser sends a request to the server and waits for a response.", "Trình duyệt gửi yêu cầu đến máy chủ và chờ phản hồi."],
        ["An API lets two programs talk to each other.", "API cho phép hai chương trình trao đổi với nhau."],
        ["JSON is a simple format for sending data.", "JSON là một định dạng đơn giản để gửi dữ liệu."],
        ["A framework gives developers ready-made tools to build websites quickly.", "Framework cung cấp công cụ làm sẵn để xây dựng trang web nhanh."],
        ["Each endpoint has its own URL.", "Mỗi endpoint có URL riêng."]
      ],
      "transform": [
        ["The server sends the response.", "Chuyển sang câu bị động", "The response is sent by the server.", "Phản hồi được máy chủ gửi đi."],
        ["The browser stores the cookie.", "Chuyển sang câu bị động", "The cookie is stored by the browser.", "Cookie được trình duyệt lưu lại."],
        ["The website uses a framework.", "Viết lại thành câu hỏi Yes/No", "Does the website use a framework?", "Trang web có dùng framework không?"]
      ]
    },
    {
      "id": "pgdb", "group": 15, "grade": 12, "icon": "🗄️", "tag": "Lập trình",
      "title": "Cơ sở dữ liệu và SQL", "en": "Databases and SQL",
      "desc": "Bảng, hàng, cột, khóa, truy vấn và giao dịch.",
      "words": [
        ["row", "hàng trong bảng", ""],
        ["column", "cột trong bảng", ""],
        ["primary key", "khóa chính", "🔑"],
        ["foreign key", "khóa ngoại", ""],
        ["query", "truy vấn", ""],
        ["join", "phép nối bảng", ""],
        ["schema", "lược đồ cơ sở dữ liệu", ""],
        ["transaction", "giao dịch", ""],
        ["constraint", "ràng buộc dữ liệu", ""],
        ["rollback", "việc hoàn tác giao dịch", ""],
        ["relational", "mang tính quan hệ", ""],
        ["filter", "bộ lọc", ""],
        ["aggregate", "tính gộp (tổng, trung bình)", ""],
        ["duplicate", "bản trùng lặp", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả thao tác dữ liệu", "Dùng be + V3 khi nói về điều xảy ra với dữ liệu: All the rows are returned by the query.", "All the rows are returned by the query. | The data is stored in tables by the database."]
      ],
      "quiz": [
        ["In a table, each ___ stores one record, and each column stores one type of information.", "row", ["schema", "query", "constraint"], "Mỗi bản ghi nằm trên một hàng: row."],
        ["A ___ uniquely identifies every row in a table.", "primary key", ["foreign key", "column", "join"], "Mã nhận diện duy nhất mỗi hàng là khóa chính: primary key."],
        ["A ___ links a row in one table to a row in another table.", "foreign key", ["primary key", "schema", "filter"], "Khóa liên kết sang bảng khác là khóa ngoại: foreign key."],
        ["Use a ___ to combine rows from two tables that share a matching value.", "join", ["rollback", "constraint", "schema"], "Kết hợp hàng từ hai bảng có giá trị khớp là phép nối: join."],
        ["If an error happens, the database performs a ___ and returns to its previous state.", "rollback", ["join", "query", "schema"], "Quay về trạng thái trước khi có lỗi là hoàn tác: rollback."],
        ["A ___ is a rule that limits the data in a column, for example it cannot be empty.", "constraint", ["schema", "aggregate", "relational"], "Quy tắc giới hạn dữ liệu trong cột là ràng buộc: constraint."]
      ],
      "sentences": [
        ["A query asks the database for information.", "Truy vấn hỏi cơ sở dữ liệu để lấy thông tin."],
        ["Each row in the table is one record.", "Mỗi hàng trong bảng là một bản ghi."],
        ["The schema describes the tables and columns in the database.", "Lược đồ mô tả các bảng và cột trong cơ sở dữ liệu."],
        ["A transaction either completes fully or does not happen at all.", "Một giao dịch hoặc hoàn tất toàn bộ hoặc không xảy ra chút nào."],
        ["Use a filter to show only the rows that match the condition.", "Dùng bộ lọc để chỉ hiển thị các hàng khớp điều kiện."],
        ["The foreign key connects the order table to the customer table.", "Khóa ngoại nối bảng đơn hàng với bảng khách hàng."]
      ],
      "transform": [
        ["The query returns all the rows.", "Chuyển sang câu bị động", "All the rows are returned by the query.", "Tất cả các hàng được truy vấn trả về."],
        ["The database stores the data in tables.", "Chuyển sang câu bị động", "The data is stored in tables by the database.", "Dữ liệu được cơ sở dữ liệu lưu trong các bảng."],
        ["Every table has a primary key.", "Viết lại thành câu hỏi Yes/No", "Does every table have a primary key?", "Mỗi bảng có khóa chính không?"]
      ]
    },
    {
      "id": "pgdebug", "group": 15, "grade": 12, "icon": "🐞", "tag": "Lập trình",
      "title": "Gỡ lỗi và kiểm thử", "en": "Debugging and testing",
      "desc": "Các loại lỗi, điểm dừng, kiểm thử đơn vị và cách tìm nguyên nhân.",
      "words": [
        ["debug", "gỡ lỗi", "🐞"],
        ["breakpoint", "điểm dừng khi gỡ lỗi", ""],
        ["exception", "ngoại lệ khi chạy", ""],
        ["stack trace", "vết ngăn xếp lỗi", ""],
        ["syntax error", "lỗi cú pháp", ""],
        ["logic error", "lỗi logic", ""],
        ["infinite loop", "vòng lặp vô hạn", ""],
        ["memory leak", "rò rỉ bộ nhớ", ""],
        ["unit test", "kiểm thử đơn vị", ""],
        ["test case", "ca kiểm thử", ""],
        ["regression", "lỗi hồi quy", ""],
        ["edge case", "trường hợp biên", ""],
        ["refactor", "tái cấu trúc mã", ""],
        ["bottleneck", "nút thắt cổ chai hiệu năng", ""]
      ],
      "grammar": [
        ["Câu bị động trong báo cáo lỗi", "Dùng be + V3 để báo cáo điều đã được làm hoặc đã được tìm thấy: The bug was fixed. A regression was found.", "The logic error was fixed by the developer. | A regression was found by the test."]
      ],
      "quiz": [
        ["To ___ a program means to find and remove errors from it.", "debug", ["compile", "refactor", "deploy"], "Tìm và loại bỏ lỗi là gỡ lỗi: debug."],
        ["The programmer set a ___ so that the program would pause at line twenty.", "breakpoint", ["stack trace", "regression", "bottleneck"], "Điểm khiến chương trình tạm dừng khi gỡ lỗi là breakpoint."],
        ["A ___ happens when the code breaks the grammar rules of the language, so it cannot run.", "syntax error", ["logic error", "memory leak", "regression"], "Viết sai ngữ pháp ngôn ngữ nên không chạy là lỗi cú pháp."],
        ["The program runs, but it gives the wrong answer because of a ___.", "logic error", ["syntax error", "stack trace", "breakpoint"], "Chạy được nhưng cho kết quả sai là lỗi logic."],
        ["A ___ is a loop that never stops, so the program freezes.", "infinite loop", ["memory leak", "unit test", "edge case"], "Vòng lặp không bao giờ dừng là vòng lặp vô hạn."],
        ["After a change, an old feature stopped working. This kind of bug is called a ___.", "regression", ["breakpoint", "stack trace", "test case"], "Thay đổi làm tính năng cũ hỏng là lỗi hồi quy: regression."]
      ],
      "sentences": [
        ["A unit test checks one small part of the code.", "Kiểm thử đơn vị kiểm tra một phần nhỏ của mã."],
        ["The stack trace shows where the exception happened.", "Vết ngăn xếp cho thấy ngoại lệ xảy ra ở đâu."],
        ["Programmers write a test case for every edge case.", "Lập trình viên viết một ca kiểm thử cho mỗi trường hợp biên."],
        ["A memory leak makes the program use more and more memory.", "Rò rỉ bộ nhớ khiến chương trình dùng ngày càng nhiều bộ nhớ."],
        ["Refactor the code to make it cleaner without changing what it does.", "Hãy tái cấu trúc mã cho gọn hơn mà không đổi chức năng."],
        ["The slowest part of the system is the bottleneck.", "Phần chậm nhất của hệ thống là nút thắt cổ chai."]
      ],
      "transform": [
        ["The developer fixed the logic error.", "Chuyển sang câu bị động", "The logic error was fixed by the developer.", "Lỗi logic đã được lập trình viên sửa."],
        ["The test found a regression.", "Chuyển sang câu bị động", "A regression was found by the test.", "Một lỗi hồi quy đã được bài kiểm thử phát hiện."],
        ["The program throws an exception.", "Viết lại ở dạng phủ định", "The program does not throw an exception.", "Chương trình không ném ra ngoại lệ."]
      ]
    },
    {
      "id": "pgtools", "group": 15, "grade": 12, "icon": "🛠️", "tag": "Lập trình",
      "title": "Công cụ và quản lý mã nguồn", "en": "Developer tools and version control",
      "desc": "Git, nhánh, commit, pull request, thư viện phụ thuộc và CI.",
      "words": [
        ["repository", "kho mã nguồn", ""],
        ["commit", "lưu một thay đổi vào lịch sử", ""],
        ["branch", "nhánh phát triển", ""],
        ["merge", "gộp nhánh", ""],
        ["pull request", "yêu cầu gộp mã", ""],
        ["clone", "sao chép kho về máy", ""],
        ["fork", "tạo bản sao riêng của kho", ""],
        ["IDE", "môi trường lập trình tích hợp", ""],
        ["package manager", "trình quản lý gói", ""],
        ["dependency", "thư viện phụ thuộc", ""],
        ["command line", "dòng lệnh", ""],
        ["plugin", "phần mở rộng", ""],
        ["container", "container (đóng gói ứng dụng)", ""],
        ["pipeline", "quy trình tự động", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong hướng dẫn thao tác", "Dùng động từ nguyên mẫu để ra lệnh từng bước: Clone the repository. Create a new branch.", "Clone the repository and create a new branch. | Please review my pull request."]
      ],
      "quiz": [
        ["A ___ is a place where a project's code and its history are stored.", "repository", ["plugin", "container", "pipeline"], "Nơi lưu mã và lịch sử của dự án là kho mã nguồn: repository."],
        ["Developers create a new ___ to work on a feature without changing the main code.", "branch", ["plugin", "pipeline", "dependency"], "Nhánh mới để làm tính năng mà không đụng mã chính: branch."],
        ["After finishing a small change, you ___ it with a message that explains what you did.", "commit", ["clone", "fork", "install"], "Lưu thay đổi kèm lời nhắn là commit."],
        ["To start working on a project, first ___ the repository to your own computer.", "clone", ["commit", "merge", "push"], "Sao chép kho mã về máy của bạn là clone."],
        ["When the feature is ready, you open a ___ so that other people can review it and merge it.", "pull request", ["dependency", "container", "plugin"], "Yêu cầu để người khác duyệt và gộp mã là pull request."],
        ["A ___ is a library that your project needs in order to work.", "dependency", ["branch", "repository", "pipeline"], "Thư viện mà dự án cần để chạy là dependency."]
      ],
      "sentences": [
        ["Clone the repository and create a new branch.", "Hãy sao chép kho mã về máy và tạo một nhánh mới."],
        ["Each commit saves a snapshot of the project.", "Mỗi commit lưu một ảnh chụp của dự án."],
        ["A package manager installs every dependency automatically.", "Trình quản lý gói cài đặt mọi thư viện phụ thuộc một cách tự động."],
        ["Please review my pull request before we merge it.", "Hãy duyệt pull request của tôi trước khi chúng ta gộp nó."],
        ["A container runs the application in the same way on every computer.", "Container chạy ứng dụng theo cùng một cách trên mọi máy tính."],
        ["The pipeline tests the code automatically after each commit.", "Quy trình tự động kiểm thử mã sau mỗi commit."]
      ],
      "transform": [
        ["She merged the branch yesterday.", "Chuyển sang câu bị động", "The branch was merged by her yesterday.", "Nhánh đã được cô ấy gộp hôm qua."],
        ["The pipeline builds the application.", "Chuyển sang câu bị động", "The application is built by the pipeline.", "Ứng dụng được pipeline xây dựng."],
        ["Developers push their code every day.", "Viết lại thành câu hỏi Yes/No", "Do developers push their code every day?", "Lập trình viên có đẩy mã lên mỗi ngày không?"]
      ]
    },
    {
      "id": "pgcs", "group": 15, "grade": 12, "icon": "⚙️", "tag": "Lập trình",
      "title": "Khoa học máy tính cơ bản", "en": "Computer science concepts",
      "desc": "Nhị phân, trình biên dịch, hệ điều hành, bộ nhớ và luồng.",
      "words": [
        ["binary", "hệ nhị phân", ""],
        ["bit", "bit (đơn vị nhỏ nhất)", ""],
        ["byte", "byte (tám bit)", ""],
        ["compiler", "trình biên dịch", ""],
        ["interpreter", "trình thông dịch", ""],
        ["operating system", "hệ điều hành", ""],
        ["kernel", "nhân hệ điều hành", ""],
        ["memory", "bộ nhớ", ""],
        ["thread", "luồng thực thi", ""],
        ["process", "tiến trình", ""],
        ["cache", "bộ nhớ đệm", ""],
        ["source code", "mã nguồn", ""],
        ["machine code", "mã máy", ""],
        ["firmware", "phần sụn", ""]
      ],
      "grammar": [
        ["Câu bị động khi mô tả quá trình của máy tính", "Dùng be + V3 để nói về điều máy tính làm với dữ liệu: The code is converted by the compiler.", "The code is converted by the compiler. | The memory is managed by the kernel."]
      ],
      "quiz": [
        ["Computers store all information as ___ numbers, which use only zero and one.", "binary", ["decimal", "random", "negative"], "Chỉ dùng số không và một là hệ nhị phân: binary."],
        ["A ___ is the smallest unit of data, either zero or one.", "bit", ["byte", "kernel", "thread"], "Đơn vị dữ liệu nhỏ nhất là bit."],
        ["A ___ translates the whole source code into machine code before the program runs.", "compiler", ["interpreter", "kernel", "cache"], "Dịch toàn bộ mã nguồn trước khi chạy là trình biên dịch: compiler."],
        ["The ___ reads and runs the code line by line, without creating a separate program file.", "interpreter", ["compiler", "firmware", "cache"], "Đọc và chạy từng dòng là trình thông dịch: interpreter."],
        ["The ___ is the core of an operating system and controls the hardware.", "kernel", ["thread", "cache", "firmware"], "Lõi của hệ điều hành điều khiển phần cứng là nhân: kernel."],
        ["A ___ stores recently used data so the computer can reach it faster.", "cache", ["kernel", "thread", "firmware"], "Lưu dữ liệu dùng gần đây để truy cập nhanh là bộ nhớ đệm: cache."]
      ],
      "sentences": [
        ["A byte has eight bits.", "Một byte có tám bit."],
        ["The compiler turns source code into machine code.", "Trình biên dịch biến mã nguồn thành mã máy."],
        ["The operating system manages the memory and the processes.", "Hệ điều hành quản lý bộ nhớ và các tiến trình."],
        ["A thread is a small part of a process.", "Luồng là một phần nhỏ của một tiến trình."],
        ["Firmware is software stored in hardware.", "Phần sụn là phần mềm được lưu trong phần cứng."],
        ["A cache makes repeated tasks faster.", "Bộ nhớ đệm làm các tác vụ lặp lại nhanh hơn."]
      ],
      "transform": [
        ["The compiler converts the code.", "Chuyển sang câu bị động", "The code is converted by the compiler.", "Mã được trình biên dịch chuyển đổi."],
        ["The kernel manages the memory.", "Chuyển sang câu bị động", "The memory is managed by the kernel.", "Bộ nhớ được nhân hệ điều hành quản lý."],
        ["The computer uses binary numbers.", "Viết lại thành câu hỏi Yes/No", "Does the computer use binary numbers?", "Máy tính có dùng số nhị phân không?"]
      ]
    },
    {
      "id": "pglang", "group": 15, "grade": 12, "icon": "🐍", "tag": "Lập trình",
      "title": "Ngôn ngữ và mô hình lập trình", "en": "Programming languages and paradigms",
      "desc": "Python, JavaScript, Java và các cách tiếp cận lập trình khác nhau.",
      "words": [
        ["Python", "ngôn ngữ lập trình Python", "🐍"],
        ["JavaScript", "ngôn ngữ JavaScript của web", ""],
        ["Java", "ngôn ngữ lập trình Java", ""],
        ["paradigm", "mô hình, phong cách lập trình", ""],
        ["procedural", "thủ tục (từng bước)", ""],
        ["functional", "hàm (lập trình hàm)", ""],
        ["object-oriented", "hướng đối tượng", ""],
        ["declarative", "khai báo", ""],
        ["low-level", "cấp thấp, gần phần cứng", ""],
        ["high-level", "cấp cao, gần ngôn ngữ người", ""],
        ["cross-platform", "chạy trên nhiều nền tảng", ""],
        ["garbage collection", "dọn rác bộ nhớ tự động", ""],
        ["callback", "hàm gọi lại", ""],
        ["immutable", "bất biến", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn để mô tả đặc điểm của ngôn ngữ", "Dùng hiện tại đơn để nêu đặc điểm cố định: Python is easy to read. JavaScript runs in every browser.", "Python is easy to learn. | Java is not a low-level language."]
      ],
      "quiz": [
        ["A ___ language is close to human language and easy to read, such as Python.", "high-level", ["low-level", "immutable", "cross-platform"], "Gần ngôn ngữ con người, dễ đọc là ngôn ngữ cấp cao: high-level."],
        ["A ___ language is close to the hardware and gives the programmer more control over memory.", "low-level", ["high-level", "declarative", "functional"], "Gần phần cứng, kiểm soát bộ nhớ nhiều hơn là cấp thấp: low-level."],
        ["A programming ___ is a style of solving problems, such as procedural or functional programming.", "paradigm", ["callback", "garbage collection", "framework"], "Phong cách giải quyết vấn đề là mô hình lập trình: paradigm."],
        ["In ___ programming, the programmer uses classes and objects.", "object-oriented", ["functional", "procedural", "declarative"], "Dùng lớp và đối tượng là lập trình hướng đối tượng."],
        ["A ___ is a function that is passed to another function and called later.", "callback", ["paradigm", "garbage collection", "immutable"], "Hàm được truyền cho hàm khác và gọi sau là callback."],
        ["A value is ___ if it cannot be changed after it is created.", "immutable", ["cross-platform", "declarative", "high-level"], "Không thể thay đổi sau khi tạo là bất biến: immutable."]
      ],
      "sentences": [
        ["Python is popular because its code is easy to read.", "Python phổ biến vì mã của nó dễ đọc."],
        ["JavaScript runs in every web browser.", "JavaScript chạy trong mọi trình duyệt web."],
        ["Java programs can run on different systems.", "Chương trình Java có thể chạy trên nhiều hệ thống khác nhau."],
        ["Garbage collection frees memory that the program no longer uses.", "Dọn rác tự động giải phóng bộ nhớ mà chương trình không còn dùng."],
        ["Functional programming avoids changing data.", "Lập trình hàm tránh việc thay đổi dữ liệu."],
        ["A cross-platform app works on Windows, Android and iOS.", "Ứng dụng đa nền tảng chạy trên Windows, Android và iOS."]
      ],
      "transform": [
        ["Python is easy to learn.", "Viết lại thành câu hỏi Yes/No", "Is Python easy to learn?", "Python có dễ học không?"],
        ["Developers write the app in JavaScript.", "Chuyển sang câu bị động", "The app is written in JavaScript by developers.", "Ứng dụng được lập trình viên viết bằng JavaScript."],
        ["Java is a low-level language.", "Viết lại ở dạng phủ định", "Java is not a low-level language.|Java isn't a low-level language.", "Java không phải là ngôn ngữ cấp thấp."]
      ]
    },
    {
      "id": "pgdevops", "group": 15, "grade": 12, "icon": "🚀", "tag": "Lập trình",
      "title": "DevOps và vận hành hệ thống", "en": "DevOps and operations",
      "desc": "Triển khai, giám sát, cân bằng tải, cụm máy chủ và xử lý sự cố.",
      "words": [
        ["staging", "môi trường chạy thử trước khi phát hành", ""],
        ["configuration", "cấu hình", ""],
        ["load balancer", "bộ cân bằng tải", ""],
        ["cluster", "cụm máy chủ", ""],
        ["monitoring", "việc giám sát hệ thống", ""],
        ["alert", "cảnh báo tự động", "🚨"],
        ["incident", "sự cố nghiêm trọng", ""],
        ["orchestration", "việc điều phối tự động", ""],
        ["provision", "cấp phát tài nguyên", ""],
        ["throughput", "thông lượng xử lý", ""],
        ["canary", "bản phát hành thử cho nhóm nhỏ", ""],
        ["rollout", "việc triển khai từng bước", ""],
        ["log file", "tệp nhật ký", ""],
        ["health check", "kiểm tra tình trạng hoạt động", ""]
      ],
      "grammar": [
        ["Câu bị động khi báo cáo sự cố", "Dùng be + V3 để báo cáo điều đã xảy ra với hệ thống: The update was deployed. An alert is sent.", "The update was deployed by the engineers. | An alert is sent by the system."]
      ],
      "quiz": [
        ["The team tests the new version in a ___ environment that is almost the same as the real one.", "staging", ["monitoring", "cluster", "throughput"], "Môi trường gần giống thật để chạy thử là staging."],
        ["A ___ shares incoming traffic between several servers so that no server is overloaded.", "load balancer", ["log file", "health check", "rollout"], "Chia lưu lượng cho nhiều máy chủ là bộ cân bằng tải."],
        ["A group of servers that work together is called a ___.", "cluster", ["rollout", "staging", "provision"], "Nhóm máy chủ cùng làm việc là cụm: cluster."],
        ["When the CPU usage is too high, the system sends the engineer an automatic ___.", "alert", ["rollout", "cluster", "staging"], "Thông báo tự động khi có vấn đề là cảnh báo: alert."],
        ["The company wrote a report about the serious ___ that stopped the service for an hour.", "incident", ["rollout", "cluster", "staging"], "Sự cố nghiêm trọng làm dịch vụ ngừng là incident."],
        ["The engineers released the update to only five percent of users first, as a ___ release.", "canary", ["monitoring", "cluster", "throughput"], "Phát hành thử cho nhóm nhỏ trước là bản canary."]
      ],
      "sentences": [
        ["Monitoring tools watch the servers all day.", "Công cụ giám sát theo dõi các máy chủ cả ngày."],
        ["The load balancer sends requests to the healthiest server.", "Bộ cân bằng tải gửi yêu cầu đến máy chủ khỏe nhất."],
        ["Orchestration software manages many containers automatically.", "Phần mềm điều phối quản lý nhiều container một cách tự động."],
        ["Engineers read the log file to find the cause of the incident.", "Các kỹ sư đọc tệp nhật ký để tìm nguyên nhân sự cố."],
        ["A health check tells the system whether a service is working.", "Kiểm tra tình trạng cho hệ thống biết dịch vụ có đang hoạt động không."],
        ["The team will provision three new servers tonight.", "Nhóm sẽ cấp phát ba máy chủ mới tối nay."]
      ],
      "transform": [
        ["The engineers deployed the update.", "Chuyển sang câu bị động", "The update was deployed by the engineers.", "Bản cập nhật đã được kỹ sư triển khai."],
        ["The system sends an alert.", "Chuyển sang câu bị động", "An alert is sent by the system.", "Một cảnh báo được hệ thống gửi đi."],
        ["The cluster has ten servers.", "Viết lại thành câu hỏi Yes/No", "Does the cluster have ten servers?", "Cụm máy chủ có mười máy chủ không?"]
      ]
    },
    {
      "id": "pgmobile", "group": 15, "grade": 11, "icon": "📱", "tag": "Lập trình",
      "title": "Lập trình ứng dụng di động", "en": "Mobile app development",
      "desc": "Thông báo đẩy, quyền truy cập, kho ứng dụng, trình giả lập và thao tác chạm.",
      "words": [
        ["push notification", "thông báo đẩy", ""],
        ["app store", "kho ứng dụng", ""],
        ["permission", "quyền truy cập", ""],
        ["offline", "ngoại tuyến", ""],
        ["emulator", "trình giả lập", ""],
        ["widget", "tiện ích nhỏ trên màn hình", ""],
        ["screen size", "kích thước màn hình", ""],
        ["swipe", "vuốt", ""],
        ["tap", "chạm nhẹ", ""],
        ["GPS", "định vị GPS", ""],
        ["camera", "máy ảnh", "📷"],
        ["in-app purchase", "mua hàng trong ứng dụng", ""],
        ["SDK", "bộ công cụ phát triển phần mềm", ""],
        ["native", "viết riêng cho một hệ điều hành", ""]
      ],
      "grammar": [
        ["Thì hiện tại đơn mô tả hành vi của ứng dụng", "Dùng hiện tại đơn để mô tả điều ứng dụng làm thường xuyên: The app sends a push notification.", "The app uses the camera. | The app works offline."]
      ],
      "quiz": [
        ["The app asks for ___ to use your camera and location.", "permission", ["emulator", "widget", "swipe"], "Ứng dụng xin quyền dùng máy ảnh, vị trí: permission."],
        ["A ___ lets developers test an app on a computer without a real phone.", "emulator", ["widget", "swipe", "tap"], "Công cụ chạy thử ứng dụng trên máy tính là trình giả lập: emulator."],
        ["A ___ is a message that an app shows on your screen even when you are not using it.", "push notification", ["permission", "widget", "emulator"], "Tin nhắn ứng dụng tự hiện lên màn hình là thông báo đẩy."],
        ["This app works ___, so you can use it on a plane.", "offline", ["permission", "swipe", "widget"], "Dùng được khi không có mạng là ngoại tuyến: offline."],
        ["To move to the next photo, ___ your finger across the screen.", "swipe", ["install", "launch", "download"], "Lướt ngón tay qua màn hình là vuốt: swipe."],
        ["Developers must follow the rules of the ___ before they can publish their app.", "app store", ["emulator", "widget", "camera"], "Muốn phát hành ứng dụng phải theo quy định của kho ứng dụng."]
      ],
      "sentences": [
        ["The app sends a push notification when a message arrives.", "Ứng dụng gửi thông báo đẩy khi có tin nhắn đến."],
        ["Tap the icon to launch the app.", "Hãy chạm vào biểu tượng để mở ứng dụng."],
        ["The map uses GPS to show where you are.", "Bản đồ dùng GPS để cho biết bạn đang ở đâu."],
        ["You can test the app on a different screen size with an emulator.", "Bạn có thể thử ứng dụng trên một kích thước màn hình khác bằng trình giả lập."],
        ["Users can buy extra features with an in-app purchase.", "Người dùng có thể mua thêm tính năng bằng mua hàng trong ứng dụng."],
        ["A native app is built for one operating system such as Android.", "Ứng dụng native được xây cho một hệ điều hành như Android."]
      ],
      "transform": [
        ["The developer uploaded the app to the app store.", "Chuyển sang câu bị động", "The app was uploaded to the app store by the developer.", "Ứng dụng đã được lập trình viên đăng lên kho ứng dụng."],
        ["The app uses the camera.", "Viết lại thành câu hỏi Yes/No", "Does the app use the camera?", "Ứng dụng có dùng camera không?"],
        ["The app works offline.", "Viết lại ở dạng phủ định", "The app does not work offline.", "Ứng dụng không hoạt động ngoại tuyến."]
      ]
    },
    {
      "id": "pglinux", "group": 15, "grade": 12, "icon": "🐧", "tag": "Lập trình",
      "title": "Linux và dòng lệnh", "en": "Linux and the command line",
      "desc": "Thư mục, đường dẫn, shell, quyền root và các lệnh thường dùng.",
      "words": [
        ["directory", "thư mục", "📁"],
        ["file path", "đường dẫn tệp", ""],
        ["root", "người dùng quản trị tối cao", ""],
        ["pipe", "ống dẫn kết quả giữa các lệnh", ""],
        ["shell", "trình vỏ nhận lệnh", ""],
        ["bash", "shell Bash", ""],
        ["mount", "gắn ổ đĩa vào hệ thống", ""],
        ["daemon", "tiến trình chạy ngầm", ""],
        ["cron job", "tác vụ chạy theo lịch", ""],
        ["file system", "hệ thống tệp", ""],
        ["text editor", "trình soạn thảo văn bản", ""],
        ["execute", "thực thi", ""],
        ["command", "câu lệnh", ""],
        ["sudo", "lệnh chạy với quyền quản trị", ""]
      ],
      "grammar": [
        ["Câu mệnh lệnh trong hướng dẫn dùng dòng lệnh", "Dùng động từ nguyên mẫu để hướng dẫn từng bước: Type the command and press Enter.", "Type the command in the terminal and press Enter. | Open the directory and edit the file."]
      ],
      "quiz": [
        ["A ___ is a folder in a computer file system.", "directory", ["daemon", "shell", "pipe"], "Thư mục trong hệ thống tệp là directory."],
        ["The ___ shows the exact location of a file, including all the folders that lead to it.", "file path", ["command", "daemon", "root"], "Vị trí chính xác của tệp là đường dẫn: file path."],
        ["The ___ user has full control over the whole system.", "root", ["shell", "bash", "daemon"], "Người dùng có toàn quyền là root."],
        ["A ___ is a program that runs quietly in the background and waits to do a task.", "daemon", ["shell", "text editor", "pipe"], "Chương trình chạy ngầm chờ làm việc là daemon."],
        ["A ___ runs a task automatically at a fixed time, for example every night.", "cron job", ["daemon", "pipe", "mount"], "Tác vụ tự chạy theo lịch là cron job."],
        ["A ___ sends the output of one command to the input of another command.", "pipe", ["mount", "directory", "root"], "Chuyển kết quả của lệnh này làm đầu vào lệnh khác là pipe."]
      ],
      "sentences": [
        ["Type the command in the terminal and press Enter.", "Hãy gõ lệnh vào cửa sổ dòng lệnh rồi nhấn Enter."],
        ["Use sudo to run a command as the root user.", "Dùng sudo để chạy lệnh với quyền root."],
        ["The shell reads your command and asks the system to execute it.", "Shell đọc lệnh của bạn và yêu cầu hệ thống thực thi nó."],
        ["A cron job backs up the file system every night.", "Một tác vụ theo lịch sao lưu hệ thống tệp mỗi đêm."],
        ["Mount the disk before you open the files.", "Hãy gắn ổ đĩa trước khi mở các tệp."],
        ["Open the directory and edit the file with a text editor.", "Hãy mở thư mục và sửa tệp bằng trình soạn thảo văn bản."]
      ],
      "transform": [
        ["The shell executes the command.", "Chuyển sang câu bị động", "The command is executed by the shell.", "Lệnh được shell thực thi."],
        ["The administrator mounted the disk.", "Chuyển sang câu bị động", "The disk was mounted by the administrator.", "Ổ đĩa đã được quản trị viên gắn vào."],
        ["Users can open the root directory.", "Viết lại ở dạng phủ định", "Users cannot open the root directory.|Users can not open the root directory.", "Người dùng không thể mở thư mục gốc."]
      ]
    }
  ]
}
);
