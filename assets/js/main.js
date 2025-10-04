// Main JavaScript for Portfolio Website
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navigation links
    initSmoothScrolling();

    // Active navigation state based on scroll position
    initActiveNavigation();

    // Intersection Observer for fade-in animations
    initScrollAnimations();

    // Navigation background opacity on scroll
    initNavbarScroll();
});

/**
 * Initialize smooth scrolling for all anchor links
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerOffset = 70; // Height of fixed navbar
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Update active navigation state based on current scroll position
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100; // Offset for better UX
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                current = sectionId;
            }
        });

        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update on scroll with throttling for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial call
    updateActiveNav();
}

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Add staggered animation delay for grid items
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.transitionDelay = `${index * 0.1}s`;
    });
}

/**
 * Handle navbar background opacity on scroll
 */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    function updateNavbarBackground() {
        const scrollY = window.pageYOffset;

        if (scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        }
    }

    // Update on scroll with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateNavbarBackground();
                ticking = false;
            });
            ticking = true;
        }
    });
}

/**
 * Handle external links (open in new tab with security)
 */
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');

    if (link && link.href && link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Allow keyboard navigation for accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

/**
 * Performance optimization: Preload critical resources
 */
function preloadCriticalResources() {
    const criticalImages = [
        // Add any critical images here if needed
    ];

    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadCriticalResources();

/**
 * Error handling for failed resource loads
 */
window.addEventListener('error', function(e) {
    console.warn('Resource failed to load:', e.target.src || e.target.href);
}, true);

/**
 * Contact form handling (if contact form is added in the future)
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Add form submission logic here
            console.log('Contact form submitted');

            // Show success message
            showNotification('Message sent successfully!', 'success');
        });
    }
}

/**
 * Show notification messages
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 1100;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

/**
 * Initialize contact form when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});