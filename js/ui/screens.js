/* EngVui – các màn hình: Học (lộ trình), Luyện tập, Xếp hạng, Nhiệm vụ, Cửa hàng, Hồ sơ, Cài đặt, Chào mừng */
(function () {
  const U = EV.util;
  const C = EV.course;
  const Art = EV.art;
  const UI = EV.ui;
  const A = EV.audio;
  const S = () => EV.store;
  const st = () => EV.store.state;
  const esc = U.esc;

  const NAV = [
    { id: 'learn', label: 'Học', icon: '🏠' },
    { id: 'grammar', label: 'Ngữ pháp', icon: '📐' },
    { id: 'exam', label: 'Luyện thi', icon: '📝' },
    { id: 'pron', label: 'Phát âm', icon: '🗣️' },
    { id: 'shadow', label: 'Shadowing', icon: '🎙️', noBottom: true },
    { id: 'practice', label: 'Luyện tập', icon: '🏋️' },
    { id: 'leaderboard', label: 'Xếp hạng', icon: '🏆' },
    { id: 'quests', label: 'Nhiệm vụ', icon: '🎯' },
    { id: 'shop', label: 'Cửa hàng', icon: '🛍️', noBottom: true },
    { id: 'profile', label: 'Hồ sơ', icon: '' },
    { id: 'settings', label: 'Cài đặt', icon: '⚙️', noBottom: true },
  ].filter((n) => (EV.config.economy || n.id !== 'shop') && (EV.config.league || n.id !== 'leaderboard') && (EV.config.quests || n.id !== 'quests'));
  const AVATARS = ['🐲', '🦊', '🐼', '🐯', '🐸', '🐵', '🦁', '🐨', '🐰', '🐧', '🐙', '🦄', '🐱', '🐶', '🐻', '🐹', '🦉', '🐢'];
  const COLORS = ['#1CB0F6', '#58CC02', '#FF9600', '#CE82FF', '#FF4B4B', '#00CD9C', '#FF86D0', '#2B70C9', '#FFC800'];
  const WEEKDAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  /* =========================================================
     Khung trang & thanh thống kê
     ========================================================= */
  // Ẩn mục Ngữ pháp, Luyện thi khi không nạp dữ liệu tương ứng (ví dụ bản chỉ luyện từ)
  const navShown = (n) => ({ grammar: 'gm', exam: 'ex', pron: 'pr' }[n.id] ? !!C.topicBook({ grammar: 'gm', exam: 'ex', pron: 'pr' }[n.id]) : true);
  function navItem(n) {
    const p = st().profile;
    const ico = n.id === 'profile' ? `<span class="nav-avatar" style="background:${p.color}">${p.avatar}</span>` : n.icon;
    return `<a class="nav-item" href="#/${n.id}" data-route="${n.id}"><span class="nav-ico">${ico}</span><span class="nav-label">${n.label}</span></a>`;
  }
  function shellHTML() {
    return `
      <aside class="side-nav">
        <a class="logo" href="#/learn" aria-label="EngVui – trang chủ">${Art.logo()}</a>
        <nav class="nav-list" id="nav-list"></nav>
      </aside>
      <div class="page">
        <header class="topbar" id="topbar"></header>
        <div class="page-inner">
          <main class="main" id="main"></main>
          <aside class="side-right" id="side-right"></aside>
        </div>
      </div>
      <nav class="bottom-nav" id="bottom-nav"></nav>`;
  }

  function statsBar() {
    const s = st();
    S().refreshHearts();
    const g = s.profile.grade;
    const lv = C.level(C.levelOf(g));
    const todayDone = s.streak.last === U.dayKey();
    const dark = document.documentElement.dataset.theme === 'dark';
    return `<div class="stats-bar">
      <button class="stat stat-course" data-act="course" title="Đổi lớp học">
        <span class="grade-chip" style="--c:${lv.color};--d:${lv.dark}">${g}</span><span class="stat-course-label">Lớp ${g}</span>
      </button>
      <button class="stat stat-streak ${todayDone ? 'on' : ''}" data-act="pop-streak" title="Chuỗi ngày học (streak)"><span class="flame">🔥</span><b>${s.streak.count}</b></button>
      ${EV.config.economy ? `<button class="stat stat-gems" data-act="pop-gems" title="Đá quý"><span>💎</span><b>${U.fmtNum(s.gems)}</b></button>
      <button class="stat stat-hearts" data-act="pop-hearts" title="Tim"><span>❤️</span><b>${S().heartsUnlimited() ? '∞' : s.hearts}</b></button>` : ''}
      <button class="stat stat-donate" data-act="donate" title="Ủng hộ EngVui"><span>☕</span><b>Ủng hộ</b></button>
      <button class="stat stat-theme" data-act="toggle-theme" title="${dark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}" aria-label="Đổi chế độ sáng/tối"><span>${dark ? '☀️' : '🌙'}</span></button>
    </div>`;
  }

  function goalBlock() {
    const s = st();
    const goal = s.settings.dailyGoal;
    const xp = s.daily.xp;
    const pct = Math.min(1, xp / goal);
    const r = 34;
    const c = 2 * Math.PI * r;
    return `<div class="goal">
      <svg class="goal-ring" viewBox="0 0 84 84" aria-hidden="true">
        <circle cx="42" cy="42" r="${r}" class="ring-bg"/>
        <circle cx="42" cy="42" r="${r}" class="ring-fg" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - pct)}"/>
      </svg>
      <div class="goal-ico">${pct >= 1 ? '🏅' : '⚡'}</div>
      <div class="goal-text">
        <div class="goal-num"><b>${Math.min(xp, 9999)}</b> / ${goal} KN</div>
        <div class="muted small">${pct >= 1 ? 'Đã đạt mục tiêu hôm nay!' : `Còn ${goal - xp} KN để đạt mục tiêu hôm nay`}</div>
      </div>
    </div>`;
  }
  function questRow(q, compact) {
    const pct = Math.round((100 * q.value) / q.target);
    let right;
    if (q.claimed) right = '<span class="quest-claimed">✓ Đã nhận</span>';
    else if (q.done && !EV.config.economy) right = '<span class="quest-claimed">✓ Hoàn thành</span>';
    else if (q.done) right = `<button class="btn btn-gold btn-sm" data-act="claim" data-q="${q.id}">Nhận 💎${q.reward}</button>`;
    else right = compact || !EV.config.economy ? '' : `<span class="quest-reward">💎 ${q.reward}</span>`;
    return `<div class="quest ${q.done ? 'done' : ''}">
      <div class="quest-ico">${q.icon}</div>
      <div class="quest-main">
        <div class="quest-title">${q.title}</div>
        <div class="bar ${q.done ? 'full' : ''}"><i style="width:${pct}%"></i><span>${q.value} / ${q.target}</span></div>
      </div>${right}</div>`;
  }

  function sideCards(route) {
    const s = st();
    const out = [statsBar()];
    if (route !== 'quests') {
      out.push(`<div class="card"><div class="card-head"><h3>Mục tiêu hằng ngày</h3><a href="#/settings" class="link">Sửa</a></div>${goalBlock()}</div>`);
      if (EV.config.quests) out.push(`<div class="card"><div class="card-head"><h3>Nhiệm vụ hằng ngày</h3><a href="#/quests" class="link">Xem tất cả</a></div>
        ${S().quests().map((q) => questRow(q, true)).join('')}</div>`);
    }
    if (route !== 'leaderboard' && EV.config.league) {
      const T = EV.league.TIERS[s.league.tier];
      const rows = EV.league.standings(s.league.week, s.league.tier, s.league.xp, s.profile.name, s.profile.avatar);
      const rank = rows.findIndex((r) => r.me) + 1;
      out.push(`<div class="card league-card"><div class="card-head"><h3>Giải ${T.name}</h3><a href="#/leaderboard" class="link">Xem giải đấu</a></div>
        <div class="league-mini">${Art.shield(T.color, T.dark, false, T.name)}
        <div>${s.league.xp > 0 ? `Bạn đang xếp hạng <b>#${rank}</b> với <b>${U.fmtNum(s.league.xp)} KN</b> tuần này.` : 'Hoàn thành một bài học để tham gia bảng xếp hạng tuần này!'}</div></div></div>`);
    }
    if (s.mistakes.length && route !== 'practice') {
      out.push(`<div class="card"><div class="card-head"><h3>Ôn lỗi sai</h3></div>
        <p class="muted small">Bạn có ${s.mistakes.length} câu từng làm sai. Ôn lại để nhớ lâu hơn!</p>
        <button class="btn btn-outline btn-block btn-sm" data-act="practice" data-mode="mistakes">Luyện ngay</button></div>`);
    }
    out.push(`<div class="side-foot">EngVui · ${esc(EV.config.mission)}.<br>Tiến độ lưu trên trình duyệt này.
      <div class="foot-links"><button class="link-btn" data-act="about">Bản quyền</button> · <button class="link-btn" data-act="donate">☕ Ủng hộ</button></div></div>`);
    return out.join('');
  }

  /* =========================================================
     HỌC – lộ trình bài học
     ========================================================= */
  function prereqDone(G, node) {
    for (const n of G.nodes) {
      if (n === node) return true;
      if (n.kind !== 'chest' && n.kind !== 'review' && !n.adv && !S().isDone(n.id)) return false;
    }
    return true;
  }
  // Bài Review chưa làm mà phía sau đã có bài xong (tiến độ từ trước khi có Review) thì không chặn nữa.
  const reviewSkipped = (G, i) => G.nodes[i].kind === 'review'
    && G.nodes.slice(i + 1).some((y) => y.kind !== 'chest' && S().isDone(y.id));
  function currentNodeId(G) {
    const i = G.nodes.findIndex((x, k) => x.kind !== 'chest' && !x.adv && !S().isDone(x.id) && !reviewSkipped(G, k));
    return i >= 0 ? G.nodes[i].id : null;
  }
  function nodeState(G, node, cur) {
    const unlockAll = st().settings.unlockAll;
    if (node.kind === 'chest') {
      if (S().isDone(node.id)) return 'opened';
      return unlockAll || prereqDone(G, node) ? 'ready' : 'locked';
    }
    if (S().isDone(node.id)) return 'done';
    if (node.adv) return unlockAll || prereqDone(G, node) ? 'open' : 'locked';   // bài tùy chọn: mở khi đã tới cuối Unit
    if (node.id === cur) return 'current';
    if (node.kind === 'review' && prereqDone(G, node)) return 'open';
    return unlockAll ? 'open' : 'locked';
  }
  function gradeProgress(g) {
    const G = C.getGrade(g);
    if (!G) return 0;
    const lessons = G.nodes.filter((n) => n.kind !== 'chest' && !n.adv);
    return lessons.length ? lessons.filter((n) => S().isDone(n.id)).length / lessons.length : 0;
  }

  const POSES = ['wave', 'happy', 'think', 'cheer'];
  function unitHTML(G, u, i, cur) {
    const dir = i % 2 === 0 ? 1 : -1;
    const n = u.nodes.length;
    const firstLesson = u.nodes.find((x) => x.kind !== 'chest');
    const locked = firstLesson && nodeState(G, firstLesson, cur) === 'locked';
    const nodes = u.nodes.map((node, j) => {
      const x = Math.round(Math.sin((Math.PI * j) / Math.max(1, n - 1)) * 78 * dir);
      return nodeHTML(node, nodeState(G, node, cur), x);
    }).join('');
    const done = u.nodes.filter((x) => x.kind !== 'chest' && !x.adv && S().isDone(x.id)).length;
    return `<section class="unit ${locked ? 'is-locked' : ''}" id="${u.id}" style="--uc:${u.color};--ud:${u.dark}">
      <div class="unit-head">
        <div class="unit-head-main">
          <div class="unit-kicker">Lớp ${G.grade} · Unit ${u.n} · ${done}/${u.lessonCount} bài</div>
          <h2 class="unit-title">${esc(u.title)}</h2>
          <div class="unit-vi">${u.icon} ${esc(u.vi)}</div>
        </div>
        <button class="unit-guide-btn" data-act="guide" data-unit="${u.id}" title="Sổ tay: từ vựng, mẫu câu, ngữ pháp">${Art.icon('guide')}<span>Sổ tay</span></button>
      </div>
      ${locked ? `<div class="jump-row"><button class="jump-btn" data-act="jump" data-unit="${u.id}">⏩ Nhảy tới Unit ${u.n}</button></div>` : ''}
      <div class="path">
        ${nodes}
        <div class="path-deco ${dir > 0 ? 'left' : 'right'}">${Art.mascot(POSES[i % POSES.length])}</div>
      </div>
    </section>`;
  }
  const unitRange = (units) => (units.length > 1 ? `Unit ${units[0].n}–${units[units.length - 1].n}` : `Unit ${units[0].n}`);
  function reviewHTML(G, node, cur) {
    const state = nodeState(G, node, cur);
    return `<section class="review-sec ${state === 'locked' ? 'is-locked' : ''}" id="${node.unitId}-rv" style="--uc:#FF9600;--ud:#D97F00">
      <div class="review-divider"><span>${esc(node.title)} · Ôn tập ${unitRange(node.units)}</span></div>
      <div class="path review-path">${nodeHTML(node, state, 0)}</div>
    </section>`;
  }
  function nodeHTML(node, state, x) {
    let inner;
    if (node.kind === 'chest') inner = Art.chest(state === 'opened');
    else if (state === 'done') inner = Art.icon(node.kind === 'test' || node.kind === 'review' ? 'trophy' : 'check');
    else inner = Art.icon(node.icon);
    return `<div class="node-row" style="--x:${x}px">
      <div class="node-wrap ${state === 'current' ? 'current' : ''}">
        ${state === 'current' ? '<div class="start-tag">Bắt đầu</div>' : ''}
        <button class="node k-${node.kind}${node.adv ? ' adv' : ''} s-${state}" data-act="node" data-node="${node.id}" aria-label="${esc(node.title)}">${inner}</button>
      </div>
    </div>`;
  }

  let scrollToCurrent = true;
  function renderLearn(main) {
    const g = st().profile.grade;
    const G = C.getGrade(g);
    if (!G) {
      main.innerHTML = `<div class="empty">
        <div class="big-mascot">${Art.mascot('think')}</div>
        <h2>Nội dung Lớp ${g} đang được cập nhật</h2>
        <p class="muted">Không tìm thấy dữ liệu cho lớp này (js/data/grade${g}.js). Bạn hãy chọn lớp khác nhé.</p>
        <button class="btn btn-primary" data-act="course">Chọn lớp khác</button></div>`;
      return;
    }
    const cur = currentNodeId(G);
    const lv = C.level(G.level);
    const pct = Math.round(gradeProgress(g) * 100);
    main.innerHTML = `<div class="learn">
      <div class="course-banner" style="--c:${lv.color};--d:${lv.dark}">
        <div><div class="cb-kicker">${lv.emoji} ${lv.name} · ${lv.full}</div><div class="cb-title">${esc(G.book)}</div></div>
        <div class="cb-progress"><div class="bar"><i style="width:${pct}%"></i></div><span>${pct}%</span></div>
      </div>
      ${G.units.map((u, i) => unitHTML(G, u, i, cur) + (u.review ? reviewHTML(G, u.review, cur) : '')).join('')}
      ${gradeEndHTML(G, cur)}
    </div>`;
    if (scrollToCurrent) {
      scrollToCurrent = false;
      const el = main.querySelector('.node-wrap.current') || main.querySelector('.s-ready');
      if (el) setTimeout(() => el.scrollIntoView({ block: 'center', behavior: 'smooth' }), 80);
    }
  }
  function gradeEndHTML(G, cur) {
    const nextG = C.availableGrades().find((x) => x > G.grade);
    if (cur) return '<div class="path-end"></div>';
    return `<div class="grade-end card">
      <div class="big-mascot">${Art.mascot('cheer')}</div>
      <h2>Chúc mừng! Bạn đã hoàn thành ${esc(G.book)}!</h2>
      ${nextG ? `<button class="btn btn-primary" data-act="set-grade" data-grade="${nextG}">Học tiếp Lớp ${nextG}</button>` : '<p class="muted">Bạn đã học hết chương trình. Hãy ôn tập để nhớ lâu nhé!</p>'}
    </div>`;
  }

  function closeNodePops() {
    U.$$('.node-pop').forEach((p) => p.remove());
    U.$$('.node-row.has-pop').forEach((r) => r.classList.remove('has-pop'));
  }
  function openNodePop(btn, nodeId) {
    const had = btn.parentElement.querySelector('.node-pop');
    closeNodePops();
    if (had) return;
    const node = C.getNode(nodeId);
    if (!node) return;
    const G = C.getGrade(node.grade);
    const unit = C.getUnit(node.unitId);
    const state = nodeState(G, node, currentNodeId(G));
    if (node.kind === 'chest') { openChest(btn, node, state); return; }
    const lessons = unit.nodes.filter((n) => n.kind !== 'chest' && !n.adv);
    const idx = lessons.indexOf(node) + 1;
    let desc = `Bài ${idx}/${lessons.length}`;
    if (node.adv) desc = `Tùy chọn · ${node.words.length} từ khó hơn: ${node.words.slice(0, 4).map((w) => esc(w.en)).join(', ')}…`;
    else if (node.kind === 'review') desc = `Ôn tập ${unitRange(node.units)}: từ vựng, mẫu câu và ngữ pháp`;
    else if (node.kind === 'vocab') desc += ` · ${node.words.length} từ: ${node.words.slice(0, 4).map((w) => esc(w.en)).join(', ')}${node.words.length > 4 ? '…' : ''}`;
    else if (node.kind === 'phrases') desc += ' · Hiểu và sắp xếp các mẫu câu của bài';
    else if (node.kind === 'grammar') desc += ` · ${esc(unit.grammar[0] ? unit.grammar[0].title : 'Ngữ pháp trọng tâm')}`;
    else if (node.kind === 'listening') desc += ' · Nghe từ, nghe câu và viết chính tả';
    else if (node.kind === 'test') desc += ` · Kiểm tra toàn bộ Unit ${unit.n}`;
    const prog = st().progress[node.id];
    let html;
    if (state === 'locked') {
      html = `<div class="node-pop locked"><h3>${esc(node.title)}</h3><p>Hoàn thành các bài phía trước để mở khóa bài này!</p>
        <button class="btn btn-block" disabled>🔒 Đã khóa</button></div>`;
    } else {
      html = `<div class="node-pop"><h3>${esc(node.title)}</h3><p>${desc}</p>
        ${prog && !prog.jumped ? `<p class="pop-best">Điểm cao nhất: ${prog.best}% · đã học ${prog.n} lần</p>` : ''}
        <button class="btn btn-white btn-block" data-act="start" data-node="${node.id}">${state === 'done' ? 'Luyện lại' : 'Bắt đầu'} +${node.xp} KN</button></div>`;
    }
    const wrap = btn.parentElement;
    wrap.insertAdjacentHTML('beforeend', html);
    wrap.parentElement.classList.add('has-pop');
    const pop = wrap.querySelector('.node-pop');
    const r = pop.getBoundingClientRect();
    let shift = 0;
    if (r.left < 12) shift = 12 - r.left;
    if (r.right > window.innerWidth - 12) shift = window.innerWidth - 12 - r.right;
    if (shift) {
      pop.style.marginLeft = shift + 'px';
      pop.style.setProperty('--arrow-shift', -shift + 'px');
    }
    const pr = pop.getBoundingClientRect();
    if (pr.bottom > window.innerHeight - 90) window.scrollBy({ top: pr.bottom - window.innerHeight + 110, behavior: 'smooth' });
  }

  function openChest(btn, node, state) {
    if (state === 'opened') { UI.toast('🎁 Bạn đã mở rương này rồi.'); return; }
    if (state === 'locked') {
      btn.parentElement.insertAdjacentHTML('beforeend', `<div class="node-pop locked"><h3>Rương báu</h3><p>Hoàn thành các bài phía trước để mở rương nhé!</p></div>`);
      btn.parentElement.parentElement.classList.add('has-pop');
      return;
    }
    const gems = S().openChest(node.id);
    A.sfx('chest');
    UI.confetti(90);
    UI.modal({
      html: `<div class="reward">
        <div class="reward-chest">${Art.chest(true)}</div>
        <h2>Mở rương thành công!</h2>
        <div class="reward-gems">💎 +${gems}</div>
        <p class="muted">Dùng đá quý để hồi tim, mua băng giữ streak trong Cửa hàng.</p>
        <button class="btn btn-primary btn-block" data-close>Tuyệt vời!</button></div>`,
    });
    EV.app.render();
  }

  function startNode(nodeId) {
    const node = C.getNode(nodeId);
    if (!node) return;
    const unit = C.getUnit(node.unitId);
    closeNodePops();
    let wordKeys = [];
    if (node.kind === 'vocab') wordKeys = node.words.map((w) => w.key);
    else if (node.kind === 'test') wordKeys = unit.words.map((w) => w.key);
    EV.lesson.start({
      exercises: EV.ex.forNode(node),
      mode: node.kind === 'test' ? 'test' : 'lesson',
      node, kind: node.kind, xp: node.xp, wordKeys,
      onClose: (finished) => { if (finished) scrollToCurrent = true; },
    });
  }

  async function jump(unitId) {
    const unit = C.getUnit(unitId);
    const G = C.getGrade(unit.grade);
    const idx = G.units.indexOf(unit);
    const ok = await UI.confirm({
      mascot: 'think',
      title: `Nhảy tới Unit ${unit.n}?`,
      text: `Vượt qua bài kiểm tra ngắn về ${idx >= 2 ? '2 Unit' : 'Unit'} liền trước để mở khóa Unit ${unit.n}. Các bài trước đó sẽ được tính là hoàn thành.`,
      ok: 'Làm bài kiểm tra',
      cancel: 'Để sau',
    });
    if (!ok) return;
    EV.lesson.start({
      exercises: EV.ex.jumpLesson(unit.grade, idx),
      mode: 'jump', kind: 'jump', xp: 15,
      onPass: () => S().jumpTo(unit.grade, idx),
      onClose: (finished) => { if (finished) scrollToCurrent = true; },
    });
  }

  function openGuide(unitId) {
    const u = C.getUnit(unitId);
    if (!u) return;
    UI.modal({
      full: true,
      className: 'guide-modal',
      html: `<div class="guide" style="--uc:${u.color};--ud:${u.dark}">
        <div class="guide-head">
          <div class="unit-kicker">Sổ tay · Lớp ${u.grade} · Unit ${u.n}</div>
          <h2>${esc(u.title)}</h2><div class="guide-vi">${u.icon} ${esc(u.vi)}</div>
        </div>
        <section><h3>Từ vựng <span class="count">${u.words.length}</span></h3>
          <div class="gwords">${u.words.map((w) => `<button class="gword" data-say-text="${esc(w.en)}">
            <span class="gw-emoji">${Art.emoji(w.emoji) || '🔤'}</span><span class="gw-txt"><b>${esc(w.en)}</b><i>${esc(w.vi)}</i></span>${Art.icon('speaker', 'gw-spk')}</button>`).join('')}</div>
        </section>
        ${u.advWords && u.advWords.length ? `<section><h3>Từ vựng nâng cao <span class="count">${u.advWords.length}</span></h3>
          <div class="gwords">${u.advWords.map((w) => `<button class="gword" data-say-text="${esc(w.en)}">
            <span class="gw-emoji">${Art.emoji(w.emoji) || '🔤'}</span><span class="gw-txt"><b>${esc(w.en)}</b><i>${esc(w.vi)}</i></span>${Art.icon('speaker', 'gw-spk')}</button>`).join('')}</div>
          ${u.advSentences.length ? `<div class="gsents">${u.advSentences.map((s) => `<button class="gsent" data-say-text="${esc(s.en)}">
            ${Art.icon('speaker')}<span><b>${esc(s.en)}</b><i>${esc(s.vi)}</i></span></button>`).join('')}</div>` : ''}
        </section>` : ''}
        ${u.sentences.length && !C.VOCAB_ONLY ? `<section><h3>Mẫu câu</h3><div class="gsents">${u.sentences.map((s) => `<button class="gsent" data-say-text="${esc(s.en)}">
          ${Art.icon('speaker')}<span><b>${esc(s.en)}</b><i>${esc(s.vi)}</i></span></button>`).join('')}</div></section>` : ''}
        ${u.grammar.length && !C.VOCAB_ONLY ? `<section><h3>Ngữ pháp</h3>${u.grammar.map((g) => `<div class="gcard"><h4>${esc(g.title)}</h4><p>${esc(g.text)}</p>
          ${g.examples.map((e) => `<button class="gex" data-say-text="${esc(e)}">${Art.icon('speaker')}<span>${esc(e)}</span></button>`).join('')}</div>`).join('')}</section>` : ''}
        <div class="guide-actions"><button class="btn btn-primary btn-block" data-act="practice" data-mode="unit" data-unit="${u.id}">Ôn tập nhanh Unit ${u.n}</button></div>
      </div>`,
    });
  }

  function openCoursePicker() {
    const cur = st().profile.grade;
    const avail = new Set(C.availableGrades());
    UI.modal({
      wide: true,
      className: 'course-modal',
      html: `<h2 class="modal-title">Chọn lớp học</h2>
        <p class="muted center">Nội dung tự soạn, tham khảo chương trình tiếng Anh phổ thông.</p>
        ${C.LEVELS.map((lv) => `<div class="level-group">
          <div class="level-head" style="--c:${lv.color}">${lv.emoji} ${lv.name} <span>· ${lv.full}</span></div>
          <div class="grade-grid">${lv.grades.map((g) => {
            const G = C.getGrade(g);
            const pct = Math.round(gradeProgress(g) * 100);
            return `<button class="grade-card ${g === cur ? 'cur' : ''}" data-act="set-grade" data-grade="${g}" ${avail.has(g) ? '' : 'disabled'} style="--c:${lv.color};--d:${lv.dark}">
              <span class="grade-num">${g}</span><span class="grade-name">Lớp ${g}</span>
              <span class="grade-meta">${G ? `${G.units.length} Unit · ${pct}%` : 'Đang cập nhật'}</span>
              <span class="bar"><i style="width:${pct}%"></i></span></button>`;
          }).join('')}</div></div>`).join('')}`,
    });
  }

  /* =========================================================
     NGỮ PHÁP và LUYỆN THI – các trang chủ đề (dùng chung một khung)
     ========================================================= */
  const BOOK_PAGES = {
    gm: {
      title: 'Ngữ pháp', empty: 'Không tìm thấy js/data/grammar.js.',
      sub: 'Các thì và cấu trúc câu từ cơ bản đến nâng cao, thêm 99 bài ngữ pháp theo trình độ CEFR A1–C2 có bài điền từ. Mỗi chủ đề có phần lý thuyết và một bài luyện <b>+10 KN</b>.',
    },
    pr: {
      title: 'Phát âm và shadowing', empty: 'Không tìm thấy js/data/pron.js.',
      sub: 'Nghe phân biệt các âm dễ nhầm, đọc đuôi -s và -ed, đặt trọng âm, rồi nghe câu mẫu và nói theo. '
        + 'Bài nói theo không trừ tim; nếu trình duyệt không nhận được giọng nói, bạn tự đánh giá. Mỗi bài <b>+10 KN</b>.',
    },
    ex: {
      title: 'Luyện thi TOEIC & IELTS', empty: 'Không tìm thấy js/data/exam.js.',
      sub: 'Từ vựng theo chủ đề và dạng câu hay gặp trong đề thi. Mỗi chủ đề có 2 bài từ vựng và 1 bài luyện đề <b>+15 KN</b>; '
        + 'nhiều chủ đề có thêm bài đọc hiểu và bài nghe hiểu (nhiều người nói, nghe lại và nghe chậm được). '
        + 'Có thêm nhóm Hàng không & tiếp viên, Nghe TOEIC, Nghe IELTS, Đọc IELTS và đề TOEIC Part 5–7. '
        + 'Nội dung tự soạn để luyện kỹ năng, không phải đề thi chính thức.',
    },
  };
  function topicCard(t) {
    const P = st().progress;
    if (t.nodes.length === 1) {
      // Ngữ pháp, Phát âm: một bài luyện
      const p = P[t.node.id];
      const btnText = t.kind === 'shadow' ? (p ? 'Nói theo lại' : 'Luyện nói theo')
        : t.node.kind === 'listenc' ? (p ? 'Nghe lại' : 'Nghe và trả lời')
          : t.node.kind === 'reading' ? (p ? 'Đọc lại' : 'Đọc và trả lời')
            : t.node.kind === 'exam' && t.mock ? (p ? 'Làm lại đề' : 'Làm đề') : (p ? 'Luyện lại' : 'Luyện tập');
      return `<div class="gm-card ${p ? 'done' : ''}">
        <div class="gm-top"><span class="gm-ico">${t.icon}</span>
          <div class="gm-info"><b>${esc(t.title)}</b><span>${esc(t.en)} · ${t.book === 'gm' ? `từ lớp ${t.grade}` : esc(t.tag)}</span></div>
          ${p ? `<span class="gm-badge" title="Điểm cao nhất">✓ ${p.best}%</span>` : ''}</div>
        <p class="gm-desc">${esc(t.desc)}</p>
        <div class="gm-actions">
          <button class="btn btn-outline btn-sm" data-act="gm-theory" data-topic="${t.id}">${t.book === 'ex' ? 'Sổ tay' : 'Lý thuyết'}</button>
          <button class="btn btn-primary btn-sm" data-act="gm-start" data-topic="${t.id}">${btnText}</button>
        </div></div>`;
    }
    // Luyện thi: một nút cho mỗi bài; bài tiếp theo chưa học được tô nổi
    const done = t.nodes.filter((n) => P[n.id]).length;
    const next = t.nodes.find((n) => !P[n.id]);
    const btn = (n) => `<button class="btn ${n === next ? 'btn-primary' : 'btn-outline'} btn-sm" data-act="gm-start" data-topic="${t.id}" data-key="${n.key}"
      title="${P[n.id] ? `Điểm cao nhất ${P[n.id].best}%` : ''}">${P[n.id] ? '✓ ' : ''}${esc(n.title)}</button>`;
    return `<div class="gm-card ${done === t.nodes.length ? 'done' : ''}">
      <div class="gm-top"><span class="gm-ico">${t.icon}</span>
        <div class="gm-info"><b>${esc(t.title)}</b><span>${esc(t.en)} · ${esc(t.tag)}</span></div>
        ${done ? `<span class="gm-badge" title="Số bài đã học">${done}/${t.nodes.length}</span>` : ''}</div>
      <p class="gm-desc">${esc(t.desc)}</p>
      <div class="gm-actions wrap">
        <button class="btn btn-ghost btn-sm" data-act="gm-theory" data-topic="${t.id}">📖 Sổ tay</button>
        ${t.nodes.map(btn).join('')}
      </div></div>`;
  }
  function renderBook(main, book) {
    const cfg = BOOK_PAGES[book];
    const B = C.topicBook(book);
    if (!B) {
      main.innerHTML = `<div class="empty"><h2>Chưa có nội dung</h2><p class="muted">${cfg.empty}</p></div>`;
      return;
    }
    const done = B.topics.filter((t) => t.nodes.every((n) => S().isDone(n.id))).length;
    main.innerHTML = `
      <h1 class="page-title">${cfg.title}</h1>
      <p class="page-sub">${cfg.sub} Đã học xong <b>${done}/${B.topics.length}</b> chủ đề.</p>
      <div class="gm-chips">${B.groups.map((g) => `<button class="gm-chip" style="--uc:${g.color}" data-act="gm-jump" data-g="${g.id}">${esc(g.title)}</button>`).join('')}</div>
      ${B.groups.map((g) => `<section class="gm-group" id="gm-g${g.id}" style="--uc:${g.color};--ud:${g.dark}">
        <div class="section-head"><h2>${esc(g.title)}</h2><span class="muted">${esc(g.desc)}</span></div>
        ${book === 'ex' && groupWords(B, g.id).length ? wordTools(B, g) : ''}
        <div class="gm-grid">${B.topics.filter((t) => t.group === g.id).map(topicCard).join('')}</div>
      </section>`).join('')}`;
  }
  const groupWords = (B, gid) => B.topics.filter((t) => t.group === gid).flatMap((t) => t.words);
  // Thanh "Luyện từ" của một nhóm Luyện thi (TOEIC hoặc IELTS)
  function wordTools(B, g) {
    const all = groupWords(B, g.id);
    const n = all.filter((w) => st().learned[w.key]).length;
    return `<div class="gm-tools">
      <span class="muted small">Đã học <b>${n}/${all.length}</b> từ ${esc(g.title)}</span>
      <button class="btn btn-outline btn-sm" data-act="ex-wordlist" data-g="${g.id}">📚 Danh sách từ</button>
      <button class="btn btn-primary btn-sm" data-act="ex-words" data-g="${g.id}">🔁 Luyện từ ${esc(g.title)}</button>
    </div>`;
  }
  function startGroupWords(gid) {
    const B = C.examBook();
    const g = B && B.groups.find((x) => x.id === gid);
    if (!g) return;
    const r = EV.ex.groupWordsLesson('ex', gid);
    if (!r.exercises.length) { UI.toast('Chưa có từ để luyện.', 'warn'); return; }
    UI.closeTopModal();
    EV.lesson.start({ exercises: r.exercises, mode: 'practice', kind: 'practice', practiceMode: 'words', xp: 10, wordKeys: r.wordKeys, title: `Luyện từ ${g.title}` });
  }
  // Danh sách mọi từ của một nhóm, chia theo chủ đề, có ô tìm kiếm và mức độ ghi nhớ
  function openWordList(gid) {
    const B = C.examBook();
    const g = B && B.groups.find((x) => x.id === gid);
    if (!g) return;
    const L = st().learned;
    const all = groupWords(B, gid);
    const row = (w) => {
      const lv = L[w.key] ? L[w.key].s || 0 : -1;
      return `<div class="wrow" data-q="${esc((w.en + ' ' + w.vi).toLowerCase())}">
        <span class="w-emoji">${Art.emoji(w.emoji) || '🔤'}</span>
        <button class="w-en" data-say-text="${esc(w.en)}">${esc(w.en)} ${Art.icon('speaker', 'w-spk')}</button>
        <span class="w-vi">${esc(w.vi)}</span>
        <span class="w-str" title="${lv < 0 ? 'Chưa học' : `Mức độ ghi nhớ ${lv}/5`}">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= lv ? 'on' : ''}"></i>`).join('')}</span>
      </div>`;
    };
    UI.modal({
      full: true,
      className: 'guide-modal',
      html: `<div class="guide" style="--uc:${g.color};--ud:${g.dark}">
        <div class="guide-head">
          <div class="unit-kicker">Luyện thi · ${esc(g.title)}</div>
          <h2>📚 Từ vựng ${esc(g.title)}</h2>
          <div class="guide-vi">${all.length} từ · đã học ${all.filter((w) => L[w.key]).length}</div>
        </div>
        <section>
          <div class="search-box">${Art.icon('search')}<input class="wl-search" type="search" placeholder="Tìm từ tiếng Anh hoặc nghĩa tiếng Việt…" autocomplete="off"></div>
          ${B.topics.filter((t) => t.group === gid).map((t) => `<div class="wl-topic"><h3>${t.icon} ${esc(t.title)}</h3>
            <div class="word-list">${t.words.map(row).join('')}</div></div>`).join('')}
          <p class="muted center wl-empty" hidden>Không tìm thấy từ phù hợp.</p>
        </section>
        <div class="guide-actions"><button class="btn btn-primary btn-block" data-act="ex-words" data-g="${gid}">🔁 Luyện từ ${esc(g.title)}</button></div>
      </div>`,
      onMount(body) {
        const inp = body.querySelector('.wl-search');
        inp.addEventListener('input', U.debounce(() => {
          const q = inp.value.trim().toLowerCase();
          let any = false;
          body.querySelectorAll('.wl-topic').forEach((sec) => {
            let has = false;
            sec.querySelectorAll('.wrow').forEach((r) => { const ok = !q || r.dataset.q.includes(q); r.hidden = !ok; has = has || ok; });
            sec.hidden = !has;
            any = any || has;
          });
          body.querySelector('.wl-empty').hidden = any;
        }, 100));
      },
    });
  }
  const renderGrammar = (main) => renderBook(main, 'gm');
  const renderExam = (main) => renderBook(main, 'ex');
  const renderPron = (main) => renderBook(main, 'pr');

  // Hộp Lý thuyết (Ngữ pháp) / Sổ tay (Luyện thi)
  function openTheory(topicId) {
    const t = C.getTopic(topicId);
    if (!t) return;
    const isGm = t.book === 'gm';
    const isPr = t.book === 'pr';
    const sayW = (w) => `<button class="gex" data-say-text="${esc(w.en)}">${Art.icon('speaker')}<span><b>${esc(w.en)}</b> ${esc(w.ipa)} <i>${esc(w.vi)}</i></span></button>`;
    const stressHTML = (s) => s.syl.map((x, i) => (i === s.idx ? `<u>${esc(x.toUpperCase())}</u>` : esc(x.toLowerCase()))).join('·');
    const plainW = (w) => String(w).replace(/[\[\]]/g, '');
    const prHTML = !isPr ? '' : [
      t.pairs.length ? `<section><h3>Cặp từ dễ nhầm</h3>${t.pairs.map((p) => `<div class="mp-row">${sayW(p.a)}${sayW(p.b)}</div>`).join('')}</section>` : '',
      t.classify.length ? `<section><h3>Ví dụ theo nhóm</h3>${t.classes.map((k) => `<div class="gcard"><h4>${esc(k)}</h4>
        ${t.classify.filter((c) => c.cls === k).map((c) => `<button class="gex" data-say-text="${esc(plainW(c.mark))}">${Art.icon('speaker')}<span>${esc(plainW(c.mark))}</span></button>`).join('')}</div>`).join('')}</section>` : '',
      t.stress.length ? `<section><h3>Trọng âm</h3><div class="gsents">${t.stress.map((s) => `<button class="gsent" data-say-text="${esc(s.en)}">
        ${Art.icon('speaker')}<span><b class="st-word">${stressHTML(s)}</b><i>${esc(s.ipa)} · ${esc(s.vi)}</i></span></button>`).join('')}</div></section>` : '',
    ].join('');
    const B = C.topicBook(t.book);
    const group = B.groups.find((g) => g.id === t.group);
    const say = (x) => `<button class="gex" data-say-text="${esc(x)}">${Art.icon('speaker')}<span>${esc(x)}</span></button>`;
    const next = t.nodes.find((n) => !S().isDone(n.id)) || t.node;
    UI.modal({
      full: true,
      className: 'guide-modal',
      html: `<div class="guide" style="--uc:${t.color};--ud:${t.dark}">
        <div class="guide-head">
          <div class="unit-kicker">${isGm ? `Ngữ pháp · từ lớp ${t.grade}` : `${isPr ? 'Phát âm · ' : ''}${esc(group ? group.title : '')} · ${esc(t.tag)}`}</div>
          <h2>${t.icon} ${esc(t.title)}</h2><div class="guide-vi">${esc(t.en)} · ${esc(t.desc)}</div>
        </div>
        ${t.words.length ? `<section><h3>Từ vựng <span class="count">${t.words.length}</span></h3>
          <div class="gwords">${t.words.map((w) => `<button class="gword" data-say-text="${esc(w.en)}">
            <span class="gw-emoji">${Art.emoji(w.emoji) || '🔤'}</span><span class="gw-txt"><b>${esc(w.en)}</b><i>${esc(w.vi)}</i></span>${Art.icon('speaker', 'gw-spk')}</button>`).join('')}</div></section>` : ''}
        ${t.words.some((w) => w.exp) ? `<section class="gexp-sec"><h3>Giải thích từ vựng <span class="count">${t.words.filter((w) => w.exp).length}</span></h3>
          <p class="muted small">Bấm vào từng từ để xem nó là gì, làm gì và có vai trò gì.</p>
          ${t.words.filter((w) => w.exp).map((w) => `<details class="gexp"><summary><b>${esc(w.en)}</b><i>${esc(w.vi)}</i></summary>
            <p>${esc(w.exp)}</p><button class="gexp-say" data-say-text="${esc(w.en)}">${Art.icon('speaker')}<span>Nghe từ</span></button></details>`).join('')}</section>` : ''}
        ${t.formula.length ? `<section><h3>${isGm ? 'Công thức' : 'Ghi nhớ'}</h3><div class="formula">${t.formula.map((f) => `<div class="f-row"><b>${esc(f.k)}</b><span>${esc(f.v)}</span></div>`).join('')}</div></section>` : ''}
        ${prHTML}
        ${t.grammar.length ? `<section><h3>${isGm ? 'Cách dùng' : isPr ? (t.kind === 'shadow' ? 'Cách luyện' : 'Cách phát âm') : 'Mẹo và cụm từ'}</h3>${t.grammar.map((g) => `<div class="gcard"><h4>${esc(g.title)}</h4><p>${esc(g.text)}</p>${g.examples.map(say).join('')}</div>`).join('')}</section>` : ''}
        ${t.sentences.length ? `<section><h3>${t.kind === 'shadow' ? 'Câu luyện nói theo' : isPr ? 'Câu luyện đọc' : 'Câu mẫu'}</h3><div class="gsents">${t.sentences.map((s) => `<button class="gsent" data-say-text="${esc(s.en)}">
          ${Art.icon('speaker')}<span><b>${esc(s.en)}</b><i>${esc(s.vi)}</i></span></button>`).join('')}</div></section>` : ''}
        ${t.reading ? `<section><h3>Bài đọc</h3><div class="rd-card in-guide">
          <div class="rd-head"><b class="rd-title">${esc(t.reading.title)}</b>
            ${t.reading.nospeak ? '' : `<button class="spk mini rd-spk" data-say-text="${esc(t.reading.text.join(' '))}" aria-label="Nghe cả bài">${Art.icon('speaker')}</button>`}</div>
          <div class="rd-text">${t.reading.text.map((x) => `<p>${esc(x)}</p>`).join('')}</div></div></section>` : ''}
        ${t.listening.length ? `<section><h3>Bài nghe <span class="count">${t.listening.length}</span></h3>${t.listening.map((L, i) => `<div class="lc-guide">
          <div class="lc-guide-top"><b>${esc(L.title)}</b><span class="muted small">${esc(L.exam)}</span>
            <button class="spk mini" data-say-clip="${i}" data-topic="${t.id}" aria-label="Nghe">${Art.icon('speaker')}</button>
            <button class="spk mini slow" data-say-clip="${i}" data-slow="1" data-topic="${t.id}" aria-label="Nghe chậm">${Art.icon('turtle')}</button></div>
          <details><summary>Xem lời thoại</summary>${L.lines.map((l) => `<p class="lc-line"><b>${esc((L.speakers[l.s] || {}).name || l.s)}:</b> ${esc(l.en)}${l.vi ? `<small>${esc(l.vi)}</small>` : ''}</p>`).join('')}</details>
        </div>`).join('')}</section>` : ''}
        <div class="guide-actions"><button class="btn btn-primary btn-block" data-act="gm-start" data-topic="${t.id}" data-key="${next.key}">
          ${t.nodes.length === 1 ? (t.kind === 'shadow' ? 'Bắt đầu nói theo' : 'Bắt đầu luyện tập') : `Học tiếp: ${esc(next.title)}`}</button></div>
      </div>`,
    });
  }
  function startTopic(topicId, key) {
    const t = C.getTopic(topicId);
    if (!t) return;
    const node = (key && t.nodes.find((n) => n.key === key)) || t.node;
    UI.closeTopModal();
    EV.lesson.start({
      exercises: EV.ex.forNode(node), mode: 'lesson', node, kind: node.kind, xp: node.xp,
      wordKeys: node.kind === 'vocab' ? node.words.map((w) => w.key) : [],
    });
  }

  /* =========================================================
     LUYỆN TẬP
     ========================================================= */
  function pcard(mode, icon, titleT, desc, disabled) {
    return `<button class="practice-card" data-act="practice" data-mode="${mode}" ${disabled ? 'disabled' : ''}>
      <span class="pc-ico">${icon}</span><span class="pc-body"><b>${titleT}</b><span>${desc}</span></span></button>`;
  }
  function renderPractice(main) {
    const s = st();
    const studied = EV.ex.studiedUnits();
    const learnedCount = Object.keys(s.learned).length;
    main.innerHTML = `
      <h1 class="page-title">Luyện tập</h1>
      <p class="page-sub">Ôn lại kiến thức đã học. Mỗi bài luyện tập được <b>+10 KN</b>${EV.config.economy ? ', hồi <b>1 ❤️</b> và không bị mất tim' : ''}.</p>
      ${studied.length ? '' : '<div class="notice">Hoàn thành bài học đầu tiên trên lộ trình để mở khóa phần luyện tập nhé!</div>'}
      <div class="practice-grid">
        ${pcard('review', '🔁', 'Ôn tập tổng hợp', 'Từ vựng còn yếu, mẫu câu và ngữ pháp', !studied.length)}
        ${pcard('mistakes', '🩹', `Ôn lỗi sai (${s.mistakes.length})`, 'Làm lại những câu bạn từng trả lời sai', !s.mistakes.length)}
        ${pcard('listen', '🎧', 'Luyện nghe', C.VOCAB_ONLY ? 'Nghe từ và chọn đúng từ, đúng nghĩa' : 'Nghe và chọn, nghe và sắp xếp câu', !studied.length)}
        ${A.canListen() && !C.VOCAB_ONLY ? pcard('speak', '🎤', 'Luyện nói', 'Đọc to câu tiếng Anh, máy chấm phát âm', !studied.length) : ''}
        <a class="practice-card" href="#/shadow"><span class="pc-ico">🎙️</span><span class="pc-body"><b>Shadowing</b><span>Nhại theo video như hát karaoke, máy chấm điểm</span></span></a>
      </div>
      <div class="section-head"><h2>Sổ từ vựng</h2><span class="muted">${learnedCount} từ đã học</span></div>
      ${learnedCount ? `<div class="search-box">${Art.icon('search')}<input id="word-search" type="search" placeholder="Tìm từ tiếng Anh hoặc nghĩa tiếng Việt…" autocomplete="off"></div>
        <div class="word-list" id="word-list"></div>`
        : '<div class="empty small"><p class="muted">Các từ bạn học trong bài “Từ vựng” sẽ xuất hiện ở đây, kèm phát âm và mức độ ghi nhớ.</p></div>'}`;
    if (!learnedCount) return;
    const all = Object.keys(s.learned).map((k) => C.resolveItem(k)).filter(Boolean);
    const list = main.querySelector('#word-list');
    const draw = (q) => {
      const nq = (q || '').trim().toLowerCase();
      const rows = all.filter((w) => !nq || w.en.toLowerCase().includes(nq) || w.vi.toLowerCase().includes(nq));
      list.innerHTML = rows.slice(0, 400).map((w) => {
        const lv = s.learned[w.key].s || 0;
        const unit = C.getUnit(w.unitId);
        return `<div class="wrow">
          <span class="w-emoji">${Art.emoji(w.emoji) || '🔤'}</span>
          <button class="w-en" data-say-text="${esc(w.en)}">${esc(w.en)} ${Art.icon('speaker', 'w-spk')}</button>
          <span class="w-vi">${esc(w.vi)}<small>${unit.isTopic ? esc(unit.title) : `Lớp ${unit.grade} · Unit ${unit.n}`}</small></span>
          <span class="w-str" title="Mức độ ghi nhớ ${lv}/5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= lv ? 'on' : ''}"></i>`).join('')}</span>
        </div>`;
      }).join('') || '<p class="muted center">Không tìm thấy từ phù hợp.</p>';
    };
    draw('');
    main.querySelector('#word-search').addEventListener('input', U.debounce((e) => draw(e.target.value), 120));
  }

  function startPractice(mode, unitId) {
    const ex = EV.ex.practiceLesson(mode, unitId);
    if (!ex.length) { UI.toast('Chưa có nội dung để luyện tập. Hãy học thêm vài bài nhé!', 'warn'); return; }
    UI.closeTopModal();
    const titles = { review: 'Ôn tập tổng hợp', mistakes: 'Ôn lỗi sai', listen: 'Luyện nghe', speak: 'Luyện nói', unit: 'Ôn tập Unit' };
    EV.lesson.start({ exercises: ex, mode: 'practice', kind: 'practice', practiceMode: mode, xp: 10, title: titles[mode] });
  }

  /* =========================================================
     XẾP HẠNG
     ========================================================= */
  const initials = (name) => {
    const parts = name.trim().split(/\s+/);
    return esc((parts[parts.length - 1] || '?').charAt(0).toUpperCase());
  };
  function renderLeaderboard(main) {
    if (!EV.config.league) { location.hash = '#/learn'; return; }   // bảng xếp hạng đang tạm ẩn
    const s = st();
    const L = EV.league;
    const tier = s.league.tier;
    const T = L.TIERS[tier];
    const rows = L.standings(s.league.week, tier, s.league.xp, s.profile.name || 'Bạn', s.profile.avatar);
    const list = rows.map((r, i) => {
      const rank = i + 1;
      let sep = '';
      if (rank === L.PROMOTE + 1 && tier < L.TIERS.length - 1) sep = '<li class="lb-zone up">▲ Khu vực thăng hạng ▲</li>';
      if (tier > 0 && rank === L.SIZE - L.DEMOTE + 1) sep += '<li class="lb-zone down">▼ Khu vực xuống hạng ▼</li>';
      const av = r.me
        ? `<span class="av" style="background:${s.profile.color}">${s.profile.avatar}</span>`
        : `<span class="av" style="background:${r.color}">${initials(r.name)}</span>`;
      const medal = rank <= 3 ? ['🥇', '🥈', '🥉'][rank - 1] : rank;
      return `${sep}<li class="lb-row ${r.me ? 'me' : ''} ${rank <= L.PROMOTE && tier < L.TIERS.length - 1 ? 'promo' : ''} ${tier > 0 && rank > L.SIZE - L.DEMOTE ? 'demo' : ''}">
        <span class="lb-rank">${medal}</span>${av}<span class="lb-name">${esc(r.name)}${r.me ? ' <em>(Bạn)</em>' : ''}</span><span class="lb-xp">${U.fmtNum(r.xp)} KN</span></li>`;
    }).join('');
    main.innerHTML = `
      <div class="league-head">
        <div class="tier-row">${L.TIERS.map((t, i) => `<div class="tier-badge ${i === tier ? 'cur' : ''}" title="Giải ${t.name}">${Art.shield(t.color, t.dark, i > tier, t.name)}</div>`).join('')}</div>
        <h1>Giải ${T.name}</h1>
        <p class="muted">Top ${L.PROMOTE} sẽ được thăng hạng${tier > 0 ? ` · ${L.DEMOTE} hạng cuối bị xuống hạng` : ''}</p>
        <p class="league-time">⏳ Còn ${U.fmtDuration(L.timeLeft())}</p>
      </div>
      ${s.league.xp === 0 ? '<div class="notice">Hoàn thành một bài học để ghi điểm trên bảng xếp hạng tuần này!</div>' : ''}
      <ol class="lb">${list}</ol>
      <p class="muted small center">Bảng xếp hạng mô phỏng các bạn học ảo để tạo động lực — KN của bạn là thật.</p>`;
    const me = main.querySelector('.lb-row.me');
    if (me && s.league.xp > 0) setTimeout(() => me.scrollIntoView({ block: 'center', behavior: 'smooth' }), 80);
  }

  /* =========================================================
     NHIỆM VỤ
     ========================================================= */
  function renderQuests(main) {
    if (!EV.config.quests) { location.hash = '#/learn'; return; }   // nhiệm vụ đang tạm ẩn
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    main.innerHTML = `
      <div class="quest-hero"><div class="qh-mascot">${Art.mascot('wave')}</div>
        <div><h1>Nhiệm vụ hằng ngày</h1><p>Hoàn thành nhiệm vụ để nhận đá quý! Làm mới sau ${U.fmtDuration(midnight - now)}.</p></div></div>
      <div class="card"><div class="card-head"><h3>Mục tiêu hằng ngày</h3><a href="#/settings" class="link">Đổi mục tiêu</a></div>${goalBlock()}</div>
      <div class="card"><div class="card-head"><h3>Nhiệm vụ hôm nay</h3></div>${S().quests().map((q) => questRow(q, false)).join('')}</div>`;
  }

  /* =========================================================
     CỬA HÀNG
     ========================================================= */
  function shopItem(id, icon, name, desc, cost, disabledLabel) {
    return `<div class="shop-item">
      <div class="si-ico">${icon}</div>
      <div class="si-body"><b>${name}</b><span>${desc}</span></div>
      ${disabledLabel ? `<button class="btn btn-outline btn-sm" disabled>${disabledLabel}</button>`
        : `<button class="btn btn-outline btn-sm si-buy" data-act="buy" data-item="${id}" ${st().gems < cost ? 'disabled' : ''}>💎 ${cost}</button>`}
    </div>`;
  }
  function renderShop(main) {
    if (!EV.config.economy) { location.hash = '#/learn'; return; }   // cửa hàng đang tạm ẩn
    const s = st();
    const K = S().CONST;
    S().refreshHearts();
    main.innerHTML = `
      <div class="shop-head"><h1 class="page-title">Cửa hàng</h1><div class="gem-balance">💎 ${U.fmtNum(s.gems)}</div></div>
      <h2 class="section-title">Tim</h2>
      ${shopItem('refill', '❤️', 'Hồi đầy tim', `Hồi đủ ${K.MAX_HEARTS} tim để học tiếp. Hiện có ${S().heartsUnlimited() ? '∞' : s.hearts}/${K.MAX_HEARTS}.`, K.REFILL_COST,
        S().heartsUnlimited() || s.hearts >= K.MAX_HEARTS ? 'Đã đầy' : null)}
      <div class="shop-item"><div class="si-ico">♾️</div><div class="si-body"><b>Tim vô hạn</b><span>Học thoải mái không lo hết tim — bật miễn phí trong Cài đặt.</span></div>
        <a class="btn btn-outline btn-sm" href="#/settings">Cài đặt</a></div>
      <h2 class="section-title">Vật phẩm</h2>
      ${shopItem('freeze', '🧊', 'Băng giữ streak', `Tự động giữ chuỗi khi bạn lỡ 1 ngày không học. Đang có ${s.streak.freezes}/${K.MAX_FREEZES}.`, K.FREEZE_COST,
        s.streak.freezes >= K.MAX_FREEZES ? 'Đã đủ' : null)}
      ${shopItem('boost', '⚡', 'Nhân đôi KN · 15 phút', S().isBoosted() ? `Đang hoạt động, còn ${U.fmtDuration(s.boostUntil - Date.now())}.` : 'Nhận gấp đôi KN cho mọi bài học trong 15 phút.', K.BOOST_COST,
        S().isBoosted() ? 'Đang dùng' : null)}
      <p class="muted small">Kiếm thêm đá quý: mở rương báu trên lộ trình và hoàn thành nhiệm vụ hằng ngày.</p>`;
  }
  function buy(item) {
    let ok = false;
    if (item === 'refill') ok = S().buyRefill();
    if (item === 'freeze') ok = S().buyFreeze();
    if (item === 'boost') ok = S().buyBoost();
    if (ok) {
      A.sfx('claim');
      UI.toast({ refill: '❤️ Đã hồi đầy tim!', freeze: '🧊 Đã trang bị băng giữ streak!', boost: '⚡ Nhân đôi KN trong 15 phút!' }[item]);
      UI.closePopover();
    } else UI.toast('Không đủ đá quý hoặc không thể mua lúc này.', 'warn');
    EV.app.render();
  }

  /* =========================================================
     HỒ SƠ
     ========================================================= */
  function weekChart() {
    const s = st();
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const k = U.addDays(U.dayKey(), -i);
      const d = U.parseDay(k);
      days.push({ k, xp: s.history[k] || 0, label: i === 0 ? 'Hôm nay' : WEEKDAYS[d.getDay()], date: `${d.getDate()}/${d.getMonth() + 1}` });
    }
    const goal = s.settings.dailyGoal;
    const max = Math.max(goal, ...days.map((d) => d.xp), 10);
    const total = days.reduce((a, d) => a + d.xp, 0);
    return `<div class="card chart-card">
      <div class="chart-sum"><div><b>${U.fmtNum(total)}</b><span>KN trong 7 ngày</span></div><div><b>${Math.round(total / 7)}</b><span>KN trung bình/ngày</span></div></div>
      <div class="xp-plot" aria-hidden="true">
        ${days.map((d, i) => {
          const h = d.xp ? Math.max(3, (d.xp / max) * 100) : 0;
          return `<div class="xp-col ${i === 0 ? 'first' : ''} ${i === days.length - 1 ? 'last' : ''}" tabindex="0" style="--h:${h}%" data-tip="${d.label} ${d.date}: ${d.xp} KN">
            <div class="xp-bar" style="height:${h}%"></div></div>`;
        }).join('')}
        <div class="goal-line" style="bottom:${(goal / max) * 100}%"><span>Mục tiêu ${goal} KN</span></div>
      </div>
      <div class="xp-labels" aria-hidden="true">${days.map((d) => `<span>${d.label === 'Hôm nay' ? 'Nay' : d.label}</span>`).join('')}</div>
      <table class="sr-only"><caption>KN theo ngày trong 7 ngày qua</caption><tr><th>Ngày</th><th>KN</th></tr>${days.map((d) => `<tr><td>${d.label} ${d.date}</td><td>${d.xp}</td></tr>`).join('')}</table>
    </div>`;
  }
  function achievementsHTML() {
    const lv = S().achievementLevels();
    return `<div class="ach-list">${S().ACHIEVEMENTS.filter((a) => (EV.config.league || a.id !== 'league') && (EV.config.economy || a.id !== 'chests')).map((a) => {
      const level = lv[a.id];
      const maxed = level >= a.tiers.length;
      const target = a.tiers[Math.min(level, a.tiers.length - 1)];
      const v = a.value();
      const pct = maxed ? 100 : Math.min(100, Math.round((100 * v) / target));
      return `<div class="ach ${level ? '' : 'none'}">
        <div class="ach-badge"><span>${a.icon}</span><em>Cấp ${level}</em></div>
        <div class="ach-body"><b>${a.name}</b>
          <div class="bar ${maxed ? 'full' : ''}"><i style="width:${pct}%"></i><span>${maxed ? 'Tối đa' : `${U.fmtNum(Math.min(v, target))} / ${U.fmtNum(target)}`}</span></div>
          <span class="muted small">${maxed ? 'Bạn đã đạt cấp cao nhất!' : a.desc(target)}</span></div></div>`;
    }).join('')}</div>`;
  }
  function renderProfile(main) {
    const s = st();
    const G = C.getGrade(s.profile.grade);
    const joined = new Date(s.profile.created);
    const T = EV.league.TIERS[s.league.tier];
    const statBox = (ico, val, lab) => `<div class="stat-box"><span class="sb-ico">${ico}</span><div><b>${val}</b><span>${lab}</span></div></div>`;
    main.innerHTML = `
      <div class="profile-head">
        <div class="avatar xl" style="background:${s.profile.color}">${s.profile.avatar}</div>
        <div class="profile-info">
          <h1>${esc(s.profile.name || 'Bạn học EngVui')}</h1>
          <div class="muted">Tham gia tháng ${joined.getMonth() + 1}/${joined.getFullYear()}</div>
          <div class="muted">Đang học: Lớp ${s.profile.grade}${G ? ' · ' + esc(G.book) : ''}</div>
        </div>
        <a class="btn btn-outline btn-sm" href="#/settings">✏️ Sửa</a>
      </div>
      <h2 class="section-title">Thống kê</h2>
      <div class="stat-grid">
        ${statBox('🔥', s.streak.count, `Ngày streak (dài nhất ${s.streak.longest})`)}
        ${statBox('⚡', U.fmtNum(s.xp), 'Tổng KN')}
        ${EV.config.league ? statBox('🏅', T.name, 'Giải hiện tại') : ''}
        ${statBox('📘', s.stats.lessons, 'Bài học đã hoàn thành')}
        ${statBox('📖', Object.keys(s.learned).length, 'Từ vựng đã học')}
        ${statBox('⏱️', U.fmtDuration(s.stats.ms), 'Thời gian học')}
      </div>
      <h2 class="section-title">KN 7 ngày qua</h2>
      ${weekChart()}
      <h2 class="section-title">Tiến độ theo lớp</h2>
      <div class="card grade-prog">${C.availableGrades().map((g) => {
        const pct = Math.round(gradeProgress(g) * 100);
        const lv = C.level(C.levelOf(g));
        return `<button class="gp-row" data-act="set-grade" data-grade="${g}"><span class="grade-chip sm" style="--c:${lv.color};--d:${lv.dark}">${g}</span>
          <span class="gp-name">Lớp ${g}</span><span class="bar"><i style="width:${pct}%"></i></span><span class="gp-pct">${pct}%</span></button>`;
      }).join('')}</div>
      <h2 class="section-title">Thành tích</h2>
      ${achievementsHTML()}`;
  }

  /* =========================================================
     CÀI ĐẶT
     ========================================================= */
  const toggle = (key, label, desc, disabled) => `<div class="field toggle-field">
    <div><div class="f-label">${label}</div><div class="f-desc">${desc}</div></div>
    <button class="switch ${st().settings[key] && !disabled ? 'on' : ''}" role="switch" aria-checked="${!!st().settings[key] && !disabled}" aria-label="${label}" data-act="toggle" data-key="${key}" ${disabled ? 'disabled' : ''}><i></i></button>
  </div>`;
  function voiceOptions() {
    const vs = A.voices();
    const cur = st().settings.voice;
    const auto = A.currentVoice();
    return `<option value="">Tự động${auto && !cur ? ` (${esc(auto.name)})` : ''}</option>` + vs.map((v) => `<option value="${esc(v.voiceURI)}" ${v.voiceURI === cur ? 'selected' : ''}>${esc(v.name)} · ${esc(v.lang)}</option>`).join('');
  }
  function renderSettings(main) {
    const s = st();
    const set = s.settings;
    main.innerHTML = `
      <h1 class="page-title">Cài đặt</h1>
      <section class="card settings">
        <h2>Hồ sơ</h2>
        <label class="field col"><span class="f-label">Tên hiển thị</span><input class="text-input" id="set-name" value="${esc(s.profile.name)}" maxlength="24" placeholder="Nhập tên của bạn"></label>
        <div class="field col"><span class="f-label">Ảnh đại diện</span>
          <div class="avatar-grid">${AVATARS.map((a) => `<button class="av-pick ${a === s.profile.avatar ? 'sel' : ''}" data-act="set-avatar" data-v="${a}">${a}</button>`).join('')}</div></div>
        <div class="field col"><span class="f-label">Màu nền</span>
          <div class="color-grid">${COLORS.map((c) => `<button class="color-pick ${c === s.profile.color ? 'sel' : ''}" style="background:${c}" data-act="set-color" data-v="${c}" aria-label="Chọn màu ${c}"></button>`).join('')}</div></div>
      </section>
      <section class="card settings">
        <h2>Học tập</h2>
        <div class="field"><div><div class="f-label">Lớp đang học</div><div class="f-desc">Lớp ${s.profile.grade} · ${esc((C.getGrade(s.profile.grade) || {}).book || '')}</div></div>
          <button class="btn btn-outline btn-sm" data-act="course">Đổi lớp</button></div>
        <div class="field col"><span class="f-label">Mục tiêu hằng ngày</span>
          <div class="seg">${[[10, 'Thong thả'], [20, 'Vừa phải'], [30, 'Nghiêm túc'], [50, 'Siêu cấp']].map(([v, l]) => `<button class="seg-btn ${set.dailyGoal === v ? 'sel' : ''}" data-act="set-goal" data-v="${v}"><b>${v} KN</b><span>${l}</span></button>`).join('')}</div></div>
        ${toggle('unlockAll', 'Mở khóa tất cả bài học', 'Tự do chọn bất kỳ Unit nào — phù hợp khi ôn đúng bài đang học trên lớp.')}
        ${EV.config.economy ? toggle('unlimitedHearts', 'Tim vô hạn', 'Không bị trừ tim khi trả lời sai.') : ''}
        ${C.VOCAB_ONLY ? '' : toggle('speaking', 'Bài tập nói', A.canListen() ? 'Luyện phát âm bằng micro (Chrome/Edge, cần Internet).' : 'Trình duyệt này chưa hỗ trợ nhận diện giọng nói (hãy dùng Chrome hoặc Edge).', !A.canListen())}
      </section>
      <section class="card settings">
        <h2>Âm thanh</h2>
        ${toggle('sound', 'Hiệu ứng âm thanh', 'Âm báo đúng/sai và khi hoàn thành bài.')}
        ${toggle('autoSpeak', 'Tự động đọc tiếng Anh', 'Đọc từ và câu khi xuất hiện hoặc khi bạn chọn.')}
        <label class="field col"><span class="f-label">Tốc độ đọc: <b id="rate-val">${Number(set.rate).toFixed(2)}×</b></span>
          <input type="range" id="set-rate" min="0.5" max="1.2" step="0.05" value="${set.rate}"></label>
        <label class="field col"><span class="f-label">Giọng đọc tiếng Anh</span>
          <select class="text-input" id="set-voice">${voiceOptions()}</select></label>
        <div class="btn-row"><button class="btn btn-outline btn-sm" data-act="test-voice">🔊 Nghe thử</button></div>
        ${A.canSpeak() ? '' : '<p class="muted small">Trình duyệt này không hỗ trợ đọc văn bản (Speech Synthesis).</p>'}
      </section>
      <section class="card settings">
        <h2>Giao diện</h2>
        <div class="field col"><span class="f-label">Chế độ màu</span>
          <div class="seg">${[['light', '☀️ Sáng'], ['dark', '🌙 Tối'], ['system', '💻 Theo hệ thống']].map(([v, l]) => `<button class="seg-btn ${set.theme === v ? 'sel' : ''}" data-act="set-theme" data-v="${v}"><b>${l}</b></button>`).join('')}</div></div>
      </section>
      <section class="card settings">
        <h2>Dữ liệu</h2>
        <p class="muted small">Tiến độ được lưu ngay trên máy này. Cài đè bản mới thì dữ liệu vẫn còn, nhưng hãy sao lưu trước khi gỡ app hay đổi máy. Dữ liệu Shadowing (video, âm thanh đã nhập) không nằm trong bản sao lưu.</p>
        <div class="btn-row">
          <button class="btn btn-outline btn-sm" data-act="export">⬇️ Sao lưu tiến độ</button>
          <button class="btn btn-outline btn-sm" data-act="backup-text">📋 Sao lưu bằng văn bản</button>
          <label class="btn btn-outline btn-sm file-btn">⬆️ Khôi phục từ file<input type="file" id="import-file" accept="application/json,.json"></label>
          <button class="btn btn-danger btn-sm" data-act="reset">Xóa toàn bộ dữ liệu</button>
        </div>
      </section>
      <section class="card settings">
        <h2>Về EngVui</h2>
        <p class="mission">${esc(EV.config.mission)}.</p>
        <p class="muted small">Không quảng cáo, không cần tài khoản. Nếu thấy hữu ích, bạn có thể ủng hộ tự nguyện để mình duy trì và bổ sung bài mới.</p>
        <div class="btn-row">
          <button class="btn btn-primary btn-sm" data-act="donate">☕ Ủng hộ EngVui</button>
          <button class="btn btn-outline btn-sm" data-act="about">📄 Bản quyền và nguồn nội dung</button>
        </div>
      </section>
      <p class="muted small center">EngVui · ${esc(EV.config.mission)} · Không cần tài khoản, không cần Internet.</p>`;

    const name = main.querySelector('#set-name');
    name.addEventListener('input', U.debounce(() => {
      st().profile.name = name.value.trim().slice(0, 24);
      S().save();
      renderChrome(currentRoute());
    }, 300));
    const rate = main.querySelector('#set-rate');
    rate.addEventListener('input', () => { main.querySelector('#rate-val').textContent = Number(rate.value).toFixed(2) + '×'; });
    rate.addEventListener('change', () => { S().set('settings.rate', Number(rate.value)); A.speak('This is how I speak.'); });
    main.querySelector('#set-voice').addEventListener('change', (e) => { S().set('settings.voice', e.target.value); A.speak('Hello! Nice to meet you.'); });
    main.querySelector('#import-file').addEventListener('change', importFile);
  }
  // Ủng hộ tự nguyện: mã QR VietQR của người làm app
  function openDonate() {
    const d = EV.config.donate;
    if (!d) return;
    UI.modal({
      className: 'donate-modal',
      html: `<h2 class="modal-title">☕ Ủng hộ EngVui</h2>
        <p class="mission center">${esc(EV.config.mission)}.</p>
        <p class="muted center small">Ủng hộ hoàn toàn tự nguyện, không mở khóa thêm tính năng và không ảnh hưởng việc học. Cảm ơn bạn rất nhiều!</p>
        <img class="donate-qr" src="${esc(d.qr)}" alt="Mã QR chuyển khoản ${esc(d.bank)}" loading="lazy">
        <div class="donate-info"><b>${esc(d.name)}</b><span>${esc(d.bank)} · ${esc(d.shown)}</span></div>
        <div class="btn-row center"><button class="btn btn-outline btn-sm" data-act="copy-acc">📋 Sao chép số tài khoản</button></div>
        <p class="muted center small">Mở app ngân hàng, quét mã QR hoặc nhập số tài khoản. Hãy kiểm tra tên người nhận là <b>${esc(d.name)}</b> trước khi chuyển.</p>`,
    });
  }
  function copyAccount() {
    const d = EV.config.donate;
    const ok = () => UI.toast('Đã sao chép số tài khoản');
    const fail = () => UI.toast('Không sao chép được, bạn hãy nhập số ' + d.shown, 'warn');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(d.number).then(ok, fail);
    else fail();
  }
  // Bản quyền, nguồn nội dung và các lưu ý để người dùng và chủ sở hữu quyền hiểu đúng
  function openAbout() {
    const c = EV.config;
    UI.modal({
      full: true,
      className: 'guide-modal',
      html: `<div class="guide">
        <div class="guide-head"><div class="unit-kicker">EngVui</div><h2>📄 Bản quyền và nguồn nội dung</h2>
          <div class="guide-vi">${esc(c.mission)}.</div></div>
        <section><h3>Mục đích</h3>
          <p>EngVui là dự án phi lợi nhuận: miễn phí, không quảng cáo, không bán nội dung và không thu thập dữ liệu cá nhân. Tiến độ học chỉ lưu trên máy của bạn.
          Khoản ủng hộ (nếu có) là tự nguyện, không phải tiền mua nội dung.</p></section>
        <section><h3>Nội dung</h3>
          <p>Từ vựng, câu ví dụ, bài ngữ pháp, bài đọc và bài nghe được tự soạn hoặc tổng hợp cho mục đích học tập. Chương trình Lớp 1–12 chỉ tham khảo khung chủ đề
          của chương trình tiếng Anh phổ thông; tên Unit dùng để bạn tìm đúng chủ đề đang học trên lớp, không sao chép nguyên văn sách giáo khoa.</p></section>
        <section><h3>Thương hiệu và đề thi</h3>
          <p>EngVui không liên kết với, không được tài trợ hay xác nhận bởi Nhà xuất bản Giáo dục Việt Nam, Bộ Giáo dục và Đào tạo, ETS (TOEIC), British Council, IDP hay Cambridge (IELTS).
          TOEIC và IELTS là nhãn hiệu của các chủ sở hữu tương ứng. Các câu hỏi trong mục Luyện thi mô phỏng dạng bài để luyện kỹ năng, <b>không phải đề thi thật hay đề thi chính thức</b>.</p></section>
        <section><h3>Phiên âm và dịch nghĩa (mục Shadowing)</h3>
          <p>Phiên âm IPA lấy từ <b>Từ điển phát âm CMU</b> (Carnegie Mellon University, giấy phép BSD, kèm sẵn trong app) và tra thêm qua dictionaryapi.dev khi có mạng.
          Bản dịch cụm từ và câu do dịch vụ <b>MyMemory</b> cung cấp qua mạng, chỉ mang tính tham khảo.</p></section>
        <section><h3>Giọng đọc</h3>
          <p>Mọi âm thanh do giọng tổng hợp (máy) tạo sẵn, không phải bản thu âm của đề thi thật. Bài nghe nhiều người nói chỉ mô phỏng cách ra đề.</p></section>
        <section><h3>Sử dụng lại</h3>
          <p>Bạn được học và chia sẻ trang này cho người khác học miễn phí. Vui lòng không sao chép nội dung để bán lại hoặc dùng cho mục đích thương mại khi chưa được phép của tác giả.</p></section>
        <section><h3>Liên hệ</h3>
          <p>${c.contact ? `Nếu bạn là chủ sở hữu quyền và cho rằng có nội dung cần gỡ, vui lòng liên hệ: <b>${esc(c.contact)}</b>. Mình sẽ xử lý nhanh.`
            : 'Nếu bạn là chủ sở hữu quyền và cho rằng có nội dung cần gỡ, vui lòng liên hệ người chia sẻ trang này để được xử lý nhanh.'}</p></section>
      </div>`,
    });
  }
  function importFile(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        S().importData(String(r.result));
        UI.toast('✅ Đã khôi phục tiến độ!');
        location.hash = '#/learn';
        EV.app.boot();
      } catch (err) {
        UI.toast('File không hợp lệ: ' + esc(err.message), 'warn');
      }
    };
    r.readAsText(f);
  }
  // Trong ứng dụng Android (WebView) việc tải tệp thường không chạy, nên dùng cách sao chép và dán văn bản
  const isNativeApp = () => !!(window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform());
  function openBackupText() {
    UI.modal({
      className: 'backup-modal',
      html: `<div class="backup">
        <h2>Sao lưu và khôi phục</h2>
        <p class="muted small">Sao chép đoạn văn bản dưới đây rồi dán vào Ghi chú, Zalo hay email để cất giữ. Khi cần, dán lại vào ô khôi phục.</p>
        <textarea id="backup-out" class="backup-box" readonly rows="5">${esc(S().exportData())}</textarea>
        <div class="btn-row"><button class="btn btn-primary btn-sm" data-act="backup-copy">📋 Sao chép</button>
          ${navigator.share ? '<button class="btn btn-outline btn-sm" data-act="backup-share">📤 Chia sẻ</button>' : ''}</div>
        <h3>Khôi phục từ văn bản đã lưu</h3>
        <textarea id="backup-in" class="backup-box" rows="4" placeholder="Dán đoạn sao lưu vào đây"></textarea>
        <div class="btn-row"><button class="btn btn-outline btn-sm" data-act="backup-restore">⬆️ Khôi phục</button>
          <button class="btn btn-ghost btn-sm" data-close>Đóng</button></div></div>`,
    });
  }
  function backupCopy() {
    const t = document.getElementById('backup-out');
    if (!t) return;
    const done = () => UI.toast('✅ Đã sao chép bản sao lưu');
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t.value).then(done, () => { t.select(); document.execCommand('copy'); done(); });
    else { t.select(); try { document.execCommand('copy'); done(); } catch (e) { UI.toast('Hãy giữ ngón tay lên ô để chọn và sao chép', 'warn'); } }
  }
  function backupRestore() {
    const t = document.getElementById('backup-in');
    const txt = t ? t.value.trim() : '';
    if (!txt) { UI.toast('Hãy dán đoạn sao lưu trước', 'warn'); return; }
    try {
      S().importData(txt);
      UI.toast('✅ Đã khôi phục tiến độ!');
      location.hash = '#/learn';
      EV.app.boot();
    } catch (err) {
      UI.toast('Văn bản không hợp lệ: ' + esc(err.message), 'warn');
    }
  }
  function exportFile() {
    if (isNativeApp()) { openBackupText(); return; }
    const blob = new Blob([S().exportData()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `engvui-tien-do-${U.dayKey()}.json`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  /* =========================================================
     Popover: streak, đá quý, tim
     ========================================================= */
  function streakPop(anchor) {
    const s = st();
    const monday = U.weekStart();
    const today = U.dayKey();
    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((lab, i) => {
      const d = new Date(monday);
      d.setDate(d.getDate() + i);
      const k = U.dayKey(d);
      const on = s.activeDays.includes(k);
      const fr = s.streak.frozen.includes(k);
      return `<div class="wd ${on ? 'on' : ''} ${fr ? 'frozen' : ''} ${k === today ? 'today' : ''}"><span>${lab}</span><i>${on ? '✓' : fr ? '❄' : ''}</i></div>`;
    }).join('');
    const done = s.streak.last === today;
    UI.popover(anchor, `<div class="pop-streak">
      <div class="ps-top"><span class="ps-flame ${done ? '' : 'off'}">🔥</span><div><b>${s.streak.count} ngày streak</b>
      <span class="muted small">${done ? 'Hôm nay bạn đã học rồi. Tuyệt!' : 'Học 1 bài hôm nay để giữ chuỗi nhé!'}</span></div></div>
      <div class="week-row sm">${days}</div>
      <div class="muted small">🧊 Băng giữ streak: ${s.streak.freezes}/${S().CONST.MAX_FREEZES} · Dài nhất: ${s.streak.longest} ngày</div>
      ${EV.config.economy ? '<a class="btn btn-outline btn-block btn-sm" href="#/shop">Mua băng giữ streak</a>' : ''}</div>`);
  }
  function gemsPop(anchor) {
    UI.popover(anchor, `<div class="pop-gems"><div class="pg-big">💎</div><b>Bạn có ${U.fmtNum(st().gems)} đá quý</b>
      <p class="muted small">Mở rương báu và hoàn thành nhiệm vụ để kiếm thêm.</p>
      <a class="btn btn-blue btn-block btn-sm" href="#/shop">Đến cửa hàng</a></div>`);
  }
  function heartsHTML(noHearts) {
    const s = st();
    const K = S().CONST;
    S().refreshHearts();
    if (S().heartsUnlimited()) {
      return `<div class="pop-hearts"><div class="ph-row">♾️</div><b>Tim vô hạn đang bật</b><p class="muted small">Bạn có thể học thoải mái. Tắt trong Cài đặt nếu muốn thử thách hơn.</p></div>`;
    }
    const full = s.hearts >= K.MAX_HEARTS;
    return `<div class="pop-hearts">
      ${noHearts ? `<div class="big-mascot sm">${Art.mascot('sad')}</div><h2>Bạn đã hết tim!</h2>` : '<b>Tim</b>'}
      <div class="ph-row">${Array.from({ length: K.MAX_HEARTS }, (_, i) => `<span class="${i < s.hearts ? '' : 'empty'}">❤️</span>`).join('')}</div>
      <p class="muted small">${full ? 'Bạn đang có đầy tim. Học tiếp thôi!' : `Tim tiếp theo sau ${U.fmtDuration(S().nextHeartIn())}.`}</p>
      <button class="btn btn-blue btn-block btn-sm" data-act="buy" data-item="refill" ${full || s.gems < K.REFILL_COST ? 'disabled' : ''}>Hồi đầy tim · 💎 ${K.REFILL_COST}</button>
      <button class="btn btn-outline btn-block btn-sm" data-act="practice" data-mode="review">Luyện tập để kiếm tim</button>
      <button class="btn btn-ghost btn-block btn-sm" data-act="toggle-unlimited">Bật tim vô hạn</button>
    </div>`;
  }
  function showHearts(noHearts) {
    if (noHearts) UI.modal({ html: heartsHTML(true), className: 'hearts-modal' });
  }

  /* =========================================================
     CHÀO MỪNG (lần đầu mở ứng dụng)
     ========================================================= */
  const ob = { step: 'welcome', name: '', avatar: '🐲', grade: null, goal: 20 };
  function renderOnboarding(app) {
    const steps = ['welcome', 'name', 'grade', 'goal'];
    const idx = steps.indexOf(ob.step);
    if (ob.step === 'welcome') {
      app.innerHTML = `<div class="ob ob-welcome">
        <div class="ob-hero">${Art.mascot('wave')}</div>
        <div class="ob-brand">${Art.logo()}</div>
        <h1>${EV.config.welcomeTitle || 'Học tiếng Anh miễn phí, vui và hiệu quả!'}</h1>
        <p class="muted">${EV.config.welcome}</p>
        <div class="ob-actions">
          <button class="btn btn-primary btn-block" data-ob="next">Bắt đầu ngay</button>
          <label class="btn btn-outline btn-block file-btn">Khôi phục tiến độ từ file<input type="file" id="ob-import" accept="application/json,.json"></label>
        </div></div>`;
      app.querySelector('#ob-import').addEventListener('change', importFile);
      return;
    }
    const q = {
      name: 'Chào bạn! Mình là Rồng Con 🐲. Bạn tên là gì nhỉ?',
      grade: 'Bạn đang học lớp mấy?',
      goal: 'Mỗi ngày bạn muốn học bao nhiêu?',
    }[ob.step];
    let body = '';
    let canNext = true;
    if (ob.step === 'name') {
      body = `<input class="text-input big" id="ob-name" maxlength="24" placeholder="Tên của bạn (không bắt buộc)" value="${esc(ob.name)}">
        <div class="avatar-grid">${AVATARS.map((a) => `<button class="av-pick ${a === ob.avatar ? 'sel' : ''}" data-ob-av="${a}">${a}</button>`).join('')}</div>`;
    } else if (ob.step === 'grade') {
      const avail = new Set(C.availableGrades());
      canNext = !!ob.grade;
      body = `<div class="grade-grid">${C.LEVELS.map((lv) => lv.grades.map((g) => {
        const G = C.getGrade(g);
        return `<button class="grade-card ${ob.grade === g ? 'cur' : ''}" data-ob-grade="${g}" ${avail.has(g) ? '' : 'disabled'} style="--c:${lv.color};--d:${lv.dark}">
          <span class="grade-num">${g}</span><span class="grade-name">Lớp ${g}</span><span class="grade-meta">${G ? G.units.length + ' Unit' : 'Đang cập nhật'}</span></button>`;
      }).join('')).join('')}</div>`;
    } else if (ob.step === 'goal') {
      body = `<div class="ob-options">${[[10, 'Thong thả', '5 phút/ngày'], [20, 'Vừa phải', '10 phút/ngày'], [30, 'Nghiêm túc', '15 phút/ngày'], [50, 'Siêu cấp', '20 phút/ngày']].map(([v, l, t]) => `
        <button class="ob-opt ${ob.goal === v ? 'sel' : ''}" data-ob-goal="${v}"><span><b>${l}</b><small>${t}</small></span><span class="ob-goal-xp">${v} KN</span></button>`).join('')}</div>`;
    }
    app.innerHTML = `<div class="ob">
      <div class="ob-top"><button class="icon-btn" data-ob="back" aria-label="Quay lại">${Art.icon('back')}</button>
        <div class="ob-progress"><i style="width:${(idx / (steps.length - 1)) * 100}%"></i></div></div>
      <div class="ob-main">
        <div class="bubble-row big"><div class="bubble-mascot">${Art.mascot(ob.step === 'goal' ? 'cheer' : 'happy')}</div><div class="bubble">${q}</div></div>
        ${body}
      </div>
      <div class="ob-foot"><button class="btn btn-primary btn-wide" data-ob="next" ${canNext ? '' : 'disabled'}>${ob.step === 'goal' ? 'Bắt đầu học' : 'Tiếp tục'}</button></div>
    </div>`;
    const nameInput = app.querySelector('#ob-name');
    if (nameInput) {
      nameInput.addEventListener('input', () => { ob.name = nameInput.value; });
      setTimeout(() => nameInput.focus(), 50);
    }
  }
  function onboardingClick(e, app) {
    const t = e.target;
    const nav = t.closest('[data-ob]');
    const steps = ['welcome', 'name', 'grade', 'goal'];
    if (nav) {
      const i = steps.indexOf(ob.step);
      if (nav.dataset.ob === 'back') ob.step = steps[Math.max(0, i - 1)];
      else if (ob.step === 'goal') { finishOnboarding(); return; }
      else ob.step = steps[i + 1];
      A.sfx('tap');
      renderOnboarding(app);
      return;
    }
    const av = t.closest('[data-ob-av]');
    if (av) { ob.avatar = av.dataset.obAv; renderOnboarding(app); return; }
    const gr = t.closest('[data-ob-grade]');
    if (gr) { ob.grade = +gr.dataset.obGrade; A.sfx('tap'); renderOnboarding(app); return; }
    const gl = t.closest('[data-ob-goal]');
    if (gl) { ob.goal = +gl.dataset.obGoal; A.sfx('tap'); renderOnboarding(app); }
  }
  function finishOnboarding() {
    const s = st();
    s.profile.name = ob.name.trim().slice(0, 24);
    s.profile.avatar = ob.avatar;
    s.profile.grade = ob.grade;
    s.settings.dailyGoal = ob.goal;
    s.onboarded = true;
    S().save();
    A.sfx('complete');
    location.hash = '#/learn';
    EV.app.boot();
    setTimeout(() => UI.toast(`Chào mừng ${esc(s.profile.name || 'bạn')} đến với EngVui! 🎉`), 300);
  }

  /* =========================================================
     Điều phối hành động (data-act)
     ========================================================= */
  const currentRoute = () => (location.hash.replace(/^#\/?/, '') || 'learn').split('/')[0];
  async function onAction(el, e) {
    const act = el.dataset.act;
    const s = st();
    switch (act) {
      case 'node': openNodePop(el, el.dataset.node); break;
      case 'start': startNode(el.dataset.node); break;
      case 'guide': openGuide(el.dataset.unit); break;
      case 'gm-theory': openTheory(el.dataset.topic); break;
      case 'gm-start': startTopic(el.dataset.topic, el.dataset.key); break;
      case 'ex-words': startGroupWords(+el.dataset.g); break;
      case 'ex-wordlist': openWordList(+el.dataset.g); break;
      case 'gm-jump': { const sec = document.getElementById('gm-g' + el.dataset.g); if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); break; }
      case 'jump': jump(el.dataset.unit); break;
      case 'course': UI.closePopover(); openCoursePicker(); break;
      case 'set-grade':
        s.profile.grade = +el.dataset.grade;
        S().save();
        UI.closeTopModal();
        scrollToCurrent = true;
        if (currentRoute() !== 'learn') location.hash = '#/learn';
        else EV.app.render();
        window.scrollTo(0, 0);
        break;
      case 'practice': UI.closePopover(); startPractice(el.dataset.mode, el.dataset.unit); break;
      case 'claim': {
        const n = S().claimQuest(el.dataset.q);
        if (n) { A.sfx('claim'); UI.toast(`💎 +${n} đá quý!`); UI.confetti(60); }
        EV.app.render();
        break;
      }
      case 'buy': buy(el.dataset.item); break;
      case 'pop-streak': streakPop(el); break;
      case 'pop-gems': gemsPop(el); break;
      case 'pop-hearts': UI.popover(el, heartsHTML(false)); break;
      case 'toggle-unlimited':
        S().set('settings.unlimitedHearts', true);
        UI.closePopover();
        UI.closeTopModal();
        UI.toast('♾️ Đã bật tim vô hạn');
        EV.app.render();
        break;
      case 'toggle': {
        const key = el.dataset.key;
        S().set('settings.' + key, !s.settings[key]);
        A.sfx('tap');
        EV.app.render();
        break;
      }
      case 'set-goal': S().set('settings.dailyGoal', +el.dataset.v); EV.app.render(); break;
      case 'set-theme': S().set('settings.theme', el.dataset.v); EV.app.applyTheme(); EV.app.render(); break;
      case 'set-avatar': s.profile.avatar = el.dataset.v; S().save(); EV.app.render(); break;
      case 'set-color': s.profile.color = el.dataset.v; S().save(); EV.app.render(); break;
      case 'test-voice': A.speak('Hello! Welcome to EngVui. Let\'s learn English together.'); break;
      case 'export': exportFile(); break;
      case 'backup-text': openBackupText(); break;
      case 'backup-copy': backupCopy(); break;
      case 'backup-share': navigator.share({ title: 'EngVui sao lưu', text: S().exportData() }).catch(() => {}); break;
      case 'backup-restore': backupRestore(); break;
      case 'donate': openDonate(); break;
      case 'toggle-theme': {
        const dark = document.documentElement.dataset.theme === 'dark';
        S().set('settings.theme', dark ? 'light' : 'dark');
        EV.app.applyTheme();
        EV.app.render();
        break;
      }
      case 'about': openAbout(); break;
      case 'copy-acc': copyAccount(); break;
      case 'reset': {
        const ok = await UI.confirm({
          mascot: 'sad', title: 'Xóa toàn bộ dữ liệu?', danger: true,
          text: 'Toàn bộ tiến độ, KN, streak và thành tích trên trình duyệt này sẽ bị xóa và không thể khôi phục (trừ khi bạn đã sao lưu).',
          ok: 'Xóa hết', cancel: 'Giữ lại',
        });
        if (ok) { S().reset(); location.hash = ''; EV.app.boot(); }
        break;
      }
      default: break;
    }
  }

  EV.screens = {
    NAV, navShown, shellHTML, navItem, statsBar, sideCards,
    render: {
      learn: renderLearn, grammar: renderGrammar, exam: renderExam, pron: renderPron, practice: renderPractice, leaderboard: renderLeaderboard, quests: renderQuests,
      shop: renderShop, profile: renderProfile, settings: renderSettings,
    },
    renderOnboarding, onboardingClick, onAction, showHearts, closeNodePops, currentRoute,
    focusCurrent: () => { scrollToCurrent = true; },
    resetOnboarding: () => { Object.assign(ob, { step: 'welcome', name: '', avatar: '🐲', grade: null, goal: 20 }); },
  };

  function renderChrome(route) { EV.app.renderChrome(route); }
})();
