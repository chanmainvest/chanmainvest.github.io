// Chanma Investment — main interactions
(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  /* -------- THEME -------- */
  const root = document.documentElement;
  const themeBtn = $('#themeToggle');
  const stored = localStorage.getItem('chanma-theme');
  const prefDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', stored || (prefDark ? 'dark' : 'light'));
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('chanma-theme', next);
  });

  /* -------- LANGUAGE -------- */
  const dict = window.I18N || {};
  const supported = ['en', 'hk', 'tw', 'cn'];
  const htmlLangMap = { en: 'en', hk: 'zh-HK', tw: 'zh-TW', cn: 'zh-CN' };

  function applyLang(lang) {
    if (!supported.includes(lang)) lang = 'en';
    const d = dict[lang] || dict.en;
    document.documentElement.lang = htmlLangMap[lang];
    document.body.dataset.lang = lang;
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (d[key] != null) el.innerHTML = d[key];
    });
    $$('.flag-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    localStorage.setItem('chanma-lang', lang);
  }

  $$('.flag-btn').forEach((b) => {
    b.addEventListener('click', () => applyLang(b.dataset.lang));
  });

  const initialLang = localStorage.getItem('chanma-lang') || (function () {
    const nav = (navigator.language || 'en').toLowerCase();
    if (nav.startsWith('zh')) {
      if (nav.includes('hk')) return 'hk';
      if (nav.includes('tw')) return 'tw';
      return 'cn';
    }
    return 'en';
  })();
  applyLang(initialLang);

  /* -------- SIDE NAV -------- */
  const hamburger = $('#hamburger');
  const scrim = $('#scrim');
  const sidenav = $('#sideNav');
  function setMenu(open) {
    document.body.classList.toggle('menu-open', open);
    hamburger.setAttribute('aria-expanded', String(open));
    sidenav.setAttribute('aria-hidden', String(!open));
  }
  hamburger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  scrim.addEventListener('click', () => setMenu(false));
  $$('#sideNav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  /* -------- SCROLLYTELLING: activate steps -------- */
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
      else entry.target.classList.remove('active');
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
  $$('.step').forEach((s) => stepObserver.observe(s));

  /* -------- YEAR -------- */
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
})();
