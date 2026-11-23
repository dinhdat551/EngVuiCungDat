/* EngVui – Đọc hiểu IELTS (Academic): bốn bài đọc dài khoảng 250–300 chữ, câu hỏi True/False/Not Given và trắc nghiệm.
   Nội dung tự soạn theo dạng đề IELTS Reading, không phải đề thi chính thức. Mỗi bài có nút nghe cả bài để luyện nghe bài đọc. */
EV.extendExam({
  names: [],
  groups: [{ id: 14, title: 'Đọc IELTS', desc: 'Bài đọc học thuật: True/False/Not Given và trắc nghiệm', color: '#EC4899', dark: '#C42E7B' }],
  topics: [
    {
      id: 'ri-1', group: 14, grade: 12, icon: '✈️', tag: 'IELTS Reading',
      title: 'Bài đọc 1 · Hãng bay giá rẻ', en: 'The rise of low-cost airlines', desc: 'Vì sao vé máy bay rẻ hơn và cái giá phải trả. 6 câu hỏi.',
      reading: {
        title: 'The rise of low-cost airlines', kind: 'article',
        text: [
          'Fifty years ago, flying was a luxury. Tickets were expensive, meals were served on china plates, and most passengers were wealthy or travelling on business. Today, millions of people take a plane for a weekend break or to visit family, and this change is largely due to low-cost airlines.',
          'The idea behind the low-cost model is simple: cut every cost that passengers do not absolutely need. These airlines usually fly a single type of aircraft, which makes training and maintenance cheaper. They use smaller airports, which charge lower fees, and they keep the time that planes spend on the ground very short, so each aircraft can make more flights each day.',
          'Passengers also pay for extras. Instead of including a meal, a suitcase and a seat choice in the ticket price, low-cost airlines charge separately for each of these. As a result, the basic fare can be very low, although the final price may rise sharply if travellers add many extras. Critics argue that this system is confusing, and several countries have introduced rules that require airlines to show the full price at the start of the booking process.',
          'The low-cost model has changed the whole industry. Traditional airlines have introduced cheaper fares without meals on short routes, and some have created their own budget brands. Experts expect competition to continue, but they warn that very low fares can put pressure on staff wages and safety budgets, and that governments must keep strict controls.',
        ],
        questions: [
          ['Fifty years ago, most air passengers were wealthy or travelling on business.', 'True', ['False', 'Not Given'], 'Đoạn 1: most passengers were wealthy or travelling on business.'],
          ['Low-cost airlines usually use several different types of aircraft.', 'False', ['True', 'Not Given'], 'Đoạn 2: họ thường dùng một loại máy bay (a single type of aircraft).'],
          ['Low-cost airlines choose larger airports because the fees are lower.', 'False', ['True', 'Not Given'], 'Đoạn 2: họ dùng sân bay nhỏ hơn (smaller airports), phí thấp hơn.'],
          ['Low-cost airlines are more popular in Europe than in Asia.', 'Not Given', ['True', 'False'], 'Bài không so sánh mức độ phổ biến theo khu vực.'],
          ['Why can the final price of a low-cost ticket be much higher than the basic fare?', 'Passengers pay separately for extras.', ['The airline uses expensive aircraft.', 'Airports charge very high fees.', 'Meals are always included.'], 'Đoạn 3: hãng tính tiền riêng bữa ăn, hành lý, chọn ghế.'],
          ['What do some governments now require airlines to do?', 'Show the full price at the start of booking', ['Stop selling cheap tickets', 'Serve a free meal', 'Use only large airports'], 'Đoạn 3: rules that require airlines to show the full price at the start of the booking process.'],
        ],
      },
    },
    {
      id: 'ri-2', group: 14, grade: 12, icon: '🌍', tag: 'IELTS Reading',
      title: 'Bài đọc 2 · Chứng lệch múi giờ', en: 'Jet lag and the body clock', desc: 'Vì sao cơ thể mệt mỏi sau chuyến bay dài và cách giảm bớt. 6 câu hỏi.',
      reading: {
        title: 'Jet lag and the body clock', kind: 'article',
        text: [
          'Jet lag is the tiredness and confusion that many travellers feel after crossing several time zones. It happens because the body has an internal clock, known as the circadian rhythm, which tells us when to sleep, eat and wake up. This clock is controlled by a small area of the brain and is set mainly by daylight.',
          'When a person flies quickly from London to Singapore, daylight reaches them at a very different time from the one their clock expects. For several days the body is, in effect, living in the wrong time zone. Symptoms include difficulty sleeping at night, sleepiness during the day, headaches and loss of appetite.',
          'Research suggests that travelling east is usually harder than travelling west. Flying east shortens the day, so the traveller must go to sleep earlier than the body wants, while flying west lengthens the day, which is easier for most people to accept. As a general rule, the body adjusts by about one hour per day, so a six-hour time difference may take almost a week to overcome.',
          'There is no perfect cure, but several strategies can help. Spending time outdoors in daylight at the destination helps to reset the clock. Some travellers move their sleeping times by an hour or two for several days before departure. Doctors advise drinking plenty of water and avoiding heavy meals and alcohol during the flight. Short naps of less than thirty minutes can reduce tiredness without making it harder to sleep at night.',
        ],
        questions: [
          ['What mainly sets the body\'s internal clock?', 'Daylight', ['Meals', 'Exercise', 'Temperature'], 'Đoạn 1: This clock is ... set mainly by daylight.'],
          ['Jet lag only affects people who travel for business.', 'Not Given', ['True', 'False'], 'Bài chỉ nói "many travellers", không nói riêng người đi công tác.'],
          ['Travelling west is usually easier than travelling east.', 'True', ['False', 'Not Given'], 'Đoạn 3: travelling east is usually harder than travelling west.'],
          ['The body usually adjusts by about two hours per day.', 'False', ['True', 'Not Given'], 'Đoạn 3: cơ thể thích nghi khoảng một giờ mỗi ngày (about one hour per day).'],
          ['According to the text, what helps to reset the body clock?', 'Spending time outdoors in daylight', ['Taking long naps', 'Drinking alcohol', 'Eating heavy meals'], 'Đoạn 4: Spending time outdoors in daylight at the destination helps to reset the clock.'],
          ['Doctors recommend long naps to reduce tiredness.', 'False', ['True', 'Not Given'], 'Đoạn 4: chỉ nên ngủ ngắn dưới ba mươi phút (short naps of less than thirty minutes).'],
        ],
      },
    },
    {
      id: 'ri-3', group: 14, grade: 12, icon: '🗣️', tag: 'IELTS Reading',
      title: 'Bài đọc 3 · Học ngoại ngữ khi trưởng thành', en: 'Learning a language as an adult', desc: 'Trẻ em có lợi thế gì và người lớn có lợi thế gì khi học ngôn ngữ. 6 câu hỏi.',
      reading: {
        title: 'Learning a language as an adult', kind: 'article',
        text: [
          'Many people believe that children learn languages more easily than adults, and in some respects they are right. Young children can often reach a native-like accent, partly because their brains are flexible and they are not afraid of making mistakes. However, recent studies suggest that adults have important advantages of their own.',
          'Adults generally understand grammar rules more quickly because they can compare a new language with the one they already know. They also have a wider vocabulary in their first language, and they can use learning strategies such as making lists, using flashcards and setting goals. In one experiment, adult learners made faster progress than children during the first few months of a course.',
          'Motivation is another key factor. Adults often study because they need a language for work, travel or family reasons, and this strong reason keeps them going. Researchers also point out that regular short practice sessions are more effective than long, occasional ones. Studying for twenty minutes every day is generally better than studying for three hours once a week.',
          'Finally, the environment matters. Learners who use the language outside the classroom, for example by watching films, speaking with neighbours or joining online groups, usually improve faster. The main conclusion is encouraging: age may influence pronunciation, but it does not prevent adults from learning to communicate well.',
        ],
        questions: [
          ['Children can often reach a more native-like accent than adults.', 'True', ['False', 'Not Given'], 'Đoạn 1: Young children can often reach a native-like accent.'],
          ['In one experiment, children made faster progress than adults at the start of a course.', 'False', ['True', 'Not Given'], 'Đoạn 2: người lớn tiến bộ nhanh hơn trẻ em trong vài tháng đầu.'],
          ['Most adult learners prefer to study alone.', 'Not Given', ['True', 'False'], 'Bài không nói người lớn thích học một mình hay theo nhóm.'],
          ['Why do adults often stay motivated?', 'They need the language for a clear purpose.', ['They enjoy exams.', 'Their teachers give them prizes.', 'They have more free time than children.'], 'Đoạn 3: adults often study because they need a language for work, travel or family reasons.'],
          ['What do researchers recommend?', 'Short, regular practice', ['One long lesson a week', 'Studying only at night', 'Avoiding mistakes completely'], 'Đoạn 3: regular short practice sessions are more effective.'],
          ['What is the main conclusion of the text?', 'Adults can learn to communicate well despite their age.', ['Only children can speak like native speakers.', 'Adults should not learn a second language.', 'Pronunciation is the only important skill.'], 'Đoạn 4: age ... does not prevent adults from learning to communicate well.'],
        ],
      },
    },
    {
      id: 'ri-4', group: 14, grade: 12, icon: '🌱', tag: 'IELTS Reading',
      title: 'Bài đọc 4 · Hàng không và môi trường', en: 'Aviation and the environment', desc: 'Các cách giảm khí thải của máy bay: tiết kiệm nhiên liệu, nhiên liệu bền vững và máy bay điện. 6 câu hỏi.',
      reading: {
        title: 'Aviation and the environment', kind: 'article',
        text: [
          'Aviation produces about two and a half percent of the world\'s carbon dioxide emissions, a figure that sounds small but is growing quickly as more people fly. Unlike cars, aircraft cannot easily use batteries, because current batteries are too heavy to carry enough energy for long flights. For this reason, the industry is looking for other solutions.',
          'One approach is to improve efficiency. Modern aircraft use about twenty percent less fuel per passenger than planes built twenty years ago, thanks to lighter materials and better engines. Airlines also save fuel by flying more direct routes, reducing the weight of what they carry, and taxiing with one engine switched off.',
          'A second approach is sustainable aviation fuel, which is made from used cooking oil, plant waste or other renewable materials. This fuel can be mixed with ordinary jet fuel and used in existing aircraft without changes. Its main disadvantage is cost: at present, it is two to three times more expensive than conventional fuel, and supplies are limited.',
          'In the longer term, some companies are developing electric and hydrogen aircraft for short routes. Experts believe that small electric planes may carry passengers within the next ten years, but they doubt that large hydrogen aircraft will fly before 2040. Meanwhile, many airlines offer passengers the chance to pay a small extra fee to support projects that reduce emissions.',
        ],
        questions: [
          ['Aviation currently causes more than ten percent of the world\'s carbon dioxide emissions.', 'False', ['True', 'Not Given'], 'Đoạn 1: khoảng 2,5 phần trăm (about two and a half percent).'],
          ['Batteries are currently too heavy for long-distance aircraft.', 'True', ['False', 'Not Given'], 'Đoạn 1: current batteries are too heavy to carry enough energy for long flights.'],
          ['Sustainable aviation fuel can be used in existing aircraft.', 'True', ['False', 'Not Given'], 'Đoạn 3: used in existing aircraft without changes.'],
          ['All airlines now use sustainable aviation fuel on every flight.', 'Not Given', ['True', 'False'], 'Bài không nói hãng nào đã dùng cho mọi chuyến bay.'],
          ['What is the main disadvantage of sustainable aviation fuel?', 'It costs more than ordinary fuel.', ['It cannot be mixed with jet fuel.', 'It makes planes heavier.', 'It is made from oil.'], 'Đoạn 3: two to three times more expensive than conventional fuel.'],
          ['When do experts expect large hydrogen aircraft to fly?', 'Not before 2040', ['Within the next ten years', 'Last year', 'In 2025'], 'Đoạn 4: they doubt that large hydrogen aircraft will fly before 2040.'],
        ],
      },
    },
  ],
});
