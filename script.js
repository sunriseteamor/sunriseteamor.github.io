// ============================================================
// АНИМАЦИЯ ПРИ ПРОКРУТКЕ
// ============================================================

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
            const h2 = entry.target.querySelector('h2');
            const p = entry.target.querySelector('p');
            if (h2) {
                h2.style.opacity = '1';
                h2.style.transform = 'translateY(0)';
            }
            if (p) {
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
            }
        }
    });
}, {
    threshold: 0.3
});

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}


// ============================================================
// КНОПКА НАВЕРХ
// ============================================================

const scrollBtn = document.getElementById('scrollTopBtn');

// Проверяем, есть ли кнопка на странице
if (scrollBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// ============================================================
// ЧАСТИЦЫ
// ============================================================

if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#4ebcff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.5,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4ebcff',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}


// ============================================================
// ПАРАЛЛАКС
// ============================================================

window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});


// ============================================================
// 3D-ЭФФЕКТ КАРТОЧЕК
// ============================================================

const featureCards = document.querySelectorAll('.features .card');

featureCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        
        card.style.setProperty('--mouse-x', (x / rect.width * 100) + '%');
        card.style.setProperty('--mouse-y', (y / rect.height * 100) + '%');
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});

// 3D-эффект для карточек на странице контактов (если они есть)
const contactCards = document.querySelectorAll('.contact-card');

contactCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});
// ===== RIPPLE-ЭФФЕКТ НА КНОПКАХ =====

// Функция для создания ripple
function createRipple(event) {
    const button = event.currentTarget;
    
    // Удаляем старые ripple, если есть
    const oldRipple = button.querySelector('.ripple');
    if (oldRipple) {
        oldRipple.remove();
    }
    
    // Создаём ripple элемент
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Определяем размер и позицию
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    
    // Удаляем ripple после анимации
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Добавляем ripple на все кнопки с классами primary и secondary
document.querySelectorAll('.primary, .secondary, .contact-btn, .primary-btn, .btn').forEach(button => {
    button.classList.add('ripple-btn');
    button.addEventListener('click', createRipple);
});

// Также добавляем на кнопки в навигации (но без ripple)
// И на кнопку "Наверх" — тоже можно добавить
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', function(e) {
        // Маленькая анимация при клике
        this.style.transform = 'scale(0.8)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
}
// ============================================================
// СЕТКА НА ФОНЕ (с точками и линиями)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('gridCanvas');
    if (!canvas) {
        console.warn('Canvas #gridCanvas не найден');
        return;
    }
    
    const ctx = canvas.getContext('2d');

    let width, height;
    let dots = [];
    const dotSpacing = 60;
    const dotSize = 2;
    const lineOpacity = 0.15;

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        generateDots();
    }

    function generateDots() {
        dots = [];
        const cols = Math.ceil(width / dotSpacing) + 1;
        const rows = Math.ceil(height / dotSpacing) + 1;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                dots.push({
                    x: col * dotSpacing + (row % 2) * (dotSpacing / 2),
                    y: row * dotSpacing * 0.866,
                    offsetX: (Math.random() - 0.5) * 10,
                    offsetY: (Math.random() - 0.5) * 10,
                    phase: Math.random() * Math.PI * 2
                });
            }
        }
    }

    let time = 0;

    function drawGrid() {
        ctx.clearRect(0, 0, width, height);
        time += 0.003;
        
        const cols = Math.ceil(width / dotSpacing) + 1;
        const rows = Math.ceil(height / dotSpacing) + 1;
        
        // Рисуем линии
        ctx.strokeStyle = `rgba(78, 188, 255, ${lineOpacity})`;
        ctx.lineWidth = 0.5;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const index = row * cols + col;
                if (index >= dots.length) continue;
                
                const dot = dots[index];
                const x = dot.x + Math.sin(time + dot.phase) * 2;
                const y = dot.y + Math.cos(time * 0.7 + dot.phase) * 2;
                
                // Соединяем с правым соседом
                const rightIndex = index + 1;
                if (rightIndex < dots.length && col < cols - 1) {
                    const rightDot = dots[rightIndex];
                    const rx = rightDot.x + Math.sin(time + rightDot.phase) * 2;
                    const ry = rightDot.y + Math.cos(time * 0.7 + rightDot.phase) * 2;
                    
                    const dist = Math.hypot(rx - x, ry - y);
                    if (dist < dotSpacing * 1.2) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(rx, ry);
                        ctx.stroke();
                    }
                }
                
                // Соединяем с нижним соседом
                const downIndex = index + cols;
                if (downIndex < dots.length) {
                    const downDot = dots[downIndex];
                    const dx = downDot.x + Math.sin(time + downDot.phase) * 2;
                    const dy = downDot.y + Math.cos(time * 0.7 + downDot.phase) * 2;
                    
                    const dist = Math.hypot(dx - x, dy - y);
                    if (dist < dotSpacing * 1.2) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(dx, dy);
                        ctx.stroke();
                    }
                }
            }
        }
        
        // Рисуем точки
        dots.forEach((dot) => {
            const x = dot.x + Math.sin(time + dot.phase) * 2;
            const y = dot.y + Math.cos(time * 0.7 + dot.phase) * 2;
            
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(78, 188, 255, 0.5)`;
            ctx.fill();
            
            const glow = ctx.createRadialGradient(x, y, 0, x, y, 12);
            glow.addColorStop(0, `rgba(78, 188, 255, 0.08)`);
            glow.addColorStop(1, `rgba(78, 188, 255, 0)`);
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, 12, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(drawGrid);
    }

    // Запуск
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawGrid();
});