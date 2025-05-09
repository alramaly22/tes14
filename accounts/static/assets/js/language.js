const lang = {
    ar: {
        navhome: "الرئيسية",
        about: "عنّا",
        trans: "التحولات",
        testimonial: "آراء العملاء",
        package: "الباقات",
        calc: "حاسبة السعرات",
        button: "ابدأ",
        // كمل باقي الكلمات هنا بنفس الطريقة
    },
    en: {
        navhome: "HOME",
        about: "ABOUT",
        trans: "TRANSFORMATION",
        testimonial: "TESTIMONIAL",
        package: "Package",
        calc: "CALCULATOR",
        button: "Get Start",
        // كمل باقي الكلمات هنا بنفس الطريقة
    }
};

function setLanguage(langCode) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (lang[langCode] && lang[langCode][key]) {
            el.textContent = lang[langCode][key];
        }
    });

    // Font classes logic
    document.body.classList.remove('lang-ar', 'lang-en');
    document.body.classList.add(langCode === 'ar' ? 'lang-ar' : 'lang-en');
}

// Language change buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang-btn');
        setLanguage(selectedLang);
        localStorage.setItem('selectedLang', selectedLang); // حفظ اللغة
    });
});

// اللغة الافتراضية عند الدخول
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    setLanguage(savedLang);
});