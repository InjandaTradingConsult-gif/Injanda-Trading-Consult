/* Duotone icon set, 24px grid. [tint layer, line layer]. Tint uses --ic2, line uses currentColor. */
const ICONS = {
  search: ['<circle cx="11" cy="11" r="6.5"/>', '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>'],
  user: ['<circle cx="12" cy="8" r="4"/>', '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5c.7-3.7 3.6-5.5 7.5-5.5s6.8 1.8 7.5 5.5"/>'],
  heart: ['<path d="M12 20.3S4.2 15.6 4.2 9.7A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.8 2.3c0 5.9-7.8 10.6-7.8 10.6z"/>', '<path d="M12 20.3S4.2 15.6 4.2 9.7A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.8 2.3c0 5.9-7.8 10.6-7.8 10.6z"/>'],
  cart: ['<path d="M7 8h12.2l-1.4 6.3a1 1 0 0 1-1 .8H8.8a1 1 0 0 1-1-.8z"/>', '<path d="M3.5 4.5h2.1l1.7 9.8a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L19.2 8H6.6"/><circle cx="9.5" cy="19" r="1.3"/><circle cx="16.5" cy="19" r="1.3"/>'],
  menu: ['', '<path d="M4 7h16M4 12h10M4 17h16"/>'],
  close: ['', '<path d="m6 6 12 12M18 6 6 18"/>'],
  arrow: ['', '<path d="M5 12h14m-5-5 5 5-5 5"/>'],
  chev: ['', '<path d="m9 6 6 6-6 6"/>'],
  plus: ['', '<path d="M12 5v14M5 12h14"/>'],
  minus: ['', '<path d="M5 12h14"/>'],
  tick: ['', '<path d="m5 12.5 4.5 4.5L19 7"/>'],
  filter: ['<circle cx="15" cy="7" r="2.4"/><circle cx="9" cy="17" r="2.4"/>', '<path d="M4 7h8.6M17.4 7H20M4 17h2.6M11.4 17H20"/><circle cx="15" cy="7" r="2.4"/><circle cx="9" cy="17" r="2.4"/>'],
  grid: ['<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>', '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>'],
  home: ['<path d="M5 11 12 5l7 6v8H5z"/>', '<path d="m3.5 11.5 8.5-7 8.5 7M6 10v9.5h4v-5h4v5h4V10"/>'],
  quote: ['<path d="M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5z"/>', '<path d="M7 3.5h7l4.5 4.5v11a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5zM14 3.5V8h4.5M8.8 13h6.4M8.8 16.5h4"/>'],
  shield: ['<path d="M12 3.5 19 6.2v5.3c0 4.4-2.9 7.7-7 9-4.1-1.3-7-4.6-7-9V6.2z"/>', '<path d="M12 3.5 19 6.2v5.3c0 4.4-2.9 7.7-7 9-4.1-1.3-7-4.6-7-9V6.2zM8.8 12.1l2.3 2.3 4.1-4.6"/>'],
  weight: ['<path d="M7.2 9h9.6l2.4 10.5H4.8z"/>', '<path d="M7.2 9h9.6l2.4 10.5H4.8z"/><circle cx="12" cy="5.8" r="2.3"/>'],
  wrench: ['<path d="M14.8 3.8a4.6 4.6 0 0 0-4 6.1L4 16.7 7.3 20l6.8-6.8a4.6 4.6 0 0 0 6.1-4l-2.9 2.1-2.5-.6-.6-2.5z"/>', '<path d="M14.8 3.8a4.6 4.6 0 0 0-4 6.1L4 16.7 7.3 20l6.8-6.8a4.6 4.6 0 0 0 6.1-4l-2.9 2.1-2.5-.6-.6-2.5z"/>'],
  calendar: ['<rect x="4" y="5.5" width="16" height="14.5" rx="3"/>', '<rect x="4" y="5.5" width="16" height="14.5" rx="3"/><path d="M4 10.5h16M8.2 3.5V7M15.8 3.5V7M8.8 16.4l2 2 4-4.2"/>'],
  truck: ['<path d="M3 6.5h11V16H3z"/>', '<path d="M3 6.5h11V16H3zM14 9.5h3.6l3.4 3.3V16h-7"/><circle cx="7.5" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>'],
  check: ['<circle cx="12" cy="12" r="8.5"/>', '<circle cx="12" cy="12" r="8.5"/><path d="m8.2 12.3 2.6 2.6 5-5.6"/>'],
  phone: ['<path d="M5.2 4h3.3l1.6 4-2.1 1.4a11 11 0 0 0 5.6 5.6l1.4-2.1 4 1.6v3.3a1.8 1.8 0 0 1-1.9 1.8A15.5 15.5 0 0 1 3.4 5.9 1.8 1.8 0 0 1 5.2 4z"/>', '<path d="M5.2 4h3.3l1.6 4-2.1 1.4a11 11 0 0 0 5.6 5.6l1.4-2.1 4 1.6v3.3a1.8 1.8 0 0 1-1.9 1.8A15.5 15.5 0 0 1 3.4 5.9 1.8 1.8 0 0 1 5.2 4z"/>'],
  mail: ['<rect x="3.5" y="5.5" width="17" height="13" rx="3"/>', '<rect x="3.5" y="5.5" width="17" height="13" rx="3"/><path d="m4 8 8 5.5L20 8"/>'],
  pin: ['<path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z"/>', '<path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z"/><circle cx="12" cy="10" r="2.3"/>'],
  /* categories */
  kites: ['<path d="M12 3 18 10l-6 8-6-8z"/>', '<path d="M12 3 18 10l-6 8-6-8zM12 3v15M6 10h12M12 18c-2.2 1.2-2.2 2.2 0 3.2"/>'],
  washing: ['<path d="M12 3.5s5.5 5.6 5.5 9.6a5.5 5.5 0 0 1-11 0C6.5 9.1 12 3.5 12 3.5z"/>', '<path d="M12 3.5s5.5 5.6 5.5 9.6a5.5 5.5 0 0 1-11 0C6.5 9.1 12 3.5 12 3.5zM9.4 14.2a2.8 2.8 0 0 0 2.6 2.4"/>'],
  rollers: ['<rect x="5" y="8" width="14" height="8" rx="2"/>', '<rect x="5" y="8" width="14" height="8" rx="2"/><path d="M2.5 12H5M19 12h2.5M9.5 8v8M14.5 8v8"/>'],
  blades: ['<circle cx="12" cy="12" r="8"/>', '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2"/><path d="M12 4v2.6M12 17.4V20M4 12h2.6M17.4 12H20"/>'],
  folding: ['<path d="M4 6.5 9 4.5l6 2 5-2v13l-5 2-6-2-5 2z"/>', '<path d="M4 6.5 9 4.5l6 2 5-2v13l-5 2-6-2-5 2zM9 4.5v13M15 6.5v13"/>'],
  parts: ['<circle cx="12" cy="12" r="5.5"/>', '<circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/><path d="M12 3v2.4M12 18.6V21M3 12h2.4M18.6 12H21M5.6 5.6l1.7 1.7M16.7 16.7l1.7 1.7M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7"/>'],
  electrical: ['<rect x="6.5" y="6.5" width="11" height="11" rx="2.5"/>', '<rect x="6.5" y="6.5" width="11" height="11" rx="2.5"/><path d="M9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3M13.2 8.5 10.8 12h2.6l-2.6 3.5"/>'],
  manufacturing: ['<path d="M8 3.5h8v5H8z"/>', '<path d="M8 3.5h8v5H8zM10 8.5v5l2 3.5 2-3.5v-5M5 20.5h14"/>'],
};
const CAT_ICON = { all: 'grid', kites: 'kites', washing: 'washing', rollers: 'rollers', blades: 'blades', folding: 'folding', parts: 'parts', electrical: 'electrical', manufacturing: 'manufacturing' };
const ic = (n, c = '') => `<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
(() => {
  const s = Object.entries(ICONS).map(([k, [t, l]]) => `<symbol id="i-${k}" viewBox="0 0 24 24">${t ? `<g style="fill:var(--ic2,currentColor);fill-opacity:var(--ico,.16);stroke:none">${t}</g>` : ''}<g>${l}</g></symbol>`).join('');
  const d = document.createElement('div'); d.innerHTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">${s}</svg>`; document.body.prepend(d.firstChild);
})();
