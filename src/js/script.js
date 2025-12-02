// Smooth scrolling para links da navegação
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

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos elementos
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-item, .contact-form, .contact-info');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(27, 8, 41, 0.98)';
    } else {
        navbar.style.background = 'rgba(27, 8, 41, 0.95)';
    }
});

// Formulário de contato
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    // Simular envio
    setTimeout(() => {
        button.textContent = 'Mensagem Enviada!';
        button.style.background = 'linear-gradient(90deg, #4CAF50, #45a049)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = 'var(--button-gradient)';
            this.reset();
        }, 2000);
    }, 1500);
});

// Efeito parallax sutil no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Adicionar efeito glow aos botões
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 40px rgba(227, 68, 255, 0.6)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 0 20px rgba(227, 68, 255, 0.3)';
    });
});