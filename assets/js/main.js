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
  const visualSources = {
    'dashboard-main': {
      en: 'assets/img/dashboard-screenshot.png',
      zh: 'assets/img/dashboard-screenshot-cn.png'
    },
    'dashboard-correlation': {
      en: 'assets/img/dashboard-correlation.png',
      zh: 'assets/img/dashboard-correlation-cn.png'
    },
    'tutorial-main': {
      en: 'assets/img/tutorial-screenshot.png',
      zh: 'assets/img/tutorial-screenshot-cn.png'
    }
  };
  let currentLang = 'en';

  function visualLangKey(lang) {
    return lang === 'en' ? 'en' : 'zh';
  }

  function getSectionVisual(sectionId, fallbackVisual) {
    const steps = $$(sectionId + ' .step.active');
    const active = steps.length ? steps[steps.length - 1] : $(sectionId + ' .step');
    return active?.dataset.visual || fallbackVisual;
  }

  function setProjectVisual(imgId, visualKey) {
    const img = $('#' + imgId);
    const source = visualSources[visualKey]?.[visualLangKey(currentLang)];
    if (img && source && img.getAttribute('src') !== source) {
      img.setAttribute('src', source);
    }
  }

  function updateProjectVisuals() {
    setProjectVisual('dashboardVisual', getSectionVisual('#dashboard', 'dashboard-main'));
    setProjectVisual('tutorialVisual', getSectionVisual('#tutorial', 'tutorial-main'));
  }

  function updateStepStates() {
    ['#dashboard', '#tutorial'].forEach((sectionId) => {
      const steps = $$(sectionId + ' .step');
      if (!steps.length) return;

      const targetY = window.innerHeight * 0.45;
      let activeIndex = 0;
      let bestDistance = Number.POSITIVE_INFINITY;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        const center = rect.top + (rect.height / 2);
        const distance = Math.abs(center - targetY);
        if (distance < bestDistance) {
          bestDistance = distance;
          activeIndex = index;
        }
      });

      steps.forEach((step, index) => {
        step.classList.toggle('active', index === activeIndex);
      });
    });

    updateProjectVisuals();
  }

  function applyLang(lang) {
    if (!supported.includes(lang)) lang = 'en';
    const d = dict[lang] || dict.en;
    currentLang = lang;
    document.documentElement.lang = htmlLangMap[lang];
    document.body.dataset.lang = lang;
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (d[key] != null) el.innerHTML = d[key];
    });
    $$('.flag-btn').forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
    localStorage.setItem('chanma-lang', lang);
    updateProjectVisuals();
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

  /* -------- SCROLLYTELLING: activate closest step -------- */
  window.addEventListener('scroll', updateStepStates, { passive: true });
  window.addEventListener('resize', updateStepStates);

  /* -------- YEAR -------- */
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
  updateStepStates();
})();
