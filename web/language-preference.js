// Runs before page rendering so the root URL respects the saved language.
(() => {
    const key = 'aniimax-language';
    const url = new URL(window.location.href);
    const language = document.documentElement.lang === 'en' ? 'en' : 'ko';
    const requested = url.searchParams.get('lang');
    let saved;
    try { saved = localStorage.getItem(key); } catch { /* Storage may be disabled. */ }
    const explicitEnglishPage = url.pathname.endsWith('/index.en.html');
    const preferred = ['en', 'ko'].includes(requested) ? requested : explicitEnglishPage ? 'en' : saved;
    if (['en', 'ko'].includes(preferred) && preferred !== language) {
        url.pathname = url.pathname.replace(/[^/]*$/, preferred === 'en' ? 'index.en.html' : 'index.html');
        window.location.replace(url.href);
    }
    window.switchLanguage = () => {
        const next = language === 'ko' ? 'en' : 'ko';
        try { localStorage.setItem(key, next); } catch { /* URL remains usable without storage. */ }
        url.searchParams.set('lang', next);
        url.pathname = url.pathname.replace(/[^/]*$/, next === 'en' ? 'index.en.html' : 'index.html');
        window.location.assign(url.href);
    };
    try { localStorage.setItem(key, preferred === 'en' || preferred === 'ko' ? preferred : language); } catch { /* Optional persistence. */ }
})();
