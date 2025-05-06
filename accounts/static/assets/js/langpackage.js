document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ar: {
            HOME: "الرئيسية",
            ABOUT: "من نحن",
            TRANSFORMATION: "التحولات",
            TESTIMONIAL: "التقييمات",
            CALCULATOR: "الحاسبة",

        },
        en: {

        }
    };

    function translatePage(lang) {
        const texts = translations[lang];
        for (const [key, val] of Object.entries(texts)) {
            document.body.querySelectorAll("*").forEach(el => {
                if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3 && el.textContent.trim() === key) {
                    el.textContent = val;
                }
            });
        }
    }

    function setLanguage(lang) {
        localStorage.setItem("language", lang);
        translatePage(lang);
        document.getElementById("lang-toggle").textContent = lang === "ar" ? "EN" : "AR";
    }

    function initLanguage() {
        const savedLang = localStorage.getItem("language");
        if (savedLang) {
            setLanguage(savedLang);
        } else {
            fetch('/location/')
                .then(res => res.json())
                .then(data => {
                    const country = data.country;
                    const defaultLang = ['EG', 'SA', 'AE'].includes(country) ? 'ar' : 'en';
                    setLanguage(defaultLang);
                });
        }
    }

    // زر تبديل اللغة
    const nav = document.querySelector('.nav__menu ul');
    const langBtn = document.createElement('li');
    langBtn.innerHTML = `<a href="#" class="nav__link" id="lang-toggle">AR</a>`;
    nav.appendChild(langBtn);

    document.addEventListener("click", function(e) {
        if (e.target.id === "lang-toggle") {
            e.preventDefault();
            const currentLang = localStorage.getItem("language") === "ar" ? "en" : "ar";
            setLanguage(currentLang);
        }
    });

    initLanguage();
});