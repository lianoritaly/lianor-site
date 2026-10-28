(() => {
  'use strict';
  const key = 'lianor.language';
  const supported = value => value === 'it' || value === 'en';
  const pairs = [
    ['/', '/it/'],
    ['/about-us/', '/it/chi-siamo/'],
    ['/results/', '/it/risultati/'],
    ['/hospitality-english/', '/it/hospitality-english/'],
    ['/university-admissions/', '/it/ammissioni-universitarie/']
  ];
  const aliases = {
    '/hospitality-communication/': '/hospitality-english/',
    '/it/comunicazione-hospitality/': '/it/hospitality-english/'
  };
  function readPreference() {
    for (const name of ['localStorage', 'sessionStorage']) {
      try {
        const value = window[name].getItem(key);
        if (supported(value)) return value;
      } catch (_) { /* Language switching also works without browser storage. */ }
    }
    return null;
  }
  function remember(value) {
    for (const name of ['localStorage', 'sessionStorage']) {
      try {
        window[name].setItem(key, value);
        return true;
      } catch (_) { /* Try session storage before using an explicit URL choice. */ }
    }
    return false;
  }
  // Capture the explicit choice before the existing menu and anchor handlers run.
  document.addEventListener('click', event => {
    const link = event.target.closest?.('a.language-link');
    if (!link || !supported(link.lang)) return;
    if (!remember(link.lang)) {
      const target = new URL(link.href, location.href);
      target.searchParams.set('lang', link.lang);
      link.href = target.href;
    }
  }, true);

  if (location.protocol !== 'https:' && location.protocol !== 'http:') return;
  const url = new URL(location.href);
  let pathname = url.pathname.replace(/\/index\.html$/, '/');
  if (!pathname.endsWith('/')) pathname += '/';
  pathname = aliases[pathname] || pathname;
  const pair = pairs.find(item => item.includes(pathname));
  if (!pair) return;

  const explicit = url.searchParams.get('lang');
  if (supported(explicit)) remember(explicit);
  let preferred = supported(explicit) ? explicit : readPreference();
  if (!preferred) {
    // An Italian URL is already an explicit locale. Keep it crawlable and shareable.
    if (pathname === pair[1]) return;
    try {
      // Keep the current language while navigating within the site, including when
      // storage is unavailable and a visitor has just used the language selector.
      if (document.referrer && new URL(document.referrer).origin === url.origin) return;
    } catch (_) { /* Missing or malformed referrer: use the browser preference. */ }
    const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
    preferred = languages.map(value => String(value).toLowerCase().split('-')[0]).find(supported) || 'en';
  }
  const destination = pair[preferred === 'it' ? 1 : 0];
  if (destination !== pathname || aliases[url.pathname]) {
    url.pathname = destination;
    location.replace(url.href);
  }
})();
