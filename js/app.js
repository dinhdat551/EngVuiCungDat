/* EngVui – khởi động ứng dụng, điều hướng (hash router), giao diện sáng/tối */
(function () {
  const U = EV.util;
  const UI = EV.ui;
  const A = EV.audio;
  const Sc = EV.screens;
  const S = () => EV.store;
  const st = () => EV.store.state;

  let app = null;
  let mode = null;
  const TITLES = {
    learn: 'Học', grammar: 'Ngữ pháp', exam: 'Luyện thi', pron: 'Phát âm', practice: 'Luyện tập', leaderboard: 'Bảng xếp hạng', quests: 'Nhiệm vụ',
    shop: 'Cửa hàng', profile: 'Hồ sơ', settings: 'Cài đặt',
  };

  function applyTheme() {
    const t = st().settings.theme;
    const dark = t === 'dark' || (t === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }

  function boot() {
    app = document.getElementById('app');
    applyTheme();
    UI.closePopover();
    if (!st().onboarded) {
      mode = 'onboarding';
      app.className = 'app-onboarding';
      Sc.resetOnboarding();
      Sc.renderOnboarding(app);
      return;
    }
    if (!st().profile.grade) {
      st().profile.grade = EV.course.availableGrades()[0] || 1;
      S().save();
    }
    mode = 'main';
    app.className = 'app-main';
    app.innerHTML = Sc.shellHTML();
    render();
    showNotices();
  }

  function renderChrome(route) {
    const nl = document.getElementById('nav-list');
    if (!nl) return;
    const nav = Sc.NAV.filter(Sc.navShown);
    nl.innerHTML = nav.map(Sc.navItem).join('');
    document.getElementById('bottom-nav').innerHTML = nav.filter((n) => !n.noBottom).map(Sc.navItem).join('');
    U.$$('.nav-item').forEach((a) => a.classList.toggle('active', a.dataset.route === route));
    document.getElementById('topbar').innerHTML = Sc.statsBar();
    document.getElementById('side-right').innerHTML = Sc.sideCards(route);
  }

  function render() {
    if (mode !== 'main') return;
    const route = Sc.currentRoute();
    const fn = Sc.render[route] || Sc.render.learn;
    UI.closePopover();
    const main = document.getElementById('main');
    if (!main) return;
    main.dataset.route = route;
    fn(main);
    renderChrome(route);
    document.title = `${TITLES[route] || 'Học'} · ${EV.config.appTitle}`;
  }

  function showNotices() {
    const queue = [];
    S().takeNotices().forEach((n) => {
      if (n.type === 'lost') queue.push({ mascot: 'sad', title: 'Ôi không, chuỗi streak đã bị mất!', text: `Chuỗi ${n.n} ngày đã kết thúc. Đừng buồn — bắt đầu chuỗi mới ngay hôm nay nhé!` });
      if (n.type === 'freeze') queue.push({ mascot: 'happy', title: '🧊 Băng giữ streak đã bảo vệ bạn!', text: `Bạn đã lỡ ${n.n} ngày nhưng chuỗi streak vẫn được giữ nguyên.` });
    });
    const r = st().league.result;
    if (r && !r.seen && EV.config.league) {
      const T = EV.league.TIERS;
      if (r.change === 'up') queue.push({ mascot: 'cheer', title: `Thăng hạng lên Giải ${T[r.to].name}!`, text: `Tuần trước bạn đứng hạng #${r.rank}. Quá tuyệt vời!`, confetti: true });
      else if (r.change === 'down') queue.push({ mascot: 'sad', title: `Bạn đã xuống Giải ${T[r.to].name}`, text: `Tuần trước bạn đứng hạng #${r.rank}. Tuần này cố gắng hơn nhé!` });
      else queue.push({ mascot: 'happy', title: `Bạn trụ lại Giải ${T[r.to].name}`, text: `Tuần trước bạn đứng hạng #${r.rank}. Tiếp tục phát huy nhé!` });
      r.seen = true;
      S().save();
    }
    const next = () => {
      const n = queue.shift();
      if (!n) return;
      if (n.confetti) UI.confetti();
      UI.modal({
        className: 'confirm',
        html: `<div class="confirm-box"><div class="confirm-mascot">${EV.art.mascot(n.mascot)}</div><h2>${n.title}</h2>
          <p class="muted">${n.text}</p><button class="btn btn-primary btn-block" data-close>Tiếp tục</button></div>`,
        onClose: next,
      });
    };
    next();
  }

  function init() {
    S().load();
    EV.lesson.init();
    if (window.matchMedia) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      if (mq.addEventListener) mq.addEventListener('change', applyTheme);
    }
    window.addEventListener('hashchange', () => {
      if (mode !== 'main') return;
      Sc.closeNodePops();
      UI.closeTopModal();
      if (Sc.currentRoute() === 'learn') Sc.focusCurrent();
      window.scrollTo(0, 0);
      render();
    });
    document.addEventListener('click', (e) => {
      if (mode === 'onboarding' && !e.target.closest('#modal-root')) { Sc.onboardingClick(e, app); return; }
      const actEl = e.target.closest('[data-act]');
      if (actEl && !actEl.disabled) { Sc.onAction(actEl, e); return; }
      const say = e.target.closest('[data-say-text]');
      if (say && !e.target.closest('#lesson')) { A.speak(say.dataset.sayText); return; }
      const clip = e.target.closest('[data-say-clip]');
      if (clip && !e.target.closest('#lesson')) {
        const t = EV.course.getTopic(clip.dataset.topic);
        const L = t && t.listening[+clip.dataset.sayClip];
        if (L) A.clip(L.clip, { slow: clip.dataset.slow === '1', lines: L.lines, speakers: L.speakers });
        return;
      }
      if (!e.target.closest('.node-wrap')) Sc.closeNodePops();
      if (e.target.closest('.nav-item')) UI.closePopover();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (UI.modalOpen()) { UI.closeTopModal(); e.stopPropagation(); return; }
      if (!EV.lesson.isOpen()) { UI.closePopover(); Sc.closeNodePops(); }
    }, true);
    setInterval(() => {
      S().tick();
      if (mode === 'main' && !EV.lesson.isOpen() && !document.querySelector('.popover')) renderChrome(Sc.currentRoute());
    }, 60000);
    boot();
  }

  EV.app = { init, boot, render, renderChrome, applyTheme, showHearts: (x) => Sc.showHearts(x) };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
