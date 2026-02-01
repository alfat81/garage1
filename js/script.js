// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель для анимации
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Наблюдаем за элементами услуг и преимуществ
    document.querySelectorAll('.services__item, .about__item').forEach(el => {
        observer.observe(el);
    });

    // Плавное появление остальных элементов
    setTimeout(() => {
        document.querySelectorAll('.process__step').forEach((step, index) => {
            setTimeout(() => {
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);

    // Форма обратной связи
    const form = document.querySelector('.form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const phoneInput = form.querySelector('input[name="phone"]');
            const phoneValue = phoneInput.value.replace(/\D/g, '');
            
            if (phoneValue.length < 10) {
                e.preventDefault();
                alert('Пожалуйста, введите корректный номер телефона');
                phoneInput.focus();
                return false;
            }
            
            // Можно добавить отправку данных в Яндекс.Метрику или Google Analytics
            if (typeof ym !== 'undefined') {
                ym(XXXXXX, 'reachGoal', 'form_submit'); // Замените XXXXXX на ваш ID Яндекс.Метрики
            }
        });
    }

    // Интерактивная карта (если нужно больше функциональности)
    setTimeout(() => {
        if (typeof ymaps !== 'undefined') {
            // Можно добавить маршруты или другие функции карты
        }
    }, 2000);
});

// Мобильное меню (добавьте в HTML иконку меню для мобильной версии)
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    if (window.innerWidth <= 768) {
        document.querySelector('.header__inner').appendChild(menuBtn);
        
        menuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuBtn.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
}

// Инициализация при загрузке и изменении размера окна
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);
