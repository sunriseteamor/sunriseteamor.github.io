// ===== БУРГЕР-МЕНЮ =====
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Закрываем меню при клике на ссылку
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
    });
});

// ===== ИЗМЕНЕНИЕ ХЕДЕРА ПРИ СКРОЛЛЕ =====
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(5, 11, 20, 0.9)';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.12)';
    } else {
        header.style.background = 'rgba(5, 11, 20, 0.55)';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
    }
});