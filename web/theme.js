// Loaded at the start of body, before content is painted. Shared by both languages.
(() => {
    const key = 'aniimax-theme';
    let saved;
    try { saved = localStorage.getItem(key); } catch { /* Persistence is optional. */ }
    document.body.classList.toggle('light', saved === 'light');
    function updateButton() {
        const button = document.getElementById('themeToggle');
        if (!button) return;
        const light = document.body.classList.contains('light');
        button.textContent = document.documentElement.lang !== 'ko'
            ? (light ? 'dark' : 'light') : (light ? '어두운 테마' : '밝은 테마');
        button.setAttribute('aria-pressed', String(light));
    }
    window.toggleTheme = () => {
        const light = document.body.classList.toggle('light');
        try { localStorage.setItem(key, light ? 'light' : 'dark'); } catch { /* Still switch without storage. */ }
        updateButton();
    };
    document.addEventListener('DOMContentLoaded', updateButton);
    document.addEventListener('aniimax-language-change', updateButton);
})();
