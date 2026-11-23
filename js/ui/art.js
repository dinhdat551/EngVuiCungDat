/* EngVui – hình vẽ: linh vật "Rồng Con" và bộ biểu tượng SVG */
(function () {
  const BODY = '#3CC3F5';
  const BODY_DARK = '#1E9FD6';
  const BELLY = '#FFE7A1';
  const HORN = '#FFB020';
  const SPIKE = '#FF7A59';
  const INK = '#1F2A33';

  // mood: happy | cheer | sad | think | wave
  function mascot(mood, cls) {
    const m = mood || 'happy';
    let eyes, mouth, arms, brows = '', extra = '';
    if (m === 'sad') {
      eyes = `<ellipse cx="80" cy="82" rx="13" ry="14" fill="#fff"/><ellipse cx="120" cy="82" rx="13" ry="14" fill="#fff"/>
        <circle cx="81" cy="86" r="7.5" fill="${INK}"/><circle cx="119" cy="86" r="7.5" fill="${INK}"/>
        <circle cx="83.5" cy="83" r="2.4" fill="#fff"/><circle cx="121.5" cy="83" r="2.4" fill="#fff"/>`;
      brows = `<path d="M66 66 L90 72" stroke="${INK}" stroke-width="4" stroke-linecap="round"/><path d="M134 66 L110 72" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
      mouth = `<path d="M90 121 Q100 113 110 121" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      extra = `<path d="M64 96 q-5 9 0 13 q5 -4 0 -13z" fill="#7FD8FF"/>`;
      arms = `<ellipse cx="58" cy="150" rx="10" ry="15" fill="${BODY}" transform="rotate(20 58 150)"/><ellipse cx="142" cy="150" rx="10" ry="15" fill="${BODY}" transform="rotate(-20 142 150)"/>`;
    } else if (m === 'think') {
      eyes = `<ellipse cx="80" cy="80" rx="14" ry="16" fill="#fff"/><ellipse cx="120" cy="80" rx="14" ry="16" fill="#fff"/>
        <circle cx="84" cy="74" r="8" fill="${INK}"/><circle cx="124" cy="74" r="8" fill="${INK}"/>
        <circle cx="86.5" cy="71" r="2.6" fill="#fff"/><circle cx="126.5" cy="71" r="2.6" fill="#fff"/>`;
      brows = `<path d="M110 58 Q122 52 134 58" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      mouth = `<ellipse cx="104" cy="118" rx="5" ry="4" fill="${INK}"/>`;
      arms = `<ellipse cx="58" cy="150" rx="10" ry="15" fill="${BODY}" transform="rotate(20 58 150)"/><ellipse cx="128" cy="120" rx="10" ry="15" fill="${BODY}" transform="rotate(-40 128 120)"/>`;
      extra = `<circle cx="160" cy="44" r="5" fill="#CFE9F7"/><circle cx="172" cy="30" r="8" fill="#CFE9F7"/>`;
    } else if (m === 'cheer') {
      eyes = `<path d="M68 82 Q80 68 92 82" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M108 82 Q120 68 132 82" stroke="${INK}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
      mouth = `<path d="M86 110 Q100 132 114 110 Z" fill="#8A2D3B"/><path d="M92 118 Q100 126 108 118 Q100 114 92 118Z" fill="#FF8FA3"/>`;
      arms = `<ellipse cx="46" cy="112" rx="10" ry="17" fill="${BODY}" transform="rotate(-40 46 112)"/><ellipse cx="154" cy="112" rx="10" ry="17" fill="${BODY}" transform="rotate(40 154 112)"/>`;
      extra = `<path d="M30 60 l4 -10 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4z" fill="#FFC800"/><path d="M168 44 l3 -7 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3z" fill="#FFC800"/>`;
    } else {
      eyes = `<ellipse cx="80" cy="80" rx="14" ry="16" fill="#fff"/><ellipse cx="120" cy="80" rx="14" ry="16" fill="#fff"/>
        <circle cx="82" cy="83" r="8" fill="${INK}"/><circle cx="118" cy="83" r="8" fill="${INK}"/>
        <circle cx="84.5" cy="80" r="2.6" fill="#fff"/><circle cx="120.5" cy="80" r="2.6" fill="#fff"/>`;
      mouth = `<path d="M88 112 Q100 124 112 112" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>`;
      arms = m === 'wave'
        ? `<ellipse cx="58" cy="150" rx="10" ry="15" fill="${BODY}" transform="rotate(20 58 150)"/><ellipse cx="152" cy="116" rx="10" ry="17" fill="${BODY}" transform="rotate(35 152 116)"/>`
        : `<ellipse cx="58" cy="150" rx="10" ry="15" fill="${BODY}" transform="rotate(20 58 150)"/><ellipse cx="142" cy="150" rx="10" ry="15" fill="${BODY}" transform="rotate(-20 142 150)"/>`;
    }
    return `<svg class="mascot ${cls || ''}" viewBox="0 0 200 200" role="img" aria-label="Rồng Con">
      <ellipse cx="100" cy="190" rx="52" ry="7" fill="#000" opacity=".08"/>
      <path d="M138 168 C170 170 186 146 176 120 C170 140 158 150 136 148 Z" fill="${BODY}"/>
      <path d="M176 120 l10 -8 l-2 13z" fill="${SPIKE}"/>
      <path d="M56 128 C30 118 26 96 36 88 C42 104 52 110 64 112 Z" fill="${SPIKE}" opacity=".9"/>
      <path d="M144 128 C170 118 174 96 164 88 C158 104 148 110 136 112 Z" fill="${SPIKE}" opacity=".9"/>
      <ellipse cx="100" cy="148" rx="46" ry="40" fill="${BODY}"/>
      <ellipse cx="100" cy="156" rx="28" ry="26" fill="${BELLY}"/>
      <path d="M84 146 h32 M82 158 h36 M86 170 h28" stroke="#F2C95E" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="78" cy="186" rx="16" ry="8" fill="${BODY_DARK}"/><ellipse cx="122" cy="186" rx="16" ry="8" fill="${BODY_DARK}"/>
      ${arms}
      <path d="M68 40 Q58 12 76 18 Q80 30 86 36 Z" fill="${HORN}"/>
      <path d="M132 40 Q142 12 124 18 Q120 30 114 36 Z" fill="${HORN}"/>
      <path d="M92 32 l8 -14 l8 14z" fill="${SPIKE}"/>
      <ellipse cx="100" cy="82" rx="54" ry="48" fill="${BODY}"/>
      <ellipse cx="100" cy="110" rx="26" ry="16" fill="#86DBFA"/>
      <ellipse cx="92" cy="106" rx="2.6" ry="2" fill="${BODY_DARK}"/><ellipse cx="108" cy="106" rx="2.6" ry="2" fill="${BODY_DARK}"/>
      <ellipse cx="62" cy="104" rx="8" ry="5" fill="#FF9BB0" opacity=".65"/><ellipse cx="138" cy="104" rx="8" ry="5" fill="#FF9BB0" opacity=".65"/>
      ${eyes}${brows}${mouth}${extra}
    </svg>`;
  }

  const I = {
    star: '<path d="M12 2.4l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.3l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10.5" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" stroke-width="2.6"/>',
    chat: '<path d="M4.5 3.5h15a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4h-.5A2.5 2.5 0 0 1 2 15V6a2.5 2.5 0 0 1 2.5-2.5z"/>',
    book: '<path d="M2.5 5.2C5.3 3.6 8.5 3.7 11 5.4V20c-2.5-1.5-5.7-1.6-8.5 0z"/><path d="M13 5.4c2.5-1.7 5.7-1.8 8.5-.2V20c-2.8-1.6-6-1.5-8.5 0z"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3" fill="none" stroke="currentColor" stroke-width="2.6"/><rect x="2.5" y="13" width="5.5" height="8" rx="2.2"/><rect x="16" y="13" width="5.5" height="8" rx="2.2"/>',
    trophy: '<path d="M6.5 3h11v5.5a5.5 5.5 0 0 1-11 0z"/><path d="M6.5 5H3.5v1.5A3.5 3.5 0 0 0 7 10M17.5 5h3v1.5A3.5 3.5 0 0 1 17 10" fill="none" stroke="currentColor" stroke-width="2"/><rect x="10.5" y="13" width="3" height="4"/><rect x="7" y="17" width="10" height="3.5" rx="1.2"/>',
    close: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"/>',
    speaker: '<path d="M4 9h3.5L12 5v14l-4.5-4H4z"/><path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    turtle: '<ellipse cx="11" cy="13" rx="7" ry="5"/><circle cx="19.5" cy="12" r="2.3"/><rect x="5.5" y="16.5" width="2.6" height="3.5" rx="1.2"/><rect x="13" y="16.5" width="2.6" height="3.5" rx="1.2"/><path d="M4 13.5l-2 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    mic: '<rect x="8.5" y="2.5" width="7" height="12" rx="3.5"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.5M8.5 21.5h7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>',
    back: '<path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>',
    keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 10h1M9.5 10h1M13 10h1M16.5 10h1M6 13.5h1M17 13.5h1M9 13.5h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    search: '<circle cx="10.5" cy="10.5" r="6" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
    edit: '<path d="M4 20h4l10.5-10.5-4-4L4 16z"/><path d="M13.5 6.5l4 4" stroke="#fff" stroke-width="1.2"/>',
    guide: '<path d="M5 3.5h11.5A2.5 2.5 0 0 1 19 6v14.5H6.5A1.5 1.5 0 0 1 5 19z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M8.5 8h7M8.5 11.5h7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    review: '<path d="M19.5 12a7.5 7.5 0 0 1-13.4 4.6M4.5 12a7.5 7.5 0 0 1 13.4-4.6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M18.6 3.2v4.9h-4.9M5.4 20.8v-4.9h4.9" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>',
  };
  function icon(name, cls) {
    return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${I[name] || ''}</svg>`;
  }

  function chest(open) {
    return open
      ? `<svg class="chest-svg" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M8 26 L14 12 H50 L56 26Z" fill="#B97A3E"/><path d="M12 24 L16 15 H48 L52 24Z" fill="#6B3F1C"/>
          <rect x="8" y="26" width="48" height="28" rx="4" fill="#D08A45"/><rect x="8" y="26" width="48" height="6" fill="#B97A3E"/>
          <rect x="28" y="30" width="8" height="10" rx="2" fill="#FFC800"/><circle cx="20" cy="20" r="3" fill="#FFE066"/><circle cx="40" cy="18" r="2.5" fill="#7FE3FF"/>
        </svg>`
      : `<svg class="chest-svg" viewBox="0 0 64 64" aria-hidden="true">
          <path d="M8 28 Q8 12 24 12 H40 Q56 12 56 28Z" fill="#E09A52"/><rect x="8" y="26" width="48" height="28" rx="4" fill="#D08A45"/>
          <rect x="8" y="26" width="48" height="5" fill="#B97A3E"/><rect x="14" y="12" width="5" height="42" fill="#FFC800" opacity=".85"/>
          <rect x="45" y="12" width="5" height="42" fill="#FFC800" opacity=".85"/><rect x="27" y="23" width="10" height="13" rx="2.5" fill="#FFC800"/>
          <circle cx="32" cy="29" r="2" fill="#8A5A1F"/>
        </svg>`;
  }

  function shield(color, dark, locked, label) {
    const fill = locked ? '#E5E5E5' : color;
    const edge = locked ? '#CFCFCF' : dark;
    return `<svg class="shield" viewBox="0 0 48 56" aria-label="${label || ''}">
      <path d="M24 3 L44 10 V27 C44 40 35 49 24 53 C13 49 4 40 4 27 V10 Z" fill="${edge}"/>
      <path d="M24 7 L40 13 V27 C40 38 33 45.5 24 49 C15 45.5 8 38 8 27 V13 Z" fill="${fill}"/>
      ${locked ? '<rect x="18" y="25" width="12" height="10" rx="2" fill="#AFAFAF"/><path d="M20.5 25v-3a3.5 3.5 0 0 1 7 0v3" fill="none" stroke="#AFAFAF" stroke-width="2.4"/>'
        : '<path d="M24 15l2.6 5.4 5.9.8-4.3 4.1 1 5.9L24 28.4l-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z" fill="#fff" opacity=".9"/>'}
    </svg>`;
  }

  function logo() {
    return `<span class="logo-mark">${mascot('happy', 'logo-mascot')}</span><span class="logo-text"><b>eng</b><i>vui</i></span>`;
  }

  /* ---------- cờ các nước (Windows không vẽ emoji cờ, chỉ hiện chữ "VN", "JP") ---------- */
  function star(cx, cy, r, n, inner) {
    const k = n || 5, ri = r * (inner || 0.4), pts = [];
    for (let i = 0; i < k * 2; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / k, rr = i % 2 ? ri : r;
      pts.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
    }
    return `<polygon points="${pts.join(' ')}"/>`;
  }
  const stripes = (n, h, a, b) => Array.from({ length: n }, (_, i) =>
    `<rect y="${(i * h).toFixed(3)}" width="30" height="${(h + 0.01).toFixed(3)}" fill="${i % 2 ? b : a}"/>`).join('');
  const unionJack = '<rect width="30" height="20" fill="#012169"/>'
    + '<path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="4"/>'
    + '<path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" stroke-width="1.4"/>'
    + '<path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6.5"/>'
    + '<path d="M15 0V20M0 10H30" stroke="#C8102E" stroke-width="4"/>';
  const FLAGS = {
    '🇻🇳': `<rect width="30" height="20" fill="#DA251D"/><g fill="#FFFF00">${star(15, 10.4, 6)}</g>`,
    '🇯🇵': '<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#BC002D"/>',
    '🇹🇭': '<rect width="30" height="20" fill="#A51931"/><rect y="3.33" width="30" height="13.34" fill="#F4F5F8"/><rect y="6.67" width="30" height="6.66" fill="#2D2A4A"/>',
    '🇸🇬': '<rect width="30" height="10" fill="#EF3340"/><rect y="10" width="30" height="10" fill="#fff"/>'
      + '<circle cx="6.6" cy="5" r="3.6" fill="#fff"/><circle cx="8" cy="5" r="3.4" fill="#EF3340"/>'
      + `<g fill="#fff">${[0, 1, 2, 3, 4].map((i) => { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; return star(10 + 1.9 * Math.cos(a), 5.2 + 1.9 * Math.sin(a), 0.75); }).join('')}</g>`,
    '🇲🇾': stripes(14, 20 / 14, '#CC0001', '#fff')
      + '<rect width="15" height="11.43" fill="#010066"/><circle cx="5.4" cy="5.7" r="3.8" fill="#FFCC00"/><circle cx="6.5" cy="5.7" r="3.2" fill="#010066"/>'
      + `<g fill="#FFCC00">${star(11, 5.7, 2.9, 14, 0.45)}</g>`,
    '🇺🇸': stripes(13, 20 / 13, '#B22234', '#fff')
      + '<rect width="12" height="10.77" fill="#3C3B6E"/>'
      + `<g fill="#fff">${Array.from({ length: 30 }, (_, i) => `<circle cx="${1.2 + (i % 6) * 1.92}" cy="${1.2 + Math.floor(i / 6) * 2.1}" r=".45"/>`).join('')}</g>`,
    '🇬🇧': unionJack,
    '🇦🇺': `<rect width="30" height="20" fill="#012169"/><svg width="15" height="10" viewBox="0 0 30 20">${unionJack}</svg>`
      + `<g fill="#fff">${star(7.5, 15, 3, 7, 0.45)}${star(22.5, 16.8, 1.3, 7, 0.45)}${star(18.5, 9, 1.2, 7, 0.45)}${star(22.5, 3.8, 1.2, 7, 0.45)}${star(26.3, 7.8, 1.2, 7, 0.45)}${star(24.4, 11, 0.7)}</g>`,
  };
  // Hiển thị emoji của từ; riêng emoji cờ thì thay bằng hình SVG.
  function emoji(e) {
    if (!e) return '';
    const f = FLAGS[e];
    return f ? `<svg class="flag" viewBox="0 0 30 20" aria-hidden="true">${f}<rect width="30" height="20" fill="none" stroke="rgba(0,0,0,.18)" stroke-width=".8"/></svg>` : e;
  }

  EV.art = { mascot, icon, chest, shield, logo, emoji };
})();
