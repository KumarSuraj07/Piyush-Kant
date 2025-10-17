// Framer Motion animations for all sections
document.addEventListener('DOMContentLoaded', function() {
    
    // Hero Section Animations
    const heroContent = document.querySelector('.hero-content');
    const heroName = document.querySelector('.hero-name');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const profileImage = document.querySelector('.profile-image');

    // Animate hero elements on load
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }

    if (profileImage) {
        profileImage.style.opacity = '0';
        profileImage.style.transform = 'scale(0.8) rotate(-10deg)';
        
        setTimeout(() => {
            profileImage.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            profileImage.style.opacity = '1';
            profileImage.style.transform = 'scale(1) rotate(0deg)';
        }, 600);
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Section title animations
                if (element.classList.contains('section-title')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
                
                // About section animations
                if (element.classList.contains('about-text')) {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                }
                
                if (element.classList.contains('about-stats')) {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                }
                
                // Education timeline animations
                if (element.classList.contains('education-item')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
                
                // Experience timeline animations
                if (element.classList.contains('experience-item')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
                
                // Research items animations
                if (element.classList.contains('research-item')) {
                    element.style.transform = 'translateY(0) scale(1)';
                    element.style.opacity = '1';
                }
                
                // Students flip cards animations
                if (element.classList.contains('flip-card')) {
                    element.style.transform = 'translateY(0) rotateY(0deg)';
                    element.style.opacity = '1';
                }
                
                // Labs section animations
                if (element.classList.contains('lab-category')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
                
                // Projects animations
                if (element.classList.contains('project-card')) {
                    element.style.transform = 'translateY(0) scale(1)';
                    element.style.opacity = '1';
                }
                
                // Course category animations
                if (element.classList.contains('course-category')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
                
                // Awards animations
                if (element.classList.contains('award-card')) {
                    element.style.transform = 'translateY(0) scale(1)';
                    element.style.opacity = '1';
                }
                
                // Opportunities animations
                if (element.classList.contains('opportunity-card')) {
                    element.style.transform = 'translateY(0)';
                    element.style.opacity = '1';
                }
                
                // Contact animations
                if (element.classList.contains('contact-info')) {
                    element.style.transform = 'translateX(0)';
                    element.style.opacity = '1';
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const animatableElements = document.querySelectorAll(`
        .section-title,
        .about-text,
        .about-stats,
        .education-item,
        .experience-item,
        .research-item,
        .flip-card,
        .lab-category,
        .project-card,
        .course-category,
        .award-card,
        .opportunity-card,
        .contact-info
    `);

    animatableElements.forEach(el => {
        observer.observe(el);
    });

    // Stagger animations for flip cards
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Smooth scroll for navigation links
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

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Parallax effect for hero background
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroBg.style.transform = `translateY(${rate}px)`;
        });
    }

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-name');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid white';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Floating animation for research images
    const researchImages = document.querySelectorAll('.research-img');
    researchImages.forEach((img, index) => {
        img.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });

    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace('+', ''));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 40);
    };

    // Observe stat numbers for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// CSS animations keyframes (to be added to CSS)
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes slideInFromLeft {
        0% { transform: translateX(-100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideInFromRight {
        0% { transform: translateX(100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes fadeInUp {
        0% { transform: translateY(30px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); opacity: 1; }
    }
`;
document.head.appendChild(style);