/* EngVui – mục Ngữ pháp: các thì và cấu trúc câu cơ bản (dùng chung cho mọi lớp).
   Định dạng một chủ đề:
     formula:   [[tên dòng, công thức]]
     grammar:   [[tiêu đề, giải thích, "ví dụ 1 | ví dụ 2"]]
     quiz:      [[câu có ___, đáp án, [3 phương án sai], giải thích]]
     sentences: [[en, vi]]
     transform: [[câu gốc, yêu cầu, "đáp án | đáp án khác", nghĩa của đáp án]]
     extra:     từ gây nhiễu cho bài xếp thẻ của câu biến đổi
   Phần trong ngoặc là JSON chuẩn (để tools/validate_data.py đọc được). */
EV.registerGrammar({
  "names": ["Tom", "Mai", "Nam", "Lan", "Minh", "Mum", "Dad", "Hoa"],
  "groups": [
    {"id": 1, "title": "Câu cơ bản", "desc": "Mẫu câu nền tảng", "color": "#1CB0F6", "dark": "#1899D6"},
    {"id": 2, "title": "Thì hiện tại", "desc": "Hiện tại đơn và tiếp diễn", "color": "#58CC02", "dark": "#46A302"},
    {"id": 3, "title": "Quá khứ và tương lai", "desc": "Quá khứ đơn, will, be going to", "color": "#CE82FF", "dark": "#A568CC"},
    {"id": 4, "title": "Thì nâng cao", "desc": "Hoàn thành, tiếp diễn, used to", "color": "#FF9600", "dark": "#D97F00"},
    {"id": 5, "title": "Cấu trúc câu nâng cao", "desc": "Bị động, điều kiện, tường thuật…", "color": "#2B70C9", "dark": "#1F5AA6"},
    {"id": 6, "title": "Cấu trúc câu thông dụng", "desc": "Hay gặp trong TOEIC, IELTS", "color": "#00CD9C", "dark": "#00A47D"}
  ],
  "topics": [
    {
      "id": "be", "group": 1, "grade": 3, "icon": "👋",
      "title": "Động từ to be: am / is / are", "en": "The verb to be",
      "desc": "Giới thiệu bản thân, nói về người và vật.",
      "formula": [
        ["Khẳng định", "I am · He / She / It is · You / We / They are"],
        ["Phủ định", "S + am / is / are + not"],
        ["Câu hỏi", "Am / Is / Are + S + …?"],
        ["Trả lời ngắn", "Yes, S + am / is / are. · No, S + am not / isn't / aren't."]
      ],
      "grammar": [
        ["Chọn am, is hay are", "I đi với am. He, she, it và danh từ số ít đi với is. You, we, they và danh từ số nhiều đi với are.", "I am ten years old. | My mother is a nurse. | The books are on the desk."],
        ["Dạng viết tắt", "I am = I'm, he is = he's, you are = you're. Phủ định: is not = isn't, are not = aren't. Riêng am not không có dạng amn't, chỉ viết I'm not.", "She isn't at home. | We aren't hungry. | I'm not tired."]
      ],
      "quiz": [
        ["I ___ a student.", "am", ["is", "are", "be"], "Chủ ngữ I luôn đi với am."],
        ["My sister ___ nine years old.", "is", ["am", "are", "be"], "My sister là danh từ số ít, dùng is."],
        ["Tom and Peter ___ my friends.", "are", ["is", "am", "be"], "Hai người là số nhiều, dùng are."],
        ["The cat ___ under the table.", "is", ["are", "am", "be"], "The cat là số ít, dùng is."],
        ["___ you from Viet Nam?", "Are", ["Is", "Am", "Do"], "Câu hỏi với you: Are you …?"],
        ["We ___ not late for school.", "are", ["is", "am", "be"], "We đi với are; phủ định là are not."],
        ["Is your father a doctor? No, he ___.", "isn't", ["aren't", "is", "not"], "Trả lời ngắn phủ định với he: No, he isn't."],
        ["These apples ___ very sweet.", "are", ["is", "am", "be"], "These apples là số nhiều, dùng are."]
      ],
      "sentences": [
        ["My name is Mai.", "Tên mình là Mai."],
        ["She is my best friend.", "Bạn ấy là bạn thân nhất của mình."],
        ["We are in the classroom.", "Chúng mình đang ở trong lớp học."],
        ["The weather is not cold today.", "Hôm nay trời không lạnh."],
        ["Are they your new classmates?", "Họ có phải là bạn cùng lớp mới của bạn không?"],
        ["It isn't my pencil case.", "Đó không phải là hộp bút của tôi."]
      ],
      "transform": [
        ["He is a teacher.", "Chuyển sang câu phủ định", "He isn't a teacher.", "Anh ấy không phải là giáo viên."],
        ["They are at the park.", "Chuyển sang câu phủ định", "They aren't at the park.", "Họ không ở công viên."],
        ["She is happy.", "Chuyển sang câu hỏi Yes/No", "Is she happy?", "Cô ấy có vui không?"],
        ["You are ready.", "Chuyển sang câu hỏi Yes/No", "Are you ready?", "Bạn sẵn sàng chưa?"],
        ["I am a student.", "Chuyển sang câu phủ định", "I'm not a student.", "Tôi không phải là học sinh."]
      ],
      "extra": ["am", "is", "are", "not", "do", "does"]
    },
    {
      "id": "there", "group": 1, "grade": 3, "icon": "📍",
      "title": "There is / There are", "en": "There is / There are",
      "desc": "Nói ở đâu đó có cái gì, có bao nhiêu.",
      "formula": [
        ["Số ít", "There is + a / an / one + danh từ số ít"],
        ["Số nhiều", "There are + số lượng / some + danh từ số nhiều"],
        ["Phủ định", "There isn't a … · There aren't any …"],
        ["Câu hỏi", "Is there a …? · Are there any …? · How many + danh từ số nhiều + are there?"]
      ],
      "grammar": [
        ["There is và There are", "Dùng để nói ở đâu đó có cái gì. Danh từ số ít hoặc không đếm được dùng There is, danh từ số nhiều dùng There are.", "There is a lamp on the desk. | There are three bedrooms in my house. | There is some milk in the fridge."],
        ["Some và any", "Câu khẳng định dùng some. Câu phủ định và câu hỏi dùng any.", "There are some eggs. | There aren't any eggs. | Are there any eggs?"]
      ],
      "quiz": [
        ["There ___ a big tree in the garden.", "is", ["are", "am", "be"], "a big tree là số ít, dùng There is."],
        ["There ___ four chairs in the room.", "are", ["is", "am", "be"], "four chairs là số nhiều, dùng There are."],
        ["___ there a sofa in the living room?", "Is", ["Are", "Do", "Does"], "a sofa là số ít, câu hỏi là Is there …?"],
        ["There aren't ___ books on the shelf.", "any", ["some", "a", "an"], "Câu phủ định dùng any."],
        ["There are ___ flowers in the vase.", "some", ["any", "a", "an"], "Câu khẳng định với danh từ số nhiều dùng some."],
        ["How many students ___ there in your class?", "are", ["is", "do", "does"], "How many + danh từ số nhiều + are there?"],
        ["There ___ some water in the bottle.", "is", ["are", "am", "be"], "water là danh từ không đếm được, dùng There is."],
        ["Are there any pens in your bag? Yes, there ___.", "are", ["is", "aren't", "isn't"], "Hỏi Are there … thì trả lời Yes, there are."]
      ],
      "sentences": [
        ["There is a bed in my room.", "Có một cái giường trong phòng của tôi."],
        ["There are two windows in the kitchen.", "Có hai cửa sổ trong nhà bếp."],
        ["There isn't a TV in the bedroom.", "Không có ti vi trong phòng ngủ."],
        ["Are there any cats in the yard?", "Có con mèo nào ở trong sân không?"],
        ["There are some books on the table.", "Có vài quyển sách ở trên bàn."],
        ["How many rooms are there in your house?", "Nhà bạn có bao nhiêu phòng?"]
      ],
      "transform": [
        ["There is a clock on the wall.", "Chuyển sang câu phủ định", "There isn't a clock on the wall.", "Không có đồng hồ trên tường."],
        ["There are some eggs in the fridge.", "Chuyển sang câu phủ định", "There aren't any eggs in the fridge.", "Không có quả trứng nào trong tủ lạnh."],
        ["There is a park near the school.", "Chuyển sang câu hỏi Yes/No", "Is there a park near the school?", "Có công viên nào gần trường không?"],
        ["There are some students in the library.", "Chuyển sang câu hỏi Yes/No", "Are there any students in the library?", "Có học sinh nào trong thư viện không?"],
        ["There is one apple on the plate.", "Đổi one apple thành three apples", "There are three apples on the plate.", "Có ba quả táo trên đĩa."]
      ],
      "extra": ["is", "are", "some", "any", "a"]
    },
    {
      "id": "imperative", "group": 1, "grade": 3, "icon": "📢",
      "title": "Câu mệnh lệnh và Let's", "en": "Imperatives and Let's",
      "desc": "Yêu cầu, nhắc nhở ai đó và rủ mọi người cùng làm.",
      "formula": [
        ["Yêu cầu", "V (nguyên mẫu) + … · Please + V …"],
        ["Cấm, nhắc đừng làm", "Don't + V …"],
        ["Rủ cùng làm", "Let's + V … · Let's not + V …"]
      ],
      "grammar": [
        ["Câu mệnh lệnh", "Bắt đầu bằng động từ nguyên mẫu, không có chủ ngữ. Thêm please ở đầu hoặc cuối câu cho lịch sự.", "Open your book, please. | Sit down. | Please be quiet."],
        ["Don't và Let's", "Muốn bảo ai đừng làm gì thì dùng Don't + V. Muốn rủ mọi người cùng làm thì dùng Let's + V.", "Don't run in the classroom. | Let's play football. | Let's go to the zoo."]
      ],
      "quiz": [
        ["___ your hands before meals.", "Wash", ["Washes", "Washing", "To wash"], "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu."],
        ["___ talk in the library.", "Don't", ["Doesn't", "Not", "No"], "Câu cấm: Don't + động từ nguyên mẫu."],
        ["Let's ___ to the cinema tonight.", "go", ["goes", "going", "to go"], "Let's + động từ nguyên mẫu."],
        ["Please ___ quiet. The baby is sleeping.", "be", ["is", "are", "being"], "Câu mệnh lệnh với to be dùng be."],
        ["Don't ___ late for class.", "be", ["is", "are", "being"], "Don't + be + tính từ."],
        ["It's hot. Let's ___ swimming.", "go", ["goes", "went", "going"], "Let's go swimming nghĩa là: Mình đi bơi đi."],
        ["___ the door, please. It's cold.", "Close", ["Closes", "Closing", "Closed"], "Câu mệnh lệnh dùng động từ nguyên mẫu."],
        ["Let's ___ play games now. We have homework.", "not", ["don't", "no", "doesn't"], "Phủ định của Let's là Let's not + V."]
      ],
      "sentences": [
        ["Stand up, please.", "Mời các em đứng lên."],
        ["Don't touch the hot stove.", "Đừng chạm vào bếp nóng."],
        ["Let's sing a song together.", "Chúng mình cùng hát một bài nào."],
        ["Please turn off the lights.", "Làm ơn tắt đèn."],
        ["Don't be afraid.", "Đừng sợ."],
        ["Let's meet at the school gate.", "Mình gặp nhau ở cổng trường nhé."]
      ],
      "transform": [
        ["Open the window.", "Chuyển sang câu cấm", "Don't open the window.", "Đừng mở cửa sổ."],
        ["Use your phone in class.", "Chuyển sang câu cấm", "Don't use your phone in class.", "Đừng dùng điện thoại trong giờ học."],
        ["We go to the park.", "Chuyển thành lời rủ với Let's", "Let's go to the park.", "Chúng mình đi công viên đi."],
        ["We play badminton.", "Chuyển thành lời rủ với Let's", "Let's play badminton.", "Chúng mình chơi cầu lông đi."],
        ["Let's watch TV.", "Chuyển sang phủ định", "Let's not watch TV.", "Chúng mình đừng xem ti vi nữa."]
      ],
      "extra": ["don't", "doesn't", "not", "let's", "we"]
    },
    {
      "id": "can", "group": 1, "grade": 4, "icon": "💪",
      "title": "Can / can't", "en": "Can for ability and permission",
      "desc": "Nói ai đó làm được gì, xin phép và nhờ vả.",
      "formula": [
        ["Khẳng định", "S + can + V (nguyên mẫu)"],
        ["Phủ định", "S + can't / cannot + V"],
        ["Câu hỏi", "Can + S + V …? — Yes, S can. / No, S can't."]
      ],
      "grammar": [
        ["Can chỉ khả năng", "Can đứng trước động từ nguyên mẫu và giống nhau với mọi chủ ngữ, không thêm s.", "I can swim. | She can play the piano. | Birds can fly."],
        ["Can để xin phép, nhờ vả", "Can I …? dùng để xin phép. Can you …? dùng để nhờ ai làm gì.", "Can I go out, please? | Can you help me? | Can I borrow your pen?"]
      ],
      "quiz": [
        ["My brother can ___ a bike.", "ride", ["rides", "riding", "to ride"], "Sau can là động từ nguyên mẫu."],
        ["She ___ speak English very well.", "can", ["cans", "can to", "is can"], "can không thêm s và không có to phía sau."],
        ["Fish ___ walk. They can swim.", "can't", ["can", "don't can", "not can"], "Phủ định: can't + V."],
        ["___ you play chess? Yes, I can.", "Can", ["Do", "Are", "Does"], "Hỏi về khả năng: Can you …?"],
        ["Can your sister cook? No, she ___.", "can't", ["can", "doesn't", "isn't"], "Trả lời ngắn: No, she can't."],
        ["___ I open the window? It's hot.", "Can", ["Do", "Am", "Does"], "Xin phép: Can I …?"],
        ["Penguins ___ fly, but they can swim.", "can't", ["can", "aren't", "don't"], "Chim cánh cụt không bay được: can't fly."],
        ["Can you ___ me with my homework?", "help", ["helps", "helping", "to help"], "Can you + động từ nguyên mẫu …?"]
      ],
      "sentences": [
        ["I can draw a cat.", "Tôi có thể vẽ một con mèo."],
        ["My grandmother can't use a computer.", "Bà tôi không biết dùng máy tính."],
        ["Can you sing this song?", "Bạn có hát được bài này không?"],
        ["He can run very fast.", "Cậu ấy có thể chạy rất nhanh."],
        ["Can I come in, please?", "Em vào lớp được không ạ?"],
        ["We can't go out because it is raining.", "Chúng tôi không thể ra ngoài vì trời đang mưa."]
      ],
      "transform": [
        ["She can dance.", "Chuyển sang câu phủ định", "She can't dance.", "Cô ấy không biết nhảy."],
        ["They can speak French.", "Chuyển sang câu hỏi Yes/No", "Can they speak French?", "Họ có nói được tiếng Pháp không?"],
        ["He can play the guitar.", "Chuyển sang câu hỏi Yes/No", "Can he play the guitar?", "Cậu ấy có chơi được đàn ghi-ta không?"],
        ["I can swim.", "Chuyển sang câu phủ định", "I can't swim.", "Tôi không biết bơi."],
        ["Tom swims well.", "Viết lại với can", "Tom can swim well.", "Tom có thể bơi giỏi."]
      ],
      "extra": ["can", "can't", "do", "does", "not"]
    },
    {
      "id": "wh", "group": 1, "grade": 4, "icon": "❓",
      "title": "Câu hỏi với từ để hỏi", "en": "Wh-questions",
      "desc": "Hỏi cái gì, ở đâu, khi nào, ai, tại sao, như thế nào.",
      "formula": [
        ["Với to be", "Wh- + am / is / are + S …?"],
        ["Với động từ thường", "Wh- + do / does + S + V …?"],
        ["Từ để hỏi", "What: cái gì · Where: ở đâu · When: khi nào · Who: ai · Why: tại sao · How: như thế nào · How old: bao nhiêu tuổi · How many: bao nhiêu"]
      ],
      "grammar": [
        ["Chọn từ để hỏi", "Chọn theo thông tin muốn biết: nơi chốn dùng Where, thời gian dùng When hoặc What time, người dùng Who, lý do dùng Why, cách thức dùng How.", "Where do you live? | When is your birthday? | Who is that girl?"],
        ["Trật tự câu hỏi", "Từ để hỏi đứng đầu, sau đó là am, is, are hoặc do, does, rồi đến chủ ngữ.", "What is your name? | What time do you get up? | Why does she cry?"]
      ],
      "quiz": [
        ["___ is your birthday? It's in May.", "When", ["Where", "Who", "What"], "Hỏi thời gian dùng When."],
        ["___ do you live? I live in Da Nang.", "Where", ["When", "What", "Who"], "Hỏi nơi chốn dùng Where."],
        ["___ is that man? He is my uncle.", "Who", ["What", "Where", "How"], "Hỏi về người dùng Who."],
        ["___ old are you? I'm eleven.", "How", ["What", "Who", "Where"], "Hỏi tuổi: How old …?"],
        ["What time ___ your sister go to school?", "does", ["do", "is", "are"], "Chủ ngữ số ít với động từ thường dùng does."],
        ["___ are you sad? Because I lost my cat.", "Why", ["What", "How", "When"], "Hỏi lý do dùng Why, trả lời bằng Because."],
        ["How many pets ___ you have?", "do", ["does", "are", "is"], "Chủ ngữ you dùng do."],
        ["What ___ your favourite subject?", "is", ["are", "do", "does"], "your favourite subject là số ít, dùng is."]
      ],
      "sentences": [
        ["What is your name?", "Bạn tên là gì?"],
        ["Where is my schoolbag?", "Cặp sách của mình ở đâu?"],
        ["What time do you have breakfast?", "Bạn ăn sáng lúc mấy giờ?"],
        ["Who is your English teacher?", "Giáo viên tiếng Anh của bạn là ai?"],
        ["How do you go to school?", "Bạn đi học bằng phương tiện gì?"],
        ["Why do you like summer?", "Tại sao bạn thích mùa hè?"]
      ],
      "transform": [
        ["She lives in Hue.", "Đặt câu hỏi với Where", "Where does she live?", "Cô ấy sống ở đâu?"],
        ["Lan's birthday is in June.", "Đặt câu hỏi với When", "When is Lan's birthday?", "Sinh nhật của Lan vào khi nào?"],
        ["They play football after school.", "Đặt câu hỏi với When", "When do they play football?", "Họ chơi bóng đá khi nào?"],
        ["Tom goes to school by bus.", "Đặt câu hỏi với How", "How does Tom go to school?", "Tom đi học bằng phương tiện gì?"],
        ["Mai is ten years old.", "Đặt câu hỏi với How old", "How old is Mai?", "Mai bao nhiêu tuổi?"]
      ],
      "extra": ["do", "does", "is", "are", "what"]
    },
    {
      "id": "ps1", "group": 2, "grade": 4, "icon": "🔁",
      "title": "Hiện tại đơn: câu khẳng định", "en": "Present simple: affirmative",
      "desc": "Nói về thói quen, sự thật và lịch trình.",
      "formula": [
        ["I / You / We / They", "S + V (nguyên mẫu)"],
        ["He / She / It", "S + V-s / V-es"],
        ["Dấu hiệu", "always, usually, often, sometimes, never, every day, on Mondays"]
      ],
      "grammar": [
        ["Khi nào dùng", "Hiện tại đơn diễn tả thói quen, việc lặp đi lặp lại, sự thật hiển nhiên và lịch trình.", "I get up at six every day. | The sun rises in the east. | The train leaves at eight o'clock."],
        ["Thêm -s hay -es", "Với he, she, it: động từ tận cùng bằng o, s, x, ch, sh thì thêm -es (goes, watches); phụ âm + y thì đổi y thành ies (studies); have đổi thành has; còn lại thêm -s (plays, reads).", "She watches TV. | He studies English. | My dog has a long tail."]
      ],
      "quiz": [
        ["My father ___ coffee every morning.", "drinks", ["drink", "drinking", "is drink"], "Chủ ngữ số ít (my father) thì động từ thêm -s."],
        ["They ___ to school by bike.", "go", ["goes", "going", "is go"], "They đi với động từ nguyên mẫu."],
        ["She ___ her homework after dinner.", "does", ["do", "dos", "doing"], "do thêm -es thành does."],
        ["The earth ___ around the sun.", "goes", ["go", "gos", "going"], "Sự thật hiển nhiên; go thêm -es thành goes."],
        ["My brother ___ Maths at university.", "studies", ["study", "studys", "studying"], "Phụ âm + y: đổi y thành ies."],
        ["Lan ___ a lot of friends.", "has", ["have", "haves", "having"], "have với chủ ngữ số ít đổi thành has."],
        ["He ___ TV in the evening.", "watches", ["watch", "watchs", "watching"], "watch tận cùng bằng ch nên thêm -es."],
        ["My cat ___ on the sofa every afternoon.", "sleeps", ["sleep", "sleepes", "is sleep"], "Chủ ngữ số ít thì động từ thêm -s."]
      ],
      "sentences": [
        ["I get up at six o'clock.", "Tôi thức dậy lúc sáu giờ."],
        ["She always walks to school.", "Cô ấy luôn đi bộ đến trường."],
        ["My parents work in a hospital.", "Bố mẹ tôi làm việc ở một bệnh viện."],
        ["Water boils at one hundred degrees.", "Nước sôi ở một trăm độ."],
        ["He often plays chess with his grandfather.", "Cậu ấy thường chơi cờ với ông."],
        ["We have English on Mondays and Fridays.", "Chúng tôi có môn tiếng Anh vào thứ Hai và thứ Sáu."]
      ],
      "transform": [
        ["I play football.", "Thay I bằng He", "He plays football.", "Cậu ấy chơi bóng đá."],
        ["They watch cartoons.", "Thay They bằng She", "She watches cartoons.", "Cô ấy xem phim hoạt hình."],
        ["We study English.", "Thay We bằng My brother", "My brother studies English.", "Anh trai tôi học tiếng Anh."],
        ["You go to bed early.", "Thay You bằng Mai", "Mai goes to bed early.", "Mai đi ngủ sớm."],
        ["I have a new bike.", "Thay I bằng Nam", "Nam has a new bike.", "Nam có một chiếc xe đạp mới."]
      ],
      "extra": ["is", "are", "do", "does"]
    },
    {
      "id": "ps2", "group": 2, "grade": 4, "icon": "🔄",
      "title": "Hiện tại đơn: phủ định và câu hỏi", "en": "Present simple: negatives and questions",
      "desc": "Dùng don't, doesn't, do, does đúng cách.",
      "formula": [
        ["Phủ định", "I / You / We / They + don't + V · He / She / It + doesn't + V"],
        ["Câu hỏi", "Do / Does + S + V …?"],
        ["Trả lời ngắn", "Yes, S + do / does. · No, S + don't / doesn't."]
      ],
      "grammar": [
        ["Do và does", "Dùng does với he, she, it và danh từ số ít; dùng do với I, you, we, they và danh từ số nhiều. Sau don't, doesn't, do, does thì động từ trở về nguyên mẫu.", "He doesn't like milk. | Do you play tennis? | Does she live here?"],
        ["Lỗi hay gặp", "Không viết She doesn't likes hay Does he plays. Chữ s đã chuyển sang does nên động từ chính không thêm s nữa.", "She doesn't like fish. | Does he play the piano?"]
      ],
      "quiz": [
        ["I ___ like rainy days.", "don't", ["doesn't", "not", "isn't"], "Chủ ngữ I dùng don't."],
        ["My mother ___ drink coffee.", "doesn't", ["don't", "isn't", "not"], "Chủ ngữ số ít dùng doesn't."],
        ["___ your brother play basketball?", "Does", ["Do", "Is", "Are"], "your brother là số ít, dùng Does."],
        ["___ they live near here?", "Do", ["Does", "Are", "Is"], "They dùng Do."],
        ["She doesn't ___ spicy food.", "eat", ["eats", "eating", "ate"], "Sau doesn't, động từ ở dạng nguyên mẫu."],
        ["Does Nam ___ to school on foot?", "go", ["goes", "going", "went"], "Sau Does + chủ ngữ, động từ ở dạng nguyên mẫu."],
        ["Do you like ice cream? Yes, I ___.", "do", ["does", "am", "like"], "Trả lời ngắn: Yes, I do."],
        ["Does your cat sleep a lot? No, it ___.", "doesn't", ["don't", "isn't", "not"], "Trả lời ngắn phủ định với it: No, it doesn't."]
      ],
      "sentences": [
        ["I don't eat meat.", "Tôi không ăn thịt."],
        ["He doesn't watch TV at night.", "Cậu ấy không xem ti vi vào buổi tối."],
        ["Do you have a pet?", "Bạn có nuôi thú cưng không?"],
        ["Does she speak Japanese?", "Cô ấy có nói tiếng Nhật không?"],
        ["We don't go to school on Sundays.", "Chúng tôi không đi học vào Chủ nhật."],
        ["Does your father work on Saturdays?", "Bố bạn có làm việc vào thứ Bảy không?"]
      ],
      "transform": [
        ["She likes cats.", "Chuyển sang câu phủ định", "She doesn't like cats.", "Cô ấy không thích mèo."],
        ["They play volleyball.", "Chuyển sang câu phủ định", "They don't play volleyball.", "Họ không chơi bóng chuyền."],
        ["He reads comics.", "Chuyển sang câu hỏi Yes/No", "Does he read comics?", "Cậu ấy có đọc truyện tranh không?"],
        ["You live in Ha Noi.", "Chuyển sang câu hỏi Yes/No", "Do you live in Ha Noi?", "Bạn có sống ở Hà Nội không?"],
        ["Mai goes swimming every week.", "Chuyển sang câu hỏi Yes/No", "Does Mai go swimming every week?", "Mai có đi bơi hằng tuần không?"]
      ],
      "extra": ["do", "does", "don't", "doesn't", "is"]
    },
    {
      "id": "pc", "group": 2, "grade": 5, "icon": "⏳",
      "title": "Hiện tại tiếp diễn", "en": "Present continuous",
      "desc": "Nói về việc đang xảy ra lúc này.",
      "formula": [
        ["Khẳng định", "S + am / is / are + V-ing"],
        ["Phủ định", "S + am / is / are + not + V-ing"],
        ["Câu hỏi", "Am / Is / Are + S + V-ing …?"],
        ["Dấu hiệu", "now, right now, at the moment, Look!, Listen!"]
      ],
      "grammar": [
        ["Khi nào dùng", "Hiện tại tiếp diễn diễn tả việc đang xảy ra ngay lúc nói hoặc quanh thời điểm hiện tại.", "I am reading a book now. | Look! The bus is coming. | They are playing in the yard."],
        ["Cách thêm -ing", "Động từ tận cùng bằng e thì bỏ e rồi thêm -ing (write thành writing). Động từ một âm tiết tận cùng bằng một nguyên âm và một phụ âm thì gấp đôi phụ âm cuối (run thành running, swim thành swimming). Còn lại thêm -ing.", "She is writing a letter. | The boys are running. | We are swimming."]
      ],
      "quiz": [
        ["Listen! The baby ___.", "is crying", ["cries", "are crying", "crying"], "Listen! báo hiệu việc đang xảy ra, dùng is + V-ing."],
        ["We ___ lunch at the moment.", "are having", ["have", "is having", "having"], "at the moment dùng hiện tại tiếp diễn; we đi với are."],
        ["I ___ my homework now.", "am doing", ["do", "is doing", "doing"], "I đi với am + V-ing."],
        ["She is ___ a letter to her friend.", "writing", ["writeing", "writes", "write"], "write bỏ e rồi thêm -ing."],
        ["The children are ___ in the pool.", "swimming", ["swiming", "swims", "swim"], "swim gấp đôi m rồi thêm -ing."],
        ["___ your father working now?", "Is", ["Are", "Does", "Do"], "your father là số ít, câu hỏi dùng Is."],
        ["They ___ watching TV. They are sleeping.", "aren't", ["isn't", "don't", "not"], "They đi với are; phủ định là aren't."],
        ["Look! It ___ outside.", "is raining", ["rains", "raining", "are raining"], "Look! dùng hiện tại tiếp diễn."]
      ],
      "sentences": [
        ["My mother is cooking dinner.", "Mẹ tôi đang nấu bữa tối."],
        ["The students are listening to the teacher.", "Các học sinh đang nghe cô giáo giảng."],
        ["I'm not sleeping. I'm thinking.", "Tôi không ngủ đâu. Tôi đang suy nghĩ."],
        ["Are you listening to music?", "Bạn đang nghe nhạc à?"],
        ["Look! The dog is running after the ball.", "Nhìn kìa! Con chó đang chạy theo quả bóng."],
        ["What are you doing now?", "Bây giờ bạn đang làm gì?"]
      ],
      "transform": [
        ["She reads a book.", "Chuyển sang hiện tại tiếp diễn", "She is reading a book.", "Cô ấy đang đọc sách."],
        ["They play in the garden.", "Chuyển sang hiện tại tiếp diễn", "They are playing in the garden.", "Họ đang chơi trong vườn."],
        ["He is sleeping.", "Chuyển sang câu phủ định", "He isn't sleeping.", "Cậu ấy không ngủ."],
        ["You are waiting for the bus.", "Chuyển sang câu hỏi Yes/No", "Are you waiting for the bus?", "Bạn đang đợi xe buýt à?"],
        ["I write an email.", "Chuyển sang hiện tại tiếp diễn", "I'm writing an email.", "Tôi đang viết email."]
      ],
      "extra": ["is", "are", "am", "not", "do"]
    },
    {
      "id": "psvpc", "group": 2, "grade": 6, "icon": "⚖️",
      "title": "Hiện tại đơn hay hiện tại tiếp diễn?", "en": "Present simple or present continuous?",
      "desc": "Phân biệt việc thường làm và việc đang làm.",
      "formula": [
        ["Hiện tại đơn", "Thói quen, sự thật: every day, usually, often, always, never"],
        ["Hiện tại tiếp diễn", "Đang xảy ra: now, at the moment, Look!, Listen!"],
        ["Động từ chỉ trạng thái", "like, love, want, know, need thường không dùng ở dạng tiếp diễn"]
      ],
      "grammar": [
        ["So sánh hai thì", "Hiện tại đơn nói về việc thường làm. Hiện tại tiếp diễn nói về việc đang làm lúc này.", "I usually walk to school, but today I am taking the bus. | He plays football on Sundays. | He is playing football now."],
        ["Động từ chỉ trạng thái", "Các động từ chỉ cảm xúc, suy nghĩ như like, love, want, know, need thường chỉ dùng ở hiện tại đơn, kể cả khi nói về lúc này.", "I want a glass of water now. | She knows the answer."]
      ],
      "quiz": [
        ["My dad usually ___ to work by car.", "goes", ["is going", "go", "going"], "usually là dấu hiệu của hiện tại đơn."],
        ["Be quiet! The baby ___.", "is sleeping", ["sleeps", "sleep", "are sleeping"], "Việc đang xảy ra ngay lúc nói dùng hiện tại tiếp diễn."],
        ["We ___ English every Tuesday.", "have", ["are having", "has", "having"], "every Tuesday chỉ việc lặp lại, dùng hiện tại đơn."],
        ["Look! Those boys ___ football in the rain.", "are playing", ["play", "plays", "is playing"], "Look! dùng hiện tại tiếp diễn; those boys là số nhiều."],
        ["I ___ the answer to this question.", "know", ["am knowing", "knows", "knowing"], "know là động từ chỉ trạng thái, không dùng dạng tiếp diễn."],
        ["She ___ a shower at the moment.", "is having", ["has", "have", "having"], "at the moment dùng hiện tại tiếp diễn."],
        ["Water ___ at zero degrees.", "freezes", ["is freezing", "freeze", "freezing"], "Sự thật hiển nhiên dùng hiện tại đơn."],
        ["What ___ you doing now? I'm drawing a picture.", "are", ["do", "does", "is"], "Hỏi việc đang làm: What are you doing?"]
      ],
      "sentences": [
        ["He usually gets up early, but today he is sleeping late.", "Anh ấy thường dậy sớm nhưng hôm nay anh ấy đang ngủ muộn."],
        ["My sister is doing her homework now.", "Chị tôi đang làm bài tập về nhà."],
        ["Cats don't like water.", "Mèo không thích nước."],
        ["They are building a new bridge this year.", "Năm nay họ đang xây một cây cầu mới."],
        ["I need a new pen.", "Tôi cần một cây bút mới."],
        ["The shop opens at eight every morning.", "Cửa hàng mở cửa lúc tám giờ mỗi sáng."]
      ],
      "transform": [
        ["I walk to school every day.", "Đổi every day thành now", "I am walking to school now. | Now I am walking to school.", "Bây giờ tôi đang đi bộ đến trường."],
        ["She is playing the piano now.", "Đổi now thành every evening", "She plays the piano every evening.", "Cô ấy chơi đàn piano mỗi tối."],
        ["They are eating noodles now.", "Đổi now thành every morning", "They eat noodles every morning.", "Họ ăn mì mỗi sáng."],
        ["He watches TV every night.", "Đổi every night thành at the moment", "He is watching TV at the moment.", "Lúc này cậu ấy đang xem ti vi."],
        ["We swim on Saturdays.", "Đổi on Saturdays thành right now", "We are swimming right now.", "Ngay lúc này chúng tôi đang bơi."]
      ],
      "extra": ["is", "are", "am", "do", "does"]
    },
    {
      "id": "was", "group": 3, "grade": 5, "icon": "🕰️",
      "title": "Quá khứ của to be: was / were", "en": "Past simple of to be",
      "desc": "Nói ai đó đã ở đâu, đã như thế nào.",
      "formula": [
        ["Khẳng định", "I / He / She / It + was · You / We / They + were"],
        ["Phủ định", "wasn't (was not) · weren't (were not)"],
        ["Câu hỏi", "Was / Were + S …? — Yes, S was / were. No, S wasn't / weren't."],
        ["Dấu hiệu", "yesterday, last week, last year, two days ago, in 2020"]
      ],
      "grammar": [
        ["Was hay were", "I, he, she, it và danh từ số ít dùng was. You, we, they và danh từ số nhiều dùng were.", "I was at home yesterday. | The weather was nice. | They were in Da Lat last summer."],
        ["Phủ định và câu hỏi", "Thêm not sau was, were để phủ định. Đưa was, were lên trước chủ ngữ để hỏi.", "She wasn't at school. | Were you tired? | Where were you last night?"]
      ],
      "quiz": [
        ["I ___ ill yesterday.", "was", ["were", "am", "is"], "yesterday chỉ quá khứ; I đi với was."],
        ["My friends ___ at the party last night.", "were", ["was", "are", "is"], "Chủ ngữ số nhiều dùng were."],
        ["___ you at home last Sunday?", "Were", ["Was", "Are", "Did"], "you dùng were."],
        ["The film ___ very interesting.", "was", ["were", "did", "be"], "The film là số ít, dùng was."],
        ["We ___ at school yesterday because it was Sunday.", "weren't", ["wasn't", "didn't", "aren't"], "We dùng weren't."],
        ["Was your grandfather a farmer? Yes, he ___.", "was", ["were", "is", "did"], "Trả lời ngắn: Yes, he was."],
        ["Where ___ Lan two hours ago?", "was", ["were", "is", "did"], "two hours ago chỉ quá khứ; Lan là số ít, dùng was."],
        ["There ___ many people at the zoo last weekend.", "were", ["was", "are", "is"], "many people là số nhiều, quá khứ dùng There were."]
      ],
      "sentences": [
        ["I was born in 2015.", "Tôi sinh năm 2015."],
        ["The children were very happy.", "Bọn trẻ đã rất vui."],
        ["It wasn't cold last winter.", "Mùa đông năm ngoái trời không lạnh."],
        ["Were they at the cinema yesterday?", "Hôm qua họ có ở rạp chiếu phim không?"],
        ["My first teacher was very kind.", "Cô giáo đầu tiên của tôi rất hiền."],
        ["Where were you last night?", "Tối qua bạn đã ở đâu?"]
      ],
      "transform": [
        ["I am tired today.", "Đổi today thành yesterday", "I was tired yesterday.", "Hôm qua tôi mệt."],
        ["They are in the garden now.", "Đổi now thành an hour ago", "They were in the garden an hour ago.", "Một giờ trước họ ở trong vườn."],
        ["She was at the library.", "Chuyển sang câu phủ định", "She wasn't at the library.", "Cô ấy không ở thư viện."],
        ["The test was difficult.", "Chuyển sang câu hỏi Yes/No", "Was the test difficult?", "Bài kiểm tra có khó không?"],
        ["You were late for school.", "Chuyển sang câu hỏi Yes/No", "Were you late for school?", "Bạn có đi học muộn không?"]
      ],
      "extra": ["was", "were", "is", "are", "did"]
    },
    {
      "id": "past1", "group": 3, "grade": 5, "icon": "📜",
      "title": "Quá khứ đơn: câu khẳng định", "en": "Past simple: affirmative",
      "desc": "Kể lại việc đã xảy ra và đã kết thúc.",
      "formula": [
        ["Cấu trúc", "S + V-ed / V2 (giống nhau với mọi chủ ngữ)"],
        ["Có quy tắc", "Thêm -ed: play → played, watch → watched"],
        ["Bất quy tắc", "Học thuộc: go → went, have → had, see → saw, eat → ate"],
        ["Dấu hiệu", "yesterday, last night, last week, ago, in 2020"]
      ],
      "grammar": [
        ["Khi nào dùng", "Quá khứ đơn diễn tả việc đã xảy ra và kết thúc trong quá khứ, thường có thời gian cụ thể.", "I visited my grandparents last week. | She watched a film yesterday."],
        ["Cách thêm -ed", "Tận cùng bằng e thì chỉ thêm d (live thành lived). Phụ âm + y thì đổi y thành ied (study thành studied). Động từ một âm tiết tận cùng bằng một nguyên âm và một phụ âm thì gấp đôi phụ âm cuối (stop thành stopped). Động từ bất quy tắc phải học thuộc.", "We lived in Hue. | He studied hard. | I went to the beach."]
      ],
      "quiz": [
        ["We ___ football yesterday afternoon.", "played", ["play", "plays", "playing"], "yesterday afternoon chỉ quá khứ; play thêm -ed."],
        ["She ___ to Da Lat last summer.", "went", ["goed", "goes", "go"], "go là động từ bất quy tắc: went."],
        ["I ___ a big fish two days ago.", "caught", ["catched", "catch", "catches"], "catch là động từ bất quy tắc: caught."],
        ["My brother ___ Maths last night.", "studied", ["studyed", "studies", "study"], "study: phụ âm + y nên đổi y thành ied."],
        ["They ___ pizza for dinner yesterday.", "had", ["have", "haved", "has"], "have là động từ bất quy tắc: had."],
        ["The bus ___ in front of the school ten minutes ago.", "stopped", ["stoped", "stop", "stopping"], "stop gấp đôi p rồi thêm -ed."],
        ["I ___ my old friend at the market yesterday.", "saw", ["seed", "see", "sees"], "see là động từ bất quy tắc: saw."],
        ["Mai ___ a letter to her pen friend last week.", "wrote", ["writed", "writes", "write"], "write là động từ bất quy tắc: wrote."]
      ],
      "sentences": [
        ["I cleaned my room yesterday.", "Hôm qua tôi đã dọn phòng."],
        ["We went to the museum last Sunday.", "Chủ nhật tuần trước chúng tôi đã đi bảo tàng."],
        ["She bought a new dress last week.", "Tuần trước cô ấy đã mua một chiếc váy mới."],
        ["My family moved to Da Nang in 2020.", "Gia đình tôi chuyển đến Đà Nẵng năm 2020."],
        ["He ate a sandwich for breakfast.", "Cậu ấy đã ăn một cái bánh mì kẹp cho bữa sáng."],
        ["The rain stopped an hour ago.", "Mưa đã tạnh một giờ trước."]
      ],
      "transform": [
        ["I play badminton every day.", "Đổi every day thành yesterday", "I played badminton yesterday.", "Hôm qua tôi đã chơi cầu lông."],
        ["She visits her aunt every Sunday.", "Đổi every Sunday thành last Sunday", "She visited her aunt last Sunday.", "Chủ nhật tuần trước cô ấy đã thăm dì."],
        ["They go to the beach every summer.", "Đổi every summer thành last summer", "They went to the beach last summer.", "Mùa hè năm ngoái họ đã đi biển."],
        ["He has a cold today.", "Đổi today thành last week", "He had a cold last week.", "Tuần trước cậu ấy bị cảm."],
        ["We eat noodles every morning.", "Đổi every morning thành yesterday morning", "We ate noodles yesterday morning.", "Sáng hôm qua chúng tôi đã ăn mì."]
      ],
      "extra": ["did", "was", "were"]
    },
    {
      "id": "past2", "group": 3, "grade": 5, "icon": "🔍",
      "title": "Quá khứ đơn: phủ định và câu hỏi", "en": "Past simple: negatives and questions",
      "desc": "Dùng did và didn't cho mọi chủ ngữ.",
      "formula": [
        ["Phủ định", "S + didn't (did not) + V (nguyên mẫu)"],
        ["Câu hỏi", "Did + S + V (nguyên mẫu) …?"],
        ["Trả lời ngắn", "Yes, S did. · No, S didn't."],
        ["Câu hỏi Wh-", "Wh- + did + S + V …?"]
      ],
      "grammar": [
        ["Dùng did cho mọi chủ ngữ", "Quá khứ đơn dùng did và didn't cho tất cả các ngôi. Sau did, didn't thì động từ trở về nguyên mẫu.", "I didn't go out. | Did she call you? | What did you do yesterday?"],
        ["Lỗi hay gặp", "Không viết I didn't went hay Did you saw. Dấu hiệu quá khứ đã nằm ở did nên động từ chính giữ nguyên mẫu.", "I didn't see him. | Did you enjoy the trip?"]
      ],
      "quiz": [
        ["I ___ watch TV last night.", "didn't", ["don't", "wasn't", "not"], "Phủ định ở quá khứ: didn't + V."],
        ["___ you go to the party yesterday?", "Did", ["Do", "Were", "Was"], "Câu hỏi quá khứ với động từ thường: Did + S + V?"],
        ["She didn't ___ her homework.", "finish", ["finished", "finishes", "finishing"], "Sau didn't, động từ ở dạng nguyên mẫu."],
        ["Did he ___ the bus this morning?", "catch", ["caught", "catches", "catching"], "Sau Did + chủ ngữ, động từ ở dạng nguyên mẫu."],
        ["Did your parents enjoy the trip? Yes, they ___.", "did", ["do", "were", "enjoyed"], "Trả lời ngắn: Yes, they did."],
        ["What ___ you have for lunch yesterday?", "did", ["do", "were", "was"], "Câu hỏi Wh- ở quá khứ: What did you …?"],
        ["We ___ go camping last weekend because it rained.", "didn't", ["weren't", "don't", "not"], "Phủ định ở quá khứ đơn: didn't + V."],
        ["Where did you ___ last summer?", "go", ["went", "goes", "going"], "Sau did, động từ ở dạng nguyên mẫu."]
      ],
      "sentences": [
        ["I didn't sleep well last night.", "Tối qua tôi ngủ không ngon."],
        ["Did you see the football match?", "Bạn có xem trận bóng đá không?"],
        ["She didn't come to class yesterday.", "Hôm qua cô ấy không đến lớp."],
        ["What did you do at the weekend?", "Cuối tuần bạn đã làm gì?"],
        ["Did they win the game?", "Họ có thắng trận đấu không?"],
        ["Where did your family go last summer?", "Hè năm ngoái gia đình bạn đã đi đâu?"]
      ],
      "transform": [
        ["He played tennis yesterday.", "Chuyển sang câu phủ định", "He didn't play tennis yesterday.", "Hôm qua cậu ấy không chơi quần vợt."],
        ["They went to the zoo.", "Chuyển sang câu phủ định", "They didn't go to the zoo.", "Họ đã không đi sở thú."],
        ["She bought some flowers.", "Chuyển sang câu hỏi Yes/No", "Did she buy any flowers? | Did she buy some flowers?", "Cô ấy có mua hoa không?"],
        ["You met Tom at the park.", "Chuyển sang câu hỏi Yes/No", "Did you meet Tom at the park?", "Bạn đã gặp Tom ở công viên à?"],
        ["Nam watched a cartoon last night.", "Đặt câu hỏi với What", "What did Nam watch last night?", "Tối qua Nam đã xem gì?"]
      ],
      "extra": ["do", "does", "did", "didn't", "was"]
    },
    {
      "id": "will", "group": 3, "grade": 6, "icon": "🔮",
      "title": "Tương lai đơn với will", "en": "Future simple with will",
      "desc": "Dự đoán, quyết định ngay lúc nói, hứa hẹn.",
      "formula": [
        ["Khẳng định", "S + will ('ll) + V (nguyên mẫu)"],
        ["Phủ định", "S + won't (will not) + V"],
        ["Câu hỏi", "Will + S + V …? — Yes, S will. / No, S won't."],
        ["Dấu hiệu", "tomorrow, next week, in 2030, I think, maybe, probably"]
      ],
      "grammar": [
        ["Khi nào dùng will", "Dùng will cho dự đoán về tương lai, quyết định ngay lúc nói, lời hứa và lời đề nghị giúp đỡ.", "I think it will rain tomorrow. | I'll help you with your bags. | I won't tell anyone."],
        ["Will giống nhau với mọi chủ ngữ", "Sau will luôn là động từ nguyên mẫu, không thêm s, không thêm to.", "She will be a doctor. | They will visit us next week."]
      ],
      "quiz": [
        ["I think it ___ sunny tomorrow.", "will be", ["will is", "is being", "be"], "Dự đoán: will + động từ nguyên mẫu."],
        ["She will ___ her grandparents next week.", "visit", ["visits", "visiting", "to visit"], "Sau will là động từ nguyên mẫu."],
        ["Don't worry. I ___ tell your secret.", "won't", ["don't", "am not", "willn't"], "Lời hứa phủ định: won't + V."],
        ["___ you come to my party on Saturday?", "Will", ["Do", "Are", "Did"], "Hỏi về tương lai: Will you …?"],
        ["Will robots do our housework in the future? Yes, they ___.", "will", ["do", "are", "won't"], "Trả lời ngắn: Yes, they will."],
        ["The bag looks heavy. I ___ carry it for you.", "will", ["am", "do", "did"], "Đề nghị giúp đỡ ngay lúc nói dùng will."],
        ["In 2050, people ___ live on the Moon.", "will", ["are", "do", "did"], "Dự đoán về tương lai dùng will."],
        ["We won't ___ to school next Monday. It's a holiday.", "go", ["goes", "going", "went"], "Sau won't là động từ nguyên mẫu."]
      ],
      "sentences": [
        ["I will call you tomorrow.", "Ngày mai tôi sẽ gọi cho bạn."],
        ["It will be hot next week.", "Tuần sau trời sẽ nóng."],
        ["She won't be late again.", "Cô ấy sẽ không đi muộn nữa."],
        ["Will you help me, please?", "Bạn giúp mình được không?"],
        ["I think our team will win.", "Tôi nghĩ đội chúng ta sẽ thắng."],
        ["We'll have a test next Friday.", "Thứ Sáu tuần sau chúng ta sẽ có bài kiểm tra."]
      ],
      "transform": [
        ["I visit my uncle every summer.", "Đổi every summer thành next summer", "I will visit my uncle next summer.", "Hè tới tôi sẽ thăm chú."],
        ["She will buy a new phone.", "Chuyển sang câu phủ định", "She won't buy a new phone.", "Cô ấy sẽ không mua điện thoại mới."],
        ["They will travel by train.", "Chuyển sang câu hỏi Yes/No", "Will they travel by train?", "Họ sẽ đi bằng tàu hỏa à?"],
        ["We will finish the project.", "Chuyển sang câu phủ định", "We won't finish the project.", "Chúng tôi sẽ không hoàn thành dự án."],
        ["Your brother will join the club.", "Chuyển sang câu hỏi Yes/No", "Will your brother join the club?", "Anh trai bạn sẽ tham gia câu lạc bộ à?"]
      ],
      "extra": ["will", "won't", "do", "does", "is"]
    },
    {
      "id": "goingto", "group": 3, "grade": 7, "icon": "🗓️",
      "title": "Tương lai gần: be going to", "en": "Future with be going to",
      "desc": "Nói về kế hoạch đã định và điều sắp xảy ra.",
      "formula": [
        ["Khẳng định", "S + am / is / are + going to + V"],
        ["Phủ định", "S + am / is / are + not + going to + V"],
        ["Câu hỏi", "Am / Is / Are + S + going to + V …?"],
        ["Will hay be going to", "will: quyết định ngay lúc nói, dự đoán chung · be going to: kế hoạch đã định, dự đoán có dấu hiệu rõ"]
      ],
      "grammar": [
        ["Kế hoạch đã định", "Dùng be going to khi nói về việc đã lên kế hoạch từ trước.", "I am going to visit Ha Long Bay next month. | We are going to have a picnic this Sunday."],
        ["Dự đoán có dấu hiệu", "Khi thấy dấu hiệu rõ ràng rằng việc gì đó sắp xảy ra, dùng be going to.", "Look at those dark clouds. It is going to rain. | Be careful! You are going to fall."]
      ],
      "quiz": [
        ["I ___ going to buy a new bike next week.", "am", ["is", "are", "will"], "I đi với am going to."],
        ["My parents ___ going to paint the house.", "are", ["is", "am", "will"], "Chủ ngữ số nhiều dùng are going to."],
        ["Look at the sky! It's going ___ rain.", "to", ["for", "will", "at"], "Cấu trúc be going to + V."],
        ["She is going to ___ a cake for the party.", "make", ["makes", "making", "made"], "Sau going to là động từ nguyên mẫu."],
        ["___ you going to watch the match tonight?", "Are", ["Do", "Will", "Is"], "Câu hỏi: Are you going to …?"],
        ["We aren't going to ___ out this evening.", "go", ["going", "goes", "went"], "Sau going to là động từ nguyên mẫu."],
        ["I left my wallet at home! Don't worry, I ___ lend you some money.", "will", ["am going to", "am", "going to"], "Quyết định ngay lúc nói dùng will."],
        ["He bought the tickets yesterday. He ___ travel to Hue tomorrow.", "is going to", ["will to", "going", "is going"], "Kế hoạch đã chuẩn bị từ trước dùng be going to."]
      ],
      "sentences": [
        ["I am going to learn to swim this summer.", "Hè này tôi sẽ học bơi."],
        ["They are going to visit the museum on Saturday.", "Họ định đi thăm bảo tàng vào thứ Bảy."],
        ["She isn't going to take the bus.", "Cô ấy không định đi xe buýt."],
        ["Are you going to join the English club?", "Bạn có định tham gia câu lạc bộ tiếng Anh không?"],
        ["Look out! The glass is going to fall.", "Cẩn thận! Cái cốc sắp rơi rồi."],
        ["What are you going to do after school?", "Tan học bạn định làm gì?"]
      ],
      "transform": [
        ["We plan to have a party.", "Viết lại với be going to", "We are going to have a party.", "Chúng tôi định tổ chức một bữa tiệc."],
        ["She is going to study abroad.", "Chuyển sang câu phủ định", "She isn't going to study abroad.", "Cô ấy không định đi du học."],
        ["They are going to plant trees.", "Chuyển sang câu hỏi Yes/No", "Are they going to plant trees?", "Họ định trồng cây à?"],
        ["He plans to buy a camera.", "Viết lại với be going to", "He is going to buy a camera.", "Cậu ấy định mua một chiếc máy ảnh."],
        ["You are going to take a photo.", "Chuyển sang câu hỏi Yes/No", "Are you going to take a photo?", "Bạn định chụp ảnh à?"]
      ],
      "extra": ["is", "are", "am", "will", "to"]
    },
    {
      "id": "pp", "group": 4, "grade": 8, "icon": "✅",
      "title": "Hiện tại hoàn thành", "en": "Present perfect",
      "desc": "Nói về trải nghiệm và việc đã xảy ra còn liên quan đến hiện tại.",
      "formula": [
        ["Khẳng định", "S + have / has + V3 (quá khứ phân từ)"],
        ["Phủ định", "S + haven't / hasn't + V3"],
        ["Câu hỏi", "Have / Has + S + V3 …? — Yes, S have / has. No, S haven't / hasn't."],
        ["Dấu hiệu", "ever, never, already, yet, just, recently, so far, for + khoảng thời gian, since + mốc thời gian"]
      ],
      "grammar": [
        ["Khi nào dùng", "Dùng hiện tại hoàn thành để nói về trải nghiệm (đã từng hay chưa từng), việc vừa mới xảy ra, và việc bắt đầu trong quá khứ còn kéo dài đến bây giờ.", "I have visited Hue twice. | She has just finished her homework. | We have lived here for five years."],
        ["For, since, already, yet", "For đi với khoảng thời gian (for two years). Since đi với mốc thời gian (since 2020). Already dùng trong câu khẳng định, yet dùng ở cuối câu phủ định và câu hỏi.", "I have known him since 2019. | They have been friends for ten years. | Have you finished yet?"]
      ],
      "quiz": [
        ["I have never ___ a horse.", "ridden", ["rode", "ride", "riding"], "Sau have là quá khứ phân từ: ride, rode, ridden."],
        ["She ___ lived in Da Nang since 2018.", "has", ["have", "is", "was"], "Chủ ngữ số ít dùng has + V3."],
        ["We have studied English ___ six years.", "for", ["since", "in", "ago"], "six years là khoảng thời gian, dùng for."],
        ["My father has worked here ___ 2015.", "since", ["for", "in", "ago"], "2015 là mốc thời gian, dùng since."],
        ["___ you ever been to Ha Long Bay?", "Have", ["Did", "Are", "Has"], "Hỏi về trải nghiệm: Have you ever + V3?"],
        ["They haven't finished the project ___.", "yet", ["already", "ever", "since"], "yet dùng ở cuối câu phủ định và câu hỏi."],
        ["Tom has ___ eaten his lunch, so he isn't hungry.", "already", ["yet", "ever", "since"], "already dùng trong câu khẳng định, đứng giữa has và V3."],
        ["I ___ my keys, so I can't open the door.", "have lost", ["lost have", "has lost", "have lose"], "Việc vừa xảy ra còn ảnh hưởng đến hiện tại; I đi với have + V3."]
      ],
      "sentences": [
        ["I have read this book three times.", "Tôi đã đọc quyển sách này ba lần."],
        ["She has never seen snow.", "Cô ấy chưa bao giờ nhìn thấy tuyết."],
        ["Have you done your homework yet?", "Bạn đã làm bài tập về nhà chưa?"],
        ["We have known each other since primary school.", "Chúng tôi quen nhau từ hồi tiểu học."],
        ["My brother has just bought a new laptop.", "Anh trai tôi vừa mua một chiếc máy tính xách tay mới."],
        ["They haven't visited their grandparents for a month.", "Đã một tháng nay họ không đến thăm ông bà."]
      ],
      "transform": [
        ["She visits the museum.", "Chuyển sang hiện tại hoàn thành", "She has visited the museum.", "Cô ấy đã đến thăm bảo tàng."],
        ["They have finished the test.", "Chuyển sang câu phủ định với yet", "They haven't finished the test yet.", "Họ vẫn chưa làm xong bài kiểm tra."],
        ["You have been to Japan.", "Chuyển sang câu hỏi với ever", "Have you ever been to Japan?", "Bạn đã từng đến Nhật Bản chưa?"],
        ["I started learning English three years ago.", "Viết lại bắt đầu bằng I have learned", "I have learned English for three years. | I have learnt English for three years.", "Tôi đã học tiếng Anh được ba năm."],
        ["He has lived here since 2020.", "Đặt câu hỏi với How long", "How long has he lived here?", "Cậu ấy đã sống ở đây bao lâu rồi?"]
      ],
      "extra": ["has", "have", "did", "since", "for"]
    },
    {
      "id": "ppvps", "group": 4, "grade": 9, "icon": "🧭",
      "title": "Hiện tại hoàn thành hay quá khứ đơn?", "en": "Present perfect or past simple?",
      "desc": "Có nêu thời gian cụ thể trong quá khứ hay không.",
      "formula": [
        ["Quá khứ đơn", "Việc đã kết thúc, có thời gian cụ thể: yesterday, last year, in 2019, ago, when I was young"],
        ["Hiện tại hoàn thành", "Không nói rõ thời gian, hoặc còn liên quan đến hiện tại: ever, never, already, yet, just, for, since"],
        ["Mẫu hay gặp", "S + have / has + V3 + since + S + V2 (quá khứ đơn)"]
      ],
      "grammar": [
        ["Có thời gian cụ thể hay không", "Nếu câu nêu rõ thời điểm trong quá khứ (yesterday, last week, in 2020, ago) thì dùng quá khứ đơn. Nếu chỉ nói đã từng, đã xong, hoặc kéo dài đến nay thì dùng hiện tại hoàn thành.", "I saw that film last week. | I have seen that film twice. | Have you seen it? Yes, I saw it on Monday."],
        ["Since với một mệnh đề", "Sau since có thể là một mệnh đề ở quá khứ đơn, còn mệnh đề chính dùng hiện tại hoàn thành.", "I have lived here since I was six. | She has changed a lot since she moved to Ha Noi."]
      ],
      "quiz": [
        ["We ___ to Nha Trang last summer.", "went", ["have gone", "have been", "go"], "last summer là thời gian cụ thể trong quá khứ, dùng quá khứ đơn."],
        ["I ___ this film three times so far.", "have seen", ["saw", "see", "am seeing"], "so far nghĩa là tính đến nay, dùng hiện tại hoàn thành."],
        ["She ___ her leg two weeks ago.", "broke", ["has broken", "breaks", "has broke"], "two weeks ago là thời gian cụ thể, dùng quá khứ đơn."],
        ["My parents ___ married for twenty years.", "have been", ["were", "are", "was"], "for twenty years kéo dài đến nay, dùng hiện tại hoàn thành."],
        ["When ___ you start learning the piano?", "did", ["have", "has", "do"], "Câu hỏi When về một thời điểm trong quá khứ dùng quá khứ đơn."],
        ["He has worked here since he ___ university.", "left", ["has left", "leaves", "leave"], "Sau since là mệnh đề ở quá khứ đơn."],
        ["___ you ever eaten durian?", "Have", ["Did", "Do", "Were"], "Hỏi trải nghiệm với ever dùng hiện tại hoàn thành."],
        ["I ___ my homework yet.", "haven't done", ["didn't do", "don't do", "wasn't do"], "yet đi với hiện tại hoàn thành."]
      ],
      "sentences": [
        ["I lost my phone yesterday.", "Hôm qua tôi làm mất điện thoại."],
        ["I have lost my phone, so I can't call you.", "Tôi làm mất điện thoại rồi nên không gọi cho bạn được."],
        ["She has been a teacher since 2015.", "Cô ấy làm giáo viên từ năm 2015."],
        ["Did you watch the match last night?", "Tối qua bạn có xem trận đấu không?"],
        ["We have never met him before.", "Trước đây chúng tôi chưa bao giờ gặp anh ấy."],
        ["He has changed a lot since he moved to the city.", "Anh ấy đã thay đổi nhiều kể từ khi chuyển lên thành phố."]
      ],
      "transform": [
        ["I have visited Hue.", "Thêm last year vào cuối câu", "I visited Hue last year.", "Năm ngoái tôi đã đến thăm Huế."],
        ["She bought a new bike last week.", "Bỏ last week và thêm just", "She has just bought a new bike.", "Cô ấy vừa mua một chiếc xe đạp mới."],
        ["They moved here in 2019.", "Viết lại bắt đầu bằng They have lived here", "They have lived here since 2019.", "Họ đã sống ở đây từ năm 2019."],
        ["I started working here five years ago.", "Viết lại bắt đầu bằng I have worked here", "I have worked here for five years.", "Tôi đã làm việc ở đây được năm năm."],
        ["We have finished the project.", "Thêm yesterday vào cuối câu", "We finished the project yesterday.", "Hôm qua chúng tôi đã hoàn thành dự án."]
      ],
      "extra": ["have", "has", "did", "since", "for"]
    },
    {
      "id": "pastc", "group": 4, "grade": 8, "icon": "🎬",
      "title": "Quá khứ tiếp diễn", "en": "Past continuous",
      "desc": "Việc đang diễn ra tại một thời điểm trong quá khứ; when và while.",
      "formula": [
        ["Khẳng định", "S + was / were + V-ing"],
        ["Phủ định", "S + wasn't / weren't + V-ing"],
        ["Câu hỏi", "Was / Were + S + V-ing …?"],
        ["Với when, while", "Việc đang diễn ra (quá khứ tiếp diễn) + when + việc xen vào (quá khứ đơn) · While + việc đang diễn ra, …"]
      ],
      "grammar": [
        ["Khi nào dùng", "Quá khứ tiếp diễn diễn tả việc đang diễn ra tại một thời điểm cụ thể trong quá khứ, hoặc hai việc cùng diễn ra song song.", "At eight o'clock last night, I was watching TV. | While my mother was cooking, my father was reading."],
        ["Việc đang diễn ra bị xen vào", "Việc dài, đang diễn ra dùng quá khứ tiếp diễn; việc ngắn xen vào dùng quá khứ đơn. When thường đứng trước việc ngắn, while đứng trước việc dài.", "I was walking home when it started to rain. | While we were playing football, the lights went out."]
      ],
      "quiz": [
        ["At seven o'clock last night, I ___ dinner.", "was having", ["had", "am having", "have had"], "Việc đang diễn ra tại một thời điểm trong quá khứ: was + V-ing."],
        ["They ___ football when it started to rain.", "were playing", ["was playing", "played", "are playing"], "Việc đang diễn ra thì bị xen vào; they đi với were."],
        ["She was reading a book when the phone ___.", "rang", ["was ringing", "rings", "ringed"], "Việc ngắn xen vào dùng quá khứ đơn: ring, rang, rung."],
        ["___ you were sleeping, someone knocked on the door.", "While", ["When", "During", "For"], "While đứng trước việc đang diễn ra (việc dài)."],
        ["What ___ you doing at nine o'clock yesterday morning?", "were", ["did", "was", "are"], "Câu hỏi quá khứ tiếp diễn với you: What were you doing?"],
        ["I ___ sleeping when you called me. I was studying.", "wasn't", ["weren't", "didn't", "am not"], "I đi với wasn't + V-ing."],
        ["My brother fell off his bike while he ___ to school.", "was cycling", ["cycled", "is cycling", "were cycling"], "Sau while là việc đang diễn ra: was + V-ing."],
        ["The children were playing ___ the teacher came in.", "when", ["while", "during", "since"], "When đứng trước việc ngắn xen vào."]
      ],
      "sentences": [
        ["I was doing my homework at nine o'clock last night.", "Lúc chín giờ tối qua tôi đang làm bài tập về nhà."],
        ["It was raining heavily when we left school.", "Trời đang mưa to khi chúng tôi tan học."],
        ["While Mai was cooking, her brother was cleaning the floor.", "Trong khi Mai nấu ăn thì anh trai bạn ấy lau nhà."],
        ["Were you sleeping when I called?", "Lúc tôi gọi bạn đang ngủ à?"],
        ["They weren't listening to the teacher.", "Họ đã không nghe cô giáo giảng."],
        ["What were you doing at this time yesterday?", "Giờ này hôm qua bạn đang làm gì?"]
      ],
      "transform": [
        ["They are playing chess now.", "Đổi now thành at that time", "They were playing chess at that time.", "Lúc đó họ đang chơi cờ."],
        ["She was sleeping.", "Chuyển sang câu phủ định", "She wasn't sleeping.", "Lúc đó cô ấy không ngủ."],
        ["You were waiting for the bus.", "Chuyển sang câu hỏi Yes/No", "Were you waiting for the bus?", "Lúc đó bạn đang đợi xe buýt à?"],
        ["I was walking home. I saw an accident.", "Nối hai câu bằng when", "I saw an accident when I was walking home. | I was walking home when I saw an accident.", "Tôi nhìn thấy một vụ tai nạn khi đang đi bộ về nhà."],
        ["Mum was cooking. Dad was reading.", "Nối hai câu bằng while", "While Mum was cooking, Dad was reading. | Mum was cooking while Dad was reading. | While Dad was reading, Mum was cooking. | Dad was reading while Mum was cooking.", "Trong khi mẹ nấu ăn thì bố đọc sách."]
      ],
      "extra": ["was", "were", "when", "while", "did"]
    },
    {
      "id": "pastp", "group": 4, "grade": 10, "icon": "⏮️",
      "title": "Quá khứ hoàn thành", "en": "Past perfect",
      "desc": "Việc xảy ra trước một việc khác trong quá khứ.",
      "formula": [
        ["Khẳng định", "S + had + V3"],
        ["Phủ định", "S + hadn't (had not) + V3"],
        ["Câu hỏi", "Had + S + V3 …?"],
        ["Với before, after, by the time", "Việc xảy ra trước dùng quá khứ hoàn thành, việc xảy ra sau dùng quá khứ đơn"]
      ],
      "grammar": [
        ["Việc nào xảy ra trước", "Khi kể hai việc trong quá khứ, việc xảy ra trước dùng had + V3, việc xảy ra sau dùng quá khứ đơn. Had giống nhau với mọi chủ ngữ.", "When we arrived, the film had started. | She had left before I called her."],
        ["After, before, by the time", "After + had + V3, S + V2. Before hoặc by the time + S + V2, S + had + V3.", "After he had finished his homework, he went to bed. | By the time we got to the station, the train had left."]
      ],
      "quiz": [
        ["When I got home, my family ___ dinner.", "had eaten", ["has eaten", "eats", "have eaten"], "Việc ăn tối xảy ra trước khi tôi về, dùng had + V3."],
        ["She ___ never seen the sea before she moved to Vung Tau.", "had", ["has", "have", "was"], "Trải nghiệm tính đến một thời điểm trong quá khứ dùng had + V3."],
        ["After they had finished the test, they ___ home.", "went", ["had gone", "go", "have gone"], "Việc xảy ra sau dùng quá khứ đơn."],
        ["By the time we arrived, the concert ___.", "had started", ["has started", "starts", "was start"], "By the time + quá khứ đơn, mệnh đề chính dùng quá khứ hoàn thành."],
        ["I couldn't open the door because I ___ my key.", "had lost", ["have lost", "lose", "was losing"], "Việc mất chìa khóa xảy ra trước việc không mở được cửa."],
        ["___ you finished your work before the teacher came?", "Had", ["Have", "Did", "Were"], "Câu hỏi quá khứ hoàn thành: Had + S + V3?"],
        ["He knew the story because he ___ the book.", "had read", ["has read", "reads", "was reading"], "Việc đọc sách xảy ra trước việc biết câu chuyện."],
        ["The train had left ___ we got to the station.", "before", ["after", "since", "while"], "Tàu chạy trước, chúng tôi đến ga sau."]
      ],
      "sentences": [
        ["The film had already started when we arrived.", "Phim đã bắt đầu khi chúng tôi đến."],
        ["She had never flown before that trip.", "Trước chuyến đi đó cô ấy chưa từng đi máy bay."],
        ["After I had done my homework, I watched TV.", "Sau khi làm xong bài tập, tôi xem ti vi."],
        ["By the time he woke up, everyone had left.", "Đến lúc anh ấy thức dậy thì mọi người đã đi hết."],
        ["They hadn't eaten anything before the match.", "Trước trận đấu họ chưa ăn gì."],
        ["Had you met her before the party?", "Trước bữa tiệc bạn đã gặp cô ấy chưa?"]
      ],
      "transform": [
        ["She finished her homework. Then she went out.", "Nối hai câu bằng after", "After she had finished her homework, she went out. | She went out after she had finished her homework.", "Sau khi làm xong bài tập, cô ấy đi ra ngoài."],
        ["The bus left. Then we arrived at the stop.", "Nối hai câu bằng before", "The bus had left before we arrived at the stop. | Before we arrived at the stop, the bus had left.", "Xe buýt đã chạy trước khi chúng tôi đến trạm."],
        ["He had seen the film.", "Chuyển sang câu phủ định", "He hadn't seen the film.", "Anh ấy chưa xem bộ phim đó."],
        ["They had finished the project.", "Chuyển sang câu hỏi Yes/No", "Had they finished the project?", "Họ đã hoàn thành dự án chưa?"],
        ["I lost my ticket, so I couldn't get on the train.", "Viết lại bắt đầu bằng I couldn't get on the train", "I couldn't get on the train because I had lost my ticket.", "Tôi không lên được tàu vì đã làm mất vé."]
      ],
      "extra": ["had", "has", "have", "did", "was"]
    },
    {
      "id": "usedto", "group": 4, "grade": 9, "icon": "📷",
      "title": "Used to", "en": "Used to",
      "desc": "Thói quen hoặc trạng thái trong quá khứ, nay không còn.",
      "formula": [
        ["Khẳng định", "S + used to + V (nguyên mẫu)"],
        ["Phủ định", "S + didn't use to + V"],
        ["Câu hỏi", "Did + S + use to + V …?"]
      ],
      "grammar": [
        ["Nghĩa của used to", "Used to diễn tả thói quen hoặc trạng thái trong quá khứ mà bây giờ không còn nữa. Dùng giống nhau cho mọi chủ ngữ.", "I used to play marbles when I was small. | There used to be a cinema here. | She used to have long hair."],
        ["Phủ định và câu hỏi", "Khi đã có did hoặc didn't thì bỏ chữ d: didn't use to, Did you use to …?", "We didn't use to have a computer. | Did you use to walk to school?"]
      ],
      "quiz": [
        ["When I was a child, I ___ climb trees.", "used to", ["use to", "am used to", "was use to"], "Thói quen trong quá khứ: used to + V."],
        ["There ___ to be a big tree in front of my house.", "used", ["use", "uses", "using"], "There used to be nghĩa là trước đây từng có."],
        ["My grandfather used to ___ a farmer.", "be", ["being", "been", "is"], "Sau used to là động từ nguyên mẫu."],
        ["She didn't ___ to like vegetables.", "use", ["used", "uses", "using"], "Sau didn't dùng use to (bỏ d)."],
        ["___ you use to live in the countryside?", "Did", ["Do", "Were", "Have"], "Câu hỏi: Did + S + use to + V?"],
        ["We used to ___ kites in the field.", "fly", ["flying", "flew", "flies"], "used to + động từ nguyên mẫu."],
        ["I ___ to be afraid of the dark, but now I'm not.", "used", ["use", "am used", "was"], "Trạng thái trong quá khứ nay không còn: used to."],
        ["People ___ use to have mobile phones fifty years ago.", "didn't", ["don't", "weren't", "hadn't"], "Phủ định: didn't use to + V."]
      ],
      "sentences": [
        ["I used to go fishing with my father.", "Tôi từng đi câu cá với bố."],
        ["This street used to be very quiet.", "Con phố này trước đây rất yên tĩnh."],
        ["She didn't use to wear glasses.", "Trước đây cô ấy không đeo kính."],
        ["Did you use to play hide and seek?", "Hồi trước bạn có hay chơi trốn tìm không?"],
        ["People used to cook on wood stoves.", "Ngày xưa người ta nấu ăn bằng bếp củi."],
        ["My brother used to be very shy.", "Anh trai tôi trước đây rất nhút nhát."]
      ],
      "transform": [
        ["I played football every afternoon when I was young.", "Viết lại với used to", "I used to play football every afternoon when I was young.", "Hồi nhỏ chiều nào tôi cũng đá bóng."],
        ["She used to have short hair.", "Chuyển sang câu phủ định", "She didn't use to have short hair.", "Trước đây cô ấy không để tóc ngắn."],
        ["They used to live in Hue.", "Chuyển sang câu hỏi Yes/No", "Did they use to live in Hue?", "Trước đây họ có sống ở Huế không?"],
        ["There was a market here, but it is gone now.", "Viết lại với There used to be", "There used to be a market here.", "Trước đây ở đây từng có một cái chợ."],
        ["He was shy, but now he is confident.", "Viết lại với used to", "He used to be shy.", "Trước đây cậu ấy từng nhút nhát."]
      ],
      "extra": ["use", "used", "did", "was", "be"]
    },
    {
      "id": "compare", "group": 5, "grade": 6, "icon": "📏",
      "title": "So sánh hơn và so sánh nhất", "en": "Comparatives and superlatives",
      "desc": "So sánh người, vật với nhau.",
      "formula": [
        ["Tính từ ngắn", "So sánh hơn: adj-er + than · So sánh nhất: the + adj-est"],
        ["Tính từ dài", "So sánh hơn: more + adj + than · So sánh nhất: the most + adj"],
        ["Bất quy tắc", "good → better → the best · bad → worse → the worst · far → farther → the farthest"]
      ],
      "grammar": [
        ["Tính từ ngắn và dài", "Tính từ một âm tiết thêm -er, -est. Tận cùng bằng y thì đổi thành ier, iest (happy, happier). Một nguyên âm và một phụ âm ở cuối thì gấp đôi phụ âm (big, bigger). Tính từ dài dùng more, the most.", "Ha Noi is bigger than Hue. | This is the happiest day of my life. | Maths is more difficult than English."],
        ["So sánh nhất", "So sánh nhất có the đứng trước tính từ, thường kèm in hoặc of để chỉ phạm vi so sánh.", "She is the tallest girl in my class. | It is the most beautiful beach in Viet Nam."]
      ],
      "quiz": [
        ["An elephant is ___ than a horse.", "bigger", ["biger", "more big", "biggest"], "big có một nguyên âm và một phụ âm cuối nên gấp đôi g rồi thêm -er."],
        ["This book is ___ interesting than that one.", "more", ["most", "much", "the more"], "interesting là tính từ dài: more + adj + than."],
        ["Mount Everest is ___ mountain in the world.", "the highest", ["higher", "the higher", "highest"], "So sánh nhất: the + adj-est."],
        ["My handwriting is ___ than yours.", "worse", ["badder", "more bad", "worst"], "bad là tính từ bất quy tắc: worse."],
        ["Lan is the ___ student in our class.", "best", ["better", "goodest", "most good"], "good là tính từ bất quy tắc: the best."],
        ["Today is ___ than yesterday.", "hotter", ["hoter", "more hot", "hottest"], "hot gấp đôi t rồi thêm -er."],
        ["She is the most ___ singer in the country.", "famous", ["famouser", "famousest", "more famous"], "Tính từ dài: the most + adj."],
        ["The weather in Da Lat is ___ than in Ho Chi Minh City.", "cooler", ["more cool", "coolest", "cool"], "cool là tính từ ngắn: cooler."]
      ],
      "sentences": [
        ["My sister is taller than me.", "Chị tôi cao hơn tôi."],
        ["This is the easiest exercise in the book.", "Đây là bài tập dễ nhất trong sách."],
        ["Cars are faster than bicycles.", "Ô tô nhanh hơn xe đạp."],
        ["English is more interesting than I thought.", "Tiếng Anh thú vị hơn tôi nghĩ."],
        ["He is the best player in our team.", "Cậu ấy là cầu thủ giỏi nhất đội chúng tôi."],
        ["Which city is the most crowded in Viet Nam?", "Thành phố nào đông đúc nhất Việt Nam?"]
      ],
      "transform": [
        ["My bag is heavy. Your bag is heavier.", "Viết lại bắt đầu bằng Your bag is", "Your bag is heavier than my bag. | Your bag is heavier than mine.", "Cặp của bạn nặng hơn cặp của tôi."],
        ["Nam is shorter than Minh.", "Viết lại với taller", "Minh is taller than Nam.", "Minh cao hơn Nam."],
        ["No river in Viet Nam is longer than the Mekong.", "Viết lại với the longest", "The Mekong is the longest river in Viet Nam.", "Sông Mê Kông là con sông dài nhất Việt Nam."],
        ["This test is easy. That test is more difficult.", "Viết lại bắt đầu bằng That test is", "That test is more difficult than this test. | That test is more difficult than this one.", "Bài kiểm tra kia khó hơn bài này."],
        ["No one in my class is taller than Tom.", "Viết lại với the tallest", "Tom is the tallest in my class. | Tom is the tallest student in my class. | Tom is the tallest person in my class.", "Tom cao nhất lớp tôi."]
      ],
      "extra": ["more", "most", "than", "the", "as"]
    },
    {
      "id": "passive", "group": 5, "grade": 9, "icon": "🔃",
      "title": "Câu bị động", "en": "The passive voice",
      "desc": "Nhấn mạnh việc được làm hơn là người làm.",
      "formula": [
        ["Hiện tại đơn", "S + am / is / are + V3 (+ by O)"],
        ["Quá khứ đơn", "S + was / were + V3 (+ by O)"],
        ["Với động từ khuyết thiếu", "S + can / will / must / should + be + V3"],
        ["Cách chuyển", "Tân ngữ của câu chủ động thành chủ ngữ; động từ thành be + V3; chủ ngữ cũ thành by + O (có thể bỏ)"]
      ],
      "grammar": [
        ["Khi nào dùng", "Dùng câu bị động khi người làm không quan trọng, không rõ là ai, hoặc khi muốn nhấn mạnh đối tượng chịu tác động.", "English is spoken all over the world. | My bike was stolen yesterday. | This house was built in 1990."],
        ["By + người làm", "Chỉ thêm by + người làm khi thông tin đó cần thiết. Thường bỏ by people, by someone, by them.", "The Mona Lisa was painted by Leonardo da Vinci. | The windows are cleaned every week."]
      ],
      "quiz": [
        ["Rice ___ in many Asian countries.", "is grown", ["grows", "is grew", "are grown"], "Bị động hiện tại đơn: is + V3; rice là danh từ không đếm được."],
        ["This bridge ___ in 2010.", "was built", ["built", "is built", "was build"], "Bị động quá khứ đơn: was + V3."],
        ["The letters ___ by the postman every morning.", "are delivered", ["is delivered", "deliver", "were deliver"], "Chủ ngữ số nhiều, hiện tại đơn: are + V3."],
        ["My phone was ___ yesterday.", "stolen", ["stole", "steal", "stealing"], "Sau was dùng quá khứ phân từ: steal, stole, stolen."],
        ["The homework must ___ before Friday.", "be finished", ["finished", "finish", "being finished"], "Bị động với động từ khuyết thiếu: must be + V3."],
        ["These photos were taken ___ my uncle.", "by", ["from", "with", "of"], "Người thực hiện hành động đứng sau by."],
        ["Harry Potter ___ by J K Rowling.", "was written", ["wrote", "was wrote", "is writing"], "Bị động quá khứ đơn: was + V3; write, wrote, written."],
        ["Plastic bags ___ be recycled.", "can", ["are", "were", "have"], "Bị động với can: can be + V3."]
      ],
      "sentences": [
        ["Vietnamese is spoken in Viet Nam.", "Tiếng Việt được nói ở Việt Nam."],
        ["The window was broken by the wind.", "Cửa sổ bị gió làm vỡ."],
        ["Our classroom is cleaned every day.", "Lớp học của chúng tôi được dọn mỗi ngày."],
        ["The new library was opened last month.", "Thư viện mới được khai trương tháng trước."],
        ["Many trees were planted in the park.", "Nhiều cây đã được trồng trong công viên."],
        ["Mobile phones must be turned off in the exam room.", "Điện thoại di động phải được tắt trong phòng thi."]
      ],
      "transform": [
        ["People speak English in many countries.", "Chuyển sang câu bị động", "English is spoken in many countries.", "Tiếng Anh được nói ở nhiều nước."],
        ["Tom broke the vase.", "Chuyển sang câu bị động", "The vase was broken by Tom.", "Cái bình bị Tom làm vỡ."],
        ["They built this school in 1995.", "Chuyển sang câu bị động", "This school was built in 1995.", "Ngôi trường này được xây năm 1995."],
        ["The students clean the classroom every day.", "Chuyển sang câu bị động", "The classroom is cleaned by the students every day. | The classroom is cleaned every day by the students. | The classroom is cleaned every day.", "Lớp học được học sinh dọn mỗi ngày."],
        ["We must protect the environment.", "Chuyển sang câu bị động", "The environment must be protected. | The environment must be protected by us.", "Môi trường phải được bảo vệ."]
      ],
      "extra": ["is", "was", "were", "by", "be"]
    },
    {
      "id": "cond1", "group": 5, "grade": 8, "icon": "🌦️",
      "title": "Câu điều kiện loại 1", "en": "First conditional",
      "desc": "Điều kiện có thể xảy ra ở hiện tại hoặc tương lai.",
      "formula": [
        ["Cấu trúc", "If + S + V (hiện tại đơn), S + will / won't + V"],
        ["Đảo vế", "S + will + V + if + S + V (không cần dấu phẩy)"],
        ["Unless", "Unless = if … not: Unless you hurry, you will be late."]
      ],
      "grammar": [
        ["Cách dùng", "Câu điều kiện loại 1 nói về điều có thể xảy ra ở hiện tại hoặc tương lai và kết quả của nó. Mệnh đề if dùng hiện tại đơn, không dùng will.", "If it rains, we will stay at home. | If you study hard, you will pass the exam."],
        ["Unless và động từ khuyết thiếu", "Unless nghĩa là nếu không. Mệnh đề chính có thể dùng can, may, must, should thay cho will.", "Unless you hurry, you will miss the bus. | If you finish early, you can go home."]
      ],
      "quiz": [
        ["If it ___ sunny tomorrow, we will go to the beach.", "is", ["will be", "was", "be"], "Mệnh đề if dùng hiện tại đơn."],
        ["If you drop that glass, it ___.", "will break", ["broke", "would break", "breaking"], "Kết quả có thể xảy ra: will + V."],
        ["If she ___ hard, she will pass the exam.", "studies", ["will study", "study", "studied"], "Mệnh đề if dùng hiện tại đơn; she đi với studies."],
        ["We won't go out if it ___.", "rains", ["will rain", "rained", "rain"], "Mệnh đề if dùng hiện tại đơn."],
        ["___ you hurry, you will be late.", "Unless", ["If", "When", "Because"], "Unless = if not: nếu bạn không nhanh lên thì sẽ muộn."],
        ["If you don't water the plants, they ___ die.", "will", ["would", "are", "did"], "Kết quả: will + V."],
        ["If I see Mai, I ___ her the news.", "will tell", ["tell", "told", "would tell"], "Câu điều kiện loại 1: will + V."],
        ["If you are tired, you ___ go to bed early.", "should", ["would", "had", "did"], "Mệnh đề chính có thể dùng should để khuyên."]
      ],
      "sentences": [
        ["If it rains, I will take an umbrella.", "Nếu trời mưa, tôi sẽ mang ô."],
        ["If you need help, I will help you.", "Nếu bạn cần giúp, tôi sẽ giúp bạn."],
        ["We will miss the train if we don't hurry.", "Chúng ta sẽ lỡ tàu nếu không nhanh lên."],
        ["Unless you practise, you won't improve.", "Nếu không luyện tập, bạn sẽ không tiến bộ."],
        ["If we plant more trees, the air will be cleaner.", "Nếu chúng ta trồng thêm cây, không khí sẽ sạch hơn."],
        ["What will you do if it snows?", "Bạn sẽ làm gì nếu trời có tuyết?"]
      ],
      "transform": [
        ["Study hard, or you will fail the test.", "Viết lại với If", "If you don't study hard, you will fail the test. | You will fail the test if you don't study hard.", "Nếu bạn không học chăm, bạn sẽ trượt bài kiểm tra."],
        ["It may rain. Then we will stay at home.", "Nối hai câu bằng If", "If it rains, we will stay at home. | We will stay at home if it rains.", "Nếu trời mưa, chúng tôi sẽ ở nhà."],
        ["If you don't hurry, you will miss the bus.", "Viết lại với Unless", "Unless you hurry, you will miss the bus. | You will miss the bus unless you hurry.", "Nếu bạn không nhanh lên, bạn sẽ lỡ xe buýt."],
        ["If she will come, we will be happy.", "Sửa lỗi sai trong câu", "If she comes, we will be happy. | We will be happy if she comes.", "Nếu cô ấy đến, chúng tôi sẽ vui."],
        ["Eat less sugar and you will be healthier.", "Viết lại với If", "If you eat less sugar, you will be healthier. | You will be healthier if you eat less sugar.", "Nếu bạn ăn ít đường hơn, bạn sẽ khỏe hơn."]
      ],
      "extra": ["will", "would", "if", "unless", "don't"]
    },
    {
      "id": "cond2", "group": 5, "grade": 9, "icon": "💭",
      "title": "Câu điều kiện loại 2", "en": "Second conditional",
      "desc": "Điều không có thật hoặc khó xảy ra ở hiện tại.",
      "formula": [
        ["Cấu trúc", "If + S + V2 (quá khứ đơn), S + would / wouldn't + V"],
        ["Với to be", "If + I / he / she / it / you … + were …"],
        ["Lời khuyên", "If I were you, I would + V …"]
      ],
      "grammar": [
        ["Cách dùng", "Câu điều kiện loại 2 nói về điều không có thật ở hiện tại hoặc khó xảy ra, và kết quả tưởng tượng. Động từ ở dạng quá khứ nhưng câu vẫn nói về hiện tại.", "If I had wings, I would fly. | If we lived near the sea, we would swim every day."],
        ["Were cho mọi chủ ngữ", "Với to be, dùng were cho mọi chủ ngữ. Mẫu If I were you dùng để đưa ra lời khuyên. Mệnh đề chính có thể dùng could thay cho would.", "If I were rich, I would travel around the world. | If I were you, I would see a doctor."]
      ],
      "quiz": [
        ["If I ___ a lot of money, I would buy a big house.", "had", ["have", "will have", "would have"], "Mệnh đề if của loại 2 dùng quá khứ đơn."],
        ["If she knew the answer, she ___ tell us.", "would", ["will", "can", "does"], "Mệnh đề chính của loại 2: would + V."],
        ["If I ___ you, I would study harder.", "were", ["am", "was being", "be"], "Lời khuyên: If I were you."],
        ["What would you do if you ___ a ghost?", "saw", ["see", "will see", "seen"], "Mệnh đề if dùng quá khứ đơn."],
        ["If he ___ taller, he could play basketball.", "were", ["is", "will be", "be"], "Với to be dùng were cho mọi chủ ngữ."],
        ["If we didn't have homework, we ___ go to the cinema.", "could", ["can", "will", "are"], "Mệnh đề chính có thể dùng could + V."],
        ["If I lived in Japan, I ___ learn Japanese.", "would", ["will", "am", "did"], "Kết quả tưởng tượng: would + V."],
        ["People ___ be healthier if they ate more vegetables.", "would", ["will", "are", "did"], "Mệnh đề chính: would + V."]
      ],
      "sentences": [
        ["If I were a bird, I would fly home.", "Nếu tôi là chim, tôi sẽ bay về nhà."],
        ["If he had more time, he would learn the guitar.", "Nếu anh ấy có nhiều thời gian hơn, anh ấy sẽ học đàn ghi-ta."],
        ["What would you do if you won the lottery?", "Bạn sẽ làm gì nếu trúng xổ số?"],
        ["If I were you, I wouldn't go out tonight.", "Nếu tôi là bạn, tôi sẽ không ra ngoài tối nay."],
        ["We would go swimming if the weather were warmer.", "Chúng tôi sẽ đi bơi nếu trời ấm hơn."],
        ["If she lived closer, we could meet more often.", "Nếu cô ấy sống gần hơn, chúng tôi có thể gặp nhau thường xuyên hơn."]
      ],
      "transform": [
        ["I don't have a car, so I can't drive you home.", "Viết lại với If", "If I had a car, I could drive you home. | If I had a car, I would drive you home.", "Nếu tôi có ô tô, tôi có thể chở bạn về nhà."],
        ["He isn't tall enough, so he can't reach the shelf.", "Viết lại với If", "If he were taller, he could reach the shelf. | If he was taller, he could reach the shelf. | If he were tall enough, he could reach the shelf.", "Nếu anh ấy cao hơn, anh ấy có thể với tới cái kệ."],
        ["She doesn't know his number, so she can't call him.", "Viết lại với If", "If she knew his number, she could call him. | If she knew his number, she would call him.", "Nếu cô ấy biết số của anh ấy, cô ấy có thể gọi cho anh ấy."],
        ["You should see a doctor.", "Viết lại với If I were you", "If I were you, I would see a doctor.", "Nếu tôi là bạn, tôi sẽ đi khám bác sĩ."],
        ["If I have wings, I will fly to the moon.", "Sửa lỗi sai (đây là điều không có thật)", "If I had wings, I would fly to the moon.", "Nếu tôi có cánh, tôi sẽ bay lên mặt trăng."]
      ],
      "extra": ["would", "will", "were", "was", "had"]
    },
    {
      "id": "reported", "group": 5, "grade": 9, "icon": "🗣️",
      "title": "Câu tường thuật", "en": "Reported speech",
      "desc": "Thuật lại lời người khác đã nói hoặc đã hỏi.",
      "formula": [
        ["Câu kể", "S + said (that) + S + V (lùi một thì)"],
        ["Lùi thì", "am / is → was · are → were · V hiện tại → V2 · will → would · can → could"],
        ["Đổi trạng từ", "now → then · today → that day · tomorrow → the next day · here → there"],
        ["Câu hỏi Yes/No", "S + asked + (O) + if / whether + S + V (lùi thì)"],
        ["Câu hỏi Wh-", "S + asked + (O) + Wh- + S + V (lùi thì, không đảo trợ động từ)"]
      ],
      "grammar": [
        ["Lùi thì và đổi đại từ", "Khi động từ tường thuật ở quá khứ (said, asked), động từ trong lời nói lùi một thì. Đại từ và tính từ sở hữu đổi theo người nói: I thành he hoặc she, my thành his hoặc her.", "Tom said that he was hungry. | Mai said she could swim. | He said that he would call me."],
        ["Tường thuật câu hỏi", "Câu hỏi được viết lại như câu kể: không đảo trợ động từ, không có dấu chấm hỏi. Câu hỏi Yes/No dùng if hoặc whether.", "She asked me if I liked music. | He asked me where I lived."]
      ],
      "quiz": [
        ["She said that she ___ tired.", "was", ["is", "are", "were"], "Lùi thì: is thành was."],
        ["Tom said he ___ play the piano.", "could", ["can", "will", "may be"], "Lùi thì: can thành could."],
        ["They said that they ___ visit us the next day.", "would", ["will", "can", "shall"], "Lùi thì: will thành would."],
        ["He asked me ___ I liked durian.", "if", ["that", "what", "do"], "Câu hỏi Yes/No khi tường thuật dùng if hoặc whether."],
        ["She asked me where I ___.", "lived", ["live", "did live", "do live"], "Câu hỏi Wh- khi tường thuật không đảo trợ động từ và lùi thì."],
        ["\"I love this song,\" said Mai. Mai said that she ___ that song.", "loved", ["loves", "love", "is loving"], "Lùi thì: love thành loved; I thành she."],
        ["The teacher asked us what we ___ doing.", "were", ["are", "was", "did"], "Lùi thì: are thành were; we đi với were."],
        ["\"I will come tomorrow,\" he said. He said he would come ___.", "the next day", ["tomorrow", "yesterday", "today"], "Khi tường thuật, tomorrow đổi thành the next day."]
      ],
      "sentences": [
        ["She said that she was busy.", "Cô ấy nói rằng cô ấy bận."],
        ["He told me that he lived in Da Nang.", "Anh ấy bảo tôi rằng anh ấy sống ở Đà Nẵng."],
        ["My friend asked me if I could help her.", "Bạn tôi hỏi liệu tôi có thể giúp cô ấy không."],
        ["The teacher asked us why we were late.", "Cô giáo hỏi chúng tôi tại sao lại đến muộn."],
        ["They said they would come to the party.", "Họ nói rằng họ sẽ đến bữa tiệc."],
        ["Nam asked me where I had bought my shoes.", "Nam hỏi tôi đã mua giày ở đâu."]
      ],
      "transform": [
        ["Lan said, \"I am hungry.\"", "Chuyển sang câu tường thuật", "Lan said that she was hungry. | Lan said she was hungry.", "Lan nói rằng bạn ấy đói."],
        ["Tom said, \"I can speak French.\"", "Chuyển sang câu tường thuật", "Tom said that he could speak French. | Tom said he could speak French.", "Tom nói rằng cậu ấy nói được tiếng Pháp."],
        ["They said, \"We will win the match.\"", "Chuyển sang câu tường thuật", "They said that they would win the match. | They said they would win the match.", "Họ nói rằng họ sẽ thắng trận đấu."],
        ["He asked me, \"Do you like football?\"", "Chuyển sang câu tường thuật", "He asked me if I liked football. | He asked me whether I liked football.", "Anh ấy hỏi tôi có thích bóng đá không."],
        ["The teacher asked me, \"Where do you live?\"", "Chuyển sang câu tường thuật", "The teacher asked me where I lived.", "Cô giáo hỏi tôi sống ở đâu."]
      ],
      "extra": ["is", "was", "can", "will", "do"]
    },
    {
      "id": "relative", "group": 5, "grade": 9, "icon": "🔗",
      "title": "Mệnh đề quan hệ", "en": "Relative clauses",
      "desc": "Nối câu bằng who, which, that, whose, where.",
      "formula": [
        ["who", "thay cho người"],
        ["which", "thay cho vật, con vật"],
        ["that", "thay cho cả người và vật (trong mệnh đề xác định)"],
        ["whose", "chỉ sở hữu: whose + danh từ"],
        ["where", "chỉ nơi chốn"]
      ],
      "grammar": [
        ["Nối hai câu", "Đại từ quan hệ thay cho danh từ đã nhắc ở câu trước và đứng ngay sau danh từ đó. Khi đại từ quan hệ làm tân ngữ, có thể lược bỏ.", "The girl who is singing is my cousin. | I have a dog which can swim. | The book that I bought is interesting."],
        ["Whose và where", "Whose đứng trước danh từ để chỉ sở hữu. Where dùng sau danh từ chỉ nơi chốn.", "I know a boy whose father is a pilot. | This is the house where I was born."]
      ],
      "quiz": [
        ["The man ___ lives next door is a doctor.", "who", ["which", "whose", "where"], "Thay cho người dùng who."],
        ["This is the book ___ I told you about.", "which", ["who", "whose", "where"], "Thay cho vật dùng which (hoặc that)."],
        ["I have a friend ___ mother is a singer.", "whose", ["who", "which", "where"], "Chỉ sở hữu: whose + danh từ."],
        ["Da Lat is the city ___ I was born.", "where", ["which", "who", "whose"], "Sau danh từ chỉ nơi chốn, nối mệnh đề bằng where."],
        ["The cake ___ my mother made was delicious.", "that", ["who", "whose", "where"], "that thay cho vật trong mệnh đề xác định."],
        ["Do you know the girl ___ is talking to Nam?", "who", ["which", "whose", "where"], "Thay cho người làm chủ ngữ: who."],
        ["The bike ___ I bought last week is red.", "which", ["who", "whose", "where"], "Thay cho vật: which."],
        ["He is the singer ___ songs are famous all over Asia.", "whose", ["who", "which", "that"], "whose songs nghĩa là những bài hát của ca sĩ đó."]
      ],
      "sentences": [
        ["The boy who is wearing a red hat is my brother.", "Cậu bé đội mũ đỏ là em trai tôi."],
        ["I like films which have happy endings.", "Tôi thích những bộ phim có kết thúc có hậu."],
        ["This is the school where my mother used to teach.", "Đây là ngôi trường nơi mẹ tôi từng dạy."],
        ["I met a girl whose brother plays for the national team.", "Tôi gặp một cô gái có anh trai chơi cho đội tuyển quốc gia."],
        ["The phone that I bought yesterday doesn't work.", "Chiếc điện thoại tôi mua hôm qua không hoạt động."],
        ["Do you know the woman who is standing at the gate?", "Bạn có biết người phụ nữ đang đứng ở cổng không?"]
      ],
      "transform": [
        ["The girl is my cousin. She is singing.", "Nối hai câu bằng who", "The girl who is singing is my cousin. | The girl that is singing is my cousin.", "Cô gái đang hát là em họ tôi."],
        ["I have a cat. It is very lazy.", "Nối hai câu bằng which", "I have a cat which is very lazy. | I have a cat that is very lazy.", "Tôi có một con mèo rất lười."],
        ["I know a man. His son is a pilot.", "Nối hai câu bằng whose", "I know a man whose son is a pilot.", "Tôi biết một người đàn ông có con trai là phi công."],
        ["This is the village. My grandparents live there.", "Nối hai câu bằng where", "This is the village where my grandparents live.", "Đây là ngôi làng nơi ông bà tôi sống."],
        ["The book is on the table. I bought it yesterday.", "Nối hai câu bằng which", "The book which I bought yesterday is on the table. | The book that I bought yesterday is on the table. | The book I bought yesterday is on the table.", "Quyển sách tôi mua hôm qua ở trên bàn."]
      ],
      "extra": ["who", "which", "whose", "where", "it"]
    },
    {
      "id": "wish", "group": 5, "grade": 9, "icon": "🌠",
      "title": "Câu ước với wish", "en": "Wishes with wish",
      "desc": "Ước điều trái với thực tế ở hiện tại.",
      "formula": [
        ["Ước ở hiện tại", "S + wish(es) + S + V2 (quá khứ đơn)"],
        ["Với to be", "S + wish(es) + S + were …"],
        ["Với could", "S + wish(es) + S + could + V"]
      ],
      "grammar": [
        ["Cách dùng", "Wish dùng để ước điều trái với thực tế ở hiện tại. Động từ sau wish lùi về quá khứ đơn.", "I wish I had a bike. | She wishes she lived near the beach. | I wish it were sunny today."],
        ["Were và could", "Với to be dùng were cho mọi chủ ngữ. Muốn ước mình làm được việc gì thì dùng could + V.", "I wish I were taller. | He wishes he could speak English fluently."]
      ],
      "quiz": [
        ["I wish I ___ a pet dog.", "had", ["have", "will have", "having"], "Sau wish dùng quá khứ đơn."],
        ["She wishes she ___ taller.", "were", ["is", "be", "will be"], "Với to be, sau wish dùng were."],
        ["I wish I ___ swim. All my friends can swim.", "could", ["can", "will", "am"], "Ước làm được việc gì: could + V."],
        ["My brother ___ he lived in a big city.", "wishes", ["wish", "wished to", "is wishing"], "Chủ ngữ số ít dùng wishes."],
        ["We wish we ___ have so much homework.", "didn't", ["don't", "won't", "aren't"], "Phủ định sau wish: didn't + V."],
        ["I wish it ___ raining now.", "weren't", ["isn't", "doesn't", "won't"], "Trời đang mưa, ước trời không mưa: I wish it weren't raining."],
        ["They wish they ___ more free time.", "had", ["have", "has", "having"], "Sau wish dùng quá khứ đơn: had."],
        ["I don't know the answer. I wish I ___ it.", "knew", ["know", "knowed", "will know"], "know chuyển sang quá khứ là knew."]
      ],
      "sentences": [
        ["I wish I had more time.", "Ước gì tôi có nhiều thời gian hơn."],
        ["She wishes she could play the piano.", "Cô ấy ước mình chơi được đàn piano."],
        ["I wish today were Sunday.", "Ước gì hôm nay là Chủ nhật."],
        ["We wish we didn't live so far from school.", "Chúng tôi ước mình không sống xa trường như vậy."],
        ["He wishes he knew the answer.", "Cậu ấy ước mình biết câu trả lời."],
        ["Do you wish you were a superhero?", "Bạn có ước mình là siêu anh hùng không?"]
      ],
      "transform": [
        ["I don't have a computer.", "Viết lại với I wish", "I wish I had a computer.", "Ước gì tôi có một chiếc máy tính."],
        ["I am not tall.", "Viết lại với I wish", "I wish I were tall. | I wish I was tall. | I wish I were taller. | I wish I was taller.", "Ước gì tôi cao."],
        ["She can't speak Chinese.", "Viết lại với She wishes", "She wishes she could speak Chinese.", "Cô ấy ước mình nói được tiếng Trung."],
        ["It is cold today.", "Viết lại với I wish", "I wish it weren't cold today. | I wish it wasn't cold today. | I wish it were warm today. | I wish it was warm today.", "Ước gì hôm nay trời không lạnh."],
        ["We have a lot of homework.", "Viết lại với We wish", "We wish we didn't have a lot of homework. | We wish we didn't have so much homework. | We wish we had less homework.", "Chúng tôi ước mình không có nhiều bài tập về nhà."]
      ],
      "extra": ["wish", "wishes", "have", "am", "can"]
    },
    {
      "id": "gerund", "group": 5, "grade": 8, "icon": "🧩",
      "title": "V-ing hay to V?", "en": "Verb + V-ing or to V",
      "desc": "Động từ nào đi với V-ing, động từ nào đi với to V.",
      "formula": [
        ["Động từ + V-ing", "enjoy, finish, mind, avoid, practise, keep, dislike, suggest"],
        ["Động từ + to V", "want, decide, hope, plan, agree, need, learn, promise"],
        ["Cả hai, nghĩa gần như nhau", "like, love, hate, start, begin"],
        ["Sau giới từ", "Luôn dùng V-ing: interested in reading, good at swimming"]
      ],
      "grammar": [
        ["V-ing hay to V", "Một số động từ chỉ đi với V-ing, một số chỉ đi với to V. Cách tốt nhất là học thuộc theo nhóm.", "I enjoy reading comics. | She decided to learn Japanese. | They finished painting the house."],
        ["Sau giới từ dùng V-ing", "Sau các giới từ như in, at, of, about, for, without thì động từ luôn ở dạng V-ing.", "He is good at drawing. | Thank you for helping me. | She left without saying goodbye."]
      ],
      "quiz": [
        ["I enjoy ___ to music in my free time.", "listening", ["to listen", "listen", "listened"], "enjoy + V-ing."],
        ["She wants ___ a doctor in the future.", "to become", ["becoming", "become", "became"], "want + to V."],
        ["We have finished ___ the classroom.", "cleaning", ["to clean", "clean", "cleaned"], "finish + V-ing."],
        ["My parents decided ___ a new house.", "to buy", ["buying", "buy", "bought"], "decide + to V."],
        ["Would you mind ___ the window?", "opening", ["to open", "open", "opened"], "mind + V-ing."],
        ["He is interested ___ collecting stamps.", "in", ["on", "at", "for"], "interested in + V-ing."],
        ["They hope ___ the competition.", "to win", ["winning", "win", "won"], "hope + to V."],
        ["She is good at ___ pictures.", "drawing", ["draw", "to draw", "drew"], "Sau giới từ at dùng V-ing."]
      ],
      "sentences": [
        ["I love playing badminton with my friends.", "Tôi thích chơi cầu lông với bạn bè."],
        ["He decided to join the English club.", "Cậu ấy quyết định tham gia câu lạc bộ tiếng Anh."],
        ["Avoid eating too much fast food.", "Tránh ăn quá nhiều đồ ăn nhanh."],
        ["She promised to help me with my homework.", "Cô ấy hứa sẽ giúp tôi làm bài tập."],
        ["Thank you for inviting me to your party.", "Cảm ơn bạn đã mời tôi đến bữa tiệc."],
        ["We need to save water.", "Chúng ta cần tiết kiệm nước."]
      ],
      "transform": [
        ["I enjoy to play chess.", "Sửa lỗi sai trong câu", "I enjoy playing chess.", "Tôi thích chơi cờ."],
        ["She wants going abroad.", "Sửa lỗi sai trong câu", "She wants to go abroad.", "Cô ấy muốn ra nước ngoài."],
        ["He is good at swim.", "Sửa lỗi sai trong câu", "He is good at swimming.", "Cậu ấy bơi giỏi."],
        ["They plan visiting Ha Long Bay.", "Sửa lỗi sai trong câu", "They plan to visit Ha Long Bay.", "Họ dự định đi thăm Vịnh Hạ Long."],
        ["We finished to do our project.", "Sửa lỗi sai trong câu", "We finished doing our project.", "Chúng tôi đã làm xong dự án."]
      ],
      "extra": ["to", "going", "visit", "swim", "do"]
    },
    {
      "id": "tooenough", "group": 6, "grade": 8, "icon": "🎚️",
      "title": "too … to và … enough to", "en": "Too and enough",
      "desc": "Quá … đến nỗi không thể; đủ … để làm gì.",
      "formula": [
        ["too", "S + be + too + adj + (for sb) + to V: quá … đến nỗi không thể"],
        ["enough với tính từ", "S + be + adj + enough + (for sb) + to V: đủ … để"],
        ["enough với danh từ", "S + have + enough + N + to V"]
      ],
      "grammar": [
        ["too và enough", "too đứng trước tính từ và mang nghĩa phủ định (quá … không thể). enough đứng sau tính từ nhưng đứng trước danh từ.", "The tea is too hot to drink. | She is old enough to drive. | We have enough money to buy it."],
        ["Chuyển qua lại", "too + tính từ có thể viết lại thành not + tính từ trái nghĩa + enough. Không lặp lại tân ngữ khi nó chính là chủ ngữ của câu.", "He is too short to play basketball. | He is not tall enough to play basketball."]
      ],
      "quiz": [
        ["This box is ___ heavy for me to carry.", "too", ["enough", "so", "very"], "too + adj + for sb + to V."],
        ["She isn't old ___ to watch this film.", "enough", ["too", "so", "such"], "adj + enough + to V."],
        ["We don't have ___ time to finish the project today.", "enough", ["too", "so", "such"], "enough đứng trước danh từ."],
        ["The water is too cold ___ swim in.", "to", ["for", "that", "so"], "too + adj + to V."],
        ["He is not ___ to reach the top shelf.", "tall enough", ["enough tall", "too tall", "so tall"], "enough đứng sau tính từ."],
        ["The coffee was too hot for me ___.", "to drink", ["drinking", "drink it", "to drink it"], "Không lặp lại tân ngữ (it) khi nó chính là chủ ngữ (the coffee)."],
        ["The questions were easy enough ___ everyone to answer.", "for", ["to", "of", "with"], "adj + enough + for sb + to V."],
        ["It was ___ dark for us to see anything.", "too", ["enough", "such", "so much"], "too + adj + for sb + to V."]
      ],
      "sentences": [
        ["The soup is too salty to eat.", "Món súp mặn quá không ăn được."],
        ["She is clever enough to solve the problem.", "Cô ấy đủ thông minh để giải bài toán."],
        ["I don't have enough money to buy a new phone.", "Tôi không đủ tiền để mua điện thoại mới."],
        ["He was too tired to go out.", "Anh ấy mệt quá không ra ngoài được."],
        ["Is the room big enough for twenty people?", "Căn phòng có đủ rộng cho hai mươi người không?"],
        ["The bag is too heavy for me to carry.", "Cái túi nặng quá tôi không xách được."]
      ],
      "transform": [
        ["The box is very heavy. I can't lift it.", "Nối hai câu bằng too … to", "The box is too heavy for me to lift. | The box is too heavy to lift.", "Cái hộp nặng quá tôi không nhấc được."],
        ["He is too young to drive a car.", "Viết lại với old enough", "He is not old enough to drive a car. | He isn't old enough to drive a car.", "Cậu ấy chưa đủ tuổi lái ô tô."],
        ["She is very rich. She can buy that house.", "Nối hai câu bằng enough", "She is rich enough to buy that house.", "Cô ấy đủ giàu để mua ngôi nhà đó."],
        ["The water is too dirty to drink.", "Viết lại với clean enough", "The water is not clean enough to drink. | The water isn't clean enough to drink.", "Nước không đủ sạch để uống."],
        ["We have little time. We can't visit the museum.", "Nối hai câu với enough time", "We don't have enough time to visit the museum.", "Chúng tôi không đủ thời gian để thăm bảo tàng."]
      ],
      "extra": ["too", "enough", "so", "very", "it"]
    },
    {
      "id": "sothat", "group": 6, "grade": 9, "icon": "💥",
      "title": "so … that và such … that", "en": "So … that and such … that",
      "desc": "Quá … đến nỗi: so với tính từ, such với cụm danh từ.",
      "formula": [
        ["so … that", "S + be + so + adj + that … · S + V + so + adv + that …"],
        ["such … that", "S + be + such + (a / an) + adj + N + that …"],
        ["so many / so much", "so many + N số nhiều · so much + N không đếm được + that …"]
      ],
      "grammar": [
        ["so hay such", "so đi với tính từ hoặc trạng từ. such đi với cụm danh từ (có thể có tính từ). Cả hai đều mang nghĩa quá … đến nỗi.", "It was so cold that we stayed at home. | It was such a cold day that we stayed at home."],
        ["such với danh từ số ít", "Danh từ đếm được số ít cần a hoặc an: such a nice girl. Danh từ số nhiều và không đếm được không có mạo từ: such nice people, such bad weather.", "She is such a kind teacher. | They are such kind people."]
      ],
      "quiz": [
        ["It was ___ hot that we went swimming.", "so", ["such", "too", "enough"], "so + adj + that."],
        ["It was ___ a boring film that I fell asleep.", "such", ["so", "too", "very"], "such + a + adj + N + that."],
        ["He drove so ___ that he got a fine.", "fast", ["fastly", "faster", "fastness"], "so + trạng từ + that; fast vừa là tính từ vừa là trạng từ."],
        ["They are ___ friendly people that everyone likes them.", "such", ["so", "such a", "too"], "Danh từ số nhiều: such + adj + N, không có a."],
        ["There were so ___ people that we couldn't find a seat.", "many", ["much", "a lot", "lots"], "so many + danh từ số nhiều."],
        ["She has ___ much homework that she can't go out.", "so", ["such", "too", "very"], "so much + danh từ không đếm được."],
        ["It was such ___ weather that the flight was cancelled.", "bad", ["a bad", "badly", "so bad"], "weather không đếm được nên không có a."],
        ["The test was so difficult ___ nobody finished it.", "that", ["which", "so", "as"], "so … that."]
      ],
      "sentences": [
        ["The film was so funny that we laughed all the time.", "Bộ phim hài đến nỗi chúng tôi cười suốt."],
        ["It was such a beautiful day that we went to the beach.", "Hôm đó đẹp trời đến nỗi chúng tôi đi biển."],
        ["She spoke so quickly that I couldn't understand her.", "Cô ấy nói nhanh đến nỗi tôi không hiểu."],
        ["There was so much traffic that we were late.", "Tắc đường đến mức chúng tôi bị muộn."],
        ["They are such good friends that they never argue.", "Họ là bạn tốt đến nỗi không bao giờ cãi nhau."],
        ["The coffee was so strong that I couldn't sleep.", "Cà phê đậm đến nỗi tôi không ngủ được."]
      ],
      "transform": [
        ["The book was very interesting. I read it in one day.", "Nối hai câu bằng so … that", "The book was so interesting that I read it in one day.", "Quyển sách hay đến nỗi tôi đọc hết trong một ngày."],
        ["It was so cold that we stayed inside.", "Viết lại với such cold weather", "It was such cold weather that we stayed inside.", "Trời lạnh đến nỗi chúng tôi ở trong nhà."],
        ["She is a very good teacher. All students love her.", "Nối hai câu bằng such … that", "She is such a good teacher that all students love her. | She is such a good teacher that all the students love her.", "Cô ấy là giáo viên giỏi đến nỗi mọi học sinh đều yêu quý."],
        ["He ran very fast. Nobody could catch him.", "Nối hai câu bằng so … that", "He ran so fast that nobody could catch him. | He ran so fast that no one could catch him.", "Anh ấy chạy nhanh đến nỗi không ai đuổi kịp."],
        ["There were a lot of people. We couldn't get in.", "Nối hai câu bằng so many … that", "There were so many people that we couldn't get in.", "Đông người đến nỗi chúng tôi không vào được."]
      ],
      "extra": ["so", "such", "too", "a", "very"]
    },
    {
      "id": "ittakes", "group": 6, "grade": 8, "icon": "⏱️",
      "title": "It takes … to V và It is + adj + to V", "en": "It takes and it is + adjective",
      "desc": "Nói mất bao lâu để làm gì; dùng It làm chủ ngữ giả.",
      "formula": [
        ["It takes", "It takes (sb) + thời gian + to V: ai đó mất bao lâu để làm gì"],
        ["spend", "S + spend + thời gian + V-ing"],
        ["It is + adj", "It is + adj + (for sb) + to V: làm gì thì như thế nào"],
        ["Câu hỏi", "How long does it take (sb) to V?"]
      ],
      "grammar": [
        ["It takes và spend", "Hai cách nói cùng nghĩa: It takes me an hour to do my homework = I spend an hour doing my homework. Sau spend dùng V-ing.", "It takes her twenty minutes to walk to school. | She spends twenty minutes walking to school."],
        ["It là chủ ngữ giả", "Khi chủ ngữ thật là một hành động dài, đưa It lên đầu câu, hành động đặt sau to. Có thể thêm for + người.", "It is important to drink enough water. | It is difficult for me to wake up early."]
      ],
      "quiz": [
        ["It ___ me two hours to finish the report yesterday.", "took", ["takes", "spent", "taken"], "Quá khứ: It took."],
        ["She spends an hour ___ the piano every day.", "practising", ["to practise", "practise", "practised"], "spend + thời gian + V-ing."],
        ["How long does it take ___ to get to the airport?", "you", ["your", "for you", "to you"], "It takes + đại từ tân ngữ + to V."],
        ["It is dangerous ___ children to play near the river.", "for", ["to", "of", "with"], "It is + adj + for sb + to V."],
        ["It is not easy ___ a new language.", "to learn", ["learning", "learn", "learned"], "It is + adj + to V."],
        ["It will take ___ three days to build the stage.", "them", ["they", "their", "theirs"], "Sau take dùng đại từ tân ngữ."],
        ["I ___ the whole weekend cleaning the house.", "spent", ["took", "cost", "paid"], "spend thời gian + V-ing."],
        ["___ is necessary to book tickets in advance.", "It", ["This", "That", "There"], "Chủ ngữ giả It + is + adj + to V."]
      ],
      "sentences": [
        ["It takes me fifteen minutes to walk to school.", "Tôi mất mười lăm phút đi bộ đến trường."],
        ["How long does it take to fly to Ha Noi?", "Bay ra Hà Nội mất bao lâu?"],
        ["She spent two hours doing her homework.", "Cô ấy dành hai giờ làm bài tập."],
        ["It is important to get enough sleep.", "Ngủ đủ giấc là điều quan trọng."],
        ["It was hard for us to find a parking space.", "Chúng tôi khó tìm được chỗ đỗ xe."],
        ["It took them a year to build the bridge.", "Họ mất một năm để xây cây cầu."]
      ],
      "transform": [
        ["I spend thirty minutes cooking dinner.", "Viết lại bắt đầu bằng It takes me", "It takes me thirty minutes to cook dinner.", "Tôi mất ba mươi phút nấu bữa tối."],
        ["It took him two hours to fix the car.", "Viết lại bắt đầu bằng He spent", "He spent two hours fixing the car.", "Anh ấy mất hai giờ sửa ô tô."],
        ["Learning English is fun.", "Viết lại bắt đầu bằng It is", "It is fun to learn English.", "Học tiếng Anh thật vui."],
        ["Swimming in this lake is dangerous for children.", "Viết lại bắt đầu bằng It is dangerous", "It is dangerous for children to swim in this lake.", "Trẻ em bơi ở hồ này thì nguy hiểm."],
        ["She needs forty minutes to get to work.", "Viết lại bắt đầu bằng It takes her", "It takes her forty minutes to get to work.", "Cô ấy mất bốn mươi phút để đi làm."]
      ],
      "extra": ["take", "spend", "to", "for", "is"]
    },
    {
      "id": "correl", "group": 6, "grade": 9, "icon": "🧷",
      "title": "both … and, either … or, neither … nor", "en": "Paired conjunctions",
      "desc": "Cặp liên từ và cách chia động từ đi kèm; not only … but also.",
      "formula": [
        ["both … and", "cả … và …: động từ chia số nhiều"],
        ["either … or", "hoặc … hoặc …: động từ chia theo chủ ngữ gần nhất"],
        ["neither … nor", "không … cũng không …: động từ chia theo chủ ngữ gần nhất"],
        ["not only … but also", "không những … mà còn …"]
      ],
      "grammar": [
        ["Cặp liên từ", "Các cặp liên từ nối hai thành phần cùng loại (hai danh từ, hai tính từ, hai động từ). Hai vế phải cân đối.", "Both Lan and Mai like music. | She is not only smart but also kind."],
        ["Chia động từ", "both … and luôn đi với động từ số nhiều. Với either … or và neither … nor, động từ chia theo chủ ngữ đứng gần nó nhất.", "Neither my brother nor my parents are at home. | Either you or Tom has to go."]
      ],
      "quiz": [
        ["___ my father and my mother work in a hospital.", "Both", ["Either", "Neither", "Not only"], "Both … and …"],
        ["You can have either tea ___ coffee.", "or", ["and", "nor", "but"], "either … or."],
        ["Neither Nam ___ his sister likes spicy food.", "nor", ["or", "and", "but"], "neither … nor."],
        ["She is not only beautiful ___ also very kind.", "but", ["and", "or", "so"], "not only … but also."],
        ["Both Lan and Hoa ___ good at English.", "are", ["is", "be", "was"], "both … and đi với động từ số nhiều."],
        ["Neither the teacher nor the students ___ ready.", "were", ["was", "is", "be"], "Động từ chia theo chủ ngữ gần nhất: the students (số nhiều)."],
        ["Either you or your brother ___ to clean the room.", "has", ["have", "are", "were"], "Chủ ngữ gần nhất là your brother (số ít)."],
        ["He can ___ speak nor write French.", "neither", ["either", "both", "not only"], "neither … nor."]
      ],
      "sentences": [
        ["Both my sister and I love swimming.", "Cả chị tôi và tôi đều thích bơi."],
        ["You can pay either by cash or by card.", "Bạn có thể trả bằng tiền mặt hoặc bằng thẻ."],
        ["Neither Tom nor Peter came to the party.", "Cả Tom và Peter đều không đến bữa tiệc."],
        ["She speaks not only English but also Japanese.", "Cô ấy nói không chỉ tiếng Anh mà còn cả tiếng Nhật."],
        ["This phone is both cheap and useful.", "Chiếc điện thoại này vừa rẻ vừa hữu ích."],
        ["Either you or I have to tell her.", "Hoặc bạn hoặc tôi phải nói với cô ấy."]
      ],
      "transform": [
        ["Nam likes football. His brother likes football too.", "Nối hai câu bằng Both … and", "Both Nam and his brother like football.", "Cả Nam và anh trai đều thích bóng đá."],
        ["Lan doesn't eat meat. Mai doesn't eat meat either.", "Nối hai câu bằng Neither … nor", "Neither Lan nor Mai eats meat.", "Cả Lan và Mai đều không ăn thịt."],
        ["She is intelligent. She is also hard-working.", "Nối hai câu bằng not only … but also", "She is not only intelligent but also hard-working.", "Cô ấy không những thông minh mà còn chăm chỉ."],
        ["You can take the bus, or you can take a taxi.", "Viết lại với either … or", "You can take either the bus or a taxi. | You can either take the bus or take a taxi. | You can either take the bus or a taxi.", "Bạn có thể đi xe buýt hoặc đi taxi."],
        ["He can't sing. He can't dance.", "Nối hai câu bằng neither … nor", "He can neither sing nor dance.", "Anh ấy không biết hát cũng không biết nhảy."]
      ],
      "extra": ["and", "or", "nor", "but", "also"]
    },
    {
      "id": "themore", "group": 6, "grade": 12, "icon": "🌀",
      "title": "Càng … càng: The more …, the more …", "en": "Double comparatives",
      "desc": "So sánh kép: càng … càng; càng ngày càng.",
      "formula": [
        ["Càng … càng", "The + so sánh hơn + S + V, the + so sánh hơn + S + V"],
        ["Với danh từ", "The more + N + S + V, the more …"],
        ["Càng ngày càng", "so sánh hơn + and + so sánh hơn: bigger and bigger, more and more expensive"]
      ],
      "grammar": [
        ["The more …, the more …", "Hai vế đều bắt đầu bằng the + dạng so sánh hơn. Có thể dùng tính từ, trạng từ hoặc more, less + danh từ.", "The harder you study, the better your results will be. | The more you practise, the more confident you become."],
        ["Càng ngày càng", "Lặp lại dạng so sánh hơn với and. Tính từ dài dùng more and more + tính từ.", "The city is getting bigger and bigger. | Phones are becoming more and more expensive."]
      ],
      "quiz": [
        ["The more you practise, ___ you will speak.", "the better", ["better", "the best", "more better"], "The + so sánh hơn, the + so sánh hơn."],
        ["The ___ it is, the more tired I feel.", "hotter", ["hot", "hottest", "more hot"], "hot → hotter."],
        ["Prices are getting ___.", "higher and higher", ["high and high", "more and more high", "highest and highest"], "Càng ngày càng: so sánh hơn + and + so sánh hơn."],
        ["The sooner we start, ___ we will finish.", "the earlier", ["earlier", "the earliest", "more early"], "The sooner …, the earlier …"],
        ["Learning English is becoming ___ popular.", "more and more", ["most and most", "more or more", "much and much"], "Tính từ dài: more and more + adj."],
        ["The more money he earns, ___ he spends.", "the more", ["more", "the most", "most"], "The more …, the more …"],
        ["___ you sleep, the worse you feel.", "The less", ["Less", "The least", "Fewer"], "The less …, the worse …"],
        ["The ___ the question, the longer it takes to answer.", "more difficult", ["difficult", "most difficult", "difficulter"], "Tính từ dài: the more difficult."]
      ],
      "sentences": [
        ["The more you read, the more you learn.", "Càng đọc nhiều, bạn càng học được nhiều."],
        ["The older he gets, the wiser he becomes.", "Càng lớn tuổi, ông ấy càng khôn ngoan."],
        ["The weather is getting hotter and hotter.", "Thời tiết càng ngày càng nóng."],
        ["The earlier you leave, the sooner you will arrive.", "Bạn đi càng sớm thì càng đến sớm."],
        ["Life in the city is becoming more and more expensive.", "Cuộc sống ở thành phố càng ngày càng đắt đỏ."],
        ["The less you worry, the happier you will be.", "Bạn càng ít lo lắng thì càng hạnh phúc."]
      ],
      "transform": [
        ["If you practise more, you will play better.", "Viết lại với The more … the better", "The more you practise, the better you will play.", "Càng luyện tập nhiều, bạn chơi càng giỏi."],
        ["As he got older, he became quieter.", "Viết lại với The older … the quieter", "The older he got, the quieter he became.", "Càng lớn tuổi, ông ấy càng trầm lặng."],
        ["Houses are becoming more expensive every year.", "Viết lại với more and more expensive", "Houses are becoming more and more expensive.", "Nhà cửa càng ngày càng đắt."],
        ["The days get longer in summer.", "Viết lại với longer and longer", "The days get longer and longer in summer. | In summer the days get longer and longer.", "Vào mùa hè ngày càng lúc càng dài."],
        ["If we leave early, we will arrive early.", "Viết lại với The earlier … the earlier", "The earlier we leave, the earlier we will arrive.", "Chúng ta đi càng sớm thì đến càng sớm."]
      ],
      "extra": ["more", "most", "than", "and", "the"]
    },
    {
      "id": "inversion", "group": 6, "grade": 12, "icon": "🔀",
      "title": "Đảo ngữ", "en": "Inversion",
      "desc": "Never have I…, Not only did…, Hardly had … when…",
      "formula": [
        ["Trạng từ phủ định", "Never / Rarely / Seldom + trợ động từ + S + V: Never have I seen …"],
        ["Not only", "Not only + trợ động từ + S + V, but S + also + V"],
        ["Hardly / No sooner", "Hardly had + S + V3 when … · No sooner had + S + V3 than …"],
        ["Only", "Only when / Only after + mệnh đề + trợ động từ + S + V"]
      ],
      "grammar": [
        ["Đảo ngữ là gì", "Khi câu bắt đầu bằng một từ mang nghĩa phủ định hoặc hạn chế, trợ động từ đứng trước chủ ngữ như trong câu hỏi. Đảo ngữ làm câu trang trọng và nhấn mạnh.", "Never have I seen such a beautiful place. | Rarely does she eat meat."],
        ["Chọn trợ động từ", "Dùng trợ động từ của thì đó: do, does, did với hiện tại và quá khứ đơn; have, has, had với thì hoàn thành; can, will giữ nguyên.", "Not only did he win, but he also broke the record. | Only when it rains do we stay inside."]
      ],
      "quiz": [
        ["Never ___ such a delicious meal.", "have I eaten", ["I have eaten", "I ate", "ate I"], "Never đứng đầu câu: trợ động từ + S + V."],
        ["Rarely ___ late for work.", "is she", ["she is", "does she", "she"], "Rarely + trợ động từ (is) + S."],
        ["Not only ___ the exam, but he also got the highest score.", "did he pass", ["he passed", "he did pass", "passed he"], "Not only + did + S + V."],
        ["Hardly had we arrived ___ it started to rain.", "when", ["than", "then", "that"], "Hardly … when."],
        ["No sooner had she sat down ___ the phone rang.", "than", ["when", "then", "that"], "No sooner … than."],
        ["Only when I got home ___ that I had lost my keys.", "did I realise", ["I realised", "I did realise", "realised I"], "Only when + mệnh đề + trợ động từ + S + V."],
        ["Seldom ___ television these days.", "do we watch", ["we watch", "we do watch", "watch we"], "Seldom + do + S + V."],
        ["Never before ___ so many people in this park.", "have I seen", ["I have seen", "I saw", "saw I"], "Never before + have + S + V3."]
      ],
      "sentences": [
        ["Never have I seen such a beautiful sunset.", "Chưa bao giờ tôi thấy cảnh hoàng hôn đẹp như vậy."],
        ["Rarely does he go to bed before midnight.", "Hiếm khi anh ấy đi ngủ trước nửa đêm."],
        ["Not only is she smart, but she is also very kind.", "Cô ấy không những thông minh mà còn rất tốt bụng."],
        ["Hardly had I closed the door when the phone rang.", "Tôi vừa đóng cửa thì điện thoại reo."],
        ["Only after the meeting did I understand the problem.", "Chỉ sau cuộc họp tôi mới hiểu vấn đề."],
        ["Seldom do we see such talent.", "Hiếm khi chúng ta thấy tài năng như vậy."]
      ],
      "transform": [
        ["I have never seen such a big fish.", "Viết lại bắt đầu bằng Never", "Never have I seen such a big fish.", "Tôi chưa bao giờ thấy con cá to như vậy."],
        ["She rarely eats fast food.", "Viết lại bắt đầu bằng Rarely", "Rarely does she eat fast food.", "Cô ấy hiếm khi ăn đồ ăn nhanh."],
        ["He won the race and he also broke the record.", "Viết lại bắt đầu bằng Not only", "Not only did he win the race, but he also broke the record.", "Anh ấy không chỉ thắng cuộc đua mà còn phá kỷ lục."],
        ["As soon as we arrived, it started to rain.", "Viết lại bắt đầu bằng Hardly had we", "Hardly had we arrived when it started to rain.", "Chúng tôi vừa đến thì trời bắt đầu mưa."],
        ["I understood the problem only when I read the report.", "Viết lại bắt đầu bằng Only when", "Only when I read the report did I understand the problem.", "Chỉ khi đọc báo cáo tôi mới hiểu vấn đề."]
      ],
      "extra": ["did", "do", "have", "has", "was"]
    },
    {
      "id": "getused", "group": 6, "grade": 11, "icon": "🛏️",
      "title": "used to, be used to, get used to", "en": "Used to, be used to, get used to",
      "desc": "Thói quen trong quá khứ; đã quen với; dần quen với.",
      "formula": [
        ["used to + V", "Thói quen trong quá khứ, nay không còn: I used to live in Hue."],
        ["be used to + V-ing / N", "Đã quen với: I am used to getting up early."],
        ["get used to + V-ing / N", "Dần quen với: I am getting used to the cold weather."]
      ],
      "grammar": [
        ["Ba cấu trúc dễ nhầm", "used to + động từ nguyên mẫu nói về quá khứ. be used to và get used to nghĩa là quen với, theo sau là V-ing hoặc danh từ, và dùng được ở mọi thì.", "She used to walk to school. | She is used to walking to school. | She is getting used to walking to school."],
        ["to ở đây là giới từ", "Trong be used to và get used to, to là giới từ nên theo sau là V-ing, không phải động từ nguyên mẫu.", "I'm not used to eating spicy food. | You will soon get used to living here."]
      ],
      "quiz": [
        ["I ___ live in the countryside, but now I live in the city.", "used to", ["am used to", "get used to", "was used to"], "Thói quen, trạng thái trong quá khứ: used to + V."],
        ["She is used to ___ up early.", "getting", ["get", "got", "gets"], "be used to + V-ing."],
        ["It took me months to get used ___ on the left.", "to driving", ["to drive", "driving", "drive"], "get used to + V-ing."],
        ["Are you used ___ the noise yet?", "to", ["with", "for", "of"], "be used to + danh từ."],
        ["When I was a child, I ___ play in the rain.", "used to", ["was used to", "got used to", "am used to"], "Thói quen trong quá khứ."],
        ["He isn't used to ___ in a team.", "working", ["work", "worked", "works"], "be used to + V-ing."],
        ["You will soon ___ used to the weather here.", "get", ["getting", "got", "gets"], "will + get used to."],
        ["Did you ___ to have long hair?", "use", ["used", "using", "uses"], "Câu hỏi: Did + S + use to."]
      ],
      "sentences": [
        ["I used to be afraid of dogs.", "Trước đây tôi từng sợ chó."],
        ["She is used to working at night.", "Cô ấy đã quen làm việc ban đêm."],
        ["We are getting used to the new timetable.", "Chúng tôi đang dần quen với thời khóa biểu mới."],
        ["He isn't used to eating with chopsticks.", "Anh ấy chưa quen ăn bằng đũa."],
        ["You will get used to it soon.", "Bạn sẽ sớm quen thôi."],
        ["My grandfather used to work on a farm.", "Ông tôi từng làm việc ở nông trại."]
      ],
      "transform": [
        ["Getting up early is normal for me now.", "Viết lại với I am used to", "I am used to getting up early.", "Tôi đã quen dậy sớm."],
        ["He played the guitar in the past, but he doesn't now.", "Viết lại với used to", "He used to play the guitar.", "Trước đây anh ấy từng chơi đàn ghi-ta."],
        ["Living alone is still strange for her.", "Viết lại với is not used to", "She is not used to living alone.", "Cô ấy chưa quen sống một mình."],
        ["I'm slowly becoming familiar with the new job.", "Viết lại với getting used to", "I'm getting used to the new job. | I'm slowly getting used to the new job.", "Tôi đang dần quen với công việc mới."],
        ["Driving on the left is strange for tourists at first.", "Viết lại bắt đầu bằng Tourists are not used to", "Tourists are not used to driving on the left. | Tourists are not used to driving on the left at first.", "Du khách chưa quen lái xe bên trái."]
      ],
      "extra": ["use", "get", "be", "to", "drive"]
    },
    {
      "id": "passrep", "group": 6, "grade": 12, "icon": "🔊",
      "title": "It is said that … / S is said to …", "en": "Passive reporting structures",
      "desc": "Bị động với say, think, believe, report: người ta nói rằng…",
      "formula": [
        ["Cách 1", "It + is / was + said / thought / believed + that + mệnh đề"],
        ["Cách 2, cùng thời điểm", "S + is / was + said + to V"],
        ["Cách 2, xảy ra trước", "S + is / was + said + to have + V3"]
      ],
      "grammar": [
        ["Khi nào dùng", "Dùng khi muốn nói điều mọi người nói, nghĩ, tin mà không nêu rõ ai nói. Cấu trúc này rất hay gặp trong bài đọc IELTS và tin tức.", "It is said that the castle is haunted. | The castle is said to be haunted."],
        ["to V hay to have V3", "Nếu sự việc xảy ra cùng lúc hoặc sau lúc nói, dùng to V. Nếu sự việc đã xảy ra trước đó, dùng to have + V3.", "He is believed to live in Paris. | He is believed to have left the country."]
      ],
      "quiz": [
        ["It ___ that the old house is haunted.", "is said", ["says", "is saying", "said"], "It is said that + mệnh đề."],
        ["He is thought ___ the richest man in the town.", "to be", ["being", "be", "to being"], "S + is thought + to V."],
        ["The thief is believed ___ the city last night.", "to have left", ["to leave", "leaving", "left"], "Việc đã xảy ra trước: to have + V3."],
        ["She ___ a good doctor, according to many people.", "is said to be", ["says to be", "is said being", "said to be"], "S + is said + to V."],
        ["It ___ that the fire was caused by a cigarette.", "is thought", ["thinks", "is thinking", "thought"], "It is thought that …"],
        ["The ship is reported ___ in the storm yesterday.", "to have sunk", ["to sink", "sinking", "sank"], "Việc đã xảy ra: to have + V3."],
        ["It is ___ that exercise improves memory.", "believed", ["believing", "belief", "believes"], "It is believed that …"],
        ["The singer is said ___ a new album next month.", "to release", ["to have released", "releasing", "released"], "Việc sắp xảy ra (không phải trước đó): to V."]
      ],
      "sentences": [
        ["It is said that this bridge is over two hundred years old.", "Người ta nói cây cầu này đã hơn hai trăm năm tuổi."],
        ["He is believed to be the best player in the team.", "Người ta tin anh ấy là cầu thủ giỏi nhất đội."],
        ["It is thought that the fire started in the kitchen.", "Người ta cho rằng đám cháy bắt đầu từ nhà bếp."],
        ["The painting is said to be worth a million dollars.", "Người ta nói bức tranh trị giá một triệu đô la."],
        ["She is known to speak five languages.", "Người ta biết cô ấy nói được năm thứ tiếng."],
        ["The prisoner is reported to have escaped.", "Có tin tù nhân đã trốn thoát."]
      ],
      "transform": [
        ["People say that the lake is very deep.", "Viết lại bắt đầu bằng It is said", "It is said that the lake is very deep.", "Người ta nói hồ này rất sâu."],
        ["People say that the lake is very deep.", "Viết lại bắt đầu bằng The lake is said", "The lake is said to be very deep.", "Người ta nói hồ này rất sâu."],
        ["People believe that he is a genius.", "Viết lại bắt đầu bằng He is believed", "He is believed to be a genius.", "Người ta tin anh ấy là thiên tài."],
        ["People think that the robbers escaped by car.", "Viết lại bắt đầu bằng The robbers are thought", "The robbers are thought to have escaped by car.", "Người ta cho rằng bọn cướp đã trốn bằng ô tô."],
        ["People report that the president is ill.", "Viết lại bắt đầu bằng It is reported", "It is reported that the president is ill.", "Có tin báo tổng thống bị ốm."]
      ],
      "extra": ["is", "was", "to", "have", "be"]
    }
  ]
});
