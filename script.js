// Your JavaScript goes here.
console.log("script.js loaded successfully");
const langToggle = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    langToggle.textContent = lang === 'en' ? 'EST' : 'ENG';
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

applyLanguage(currentLang);

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'et' : 'en';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});