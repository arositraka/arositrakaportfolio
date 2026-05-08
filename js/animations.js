// ==================== TYPING ANIMATION ====================
// À MODIFIER: Ajoute tes spécialités
const typingElement = document.querySelector('.typing');
const specialties = [
    'Systèmes Linux',
    'Administration Réseau',
    'Cybersécurité',
    'Configuration Cisco',
];

let currentSpecialty = 0;
let currentChar = 0;
let isDeleting = false;

function typeAnimation() {
    if (!typingElement) return;

    const specialty = specialties[currentSpecialty];
    
    if (isDeleting) {
        typingElement.textContent = specialty.substring(0, currentChar - 1);
        currentChar--;
    } else {
        typingElement.textContent = specialty.substring(0, currentChar + 1);
        currentChar++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && currentChar === specialty.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentSpecialty = (currentSpecialty + 1) % specialties.length;
        speed = 500;
    }

    setTimeout(typeAnimation, speed);
}

if (typingElement) {
    setTimeout(typeAnimation, 500);
}

// ==================== SCROLL RÉVÉLE ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('skill-progress')) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les éléments
document.querySelectorAll('.project-card, .skill-category, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ==================== ANIMATION DES STATS ====================
const stats = document.querySelectorAll('.stat-number');

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            animateValue(entry.target);
            entry.target.classList.add('animated');
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

function animateValue(element) {
    const finalValue = parseInt(element.textContent);
    const duration = 2000;
    const increment = finalValue / (duration / 16);
    let currentValue = 0;

    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            element.textContent = finalValue;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(currentValue);
        }
    }, 16);
}

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});