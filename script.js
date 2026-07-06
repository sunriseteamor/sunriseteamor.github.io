const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(card);
});

// Наблюдаем за секцией "О подразделении"
const aboutSection = document.querySelector('.about');

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('h2').style.opacity = '1';
            entry.target.querySelector('h2').style.transform = 'translateY(0)';
            entry.target.querySelector('p').style.opacity = '1';
            entry.target.querySelector('p').style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.3
});

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}