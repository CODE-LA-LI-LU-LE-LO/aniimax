// Runs before page rendering so the root URL respects the saved language.
(() => {
    const key = 'aniimax-language';
    const url = new URL(window.location.href);
    const russianPage = url.pathname.endsWith('/index.ru.html');
    const language = russianPage ? 'ru' : document.documentElement.lang === 'en' ? 'en' : 'ko';
    const requested = url.searchParams.get('lang');
    let saved;
    try { saved = localStorage.getItem(key); } catch { /* Storage may be disabled. */ }
    const explicitEnglishPage = url.pathname.endsWith('/index.en.html');
    const preferred = ['en', 'ko', 'ru'].includes(requested) ? requested : russianPage ? 'ru' : explicitEnglishPage ? 'en' : saved;
    if (['en', 'ko', 'ru'].includes(preferred) && preferred !== language) {
        url.pathname = url.pathname.replace(/[^/]*$/, preferred === 'ru' ? 'index.ru.html' : preferred === 'en' ? 'index.en.html' : 'index.html');
        window.location.replace(url.href);
    }
    if (russianPage) document.documentElement.lang = 'ru';
    window.switchLanguageTo = next => {
        if (!['ko', 'en', 'ru'].includes(next)) return;
        const nextUrl = new URL(window.location.href);
        try { localStorage.setItem(key, next); } catch { /* URL remains usable without storage. */ }
        nextUrl.searchParams.set('lang', next);
        nextUrl.pathname = nextUrl.pathname.replace(/[^/]*$/, next === 'ru' ? 'index.ru.html' : next === 'en' ? 'index.en.html' : 'index.html');
        window.location.assign(nextUrl.href);
    };
    window.switchLanguage = () => window.switchLanguageTo(language === 'ko' ? 'en' : 'ko');
    try { localStorage.setItem(key, ['en', 'ko', 'ru'].includes(preferred) ? preferred : language); } catch { /* Optional persistence. */ }
})();
