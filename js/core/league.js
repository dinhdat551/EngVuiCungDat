/* EngVui – giải đấu tuần (đối thủ mô phỏng, chạy hoàn toàn trên máy) */
(function () {
  const U = EV.util;

  const TIERS = [
    { name: 'Đồng', color: '#CD7F32', dark: '#A0612A' },
    { name: 'Bạc', color: '#B8C4CE', dark: '#8E9BA6' },
    { name: 'Vàng', color: '#FFC800', dark: '#D9A800' },
    { name: 'Lam Ngọc', color: '#1CB0F6', dark: '#1480B3' },
    { name: 'Hồng Ngọc', color: '#FF4B6E', dark: '#C9304F' },
    { name: 'Lục Bảo', color: '#2ECC71', dark: '#219A55' },
    { name: 'Thạch Anh Tím', color: '#A560E8', dark: '#7D43B5' },
    { name: 'Ngọc Trai', color: '#F5B8C8', dark: '#D08DA0' },
    { name: 'Hắc Diện Thạch', color: '#4B5563', dark: '#2F3740' },
    { name: 'Kim Cương', color: '#5ED6F4', dark: '#2FAFCF' },
  ];
  const SIZE = 30;
  const PROMOTE = 7;
  const DEMOTE = 5;

  const NAMES = [
    'Minh Anh', 'Gia Huy', 'Bảo Ngọc', 'Khánh Linh', 'Đức Minh', 'Thảo Vy', 'Quang Huy', 'Ngọc Hân', 'Tuấn Kiệt',
    'Phương Thảo', 'Hoàng Nam', 'Mai Chi', 'Anh Thư', 'Minh Khang', 'Hà My', 'Nhật Minh', 'Bảo Anh', 'Thanh Tâm',
    'Gia Bảo', 'Trâm Anh', 'Hải Đăng', 'Yến Nhi', 'Đăng Khoa', 'Như Quỳnh', 'Việt Hoàng', 'Kim Ngân', 'Phúc An',
    'Lan Chi', 'Trung Kiên', 'Diệu Linh', 'Hữu Phước', 'Tường Vy', 'Quốc Bảo', 'Ngọc Diệp', 'Thành Đạt', 'Cẩm Tú',
    'Minh Thư', 'Duy Khánh', 'Hồng Nhung', 'Tiến Dũng', 'Bích Ngọc', 'Khôi Nguyên', 'Thu Trang', 'Văn Toàn', 'Mỹ Duyên',
    'Emma', 'Lucas', 'Lily', 'Tom', 'Sophie', 'Kenji', 'Mia', 'Noah', 'Hana', 'Leo',
  ];
  const COLORS = ['#FF9600', '#CE82FF', '#1CB0F6', '#58CC02', '#FF4B4B', '#00CD9C', '#FF86D0', '#2B70C9', '#FFC800'];

  const cache = {};
  function bots(week, tier) {
    const key = `${week}:${tier}`;
    if (cache[key]) return cache[key];
    const rng = U.seeded('league:' + key);
    const names = U.shuffle(NAMES, rng).slice(0, SIZE - 1);
    const list = names.map((name, i) => {
      const activity = Math.pow(rng(), 1.5) * (0.2 + tier * 0.03);
      const chunk = 8 + Math.floor(rng() * 10) + tier * 2;
      const r2 = U.seeded(U.hash(key + ':' + i));
      const cum = new Array(169);
      cum[0] = 0;
      for (let h = 1; h <= 168; h++) {
        const hour = h % 24;
        const awake = hour >= 6 && hour <= 22 ? 1 : 0.1;
        cum[h] = cum[h - 1] + (r2() < activity * awake ? chunk + Math.floor(r2() * chunk) : 0);
      }
      return { name, color: COLORS[i % COLORS.length], cum };
    });
    cache[key] = list;
    return list;
  }

  function standings(week, tier, userXp, userName, userAvatar, now) {
    const start = U.parseDay(week).getTime();
    const hours = U.clamp(((now || Date.now()) - start) / 3600000, 0, 168);
    const rows = bots(week, tier).map((b) => ({ name: b.name, color: b.color, xp: b.cum[Math.floor(hours)] }));
    rows.push({ name: userName || 'Bạn', avatar: userAvatar, xp: userXp, me: true });
    rows.sort((a, b) => b.xp - a.xp || (a.me ? -1 : b.me ? 1 : a.name.localeCompare(b.name)));
    return rows;
  }

  function finalRank(week, tier, userXp) {
    const end = U.parseDay(week).getTime() + 168 * 3600000;
    const rows = standings(week, tier, userXp, '', '', end);
    return rows.findIndex((r) => r.me) + 1;
  }

  function timeLeft(now) {
    const start = U.weekStart(new Date(now || Date.now()));
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    return end.getTime() - (now || Date.now());
  }

  EV.league = { TIERS, SIZE, PROMOTE, DEMOTE, standings, finalRank, timeLeft };
})();
