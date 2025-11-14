/* =============================================================================
   PORTFOLIO ENHANCEMENTS - Interactive Features
   Author: Amr Salem
   ============================================================================= */

// =============================================================================
// DARK MODE TOGGLE
// =============================================================================

const initDarkMode = () => {
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);

    // Update icon based on current theme
    updateThemeIcon(currentTheme);

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            // Add ripple effect
            createRipple(themeToggle);
        });
    }
};

const updateThemeIcon = (theme) => {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
};

const createRipple = (button) => {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: 100px;
        height: 100px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple 0.6s;
        opacity: 0;
    `;
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
};

// =============================================================================
// TYPING ANIMATION
// =============================================================================

const initTypingAnimation = () => {
    const subtitleElement = document.querySelector('.hero .subtitle');
    if (!subtitleElement) return;

    const roles = [
        'Senior Python Engineer',
        'Data Science Specialist',
        'Machine Learning Engineer',
        'IoT Solutions Architect',
        'Data Analytics Expert'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const type = () => {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        subtitleElement.innerHTML = `<span class="typing-text">${currentRole.substring(0, charIndex)}</span>`;

        let timeOut = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentRole.length) {
            timeOut = pauseTime;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            timeOut = 500;
        }

        setTimeout(type, timeOut);
    };

    // Start typing animation after a short delay
    setTimeout(type, 1000);
};

// =============================================================================
// PROJECT FILTERING
// =============================================================================

const initProjectFiltering = () => {
    const projectsSection = document.querySelector('#projects .project-grid');
    if (!projectsSection) return;

    // Create filter buttons
    const filters = {
        'all': 'All Projects',
        'ml': 'Machine Learning',
        'dl': 'Deep Learning',
        'iot': 'IoT',
        'analytics': 'Analytics',
        'nlp': 'NLP'
    };

    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';

    Object.entries(filters).forEach(([key, label]) => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${key === 'all' ? 'active' : ''}`;
        btn.dataset.filter = key;

        const projectCount = key === 'all'
            ? document.querySelectorAll('.project-card').length
            : document.querySelectorAll(`.project-card[data-category*="${key}"]`).length;

        btn.innerHTML = `
            <i class="fas fa-${getFilterIcon(key)}"></i>
            <span>${label}</span>
            <span class="count">${projectCount}</span>
        `;

        btn.addEventListener('click', () => filterProjects(key, btn));
        filterContainer.appendChild(btn);
    });

    projectsSection.parentNode.insertBefore(filterContainer, projectsSection);
};

const getFilterIcon = (category) => {
    const icons = {
        'all': 'th',
        'ml': 'robot',
        'dl': 'brain',
        'iot': 'microchip',
        'analytics': 'chart-line',
        'nlp': 'language'
    };
    return icons[category] || 'folder';
};

const filterProjects = (category, clickedBtn) => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    clickedBtn.classList.add('active');

    // Filter projects
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category?.includes(category)) {
            project.classList.remove('hidden', 'filtered-out');
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'scale(1)';
            }, 10);
        } else {
            project.classList.add('filtered-out');
            setTimeout(() => {
                project.classList.add('hidden');
            }, 400);
        }
    });
};

// =============================================================================
// ENHANCED STATS COUNTER
// =============================================================================

const initStatsCounter = () => {
    let animated = false;

    const animateCounters = () => {
        if (animated) return;

        const statsSection = document.querySelector('.stats');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = counter.textContent;
                const isFloat = target.includes('.');
                const number = parseFloat(target);

                if (!isNaN(number)) {
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            counter.textContent = target;
                            clearInterval(timer);
                        } else {
                            if (isFloat) {
                                counter.textContent = current.toFixed(2);
                            } else {
                                counter.textContent = Math.floor(current) + '+';
                            }
                        }
                    }, 30);
                }
            });
            animated = true;
        }
    };

    window.addEventListener('scroll', animateCounters);
    window.addEventListener('load', animateCounters);
};

// =============================================================================
// LAZY LOADING IMAGES
// =============================================================================

const initLazyLoading = () => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.onload = () => img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        images.forEach(img => img.classList.add('loaded'));
    }
};

// =============================================================================
// ENHANCED SMOOTH SCROLL
// =============================================================================

const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                history.pushState(null, null, href);
            }
        });
    });
};

// =============================================================================
// GITHUB ACTIVITY INTEGRATION (Optional - requires API)
// =============================================================================

const fetchGitHubActivity = async () => {
    const username = 'AmrrSalem'; // Update with actual username
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`);
        const events = await response.json();

        // Process and display recent activity
        const recentActivity = events.slice(0, 5).map(event => ({
            type: event.type,
            repo: event.repo.name,
            date: new Date(event.created_at).toLocaleDateString()
        }));

        console.log('Recent GitHub Activity:', recentActivity);
        // You can add UI to display this data
    } catch (error) {
        console.log('GitHub activity fetch disabled or failed');
    }
};

// =============================================================================
// CONTACT FORM ENHANCEMENT
// =============================================================================

const initContactForm = () => {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Here you would integrate with a form service like Formspree, EmailJS, etc.
        // For now, just simulate submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            submitBtn.style.background = 'var(--success-color)';

            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 2000);
        }, 1500);
    });
};

// =============================================================================
// PERFORMANCE MONITORING
// =============================================================================

const logPerformanceMetrics = () => {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`Page Load Time: ${pageLoadTime}ms`);
            }, 0);
        });
    }
};

// =============================================================================
// KEYBOARD NAVIGATION
// =============================================================================

const initKeyboardNav = () => {
    document.addEventListener('keydown', (e) => {
        // Alt + T: Toggle theme
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            document.getElementById('themeToggle')?.click();
        }

        // Alt + H: Go to top
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
};

// =============================================================================
// INITIALIZE ALL FEATURES
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing portfolio enhancements...');

    initDarkMode();
    initTypingAnimation();
    initProjectFiltering();
    initStatsCounter();
    initLazyLoading();
    initSmoothScroll();
    initContactForm();
    initKeyboardNav();
    logPerformanceMetrics();

    // Optional: Fetch GitHub activity (comment out if not needed)
    // fetchGitHubActivity();

    console.log('✅ All enhancements loaded successfully!');
});

// =============================================================================
// SERVICE WORKER REGISTRATION (for PWA)
// =============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('⚠️ Service Worker registration failed'));
    });
}
