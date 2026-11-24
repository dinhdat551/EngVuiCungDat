/* EngVui – trạng thái người học, lưu trong localStorage của trình duyệt */
(function () {
  const U = EV.util;
  const KEY = (EV.config && EV.config.storageKey) || 'engvui:v1';

  const CONST = {
    MAX_HEARTS: 5,
    HEART_MS: 30 * 60 * 1000,
    REFILL_COST: 350,
    FREEZE_COST: 200,
    MAX_FREEZES: 2,
    BOOST_COST: 100,
    BOOST_MS: 15 * 60 * 1000,
    SPEAK_OFF_MS: 60 * 60 * 1000,
  };

  function freshDaily(day) {
    return { day, xp: 0, lessons: 0, perfect: 0, acc90: 0, bestCombo: 0, newWords: 0, listening: 0, claimed: [] };
  }

  function defaults() {
    const now = Date.now();
    return {
      v: 1,
      onboarded: false,
      profile: { name: '', avatar: '🐲', color: '#1CB0F6', created: now, grade: null },
      settings: {
        sound: true, autoSpeak: true, rate: 0.9, voice: '', speaking: true,
        unlimitedHearts: false, unlockAll: false, theme: 'light', dailyGoal: 20,
      },
      xp: 0,
      gems: 500,
      hearts: CONST.MAX_HEARTS,
      heartsAt: now,
      streak: { count: 0, last: null, longest: 0, freezes: 0, frozen: [] },
      daily: freshDaily(U.dayKey()),
      history: {},
      activeDays: [],
      league: { tier: 0, bestTier: 0, week: U.weekId(), xp: 0, result: null },
      progress: {},
      learned: {},
      mistakes: [],
      stats: { lessons: 0, perfect: 0, tests: 0, chests: 0, ms: 0, speakOk: 0 },
      achievements: {},
      boostUntil: 0,
      speakOffUntil: 0,
    };
  }

  function merge(base, saved) {
    if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return base;
    Object.keys(saved).forEach((k) => {
      const b = base[k], s = saved[k];
      if (b && typeof b === 'object' && !Array.isArray(b) && s && typeof s === 'object' && !Array.isArray(s)
        && !['progress', 'learned', 'history', 'achievements'].includes(k)) {
        base[k] = merge(b, s);
      } else if (s !== undefined) {
        base[k] = s;
      }
    });
    return base;
  }

  let st = defaults();
  const notices = [];
  const listeners = [];

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) st = merge(defaults(), JSON.parse(raw));
    } catch (e) {
      st = defaults();
    }
    tick();
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* bộ nhớ đầy hoặc bị chặn */ }
    listeners.forEach((fn) => { try { fn(); } catch (e) { console.error(e); } });
  }

  const onChange = (fn) => listeners.push(fn);

  /* ---------- ngày, chuỗi streak, tuần ---------- */
  function rollDay() {
    const today = U.dayKey();
    if (st.daily.day !== today) st.daily = freshDaily(today);
    const s = st.streak;
    if (s.last && s.count > 0) {
      const diff = U.dayDiff(s.last, today);
      if (diff > 1) {
        const missed = diff - 1;
        if (s.freezes >= missed) {
          s.freezes -= missed;
          for (let k = 1; k <= missed; k++) s.frozen.push(U.addDays(s.last, k));
          s.frozen = s.frozen.slice(-30);
          s.last = U.addDays(today, -1);
          notices.push({ type: 'freeze', n: missed });
        } else {
          notices.push({ type: 'lost', n: s.count });
          s.count = 0;
        }
      }
    }
  }

  function rollWeek() {
    const wk = U.weekId();
    const L = st.league;
    if (L.week === wk) return;
    if (L.xp > 0) {
      const rank = EV.league.finalRank(L.week, L.tier, L.xp);
      let to = L.tier, change = 'stay';
      if (rank <= EV.league.PROMOTE && L.tier < EV.league.TIERS.length - 1) { to++; change = 'up'; }
      else if (rank > EV.league.SIZE - EV.league.DEMOTE && L.tier > 0) { to--; change = 'down'; }
      L.result = { week: L.week, rank, from: L.tier, to, change, seen: false };
      L.tier = to;
      L.bestTier = Math.max(L.bestTier || 0, to);
    }
    L.week = wk;
    L.xp = 0;
  }

  /* ---------- tim ---------- */
  function refreshHearts() {
    const now = Date.now();
    if (st.hearts >= CONST.MAX_HEARTS) { st.heartsAt = now; return; }
    const gained = Math.floor((now - st.heartsAt) / CONST.HEART_MS);
    if (gained > 0) {
      st.hearts = Math.min(CONST.MAX_HEARTS, st.hearts + gained);
      st.heartsAt += gained * CONST.HEART_MS;
      if (st.hearts >= CONST.MAX_HEARTS) st.heartsAt = now;
    }
  }
  const nextHeartIn = () => (st.hearts >= CONST.MAX_HEARTS ? 0 : Math.max(0, st.heartsAt + CONST.HEART_MS - Date.now()));
  const heartsUnlimited = () => !EV.config.economy || !!st.settings.unlimitedHearts;

  function loseHeart() {
    if (heartsUnlimited()) return;
    refreshHearts();
    if (st.hearts >= CONST.MAX_HEARTS) st.heartsAt = Date.now();
    st.hearts = Math.max(0, st.hearts - 1);
    save();
  }
  function gainHearts(n) {
    st.hearts = Math.min(CONST.MAX_HEARTS, st.hearts + n);
    if (st.hearts >= CONST.MAX_HEARTS) st.heartsAt = Date.now();
    save();
  }

  function tick() {
    rollDay();
    rollWeek();
    refreshHearts();
    save();
  }

  /* ---------- đá quý & cửa hàng ---------- */
  function spend(n) {
    if (st.gems < n) return false;
    st.gems -= n;
    save();
    return true;
  }
  function addGems(n) { st.gems += n; save(); }
  function buyRefill() {
    refreshHearts();
    if (st.hearts >= CONST.MAX_HEARTS || !spend(CONST.REFILL_COST)) return false;
    gainHearts(CONST.MAX_HEARTS);
    return true;
  }
  function buyFreeze() {
    if (st.streak.freezes >= CONST.MAX_FREEZES || !spend(CONST.FREEZE_COST)) return false;
    st.streak.freezes++;
    save();
    return true;
  }
  function buyBoost() {
    if (isBoosted() || !spend(CONST.BOOST_COST)) return false;
    st.boostUntil = Date.now() + CONST.BOOST_MS;
    save();
    return true;
  }
  const isBoosted = () => st.boostUntil > Date.now();

  /* ---------- tiến độ bài học ---------- */
  const isDone = (nodeId) => !!st.progress[nodeId];
  function markDone(nodeId, accuracy, extra) {
    const p = st.progress[nodeId] || { n: 0, best: 0 };
    p.n++;
    p.best = Math.max(p.best || 0, accuracy || 0);
    Object.assign(p, extra || {});
    st.progress[nodeId] = p;
  }
  function openChest(nodeId) {
    if (isDone(nodeId)) return 0;
    const rng = U.seeded(nodeId + ':' + st.profile.created);
    const gems = 5 + Math.floor(rng() * 4) * 5; // 5–20
    markDone(nodeId, 100);
    st.gems += gems;
    st.stats.chests++;
    save();
    return gems;
  }
  function jumpTo(grade, unitIndex) {
    const G = EV.course.getGrade(grade);
    if (!G) return;
    G.units.slice(0, unitIndex).forEach((u) => u.nodes.concat(u.review || []).forEach((n) => {
      if (n.kind !== 'chest' && !n.adv && !isDone(n.id)) st.progress[n.id] = { n: 1, best: 0, jumped: true };
    }));
    save();
  }

  /* ---------- từ đã học & lỗi sai ---------- */
  function itemResult(item, ok, mode) {
    if (!item || !item.key) return;
    const key = item.key;
    if (item.kind === 'word') {
      const w = st.learned[key];
      if (w) {
        w.s = U.clamp((w.s || 0) + (ok ? 1 : -1), 0, 5);
        w.t = Date.now();
      }
    }
    if (!ok) {
      st.mistakes = [key].concat(st.mistakes.filter((k) => k !== key)).slice(0, 80);
    } else if (mode === 'practice') {
      st.mistakes = st.mistakes.filter((k) => k !== key);
    }
  }
  function learnWords(keys) {
    let n = 0;
    (keys || []).forEach((k) => {
      if (!st.learned[k]) { st.learned[k] = { s: 1, t: Date.now() }; n++; }
    });
    st.daily.newWords += n;
    return n;
  }

  /* ---------- hoàn thành bài học ---------- */
  function addXP(n) {
    const today = U.dayKey();
    st.xp += n;
    st.daily.xp += n;
    st.league.xp += n;
    st.history[today] = (st.history[today] || 0) + n;
    const keys = Object.keys(st.history).sort();
    if (keys.length > 120) keys.slice(0, keys.length - 120).forEach((k) => delete st.history[k]);
  }

  function completeLesson(r) {
    const today = U.dayKey();
    const goal = st.settings.dailyGoal;
    const goalBefore = st.daily.xp >= goal;
    const achBefore = achievementLevels();
    addXP(r.xp);
    st.daily.lessons++;
    st.stats.lessons++;
    st.stats.ms += r.timeMs || 0;
    if (r.perfect) { st.daily.perfect++; st.stats.perfect++; }
    if (r.accuracy >= 90) st.daily.acc90++;
    st.daily.bestCombo = Math.max(st.daily.bestCombo, r.maxCombo || 0);
    if (r.kind === 'listening' || r.kind === 'listenc' || r.practiceMode === 'listen') st.daily.listening++;
    if (r.kind === 'test' || r.kind === 'review') st.stats.tests++;
    const newWords = learnWords(r.wordKeys);
    if (r.nodeId) markDone(r.nodeId, r.accuracy);
    if (r.practice) gainHearts(1);

    let streakExtended = false;
    if (st.streak.last !== today) {
      st.streak.count = (st.streak.count || 0) + 1;
      st.streak.last = today;
      st.streak.longest = Math.max(st.streak.longest || 0, st.streak.count);
      streakExtended = true;
    }
    if (!st.activeDays.includes(today)) st.activeDays = st.activeDays.concat(today).slice(-60);

    const achAfter = achievementLevels();
    const newAch = ACHIEVEMENTS.filter((a) => achAfter[a.id] > (achBefore[a.id] || 0))
      .map((a) => ({ a, level: achAfter[a.id] }));
    newAch.forEach(({ a, level }) => { st.achievements[a.id] = level; });
    save();
    return {
      streakExtended,
      streak: st.streak.count,
      goalReached: !goalBefore && st.daily.xp >= goal,
      newAchievements: newAch,
      newWords,
    };
  }

  /* ---------- nhiệm vụ hằng ngày ---------- */
  const QUEST_POOL = [
    { id: 'lessons', icon: '📘', title: (n) => `Hoàn thành ${n} bài học`, targets: [2, 3, 4], metric: (d) => d.lessons },
    { id: 'combo', icon: '🎯', title: (n) => `Trả lời đúng ${n} câu liên tiếp`, targets: [5, 8, 10], metric: (d) => d.bestCombo },
    { id: 'perfect', icon: '💯', title: () => 'Hoàn thành 1 bài học không sai câu nào', targets: [1], metric: (d) => d.perfect },
    { id: 'acc90', icon: '🏹', title: (n) => `Đạt độ chính xác từ 90% trong ${n} bài học`, targets: [1, 2], metric: (d) => d.acc90 },
    { id: 'listen', icon: '🎧', title: () => 'Hoàn thành 1 bài luyện nghe', targets: [1], metric: (d) => d.listening },
    { id: 'words', icon: '📝', title: (n) => `Học ${n} từ mới`, targets: [5, 8, 10], metric: (d) => d.newWords },
  ];
  function quests() {
    const d = st.daily;
    const rng = U.seeded('quests:' + d.day);
    const xpTarget = [20, 30, 40, 50][Math.floor(rng() * 4)];
    const list = [{ id: 'xp', icon: '⚡', title: `Kiếm ${xpTarget} KN`, target: xpTarget, value: d.xp, reward: 15 }];
    U.shuffle(QUEST_POOL, rng).slice(0, 2).forEach((q, i) => {
      const target = q.targets[Math.floor(rng() * q.targets.length)];
      list.push({ id: q.id, icon: q.icon, title: q.title(target), target, value: q.metric(d), reward: i === 0 ? 10 : 20 });
    });
    return list.map((q) => Object.assign(q, {
      value: Math.min(q.value, q.target),
      done: q.value >= q.target,
      claimed: d.claimed.includes(q.id),
    }));
  }
  function claimQuest(id) {
    const q = quests().find((x) => x.id === id);
    if (!q || !q.done || q.claimed) return 0;
    st.daily.claimed.push(id);
    st.gems += q.reward;
    save();
    return q.reward;
  }

  /* ---------- thành tích ---------- */
  const ACHIEVEMENTS = [
    { id: 'streak', icon: '🔥', name: 'Lửa rực cháy', desc: (t) => `Đạt chuỗi ${t} ngày học liên tiếp`, tiers: [3, 7, 14, 30, 60, 100], value: () => st.streak.longest || 0 },
    { id: 'xp', icon: '⚡', name: 'Nhà thông thái', desc: (t) => `Tích lũy ${U.fmtNum(t)} KN`, tiers: [100, 500, 1000, 2500, 5000, 10000], value: () => st.xp },
    { id: 'lessons', icon: '📚', name: 'Chăm chỉ', desc: (t) => `Hoàn thành ${t} bài học`, tiers: [1, 10, 25, 50, 100, 250], value: () => st.stats.lessons },
    { id: 'words', icon: '📖', name: 'Từ điển sống', desc: (t) => `Học ${t} từ vựng`, tiers: [20, 50, 100, 250, 500, 1000], value: () => Object.keys(st.learned).length },
    { id: 'perfect', icon: '💯', name: 'Cầu toàn', desc: (t) => `${t} bài học không sai câu nào`, tiers: [1, 5, 10, 25, 50, 100], value: () => st.stats.perfect },
    { id: 'tests', icon: '🏆', name: 'Nhà vô địch', desc: (t) => `Vượt qua ${t} bài kiểm tra Unit`, tiers: [1, 3, 5, 10, 20, 40], value: () => st.stats.tests },
    { id: 'chests', icon: '🎁', name: 'Thợ săn kho báu', desc: (t) => `Mở ${t} rương báu`, tiers: [1, 5, 10, 25, 50, 100], value: () => st.stats.chests },
    { id: 'league', icon: '🥇', name: 'Cao thủ giải đấu', desc: (t) => `Lên giải ${EV.league.TIERS[t].name}`, tiers: [1, 2, 3, 5, 7, 9], value: () => st.league.bestTier || 0 },
  ];
  function achievementLevels() {
    const out = {};
    ACHIEVEMENTS.forEach((a) => {
      const v = a.value();
      out[a.id] = a.tiers.filter((t) => v >= t).length;
    });
    return out;
  }

  /* ---------- khác ---------- */
  function set(path, value) {
    const parts = path.split('.');
    let o = st;
    while (parts.length > 1) o = o[parts.shift()];
    o[parts[0]] = value;
    save();
  }
  function reset() {
    try { localStorage.removeItem(KEY); } catch (e) { /* bỏ qua */ }
    st = defaults();
    save();
  }
  function exportData() { return JSON.stringify(st, null, 2); }
  function importData(json) {
    const data = JSON.parse(json);
    if (!data || typeof data !== 'object' || !data.profile) throw new Error('File không đúng định dạng');
    st = merge(defaults(), data);
    tick();
  }
  const speakingEnabled = () => st.settings.speaking && st.speakOffUntil < Date.now() && EV.audio && EV.audio.canListen();

  EV.store = {
    CONST, ACHIEVEMENTS,
    get state() { return st; },
    load, save, tick, onChange, set, reset, exportData, importData,
    takeNotices: () => notices.splice(0, notices.length),
    refreshHearts, nextHeartIn, loseHeart, gainHearts, heartsUnlimited,
    spend, addGems, buyRefill, buyFreeze, buyBoost, isBoosted,
    isDone, markDone, openChest, jumpTo,
    itemResult, learnWords, completeLesson,
    quests, claimQuest, achievementLevels, speakingEnabled,
  };
})();
