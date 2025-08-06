 
        // Smooth scrolling
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

        // Scroll progress indicator
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            const progressBar = document.querySelector('.scroll-indicator');
            progressBar.style.transform = `scaleX(${scrollPercent})`;
        });

        // Intersection Observer for fade-in animations
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

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Particle animation
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        createParticles();

        // Header background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.9)';
            }
        });

        // Project card hover effects
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Skill card interactions
        document.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', function() {
                const icon = this.querySelector('.skill-icon');
                icon.style.transform = 'scale(1.2) rotate(360deg)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }, 500);
            });
        });

        // Contact form handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const button = this.querySelector('.cta-button');
            const originalText = button.textContent;
            button.textContent = 'Gönderiliyor...';
            button.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            setTimeout(() => {
                button.textContent = 'Gönderildi! ✓';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
                    this.reset();
                }, 2000);
            }, 1500);
        });

        // Logo click animation
        document.querySelector('.logo').addEventListener('click', () => {
            document.querySelector('.hero').scrollIntoView({
                behavior: 'smooth'
            });
        });

        // Add typing effect to hero text
        const heroText = document.querySelector('.hero p');
        const originalText = heroText.textContent;
        heroText.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 1000);

        // Dynamic skill level bars (add to skill cards)
        document.querySelectorAll('.skill-card').forEach((card, index) => {
            const skillLevels = [95, 88, 85, 90, 80, 75];
            const progressBar = document.createElement('div');
            progressBar.style.cssText = `
                width: 100%;
                height: 4px;
                background: rgba(99, 102, 241, 0.2);
                border-radius: 2px;
                margin-top: 1rem;
                overflow: hidden;
            `;
            
            const progress = document.createElement('div');
            progress.style.cssText = `
                height: 100%;
                background: var(--gradient);
                width: 0%;
                border-radius: 2px;
                transition: width 2s ease;
            `;
            
            progressBar.appendChild(progress);
            card.appendChild(progressBar);
            
            // Animate progress bar when card comes into view
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            progress.style.width = skillLevels[index] + '%';
                        }, index * 200);
                    }
                });
            });
            
            skillObserver.observe(card);
        });

        // Mobile menu toggle
        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenu.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = 'rgba(15, 15, 35, 0.95)';
                navLinks.style.padding = '1rem';
                navLinks.style.backdropFilter = 'blur(10px)';
                navLinks.style.borderTop = '1px solid rgba(99, 102, 241, 0.2)';
            }
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });

        // Add hover sound effect simulation (visual feedback)
        function addHoverEffect(elements, className) {
            elements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    element.style.filter = 'brightness(1.1)';
                });
                element.addEventListener('mouseleave', () => {
                    element.style.filter = 'brightness(1)';
                });
            });
        }

        addHoverEffect(document.querySelectorAll('.cta-button, .social-link'), 'hover-glow');

        // Add floating animation to skill icons
        document.querySelectorAll('.skill-icon').forEach((icon, index) => {
            icon.style.animation = `float-icon 3s ease-in-out infinite ${index * 0.2}s`;
        });

        // Add custom CSS for floating icons
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-icon {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);

        // Project card click to expand
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                // Simple modal simulation
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;
                
                const modalContent = document.createElement('div');
                modalContent.style.cssText = `
                    background: var(--card-bg);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(99, 102, 241, 0.3);
                    border-radius: 20px;
                    padding: 2rem;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    transform: scale(0.8);
                    transition: transform 0.3s ease;
                `;
                
                modalContent.innerHTML = `
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">${this.querySelector('.project-title').textContent}</h3>
                    <p style="color: var(--text-gray); margin-bottom: 2rem;">${this.querySelector('.project-description').textContent}</p>
                    <div style="display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem;">
                        ${Array.from(this.querySelectorAll('.tech-tag')).map(tag => tag.outerHTML).join('')}
                    </div>
                    <button style="background: var(--gradient); color: white; border: none; padding: 0.8rem 2rem; border-radius: 25px; cursor: pointer; font-weight: 600;">Kapat</button>
                `;
                
                modal.appendChild(modalContent);
                document.body.appendChild(modal);
                
                setTimeout(() => {
                    modal.style.opacity = '1';
                    modalContent.style.transform = 'scale(1)';
                }, 10);
                
                const closeBtn = modalContent.querySelector('button');
                const closeModal = () => {
                    modal.style.opacity = '0';
                    modalContent.style.transform = 'scale(0.8)';
                    setTimeout(() => document.body.removeChild(modal), 300);
                };
                
                closeBtn.addEventListener('click', closeModal);
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });
            });
        });

        // Add mouse trail effect
        let mouseTrail = [];
        const maxTrailLength = 20;

        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({ x: e.clientX, y: e.clientY });
            
            if (mouseTrail.length > maxTrailLength) {
                mouseTrail.shift();
            }
            
            // Remove old trail elements
            document.querySelectorAll('.mouse-trail').forEach(el => el.remove());
            
            // Create new trail elements
            mouseTrail.forEach((point, index) => {
                const trailElement = document.createElement('div');
                trailElement.className = 'mouse-trail';
                trailElement.style.cssText = `
                    position: fixed;
                    width: ${3 + index * 0.5}px;
                    height: ${3 + index * 0.5}px;
                    background: var(--primary-color);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    opacity: ${(index + 1) / maxTrailLength};
                    left: ${point.x}px;
                    top: ${point.y}px;
                    transform: translate(-50%, -50%);
                `;
                document.body.appendChild(trailElement);
                
                setTimeout(() => trailElement.remove(), 100);
            });
        });

        console.log('🚀 Zift Studio Portfolio loaded successfully!');
   