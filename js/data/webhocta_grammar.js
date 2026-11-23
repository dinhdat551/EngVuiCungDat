/* EngVui – Ngữ pháp CEFR A1–C2 (từ WebHocTA)
   Nhập tự động từ D:\WebHocTA bằng tools/import_webhocta.js, đừng sửa tay (chạy lại script sẽ ghi đè).
   Phần trong ngoặc là JSON chuẩn. */
EV.extendGrammar({
 "names": [
  "About",
  "Anna",
  "Asia",
  "Because",
  "Canada",
  "China",
  "Da",
  "English",
  "Everest",
  "French",
  "Hanoi",
  "He",
  "Her",
  "His",
  "Hoa",
  "Hue",
  "If",
  "In",
  "Japan",
  "John",
  "Jones",
  "Lan",
  "Lat",
  "Lee",
  "London",
  "Madrid",
  "Mai",
  "Mondays",
  "Mum",
  "Nam",
  "Nang",
  "No",
  "On",
  "Paris",
  "Passive",
  "Quang",
  "Saturdays",
  "School",
  "She",
  "Someone",
  "Spanish",
  "Sundays",
  "Tom",
  "Tran",
  "Trung",
  "We",
  "Which",
  "Yes",
  "You"
 ],
 "groups": [
  {
   "id": 7,
   "title": "CEFR A1 · Nhập môn",
   "desc": "Câu đơn giản, to be, thì hiện tại, đại từ, giới từ cơ bản",
   "color": "#58CC02",
   "dark": "#46A302"
  },
  {
   "id": 8,
   "title": "CEFR A2 · Sơ cấp",
   "desc": "Quá khứ, tương lai, so sánh, động từ khuyết thiếu",
   "color": "#1CB0F6",
   "dark": "#1899D6"
  },
  {
   "id": 9,
   "title": "CEFR B1 · Trung cấp",
   "desc": "Hoàn thành, bị động, điều kiện, mệnh đề quan hệ",
   "color": "#CE82FF",
   "dark": "#A568CC"
  },
  {
   "id": 10,
   "title": "CEFR B2 · Trung cao cấp",
   "desc": "Cấu trúc phức tạp, tường thuật, mệnh đề rút gọn",
   "color": "#FF9600",
   "dark": "#D97F00"
  },
  {
   "id": 11,
   "title": "CEFR C1 · Cao cấp",
   "desc": "Đảo ngữ, giả định, nhấn mạnh, cấu trúc trang trọng",
   "color": "#2B70C9",
   "dark": "#1F5AA6"
  },
  {
   "id": 12,
   "title": "CEFR C2 · Thành thạo",
   "desc": "Sắc thái, cấu trúc hiếm, văn phong học thuật",
   "color": "#FF4B4B",
   "dark": "#D63A3A"
  }
 ],
 "topics": [
  {
   "id": "wh-a1-to-be",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "To be & subject pronouns",
   "en": "Từ loại",
   "desc": "To be (am / is / are) nối chủ ngữ với một danh từ, tính từ hoặc nơi chốn để giới thiệu, miêu tả hoặc nói về vị trí.",
   "formula": [
    [
     "Công thức",
     "S + am / is / are + bổ ngữ"
    ],
    [
     "Khẳng định",
     "I am · he/she/it is · you/we/they are"
    ],
    [
     "Phủ định",
     "S + am/is/are + not"
    ],
    [
     "Nghi vấn",
     "Am/Is/Are + S + …?"
    ],
    [
     "Dạng rút gọn",
     "I'm · you're · he's · isn't · aren't"
    ]
   ],
   "grammar": [
    [
     "Giới thiệu danh tính, nghề nghiệp",
     "Sau to be là một cụm danh từ cho biết chủ ngữ là ai hoặc làm nghề gì.",
     "I am a student. | Mr Lan is our teacher."
    ],
    [
     "Miêu tả đặc điểm, trạng thái",
     "Sau to be là tính từ. Tiếng Anh không thêm động từ nào khác trước tính từ.",
     "The soup is hot. | We are tired."
    ],
    [
     "Nói về vị trí và quê quán",
     "Sau to be là cụm chỉ nơi chốn, hoặc dùng be from + địa danh.",
     "The keys are on the table. | Nam is from Hue."
    ],
    [
     "Nói về tuổi, giờ và thời tiết",
     "Tuổi dùng to be (không dùng have). Giờ, ngày, thời tiết dùng chủ ngữ hình thức it.",
     "She is twelve. | It is six o'clock."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ngôi và số của chủ ngữ: I đi với am. He, she, it và mọi danh từ số ít đi với is. You và mọi chủ ngữ số nhiều đi với are. 2) Đặt to be ngay sau chủ ngữ: To be đứng trước bổ ngữ và không cần trợ động từ nào khác trong câu khẳng định. 3) Tạo câu phủ định và nghi vấn: To be tự đóng vai trò trợ động từ, nên không bao giờ dùng do hoặc does với to be.",
     "My brother (= he) → is | The room is clean. | Are you busy? — No, I am not."
    ],
    [
     "Dạng to be theo chủ ngữ",
     "I: ngôi thứ nhất số ít · You: ngôi thứ hai, dùng cho cả số ít và số nhiều · He / She / It: ngôi thứ ba số ít · We / They: số nhiều",
     "I am here. | You are early. | It is new. | They are outside."
    ],
    [
     "Lỗi thường gặp",
     "Sai: She are a student. Đúng: She is a student. (She là ngôi thứ ba số ít; are chỉ dùng với you và chủ ngữ số nhiều.) Sai: I have twelve years old. Đúng: I am twelve years old. (Tiếng Việt nói \"tôi có 12 tuổi\" theo lối sở hữu, nhưng tiếng Anh dùng to be để nói tuổi.) Sai: Do you are ready? Đúng: Are you ready? (To be đã là trợ động từ, nên câu hỏi tạo bằng cách đảo to be lên trước chủ ngữ, không thêm do.) Sai: He not is here. Đúng: He is not here. (Not đứng sau to be, không đứng trước.)",
     "She is a student. | I am twelve years old. | Are you ready? | He is not here."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ là đại từ nào, hoặc danh từ số ít hay số nhiều? · Dạng am / is / are đã khớp với chủ ngữ đó chưa? · Câu phủ định có not ngay sau to be chưa? · Câu hỏi đã đảo to be lên trước chủ ngữ và không có do / does chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "My sister ___ a nurse.",
     "is",
     [
      "am",
      "are"
     ],
     "My sister là ngôi thứ ba số ít (= she) nên dùng is."
    ],
    [
     "We ___ in the same class.",
     "are",
     [
      "is",
      "am"
     ],
     "We là số nhiều nên dùng are."
    ],
    [
     "Which sentence is correct?",
     "I am tired.",
     [
      "I is tired.",
      "I are tired."
     ],
     "I luôn đi với am."
    ],
    [
     "___ your parents at home?",
     "Are",
     [
      "Is",
      "Am"
     ],
     "Your parents là số nhiều nên dùng Are, đảo lên đầu câu hỏi."
    ],
    [
     "Which sentence tells someone's age correctly?",
     "He is ten years old.",
     [
      "He has ten years old.",
      "He have ten years."
     ],
     "Tuổi dùng to be: He is ten (years old)."
    ],
    [
     "___ is seven o'clock.",
     "It",
     [
      "He",
      "She"
     ],
     "Giờ giấc dùng chủ ngữ hình thức It."
    ]
   ],
   "gaps": [
    [
     "They ___ not at school today.",
     [
      "are"
     ],
     "",
     "They là số nhiều nên dùng are: They are not at school."
    ],
    [
     "___ you a teacher? — Yes, I am.",
     [
      "are"
     ],
     "",
     "Câu hỏi với you dùng Are ở đầu câu."
    ],
    [
     "I ___ not hungry. (viết đầy đủ, không rút gọn)",
     [
      "am"
     ],
     "",
     "I đi với am. Dạng rút gọn là I'm not."
    ],
    [
     "The books ___ on the desk.",
     [
      "are"
     ],
     "",
     "Danh từ số nhiều đi với are."
    ],
    [
     "Minh ___ from Hanoi.",
     [
      "is"
     ],
     "",
     "Minh = he, ngôi thứ ba số ít nên dùng is."
    ],
    [
     "She ___ twelve years old.",
     [
      "is"
     ],
     "",
     "She đi với is; tuổi dùng to be."
    ]
   ],
   "sentences": [
    [
     "She is a student at Quang Trung School.",
     "Cô ấy là học sinh Trường Quang Trung."
    ],
    [
     "The children are very excited today.",
     "Hôm nay các em rất háo hức."
    ],
    [
     "My parents are from Da Nang.",
     "Bố mẹ tôi là người Đà Nẵng."
    ],
    [
     "I am not hungry yet.",
     "Tôi vẫn chưa thấy đói."
    ],
    [
     "Are your friends at the library?",
     "Các bạn của bạn có ở thư viện không?"
    ],
    [
     "It is cold and it is almost seven o'clock.",
     "Trời lạnh và đã gần bảy giờ."
    ]
   ]
  },
  {
   "id": "wh-a1-object-pronouns",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Object pronouns",
   "en": "Từ loại",
   "desc": "Đại từ tân ngữ (me, you, him, her, it, us, them) thay cho danh từ đứng sau động từ hoặc giới từ. Chúng giúp tránh lặp lại người hoặc vật đã nhắc đến.",
   "formula": [
    [
     "Công thức",
     "S + V + object pronoun"
    ],
    [
     "Bảng chuyển đổi",
     "I→me · you→you · he→him · she→her · it→it · we→us · they→them"
    ],
    [
     "Sau giới từ",
     "preposition + object pronoun"
    ],
    [
     "Hai tân ngữ",
     "give/send/show + object pronoun + noun"
    ]
   ],
   "grammar": [
    [
     "Thay danh từ làm tân ngữ của động từ",
     "Dùng sau động từ khi người hoặc vật đã được nhắc trước đó.",
     "I know Lan. I like her. | Where is my pen? I can't find it."
    ],
    [
     "Đứng sau giới từ",
     "Sau giới từ (with, to, for, at...) luôn dùng đại từ tân ngữ, không dùng đại từ chủ ngữ.",
     "Come with us. | This gift is for you."
    ],
    [
     "Đứng sau let's, và trong câu ngắn",
     "Câu trả lời ngắn thường dùng dạng tân ngữ.",
     "Let's ask them. | Who is it? — Me."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm danh từ đã nhắc ở câu trước: Xác định người hoặc vật mà đại từ sẽ thay thế, và xem đó là ngôi nào, số ít hay nhiều. 2) Xác định vị trí trong câu: Đứng trước động từ là chủ ngữ (he, she, they). Đứng sau động từ hoặc giới từ là tân ngữ (him, her, them). 3) Chọn đúng dạng rồi đặt vào câu: Thay danh từ bằng đại từ tương ứng, giữ nguyên trật tự câu.",
     "My parents → they (chủ ngữ) / them (tân ngữ) | He likes her. / She likes him. | I see Mai and Tom → I see them."
    ],
    [
     "Đại từ chủ ngữ và tân ngữ",
     "I → me: ngôi thứ nhất số ít · he → him / she → her: ngôi thứ ba số ít chỉ người · you → you / it → it: dạng không đổi · we → us / they → them: số nhiều",
     "She calls me every day. | I see him. I know her. | I love you. I need it. | Join us. Ask them."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Give the book to I. Đúng: Give the book to me. (Sau giới từ phải dùng đại từ tân ngữ.) Sai: I like she. Đúng: I like her. (She là đại từ chủ ngữ; sau động từ like cần tân ngữ her.) Sai: My friends and me go to school. Đúng: My friends and I go to school. (Cụm này làm chủ ngữ nên dùng I, không dùng me.) Sai: Tom is my cousin. I see Tom every week and I like Tom. Đúng: Tom is my cousin. I see him every week and I like him. (Dùng đại từ tân ngữ để tránh lặp lại tên.)",
     "Give the book to me. | I like her. | My friends and I go to school. | Tom is my cousin. I see him every week and I like him."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đại từ đứng trước động từ (chủ ngữ) hay sau động từ / giới từ (tân ngữ)? · Đại từ khớp với ngôi, số và giới tính của danh từ được thay chưa? · Sau giới từ đã dùng me, him, her, us, them chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I love my grandmother. I visit ___ every Sunday.",
     "her",
     [
      "she",
      "hers"
     ],
     "Visit cần tân ngữ; her thay cho my grandmother."
    ],
    [
     "The teacher is talking to ___ now.",
     "us",
     [
      "we",
      "our"
     ],
     "Sau giới từ to dùng đại từ tân ngữ us."
    ],
    [
     "Where are my keys? I can't find ___.",
     "them",
     [
      "it",
      "they"
     ],
     "Keys là số nhiều và làm tân ngữ, nên dùng them."
    ],
    [
     "Which sentence is correct?",
     "He helps me.",
     [
      "He helps I.",
      "He helps my."
     ],
     "Tân ngữ của I là me."
    ],
    [
     "Tom and Nam are late. Let's call ___.",
     "them",
     [
      "they",
      "their"
     ],
     "Sau động từ call cần tân ngữ: them."
    ],
    [
     "Which sentence is correct?",
     "Come with us.",
     [
      "Come with we.",
      "Come with our."
     ],
     "Sau giới từ with dùng us."
    ]
   ],
   "gaps": [
    [
     "My brother is funny. Everyone likes ___.",
     [
      "him"
     ],
     "",
     "Brother là nam, số ít, làm tân ngữ nên dùng him."
    ],
    [
     "This is a good film. Do you want to watch ___?",
     [
      "it"
     ],
     "",
     "Film là vật số ít nên dùng it."
    ],
    [
     "Mai is my best friend. I often study with ___.",
     [
      "her"
     ],
     "",
     "Sau giới từ with dùng tân ngữ; Mai là nữ nên là her."
    ],
    [
     "Please listen to ___. (I)",
     [
      "me"
     ],
     "",
     "Tân ngữ của I là me."
    ]
   ],
   "sentences": [
    [
     "My teacher is kind. I respect her.",
     "Cô giáo tôi rất tốt bụng. Tôi kính trọng cô ấy."
    ],
    [
     "These books are heavy. Can you carry them?",
     "Những cuốn sách này nặng. Bạn mang giúp được không?"
    ],
    [
     "Please wait for me at the gate.",
     "Làm ơn đợi tôi ở cổng nhé."
    ],
    [
     "Our neighbours are friendly, so we often talk to them.",
     "Hàng xóm của chúng tôi thân thiện nên chúng tôi hay trò chuyện với họ."
    ],
    [
     "This is my phone. I use it every day.",
     "Đây là điện thoại của tôi. Tôi dùng nó mỗi ngày."
    ]
   ]
  },
  {
   "id": "wh-a1-nouns-plurals",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Nouns & plurals",
   "en": "Từ loại",
   "desc": "Danh từ đếm được có dạng số ít và số nhiều. Phần lớn danh từ thêm -s để thành số nhiều, nhưng có nhiều quy tắc chính tả và một số dạng bất quy tắc cần nhớ.",
   "formula": [
    [
     "Công thức",
     "noun (singular) + -s / -es → plural"
    ],
    [
     "Quy tắc chung",
     "+ s"
    ],
    [
     "Tận cùng s, x, z, ch, sh",
     "+ es"
    ],
    [
     "Phụ âm + y",
     "y → ies"
    ],
    [
     "Nguyên âm + y",
     "+ s"
    ],
    [
     "Tận cùng f / fe",
     "f/fe → ves (một số từ)"
    ]
   ],
   "grammar": [
    [
     "Nói về một hoặc nhiều",
     "Số ít dùng với a/an hoặc one; số nhiều dùng với số từ lớn hơn một hoặc từ chỉ số lượng.",
     "a book / two books | one child / three children"
    ],
    [
     "Chia động từ theo số của danh từ",
     "Chủ ngữ số ít đi với is; chủ ngữ số nhiều đi với are.",
     "The dog is hungry. | The dogs are hungry."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhìn chữ cái cuối của danh từ: Tận cùng s, x, z, ch, sh thì thêm -es. Phụ âm + y thì đổi y thành ies. Còn lại thường chỉ thêm -s. 2) Kiểm tra danh từ bất quy tắc: Các từ chỉ người và bộ phận cơ thể hay có dạng đặc biệt, cần học thuộc. 3) Chia động từ và từ đi kèm cho khớp: Số nhiều đi với are, these, those, many; không dùng a/an.",
     "dish → dishes · story → stories · toy → toys | child → children · tooth → teeth | These women are doctors."
    ],
    [
     "Lỗi thường gặp",
     "Sai: two childs Đúng: two children (Child là danh từ bất quy tắc, không thêm -s.) Sai: three citys Đúng: three cities (Phụ âm + y đổi thành -ies.) Sai: a lot of peoples Đúng: a lot of people (People đã là số nhiều, không thêm -s.) Sai: She has two sister. Đúng: She has two sisters. (Sau số từ lớn hơn một, danh từ phải ở dạng số nhiều. Tiếng Việt không đánh dấu số nhiều nên dễ quên.)",
     "two children | three cities | a lot of people | She has two sisters."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Có số từ hoặc từ chỉ số lượng lớn hơn một chưa? Nếu có, danh từ phải ở dạng số nhiều. · Chữ cái cuối của danh từ có cần -es hoặc -ies không? · Đây có phải danh từ bất quy tắc không? · Động từ và từ đi kèm đã khớp số chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Plural of 'bus':",
     "buses",
     [
      "bus",
      "buss"
     ],
     "Tận cùng s nên thêm -es: buses."
    ],
    [
     "Plural of 'country':",
     "countries",
     [
      "countrys",
      "countryes"
     ],
     "Phụ âm r + y đổi thành -ies."
    ],
    [
     "Plural of 'man':",
     "men",
     [
      "mans",
      "mens"
     ],
     "Man là danh từ bất quy tắc: men."
    ],
    [
     "Which sentence is correct?",
     "I have three brothers.",
     [
      "I have three brother.",
      "I have three brothes."
     ],
     "Sau three danh từ phải ở số nhiều: brothers."
    ],
    [
     "Plural of 'key':",
     "keys",
     [
      "kies",
      "keyes"
     ],
     "Nguyên âm e trước y nên chỉ thêm -s."
    ],
    [
     "The ___ are playing in the garden.",
     "children",
     [
      "child",
      "childs"
     ],
     "Are là động từ số nhiều nên cần children."
    ]
   ],
   "gaps": [
    [
     "one watch → two ___",
     [
      "watches"
     ],
     "",
     "Tận cùng ch nên thêm -es."
    ],
    [
     "one leaf → many ___",
     [
      "leaves"
     ],
     "",
     "Leaf đổi f thành ves."
    ],
    [
     "one woman → two ___",
     [
      "women"
     ],
     "",
     "Woman là danh từ bất quy tắc: women."
    ],
    [
     "one baby → three ___",
     [
      "babies"
     ],
     "",
     "Phụ âm b + y đổi thành -ies."
    ]
   ],
   "sentences": [
    [
     "There are three boxes on the shelf.",
     "Có ba cái hộp trên kệ."
    ],
    [
     "The babies are sleeping.",
     "Các em bé đang ngủ."
    ],
    [
     "My two children go to the same school.",
     "Hai đứa con tôi học cùng trường."
    ],
    [
     "Many people live in this city.",
     "Nhiều người sống ở thành phố này."
    ],
    [
     "I cut the bread with two knives.",
     "Tôi cắt bánh mì bằng hai con dao."
    ]
   ]
  },
  {
   "id": "wh-a1-countable-uncountable",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Countable & uncountable nouns",
   "en": "Từ loại",
   "desc": "Danh từ đếm được có số ít và số nhiều, đi với a/an, many, a few.",
   "formula": [
    [
     "Công thức",
     "a/an/many/few + đếm được · much/little + không đếm được"
    ],
    [
     "Đếm được",
     "a/an + số ít · số từ + số nhiều"
    ],
    [
     "Không đếm được",
     "không thêm -s, không dùng a/an, động từ số ít"
    ],
    [
     "Đơn vị đo",
     "a piece/bottle/glass/cup/slice of + danh từ không đếm được"
    ],
    [
     "Hỏi số lượng",
     "How many + đếm được số nhiều · How much + không đếm được"
    ]
   ],
   "grammar": [
    [
     "Phân biệt đếm được và không đếm được",
     "Nếu có thể đếm từng cái (one egg, two eggs) thì đó là danh từ đếm được. Chất lỏng, chất liệu, khái niệm trừu tượng thường không đếm được.",
     "an egg, three eggs | rice, water, music, advice"
    ],
    [
     "Chọn từ chỉ lượng phù hợp",
     "Many và a few đi với danh từ đếm được số nhiều. Much và a little đi với danh từ không đếm được.",
     "How many apples do you want? | How much milk do you need?"
    ],
    [
     "Đếm danh từ không đếm được bằng đơn vị",
     "Dùng a/an + đơn vị + of + danh từ không đếm được.",
     "a glass of water | a piece of advice"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Hỏi: có đếm từng cái được không?: Nếu nói được one, two, three trước danh từ thì đó là danh từ đếm được. 2) Chọn từ chỉ lượng và mạo từ: Đếm được số ít cần a/an. Số nhiều dùng many, a few. Không đếm được dùng much, a little hoặc some. 3) Chia động từ: Danh từ không đếm được đi với động từ số ít, dù nghĩa có vẻ nhiều.",
     "two books (đếm được) · two rices (sai, rice không đếm được) | a few friends · a little time | The information is useful."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I need an advice. Đúng: I need some advice. / I need a piece of advice. (Advice không đếm được nên không dùng an.) Sai: The informations are useful. Đúng: The information is useful. (Information không có số nhiều và đi với động từ số ít.) Sai: How many water do you drink? Đúng: How much water do you drink? (Water không đếm được nên dùng How much.) Sai: The bread are fresh. Đúng: The bread is fresh. (Bread không đếm được nên đi với is.)",
     "I need some advice. / I need a piece of advice. | The information is useful. | How much water do you drink? | The bread is fresh."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Danh từ này đếm được từng cái hay không? · Đã chọn đúng many / much hoặc a few / a little chưa? · Danh từ không đếm được có bị thêm -s hoặc a/an nhầm không? · Động từ đã khớp với số của danh từ chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Which word is uncountable?",
     "rice",
     [
      "apple",
      "book"
     ],
     "Rice không đếm từng cái được; apple và book đếm được."
    ],
    [
     "I need some ___.",
     "advice",
     [
      "advices",
      "an advice"
     ],
     "Advice không đếm được nên không có -s và không dùng an."
    ],
    [
     "How ___ eggs do you want?",
     "many",
     [
      "much",
      "a lot"
     ],
     "Eggs đếm được số nhiều nên dùng How many."
    ],
    [
     "How ___ money do you have?",
     "much",
     [
      "many",
      "few"
     ],
     "Money không đếm được nên dùng How much."
    ],
    [
     "Which sentence is correct?",
     "The information is useful.",
     [
      "The information are useful.",
      "The informations is useful."
     ],
     "Information không đếm được, đi với is và không có -s."
    ],
    [
     "I would like a ___ of water.",
     "glass",
     [
      "slice",
      "piece"
     ],
     "Nước thường đo bằng glass (cốc) hoặc bottle (chai)."
    ]
   ],
   "gaps": [
    [
     "Please give me a ___ of paper.",
     [
      "piece",
      "sheet"
     ],
     "",
     "Paper không đếm được nên đếm bằng a piece of hoặc a sheet of."
    ],
    [
     "There isn't ___ milk in the fridge. (much / many)",
     [
      "much"
     ],
     "",
     "Milk không đếm được nên dùng much."
    ],
    [
     "I have only a ___ friends here. (few / little)",
     [
      "few"
     ],
     "",
     "Friends đếm được số nhiều nên dùng a few."
    ],
    [
     "Her advice ___ always useful. (is / are)",
     [
      "is"
     ],
     "",
     "Advice không đếm được nên đi với is."
    ]
   ],
   "sentences": [
    [
     "I have an egg and some rice for breakfast.",
     "Bữa sáng tôi ăn một quả trứng và một ít cơm."
    ],
    [
     "She gave me a useful piece of advice.",
     "Cô ấy cho tôi một lời khuyên hữu ích."
    ],
    [
     "How much water do we need?",
     "Chúng ta cần bao nhiêu nước?"
    ],
    [
     "There are only a few chairs in the room.",
     "Trong phòng chỉ có vài cái ghế."
    ],
    [
     "The news is good today.",
     "Hôm nay có tin tốt."
    ]
   ]
  },
  {
   "id": "wh-a1-possessives",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Possessives",
   "en": "Từ loại",
   "desc": "Tính từ sở hữu (my, your, his, her, its, our, their) đứng trước danh từ.",
   "formula": [
    [
     "Công thức",
     "my/your/his... + danh từ · mine/yours... · danh từ + 's"
    ],
    [
     "Tính từ sở hữu",
     "my · your · his · her · its · our · their + danh từ"
    ],
    [
     "Đại từ sở hữu",
     "mine · yours · his · hers · ours · theirs"
    ],
    [
     "Dạng 's",
     "danh từ số ít + 's · danh từ số nhiều có -s + '"
    ],
    [
     "Hỏi chủ sở hữu",
     "Whose + danh từ + is/are + this/these?"
    ]
   ],
   "grammar": [
    [
     "Nói vật thuộc về ai",
     "Tính từ sở hữu luôn đi kèm một danh từ ngay sau nó.",
     "This is my bag. | Their house is big."
    ],
    [
     "Thay thế cả cụm danh từ",
     "Đại từ sở hữu đứng một mình, không có danh từ theo sau, để tránh lặp lại.",
     "This bag is mine. | Is that pen yours?"
    ],
    [
     "Nói sở hữu bằng tên người hoặc danh từ",
     "Thêm 's vào danh từ số ít. Danh từ số nhiều có -s thì chỉ thêm dấu '.",
     "Nam's book | the students' room"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định chủ sở hữu: Chủ sở hữu là ai: I, you, he, she, it, we hay they? Từ đó chọn my, your, his, her, its, our, their. 2) Xem có danh từ theo sau không: Có danh từ ngay sau thì dùng tính từ sở hữu. Không có danh từ thì dùng đại từ sở hữu. 3) Dùng 's với tên và danh từ: Dùng 's với danh từ số ít. Danh từ số nhiều tận cùng -s chỉ thêm '.",
     "Lan (= she) → her | This is my pen. / This pen is mine. | my brother's room · my parents' room"
    ],
    [
     "Lỗi thường gặp",
     "Sai: This book is her's. Đúng: This book is hers. (Đại từ sở hữu hers, yours, ours, theirs không có dấu nháy.) Sai: The cat licks it's paw. Đúng: The cat licks its paw. (It's là it is. Chỉ sở hữu dùng its.) Sai: He is a friend of me. Đúng: He is a friend of mine. (Sau of dùng đại từ sở hữu.) Sai: The girls toys are here. Đúng: The girls' toys are here. (Danh từ số nhiều có -s thêm dấu ' để chỉ sở hữu.)",
     "This book is hers. | The cat licks its paw. | He is a friend of mine. | The girls' toys are here."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ sở hữu là ngôi nào, số ít hay số nhiều? · Có danh từ ngay sau không? Có thì dùng my, your...; không thì dùng mine, yours... · Đã phân biệt its (của nó) và it's (it is) chưa? · Dấu ' đặt đúng chỗ với danh từ số ít và số nhiều chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "This is ___ book. (I)",
     "my",
     [
      "mine",
      "me"
     ],
     "Có danh từ book theo sau nên dùng tính từ sở hữu my."
    ],
    [
     "That bag is ___.",
     "hers",
     [
      "her",
      "she"
     ],
     "Không có danh từ theo sau nên dùng đại từ sở hữu hers."
    ],
    [
     "The dog is hungry. ___ bowl is empty.",
     "Its",
     [
      "It's",
      "Their"
     ],
     "Chỉ sở hữu của con vật số ít dùng its. It's nghĩa là it is."
    ],
    [
     "Which sentence is correct?",
     "Is this pen yours?",
     [
      "Is this pen your?",
      "Is this pen you?"
     ],
     "Pen đã đứng trước nên phía sau không có danh từ, dùng yours."
    ],
    [
     "My two sisters share a room. It is my ___ room.",
     "sisters'",
     [
      "sister's",
      "sisters"
     ],
     "Sisters là số nhiều có -s nên chỉ thêm dấu '."
    ],
    [
     "Whose phone is this? — It's ___.",
     "Nam's",
     [
      "Nam",
      "Nams"
     ],
     "Tên người thêm 's để chỉ sở hữu."
    ]
   ],
   "gaps": [
    [
     "We love ___ teacher. (we)",
     [
      "our"
     ],
     "",
     "We → our, đứng trước danh từ teacher."
    ],
    [
     "Is this your umbrella? — No, it isn't ___. (I)",
     [
      "mine"
     ],
     "",
     "Không có danh từ theo sau nên dùng mine."
    ],
    [
     "They are with ___ parents. (they)",
     [
      "their"
     ],
     "",
     "They → their, đứng trước danh từ parents."
    ],
    [
     "This house is not ours. It is ___. (they)",
     [
      "theirs"
     ],
     "",
     "Đại từ sở hữu của they là theirs."
    ]
   ],
   "sentences": [
    [
     "Her name is Mai and she loves her job.",
     "Tên cô ấy là Mai và cô ấy yêu công việc của mình."
    ],
    [
     "This is not my umbrella. Mine is blue.",
     "Đây không phải ô của tôi. Ô của tôi màu xanh."
    ],
    [
     "The dog is wagging its tail.",
     "Con chó đang vẫy đuôi."
    ],
    [
     "Whose bag is this? — It's Nam's.",
     "Cái cặp này của ai? — Của Nam."
    ],
    [
     "These are the teachers' books.",
     "Đây là sách của các giáo viên."
    ]
   ]
  },
  {
   "id": "wh-a1-this-that-these-those",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "This, that, these, those",
   "en": "Từ loại",
   "desc": "This và these chỉ người hoặc vật ở gần người nói. That và those chỉ người hoặc vật ở xa. This và that dùng cho số ít, these và those dùng cho số nhiều.",
   "formula": [
    [
     "Công thức",
     "this/that + số ít · these/those + số nhiều"
    ],
    [
     "Đại từ số ít",
     "This/That + is + danh từ"
    ],
    [
     "Đại từ số nhiều",
     "These/Those + are + danh từ"
    ],
    [
     "Đứng trước danh từ",
     "this/that + số ít · these/those + số nhiều"
    ],
    [
     "Câu hỏi",
     "Is this/that...? · Are these/those...?"
    ]
   ],
   "grammar": [
    [
     "Chỉ vật gần và xa",
     "Gần người nói dùng this/these, xa người nói dùng that/those.",
     "This pen is mine. (trong tay) | That tree is tall. (ở xa)"
    ],
    [
     "Làm đại từ đứng một mình",
     "Không có danh từ theo sau; thường đi với be.",
     "What is this? | Those are my shoes."
    ],
    [
     "Giới thiệu người",
     "Giới thiệu người đứng cạnh mình dùng This is...; hỏi người ở xa dùng Who is that?",
     "This is my friend, Minh. | Who is that over there?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Gần hay xa người nói?: Gần chọn this hoặc these. Xa chọn that hoặc those. 2) Số ít hay số nhiều?: Số ít chọn this hoặc that. Số nhiều chọn these hoặc those. 3) Chia động từ be cho khớp: This và that đi với is. These và those đi với are.",
     "the book in my hand → this | two cups over there → those | These are my keys."
    ],
    [
     "Lỗi thường gặp",
     "Sai: These book is new. Đúng: This book is new. (Book là số ít nên dùng this, không dùng these.) Sai: Those is my car. Đúng: That is my car. (Is đi với số ít nên dùng that.) Sai: What are that? Đúng: What is that? (That là số ít nên động từ là is.) Sai: These is my friend, Lan. Đúng: This is my friend, Lan. (Giới thiệu một người dùng This is.)",
     "This book is new. | That is my car. | What is that? | This is my friend, Lan."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Vật hoặc người ở gần hay xa? · Số ít hay số nhiều? · Động từ be đã khớp (is với this/that, are với these/those) chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ is my pen. (gần, một cái)",
     "This",
     [
      "These",
      "Those"
     ],
     "Một vật gần nên dùng This."
    ],
    [
     "___ are my shoes. (ở xa, hai chiếc)",
     "Those",
     [
      "That",
      "This"
     ],
     "Số nhiều ở xa nên dùng Those."
    ],
    [
     "Look at ___ birds over there!",
     "those",
     [
      "this",
      "that"
     ],
     "Birds là số nhiều, ở xa nên dùng those."
    ],
    [
     "How much is ___ shirt in my hand?",
     "this",
     [
      "these",
      "those"
     ],
     "Shirt là số ít, ở gần nên dùng this."
    ],
    [
     "Which sentence is correct?",
     "This book is old.",
     [
      "These book is old.",
      "This books are old."
     ],
     "This đi với danh từ số ít và is."
    ],
    [
     "Which sentence is correct?",
     "Are those your keys?",
     [
      "Is those your keys?",
      "Are that your keys?"
     ],
     "Those là số nhiều nên đi với Are."
    ]
   ],
   "gaps": [
    [
     "___ are my glasses on the table next to me.",
     [
      "these"
     ],
     "",
     "Glasses số nhiều, ở gần nên dùng These."
    ],
    [
     "Look at ___ mountain over there!",
     [
      "that"
     ],
     "",
     "Mountain số ít, ở xa nên dùng that."
    ],
    [
     "___ children over there are my cousins.",
     [
      "those"
     ],
     "",
     "Children số nhiều, ở xa nên dùng Those."
    ],
    [
     "Hello, Mum. ___ is my friend, Minh. (bạn đang đứng cạnh bạn)",
     [
      "this"
     ],
     "",
     "Giới thiệu người đứng cạnh mình dùng This is."
    ]
   ],
   "sentences": [
    [
     "This is my notebook and that is yours.",
     "Đây là vở của tôi còn kia là của bạn."
    ],
    [
     "These apples are fresh, but those are old.",
     "Những quả táo này tươi, còn những quả kia thì cũ."
    ],
    [
     "Look at that bird in the tree!",
     "Nhìn con chim trên cây kia kìa!"
    ],
    [
     "Hello, Mum. This is my friend, Lan.",
     "Con chào mẹ. Đây là bạn con, Lan."
    ],
    [
     "Are those your parents over there?",
     "Những người kia có phải bố mẹ bạn không?"
    ]
   ]
  },
  {
   "id": "wh-a1-articles",
   "group": 7,
   "grade": 4,
   "icon": "🅰️",
   "title": "A, an & the",
   "en": "Mạo từ",
   "desc": "A và an dùng trước danh từ đếm được số ít khi nhắc lần đầu hoặc nói về một cái bất kỳ.",
   "formula": [
    [
     "Công thức",
     "a/an + số ít đếm được (chưa xác định) · the + đã xác định"
    ],
    [
     "a + âm phụ âm",
     "a + danh từ bắt đầu bằng âm phụ âm"
    ],
    [
     "an + âm nguyên âm",
     "an + danh từ bắt đầu bằng âm nguyên âm"
    ],
    [
     "The",
     "the + danh từ đã xác định"
    ],
    [
     "Không mạo từ",
     "danh từ số nhiều/không đếm được nói chung; bữa ăn; môn thể thao"
    ]
   ],
   "grammar": [
    [
     "Nhắc lần đầu rồi nhắc lại",
     "Lần đầu dùng a/an. Những lần sau, vì đã xác định, dùng the.",
     "I have a cat. The cat is black. | She bought an apple. The apple was sweet."
    ],
    [
     "Nói về vật duy nhất hoặc đã rõ",
     "Dùng the với vật chỉ có một hoặc người nghe biết ngay là cái nào.",
     "The sun is hot. | Please close the door."
    ],
    [
     "Nghề nghiệp và nói chung",
     "Nghề nghiệp dùng a/an. Danh từ số nhiều hoặc không đếm được nói chung không dùng mạo từ.",
     "He is a doctor. | I like music. She loves cats."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Danh từ là gì?: Số nhiều hoặc không đếm được nói chung thì không dùng mạo từ. Danh từ đếm được số ít luôn cần a/an hoặc the. 2) Người nghe có biết là cái nào không?: Có biết rõ thì dùng the. Chưa rõ, nhắc lần đầu thì dùng a/an. 3) Chọn a hay an theo âm đọc: Nhìn vào âm đầu, không nhìn vào chữ cái đầu.",
     "I like dogs. (nói chung) · I have a dog. | Open the window. (cái cửa sổ trong phòng) · I need a pen. | an umbrella, a university, an hour"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She is teacher. Đúng: She is a teacher. (Danh từ đếm được số ít cần a/an. Tiếng Việt không có mạo từ nên rất dễ quên.) Sai: I have a umbrella. Đúng: I have an umbrella. (Umbrella bắt đầu bằng âm nguyên âm /ʌ/ nên dùng an.) Sai: I saw a dog. A dog was big. Đúng: I saw a dog. The dog was big. (Lần nhắc thứ hai đã xác định nên dùng the.) Sai: I have the breakfast at seven. Đúng: I have breakfast at seven. (Tên bữa ăn nói chung không dùng mạo từ.)",
     "She is a teacher. | I have an umbrella. | I saw a dog. The dog was big. | I have breakfast at seven."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Danh từ đếm được số ít đã có a/an hoặc the chưa? · Chọn a hay an theo âm đọc đã đúng chưa? · Danh từ đã được nhắc hoặc duy nhất chưa? Nếu rồi thì dùng the. · Số nhiều hoặc không đếm được nói chung có đang bị thêm the không cần thiết không?",
     ""
    ]
   ],
   "quiz": [
    [
     "I eat ___ apple every day.",
     "an",
     [
      "a",
      "the"
     ],
     "Apple bắt đầu bằng nguyên âm nên dùng an."
    ],
    [
     "She is ___ engineer.",
     "an",
     [
      "a",
      "the"
     ],
     "Engineer bắt đầu bằng âm nguyên âm; nghề nghiệp dùng a/an."
    ],
    [
     "He is ___ university student.",
     "a",
     [
      "an",
      "the"
     ],
     "University đọc là /juː/, bắt đầu bằng âm phụ âm nên dùng a."
    ],
    [
     "I have a cat. ___ cat is black.",
     "The",
     [
      "A",
      "An"
     ],
     "Con mèo đã được nhắc nên dùng The."
    ],
    [
     "___ sun is very hot today.",
     "The",
     [
      "A",
      "An"
     ],
     "Mặt trời là duy nhất nên dùng The."
    ],
    [
     "Which sentence is correct?",
     "I have breakfast at seven.",
     [
      "I have a breakfast at seven.",
      "I have the breakfast at seven."
     ],
     "Tên bữa ăn nói chung không dùng mạo từ."
    ]
   ],
   "gaps": [
    [
     "It takes ___ hour to get there.",
     [
      "an"
     ],
     "",
     "Hour có h câm, đọc bắt đầu bằng nguyên âm nên dùng an."
    ],
    [
     "My father is ___ doctor.",
     [
      "a"
     ],
     "",
     "Nghề nghiệp dùng a; doctor bắt đầu bằng âm phụ âm."
    ],
    [
     "Please close ___ door. (cánh cửa trong phòng này)",
     [
      "the"
     ],
     "",
     "Cả hai người đều biết cánh cửa nào nên dùng the."
    ],
    [
     "She plays ___ guitar every evening.",
     [
      "the"
     ],
     "",
     "Với nhạc cụ, tiếng Anh thường dùng the: play the guitar."
    ]
   ],
   "sentences": [
    [
     "I saw a dog in the park. The dog was very big.",
     "Tôi thấy một con chó trong công viên. Con chó đó rất to."
    ],
    [
     "She is an engineer and her husband is a teacher.",
     "Cô ấy là kỹ sư còn chồng cô là giáo viên."
    ],
    [
     "The moon is bright tonight.",
     "Đêm nay trăng sáng."
    ],
    [
     "We have lunch at twelve.",
     "Chúng tôi ăn trưa lúc mười hai giờ."
    ],
    [
     "It takes an hour to get to the airport.",
     "Đi đến sân bay mất một tiếng."
    ]
   ]
  },
  {
   "id": "wh-a1-some-any-much-many",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Some, any, much & many",
   "en": "Lượng từ",
   "desc": "Some dùng trong câu khẳng định và trong lời mời hoặc đề nghị. Any dùng trong câu phủ định và câu hỏi.",
   "formula": [
    [
     "Công thức",
     "some/any + số nhiều hoặc không đếm được · many + đếm được · much + không đếm được"
    ],
    [
     "Khẳng định",
     "S + V + some + danh từ"
    ],
    [
     "Phủ định",
     "S + do/does not + V + any + danh từ"
    ],
    [
     "Nghi vấn",
     "Do/Does + S + V + any + danh từ?"
    ],
    [
     "Hỏi số lượng",
     "How many + đếm được · How much + không đếm được"
    ],
    [
     "Số lượng lớn",
     "a lot of + đếm được/không đếm được"
    ]
   ],
   "grammar": [
    [
     "Nói về một lượng không xác định",
     "Khẳng định dùng some. Phủ định và nghi vấn dùng any.",
     "I have some friends here. | She doesn't have any brothers."
    ],
    [
     "Mời hoặc đề nghị",
     "Lời mời, lời đề nghị mong nhận câu trả lời yes vẫn dùng some.",
     "Would you like some tea? | Can I have some water?"
    ],
    [
     "Hỏi và nói về số lượng lớn",
     "How many với đếm được, How much với không đếm được. Khẳng định dùng a lot of.",
     "How many students are there? | We have a lot of homework."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định loại câu: Khẳng định dùng some. Phủ định hoặc câu hỏi thường dùng any. Lời mời, đề nghị dùng some. 2) Xác định danh từ đếm được hay không: Đếm được số nhiều dùng many. Không đếm được dùng much. 3) Chọn a lot of trong câu khẳng định: Trong câu khẳng định thông thường nói a lot of thay cho much hoặc many.",
     "I have some books. / I don't have any books. | many people · much time | We have a lot of time."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I don't have some money. Đúng: I don't have any money. (Câu phủ định dùng any, không dùng some.) Sai: There is much people here. Đúng: There are many people here. / There are a lot of people here. (People đếm được số nhiều nên dùng many hoặc a lot of.) Sai: How many time do you have? Đúng: How much time do you have? (Time (thời gian) không đếm được nên dùng How much.) Sai: She has much friends. Đúng: She has many friends. / She has a lot of friends. (Friends đếm được số nhiều nên dùng many.)",
     "I don't have any money. | There are many people here. / There are a lot of people here. | How much time do you have? | She has many friends. / She has a lot of friends."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu này khẳng định, phủ định hay nghi vấn? · Danh từ đếm được hay không đếm được? · Có thể thay bằng a lot of trong câu khẳng định không?",
     ""
    ]
   ],
   "quiz": [
    [
     "I have ___ good friends.",
     "some",
     [
      "any",
      "much"
     ],
     "Câu khẳng định, danh từ số nhiều nên dùng some."
    ],
    [
     "She doesn't have ___ time.",
     "any",
     [
      "some",
      "many"
     ],
     "Câu phủ định dùng any; time không đếm được nên không dùng many."
    ],
    [
     "Do you have ___ brothers or sisters?",
     "any",
     [
      "some",
      "much"
     ],
     "Câu hỏi dùng any."
    ],
    [
     "Would you like ___ coffee?",
     "some",
     [
      "any",
      "many"
     ],
     "Lời mời dùng some."
    ],
    [
     "How ___ students are in your class?",
     "many",
     [
      "much",
      "any"
     ],
     "Students đếm được số nhiều nên dùng How many."
    ],
    [
     "We don't have ___ rice.",
     "much",
     [
      "many",
      "a few"
     ],
     "Rice không đếm được; phủ định dùng much."
    ]
   ],
   "gaps": [
    [
     "There aren't ___ chairs in the room. (some / any)",
     [
      "any"
     ],
     "",
     "Câu phủ định dùng any."
    ],
    [
     "How ___ sugar do you want in your tea?",
     [
      "much"
     ],
     "",
     "Sugar không đếm được nên dùng How much."
    ],
    [
     "He has a lot of books, but he doesn't read ___ of them. (many / much)",
     [
      "many"
     ],
     "",
     "Them là books, đếm được số nhiều nên dùng many."
    ],
    [
     "Can I have ___ water, please?",
     [
      "some"
     ],
     "",
     "Lời đề nghị dùng some."
    ]
   ],
   "sentences": [
    [
     "There are some oranges on the table.",
     "Có vài quả cam trên bàn."
    ],
    [
     "I don't have any money today.",
     "Hôm nay tôi không có đồng nào."
    ],
    [
     "Do you have any brothers or sisters?",
     "Bạn có anh chị em nào không?"
    ],
    [
     "How many people are in your family?",
     "Gia đình bạn có mấy người?"
    ],
    [
     "She doesn't drink much coffee.",
     "Cô ấy không uống nhiều cà phê."
    ]
   ]
  },
  {
   "id": "wh-a1-adjectives-adverbs",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Adjectives & adverbs",
   "en": "Từ loại",
   "desc": "Tính từ bổ nghĩa cho danh từ và đứng sau be hoặc các động từ nối như look, feel, smell.",
   "formula": [
    [
     "Công thức",
     "tính từ + danh từ · V + trạng từ"
    ],
    [
     "Tính từ + danh từ",
     "a/an + adj + noun"
    ],
    [
     "Be / look / feel + tính từ",
     "S + be/look/feel + adj"
    ],
    [
     "Động từ + trạng từ -ly",
     "adj + ly → adverb (y → ily)"
    ],
    [
     "Trạng từ bất quy tắc",
     "good → well · fast, hard, late giữ nguyên"
    ]
   ],
   "grammar": [
    [
     "Miêu tả người và vật",
     "Tính từ đứng trước danh từ hoặc sau be.",
     "a quiet room | The room is quiet."
    ],
    [
     "Miêu tả cách hành động diễn ra",
     "Trạng từ cách thức đứng sau động từ hoặc sau tân ngữ.",
     "He speaks slowly. | She sings beautifully."
    ],
    [
     "Tính từ sau động từ nối",
     "Look, feel, smell, sound, taste đi với tính từ, không đi với trạng từ.",
     "She looks happy. | The soup smells good."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Từ đó bổ nghĩa cho gì?: Bổ nghĩa cho danh từ thì dùng tính từ. Bổ nghĩa cho động từ thì dùng trạng từ. 2) Kiểm tra động từ nối: Sau be, look, feel, smell, sound, taste dùng tính từ để miêu tả chủ ngữ. 3) Tạo trạng từ: Thêm -ly. Tận cùng y thì đổi thành -ily. Học riêng các trạng từ bất quy tắc.",
     "a careful driver · drives carefully | She looks happy. (không phải happily) | easy → easily · good → well"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She speaks English good. Đúng: She speaks English well. (Bổ nghĩa cho động từ phải dùng trạng từ well, không dùng tính từ good.) Sai: He drives careful. Đúng: He drives carefully. (Cần trạng từ carefully để bổ nghĩa cho drives.) Sai: She looks happily. Đúng: She looks happy. (Look ở đây là động từ nối nên theo sau là tính từ.) Sai: He runs fastly. Đúng: He runs fast. (Fast là trạng từ bất quy tắc, không thêm -ly.)",
     "She speaks English well. | He drives carefully. | She looks happy. | He runs fast."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Từ này bổ nghĩa cho danh từ hay cho động từ? · Động từ trước nó có phải động từ nối không (be, look, feel, smell)? · Trạng từ -ly đã viết đúng chính tả chưa? · Có phải trạng từ bất quy tắc (well, fast, hard, late) không?",
     ""
    ]
   ],
   "quiz": [
    [
     "She is a ___ singer.",
     "good",
     [
      "well",
      "goodly"
     ],
     "Bổ nghĩa cho danh từ singer nên dùng tính từ good."
    ],
    [
     "She sings ___.",
     "well",
     [
      "good",
      "nice"
     ],
     "Bổ nghĩa cho động từ sings nên dùng trạng từ well."
    ],
    [
     "He drives very ___.",
     "carefully",
     [
      "careful",
      "care"
     ],
     "Bổ nghĩa cho động từ drives nên dùng trạng từ carefully."
    ],
    [
     "The soup smells ___.",
     "delicious",
     [
      "deliciously",
      "deliciousness"
     ],
     "Smell là động từ nối nên theo sau là tính từ."
    ],
    [
     "Which sentence is correct?",
     "He runs fast.",
     [
      "He runs fastly.",
      "He runs fasts."
     ],
     "Fast vừa là tính từ vừa là trạng từ, giữ nguyên dạng."
    ],
    [
     "Which sentence is correct?",
     "She looks happy.",
     [
      "She looks happily.",
      "She looks happiness."
     ],
     "Look là động từ nối nên dùng tính từ happy."
    ]
   ],
   "gaps": [
    [
     "She speaks ___. (quiet)",
     [
      "quietly"
     ],
     "",
     "Thêm -ly vào tính từ quiet: quietly."
    ],
    [
     "He studies very ___. (hard / hardly)",
     [
      "hard"
     ],
     "",
     "Hard là trạng từ nghĩa chăm chỉ. Hardly nghĩa là hầu như không."
    ],
    [
     "My brother is a ___ driver. (careful / carefully)",
     [
      "careful"
     ],
     "",
     "Bổ nghĩa cho danh từ driver nên dùng tính từ careful."
    ],
    [
     "They played the game very ___. (bad / badly)",
     [
      "badly"
     ],
     "",
     "Bổ nghĩa cho động từ played nên dùng trạng từ badly."
    ]
   ],
   "sentences": [
    [
     "She is a good singer, and she sings well.",
     "Cô ấy là ca sĩ giỏi và hát rất hay."
    ],
    [
     "He drives carefully because the road is wet.",
     "Anh ấy lái xe cẩn thận vì đường ướt."
    ],
    [
     "The cake smells delicious.",
     "Chiếc bánh có mùi rất thơm ngon."
    ],
    [
     "My brother works hard and runs fast.",
     "Em trai tôi làm việc chăm chỉ và chạy nhanh."
    ],
    [
     "The children are playing happily in the garden.",
     "Bọn trẻ đang chơi đùa vui vẻ trong vườn."
    ]
   ]
  },
  {
   "id": "wh-a1-adverbs-of-frequency",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Adverbs of frequency",
   "en": "Từ loại",
   "desc": "Trạng từ tần suất (always, usually, often, sometimes, rarely, never) cho biết một việc xảy ra thường xuyên đến mức nào, trả lời câu hỏi How often.",
   "formula": [
    [
     "Công thức",
     "S + adverb + V · S + be + adverb"
    ],
    [
     "Trước động từ thường",
     "S + adverb + V"
    ],
    [
     "Sau động từ be",
     "S + be + adverb"
    ],
    [
     "Với trợ động từ",
     "S + trợ động từ + adverb + V"
    ],
    [
     "Đầu câu hoặc cuối câu",
     "Sometimes/Usually + S + V · cụm tần suất đứng cuối"
    ]
   ],
   "grammar": [
    [
     "Nói về thói quen",
     "Dùng trạng từ tần suất với thì hiện tại đơn để nói thói quen.",
     "I always brush my teeth after dinner. | She never eats meat."
    ],
    [
     "Hỏi mức độ thường xuyên",
     "Hỏi bằng How often, trả lời bằng trạng từ tần suất hoặc cụm như twice a week.",
     "How often do you swim? — Twice a week. | He often plays chess."
    ],
    [
     "So sánh mức độ",
     "Thang từ 100% đến 0% giúp chọn từ phù hợp.",
     "always (100%) → usually → often → sometimes → rarely → never (0%)"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn trạng từ theo mức độ: Dựa vào thang từ always đến never để chọn từ đúng nghĩa. 2) Xem động từ là be hay động từ thường: Với be thì trạng từ đứng sau. Với động từ thường thì trạng từ đứng trước. 3) Chú ý phủ định: Never đã mang nghĩa phủ định nên không dùng thêm not hoặc don't.",
     "about once a year → rarely | He is always happy. / He always smiles. | I never eat fish. (không nói I don't never eat fish)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I go often to the cinema. Đúng: I often go to the cinema. (Trạng từ tần suất đứng trước động từ thường.) Sai: She never is late. Đúng: She is never late. (Với be, trạng từ đứng sau be.) Sai: I don't never watch TV. Đúng: I never watch TV. (Never đã có nghĩa phủ định, không dùng thêm don't.) Sai: He always is happy. Đúng: He is always happy. (Trạng từ tần suất đứng sau be.)",
     "I often go to the cinema. | She is never late. | I never watch TV. | He is always happy."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã chọn đúng mức độ từ always đến never chưa? · Động từ là be hay động từ thường? Từ đó đặt trạng từ trước hay sau? · Có dùng never cùng với not không? Không nên.",
     ""
    ]
   ],
   "quiz": [
    [
     "She ___ gets up at six every day.",
     "always",
     [
      "never",
      "rarely"
     ],
     "Every day nghĩa là mọi ngày nên dùng always."
    ],
    [
     "Which sentence is correct?",
     "I usually go to bed at ten.",
     [
      "I go usually to bed at ten.",
      "Usually I am go to bed at ten."
     ],
     "Trạng từ tần suất đứng trước động từ thường go."
    ],
    [
     "Which sentence is correct?",
     "He is never late.",
     [
      "He late is never.",
      "He never is late."
     ],
     "Trạng từ tần suất đứng sau be."
    ],
    [
     "We ___ eat out. It is too expensive, so we go about once a year.",
     "rarely",
     [
      "always",
      "often"
     ],
     "Khoảng một lần một năm là rất hiếm nên dùng rarely."
    ],
    [
     "Which word means 0% of the time?",
     "never",
     [
      "rarely",
      "sometimes"
     ],
     "Never nghĩa là không bao giờ."
    ],
    [
     "Which sentence is correct?",
     "I never eat fish.",
     [
      "I don't never eat fish.",
      "I eat never fish."
     ],
     "Never đã là phủ định, đứng trước động từ thường."
    ]
   ],
   "gaps": [
    [
     "I ___ drink coffee in the evening. (0%)",
     [
      "never"
     ],
     "",
     "0% là never."
    ],
    [
     "She is ___ at home on Sundays. (100%)",
     [
      "always"
     ],
     "",
     "100% là always, đứng sau be."
    ],
    [
     "How ___ do you check your email? — Twice a day.",
     [
      "often"
     ],
     "",
     "Hỏi mức độ thường xuyên dùng How often."
    ],
    [
     "My brother ___ helps me with my homework. (gần như không bao giờ)",
     [
      "rarely"
     ],
     "",
     "Gần như không bao giờ là rarely."
    ]
   ],
   "sentences": [
    [
     "My mother always gets up at five.",
     "Mẹ tôi lúc nào cũng dậy lúc năm giờ."
    ],
    [
     "He is usually at home on Sundays.",
     "Anh ấy thường ở nhà vào Chủ nhật."
    ],
    [
     "I don't often watch TV in the evening.",
     "Buổi tối tôi không hay xem tivi."
    ],
    [
     "She rarely eats out because it is expensive.",
     "Cô ấy hiếm khi ăn ngoài vì đắt."
    ],
    [
     "How often do you visit your grandparents? — About once a month.",
     "Bạn có thường thăm ông bà không? — Khoảng một lần một tháng."
    ]
   ]
  },
  {
   "id": "wh-a1-prepositions-time-place",
   "group": 7,
   "grade": 4,
   "icon": "📍",
   "title": "Prepositions of time & place",
   "en": "Giới từ",
   "desc": "Với thời gian: at dùng cho giờ và thời điểm, on cho ngày, in cho khoảng thời gian dài hơn như tháng, năm, mùa, buổi.",
   "formula": [
    [
     "Công thức",
     "at + giờ/điểm · on + ngày/bề mặt · in + khoảng thời gian/không gian"
    ],
    [
     "At",
     "at + giờ, thời điểm, điểm cụ thể"
    ],
    [
     "On",
     "on + ngày, ngày tháng, bề mặt"
    ],
    [
     "In",
     "in + tháng, năm, mùa, buổi; không gian bao quanh"
    ],
    [
     "Vị trí tương đối",
     "next to · between · behind · in front of · under · above"
    ]
   ],
   "grammar": [
    [
     "Nói về thời gian",
     "Chọn at, on, in theo độ dài của khoảng thời gian.",
     "at 7 o'clock | on Monday | in July"
    ],
    [
     "Nói về nơi chốn",
     "At cho điểm, on cho bề mặt, in cho không gian bao quanh.",
     "at the bus stop | on the table | in the room"
    ],
    [
     "Chỉ vị trí tương đối",
     "Dùng giới từ vị trí để nói vật nằm ở đâu so với vật khác.",
     "The bank is next to the school. | The cat is under the chair."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Là thời gian hay nơi chốn?: Xác định ý nghĩa trước rồi chọn nhóm giới từ phù hợp. 2) Chọn at, on hay in theo phạm vi: Từ nhỏ đến lớn: at (điểm) → on (ngày, bề mặt) → in (khoảng dài, không gian). 3) Học các cụm cố định: Có những cụm phải học thuộc: at night, in the morning, at home, in bed.",
     "at 8 (thời gian) · at school (nơi chốn) | at 7:30 → on Monday → in January | I study in the evening and sleep at night."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I get up in 6 o'clock. Đúng: I get up at 6 o'clock. (Giờ cụ thể dùng at.) Sai: See you in Monday. Đúng: See you on Monday. (Thứ trong tuần dùng on.) Sai: She lives at Hanoi. Đúng: She lives in Hanoi. (Thành phố, quốc gia dùng in.) Sai: I study at the morning. Đúng: I study in the morning. (Buổi trong ngày (morning, afternoon, evening) dùng in. Riêng at night dùng at.)",
     "I get up at 6 o'clock. | See you on Monday. | She lives in Hanoi. | I study in the morning."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đây là thời gian hay nơi chốn? · Đã chọn at (điểm), on (ngày/bề mặt), in (khoảng dài/không gian) đúng chưa? · Có cụm cố định cần nhớ (at night, in the morning, at home) không?",
     ""
    ]
   ],
   "quiz": [
    [
     "The class starts ___ 8 o'clock.",
     "at",
     [
      "on",
      "in"
     ],
     "Giờ cụ thể dùng at."
    ],
    [
     "My birthday is ___ July.",
     "in",
     [
      "at",
      "on"
     ],
     "Tháng dùng in."
    ],
    [
     "We have a test ___ Friday.",
     "on",
     [
      "at",
      "in"
     ],
     "Thứ trong tuần dùng on."
    ],
    [
     "The keys are ___ the table.",
     "on",
     [
      "in",
      "at"
     ],
     "Chìa khóa nằm trên bề mặt bàn nên dùng on."
    ],
    [
     "She lives ___ Da Nang.",
     "in",
     [
      "on",
      "at"
     ],
     "Thành phố dùng in."
    ],
    [
     "I often study ___ the evening.",
     "in",
     [
      "at",
      "on"
     ],
     "Buổi trong ngày dùng in the evening."
    ]
   ],
   "gaps": [
    [
     "I go to bed ___ night.",
     [
      "at"
     ],
     "",
     "Cụm cố định at night."
    ],
    [
     "School begins ___ September.",
     [
      "in"
     ],
     "",
     "Tháng dùng in."
    ],
    [
     "The bank is ___ the library and the post office. (ở giữa)",
     [
      "between"
     ],
     "",
     "Between dùng cho vị trí ở giữa hai vật."
    ],
    [
     "He is waiting ___ the bus stop.",
     [
      "at"
     ],
     "",
     "Bus stop là một điểm cụ thể nên dùng at."
    ]
   ],
   "sentences": [
    [
     "The class starts at eight o'clock on Monday.",
     "Lớp học bắt đầu lúc tám giờ vào thứ Hai."
    ],
    [
     "My birthday is in July, and it is on the tenth.",
     "Sinh nhật tôi vào tháng Bảy, đúng ngày mười."
    ],
    [
     "The keys are on the table, and the book is in the bag.",
     "Chìa khóa ở trên bàn còn sách ở trong cặp."
    ],
    [
     "She lives in Hue but works at a school near the river.",
     "Cô ấy sống ở Huế nhưng làm việc ở một trường gần sông."
    ],
    [
     "The post office is between the bank and the library.",
     "Bưu điện nằm giữa ngân hàng và thư viện."
    ]
   ]
  },
  {
   "id": "wh-a1-present-simple",
   "group": 7,
   "grade": 4,
   "icon": "⏱️",
   "title": "Present simple",
   "en": "Thì",
   "desc": "Thì hiện tại đơn diễn tả thói quen, sự thật hiển nhiên và lịch trình lặp lại. Với he, she, it, động từ thêm -s hoặc -es; câu phủ định và nghi vấn dùng do / does.",
   "formula": [
    [
     "Công thức",
     "S + V(s/es)"
    ],
    [
     "Khẳng định",
     "I/you/we/they + V · he/she/it + V-s"
    ],
    [
     "Phủ định",
     "S + do not (don't) / does not (doesn't) + V nguyên mẫu"
    ],
    [
     "Nghi vấn",
     "Do / Does + S + V nguyên mẫu?"
    ],
    [
     "Thêm -s / -es / -ies",
     "V + s · s,x,ch,sh,o + es · phụ âm + y → ies"
    ]
   ],
   "grammar": [
    [
     "Thói quen và việc lặp lại",
     "Việc xảy ra đều đặn, thường đi với always, usually, every day.",
     "I get up at six every day. | She usually walks to school."
    ],
    [
     "Sự thật hiển nhiên",
     "Điều luôn đúng, không phụ thuộc vào lúc nói.",
     "Water boils at 100 degrees. | The sun rises in the east."
    ],
    [
     "Lịch trình, thời gian biểu",
     "Lịch cố định của trường học, tàu xe, chương trình.",
     "The class starts at eight. | The train leaves at noon."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định chủ ngữ: He, she, it và danh từ số ít là ngôi thứ ba số ít; các chủ ngữ còn lại dùng động từ nguyên mẫu. 2) Chia động từ ở câu khẳng định: Ngôi thứ ba số ít thêm -s hoặc -es. Have đổi thành has. 3) Dùng do / does ở câu phủ định và nghi vấn: Does đã mang -s nên động từ chính trở về nguyên mẫu, không thêm -s nữa.",
     "My mother (= she) → works | He has a bike. She teaches English. | Does she work here? — No, she doesn't."
    ],
    [
     "Lỗi thường gặp",
     "Sai: She work in a hospital. Đúng: She works in a hospital. (Ngôi thứ ba số ít cần thêm -s.) Sai: He doesn't likes fish. Đúng: He doesn't like fish. (Sau does / doesn't động từ trở về nguyên mẫu.) Sai: Does she goes to school by bus? Đúng: Does she go to school by bus? (Does đã mang dấu hiệu ngôi thứ ba, nên động từ chính không thêm -es.) Sai: She haves two brothers. Đúng: She has two brothers. (Have là bất quy tắc: has.)",
     "She works in a hospital. | He doesn't like fish. | Does she go to school by bus? | She has two brothers."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ có phải ngôi thứ ba số ít không? · Động từ khẳng định đã thêm -s / -es / -ies chưa? · Câu phủ định và câu hỏi đã dùng do / does và động từ nguyên mẫu chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "My sister ___ in a shop.",
     "works",
     [
      "work",
      "working"
     ],
     "My sister là ngôi thứ ba số ít nên thêm -s: works."
    ],
    [
     "They ___ football on Sundays.",
     "play",
     [
      "plays",
      "playing"
     ],
     "They dùng động từ nguyên mẫu: play."
    ],
    [
     "He ___ like spicy food.",
     "doesn't",
     [
      "don't",
      "isn't"
     ],
     "He đi với doesn't + động từ nguyên mẫu."
    ],
    [
     "___ your brother live in Hue?",
     "Does",
     [
      "Do",
      "Is"
     ],
     "Your brother là ngôi thứ ba số ít nên dùng Does."
    ],
    [
     "Which sentence is correct?",
     "She watches TV.",
     [
      "She watchs TV.",
      "She watch TV."
     ],
     "Tận cùng ch nên thêm -es: watches."
    ],
    [
     "Which sentence is correct?",
     "He doesn't play tennis.",
     [
      "He doesn't plays tennis.",
      "He don't play tennis."
     ],
     "Doesn't + động từ nguyên mẫu."
    ]
   ],
   "gaps": [
    [
     "She ___ (study) English every day.",
     [
      "studies"
     ],
     "",
     "Phụ âm d + y đổi thành -ies."
    ],
    [
     "My dad ___ (have) a red car.",
     [
      "has"
     ],
     "",
     "Have là bất quy tắc: has."
    ],
    [
     "We ___ (not / eat) breakfast at school. (dùng dạng rút gọn)",
     [
      "don't eat",
      "do not eat"
     ],
     "",
     "We đi với don't + động từ nguyên mẫu."
    ],
    [
     "___ you like music? — Yes, I do.",
     [
      "do"
     ],
     "",
     "Câu hỏi với you dùng Do."
    ],
    [
     "He ___ (go) to work by bus.",
     [
      "goes"
     ],
     "",
     "Tận cùng o thêm -es: goes."
    ],
    [
     "The shop ___ (open) at eight.",
     [
      "opens"
     ],
     "",
     "The shop là ngôi thứ ba số ít nên thêm -s."
    ]
   ],
   "sentences": [
    [
     "My father works in a bank.",
     "Bố tôi làm việc ở ngân hàng."
    ],
    [
     "Lan studies English every evening.",
     "Lan học tiếng Anh mỗi tối."
    ],
    [
     "They don't eat meat.",
     "Họ không ăn thịt."
    ],
    [
     "He doesn't watch TV in the morning.",
     "Anh ấy không xem tivi vào buổi sáng."
    ],
    [
     "Do you walk to school?",
     "Bạn đi bộ đến trường à?"
    ],
    [
     "She goes to bed at ten and she has breakfast at seven.",
     "Cô ấy đi ngủ lúc mười giờ và ăn sáng lúc bảy giờ."
    ]
   ]
  },
  {
   "id": "wh-a1-like-love-hate-ving",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Like, love & hate + V-ing",
   "en": "Dạng thức động từ",
   "desc": "Các động từ chỉ sở thích như like, love, enjoy, hate, don't mind được theo sau bằng danh động từ (V-ing) khi nói về hoạt động.",
   "formula": [
    [
     "Công thức",
     "S + like/love/enjoy/hate + V-ing"
    ],
    [
     "Khẳng định",
     "S + like/love/enjoy/hate + V-ing"
    ],
    [
     "Phủ định",
     "S + don't/doesn't + like/enjoy + V-ing"
    ],
    [
     "Nghi vấn",
     "Do/Does + S + like/enjoy + V-ing?"
    ],
    [
     "Quy tắc thêm -ing",
     "bỏ e → -ing · nhân đôi phụ âm cuối (CVC) → -ing · còn lại thêm -ing"
    ]
   ],
   "grammar": [
    [
     "Nói về sở thích và hoạt động yêu thích",
     "Dùng like, love, enjoy với V-ing để nói điều mình thích làm.",
     "I love dancing. | She enjoys reading."
    ],
    [
     "Nói điều mình không thích",
     "Dùng don't like, hate, don't mind để nói không thích hoặc không phiền.",
     "He hates getting up early. | I don't mind waiting."
    ],
    [
     "Hỏi về sở thích",
     "Hỏi bằng Do you like/enjoy + V-ing?",
     "Do you like cooking? | What do you enjoy doing?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn động từ chỉ sở thích: Chọn like, love, enjoy, hate hoặc don't mind tùy mức độ thích. 2) Đổi động từ sau thành V-ing: Thêm -ing vào động từ chỉ hoạt động. Chú ý bỏ e hoặc nhân đôi phụ âm. 3) Chia động từ chỉ sở thích theo chủ ngữ: Với he, she, it dùng likes, loves, hates, enjoys. Phủ định dùng doesn't + V nguyên mẫu.",
     "love > like > don't mind > don't like > hate | swim → swimming · take → taking | He likes swimming. / He doesn't like swimming."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I like swim. Đúng: I like swimming. (Sau like dùng V-ing để nói về hoạt động.) Sai: She enjoys to read. Đúng: She enjoys reading. (Enjoy chỉ đi với V-ing, không dùng to V.) Sai: He likes runing. Đúng: He likes running. (Run kết thúc bằng một nguyên âm và một phụ âm nên nhân đôi n.) Sai: I hate make cakes. Đúng: I hate making cakes. (Cần V-ing: bỏ e rồi thêm -ing.)",
     "I like swimming. | She enjoys reading. | He likes running. | I hate making cakes."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Động từ sau like, love, enjoy, hate đã ở dạng V-ing chưa? · Chính tả -ing đúng chưa (bỏ e, nhân đôi phụ âm)? · Với he, she, it đã thêm -s vào động từ chỉ sở thích hoặc dùng doesn't chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I love ___ to music.",
     "listening",
     [
      "listen",
      "listens"
     ],
     "Sau love dùng V-ing: listening."
    ],
    [
     "She enjoys ___ books.",
     "reading",
     [
      "read",
      "to read"
     ],
     "Enjoy chỉ đi với V-ing."
    ],
    [
     "He doesn't like ___ up early.",
     "getting",
     [
      "get",
      "gets"
     ],
     "Sau like dùng V-ing; get nhân đôi t: getting."
    ],
    [
     "Which sentence is correct?",
     "I hate cooking.",
     [
      "I hate cook.",
      "I hate cooks."
     ],
     "Sau hate dùng V-ing."
    ],
    [
     "Which is the correct -ing form of 'swim'?",
     "swimming",
     [
      "swiming",
      "swimmming"
     ],
     "Swim kết thúc bằng nguyên âm và phụ âm nên nhân đôi m."
    ],
    [
     "Do you like ___ photos?",
     "taking",
     [
      "take",
      "took"
     ],
     "Sau like dùng V-ing; take bỏ e: taking."
    ]
   ],
   "gaps": [
    [
     "We love ___ (dance) at parties.",
     [
      "dancing"
     ],
     "",
     "Dance bỏ e rồi thêm -ing: dancing."
    ],
    [
     "My brother hates ___ (run) in the rain.",
     [
      "running"
     ],
     "",
     "Run nhân đôi n: running."
    ],
    [
     "She likes ___ (make) cakes.",
     [
      "making"
     ],
     "",
     "Make bỏ e rồi thêm -ing: making."
    ],
    [
     "Tom enjoys ___ (play) chess.",
     [
      "playing"
     ],
     "",
     "Play + ing = playing."
    ]
   ],
   "sentences": [
    [
     "My sister loves painting in her free time.",
     "Chị tôi rất thích vẽ trong thời gian rảnh."
    ],
    [
     "I don't like getting up early on Mondays.",
     "Tôi không thích dậy sớm vào thứ Hai."
    ],
    [
     "They enjoy listening to music while they study.",
     "Họ thích nghe nhạc khi học."
    ],
    [
     "He hates running in the rain.",
     "Anh ấy ghét chạy dưới mưa."
    ],
    [
     "Do you like making cakes?",
     "Bạn có thích làm bánh không?"
    ]
   ]
  },
  {
   "id": "wh-a1-present-continuous",
   "group": 7,
   "grade": 4,
   "icon": "⏱️",
   "title": "Present continuous",
   "en": "Thì",
   "desc": "Thì hiện tại tiếp diễn diễn tả hành động đang xảy ra vào lúc nói, hành động tạm thời quanh thời điểm nói, và kế hoạch đã sắp xếp trong tương lai gần.",
   "formula": [
    [
     "Công thức",
     "S + am/is/are + V-ing"
    ],
    [
     "Khẳng định",
     "S + am/is/are + V-ing"
    ],
    [
     "Phủ định",
     "S + am/is/are + not + V-ing"
    ],
    [
     "Nghi vấn",
     "Am/Is/Are + S + V-ing?"
    ],
    [
     "Quy tắc thêm -ing",
     "bỏ e · nhân đôi phụ âm cuối (CVC) · ie → ying"
    ]
   ],
   "grammar": [
    [
     "Hành động đang diễn ra lúc nói",
     "Thường đi với now, at the moment, Look!, Listen!",
     "Look! It is raining. | She is talking on the phone now."
    ],
    [
     "Việc tạm thời quanh thời điểm nói",
     "Việc đang diễn ra trong giai đoạn này, chưa chắc ngay lúc nói.",
     "I am reading a good book this week. | They are staying at a hotel."
    ],
    [
     "Kế hoạch tương lai gần",
     "Việc đã sắp xếp, thường có mốc thời gian.",
     "We are visiting my grandma on Sunday."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn am, is hoặc are theo chủ ngữ: Cách chọn giống động từ be ở thì hiện tại: I am, he/she/it is, you/we/they are. 2) Thêm -ing vào động từ chính: Chú ý chính tả: bỏ e, nhân đôi phụ âm cuối. 3) Kiểm tra động từ trạng thái: Know, like, love, want, need, understand dùng ở hiện tại đơn, không dùng ở tiếp diễn.",
     "She is · They are | run → running · come → coming | I know the answer. (không nói I am knowing)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She is work now. Đúng: She is working now. (Sau be cần V-ing.) Sai: They playing football. Đúng: They are playing football. (Không được thiếu be.) Sai: I am knowing his name. Đúng: I know his name. (Know là động từ trạng thái, không dùng ở tiếp diễn.) Sai: Do you listening to me? Đúng: Are you listening to me? (Câu hỏi hiện tại tiếp diễn dùng be, không dùng do.)",
     "She is working now. | They are playing football. | I know his name. | Are you listening to me?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã dùng am/is/are đúng với chủ ngữ chưa? · Động từ chính đã có -ing, viết đúng chính tả chưa? · Động từ này có phải động từ trạng thái không?",
     ""
    ]
   ],
   "quiz": [
    [
     "Look! It ___ raining.",
     "is",
     [
      "are",
      "does"
     ],
     "It đi với is; is raining là hiện tại tiếp diễn."
    ],
    [
     "They ___ football at the moment.",
     "are playing",
     [
      "play",
      "is playing"
     ],
     "At the moment dùng hiện tại tiếp diễn; they đi với are."
    ],
    [
     "I ___ my homework now.",
     "am doing",
     [
      "do doing",
      "doing"
     ],
     "Cấu trúc am + V-ing."
    ],
    [
     "Which sentence is correct?",
     "She is writing a letter.",
     [
      "She is write a letter.",
      "She writing a letter."
     ],
     "Write bỏ e rồi thêm -ing: is writing."
    ],
    [
     "Which sentence is correct?",
     "I know his name.",
     [
      "I am knowing his name.",
      "I knowing his name."
     ],
     "Know là động từ trạng thái, dùng hiện tại đơn."
    ],
    [
     "___ you listening to me?",
     "Are",
     [
      "Do",
      "Is"
     ],
     "Câu hỏi hiện tại tiếp diễn với you dùng Are."
    ]
   ],
   "gaps": [
    [
     "He ___ (sit) next to me now.",
     [
      "is sitting"
     ],
     "",
     "Sit nhân đôi t: is sitting."
    ],
    [
     "We ___ (not / watch) TV. (viết rút gọn hoặc đầy đủ)",
     [
      "aren't watching",
      "are not watching"
     ],
     "",
     "Phủ định: are not (aren't) + V-ing."
    ],
    [
     "My parents ___ (cook) dinner at the moment.",
     [
      "are cooking"
     ],
     "",
     "Parents số nhiều nên dùng are cooking."
    ],
    [
     "She ___ (run) in the park now.",
     [
      "is running"
     ],
     "",
     "Run nhân đôi n: is running."
    ]
   ],
   "sentences": [
    [
     "My parents are cooking dinner at the moment.",
     "Bố mẹ tôi đang nấu bữa tối."
    ],
    [
     "I am not watching TV. I am doing my homework.",
     "Tôi không xem tivi. Tôi đang làm bài tập."
    ],
    [
     "Is she running in the park now?",
     "Bây giờ cô ấy có đang chạy trong công viên không?"
    ],
    [
     "Look! The baby is sleeping.",
     "Nhìn kìa! Em bé đang ngủ."
    ],
    [
     "We are meeting our teacher tomorrow at ten.",
     "Ngày mai mười giờ chúng tôi gặp thầy giáo."
    ]
   ]
  },
  {
   "id": "wh-a1-basic-word-order",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Basic word order",
   "en": "Cấu trúc câu",
   "desc": "Câu khẳng định tiếng Anh có trật tự chủ ngữ + động từ + tân ngữ (S-V-O). Thông tin phụ đứng sau tân ngữ, thường theo thứ tự nơi chốn rồi thời gian.",
   "formula": [
    [
     "Công thức",
     "S + V + O + nơi chốn + thời gian"
    ],
    [
     "S + V",
     "chủ ngữ + động từ"
    ],
    [
     "S + V + O",
     "chủ ngữ + động từ + tân ngữ"
    ],
    [
     "S + V + O + nơi chốn + thời gian",
     "thông tin phụ ở cuối câu"
    ],
    [
     "Tính từ + danh từ",
     "kích thước trước màu sắc"
    ],
    [
     "Mệnh lệnh",
     "V + O"
    ]
   ],
   "grammar": [
    [
     "Đặt câu đơn đúng trật tự",
     "Mỗi câu cần chủ ngữ và động từ; có tân ngữ thì đứng sau động từ.",
     "Birds fly. | She reads books."
    ],
    [
     "Đặt tính từ trước danh từ",
     "Tiếng Anh nói a red car, không nói a car red.",
     "a small house | two big dogs"
    ],
    [
     "Thêm nơi chốn và thời gian",
     "Nơi chốn thường đứng trước thời gian ở cuối câu.",
     "I met him at the café yesterday."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm chủ ngữ và động từ: Đặt chủ ngữ đầu câu, động từ ngay sau chủ ngữ. 2) Thêm tân ngữ: Tân ngữ đứng ngay sau động từ, không chen gì ở giữa. 3) Thêm nơi chốn rồi thời gian: Đặt ở cuối câu theo thứ tự nơi chốn trước, thời gian sau.",
     "She + reads | She reads books. | She reads books in the library every day."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Like I coffee. Đúng: I like coffee. (Chủ ngữ phải đứng trước động từ.) Sai: I have a car red. Đúng: I have a red car. (Tính từ đứng trước danh từ.) Sai: She yesterday went to school. Đúng: She went to school yesterday. (Thời gian đứng cuối câu hoặc đầu câu, không chen giữa chủ ngữ và động từ.) Sai: I very like it. Đúng: I like it very much. (Very không bổ nghĩa cho động từ; dùng very much ở cuối.)",
     "I like coffee. | I have a red car. | She went to school yesterday. | I like it very much."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ có đứng trước động từ không? · Tân ngữ có đứng ngay sau động từ không? · Tính từ có đứng trước danh từ không? · Nơi chốn có đứng trước thời gian không?",
     ""
    ]
   ],
   "quiz": [
    [
     "Which sentence has the correct word order?",
     "She reads books.",
     [
      "Reads she books.",
      "She books reads."
     ],
     "Trật tự S + V + O: She reads books."
    ],
    [
     "Which sentence has the correct word order?",
     "I have a red bag.",
     [
      "I a red bag have.",
      "I have a bag red."
     ],
     "S + V + O, tính từ red đứng trước bag."
    ],
    [
     "Which sentence has the correct word order?",
     "We go to school every day.",
     [
      "We every day go to school.",
      "We to school go every day."
     ],
     "Thời gian (every day) đứng cuối câu, không chen giữa chủ ngữ và động từ."
    ],
    [
     "Which sentence has the correct word order?",
     "He plays football in the park on Sunday.",
     [
      "He plays in the park football on Sunday.",
      "In the park he football plays on Sunday."
     ],
     "S + V + O + nơi chốn + thời gian."
    ],
    [
     "Which phrase is correct?",
     "a small blue car",
     [
      "a car blue small",
      "a blue car small"
     ],
     "Tính từ đứng trước danh từ; kích thước thường đứng trước màu sắc."
    ],
    [
     "Which sentence is correct?",
     "I like pizza very much.",
     [
      "I very like pizza.",
      "I like very pizza."
     ],
     "Very much đứng cuối câu, sau tân ngữ."
    ]
   ],
   "gaps": [
    [
     "Sắp xếp: coffee / drinks / she → ___",
     [
      "She drinks coffee",
      "She drinks coffee."
     ],
     "",
     "S + V + O: She drinks coffee."
    ],
    [
     "Sắp xếp: park / in / the / plays / He / football → ___",
     [
      "He plays football in the park",
      "He plays football in the park."
     ],
     "",
     "S + V + O + nơi chốn: He plays football in the park."
    ],
    [
     "Sắp xếp: car / has / a / red / My father → ___",
     [
      "My father has a red car",
      "My father has a red car."
     ],
     "",
     "Tính từ red đứng trước car: My father has a red car."
    ],
    [
     "Sắp xếp: yesterday / saw / a film / We → ___",
     [
      "We saw a film yesterday",
      "We saw a film yesterday.",
      "Yesterday we saw a film",
      "Yesterday we saw a film."
     ],
     "",
     "Thời gian đứng cuối câu hoặc đầu câu: We saw a film yesterday."
    ]
   ],
   "sentences": [
    [
     "My brother plays football.",
     "Em trai tôi chơi bóng đá."
    ],
    [
     "She has a new red bag.",
     "Cô ấy có một chiếc cặp mới màu đỏ."
    ],
    [
     "I like pizza very much.",
     "Tôi rất thích bánh pizza."
    ],
    [
     "They study English at school on weekdays.",
     "Họ học tiếng Anh ở trường vào các ngày trong tuần."
    ],
    [
     "Yesterday we saw a film at the cinema.",
     "Hôm qua chúng tôi xem phim ở rạp."
    ]
   ]
  },
  {
   "id": "wh-a1-negatives-questions",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Negatives & questions",
   "en": "Cấu trúc câu",
   "desc": "Cách tạo câu phủ định và câu hỏi Yes/No phụ thuộc vào động từ trong câu. Với be và can, đảo chúng lên trước chủ ngữ để hỏi và thêm not để phủ định.",
   "formula": [
    [
     "Công thức",
     "S + aux + not + V · Aux + S + V?"
    ],
    [
     "Với be",
     "S + be + not · Be + S + …?"
    ],
    [
     "Với can",
     "S + can't + V · Can + S + V?"
    ],
    [
     "Với động từ thường",
     "S + don't/doesn't + V · Do/Does + S + V?"
    ],
    [
     "Hiện tại tiếp diễn",
     "S + be + not + V-ing · Be + S + V-ing?"
    ],
    [
     "Trả lời ngắn",
     "Yes, S + aux. · No, S + aux + not."
    ]
   ],
   "grammar": [
    [
     "Phủ định",
     "Thêm not sau be, can hoặc sau do/does.",
     "She isn't tired. | He doesn't like fish."
    ],
    [
     "Hỏi Yes/No",
     "Đưa be, can hoặc do/does lên đầu câu.",
     "Is she tired? | Does he like fish?"
    ],
    [
     "Trả lời ngắn",
     "Trả lời bằng Yes hoặc No cùng trợ động từ, không lặp lại cả câu.",
     "Do you like tea? — Yes, I do. | Can you swim? — No, I can't."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm trợ động từ trong câu: Nếu câu có be hoặc can thì dùng chính nó. Nếu chỉ có động từ thường thì thêm do hoặc does. 2) Thêm not hoặc đảo lên đầu câu: Phủ định: thêm not sau trợ động từ. Câu hỏi: đưa trợ động từ lên trước chủ ngữ. 3) Đưa động từ chính về nguyên mẫu: Sau do/does, động từ chính không chia và không thêm -s.",
     "She is tired → be · She likes tea → does | He is not here. · Is he here? | Does she like tea? (không nói Does she likes)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Do you are tired? Đúng: Are you tired? (Be tự đảo lên đầu câu, không dùng do.) Sai: She doesn't likes tea. Đúng: She doesn't like tea. (Sau doesn't động từ giữ nguyên mẫu.) Sai: Does he can swim? Đúng: Can he swim? (Can là trợ động từ, không dùng do/does cùng với can.) Sai: Do you like tea? — Yes, I like. Đúng: Do you like tea? — Yes, I do. (Trả lời ngắn lặp lại trợ động từ do.)",
     "Are you tired? | She doesn't like tea. | Can he swim? | Do you like tea? — Yes, I do."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu có be hoặc can không? Nếu có, đảo hoặc thêm not ngay sau nó. · Với động từ thường đã dùng do/does chưa? · Động từ chính sau do/does đã ở dạng nguyên mẫu chưa? · Câu trả lời ngắn đã dùng đúng trợ động từ chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ she live here?",
     "Does",
     [
      "Do",
      "Is"
     ],
     "She là ngôi thứ ba số ít nên dùng Does."
    ],
    [
     "They ___ at home today.",
     "aren't",
     [
      "doesn't",
      "don't"
     ],
     "Câu có chỗ chỉ nơi chốn với be nên dùng aren't."
    ],
    [
     "Which sentence is correct?",
     "Are you hungry?",
     [
      "Do you are hungry?",
      "Does you hungry?"
     ],
     "Be tự đảo lên đầu câu hỏi."
    ],
    [
     "Which sentence is correct?",
     "She doesn't work here.",
     [
      "She doesn't works here.",
      "She don't work here."
     ],
     "Doesn't + động từ nguyên mẫu."
    ],
    [
     "Can you swim? — Yes, ___.",
     "I can",
     [
      "I do",
      "I am"
     ],
     "Trả lời ngắn lặp lại trợ động từ can."
    ],
    [
     "Do you like pizza? — No, ___.",
     "I don't",
     [
      "I doesn't",
      "I'm not"
     ],
     "Trả lời ngắn lặp lại trợ động từ do: No, I don't."
    ]
   ],
   "gaps": [
    [
     "___ he play the guitar? — No, he doesn't.",
     [
      "does"
     ],
     "",
     "He đi với Does ở câu hỏi."
    ],
    [
     "I ___ speak French. (phủ định của can)",
     [
      "can't",
      "cannot",
      "can not"
     ],
     "",
     "Phủ định của can là can't hoặc cannot."
    ],
    [
     "Is she a nurse? — No, she ___.",
     [
      "isn't",
      "is not"
     ],
     "",
     "Trả lời ngắn phủ định: No, she isn't."
    ],
    [
     "My sister ___ like spicy food. (phủ định)",
     [
      "doesn't",
      "does not"
     ],
     "",
     "Ngôi thứ ba số ít dùng doesn't + động từ nguyên mẫu."
    ]
   ],
   "sentences": [
    [
     "My brother doesn't like spicy food.",
     "Em trai tôi không thích đồ cay."
    ],
    [
     "Are your parents at home?",
     "Bố mẹ bạn có ở nhà không?"
    ],
    [
     "Can you help me with this exercise?",
     "Bạn giúp tôi bài tập này được không?"
    ],
    [
     "Do you walk to school? — No, I don't. I take the bus.",
     "Bạn đi bộ đến trường à? — Không, tôi đi xe buýt."
    ],
    [
     "Is it raining? — Yes, it is.",
     "Trời có đang mưa không? — Có."
    ]
   ]
  },
  {
   "id": "wh-a1-wh-questions",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "Wh- questions",
   "en": "Cấu trúc câu",
   "desc": "Câu hỏi Wh- (what, who, where, when, why, how, which, whose) dùng để hỏi thông tin cụ thể. Từ hỏi đứng đầu câu, sau đó là trợ động từ rồi chủ ngữ rồi động từ chính.",
   "formula": [
    [
     "Công thức",
     "Wh-word + trợ động từ + S + V?"
    ],
    [
     "Với be",
     "Wh-word + be + S?"
    ],
    [
     "Với động từ thường",
     "Wh-word + do/does + S + V?"
    ],
    [
     "Wh- làm chủ ngữ",
     "Who/What + V (chia như chủ ngữ số ít)"
    ],
    [
     "How + tính từ/trạng từ",
     "How old/many/much/often...?"
    ]
   ],
   "grammar": [
    [
     "Hỏi thông tin cụ thể",
     "Mỗi từ hỏi nhắm vào một loại thông tin khác nhau.",
     "What is your name? | Where do you live?"
    ],
    [
     "Hỏi chủ ngữ",
     "Khi who hoặc what là chủ ngữ, câu giữ trật tự câu khẳng định, không có do/does.",
     "Who lives here? | What happened?"
    ],
    [
     "Hỏi với How",
     "How kết hợp tính từ hoặc trạng từ để hỏi tuổi, số lượng, tần suất.",
     "How old are you? | How often do you swim?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn từ hỏi theo thông tin cần hỏi: What (cái gì), who (ai), where (ở đâu), when (khi nào), why (tại sao), how (như thế nào). 2) Thêm trợ động từ đúng: Dùng be, can hoặc do/does ngay sau từ hỏi. 3) Kiểm tra: từ hỏi có phải chủ ngữ không?: Nếu who/what là chủ ngữ thì bỏ do/does và chia động từ số ít.",
     "Thông tin về nơi chốn → where | Where do you work? | Who lives here? (không nói Who does live here?)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Where you live? Đúng: Where do you live? (Câu hỏi với động từ thường cần do/does.) Sai: What she does? Đúng: What does she do? (Trợ động từ does đứng trước chủ ngữ, động từ chính ở dạng nguyên mẫu.) Sai: Who does live here? Đúng: Who lives here? (Who là chủ ngữ nên không cần do/does.) Sai: How much students are there? Đúng: How many students are there? (Students đếm được nên dùng How many.)",
     "Where do you live? | What does she do? | Who lives here? | How many students are there?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã chọn đúng từ hỏi cho thông tin cần hỏi chưa? · Trợ động từ đứng ngay sau từ hỏi chưa? · Từ hỏi có phải chủ ngữ không? Nếu có thì bỏ do/does.",
     ""
    ]
   ],
   "quiz": [
    [
     "___ is your name?",
     "What",
     [
      "Where",
      "Who"
     ],
     "Hỏi tên dùng What."
    ],
    [
     "___ do you live? — In Hue.",
     "Where",
     [
      "Who",
      "Why"
     ],
     "Hỏi nơi chốn dùng Where."
    ],
    [
     "___ is your birthday? — On 5 May.",
     "When",
     [
      "Where",
      "Why"
     ],
     "Hỏi thời gian dùng When."
    ],
    [
     "___ are you late? — Because the bus is slow.",
     "Why",
     [
      "Who",
      "How"
     ],
     "Hỏi lý do dùng Why; trả lời bằng Because."
    ],
    [
     "Which sentence is correct?",
     "Where do you work?",
     [
      "Where you work?",
      "Where you do work?"
     ],
     "Wh-word + do + S + V."
    ],
    [
     "Which sentence is correct?",
     "What does she do?",
     [
      "What she does?",
      "What does she does?"
     ],
     "Does + she + do (nguyên mẫu)."
    ]
   ],
   "gaps": [
    [
     "___ old are you? — I'm twelve.",
     [
      "how"
     ],
     "",
     "Hỏi tuổi dùng How old."
    ],
    [
     "___ lives in that house? — My uncle.",
     [
      "who"
     ],
     "",
     "Hỏi người (chủ ngữ) dùng Who."
    ],
    [
     "___ does the film start? — At eight.",
     [
      "when",
      "what time"
     ],
     "",
     "Hỏi giờ dùng When hoặc What time."
    ],
    [
     "How ___ do you go to the gym? — Twice a week.",
     [
      "often"
     ],
     "",
     "Hỏi tần suất dùng How often."
    ]
   ],
   "sentences": [
    [
     "What time does the film start?",
     "Mấy giờ thì bộ phim bắt đầu?"
    ],
    [
     "Where are my keys?",
     "Chìa khóa của tôi ở đâu?"
    ],
    [
     "Why are you late? — Because the bus is slow.",
     "Sao bạn đến muộn? — Vì xe buýt chạy chậm."
    ],
    [
     "Who teaches you English?",
     "Ai dạy bạn tiếng Anh?"
    ],
    [
     "How much is this shirt?",
     "Chiếc áo này giá bao nhiêu?"
    ]
   ]
  },
  {
   "id": "wh-a1-there-is-there-are",
   "group": 7,
   "grade": 4,
   "icon": "📝",
   "title": "There is / There are",
   "en": "Cấu trúc câu",
   "desc": "There is và there are dùng để nói có một vật hoặc người tồn tại ở một nơi. There is đi với danh từ số ít hoặc không đếm được, there are đi với danh từ số nhiều.",
   "formula": [
    [
     "Công thức",
     "There is + số ít/không đếm được · There are + số nhiều"
    ],
    [
     "Số ít / không đếm được",
     "There is + a/an/some + danh từ"
    ],
    [
     "Số nhiều",
     "There are + số từ/some/many + danh từ số nhiều"
    ],
    [
     "Phủ định",
     "There isn't a/any · There aren't any"
    ],
    [
     "Nghi vấn",
     "Is there a ...? · Are there any ...?"
    ],
    [
     "Trả lời ngắn",
     "Yes, there is/are. · No, there isn't/aren't."
    ]
   ],
   "grammar": [
    [
     "Nói có gì ở đâu",
     "Giới thiệu sự tồn tại của một vật hoặc người, thường kèm nơi chốn.",
     "There is a park near my house. | There are two beds in the room."
    ],
    [
     "Mô tả phòng, nơi ở, khu phố",
     "Liệt kê những thứ có trong không gian.",
     "There is a sofa in the living room. | There are many shops on this street."
    ],
    [
     "Hỏi về sự tồn tại và số lượng",
     "Hỏi Is there / Are there, hoặc How many ... are there?",
     "Is there a bank near here? | How many students are there?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhìn danh từ đứng ngay sau: Danh từ số ít hoặc không đếm được dùng is. Danh từ số nhiều dùng are. 2) Thêm từ chỉ lượng: Dùng a/an, some hoặc số từ ở câu khẳng định, any ở phủ định và nghi vấn. 3) Thêm nơi chốn: Nơi chốn thường đứng cuối câu.",
     "a book → is · two books → are | There is some water. · There isn't any water. | There is a cat under the table."
    ],
    [
     "Lỗi thường gặp",
     "Sai: There have a book on the desk. Đúng: There is a book on the desk. (Nói có gì ở đâu dùng there is/are, không dùng have.) Sai: There is three books on the desk. Đúng: There are three books on the desk. (Books là số nhiều nên dùng are.) Sai: Is there any students in the room? Đúng: Are there any students in the room? (Students là số nhiều nên dùng Are there.) Sai: It is a cat in the garden. Đúng: There is a cat in the garden. (Giới thiệu sự tồn tại dùng there is, không dùng it is.)",
     "There is a book on the desk. | There are three books on the desk. | Are there any students in the room? | There is a cat in the garden."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Danh từ ngay sau là số ít hay số nhiều? · Đã dùng a/an, some, any hoặc số từ phù hợp chưa? · Câu hỏi và phủ định đã đúng với is/are chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "There ___ a library in my town.",
     "is",
     [
      "are",
      "has"
     ],
     "Library là số ít nên dùng there is."
    ],
    [
     "There ___ five students in the room.",
     "are",
     [
      "is",
      "have"
     ],
     "Students số nhiều nên dùng there are."
    ],
    [
     "There ___ any milk in the fridge.",
     "isn't",
     [
      "aren't",
      "don't"
     ],
     "Milk không đếm được nên dùng there isn't any."
    ],
    [
     "___ there a post office near here?",
     "Is",
     [
      "Are",
      "Does"
     ],
     "Post office là số ít nên dùng Is there."
    ],
    [
     "Which sentence is correct?",
     "There is a table.",
     [
      "There has a table.",
      "It is a table in the room."
     ],
     "Giới thiệu sự tồn tại dùng there is."
    ],
    [
     "Which sentence is correct?",
     "There is some water.",
     [
      "There are some water.",
      "There are a water."
     ],
     "Water không đếm được nên dùng there is."
    ]
   ],
   "gaps": [
    [
     "___ there any eggs? — Yes, there are.",
     [
      "are"
     ],
     "",
     "Eggs số nhiều nên dùng Are there."
    ],
    [
     "There ___ a sofa in the living room.",
     [
      "is"
     ],
     "",
     "Sofa là số ít nên dùng is."
    ],
    [
     "How many students ___ there in your class?",
     [
      "are"
     ],
     "",
     "How many + danh từ số nhiều + are there?"
    ],
    [
     "There ___ not any cars in the street. (viết đầy đủ)",
     [
      "are"
     ],
     "",
     "Cars số nhiều nên dùng are not."
    ]
   ],
   "sentences": [
    [
     "There is a big tree in front of our house.",
     "Có một cái cây to trước nhà chúng tôi."
    ],
    [
     "There are three bedrooms upstairs.",
     "Trên lầu có ba phòng ngủ."
    ],
    [
     "There isn't any milk in the fridge.",
     "Trong tủ lạnh không có sữa."
    ],
    [
     "Is there a supermarket near here? — Yes, there is.",
     "Gần đây có siêu thị không? — Có."
    ],
    [
     "How many chairs are there in the classroom?",
     "Trong lớp có bao nhiêu cái ghế?"
    ]
   ]
  },
  {
   "id": "wh-a1-can-could-imperatives",
   "group": 7,
   "grade": 4,
   "icon": "🔑",
   "title": "Can, could & imperatives",
   "en": "Động từ khuyết thiếu",
   "desc": "Can diễn tả khả năng, xin phép và đề nghị. Could dùng cho khả năng trong quá khứ và để đề nghị lịch sự hơn.",
   "formula": [
    [
     "Công thức",
     "can/could + V · V (!) · Don't + V · Let's + V"
    ],
    [
     "Khả năng",
     "S + can/can't + V"
    ],
    [
     "Xin phép, nhờ vả",
     "Can/Could + S + V ...?"
    ],
    [
     "Mệnh lệnh khẳng định",
     "V (+ please)"
    ],
    [
     "Mệnh lệnh phủ định",
     "Don't + V"
    ],
    [
     "Rủ rê",
     "Let's + V"
    ]
   ],
   "grammar": [
    [
     "Nói về khả năng",
     "Can nói khả năng hiện tại, could nói khả năng trong quá khứ.",
     "She can speak three languages. | I could swim when I was five."
    ],
    [
     "Xin phép và nhờ vả",
     "Can/Could + S + V? Could lịch sự hơn can.",
     "Can I use your pen? | Could you open the window, please?"
    ],
    [
     "Ra lệnh, hướng dẫn và rủ rê",
     "Mệnh lệnh dùng động từ nguyên mẫu. Let's + V để rủ cùng làm.",
     "Open your books. | Let's go to the park."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn can hay could: Hiện tại và đề nghị thông thường dùng can. Quá khứ hoặc đề nghị lịch sự dùng could. 2) Dùng động từ nguyên mẫu sau can/could: Không có to, không thêm -s, không dùng do/does. 3) Với mệnh lệnh, bỏ chủ ngữ: Câu mệnh lệnh bắt đầu bằng động từ. Phủ định thêm Don't. Thêm please để lịch sự.",
     "Can I sit here? · Could I sit here? | She can swim. (không nói She cans to swim) | Don't be late, please."
    ],
    [
     "Lỗi thường gặp",
     "Sai: She cans swim. Đúng: She can swim. (Can không chia theo ngôi.) Sai: He can to play the piano. Đúng: He can play the piano. (Sau can không có to.) Sai: Do you can help me? Đúng: Can you help me? (Can là trợ động từ, tự đảo lên đầu câu hỏi.) Sai: Not run in the library. Đúng: Don't run in the library. (Mệnh lệnh phủ định dùng Don't + V.)",
     "She can swim. | He can play the piano. | Can you help me? | Don't run in the library."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Sau can/could là động từ nguyên mẫu không có to chưa? · Nói về khả năng quá khứ đã dùng could chưa? · Câu mệnh lệnh phủ định đã dùng Don't chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She ___ speak French and English.",
     "can",
     [
      "cans",
      "is can"
     ],
     "Can không chia theo ngôi."
    ],
    [
     "Which is the most polite request?",
     "Could you open the window, please?",
     [
      "Open the window.",
      "You open the window."
     ],
     "Could you ... please? là cách nhờ lịch sự."
    ],
    [
     "Which sentence is correct?",
     "He can swim.",
     [
      "He can swims.",
      "He can to swim."
     ],
     "Sau can dùng động từ nguyên mẫu không có to."
    ],
    [
     "___ run in the library!",
     "Don't",
     [
      "Not",
      "No"
     ],
     "Mệnh lệnh phủ định dùng Don't + V."
    ],
    [
     "Which sentence is correct?",
     "Can you help me?",
     [
      "Do you can help me?",
      "Can you helping me?"
     ],
     "Can đảo lên đầu câu, theo sau là động từ nguyên mẫu."
    ],
    [
     "I ___ ride a bike when I was six.",
     "could",
     [
      "can",
      "am can"
     ],
     "Khả năng trong quá khứ dùng could."
    ]
   ],
   "gaps": [
    [
     "___ you swim? — Yes, I can.",
     [
      "can"
     ],
     "",
     "Câu hỏi khả năng dùng Can."
    ],
    [
     "___ be late for school! (cấm đoán)",
     [
      "don't",
      "do not"
     ],
     "",
     "Mệnh lệnh phủ định dùng Don't + V."
    ],
    [
     "___ go to the park! (rủ ai đó cùng đi)",
     [
      "let's",
      "let us"
     ],
     "",
     "Rủ cùng làm dùng Let's + V."
    ],
    [
     "She ___ drive yet. She is only ten. (phủ định của can)",
     [
      "can't",
      "cannot"
     ],
     "",
     "Phủ định của can là can't hoặc cannot."
    ]
   ],
   "sentences": [
    [
     "My sister can sing very well.",
     "Chị tôi hát rất hay."
    ],
    [
     "Could you pass me the salt, please?",
     "Bạn làm ơn đưa giúp tôi lọ muối được không?"
    ],
    [
     "I couldn't ride a bike when I was four.",
     "Lúc bốn tuổi tôi chưa biết đi xe đạp."
    ],
    [
     "Don't touch that! It's hot.",
     "Đừng chạm vào đó! Nóng đấy."
    ],
    [
     "It's a nice day. Let's go for a walk.",
     "Hôm nay trời đẹp. Chúng ta đi dạo nhé."
    ]
   ]
  },
  {
   "id": "wh-a2-past-simple-be",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Past simple: was & were",
   "en": "Thì",
   "desc": "Was và were là quá khứ của am, is, are. I, he, she, it đi với was; you, we, they và danh từ số nhiều đi với were.",
   "formula": [
    [
     "Công thức",
     "S + was/were + bổ ngữ"
    ],
    [
     "Khẳng định",
     "I/he/she/it + was · you/we/they + were"
    ],
    [
     "Phủ định",
     "S + wasn't / weren't"
    ],
    [
     "Nghi vấn",
     "Was/Were + S + …?"
    ],
    [
     "Mốc thời gian quá khứ",
     "yesterday · last night/week/year · ago · in + năm"
    ]
   ],
   "grammar": [
    [
     "Nói về trạng thái hoặc cảm xúc trong quá khứ",
     "Dùng was/were + tính từ để kể lại cảm giác hoặc tình trạng đã qua.",
     "I was very tired yesterday. | The children were happy."
    ],
    [
     "Nói về nơi chốn, nghề nghiệp, tuổi trong quá khứ",
     "Dùng was/were với địa điểm, nghề hoặc tuổi ở thời điểm đã qua.",
     "We were at the beach last Sunday. | My grandfather was a farmer."
    ],
    [
     "Hỏi và trả lời về quá khứ",
     "Hỏi bằng Was/Were + S ...? hoặc Where/How + was/were ...?",
     "Were you at home last night? | How was the film?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định chủ ngữ: Chủ ngữ số ít (I, he, she, it) chọn was. You, we, they và danh từ số nhiều chọn were. 2) Đặt was/were sau chủ ngữ: Giống am/is/are ở hiện tại: bổ ngữ đứng ngay sau. 3) Phủ định và nghi vấn không dùng did: Was/were tự thêm not hoặc đảo lên đầu câu, không cần trợ động từ did.",
     "My friends (= they) → were | The test was easy. | Were you tired? — No, I wasn't."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I were at home last night. Đúng: I was at home last night. (I đi với was, không đi với were.) Sai: They was very happy. Đúng: They were very happy. (They là số nhiều nên dùng were.) Sai: Did you were late? Đúng: Were you late? (Was/were không dùng với did; đảo was/were lên đầu câu.) Sai: Yesterday is Sunday. Đúng: Yesterday was Sunday. (Yesterday là quá khứ nên động từ phải là was.)",
     "I was at home last night. | They were very happy. | Were you late? | Yesterday was Sunday."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ số ít (was) hay số nhiều và you (were)? · Có mốc thời gian quá khứ không? · Phủ định và câu hỏi đã tránh did chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I ___ at school yesterday.",
     "was",
     [
      "were",
      "am"
     ],
     "I đi với was ở quá khứ."
    ],
    [
     "They ___ very tired last night.",
     "were",
     [
      "was",
      "are"
     ],
     "They là số nhiều nên dùng were."
    ],
    [
     "___ you at home last weekend?",
     "Were",
     [
      "Was",
      "Did"
     ],
     "You đi với were; câu hỏi đảo were lên đầu."
    ],
    [
     "Which sentence is correct?",
     "She was in Hanoi.",
     [
      "She were in Hanoi.",
      "She did in Hanoi."
     ],
     "She đi với was."
    ],
    [
     "The shops ___ open yesterday. (phủ định)",
     "weren't",
     [
      "wasn't",
      "didn't"
     ],
     "The shops là số nhiều; phủ định của were là weren't."
    ],
    [
     "Which time word goes with the past simple?",
     "yesterday",
     [
      "now",
      "tomorrow"
     ],
     "Yesterday là mốc thời gian quá khứ."
    ]
   ],
   "gaps": [
    [
     "My father ___ a teacher ten years ago.",
     [
      "was"
     ],
     "",
     "My father là ngôi thứ ba số ít nên dùng was."
    ],
    [
     "We ___ not at the party. (viết đầy đủ)",
     [
      "were"
     ],
     "",
     "We đi với were: were not."
    ],
    [
     "___ it cold yesterday? — Yes, it was.",
     [
      "was"
     ],
     "",
     "It đi với Was ở đầu câu hỏi."
    ],
    [
     "The children ___ in the garden an hour ago.",
     [
      "were"
     ],
     "",
     "The children là số nhiều nên dùng were."
    ]
   ],
   "sentences": [
    [
     "I was at my grandmother's house last weekend.",
     "Cuối tuần trước tôi ở nhà bà."
    ],
    [
     "The students were very quiet during the exam.",
     "Học sinh rất yên lặng trong giờ thi."
    ],
    [
     "It wasn't cold yesterday, but it was windy.",
     "Hôm qua trời không lạnh nhưng có gió."
    ],
    [
     "Were you ill on Monday? — No, I wasn't.",
     "Thứ Hai bạn bị ốm à? — Không."
    ],
    [
     "Where were you two hours ago?",
     "Hai tiếng trước bạn ở đâu?"
    ]
   ]
  },
  {
   "id": "wh-a2-past-simple-regular",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Past simple: regular verbs",
   "en": "Thì",
   "desc": "Thì quá khứ đơn diễn tả hành động đã hoàn tất trong quá khứ. Động từ có quy tắc thêm -ed và dạng này giống nhau cho mọi chủ ngữ.",
   "formula": [
    [
     "Công thức",
     "S + V-ed"
    ],
    [
     "Thêm -ed",
     "V + ed"
    ],
    [
     "Tận cùng e",
     "V + d"
    ],
    [
     "Phụ âm + y",
     "y → ied"
    ],
    [
     "Nhân đôi phụ âm",
     "nguyên âm + phụ âm (từ một âm tiết) → nhân đôi + ed"
    ]
   ],
   "grammar": [
    [
     "Kể việc đã xảy ra và kết thúc",
     "Dùng với mốc thời gian đã qua như yesterday, last week, in 2020.",
     "I watched a film last night. | She called me an hour ago."
    ],
    [
     "Kể chuỗi sự việc",
     "Các hành động nối tiếp nhau trong câu chuyện đều dùng quá khứ đơn.",
     "He opened the door, looked outside and closed it."
    ],
    [
     "Nói về khoảng thời gian trong quá khứ",
     "Việc kéo dài nhưng đã chấm dứt cũng dùng quá khứ đơn.",
     "We lived in Hue for five years."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhìn chữ cái cuối của động từ: Tận cùng e chỉ thêm d. Phụ âm + y đổi y thành ied. Nguyên âm + phụ âm ở từ ngắn thì nhân đôi phụ âm. 2) Dùng cùng một dạng cho mọi chủ ngữ: Không có -s ở ngôi thứ ba trong quá khứ. 3) Nhớ cách đọc -ed: Đọc /t/ sau âm vô thanh (worked), /d/ sau âm hữu thanh (played), /ɪd/ sau t hoặc d (wanted).",
     "like → liked · try → tried · stop → stopped | I worked · she worked · they worked | walked /t/ · cleaned /d/ · needed /ɪd/"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She studyed hard. Đúng: She studied hard. (Phụ âm + y đổi y thành ied.) Sai: We stoped at a café. Đúng: We stopped at a café. (Stop kết thúc bằng nguyên âm + phụ âm nên nhân đôi p.) Sai: He play football yesterday. Đúng: He played football yesterday. (Có yesterday nên động từ phải ở quá khứ.) Sai: I am watched TV last night. Đúng: I watched TV last night. (Quá khứ đơn không dùng am/is/are trước động từ.)",
     "She studied hard. | We stopped at a café. | He played football yesterday. | I watched TV last night."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu nói về việc đã qua chưa? Có mốc thời gian quá khứ không? · Động từ đã thêm -ed, -d hoặc ied đúng chính tả chưa? · Đã tránh thêm am/is/are hay -s nhầm chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She ___ in London last year.",
     "lived",
     [
      "live",
      "lives"
     ],
     "Last year là quá khứ; live + d = lived."
    ],
    [
     "We ___ football yesterday.",
     "played",
     [
      "play",
      "playd"
     ],
     "Play + ed = played."
    ],
    [
     "Past simple of 'study':",
     "studied",
     [
      "studyed",
      "studdied"
     ],
     "Phụ âm d + y đổi thành ied."
    ],
    [
     "Past simple of 'stop':",
     "stopped",
     [
      "stoped",
      "stopt"
     ],
     "Nhân đôi p rồi thêm ed."
    ],
    [
     "Which sentence is correct?",
     "I watched TV last night.",
     [
      "I watch TV last night.",
      "I am watched TV last night."
     ],
     "Last night là quá khứ; watch + ed."
    ],
    [
     "In which verb is '-ed' pronounced /ɪd/?",
     "wanted",
     [
      "played",
      "walked"
     ],
     "Sau âm t hoặc d, -ed đọc là /ɪd/."
    ]
   ],
   "gaps": [
    [
     "He ___ (clean) his room yesterday.",
     [
      "cleaned"
     ],
     "",
     "Clean + ed = cleaned."
    ],
    [
     "They ___ (carry) the boxes upstairs.",
     [
      "carried"
     ],
     "",
     "Phụ âm r + y đổi thành ied."
    ],
    [
     "I ___ (plan) a trip last week.",
     [
      "planned"
     ],
     "",
     "Plan nhân đôi n: planned."
    ],
    [
     "She ___ (call) me an hour ago.",
     [
      "called"
     ],
     "",
     "Call + ed = called."
    ]
   ],
   "sentences": [
    [
     "My mother cooked a big dinner yesterday.",
     "Hôm qua mẹ tôi nấu một bữa tối thịnh soạn."
    ],
    [
     "She studied until midnight and then she stopped.",
     "Cô ấy học đến nửa đêm rồi mới dừng."
    ],
    [
     "We lived in Da Nang when I was a child.",
     "Chúng tôi sống ở Đà Nẵng khi tôi còn nhỏ."
    ],
    [
     "They played football in the park last Sunday.",
     "Chủ nhật tuần trước họ chơi bóng đá ở công viên."
    ],
    [
     "He wanted a new phone, so he saved money.",
     "Anh ấy muốn một chiếc điện thoại mới nên đã tiết kiệm tiền."
    ]
   ]
  },
  {
   "id": "wh-a2-past-simple-irregular",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Past simple: irregular verbs",
   "en": "Thì",
   "desc": "Nhiều động từ thông dụng không thêm -ed mà đổi sang dạng riêng ở quá khứ. Các dạng này phải học thuộc, nhưng có thể nhớ theo nhóm.",
   "formula": [
    [
     "Công thức",
     "S + V2 (dạng quá khứ bất quy tắc)"
    ],
    [
     "Đổi nguyên âm",
     "drink → drank · sing → sang · give → gave"
    ],
    [
     "Đổi hoàn toàn",
     "go → went · be → was/were · do → did"
    ],
    [
     "Nhóm -ought / -aught",
     "buy → bought · think → thought · teach → taught"
    ],
    [
     "Không đổi",
     "cut → cut · put → put · hit → hit"
    ]
   ],
   "grammar": [
    [
     "Kể lại việc đã làm",
     "Các động từ như go, have, do, see, eat xuất hiện rất nhiều khi kể chuyện.",
     "We went to the beach. | I saw a good film."
    ],
    [
     "Nói chuỗi sự việc trong quá khứ",
     "Kết hợp động từ có quy tắc và bất quy tắc trong cùng một câu chuyện.",
     "She got up, had breakfast and went to school."
    ],
    [
     "Nói về điều đã mua, nhận, viết",
     "Buy, give, write, take, make rất hay gặp trong hội thoại hàng ngày.",
     "He bought a new bike. | She wrote me a letter."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhận ra động từ bất quy tắc: Nếu thêm -ed nghe lạ hoặc sai (goed, buyed) thì rất có thể đó là động từ bất quy tắc. 2) Học theo nhóm: Nhóm theo kiểu biến đổi giúp nhớ nhanh: -ought, đổi nguyên âm, không đổi. 3) Dùng một dạng cho mọi chủ ngữ: Không thêm -s ở ngôi thứ ba trong quá khứ.",
     "go → went (không phải goed) | buy/bought · think/thought · teach/taught | He went · they went"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I goed to the market. Đúng: I went to the market. (Go là động từ bất quy tắc: went.) Sai: She buyed a new dress. Đúng: She bought a new dress. (Buy → bought.) Sai: We eated pizza yesterday. Đúng: We ate pizza yesterday. (Eat → ate.) Sai: He maked a cake. Đúng: He made a cake. (Make → made.)",
     "I went to the market. | She bought a new dress. | We ate pizza yesterday. | He made a cake."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Động từ này có phải bất quy tắc không? · Đã dùng đúng dạng quá khứ riêng chưa? · Có tránh thêm -ed nhầm vào động từ bất quy tắc không?",
     ""
    ]
   ],
   "quiz": [
    [
     "Past simple of 'go':",
     "went",
     [
      "goed",
      "gone"
     ],
     "Go → went."
    ],
    [
     "Past simple of 'buy':",
     "bought",
     [
      "buyed",
      "boughted"
     ],
     "Buy → bought."
    ],
    [
     "Past simple of 'see':",
     "saw",
     [
      "seed",
      "seen"
     ],
     "See → saw. Seen là dạng quá khứ phân từ."
    ],
    [
     "She ___ a letter to her friend last week.",
     "wrote",
     [
      "write",
      "writed"
     ],
     "Write → wrote."
    ],
    [
     "We ___ pizza for dinner yesterday.",
     "ate",
     [
      "eated",
      "eaten"
     ],
     "Eat → ate."
    ],
    [
     "Which verb does not change in the past simple?",
     "put",
     [
      "take",
      "make"
     ],
     "Put → put, giữ nguyên dạng."
    ]
   ],
   "gaps": [
    [
     "I ___ (have) a great time at the party.",
     [
      "had"
     ],
     "",
     "Have → had."
    ],
    [
     "He ___ (drink) two glasses of water.",
     [
      "drank"
     ],
     "",
     "Drink → drank."
    ],
    [
     "They ___ (come) home late last night.",
     [
      "came"
     ],
     "",
     "Come → came."
    ],
    [
     "She ___ (give) me a present on my birthday.",
     [
      "gave"
     ],
     "",
     "Give → gave."
    ]
   ],
   "sentences": [
    [
     "I had a great time at the party last night.",
     "Tối qua tôi đã có khoảng thời gian tuyệt vời ở bữa tiệc."
    ],
    [
     "She wrote an email to her teacher and sent it.",
     "Cô ấy viết một email cho giáo viên và gửi đi."
    ],
    [
     "We ate rice and fish for dinner.",
     "Chúng tôi ăn cơm với cá vào bữa tối."
    ],
    [
     "He took a taxi because it was late.",
     "Anh ấy bắt taxi vì đã muộn."
    ],
    [
     "They came home at ten and went straight to bed.",
     "Họ về nhà lúc mười giờ và đi ngủ ngay."
    ]
   ]
  },
  {
   "id": "wh-a2-past-simple-negatives-questions",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Past simple: negatives & questions",
   "en": "Thì",
   "desc": "Với động từ thường, câu phủ định quá khứ dùng didn't + động từ nguyên mẫu, và câu hỏi dùng Did + chủ ngữ + động từ nguyên mẫu.",
   "formula": [
    [
     "Công thức",
     "S + didn't + V · Did + S + V?"
    ],
    [
     "Phủ định",
     "S + didn't (did not) + V"
    ],
    [
     "Nghi vấn",
     "Did + S + V + …?"
    ],
    [
     "Câu hỏi Wh-",
     "Wh-word + did + S + V?"
    ],
    [
     "Trả lời ngắn",
     "Yes, S + did. · No, S + didn't."
    ]
   ],
   "grammar": [
    [
     "Nói việc không xảy ra",
     "Dùng didn't + V nguyên mẫu.",
     "I didn't watch TV last night. | She didn't go to school."
    ],
    [
     "Hỏi Yes/No về quá khứ",
     "Đưa Did lên đầu câu; trả lời bằng Yes, S + did hoặc No, S + didn't.",
     "Did you enjoy the trip? — Yes, I did."
    ],
    [
     "Hỏi thông tin về quá khứ",
     "Wh-word + did + S + V nguyên mẫu?",
     "Where did you go? | What did he buy?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra động từ là be hay động từ thường: Với was/were, dùng wasn't, weren't hoặc đảo was/were. Chỉ động từ thường mới dùng did. 2) Thêm didn't hoặc đưa Did lên đầu câu: Phủ định: S + didn't + V. Câu hỏi: Did + S + V? 3) Đưa động từ chính về nguyên mẫu: Sau did và didn't không thêm -ed và không dùng dạng bất quy tắc.",
     "Was she late? · Did she arrive late? | He didn't call. · Did he call? | Did you go? (không nói Did you went)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She didn't went home. Đúng: She didn't go home. (Sau didn't động từ trở về nguyên mẫu.) Sai: Did you saw him? Đúng: Did you see him? (Sau did dùng nguyên mẫu, không dùng quá khứ.) Sai: Did she was late? Đúng: Was she late? (Was/were không dùng với did.) Sai: Where you went yesterday? Đúng: Where did you go yesterday? (Câu hỏi quá khứ với động từ thường cần did.)",
     "She didn't go home. | Did you see him? | Was she late? | Where did you go yesterday?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Động từ trong câu là be hay động từ thường? · Đã dùng didn't hoặc Did đúng chỗ chưa? · Động từ chính đã ở dạng nguyên mẫu chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I ___ watch TV last night.",
     "didn't",
     [
      "don't",
      "wasn't"
     ],
     "Quá khứ với động từ thường: didn't + V."
    ],
    [
     "___ she call you yesterday?",
     "Did",
     [
      "Do",
      "Was"
     ],
     "Câu hỏi quá khứ với động từ thường dùng Did."
    ],
    [
     "Which sentence is correct?",
     "He didn't go home.",
     [
      "He didn't went home.",
      "He doesn't went home."
     ],
     "Didn't + động từ nguyên mẫu."
    ],
    [
     "Which sentence is correct?",
     "Did you see him?",
     [
      "Did you saw him?",
      "Do you saw him?"
     ],
     "Did + you + see (nguyên mẫu)."
    ],
    [
     "Did they win? — No, ___.",
     "they didn't",
     [
      "they weren't",
      "they don't"
     ],
     "Trả lời ngắn lặp lại trợ động từ did."
    ],
    [
     "Where ___ you go last summer?",
     "did",
     [
      "do",
      "were"
     ],
     "Wh-word + did + S + V."
    ]
   ],
   "gaps": [
    [
     "She ___ (not / eat) breakfast this morning. (dạng rút gọn hoặc đầy đủ)",
     [
      "didn't eat",
      "did not eat"
     ],
     "",
     "Phủ định: didn't + eat."
    ],
    [
     "___ you finish your homework? — Yes, I did.",
     [
      "did"
     ],
     "",
     "Câu hỏi quá khứ bắt đầu bằng Did."
    ],
    [
     "What ___ he buy at the market?",
     [
      "did"
     ],
     "",
     "What + did + he + buy."
    ],
    [
     "We ___ (not / go) to school yesterday. (dạng rút gọn hoặc đầy đủ)",
     [
      "didn't go",
      "did not go"
     ],
     "",
     "Phủ định: didn't + go."
    ]
   ],
   "sentences": [
    [
     "I didn't sleep well last night.",
     "Tối qua tôi ngủ không ngon."
    ],
    [
     "Did you finish your homework?",
     "Bạn làm xong bài tập chưa?"
    ],
    [
     "Where did you buy that jacket?",
     "Bạn mua cái áo khoác đó ở đâu?"
    ],
    [
     "Did they win the match? — No, they didn't.",
     "Họ có thắng trận đấu không? — Không."
    ],
    [
     "She didn't eat breakfast, so she was hungry.",
     "Cô ấy không ăn sáng nên bị đói."
    ]
   ]
  },
  {
   "id": "wh-a2-past-continuous",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Past continuous",
   "en": "Thì",
   "desc": "Thì quá khứ tiếp diễn dùng was/were + V-ing để nói hành động đang diễn ra tại một thời điểm trong quá khứ, hoặc đang diễn ra thì bị một việc khác xen vào.",
   "formula": [
    [
     "Công thức",
     "S + was/were + V-ing"
    ],
    [
     "Khẳng định",
     "I/he/she/it + was + V-ing · you/we/they + were + V-ing"
    ],
    [
     "Phủ định",
     "S + wasn't / weren't + V-ing"
    ],
    [
     "Nghi vấn",
     "Was/Were + S + V-ing?"
    ],
    [
     "When và while",
     "while + quá khứ tiếp diễn · when + quá khứ đơn (việc xen vào)"
    ]
   ],
   "grammar": [
    [
     "Hành động đang diễn ra ở một thời điểm trong quá khứ",
     "Thường đi với mốc giờ cụ thể: at 8 p.m. yesterday.",
     "At 8 p.m. yesterday, I was watching TV."
    ],
    [
     "Hành động đang diễn ra bị việc khác xen vào",
     "Việc dài dùng quá khứ tiếp diễn, việc ngắn xen vào dùng quá khứ đơn.",
     "I was cooking when the phone rang."
    ],
    [
     "Hai việc diễn ra song song",
     "Dùng while nối hai hành động cùng đang diễn ra.",
     "While she was reading, he was playing games."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn was hoặc were theo chủ ngữ: Giống thì quá khứ của be: I/he/she/it dùng was; you/we/they dùng were. 2) Thêm -ing vào động từ chính: Chính tả -ing giống ở hiện tại tiếp diễn: bỏ e, nhân đôi phụ âm. 3) Xác định việc dài và việc ngắn: Việc đang diễn ra dùng was/were + V-ing. Việc xảy ra đột ngột chen vào dùng quá khứ đơn.",
     "She was · They were | make → making · run → running | I was sleeping when you called."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I was watch TV at nine. Đúng: I was watching TV at nine. (Sau was/were cần V-ing.) Sai: She were sleeping. Đúng: She was sleeping. (She đi với was.) Sai: When I was arrived, they left. Đúng: When I arrived, they left. (Việc xen vào hoặc xảy ra tức thời dùng quá khứ đơn.) Sai: I was cooking when the phone was ringing. Đúng: I was cooking when the phone rang. (Việc xen vào dùng quá khứ đơn: rang.)",
     "I was watching TV at nine. | She was sleeping. | When I arrived, they left. | I was cooking when the phone rang."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Việc đó đang diễn ra tại một thời điểm trong quá khứ không? · Đã dùng was/were + V-ing đúng chưa? · Việc xen vào đã dùng quá khứ đơn chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "At 9 p.m. last night, I ___ TV.",
     "was watching",
     [
      "watched",
      "am watching"
     ],
     "Việc đang diễn ra tại một giờ cụ thể trong quá khứ."
    ],
    [
     "They ___ football when it started to rain.",
     "were playing",
     [
      "played",
      "are playing"
     ],
     "Việc đang diễn ra thì có việc khác xen vào."
    ],
    [
     "Which sentence is correct?",
     "She was sleeping.",
     [
      "She were sleeping.",
      "She was sleep."
     ],
     "She was + V-ing."
    ],
    [
     "I ___ a shower when the phone rang.",
     "was taking",
     [
      "took",
      "take"
     ],
     "Was taking là việc đang diễn ra; rang là việc xen vào."
    ],
    [
     "___ you studying at ten last night?",
     "Were",
     [
      "Was",
      "Did"
     ],
     "You đi với Were."
    ],
    [
     "While I ___, my brother was playing games.",
     "was doing homework",
     [
      "did homework",
      "do homework"
     ],
     "While đi với quá khứ tiếp diễn."
    ]
   ],
   "gaps": [
    [
     "He ___ (cook) dinner when I arrived.",
     [
      "was cooking"
     ],
     "",
     "Việc đang diễn ra: was cooking."
    ],
    [
     "We ___ (not / sleep) at midnight. (dạng rút gọn hoặc đầy đủ)",
     [
      "weren't sleeping",
      "were not sleeping"
     ],
     "",
     "Phủ định: were not + V-ing."
    ],
    [
     "What ___ you doing at eight o'clock?",
     [
      "were"
     ],
     "",
     "You đi với were."
    ],
    [
     "The children ___ (play) in the park while their mother was reading.",
     [
      "were playing"
     ],
     "",
     "The children là số nhiều: were playing."
    ]
   ],
   "sentences": [
    [
     "At nine o'clock last night, we were having dinner.",
     "Chín giờ tối qua chúng tôi đang ăn tối."
    ],
    [
     "I was cooking when the phone rang.",
     "Tôi đang nấu ăn thì điện thoại reo."
    ],
    [
     "While my mother was working, I was doing my homework.",
     "Trong lúc mẹ làm việc, tôi làm bài tập."
    ],
    [
     "They weren't listening to the teacher.",
     "Họ đã không nghe giáo viên giảng."
    ],
    [
     "What were you doing at seven o'clock?",
     "Bảy giờ bạn đang làm gì?"
    ]
   ]
  },
  {
   "id": "wh-a2-be-going-to",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Be going to",
   "en": "Thì",
   "desc": "Be going to + động từ nguyên mẫu dùng để nói kế hoạch, dự định đã có từ trước, và dự đoán dựa trên bằng chứng hiện tại. Cấu trúc là am/is/are going to + V.",
   "formula": [
    [
     "Công thức",
     "S + am/is/are + going to + V"
    ],
    [
     "Khẳng định",
     "S + am/is/are + going to + V"
    ],
    [
     "Phủ định",
     "S + am/is/are + not + going to + V"
    ],
    [
     "Nghi vấn",
     "Am/Is/Are + S + going to + V?"
    ],
    [
     "Dự đoán có bằng chứng",
     "It is going to + V (nhìn thấy dấu hiệu)"
    ]
   ],
   "grammar": [
    [
     "Nói về kế hoạch, dự định",
     "Việc đã được quyết định trước thời điểm nói.",
     "I'm going to visit my grandma this weekend."
    ],
    [
     "Dự đoán dựa trên bằng chứng",
     "Có dấu hiệu rõ ở hiện tại cho thấy điều sắp xảy ra.",
     "Look at those clouds! It is going to rain."
    ],
    [
     "Hỏi về kế hoạch",
     "Hỏi bằng Are you going to ...? hoặc What are you going to do?",
     "What are you going to do tonight?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn am, is hoặc are theo chủ ngữ: I dùng am, he/she/it dùng is, you/we/they dùng are. 2) Thêm going to và động từ nguyên mẫu: Sau to là động từ nguyên mẫu, không thêm -s hay -ing. 3) Kiểm tra mốc thời gian tương lai: Dùng tomorrow, next week, soon để rõ nghĩa tương lai.",
     "She is going to · They are going to | going to study | I'm going to call you tomorrow."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I going to study tonight. Đúng: I am going to study tonight. (Không được thiếu am/is/are.) Sai: She is going to studies. Đúng: She is going to study. (Sau to dùng động từ nguyên mẫu.) Sai: Are you going visit your aunt? Đúng: Are you going to visit your aunt? (Cần to trước động từ nguyên mẫu.) Sai: He isn't going to goes. Đúng: He isn't going to go. (Động từ sau to không chia.)",
     "I am going to study tonight. | She is going to study. | Are you going to visit your aunt? | He isn't going to go."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã có am/is/are phù hợp chưa? · Đã dùng going to + động từ nguyên mẫu chưa? · Đây là kế hoạch hoặc dự đoán có bằng chứng không?",
     ""
    ]
   ],
   "quiz": [
    [
     "I ___ visit my grandma this weekend.",
     "am going to",
     [
      "go to",
      "going to"
     ],
     "Kế hoạch dùng am going to + V."
    ],
    [
     "She ___ going to buy a new bike.",
     "is",
     [
      "are",
      "does"
     ],
     "She đi với is."
    ],
    [
     "Look at those dark clouds! It ___ rain.",
     "is going to",
     [
      "will to",
      "goes to"
     ],
     "Có bằng chứng ở hiện tại nên dùng is going to."
    ],
    [
     "Which sentence is correct?",
     "He is going to play football.",
     [
      "He is going to plays football.",
      "He going to play football."
     ],
     "Sau to dùng động từ nguyên mẫu."
    ],
    [
     "___ you going to come to the party?",
     "Are",
     [
      "Do",
      "Is"
     ],
     "You đi với are."
    ],
    [
     "They ___ going to move house next year. (phủ định)",
     "aren't",
     [
      "isn't",
      "don't"
     ],
     "They đi với aren't going to."
    ]
   ],
   "gaps": [
    [
     "We ___ going to have a picnic tomorrow.",
     [
      "are"
     ],
     "",
     "We đi với are."
    ],
    [
     "My sister ___ going to study abroad.",
     [
      "is"
     ],
     "",
     "My sister đi với is."
    ],
    [
     "I'm going to ___ (buy) some bread.",
     [
      "buy"
     ],
     "",
     "Sau going to dùng động từ nguyên mẫu: buy."
    ],
    [
     "What ___ you going to do tonight?",
     [
      "are"
     ],
     "",
     "You đi với are."
    ]
   ],
   "sentences": [
    [
     "I'm going to study English in Canada next year.",
     "Năm tới tôi sẽ đi học tiếng Anh ở Canada."
    ],
    [
     "She isn't going to join the club because she is busy.",
     "Cô ấy sẽ không tham gia câu lạc bộ vì bận."
    ],
    [
     "Are you going to watch the match tonight?",
     "Tối nay bạn có định xem trận đấu không?"
    ],
    [
     "Look out! That car is going to hit the tree.",
     "Cẩn thận! Chiếc xe kia sắp đâm vào cây."
    ],
    [
     "What are they going to do after school?",
     "Họ định làm gì sau giờ học?"
    ]
   ]
  },
  {
   "id": "wh-a2-will-future",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Will: predictions, offers & decisions",
   "en": "Thì",
   "desc": "Will + động từ nguyên mẫu dùng để nói quyết định tức thời ngay lúc nói, lời hứa, lời đề nghị giúp đỡ và dự đoán dựa trên ý kiến cá nhân. Will không đổi theo ngôi.",
   "formula": [
    [
     "Công thức",
     "S + will + V"
    ],
    [
     "Khẳng định",
     "S + will/'ll + V"
    ],
    [
     "Phủ định",
     "S + will not / won't + V"
    ],
    [
     "Nghi vấn",
     "Will + S + V?"
    ],
    [
     "Từ thường đi kèm",
     "I think · probably · I'm sure · maybe"
    ]
   ],
   "grammar": [
    [
     "Quyết định tức thời và đề nghị giúp",
     "Quyết định ngay lúc nói, chưa có kế hoạch trước.",
     "It's cold. I'll close the window. | I'll help you with your bag."
    ],
    [
     "Hứa hẹn",
     "Dùng will hoặc won't để hứa.",
     "I promise I won't be late."
    ],
    [
     "Dự đoán theo ý kiến",
     "Thường đi với think, believe, probably, I'm sure.",
     "I think it will rain tomorrow."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý nghĩa của câu: Quyết định tức thời, lời hứa, đề nghị hoặc dự đoán theo ý kiến thì dùng will. 2) Đặt will trước động từ nguyên mẫu: Will giống nhau cho mọi chủ ngữ; không thêm to, -s hay -ing. 3) Phân biệt với going to: Kế hoạch đã định hoặc dự đoán có bằng chứng thì dùng going to. Quyết định tại chỗ thì dùng will.",
     "Oh, I forgot milk. I'll buy some. | He will go. (không nói He wills go) | I'm going to visit Hue next week. (đã có kế hoạch)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She will goes home. Đúng: She will go home. (Sau will dùng động từ nguyên mẫu.) Sai: I will to help you. Đúng: I will help you. (Sau will không có to.) Sai: Do you will come? Đúng: Will you come? (Will tự đảo lên đầu câu, không dùng do.) Sai: He wills be late. Đúng: He will be late. (Will không thêm -s.)",
     "She will go home. | I will help you. | Will you come? | He will be late."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đó là quyết định tức thời, lời hứa, đề nghị hay dự đoán theo ý kiến không? · Sau will là động từ nguyên mẫu không có to chưa? · Phủ định đã dùng won't chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "It's cold in here. I ___ close the window.",
     "will",
     [
      "am going",
      "did"
     ],
     "Quyết định tức thời dùng will."
    ],
    [
     "I think it ___ rain tomorrow.",
     "will",
     [
      "wills",
      "going"
     ],
     "Dự đoán theo ý kiến: will + V."
    ],
    [
     "Which sentence is correct?",
     "She will go home.",
     [
      "She will goes home.",
      "She will to go home."
     ],
     "Sau will dùng động từ nguyên mẫu."
    ],
    [
     "___ you help me with my bag, please?",
     "Will",
     [
      "Are",
      "Do"
     ],
     "Will you ...? dùng để nhờ vả."
    ],
    [
     "I promise I ___ be late.",
     "won't",
     [
      "don't",
      "wasn't"
     ],
     "Hứa không làm gì dùng won't."
    ],
    [
     "Which sentence shows a plan made before speaking?",
     "I'm going to visit my aunt on Sunday.",
     [
      "I'll visit my aunt, I think.",
      "Oh, the phone is ringing. I'll get it."
     ],
     "Kế hoạch đã định từ trước dùng be going to."
    ]
   ],
   "gaps": [
    [
     "Don't worry. I ___ help you.",
     [
      "will"
     ],
     "",
     "Lời đề nghị giúp đỡ dùng will."
    ],
    [
     "She ___ come to the party. She is ill. (phủ định, dạng rút gọn)",
     [
      "won't"
     ],
     "",
     "Phủ định của will là won't."
    ],
    [
     "___ it rain tonight? I need to know.",
     [
      "will"
     ],
     "",
     "Câu hỏi dự đoán: Will + S + V?"
    ],
    [
     "I think they ___ win the match.",
     [
      "will"
     ],
     "",
     "Dự đoán theo ý kiến: will + V."
    ]
   ],
   "sentences": [
    [
     "The phone is ringing. I'll answer it.",
     "Điện thoại đang reo. Để tôi nghe máy."
    ],
    [
     "Don't worry. I won't tell anyone.",
     "Đừng lo. Tôi sẽ không nói với ai."
    ],
    [
     "I think our team will win the game.",
     "Tôi nghĩ đội mình sẽ thắng."
    ],
    [
     "Will you open the door for me, please?",
     "Bạn mở cửa giúp tôi được không?"
    ],
    [
     "She will probably be late because of the traffic.",
     "Có lẽ cô ấy sẽ đến muộn vì kẹt xe."
    ]
   ]
  },
  {
   "id": "wh-a2-comparatives",
   "group": 8,
   "grade": 6,
   "icon": "⚖️",
   "title": "Comparatives",
   "en": "So sánh",
   "desc": "So sánh hơn dùng để nói người hoặc vật này hơn người hoặc vật kia. Tính từ ngắn thêm -er + than, tính từ dài dùng more + tính từ + than.",
   "formula": [
    [
     "Công thức",
     "adj-er + than · more + adj + than · as + adj + as"
    ],
    [
     "Tính từ ngắn (1 âm tiết)",
     "adj + er + than"
    ],
    [
     "Tận cùng e / phụ âm + y / CVC",
     "+r · y → ier · nhân đôi phụ âm"
    ],
    [
     "Tính từ dài (từ 2 âm tiết trở lên)",
     "more + adj + than"
    ],
    [
     "Bất quy tắc",
     "good → better · bad → worse · far → farther/further"
    ]
   ],
   "grammar": [
    [
     "So sánh hai người hoặc vật",
     "Dùng dạng so sánh hơn rồi đến than.",
     "My brother is taller than me. | This book is more interesting than that one."
    ],
    [
     "Nói hai điều ngang nhau",
     "Dùng as ... as; phủ định not as ... as nghĩa là kém hơn.",
     "She is as tall as her sister. | This phone isn't as expensive as that one."
    ],
    [
     "Nói điều tốt hơn hoặc tệ hơn",
     "Dùng dạng bất quy tắc better, worse.",
     "Today's weather is better than yesterday's."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Đếm âm tiết của tính từ: Tính từ một âm tiết thêm -er. Từ hai âm tiết tận cùng y cũng đổi thành -ier. Còn lại dùng more. 2) Chú ý chính tả: Tận cùng e chỉ thêm r. Phụ âm + y đổi y thành ier. Nguyên âm + phụ âm ở từ ngắn thì nhân đôi phụ âm. 3) Thêm than rồi mới đến đối tượng so sánh: Than đứng sau dạng so sánh để nối hai vế.",
     "cold → colder · happy → happier · beautiful → more beautiful | nice → nicer · busy → busier · hot → hotter | A car is faster than a bike."
    ],
    [
     "Lỗi thường gặp",
     "Sai: She is more taller than me. Đúng: She is taller than me. (Không dùng cả more và -er cùng lúc.) Sai: He is tall than his brother. Đúng: He is taller than his brother. (Thiếu -er ở dạng so sánh hơn.) Sai: This is more good than that. Đúng: This is better than that. (Good có dạng bất quy tắc better.) Sai: This bag is expensiver. Đúng: This bag is more expensive. (Tính từ dài dùng more.)",
     "She is taller than me. | He is taller than his brother. | This is better than that. | This bag is more expensive."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Tính từ ngắn hay dài? Đã dùng -er hoặc more đúng chưa? · Chính tả (-ier, nhân đôi phụ âm) đúng chưa? · Có bất quy tắc không (better, worse)? · Đã có than ở giữa hai vế chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "My brother is ___ than me.",
     "taller",
     [
      "tall",
      "more tall"
     ],
     "Tall là tính từ ngắn: taller."
    ],
    [
     "This book is ___ than that one.",
     "more interesting",
     [
      "interesting",
      "interestinger"
     ],
     "Interesting là tính từ dài nên dùng more."
    ],
    [
     "Today is ___ than yesterday. (good)",
     "better",
     [
      "gooder",
      "more good"
     ],
     "Good có dạng bất quy tắc: better."
    ],
    [
     "Comparative of 'big':",
     "bigger",
     [
      "biger",
      "more big"
     ],
     "Nhân đôi g rồi thêm er."
    ],
    [
     "Which sentence is correct?",
     "She is taller than me.",
     [
      "She is more taller than me.",
      "She is tall than me."
     ],
     "Dùng -er, không dùng more cùng -er."
    ],
    [
     "My phone is not ___ yours.",
     "as expensive as",
     [
      "more expensive as",
      "expensive than"
     ],
     "So sánh bằng: as ... as."
    ]
   ],
   "gaps": [
    [
     "A car is ___ (fast) than a bike.",
     [
      "faster"
     ],
     "",
     "Fast + er = faster."
    ],
    [
     "This exercise is ___ (easy) than the last one.",
     [
      "easier"
     ],
     "",
     "Easy đổi y thành ier."
    ],
    [
     "Hanoi is ___ (crowded) than my hometown.",
     [
      "more crowded"
     ],
     "",
     "Crowded có hai âm tiết không tận cùng y nên dùng more."
    ],
    [
     "The weather today is ___ (bad) than yesterday.",
     [
      "worse"
     ],
     "",
     "Bad → worse."
    ]
   ],
   "sentences": [
    [
     "Hanoi is bigger than Hue, but Hue is quieter.",
     "Hà Nội lớn hơn Huế nhưng Huế yên tĩnh hơn."
    ],
    [
     "This exercise is easier than the last one.",
     "Bài tập này dễ hơn bài trước."
    ],
    [
     "Travelling by plane is more expensive than by train.",
     "Đi máy bay đắt hơn đi tàu."
    ],
    [
     "My new phone is better than my old one.",
     "Điện thoại mới của tôi tốt hơn cái cũ."
    ],
    [
     "He isn't as tall as his father.",
     "Cậu ấy không cao bằng bố."
    ]
   ]
  },
  {
   "id": "wh-a2-superlatives",
   "group": 8,
   "grade": 6,
   "icon": "⚖️",
   "title": "Superlatives",
   "en": "So sánh",
   "desc": "So sánh nhất dùng để nói người hoặc vật ở mức cao nhất trong một nhóm. Tính từ ngắn dùng the + adj-est, tính từ dài dùng the most + adj.",
   "formula": [
    [
     "Công thức",
     "the + adj-est · the most + adj"
    ],
    [
     "Tính từ ngắn",
     "the + adj + est"
    ],
    [
     "Chính tả",
     "+st · y → iest · nhân đôi phụ âm"
    ],
    [
     "Tính từ dài",
     "the most + adj"
    ],
    [
     "Bất quy tắc",
     "good → the best · bad → the worst · far → the farthest"
    ]
   ],
   "grammar": [
    [
     "Chỉ người hoặc vật nổi bật nhất trong nhóm",
     "Dùng the + so sánh nhất.",
     "Mount Everest is the highest mountain in the world."
    ],
    [
     "Nói về trải nghiệm tốt nhất hoặc tệ nhất",
     "Dùng the best, the worst.",
     "That was the worst day of my life."
    ],
    [
     "Giới hạn phạm vi so sánh",
     "Dùng in + nơi chốn hoặc nhóm; of + danh từ số nhiều.",
     "She is the tallest in the class. | He is the youngest of the three brothers."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn dạng theo độ dài tính từ: Tính từ ngắn dùng -est; tính từ dài dùng the most. 2) Luôn có the: So sánh nhất gần như luôn có the đứng trước. 3) Thêm phạm vi so sánh: Dùng in cho nơi chốn hoặc nhóm, of cho nhóm số nhiều.",
     "the oldest · the most beautiful | the biggest city | in my family · of all"
    ],
    [
     "Lỗi thường gặp",
     "Sai: He is the most tall boy. Đúng: He is the tallest boy. (Tính từ ngắn dùng -est, không dùng the most.) Sai: She is tallest girl in the class. Đúng: She is the tallest girl in the class. (Thiếu the trước so sánh nhất.) Sai: He is the most good player. Đúng: He is the best player. (Good có dạng bất quy tắc: the best.) Sai: She is the youngest of my class. Đúng: She is the youngest in my class. (Dùng in với nhóm, nơi chốn; of dùng với danh từ số nhiều xác định.)",
     "He is the tallest boy. | She is the tallest girl in the class. | He is the best player. | She is the youngest in my class."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã có the trước tính từ chưa? · Tính từ ngắn dùng -est, tính từ dài dùng the most? · Có bất quy tắc không (the best, the worst)? · Đã dùng in hoặc of đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Mount Everest is ___ mountain in the world.",
     "the highest",
     [
      "higher",
      "the most high"
     ],
     "High là tính từ ngắn: the highest."
    ],
    [
     "This is ___ film in the cinema today.",
     "the most exciting",
     [
      "more exciting",
      "the excitingest"
     ],
     "Exciting là tính từ dài: the most exciting."
    ],
    [
     "She is the ___ student in our class. (good)",
     "best",
     [
      "goodest",
      "most good"
     ],
     "Good → the best."
    ],
    [
     "Which sentence is correct?",
     "He is the tallest boy.",
     [
      "He is the most tall boy.",
      "He is tallest boy."
     ],
     "Tall → the tallest."
    ],
    [
     "Superlative of 'hot':",
     "hottest",
     [
      "hotest",
      "most hot"
     ],
     "Nhân đôi t: hottest."
    ],
    [
     "Lan is the youngest ___ the three sisters.",
     "of",
     [
      "in",
      "at"
     ],
     "Of dùng với danh từ số nhiều xác định: of the three sisters."
    ]
   ],
   "gaps": [
    [
     "Winter is the ___ (cold) season.",
     [
      "coldest"
     ],
     "",
     "Cold + est = coldest."
    ],
    [
     "This is the ___ (expensive) restaurant in town.",
     [
      "most expensive"
     ],
     "",
     "Expensive là tính từ dài: the most expensive."
    ],
    [
     "He is the ___ (funny) boy in the class.",
     [
      "funniest"
     ],
     "",
     "Funny đổi y thành iest."
    ],
    [
     "That was the ___ (bad) day of my life.",
     [
      "worst"
     ],
     "",
     "Bad → the worst."
    ]
   ],
   "sentences": [
    [
     "Winter is the coldest season in Hanoi.",
     "Mùa đông là mùa lạnh nhất ở Hà Nội."
    ],
    [
     "This is the most interesting film in the cinema.",
     "Đây là bộ phim hay nhất ở rạp."
    ],
    [
     "He is the funniest boy in our class.",
     "Cậu ấy là bạn hài hước nhất lớp."
    ],
    [
     "Lan is the best student of all.",
     "Lan là học sinh giỏi nhất trong tất cả."
    ],
    [
     "That was the worst meal of the trip.",
     "Đó là bữa ăn tệ nhất của chuyến đi."
    ]
   ]
  },
  {
   "id": "wh-a2-present-perfect-basic",
   "group": 8,
   "grade": 6,
   "icon": "⏱️",
   "title": "Present perfect: basic uses",
   "en": "Thì",
   "desc": "Thì hiện tại hoàn thành dùng have/has + quá khứ phân từ (V3).",
   "formula": [
    [
     "Công thức",
     "S + have/has + V3"
    ],
    [
     "Khẳng định",
     "I/you/we/they + have + V3 · he/she/it + has + V3"
    ],
    [
     "Phủ định",
     "S + haven't / hasn't + V3"
    ],
    [
     "Nghi vấn",
     "Have/Has + S + V3?"
    ],
    [
     "For và since",
     "for + khoảng thời gian · since + mốc thời gian"
    ]
   ],
   "grammar": [
    [
     "Nói về trải nghiệm trong đời",
     "Dùng với ever, never, before; không nói rõ thời điểm.",
     "I have never eaten sushi. | Have you ever been to Japan?"
    ],
    [
     "Việc vừa xảy ra hoặc chưa xảy ra",
     "Dùng just, already trong câu khẳng định và yet trong phủ định, nghi vấn.",
     "I have just finished. | They haven't arrived yet."
    ],
    [
     "Việc kéo dài đến hiện tại",
     "Dùng for + khoảng thời gian, since + mốc thời gian.",
     "She has lived here for five years. | I have known him since 2020."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn have hoặc has: He, she, it dùng has. Các chủ ngữ còn lại dùng have. 2) Dùng quá khứ phân từ (V3): Động từ có quy tắc: V3 giống V2 (worked). Bất quy tắc phải học riêng. 3) Kiểm tra thời gian trong câu: Có mốc quá khứ xác định (yesterday, in 2019, ago) thì dùng quá khứ đơn, không dùng hiện tại hoàn thành.",
     "He has · They have | go → gone/been · see → seen · eat → eaten · write → written | I saw him yesterday. (không nói I have seen him yesterday)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I have seen him yesterday. Đúng: I saw him yesterday. (Mốc quá khứ xác định (yesterday) dùng quá khứ đơn.) Sai: She has went to school. Đúng: She has gone to school. (Hiện tại hoàn thành dùng V3: gone.) Sai: I have lived here since five years. Đúng: I have lived here for five years. (Khoảng thời gian dùng for, mốc thời gian dùng since.) Sai: He have finished. Đúng: He has finished. (He đi với has.)",
     "I saw him yesterday. | She has gone to school. | I have lived here for five years. | He has finished."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã dùng have/has đúng với chủ ngữ chưa? · Động từ đã ở dạng V3 chưa? · Có mốc quá khứ xác định không? Nếu có thì dùng quá khứ đơn. · For và since đã dùng đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I have never ___ sushi.",
     "eaten",
     [
      "eat",
      "ate"
     ],
     "Have + V3: eaten."
    ],
    [
     "She ___ lived here since 2020.",
     "has",
     [
      "have",
      "is"
     ],
     "She đi với has."
    ],
    [
     "Have you ever ___ to Japan?",
     "been",
     [
      "went",
      "go"
     ],
     "Have + V3: been."
    ],
    [
     "Which sentence is correct?",
     "I saw him yesterday.",
     [
      "I have seen him yesterday.",
      "I have saw him yesterday."
     ],
     "Yesterday là mốc quá khứ xác định nên dùng quá khứ đơn."
    ],
    [
     "We have lived here ___ ten years.",
     "for",
     [
      "since",
      "from"
     ],
     "Ten years là khoảng thời gian nên dùng for."
    ],
    [
     "They haven't finished ___.",
     "yet",
     [
      "already",
      "ever"
     ],
     "Yet dùng trong câu phủ định."
    ]
   ],
   "gaps": [
    [
     "He has ___ (write) three emails today.",
     [
      "written"
     ],
     "",
     "Write → written."
    ],
    [
     "I ___ just finished my homework.",
     [
      "have"
     ],
     "",
     "I đi với have."
    ],
    [
     "She hasn't ___ (see) that film.",
     [
      "seen"
     ],
     "",
     "See → seen."
    ],
    [
     "My parents have been married ___ 1998.",
     [
      "since"
     ],
     "",
     "1998 là mốc thời gian nên dùng since."
    ]
   ],
   "sentences": [
    [
     "I have never eaten sushi.",
     "Tôi chưa bao giờ ăn sushi."
    ],
    [
     "Have you finished your homework yet?",
     "Bạn đã làm xong bài tập chưa?"
    ],
    [
     "She has already cleaned the room.",
     "Cô ấy đã dọn xong phòng rồi."
    ],
    [
     "We have lived here for ten years.",
     "Chúng tôi sống ở đây được mười năm rồi."
    ],
    [
     "My parents have been married since 1998.",
     "Bố mẹ tôi kết hôn từ năm 1998."
    ]
   ]
  },
  {
   "id": "wh-a2-have-to-must-should",
   "group": 8,
   "grade": 6,
   "icon": "🔑",
   "title": "Have to, must & should",
   "en": "Động từ khuyết thiếu",
   "desc": "Have to và must nói về điều bắt buộc. Have to thường dùng khi quy định đến từ bên ngoài (luật, nội quy, công việc), must dùng khi người nói tự cảm thấy cần thiết.",
   "formula": [
    [
     "Công thức",
     "have to / must / should + V (nguyên mẫu)"
    ],
    [
     "Have to",
     "I/you/we/they have to + V · he/she/it has to + V"
    ],
    [
     "Câu hỏi với have to",
     "Do/Does + S + have to + V?"
    ],
    [
     "Must và mustn't",
     "S + must / mustn't + V"
    ],
    [
     "Should và shouldn't",
     "S + should / shouldn't + V"
    ],
    [
     "Không cần",
     "S + don't/doesn't have to + V"
    ]
   ],
   "grammar": [
    [
     "Nói điều bắt buộc",
     "Dùng have to hoặc must cho điều phải làm.",
     "I have to wear a uniform at school. | You must stop at a red light."
    ],
    [
     "Nói điều không cần hoặc bị cấm",
     "Don't have to là không cần thiết, mustn't là bị cấm.",
     "You don't have to come early. | You mustn't smoke here."
    ],
    [
     "Đưa lời khuyên",
     "Should khuyên nên làm, shouldn't khuyên không nên làm.",
     "You should drink more water. | You shouldn't stay up late."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định mức độ: bắt buộc, cấm hay khuyên: Bắt buộc dùng have to/must. Cấm dùng mustn't. Khuyên nên dùng should. 2) Chia have to theo chủ ngữ: Have to là động từ thường nên chia has to với he, she, it và dùng do/does ở câu hỏi, phủ định. 3) Dùng động từ nguyên mẫu sau chúng: Must và should không có to và không chia ngôi.",
     "bắt buộc: must · cấm: mustn't · khuyên: should | He has to work. · Does he have to work? | She should go. (không nói She should to go)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She must to go now. Đúng: She must go now. (Sau must không có to.) Sai: He have to work tomorrow. Đúng: He has to work tomorrow. (Have to chia has to với he.) Sai: You don't must come. Đúng: You don't have to come. (Không dùng don't với must; muốn nói không cần thì dùng don't have to.) Sai: Do he have to wear a uniform? Đúng: Does he have to wear a uniform? (He đi với Does.)",
     "She must go now. | He has to work tomorrow. | You don't have to come. | Does he have to wear a uniform?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đó là bắt buộc, cấm hay lời khuyên? · Đã phân biệt don't have to (không cần) và mustn't (cấm) chưa? · Sau must và should là động từ nguyên mẫu không có to chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "You ___ wear a seat belt in the car. It is the law.",
     "must",
     [
      "should",
      "don't have to"
     ],
     "Luật bắt buộc nên dùng must (hoặc have to)."
    ],
    [
     "You ___ come early. The class starts late, so it isn't necessary.",
     "don't have to",
     [
      "mustn't",
      "shouldn't"
     ],
     "Không cần thiết: don't have to."
    ],
    [
     "You ___ smoke here. It is dangerous and forbidden.",
     "mustn't",
     [
      "don't have to",
      "should"
     ],
     "Bị cấm: mustn't."
    ],
    [
     "She ___ get up early on weekdays.",
     "has to",
     [
      "have to",
      "must to"
     ],
     "She đi với has to."
    ],
    [
     "You look tired. You ___ go to bed early.",
     "should",
     [
      "must to",
      "have"
     ],
     "Lời khuyên dùng should."
    ],
    [
     "Which sentence is correct?",
     "Does he have to work?",
     [
      "Has he to work?",
      "Does he has to work?"
     ],
     "Does + S + have to + V nguyên mẫu."
    ]
   ],
   "gaps": [
    [
     "We ___ wear a uniform at school.",
     [
      "have to",
      "must"
     ],
     "",
     "Quy định bắt buộc: have to hoặc must."
    ],
    [
     "You ___ shout in the library! (bị cấm)",
     [
      "mustn't",
      "must not"
     ],
     "",
     "Bị cấm: mustn't."
    ],
    [
     "He ___ pay for the ticket. (bắt buộc, ngôi thứ ba)",
     [
      "has to",
      "must"
     ],
     "",
     "He đi với has to."
    ],
    [
     "You ___ eat so much sugar. It is bad for you. (lời khuyên, phủ định)",
     [
      "shouldn't",
      "should not"
     ],
     "",
     "Khuyên không nên: shouldn't."
    ]
   ],
   "sentences": [
    [
     "Students have to wear helmets when they ride motorbikes.",
     "Học sinh phải đội mũ bảo hiểm khi đi xe máy."
    ],
    [
     "You don't have to bring a pen. I have some.",
     "Bạn không cần mang bút. Tôi có sẵn."
    ],
    [
     "You mustn't use your phone during the exam.",
     "Bạn không được dùng điện thoại trong giờ thi."
    ],
    [
     "You look tired. You should go to bed early.",
     "Trông bạn mệt. Bạn nên đi ngủ sớm."
    ],
    [
     "Does she have to work on Saturdays?",
     "Cô ấy có phải làm việc vào thứ Bảy không?"
    ]
   ]
  },
  {
   "id": "wh-a2-too-enough-quantifiers",
   "group": 8,
   "grade": 6,
   "icon": "📝",
   "title": "Too, enough & a few / a little",
   "en": "Lượng từ",
   "desc": "Too nghĩa là quá mức và mang ý tiêu cực: too + tính từ, too much + không đếm được, too many + đếm được số nhiều. Enough nghĩa là đủ: tính từ + enough, enough + danh từ.",
   "formula": [
    [
     "Công thức",
     "too + adj · adj + enough · too many/much + noun"
    ],
    [
     "Too + tính từ",
     "too + adj (+ to V)"
    ],
    [
     "Too much / too many",
     "too much + không đếm được · too many + đếm được số nhiều"
    ],
    [
     "Enough",
     "adj + enough · enough + noun"
    ],
    [
     "A few / a little và few / little",
     "a few + đếm được · a little + không đếm được · few/little = hầu như không"
    ]
   ],
   "grammar": [
    [
     "Nói điều vượt quá mức cần thiết",
     "Too nhấn mạnh quá nhiều hoặc quá mức nên gây vấn đề.",
     "This bag is too heavy. | There are too many people here."
    ],
    [
     "Nói đủ hoặc không đủ",
     "Enough đứng sau tính từ, trước danh từ.",
     "She is old enough to drive. | We don't have enough money."
    ],
    [
     "Nói một vài hoặc một ít",
     "A few với đếm được, a little với không đếm được.",
     "I have a few friends here. | I need a little time."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn too hay enough: Quá mức gây khó khăn thì dùng too. Đủ hoặc chưa đủ thì dùng enough. 2) Đặt enough đúng vị trí: Enough đứng sau tính từ hoặc trạng từ, nhưng đứng trước danh từ. 3) Phân biệt đếm được và không đếm được: Many, few, a few đi với đếm được. Much, little, a little đi với không đếm được.",
     "too hot (quá nóng) · warm enough (đủ ấm) | big enough · enough chairs | too many cars · too much traffic"
    ],
    [
     "Lỗi thường gặp",
     "Sai: There are too much people. Đúng: There are too many people. (People đếm được số nhiều nên dùng too many.) Sai: She is enough old. Đúng: She is old enough. (Enough đứng sau tính từ.) Sai: I am too much tired. Đúng: I am too tired. (Trước tính từ dùng too, không dùng too much.) Sai: I have few money, so I can buy a coffee. Đúng: I have a little money, so I can buy a coffee. (Few và little (không có a) mang nghĩa gần như không có; muốn nói có một ít thì dùng a little.)",
     "There are too many people. | She is old enough. | I am too tired. | I have a little money, so I can buy a coffee."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Quá mức dùng too, đủ dùng enough? · Enough đã đứng đúng vị trí chưa? · Danh từ đếm được dùng many/a few, không đếm được dùng much/a little?",
     ""
    ]
   ],
   "quiz": [
    [
     "There are ___ people on the bus. I can't move.",
     "too many",
     [
      "too much",
      "enough many"
     ],
     "People đếm được số nhiều nên dùng too many."
    ],
    [
     "This bag is ___ heavy for me.",
     "too",
     [
      "enough",
      "very much"
     ],
     "Too + tính từ."
    ],
    [
     "She is not tall ___ to reach the shelf.",
     "enough",
     [
      "too",
      "much"
     ],
     "Enough đứng sau tính từ."
    ],
    [
     "We don't have ___ money to buy a car.",
     "enough",
     [
      "too",
      "many"
     ],
     "Enough đứng trước danh từ."
    ],
    [
     "Which sentence is correct?",
     "He is old enough.",
     [
      "He is enough old.",
      "He enough is old."
     ],
     "Enough đứng sau tính từ."
    ],
    [
     "I have ___ free time, so I can't join the club. (gần như không có)",
     "little",
     [
      "a little",
      "a few"
     ],
     "Little (không có a) nghĩa là gần như không có."
    ]
   ],
   "gaps": [
    [
     "There is ___ much salt in this soup.",
     [
      "too"
     ],
     "",
     "Quá nhiều: too much."
    ],
    [
     "Is the music loud ___ for you? (đủ lớn)",
     [
      "enough"
     ],
     "",
     "Enough đứng sau tính từ."
    ],
    [
     "Please wait. I need ___ few more minutes.",
     [
      "a"
     ],
     "",
     "A few more minutes: thêm vài phút."
    ],
    [
     "There are ___ many cars in the city. The traffic is terrible.",
     [
      "too"
     ],
     "",
     "Quá nhiều: too many."
    ]
   ],
   "sentences": [
    [
     "The soup is too hot to eat.",
     "Món súp nóng quá nên không ăn được."
    ],
    [
     "There are too many cars in the city centre.",
     "Có quá nhiều xe ở trung tâm thành phố."
    ],
    [
     "He is tall enough to touch the ceiling.",
     "Anh ấy cao đủ để chạm trần nhà."
    ],
    [
     "We don't have enough chairs for everyone.",
     "Chúng tôi không có đủ ghế cho mọi người."
    ],
    [
     "I have a little time, so I can help you.",
     "Tôi có chút thời gian nên có thể giúp bạn."
    ]
   ]
  },
  {
   "id": "wh-a2-to-infinitive",
   "group": 8,
   "grade": 6,
   "icon": "📝",
   "title": "Want, need & would like + to-infinitive",
   "en": "Dạng thức động từ",
   "desc": "Một số động từ như want, need, hope, plan, decide, would like được theo sau bằng to + động từ nguyên mẫu.",
   "formula": [
    [
     "Công thức",
     "want/need/hope/plan/decide + to + V"
    ],
    [
     "Động từ + to V",
     "S + want/need/hope/plan/decide + to + V"
    ],
    [
     "Would like",
     "S + would like + to V / + danh từ"
    ],
    [
     "Mục đích",
     "S + V + to + V (để ...)"
    ],
    [
     "Muốn ai đó làm gì",
     "S + want + O + to + V"
    ]
   ],
   "grammar": [
    [
     "Nói điều muốn, cần, dự định",
     "Dùng want, need, hope, plan, decide + to V.",
     "I want to learn English. | She plans to visit Japan."
    ],
    [
     "Đề nghị và hỏi lịch sự",
     "Would like to + V lịch sự hơn want to; would like + danh từ để chọn món.",
     "I'd like to order a pizza. | Would you like some tea?"
    ],
    [
     "Nói mục đích",
     "To + V trả lời câu hỏi để làm gì.",
     "I went to the shop to buy milk."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra động từ đứng trước: Want, need, hope, plan, decide, would like đi với to V. Enjoy, like, love đi với V-ing. 2) Dùng to và động từ nguyên mẫu: Sau to là động từ nguyên mẫu, không chia, không thêm -ing. 3) Nói mục đích bằng to V: Không dùng for + động từ để nói mục đích.",
     "I want to go. · I enjoy swimming. | to buy (không nói to buying) | I went to the bank to get money."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I want learn English. Đúng: I want to learn English. (Sau want cần to + V.) Sai: She decided going abroad. Đúng: She decided to go abroad. (Sau decide dùng to V, không dùng V-ing.) Sai: I went to the shop for buy milk. Đúng: I went to the shop to buy milk. (Mục đích dùng to + V, không dùng for + V.) Sai: He wants that I help him. Đúng: He wants me to help him. (Want + tân ngữ + to V.)",
     "I want to learn English. | She decided to go abroad. | I went to the shop to buy milk. | He wants me to help him."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Động từ trước có đi với to V không (want, need, hope, plan, decide)? · Sau to là động từ nguyên mẫu chưa? · Mục đích đã dùng to + V chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I want ___ a new phone.",
     "to buy",
     [
      "buy",
      "buying"
     ],
     "Want + to + V."
    ],
    [
     "She decided ___ abroad.",
     "to study",
     [
      "study",
      "studying"
     ],
     "Decide + to V."
    ],
    [
     "I went to the shop ___ some milk.",
     "to buy",
     [
      "for buy",
      "buying"
     ],
     "Mục đích dùng to + V."
    ],
    [
     "Would you like ___ some tea?",
     "to have",
     [
      "have",
      "having"
     ],
     "Would like + to V."
    ],
    [
     "Which sentence is correct?",
     "He wants me to help him.",
     [
      "He wants that I help him.",
      "He wants me help him."
     ],
     "Want + O + to V."
    ],
    [
     "They need ___ early tomorrow.",
     "to leave",
     [
      "leave",
      "leaving"
     ],
     "Need + to V."
    ]
   ],
   "gaps": [
    [
     "We hope ___ (see) you soon.",
     [
      "to see"
     ],
     "",
     "Hope + to V."
    ],
    [
     "She plans ___ (visit) Japan next year.",
     [
      "to visit"
     ],
     "",
     "Plan + to V."
    ],
    [
     "I'd like ___ (order) a pizza, please.",
     [
      "to order"
     ],
     "",
     "Would like + to V."
    ],
    [
     "He called me ___ (ask) about the homework. (mục đích)",
     [
      "to ask"
     ],
     "",
     "Mục đích dùng to + V."
    ]
   ],
   "sentences": [
    [
     "I want to buy a new laptop.",
     "Tôi muốn mua một chiếc laptop mới."
    ],
    [
     "She decided to learn the guitar.",
     "Cô ấy quyết định học đàn guitar."
    ],
    [
     "We would like to book a table for four.",
     "Chúng tôi muốn đặt một bàn cho bốn người."
    ],
    [
     "He went to the library to borrow some books.",
     "Anh ấy đến thư viện để mượn vài cuốn sách."
    ],
    [
     "My teacher wants us to speak English in class.",
     "Giáo viên muốn chúng tôi nói tiếng Anh trong lớp."
    ]
   ]
  },
  {
   "id": "wh-a2-zero-first-conditional",
   "group": 8,
   "grade": 6,
   "icon": "🔀",
   "title": "Zero & first conditional",
   "en": "Câu điều kiện",
   "desc": "Câu điều kiện loại 0 nói về sự thật luôn đúng: If + hiện tại đơn, hiện tại đơn.",
   "formula": [
    [
     "Công thức",
     "If + present simple, present simple · If + present simple, will + V"
    ],
    [
     "Loại 0",
     "If + S + V (hiện tại), S + V (hiện tại)"
    ],
    [
     "Loại 1",
     "If + S + V (hiện tại), S + will + V"
    ],
    [
     "Phủ định trong if",
     "If + S + don't/doesn't + V"
    ],
    [
     "Đảo vế",
     "S + will + V + if + S + V (bỏ dấu phẩy)"
    ]
   ],
   "grammar": [
    [
     "Nói sự thật hoặc quy luật",
     "Điều luôn đúng mỗi khi điều kiện xảy ra.",
     "If you heat ice, it melts. | If I drink coffee, I can't sleep."
    ],
    [
     "Nói điều có thể xảy ra trong tương lai",
     "Điều kiện có khả năng xảy ra và kết quả ở tương lai.",
     "If it rains tomorrow, we will stay at home."
    ],
    [
     "Cảnh báo, hứa hẹn, đề nghị",
     "Câu điều kiện loại 1 hay dùng để cảnh báo hoặc hứa.",
     "If you don't hurry, you will miss the bus."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định loại điều kiện: Sự thật luôn đúng thì dùng loại 0. Điều có thể xảy ra ở tương lai thì dùng loại 1. 2) Chia mệnh đề if ở hiện tại đơn: Không dùng will trong mệnh đề if. 3) Chia mệnh đề kết quả: Loại 0: hiện tại đơn. Loại 1: will + V nguyên mẫu.",
     "Ice melts. · It will rain. | If it rains (không nói If it will rain) | you get purple · we will stay home"
    ],
    [
     "Lỗi thường gặp",
     "Sai: If it will rain, we will stay home. Đúng: If it rains, we will stay home. (Không dùng will trong mệnh đề if.) Sai: If you study hard, you pass the exam. Đúng: If you study hard, you will pass the exam. (Khi nói về kết quả có thể xảy ra ở tương lai, mệnh đề chính cần will + V.) Sai: If she comes, I will to call you. Đúng: If she comes, I will call you. (Sau will không có to.) Sai: We will go out if it won't rain. Đúng: We will go out if it doesn't rain. (Phủ định trong mệnh đề if dùng hiện tại đơn: doesn't.)",
     "If it rains, we will stay home. | If you study hard, you will pass the exam. | If she comes, I will call you. | We will go out if it doesn't rain."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Mệnh đề if đã ở hiện tại đơn chưa? · Kết quả là sự thật (hiện tại đơn) hay tương lai (will + V)? · Dấu phẩy đã đúng chưa khi đảo vế?",
     ""
    ]
   ],
   "quiz": [
    [
     "If it ___ tomorrow, we will stay at home.",
     "rains",
     [
      "will rain",
      "rain"
     ],
     "Mệnh đề if dùng hiện tại đơn: rains."
    ],
    [
     "If you heat ice, it ___.",
     "melts",
     [
      "will melting",
      "melt"
     ],
     "Sự thật luôn đúng: hiện tại đơn melts."
    ],
    [
     "If I see her, I ___ her the news.",
     "will tell",
     [
      "tell",
      "told"
     ],
     "Loại 1: kết quả dùng will + V."
    ],
    [
     "Which sentence is correct?",
     "If she comes, I will be happy.",
     [
      "If she will come, I will be happy.",
      "If she comes, I am will happy."
     ],
     "If + hiện tại đơn, will + V."
    ],
    [
     "We ___ late if we don't hurry.",
     "will be",
     [
      "are",
      "were"
     ],
     "Kết quả ở tương lai: will be."
    ],
    [
     "If you mix red and blue, you ___ purple.",
     "get",
     [
      "will getting",
      "got"
     ],
     "Sự thật khoa học: hiện tại đơn get."
    ]
   ],
   "gaps": [
    [
     "If he ___ (study) hard, he will pass the exam.",
     [
      "studies"
     ],
     "",
     "Mệnh đề if dùng hiện tại đơn với he: studies."
    ],
    [
     "If it ___ (not / rain), we will go to the beach. (dạng rút gọn hoặc đầy đủ)",
     [
      "doesn't rain",
      "does not rain"
     ],
     "",
     "Phủ định hiện tại đơn: doesn't rain."
    ],
    [
     "If you ___ (press) this button, the door opens.",
     [
      "press"
     ],
     "",
     "Loại 0: hiện tại đơn với you."
    ],
    [
     "She ___ (be) angry if you break her phone.",
     [
      "will be"
     ],
     "",
     "Loại 1: will + V nguyên mẫu."
    ]
   ],
   "sentences": [
    [
     "If you mix red and blue, you get purple.",
     "Nếu bạn trộn màu đỏ và xanh, bạn được màu tím."
    ],
    [
     "If it rains tomorrow, we will stay at home.",
     "Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà."
    ],
    [
     "If you don't hurry, you will miss the bus.",
     "Nếu bạn không nhanh lên, bạn sẽ lỡ xe buýt."
    ],
    [
     "I will help you if you ask me.",
     "Tôi sẽ giúp bạn nếu bạn nhờ."
    ],
    [
     "She will be angry if you break her phone.",
     "Cô ấy sẽ giận nếu bạn làm hỏng điện thoại của cô ấy."
    ]
   ]
  },
  {
   "id": "wh-a2-prepositions-of-movement",
   "group": 8,
   "grade": 6,
   "icon": "📍",
   "title": "Prepositions of movement",
   "en": "Giới từ",
   "desc": "Giới từ chuyển động cho biết hướng đi hoặc đường đi của người hoặc vật: to, from, into, out of, up, down, across, through, along, past, around, onto, off.",
   "formula": [
    [
     "Công thức",
     "động từ chuyển động + giới từ + nơi đến/đường đi"
    ],
    [
     "To và from",
     "go/come + to/from + nơi chốn"
    ],
    [
     "Into và out of",
     "into + không gian · out of + không gian"
    ],
    [
     "Up, down, onto, off",
     "up/down + dốc, cầu thang · onto/off + bề mặt"
    ],
    [
     "Across, through, along, past, around",
     "across (bề mặt) · through (xuyên qua) · along (dọc theo) · past (đi ngang qua) · around (vòng quanh)"
    ]
   ],
   "grammar": [
    [
     "Nói điểm đi và điểm đến",
     "To chỉ nơi đến, from chỉ nơi xuất phát.",
     "I walk to school. | She comes from Hue."
    ],
    [
     "Vào, ra, lên, xuống",
     "Into/out of cho không gian bao quanh; onto/off cho bề mặt; up/down cho hướng.",
     "He jumped into the pool. | She got out of the car."
    ],
    [
     "Đi qua, đi dọc, đi vòng",
     "Across, through, along, past, around mô tả đường đi.",
     "We walked across the bridge. | The train goes through a tunnel."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Hình dung đường đi: Nghĩ xem vật di chuyển vào trong, ra ngoài, lên, xuống hay băng qua. 2) Chọn giới từ phù hợp: Dựa vào hình dung để chọn giới từ chuyển động đúng. 3) Chú ý các cụm cố định: Go home, come home, arrive in/at không dùng to.",
     "vào phòng → into the room | xuyên qua đường hầm → through a tunnel | go home (không nói go to home)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I go to home after school. Đúng: I go home after school. (Home đứng sau go không cần to.) Sai: He walked to inside the house. Đúng: He walked into the house. (Dùng into để nói vào bên trong.) Sai: The bus goes pass my house. Đúng: The bus goes past my house. (Giới từ là past; pass là động từ.) Sai: She fell off from the chair. Đúng: She fell off the chair. (Off đã mang nghĩa rời khỏi nên không thêm from.)",
     "I go home after school. | He walked into the house. | The bus goes past my house. | She fell off the chair."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Vật chuyển động vào, ra, lên, xuống hay băng qua? · Đã chọn đúng giới từ chuyển động chưa? · Có cụm cố định như go home không?",
     ""
    ]
   ],
   "quiz": [
    [
     "She walked ___ the room and sat down.",
     "into",
     [
      "in to",
      "at"
     ],
     "Into: đi vào bên trong phòng."
    ],
    [
     "He took the book ___ the shelf.",
     "off",
     [
      "into",
      "across"
     ],
     "Off: lấy xuống khỏi bề mặt."
    ],
    [
     "We walked ___ the bridge to the other side.",
     "across",
     [
      "along",
      "between"
     ],
     "Across: từ bên này sang bên kia."
    ],
    [
     "The train goes ___ a tunnel.",
     "through",
     [
      "across",
      "past"
     ],
     "Through: xuyên qua đường hầm."
    ],
    [
     "Which sentence is correct?",
     "I go home.",
     [
      "I go to home.",
      "I go at home."
     ],
     "Go home không cần giới từ."
    ],
    [
     "The bus goes ___ my school every day. (đi ngang qua)",
     "past",
     [
      "through",
      "into"
     ],
     "Past: đi ngang qua mà không dừng."
    ]
   ],
   "gaps": [
    [
     "She jumped ___ the pool. (nhảy xuống)",
     [
      "into"
     ],
     "",
     "Into: vào trong nước."
    ],
    [
     "The cat climbed ___ the tree. (leo lên)",
     [
      "up"
     ],
     "",
     "Up: hướng lên."
    ],
    [
     "He got out ___ the car and drove away.",
     [
      "of"
     ],
     "",
     "Get out of: ra khỏi xe."
    ],
    [
     "Walk ___ this street for two hundred metres. (dọc theo)",
     [
      "along"
     ],
     "",
     "Along: đi dọc theo."
    ]
   ],
   "sentences": [
    [
     "The children ran into the garden and played.",
     "Bọn trẻ chạy vào vườn và chơi đùa."
    ],
    [
     "He took the book off the shelf.",
     "Anh ấy lấy cuốn sách xuống khỏi kệ."
    ],
    [
     "We walked across the bridge to the other side.",
     "Chúng tôi đi bộ qua cầu sang bờ bên kia."
    ],
    [
     "The bus goes past my school every day.",
     "Xe buýt đi ngang qua trường tôi mỗi ngày."
    ],
    [
     "The train goes through a long tunnel.",
     "Tàu chạy xuyên qua một đường hầm dài."
    ]
   ]
  },
  {
   "id": "wh-a2-linking-words",
   "group": 8,
   "grade": 6,
   "icon": "🔗",
   "title": "Linking words: and, but, so, because",
   "en": "Liên từ",
   "desc": "Từ nối giúp ghép các ý thành câu dài và mạch lạc. And thêm ý, but đối lập, or nêu lựa chọn, so chỉ kết quả, because chỉ lý do.",
   "formula": [
    [
     "Công thức",
     "mệnh đề 1 + and/but/so/because + mệnh đề 2"
    ],
    [
     "And, but, or",
     "clause + and/but/or + clause"
    ],
    [
     "So",
     "nguyên nhân, so + kết quả"
    ],
    [
     "Because",
     "kết quả + because + lý do"
    ],
    [
     "Thời gian",
     "when/while/before/after + clause"
    ]
   ],
   "grammar": [
    [
     "Thêm ý, đối lập, lựa chọn",
     "And thêm ý, but đối lập, or lựa chọn.",
     "I like tea and coffee. | She is rich, but she isn't happy. | Do you want tea or coffee?"
    ],
    [
     "Nói lý do và kết quả",
     "Because + lý do; so + kết quả.",
     "I stayed home because it was raining. | It was raining, so I stayed home."
    ],
    [
     "Nối theo thời gian",
     "When, while, before, after chỉ trình tự thời gian.",
     "Wash your hands before you eat. | I'll call you when I arrive."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định quan hệ giữa hai ý: Thêm, đối lập, lựa chọn, lý do, kết quả hay thời gian? 2) Chọn từ nối phù hợp: Because đứng trước lý do. So đứng trước kết quả. 3) Dùng dấu phẩy đúng: Thường đặt dấu phẩy trước but và so khi nối hai mệnh đề đầy đủ.",
     "ý 2 là kết quả của ý 1 → so | I was ill, so I stayed home. | I like him, but he doesn't like me."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Because I was tired, so I went to bed. Đúng: Because I was tired, I went to bed. (Không dùng because và so cùng lúc cho một cặp ý.) Sai: He stayed home, so he was ill. Đúng: He was ill, so he stayed home. (Đừng đảo lý do và kết quả: bị ốm là lý do, ở nhà là kết quả.) Sai: I will call you when I will arrive. Đúng: I will call you when I arrive. (Sau when chỉ thời gian tương lai dùng hiện tại đơn.) Sai: She is clever and she is not happy. Đúng: She is clever, but she is not happy. (Hai ý đối lập nối bằng but.)",
     "Because I was tired, I went to bed. | He was ill, so he stayed home. | I will call you when I arrive. | She is clever, but she is not happy."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Quan hệ giữa hai ý là gì (thêm, đối lập, lý do, kết quả)? · Đã chọn đúng and, but, or, so, because chưa? · Có dùng hai từ nối thừa cho một cặp ý không?",
     ""
    ]
   ],
   "quiz": [
    [
     "I was hungry, ___ I made a sandwich.",
     "so",
     [
      "but",
      "because"
     ],
     "Làm bánh là kết quả của đói nên dùng so."
    ],
    [
     "I stayed home ___ it was raining.",
     "because",
     [
      "so",
      "but"
     ],
     "Mưa là lý do nên dùng because."
    ],
    [
     "He is rich, ___ he isn't happy.",
     "but",
     [
      "so",
      "and"
     ],
     "Hai ý đối lập nên dùng but."
    ],
    [
     "Do you want tea ___ coffee?",
     "or",
     [
      "and",
      "so"
     ],
     "Lựa chọn dùng or."
    ],
    [
     "Which sentence is correct?",
     "Because I was ill, I stayed home.",
     [
      "Because I was ill, so I stayed home.",
      "So I was ill, I stayed home."
     ],
     "Không dùng because và so cùng lúc."
    ],
    [
     "I'll call you ___ I arrive.",
     "when",
     [
      "will",
      "because"
     ],
     "When nối thời gian: when I arrive."
    ]
   ],
   "gaps": [
    [
     "She plays tennis every weekend ___ she loves it. (lý do)",
     [
      "because"
     ],
     "",
     "Because + lý do."
    ],
    [
     "He studied hard, ___ he passed the exam. (kết quả)",
     [
      "so"
     ],
     "",
     "So + kết quả."
    ],
    [
     "I like pizza, ___ I don't like cheese. (đối lập)",
     [
      "but"
     ],
     "",
     "But nối hai ý đối lập."
    ],
    [
     "Please wash your hands ___ you eat. (trước khi)",
     [
      "before"
     ],
     "",
     "Before: trước khi."
    ]
   ],
   "sentences": [
    [
     "I was tired, so I went to bed early.",
     "Tôi mệt nên đi ngủ sớm."
    ],
    [
     "She went to bed early because she was tired.",
     "Cô ấy đi ngủ sớm vì mệt."
    ],
    [
     "He studied hard, but he failed the test.",
     "Cậu ấy học chăm chỉ nhưng vẫn trượt bài kiểm tra."
    ],
    [
     "Would you like to eat here or take it away?",
     "Bạn muốn ăn tại đây hay mang đi?"
    ],
    [
     "Please wash your hands before you eat.",
     "Hãy rửa tay trước khi ăn."
    ]
   ]
  },
  {
   "id": "wh-b1-present-perfect-vs-past-simple",
   "group": 9,
   "grade": 8,
   "icon": "⏱️",
   "title": "Present perfect vs past simple",
   "en": "Thì",
   "desc": "Present perfect (have/has + V3) nói về kinh nghiệm, kết quả còn liên quan đến hiện tại, hoặc việc kéo dài đến bây giờ, và không nêu mốc thời gian đã qua.",
   "formula": [
    [
     "Công thức",
     "have/has + V3 (không mốc quá khứ) · V2/V-ed (có mốc quá khứ)"
    ],
    [
     "Present perfect khẳng định",
     "S + have/has + V3"
    ],
    [
     "Present perfect phủ định và nghi vấn",
     "S + haven't/hasn't + V3 · Have/Has + S + V3?"
    ],
    [
     "Past simple có mốc thời gian",
     "S + V2/V-ed + mốc quá khứ"
    ],
    [
     "Câu hỏi: Have you ever → When did you",
     "Have you ever + V3? → When/Where did you + V?"
    ]
   ],
   "grammar": [
    [
     "Nói kinh nghiệm sống",
     "Không quan tâm lúc nào, chỉ quan tâm đã từng hay chưa từng. Hay đi với ever, never, before.",
     "I have been to Japan twice. | Have you ever eaten snake meat?"
    ],
    [
     "Nói việc kéo dài đến hiện tại",
     "Dùng for (khoảng thời gian) và since (mốc bắt đầu).",
     "She has lived here for ten years. | We have known each other since 2015."
    ],
    [
     "Kể việc đã xong tại thời điểm xác định",
     "Có mốc rõ ràng thì chuyển sang past simple.",
     "I met him last week. | They moved to Hue in 2020."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm mốc thời gian: Có yesterday, last year, in 2019, ago, when I was ... thì dùng past simple. 2) Không có mốc, nói về kinh nghiệm hoặc kết quả: Có ever, never, already, yet, just, for, since thì thường dùng present perfect. 3) Khi chuyển sang chi tiết thì đổi sang past simple: Mở đầu bằng present perfect, hỏi thêm thời gian, địa điểm, cách thức bằng past simple.",
     "two days ago → saw | already, never → have seen | I've visited Hue. I went there in May."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I have seen him yesterday. Đúng: I saw him yesterday. (Yesterday là mốc quá khứ xác định nên không dùng present perfect.) Sai: She lived here since 2010. Đúng: She has lived here since 2010. (Since + mốc, việc còn tiếp diễn đến bây giờ nên dùng present perfect.) Sai: Did you ever eat durian? Đúng: Have you ever eaten durian? (Hỏi về kinh nghiệm cả đời dùng Have you ever + V3.) Sai: I have saw that film. Đúng: I have seen that film. (Sau have/has phải dùng V3 (seen), không dùng V2 (saw).)",
     "I saw him yesterday. | She has lived here since 2010. | Have you ever eaten durian? | I have seen that film."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu có mốc quá khứ xác định (yesterday, ago, last, in 2019) không? · Đang nói kinh nghiệm, kết quả hiện tại, hay việc kéo dài đến bây giờ? · Sau have/has đã dùng V3 chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I ___ to Japan twice, but I haven't been to China.",
     "have been",
     [
      "went",
      "was"
     ],
     "Kinh nghiệm sống, không nêu thời điểm nên dùng present perfect."
    ],
    [
     "She ___ the company in 2019.",
     "joined",
     [
      "has joined",
      "is joining"
     ],
     "Có mốc in 2019 nên dùng past simple."
    ],
    [
     "Have you ever ___ sushi?",
     "eaten",
     [
      "eat",
      "ate"
     ],
     "Have you ever + V3: eaten."
    ],
    [
     "She ___ her arm last week.",
     "broke",
     [
      "has broken",
      "breaks"
     ],
     "Last week là mốc xác định nên dùng past simple."
    ],
    [
     "Which sentence is correct?",
     "I saw him yesterday.",
     [
      "I have seen him yesterday.",
      "I have saw him yesterday."
     ],
     "Yesterday cần past simple."
    ],
    [
     "Tom ___ in London for five years, and he still lives there.",
     "has lived",
     [
      "lived",
      "was living"
     ],
     "Việc còn đúng đến hiện tại nên dùng present perfect."
    ]
   ],
   "gaps": [
    [
     "I ___ (not / finish) my report yet.",
     [
      "haven't finished",
      "have not finished"
     ],
     "",
     "Yet trong câu phủ định đi với haven't + V3."
    ],
    [
     "What time ___ (you / get) home last night?",
     [
      "did you get"
     ],
     "",
     "Last night là mốc xác định nên dùng past simple: did you get."
    ],
    [
     "We ___ (visit) Paris in 2018.",
     [
      "visited"
     ],
     "",
     "Có mốc in 2018 nên dùng past simple: visited."
    ],
    [
     "She has worked here ___ 2015.",
     [
      "since"
     ],
     "",
     "2015 là mốc bắt đầu nên dùng since."
    ]
   ],
   "sentences": [
    [
     "I have been to Japan twice.",
     "Tôi đã đến Nhật hai lần."
    ],
    [
     "I went to Japan in 2022.",
     "Tôi đã đến Nhật năm 2022."
    ],
    [
     "She has worked here since 2015.",
     "Cô ấy làm ở đây từ năm 2015."
    ],
    [
     "He hasn't called me yet.",
     "Anh ấy vẫn chưa gọi cho tôi."
    ],
    [
     "We lost our keys yesterday.",
     "Hôm qua chúng tôi làm mất chìa khóa."
    ]
   ]
  },
  {
   "id": "wh-b1-present-perfect-continuous",
   "group": 9,
   "grade": 8,
   "icon": "⏱️",
   "title": "Present perfect continuous",
   "en": "Thì",
   "desc": "Present perfect continuous (have/has been + V-ing) nhấn mạnh quá trình kéo dài đến hiện tại, hoặc vừa mới kết thúc và còn thấy dấu vết.",
   "formula": [
    [
     "Công thức",
     "S + have/has + been + V-ing"
    ],
    [
     "Khẳng định",
     "S + have/has been + V-ing"
    ],
    [
     "Phủ định",
     "S + haven't/hasn't been + V-ing"
    ],
    [
     "Câu hỏi",
     "Have/Has + S + been + V-ing?"
    ],
    [
     "How long",
     "How long + have/has + S + been + V-ing?"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh việc đã kéo dài",
     "Bắt đầu trong quá khứ và còn tiếp diễn đến bây giờ.",
     "I have been learning English for two years. | It has been raining since morning."
    ],
    [
     "Giải thích tình trạng hiện tại",
     "Việc vừa dừng lại nhưng kết quả còn thấy rõ.",
     "Her eyes are red. She has been crying. | You're covered in mud. Have you been gardening?"
    ],
    [
     "Hỏi và nói về độ dài",
     "How long, for, since cho biết thời gian kéo dài.",
     "How long have you been waiting? | We have been living here for ten years."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra động từ có chỉ trạng thái không: Know, like, love, want, be, have (sở hữu) dùng present perfect thường. 2) Chia have/has theo chủ ngữ: I, you, we, they đi với have. He, she, it đi với has. 3) Thêm been và V-ing: Sau have/has là been, sau been là động từ thêm -ing.",
     "I've known him for years. (không nói I've been knowing) | She has been working. | has been + read → has been reading"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I have been knowing him for years. Đúng: I have known him for years. (Know là động từ trạng thái, không dùng dạng tiếp diễn.) Sai: She has been work here since May. Đúng: She has been working here since May. (Sau been phải dùng V-ing.) Sai: He have been waiting for an hour. Đúng: He has been waiting for an hour. (He đi với has.) Sai: How long do you learn English? Đúng: How long have you been learning English? (Hỏi về khoảng thời gian kéo dài đến bây giờ dùng present perfect continuous.)",
     "I have known him for years. | She has been working here since May. | He has been waiting for an hour. | How long have you been learning English?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Việc này kéo dài hay còn để lại kết quả đến hiện tại không? · Động từ có phải động từ trạng thái (know, like, be) không? · Đã dùng have/has been + V-ing chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Which sentence is correct?",
     "How long have you been learning English?",
     [
      "How long do you learn English?",
      "How long you have learned English?"
     ],
     "Hỏi thời gian kéo dài đến bây giờ: How long have you been + V-ing?"
    ],
    [
     "Her eyes are red. She ___.",
     "has been crying",
     [
      "is cried",
      "cries"
     ],
     "Việc vừa dừng lại và còn thấy kết quả: has been crying."
    ],
    [
     "I ___ this book for two weeks, and I still haven't finished it.",
     "have been reading",
     [
      "read",
      "am read"
     ],
     "Quá trình kéo dài hai tuần: have been reading."
    ],
    [
     "I ___ him since I was a child.",
     "have known",
     [
      "have been knowing",
      "know"
     ],
     "Know là động từ trạng thái, dùng present perfect thường."
    ],
    [
     "Which sentence is correct?",
     "She has liked jazz for years.",
     [
      "She has been liking jazz for years.",
      "She is liking jazz for years."
     ],
     "Like là động từ trạng thái nên không dùng dạng tiếp diễn."
    ],
    [
     "It ___ since morning. The streets are wet.",
     "has been raining",
     [
      "rains",
      "was raining"
     ],
     "Since morning và hiện tại còn thấy dấu vết: has been raining."
    ]
   ],
   "gaps": [
    [
     "They ___ (learn) English for three years.",
     [
      "have been learning"
     ],
     "",
     "They + have been + V-ing."
    ],
    [
     "He ___ (not / sleep) well lately.",
     [
      "hasn't been sleeping",
      "has not been sleeping"
     ],
     "",
     "Phủ định: hasn't been + V-ing."
    ],
    [
     "How long ___ it been snowing?",
     [
      "has"
     ],
     "",
     "It đi với has: has it been snowing."
    ],
    [
     "I've been waiting here ___ nine o'clock.",
     [
      "since"
     ],
     "",
     "Nine o'clock là mốc bắt đầu nên dùng since."
    ]
   ],
   "sentences": [
    [
     "I have been learning English for three years.",
     "Tôi đã học tiếng Anh được ba năm."
    ],
    [
     "Why are you so tired? I've been working since six.",
     "Sao bạn mệt vậy? Tôi làm việc từ sáu giờ rồi."
    ],
    [
     "It has been raining all day.",
     "Trời mưa suốt cả ngày."
    ],
    [
     "How long have you been waiting?",
     "Bạn đã đợi bao lâu rồi?"
    ],
    [
     "I have known her since I was a child.",
     "Tôi biết cô ấy từ hồi nhỏ."
    ]
   ]
  },
  {
   "id": "wh-b1-past-perfect",
   "group": 9,
   "grade": 8,
   "icon": "⏱️",
   "title": "Past perfect",
   "en": "Thì",
   "desc": "Past perfect (had + V3) diễn tả việc xảy ra trước một thời điểm hoặc một việc khác trong quá khứ. Việc xảy ra sau dùng past simple.",
   "formula": [
    [
     "Công thức",
     "S + had + V3"
    ],
    [
     "Khẳng định",
     "S + had + V3"
    ],
    [
     "Phủ định",
     "S + hadn't + V3"
    ],
    [
     "Câu hỏi",
     "Had + S + V3?"
    ],
    [
     "By the time / after / before",
     "By the time + past simple, S + had + V3"
    ]
   ],
   "grammar": [
    [
     "Nói việc xảy ra trước một việc khác",
     "Việc đến trước dùng past perfect, việc đến sau dùng past simple.",
     "When I arrived, the film had started. | She had left before I called."
    ],
    [
     "Giải thích nguyên nhân trong quá khứ",
     "Nêu lý do đã xảy ra từ trước.",
     "I was hungry because I hadn't eaten all day. | He was late because he had missed the bus."
    ],
    [
     "Nói kinh nghiệm trước một mốc quá khứ",
     "Dùng với never, ever, before.",
     "I had never seen snow before that trip. | Had you ever flown before you moved abroad?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xếp thứ tự hai việc: Xác định việc nào xảy ra trước, việc nào sau. 2) Việc trước dùng had + V3: Việc đến sau giữ ở past simple. 3) Ghép bằng liên từ: Dùng when, before, after, by the time để nối hai việc.",
     "film bắt đầu → tôi đến | the film had started · I arrived | When I arrived, the film had started."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I had saw the film before. Đúng: I had seen the film before. (Sau had phải dùng V3 (seen).) Sai: When I arrived, the film started. Đúng: When I arrived, the film had started. (Phim bắt đầu trước khi tôi đến nên cần past perfect.) Sai: She said she has finished. Đúng: She said she had finished. (Trong ngữ cảnh quá khứ thì dùng had + V3, không dùng has.) Sai: I had finished my homework, then I went out. (cả hai việc nối tiếp liền nhau) Đúng: I finished my homework, then I went out. (Việc nối tiếp theo thứ tự thời gian dùng past simple cho cả hai.)",
     "I had seen the film before. | When I arrived, the film had started. | She said she had finished. | I finished my homework, then I went out."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Có hai việc trong quá khứ và việc nào xảy ra trước? · Việc trước đã dùng had + V3 chưa? · Việc sau đã giữ ở past simple chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "When I arrived, the film ___.",
     "had already started",
     [
      "already started",
      "has already started"
     ],
     "Phim bắt đầu trước khi tôi đến: had already started."
    ],
    [
     "After he ___ dinner, he watched TV.",
     "had finished",
     [
      "has finished",
      "finishing"
     ],
     "Việc ăn xong xảy ra trước: had finished."
    ],
    [
     "I ___ him before, so I didn't recognise him.",
     "had never met",
     [
      "have never met",
      "never met"
     ],
     "Chưa từng gặp trước thời điểm đó: had never met."
    ],
    [
     "By the time we got to the station, the train ___.",
     "had left",
     [
      "left",
      "has left"
     ],
     "By the time + past simple, mệnh đề chính dùng had + V3."
    ],
    [
     "Which sentence is correct?",
     "I had seen the film before.",
     [
      "I had saw the film before.",
      "I had see the film before."
     ],
     "Had + V3: had seen."
    ],
    [
     "'When she called, I had gone out.' Which happened first?",
     "I went out first.",
     [
      "She called first.",
      "They happened together."
     ],
     "Had gone out diễn tả việc đi ra ngoài xảy ra trước."
    ]
   ],
   "gaps": [
    [
     "He ___ (already / leave) when I arrived.",
     [
      "had already left",
      "had left already"
     ],
     "",
     "Việc rời đi xảy ra trước nên dùng had already left."
    ],
    [
     "They ___ (not / eat) anything before the party, so they were hungry.",
     [
      "hadn't eaten",
      "had not eaten"
     ],
     "",
     "Phủ định past perfect: hadn't + V3."
    ],
    [
     "___ you studied English before you moved to London?",
     [
      "Had"
     ],
     "",
     "Câu hỏi past perfect bắt đầu bằng Had."
    ],
    [
     "I couldn't get in because I ___ (forget) my key.",
     [
      "had forgotten"
     ],
     "",
     "Quên chìa khóa xảy ra trước khi không vào được: had forgotten."
    ]
   ],
   "sentences": [
    [
     "When I arrived, the film had already started.",
     "Khi tôi đến, phim đã bắt đầu rồi."
    ],
    [
     "She was tired because she hadn't slept well.",
     "Cô ấy mệt vì đã không ngủ ngon."
    ],
    [
     "By the time we got to the station, the train had left.",
     "Khi chúng tôi đến ga thì tàu đã chạy rồi."
    ],
    [
     "I had never seen the sea before that day.",
     "Trước hôm đó tôi chưa từng nhìn thấy biển."
    ],
    [
     "After he had finished dinner, he watched TV.",
     "Sau khi ăn tối xong, anh ấy xem tivi."
    ]
   ]
  },
  {
   "id": "wh-b1-used-to",
   "group": 9,
   "grade": 8,
   "icon": "⏱️",
   "title": "Used to, would & get used to",
   "en": "Thì",
   "desc": "Used to + V nói về thói quen hoặc trạng thái trong quá khứ mà bây giờ không còn nữa. Would + V chỉ dùng cho thói quen lặp lại, không dùng cho trạng thái.",
   "formula": [
    [
     "Công thức",
     "used to + V · would + V · be/get used to + V-ing"
    ],
    [
     "Used to khẳng định",
     "S + used to + V"
    ],
    [
     "Used to phủ định và nghi vấn",
     "S + didn't use to + V · Did + S + use to + V?"
    ],
    [
     "Would cho thói quen",
     "S + would + V (kèm mốc thời gian quá khứ)"
    ],
    [
     "Be/get used to",
     "be/get used to + V-ing hoặc danh từ"
    ]
   ],
   "grammar": [
    [
     "Nói thói quen cũ",
     "Việc lặp đi lặp lại trong quá khứ, bây giờ không còn.",
     "I used to play football every weekend. | We would visit my grandparents every summer."
    ],
    [
     "Nói trạng thái cũ",
     "Chỉ dùng used to, không dùng would với trạng thái.",
     "She used to have long hair. | There used to be a cinema here."
    ],
    [
     "Nói đã quen với điều gì",
     "Be used to chỉ trạng thái đã quen, get used to chỉ quá trình trở nên quen.",
     "I'm used to getting up early. | It took me a month to get used to the noise."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý nghĩa: Thói quen cũ không còn hay đã quen với điều gì đó? 2) Chọn cấu trúc: Thói quen cũ thì dùng used to + V, hoặc would + V. Đã quen thì dùng be/get used to + V-ing. 3) Chú ý phủ định và câu hỏi: Dùng didn't/did rồi bỏ d trong used.",
     "Tôi từng chơi bóng → used to play. Tôi đã quen dậy sớm → am used to getting up. | used to play · am used to playing | He didn't use to like fish."
    ],
    [
     "Lỗi thường gặp",
     "Sai: He didn't used to smoke. Đúng: He didn't use to smoke. (Sau didn't, used trở về dạng use.) Sai: She would have long hair when she was young. Đúng: She used to have long hair when she was young. (Have ở đây là trạng thái nên không dùng would.) Sai: I am used to get up early. Đúng: I am used to getting up early. (Be used to + V-ing vì to là giới từ.) Sai: I used to going to school by bike. Đúng: I used to go to school by bike. (Used to + V nguyên mẫu khi nói thói quen cũ.)",
     "He didn't use to smoke. | She used to have long hair when she was young. | I am used to getting up early. | I used to go to school by bike."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đang nói thói quen cũ hay đã quen với việc gì? · Nếu là trạng thái cũ thì đã dùng used to chưa, không dùng would? · Sau be/get used to đã dùng V-ing chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I ___ play football every weekend, but now I don't.",
     "used to",
     [
      "use to",
      "am used to"
     ],
     "Thói quen cũ: used to + V."
    ],
    [
     "Did you ___ live in Da Nang?",
     "use to",
     [
      "used to",
      "would"
     ],
     "Sau Did, used trở về use: use to."
    ],
    [
     "She ___ short hair when she was young.",
     "used to have",
     [
      "would have",
      "is used to having"
     ],
     "Trạng thái cũ dùng used to, không dùng would."
    ],
    [
     "She is used to ___ in a big city.",
     "living",
     [
      "live",
      "lived"
     ],
     "Be used to + V-ing."
    ],
    [
     "Which sentence is correct?",
     "He didn't use to smoke.",
     [
      "He didn't used to smoke.",
      "He not used to smoke."
     ],
     "Phủ định: didn't use to."
    ],
    [
     "When I was a child, we ___ go to the beach every summer.",
     "would",
     [
      "are used to",
      "get used to"
     ],
     "Thói quen lặp lại trong quá khứ có thể dùng would + V."
    ]
   ],
   "gaps": [
    [
     "We ___ to live in a small village.",
     [
      "used"
     ],
     "",
     "Used to + V: thói quen cũ."
    ],
    [
     "Did she ___ to work at a bank?",
     [
      "use"
     ],
     "",
     "Sau Did dùng use to."
    ],
    [
     "It took me a month to get used to ___ (drive) on the left.",
     [
      "driving"
     ],
     "",
     "Get used to + V-ing."
    ],
    [
     "When I was a boy, I ___ climb the tree behind our house every day. (would hoặc used to)",
     [
      "would",
      "used to"
     ],
     "",
     "Thói quen lặp lại trong quá khứ: would hoặc used to."
    ]
   ],
   "sentences": [
    [
     "I used to play football every weekend.",
     "Tôi từng chơi bóng đá mỗi cuối tuần."
    ],
    [
     "She used to have long hair.",
     "Trước đây cô ấy để tóc dài."
    ],
    [
     "When I was a child, we would go to the beach every summer.",
     "Hồi nhỏ, mùa hè nào chúng tôi cũng ra biển."
    ],
    [
     "I am not used to getting up so early.",
     "Tôi chưa quen dậy sớm như vậy."
    ],
    [
     "It took me a month to get used to driving on the left.",
     "Tôi mất một tháng để quen lái xe bên trái."
    ]
   ]
  },
  {
   "id": "wh-b1-second-conditional",
   "group": 9,
   "grade": 8,
   "icon": "🔀",
   "title": "Second conditional",
   "en": "Câu điều kiện",
   "desc": "Câu điều kiện loại 2 nói về điều không có thật hoặc khó xảy ra ở hiện tại và tương lai, và về kết quả tưởng tượng của nó.",
   "formula": [
    [
     "Công thức",
     "If + past simple, S + would + V"
    ],
    [
     "Khẳng định",
     "If + S + V2, S + would + V"
    ],
    [
     "Phủ định",
     "If + S + didn't + V, S + wouldn't + V"
    ],
    [
     "Câu hỏi",
     "What/Where ... would + S + V + if + S + V2?"
    ],
    [
     "Với be",
     "If + I/he/she/it + were"
    ]
   ],
   "grammar": [
    [
     "Tưởng tượng điều không có thật",
     "Nói về tình huống trái với thực tế hiện tại.",
     "If I were rich, I would travel the world. | If she lived here, we would see her more often."
    ],
    [
     "Nói điều khó xảy ra",
     "Điều kiện có khả năng thấp ở tương lai.",
     "What would you do if you won a million dollars?"
    ],
    [
     "Đưa lời khuyên",
     "If I were you là mẫu câu khuyên rất thông dụng.",
     "If I were you, I would talk to her. | I wouldn't do that if I were you."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra tình huống có thật không: Nếu trái với thực tế hiện tại hoặc khó xảy ra thì dùng loại 2. 2) Chia mệnh đề if ở past simple: Không dùng would trong mệnh đề if. Dùng were với be. 3) Chia mệnh đề kết quả: Would (hoặc could, might) + động từ nguyên mẫu.",
     "Tôi không giàu → If I were rich | If I had time (không nói If I would have time) | I would learn Spanish."
    ],
    [
     "Lỗi thường gặp",
     "Sai: If I would know, I would tell you. Đúng: If I knew, I would tell you. (Không dùng would trong mệnh đề if.) Sai: If I am you, I would go. Đúng: If I were you, I would go. (Tình huống không có thật nên dùng were.) Sai: If he had a car, he will drive to work. Đúng: If he had a car, he would drive to work. (Loại 2 dùng would, không dùng will.) Sai: If I would be rich, I would buy a boat. Đúng: If I were rich, I would buy a boat. (Mệnh đề if dùng past simple (were), không dùng would be.)",
     "If I knew, I would tell you. | If I were you, I would go. | If he had a car, he would drive to work. | If I were rich, I would buy a boat."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Tình huống có thật không hay chỉ là tưởng tượng? · Mệnh đề if đã ở past simple (were với be) chưa? · Mệnh đề kết quả đã dùng would + V chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "If I ___ rich, I would travel the world.",
     "were",
     [
      "am",
      "will be"
     ],
     "Tình huống không có thật: If I were."
    ],
    [
     "If she had more time, she ___ a language course.",
     "would take",
     [
      "will take",
      "takes"
     ],
     "Loại 2: would + V."
    ],
    [
     "What would you do if you ___ a million dollars?",
     "won",
     [
      "win",
      "will win"
     ],
     "Mệnh đề if dùng past simple: won."
    ],
    [
     "If I ___ you, I would talk to her.",
     "were",
     [
      "am",
      "was"
     ],
     "If I were you là mẫu câu khuyên cố định."
    ],
    [
     "Which sentence is correct?",
     "If I knew, I would tell you.",
     [
      "If I would know, I would tell you.",
      "If I know, I would tell you."
     ],
     "If + past simple, would + V."
    ],
    [
     "I'm not rich, so I can't buy that house. = If I ___ rich, I could buy that house.",
     "were",
     [
      "am",
      "had been"
     ],
     "Tình huống không có thật ở hiện tại: were."
    ]
   ],
   "gaps": [
    [
     "If he ___ (have) a car, he would drive to work.",
     [
      "had"
     ],
     "",
     "Mệnh đề if dùng past simple: had."
    ],
    [
     "I ___ (not / be) afraid if I were you.",
     [
      "wouldn't be",
      "would not be"
     ],
     "",
     "Phủ định mệnh đề kết quả: wouldn't be."
    ],
    [
     "If we lived near the sea, we ___ swim every day. (would hoặc could)",
     [
      "would",
      "could"
     ],
     "",
     "Mệnh đề kết quả dùng would hoặc could + V."
    ],
    [
     "___ you tell me if you knew the answer?",
     [
      "Would"
     ],
     "",
     "Câu hỏi loại 2 bắt đầu bằng Would."
    ]
   ],
   "sentences": [
    [
     "If I were rich, I would travel the world.",
     "Nếu tôi giàu, tôi sẽ đi du lịch khắp thế giới."
    ],
    [
     "If she had more time, she would take a language course.",
     "Nếu có nhiều thời gian hơn, cô ấy sẽ học một khóa ngoại ngữ."
    ],
    [
     "What would you do if you won the lottery?",
     "Bạn sẽ làm gì nếu trúng số?"
    ],
    [
     "If I were you, I would apologise.",
     "Nếu tôi là bạn, tôi sẽ xin lỗi."
    ],
    [
     "I wouldn't be afraid if I knew the way.",
     "Tôi sẽ không sợ nếu tôi biết đường."
    ]
   ]
  },
  {
   "id": "wh-b1-passive-voice",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Passive voice",
   "en": "Thể bị động",
   "desc": "Câu bị động dùng khi người hoặc vật chịu tác động là trọng tâm, hoặc khi không biết hay không cần nói ai làm. Cấu trúc: be + V3, be chia theo thì của câu.",
   "formula": [
    [
     "Công thức",
     "S + be + V3 (+ by + tác nhân)"
    ],
    [
     "Present simple bị động",
     "am/is/are + V3"
    ],
    [
     "Past simple bị động",
     "was/were + V3"
    ],
    [
     "Future bị động",
     "will be + V3"
    ],
    [
     "Present perfect bị động",
     "has/have been + V3"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh đối tượng chịu tác động",
     "Người nói quan tâm đến kết quả hơn người làm.",
     "The window was broken. | English is spoken in many countries."
    ],
    [
     "Khi không biết hoặc không cần nêu người làm",
     "Thường gặp trong thông báo, tin tức, hướng dẫn.",
     "My bag was stolen. | Rice is grown in the south."
    ],
    [
     "Nói ở nhiều thì",
     "Chia be theo thì rồi giữ V3.",
     "The report will be finished tomorrow. | The work hasn't been done yet."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm tân ngữ của câu chủ động: Tân ngữ trở thành chủ ngữ của câu bị động. 2) Chia be theo thì của câu gốc: Giữ nguyên thì, chỉ chuyển động từ chính sang V3. 3) Thêm by nếu cần: Chỉ thêm by + tác nhân khi thông tin ấy quan trọng.",
     "Someone stole my bag. → My bag ... | stole (past) → was stolen | The Mona Lisa was painted by Leonardo."
    ],
    [
     "Lỗi thường gặp",
     "Sai: The window was broke by the boy. Đúng: The window was broken by the boy. (Sau be dùng V3 (broken), không dùng V2.) Sai: Rice grows by farmers in this area. Đúng: Rice is grown by farmers in this area. (Gạo chịu tác động của người trồng nên dùng bị động.) Sai: The letter was send yesterday. Đúng: The letter was sent yesterday. (Phải dùng V3 (sent).) Sai: The accident was happened last night. Đúng: The accident happened last night. (Happen không có tân ngữ nên không có dạng bị động.)",
     "The window was broken by the boy. | Rice is grown by farmers in this area. | The letter was sent yesterday. | The accident happened last night."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ chịu tác động hay thực hiện hành động? · Be đã chia đúng thì chưa? · Động từ chính đã ở V3 chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "English ___ in many countries.",
     "is spoken",
     [
      "speaks",
      "is speaking"
     ],
     "Present simple bị động: is spoken."
    ],
    [
     "This bridge ___ in 1990.",
     "was built",
     [
      "built",
      "is built"
     ],
     "Có mốc quá khứ nên dùng was built."
    ],
    [
     "The rooms ___ every day.",
     "are cleaned",
     [
      "clean",
      "cleaning"
     ],
     "Phòng chịu tác động nên dùng are cleaned."
    ],
    [
     "The winner ___ tomorrow.",
     "will be announced",
     [
      "will announce",
      "is announcing"
     ],
     "Future bị động: will be + V3."
    ],
    [
     "Which sentence is correct?",
     "The window was broken by the boy.",
     [
      "The window was broke by the boy.",
      "The window broken by the boy."
     ],
     "Was + V3: was broken."
    ],
    [
     "Active: 'Someone stole my bag.' Passive:",
     "My bag was stolen.",
     [
      "My bag stole.",
      "My bag has stolen."
     ],
     "Past simple bị động: was stolen."
    ]
   ],
   "gaps": [
    [
     "Rice ___ (grow) in many parts of Vietnam.",
     [
      "is grown"
     ],
     "",
     "Present simple bị động: is grown."
    ],
    [
     "These photos ___ (take) last summer.",
     [
      "were taken"
     ],
     "",
     "Past simple bị động với danh từ số nhiều: were taken."
    ],
    [
     "The report ___ (not / finish) yet.",
     [
      "hasn't been finished",
      "has not been finished"
     ],
     "",
     "Present perfect bị động phủ định: hasn't been finished."
    ],
    [
     "The thief was caught ___ the police.",
     [
      "by"
     ],
     "",
     "Nêu tác nhân bằng by."
    ]
   ],
   "sentences": [
    [
     "English is spoken in many countries.",
     "Tiếng Anh được nói ở nhiều nước."
    ],
    [
     "This bridge was built in 1990.",
     "Cây cầu này được xây năm 1990."
    ],
    [
     "The winner will be announced tomorrow.",
     "Người thắng cuộc sẽ được công bố vào ngày mai."
    ],
    [
     "My bag was stolen on the bus.",
     "Túi của tôi bị lấy cắp trên xe buýt."
    ],
    [
     "The report hasn't been finished yet.",
     "Bản báo cáo vẫn chưa hoàn thành."
    ]
   ]
  },
  {
   "id": "wh-b1-reported-statements",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Reported statements",
   "en": "Câu gián tiếp",
   "desc": "Câu gián tiếp thuật lại lời người khác. Khi động từ tường thuật ở quá khứ (said, told), ta lùi thì: present simple → past simple, present continuous → past continuous,…",
   "formula": [
    [
     "Công thức",
     "S + said (that) + mệnh đề lùi thì · S + told + O + (that) + mệnh đề lùi thì"
    ],
    [
     "Present simple → past simple",
     "\"I work.\" → He said he worked."
    ],
    [
     "Present continuous → past continuous",
     "am/is/are + V-ing → was/were + V-ing"
    ],
    [
     "Present perfect / past simple → past perfect",
     "have + V3 / V2 → had + V3"
    ],
    [
     "Will/can → would/could",
     "will → would · can → could"
    ]
   ],
   "grammar": [
    [
     "Thuật lại điều ai đó nói",
     "Dùng said hoặc told, that có thể bỏ.",
     "She said that she was tired. | He told me he was leaving."
    ],
    [
     "Lùi thì",
     "Thì lùi một bậc so với lời nói gốc.",
     "\"I live in Hue.\" → He said he lived in Hue. | \"I will call.\" → She said she would call."
    ],
    [
     "Đổi đại từ và trạng từ",
     "I → he/she, tomorrow → the next day, here → there.",
     "\"I'll see you tomorrow.\" → She said she would see me the next day."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn said hoặc told: Said (that) + mệnh đề. Told + người nghe + mệnh đề. 2) Lùi thì động từ: Dùng bảng lùi thì ở phần mẫu câu. 3) Đổi đại từ và trạng từ: Đổi theo góc nhìn người thuật lại.",
     "She told me that she was busy. | am → was · will → would | tomorrow → the next day · here → there"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She said me that she was busy. Đúng: She told me that she was busy. (Said không đi trực tiếp với người nghe, dùng told.) Sai: He said he will call me. Đúng: He said he would call me. (Lùi thì: will → would.) Sai: She told that she was tired. Đúng: She said that she was tired. (Told cần người nghe: told me that.) Sai: He said me he lived in Hue. Đúng: He told me he lived in Hue. (Told + người nghe.)",
     "She told me that she was busy. | He said he would call me. | She said that she was tired. | He told me he lived in Hue."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã dùng said hay told đúng chưa? · Đã lùi thì động từ chưa? · Đại từ và trạng từ đã đổi theo người thuật chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She said, \"I am tired.\" → She said that she ___ tired. (lùi thì)",
     "was",
     [
      "is",
      "were"
     ],
     "Am → was khi lùi thì."
    ],
    [
     "He said, \"I will call you.\" → He said he ___ call me.",
     "would",
     [
      "will",
      "did"
     ],
     "Will → would."
    ],
    [
     "They said, \"We have finished.\" → They said they ___ finished.",
     "had",
     [
      "have",
      "has"
     ],
     "Present perfect → past perfect: had finished."
    ],
    [
     "She ___ me that she was busy.",
     "told",
     [
      "said",
      "spoke"
     ],
     "Có người nghe (me) nên dùng told."
    ],
    [
     "\"I can swim,\" said Tom. → Tom said he ___ swim.",
     "could",
     [
      "can",
      "may"
     ],
     "Can → could."
    ],
    [
     "Mai said, \"I will see you tomorrow.\" → Mai said she would see me ___.",
     "the next day",
     [
      "tomorrow",
      "yesterday"
     ],
     "Tomorrow → the next day."
    ]
   ],
   "gaps": [
    [
     "He said, \"I live in Hue.\" → He said he ___ in Hue.",
     [
      "lived"
     ],
     "",
     "Present simple → past simple: lived."
    ],
    [
     "She said, \"I'm working now.\" → She said she ___ working then.",
     [
      "was"
     ],
     "",
     "Present continuous → past continuous: was working."
    ],
    [
     "He told ___ that he was leaving. (tôi)",
     [
      "me"
     ],
     "",
     "Told + người nghe: told me."
    ],
    [
     "She said, \"I bought a car.\" → She said she ___ bought a car.",
     [
      "had"
     ],
     "",
     "Past simple → past perfect: had bought."
    ]
   ],
   "sentences": [
    [
     "She said that she was tired.",
     "Cô ấy nói rằng cô ấy mệt."
    ],
    [
     "He said he would call me.",
     "Anh ấy nói anh ấy sẽ gọi cho tôi."
    ],
    [
     "They said they had finished.",
     "Họ nói họ đã làm xong."
    ],
    [
     "She told me that she was busy.",
     "Cô ấy nói với tôi rằng cô ấy bận."
    ],
    [
     "Mai said she would see me the next day.",
     "Mai nói ngày hôm sau cô ấy sẽ gặp tôi."
    ]
   ]
  },
  {
   "id": "wh-b1-reported-questions-commands",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Reported questions & commands",
   "en": "Câu gián tiếp",
   "desc": "Câu hỏi gián tiếp dùng trật tự câu khẳng định, không đảo ngữ và không dùng do/does/did. Câu hỏi Wh- giữ từ để hỏi, câu hỏi yes/no dùng if hoặc whether.",
   "formula": [
    [
     "Công thức",
     "asked + (O) + từ hỏi / if + S + V (lùi thì) · told/asked + O + (not) to + V"
    ],
    [
     "Câu hỏi Wh-",
     "asked + wh-word + S + V (lùi thì)"
    ],
    [
     "Câu hỏi yes/no",
     "asked + if/whether + S + V (lùi thì)"
    ],
    [
     "Mệnh lệnh khẳng định",
     "told/asked + O + to + V"
    ],
    [
     "Mệnh lệnh phủ định",
     "told/asked + O + not to + V"
    ]
   ],
   "grammar": [
    [
     "Thuật lại câu hỏi Wh-",
     "Giữ từ hỏi, đặt chủ ngữ trước động từ.",
     "\"Where do you live?\" → She asked where I lived."
    ],
    [
     "Thuật lại câu hỏi yes/no",
     "Dùng if hoặc whether.",
     "\"Are you hungry?\" → He asked if I was hungry."
    ],
    [
     "Thuật lại mệnh lệnh và yêu cầu",
     "Dùng told/asked + người + to V. Phủ định dùng not to V.",
     "\"Open the window.\" → She told me to open the window. | \"Don't be late.\" → He told us not to be late."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định loại câu: Câu hỏi Wh-, yes/no hay mệnh lệnh? 2) Bỏ đảo ngữ và do/does/did: Đưa về trật tự chủ ngữ rồi động từ. 3) Lùi thì và đổi đại từ: Áp dụng như câu gián tiếp thông thường. Bỏ dấu hỏi.",
     "\"Where is it?\" → Wh- | Where do you live? → where I lived | She asked where I lived."
    ],
    [
     "Lỗi thường gặp",
     "Sai: He asked where was I going. Đúng: He asked where I was going. (Câu gián tiếp không đảo ngữ.) Sai: She asked me where did I live. Đúng: She asked me where I lived. (Không dùng did trong câu hỏi gián tiếp.) Sai: He told me don't be late. Đúng: He told me not to be late. (Mệnh lệnh phủ định dùng not to + V.) Sai: She asked if was I tired. Đúng: She asked if I was tired. (Sau if dùng trật tự khẳng định.)",
     "He asked where I was going. | She asked me where I lived. | He told me not to be late. | She asked if I was tired."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã bỏ đảo ngữ và do/does/did chưa? · Yes/no đã dùng if hoặc whether chưa? · Mệnh lệnh đã dùng (not) to V chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "\"Where do you live?\" → She asked me where I ___.",
     "lived",
     [
      "did live",
      "do live"
     ],
     "Lùi thì và dùng trật tự khẳng định: lived."
    ],
    [
     "\"Are you hungry?\" → He asked me ___ I was hungry.",
     "if",
     [
      "that",
      "what"
     ],
     "Câu hỏi yes/no dùng if hoặc whether."
    ],
    [
     "\"Open the window,\" the teacher said. → The teacher told us ___ the window.",
     "to open",
     [
      "open",
      "opening"
     ],
     "Told + O + to V."
    ],
    [
     "\"Don't be late,\" she said. → She told me ___ late.",
     "not to be",
     [
      "don't be",
      "to not being"
     ],
     "Mệnh lệnh phủ định: not to be."
    ],
    [
     "Which sentence is correct?",
     "He asked where I was going.",
     [
      "He asked where was I going.",
      "He asked where did I go."
     ],
     "Không đảo ngữ trong câu hỏi gián tiếp."
    ],
    [
     "\"Why are you crying?\" → She asked me why I ___ crying. (lùi thì)",
     "was",
     [
      "am",
      "did"
     ],
     "Present continuous lùi thành past continuous: was crying."
    ]
   ],
   "gaps": [
    [
     "\"Do you like coffee?\" → He asked me ___ I liked coffee.",
     [
      "if",
      "whether"
     ],
     "",
     "Yes/no dùng if hoặc whether."
    ],
    [
     "\"Where is the station?\" → She asked where the station ___.",
     [
      "was"
     ],
     "",
     "Trật tự khẳng định và lùi thì: the station was."
    ],
    [
     "\"Please sit down,\" he said. → He asked me ___ sit down.",
     [
      "to"
     ],
     "",
     "Asked + O + to V."
    ],
    [
     "\"Don't touch it,\" she said. → She told him ___ to touch it.",
     [
      "not"
     ],
     "",
     "Phủ định: not to V."
    ]
   ],
   "sentences": [
    [
     "She asked me where I lived.",
     "Cô ấy hỏi tôi sống ở đâu."
    ],
    [
     "He asked me if I was hungry.",
     "Anh ấy hỏi tôi có đói không."
    ],
    [
     "The teacher told us to open the window.",
     "Giáo viên bảo chúng tôi mở cửa sổ."
    ],
    [
     "She told me not to be late.",
     "Cô ấy dặn tôi đừng đến muộn."
    ],
    [
     "He wanted to know what I had eaten.",
     "Anh ấy muốn biết tôi đã ăn gì."
    ]
   ]
  },
  {
   "id": "wh-b1-defining-relative-clauses",
   "group": 9,
   "grade": 8,
   "icon": "🔗",
   "title": "Defining relative clauses",
   "en": "Mệnh đề quan hệ",
   "desc": "Mệnh đề quan hệ xác định bổ nghĩa cho danh từ đứng trước và cho biết chính xác người hay vật nào đang được nói đến.",
   "formula": [
    [
     "Công thức",
     "danh từ + who/which/that/whose/where + mệnh đề"
    ],
    [
     "Who / that cho người",
     "người + who/that + V"
    ],
    [
     "Which / that cho vật",
     "vật + which/that + V hoặc S + V"
    ],
    [
     "Whose",
     "danh từ + whose + danh từ + V"
    ],
    [
     "Where",
     "nơi chốn + where + S + V"
    ]
   ],
   "grammar": [
    [
     "Xác định người hoặc vật",
     "Who cho người, which cho vật, that dùng được cho cả hai.",
     "The woman who lives next door is a nurse. | This is the book that I told you about."
    ],
    [
     "Chỉ sở hữu và nơi chốn",
     "Whose thay cho his/her/their. Where thay cho in/at which.",
     "That's the man whose car was stolen. | This is the café where we met."
    ],
    [
     "Bỏ từ quan hệ khi là tân ngữ",
     "Khi who/which/that làm tân ngữ trong mệnh đề thì có thể bỏ.",
     "The song (that) she sang was lovely. | The girl (who) I met is my cousin."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm danh từ cần bổ nghĩa: Xác định đó là người, vật, nơi chốn hay sở hữu. 2) Chọn từ quan hệ: Người → who/that. Vật → which/that. Sở hữu → whose. Nơi chốn → where. 3) Không nhắc lại đại từ: Từ quan hệ đã thay cho danh từ nên không thêm it, him, her.",
     "the woman · the book · the town | người → who | The film that I saw was boring."
    ],
    [
     "Lỗi thường gặp",
     "Sai: The film that I saw it was boring. Đúng: The film that I saw was boring. (That đã thay cho the film nên không nhắc lại it.) Sai: The man which lives here is my uncle. Đúng: The man who lives here is my uncle. (Người thì dùng who hoặc that.) Sai: The girl what I met is my cousin. Đúng: The girl who I met is my cousin. (What không dùng làm từ quan hệ.) Sai: She is the girl who her brother plays football. Đúng: She is the girl whose brother plays football. (Chỉ sở hữu phải dùng whose.)",
     "The film that I saw was boring. | The man who lives here is my uncle. | The girl who I met is my cousin. | She is the girl whose brother plays football."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Danh từ đứng trước là người, vật, nơi chốn hay sở hữu? · Đã chọn đúng who, which, that, whose hoặc where chưa? · Có nhắc lại đại từ thừa không?",
     ""
    ]
   ],
   "quiz": [
    [
     "The woman ___ lives next door is a nurse.",
     "who",
     [
      "which",
      "whose"
     ],
     "Người làm chủ ngữ: who."
    ],
    [
     "This is the book ___ I told you about.",
     "which",
     [
      "who",
      "where"
     ],
     "Vật: which (hoặc that)."
    ],
    [
     "That's the man ___ car was stolen.",
     "whose",
     [
      "who",
      "which"
     ],
     "Chỉ sở hữu: whose."
    ],
    [
     "The café ___ we met is closed now.",
     "where",
     [
      "which",
      "who"
     ],
     "Nơi chốn: where."
    ],
    [
     "Which sentence is correct?",
     "The film that I saw was boring.",
     [
      "The film that I saw it was boring.",
      "The film what I saw was boring."
     ],
     "Không nhắc lại tân ngữ và không dùng what."
    ],
    [
     "In which sentence can we leave out 'who'?",
     "The girl who I met is my cousin.",
     [
      "The girl who lives here is my cousin.",
      "The girl who won the race is my cousin."
     ],
     "Chỉ bỏ được khi who làm tân ngữ (I met her), không bỏ khi làm chủ ngữ."
    ]
   ],
   "gaps": [
    [
     "I know a man ___ speaks five languages.",
     [
      "who",
      "that"
     ],
     "",
     "Người làm chủ ngữ: who hoặc that."
    ],
    [
     "She lives in the town ___ she was born.",
     [
      "where"
     ],
     "",
     "Nơi chốn: where."
    ],
    [
     "That's the girl ___ brother plays for the national team.",
     [
      "whose"
     ],
     "",
     "Sở hữu: whose."
    ],
    [
     "The phone ___ I bought last week doesn't work.",
     [
      "which",
      "that"
     ],
     "",
     "Vật làm tân ngữ: which hoặc that."
    ]
   ],
   "sentences": [
    [
     "The woman who lives next door is a nurse.",
     "Người phụ nữ sống cạnh nhà là y tá."
    ],
    [
     "This is the book that I told you about.",
     "Đây là cuốn sách tôi đã kể với bạn."
    ],
    [
     "That's the man whose car was stolen.",
     "Đó là người đàn ông bị mất xe."
    ],
    [
     "The café where we met is closed now.",
     "Quán cà phê nơi chúng tôi gặp nhau giờ đã đóng cửa."
    ],
    [
     "I like people who are honest.",
     "Tôi thích những người trung thực."
    ]
   ]
  },
  {
   "id": "wh-b1-modals-of-deduction",
   "group": 9,
   "grade": 8,
   "icon": "🔑",
   "title": "Modals of deduction",
   "en": "Động từ khuyết thiếu",
   "desc": "Động từ khuyết thiếu dùng để suy đoán dựa trên bằng chứng. Must be nghĩa là chắc chắn đúng, might/may/could be nghĩa là có thể, can't be nghĩa là chắc chắn không phải.",
   "formula": [
    [
     "Công thức",
     "must / might / may / could / can't + be / V · must / might / can't + have + V3"
    ],
    [
     "Hiện tại: chắc chắn",
     "must / can't + be / V"
    ],
    [
     "Hiện tại: có thể",
     "might / may / could + be / V"
    ],
    [
     "Quá khứ: chắc chắn",
     "must / can't + have + V3"
    ],
    [
     "Quá khứ: có thể",
     "might / may / could + have + V3"
    ]
   ],
   "grammar": [
    [
     "Suy đoán chắc chắn đúng",
     "Có bằng chứng rõ ràng.",
     "He has worked all day. He must be tired."
    ],
    [
     "Suy đoán chắc chắn sai",
     "Có bằng chứng ngược lại, dùng can't.",
     "She just bought a house. She can't be poor."
    ],
    [
     "Suy đoán có thể",
     "Không chắc, dùng might, may hoặc could.",
     "He might be at the gym. | I might have left my keys in the car."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Đánh giá bằng chứng: Có chắc chắn đúng, chắc chắn sai hay chỉ có thể? 2) Xác định hiện tại hay quá khứ: Hiện tại dùng động từ nguyên mẫu. Quá khứ dùng have + V3. 3) Kiểm tra dạng: Sau modal là động từ nguyên mẫu không to.",
     "chắc đúng → must · chắc sai → can't · có thể → might | must be · must have been | She must be at home. (không nói must to be)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She must to be at home. Đúng: She must be at home. (Sau modal không dùng to.) Sai: He mustn't be at home. His car is outside. Đúng: He must be at home. His car is outside. (Mustn't không dùng để suy đoán, dùng can't khi chắc chắn không.) Sai: They must went out. Đúng: They must have gone out. (Quá khứ dùng must have + V3.) Sai: That can't being Anna. Đúng: That can't be Anna. (Sau modal dùng be, không dùng being.)",
     "She must be at home. | He must be at home. His car is outside. | They must have gone out. | That can't be Anna."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Bằng chứng cho thấy chắc chắn đúng, chắc chắn sai hay chỉ có thể? · Nói về hiện tại hay quá khứ? · Sau modal có đúng dạng không to?",
     ""
    ]
   ],
   "quiz": [
    [
     "He has worked all day. He ___ be tired.",
     "must",
     [
      "can't",
      "mustn't"
     ],
     "Chắc chắn đúng: must."
    ],
    [
     "She just bought a house. She ___ be poor.",
     "can't",
     [
      "must",
      "should"
     ],
     "Chắc chắn không phải: can't."
    ],
    [
     "I'm not sure where Tom is. He ___ be at the gym.",
     "might",
     [
      "can't",
      "must have"
     ],
     "Không chắc: might."
    ],
    [
     "The lights are off. They ___ gone to bed.",
     "must have",
     [
      "must",
      "can"
     ],
     "Suy đoán chắc chắn về quá khứ: must have + V3."
    ],
    [
     "Which sentence is correct?",
     "She must be at home.",
     [
      "She must to be at home.",
      "She must being at home."
     ],
     "Modal + động từ nguyên mẫu không to."
    ],
    [
     "I can't find my keys. I ___ left them in the car.",
     "might have",
     [
      "might",
      "must had"
     ],
     "Khả năng trong quá khứ: might have + V3."
    ]
   ],
   "gaps": [
    [
     "That can't ___ Anna. She's in Paris.",
     [
      "be"
     ],
     "",
     "Can't be: chắc chắn không phải."
    ],
    [
     "He's not answering the phone. He ___ be sleeping. (có thể, không chắc)",
     [
      "might",
      "may",
      "could"
     ],
     "",
     "Suy đoán không chắc: might, may hoặc could."
    ],
    [
     "The ground is wet. It ___ have rained last night. (gần như chắc chắn)",
     [
      "must"
     ],
     "",
     "Bằng chứng rõ: must have rained."
    ],
    [
     "She can't ___ seen us. She didn't wave.",
     [
      "have"
     ],
     "",
     "Quá khứ: can't have + V3."
    ]
   ],
   "sentences": [
    [
     "He has worked all day. He must be tired.",
     "Anh ấy làm cả ngày. Chắc là anh ấy mệt."
    ],
    [
     "She just bought a house. She can't be poor.",
     "Cô ấy vừa mua nhà. Không thể là cô ấy nghèo."
    ],
    [
     "I'm not sure where Tom is. He might be at the gym.",
     "Tôi không chắc Tom ở đâu. Có thể anh ấy ở phòng tập."
    ],
    [
     "The lights are off. They must have gone to bed.",
     "Đèn tắt hết. Chắc họ đã đi ngủ rồi."
    ],
    [
     "I can't find my keys. I might have left them in the car.",
     "Tôi không tìm thấy chìa khóa. Có lẽ tôi để quên trong xe."
    ]
   ]
  },
  {
   "id": "wh-b1-gerund-vs-infinitive",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Gerund vs infinitive",
   "en": "Dạng thức động từ",
   "desc": "Một số động từ đi với V-ing (enjoy, avoid, finish, mind, suggest, keep, practise, give up, look forward to), một số đi với to + V (decide, hope, plan, promise, refuse,…",
   "formula": [
    [
     "Công thức",
     "enjoy/avoid/finish + V-ing · decide/hope/plan + to V · giới từ + V-ing"
    ],
    [
     "Động từ + V-ing",
     "enjoy / avoid / finish / mind / suggest / practise / keep / give up + V-ing"
    ],
    [
     "Động từ + to V",
     "decide / hope / plan / promise / refuse / manage / afford / agree / learn + to V"
    ],
    [
     "Giới từ + V-ing",
     "good at / interested in / look forward to + V-ing"
    ],
    [
     "Đổi nghĩa",
     "stop/remember/forget + V-ing (việc đã làm) hoặc + to V (việc cần làm)"
    ]
   ],
   "grammar": [
    [
     "Động từ đi với V-ing",
     "Nhóm cần học thuộc.",
     "I enjoy listening to music. | Would you mind opening the window?"
    ],
    [
     "Động từ đi với to + V",
     "Thường nói về quyết định, kế hoạch, ý định.",
     "She decided to find a new job. | We can't afford to buy a new car."
    ],
    [
     "Động từ đổi nghĩa",
     "Stop, remember, forget, try đổi nghĩa theo dạng theo sau.",
     "He stopped working. (ngừng làm việc) | He stopped to rest. (dừng lại để nghỉ)"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhìn động từ đứng trước: Tra xem nó thuộc nhóm V-ing hay nhóm to V. 2) Kiểm tra giới từ: Sau giới từ chỉ dùng V-ing, kể cả với to là giới từ (look forward to). 3) Kiểm tra động từ đổi nghĩa: Stop, remember, forget, try cần xem nghĩa muốn nói.",
     "enjoy → V-ing · decide → to V | good at telling · look forward to seeing | stop smoking ≠ stop to smoke"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I enjoy to listen to music. Đúng: I enjoy listening to music. (Enjoy đi với V-ing.) Sai: He suggested to go out. Đúng: He suggested going out. (Suggest đi với V-ing.) Sai: She decided finding a new job. Đúng: She decided to find a new job. (Decide đi với to V.) Sai: I look forward to see you. Đúng: I look forward to seeing you. (To trong look forward to là giới từ nên theo sau là V-ing.)",
     "I enjoy listening to music. | He suggested going out. | She decided to find a new job. | I look forward to seeing you."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Động từ đứng trước thuộc nhóm V-ing hay to V? · Phía trước có giới từ không? Nếu có thì dùng V-ing. · Có phải stop, remember, forget, try cần đổi nghĩa không?",
     ""
    ]
   ],
   "quiz": [
    [
     "I enjoy ___ to music.",
     "listening",
     [
      "listen",
      "to listen"
     ],
     "Enjoy + V-ing."
    ],
    [
     "She decided ___ a new job.",
     "to find",
     [
      "finding",
      "find"
     ],
     "Decide + to V."
    ],
    [
     "She is good at ___ stories.",
     "telling",
     [
      "tell",
      "to tell"
     ],
     "Sau giới từ at dùng V-ing."
    ],
    [
     "I forgot ___ the door, so someone could come in.",
     "to lock",
     [
      "locking",
      "lock"
     ],
     "Forget to V: quên làm việc cần làm."
    ],
    [
     "Which sentence is correct?",
     "He suggested going out.",
     [
      "He suggested to go out.",
      "He suggested go out."
     ],
     "Suggest + V-ing."
    ],
    [
     "He stopped ___ because he was tired. (ngừng làm việc)",
     "working",
     [
      "to work",
      "work"
     ],
     "Stop + V-ing: ngừng làm việc đó."
    ]
   ],
   "gaps": [
    [
     "We can't afford ___ (buy) a new car.",
     [
      "to buy"
     ],
     "",
     "Afford + to V."
    ],
    [
     "Would you mind ___ (open) the window?",
     [
      "opening"
     ],
     "",
     "Mind + V-ing."
    ],
    [
     "They managed ___ (finish) the project on time.",
     [
      "to finish"
     ],
     "",
     "Manage + to V."
    ],
    [
     "She gave up ___ (smoke) last year.",
     [
      "smoking"
     ],
     "",
     "Give up + V-ing."
    ]
   ],
   "sentences": [
    [
     "I enjoy listening to music.",
     "Tôi thích nghe nhạc."
    ],
    [
     "She decided to find a new job.",
     "Cô ấy quyết định tìm một công việc mới."
    ],
    [
     "He suggested going out for dinner.",
     "Anh ấy gợi ý đi ăn tối bên ngoài."
    ],
    [
     "I forgot to lock the door.",
     "Tôi quên khóa cửa."
    ],
    [
     "She is good at telling stories.",
     "Cô ấy kể chuyện giỏi."
    ]
   ]
  },
  {
   "id": "wh-b1-question-tags",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Question tags",
   "en": "Cấu trúc câu",
   "desc": "Câu hỏi đuôi là câu hỏi ngắn thêm vào cuối câu để xác nhận hoặc tìm sự đồng tình. Câu khẳng định thì đuôi phủ định, câu phủ định thì đuôi khẳng định.",
   "formula": [
    [
     "Công thức",
     "câu khẳng định, trợ động từ + n't + đại từ? · câu phủ định, trợ động từ + đại từ?"
    ],
    [
     "Khẳng định → đuôi phủ định",
     "S + V, trợ động từ + n't + đại từ?"
    ],
    [
     "Phủ định → đuôi khẳng định",
     "S + not V, trợ động từ + đại từ?"
    ],
    [
     "Trường hợp đặc biệt",
     "I am → aren't I · Let's → shall we · mệnh lệnh → will you"
    ],
    [
     "There is",
     "There is/are → isn't/aren't there"
    ]
   ],
   "grammar": [
    [
     "Xác nhận điều mình đoán",
     "Người nói gần chắc chắn và muốn nghe xác nhận.",
     "It's cold today, isn't it? | You like coffee, don't you?"
    ],
    [
     "Mời hoặc đề nghị",
     "Let's và mệnh lệnh có đuôi riêng.",
     "Let's go out, shall we? | Open the window, will you?"
    ],
    [
     "Giữ cuộc trò chuyện",
     "Dùng trong giao tiếp thân mật để kéo người nghe tham gia.",
     "You haven't seen my keys, have you?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định trợ động từ của câu chính: Nếu không có thì dùng do, does, did theo thì. 2) Đảo khẳng định và phủ định: Câu chính khẳng định thì đuôi phủ định và ngược lại. 3) Dùng đại từ làm chủ ngữ của đuôi: Đổi chủ ngữ thành đại từ tương ứng.",
     "She works → does. They went → did. | You like → don't you · You don't like → do you | Tom → he · the boys → they"
    ],
    [
     "Lỗi thường gặp",
     "Sai: You like coffee, do you? Đúng: You like coffee, don't you? (Câu khẳng định cần đuôi phủ định.) Sai: She isn't at home, isn't she? Đúng: She isn't at home, is she? (Câu phủ định cần đuôi khẳng định.) Sai: I'm late, amn't I? Đúng: I'm late, aren't I? (Dùng aren't I, không dùng amn't I.) Sai: He can swim, doesn't he? Đúng: He can swim, can't he? (Đuôi lặp lại modal của câu chính.)",
     "You like coffee, don't you? | She isn't at home, is she? | I'm late, aren't I? | He can swim, can't he?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu chính khẳng định hay phủ định? · Đuôi đã đảo ngược và dùng đúng trợ động từ chưa? · Đại từ ở đuôi đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "You like coffee, ___?",
     "don't you",
     [
      "do you",
      "aren't you"
     ],
     "Khẳng định → đuôi phủ định với do."
    ],
    [
     "She isn't at home, ___?",
     "is she",
     [
      "isn't she",
      "does she"
     ],
     "Phủ định → đuôi khẳng định: is she."
    ],
    [
     "They went to Da Lat last year, ___?",
     "didn't they",
     [
      "weren't they",
      "don't they"
     ],
     "Past simple dùng didn't they."
    ],
    [
     "I'm late, ___?",
     "aren't I",
     [
      "amn't I",
      "am I"
     ],
     "Trường hợp đặc biệt: aren't I."
    ],
    [
     "Let's go out, ___?",
     "shall we",
     [
      "will we",
      "don't we"
     ],
     "Let's → shall we."
    ],
    [
     "Open the window, ___?",
     "will you",
     [
      "do you",
      "shall we"
     ],
     "Mệnh lệnh thường dùng will you."
    ]
   ],
   "gaps": [
    [
     "He can swim, ___ he?",
     [
      "can't"
     ],
     "",
     "Đuôi lặp lại modal can và đảo sang phủ định: can't."
    ],
    [
     "You haven't seen my keys, ___ you?",
     [
      "have"
     ],
     "",
     "Câu chính phủ định nên đuôi khẳng định: have you."
    ],
    [
     "There is a problem, ___ there?",
     [
      "isn't"
     ],
     "",
     "There is → isn't there."
    ],
    [
     "She works in a bank, ___ she?",
     [
      "doesn't"
     ],
     "",
     "Present simple ngôi thứ ba: doesn't she."
    ]
   ],
   "sentences": [
    [
     "You like coffee, don't you?",
     "Bạn thích cà phê đúng không?"
    ],
    [
     "She isn't at home, is she?",
     "Cô ấy không có nhà, phải không?"
    ],
    [
     "They went to Da Lat last year, didn't they?",
     "Năm ngoái họ đi Đà Lạt, đúng không?"
    ],
    [
     "I'm late, aren't I?",
     "Tôi trễ rồi, đúng không?"
    ],
    [
     "Let's go out, shall we?",
     "Mình ra ngoài nhé?"
    ]
   ]
  },
  {
   "id": "wh-b1-indirect-questions",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Indirect questions",
   "en": "Cấu trúc câu",
   "desc": "Câu hỏi gián tiếp là cách hỏi lịch sự, mở đầu bằng Could you tell me, Do you know, I wonder, I'd like to know.",
   "formula": [
    [
     "Công thức",
     "Could you tell me / Do you know + từ hỏi + S + V · ... + if/whether + S + V"
    ],
    [
     "Wh- gián tiếp",
     "Could you tell me + wh-word + S + V?"
    ],
    [
     "Do you know",
     "Do you know + wh-word + S + V?"
    ],
    [
     "Yes/no gián tiếp",
     "I wonder + if/whether + S + V"
    ],
    [
     "Không biết",
     "I don't know + wh-word + S + V"
    ]
   ],
   "grammar": [
    [
     "Hỏi lịch sự",
     "Dùng khi hỏi người lạ hoặc trong tình huống trang trọng.",
     "Could you tell me where the bank is? | Do you know what time the shop opens?"
    ],
    [
     "Hỏi yes/no gián tiếp",
     "Dùng if hoặc whether.",
     "I wonder if he will come. | Can you tell me whether this bus goes to the airport?"
    ],
    [
     "Nói điều chưa biết",
     "Cấu trúc này cũng dùng trong câu khẳng định hoặc phủ định.",
     "I don't know where she lives. | I have no idea what he wants."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn câu mở đầu lịch sự: Could you tell me, Do you know, I wonder, Can you tell me... 2) Viết lại câu hỏi gốc ở trật tự khẳng định: Bỏ đảo ngữ và do/does/did, giữ chủ ngữ rồi động từ. 3) Dùng if hoặc whether cho yes/no: Chỉ cần if/whether khi câu gốc không có từ hỏi.",
     "Could you tell me ... | Where is the bank? → where the bank is | Is she at home? → if she is at home"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Could you tell me where is the bank? Đúng: Could you tell me where the bank is? (Sau từ hỏi dùng trật tự khẳng định.) Sai: Do you know what time does the shop open? Đúng: Do you know what time the shop opens? (Không dùng does khi đã là câu gián tiếp.) Sai: I wonder that he will come. Đúng: I wonder if he will come. (Yes/no dùng if hoặc whether, không dùng that.) Sai: Can you tell me how much costs it? Đúng: Can you tell me how much it costs? (Chủ ngữ phải đứng trước động từ.)",
     "Could you tell me where the bank is? | Do you know what time the shop opens? | I wonder if he will come. | Can you tell me how much it costs?"
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu mở đầu đã đủ lịch sự chưa? · Phần sau đã ở trật tự chủ ngữ rồi động từ chưa? · Yes/no đã dùng if hoặc whether chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Could you tell me where ___?",
     "the bank is",
     [
      "is the bank",
      "does the bank"
     ],
     "Sau từ hỏi dùng trật tự khẳng định: the bank is."
    ],
    [
     "Do you know what time ___?",
     "the shop opens",
     [
      "does the shop open",
      "the shop does open"
     ],
     "Không dùng does khi là câu gián tiếp: the shop opens."
    ],
    [
     "I wonder ___ he will come.",
     "if",
     [
      "that",
      "what"
     ],
     "Yes/no gián tiếp dùng if."
    ],
    [
     "Which sentence is correct?",
     "Can you tell me how much it costs?",
     [
      "Can you tell me how much does it cost?",
      "Can you tell me how much costs it?"
     ],
     "How much + S + V: it costs."
    ],
    [
     "Do you know ___ she lives?",
     "where",
     [
      "where does",
      "where lives"
     ],
     "Where + S + V: where she lives."
    ],
    [
     "I'd like to know ___ you can help me.",
     "whether",
     [
      "what",
      "where"
     ],
     "Yes/no dùng whether hoặc if."
    ]
   ],
   "gaps": [
    [
     "Do you know when the train ___ (leave)? (hiện tại đơn)",
     [
      "leaves"
     ],
     "",
     "Trật tự khẳng định và không dùng does: the train leaves."
    ],
    [
     "Could you tell me ___ the nearest ATM is?",
     [
      "where"
     ],
     "",
     "Hỏi nơi chốn: where."
    ],
    [
     "I don't know ___ she is married or not.",
     [
      "whether",
      "if"
     ],
     "",
     "Yes/no: whether hoặc if."
    ],
    [
     "Do you have any idea what he ___ (want)?",
     [
      "wants"
     ],
     "",
     "Không dùng does: what he wants."
    ]
   ],
   "sentences": [
    [
     "Could you tell me where the bank is?",
     "Bạn làm ơn cho tôi biết ngân hàng ở đâu?"
    ],
    [
     "Do you know what time the shop opens?",
     "Bạn có biết cửa hàng mở cửa lúc mấy giờ không?"
    ],
    [
     "I wonder if he will come.",
     "Tôi tự hỏi liệu anh ấy có đến không."
    ],
    [
     "Can you tell me how much this costs?",
     "Bạn cho tôi biết cái này giá bao nhiêu được không?"
    ],
    [
     "I don't know whether she is married or not.",
     "Tôi không biết cô ấy đã kết hôn hay chưa."
    ]
   ]
  },
  {
   "id": "wh-b1-so-such",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "So & such",
   "en": "Từ loại",
   "desc": "So và such đều nhấn mạnh mức độ. So đứng trước tính từ hoặc trạng từ. Such đứng trước cụm danh từ (có thể kèm a/an và tính từ).",
   "formula": [
    [
     "Công thức",
     "so + adj/adv (+ that) · such + (a/an) + (adj) + noun (+ that)"
    ],
    [
     "So + tính từ/trạng từ",
     "so + adj/adv (+ that)"
    ],
    [
     "Such + a/an + (adj) + danh từ",
     "such + a/an + (adj) + danh từ số ít"
    ],
    [
     "Such + danh từ số nhiều/không đếm được",
     "such + (adj) + danh từ số nhiều/không đếm được"
    ],
    [
     "So much / so many",
     "so much + không đếm được · so many + số nhiều"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh tính từ hoặc trạng từ",
     "Dùng so.",
     "The test was so difficult. | He speaks so quickly."
    ],
    [
     "Nhấn mạnh danh từ",
     "Dùng such, có thể kèm a/an.",
     "It was such a nice day. | She is such a clever girl."
    ],
    [
     "Nói kết quả",
     "Thêm that để nêu kết quả của mức độ.",
     "I was so tired that I fell asleep at once. | It was such a long journey that we were exhausted."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhìn từ đứng sau: Tính từ/trạng từ đứng một mình thì dùng so. Có danh từ thì dùng such. 2) Chú ý much, many: Có số lượng thì dùng so much/so many, không dùng such. 3) Thêm that nếu muốn nêu kết quả: That có thể bỏ trong văn nói.",
     "so tired · such a tired boy | so many friends | so tired (that) I fell asleep"
    ],
    [
     "Lỗi thường gặp",
     "Sai: It was so a hot day. Đúng: It was such a hot day. (Có danh từ day nên dùng such a.) Sai: It was such hot day. Đúng: It was such a hot day. (Danh từ số ít cần a/an sau such.) Sai: She has such many friends. Đúng: She has so many friends. (Many/much đi với so.) Sai: The film was such boring. Đúng: The film was so boring. (Tính từ đứng một mình thì dùng so.)",
     "It was such a hot day. | It was such a hot day. | She has so many friends. | The film was so boring."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Sau chỗ trống là tính từ/trạng từ hay danh từ? · Danh từ số ít đã có a/an sau such chưa? · Có much, many không? Nếu có thì dùng so.",
     ""
    ]
   ],
   "quiz": [
    [
     "The test was ___ difficult that nobody finished it.",
     "so",
     [
      "such",
      "too"
     ],
     "Tính từ đứng một mình: so."
    ],
    [
     "It was ___ a nice day that we went to the beach.",
     "such",
     [
      "so",
      "very"
     ],
     "Có cụm danh từ a nice day nên dùng such."
    ],
    [
     "She has ___ many friends.",
     "so",
     [
      "such",
      "such a"
     ],
     "So many + danh từ số nhiều."
    ],
    [
     "He is ___ a clever boy.",
     "such",
     [
      "so",
      "too"
     ],
     "Such a + adj + danh từ."
    ],
    [
     "Which sentence is correct?",
     "It was such a hot day.",
     [
      "It was so a hot day.",
      "It was such hot day."
     ],
     "Such a hot day."
    ],
    [
     "There was ___ much traffic that we were late.",
     "so",
     [
      "such",
      "a lot"
     ],
     "So much + danh từ không đếm được."
    ]
   ],
   "gaps": [
    [
     "I was ___ tired that I fell asleep at once.",
     [
      "so"
     ],
     "",
     "So + tính từ."
    ],
    [
     "They live in ___ a big house!",
     [
      "such"
     ],
     "",
     "Such a + adj + danh từ."
    ],
    [
     "He speaks ___ quickly that I can't understand him.",
     [
      "so"
     ],
     "",
     "So + trạng từ."
    ],
    [
     "It was ___ delicious food that we ordered more.",
     [
      "such"
     ],
     "",
     "Such + adj + danh từ không đếm được."
    ]
   ],
   "sentences": [
    [
     "The test was so difficult that nobody finished it.",
     "Bài kiểm tra khó đến mức không ai làm xong."
    ],
    [
     "It was such a nice day that we went to the beach.",
     "Hôm đó đẹp trời đến mức chúng tôi ra biển."
    ],
    [
     "She has so many friends.",
     "Cô ấy có rất nhiều bạn."
    ],
    [
     "He speaks so quickly that I can't understand him.",
     "Anh ấy nói nhanh đến mức tôi không hiểu."
    ],
    [
     "They are such nice people.",
     "Họ là những người rất tốt."
    ]
   ]
  },
  {
   "id": "wh-b1-phrasal-verbs",
   "group": 9,
   "grade": 8,
   "icon": "📝",
   "title": "Common phrasal verbs",
   "en": "Cụm động từ",
   "desc": "Cụm động từ gồm động từ và một tiểu từ (up, off, on, out, after, for...) và thường có nghĩa khác với động từ gốc.",
   "formula": [
    [
     "Công thức",
     "verb + particle · verb + O + particle (tách được) · verb + particle + O (không tách được)"
    ],
    [
     "Tách được (có tân ngữ)",
     "verb + O + particle · verb + particle + danh từ"
    ],
    [
     "Không tách được",
     "verb + particle + O"
    ],
    [
     "Cụm với ba thành phần",
     "verb + particle + preposition"
    ],
    [
     "Không có tân ngữ",
     "verb + particle"
    ]
   ],
   "grammar": [
    [
     "Nói về hoạt động hằng ngày",
     "Rất hay dùng trong hội thoại.",
     "Please turn off the lights. | Put on your coat. It's cold."
    ],
    [
     "Nói về việc tìm kiếm, tìm hiểu",
     "Look for, find out, look up.",
     "I'm looking for my glasses. | I couldn't find out the answer."
    ],
    [
     "Nói về đời sống và quan hệ",
     "Look after, get on with, give up, run out of.",
     "She looks after her grandmother. | I get on well with my neighbours."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Học cả cụm, không học riêng từng từ: Nghĩa của cụm thường khác nghĩa của từng từ. 2) Xác định cụm có tách được không: Nếu tách được, đại từ tân ngữ phải đứng giữa. 3) Chú ý giới từ đi kèm: Một số cụm cần thêm giới từ như run out of.",
     "give up = từ bỏ | pick it up (không nói pick up it) | run out of milk"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She picked up it. Đúng: She picked it up. (Đại từ tân ngữ đứng giữa động từ và tiểu từ.) Sai: I looked the word. Đúng: I looked up the word. (Thiếu tiểu từ up nên mất nghĩa tra cứu.) Sai: We've run out milk. Đúng: We've run out of milk. (Run out cần có of trước danh từ.) Sai: She looks her grandmother after. Đúng: She looks after her grandmother. (Look after không tách được.)",
     "She picked it up. | I looked up the word. | We've run out of milk. | She looks after her grandmother."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Cụm động từ này có nghĩa gì khi đứng cùng nhau? · Tân ngữ là đại từ thì đã đứng giữa chưa? · Có cần giới từ phía sau không?",
     ""
    ]
   ],
   "quiz": [
    [
     "I'm ___ my glasses. Have you seen them?",
     "looking for",
     [
      "looking after",
      "looking up"
     ],
     "Look for = tìm kiếm."
    ],
    [
     "Please ___ the lights when you leave.",
     "turn off",
     [
      "turn up",
      "turn into"
     ],
     "Turn off = tắt."
    ],
    [
     "We've ___ of milk, so I'll buy some.",
     "run out",
     [
      "given up",
      "taken off"
     ],
     "Run out of = hết."
    ],
    [
     "She ___ her grandmother while her parents are at work.",
     "looks after",
     [
      "looks for",
      "looks like"
     ],
     "Look after = chăm sóc."
    ],
    [
     "Which sentence is correct?",
     "She picked it up.",
     [
      "She picked up it.",
      "She picked up to it."
     ],
     "Đại từ tân ngữ đứng giữa: picked it up."
    ],
    [
     "I couldn't ___ the answer, so I asked my teacher.",
     "find out",
     [
      "find on",
      "find at"
     ],
     "Find out = tìm ra, biết được."
    ]
   ],
   "gaps": [
    [
     "Don't ___ up! You can do it.",
     [
      "give"
     ],
     "",
     "Give up = bỏ cuộc."
    ],
    [
     "It's cold. Put your coat ___.",
     [
      "on"
     ],
     "",
     "Put on = mặc vào."
    ],
    [
     "He took ___ his shoes before entering the house.",
     [
      "off"
     ],
     "",
     "Take off = cởi ra."
    ],
    [
     "I get ___ well with my neighbours.",
     [
      "on"
     ],
     "",
     "Get on well with = hòa hợp với."
    ]
   ],
   "sentences": [
    [
     "I'm looking for my glasses.",
     "Tôi đang tìm kính của tôi."
    ],
    [
     "Please turn off the lights when you leave.",
     "Làm ơn tắt đèn khi bạn rời đi."
    ],
    [
     "She looks after her grandmother.",
     "Cô ấy chăm sóc bà."
    ],
    [
     "We've run out of milk.",
     "Chúng ta hết sữa rồi."
    ],
    [
     "She picked it up from the floor.",
     "Cô ấy nhặt nó lên khỏi sàn."
    ]
   ]
  },
  {
   "id": "wh-b1-ability-in-the-past",
   "group": 9,
   "grade": 8,
   "icon": "🔑",
   "title": "Could, was able to & manage to",
   "en": "Động từ khuyết thiếu",
   "desc": "Could nói khả năng chung trong quá khứ. Khi nói làm được một việc cụ thể, một lần, ta dùng was/were able to hoặc managed to (could không dùng trong trường hợp này ở câu…",
   "formula": [
    [
     "Công thức",
     "could + V (khả năng chung) · was/were able to / managed to + V (làm được việc cụ thể)"
    ],
    [
     "Khả năng chung",
     "S + could + V"
    ],
    [
     "Việc cụ thể",
     "S + was/were able to + V · S + managed to + V"
    ],
    [
     "Phủ định",
     "S + couldn't + V"
    ],
    [
     "Tương lai và hiện tại hoàn thành",
     "will be able to + V · have/has been able to + V"
    ]
   ],
   "grammar": [
    [
     "Nói khả năng chung trong quá khứ",
     "Nói điều ai đó có thể làm, không gắn với một dịp cụ thể.",
     "When I was five, I could swim. | She could speak three languages as a child."
    ],
    [
     "Nói làm được một việc cụ thể",
     "Việc xảy ra một lần, có kết quả.",
     "The fire spread quickly, but everyone was able to escape. | I managed to finish the work yesterday."
    ],
    [
     "Nói không làm được",
     "Couldn't dùng cho cả hai trường hợp.",
     "She couldn't come to the party. | I couldn't open the door."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định khả năng chung hay việc cụ thể: Khả năng chung kéo dài, việc cụ thể xảy ra một lần. 2) Kiểm tra câu phủ định: Phủ định thì dùng couldn't được cho cả hai. 3) Chọn dạng cho thì khác: Tương lai và hiện tại hoàn thành cần dạng be able to.",
     "could swim · managed to swim across | I couldn't finish. | will be able to · have been able to"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Yesterday I could finish the work. Đúng: Yesterday I managed to finish the work. (Việc cụ thể, một lần nên dùng managed to hoặc was able to.) Sai: I can't to swim. Đúng: I can't swim. (Sau can't là động từ nguyên mẫu không to.) Sai: I didn't could swim until I was ten. Đúng: I couldn't swim until I was ten. (Could đã là modal nên không dùng didn't.) Sai: I have can swim since I was five. Đúng: I have been able to swim since I was five. (Can không có dạng V3 nên present perfect dùng have been able to.)",
     "Yesterday I managed to finish the work. | I can't swim. | I couldn't swim until I was ten. | I have been able to swim since I was five."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đang nói khả năng chung hay một việc cụ thể? · Nếu là việc cụ thể và khẳng định thì đã dùng was able to hoặc managed to chưa? · Với tương lai hoặc hiện tại hoàn thành đã dùng be able to chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "When I was five, I ___ swim.",
     "could",
     [
      "managed to",
      "will be able to"
     ],
     "Khả năng chung trong quá khứ: could."
    ],
    [
     "The fire spread quickly, but everyone ___ escape.",
     "was able to",
     [
      "could",
      "can"
     ],
     "Việc cụ thể, một lần: was able to."
    ],
    [
     "I ___ finish the work yesterday, so I'm very happy.",
     "managed to",
     [
      "could",
      "can"
     ],
     "Làm được việc cụ thể sau nỗ lực: managed to."
    ],
    [
     "I'm busy now, but I ___ help you tomorrow.",
     "will be able to",
     [
      "could",
      "managed to"
     ],
     "Tương lai: will be able to."
    ],
    [
     "Which sentence is correct?",
     "I couldn't swim until I was ten.",
     [
      "I can't to swim.",
      "I didn't could swim."
     ],
     "Couldn't + V nguyên mẫu."
    ],
    [
     "She ___ come to the party because she was ill.",
     "couldn't",
     [
      "can't",
      "won't able to"
     ],
     "Phủ định trong quá khứ: couldn't."
    ]
   ],
   "gaps": [
    [
     "We were ___ to book the last two tickets.",
     [
      "able"
     ],
     "",
     "Was/were able to."
    ],
    [
     "He ___ (manage) to fix the car in an hour.",
     [
      "managed"
     ],
     "",
     "Past simple của manage: managed."
    ],
    [
     "She hasn't been ___ to sleep lately.",
     [
      "able"
     ],
     "",
     "Present perfect của can: have/has been able to."
    ],
    [
     "Last night I ___ able to finish the report because the computer crashed. (phủ định)",
     [
      "wasn't",
      "was not"
     ],
     "",
     "Phủ định: wasn't able to."
    ]
   ],
   "sentences": [
    [
     "When I was five, I could swim.",
     "Hồi năm tuổi, tôi đã biết bơi."
    ],
    [
     "The fire spread quickly, but everyone was able to escape.",
     "Lửa lan nhanh nhưng mọi người đều thoát được."
    ],
    [
     "I managed to finish the report yesterday.",
     "Hôm qua tôi đã cố gắng và hoàn thành được bản báo cáo."
    ],
    [
     "She couldn't come to the party because she was ill.",
     "Cô ấy không đến dự tiệc được vì bị ốm."
    ],
    [
     "I will be able to help you tomorrow.",
     "Ngày mai tôi sẽ giúp được bạn."
    ]
   ]
  },
  {
   "id": "wh-b2-past-perfect-continuous",
   "group": 10,
   "grade": 10,
   "icon": "⏱️",
   "title": "Past perfect continuous",
   "en": "Thì",
   "desc": "Past perfect continuous (had been + V-ing) nhấn mạnh quá trình kéo dài trước một thời điểm hoặc một việc khác trong quá khứ.",
   "formula": [
    [
     "Công thức",
     "S + had been + V-ing"
    ],
    [
     "Khẳng định",
     "S + had been + V-ing"
    ],
    [
     "Phủ định",
     "S + hadn't been + V-ing"
    ],
    [
     "Câu hỏi",
     "Had + S + been + V-ing?"
    ],
    [
     "How long",
     "How long + had + S + been + V-ing?"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh việc kéo dài trước một mốc quá khứ",
     "Dùng với for, since, how long để nói độ dài.",
     "When she arrived, I had been waiting for two hours. | He had been working there since 2010."
    ],
    [
     "Giải thích tình trạng trong quá khứ",
     "Việc kéo dài là nguyên nhân của kết quả được thấy lúc đó.",
     "His eyes were red because he had been crying. | The ground was wet. It had been raining all night."
    ],
    [
     "Phân biệt với past perfect",
     "Past perfect continuous nhấn quá trình, past perfect nhấn kết quả.",
     "She had been writing emails. (quá trình) | She had written ten emails. (kết quả)"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định mốc quá khứ: Có một thời điểm hoặc một việc xảy ra sau, thường ở past simple. 2) Tìm việc kéo dài trước mốc đó: Nếu nhấn mạnh quá trình hoặc độ dài thì dùng had been + V-ing. 3) Kiểm tra động từ trạng thái: Know, like, be, have (sở hữu) dùng had + V3.",
     "when the bus arrived | had been waiting for an hour | had known (không nói had been knowing)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She had been having a car for years. Đúng: She had had a car for years. (Have chỉ sở hữu là động từ trạng thái, không dùng tiếp diễn.) Sai: When I arrived, he has been waiting for an hour. Đúng: When I arrived, he had been waiting for an hour. (Mốc là quá khứ nên dùng had been, không dùng has been.) Sai: He had been worked there since 2010. Đúng: He had been working there since 2010. (Sau been dùng V-ing.) Sai: I was tired because I was working all night. Đúng: I was tired because I had been working all night. (Việc làm xảy ra trước và kéo dài đến lúc mệt nên cần had been working.)",
     "She had had a car for years. | When I arrived, he had been waiting for an hour. | He had been working there since 2010. | I was tired because I had been working all night."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Có mốc quá khứ và việc kéo dài trước mốc đó không? · Đã dùng had been + V-ing chưa? · Động từ có phải động từ trạng thái không?",
     ""
    ]
   ],
   "quiz": [
    [
     "When she arrived, I ___ for two hours.",
     "had been waiting",
     [
      "waited",
      "have been waiting"
     ],
     "Việc kéo dài trước mốc quá khứ: had been waiting."
    ],
    [
     "His eyes were red because he ___.",
     "had been crying",
     [
      "has been crying",
      "was cry"
     ],
     "Nguyên nhân của tình trạng quá khứ: had been crying."
    ],
    [
     "They were exhausted. They ___ all day.",
     "had been working",
     [
      "have been working",
      "had been worked"
     ],
     "Had been + V-ing."
    ],
    [
     "She ___ Spanish for years before she moved to Madrid.",
     "had been learning",
     [
      "had been knowing",
      "has learned"
     ],
     "Learn là động từ hành động nên dùng được dạng tiếp diễn."
    ],
    [
     "Which sentence is correct?",
     "She had had a car for years.",
     [
      "She had been having a car for years.",
      "She had been had a car for years."
     ],
     "Have chỉ sở hữu là động từ trạng thái: had had."
    ],
    [
     "The ground was wet. It ___ all night.",
     "had been raining",
     [
      "rained",
      "has been raining"
     ],
     "Mưa kéo dài trước thời điểm thấy mặt đất ướt: had been raining."
    ]
   ],
   "gaps": [
    [
     "I was tired because I ___ (study) since six.",
     [
      "had been studying"
     ],
     "",
     "Had been + V-ing."
    ],
    [
     "They ___ (not / wait) long when the bus arrived.",
     [
      "hadn't been waiting",
      "had not been waiting"
     ],
     "",
     "Phủ định: hadn't been waiting."
    ],
    [
     "How long ___ you been driving when the car broke down?",
     [
      "had"
     ],
     "",
     "Câu hỏi: How long had you been driving."
    ],
    [
     "He had been running ___ an hour before he stopped.",
     [
      "for"
     ],
     "",
     "An hour là khoảng thời gian nên dùng for."
    ]
   ],
   "sentences": [
    [
     "When she arrived, I had been waiting for two hours.",
     "Khi cô ấy đến, tôi đã đợi được hai tiếng rồi."
    ],
    [
     "His eyes were red because he had been crying.",
     "Mắt anh ấy đỏ vì anh ấy đã khóc."
    ],
    [
     "She had been learning Spanish for years before she moved to Madrid.",
     "Cô ấy đã học tiếng Tây Ban Nha nhiều năm trước khi chuyển đến Madrid."
    ],
    [
     "They hadn't been waiting long when the bus came.",
     "Họ chưa đợi lâu thì xe buýt đến."
    ],
    [
     "How long had you been driving when the car broke down?",
     "Bạn đã lái xe bao lâu thì xe hỏng?"
    ]
   ]
  },
  {
   "id": "wh-b2-future-continuous-perfect",
   "group": 10,
   "grade": 10,
   "icon": "⏱️",
   "title": "Future continuous & future perfect",
   "en": "Thì",
   "desc": "Future continuous (will be + V-ing) nói về việc đang diễn ra tại một thời điểm trong tương lai, hoặc hỏi lịch sự về kế hoạch.",
   "formula": [
    [
     "Công thức",
     "will be + V-ing · will have + V3 · will have been + V-ing"
    ],
    [
     "Future continuous",
     "S + will be + V-ing"
    ],
    [
     "Future perfect",
     "S + will have + V3"
    ],
    [
     "Phủ định",
     "S + won't be + V-ing · S + won't have + V3"
    ],
    [
     "Câu hỏi lịch sự",
     "Will + S + be + V-ing?"
    ]
   ],
   "grammar": [
    [
     "Việc đang diễn ra tại một thời điểm tương lai",
     "Hình dung mình đang làm việc đó vào lúc ấy.",
     "This time tomorrow, I will be lying on a beach. | Don't call at 8. I'll be having dinner."
    ],
    [
     "Việc sẽ hoàn thành trước một mốc",
     "Dùng với by + mốc, by the time + mệnh đề.",
     "By next June, she will have finished her degree. | By the time you arrive, we will have left."
    ],
    [
     "Nhấn mạnh độ dài đến mốc tương lai",
     "Dùng will have been + V-ing với for.",
     "Next year he will have been working here for 20 years."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định mốc tương lai: Có at + giờ, this time tomorrow hay by + mốc? 2) Chọn đang diễn ra hay đã xong: Đang diễn ra thì dùng will be + V-ing. Đã xong trước mốc thì dùng will have + V3. 3) Nhìn từ báo hiệu: By và by the time gần như luôn đi với future perfect.",
     "this time tomorrow → continuous · by Friday → perfect | will be working · will have finished | by the time you arrive"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I will have been finish by five. Đúng: I will have finished by five. (Future perfect là will have + V3.) Sai: By the time you arrive, we will leave. Đúng: By the time you arrive, we will have left. (By the time chỉ việc xong trước mốc nên cần future perfect.) Sai: By the time you will arrive, we will have left. Đúng: By the time you arrive, we will have left. (Mệnh đề thời gian dùng hiện tại đơn, không dùng will.) Sai: At nine tomorrow I will working. Đúng: At nine tomorrow I will be working. (Thiếu be: will be working.)",
     "I will have finished by five. | By the time you arrive, we will have left. | By the time you arrive, we will have left. | At nine tomorrow I will be working."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Mốc tương lai là một thời điểm hay một hạn chót (by)? · Việc đang diễn ra hay đã xong? · Mệnh đề thời gian đã ở hiện tại đơn chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "This time tomorrow, I ___ on a beach.",
     "will be lying",
     [
      "will lie",
      "will have lain"
     ],
     "Đang diễn ra tại thời điểm tương lai: will be lying."
    ],
    [
     "By next June, she ___ her degree.",
     "will have finished",
     [
      "will finish",
      "will be finishing"
     ],
     "By + mốc tương lai: will have finished."
    ],
    [
     "Don't call at 8. I ___ dinner.",
     "will be having",
     [
      "will have had",
      "had"
     ],
     "Việc đang diễn ra lúc 8 giờ: will be having."
    ],
    [
     "Which sentence is correct?",
     "I will have finished by five.",
     [
      "I will have been finish by five.",
      "I will has finished by five."
     ],
     "Will have + V3."
    ],
    [
     "Next year he ___ in this company for 20 years.",
     "will have worked",
     [
      "will work",
      "is working"
     ],
     "Khoảng thời gian tính đến một mốc tương lai: will have worked."
    ],
    [
     "At midnight, they ___ on the train.",
     "will be sleeping",
     [
      "will sleep",
      "will have slept"
     ],
     "Đang diễn ra lúc nửa đêm: will be sleeping."
    ]
   ],
   "gaps": [
    [
     "By 2030, I ___ (graduate) from university.",
     [
      "will have graduated"
     ],
     "",
     "By + mốc tương lai: will have graduated."
    ],
    [
     "This time next week, we ___ (fly) to Rome.",
     [
      "will be flying"
     ],
     "",
     "Đang diễn ra tại thời điểm tương lai: will be flying."
    ],
    [
     "She ___ (not / finish) the report by Friday.",
     [
      "won't have finished",
      "will not have finished"
     ],
     "",
     "Phủ định future perfect: won't have finished."
    ],
    [
     "___ you be using the laptop tonight?",
     [
      "Will"
     ],
     "",
     "Câu hỏi lịch sự: Will you be using."
    ]
   ],
   "sentences": [
    [
     "This time tomorrow, I will be lying on a beach.",
     "Giờ này ngày mai, tôi sẽ đang nằm trên bãi biển."
    ],
    [
     "By next June, she will have finished her degree.",
     "Đến tháng sáu năm sau, cô ấy sẽ học xong đại học."
    ],
    [
     "Don't call at eight. I'll be having dinner.",
     "Đừng gọi lúc tám giờ. Tôi sẽ đang ăn tối."
    ],
    [
     "Next year he will have worked here for twenty years.",
     "Sang năm anh ấy sẽ làm ở đây tròn hai mươi năm."
    ],
    [
     "Will you be using the car this evening?",
     "Tối nay bạn có dùng xe không?"
    ]
   ]
  },
  {
   "id": "wh-b2-third-conditional",
   "group": 10,
   "grade": 10,
   "icon": "🔀",
   "title": "Third conditional",
   "en": "Câu điều kiện",
   "desc": "Câu điều kiện loại 3 nói về điều không có thật trong quá khứ, tức là điều kiện đã không xảy ra và kết quả tưởng tượng của nó.",
   "formula": [
    [
     "Công thức",
     "If + had + V3, S + would have + V3"
    ],
    [
     "Khẳng định",
     "If + S + had + V3, S + would have + V3"
    ],
    [
     "Phủ định",
     "If + S + hadn't + V3, S + wouldn't have + V3"
    ],
    [
     "Đảo vế",
     "S + would have + V3 + if + S + had + V3"
    ],
    [
     "Câu hỏi",
     "What would you have done if + S + had + V3?"
    ]
   ],
   "grammar": [
    [
     "Nói về điều không xảy ra trong quá khứ",
     "Thực tế trái ngược với điều kiện.",
     "If I had studied harder, I would have passed the exam."
    ],
    [
     "Bày tỏ tiếc nuối hoặc trách móc",
     "Nhìn lại quyết định đã qua.",
     "If you had told me, I would have helped you."
    ],
    [
     "Đoán kết quả khác của quá khứ",
     "Có thể dùng could have hoặc might have thay would have.",
     "If it hadn't rained, we could have had a picnic."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định sự thật trong quá khứ: Điều kiện đã không xảy ra hoặc đã khác đi. 2) Chia mệnh đề if ở past perfect: Không dùng would have trong mệnh đề if. 3) Chia mệnh đề kết quả: Would have + V3 (hoặc could/might have + V3).",
     "Tôi không học chăm → tôi trượt | If I had studied (không nói If I would have studied) | I would have passed."
    ],
    [
     "Lỗi thường gặp",
     "Sai: If he would have called, I would have answered. Đúng: If he had called, I would have answered. (Không dùng would have trong mệnh đề if.) Sai: If I knew, I would have told you. (nói về quá khứ) Đúng: If I had known, I would have told you. (Quá khứ không có thật dùng past perfect trong mệnh đề if.) Sai: If she had studied, she would passed. Đúng: If she had studied, she would have passed. (Thiếu have: would have + V3.) Sai: If it had rained, we would stay home. Đúng: If it had rained, we would have stayed home. (Kết quả trong quá khứ cần would have + V3.)",
     "If he had called, I would have answered. | If I had known, I would have told you. | If she had studied, she would have passed. | If it had rained, we would have stayed home."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Điều kiện này đã không xảy ra trong quá khứ? · Mệnh đề if đã ở past perfect chưa? · Mệnh đề kết quả đã là would have + V3 chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "If I ___ harder, I would have passed the exam.",
     "had studied",
     [
      "studied",
      "would study"
     ],
     "Mệnh đề if loại 3: past perfect."
    ],
    [
     "If she had known, she ___ you.",
     "would have told",
     [
      "would tell",
      "had told"
     ],
     "Kết quả: would have + V3."
    ],
    [
     "We would have arrived on time if we ___ the bus.",
     "hadn't missed",
     [
      "didn't miss",
      "wouldn't miss"
     ],
     "Mệnh đề if phủ định: hadn't missed."
    ],
    [
     "'I didn't go because I was ill.' = If I ___ ill, I would have gone.",
     "hadn't been",
     [
      "wasn't",
      "weren't"
     ],
     "Quá khứ không có thật: hadn't been."
    ],
    [
     "Which sentence is correct?",
     "If he had called, I would have answered.",
     [
      "If he would have called, I would have answered.",
      "If he called, I would have answered."
     ],
     "If + past perfect, would have + V3."
    ],
    [
     "What would you have done if you ___ the money?",
     "had found",
     [
      "found",
      "would find"
     ],
     "Mệnh đề if loại 3: had found."
    ]
   ],
   "gaps": [
    [
     "If they ___ (leave) earlier, they wouldn't have missed the train.",
     [
      "had left"
     ],
     "",
     "Past perfect: had left."
    ],
    [
     "I ___ (not / buy) it if I had known the price.",
     [
      "wouldn't have bought",
      "would not have bought"
     ],
     "",
     "Phủ định mệnh đề kết quả: wouldn't have bought."
    ],
    [
     "If it ___ rained, we would have had the picnic.",
     [
      "hadn't",
      "had not"
     ],
     "",
     "Phủ định past perfect: hadn't rained."
    ],
    [
     "She would have been angry if you ___ (tell) her.",
     [
      "had told"
     ],
     "",
     "Mệnh đề if loại 3: had told."
    ]
   ],
   "sentences": [
    [
     "If I had studied harder, I would have passed the exam.",
     "Nếu tôi học chăm hơn, tôi đã đậu kỳ thi."
    ],
    [
     "If she had known, she would have told you.",
     "Nếu cô ấy biết thì cô ấy đã nói với bạn."
    ],
    [
     "We would have arrived on time if we hadn't missed the bus.",
     "Chúng tôi đã đến đúng giờ nếu không lỡ xe buýt."
    ],
    [
     "If it hadn't rained, we could have had a picnic.",
     "Nếu trời không mưa thì chúng tôi đã có thể đi dã ngoại."
    ],
    [
     "What would you have done if you had found the money?",
     "Nếu bạn nhặt được số tiền đó thì bạn đã làm gì?"
    ]
   ]
  },
  {
   "id": "wh-b2-mixed-conditionals",
   "group": 10,
   "grade": 10,
   "icon": "🔀",
   "title": "Mixed conditionals",
   "en": "Câu điều kiện",
   "desc": "Câu điều kiện hỗn hợp trộn thời gian của hai vế. Dạng thứ nhất: điều kiện trong quá khứ dẫn đến kết quả ở hiện tại, If + past perfect, would + V.",
   "formula": [
    [
     "Công thức",
     "If + had + V3, would + V · If + past simple, would have + V3"
    ],
    [
     "Quá khứ → hiện tại",
     "If + S + had + V3, S + would + V"
    ],
    [
     "Hiện tại → quá khứ",
     "If + S + V2/were, S + would have + V3"
    ],
    [
     "Dùng could / might",
     "... could + V / might have + V3"
    ],
    [
     "Đảo vế",
     "S + would ... + if + ..."
    ]
   ],
   "grammar": [
    [
     "Quá khứ ảnh hưởng đến hiện tại",
     "Việc đã không xảy ra khiến hiện tại khác đi.",
     "If I had studied medicine, I would be a doctor now."
    ],
    [
     "Đặc điểm hiện tại giải thích quá khứ",
     "Tính cách hoặc hoàn cảnh bây giờ ảnh hưởng đến việc đã xảy ra.",
     "If she were more careful, she wouldn't have broken the vase."
    ],
    [
     "Nói tiếc nuối",
     "Nhìn lại quyết định cũ và hệ quả đến nay.",
     "If we had taken a taxi, we would be home now."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định thời gian của điều kiện: Điều kiện thuộc quá khứ hay hiện tại? 2) Xác định thời gian của kết quả: Kết quả thuộc hiện tại hay quá khứ? 3) Ghép đúng dạng: Quá khứ → hiện tại: had V3 + would V. Hiện tại → quá khứ: V2 + would have V3.",
     "tôi không học y (quá khứ) | tôi không phải bác sĩ (hiện tại) | If I had studied medicine, I would be a doctor now."
    ],
    [
     "Lỗi thường gặp",
     "Sai: If I studied medicine, I would be a doctor now. (nói về quá khứ) Đúng: If I had studied medicine, I would be a doctor now. (Điều kiện thuộc quá khứ nên dùng past perfect.) Sai: If I had slept well, I wouldn't have been tired now. Đúng: If I had slept well, I wouldn't be tired now. (Kết quả ở hiện tại nên dùng would + V, không dùng would have.) Sai: If he is not shy, he would have gone. Đúng: If he weren't shy, he would have gone. (Đặc điểm hiện tại không có thật dùng were/past simple.) Sai: If I would have money, I would have bought it. Đúng: If I had money, I would have bought it. (Không dùng would trong mệnh đề if.)",
     "If I had studied medicine, I would be a doctor now. | If I had slept well, I wouldn't be tired now. | If he weren't shy, he would have gone. | If I had money, I would have bought it."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Điều kiện thuộc thời gian nào? · Kết quả thuộc thời gian nào? · Đã ghép đúng dạng của hai vế chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "If I had studied medicine, I ___ a doctor now.",
     "would be",
     [
      "would have been",
      "will be"
     ],
     "Kết quả ở hiện tại: would be."
    ],
    [
     "If she were more careful, she ___ the vase yesterday.",
     "wouldn't have broken",
     [
      "wouldn't break",
      "hadn't broken"
     ],
     "Kết quả ở quá khứ: wouldn't have broken."
    ],
    [
     "If we had taken a taxi, we ___ here now.",
     "would be",
     [
      "would have been",
      "are"
     ],
     "Kết quả ở hiện tại (now): would be."
    ],
    [
     "If he weren't so shy, he ___ to the party last night.",
     "would have gone",
     [
      "would go",
      "went"
     ],
     "Kết quả ở quá khứ (last night): would have gone."
    ],
    [
     "Which sentence is correct?",
     "If I had eaten breakfast, I wouldn't be hungry now.",
     [
      "If I ate breakfast, I wouldn't have been hungry now.",
      "If I had eaten breakfast, I wouldn't have hungry now."
     ],
     "Quá khứ → hiện tại: had V3, would V."
    ],
    [
     "'I'm tired because I didn't sleep.' = If I ___, I wouldn't be tired.",
     "had slept",
     [
      "slept",
      "would sleep"
     ],
     "Điều kiện thuộc quá khứ: had slept."
    ]
   ],
   "gaps": [
    [
     "If I had taken that job, I ___ (live) in Paris now.",
     [
      "would be living",
      "would live"
     ],
     "",
     "Kết quả ở hiện tại: would live hoặc would be living."
    ],
    [
     "If he ___ (be) more patient, he wouldn't have lost his temper.",
     [
      "were",
      "was"
     ],
     "",
     "Đặc điểm hiện tại không có thật: were (hoặc was trong văn nói)."
    ],
    [
     "If they had saved money, they ___ (be) rich now.",
     [
      "would be"
     ],
     "",
     "Kết quả ở hiện tại: would be."
    ],
    [
     "If I ___ (not / be) so busy, I would have helped you yesterday.",
     [
      "weren't",
      "wasn't",
      "were not",
      "was not"
     ],
     "",
     "Tình trạng hiện tại không có thật: weren't (hoặc wasn't)."
    ]
   ],
   "sentences": [
    [
     "If I had studied medicine, I would be a doctor now.",
     "Nếu hồi đó tôi học y, bây giờ tôi đã là bác sĩ."
    ],
    [
     "If we had taken a taxi, we would be here now.",
     "Nếu chúng ta đã đi taxi thì giờ chúng ta đã ở đây rồi."
    ],
    [
     "If she were more careful, she wouldn't have broken the vase.",
     "Nếu cô ấy cẩn thận hơn thì cô ấy đã không làm vỡ bình."
    ],
    [
     "If he weren't so shy, he would have gone to the party last night.",
     "Nếu anh ấy không quá nhút nhát thì tối qua anh ấy đã đến buổi tiệc."
    ],
    [
     "I would be rich now if I had bought that land.",
     "Bây giờ tôi đã giàu nếu hồi đó tôi mua mảnh đất ấy."
    ]
   ]
  },
  {
   "id": "wh-b2-wish-if-only",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Wish & if only",
   "en": "Câu điều ước",
   "desc": "Wish và if only diễn tả điều ước hoặc sự tiếc nuối. Ước về hiện tại dùng past simple (I wish I had more time). Ước về quá khứ dùng past perfect (I wish I had studied).",
   "formula": [
    [
     "Công thức",
     "wish/if only + past simple · past perfect · would + V"
    ],
    [
     "Hiện tại",
     "wish/if only + S + past simple"
    ],
    [
     "Với be",
     "wish/if only + S + were"
    ],
    [
     "Quá khứ",
     "wish/if only + S + had + V3"
    ],
    [
     "Wish + would",
     "wish/if only + S + would + V"
    ]
   ],
   "grammar": [
    [
     "Ước điều không có thật ở hiện tại",
     "Thực tế trái với điều ước.",
     "I wish I had more free time. | If only I knew the answer!"
    ],
    [
     "Tiếc nuối chuyện đã qua",
     "Dùng past perfect.",
     "She wishes she had gone to the party. | If only we hadn't argued last night!"
    ],
    [
     "Phàn nàn hoặc mong ai đó thay đổi",
     "Wish + would nói về hành vi gây khó chịu hoặc điều có thể thay đổi.",
     "I wish you would stop making that noise. | I wish it would stop raining."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định thời gian của điều ước: Hiện tại, quá khứ hay mong người khác thay đổi hành vi? 2) Lùi thì một bậc: Hiện tại → past simple. Quá khứ → past perfect. 3) Chú ý can và will: Can → could. Will → would.",
     "hiện tại → past simple | I don't have time → I wish I had time. | I wish I could swim."
    ],
    [
     "Lỗi thường gặp",
     "Sai: I wish I am taller. Đúng: I wish I were taller. (Ước điều không có thật nên lùi về past simple/were.) Sai: I wish I would be taller. Đúng: I wish I were taller. (Wish + would dùng cho hành vi hoặc sự việc có thể thay đổi, không dùng cho đặc điểm bản thân.) Sai: He wishes he passed the exam. (đã trượt) Đúng: He wishes he had passed the exam. (Tiếc nuối chuyện đã qua dùng past perfect.) Sai: I wish I can swim. Đúng: I wish I could swim. (Can phải lùi thành could.)",
     "I wish I were taller. | I wish I were taller. | He wishes he had passed the exam. | I wish I could swim."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Điều ước nói về hiện tại, quá khứ hay hành vi của ai đó? · Đã lùi thì đúng chưa? · Can/will đã đổi thành could/would chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I wish I ___ more free time.",
     "had",
     [
      "have",
      "would have"
     ],
     "Ước về hiện tại: past simple."
    ],
    [
     "She wishes she ___ to the party last night.",
     "had gone",
     [
      "went",
      "would go"
     ],
     "Tiếc nuối chuyện đã qua: past perfect."
    ],
    [
     "I wish it ___ raining. I want to go out.",
     "would stop",
     [
      "stops",
      "stopped"
     ],
     "Mong sự việc thay đổi: wish + would."
    ],
    [
     "If only I ___ the answer!",
     "knew",
     [
      "know",
      "would know"
     ],
     "If only về hiện tại: past simple."
    ],
    [
     "Which sentence is correct?",
     "I wish I were taller.",
     [
      "I wish I would be taller.",
      "I wish I am taller."
     ],
     "Ước về đặc điểm hiện tại: were."
    ],
    [
     "He wishes he ___ the exam. He failed it.",
     "had passed",
     [
      "passed",
      "would pass"
     ],
     "Chuyện đã qua: had passed."
    ]
   ],
   "gaps": [
    [
     "I wish I ___ (can) speak French.",
     [
      "could"
     ],
     "",
     "Can → could."
    ],
    [
     "If only we ___ (not / argue) last night!",
     [
      "hadn't argued",
      "had not argued"
     ],
     "",
     "Tiếc nuối quá khứ: hadn't argued."
    ],
    [
     "I wish you ___ (stop) making that noise.",
     [
      "would stop"
     ],
     "",
     "Phàn nàn: wish + would."
    ],
    [
     "She wishes she ___ (live) in a bigger house.",
     [
      "lived"
     ],
     "",
     "Ước về hiện tại: past simple."
    ]
   ],
   "sentences": [
    [
     "I wish I had more free time.",
     "Ước gì tôi có nhiều thời gian rảnh hơn."
    ],
    [
     "She wishes she had gone to the party last night.",
     "Cô ấy ước gì tối qua mình đã đến bữa tiệc."
    ],
    [
     "I wish it would stop raining.",
     "Ước gì trời tạnh mưa."
    ],
    [
     "If only I knew the answer!",
     "Giá mà tôi biết câu trả lời!"
    ],
    [
     "I wish I could speak French.",
     "Ước gì tôi nói được tiếng Pháp."
    ]
   ]
  },
  {
   "id": "wh-b2-passive-modals-reporting",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Passive with modals & reporting verbs",
   "en": "Thể bị động",
   "desc": "Bị động với động từ khuyết thiếu: modal + be + V3 (hiện tại, tương lai) và modal + have been + V3 (quá khứ).",
   "formula": [
    [
     "Công thức",
     "modal + be + V3 · modal + have been + V3 · It is said that ... · S + is said to V"
    ],
    [
     "Modal bị động hiện tại",
     "modal + be + V3"
    ],
    [
     "Modal bị động quá khứ",
     "modal + have been + V3"
    ],
    [
     "It is said that",
     "It is said/thought/believed/reported that + mệnh đề"
    ],
    [
     "Chủ ngữ + is said to",
     "S + is said/thought/believed + to V (hiện tại) · to have V3 (quá khứ)"
    ]
   ],
   "grammar": [
    [
     "Nói điều cần, có thể hoặc không được làm",
     "Modal giữ nguyên, thêm be + V3.",
     "The work must be finished by Friday. | Tickets can be bought online."
    ],
    [
     "Nói điều đáng ra đã phải làm",
     "Dùng modal + have been + V3.",
     "The mistake should have been noticed earlier."
    ],
    [
     "Đưa tin về điều người ta nói hoặc tin",
     "Dùng It is said that hoặc chủ ngữ + is said to.",
     "It is said that the company will close. | He is believed to be the richest man in town."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định đối tượng chịu tác động: Đưa danh từ chịu tác động lên làm chủ ngữ. 2) Thêm modal + be + V3: Quá khứ thì dùng modal + have been + V3. 3) Với reporting verbs, chọn một trong hai cấu trúc: It is said that ... hoặc S + is said to + V.",
     "The tickets | can be bought · should have been bought | He is said to live in Canada."
    ],
    [
     "Lỗi thường gặp",
     "Sai: The room can be use for meetings. Đúng: The room can be used for meetings. (Sau be dùng V3.) Sai: The tickets can buy online. Đúng: The tickets can be bought online. (Thiếu be trong cấu trúc modal bị động.) Sai: He is said live in Canada. Đúng: He is said to live in Canada. (Thiếu to sau is said.) Sai: The bridge is believed to be built in 1850. Đúng: The bridge is believed to have been built in 1850. (Việc đã xảy ra trong quá khứ cần to have been + V3.)",
     "The room can be used for meetings. | The tickets can be bought online. | He is said to live in Canada. | The bridge is believed to have been built in 1850."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ là đối tượng chịu tác động chưa? · Đã có be (hoặc have been) trước V3 chưa? · Với say, think, believe: đã dùng It is ... that hoặc is ... to chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "The work ___ by Friday.",
     "must be finished",
     [
      "must finish",
      "must finished"
     ],
     "Modal bị động: must be + V3."
    ],
    [
     "The mistake ___ earlier.",
     "should have been noticed",
     [
      "should have noticed",
      "should be noticed"
     ],
     "Quá khứ bị động: should have been + V3."
    ],
    [
     "It ___ that the company will close.",
     "is said",
     [
      "says",
      "is saying"
     ],
     "It is said that ..."
    ],
    [
     "He is ___ to be the richest man in town.",
     "thought",
     [
      "think",
      "thinking"
     ],
     "Is thought to + V."
    ],
    [
     "Which sentence is correct?",
     "The room can be used for meetings.",
     [
      "The room can be use for meetings.",
      "The room can used for meetings."
     ],
     "Can be + V3."
    ],
    [
     "'People say she is a genius.' =",
     "She is said to be a genius.",
     [
      "She says to be a genius.",
      "She is saying a genius."
     ],
     "S + is said to + V."
    ]
   ],
   "gaps": [
    [
     "The tickets can ___ bought online.",
     [
      "be"
     ],
     "",
     "Can be + V3."
    ],
    [
     "The old bridge is believed ___ built in 1850.",
     [
      "to have been"
     ],
     "",
     "Việc ở quá khứ: to have been + V3."
    ],
    [
     "Smoking must ___ be allowed here. (cấm)",
     [
      "not"
     ],
     "",
     "Must not be allowed: không được phép."
    ],
    [
     "He is said ___ (live) in Canada now.",
     [
      "to live"
     ],
     "",
     "Is said to + V."
    ]
   ],
   "sentences": [
    [
     "The work must be finished by Friday.",
     "Công việc này phải hoàn thành trước thứ sáu."
    ],
    [
     "The mistake should have been noticed earlier.",
     "Lỗi này lẽ ra phải được phát hiện sớm hơn."
    ],
    [
     "It is said that the company will close.",
     "Nghe nói công ty sẽ đóng cửa."
    ],
    [
     "He is believed to be the richest man in town.",
     "Người ta tin ông ấy là người giàu nhất thị trấn."
    ],
    [
     "The old bridge is believed to have been built in 1850.",
     "Người ta tin cây cầu cũ được xây năm 1850."
    ]
   ]
  },
  {
   "id": "wh-b2-causative-have-get",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Causative: have & get something done",
   "en": "Thể bị động",
   "desc": "Cấu trúc nhờ vả hoặc thuê người khác làm một việc cho mình: have/get + vật + V3. Dạng này cũng dùng khi điều không may xảy ra với mình (have my phone stolen).",
   "formula": [
    [
     "Công thức",
     "have/get + vật + V3 · have + người + V · get + người + to V"
    ],
    [
     "Have something done",
     "have + vật + V3"
    ],
    [
     "Get something done",
     "get + vật + V3"
    ],
    [
     "Have someone do",
     "have + người + V (nguyên mẫu)"
    ],
    [
     "Get someone to do",
     "get + người + to V"
    ]
   ],
   "grammar": [
    [
     "Thuê hoặc nhờ người làm dịch vụ",
     "Việc do người khác làm cho mình.",
     "I'm going to have my hair cut tomorrow. | She had her car repaired last week."
    ],
    [
     "Nói điều không may",
     "Điều xảy ra với mình, ngoài ý muốn.",
     "He had his phone stolen on the bus."
    ],
    [
     "Nêu người làm",
     "Have + người + V, get + người + to V.",
     "We had the electrician fix the light. | She got her brother to do her homework."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ai làm: Nếu người làm không quan trọng thì bỏ qua, dùng have/get + vật + V3. 2) Chia have/get theo thì: Chia như động từ thường, V3 giữ nguyên. 3) Nếu nêu người làm, đổi dạng động từ sau: Have + người + V. Get + người + to V.",
     "have my hair cut | had my car repaired · is having the roof fixed | had him fix · got him to fix"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I cut my hair yesterday at the salon. Đúng: I had my hair cut yesterday at the salon. (Người khác cắt tóc cho mình nên cần cấu trúc causative.) Sai: I need to get the printer fix. Đúng: I need to get the printer fixed. (Sau vật dùng V3.) Sai: She got her brother do her homework. Đúng: She got her brother to do her homework. (Get + người + to V.) Sai: I had the mechanic to check the brakes. Đúng: I had the mechanic check the brakes. (Have + người + V không có to.)",
     "I had my hair cut yesterday at the salon. | I need to get the printer fixed. | She got her brother to do her homework. | I had the mechanic check the brakes."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Việc do người khác làm cho mình không? · Sau vật đã dùng V3 chưa? · Nếu nêu người làm: have + V hay get + to V?",
     ""
    ]
   ],
   "quiz": [
    [
     "I'm going to ___ my hair cut tomorrow.",
     "have",
     [
      "make",
      "do"
     ],
     "Have + vật + V3."
    ],
    [
     "She ___ her car repaired last week.",
     "had",
     [
      "has",
      "made"
     ],
     "Quá khứ: had + vật + V3."
    ],
    [
     "We ___ the electrician fix the light.",
     "had",
     [
      "got",
      "let to"
     ],
     "Have + người + V nguyên mẫu."
    ],
    [
     "I need to get the printer ___.",
     "fixed",
     [
      "fix",
      "fixing"
     ],
     "Get + vật + V3."
    ],
    [
     "Which sentence means a hairdresser cut your hair?",
     "I had my hair cut yesterday at the salon.",
     [
      "I cut my hair yesterday at the salon.",
      "I had cut my hair yesterday at the salon."
     ],
     "Người khác làm cho mình: had my hair cut."
    ],
    [
     "She got her brother ___ her homework.",
     "to do",
     [
      "do",
      "doing"
     ],
     "Get + người + to V."
    ]
   ],
   "gaps": [
    [
     "He had his phone ___ (steal) on the bus.",
     [
      "stolen"
     ],
     "",
     "Have + vật + V3."
    ],
    [
     "We're having the kitchen ___ (paint) next week.",
     [
      "painted"
     ],
     "",
     "Having + vật + V3."
    ],
    [
     "I got my sister ___ help me move.",
     [
      "to"
     ],
     "",
     "Get + người + to V."
    ],
    [
     "She ___ (have) her teeth checked twice a year.",
     [
      "has"
     ],
     "",
     "Present simple ngôi thứ ba: has."
    ]
   ],
   "sentences": [
    [
     "I'm going to have my hair cut tomorrow.",
     "Ngày mai tôi sẽ đi cắt tóc."
    ],
    [
     "She had her car repaired last week.",
     "Tuần trước cô ấy đưa xe đi sửa."
    ],
    [
     "He had his phone stolen on the bus.",
     "Anh ấy bị lấy cắp điện thoại trên xe buýt."
    ],
    [
     "We had the electrician fix the light.",
     "Chúng tôi nhờ thợ điện sửa đèn."
    ],
    [
     "She got her brother to do her homework.",
     "Cô ấy nhờ em trai làm bài tập giúp."
    ]
   ]
  },
  {
   "id": "wh-b2-non-defining-relative-clauses",
   "group": 10,
   "grade": 10,
   "icon": "🔗",
   "title": "Non-defining relative clauses",
   "en": "Mệnh đề quan hệ",
   "desc": "Mệnh đề quan hệ không xác định chỉ thêm thông tin phụ cho danh từ đã rõ nghĩa, nằm giữa hai dấu phẩy và có thể bỏ đi mà câu vẫn đủ nghĩa.",
   "formula": [
    [
     "Công thức",
     "danh từ xác định, who/which/whose/where + mệnh đề, ..."
    ],
    [
     "Who / whose",
     "người, who / whose + ... , ..."
    ],
    [
     "Which / where",
     "vật / nơi chốn, which / where + ... , ..."
    ],
    [
     "Giới từ + whom/which",
     "..., giới từ + whom / which + S + V, ..."
    ],
    [
     "Which cho cả mệnh đề",
     "mệnh đề, which + V"
    ]
   ],
   "grammar": [
    [
     "Thêm thông tin phụ về người",
     "Dùng who, whose hoặc whom với dấu phẩy.",
     "My brother, who lives in Canada, is a doctor. | Mr Lee, whose daughter is a singer, lives next door."
    ],
    [
     "Thêm thông tin phụ về vật hoặc nơi chốn",
     "Dùng which hoặc where.",
     "Hue, where I was born, is a historic city. | Da Nang, which is by the sea, is popular."
    ],
    [
     "Bình luận về cả mệnh đề trước",
     "Which thay cho cả sự việc vừa nói.",
     "He passed the exam, which surprised everyone."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra danh từ đã rõ nghĩa chưa: Tên riêng, my brother, the sun... đã rõ nên dùng không xác định. 2) Đặt dấu phẩy: Dấu phẩy trước và sau mệnh đề. Cuối câu thì dấu chấm đóng lại. 3) Chọn từ quan hệ, không dùng that: Who, whom, whose, which, where.",
     "Hue, ... · my mother, ... | Hue, which is old, is nice. | My car, which is red, is new."
    ],
    [
     "Lỗi thường gặp",
     "Sai: My car, that is red, is new. Đúng: My car, which is red, is new. (Không dùng that trong mệnh đề không xác định.) Sai: My brother who lives in Canada is a doctor. (chỉ có một người anh) Đúng: My brother, who lives in Canada, is a doctor. (Thông tin phụ thì cần dấu phẩy.) Sai: Hue, I was born, is a historic city. Đúng: Hue, where I was born, is a historic city. (Không được bỏ từ quan hệ.) Sai: The woman to who I spoke was kind. Đúng: The woman to whom I spoke was kind. (Giới từ đứng trước thì dùng whom.)",
     "My car, which is red, is new. | My brother, who lives in Canada, is a doctor. | Hue, where I was born, is a historic city. | The woman to whom I spoke was kind."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Thông tin này là thông tin phụ có thể bỏ không? · Đã có dấu phẩy hai bên chưa? · Có dùng that hoặc bỏ từ quan hệ không? Nếu có thì sửa.",
     ""
    ]
   ],
   "quiz": [
    [
     "My brother, ___ lives in Canada, is a doctor.",
     "who",
     [
      "that",
      "which"
     ],
     "Người, không xác định: who."
    ],
    [
     "Hue, ___ I was born, is a historic city.",
     "where",
     [
      "that",
      "what"
     ],
     "Nơi chốn: where."
    ],
    [
     "He passed the exam, ___ surprised everyone.",
     "which",
     [
      "that",
      "what"
     ],
     "Which thay cho cả mệnh đề trước."
    ],
    [
     "Which sentence is correct?",
     "My car, which is red, is new.",
     [
      "My car, that is red, is new.",
      "My car which, is red, is new."
     ],
     "Which với dấu phẩy, không dùng that."
    ],
    [
     "The woman to ___ I spoke was kind.",
     "whom",
     [
      "who",
      "which"
     ],
     "Giới từ + whom."
    ],
    [
     "Mr Lee, ___ daughter is a singer, lives next door.",
     "whose",
     [
      "who",
      "which"
     ],
     "Sở hữu: whose."
    ]
   ],
   "gaps": [
    [
     "Da Nang, ___ I spent my childhood, is a lovely city.",
     [
      "where"
     ],
     "",
     "Nơi chốn: where."
    ],
    [
     "Ms Hoa, with ___ I work, is very kind.",
     [
      "whom"
     ],
     "",
     "Giới từ đứng trước: with whom."
    ],
    [
     "My sister, ___ husband is a chef, lives in Hanoi.",
     [
      "whose"
     ],
     "",
     "Sở hữu: whose."
    ],
    [
     "We stayed at a small hotel, ___ was very cheap.",
     [
      "which"
     ],
     "",
     "Vật, không xác định: which."
    ]
   ],
   "sentences": [
    [
     "My brother, who lives in Canada, is a doctor.",
     "Anh trai tôi, người sống ở Canada, là bác sĩ."
    ],
    [
     "Hue, where I was born, is a historic city.",
     "Huế, nơi tôi sinh ra, là một thành phố lịch sử."
    ],
    [
     "He passed the exam, which surprised everyone.",
     "Anh ấy đậu kỳ thi, điều đó khiến mọi người ngạc nhiên."
    ],
    [
     "Mr Lee, whose daughter is a singer, lives next door.",
     "Ông Lee, người có con gái là ca sĩ, sống cạnh nhà."
    ],
    [
     "Ms Hoa, with whom I work, is very kind.",
     "Cô Hoa, người tôi làm cùng, rất tốt bụng."
    ]
   ]
  },
  {
   "id": "wh-b2-reporting-verbs",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Reporting verbs",
   "en": "Câu gián tiếp",
   "desc": "Reporting verbs vừa thuật lại lời nói vừa cho biết ý định của người nói, nên câu gián tiếp gọn và tự nhiên hơn.",
   "formula": [
    [
     "Công thức",
     "verb + to V · verb + O + to V · verb + V-ing · verb + O + prep + V-ing"
    ],
    [
     "Verb + to V",
     "promise / offer / refuse / agree / threaten + to V"
    ],
    [
     "Verb + O + to V",
     "advise / warn / remind / persuade / invite / tell + O + (not) to V"
    ],
    [
     "Verb + V-ing",
     "suggest / admit / deny / recommend + V-ing"
    ],
    [
     "Verb + (O) + giới từ + V-ing",
     "apologise for / accuse O of / insist on / congratulate O on + V-ing"
    ]
   ],
   "grammar": [
    [
     "Thuật lại lời hứa, đề nghị, từ chối",
     "Dùng promise, offer, refuse, agree + to V.",
     "He offered to help me. | She promised to call me."
    ],
    [
     "Thuật lại lời khuyên, cảnh báo, nhắc nhở",
     "Dùng advise, warn, remind, persuade + người + to V.",
     "She advised me to see a doctor. | He warned us not to touch the wire."
    ],
    [
     "Thuật lại lời thừa nhận, phủ nhận, gợi ý, xin lỗi",
     "Dùng V-ing hoặc giới từ + V-ing.",
     "Tom denied taking my pen. | He apologised for being late."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý định của lời nói: Hứa, đề nghị, khuyên, cảnh báo, phủ nhận, xin lỗi hay gợi ý? 2) Chọn reporting verb phù hợp: Mỗi ý định có động từ riêng. 3) Dùng đúng khuôn theo sau: To V, người + to V, V-ing hoặc giới từ + V-ing tùy động từ.",
     "\"Sorry I'm late\" → xin lỗi | xin lỗi → apologise | apologise for being late"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She suggested me to go. Đúng: She suggested going. / She suggested that I go. (Suggest không đi với người + to V.) Sai: He promised me calling. Đúng: He promised to call me. (Promise + to V.) Sai: He apologised me for being late. Đúng: He apologised for being late. (Apologise for + V-ing, không có người trực tiếp sau apologise.) Sai: She advised to see a doctor. Đúng: She advised me to see a doctor. (Advise cần có người nghe: advise + O + to V.)",
     "She suggested going. / She suggested that I go. | He promised to call me. | He apologised for being late. | She advised me to see a doctor."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Lời nói ban đầu thể hiện ý định gì? · Reporting verb đã chọn có đi với khuôn đó không? · Đã dùng to V, người + to V, V-ing hay giới từ + V-ing đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "'I'll help you,' he said. → He ___ to help me.",
     "offered",
     [
      "suggested",
      "denied"
     ],
     "Offer + to V."
    ],
    [
     "'You should see a doctor,' she said. → She ___ me to see a doctor.",
     "advised",
     [
      "suggested",
      "admitted"
     ],
     "Advise + O + to V."
    ],
    [
     "'Why don't we go to the cinema?' he said. → He ___ going to the cinema.",
     "suggested",
     [
      "persuaded",
      "invited"
     ],
     "Suggest + V-ing."
    ],
    [
     "'I didn't take your pen,' said Tom. → Tom ___ taking my pen.",
     "denied",
     [
      "refused",
      "promised"
     ],
     "Deny + V-ing."
    ],
    [
     "Which sentence is correct?",
     "She suggested going.",
     [
      "She suggested me to go.",
      "She suggested to go."
     ],
     "Suggest + V-ing."
    ],
    [
     "'Sorry I'm late,' he said. → He ___ for being late.",
     "apologised",
     [
      "admitted",
      "agreed"
     ],
     "Apologise for + V-ing."
    ]
   ],
   "gaps": [
    [
     "'I'll call you,' she said. → She promised ___ call me.",
     [
      "to"
     ],
     "",
     "Promise + to V."
    ],
    [
     "'You stole the money!' he said to me. → He accused me ___ stealing the money.",
     [
      "of"
     ],
     "",
     "Accuse O of + V-ing."
    ],
    [
     "'Don't touch the wire,' he said. → He warned us ___ to touch the wire.",
     [
      "not"
     ],
     "",
     "Warn O not to V."
    ],
    [
     "'Yes, I broke it,' said Ann. → Ann admitted ___ (break) it.",
     [
      "breaking",
      "having broken"
     ],
     "",
     "Admit + V-ing (hoặc having + V3)."
    ]
   ],
   "sentences": [
    [
     "He offered to help me.",
     "Anh ấy đề nghị giúp tôi."
    ],
    [
     "She advised me to see a doctor.",
     "Cô ấy khuyên tôi đi khám bác sĩ."
    ],
    [
     "He suggested going to the cinema.",
     "Anh ấy gợi ý đi xem phim."
    ],
    [
     "Tom denied taking my pen.",
     "Tom phủ nhận việc lấy bút của tôi."
    ],
    [
     "He accused me of stealing the money.",
     "Anh ta buộc tội tôi lấy trộm tiền."
    ]
   ]
  },
  {
   "id": "wh-b2-modals-of-past",
   "group": 10,
   "grade": 10,
   "icon": "🔑",
   "title": "Modal verbs in the past",
   "en": "Động từ khuyết thiếu",
   "desc": "Modal + have + V3 nói về điều đã xảy ra hoặc đáng lẽ đã xảy ra trong quá khứ. Should have / ought to have: lẽ ra nên làm (nhưng đã không làm).",
   "formula": [
    [
     "Công thức",
     "should / could / would / needn't / might + have + V3"
    ],
    [
     "Should have",
     "S + should/ought to + have + V3"
    ],
    [
     "Shouldn't have",
     "S + shouldn't + have + V3"
    ],
    [
     "Could have",
     "S + could + have + V3"
    ],
    [
     "Needn't have",
     "S + needn't + have + V3"
    ]
   ],
   "grammar": [
    [
     "Trách móc hoặc tiếc",
     "Việc lẽ ra phải làm hoặc không nên làm.",
     "You should have told me earlier. | I shouldn't have said that."
    ],
    [
     "Nói khả năng đã bỏ lỡ",
     "Có khả năng nhưng đã không xảy ra.",
     "You could have called me. | She could have passed if she had studied."
    ],
    [
     "Nói việc đã làm nhưng không cần thiết",
     "Dùng needn't have + V3.",
     "We needn't have taken a taxi. The station was near."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý nghĩa: Trách móc, tiếc nuối, khả năng bỏ lỡ hay việc thừa? 2) Chọn modal: Should/shouldn't, could, needn't hoặc would. 3) Thêm have + V3: Dạng bất quy tắc cần V3 đúng.",
     "việc thừa → needn't have | could have | go → gone"
    ],
    [
     "Lỗi thường gặp",
     "Sai: You should have went. Đúng: You should have gone. (Sau have dùng V3.) Sai: You should went. Đúng: You should have gone. (Quá khứ cần should have + V3.) Sai: We didn't need to have taken a taxi. Đúng: We needn't have taken a taxi. (Việc đã làm nhưng thừa thì dùng needn't have + V3.) Sai: He shouldn't to have said that. Đúng: He shouldn't have said that. (Sau modal không dùng to.)",
     "You should have gone. | You should have gone. | We needn't have taken a taxi. | He shouldn't have said that."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Việc đã xảy ra hay chỉ là khả năng đã bỏ lỡ? · Đã chọn đúng should, could, needn't chưa? · Đã dùng have + V3 đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "You ___ told me earlier. I was worried.",
     "should have",
     [
      "must have",
      "could"
     ],
     "Trách móc việc đã không làm: should have + V3."
    ],
    [
     "He's late. He ___ the bus.",
     "must have missed",
     [
      "should have missed",
      "needn't have missed"
     ],
     "Suy đoán chắc chắn về quá khứ: must have + V3."
    ],
    [
     "We took a taxi, but it wasn't necessary. We ___ taken a taxi.",
     "needn't have",
     [
      "couldn't have",
      "mustn't have"
     ],
     "Việc đã làm nhưng thừa: needn't have + V3."
    ],
    [
     "She ___ passed if she had studied more.",
     "could have",
     [
      "must have",
      "needn't have"
     ],
     "Khả năng bỏ lỡ: could have + V3."
    ],
    [
     "Which sentence is correct?",
     "You should have gone.",
     [
      "You should have went.",
      "You should went."
     ],
     "Should have + V3 (gone)."
    ],
    [
     "'It was a mistake to say that.' = You ___ said that.",
     "shouldn't have",
     [
      "needn't have",
      "can't have"
     ],
     "Lẽ ra không nên làm: shouldn't have + V3."
    ]
   ],
   "gaps": [
    [
     "I shouldn't ___ told her. It was a secret.",
     [
      "have"
     ],
     "",
     "Shouldn't have + V3."
    ],
    [
     "You ___ have called me! You knew I was waiting. (lẽ ra có thể gọi nhưng đã không)",
     [
      "could"
     ],
     "",
     "Khả năng bỏ lỡ: could have."
    ],
    [
     "They didn't need to hurry. They ___ have hurried. (không cần)",
     [
      "needn't",
      "need not"
     ],
     "",
     "Needn't have + V3."
    ],
    [
     "She ___ have seen us; she walked straight past. (chắc chắn không)",
     [
      "can't",
      "couldn't"
     ],
     "",
     "Suy đoán chắc chắn không phải: can't have + V3."
    ]
   ],
   "sentences": [
    [
     "You should have told me earlier. I was worried.",
     "Lẽ ra bạn nên nói với tôi sớm hơn. Tôi đã lo."
    ],
    [
     "I shouldn't have shouted. I'm sorry.",
     "Lẽ ra tôi không nên quát. Tôi xin lỗi."
    ],
    [
     "You could have been hurt!",
     "Bạn có thể đã bị thương rồi!"
    ],
    [
     "We needn't have taken a taxi. The station was near.",
     "Chúng tôi không cần đi taxi. Ga ở gần mà."
    ],
    [
     "She could have passed if she had studied more.",
     "Cô ấy có thể đã đậu nếu học nhiều hơn."
    ]
   ]
  },
  {
   "id": "wh-b2-participle-clauses",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Participle clauses",
   "en": "Mệnh đề phân từ",
   "desc": "Mệnh đề phân từ rút gọn câu bằng cách bỏ chủ ngữ và dùng phân từ. Hiện tại phân từ (V-ing) cho nghĩa chủ động hoặc đồng thời. Quá khứ phân từ (V3) cho nghĩa bị động.",
   "formula": [
    [
     "Công thức",
     "V-ing (chủ động) · V3 (bị động) · having + V3 (xảy ra trước)"
    ],
    [
     "V-ing đầu câu",
     "V-ing ..., S + V"
    ],
    [
     "V3 đầu câu",
     "V3 ..., S + V"
    ],
    [
     "Having + V3",
     "Having + V3 ..., S + V"
    ],
    [
     "Phủ định",
     "Not + V-ing / Not having + V3"
    ]
   ],
   "grammar": [
    [
     "Hai việc xảy ra cùng lúc",
     "Dùng V-ing.",
     "Walking along the road, I saw an old friend."
    ],
    [
     "Việc xong trước hoặc nguyên nhân",
     "Dùng having + V3 hoặc V-ing mang nghĩa nguyên nhân.",
     "Having eaten dinner, he went for a walk. | Feeling tired, I went to bed early."
    ],
    [
     "Rút gọn mệnh đề quan hệ",
     "V-ing thay cho who/which + V chủ động. V3 thay cho who/which + be + V3.",
     "The boy standing over there is my cousin. | The letter sent yesterday has not arrived."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra chủ ngữ chung: Người/vật thực hiện hai hành động phải là một. 2) Chọn dạng phân từ: Chủ động → V-ing. Bị động → V3. Xảy ra trước → having + V3. 3) Bỏ liên từ và chủ ngữ: Rút câu gọn lại.",
     "Walking along the road, I saw ... (tôi đi và tôi thấy) | Built in 1990 (bị động) | Because I was tired → Feeling tired"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Walking along the road, the rain started. (hai chủ ngữ khác nhau) Đúng: Walking along the road, I got caught in the rain. (Người đi bộ phải là chủ ngữ của mệnh đề chính.) Sai: Felt tired, I went to bed early. Đúng: Feeling tired, I went to bed early. (Chủ động nên dùng V-ing.) Sai: Building in 1990, the bridge is still strong. Đúng: Built in 1990, the bridge is still strong. (Cây cầu được xây nên dùng V3 (bị động).) Sai: Eating dinner, he went out for a walk. (ăn xong rồi mới đi) Đúng: Having eaten dinner, he went out for a walk. (Việc xảy ra trước dùng having + V3.)",
     "Walking along the road, I got caught in the rain. | Feeling tired, I went to bed early. | Built in 1990, the bridge is still strong. | Having eaten dinner, he went out for a walk."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Hai mệnh đề có cùng chủ ngữ không? · Nghĩa chủ động, bị động hay xảy ra trước? · Đã bỏ liên từ và chủ ngữ chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ along the road, I saw an old friend.",
     "Walking",
     [
      "Walk",
      "Walked"
     ],
     "Chủ động, cùng lúc: V-ing."
    ],
    [
     "___ in 1990, the bridge is still strong.",
     "Built",
     [
      "Building",
      "Having built"
     ],
     "Nghĩa bị động: V3."
    ],
    [
     "___ dinner, he went out for a walk.",
     "Having eaten",
     [
      "Eaten",
      "To eat"
     ],
     "Việc xảy ra trước: having + V3."
    ],
    [
     "The boy ___ over there is my cousin.",
     "standing",
     [
      "stands",
      "stood"
     ],
     "Rút gọn mệnh đề quan hệ chủ động: V-ing."
    ],
    [
     "Which sentence is correct?",
     "Feeling tired, I went to bed early.",
     [
      "Felt tired, I went to bed early.",
      "Feel tired, I went to bed early."
     ],
     "Chủ động, nguyên nhân: Feeling."
    ],
    [
     "The letter ___ yesterday has not arrived.",
     "sent",
     [
      "sending",
      "sends"
     ],
     "Rút gọn bị động: sent."
    ]
   ],
   "gaps": [
    [
     "___ (open) the door, she saw a cat.",
     [
      "Opening",
      "Having opened"
     ],
     "",
     "Chủ động: Opening."
    ],
    [
     "The cake ___ (make) by my mother was delicious.",
     [
      "made"
     ],
     "",
     "Rút gọn bị động: made."
    ],
    [
     "___ (not / know) the way, we asked a stranger.",
     [
      "Not knowing"
     ],
     "",
     "Phủ định: Not knowing."
    ],
    [
     "Most of the people ___ (invite) to the party didn't come.",
     [
      "invited"
     ],
     "",
     "Rút gọn bị động: invited."
    ]
   ],
   "sentences": [
    [
     "Walking along the road, I saw an old friend.",
     "Đang đi dọc con đường, tôi gặp một người bạn cũ."
    ],
    [
     "Built in 1990, the bridge is still strong.",
     "Được xây năm 1990, cây cầu vẫn còn vững chắc."
    ],
    [
     "Having eaten dinner, he went for a walk.",
     "Ăn tối xong, anh ấy đi dạo."
    ],
    [
     "The boy standing over there is my cousin.",
     "Cậu bé đang đứng đằng kia là em họ tôi."
    ],
    [
     "Not knowing the way, we asked a stranger.",
     "Vì không biết đường, chúng tôi hỏi một người lạ."
    ]
   ]
  },
  {
   "id": "wh-b2-contrast-concession",
   "group": 10,
   "grade": 10,
   "icon": "🔗",
   "title": "Contrast & concession",
   "en": "Liên từ",
   "desc": "Diễn đạt sự đối lập ở trình độ cao hơn but. Although, though, even though + mệnh đề. Despite, in spite of + danh từ hoặc V-ing. While, whereas so sánh hai điều đối lập.",
   "formula": [
    [
     "Công thức",
     "Although + S + V · Despite / In spite of + noun / V-ing · S + V. However, S + V"
    ],
    [
     "Although / though / even though",
     "Although + S + V, S + V"
    ],
    [
     "Despite / in spite of",
     "Despite / In spite of + noun / V-ing"
    ],
    [
     "While / whereas",
     "S + V, whereas / while + S + V"
    ],
    [
     "However / nevertheless",
     "S + V. However, S + V"
    ]
   ],
   "grammar": [
    [
     "Nói điều trái với mong đợi",
     "Dùng although và despite.",
     "Although it was raining, we went out. | Despite the rain, we went out."
    ],
    [
     "So sánh hai điều khác nhau",
     "Dùng while, whereas.",
     "She likes tea, whereas her sister prefers coffee."
    ],
    [
     "Nối hai câu đối lập",
     "However, nevertheless đứng đầu câu sau.",
     "The hotel was cheap. However, it was very comfortable."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định sau chỗ trống là mệnh đề hay cụm danh từ: Mệnh đề (có chủ ngữ và động từ) dùng although. Danh từ hoặc V-ing dùng despite. 2) Chọn loại liên từ: Trong cùng một câu hay hai câu riêng? 3) Chú ý dấu câu: However đứng đầu câu, có dấu phẩy sau.",
     "although it rained · despite the rain | However nối hai câu | However, ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Despite he was tired, he kept working. Đúng: Despite being tired, he kept working. (Despite không đi với mệnh đề có chủ ngữ riêng.) Sai: Despite of the rain, we went out. Đúng: Despite the rain, we went out. (Despite không có of. In spite of mới có of.) Sai: Although it was raining, but we went out. Đúng: Although it was raining, we went out. (Không dùng although và but cùng lúc.) Sai: It was expensive, however I bought it. Đúng: It was expensive. However, I bought it. (However nối hai câu riêng, không nối bằng dấu phẩy.)",
     "Despite being tired, he kept working. | Despite the rain, we went out. | Although it was raining, we went out. | It was expensive. However, I bought it."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Sau chỗ trống là mệnh đề hay danh từ/V-ing? · Có dùng although và but cùng lúc không? · However đã đứng đầu câu và có dấu phẩy sau chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ it was raining, we went out.",
     "Although",
     [
      "Despite",
      "However"
     ],
     "Although + mệnh đề."
    ],
    [
     "___ the rain, we went out.",
     "Despite",
     [
      "Although",
      "Whereas"
     ],
     "Despite + danh từ."
    ],
    [
     "He is rich. ___, he is not happy.",
     "However",
     [
      "Although",
      "Despite"
     ],
     "However nối hai câu."
    ],
    [
     "She likes tea, ___ her sister prefers coffee.",
     "whereas",
     [
      "despite",
      "however"
     ],
     "Whereas so sánh hai điều khác nhau."
    ],
    [
     "Which sentence is correct?",
     "Despite being tired, he kept working.",
     [
      "Despite he was tired, he kept working.",
      "Despite of being tired, he kept working."
     ],
     "Despite + V-ing."
    ],
    [
     "___ of the traffic, we arrived on time.",
     "In spite",
     [
      "Although",
      "Despite of"
     ],
     "In spite of + danh từ."
    ]
   ],
   "gaps": [
    [
     "___ she studied hard, she failed the test.",
     [
      "Although",
      "Though",
      "Even though"
     ],
     "",
     "Although + mệnh đề."
    ],
    [
     "He kept working ___ feeling ill.",
     [
      "despite",
      "in spite of"
     ],
     "",
     "Despite / in spite of + V-ing."
    ],
    [
     "The hotel was cheap. ___, it was very comfortable.",
     [
      "However",
      "Nevertheless"
     ],
     "",
     "However / Nevertheless nối hai câu."
    ],
    [
     "I like cities, ___ my brother likes the countryside.",
     [
      "whereas",
      "while"
     ],
     "",
     "Whereas / while để so sánh."
    ]
   ],
   "sentences": [
    [
     "Although it was raining, we went out.",
     "Mặc dù trời mưa, chúng tôi vẫn ra ngoài."
    ],
    [
     "Despite the rain, we went out.",
     "Mặc cho mưa, chúng tôi vẫn ra ngoài."
    ],
    [
     "Despite being tired, he kept working.",
     "Mặc dù mệt, anh ấy vẫn tiếp tục làm việc."
    ],
    [
     "She likes tea, whereas her sister prefers coffee.",
     "Cô ấy thích trà, còn chị cô ấy thích cà phê hơn."
    ],
    [
     "The hotel was cheap. However, it was very comfortable.",
     "Khách sạn rẻ. Tuy nhiên nó rất thoải mái."
    ]
   ]
  },
  {
   "id": "wh-b2-comparison-structures",
   "group": 10,
   "grade": 10,
   "icon": "⚖️",
   "title": "Comparison structures",
   "en": "So sánh",
   "desc": "Mở rộng cách so sánh: as ... as và not as ... as; bội số (twice as ... as); less ... than; từ nhấn mạnh trước so sánh hơn (much, far, a lot, slightly, a bit);",
   "formula": [
    [
     "Công thức",
     "as + adj + as · the + so sánh hơn, the + so sánh hơn · so sánh hơn and so sánh hơn"
    ],
    [
     "As ... as",
     "as + adj/adv + as · not as/so + adj + as"
    ],
    [
     "Bội số",
     "twice / three times + as + adj + as"
    ],
    [
     "Nhấn mạnh",
     "much / far / a lot / slightly + so sánh hơn"
    ],
    [
     "The ... the ...",
     "The + so sánh hơn + S + V, the + so sánh hơn + S + V"
    ]
   ],
   "grammar": [
    [
     "So sánh bằng và không bằng",
     "As ... as và not as ... as.",
     "She is as tall as her brother. | This laptop is not as expensive as that one."
    ],
    [
     "Nhấn mạnh mức chênh lệch",
     "Much, far, a lot nhấn mạnh nhiều. Slightly, a bit nhấn mạnh ít.",
     "She is much taller than her sister. | It's slightly cheaper."
    ],
    [
     "Nói sự thay đổi tương ứng và tăng dần",
     "Dùng the + so sánh hơn ... the + so sánh hơn hoặc lặp so sánh hơn.",
     "The more you practise, the better you become. | The weather is getting warmer and warmer."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định kiểu so sánh: Bằng, hơn, kém, kép hay tăng dần? 2) Chọn từ nhấn mạnh nếu cần: Dùng much, far, a lot cho chênh lệch lớn. Không dùng very trước so sánh hơn. 3) Kiểm tra dạng so sánh: Tính từ ngắn thêm -er. Tính từ dài thêm more.",
     "càng ... càng ... → the ... the ... | much taller (không nói very taller) | warmer · more expensive"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She is very taller than her sister. Đúng: She is much taller than her sister. (Very không đi trước so sánh hơn.) Sai: He is twice older than me. Đúng: He is twice as old as me. (Bội số dùng twice as ... as.) Sai: The more you practise, more better you become. Đúng: The more you practise, the better you become. (Cả hai vế đều có the.) Sai: It's getting more and more warm. Đúng: It's getting warmer and warmer. (Tính từ ngắn thêm -er, lặp lại, không dùng more and more.)",
     "She is much taller than her sister. | He is twice as old as me. | The more you practise, the better you become. | It's getting warmer and warmer."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã chọn đúng kiểu so sánh chưa? · Tính từ ngắn hay dài để chia so sánh hơn? · Có dùng very trước so sánh hơn không? Nếu có thì đổi sang much.",
     ""
    ]
   ],
   "quiz": [
    [
     "She is ___ taller than her sister.",
     "much",
     [
      "very",
      "most"
     ],
     "Much đứng trước so sánh hơn."
    ],
    [
     "The more you practise, ___ you become.",
     "the better",
     [
      "better",
      "the best"
     ],
     "So sánh kép: the better."
    ],
    [
     "This laptop is not ___ expensive as that one.",
     "as",
     [
      "than",
      "more"
     ],
     "Not as ... as."
    ],
    [
     "The weather is getting ___.",
     "warmer and warmer",
     [
      "warm and warm",
      "more warm"
     ],
     "Tăng dần với tính từ ngắn: warmer and warmer."
    ],
    [
     "Which sentence is correct?",
     "He is twice as old as me.",
     [
      "He is twice older than as me.",
      "He is twice as older as me."
     ],
     "Bội số: twice as old as."
    ],
    [
     "This exam was ___ difficult than the last one.",
     "less",
     [
      "least",
      "fewer"
     ],
     "Less + adj + than."
    ]
   ],
   "gaps": [
    [
     "The earlier we leave, ___ better.",
     [
      "the"
     ],
     "",
     "The + so sánh hơn."
    ],
    [
     "Her English is getting better and ___.",
     [
      "better"
     ],
     "",
     "Better and better."
    ],
    [
     "I'm not ___ tall as my brother.",
     [
      "as",
      "so"
     ],
     "",
     "Not as/so ... as."
    ],
    [
     "It's ___ hotter today than yesterday. (nhiều hơn rõ rệt)",
     [
      "much",
      "far",
      "a lot",
      "way"
     ],
     "",
     "Much / far / a lot nhấn mạnh sự chênh lệch."
    ]
   ],
   "sentences": [
    [
     "She is as tall as her brother.",
     "Cô ấy cao bằng anh trai."
    ],
    [
     "She is much taller than her sister.",
     "Cô ấy cao hơn chị mình nhiều."
    ],
    [
     "The more you practise, the better you become.",
     "Bạn càng luyện tập nhiều thì càng giỏi."
    ],
    [
     "The weather is getting warmer and warmer.",
     "Thời tiết ngày càng ấm hơn."
    ],
    [
     "This exam was less difficult than the last one.",
     "Bài thi này ít khó hơn bài trước."
    ]
   ]
  },
  {
   "id": "wh-b2-quantifiers-determiners",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Quantifiers & determiners",
   "en": "Lượng từ",
   "desc": "Phân biệt các từ chỉ số lượng và xác định: both (cả hai), either (một trong hai), neither (không cái nào trong hai), all, whole, each, every, most, none, few / a few,…",
   "formula": [
    [
     "Công thức",
     "both / either / neither (of) + hai · all / most / none (of) + ba trở lên · few / little"
    ],
    [
     "Both / either / neither",
     "both / either / neither (of) + the/my/these + danh từ số nhiều"
    ],
    [
     "Every / each",
     "every / each + danh từ số ít + động từ số ít"
    ],
    [
     "All / whole / most",
     "all (the) + danh từ · the whole + danh từ số ít · most + danh từ"
    ],
    [
     "Few / a few / little / a little",
     "few / a few + đếm được số nhiều · little / a little + không đếm được"
    ]
   ],
   "grammar": [
    [
     "Nói về hai đối tượng",
     "Both = cả hai, either = một trong hai, neither = không cái nào.",
     "Both of my brothers are teachers. | Neither of the answers is correct."
    ],
    [
     "Nói về cả nhóm",
     "All, whole, every, each, most.",
     "Every student has a laptop. | We spent the whole day at the beach."
    ],
    [
     "Nói về lượng ít",
     "Few/little nhấn mạnh gần như không có. A few/a little nhấn mạnh có một ít.",
     "She has few friends here, so she feels lonely. | I have a little money left."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định hai hay nhiều đối tượng: Hai đối tượng thì dùng both/either/neither. 2) Xác định danh từ đếm được hay không: Few/a few cho đếm được. Little/a little cho không đếm được. 3) Kiểm tra hòa hợp chủ vị: Every, each, either, neither đi với động từ số ít.",
     "two brothers → both | few chairs · little money | Every student has"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Most of people like music. Đúng: Most people like music. (Nói chung chung thì dùng most + danh từ, không có of the.) Sai: Every students have a laptop. Đúng: Every student has a laptop. (Every + danh từ số ít + động từ số ít.) Sai: I have a few money. Đúng: I have a little money. (Money là danh từ không đếm được nên dùng a little.) Sai: None of the two answers is correct. Đúng: Neither of the two answers is correct. (Hai đối tượng dùng neither, không dùng none.)",
     "Most people like music. | Every student has a laptop. | I have a little money. | Neither of the two answers is correct."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Có hai đối tượng hay nhiều hơn? · Danh từ đếm được hay không đếm được? · Động từ đã hòa hợp với từ chỉ số lượng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I have two brothers. ___ of them are teachers.",
     "Both",
     [
      "Each",
      "Either"
     ],
     "Cả hai: both."
    ],
    [
     "___ student in the class has a laptop.",
     "Every",
     [
      "All",
      "Both"
     ],
     "Every + danh từ số ít."
    ],
    [
     "I've got ___ money left, so I can't buy it.",
     "little",
     [
      "few",
      "a few"
     ],
     "Money không đếm được, gần như không còn: little."
    ],
    [
     "We spent the ___ day at the beach.",
     "whole",
     [
      "all",
      "every"
     ],
     "The whole day."
    ],
    [
     "Which sentence is correct?",
     "Most people like music.",
     [
      "Most of people like music.",
      "Most the people like music."
     ],
     "Most + danh từ chung."
    ],
    [
     "I tried two shirts, but ___ of them fitted me.",
     "neither",
     [
      "none",
      "no"
     ],
     "Hai đối tượng: neither of them."
    ]
   ],
   "gaps": [
    [
     "There are ___ chairs left, so we must stand. (rất ít)",
     [
      "few"
     ],
     "",
     "Chairs đếm được số nhiều, gần như không còn: few."
    ],
    [
     "___ of the two answers is correct. (không cái nào)",
     [
      "Neither"
     ],
     "",
     "Hai đối tượng, phủ định: neither."
    ],
    [
     "Not all students passed, but ___ of them did. (đa số)",
     [
      "most"
     ],
     "",
     "Most of them."
    ],
    [
     "You can choose ___ of the two colours. (cái nào cũng được)",
     [
      "either"
     ],
     "",
     "Either: một trong hai."
    ]
   ],
   "sentences": [
    [
     "I have two brothers. Both of them are teachers.",
     "Tôi có hai anh em trai. Cả hai đều là giáo viên."
    ],
    [
     "Every student in the class has a laptop.",
     "Mọi học sinh trong lớp đều có máy tính xách tay."
    ],
    [
     "We spent the whole day at the beach.",
     "Chúng tôi ở bãi biển cả ngày."
    ],
    [
     "I have little money left, so I can't buy it.",
     "Tôi còn rất ít tiền nên không mua được."
    ],
    [
     "I tried two shirts, but neither of them fitted me.",
     "Tôi thử hai cái áo nhưng cái nào cũng không vừa."
    ]
   ]
  },
  {
   "id": "wh-b2-dependent-prepositions",
   "group": 10,
   "grade": 10,
   "icon": "📍",
   "title": "Dependent prepositions",
   "en": "Giới từ",
   "desc": "Nhiều tính từ, động từ và danh từ đi với một giới từ cố định, không đoán theo nghĩa mà phải học cả cụm.",
   "formula": [
    [
     "Công thức",
     "adjective / verb / noun + giới từ cố định + noun / V-ing"
    ],
    [
     "Tính từ + of / at / in / for",
     "afraid of · good at · interested in · responsible for · famous for"
    ],
    [
     "Tính từ + on / to / with",
     "keen on · similar to · angry with / at"
    ],
    [
     "Động từ + giới từ",
     "depend on · rely on · apologise for · insist on"
    ],
    [
     "Danh từ + giới từ",
     "increase in · reason for · solution to · demand for"
    ]
   ],
   "grammar": [
    [
     "Tính từ + giới từ",
     "Học cả cụm.",
     "She is responsible for the whole project. | Hue is famous for its royal tombs."
    ],
    [
     "Động từ + giới từ",
     "Giới từ gắn với động từ.",
     "It depends on the weather. | We rely on public transport."
    ],
    [
     "Danh từ + giới từ",
     "Nhiều danh từ có giới từ riêng.",
     "There has been an increase in prices. | What is the reason for the delay?"
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Học cả cụm cùng giới từ: Ghi nhớ cụm, đừng dịch từng từ. 2) Dùng danh từ hoặc V-ing sau giới từ: Không dùng to V. 3) Ôn lại cụm hay nhầm: Nhiều giới từ tiếng Việt dịch giống nhau nhưng tiếng Anh khác nhau.",
     "interested in | good at swimming | famous for · afraid of"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I'm interested on art. Đúng: I'm interested in art. (Interested đi với in.) Sai: It depends of the weather. Đúng: It depends on the weather. (Depend đi với on.) Sai: She is good in solving problems. Đúng: She is good at solving problems. (Good đi với at.) Sai: He apologised me for being late. Đúng: He apologised for being late. (Apologise for + V-ing.)",
     "I'm interested in art. | It depends on the weather. | She is good at solving problems. | He apologised for being late."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã học giới từ đi kèm với cụm này chưa? · Sau giới từ là danh từ hoặc V-ing? · Có dịch giới từ từ tiếng Việt sang không?",
     ""
    ]
   ],
   "quiz": [
    [
     "She is responsible ___ the whole project.",
     "for",
     [
      "of",
      "to"
     ],
     "Responsible for."
    ],
    [
     "It depends ___ the weather.",
     "on",
     [
      "of",
      "from"
     ],
     "Depend on."
    ],
    [
     "He apologised ___ being late.",
     "for",
     [
      "about",
      "to"
     ],
     "Apologise for."
    ],
    [
     "Hue is famous ___ its royal tombs.",
     "for",
     [
      "of",
      "with"
     ],
     "Famous for."
    ],
    [
     "Which sentence is correct?",
     "I'm interested in art.",
     [
      "I'm interested on art.",
      "I'm interested at art."
     ],
     "Interested in."
    ],
    [
     "There has been an increase ___ prices.",
     "in",
     [
      "of",
      "on"
     ],
     "Increase in."
    ]
   ],
   "gaps": [
    [
     "I'm afraid ___ spiders.",
     [
      "of"
     ],
     "",
     "Afraid of."
    ],
    [
     "She is very good ___ solving problems.",
     [
      "at"
     ],
     "",
     "Good at."
    ],
    [
     "We rely ___ public transport.",
     [
      "on"
     ],
     "",
     "Rely on."
    ],
    [
     "This answer is similar ___ mine.",
     [
      "to"
     ],
     "",
     "Similar to."
    ]
   ],
   "sentences": [
    [
     "She is responsible for the whole project.",
     "Cô ấy chịu trách nhiệm toàn bộ dự án."
    ],
    [
     "It depends on the weather.",
     "Điều đó tùy thuộc thời tiết."
    ],
    [
     "Hue is famous for its royal tombs.",
     "Huế nổi tiếng với các lăng tẩm."
    ],
    [
     "There has been an increase in prices.",
     "Giá cả đã tăng lên."
    ],
    [
     "She is keen on photography.",
     "Cô ấy rất mê nhiếp ảnh."
    ]
   ]
  },
  {
   "id": "wh-b2-would-rather-had-better",
   "group": 10,
   "grade": 10,
   "icon": "📝",
   "title": "Would rather, had better & it's time",
   "en": "Cấu trúc câu",
   "desc": "Would rather nói sở thích: would rather + V (cho chính mình), would rather + S + past simple (muốn người khác làm gì).",
   "formula": [
    [
     "Công thức",
     "would rather + V · would rather + S + V2 · had better (not) + V · It's time + S + V2"
    ],
    [
     "Would rather + V",
     "S + would rather (not) + V"
    ],
    [
     "Would rather + S + V2",
     "S + would rather + S + past simple"
    ],
    [
     "Prefer",
     "prefer + N / V-ing + to + N / V-ing"
    ],
    [
     "Had better / It's time",
     "had better (not) + V · It's (high) time + S + past simple"
    ]
   ],
   "grammar": [
    [
     "Nói điều mình thích hơn",
     "Would rather + V hoặc prefer.",
     "I'd rather stay at home tonight. | She prefers tea to coffee."
    ],
    [
     "Muốn ai đó làm hoặc không làm gì",
     "Would rather + S + past simple.",
     "I'd rather you didn't smoke here."
    ],
    [
     "Khuyên mạnh hoặc cảnh báo",
     "Had better + V, ngụ ý có hậu quả nếu không làm.",
     "You'd better take a coat. It's cold. | We had better hurry or we'll miss the bus."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ai là chủ thể mong muốn: Mình muốn hay muốn người khác làm gì? 2) Chọn cấu trúc: Cùng chủ ngữ: would rather + V. Khác chủ ngữ: would rather + S + past simple. 3) Kiểm tra dạng động từ: Had better và would rather + V nguyên mẫu không to.",
     "I'd rather go. · I'd rather you went. | I'd rather you stayed. | had better go"
    ],
    [
     "Lỗi thường gặp",
     "Sai: I'd rather to stay at home. Đúng: I'd rather stay at home. (Sau would rather không có to.) Sai: You'd better to take a coat. Đúng: You'd better take a coat. (Sau had better không có to.) Sai: It's time we leave. Đúng: It's time we left. (It's time + S + past simple.) Sai: She prefers tea than coffee. Đúng: She prefers tea to coffee. (Prefer X to Y, không dùng than.)",
     "I'd rather stay at home. | You'd better take a coat. | It's time we left. | She prefers tea to coffee."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Cùng chủ ngữ hay khác chủ ngữ? · Sau would rather và had better đã dùng V nguyên mẫu chưa? · It's time đã đi với past simple chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I'd rather ___ at home tonight.",
     "stay",
     [
      "to stay",
      "staying"
     ],
     "Would rather + V nguyên mẫu."
    ],
    [
     "You'd better ___ a coat. It's cold.",
     "take",
     [
      "to take",
      "taking"
     ],
     "Had better + V nguyên mẫu."
    ],
    [
     "I'd rather you ___ smoke here.",
     "didn't",
     [
      "don't",
      "wouldn't"
     ],
     "Would rather + S + past simple."
    ],
    [
     "She prefers tea ___ coffee.",
     "to",
     [
      "than",
      "from"
     ],
     "Prefer X to Y."
    ],
    [
     "Which sentence is correct?",
     "It's time we left.",
     [
      "It's time we leave.",
      "It's time we will leave."
     ],
     "It's time + S + past simple."
    ],
    [
     "You ___ hurry or you'll be late.",
     "had better",
     [
      "would better",
      "did better"
     ],
     "Had better + V."
    ]
   ],
   "gaps": [
    [
     "I'd rather ___ (walk) than take the bus.",
     [
      "walk"
     ],
     "",
     "Would rather + V."
    ],
    [
     "He had better not ___ late again.",
     [
      "be"
     ],
     "",
     "Had better not + V."
    ],
    [
     "I prefer swimming ___ running.",
     [
      "to"
     ],
     "",
     "Prefer V-ing to V-ing."
    ],
    [
     "It's high time you ___ (find) a job.",
     [
      "found"
     ],
     "",
     "It's high time + S + past simple."
    ]
   ],
   "sentences": [
    [
     "I'd rather stay at home tonight.",
     "Tối nay tôi muốn ở nhà hơn."
    ],
    [
     "I'd rather you didn't smoke here.",
     "Tôi muốn bạn đừng hút thuốc ở đây."
    ],
    [
     "You'd better take a coat. It's cold.",
     "Bạn nên mang áo khoác. Trời lạnh đấy."
    ],
    [
     "She prefers tea to coffee.",
     "Cô ấy thích trà hơn cà phê."
    ],
    [
     "It's time we left.",
     "Đã đến lúc chúng ta đi rồi."
    ]
   ]
  },
  {
   "id": "wh-c1-inversion-negative-adverbs",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Inversion after negative adverbials",
   "en": "Đảo ngữ",
   "desc": "Khi một trạng từ phủ định hoặc giới hạn (never, rarely, seldom, hardly, scarcely, little, not only, no sooner, only after, not until, under no circumstances) đứng đầu…",
   "formula": [
    [
     "Công thức",
     "Negative adverbial + trợ động từ + chủ ngữ + động từ chính"
    ],
    [
     "Never, rarely, seldom, little",
     "Never/Rarely/Seldom/Little + trợ động từ + S + V"
    ],
    [
     "Not only ... but also",
     "Not only + trợ động từ + S + V, but ... also ..."
    ],
    [
     "Hardly / no sooner",
     "Hardly had + S + V3 + when ... · No sooner had + S + V3 + than ..."
    ],
    [
     "Only / not until",
     "Only after / Not until + mệnh đề hoặc cụm + trợ động từ + S + V"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh tần suất hiếm hoặc chưa từng",
     "Never, rarely, seldom, little đứng đầu câu.",
     "Never have I seen such a beautiful view. | Rarely do we eat out."
    ],
    [
     "Nói hai việc nối tiếp rất sát nhau",
     "Hardly/scarcely ... when, no sooner ... than.",
     "Hardly had she sat down when the phone rang. | No sooner had they left than it started to rain."
    ],
    [
     "Nhấn mạnh điều kiện duy nhất hoặc điều cấm",
     "Only after/when, not until, under no circumstances.",
     "Only after the meeting did she learn the truth. | Under no circumstances should you open this door."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Đặt trạng từ phủ định lên đầu câu: Chọn cụm cần nhấn mạnh. 2) Đảo trợ động từ lên trước chủ ngữ: Thiếu trợ động từ thì dùng do/does/did. 3) Chú ý cặp liên từ: Hardly/scarcely đi với when, no sooner đi với than.",
     "Never ... | Never have I seen ... · Rarely do we eat ... | Hardly had ... when ... · No sooner had ... than ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Rarely we eat out. Đúng: Rarely do we eat out. (Trạng từ phủ định đứng đầu câu thì phải đảo ngữ.) Sai: Never I have seen such a view. Đúng: Never have I seen such a view. (Trợ động từ đứng trước chủ ngữ.) Sai: No sooner had they left when it started to rain. Đúng: No sooner had they left than it started to rain. (No sooner đi với than, hardly đi với when.) Sai: Little he knew that the letter would change his life. Đúng: Little did he know that the letter would change his life. (Little ở đầu câu cần did, và động từ trở về nguyên mẫu.)",
     "Rarely do we eat out. | Never have I seen such a view. | No sooner had they left than it started to rain. | Little did he know that the letter would change his life."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Có trạng từ phủ định hoặc giới hạn ở đầu câu không? · Trợ động từ đã đứng trước chủ ngữ chưa? · Cặp hardly ... when và no sooner ... than đã đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Never ___ such a beautiful view.",
     "have I seen",
     [
      "I have seen",
      "I saw"
     ],
     "Never ở đầu câu: have I seen."
    ],
    [
     "Not only ___ late, but he also forgot the documents.",
     "was he",
     [
      "he was",
      "did he"
     ],
     "Đảo ngữ với be: was he."
    ],
    [
     "Hardly had she sat down ___ the phone rang.",
     "when",
     [
      "than",
      "that"
     ],
     "Hardly ... when."
    ],
    [
     "No sooner had they left ___ it started to rain.",
     "than",
     [
      "when",
      "then"
     ],
     "No sooner ... than."
    ],
    [
     "Which sentence is correct?",
     "Rarely do we eat out.",
     [
      "Rarely we eat out.",
      "Rarely we do eat out."
     ],
     "Rarely + do + S + V."
    ],
    [
     "Only after the meeting ___ the truth.",
     "did she learn",
     [
      "she learned",
      "she did learn"
     ],
     "Only after + cụm + did + S + V."
    ]
   ],
   "gaps": [
    [
     "Little ___ he know that the letter would change his life.",
     [
      "did"
     ],
     "",
     "Little did he know."
    ],
    [
     "Seldom ___ she travel abroad.",
     [
      "does"
     ],
     "",
     "Seldom + does + S + V."
    ],
    [
     "Hardly ___ he arrived when the meeting began.",
     [
      "had"
     ],
     "",
     "Hardly had + S + V3."
    ],
    [
     "No sooner had I closed my eyes ___ the alarm went off.",
     [
      "than"
     ],
     "",
     "No sooner ... than."
    ]
   ],
   "sentences": [
    [
     "Never have I seen such a beautiful view.",
     "Tôi chưa từng thấy khung cảnh nào đẹp đến vậy."
    ],
    [
     "Not only was he late, but he also forgot the documents.",
     "Anh ấy không chỉ đến muộn mà còn quên tài liệu."
    ],
    [
     "Hardly had she sat down when the phone rang.",
     "Cô ấy vừa ngồi xuống thì điện thoại reo."
    ],
    [
     "Only after the meeting did she learn the truth.",
     "Mãi sau cuộc họp cô ấy mới biết sự thật."
    ],
    [
     "Under no circumstances should you open this door.",
     "Trong bất kỳ trường hợp nào cũng không được mở cánh cửa này."
    ]
   ]
  },
  {
   "id": "wh-c1-inversion-conditionals",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Inversion in conditionals",
   "en": "Đảo ngữ",
   "desc": "Câu điều kiện trang trọng bỏ if và đảo trợ động từ lên đầu: Had + S + V3 (loại 3), Were + S + to V hoặc Were + S + ... (loại 2), Should + S + V (khả năng thấp, loại 1).",
   "formula": [
    [
     "Công thức",
     "Had + S + V3 · Were + S + to V · Should + S + V · Were it not for / Had it not been for + N"
    ],
    [
     "Had + S + V3",
     "Had + S + V3, S + would have + V3"
    ],
    [
     "Were + S + to V",
     "Were + S + to V, S + would + V"
    ],
    [
     "Should + S + V",
     "Should + S + V, S + will/can/imperative"
    ],
    [
     "Were it not for / Had it not been for",
     "Were it not for + N, ... · Had it not been for + N, ..."
    ]
   ],
   "grammar": [
    [
     "Điều kiện loại 3 trang trọng",
     "Bỏ if, đảo had.",
     "Had I known the truth, I would have acted differently."
    ],
    [
     "Điều kiện loại 2 trang trọng",
     "Bỏ if, đảo were.",
     "Were he to accept the job, he would move to Paris."
    ],
    [
     "Điều kiện khả năng thấp và lời đề nghị lịch sự",
     "Should + S + V, thường dùng trong thư tín.",
     "Should you need any help, please contact us."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định loại điều kiện: Loại 3 dùng had, loại 2 dùng were, khả năng thấp dùng should. 2) Bỏ if và đảo trợ động từ: Trợ động từ đứng đầu mệnh đề điều kiện. 3) Giữ nguyên mệnh đề kết quả: Vế kết quả không thay đổi.",
     "quá khứ → had | If I had known → Had I known | ..., I would have acted differently."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Had I knew, I would have told you. Đúng: Had I known, I would have told you. (Had + S + V3.) Sai: If had I known, I would have told you. Đúng: Had I known, I would have told you. (Khi đảo ngữ thì bỏ if.) Sai: Should you will need help, call me. Đúng: Should you need help, call me. (Sau should + S dùng động từ nguyên mẫu.) Sai: Were I win the lottery, I would travel. Đúng: Were I to win the lottery, I would travel. (Với động từ thường dùng Were + S + to V.)",
     "Had I known, I would have told you. | Had I known, I would have told you. | Should you need help, call me. | Were I to win the lottery, I would travel."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã bỏ if chưa? · Trợ động từ đã đứng đầu mệnh đề và đúng loại chưa? · Sau đảo ngữ động từ đã đúng dạng (V3, to V, V) chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ I known the truth, I would have acted differently.",
     "Had",
     [
      "If",
      "Should"
     ],
     "Loại 3 đảo ngữ: Had I known."
    ],
    [
     "___ you need any help, please call me.",
     "Should",
     [
      "Would",
      "Had"
     ],
     "Khả năng thấp: Should you need."
    ],
    [
     "___ I you, I would accept the offer.",
     "Were",
     [
      "Was",
      "Had"
     ],
     "Loại 2 đảo ngữ: Were I you."
    ],
    [
     "___ it not been for your help, we would have failed.",
     "Had",
     [
      "Were",
      "Did"
     ],
     "Had it not been for."
    ],
    [
     "Which sentence is correct?",
     "Had I known, I would have told you.",
     [
      "Had I knew, I would have told you.",
      "Had known I, I would have told you."
     ],
     "Had + S + V3."
    ],
    [
     "Were he ___ the job, he would move to Paris.",
     "to accept",
     [
      "accepting",
      "accepted"
     ],
     "Were + S + to V."
    ]
   ],
   "gaps": [
    [
     "___ you have any questions, don't hesitate to ask. (nếu có)",
     [
      "Should"
     ],
     "",
     "Should you have."
    ],
    [
     "___ I to win the lottery, I would travel the world.",
     [
      "Were"
     ],
     "",
     "Were I to win."
    ],
    [
     "Had she ___ (study) harder, she would have passed.",
     [
      "studied"
     ],
     "",
     "Had + S + V3."
    ],
    [
     "___ it not for the rain, we would have gone out. (nếu không vì)",
     [
      "Were"
     ],
     "",
     "Were it not for."
    ]
   ],
   "sentences": [
    [
     "Had I known the truth, I would have acted differently.",
     "Nếu tôi biết sự thật, tôi đã hành động khác."
    ],
    [
     "Were he to accept the job, he would move to Paris.",
     "Nếu anh ấy nhận công việc, anh ấy sẽ chuyển đến Paris."
    ],
    [
     "Should you need further information, please contact us.",
     "Nếu bạn cần thêm thông tin, xin liên hệ chúng tôi."
    ],
    [
     "Had it not been for your help, we would have failed.",
     "Nếu không nhờ sự giúp đỡ của bạn, chúng tôi đã thất bại."
    ],
    [
     "Were it not for the rain, we would go out.",
     "Nếu không có mưa, chúng tôi đã ra ngoài."
    ]
   ]
  },
  {
   "id": "wh-c1-cleft-sentences",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Cleft sentences",
   "en": "Nhấn mạnh",
   "desc": "Câu chẻ tách một câu thành hai phần để nhấn mạnh thông tin quan trọng. It-cleft: It + be + phần nhấn mạnh + who/that + mệnh đề.",
   "formula": [
    [
     "Công thức",
     "It is/was + X + that/who ... · What/All ... + is/was + X"
    ],
    [
     "It-cleft",
     "It is/was + phần nhấn mạnh + who/that + mệnh đề"
    ],
    [
     "What-cleft",
     "What + S + V + is/was + phần nhấn mạnh"
    ],
    [
     "All / the thing",
     "All / The thing + S + V + is/was + ..."
    ],
    [
     "Reason-cleft",
     "The reason (why) + S + V + is/was + that / to V"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh người, vật, thời gian, nơi chốn",
     "Dùng it-cleft.",
     "It was John who broke the window. | It was in 1999 that they got married."
    ],
    [
     "Nhấn mạnh điều mình cần, muốn, bận tâm",
     "Dùng what-cleft và all-cleft.",
     "What I need is a good rest. | All I want is a quiet life."
    ],
    [
     "Nhấn mạnh lý do hoặc hành động",
     "The reason why ... is that ..., What she did was + V.",
     "The reason why I called you is to say sorry. | What she did was call the police."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn thông tin cần nhấn mạnh: Có thể là chủ ngữ, tân ngữ, thời gian hoặc nơi chốn. 2) Chọn khung câu chẻ: It-cleft cho người, vật, thời gian, nơi chốn. What-cleft cho hành động hoặc điều mong muốn. 3) Chia be cho hợp: Be theo thì của câu gốc và theo phần nhấn mạnh.",
     "John | It was ... that / What ... is ... | It was John who ... · What I need is ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: It annoys me is his attitude. Đúng: What annoys me is his attitude. (Dùng what để mở đầu wh-cleft.) Sai: It was John what broke the window. Đúng: It was John who broke the window. (Dùng who/that, không dùng what.) Sai: What I need are a good rest. Đúng: What I need is a good rest. (Be hợp với cụm nhấn mạnh phía sau (a good rest).) Sai: The reason why I called is because I wanted to say sorry. Đúng: The reason why I called is that I wanted to say sorry. (Sau The reason is dùng that, không dùng because.)",
     "What annoys me is his attitude. | It was John who broke the window. | What I need is a good rest. | The reason why I called is that I wanted to say sorry."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã chọn đúng thông tin cần nhấn mạnh chưa? · Dùng it-cleft hay what-cleft cho hợp? · Be có hợp với phần nhấn mạnh không?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ was John who broke the window.",
     "It",
     [
      "What",
      "That"
     ],
     "It-cleft: It was ... who."
    ],
    [
     "___ I need is a good rest.",
     "What",
     [
      "It",
      "Which"
     ],
     "Wh-cleft: What I need is."
    ],
    [
     "It was in 1999 ___ they got married.",
     "that",
     [
      "which",
      "what"
     ],
     "It-cleft nhấn mạnh thời gian dùng that."
    ],
    [
     "The reason ___ I called you is to say sorry.",
     "why",
     [
      "what",
      "when"
     ],
     "The reason why."
    ],
    [
     "Which sentence is correct?",
     "What annoys me is his attitude.",
     [
      "It annoys me is his attitude.",
      "What annoys me are his attitude."
     ],
     "What + V + is + cụm số ít."
    ],
    [
     "All I want ___ a quiet life.",
     "is",
     [
      "are",
      "be"
     ],
     "All I want is + cụm số ít."
    ]
   ],
   "gaps": [
    [
     "It was Maria ___ won the prize.",
     [
      "who",
      "that"
     ],
     "",
     "It-cleft nhấn mạnh người: who/that."
    ],
    [
     "___ surprised me was his reaction.",
     [
      "What"
     ],
     "",
     "What surprised me was ..."
    ],
    [
     "What she did ___ to call the police.",
     [
      "was"
     ],
     "",
     "What she did was + V."
    ],
    [
     "It's the weather ___ I can't stand.",
     [
      "that",
      "which"
     ],
     "",
     "It's the weather that/which I can't stand."
    ]
   ],
   "sentences": [
    [
     "It was John who broke the window.",
     "Chính John là người làm vỡ cửa sổ."
    ],
    [
     "What I need is a good rest.",
     "Điều tôi cần là được nghỉ ngơi thật tốt."
    ],
    [
     "It was in 1999 that they got married.",
     "Chính vào năm 1999 họ kết hôn."
    ],
    [
     "All I want is a quiet life.",
     "Tất cả những gì tôi muốn là một cuộc sống yên tĩnh."
    ],
    [
     "What she did was call the police.",
     "Điều cô ấy làm là gọi cảnh sát."
    ]
   ]
  },
  {
   "id": "wh-c1-subjunctive-formal",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "The subjunctive & formal structures",
   "en": "Văn phong trang trọng",
   "desc": "Giả định cách (subjunctive) dùng động từ nguyên mẫu không to sau các động từ và tính từ chỉ đề nghị, yêu cầu, tầm quan trọng: suggest, recommend, demand, insist,…",
   "formula": [
    [
     "Công thức",
     "suggest/demand/insist + that + S + V (nguyên mẫu) · It is vital that + S + V (nguyên mẫu)"
    ],
    [
     "Động từ + that + nguyên mẫu",
     "suggest/recommend/demand/insist/propose + that + S + V (nguyên mẫu)"
    ],
    [
     "Tính từ + that + nguyên mẫu",
     "It is essential/vital/important/necessary + that + S + V (nguyên mẫu)"
    ],
    [
     "Bị động",
     "... that + S + be + V3"
    ],
    [
     "Cụm cố định",
     "if need be · be that as it may · so be it · come what may"
    ]
   ],
   "grammar": [
    [
     "Đề nghị, yêu cầu, khuyến nghị trang trọng",
     "Động từ sau that không chia theo ngôi.",
     "The doctor suggested that he take more rest. | They demanded that he resign."
    ],
    [
     "Nói điều quan trọng, cần thiết",
     "Dùng với essential, vital, important, necessary.",
     "It is essential that everyone be on time."
    ],
    [
     "Cụm cố định trang trọng",
     "Nhiều cụm giữ dạng subjunctive cũ.",
     "If need be, we can start earlier. | Be that as it may, we must continue."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Nhận ra động từ hoặc tính từ kích hoạt: Suggest, insist, demand, essential, vital... 2) Dùng nguyên mẫu không to sau that: Không thêm s, không chia thì. 3) Phủ định và bị động: Phủ định đặt not trước động từ. Bị động dùng be + V3.",
     "The doctor suggested that ... | that he take (không nói that he takes) | that he not be late · that it be done"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She demanded that he resigns. Đúng: She demanded that he resign. (Sau demand that dùng nguyên mẫu không chia ngôi.) Sai: It is vital that she is on time. Đúng: It is vital that she be on time. (Giả định cách dùng be.) Sai: It is important that he doesn't be late. Đúng: It is important that he not be late. (Phủ định đặt not trước động từ, không dùng trợ động từ.) Sai: I recommend that he sees a lawyer. Đúng: I recommend that he see a lawyer. (Trong văn phong trang trọng, sau recommend that dùng nguyên mẫu không chia ngôi.)",
     "She demanded that he resign. | It is vital that she be on time. | It is important that he not be late. | I recommend that he see a lawyer."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Có động từ hoặc tính từ đề nghị, yêu cầu, tầm quan trọng không? · Động từ sau that đã ở dạng nguyên mẫu không chia chưa? · Phủ định đã dùng not + V chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "The doctor suggested that he ___ more rest.",
     "take",
     [
      "takes",
      "took"
     ],
     "Subjunctive: nguyên mẫu không chia."
    ],
    [
     "It is essential that everyone ___ on time.",
     "be",
     [
      "is",
      "will be"
     ],
     "Subjunctive: be."
    ],
    [
     "She insisted that the report ___ finished by Friday.",
     "be",
     [
      "is",
      "was being"
     ],
     "Subjunctive bị động: be finished."
    ],
    [
     "They demanded that he ___ immediately.",
     "resign",
     [
      "resigns",
      "resigned"
     ],
     "Demand that + nguyên mẫu."
    ],
    [
     "Which sentence uses the subjunctive form?",
     "I recommend that he see a lawyer.",
     [
      "I recommend that he sees a lawyer.",
      "I recommend him to see a lawyer."
     ],
     "Recommend that + nguyên mẫu: see."
    ],
    [
     "If need ___, we can start earlier.",
     "be",
     [
      "is",
      "been"
     ],
     "Cụm cố định: if need be."
    ]
   ],
   "gaps": [
    [
     "I suggest that she ___ (apply) for the job.",
     [
      "apply"
     ],
     "",
     "Subjunctive: apply."
    ],
    [
     "It is important that he ___ (not / be) late.",
     [
      "not be"
     ],
     "",
     "Phủ định: not be."
    ],
    [
     "The committee demanded that the rules ___ changed.",
     [
      "be"
     ],
     "",
     "Subjunctive bị động: be changed."
    ],
    [
     "Be that ___ it may, we must continue.",
     [
      "as"
     ],
     "",
     "Cụm cố định: be that as it may."
    ]
   ],
   "sentences": [
    [
     "The doctor suggested that he take more rest.",
     "Bác sĩ đề nghị anh ấy nghỉ ngơi nhiều hơn."
    ],
    [
     "It is essential that everyone be on time.",
     "Điều thiết yếu là mọi người phải đúng giờ."
    ],
    [
     "She insisted that the report be finished by Friday.",
     "Cô ấy khăng khăng đòi bản báo cáo phải xong trước thứ sáu."
    ],
    [
     "It is important that he not be late.",
     "Điều quan trọng là anh ấy đừng đến muộn."
    ],
    [
     "If need be, we can start earlier.",
     "Nếu cần thì chúng ta có thể bắt đầu sớm hơn."
    ]
   ]
  },
  {
   "id": "wh-c1-passive-infinitives-gerunds",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Passive infinitives, gerunds & get-passive",
   "en": "Thể bị động",
   "desc": "Bị động không chỉ có ở các thì mà còn ở dạng to V và V-ing. Passive infinitive: to be + V3 (to have been + V3 nếu xảy ra trước).",
   "formula": [
    [
     "Công thức",
     "to be + V3 · being + V3 · get + V3 · need + V-ing"
    ],
    [
     "Passive infinitive",
     "to be + V3 · to have been + V3"
    ],
    [
     "Passive gerund",
     "being + V3 · having been + V3"
    ],
    [
     "Get-passive",
     "get + V3"
    ],
    [
     "Need + V-ing",
     "need/want/deserve + V-ing (nghĩa bị động)"
    ]
   ],
   "grammar": [
    [
     "Bị động sau động từ đi với to V",
     "Want, need, expect, hope, be due + to be + V3.",
     "The report is due to be submitted tomorrow. | The problem needs to be solved immediately."
    ],
    [
     "Bị động sau động từ đi với V-ing và giới từ",
     "Enjoy, hate, avoid, remember, be afraid of + being + V3.",
     "She hates being asked about her age. | I remember being given a toy on my birthday."
    ],
    [
     "Get-passive trong văn nói",
     "Nhấn mạnh sự việc xảy ra, thường bất ngờ hoặc không may.",
     "She got promoted last month. | I got told off by the manager."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định chủ ngữ có chịu tác động không: Nếu chủ ngữ bị tác động, cần dạng bị động. 2) Chọn to V hay V-ing theo động từ đứng trước: Decide, want, expect → to be + V3. Enjoy, hate, avoid → being + V3. 3) Chọn get-passive khi muốn nói thân mật: Get + V3 không dùng với mọi động từ.",
     "She hates (people asking her) → being asked | expect to be paid · avoid being seen | get married, get lost, get promoted"
    ],
    [
     "Lỗi thường gặp",
     "Sai: She enjoys praised. Đúng: She enjoys being praised. (Enjoy + V-ing, bị động là being + V3.) Sai: The problem needs to solve immediately. Đúng: The problem needs to be solved immediately. (Vật chịu tác động nên cần to be + V3.) Sai: I got to be told off by the manager. Đúng: I got told off by the manager. (Get-passive: get + V3.) Sai: He doesn't like to being told what to do. Đúng: He doesn't like being told what to do. (Dùng being + V3, không đặt to trước being.)",
     "She enjoys being praised. | The problem needs to be solved immediately. | I got told off by the manager. | He doesn't like being told what to do."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ có phải đối tượng chịu tác động không? · Động từ trước thuộc nhóm to V hay V-ing? · Đã dùng to be/being + V3 đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She hates ___ about her age.",
     "being asked",
     [
      "asking",
      "to ask"
     ],
     "Hate + V-ing bị động: being asked."
    ],
    [
     "The problem needs ___ immediately.",
     "to be solved",
     [
      "to solve",
      "being solved"
     ],
     "Need + to be + V3."
    ],
    [
     "He was delighted ___ the job.",
     "to be offered",
     [
      "to offer",
      "offering"
     ],
     "To be + V3."
    ],
    [
     "I ___ by the manager for being late.",
     "got told off",
     [
      "got to tell off",
      "got telling off"
     ],
     "Get-passive: got told off."
    ],
    [
     "Which sentence is correct?",
     "She enjoys being praised.",
     [
      "She enjoys praised.",
      "She enjoys to being praised."
     ],
     "Enjoy + being + V3."
    ],
    [
     "There is a lot of work ___ done.",
     "to be",
     [
      "being",
      "to have"
     ],
     "A lot of work to be done."
    ]
   ],
   "gaps": [
    [
     "He doesn't like ___ (tell) what to do.",
     [
      "being told"
     ],
     "",
     "Like + being + V3."
    ],
    [
     "The report is due ___ (submit) tomorrow.",
     [
      "to be submitted"
     ],
     "",
     "Due to be + V3."
    ],
    [
     "She got ___ (promote) last month.",
     [
      "promoted"
     ],
     "",
     "Get + V3."
    ],
    [
     "I remember ___ (give) a toy on my birthday.",
     [
      "being given"
     ],
     "",
     "Remember + being + V3."
    ]
   ],
   "sentences": [
    [
     "The report is due to be submitted tomorrow.",
     "Bản báo cáo phải được nộp vào ngày mai."
    ],
    [
     "She hates being asked about her age.",
     "Cô ấy ghét bị hỏi về tuổi."
    ],
    [
     "She got promoted last month.",
     "Cô ấy được thăng chức hồi tháng trước."
    ],
    [
     "The windows need cleaning.",
     "Cửa sổ cần được lau."
    ],
    [
     "He was delighted to be offered the job.",
     "Anh ấy mừng vì được mời nhận công việc."
    ]
   ]
  },
  {
   "id": "wh-c1-future-in-the-past",
   "group": 11,
   "grade": 12,
   "icon": "⏱️",
   "title": "Future in the past",
   "en": "Thì",
   "desc": "Future in the past nói về điều từng là tương lai tại một thời điểm trong quá khứ. Dùng was/were going to, was/were about to, would + V, was/were to + V, was/were due to.",
   "formula": [
    [
     "Công thức",
     "was/were going to + V · was/were about to + V · would + V · was/were to (have) + V"
    ],
    [
     "Was/were going to",
     "S + was/were going to + V"
    ],
    [
     "Was/were about to",
     "S + was/were about to + V (+ when ...)"
    ],
    [
     "Would",
     "S + would + V"
    ],
    [
     "Was/were to",
     "S + was/were to + V · was/were to have + V3"
    ]
   ],
   "grammar": [
    [
     "Nói dự định trong quá khứ",
     "Was/were going to cho kế hoạch, thường không thực hiện.",
     "I was going to call you, but I forgot."
    ],
    [
     "Nói việc sắp xảy ra thì bị ngắt",
     "Was/were about to.",
     "She was about to leave when the phone rang."
    ],
    [
     "Kể điều xảy ra sau đó",
     "Would + V trong lối kể chuyện hoặc dự đoán trong quá khứ.",
     "He didn't know he would become famous. | Little did she know that she would meet him again."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định mốc quá khứ: Việc được nói tới là tương lai tính từ mốc đó. 2) Chọn cấu trúc: Dự định: was going to. Sắp xảy ra: was about to. Kể truyện: would. 3) Chú ý dự định không thực hiện: Was/were going to hoặc was to have V3 thường đi với but.",
     "last year → what happened next | was about to leave | I was going to call, but ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: He didn't know he will become famous. Đúng: He didn't know he would become famous. (Mốc quá khứ nên will đổi thành would.) Sai: I am going to call you, but I forgot. Đúng: I was going to call you, but I forgot. (Việc đã xảy ra trong quá khứ nên dùng was going to.) Sai: She was about leave when the phone rang. Đúng: She was about to leave when the phone rang. (Thiếu to sau about.) Sai: We were to meet at six, but he never came. (nhưng thực tế không gặp) Đúng: We were to have met at six, but he never came. (Dự định không thực hiện dùng was/were to have + V3.)",
     "He didn't know he would become famous. | I was going to call you, but I forgot. | She was about to leave when the phone rang. | We were to have met at six, but he never came."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Mốc thời gian là quá khứ? · Đã dùng was going to, was about to hay would đúng nghĩa chưa? · Will đã đổi thành would chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "I ___ call you, but I forgot.",
     "was going to",
     [
      "will",
      "am going to"
     ],
     "Dự định trong quá khứ: was going to."
    ],
    [
     "She was about ___ leave when the phone rang.",
     "to",
     [
      "for",
      "leaving"
     ],
     "Was about to + V."
    ],
    [
     "He didn't know he ___ become famous.",
     "would",
     [
      "will",
      "is going to"
     ],
     "Future in the past: would."
    ],
    [
     "We ___ to have met at six, but he never came.",
     "were",
     [
      "are",
      "had"
     ],
     "Were to have + V3."
    ],
    [
     "Which sentence is correct?",
     "I was going to say something but she interrupted.",
     [
      "I am going to say something but she interrupted.",
      "I will say something but she interrupted."
     ],
     "Quá khứ: was going to."
    ],
    [
     "They thought it ___ rain, so they took umbrellas.",
     "would",
     [
      "will",
      "was"
     ],
     "Would trong lời nghĩ ở quá khứ."
    ]
   ],
   "gaps": [
    [
     "I was ___ to tell you, but I lost your number.",
     [
      "going"
     ],
     "",
     "Was going to."
    ],
    [
     "He was just about ___ (leave) when she arrived.",
     [
      "to leave"
     ],
     "",
     "About to + V."
    ],
    [
     "Little did she know that she ___ (meet) him again.",
     [
      "would meet"
     ],
     "",
     "Would + V."
    ],
    [
     "The plane was ___ to take off when the alarm sounded.",
     [
      "about"
     ],
     "",
     "Was about to."
    ]
   ],
   "sentences": [
    [
     "I was going to call you, but I forgot.",
     "Tôi định gọi cho bạn nhưng lại quên."
    ],
    [
     "She was about to leave when the phone rang.",
     "Cô ấy sắp đi thì điện thoại reo."
    ],
    [
     "He didn't know he would become famous.",
     "Anh ấy không biết mình sẽ nổi tiếng."
    ],
    [
     "We were to have met at six, but he never came.",
     "Lẽ ra chúng tôi gặp nhau lúc sáu giờ nhưng anh ấy không đến."
    ],
    [
     "They thought it would rain, so they took umbrellas.",
     "Họ nghĩ trời sẽ mưa nên mang theo ô."
    ]
   ]
  },
  {
   "id": "wh-c1-conditional-alternatives",
   "group": 11,
   "grade": 12,
   "icon": "🔀",
   "title": "Alternatives to if",
   "en": "Câu điều kiện",
   "desc": "Ngoài if, tiếng Anh còn nhiều cách diễn đạt điều kiện với sắc thái khác nhau: unless (nếu không), as long as / provided (that) / providing (that) (miễn là), otherwise…",
   "formula": [
    [
     "Công thức",
     "unless / as long as / provided that / suppose + mệnh đề · otherwise + mệnh đề · but for + N"
    ],
    [
     "Unless",
     "Unless + S + V (khẳng định), mệnh đề chính"
    ],
    [
     "As long as / provided that",
     "as long as / provided (that) / providing (that) + S + V"
    ],
    [
     "Otherwise",
     "mệnh đề. Otherwise, mệnh đề (kết quả xấu)"
    ],
    [
     "But for / suppose",
     "But for + N, ... · Suppose + S + V2, ..."
    ]
   ],
   "grammar": [
    [
     "Điều kiện duy nhất",
     "As long as, provided that.",
     "You can go as long as you finish your homework. | I'll lend you the car, provided that you drive carefully."
    ],
    [
     "Điều kiện phủ định",
     "Unless và otherwise.",
     "Unless you hurry, you will miss the train. | Take a coat; otherwise, you'll be cold."
    ],
    [
     "Giả sử và nếu không có",
     "Suppose, what if, but for, if it weren't for.",
     "Suppose you won a million, what would you do? | But for your help, I would have failed."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý điều kiện: Duy nhất, phủ định, giả định hay nếu không có? 2) Chọn liên từ phù hợp: Dùng bảng ở phần mẫu câu. 3) Kiểm tra thì và đừng phủ định kép: Unless đã mang nghĩa phủ định nên động từ phía sau ở dạng khẳng định.",
     "duy nhất → as long as | phủ định → unless | Unless it rains (không nói Unless it doesn't rain)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Unless it doesn't rain, we'll have the picnic. Đúng: Unless it rains, we'll have the picnic. (Unless đã mang nghĩa phủ định.) Sai: Unless it will rain, we'll have the picnic. Đúng: Unless it rains, we'll have the picnic. (Mệnh đề điều kiện dùng hiện tại đơn.) Sai: Hurry up. Unless, you'll be late. Đúng: Hurry up. Otherwise, you'll be late. (Dùng otherwise để nói hậu quả của việc không làm.) Sai: But for you help, I would have failed. Đúng: But for your help, I would have failed. (But for + danh từ (your help).)",
     "Unless it rains, we'll have the picnic. | Unless it rains, we'll have the picnic. | Hurry up. Otherwise, you'll be late. | But for your help, I would have failed."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã chọn liên từ đúng ý điều kiện chưa? · Có phủ định kép sau unless không? · Thì của động từ có đúng với loại điều kiện không?",
     ""
    ]
   ],
   "quiz": [
    [
     "You can go ___ you finish your homework.",
     "as long as",
     [
      "unless",
      "otherwise"
     ],
     "Điều kiện duy nhất: as long as."
    ],
    [
     "___ you hurry, you will miss the train.",
     "Unless",
     [
      "If not",
      "Provided"
     ],
     "Unless = if ... not."
    ],
    [
     "Take a coat; ___, you'll be cold.",
     "otherwise",
     [
      "unless",
      "providing"
     ],
     "Otherwise chỉ hậu quả."
    ],
    [
     "___ your help, I would have failed.",
     "But for",
     [
      "Unless",
      "Provided that"
     ],
     "But for + danh từ: nếu không nhờ."
    ],
    [
     "Which sentence is correct?",
     "Unless it rains, we'll have the picnic.",
     [
      "Unless it doesn't rain, we'll have the picnic.",
      "Unless it will rain, we'll have the picnic."
     ],
     "Unless + khẳng định, hiện tại đơn."
    ],
    [
     "I'll lend you the car, ___ you drive carefully.",
     "provided that",
     [
      "unless",
      "but for"
     ],
     "Điều kiện duy nhất: provided that."
    ]
   ],
   "gaps": [
    [
     "Suppose you ___ (win) a million, what would you do?",
     [
      "won"
     ],
     "",
     "Suppose + past simple."
    ],
    [
     "___ it weren't for his advice, I'd be lost.",
     [
      "If"
     ],
     "",
     "If it weren't for + N."
    ],
    [
     "You may stay here ___ long as you keep quiet.",
     [
      "as"
     ],
     "",
     "As long as."
    ],
    [
     "Leave now. ___, you'll be late.",
     [
      "Otherwise"
     ],
     "",
     "Otherwise chỉ hậu quả."
    ]
   ],
   "sentences": [
    [
     "You can go as long as you finish your homework.",
     "Bạn có thể đi miễn là bạn làm xong bài tập."
    ],
    [
     "Unless you hurry, you will miss the train.",
     "Nếu bạn không nhanh lên thì bạn sẽ lỡ tàu."
    ],
    [
     "Take a coat; otherwise, you'll be cold.",
     "Mang áo khoác đi, không thì bạn sẽ lạnh."
    ],
    [
     "But for your help, I would have failed.",
     "Nếu không có sự giúp đỡ của bạn, tôi đã thất bại."
    ],
    [
     "Suppose you won a million, what would you do?",
     "Giả sử bạn trúng một triệu, bạn sẽ làm gì?"
    ]
   ]
  },
  {
   "id": "wh-c1-fronting-emphasis",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Fronting & emphatic structures",
   "en": "Nhấn mạnh",
   "desc": "Ngoài đảo ngữ với trạng từ phủ định, tiếng Anh còn nhiều cách nhấn mạnh bằng cách đưa thành phần lên đầu câu.",
   "formula": [
    [
     "Công thức",
     "Adverbial of place + V + S · So + adj + be + S + that · Such + be + N + that · S + do/does/did + V"
    ],
    [
     "Here / there + V + S",
     "Here/There + V + danh từ chủ ngữ"
    ],
    [
     "Nơi chốn + V + S",
     "Adverbial of place + V + S (S là danh từ)"
    ],
    [
     "So / such",
     "So + adj + be + S + that ... · Such + be + N + that ..."
    ],
    [
     "Do nhấn mạnh",
     "S + do/does/did + V nguyên mẫu"
    ]
   ],
   "grammar": [
    [
     "Đưa nơi chốn hoặc hướng lên đầu câu",
     "Động từ đứng trước chủ ngữ, thường là danh từ.",
     "Here comes the bus! | On the table lay a small box."
    ],
    [
     "Nhấn mạnh mức độ",
     "So + adj hoặc such + be + N + that.",
     "So tired was she that she fell asleep at once. | Such was his anger that he left the room."
    ],
    [
     "Nhấn mạnh sự thật hoặc phản bác",
     "Do/does/did + V nguyên mẫu.",
     "I do like your new haircut. | I did call you! You didn't answer."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Chọn thành phần cần nhấn mạnh: Nơi chốn, mức độ hay sự thật của câu. 2) Đảo vị trí động từ: Với nơi chốn và so/such, động từ đứng trước chủ ngữ. Chủ ngữ là đại từ thì không đảo (Here he comes). 3) Dùng do khi cần nhấn mạnh động từ: Do/does/did mang trọng âm, động từ chính về nguyên mẫu.",
     "mức độ → So tired ... | Down came the rain · Here he comes | She did say that."
    ],
    [
     "Lỗi thường gặp",
     "Sai: Here the bus comes! Đúng: Here comes the bus! (Chủ ngữ là danh từ thì động từ đứng trước.) Sai: Here comes he! Đúng: Here he comes! (Chủ ngữ là đại từ thì không đảo.) Sai: So tired she was that she fell asleep. Đúng: So tired was she that she fell asleep. (So + adj ở đầu câu phải đảo.) Sai: I do liking your haircut. Đúng: I do like your haircut. (Sau do dùng động từ nguyên mẫu.)",
     "Here comes the bus! | Here he comes! | So tired was she that she fell asleep. | I do like your haircut."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ là danh từ hay đại từ khi đảo? · So/such ở đầu câu có đảo chưa? · Sau do/does/did là động từ nguyên mẫu chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Here ___ the bus!",
     "comes",
     [
      "is coming",
      "does come"
     ],
     "Here + V + S."
    ],
    [
     "So tired ___ that she fell asleep at once.",
     "was she",
     [
      "she was",
      "she were"
     ],
     "So + adj + was + S."
    ],
    [
     "Such ___ the noise that nobody could sleep.",
     "was",
     [
      "were",
      "is it"
     ],
     "Such + be + N."
    ],
    [
     "On the table ___ a small box.",
     "lay",
     [
      "laid",
      "was lay"
     ],
     "Lay là quá khứ của lie."
    ],
    [
     "Which sentence is correct?",
     "I do like your new haircut.",
     [
      "I does like your new haircut.",
      "I do liking your new haircut."
     ],
     "Do + V nguyên mẫu."
    ],
    [
     "'You didn't call me.' 'I ___ call you! You didn't answer.'",
     "did",
     [
      "do",
      "was"
     ],
     "Did nhấn mạnh quá khứ."
    ]
   ],
   "gaps": [
    [
     "I ___ believe you, but I need proof. (nhấn mạnh)",
     [
      "do"
     ],
     "",
     "Do + V nhấn mạnh."
    ],
    [
     "Such ___ his anger that he left the room.",
     [
      "was"
     ],
     "",
     "Such was ..."
    ],
    [
     "So difficult ___ the exam that few students passed.",
     [
      "was"
     ],
     "",
     "So difficult was ..."
    ],
    [
     "Along the street ___ a small dog. (chạy, quá khứ)",
     [
      "ran"
     ],
     "",
     "Nơi chốn + V + S: ran."
    ]
   ],
   "sentences": [
    [
     "Here comes the bus!",
     "Xe buýt đến rồi kìa!"
    ],
    [
     "So tired was she that she fell asleep at once.",
     "Cô ấy mệt đến mức ngủ thiếp đi ngay."
    ],
    [
     "Such was the noise that nobody could sleep.",
     "Tiếng ồn lớn đến mức không ai ngủ được."
    ],
    [
     "I do like your new haircut.",
     "Tôi thật sự thích kiểu tóc mới của bạn."
    ],
    [
     "On the table lay a small box.",
     "Trên bàn có một chiếc hộp nhỏ."
    ]
   ]
  },
  {
   "id": "wh-c1-nominalisation",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Nominalisation",
   "en": "Văn phong trang trọng",
   "desc": "Danh từ hóa là biến động từ hoặc tính từ thành danh từ để viết gọn, trang trọng và khách quan hơn, nhất là trong văn học thuật và báo cáo.",
   "formula": [
    [
     "Công thức",
     "động từ / tính từ → danh từ (-ion, -ment, -ure, -ity, -ance...) trong cụm danh từ"
    ],
    [
     "Động từ → danh từ",
     "decide → decision · expand → expansion · fail → failure · grow → growth"
    ],
    [
     "Tính từ → danh từ",
     "efficient → efficiency · disappointed → disappointment · important → importance"
    ],
    [
     "Mệnh đề → cụm danh từ",
     "S + V → The + N (of ...)"
    ],
    [
     "Be + adj → danh từ",
     "There was + (adj) + N + in/of ..."
    ]
   ],
   "grammar": [
    [
     "Viết trang trọng, học thuật",
     "Thay câu giản dị bằng cụm danh từ.",
     "Prices are going up and that worries people. → Rising prices are a source of concern."
    ],
    [
     "Rút gọn hai mệnh đề thành một",
     "Dùng danh từ làm chủ ngữ.",
     "The government decided to raise taxes. → The decision to raise taxes was unpopular."
    ],
    [
     "Nói về quá trình hoặc xu hướng",
     "Dùng danh từ như rise, growth, decline.",
     "Prices rose sharply. → There was a sharp rise in prices."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm động từ hoặc tính từ trong câu gốc: Đây là phần sẽ được danh từ hóa. 2) Đổi sang danh từ tương ứng: Tra từ điển nếu cần, vì hậu tố không đều. 3) Viết lại câu với danh từ làm trung tâm: Dùng giới từ như of, in, to để nối các thành phần.",
     "decided | decide → decision | The decision to raise taxes was unpopular."
    ],
    [
     "Lỗi thường gặp",
     "Sai: The decide to raise taxes was unpopular. Đúng: The decision to raise taxes was unpopular. (Sau the cần danh từ, không dùng động từ.) Sai: Her efficient impressed us. Đúng: Her efficiency impressed us. (Làm chủ ngữ phải là danh từ.) Sai: There was a sharp rise of prices. Đúng: There was a sharp rise in prices. (Rise đi với in.) Sai: The analyse of the data took a week. Đúng: The analysis of the data took a week. (Analyse là động từ, danh từ là analysis.)",
     "The decision to raise taxes was unpopular. | Her efficiency impressed us. | There was a sharp rise in prices. | The analysis of the data took a week."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu gốc có động từ hoặc tính từ có thể thành danh từ không? · Danh từ đã đúng dạng chưa? · Giới từ đi kèm danh từ đã đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "The government decided to raise taxes. → The ___ to raise taxes was unpopular.",
     "decision",
     [
      "decide",
      "decisive"
     ],
     "Danh từ của decide là decision."
    ],
    [
     "Prices rose sharply. → There was a sharp ___ in prices.",
     "rise",
     [
      "raise",
      "rose"
     ],
     "Danh từ rise."
    ],
    [
     "He failed to arrive on time. → His ___ to arrive on time caused problems.",
     "failure",
     [
      "fail",
      "failing"
     ],
     "Danh từ của fail là failure."
    ],
    [
     "She is very efficient. → Her ___ impressed us.",
     "efficiency",
     [
      "efficient",
      "efficiently"
     ],
     "Danh từ efficiency."
    ],
    [
     "Which sentence is more formal?",
     "Rising prices are a source of concern.",
     [
      "People are worried because prices are going up.",
      "Prices are rising and that worries people."
     ],
     "Cụm danh từ làm chủ ngữ tạo văn phong trang trọng."
    ],
    [
     "We analysed the data. → The ___ of the data took a week.",
     "analysis",
     [
      "analyse",
      "analytical"
     ],
     "Danh từ analysis."
    ]
   ],
   "gaps": [
    [
     "They arrived late. → Their late ___ (arrive) annoyed us.",
     [
      "arrival"
     ],
     "",
     "Danh từ arrival."
    ],
    [
     "The company expanded. → The ___ (expand) of the company created jobs.",
     [
      "expansion"
     ],
     "",
     "Danh từ expansion."
    ],
    [
     "He is deeply disappointed. → His deep ___ (disappoint) was obvious.",
     [
      "disappointment"
     ],
     "",
     "Danh từ disappointment."
    ],
    [
     "Many people argued about the plan. → There was much ___ (argue) about the plan.",
     [
      "argument"
     ],
     "",
     "Danh từ argument."
    ]
   ],
   "sentences": [
    [
     "The decision to raise taxes was unpopular.",
     "Quyết định tăng thuế không được ủng hộ."
    ],
    [
     "There was a sharp rise in prices.",
     "Giá cả tăng mạnh."
    ],
    [
     "His failure to arrive on time caused problems.",
     "Việc anh ấy không đến đúng giờ gây ra vấn đề."
    ],
    [
     "The analysis of the data took a week.",
     "Việc phân tích dữ liệu mất một tuần."
    ],
    [
     "Rising prices are a source of concern.",
     "Giá cả leo thang là nguồn gây lo ngại."
    ]
   ]
  },
  {
   "id": "wh-c1-absolute-clauses",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Absolute clauses & with-phrases",
   "en": "Mệnh đề phân từ",
   "desc": "Mệnh đề tuyệt đối có chủ ngữ riêng khác chủ ngữ của mệnh đề chính, đi kèm phân từ: The weather being bad, we stayed at home.",
   "formula": [
    [
     "Công thức",
     "N + V-ing / V3 / being + adj, S + V · With + N + V-ing / V3 / adj / prep phrase, S + V"
    ],
    [
     "N + V-ing",
     "N + V-ing, S + V"
    ],
    [
     "N + V3",
     "N + V3, S + V"
    ],
    [
     "With + N + ...",
     "With + N + V-ing / V3 / adj / giới từ"
    ],
    [
     "Cụm cố định",
     "Weather permitting · All things considered · That done · Time permitting"
    ]
   ],
   "grammar": [
    [
     "Nêu nguyên nhân hoặc hoàn cảnh",
     "Chủ ngữ của cụm khác chủ ngữ mệnh đề chính.",
     "The weather being bad, we stayed at home."
    ],
    [
     "Mô tả hoàn cảnh bằng with",
     "With + N + phân từ/tính từ.",
     "With the exams over, the students went out to celebrate. | She sat there with her arms folded."
    ],
    [
     "Cụm cố định trang trọng",
     "Dùng trong văn viết.",
     "Weather permitting, we will have the party outside. | All things considered, it was a success."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra chủ ngữ: Nếu chủ ngữ mỗi vế khác nhau thì giữ chủ ngữ riêng trong cụm. 2) Chọn dạng phân từ: Chủ động: V-ing. Bị động hoặc đã xong: V3 hoặc having been V3. 3) Dùng with để mô tả: With + N + phân từ/tính từ cho hoàn cảnh đi kèm.",
     "The weather being bad, we ... | The work finished | with his hair dripping"
    ],
    [
     "Lỗi thường gặp",
     "Sai: With the children are asleep, we watched a film. Đúng: With the children asleep, we watched a film. (Trong cụm with không dùng động từ chia thì.) Sai: Being bad, we stayed at home. Đúng: The weather being bad, we stayed at home. (Cụm nói về thời tiết, không phải we, nên phải có chủ ngữ riêng.) Sai: With the sun to shine, we went for a walk. Đúng: With the sun shining, we went for a walk. (Dùng V-ing, không dùng to V.) Sai: Permitting weather, we will have the party outside. Đúng: Weather permitting, we will have the party outside. (Cụm cố định: Weather permitting.)",
     "With the children asleep, we watched a film. | The weather being bad, we stayed at home. | With the sun shining, we went for a walk. | Weather permitting, we will have the party outside."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ của cụm có khác mệnh đề chính không? · Phân từ đã đúng dạng (V-ing hay V3) chưa? · Trong cụm with đã bỏ động từ chia thì chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ the exams over, the students went out to celebrate.",
     "With",
     [
      "Having",
      "For"
     ],
     "With + N + adv."
    ],
    [
     "The weather ___ bad, we stayed at home.",
     "being",
     [
      "is",
      "been"
     ],
     "Mệnh đề tuyệt đối: N + being + adj."
    ],
    [
     "___ permitting, we will have the party outside.",
     "Weather",
     [
      "The weather",
      "Weathers"
     ],
     "Cụm cố định: Weather permitting."
    ],
    [
     "She sat there with her arms ___.",
     "folded",
     [
      "fold",
      "folding"
     ],
     "With + N + V3 (bị động)."
    ],
    [
     "Which sentence is correct?",
     "With the children asleep, we watched a film.",
     [
      "With the children are asleep, we watched a film.",
      "With the children to asleep, we watched a film."
     ],
     "With + N + adj."
    ],
    [
     "He walked in with his hair ___ from the rain.",
     "dripping",
     [
      "dripped",
      "drip"
     ],
     "With + N + V-ing."
    ]
   ],
   "gaps": [
    [
     "All things ___ (consider), it was a success.",
     [
      "considered"
     ],
     "",
     "Cụm cố định: all things considered."
    ],
    [
     "With the sun ___ (shine), we went for a walk.",
     [
      "shining"
     ],
     "",
     "With + N + V-ing."
    ],
    [
     "The work ___ (finish), they went home.",
     [
      "finished",
      "having been finished"
     ],
     "",
     "Chủ ngữ riêng + V3."
    ],
    [
     "She stood there, tears ___ (run) down her face.",
     [
      "running"
     ],
     "",
     "Chủ ngữ riêng + V-ing."
    ]
   ],
   "sentences": [
    [
     "The weather being bad, we stayed at home.",
     "Vì thời tiết xấu, chúng tôi ở nhà."
    ],
    [
     "With the exams over, the students went out to celebrate.",
     "Thi xong, học sinh ra ngoài ăn mừng."
    ],
    [
     "She sat there with her arms folded.",
     "Cô ấy ngồi đó, khoanh tay."
    ],
    [
     "Weather permitting, we will have the party outside.",
     "Nếu thời tiết cho phép, chúng tôi sẽ tổ chức tiệc ngoài trời."
    ],
    [
     "She stood there, tears running down her face.",
     "Cô ấy đứng đó, nước mắt chảy dài trên mặt."
    ]
   ]
  },
  {
   "id": "wh-c1-modal-nuances",
   "group": 11,
   "grade": 12,
   "icon": "🔑",
   "title": "Modal nuances & semi-modals",
   "en": "Động từ khuyết thiếu",
   "desc": "Các cụm gần như modal giúp diễn đạt sắc thái tinh tế: may well (rất có thể), might as well (cũng nên, không có lý do gì không), be bound to (chắc chắn sẽ), be likely to,…",
   "formula": [
    [
     "Công thức",
     "may well + V · might as well + V · be bound/likely/due/supposed to + V · can't help + V-ing"
    ],
    [
     "Chắc chắn / có khả năng",
     "be bound to + V · be likely to + V · may well + V"
    ],
    [
     "Theo kế hoạch / quy định",
     "be due to + V · be supposed to + V · be scheduled to + V"
    ],
    [
     "Might as well",
     "might/may as well + V"
    ],
    [
     "Can't help",
     "can't help + V-ing"
    ]
   ],
   "grammar": [
    [
     "Mức độ chắc chắn",
     "May well, be bound to, be likely to.",
     "He's very experienced. He is bound to get the job. | She may well be late; the traffic is terrible."
    ],
    [
     "Kế hoạch và quy định",
     "Be due to, be supposed to.",
     "The meeting is due to start at nine. | You are supposed to wear a helmet."
    ],
    [
     "Sắc thái đặc biệt",
     "Might as well, can't help, would (từ chối).",
     "There's nothing on TV; we might as well go to bed. | I couldn't help laughing. | The car wouldn't start."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định sắc thái: Chắc chắn, kế hoạch, quy định hay sự bất lực? 2) Chọn cấu trúc: Dùng bảng ở mẫu câu. 3) Kiểm tra dạng theo sau: Hầu hết đi với to V. Can't help đi với V-ing.",
     "quy định → be supposed to | be bound to | can't help laughing"
    ],
    [
     "Lỗi thường gặp",
     "Sai: You are supposed wear a helmet. Đúng: You are supposed to wear a helmet. (Thiếu to sau supposed.) Sai: I couldn't help to laugh. Đúng: I couldn't help laughing. (Can't help + V-ing.) Sai: He is bound getting the job. Đúng: He is bound to get the job. (Be bound to + V.) Sai: We might as well to wait here. Đúng: We might as well wait here. (Might as well + V nguyên mẫu.)",
     "You are supposed to wear a helmet. | I couldn't help laughing. | He is bound to get the job. | We might as well wait here."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đang diễn đạt sắc thái gì: chắc chắn, kế hoạch, quy định? · Cấu trúc đã đi kèm to V hay V-ing đúng chưa? · Might as well và may well có bị nhầm không?",
     ""
    ]
   ],
   "quiz": [
    [
     "He's very experienced. He ___ get the job.",
     "is bound to",
     [
      "used to",
      "would to"
     ],
     "Chắc chắn sẽ: be bound to."
    ],
    [
     "There's nothing on TV; we ___ go to bed.",
     "might as well",
     [
      "may well",
      "would better"
     ],
     "Might as well: cũng nên."
    ],
    [
     "She ___ be late; the traffic is terrible.",
     "may well",
     [
      "may as well",
      "needn't"
     ],
     "May well: rất có thể."
    ],
    [
     "I couldn't help ___ when I heard the joke.",
     "laughing",
     [
      "laugh",
      "to laugh"
     ],
     "Can't help + V-ing."
    ],
    [
     "Which sentence is correct?",
     "You are supposed to wear a helmet.",
     [
      "You are supposed wear a helmet.",
      "You supposed to wearing a helmet."
     ],
     "Be supposed to + V."
    ],
    [
     "What does 'The car wouldn't start' mean?",
     "The car refused to start.",
     [
      "The car used to start.",
      "The car might start."
     ],
     "Would diễn tả sự từ chối."
    ]
   ],
   "gaps": [
    [
     "The meeting is ___ to start at nine. (theo kế hoạch)",
     [
      "due",
      "supposed",
      "scheduled"
     ],
     "",
     "Be due/supposed/scheduled to."
    ],
    [
     "I can't ___ feeling sorry for him.",
     [
      "help"
     ],
     "",
     "Can't help + V-ing."
    ],
    [
     "It's ___ to rain tomorrow. (có khả năng)",
     [
      "likely"
     ],
     "",
     "Be likely to."
    ],
    [
     "We ___ as well wait here; the bus is late.",
     [
      "might",
      "may"
     ],
     "",
     "Might/may as well."
    ]
   ],
   "sentences": [
    [
     "He's very experienced. He is bound to get the job.",
     "Anh ấy rất giàu kinh nghiệm. Chắc chắn anh ấy sẽ được nhận."
    ],
    [
     "There's nothing on TV; we might as well go to bed.",
     "Không có gì hay trên tivi, mình đi ngủ cho rồi."
    ],
    [
     "I couldn't help laughing when I heard the joke.",
     "Tôi không thể không cười khi nghe câu đùa."
    ],
    [
     "The meeting is due to start at nine.",
     "Cuộc họp dự kiến bắt đầu lúc chín giờ."
    ],
    [
     "The car wouldn't start.",
     "Xe không chịu nổ máy."
    ]
   ]
  },
  {
   "id": "wh-c1-hedging-language",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Hedging language",
   "en": "Văn phong trang trọng",
   "desc": "Hedging là cách nói giảm độ chắc chắn để phát biểu thận trọng, khách quan và đúng mức, rất phổ biến trong văn học thuật.",
   "formula": [
    [
     "Công thức",
     "seem / appear / tend to + V · may / might + V · arguably / somewhat / generally · It would seem that ..."
    ],
    [
     "Động từ hedging",
     "seem / appear / tend / suggest / indicate + (to V)"
    ],
    [
     "It + would seem/appear",
     "It would seem / appears (that) + mệnh đề"
    ],
    [
     "Trạng từ",
     "arguably / somewhat / relatively / generally / perhaps + ..."
    ],
    [
     "Cụm giới hạn",
     "to some extent · to a certain extent · on the whole · in most cases"
    ]
   ],
   "grammar": [
    [
     "Nói giảm mức độ khẳng định",
     "Tránh khẳng định tuyệt đối khi bằng chứng chưa đủ mạnh.",
     "The results appear to suggest a link. | It would seem that the figures are wrong."
    ],
    [
     "Giới hạn phạm vi phát biểu",
     "Nêu rõ phát biểu chỉ đúng ở một mức độ nào đó.",
     "To a certain extent, the plan was successful. | Younger people tend to use social media more."
    ],
    [
     "Đưa ý kiến có thể tranh luận",
     "Arguably, perhaps, possibly.",
     "Arguably, this is the best solution."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định mức độ bằng chứng: Nếu bằng chứng chưa tuyệt đối, hãy nói giảm. 2) Chọn công cụ hedging: Động từ, trạng từ hoặc cụm giới hạn. 3) Đừng lạm dụng: Dùng một hoặc hai công cụ mỗi câu là đủ.",
     "ít dữ liệu → seem, may | tend to | It would seem that ... (không nói It would perhaps seem possibly that ...)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: This proves the theory. Đúng: This seems to support the theory. (Proves quá chắc chắn khi dữ liệu còn hạn chế.) Sai: The results appears to suggest a link. Đúng: The results appear to suggest a link. (Results là số nhiều nên dùng appear.) Sai: Younger people tends to use social media more. Đúng: Younger people tend to use social media more. (People là số nhiều nên dùng tend.) Sai: It would seem possibly perhaps that the figures are wrong. Đúng: It would seem that the figures are wrong. (Dùng một công cụ hedging là đủ.)",
     "This seems to support the theory. | The results appear to suggest a link. | Younger people tend to use social media more. | It would seem that the figures are wrong."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu đã quá khẳng định so với bằng chứng chưa? · Công cụ hedging có hợp ngữ pháp không? · Có dùng quá nhiều từ làm câu rối không?",
     ""
    ]
   ],
   "quiz": [
    [
     "The results ___ to suggest a link.",
     "appear",
     [
      "are appearing",
      "appears"
     ],
     "Results là số nhiều: appear to suggest."
    ],
    [
     "Which phrase makes the statement more cautious?",
     "It is likely that",
     [
      "It is certain that",
      "Everyone knows that"
     ],
     "Likely là cách nói giảm độ chắc chắn."
    ],
    [
     "Younger people ___ to use social media more.",
     "tend",
     [
      "are tending",
      "tends"
     ],
     "Tend to + V."
    ],
    [
     "To a certain ___, the plan was successful.",
     "extent",
     [
      "size",
      "way"
     ],
     "To a certain extent."
    ],
    [
     "Which sentence is more cautious?",
     "This seems to support the theory.",
     [
      "This proves the theory.",
      "This is the truth."
     ],
     "Seems to support là cách nói giảm."
    ],
    [
     "'___, this is the best solution.' (có thể lập luận rằng)",
     "Arguably",
     [
      "Obviously",
      "Never"
     ],
     "Arguably nói giảm."
    ]
   ],
   "gaps": [
    [
     "It would ___ that the figures are wrong. (dường như)",
     [
      "seem",
      "appear"
     ],
     "",
     "It would seem/appear that."
    ],
    [
     "This is ___ the most important factor. (có lẽ)",
     [
      "arguably",
      "probably",
      "perhaps"
     ],
     "",
     "Arguably/probably/perhaps."
    ],
    [
     "The film is ___ too long. (hơi)",
     [
      "somewhat",
      "slightly"
     ],
     "",
     "Somewhat/slightly."
    ],
    [
     "On the ___, the economy is improving. (nhìn chung)",
     [
      "whole"
     ],
     "",
     "On the whole."
    ]
   ],
   "sentences": [
    [
     "The results appear to suggest a link between the two.",
     "Kết quả dường như cho thấy có mối liên hệ giữa hai điều."
    ],
    [
     "Younger people tend to use social media more.",
     "Người trẻ có xu hướng dùng mạng xã hội nhiều hơn."
    ],
    [
     "To a certain extent, the plan was successful.",
     "Ở một mức độ nào đó, kế hoạch đã thành công."
    ],
    [
     "Arguably, this is the best solution.",
     "Có thể lập luận rằng đây là giải pháp tốt nhất."
    ],
    [
     "On the whole, the economy is improving.",
     "Nhìn chung, nền kinh tế đang cải thiện."
    ]
   ]
  },
  {
   "id": "wh-c1-discourse-markers",
   "group": 11,
   "grade": 12,
   "icon": "🔗",
   "title": "Discourse markers",
   "en": "Liên từ",
   "desc": "Discourse markers là các từ và cụm nối ý giữa các câu hoặc đoạn để bài nói, bài viết mạch lạc: thêm ý (moreover, furthermore, in addition, besides), đối lập (however,…",
   "formula": [
    [
     "Công thức",
     "Marker, + mệnh đề · mệnh đề; marker, mệnh đề"
    ],
    [
     "Thêm ý",
     "S + V. Moreover / Furthermore / In addition, S + V"
    ],
    [
     "Đối lập",
     "S + V. However / Nevertheless / Nonetheless, S + V"
    ],
    [
     "Kết quả",
     "S + V. Consequently / As a result / Therefore, S + V"
    ],
    [
     "On the one hand ... on the other hand",
     "On the one hand, ... On the other hand, ..."
    ]
   ],
   "grammar": [
    [
     "Thêm ý",
     "Moreover, furthermore, in addition, besides.",
     "The product is cheap. Moreover, it is durable."
    ],
    [
     "Đối lập và nhượng bộ",
     "However, nevertheless, nonetheless, on the contrary.",
     "The plan was risky. Nevertheless, we went ahead. | Many people think it's easy. On the contrary, it is quite difficult."
    ],
    [
     "Kết quả, ví dụ, kết luận",
     "Consequently, as a result, for instance, in conclusion.",
     "The costs were high. As a result, the project was cancelled. | In conclusion, I'd like to thank everyone."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định quan hệ giữa hai ý: Thêm ý, đối lập, kết quả, ví dụ hay kết luận? 2) Chọn marker đúng nghĩa: Không dùng however khi ý tiếp nối, không dùng moreover khi đối lập. 3) Đặt dấu câu đúng: Marker đầu câu có dấu phẩy sau. Giữa hai mệnh đề thì dùng dấu chấm phẩy hoặc chấm.",
     "kết quả → consequently | đối lập → however | ..., however, ... / . However, ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: It was expensive, however I bought it. Đúng: It was expensive; however, I bought it. (Dùng dấu chấm phẩy hoặc dấu chấm trước however.) Sai: He studied hard. Nevertheless, he passed. Đúng: He studied hard. Consequently, he passed. (Kết quả thuận nên dùng consequently, không dùng nevertheless.) Sai: She is talented. However, she works very hard. (ý tiếp nối) Đúng: She is talented. Moreover, she works very hard. (Hai ý cùng hướng nên dùng moreover.) Sai: At the one hand, it is cheap; on the other, it is slow. Đúng: On the one hand, it is cheap; on the other, it is slow. (Cụm cố định là on the one hand.)",
     "It was expensive; however, I bought it. | He studied hard. Consequently, he passed. | She is talented. Moreover, she works very hard. | On the one hand, it is cheap; on the other, it is slow."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Quan hệ ý đã đúng chưa? · Marker đã đúng nghĩa chưa? · Dấu câu quanh marker đã đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "The product is cheap. ___, it is also durable.",
     "Moreover",
     [
      "Nonetheless",
      "Consequently"
     ],
     "Thêm ý: moreover."
    ],
    [
     "He studied hard. ___, he passed the exam.",
     "Consequently",
     [
      "Nonetheless",
      "Whereas"
     ],
     "Kết quả: consequently."
    ],
    [
     "The plan was risky. ___, we decided to go ahead.",
     "Nevertheless",
     [
      "Furthermore",
      "Therefore"
     ],
     "Đối lập: nevertheless."
    ],
    [
     "___ to the report, sales fell by 10%.",
     "According",
     [
      "Because",
      "Despite of"
     ],
     "According to."
    ],
    [
     "Which phrase introduces an example?",
     "For instance",
     [
      "On the contrary",
      "In conclusion"
     ],
     "For instance = ví dụ."
    ],
    [
     "___, I'd like to thank everyone for coming.",
     "In conclusion",
     [
      "On the other hand",
      "Besides"
     ],
     "In conclusion = kết luận."
    ]
   ],
   "gaps": [
    [
     "Many people think it's easy. ___, it is quite difficult.",
     [
      "On the contrary"
     ],
     "",
     "On the contrary phủ nhận ý trước."
    ],
    [
     "The costs were high. ___, the project was cancelled.",
     [
      "As a result",
      "Consequently",
      "Therefore"
     ],
     "",
     "Kết quả."
    ],
    [
     "She is talented. ___, she works very hard.",
     [
      "Moreover",
      "Furthermore",
      "In addition"
     ],
     "",
     "Thêm ý."
    ],
    [
     "___ the one hand, it is cheap; on the other, it is slow.",
     [
      "On"
     ],
     "",
     "On the one hand."
    ]
   ],
   "sentences": [
    [
     "The product is cheap. Moreover, it is durable.",
     "Sản phẩm rẻ. Hơn nữa, nó còn bền."
    ],
    [
     "The plan was risky. Nevertheless, we decided to go ahead.",
     "Kế hoạch rủi ro. Tuy nhiên chúng tôi vẫn quyết định tiếp tục."
    ],
    [
     "The costs were high. As a result, the project was cancelled.",
     "Chi phí cao. Vì vậy dự án bị hủy."
    ],
    [
     "Many people think it's easy. On the contrary, it is quite difficult.",
     "Nhiều người nghĩ nó dễ. Ngược lại, nó khá khó."
    ],
    [
     "In conclusion, I'd like to thank everyone for coming.",
     "Cuối cùng, tôi xin cảm ơn mọi người đã đến."
    ]
   ]
  },
  {
   "id": "wh-c1-complex-noun-phrases",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Complex noun phrases",
   "en": "Cụm danh từ",
   "desc": "Cụm danh từ phức có thể mang nhiều thông tin trước và sau danh từ chính.",
   "formula": [
    [
     "Công thức",
     "adv + adj + N · số-N(ít)-adj · N + that-clause / to V / of + V-ing / đồng vị ngữ"
    ],
    [
     "Trạng từ + tính từ",
     "adv + adj + N"
    ],
    [
     "Tính từ ghép",
     "số/tính từ/trạng từ + N(ít) + -ed/-ing"
    ],
    [
     "N + that / to V / of V-ing",
     "the fact/news/idea/decision + that / to V / of V-ing"
    ],
    [
     "Đồng vị ngữ",
     "N, + cụm danh từ, ..."
    ]
   ],
   "grammar": [
    [
     "Tạo tính từ ghép",
     "Danh từ trong tính từ ghép dùng số ít.",
     "a ten-year-old boy | a time-consuming task | a well-written report"
    ],
    [
     "Bổ nghĩa danh từ bằng mệnh đề hoặc cụm",
     "The fact that, the decision to V, the idea of V-ing.",
     "The fact that he lied surprised everyone. | The decision to cancel the project was announced."
    ],
    [
     "Thêm thông tin bằng đồng vị ngữ",
     "Cụm danh từ đặt cạnh danh từ để giải thích, ngăn bằng dấu phẩy.",
     "Mr Tran, the founder of the company, spoke first."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định danh từ chính: Phần còn lại sẽ bổ nghĩa cho nó. 2) Thêm bổ nghĩa phía trước: Trạng từ, tính từ, tính từ ghép. 3) Thêm bổ nghĩa phía sau: Mệnh đề that, to V, giới từ + V-ing hoặc đồng vị ngữ.",
     "report | a well-written report | The fact that he lied ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: He is a ninety-years-old man. Đúng: He is a ninety-year-old man. (Danh từ trong tính từ ghép không thêm s.) Sai: The fact which he lied surprised everyone. Đúng: The fact that he lied surprised everyone. (The fact đi với that.) Sai: a surprising effectively method Đúng: a surprisingly effective method (Trạng từ bổ nghĩa cho tính từ phía sau.) Sai: The idea of to work from home is popular. Đúng: The idea of working from home is popular. (Sau giới từ of dùng V-ing.)",
     "He is a ninety-year-old man. | The fact that he lied surprised everyone. | a surprisingly effective method | The idea of working from home is popular."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Danh từ trong tính từ ghép đã ở số ít chưa? · Danh từ đi với that, to V hay of V-ing? · Đồng vị ngữ đã được ngăn bằng dấu phẩy chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She wrote a ___ report.",
     "well-written",
     [
      "well-writing",
      "write-well"
     ],
     "Tính từ ghép: well-written."
    ],
    [
     "The fact ___ he lied surprised everyone.",
     "that",
     [
      "which",
      "what"
     ],
     "The fact that."
    ],
    [
     "He is a ___ man.",
     "ninety-year-old",
     [
      "ninety-years-old",
      "ninety year olds"
     ],
     "Danh từ ở số ít trong tính từ ghép."
    ],
    [
     "The decision ___ the project was announced yesterday.",
     "to cancel",
     [
      "cancel",
      "of cancel"
     ],
     "The decision to cancel."
    ],
    [
     "Which noun phrase is correct?",
     "a surprisingly effective method",
     [
      "a surprising effectively method",
      "an effective surprisingly method"
     ],
     "Trạng từ đứng trước tính từ."
    ],
    [
     "Mr Tran, ___ of the company, spoke first.",
     "the founder",
     [
      "founder the",
      "a founding"
     ],
     "Đồng vị ngữ: the founder of the company."
    ]
   ],
   "gaps": [
    [
     "The news ___ the company was closing shocked us.",
     [
      "that"
     ],
     "",
     "The news that + mệnh đề."
    ],
    [
     "It was a time-___ task. (tốn thời gian)",
     [
      "consuming"
     ],
     "",
     "Time-consuming."
    ],
    [
     "She took a three-___ course. (số ít)",
     [
      "month"
     ],
     "",
     "Three-month, không thêm s."
    ],
    [
     "The idea ___ working from home is popular.",
     [
      "of"
     ],
     "",
     "The idea of + V-ing."
    ]
   ],
   "sentences": [
    [
     "She wrote a well-written report.",
     "Cô ấy viết một bản báo cáo được viết rất tốt."
    ],
    [
     "The fact that he lied surprised everyone.",
     "Việc anh ấy nói dối khiến mọi người ngạc nhiên."
    ],
    [
     "He is a ninety-year-old man.",
     "Ông ấy là một người đàn ông chín mươi tuổi."
    ],
    [
     "The decision to cancel the project was announced yesterday.",
     "Quyết định hủy dự án đã được công bố hôm qua."
    ],
    [
     "Mr Tran, the founder of the company, spoke first.",
     "Ông Trần, người sáng lập công ty, phát biểu đầu tiên."
    ]
   ]
  },
  {
   "id": "wh-c1-advanced-relative-clauses",
   "group": 11,
   "grade": 12,
   "icon": "🔗",
   "title": "Advanced relative clauses",
   "en": "Mệnh đề quan hệ",
   "desc": "Mệnh đề quan hệ nâng cao dùng giới từ đứng trước whom/which (the people with whom I work, the house in which she was born), lượng từ + of + whom/which (all of whom, some…",
   "formula": [
    [
     "Công thức",
     "giới từ + whom/which · số lượng + of + whom/which · whereby"
    ],
    [
     "Giới từ + whom/which",
     "N + giới từ + whom (người) / which (vật) + S + V"
    ],
    [
     "Số lượng + of whom/which",
     ", + all/some/both/neither/one of + whom/which + V"
    ],
    [
     "Whereby",
     "N + whereby + S + V"
    ],
    [
     "The extent to which",
     "the extent/degree to which + S + V"
    ]
   ],
   "grammar": [
    [
     "Giới từ đứng trước từ quan hệ",
     "Trang trọng hơn so với đẩy giới từ về cuối mệnh đề.",
     "The people with whom I work are friendly. | The house in which she was born is now a museum."
    ],
    [
     "Số lượng + of + whom/which",
     "Thêm thông tin về một phần của nhóm đã nhắc.",
     "She has three sisters, all of whom are doctors. | She bought several books, one of which was a dictionary."
    ],
    [
     "Whereby và cụm cố định",
     "Whereby mô tả hệ thống, thỏa thuận. Cụm như the extent to which.",
     "The agreement, whereby both sides promised to cooperate, was signed. | The extent to which he is responsible is unclear."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định giới từ đi với động từ hoặc danh từ: work with, born in, reason for, depend on. 2) Đặt giới từ lên trước whom/which: Người dùng whom, vật dùng which. Không dùng who hoặc that sau giới từ. 3) Chọn cấu trúc số lượng nếu nói về một phần: Số lượng + of whom/which, thường sau dấu phẩy.",
     "work with → with whom | with whom · in which | both of whom"
    ],
    [
     "Lỗi thường gặp",
     "Sai: The people with who I work are friendly. Đúng: The people with whom I work are friendly. (Sau giới từ phải dùng whom.) Sai: The house in that she was born is now a museum. Đúng: The house in which she was born is now a museum. (Sau giới từ không dùng that.) Sai: She has three sisters, all of who are doctors. Đúng: She has three sisters, all of whom are doctors. (Sau of dùng whom.) Sai: He has two sons, both of whom they live abroad. Đúng: He has two sons, both of whom live abroad. (Whom đã thay cho chủ ngữ, không thêm they.)",
     "The people with whom I work are friendly. | The house in which she was born is now a museum. | She has three sisters, all of whom are doctors. | He has two sons, both of whom live abroad."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Giới từ đã đứng trước whom/which chưa? · Whom cho người, which cho vật đã đúng chưa? · Có nhắc lại đại từ thừa không?",
     ""
    ]
   ],
   "quiz": [
    [
     "The system, ___ employees can work from home, is popular.",
     "whereby",
     [
      "whose",
      "who"
     ],
     "Whereby: theo đó."
    ],
    [
     "She has three sisters, all of ___ are doctors.",
     "whom",
     [
      "who",
      "which"
     ],
     "All of whom."
    ],
    [
     "The report, the main findings of ___ are shown below, was published.",
     "which",
     [
      "that",
      "what"
     ],
     "Of which."
    ],
    [
     "The extent to ___ he is responsible is unclear.",
     "which",
     [
      "that",
      "what"
     ],
     "To which."
    ],
    [
     "Which sentence is correct?",
     "The people with whom I work are friendly.",
     [
      "The people with who I work are friendly.",
      "The people whom with I work are friendly."
     ],
     "Giới từ + whom."
    ],
    [
     "The house in ___ she was born is now a museum.",
     "which",
     [
      "where",
      "that"
     ],
     "In which."
    ]
   ],
   "gaps": [
    [
     "He has two sons, both of ___ live abroad.",
     [
      "whom"
     ],
     "",
     "Both of whom."
    ],
    [
     "The agreement, ___ both sides promised to cooperate, was signed.",
     [
      "whereby"
     ],
     "",
     "Whereby."
    ],
    [
     "She bought several books, one of ___ was a dictionary.",
     [
      "which"
     ],
     "",
     "One of which."
    ],
    [
     "The reason for ___ he resigned remains unknown.",
     [
      "which"
     ],
     "",
     "For which."
    ]
   ],
   "sentences": [
    [
     "The people with whom I work are friendly.",
     "Những người tôi làm việc cùng rất thân thiện."
    ],
    [
     "She has three sisters, all of whom are doctors.",
     "Cô ấy có ba chị em gái, tất cả đều là bác sĩ."
    ],
    [
     "The house in which she was born is now a museum.",
     "Ngôi nhà nơi cô ấy sinh ra hiện là bảo tàng."
    ],
    [
     "The agreement, whereby both sides promised to cooperate, was signed.",
     "Thỏa thuận, theo đó hai bên hứa hợp tác, đã được ký."
    ],
    [
     "The reason for which he resigned remains unknown.",
     "Lý do ông ấy từ chức vẫn chưa được biết."
    ]
   ]
  },
  {
   "id": "wh-c1-ellipsis-substitution",
   "group": 11,
   "grade": 12,
   "icon": "📝",
   "title": "Ellipsis & substitution",
   "en": "Cấu trúc câu",
   "desc": "Ellipsis lược bỏ phần đã rõ để tránh lặp: I'd love to (come), He said he would (call).",
   "formula": [
    [
     "Công thức",
     "think/hope/be afraid + so/not · to (lược V) · one/ones · do so · if so / if not"
    ],
    [
     "So / not",
     "think/believe/suppose/hope/be afraid + so/not"
    ],
    [
     "Lược sau to",
     "want/love/agree/promise + to (bỏ động từ)"
    ],
    [
     "One / ones",
     "adj + one(s) · which one(s)"
    ],
    [
     "If so / if not",
     "If so, ... · If not, ..."
    ]
   ],
   "grammar": [
    [
     "Thay cho cả mệnh đề",
     "So và not thay mệnh đề sau think, hope, believe, be afraid, suppose.",
     "'Is he coming?' 'I think so.' | 'Will it rain?' 'I hope not.'"
    ],
    [
     "Lược động từ sau to",
     "Giữ lại to khi động từ đã rõ.",
     "'Can you help me?' 'I'd be glad to.' | She asked me to help, and I agreed to."
    ],
    [
     "Thay cho danh từ hoặc động từ",
     "One/ones cho danh từ đếm được. Do so cho một việc đã nhắc.",
     "I need some new ones. | He promised to call, and he did."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm phần đã nhắc ở trước: Một mệnh đề, một động từ hay một danh từ. 2) Chọn từ thay thế: So/not cho mệnh đề, one/ones cho danh từ, do so cho hành động. 3) Đừng lược quá nhiều: Giữ đủ thông tin để người nghe không hiểu nhầm.",
     "He is coming → so | I think so. | I'd love to. ✓ / I'd love. ✗"
    ],
    [
     "Lỗi thường gặp",
     "Sai: 'Will it rain?' 'I hope no.' Đúng: 'Will it rain?' 'I hope not.' (Thay mệnh đề phủ định bằng not.) Sai: I agreed it. Đúng: I agreed to. (Giữ to khi lược động từ.) Sai: Do you have a bigger it? Đúng: Do you have a bigger one? (Dùng one để thay danh từ đếm được.) Sai: Are you tired? If yes so, go to bed. Đúng: Are you tired? If so, go to bed. (Cụm cố định là if so.)",
     "'Will it rain?' 'I hope not.' | I agreed to. | Do you have a bigger one? | Are you tired? If so, go to bed."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Phần bị thay hoặc lược đã rõ từ ngữ cảnh chưa? · Đã chọn so/not, to, one(s) hay do so cho đúng chưa? · Câu có còn đủ nghĩa không?",
     ""
    ]
   ],
   "quiz": [
    [
     "'Will it rain?' 'I hope ___.'",
     "not",
     [
      "no",
      "it not"
     ],
     "I hope not."
    ],
    [
     "'Is he coming?' 'I think ___.'",
     "so",
     [
      "it",
      "that"
     ],
     "I think so."
    ],
    [
     "She asked me to help, and I agreed ___.",
     "to",
     [
      "to it",
      "it"
     ],
     "Lược động từ, giữ to."
    ],
    [
     "I don't like this shirt. Do you have a bigger ___?",
     "one",
     [
      "it",
      "that"
     ],
     "One thay cho shirt."
    ],
    [
     "Which sentence is correct?",
     "If so, please let me know.",
     [
      "If it so, please let me know.",
      "If yes so, please let me know."
     ],
     "Cụm cố định: if so."
    ],
    [
     "He promised to call, and he ___.",
     "did",
     [
      "did so it",
      "does it"
     ],
     "Lược động từ: he did."
    ]
   ],
   "gaps": [
    [
     "'Is it going to be sunny tomorrow?' 'I don't think ___.'",
     [
      "so"
     ],
     "",
     "I don't think so."
    ],
    [
     "'Why didn't you tell her?' 'Because I didn't want ___.'",
     [
      "to"
     ],
     "",
     "Lược động từ, giữ to."
    ],
    [
     "These shoes are old. I need some new ___.",
     [
      "ones"
     ],
     "",
     "Ones thay cho danh từ số nhiều."
    ],
    [
     "She said she would help, and she ___ so.",
     [
      "did"
     ],
     "",
     "Did so."
    ]
   ],
   "sentences": [
    [
     "'Is he coming?' 'I think so.'",
     "'Anh ấy có đến không?' 'Tôi nghĩ là có.'"
    ],
    [
     "'Will it rain?' 'I hope not.'",
     "'Trời có mưa không?' 'Mong là không.'"
    ],
    [
     "She asked me to help, and I agreed to.",
     "Cô ấy nhờ tôi giúp và tôi đồng ý."
    ],
    [
     "I don't like this shirt. Do you have a bigger one?",
     "Tôi không thích cái áo này. Bạn có cái nào lớn hơn không?"
    ],
    [
     "Are you tired? If so, go to bed.",
     "Bạn mệt à? Nếu vậy thì đi ngủ đi."
    ]
   ]
  },
  {
   "id": "wh-c2-literary-inversion",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Literary & rhetorical inversion",
   "en": "Đảo ngữ",
   "desc": "Ngoài đảo ngữ sau trạng từ phủ định quen thuộc, văn trang trọng và văn chương còn dùng đảo ngữ sau so, neither, nor để đồng tình hoặc đồng phủ định, và sau các cụm phủ…",
   "formula": [
    [
     "Công thức",
     "So/Neither/Nor + trợ động từ + S · Not once/On no account/At no time/In no way + trợ động từ + S + V"
    ],
    [
     "So / neither / nor",
     "So/Neither/Nor + trợ động từ + S"
    ],
    [
     "Not a word / not once",
     "Not a word / Not once + did + S + V"
    ],
    [
     "On no account / at no time / in no way",
     "On no account / At no time / In no way + trợ động từ + S + V"
    ],
    [
     "Nowhere / only then / only by",
     "Nowhere / Only then / Only by + V-ing + trợ động từ + S + V"
    ]
   ],
   "grammar": [
    [
     "Đồng tình hoặc đồng phủ định",
     "So cho khẳng định, neither và nor cho phủ định.",
     "She can swim, and so can her sister. | He isn't coming, and neither am I."
    ],
    [
     "Cấm đoán và phủ nhận mạnh",
     "On no account, at no time, in no way, under no circumstances.",
     "On no account should the door be left unlocked. | In no way am I responsible for the delay."
    ],
    [
     "Nhấn mạnh trong văn kể",
     "Not a word, not once, nowhere, only then, only by.",
     "Not a word did he say about the accident. | Only then did we realise the full extent of the damage."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định cụm đứng đầu câu: Cụm phủ định, giới hạn hoặc so/neither/nor. 2) Đặt trợ động từ trước chủ ngữ: Thiếu trợ động từ thì thêm do/does/did. 3) Dùng động từ chính ở nguyên mẫu hoặc V3 theo thì: Sau did là nguyên mẫu, sau have là V3.",
     "Not once ... | Not once did she complain. | Never have I seen such a mess."
    ],
    [
     "Lỗi thường gặp",
     "Sai: He isn't coming, and neither I am. Đúng: He isn't coming, and neither am I. (Sau neither phải đảo trợ động từ lên trước chủ ngữ.) Sai: Not a word he said about the accident. Đúng: Not a word did he say about the accident. (Cụm phủ định đứng đầu câu thì phải đảo ngữ.) Sai: Nowhere I have seen such generosity. Đúng: Nowhere have I seen such generosity. (Nowhere ở đầu câu thì đảo have lên trước I.) Sai: She can swim, and so she can her sister. Đúng: She can swim, and so can her sister. (So + trợ động từ + chủ ngữ.)",
     "He isn't coming, and neither am I. | Not a word did he say about the accident. | Nowhere have I seen such generosity. | She can swim, and so can her sister."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đầu câu có cụm phủ định, giới hạn hoặc so/neither/nor không? · Trợ động từ đã đứng trước chủ ngữ chưa? · Động từ chính đã đúng dạng sau trợ động từ chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She doesn't like jazz, and ___ does her brother.",
     "neither",
     [
      "so",
      "either"
     ],
     "Đồng phủ định: neither + trợ động từ + S."
    ],
    [
     "He can swim, and so ___ his sister.",
     "can",
     [
      "does",
      "is"
     ],
     "So lặp lại trợ động từ can: so can his sister."
    ],
    [
     "Not a word ___ he say about the accident.",
     "did",
     [
      "has",
      "was"
     ],
     "Not a word + did + S + V."
    ],
    [
     "On no account ___ the door be left unlocked.",
     "should",
     [
      "shall to",
      "is"
     ],
     "On no account + should + S + V."
    ],
    [
     "Which sentence is correct?",
     "Nowhere have I seen such generosity.",
     [
      "Nowhere I have seen such generosity.",
      "Nowhere I seen have such generosity."
     ],
     "Nowhere + have + I + V3."
    ],
    [
     "Only then ___ the full extent of the damage.",
     "did we realise",
     [
      "we realised",
      "we did realise"
     ],
     "Only then + did + S + V."
    ]
   ],
   "gaps": [
    [
     "Not once ___ she complain during the whole journey.",
     [
      "did"
     ],
     "",
     "Not once + did + S + V."
    ],
    [
     "He isn't coming, and ___ am I.",
     [
      "neither",
      "nor"
     ],
     "",
     "Neither/nor + am I."
    ],
    [
     "At no time ___ the employees informed of the change.",
     [
      "were"
     ],
     "",
     "At no time + were + S."
    ],
    [
     "In no way ___ I responsible for the delay.",
     [
      "am"
     ],
     "",
     "In no way + am I."
    ]
   ],
   "sentences": [
    [
     "She doesn't like jazz, and neither does her brother.",
     "Cô ấy không thích nhạc jazz, và anh trai cô ấy cũng vậy."
    ],
    [
     "Not a word did he say about the accident.",
     "Anh ấy không nói nửa lời về vụ tai nạn."
    ],
    [
     "On no account should the door be left unlocked.",
     "Tuyệt đối không được để cửa không khóa."
    ],
    [
     "Only then did we realise the full extent of the damage.",
     "Mãi đến lúc đó chúng tôi mới nhận ra mức độ thiệt hại."
    ],
    [
     "Nowhere have I seen such generosity.",
     "Tôi chưa từng thấy ở đâu có lòng hào phóng như vậy."
    ]
   ]
  },
  {
   "id": "wh-c2-conditional-nuances",
   "group": 12,
   "grade": 12,
   "icon": "🔀",
   "title": "Conditional nuances & politeness",
   "en": "Câu điều kiện",
   "desc": "Câu điều kiện ở trình độ cao còn có những sắc thái đặc biệt. If you will / would + V dùng để đề nghị hoặc yêu cầu lịch sự (không nói về tương lai).",
   "formula": [
    [
     "Công thức",
     "If you will/would + V · If + S + should/happen to + V · in case / lest / in the event that + mệnh đề"
    ],
    [
     "If you will/would",
     "If you will/would + V, ..."
    ],
    [
     "If ... should / happen to",
     "If + S + should/happen to + V, imperative/will"
    ],
    [
     "In case / in the event that",
     "in case + S + V (hiện tại) · in the event that + S + V"
    ],
    [
     "Lest",
     "lest + S + (should) + V nguyên mẫu"
    ]
   ],
   "grammar": [
    [
     "Đề nghị lịch sự",
     "Will/would trong mệnh đề if mang nghĩa vui lòng.",
     "If you will wait a moment, I'll fetch the manager. | I'd be grateful if you could send me the details."
    ],
    [
     "Điều kiện ít khả năng",
     "Should hoặc happen to làm giảm khả năng.",
     "If you should happen to see Anna, tell her to call me."
    ],
    [
     "Đề phòng",
     "In case, lest, in the event that.",
     "Take a map in case you get lost. | He spoke quietly lest he wake the baby."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý định: Đề nghị lịch sự, điều kiện ít khả năng hay phòng ngừa? 2) Chọn cấu trúc: Will/would cho đề nghị. Should/happen to cho khả năng thấp. In case/lest cho phòng ngừa. 3) Chú ý thì và dạng động từ: In case dùng hiện tại đơn. Lest dùng nguyên mẫu.",
     "phòng ngừa → in case / lest | If you would kindly ... | in case it gets cold · lest he wake"
    ],
    [
     "Lỗi thường gặp",
     "Sai: He spoke quietly lest he wakes the baby. Đúng: He spoke quietly lest he wake the baby. (Sau lest dùng nguyên mẫu hoặc should + V.) Sai: Take a map in case you will get lost. Đúng: Take a map in case you get lost. (In case dùng hiện tại đơn, không dùng will.) Sai: Lest he doesn't wake the baby, he spoke quietly. Đúng: He spoke quietly lest he wake the baby. (Lest đã mang nghĩa phủ định nên không thêm not.) Sai: In the event of it rains, the match will be cancelled. Đúng: In the event that it rains, the match will be cancelled. (In the event that + mệnh đề. In the event of + danh từ.)",
     "He spoke quietly lest he wake the baby. | Take a map in case you get lost. | He spoke quietly lest he wake the baby. | In the event that it rains, the match will be cancelled."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Cần đề nghị lịch sự, khả năng thấp hay phòng ngừa? · Thì sau in case/lest có đúng chưa? · Có phủ định kép sau lest không?",
     ""
    ]
   ],
   "quiz": [
    [
     "If you ___ wait a moment, I'll fetch the manager.",
     "will",
     [
      "did",
      "are"
     ],
     "If you will: đề nghị lịch sự."
    ],
    [
     "If you ___ happen to see Anna, tell her to call me.",
     "should",
     [
      "would",
      "will"
     ],
     "If you should happen to: khả năng thấp."
    ],
    [
     "Take a map ___ you get lost.",
     "in case",
     [
      "unless",
      "if only"
     ],
     "In case: phòng khi."
    ],
    [
     "He spoke quietly lest he ___ the baby.",
     "wake",
     [
      "wakes",
      "woke"
     ],
     "Lest + nguyên mẫu."
    ],
    [
     "Which sentence is correct?",
     "In the event that it rains, the match will be cancelled.",
     [
      "In the event that it will rain, the match will be cancelled.",
      "In the event of it rains, the match will be cancelled."
     ],
     "In the event that + hiện tại đơn."
    ],
    [
     "I'd be grateful if you ___ send me the details.",
     "could",
     [
      "can to",
      "are"
     ],
     "Mẫu đề nghị lịch sự: if you could."
    ]
   ],
   "gaps": [
    [
     "If anyone ___ to call, take a message. (happen)",
     [
      "happens",
      "should happen"
     ],
     "",
     "If + happens to / should happen to."
    ],
    [
     "She whispered ___ she wake anyone. (kẻo)",
     [
      "lest"
     ],
     "",
     "Lest = kẻo."
    ],
    [
     "Bring a coat ___ case it gets cold.",
     [
      "in"
     ],
     "",
     "In case."
    ],
    [
     "If you ___ kindly sign here, we can proceed. (lịch sự)",
     [
      "would",
      "will"
     ],
     "",
     "If you would/will kindly: đề nghị lịch sự."
    ]
   ],
   "sentences": [
    [
     "If you will wait a moment, I'll fetch the manager.",
     "Xin vui lòng đợi một lát, tôi sẽ đi gọi quản lý."
    ],
    [
     "If you should happen to see Anna, tell her to call me.",
     "Nếu có tình cờ gặp Anna, nhờ bảo cô ấy gọi cho tôi."
    ],
    [
     "Take a map in case you get lost.",
     "Mang theo bản đồ phòng khi bị lạc."
    ],
    [
     "He spoke quietly lest he wake the baby.",
     "Anh ấy nói khẽ kẻo làm em bé thức giấc."
    ],
    [
     "I'd be grateful if you could send me the details.",
     "Tôi rất biết ơn nếu bạn có thể gửi cho tôi thông tin chi tiết."
    ]
   ]
  },
  {
   "id": "wh-c2-tense-aspect-nuances",
   "group": 12,
   "grade": 12,
   "icon": "⏱️",
   "title": "Tense & aspect nuances",
   "en": "Thì",
   "desc": "Một thì có thể mang nhiều sắc thái ngoài nghĩa cơ bản. Will + V diễn tả thói quen hay đặc điểm điển hình (Boys will be boys).",
   "formula": [
    [
     "Công thức",
     "will + V (đặc điểm) · always + be + V-ing (phàn nàn) · was wondering (lịch sự) · present simple (lịch trình)"
    ],
    [
     "Will chỉ đặc điểm",
     "S + will + V (thói quen, đặc trưng)"
    ],
    [
     "Always + continuous",
     "S + be + always + V-ing"
    ],
    [
     "Quá khứ lịch sự",
     "I was wondering / wondered + if/whether ..."
    ],
    [
     "Present simple lịch trình",
     "S + V (hiện tại đơn) + thời gian tương lai"
    ]
   ],
   "grammar": [
    [
     "Thói quen đặc trưng và phàn nàn",
     "Will + V và always + continuous.",
     "He will sit for hours staring at the screen. | He's always leaving his clothes on the floor."
    ],
    [
     "Lịch sự và gián tiếp",
     "Dùng quá khứ để tạo khoảng cách lịch sự.",
     "I was wondering if you could lend me a pen. | I wondered whether you would mind closing the door."
    ],
    [
     "Lịch trình, tường thuật và dự đoán hoàn thành",
     "Present simple cho lịch trình, future perfect cho việc xong trước mốc.",
     "The train leaves at 6.15 tomorrow. | By the time the report is published, the situation will have changed."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý nghĩa cần diễn đạt: Thói quen, phàn nàn, lịch sự hay lịch trình? 2) Chọn thì mang sắc thái đó: Dùng bảng mẫu câu. 3) Kiểm tra mốc thời gian: Trạng từ và mốc phải khớp với thì.",
     "phàn nàn → always + continuous | lịch sự → was wondering | by the time ... will have changed"
    ],
    [
     "Lỗi thường gặp",
     "Sai: He always leaves his keys, I'm tired of it. Đúng: He's always leaving his keys. I'm tired of it. (Muốn thể hiện sự bực mình thì dùng always + continuous.) Sai: I am wondering if you could help me. (muốn rất lịch sự) Đúng: I was wondering if you could help me. (Quá khứ tạo sắc thái lịch sự hơn.) Sai: The train will leaving at 6.15 tomorrow. Đúng: The train leaves at 6.15 tomorrow. (Lịch trình dùng present simple.) Sai: My phone rings all morning. Đúng: My phone has been ringing all morning. (Quá trình kéo dài đến hiện tại cần present perfect continuous.)",
     "He's always leaving his keys. I'm tired of it. | I was wondering if you could help me. | The train leaves at 6.15 tomorrow. | My phone has been ringing all morning."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Câu cần sắc thái gì: phàn nàn, lịch sự, đặc trưng, lịch trình? · Thì đã chọn có mang đúng sắc thái đó không? · Mốc thời gian có khớp với thì không?",
     ""
    ]
   ],
   "quiz": [
    [
     "He ___ sit for hours staring at the screen.",
     "will",
     [
      "is going to",
      "would to"
     ],
     "Will chỉ thói quen đặc trưng."
    ],
    [
     "I ___ if you could help me. (rất lịch sự)",
     "was wondering",
     [
      "wonder having",
      "am wondered"
     ],
     "Was wondering: lịch sự."
    ],
    [
     "The train ___ at 6.15 tomorrow.",
     "leaves",
     [
      "left",
      "has leave"
     ],
     "Lịch trình: present simple."
    ],
    [
     "My phone keeps ringing. It ___ all morning.",
     "has been ringing",
     [
      "rings",
      "is ringing"
     ],
     "Kéo dài đến hiện tại: has been ringing."
    ],
    [
     "Which sentence describes annoying repeated behaviour?",
     "He's always leaving his clothes on the floor.",
     [
      "He always leaves his clothes on the floor in 2010.",
      "He has always leave his clothes."
     ],
     "Always + continuous: phàn nàn."
    ],
    [
     "By the time the report is published, the situation ___.",
     "will have changed",
     [
      "changes",
      "is changing"
     ],
     "Việc xong trước mốc: will have changed."
    ]
   ],
   "gaps": [
    [
     "Boys ___ be boys. (đặc trưng)",
     [
      "will"
     ],
     "",
     "Will chỉ đặc trưng."
    ],
    [
     "I ___ (wonder) whether you could lend me a pen. (lịch sự)",
     [
      "was wondering",
      "wondered"
     ],
     "",
     "Quá khứ lịch sự."
    ],
    [
     "She ___ (smile) at him, then she opens the door. (kể ở hiện tại)",
     [
      "smiles"
     ],
     "",
     "Hiện tại lịch sử trong kể chuyện."
    ],
    [
     "We ___ (live) here since 2010, and the garden is lovely.",
     [
      "have lived",
      "have been living"
     ],
     "",
     "Since + mốc: present perfect."
    ]
   ],
   "sentences": [
    [
     "He will sit for hours staring at the screen.",
     "Anh ấy hay ngồi hàng giờ nhìn chằm chằm vào màn hình."
    ],
    [
     "He's always leaving his clothes on the floor.",
     "Anh ấy lúc nào cũng vứt quần áo ra sàn."
    ],
    [
     "I was wondering if you could lend me a pen.",
     "Không biết bạn có thể cho tôi mượn cây bút không."
    ],
    [
     "The train leaves at 6.15 tomorrow.",
     "Tàu khởi hành lúc 6 giờ 15 ngày mai."
    ],
    [
     "My phone has been ringing all morning.",
     "Điện thoại của tôi reo suốt buổi sáng."
    ]
   ]
  },
  {
   "id": "wh-c2-articles-advanced",
   "group": 12,
   "grade": 12,
   "icon": "🅰️",
   "title": "Articles: advanced uses",
   "en": "Mạo từ",
   "desc": "Mạo từ ở trình độ cao có nhiều trường hợp đặc biệt. The + tính từ chỉ một nhóm người (the rich, the unemployed).",
   "formula": [
    [
     "Công thức",
     "the + adj (nhóm người) · the + N số ít (cả loài) · what/such/quite/many a + N · zero article (nói chung)"
    ],
    [
     "The + tính từ",
     "the + adj (động từ chia số nhiều)"
    ],
    [
     "The + danh từ số ít (cả loài)",
     "The + N(ít) + is/has ..."
    ],
    [
     "Quite / half / many / such / what + a",
     "quite/rather/such/what/many + a(n) + N · half + a(n) + N"
    ],
    [
     "Zero article",
     "Danh từ trừu tượng hoặc số nhiều (nói chung) không mạo từ"
    ]
   ],
   "grammar": [
    [
     "Chỉ nhóm người hoặc cả loài",
     "The + adj hoặc the + danh từ số ít.",
     "The unemployed are finding it hard to get work. | The tiger is a large cat found in Asia."
    ],
    [
     "Cảm thán và cụm cố định",
     "What a, such a, quite a, half an, many a.",
     "What a beautiful day! | It took half an hour. | Many a student has failed this exam."
    ],
    [
     "Không dùng mạo từ khi nói chung",
     "Danh từ trừu tượng và số nhiều khi nói tổng quát.",
     "Life is full of surprises. | Children need love."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định danh từ nói chung hay cụ thể: Nói chung thì thường không có mạo từ hoặc dùng the + số ít chỉ loài. 2) Kiểm tra cụm cố định: Quite a, half an, such a, what a, many a. 3) Kiểm tra nhóm và nhạc cụ: The rich, play the guitar.",
     "Life is ... / The tiger is ... | half an hour | play the guitar"
    ],
    [
     "Lỗi thường gặp",
     "Sai: The life is full of surprises. Đúng: Life is full of surprises. (Danh từ trừu tượng nói chung không có the.) Sai: Unemployed are finding it hard to get work. Đúng: The unemployed are finding it hard to get work. (Chỉ nhóm người cần the + adj.) Sai: It took a half hour. Đúng: It took half an hour. (Half đứng trước a/an.) Sai: Many a students have failed. Đúng: Many a student has failed. (Many a + danh từ số ít + động từ số ít.)",
     "Life is full of surprises. | The unemployed are finding it hard to get work. | It took half an hour. | Many a student has failed."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Nói chung hay nói cụ thể? · Có cụm cố định cần a/an không? · Đã dùng the + adj cho nhóm người chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ rich should pay more tax.",
     "The",
     [
      "A",
      "Those of"
     ],
     "The + adj chỉ nhóm người."
    ],
    [
     "___ tiger is a large cat found in Asia.",
     "The",
     [
      "Some",
      "Many"
     ],
     "The + N số ít chỉ cả loài."
    ],
    [
     "It took half ___ hour.",
     "an",
     [
      "a",
      "the"
     ],
     "Half an hour."
    ],
    [
     "Many ___ student has failed this exam.",
     "a",
     [
      "an",
      "the"
     ],
     "Many a + N số ít."
    ],
    [
     "Which sentence is correct?",
     "Life is full of surprises.",
     [
      "The life is full of surprises.",
      "A life is full of surprises."
     ],
     "Nói chung: không mạo từ."
    ],
    [
     "He plays ___ guitar beautifully.",
     "the",
     [
      "a",
      "some"
     ],
     "Play the + nhạc cụ."
    ]
   ],
   "gaps": [
    [
     "___ unemployed are finding it hard to get work.",
     [
      "The"
     ],
     "",
     "The + adj."
    ],
    [
     "She was ___ only person who understood me.",
     [
      "the"
     ],
     "",
     "The only."
    ],
    [
     "We had ___ lovely time at the party.",
     [
      "a"
     ],
     "",
     "A lovely time."
    ],
    [
     "Such ___ shame that he missed the final!",
     [
      "a"
     ],
     "",
     "Such a shame."
    ]
   ],
   "sentences": [
    [
     "The unemployed are finding it hard to get work.",
     "Người thất nghiệp đang khó tìm được việc."
    ],
    [
     "The tiger is a large cat found in Asia.",
     "Hổ là một loài mèo lớn sống ở châu Á."
    ],
    [
     "It took half an hour.",
     "Mất nửa tiếng."
    ],
    [
     "Many a student has failed this exam.",
     "Nhiều học sinh đã trượt kỳ thi này."
    ],
    [
     "He plays the guitar beautifully.",
     "Anh ấy chơi guitar rất hay."
    ]
   ]
  },
  {
   "id": "wh-c2-subject-verb-concord",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Subject-verb agreement: difficult cases",
   "en": "Hòa hợp chủ vị",
   "desc": "Một số trường hợp hòa hợp chủ vị dễ nhầm. A number of + danh từ số nhiều dùng động từ số nhiều, nhưng the number of + danh từ dùng động từ số ít.",
   "formula": [
    [
     "Công thức",
     "a number of + N(nhiều) + V(nhiều) · the number of + N + V(ít) · either X or Y + V (theo Y)"
    ],
    [
     "A number of / the number of",
     "A number of + N(nhiều) + V(nhiều) · The number of + N + V(ít)"
    ],
    [
     "Danh từ -s số ít",
     "economics / mathematics / physics / news + V(ít)"
    ],
    [
     "Danh từ tập thể",
     "committee / team / government + V(ít hoặc nhiều)"
    ],
    [
     "Either ... or / neither ... nor",
     "Either X or Y + V (hợp với Y)"
    ]
   ],
   "grammar": [
    [
     "Số lượng",
     "A number of khác the number of.",
     "A number of students are absent today. | The number of students is increasing."
    ],
    [
     "Danh từ dạng số nhiều nhưng nghĩa số ít, và ngược lại",
     "Economics, news là số ít. The police là số nhiều.",
     "Economics is a difficult subject. | The police are investigating the case."
    ],
    [
     "Chủ ngữ ghép bằng or / nor / not only",
     "Động từ theo chủ ngữ đứng gần nó nhất.",
     "Either the manager or the assistants are responsible. | Not only the teacher but also the students are present."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Tìm chủ ngữ thật: Bỏ cụm xen giữa chủ ngữ và động từ. 2) Xác định số của chủ ngữ: Kiểm tra danh từ dạng -s hay tập thể. 3) Hòa hợp động từ: Chủ ngữ ghép bằng or/nor thì theo chủ ngữ gần.",
     "The number of students (not students) is ... | economics → số ít | Either the manager or the assistants are"
    ],
    [
     "Lỗi thường gặp",
     "Sai: The number of students are increasing. Đúng: The number of students is increasing. (The number of dùng động từ số ít.) Sai: Economics are a difficult subject. Đúng: Economics is a difficult subject. (Economics là danh từ số ít.) Sai: The police is investigating the case. Đúng: The police are investigating the case. (Police luôn dùng số nhiều.) Sai: Either the manager or the assistants is responsible. Đúng: Either the manager or the assistants are responsible. (Hợp với chủ ngữ gần nhất: assistants.)",
     "The number of students is increasing. | Economics is a difficult subject. | The police are investigating the case. | Either the manager or the assistants are responsible."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ thật là gì sau khi bỏ cụm xen giữa? · Danh từ có dạng -s số ít hoặc tập thể không? · Chủ ngữ ghép bằng or/nor thì động từ hợp với chủ ngữ gần chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "A number of students ___ absent today.",
     "are",
     [
      "is",
      "has been"
     ],
     "A number of + danh từ nhiều + động từ nhiều."
    ],
    [
     "The number of students ___ increasing.",
     "is",
     [
      "are",
      "have"
     ],
     "The number of + động từ số ít."
    ],
    [
     "Economics ___ a difficult subject.",
     "is",
     [
      "are",
      "were"
     ],
     "Economics là số ít."
    ],
    [
     "The police ___ investigating the case.",
     "are",
     [
      "is",
      "has"
     ],
     "The police: số nhiều."
    ],
    [
     "Which sentence is correct in formal English?",
     "Neither of the answers is right.",
     [
      "Neither of the answers are right.",
      "Neither answers is right."
     ],
     "Neither of + số nhiều: văn trang trọng dùng động từ số ít."
    ],
    [
     "Either the manager or the assistants ___ responsible.",
     "are",
     [
      "is",
      "has been"
     ],
     "Hợp với chủ ngữ gần nhất: assistants."
    ]
   ],
   "gaps": [
    [
     "Two hours ___ too long to wait.",
     [
      "is"
     ],
     "",
     "Khoảng thời gian: số ít."
    ],
    [
     "The committee ___ divided in their views.",
     [
      "are",
      "is"
     ],
     "",
     "Danh từ tập thể: số nhiều khi nói các thành viên."
    ],
    [
     "Not only the teacher but also the students ___ present today.",
     [
      "are"
     ],
     "",
     "Hợp với students."
    ],
    [
     "The news ___ shocking.",
     [
      "is"
     ],
     "",
     "News là số ít."
    ]
   ],
   "sentences": [
    [
     "A number of students are absent today.",
     "Một số học sinh vắng mặt hôm nay."
    ],
    [
     "The number of students is increasing.",
     "Số lượng học sinh đang tăng."
    ],
    [
     "Economics is a difficult subject.",
     "Kinh tế học là môn học khó."
    ],
    [
     "The police are investigating the case.",
     "Cảnh sát đang điều tra vụ việc."
    ],
    [
     "Two hours is too long to wait.",
     "Hai tiếng là quá lâu để chờ."
    ]
   ]
  },
  {
   "id": "wh-c2-parallelism-correlatives",
   "group": 12,
   "grade": 12,
   "icon": "🔗",
   "title": "Parallelism & correlative conjunctions",
   "en": "Liên từ",
   "desc": "Các thành phần cùng chức năng trong một danh sách hoặc một cặp liên từ phải có cùng dạng ngữ pháp (parallel structure): cùng V-ing, cùng to V, cùng danh từ hoặc cùng…",
   "formula": [
    [
     "Công thức",
     "both X and Y · either X or Y · neither X nor Y · not only X but also Y (X và Y cùng dạng)"
    ],
    [
     "Liệt kê",
     "X, Y and Z (cùng dạng)"
    ],
    [
     "Both ... and",
     "both + X + and + Y"
    ],
    [
     "Either ... or / neither ... nor",
     "either X or Y · neither X nor Y"
    ],
    [
     "Not only ... but also",
     "not only X but also Y · Not only did S V, but S also V"
    ]
   ],
   "grammar": [
    [
     "Liệt kê song song",
     "Các phần tử trong danh sách cùng dạng.",
     "She likes swimming, cycling and running. | The report is clear, concise and well-organised."
    ],
    [
     "Cặp liên từ",
     "Both ... and, either ... or, neither ... nor, not only ... but also.",
     "The plan is both practical and affordable. | She is neither confident nor experienced."
    ],
    [
     "So sánh và lựa chọn song song",
     "Would rather ... than, prefer ... to, rather than.",
     "I would rather study at home than go out."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định các thành phần cần song song: Các phần tử liệt kê hoặc hai vế cặp liên từ. 2) Làm cho cùng dạng: Cùng V-ing, cùng to V, cùng danh từ, cùng tính từ. 3) Đặt cặp liên từ đúng chỗ: Both/either/neither/not only đứng ngay trước thành phần đầu.",
     "swimming, cycling and ... | running (không nói to run) | both practical and affordable"
    ],
    [
     "Lỗi thường gặp",
     "Sai: He enjoys reading, to write and painting. Đúng: He enjoys reading, writing and painting. (Các phần tử phải cùng dạng V-ing.) Sai: She is neither confident or experienced. Đúng: She is neither confident nor experienced. (Neither đi với nor.) Sai: He is not only intelligent but also works hard. Đúng: He is not only intelligent but also hard-working. (Hai vế đều là tính từ.) Sai: The job requires both patience and to be determined. Đúng: The job requires both patience and determination. (Hai vế đều là danh từ.)",
     "He enjoys reading, writing and painting. | She is neither confident nor experienced. | He is not only intelligent but also hard-working. | The job requires both patience and determination."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Các phần tử có cùng dạng ngữ pháp chưa? · Cặp liên từ đã khớp đôi chưa? · Not only đứng đầu câu đã đảo ngữ chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "She likes swimming, cycling and ___.",
     "running",
     [
      "to run",
      "run"
     ],
     "Song song với swimming, cycling: running."
    ],
    [
     "Not only did he apologise, but he also ___ to pay for the damage.",
     "offered",
     [
      "offering",
      "offer"
     ],
     "Vế sau là mệnh đề đầy đủ: he also offered."
    ],
    [
     "The job requires both patience and ___.",
     "determination",
     [
      "determined",
      "to determine"
     ],
     "Song song với patience: danh từ."
    ],
    [
     "Either you leave now ___ you stay until the end.",
     "or",
     [
      "nor",
      "but"
     ],
     "Either ... or."
    ],
    [
     "Which sentence is parallel?",
     "He enjoys reading, writing and painting.",
     [
      "He enjoys reading, to write and painting.",
      "He enjoys to read, writing and paint."
     ],
     "Cả ba đều là V-ing."
    ],
    [
     "She is neither confident ___ experienced.",
     "nor",
     [
      "or",
      "and"
     ],
     "Neither ... nor."
    ]
   ],
   "gaps": [
    [
     "The plan is both practical ___ affordable.",
     [
      "and"
     ],
     "",
     "Both ... and."
    ],
    [
     "He is not only intelligent ___ also hard-working.",
     [
      "but"
     ],
     "",
     "Not only ... but also."
    ],
    [
     "I would rather study at home ___ go out.",
     [
      "than"
     ],
     "",
     "Would rather ... than."
    ],
    [
     "She wants to travel, to learn languages, and ___ (meet) new people.",
     [
      "to meet"
     ],
     "",
     "Song song với to travel, to learn."
    ]
   ],
   "sentences": [
    [
     "She likes swimming, cycling and running.",
     "Cô ấy thích bơi, đạp xe và chạy bộ."
    ],
    [
     "The plan is both practical and affordable.",
     "Kế hoạch vừa thực tế vừa hợp túi tiền."
    ],
    [
     "She is neither confident nor experienced.",
     "Cô ấy không tự tin cũng không có kinh nghiệm."
    ],
    [
     "Not only did he apologise, but he also offered to pay for the damage.",
     "Anh ấy không chỉ xin lỗi mà còn đề nghị đền bù thiệt hại."
    ],
    [
     "I would rather study at home than go out.",
     "Tôi thà học ở nhà còn hơn đi ra ngoài."
    ]
   ]
  },
  {
   "id": "wh-c2-academic-reporting",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Academic reporting structures",
   "en": "Văn phong học thuật",
   "desc": "Văn học thuật dẫn nguồn và nêu kết quả bằng những cấu trúc đặc trưng. Dẫn nguồn: according to + nguồn, X argues/claims/suggests that ... (động từ chia theo nguồn).",
   "formula": [
    [
     "Công thức",
     "According to X, ... · X argues that ... · It has been argued that ... · S + is thought to ..."
    ],
    [
     "According to",
     "According to + nguồn, mệnh đề"
    ],
    [
     "X + reporting verb + that",
     "X argues/claims/suggests/shows + that + mệnh đề"
    ],
    [
     "It + bị động + that",
     "It is/has been + V3 + that + mệnh đề"
    ],
    [
     "S + be + V3 + to V",
     "S + is/has been + shown/thought/believed + to V"
    ]
   ],
   "grammar": [
    [
     "Dẫn nguồn",
     "Nêu ai nói, nghiên cứu nào.",
     "According to the authors, the method is reliable. | Smith (2019) argues that urban growth is inevitable."
    ],
    [
     "Báo quan điểm chung bằng bị động",
     "It is + V3 + that.",
     "It has been argued that sleep improves memory. | It is widely believed that exercise reduces stress."
    ],
    [
     "Chọn mức độ khẳng định",
     "Dùng động từ mạnh hay nhẹ tùy bằng chứng.",
     "The findings suggest that diet plays a role. | This may be taken to suggest a link."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định nguồn và mức độ chắc chắn: Nguồn cụ thể hay quan điểm chung? Bằng chứng mạnh hay yếu? 2) Chọn cấu trúc: According to, X + verb, It + passive hoặc S + is + V3 + to V. 3) Chia động từ và thì hợp lý: Hiện tại cho tác giả đang nói, quá khứ cho nghiên cứu đã làm.",
     "chung, yếu → It has been suggested that | It is widely believed that ... | Smith argues ... · The study involved ..."
    ],
    [
     "Lỗi thường gặp",
     "Sai: According to me, the method is unreliable. Đúng: In my view, the method is unreliable. (According to dùng cho nguồn khác, không dùng cho ý kiến của chính mình.) Sai: It has been argue that sleep improves memory. Đúng: It has been argued that sleep improves memory. (Sau has been dùng V3.) Sai: The drug has been shown reducing symptoms. Đúng: The drug has been shown to reduce symptoms. (Be shown + to V.) Sai: The findings suggests that diet plays a role. Đúng: The findings suggest that diet plays a role. (Findings là số nhiều.)",
     "In my view, the method is unreliable. | It has been argued that sleep improves memory. | The drug has been shown to reduce symptoms. | The findings suggest that diet plays a role."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đã nêu nguồn đúng cách chưa? · Cấu trúc bị động đã đúng dạng chưa? · Động từ chọn có phù hợp với mức bằng chứng không?",
     ""
    ]
   ],
   "quiz": [
    [
     "It has been ___ that sleep improves memory.",
     "argued",
     [
      "arguing",
      "argue"
     ],
     "It has been argued that."
    ],
    [
     "The study is ___ to have involved over 500 participants.",
     "thought",
     [
      "think",
      "thinking"
     ],
     "Is thought to have involved."
    ],
    [
     "___ to the authors, the method is reliable.",
     "According",
     [
      "Regarding",
      "Despite"
     ],
     "According to."
    ],
    [
     "The findings ___ that diet plays a role.",
     "suggest",
     [
      "suggests",
      "are suggesting"
     ],
     "Findings số nhiều: suggest."
    ],
    [
     "Which is the most tentative?",
     "This may be taken to suggest that",
     [
      "This proves that",
      "This is the fact that"
     ],
     "May be taken to suggest là mức nhẹ nhất."
    ],
    [
     "Smith (2019) ___ that urban growth is inevitable.",
     "argues",
     [
      "is argued",
      "arguing"
     ],
     "Tác giả làm chủ ngữ: argues."
    ]
   ],
   "gaps": [
    [
     "It is widely ___ (believe) that exercise reduces stress.",
     [
      "believed"
     ],
     "",
     "It is believed that."
    ],
    [
     "The drug has been ___ (show) to reduce symptoms.",
     [
      "shown"
     ],
     "",
     "Has been shown to V."
    ],
    [
     "As ___ out by Jones, the data are incomplete.",
     [
      "pointed"
     ],
     "",
     "As pointed out by."
    ],
    [
     "It remains to be ___ whether the policy will work.",
     [
      "seen"
     ],
     "",
     "It remains to be seen whether."
    ]
   ],
   "sentences": [
    [
     "According to the authors, the method is reliable.",
     "Theo các tác giả, phương pháp này đáng tin cậy."
    ],
    [
     "It has been argued that sleep improves memory.",
     "Có ý kiến cho rằng giấc ngủ cải thiện trí nhớ."
    ],
    [
     "The drug has been shown to reduce symptoms in most patients.",
     "Thuốc được chứng minh là làm giảm triệu chứng ở đa số bệnh nhân."
    ],
    [
     "As pointed out by Jones, the data are incomplete.",
     "Như Jones đã chỉ ra, dữ liệu chưa đầy đủ."
    ],
    [
     "It remains to be seen whether the policy will work.",
     "Vẫn còn phải xem chính sách có hiệu quả hay không."
    ]
   ]
  },
  {
   "id": "wh-c2-concession-advanced",
   "group": 12,
   "grade": 12,
   "icon": "🔗",
   "title": "Advanced concession structures",
   "en": "Liên từ",
   "desc": "Các cấu trúc nhượng bộ tinh tế hơn although. Adjective/adverb + as + S + V (Tired as he was, ...). Much as + S + V (Much as I admire her, ...).",
   "formula": [
    [
     "Công thức",
     "Adj + as + S + V · Much as + S + V · However + adj + S + V · albeit + cụm từ"
    ],
    [
     "Adj/Adv/N + as",
     "Adj/Adv/N (không mạo từ) + as + S + V, mệnh đề chính"
    ],
    [
     "Much as",
     "Much as + S + V, mệnh đề chính"
    ],
    [
     "However / no matter how",
     "However / No matter how + adj/adv + S + V"
    ],
    [
     "Albeit / granted that",
     "albeit + cụm từ · Granted that + mệnh đề"
    ]
   ],
   "grammar": [
    [
     "Nhượng bộ bằng as",
     "Đưa tính từ hoặc danh từ không mạo từ lên trước as.",
     "Tired as he was, he kept walking. | Young as he was, he led the team well."
    ],
    [
     "Nhượng bộ với however, whatever, no matter",
     "Dùng để nói dù mức độ thế nào đi nữa.",
     "However hard he tried, he failed. | Whatever you say, I still disagree."
    ],
    [
     "Cụm nhượng bộ trang trọng",
     "For all, notwithstanding, albeit, granted that.",
     "For all his faults, he is a good friend. | The film was good, albeit a little long."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định phần nhượng bộ: Đó là tính từ, trạng từ, danh từ hay cả mệnh đề? 2) Chọn cấu trúc: As, much as, however, albeit. 3) Kiểm tra trật tự từ: Sau however/no matter how là tính từ rồi đến chủ ngữ.",
     "tired | Tired as he was | However hard he tried"
    ],
    [
     "Lỗi thường gặp",
     "Sai: However he tried hard, he failed. Đúng: However hard he tried, he failed. (Tính từ/trạng từ đi liền sau however.) Sai: Tired though as he was, he kept walking. Đúng: Tired as he was, he kept walking. (Không dùng though và as cùng lúc.) Sai: Albeit it was small, the flat was comfortable. Đúng: The flat was comfortable, albeit small. (Albeit đi với cụm từ, không đi với mệnh đề đầy đủ.) Sai: Much I admire her, I can't support this plan. Đúng: Much as I admire her, I can't support this plan. (Thiếu as sau much.)",
     "However hard he tried, he failed. | Tired as he was, he kept walking. | The flat was comfortable, albeit small. | Much as I admire her, I can't support this plan."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Cấu trúc nhượng bộ đã đúng trật tự chưa? · Có dùng hai liên từ nhượng bộ cùng lúc không? · Albeit có đi với cụm từ thay vì mệnh đề không?",
     ""
    ]
   ],
   "quiz": [
    [
     "Tired ___ he was, he kept walking.",
     "as",
     [
      "although",
      "if"
     ],
     "Adj + as + S + V."
    ],
    [
     "___ as I admire her, I can't support this plan.",
     "Much",
     [
      "Very",
      "So"
     ],
     "Much as."
    ],
    [
     "The film was good, ___ a little long.",
     "albeit",
     [
      "despite",
      "unless"
     ],
     "Albeit + cụm từ."
    ],
    [
     "No matter ___ hard she tried, she couldn't open it.",
     "how",
     [
      "what",
      "which"
     ],
     "No matter how + adj."
    ],
    [
     "Which sentence is correct?",
     "However hard he tried, he failed.",
     [
      "However he tried hard, he failed.",
      "However tried hard he, he failed."
     ],
     "However + adj + S + V."
    ],
    [
     "___ all his faults, he is a good friend.",
     "For",
     [
      "Because",
      "Unless"
     ],
     "For all + N."
    ]
   ],
   "gaps": [
    [
     "Young ___ he was, he led the team well.",
     [
      "as"
     ],
     "",
     "Adj + as + S + V."
    ],
    [
     "___ you say, I still disagree. (dù bạn nói gì)",
     [
      "Whatever"
     ],
     "",
     "Whatever = dù gì đi nữa."
    ],
    [
     "It was a small flat, ___ comfortable.",
     [
      "albeit"
     ],
     "",
     "Albeit + tính từ."
    ],
    [
     "Granted ___ he made a mistake, he deserves a second chance.",
     [
      "that"
     ],
     "",
     "Granted that + mệnh đề."
    ]
   ],
   "sentences": [
    [
     "Tired as he was, he kept walking.",
     "Dù mệt, anh ấy vẫn tiếp tục đi."
    ],
    [
     "Much as I admire her, I can't support this plan.",
     "Dù rất ngưỡng mộ cô ấy, tôi không thể ủng hộ kế hoạch này."
    ],
    [
     "However hard he tried, he failed.",
     "Dù cố gắng đến đâu, anh ấy vẫn thất bại."
    ],
    [
     "The film was good, albeit a little long.",
     "Phim hay, tuy hơi dài."
    ],
    [
     "For all his faults, he is a good friend.",
     "Dù có nhiều khuyết điểm, anh ấy là một người bạn tốt."
    ]
   ]
  },
  {
   "id": "wh-c2-gerund-constructions",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Gerund constructions",
   "en": "Dạng thức động từ",
   "desc": "V-ing có nhiều cấu trúc cố định. Possessive + V-ing trong văn trang trọng (I don't mind your opening the window).",
   "formula": [
    [
     "Công thức",
     "possessive + V-ing · there's no point in + V-ing · it's no use + V-ing · on/upon + V-ing"
    ],
    [
     "Possessive + V-ing",
     "mind/object to/be annoyed at + my/your/his + V-ing"
    ],
    [
     "No point / no use",
     "There's no point in + V-ing · It's no use + V-ing"
    ],
    [
     "Worth",
     "be (well) worth + V-ing"
    ],
    [
     "On / upon",
     "On/Upon + V-ing, mệnh đề"
    ]
   ],
   "grammar": [
    [
     "Possessive trước V-ing",
     "Trang trọng: my, your, his + V-ing.",
     "I don't mind your opening the window. | He was annoyed at my being late."
    ],
    [
     "Cụm cố định với V-ing",
     "No point in, no use, worth, can't stand.",
     "There's no point in talking to him. | It's no use crying over spilt milk. | The book is well worth reading."
    ],
    [
     "On / upon + V-ing",
     "Chỉ hành động xảy ra ngay trước hành động chính.",
     "On arriving, she called him. | Upon receiving the letter, he phoned her."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định cụm cố định: No point in, no use, worth, can't stand, object to... 2) Dùng V-ing sau giới từ: Sau giới từ luôn là danh từ hoặc V-ing. 3) Thêm possessive nếu chủ ngữ của V-ing khác chủ ngữ chính: Trang trọng dùng possessive. Văn nói dùng me, him...",
     "no point in | insist on paying | my being late"
    ],
    [
     "Lỗi thường gặp",
     "Sai: There's no point to talk to him. Đúng: There's no point in talking to him. (No point in + V-ing.) Sai: The book is worth to read. Đúng: The book is worth reading. (Worth + V-ing.) Sai: On arrive, she called him. Đúng: On arriving, she called him. (On + V-ing.) Sai: He objected to be treated like a child. Đúng: He objected to being treated like a child. (To trong object to là giới từ.)",
     "There's no point in talking to him. | The book is worth reading. | On arriving, she called him. | He objected to being treated like a child."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Cụm cố định này đi với V-ing không? · Sau giới từ đã dùng V-ing chưa? · Chủ ngữ của V-ing có khác chủ ngữ chính không? Nếu có, thêm possessive.",
     ""
    ]
   ],
   "quiz": [
    [
     "I don't mind ___ the window.",
     "your opening",
     [
      "you opened",
      "you to open"
     ],
     "Possessive + V-ing."
    ],
    [
     "There's no point ___ to him.",
     "in talking",
     [
      "to talk",
      "talk"
     ],
     "No point in + V-ing."
    ],
    [
     "It's no use ___ over spilt milk.",
     "crying",
     [
      "to cry",
      "cry"
     ],
     "It's no use + V-ing."
    ],
    [
     "The book is well worth ___.",
     "reading",
     [
      "to read",
      "read"
     ],
     "Worth + V-ing."
    ],
    [
     "Which sentence is correct?",
     "On arriving, she called him.",
     [
      "On arrive, she called him.",
      "On to arrive, she called him."
     ],
     "On + V-ing."
    ],
    [
     "She insisted on ___ the bill herself.",
     "paying",
     [
      "to pay",
      "pay"
     ],
     "Insist on + V-ing."
    ]
   ],
   "gaps": [
    [
     "I can't stand ___ (wait) in queues.",
     [
      "waiting"
     ],
     "",
     "Can't stand + V-ing."
    ],
    [
     "Upon ___ (receive) the letter, he phoned her.",
     [
      "receiving"
     ],
     "",
     "Upon + V-ing."
    ],
    [
     "He was annoyed at ___ being late. (của tôi)",
     [
      "my"
     ],
     "",
     "Possessive + V-ing."
    ],
    [
     "There's no ___ in arguing with him.",
     [
      "point"
     ],
     "",
     "There's no point in + V-ing."
    ]
   ],
   "sentences": [
    [
     "I don't mind your opening the window.",
     "Tôi không phiền việc bạn mở cửa sổ."
    ],
    [
     "There's no point in talking to him.",
     "Nói chuyện với anh ta cũng vô ích."
    ],
    [
     "The book is well worth reading.",
     "Cuốn sách rất đáng đọc."
    ],
    [
     "On arriving, she called him.",
     "Vừa đến nơi, cô ấy gọi anh ấy."
    ],
    [
     "He objected to being treated like a child.",
     "Anh ấy phản đối việc bị đối xử như trẻ con."
    ]
   ]
  },
  {
   "id": "wh-c2-quantity-comparison",
   "group": 12,
   "grade": 12,
   "icon": "⚖️",
   "title": "Quantity & comparison: fine distinctions",
   "en": "So sánh",
   "desc": "Phân biệt các cụm so sánh và chỉ lượng tinh tế. No fewer/less than (nhiều đến mức, tới tận) khác not more than (nhiều nhất là) và no more than (chỉ có).",
   "formula": [
    [
     "Công thức",
     "no fewer than · not more than · by far the + superlative · far from · all the more · the + comparative of the two"
    ],
    [
     "No fewer than / no more than",
     "no fewer/less than + số lượng lớn · no more than + số lượng nhỏ"
    ],
    [
     "By far / far from",
     "by far the + so sánh nhất · far from + adj/V-ing"
    ],
    [
     "All the more",
     "all the + so sánh hơn + for/because"
    ],
    [
     "Of the two",
     "the + so sánh hơn + of the two"
    ]
   ],
   "grammar": [
    [
     "Nhấn mạnh số lượng lớn hoặc nhỏ",
     "No fewer than: nhiều đáng ngạc nhiên. No more than: chỉ có.",
     "No fewer than 500 people attended. | He has no more than ten pounds."
    ],
    [
     "Nhấn mạnh mức độ",
     "By far, far from, all the more.",
     "She is by far the best player in the team. | He is far from stupid. | It was raining, which made the journey all the more difficult."
    ],
    [
     "So sánh hai và so sánh bội số",
     "The + so sánh hơn + of the two, twice the size of.",
     "This is the taller of the two. | The flat is twice the size of mine."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định ý: Số lượng, mức độ hay so sánh hai đối tượng? 2) Chọn cụm phù hợp: Dùng bảng mẫu câu. 3) Kiểm tra dạng so sánh: Hai đối tượng dùng so sánh hơn, ba trở lên dùng so sánh nhất.",
     "hai đối tượng → the + so sánh hơn | by far the best | the better of the two"
    ],
    [
     "Lỗi thường gặp",
     "Sai: This is the tallest of the two. Đúng: This is the taller of the two. (Hai đối tượng dùng so sánh hơn.) Sai: He is far to be stupid. Đúng: He is far from stupid. (Cụm cố định là far from.) Sai: She is by far best player in the team. Đúng: She is by far the best player in the team. (Cần the trước so sánh nhất.) Sai: The flat is twice size of mine. Đúng: The flat is twice the size of mine. (Twice the size of.)",
     "This is the taller of the two. | He is far from stupid. | She is by far the best player in the team. | The flat is twice the size of mine."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Đang so sánh hai hay nhiều đối tượng? · Cụm số lượng hoặc mức độ đã chọn đúng chưa? · Đã có the và of chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "No fewer than 500 people attended. This means",
     "as many as 500",
     [
      "at most 500",
      "about 100"
     ],
     "No fewer than: nhiều đến mức."
    ],
    [
     "She is ___ the best player in the team.",
     "by far",
     [
      "far from",
      "much of"
     ],
     "By far the best."
    ],
    [
     "He is far ___ stupid; he's just lazy.",
     "from",
     [
      "than",
      "by"
     ],
     "Far from."
    ],
    [
     "It was raining, which made the journey ___ more difficult.",
     "all the",
     [
      "any",
      "so"
     ],
     "All the more."
    ],
    [
     "Which sentence is correct?",
     "This is the taller of the two.",
     [
      "This is the tallest of the two.",
      "This is taller of the two."
     ],
     "The + so sánh hơn + of the two."
    ],
    [
     "The flat is twice ___ size of mine.",
     "the",
     [
      "a",
      "as"
     ],
     "Twice the size of."
    ]
   ],
   "gaps": [
    [
     "I like her all the ___ for her honesty.",
     [
      "more",
      "better"
     ],
     "",
     "All the more/better."
    ],
    [
     "He is ___ from being a fool.",
     [
      "far"
     ],
     "",
     "Far from."
    ],
    [
     "The new model is by ___ the cheapest.",
     [
      "far"
     ],
     "",
     "By far."
    ],
    [
     "Of the two options, this is the ___ (good).",
     [
      "better"
     ],
     "",
     "Hai đối tượng: the better."
    ]
   ],
   "sentences": [
    [
     "No fewer than 500 people attended the event.",
     "Có tới 500 người tham dự sự kiện."
    ],
    [
     "She is by far the best player in the team.",
     "Cô ấy là cầu thủ giỏi nhất đội cách xa."
    ],
    [
     "He is far from stupid.",
     "Anh ấy chẳng ngốc chút nào."
    ],
    [
     "I like her all the more for her honesty.",
     "Tôi càng quý cô ấy vì sự trung thực."
    ],
    [
     "This is the taller of the two.",
     "Đây là cái cao hơn trong hai cái."
    ]
   ]
  },
  {
   "id": "wh-c2-noun-clauses",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Noun clauses",
   "en": "Mệnh đề danh từ",
   "desc": "Mệnh đề danh từ đóng vai trò chủ ngữ, tân ngữ hoặc bổ ngữ. Có ba loại chính: that-clause (That he will win is certain), wh-clause (What she said surprised everyone;",
   "formula": [
    [
     "Công thức",
     "that / what / whether / whoever + S + V"
    ],
    [
     "That-clause",
     "That + S + V + V... · V + that + S + V"
    ],
    [
     "What-clause",
     "What + (S) + V + V..."
    ],
    [
     "Whether-clause",
     "whether + S + V (or not)"
    ],
    [
     "Whoever / whatever",
     "whoever / whatever / whichever + V"
    ]
   ],
   "grammar": [
    [
     "Làm chủ ngữ",
     "What, that hoặc whether mở đầu chủ ngữ.",
     "What she said surprised everyone. | That the earth is round is well known."
    ],
    [
     "Làm tân ngữ hoặc bổ ngữ",
     "Theo sau động từ hoặc be.",
     "I wonder why he left so early. | The question is whether we can afford it."
    ],
    [
     "Dùng whoever, whatever",
     "Bất kỳ ai, bất cứ điều gì.",
     "I'll give the prize to whoever answers first."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định vai trò của mệnh đề: Chủ ngữ, tân ngữ hay bổ ngữ? 2) Chọn từ mở đầu: That cho sự việc, what cho điều chưa rõ, whether cho có/không, whoever cho bất kỳ ai. 3) Dùng trật tự khẳng định: Không đảo ngữ, không dùng do/does/did.",
     "chủ ngữ | What she said ... | I wonder why he left (không nói why did he leave)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: That he needs is rest. Đúng: What he needs is rest. (Điều anh ấy cần là gì thì dùng what.) Sai: I wonder why did he leave so early. Đúng: I wonder why he left so early. (Mệnh đề danh từ không đảo ngữ.) Sai: The question is if or not we can afford it. Đúng: The question is whether we can afford it. (Sau be thường dùng whether, và whether or not là cụm.) Sai: I'll give the prize to whomever answers first. Đúng: I'll give the prize to whoever answers first. (Whoever là chủ ngữ của answers nên không dùng whomever.)",
     "What he needs is rest. | I wonder why he left so early. | The question is whether we can afford it. | I'll give the prize to whoever answers first."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Mệnh đề làm chủ ngữ, tân ngữ hay bổ ngữ? · Từ mở đầu đã đúng chưa? · Đã dùng trật tự khẳng định chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ she said surprised everyone.",
     "What",
     [
      "That which she",
      "Which"
     ],
     "What-clause làm chủ ngữ."
    ],
    [
     "The question is ___ we can afford it.",
     "whether",
     [
      "what",
      "how that"
     ],
     "Whether sau be."
    ],
    [
     "It remains unclear ___ the plan will succeed.",
     "whether",
     [
      "what",
      "although"
     ],
     "Whether."
    ],
    [
     "I wonder ___ he left so early.",
     "why",
     [
      "that",
      "which"
     ],
     "Why + S + V."
    ],
    [
     "Which sentence is correct?",
     "What he needs is rest.",
     [
      "That he needs is rest.",
      "Which he needs is rest."
     ],
     "What-cleft."
    ],
    [
     "He told me ___ he wanted to leave.",
     "that",
     [
      "what that",
      "which"
     ],
     "That-clause."
    ]
   ],
   "gaps": [
    [
     "___ matters most is your health.",
     [
      "What"
     ],
     "",
     "What matters most."
    ],
    [
     "I'm not sure ___ or not it's true.",
     [
      "whether"
     ],
     "",
     "Whether or not."
    ],
    [
     "___ the earth is round is well known.",
     [
      "That"
     ],
     "",
     "That-clause làm chủ ngữ."
    ],
    [
     "I'll give the prize to ___ answers first.",
     [
      "whoever"
     ],
     "",
     "Whoever."
    ]
   ],
   "sentences": [
    [
     "What she said surprised everyone.",
     "Điều cô ấy nói khiến mọi người ngạc nhiên."
    ],
    [
     "The question is whether we can afford it.",
     "Vấn đề là liệu chúng ta có đủ khả năng chi trả không."
    ],
    [
     "That he will win is certain.",
     "Việc anh ấy sẽ thắng là chắc chắn."
    ],
    [
     "I'll give the prize to whoever answers first.",
     "Tôi sẽ trao giải cho bất kỳ ai trả lời trước."
    ],
    [
     "I wonder why he left so early.",
     "Tôi tự hỏi tại sao anh ấy đi sớm vậy."
    ]
   ]
  },
  {
   "id": "wh-c2-reduced-adverbial-clauses",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Reduced adverbial clauses",
   "en": "Mệnh đề phân từ",
   "desc": "Mệnh đề trạng ngữ có thể được rút gọn bằng cách bỏ chủ ngữ và be khi chủ ngữ trùng với mệnh đề chính.",
   "formula": [
    [
     "Công thức",
     "liên từ + V-ing / V3 / adj (bỏ S + be), mệnh đề chính"
    ],
    [
     "Liên từ + V-ing",
     "while/when/before/after + V-ing, S + V"
    ],
    [
     "Liên từ + V3",
     "once/when/if/although + V3, S + V"
    ],
    [
     "Liên từ + adj",
     "if/where/when + adj, S + V"
    ],
    [
     "Unless otherwise stated",
     "unless otherwise stated/specified/agreed"
    ]
   ],
   "grammar": [
    [
     "Hướng dẫn và quy định",
     "Rút gọn khi chủ ngữ trùng.",
     "When in doubt, ask for help. | Unless otherwise stated, all prices include tax."
    ],
    [
     "Điều kiện, thời gian, nhượng bộ rút gọn",
     "If, once, although + V-ing/V3/adj.",
     "If necessary, call me. | Once completed, the form must be signed. | Although trying to help, he made things worse."
    ],
    [
     "Vị trí, khả năng",
     "Where possible, where necessary.",
     "Where possible, use public transport."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Kiểm tra chủ ngữ: Chủ ngữ của mệnh đề phụ có trùng mệnh đề chính không? 2) Bỏ chủ ngữ và be: Giữ liên từ và phần còn lại. 3) Chọn V-ing hay V3: Chủ động dùng V-ing, bị động dùng V3.",
     "While she was waiting, she read ... | While waiting, she read ... | Once finished (it is finished)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: If necessarily, call me. Đúng: If necessary, call me. (Sau if rút gọn là tính từ necessary.) Sai: While wait, she read a book. Đúng: While waiting, she read a book. (Chủ động dùng V-ing.) Sai: Once finish, the report will be sent. Đúng: Once finished, the report will be sent. (Báo cáo được hoàn thành nên dùng V3.) Sai: When asked, the minister he refused to comment. Đúng: When asked, the minister refused to comment. (Bỏ chủ ngữ thừa.)",
     "If necessary, call me. | While waiting, she read a book. | Once finished, the report will be sent. | When asked, the minister refused to comment."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Chủ ngữ của hai mệnh đề có trùng không? · Đã bỏ chủ ngữ và be chưa? · Chủ động hay bị động để chọn V-ing hoặc V3?",
     ""
    ]
   ],
   "quiz": [
    [
     "___ in doubt, ask for help.",
     "When",
     [
      "Whereas",
      "Until"
     ],
     "When in doubt."
    ],
    [
     "___ completed, the form must be signed.",
     "Once",
     [
      "Since",
      "Despite"
     ],
     "Once completed."
    ],
    [
     "___ possible, use public transport.",
     "Where",
     [
      "What",
      "Which"
     ],
     "Where possible."
    ],
    [
     "___ otherwise stated, all prices include tax.",
     "Unless",
     [
      "If not",
      "Whether"
     ],
     "Unless otherwise stated."
    ],
    [
     "Which sentence is correct?",
     "If necessary, call me.",
     [
      "If necessary, you call me.",
      "If necessarily, call me."
     ],
     "If necessary."
    ],
    [
     "Although ___ to help, he made things worse.",
     "trying",
     [
      "tried",
      "try"
     ],
     "Chủ động: trying."
    ]
   ],
   "gaps": [
    [
     "___ asked, he refused to comment. (khi)",
     [
      "When"
     ],
     "",
     "When asked."
    ],
    [
     "While ___ (wait), she read a book.",
     [
      "waiting"
     ],
     "",
     "While + V-ing."
    ],
    [
     "___ necessary, we can postpone the meeting. (nếu cần)",
     [
      "If"
     ],
     "",
     "If necessary."
    ],
    [
     "Once ___ (finish), the report will be sent.",
     [
      "finished"
     ],
     "",
     "Once finished."
    ]
   ],
   "sentences": [
    [
     "When in doubt, ask for help.",
     "Khi nghi ngờ, hãy nhờ giúp đỡ."
    ],
    [
     "Once completed, the form must be signed.",
     "Sau khi điền xong, mẫu đơn phải được ký."
    ],
    [
     "If necessary, call me.",
     "Nếu cần, hãy gọi tôi."
    ],
    [
     "Unless otherwise stated, all prices include tax.",
     "Trừ khi có ghi khác, mọi giá đều đã gồm thuế."
    ],
    [
     "Where possible, use public transport.",
     "Nếu có thể, hãy dùng phương tiện công cộng."
    ]
   ]
  },
  {
   "id": "wh-c2-formal-modals",
   "group": 12,
   "grade": 12,
   "icon": "🔑",
   "title": "Formal & specialised modals",
   "en": "Động từ khuyết thiếu",
   "desc": "Một số cách dùng modal trang trọng hoặc đặc biệt. Shall trong văn bản pháp lý và quy định (The tenant shall pay ...). May not / shall not cho điều cấm.",
   "formula": [
    [
     "Công thức",
     "shall + V · may not + V · be to + V · ought to have + V3 · dare + V · May I ...?"
    ],
    [
     "Shall / may not",
     "S + shall / may not + V"
    ],
    [
     "Be to",
     "S + be to + V"
    ],
    [
     "Ought to have",
     "S + ought to have + V3"
    ],
    [
     "May / might I",
     "May/Might I + V...?"
    ]
   ],
   "grammar": [
    [
     "Văn bản pháp lý và quy định",
     "Shall chỉ nghĩa vụ, may not chỉ cấm.",
     "The tenant shall pay the rent on the first of each month. | Visitors may not take photographs inside the museum."
    ],
    [
     "Kế hoạch chính thức và mệnh lệnh",
     "Be to + V.",
     "The ministers are to meet on Friday. | You are to report to the manager at nine."
    ],
    [
     "Xin phép lịch sự và sắc thái khác",
     "May/Might I, how dare you, would have been.",
     "May I make a suggestion? | How dare you speak to me like that! | She would have been about twenty when she left."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định bối cảnh: Pháp lý, quy định, kế hoạch chính thức hay xin phép lịch sự? 2) Chọn modal phù hợp: Dùng bảng mẫu câu. 3) Kiểm tra dạng theo sau: Modal + nguyên mẫu, ought to have + V3, be to + V.",
     "hợp đồng → shall | cấm trong quy định → may not | ought to have asked"
    ],
    [
     "Lỗi thường gặp",
     "Sai: How dare you to speak to me like that! Đúng: How dare you speak to me like that! (How dare you + nguyên mẫu không to.) Sai: The ministers are meet on Friday. Đúng: The ministers are to meet on Friday. (Be to + V.) Sai: You ought have asked me first. Đúng: You ought to have asked me first. (Thiếu to sau ought.) Sai: The tenant shall to pay the rent. Đúng: The tenant shall pay the rent. (Sau shall không có to.)",
     "How dare you speak to me like that! | The ministers are to meet on Friday. | You ought to have asked me first. | The tenant shall pay the rent."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Bối cảnh trang trọng hay pháp lý không? · Modal đã chọn phù hợp ý nghĩa chưa? · Dạng theo sau modal đã đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "The tenant ___ pay the rent on the first of each month.",
     "shall",
     [
      "will to",
      "may"
     ],
     "Shall trong văn bản pháp lý."
    ],
    [
     "Staff ___ not leave the building during the drill.",
     "may",
     [
      "did",
      "has"
     ],
     "May not: cấm."
    ],
    [
     "The ministers ___ to meet on Friday.",
     "are",
     [
      "do",
      "can"
     ],
     "Be to + V."
    ],
    [
     "You ___ not have worried; everything was fine. (không cần)",
     "need",
     [
      "must",
      "dare"
     ],
     "Need not have + V3."
    ],
    [
     "Which sentence is correct?",
     "How dare you speak to me like that!",
     [
      "How dare you to speak to me like that!",
      "How dares you speak to me like that!"
     ],
     "How dare you + nguyên mẫu."
    ],
    [
     "She ___ have been about twenty when she left.",
     "would",
     [
      "may be",
      "shall"
     ],
     "Would have been: ước đoán về quá khứ."
    ]
   ],
   "gaps": [
    [
     "You ___ to have asked me first. (lẽ ra nên)",
     [
      "ought"
     ],
     "",
     "Ought to have + V3."
    ],
    [
     "Visitors ___ not take photographs inside the museum. (cấm, trang trọng)",
     [
      "may",
      "must",
      "shall"
     ],
     "",
     "May/must/shall not: cấm."
    ],
    [
     "I ___ rather not say.",
     [
      "would"
     ],
     "",
     "I would rather not say."
    ],
    [
     "___ I speak to you for a moment? (rất lịch sự)",
     [
      "May",
      "Might"
     ],
     "",
     "May/Might I: xin phép lịch sự."
    ]
   ],
   "sentences": [
    [
     "The tenant shall pay the rent on the first of each month.",
     "Bên thuê có nghĩa vụ trả tiền thuê vào ngày mồng một mỗi tháng."
    ],
    [
     "Visitors may not take photographs inside the museum.",
     "Khách tham quan không được chụp ảnh trong bảo tàng."
    ],
    [
     "The ministers are to meet on Friday.",
     "Các bộ trưởng sẽ gặp nhau vào thứ sáu."
    ],
    [
     "You ought to have asked me first.",
     "Lẽ ra bạn nên hỏi tôi trước."
    ],
    [
     "May I make a suggestion?",
     "Tôi có thể đưa ra một đề xuất không?"
    ]
   ]
  },
  {
   "id": "wh-c2-cohesion-reference",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Cohesion & reference",
   "en": "Liên kết văn bản",
   "desc": "Văn bản mạch lạc nhờ các từ chỉ định và tham chiếu. The former / the latter chỉ hai đối tượng đã nhắc.",
   "formula": [
    [
     "Công thức",
     "the former / the latter · this/such + N (tổng kết) · respectively · namely / i.e. / e.g."
    ],
    [
     "The former / the latter",
     "..., the former ... and the latter ..."
    ],
    [
     "This / such + N",
     "This/Such + N (tóm tắt ý trước)"
    ],
    [
     "Respectively",
     "A and B, ..., respectively"
    ],
    [
     "Namely / i.e. / e.g.",
     "namely + chi tiết · i.e. = nghĩa là · e.g. = ví dụ"
    ]
   ],
   "grammar": [
    [
     "Chỉ lại hai đối tượng",
     "The former là cái nhắc trước, the latter là cái nhắc sau.",
     "Mai and Lan are sisters. The former is a doctor and the latter is a teacher."
    ],
    [
     "Tổng kết ý bằng đại từ chỉ định",
     "This + danh từ gói lại ý trước.",
     "He lost his job. This led to financial problems. | The company announced job cuts. This decision surprised many."
    ],
    [
     "Giải thích và liệt kê",
     "Respectively, namely, i.e., e.g.",
     "The two companies employ 5,000 and 3,000 people, respectively. | Only two fruits are grown here, namely apples and pears."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định quan hệ tham chiếu: Hai đối tượng, cả ý trước, hay danh sách? 2) Chọn từ tham chiếu: Dùng bảng mẫu câu. 3) Kiểm tra tránh mơ hồ: Người đọc phải biết this/it chỉ cái gì.",
     "hai đối tượng → former / latter | tổng kết ý → This decision | This decision (rõ hơn This)"
    ],
    [
     "Lỗi thường gặp",
     "Sai: Mai, Lan and Hoa are sisters. The former is a doctor. Đúng: Mai and Lan are sisters. The former is a doctor. (Former và latter chỉ dùng cho hai đối tượng.) Sai: He lost his job. That decision led to problems. Đúng: He lost his job. This led to problems. (Mất việc không phải một quyết định, nên dùng this để chỉ chung.) Sai: Prices rose 5% and 8% respectfully. Đúng: Prices rose 5% and 8%, respectively. (Respectively mới đúng, respectfully nghĩa là một cách kính trọng.) Sai: Several fruits grow here, i.e. apples and pears. Đúng: Several fruits grow here, e.g. apples and pears. (E.g. cho ví dụ, i.e. cho giải thích đầy đủ.)",
     "Mai and Lan are sisters. The former is a doctor. | He lost his job. This led to problems. | Prices rose 5% and 8%, respectively. | Several fruits grow here, e.g. apples and pears."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Từ tham chiếu có chỉ rõ đối tượng không? · Former và latter chỉ dùng cho hai đối tượng đúng không? · Respectively, namely, i.e., e.g. dùng đúng chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "Mai and Lan are sisters. The ___ is a doctor and the latter is a teacher.",
     "former",
     [
      "first",
      "previous"
     ],
     "The former / the latter."
    ],
    [
     "He lost his job. ___ led to financial problems.",
     "This",
     [
      "It's",
      "There"
     ],
     "This tóm tắt ý trước."
    ],
    [
     "The two companies employ 5,000 and 3,000 people, ___.",
     "respectively",
     [
      "respectfully",
      "relatively"
     ],
     "Respectively."
    ],
    [
     "Only two fruits are grown here, ___ apples and pears.",
     "namely",
     [
      "such as",
      "for example"
     ],
     "Namely = cụ thể là."
    ],
    [
     "Which abbreviation means 'that is'?",
     "i.e.",
     [
      "e.g.",
      "etc."
     ],
     "i.e. = that is."
    ],
    [
     "The company announced job cuts. ___ decision surprised many.",
     "This",
     [
      "That is",
      "Thus"
     ],
     "This + N."
    ]
   ],
   "gaps": [
    [
     "Both options have drawbacks; the ___ is expensive and the latter is risky.",
     [
      "former"
     ],
     "",
     "The former."
    ],
    [
     "Prices rose by 5% and 8% in 2020 and 2021, ___.",
     [
      "respectively"
     ],
     "",
     "Respectively."
    ],
    [
     "The ___ mentioned report was published last year. (nêu trên)",
     [
      "aforementioned"
     ],
     "",
     "The aforementioned."
    ],
    [
     "I forgot my keys. ___ was why I was late.",
     [
      "That",
      "This"
     ],
     "",
     "That/This tóm tắt ý trước."
    ]
   ],
   "sentences": [
    [
     "Mai and Lan are sisters. The former is a doctor and the latter is a teacher.",
     "Mai và Lan là chị em. Người trước là bác sĩ còn người sau là giáo viên."
    ],
    [
     "The company announced job cuts. This decision surprised many.",
     "Công ty công bố cắt giảm việc làm. Quyết định này khiến nhiều người ngạc nhiên."
    ],
    [
     "The two companies employ 5,000 and 3,000 people, respectively.",
     "Hai công ty lần lượt có 5.000 và 3.000 nhân viên."
    ],
    [
     "Only two fruits are grown here, namely apples and pears.",
     "Ở đây chỉ trồng hai loại quả, cụ thể là táo và lê."
    ],
    [
     "The aforementioned report was published last year.",
     "Báo cáo nêu trên được công bố năm ngoái."
    ]
   ]
  },
  {
   "id": "wh-c2-complex-verb-patterns",
   "group": 12,
   "grade": 12,
   "icon": "📝",
   "title": "Complex verb patterns",
   "en": "Dạng thức động từ",
   "desc": "Một số động từ có nhiều khuôn theo sau, mỗi khuôn một nghĩa. Make, let, have, help + tân ngữ + động từ nguyên mẫu không to.",
   "formula": [
    [
     "Công thức",
     "make/let/have + O + V · see/hear + O + V / V-ing · be made/seen + to V · remember/regret/try + to V vs V-ing"
    ],
    [
     "Make / let / have",
     "make/let/have + O + V (nguyên mẫu)"
    ],
    [
     "See / hear + O",
     "see/hear/watch + O + V / V-ing"
    ],
    [
     "Bị động",
     "be made/seen/heard + to V"
    ],
    [
     "Đổi nghĩa",
     "remember/forget/regret/try/stop/go on + to V hoặc V-ing"
    ]
   ],
   "grammar": [
    [
     "Make, let, have + O + V",
     "Không có to.",
     "She made him clean the room. | My parents let me stay out late."
    ],
    [
     "Động từ tri giác",
     "Nguyên mẫu cho hành động trọn vẹn, V-ing cho hành động đang diễn ra.",
     "I saw him run out of the building. | I saw him running down the street."
    ],
    [
     "Động từ đổi nghĩa theo khuôn",
     "To V chỉ việc cần làm. V-ing chỉ việc đã làm.",
     "I regret to tell you that the flight is cancelled. | I regret shouting at him yesterday."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định động từ chính: Make, let, perception hay động từ đổi nghĩa? 2) Chọn khuôn theo sau: Dùng bảng mẫu câu. 3) Chuyển sang bị động nếu cần: Make và perception verbs dùng to V sau bị động.",
     "make | make him clean | She was made to wait."
    ],
    [
     "Lỗi thường gặp",
     "Sai: She made him to clean the room. Đúng: She made him clean the room. (Make + O + V không có to.) Sai: She was made wait for an hour. Đúng: She was made to wait for an hour. (Bị động của make dùng to V.) Sai: My parents let me to stay out late. Đúng: My parents let me stay out late. (Let + O + V.) Sai: I tried opening the window, but it was stuck. (muốn nói cố gắng) Đúng: I tried to open the window, but it was stuck. (Try to V nghĩa là cố gắng làm.)",
     "She made him clean the room. | She was made to wait for an hour. | My parents let me stay out late. | I tried to open the window, but it was stuck."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Động từ chính thuộc khuôn nào? · Thể bị động đã đổi sang to V chưa? · Nghĩa muốn nói là việc cần làm hay việc đã làm?",
     ""
    ]
   ],
   "quiz": [
    [
     "She made him ___ the room.",
     "clean",
     [
      "to clean",
      "cleaning"
     ],
     "Make + O + V."
    ],
    [
     "I saw him ___ out of the building.",
     "run",
     [
      "to run",
      "ran"
     ],
     "See + O + V."
    ],
    [
     "I regret ___ you that the flight is cancelled.",
     "to tell",
     [
      "telling",
      "tell"
     ],
     "Regret to V: tiếc phải nói."
    ],
    [
     "I regret ___ at him yesterday.",
     "shouting",
     [
      "to shout",
      "shout"
     ],
     "Regret V-ing: hối hận vì đã làm."
    ],
    [
     "Which sentence is correct?",
     "She was made to wait.",
     [
      "She was made wait.",
      "She made to wait."
     ],
     "Bị động của make: to V."
    ],
    [
     "He went on ___ after the lunch break. (tiếp tục làm việc đó)",
     "working",
     [
      "to work",
      "work"
     ],
     "Go on V-ing: tiếp tục làm."
    ]
   ],
   "gaps": [
    [
     "My parents let me ___ (stay) out late.",
     [
      "stay"
     ],
     "",
     "Let + O + V."
    ],
    [
     "He was seen ___ (enter) the building.",
     [
      "to enter"
     ],
     "",
     "Bị động của see: to V."
    ],
    [
     "I tried ___ (open) the window, but it was stuck.",
     [
      "to open"
     ],
     "",
     "Try to V: cố gắng."
    ],
    [
     "Try ___ (turn) it off and on again; it might work.",
     [
      "turning"
     ],
     "",
     "Try V-ing: thử."
    ]
   ],
   "sentences": [
    [
     "She made him clean the room.",
     "Cô ấy bắt anh ấy dọn phòng."
    ],
    [
     "She was made to wait for an hour.",
     "Cô ấy bị bắt đợi một tiếng."
    ],
    [
     "I regret to tell you that the flight is cancelled.",
     "Tôi rất tiếc phải báo rằng chuyến bay đã bị hủy."
    ],
    [
     "I regret shouting at him yesterday.",
     "Tôi hối hận vì đã quát anh ấy hôm qua."
    ],
    [
     "Try turning it off and on again; it might work.",
     "Thử tắt rồi bật lại xem, có thể sẽ được."
    ]
   ]
  },
  {
   "id": "wh-c2-gradability",
   "group": 12,
   "grade": 12,
   "icon": "🎨",
   "title": "Gradable & non-gradable adjectives",
   "en": "Tính từ",
   "desc": "Tính từ gradable (tính từ có mức độ như good, tired, cold, difficult) dùng với very, rather, fairly, quite, a bit, extremely.",
   "formula": [
    [
     "Công thức",
     "very / rather / fairly + gradable adj · absolutely / utterly / completely + non-gradable adj · quite/rather + a + (adj) + N"
    ],
    [
     "Gradable",
     "very / extremely / rather / fairly / a bit + adj"
    ],
    [
     "Non-gradable",
     "absolutely / utterly / completely + adj cực độ"
    ],
    [
     "Quite / rather + a",
     "quite/rather + a/an + (adj) + N"
    ],
    [
     "Somewhat / slightly",
     "somewhat / slightly + adj (hơi)"
    ]
   ],
   "grammar": [
    [
     "Chọn trạng từ cho tính từ có mức độ",
     "Very, extremely, rather, fairly, a bit.",
     "She is very tired. | The weather was fairly cold."
    ],
    [
     "Chọn trạng từ cho tính từ cực độ",
     "Absolutely, utterly, completely, totally.",
     "The view was absolutely stunning. | The room was absolutely freezing."
    ],
    [
     "Dùng quite và rather với a/an",
     "Quite/rather + a + (adj) + N.",
     "It was quite a good film. | She is quite a talented singer."
    ],
    [
     "Làm thế nào để chọn đúng?",
     "1) Xác định tính từ có mức độ hay không: Có thể nói more/less thì thường là gradable. 2) Chọn trạng từ phù hợp: Gradable đi với very, non-gradable đi với absolutely. 3) Đặt a/an đúng chỗ: Quite và rather đứng trước a/an.",
     "tired → gradable · exhausted → non-gradable | very tired · absolutely exhausted | quite a good film"
    ],
    [
     "Lỗi thường gặp",
     "Sai: The film was very fantastic. Đúng: The film was absolutely fantastic. (Fantastic là non-gradable nên dùng absolutely.) Sai: She is absolutely tired. Đúng: She is very tired. (Tired là gradable nên dùng very.) Sai: It was a quite good film. Đúng: It was quite a good film. (Quite đứng trước a.) Sai: The room was a bit freezing. Đúng: The room was absolutely freezing. (Freezing là non-gradable nên không dùng a bit.)",
     "The film was absolutely fantastic. | She is very tired. | It was quite a good film. | The room was absolutely freezing."
    ],
    [
     "Tự kiểm tra trước khi nộp bài",
     "Tính từ này có mức độ hay đã là cực độ? · Trạng từ đã phù hợp chưa? · Quite hoặc rather đã đứng trước a/an chưa?",
     ""
    ]
   ],
   "quiz": [
    [
     "The view was ___ stunning.",
     "absolutely",
     [
      "very",
      "a bit"
     ],
     "Stunning là non-gradable."
    ],
    [
     "She is ___ tired.",
     "very",
     [
      "absolutely",
      "utterly"
     ],
     "Tired là gradable."
    ],
    [
     "It was ___ a good film.",
     "quite",
     [
      "very",
      "absolutely"
     ],
     "Quite a good film."
    ],
    [
     "The soup was ___ delicious.",
     "utterly",
     [
      "fairly",
      "rather"
     ],
     "Delicious mang nghĩa mạnh nên đi với utterly/absolutely."
    ],
    [
     "Which sentence is correct?",
     "The film was absolutely fantastic.",
     [
      "The film was very fantastic.",
      "The film was a bit fantastic."
     ],
     "Absolutely + fantastic."
    ],
    [
     "The room was ___ freezing.",
     "absolutely",
     [
      "very",
      "rather"
     ],
     "Freezing là non-gradable."
    ]
   ],
   "gaps": [
    [
     "The weather was ___ cold, but not unbearable. (hơi)",
     [
      "fairly",
      "rather",
      "somewhat",
      "slightly",
      "a bit"
     ],
     "",
     "Gradable: fairly/rather/somewhat."
    ],
    [
     "It's ___ impossible to finish by Monday. (hoàn toàn)",
     [
      "absolutely",
      "utterly",
      "completely"
     ],
     "",
     "Impossible là non-gradable."
    ],
    [
     "She is ___ a talented singer! (khá là)",
     [
      "quite",
      "rather"
     ],
     "",
     "Quite/rather + a."
    ],
    [
     "I was ___ exhausted after the marathon. (kiệt sức hoàn toàn)",
     [
      "absolutely",
      "utterly",
      "completely"
     ],
     "",
     "Exhausted là non-gradable."
    ]
   ],
   "sentences": [
    [
     "The view was absolutely stunning.",
     "Khung cảnh thật sự tuyệt đẹp."
    ],
    [
     "She is very tired.",
     "Cô ấy rất mệt."
    ],
    [
     "It was quite a good film.",
     "Đó là một bộ phim khá hay."
    ],
    [
     "I was absolutely exhausted after the marathon.",
     "Tôi kiệt sức hoàn toàn sau cuộc chạy marathon."
    ],
    [
     "The room was absolutely freezing.",
     "Căn phòng lạnh buốt."
    ]
   ]
  }
 ]
});
