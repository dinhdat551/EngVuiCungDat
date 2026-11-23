/* EngVui – mục Phát âm và Shadowing.
   Định dạng một chủ đề (các trường đều không bắt buộc, trừ title, grammar, sentences):
     pairs:    [[từ 1, IPA 1, nghĩa 1, từ 2, IPA 2, nghĩa 2]]        cặp từ dễ nhầm (nghe rồi chọn từ)
     odd:      [[4 từ, phần gạch chân đặt trong [ ]], vị trí đáp án (0–3), giải thích]
     stress:   [[từ, "các|âm|tiết", vị trí âm tiết nhấn (từ 0), IPA, nghĩa]]
     classes + classify: phân loại cách đọc đuôi, ví dụ classes ["/s/", "/z/", "/ɪz/"], classify [["cat[s]", "/s/"]]
     sentences: [[en, vi]]  câu để đọc to; với chủ đề "kind": "shadow" là câu để nghe và nói theo
   IPA theo giọng Anh – Anh như sách giáo khoa. Phần trong ngoặc là JSON chuẩn. */
EV.registerPron({
  "names": ["Mai", "Ms", "Kim"],
  "groups": [
    {"id": 1, "title": "Âm dễ nhầm", "desc": "Cặp âm người Việt hay đọc lẫn", "color": "#1CB0F6", "dark": "#1899D6"},
    {"id": 2, "title": "Đuôi -s/-es và -ed", "desc": "Đọc đuôi theo âm cuối của từ", "color": "#58CC02", "dark": "#46A302"},
    {"id": 3, "title": "Trọng âm", "desc": "Nhấn đúng âm tiết", "color": "#CE82FF", "dark": "#A568CC"},
    {"id": 4, "title": "Shadowing", "desc": "Nghe câu mẫu rồi nói theo", "color": "#FF9600", "dark": "#D97F00"}
  ],
  "topics": [
    {
      "id": "ii", "group": 1, "grade": 3, "icon": "🐑", "tag": "sheep – ship",
      "title": "/iː/ và /ɪ/", "en": "Long and short i",
      "desc": "Phân biệt i dài và i ngắn: sheep – ship, seat – sit.",
      "formula": [
        ["/iː/ (i dài)", "Kéo dài, môi hơi bè sang hai bên: sheep, seat, leave, feel"],
        ["/ɪ/ (i ngắn)", "Ngắn, gọn, lưỡi thả lỏng hơn: ship, sit, live, fill"],
        ["Cách viết hay gặp", "/iː/: ee, ea, e … e · /ɪ/: i, y"]
      ],
      "grammar": [
        ["Phân biệt i dài và i ngắn", "/iː/ là âm dài và căng, như kéo dài chữ i trong tiếng Việt. /ɪ/ ngắn, lưỡi thả lỏng hơn, nghe hơi pha e.", "sheep | ship | leave | live"],
        ["Vì sao quan trọng", "Đọc lẫn hai âm này làm đổi nghĩa từ: seat là chỗ ngồi còn sit là ngồi; heat là sức nóng còn hit là đánh.", "Please take a seat. | Please sit down."]
      ],
      "pairs": [
        ["sheep", "/ʃiːp/", "con cừu", "ship", "/ʃɪp/", "con tàu"],
        ["seat", "/siːt/", "chỗ ngồi", "sit", "/sɪt/", "ngồi"],
        ["leave", "/liːv/", "rời đi", "live", "/lɪv/", "sống"],
        ["feel", "/fiːl/", "cảm thấy", "fill", "/fɪl/", "làm đầy"],
        ["heat", "/hiːt/", "sức nóng", "hit", "/hɪt/", "đánh"],
        ["eat", "/iːt/", "ăn", "it", "/ɪt/", "nó"],
        ["cheap", "/tʃiːp/", "rẻ", "chip", "/tʃɪp/", "con chip; khoai tây chiên"],
        ["peach", "/piːtʃ/", "quả đào", "pitch", "/pɪtʃ/", "sân bóng"]
      ],
      "odd": [
        [["t[ea]", "s[ea]t", "h[ea]d", "m[ea]t"], 2, "head /hed/ có âm /e/; tea, seat, meat có âm /iː/."],
        [["s[i]t", "f[i]sh", "l[i]ke", "b[i]g"], 2, "like /laɪk/ có âm /aɪ/; sit, fish, big có âm /ɪ/."],
        [["b[ea]ch", "t[ea]ch", "br[ea]kfast", "l[ea]ve"], 2, "breakfast /ˈbrekfəst/ có âm /e/; các từ còn lại có âm /iː/."],
        [["w[i]n", "d[i]nner", "n[i]ce", "s[i]ster"], 2, "nice /naɪs/ có âm /aɪ/; các từ còn lại có âm /ɪ/."]
      ],
      "sentences": [
        ["The sheep is on the ship.", "Con cừu ở trên con tàu."],
        ["Please sit in this seat.", "Hãy ngồi vào ghế này."],
        ["Eat it while it is hot.", "Ăn khi còn nóng nhé."],
        ["He will leave the city next week.", "Anh ấy sẽ rời thành phố vào tuần sau."]
      ]
    },
    {
      "id": "ae", "group": 1, "grade": 3, "icon": "🛏️", "tag": "bad – bed",
      "title": "/æ/ và /e/", "en": "Cat and bed vowels",
      "desc": "Phân biệt /æ/ mở rộng miệng và /e/: bad – bed, man – men.",
      "formula": [
        ["/æ/", "Miệng mở rộng, hàm hạ thấp, âm nằm giữa a và e: cat, bad, man"],
        ["/e/", "Miệng mở vừa, gần chữ e tiếng Việt: bed, pen, men"],
        ["Cách viết hay gặp", "/æ/: a (cat, hand) · /e/: e, ea (bed, head)"]
      ],
      "grammar": [
        ["Phân biệt /æ/ và /e/", "Khi đọc /æ/, hạ hàm dưới nhiều như chuẩn bị nói a nhưng giữ lưỡi như khi nói e. Với /e/, miệng mở ít hơn.", "bad | bed | man | men"],
        ["Số ít và số nhiều", "Danh từ man đổi âm khi sang số nhiều: man /mæn/ thành men /men/. Đọc sai sẽ lẫn một người với nhiều người.", "one man | two men"]
      ],
      "pairs": [
        ["bad", "/bæd/", "tồi, xấu", "bed", "/bed/", "cái giường"],
        ["man", "/mæn/", "người đàn ông", "men", "/men/", "những người đàn ông"],
        ["pan", "/pæn/", "cái chảo", "pen", "/pen/", "cái bút"],
        ["sat", "/sæt/", "đã ngồi", "set", "/set/", "bộ; đặt"],
        ["had", "/hæd/", "đã có", "head", "/hed/", "cái đầu"],
        ["bag", "/bæɡ/", "cái túi", "beg", "/beɡ/", "van xin"],
        ["track", "/træk/", "đường mòn", "trek", "/trek/", "chuyến đi bộ đường dài"]
      ],
      "odd": [
        [["c[a]t", "h[a]t", "m[a]p", "l[a]te"], 3, "late /leɪt/ có âm /eɪ/; cat, hat, map có âm /æ/."],
        [["b[e]d", "p[e]n", "h[e]", "t[e]n"], 2, "he /hiː/ có âm /iː/; bed, pen, ten có âm /e/."],
        [["h[a]nd", "b[a]g", "f[a]ther", "bl[a]ck"], 2, "father /ˈfɑːðə/ có âm /ɑː/; các từ còn lại có âm /æ/."],
        [["fr[ie]nd", "h[ea]d", "br[ea]d", "m[ea]t"], 3, "meat /miːt/ có âm /iː/; friend, head, bread có âm /e/."]
      ],
      "sentences": [
        ["The man has a black bag.", "Người đàn ông có một cái túi màu đen."],
        ["Put the pen in the bag.", "Hãy cho bút vào túi."],
        ["My dad had a bad headache.", "Bố tôi bị đau đầu nặng."],
        ["Ten men sat at the table.", "Mười người đàn ông ngồi ở bàn."]
      ]
    },
    {
      "id": "th", "group": 1, "grade": 5, "icon": "👅", "tag": "think – sink",
      "title": "Âm th: /θ/ và /ð/", "en": "The th sounds",
      "desc": "Đưa lưỡi ra giữa răng, không đọc th thành t, s hay d.",
      "formula": [
        ["/θ/ (vô thanh)", "Đầu lưỡi đặt giữa hai hàm răng, thổi hơi, cổ họng không rung: think, three, mouth"],
        ["/ð/ (hữu thanh)", "Như /θ/ nhưng cổ họng rung: this, they, mother"],
        ["Lỗi hay gặp", "Đọc /θ/ thành /t/ hoặc /s/, đọc /ð/ thành /d/ hoặc /z/"]
      ],
      "grammar": [
        ["Đưa lưỡi ra giữa răng", "Tiếng Việt không có âm này nên người Việt hay đọc th thành t hoặc s. Hãy để đầu lưỡi chạm nhẹ răng trên và thổi hơi qua khe hở.", "think | sink | three | tree"],
        ["th vô thanh hay hữu thanh", "Các từ nhỏ như the, this, that, they, there, then đọc /ð/. Nhiều danh từ và số đếm đọc /θ/: think, thank, three, thirty, month.", "This is the third month."]
      ],
      "pairs": [
        ["think", "/θɪŋk/", "nghĩ", "sink", "/sɪŋk/", "bồn rửa; chìm"],
        ["thank", "/θæŋk/", "cảm ơn", "tank", "/tæŋk/", "bể chứa"],
        ["three", "/θriː/", "số ba", "tree", "/triː/", "cái cây"],
        ["mouth", "/maʊθ/", "cái miệng", "mouse", "/maʊs/", "con chuột"],
        ["thing", "/θɪŋ/", "đồ vật", "sing", "/sɪŋ/", "hát"],
        ["they", "/ðeɪ/", "họ", "day", "/deɪ/", "ngày"],
        ["breathe", "/briːð/", "thở", "breeze", "/briːz/", "gió nhẹ"]
      ],
      "odd": [
        [["[th]ink", "[th]ree", "mo[th]er", "ba[th]"], 2, "mother có âm /ð/; think, three, bath có âm /θ/."],
        [["[th]is", "[th]at", "[th]ey", "[th]ank"], 3, "thank có âm /θ/; this, that, they có âm /ð/."],
        [["[th]umb", "[th]eatre", "[Th]omas", "[th]irty"], 2, "Thomas đọc /ˈtɒməs/, th là /t/; các từ còn lại có âm /θ/."]
      ],
      "sentences": [
        ["Thank you for the three things.", "Cảm ơn bạn vì ba món đồ."],
        ["I think this is the third one.", "Tôi nghĩ đây là cái thứ ba."],
        ["They went there together.", "Họ đã cùng nhau đến đó."],
        ["My mother and father are both thirty.", "Bố mẹ tôi đều ba mươi tuổi."]
      ]
    },
    {
      "id": "sh", "group": 1, "grade": 4, "icon": "🤫", "tag": "she – see",
      "title": "/ʃ/, /s/ và /tʃ/", "en": "sh, s and ch",
      "desc": "Phân biệt she – see, shop – chop, wash – watch.",
      "formula": [
        ["/s/", "Lưỡi gần lợi trên, hơi xì ra nhẹ: see, sip, bus"],
        ["/ʃ/", "Môi tròn, đưa ra trước, lưỡi lùi lại, như tiếng suỵt: she, ship, wash"],
        ["/tʃ/", "Bắt đầu như /t/ rồi bật ra /ʃ/: chair, watch, cheap"]
      ],
      "grammar": [
        ["Phân biệt s, sh và ch", "/ʃ/ dài và êm như tiếng suỵt. /tʃ/ ngắn và bật mạnh. /s/ là tiếng xì nhẹ, môi không tròn.", "she | see | shop | chop"],
        ["Cách viết của /ʃ/", "/ʃ/ thường viết là sh, -tion, -cian, đôi khi là s hoặc ch: ship, station, sugar, machine.", "The machine is at the station."]
      ],
      "pairs": [
        ["she", "/ʃiː/", "cô ấy", "see", "/siː/", "nhìn thấy"],
        ["ship", "/ʃɪp/", "con tàu", "sip", "/sɪp/", "nhấp một ngụm"],
        ["shoe", "/ʃuː/", "chiếc giày", "sue", "/suː/", "kiện"],
        ["sheet", "/ʃiːt/", "tờ giấy; ga trải giường", "seat", "/siːt/", "chỗ ngồi"],
        ["shop", "/ʃɒp/", "cửa hàng", "chop", "/tʃɒp/", "chặt"],
        ["wash", "/wɒʃ/", "rửa", "watch", "/wɒtʃ/", "xem; đồng hồ"],
        ["share", "/ʃeə/", "chia sẻ", "chair", "/tʃeə/", "cái ghế"]
      ],
      "odd": [
        [["[sh]op", "[s]ugar", "ma[ch]ine", "[ch]ess"], 3, "chess có âm /tʃ/; shop, sugar, machine có âm /ʃ/."],
        [["sta[t]ion", "na[t]ion", "ques[t]ion", "informa[t]ion"], 2, "question /ˈkwestʃən/ có âm /tʃ/; các từ còn lại có âm /ʃ/."],
        [["[s]ee", "[s]ure", "[s]ix", "[s]un"], 1, "sure /ʃʊə/ có âm /ʃ/; see, six, sun có âm /s/."]
      ],
      "sentences": [
        ["She sells shoes in a small shop.", "Cô ấy bán giày ở một cửa hàng nhỏ."],
        ["Please wash the dishes after you watch TV.", "Hãy rửa bát sau khi xem ti vi nhé."],
        ["The machine is at the station.", "Cái máy ở nhà ga."],
        ["Can I share this chair with you?", "Tôi ngồi chung ghế này với bạn được không?"]
      ]
    },
    {
      "id": "final", "group": 1, "grade": 4, "icon": "🔚", "tag": "bike – buy",
      "title": "Âm cuối và âm câm", "en": "Final sounds and silent letters",
      "desc": "Đọc rõ âm cuối; nhận ra chữ cái không đọc.",
      "formula": [
        ["Đừng bỏ âm cuối", "Tiếng Anh dùng âm cuối để phân biệt từ: bike và buy, white và why"],
        ["Âm cuối hay bị nuốt", "/t/, /d/, /k/, /s/, /z/ và đuôi -s, -ed"],
        ["Âm câm", "k trong knife, w trong write, b trong climb, h trong hour không đọc"]
      ],
      "grammar": [
        ["Đọc rõ âm cuối", "Kết thúc từ bằng đúng vị trí lưỡi và môi của âm cuối: bật nhẹ hơi với /t/, /k/, /p/, kéo dài nhẹ với /s/, /z/.", "white | why | bike | buy"],
        ["Chữ viết mà không đọc", "Một số chữ cái không được đọc: k trước n (knife, know), w trước r (write), b sau m (climb, lamb), h đầu một số từ (hour, honest).", "I know how to climb. | I'll be back in an hour."]
      ],
      "pairs": [
        ["bike", "/baɪk/", "xe đạp", "buy", "/baɪ/", "mua"],
        ["white", "/waɪt/", "màu trắng", "why", "/waɪ/", "tại sao"],
        ["nice", "/naɪs/", "đẹp, tốt", "nine", "/naɪn/", "số chín"],
        ["cat", "/kæt/", "con mèo", "cap", "/kæp/", "mũ lưỡi trai"],
        ["kids", "/kɪdz/", "những đứa trẻ", "kid", "/kɪd/", "đứa trẻ"],
        ["played", "/pleɪd/", "đã chơi", "play", "/pleɪ/", "chơi"],
        ["bag", "/bæɡ/", "cái túi", "back", "/bæk/", "phía sau"]
      ],
      "odd": [
        [["boo[k]", "ba[ck]", "ca[k]e", "[k]nife"], 3, "Chữ k trong knife không đọc; các từ còn lại có âm /k/."],
        [["[w]rite", "[w]in", "[w]ater", "[w]ide"], 0, "Chữ w trong write không đọc; các từ còn lại có âm /w/."],
        [["lam[b]", "clim[b]", "num[b]er", "com[b]"], 2, "Chữ b trong number được đọc /b/; trong lamb, climb, comb thì không đọc."],
        [["[h]our", "[h]ouse", "[h]ot", "[h]appy"], 0, "Chữ h trong hour không đọc; các từ còn lại có âm /h/."]
      ],
      "sentences": [
        ["I bought a white bike.", "Tôi đã mua một chiếc xe đạp màu trắng."],
        ["Nine nice kids played in the park.", "Chín đứa trẻ ngoan đã chơi trong công viên."],
        ["Pick it up and put it back.", "Nhặt nó lên và đặt lại chỗ cũ."],
        ["I'll be back in an hour.", "Một giờ nữa tôi sẽ quay lại."]
      ]
    },
    {
      "id": "ends", "group": 2, "grade": 5, "icon": "🐈", "tag": "cats · dogs · buses",
      "title": "Đuôi -s/-es: /s/, /z/, /ɪz/", "en": "Pronouncing -s and -es",
      "desc": "Cách đọc đuôi -s của danh từ số nhiều và động từ ngôi thứ ba.",
      "formula": [
        ["/s/", "Sau âm vô thanh /p/, /t/, /k/, /f/, /θ/: stops, cats, books, laughs, months"],
        ["/ɪz/", "Sau /s/, /z/, /ʃ/, /tʃ/, /dʒ/: buses, roses, washes, watches, changes"],
        ["/z/", "Sau các âm còn lại (nguyên âm và âm hữu thanh): plays, dogs, calls, trees"]
      ],
      "grammar": [
        ["Nhìn âm cuối, không nhìn chữ", "Cách đọc đuôi -s phụ thuộc vào âm cuối của từ gốc, không phải chữ cái cuối. laugh kết thúc bằng âm /f/ nên laughs đọc /s/.", "cats | dogs | buses"],
        ["Mẹo nhớ nhóm /ɪz/", "Từ tận cùng bằng s, x, z, sh, ch, ce, ge thì đuôi -s, -es được đọc thành một âm tiết mới /ɪz/.", "boxes | dishes | oranges"]
      ],
      "classes": ["/s/", "/z/", "/ɪz/"],
      "classify": [
        ["cat[s]", "/s/"], ["book[s]", "/s/"], ["laugh[s]", "/s/"], ["month[s]", "/s/"],
        ["dog[s]", "/z/"], ["play[s]", "/z/"], ["tree[s]", "/z/"], ["call[s]", "/z/"],
        ["bus[es]", "/ɪz/"], ["watch[es]", "/ɪz/"], ["orange[s]", "/ɪz/"], ["box[es]", "/ɪz/"]
      ],
      "odd": [
        [["book[s]", "cat[s]", "stop[s]", "dog[s]"], 3, "dogs đọc /z/; books, cats, stops đọc /s/."],
        [["watch[es]", "box[es]", "wash[es]", "goe[s]"], 3, "goes đọc /z/; watches, boxes, washes đọc /ɪz/."],
        [["play[s]", "call[s]", "tree[s]", "laugh[s]"], 3, "laughs đọc /s/ vì laugh tận cùng bằng âm /f/; các từ còn lại đọc /z/."],
        [["month[s]", "map[s]", "bed[s]", "walk[s]"], 2, "beds đọc /z/; months, maps, walks đọc /s/."]
      ],
      "sentences": [
        ["She watches films and plays games at weekends.", "Cô ấy xem phim và chơi trò chơi vào cuối tuần."],
        ["My dad fixes cars and washes dishes.", "Bố tôi sửa ô tô và rửa bát."],
        ["The cats sleep in the boxes.", "Những con mèo ngủ trong những chiếc hộp."],
        ["He likes books and loves dogs.", "Cậu ấy thích sách và rất yêu chó."]
      ]
    },
    {
      "id": "edend", "group": 2, "grade": 6, "icon": "⏪", "tag": "wanted · looked · played",
      "title": "Đuôi -ed: /t/, /d/, /ɪd/", "en": "Pronouncing -ed",
      "desc": "Cách đọc đuôi -ed của động từ ở quá khứ.",
      "formula": [
        ["/ɪd/", "Sau /t/ và /d/: wanted, needed, visited"],
        ["/t/", "Sau âm vô thanh /p/, /k/, /f/, /s/, /ʃ/, /tʃ/, /θ/: stopped, looked, laughed, washed, watched"],
        ["/d/", "Sau các âm còn lại: played, cleaned, lived, called"]
      ],
      "grammar": [
        ["Chỉ /ɪd/ mới thêm âm tiết", "Chỉ khi từ gốc tận cùng bằng âm /t/ hoặc /d/ thì -ed mới thành một âm tiết mới. worked chỉ có một âm tiết /wɜːkt/.", "wanted | worked | played"],
        ["Tính từ đặc biệt", "Một số tính từ tận cùng -ed luôn đọc /ɪd/: naked, wicked, crooked, beloved.", "a crooked road | the naked eye"]
      ],
      "classes": ["/t/", "/d/", "/ɪd/"],
      "classify": [
        ["want[ed]", "/ɪd/"], ["need[ed]", "/ɪd/"], ["visit[ed]", "/ɪd/"], ["decid[ed]", "/ɪd/"],
        ["stopp[ed]", "/t/"], ["look[ed]", "/t/"], ["wash[ed]", "/t/"], ["watch[ed]", "/t/"], ["laugh[ed]", "/t/"],
        ["play[ed]", "/d/"], ["clean[ed]", "/d/"], ["liv[ed]", "/d/"], ["call[ed]", "/d/"]
      ],
      "odd": [
        [["want[ed]", "need[ed]", "visit[ed]", "play[ed]"], 3, "played đọc /d/; wanted, needed, visited đọc /ɪd/."],
        [["stopp[ed]", "look[ed]", "watch[ed]", "call[ed]"], 3, "called đọc /d/; stopped, looked, watched đọc /t/."],
        [["clean[ed]", "liv[ed]", "wash[ed]", "open[ed]"], 2, "washed đọc /t/; cleaned, lived, opened đọc /d/."],
        [["laugh[ed]", "help[ed]", "decid[ed]", "kiss[ed]"], 2, "decided đọc /ɪd/; laughed, helped, kissed đọc /t/."]
      ],
      "sentences": [
        ["I watched a film and played games yesterday.", "Hôm qua tôi đã xem phim và chơi trò chơi."],
        ["She visited her grandparents and cooked dinner.", "Cô ấy đã thăm ông bà và nấu bữa tối."],
        ["We needed help, so we called our teacher.", "Chúng tôi cần giúp đỡ nên đã gọi cô giáo."],
        ["He stopped and looked at the map.", "Anh ấy dừng lại và nhìn bản đồ."]
      ]
    },
    {
      "id": "stress2", "group": 3, "grade": 6, "icon": "🔊", "tag": "HAPpy · beGIN",
      "title": "Trọng âm từ hai âm tiết", "en": "Stress in two-syllable words",
      "desc": "Danh từ, tính từ thường nhấn đầu; động từ thường nhấn sau.",
      "formula": [
        ["Danh từ, tính từ", "Thường nhấn âm tiết đầu: TAble, HAPpy, DOCtor"],
        ["Động từ", "Thường nhấn âm tiết thứ hai: beGIN, deCIDE, reLAX"],
        ["Vừa là danh từ vừa là động từ", "PREsent (món quà) – preSENT (trình bày), REcord – reCORD"]
      ],
      "grammar": [
        ["Vì sao trọng âm quan trọng", "Nhấn sai âm tiết làm người nghe khó hiểu dù từng âm đều đúng. Âm tiết được nhấn đọc to hơn, dài hơn và cao hơn.", "happy | begin | present"],
        ["Có ngoại lệ", "Quy tắc chỉ đúng với phần lớn từ. Một số danh từ nhấn âm tiết sau (hotel, advice) và một số động từ nhấn âm tiết đầu (visit, answer). Hãy nghe và ghi nhớ.", "hotel | visit"]
      ],
      "stress": [
        ["table", "ta|ble", 0, "/ˈteɪbl/", "cái bàn"],
        ["happy", "hap|py", 0, "/ˈhæpi/", "vui"],
        ["doctor", "doc|tor", 0, "/ˈdɒktə/", "bác sĩ"],
        ["student", "stu|dent", 0, "/ˈstjuːdnt/", "học sinh"],
        ["mountain", "moun|tain", 0, "/ˈmaʊntən/", "ngọn núi"],
        ["visit", "vis|it", 0, "/ˈvɪzɪt/", "thăm"],
        ["answer", "an|swer", 0, "/ˈɑːnsə/", "trả lời"],
        ["begin", "be|gin", 1, "/bɪˈɡɪn/", "bắt đầu"],
        ["decide", "de|cide", 1, "/dɪˈsaɪd/", "quyết định"],
        ["relax", "re|lax", 1, "/rɪˈlæks/", "thư giãn"],
        ["enjoy", "en|joy", 1, "/ɪnˈdʒɔɪ/", "thích thú"],
        ["invite", "in|vite", 1, "/ɪnˈvaɪt/", "mời"],
        ["hotel", "ho|tel", 1, "/həʊˈtel/", "khách sạn"],
        ["advice", "ad|vice", 1, "/ədˈvaɪs/", "lời khuyên"]
      ],
      "sentences": [
        ["The doctor decided to relax at the hotel.", "Bác sĩ quyết định nghỉ ngơi ở khách sạn."],
        ["Let's begin the lesson.", "Chúng ta bắt đầu bài học nhé."],
        ["The students enjoy visiting the mountains.", "Học sinh thích đi thăm núi."],
        ["Can you answer my question?", "Bạn trả lời câu hỏi của tôi được không?"]
      ]
    },
    {
      "id": "stress3", "group": 3, "grade": 8, "icon": "📢", "tag": "inforMAtion",
      "title": "Trọng âm từ ba âm tiết trở lên", "en": "Stress in longer words",
      "desc": "Nhìn đuôi từ để đoán trọng âm: -tion, -ic, -ity, -ee, -eer, -ese.",
      "formula": [
        ["-tion, -sion, -ic, -ical, -ity, -ian, -graphy", "Nhấn ngay âm tiết trước đuôi: inforMAtion, deCIsion, scienTIFic, uniVERsity, muSIcian"],
        ["-ee, -eer, -ese", "Nhấn chính đuôi đó: employEE, engiNEER, VietnamESE"],
        ["Tiền tố un-, im-, dis-", "Không nhận trọng âm, trọng âm giữ như từ gốc: unHAPpy, imPOSsible"]
      ],
      "grammar": [
        ["Nhìn đuôi từ", "Với từ dài, nhiều đuôi cho biết vị trí trọng âm. Đây là quy tắc hay dùng trong bài thi chọn từ có trọng âm khác.", "information | university | engineer"],
        ["Thêm tiền tố không đổi trọng âm", "Khi thêm un-, im-, dis- vào đầu từ, trọng âm vẫn ở âm tiết cũ của từ gốc.", "happy | unhappy | possible | impossible"]
      ],
      "stress": [
        ["information", "in|for|ma|tion", 2, "/ˌɪnfəˈmeɪʃn/", "thông tin"],
        ["decision", "de|ci|sion", 1, "/dɪˈsɪʒn/", "quyết định"],
        ["scientific", "sci|en|tif|ic", 2, "/ˌsaɪənˈtɪfɪk/", "thuộc khoa học"],
        ["university", "u|ni|ver|si|ty", 2, "/ˌjuːnɪˈvɜːsəti/", "trường đại học"],
        ["musician", "mu|si|cian", 1, "/mjuˈzɪʃn/", "nhạc sĩ"],
        ["employee", "em|ploy|ee", 2, "/ˌemplɔɪˈiː/", "nhân viên"],
        ["engineer", "en|gi|neer", 2, "/ˌendʒɪˈnɪə/", "kỹ sư"],
        ["Vietnamese", "Vi|et|nam|ese", 3, "/ˌvjetnəˈmiːz/", "người Việt; tiếng Việt"],
        ["unhappy", "un|hap|py", 1, "/ʌnˈhæpi/", "không vui"],
        ["impossible", "im|pos|si|ble", 1, "/ɪmˈpɒsəbl/", "không thể"],
        ["photography", "pho|tog|ra|phy", 1, "/fəˈtɒɡrəfi/", "nhiếp ảnh"],
        ["economic", "e|co|nom|ic", 2, "/ˌiːkəˈnɒmɪk/", "thuộc kinh tế"],
        ["computer", "com|pu|ter", 1, "/kəmˈpjuːtə/", "máy tính"],
        ["beautiful", "beau|ti|ful", 0, "/ˈbjuːtɪfl/", "đẹp"],
        ["tomorrow", "to|mor|row", 1, "/təˈmɒrəʊ/", "ngày mai"],
        ["holiday", "hol|i|day", 0, "/ˈhɒlədeɪ/", "kỳ nghỉ"]
      ],
      "sentences": [
        ["The musician studied at a famous university.", "Nhạc sĩ đã học ở một trường đại học nổi tiếng."],
        ["This information is very important.", "Thông tin này rất quan trọng."],
        ["My brother is an engineer.", "Anh trai tôi là kỹ sư."],
        ["It is impossible to make everyone happy.", "Không thể làm vừa lòng tất cả mọi người."]
      ]
    },
    {
      "id": "shbasic", "group": 4, "grade": 3, "icon": "👋", "tag": "Cơ bản", "kind": "shadow",
      "title": "Hội thoại hằng ngày", "en": "Everyday conversation",
      "desc": "Chào hỏi, giới thiệu, hỏi đường: câu ngắn để luyện nói theo.",
      "formula": [
        ["Bước 1", "Nghe cả câu, chú ý ngữ điệu và những từ được nhấn"],
        ["Bước 2", "Nghe chậm (nút con rùa) nếu câu còn nhanh"],
        ["Bước 3", "Nhấn micro và nói theo, bắt chước cả nhịp điệu"],
        ["Bước 4", "So sánh với câu mẫu, lặp lại đến khi trôi chảy"]
      ],
      "grammar": [
        ["Shadowing là gì", "Shadowing là nghe người nói rồi lặp lại ngay, bắt chước cả phát âm, trọng âm và ngữ điệu, như một cái bóng đi theo người nói.", "Hello, my name is Mai. Nice to meet you."],
        ["Mẹo luyện", "Lúc đầu đừng cố hiểu từng từ. Tập trung vào nhịp điệu: từ quan trọng được nhấn, từ nhỏ như a, the, of đọc nhẹ và nối vào từ bên cạnh.", "Could you say that again, please?"]
      ],
      "sentences": [
        ["Hello, my name is Mai. Nice to meet you.", "Xin chào, mình tên là Mai. Rất vui được gặp bạn."],
        ["How are you today?", "Hôm nay bạn thế nào?"],
        ["I'm fine, thank you. And you?", "Mình khỏe, cảm ơn bạn. Còn bạn thì sao?"],
        ["What do you do in your free time?", "Bạn làm gì vào thời gian rảnh?"],
        ["I usually read books or play football.", "Mình thường đọc sách hoặc đá bóng."],
        ["Could you say that again, please?", "Bạn có thể nói lại được không?"],
        ["Excuse me, where is the nearest bus stop?", "Xin lỗi, trạm xe buýt gần nhất ở đâu ạ?"],
        ["See you tomorrow. Have a nice day!", "Hẹn gặp bạn ngày mai. Chúc một ngày tốt lành!"]
      ]
    },
    {
      "id": "shtoeic", "group": 4, "grade": 12, "icon": "🏢", "tag": "TOEIC Part 2", "kind": "shadow",
      "title": "Hỏi đáp công sở", "en": "Office questions and answers",
      "desc": "Câu hỏi và câu trả lời ngắn kiểu TOEIC Listening Part 2.",
      "formula": [
        ["Bước 1", "Nghe câu hỏi, chú ý từ để hỏi ở đầu câu (When, Who, Why…)"],
        ["Bước 2", "Nói theo câu hỏi, rồi nói theo câu trả lời"],
        ["Bước 3", "Lặp lại cho đến khi nói kịp tốc độ câu mẫu"]
      ],
      "grammar": [
        ["Nối âm trong câu hỏi", "Trong câu nói nhanh, phụ âm cuối nối với nguyên âm đầu của từ sau: Could you send me … nghe như couldju.", "Could you send me the report by Friday?"],
        ["Nhấn từ mang thông tin", "Câu trả lời thường nhấn vào thông tin chính: giờ, người, lý do.", "It's been moved to three o'clock."]
      ],
      "sentences": [
        ["When is the meeting scheduled to start?", "Cuộc họp dự kiến bắt đầu lúc nào?"],
        ["It's been moved to three o'clock.", "Nó đã được dời sang ba giờ."],
        ["Who's in charge of the new project?", "Ai phụ trách dự án mới?"],
        ["Ms Kim from the marketing department.", "Chị Kim ở phòng marketing."],
        ["Could you send me the report by Friday?", "Bạn có thể gửi tôi báo cáo trước thứ Sáu không?"],
        ["Sure, I'll email it to you this afternoon.", "Được, chiều nay tôi sẽ gửi email cho bạn."],
        ["Why was the delivery delayed?", "Tại sao việc giao hàng bị chậm?"],
        ["Because of the heavy traffic this morning.", "Vì sáng nay tắc đường."]
      ]
    },
    {
      "id": "shielts1", "group": 4, "grade": 12, "icon": "🎤", "tag": "IELTS Speaking Part 1", "kind": "shadow",
      "title": "Trả lời IELTS Speaking Part 1", "en": "IELTS Speaking Part 1 answers",
      "desc": "Câu trả lời mẫu tự nhiên về bản thân, sở thích, thói quen.",
      "formula": [
        ["Bước 1", "Nghe câu trả lời mẫu, chú ý cách mở đầu tự nhiên (To be honest, I think…)"],
        ["Bước 2", "Nói theo từng câu, giữ đúng nhịp và chỗ ngắt"],
        ["Bước 3", "Thay thông tin trong câu bằng thông tin của bạn rồi nói lại"]
      ],
      "grammar": [
        ["Câu mở đầu giúp trả lời tự nhiên", "Các cụm như To be honest, I think, It depends on, Let me think giúp bạn có thời gian suy nghĩ và nghe tự nhiên hơn.", "To be honest, I'm not really a morning person."],
        ["Ngữ điệu câu kể", "Câu kể trong tiếng Anh thường hạ giọng ở cuối. Lên giọng ở cuối câu kể nghe như đang hỏi.", "I live in a small apartment near the city centre."]
      ],
      "sentences": [
        ["I'm currently a student at a university in Da Nang.", "Hiện tôi là sinh viên một trường đại học ở Đà Nẵng."],
        ["I live in a small apartment near the city centre.", "Tôi sống trong một căn hộ nhỏ gần trung tâm thành phố."],
        ["In my free time, I enjoy reading and going for a walk.", "Lúc rảnh tôi thích đọc sách và đi dạo."],
        ["To be honest, I'm not really a morning person.", "Thật lòng mà nói, tôi không phải người thích dậy sớm."],
        ["I prefer tea to coffee because it's more relaxing.", "Tôi thích trà hơn cà phê vì nó thư giãn hơn."],
        ["I think technology has made our lives much easier.", "Tôi nghĩ công nghệ đã làm cuộc sống của chúng ta dễ dàng hơn nhiều."],
        ["It depends on the weather, but I usually cycle to school.", "Còn tùy thời tiết, nhưng tôi thường đạp xe đến trường."],
        ["That's an interesting question. Let me think for a moment.", "Đó là một câu hỏi thú vị. Để tôi nghĩ một chút."]
      ]
    },
    {
      "id": "shielts2", "group": 4, "grade": 12, "icon": "🗺️", "tag": "IELTS Speaking Part 2", "kind": "shadow",
      "title": "Kể chuyện IELTS Speaking Part 2", "en": "IELTS Speaking Part 2 story",
      "desc": "Một bài nói mẫu kể về chuyến đi đáng nhớ, chia thành từng câu.",
      "formula": [
        ["Bước 1", "Nghe cả đoạn để nắm mạch kể: mở đầu, chi tiết, cảm nghĩ"],
        ["Bước 2", "Nói theo từng câu, chú ý các từ nối (What I remember most, Overall)"],
        ["Bước 3", "Tự kể lại chuyến đi của bạn theo cùng khung"]
      ],
      "grammar": [
        ["Khung bài nói Part 2", "Mở đầu bằng I'd like to talk about …, kể ai, ở đâu, khi nào, chuyện gì, và kết thúc bằng cảm nghĩ.", "I'd like to talk about a trip I took last summer."],
        ["Nhịp độ", "Nói chậm và rõ tốt hơn nói nhanh mà vấp. Ngắt hơi ở dấu phẩy và sau các cụm từ dài.", "Overall, it was one of the most memorable experiences of my life."]
      ],
      "sentences": [
        ["I'd like to talk about a trip I took last summer.", "Tôi muốn kể về một chuyến đi vào mùa hè năm ngoái."],
        ["I went to Da Lat with three of my closest friends.", "Tôi đi Đà Lạt với ba người bạn thân nhất."],
        ["We stayed in a small guesthouse surrounded by pine trees.", "Chúng tôi ở một nhà nghỉ nhỏ giữa rừng thông."],
        ["What I remember most is the fresh, cool air in the morning.", "Điều tôi nhớ nhất là không khí trong lành, mát mẻ buổi sáng."],
        ["We spent most of our time exploring the local markets.", "Chúng tôi dành phần lớn thời gian khám phá các khu chợ địa phương."],
        ["The trip was special because it was our last holiday before university.", "Chuyến đi đặc biệt vì đó là kỳ nghỉ cuối trước khi vào đại học."],
        ["Overall, it was one of the most memorable experiences of my life.", "Nhìn chung, đó là một trong những trải nghiệm đáng nhớ nhất đời tôi."],
        ["I'd love to go back there again one day.", "Tôi rất muốn một ngày nào đó quay lại đó."]
      ]
    }
  ]
});
