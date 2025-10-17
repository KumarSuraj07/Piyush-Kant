// Simple Professional Animations - Light Mode Only
document.addEventListener('DOMContentLoaded', function() {
    
    // Simple Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll(`
        .section-title,
        .about-text,
        .about-stats,
        .timeline-item,
        .research-item,
        .research-image-item,
        .flip-card,
        .lab-card,
        .project-card,
        .course-category,
        .opportunity-card,
        .award-card,
        .contact-info
    `);

    animateElements.forEach((el, index) => {
        // Add appropriate animation class
        if (el.classList.contains('section-title')) {
            el.classList.add('fade-in');
        } else if (el.classList.contains('about-text') || el.classList.contains('contact-info')) {
            el.classList.add('slide-left');
        } else if (el.classList.contains('about-stats')) {
            el.classList.add('slide-right');
        } else if (el.classList.contains('timeline-item')) {
            // Timeline items have their own animation
        } else {
            el.classList.add('fade-in');
        }

        // Add stagger effect for grouped items
        if (el.classList.contains('research-item') || 
            el.classList.contains('research-image-item') ||
            el.classList.contains('flip-card') ||
            el.classList.contains('lab-card') ||
            el.classList.contains('project-card') ||
            el.classList.contains('course-category') ||
            el.classList.contains('timeline-item')) {
            el.classList.add('stagger-item');
        }

        // Add hover effects
        if (!el.classList.contains('section-title') && 
            !el.classList.contains('about-text') && 
            !el.classList.contains('about-stats') &&
            !el.classList.contains('contact-info') &&
            !el.classList.contains('timeline-item')) {
            el.classList.add('card-hover');
        }

        observer.observe(el);
    });



    // Smooth scroll for navigation
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

    // Simple navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
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
        document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.classList.contains('dropdown-toggle')) {
                    e.preventDefault();
                    const dropdown = link.parentElement;
                    dropdown.classList.toggle('active');
                } else {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // Simple counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (element) => {
        const target = parseInt(element.textContent.replace('+', ''));
        const increment = target / 30;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 50);
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

    // Flip card click functionality
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });

    // Update timeline structure
    const educationTimeline = document.querySelector('.education-timeline');
    const experienceTimeline = document.querySelector('.experience-timeline');
    
    [educationTimeline, experienceTimeline].forEach(timeline => {
        if (timeline) {
            timeline.classList.add('timeline-container');
            
            // Add progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'timeline-progress';
            timeline.appendChild(progressBar);
            
            // Update items
            const items = timeline.querySelectorAll('.education-item, .experience-item');
            items.forEach((item, index) => {
                item.classList.add('timeline-item');
                
                const content = item.querySelector('.education-content, .experience-content');
                if (content) {
                    content.classList.add('timeline-content');
                    
                    // Update year/period styling
                    const year = content.querySelector('.education-year, .experience-period');
                    if (year) {
                        year.classList.add('timeline-year');
                    }
                }
                
                // Add timeline dot
                const dot = document.createElement('div');
                dot.className = 'timeline-dot';
                dot.style.animationDelay = `${index * 0.3}s`;
                item.appendChild(dot);
            });
        }
    });
});