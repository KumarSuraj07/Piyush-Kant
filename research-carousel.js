// Research Carousel Functionality
class ResearchCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.totalSlides = this.slides.length;
        this.container = document.querySelector('.carousel-container');
        this.indicators = document.querySelectorAll('.indicator');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.updateCarousel();
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        // Navigation buttons
        document.querySelector('.carousel-btn.prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.carousel-btn.next').addEventListener('click', () => this.nextSlide());
        
        // Indicators
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Pause autoplay on hover
        const carousel = document.querySelector('.research-carousel');
        carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
        carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    updateCarousel() {
        const translateX = -this.currentSlide * 100;
        this.container.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    pauseAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// Projects Carousel Functionality
class ProjectsCarousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.projects-carousel-slide');
        this.totalSlides = this.slides.length;
        this.container = document.querySelector('.projects-carousel-container');
        this.indicators = document.querySelectorAll('.projects-indicator');
        
        if (this.container && this.slides.length > 0) {
            this.init();
        }
    }
    
    init() {
        this.setupEventListeners();
        this.updateCarousel();
        this.startAutoPlay();
    }
    
    setupEventListeners() {
        const prevBtn = document.querySelector('.projects-carousel-btn.prev');
        const nextBtn = document.querySelector('.projects-carousel-btn.next');
        
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        const carousel = document.querySelector('.projects-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
        }
    }
    
    updateCarousel() {
        const translateX = -this.currentSlide * 100;
        this.container.style.transform = `translateX(${translateX}%)`;
        
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.updateCarousel();
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }
    
    pauseAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ResearchCarousel();
    new ProjectsCarousel();
});