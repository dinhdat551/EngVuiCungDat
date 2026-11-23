/* EngVui – thành phần giao diện dùng chung: hộp thoại, thông báo, popover, pháo giấy */
(function () {
  const U = EV.util;
  const UI = {};

  /* ---------- hộp thoại ---------- */
  const stack = [];
  UI.modal = function (opts) {
    const root = document.getElementById('modal-root');
    const wrap = U.frag(`<div class="modal-backdrop ${opts.className || ''}" role="dialog" aria-modal="true">
      <div class="modal-card ${opts.wide ? 'wide' : ''} ${opts.full ? 'full' : ''}">
        ${opts.dismissable === false ? '' : `<button class="modal-x" data-close aria-label="Đóng">${EV.art.icon('close')}</button>`}
        <div class="modal-body">${opts.html}</div>
      </div>
    </div>`);
    let closed = false;
    const close = (val) => {
      if (closed) return;
      closed = true;
      wrap.classList.add('out');
      const i = stack.indexOf(entry);
      if (i >= 0) stack.splice(i, 1);
      setTimeout(() => wrap.remove(), 160);
      if (opts.onClose) opts.onClose(val);
    };
    const entry = { close, dismissable: opts.dismissable !== false };
    wrap.addEventListener('click', (e) => {
      if (e.target === wrap && entry.dismissable) close();
      if (e.target.closest('[data-close]')) close();
    });
    root.appendChild(wrap);
    stack.push(entry);
    requestAnimationFrame(() => wrap.classList.add('in'));
    if (opts.onMount) opts.onMount(wrap.querySelector('.modal-body'), close);
    return close;
  };
  UI.modalOpen = () => stack.length > 0;
  UI.closeTopModal = () => {
    const top = stack[stack.length - 1];
    if (top && top.dismissable) { top.close(); return true; }
    return false;
  };

  UI.confirm = function (o) {
    return new Promise((resolve) => {
      UI.modal({
        className: 'confirm',
        html: `<div class="confirm-box">
          ${o.mascot ? `<div class="confirm-mascot">${EV.art.mascot(o.mascot)}</div>` : ''}
          <h2>${o.title}</h2>
          ${o.text ? `<p class="muted">${o.text}</p>` : ''}
          <div class="confirm-actions">
            <button class="btn ${o.danger ? 'btn-danger' : 'btn-blue'} btn-block" data-ok>${o.ok || 'Đồng ý'}</button>
            <button class="btn btn-ghost btn-block" data-cancel>${o.cancel || 'Hủy'}</button>
          </div></div>`,
        onMount(body, close) {
          body.querySelector('[data-ok]').onclick = () => { resolve(true); close(true); };
          body.querySelector('[data-cancel]').onclick = () => { resolve(false); close(false); };
        },
        onClose(v) { if (v === undefined) resolve(false); },
      });
    });
  };

  /* ---------- thông báo nhỏ ---------- */
  UI.toast = function (html, kind) {
    const root = document.getElementById('toast-root');
    const el = U.frag(`<div class="toast ${kind || ''}">${html}</div>`);
    root.appendChild(el);
    requestAnimationFrame(() => el.classList.add('in'));
    setTimeout(() => el.classList.remove('in'), 2400);
    setTimeout(() => el.remove(), 2800);
  };

  /* ---------- popover gắn với một nút ---------- */
  let pop = null;
  UI.closePopover = () => {
    if (pop) { pop.el.remove(); pop.anchor.classList.remove('pop-open'); pop = null; }
  };
  UI.popover = function (anchor, html, cls) {
    const same = pop && pop.anchor === anchor;
    UI.closePopover();
    if (same) return null;
    const el = U.frag(`<div class="popover ${cls || ''}">${html}</div>`);
    document.body.appendChild(el);
    const r = anchor.getBoundingClientRect();
    const w = el.offsetWidth;
    let left = r.left + r.width / 2 - w / 2;
    left = U.clamp(left, 12, window.innerWidth - w - 12);
    el.style.left = left + 'px';
    el.style.top = (r.bottom + 12) + 'px';
    el.style.setProperty('--arrow-x', (r.left + r.width / 2 - left) + 'px');
    anchor.classList.add('pop-open');
    pop = { el, anchor };
    return el;
  };
  document.addEventListener('click', (e) => {
    if (!pop) return;
    if (pop.el.contains(e.target) || pop.anchor.contains(e.target)) return;
    UI.closePopover();
  }, true);
  window.addEventListener('resize', () => UI.closePopover());
  window.addEventListener('scroll', () => UI.closePopover(), { passive: true });

  /* ---------- số chạy ---------- */
  UI.countUp = function (el, to, ms, suffix) {
    const start = performance.now();
    const dur = ms || 700;
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + (suffix || '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- pháo giấy ---------- */
  UI.confetti = function (amount) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cv = document.getElementById('confetti');
    const c = cv.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    cv.width = innerWidth * dpr;
    cv.height = innerHeight * dpr;
    c.setTransform(dpr, 0, 0, dpr, 0, 0);
    cv.style.display = 'block';
    const colors = ['#58CC02', '#1CB0F6', '#FFC800', '#FF4B4B', '#CE82FF', '#FF9600', '#FF86D0'];
    const parts = [];
    const n = amount || 140;
    for (let i = 0; i < n; i++) {
      parts.push({
        x: innerWidth / 2 + (Math.random() - 0.5) * innerWidth * 0.5,
        y: innerHeight * 0.35 + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 16,
        vy: -Math.random() * 15 - 5,
        w: 6 + Math.random() * 7,
        h: 8 + Math.random() * 9,
        r: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        color: colors[i % colors.length],
      });
    }
    const t0 = performance.now();
    const frame = (t) => {
      const el = t - t0;
      c.clearRect(0, 0, innerWidth, innerHeight);
      parts.forEach((p) => {
        p.vy += 0.42;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        c.save();
        c.translate(p.x, p.y);
        c.rotate(p.r);
        c.globalAlpha = Math.max(0, 1 - el / 2600);
        c.fillStyle = p.color;
        c.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r * 2)));
        c.restore();
      });
      if (el < 2600) requestAnimationFrame(frame);
      else { c.clearRect(0, 0, innerWidth, innerHeight); cv.style.display = 'none'; }
    };
    requestAnimationFrame(frame);
  };

  EV.ui = UI;
})();
