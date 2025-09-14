// ===== GOD-LEVEL ANIMATION SYSTEM =====

class GodAnimations {
    constructor() {
        this.particles = [];
        this.meteors = [];
        this.lightnings = [];
        this.init();
    }

    init() {
        this.createAnimationCanvas();
        this.startAnimationLoop();
        this.addScrollAnimations();
        this.addHoverEffects();
        this.addClickEffects();
        this.createMeteorShower();
        this.createLightningBolts();
    }

    // Create animation canvas for particles
    createAnimationCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'godCanvas';
        canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 1;
        `;
        document.body.appendChild(canvas);
        
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.resizeCanvas();
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // Particle system
    createParticle(x, y, type = 'default') {
        const particle = {
            x: x || Math.random() * this.canvas.width,
            y: y || Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            life: 1,
            decay: Math.random() * 0.02 + 0.005,
            color: type === 'magic' ? `hsl(${Math.random() * 60 + 280}, 100%, 70%)` : 
                   type === 'fire' ? `hsl(${Math.random() * 60 + 10}, 100%, 60%)` :
                   `hsl(${Math.random() * 360}, 70%, 60%)`,
            type: type
        };
        this.particles.push(particle);
    }

    // Meteor shower effect
    createMeteorShower() {
        setInterval(() => {
            if (Math.random() < 0.3) {
                const meteor = {
                    x: Math.random() * this.canvas.width,
                    y: -50,
                    vx: (Math.random() - 0.5) * 4,
                    vy: Math.random() * 8 + 5,
                    size: Math.random() * 4 + 2,
                    life: 1,
                    trail: []
                };
                this.meteors.push(meteor);
            }
        }, 2000);
    }

    // Lightning bolt effect
    createLightningBolts() {
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.createLightning();
            }
        }, 5000);
    }

    createLightning() {
        const lightning = {
            points: [],
            life: 1,
            decay: 0.05
        };
        
        let x = Math.random() * this.canvas.width;
        let y = 0;
        lightning.points.push({x, y});
        
        for (let i = 0; i < 20; i++) {
            x += (Math.random() - 0.5) * 100;
            y += Math.random() * 50 + 20;
            lightning.points.push({x, y});
        }
        
        this.lightnings.push(lightning);
    }

    // Animation loop
    startAnimationLoop() {
        const animate = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            // Update and draw particles
            this.particles = this.particles.filter(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life -= particle.decay;
                
                if (particle.type === 'magic') {
                    particle.vx += Math.sin(Date.now() * 0.01) * 0.1;
                    particle.vy += Math.cos(Date.now() * 0.01) * 0.1;
                }
                
                this.ctx.save();
                this.ctx.globalAlpha = particle.life;
                this.ctx.fillStyle = particle.color;
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = particle.color;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.restore();
                
                return particle.life > 0;
            });
            
            // Update and draw meteors
            this.meteors = this.meteors.filter(meteor => {
                meteor.trail.push({x: meteor.x, y: meteor.y});
                if (meteor.trail.length > 10) meteor.trail.shift();
                
                meteor.x += meteor.vx;
                meteor.y += meteor.vy;
                meteor.life -= 0.01;
                
                // Draw trail
                this.ctx.save();
                this.ctx.strokeStyle = '#fff';
                this.ctx.lineWidth = meteor.size;
                this.ctx.shadowBlur = 20;
                this.ctx.shadowColor = '#8a2be2';
                this.ctx.beginPath();
                meteor.trail.forEach((point, i) => {
                    if (i === 0) this.ctx.moveTo(point.x, point.y);
                    else this.ctx.lineTo(point.x, point.y);
                });
                this.ctx.stroke();
                this.ctx.restore();
                
                return meteor.y < this.canvas.height + 100 && meteor.life > 0;
            });
            
            // Update and draw lightning
            this.lightnings = this.lightnings.filter(lightning => {
                lightning.life -= lightning.decay;
                
                this.ctx.save();
                this.ctx.globalAlpha = lightning.life;
                this.ctx.strokeStyle = '#fff';
                this.ctx.lineWidth = 3;
                this.ctx.shadowBlur = 30;
                this.ctx.shadowColor = '#00ffff';
                this.ctx.beginPath();
                lightning.points.forEach((point, i) => {
                    if (i === 0) this.ctx.moveTo(point.x, point.y);
                    else this.ctx.lineTo(point.x, point.y);
                });
                this.ctx.stroke();
                this.ctx.restore();
                
                return lightning.life > 0;
            });
            
            requestAnimationFrame(animate);
        };
        animate();
    }

    // Scroll animations
    addScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.createParticleBurst(
                        entry.boundingClientRect.left + entry.boundingClientRect.width / 2,
                        entry.boundingClientRect.top + entry.boundingClientRect.height / 2,
                        'magic'
                    );
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.movie-card, .section-title, .hero-title').forEach(el => {
            observer.observe(el);
        });
    }

    // Hover effects
    addHoverEffects() {
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches('.movie-card, .btn-primary, .btn-secondary, .watch-btn')) {
                this.createParticleBurst(e.pageX, e.pageY, 'magic');
                this.addElementGlow(e.target);
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.matches('.movie-card, .btn-primary, .btn-secondary, .watch-btn')) {
                this.removeElementGlow(e.target);
            }
        });
    }

    // Click effects
    addClickEffects() {
        document.addEventListener('click', (e) => {
            this.createExplosion(e.pageX, e.pageY);
            this.createRipple(e.pageX, e.pageY);
        });
    }

    // Particle burst effect
    createParticleBurst(x, y, type = 'default') {
        for (let i = 0; i < 15; i++) {
            this.createParticle(x, y, type);
        }
    }

    // Explosion effect
    createExplosion(x, y) {
        for (let i = 0; i < 30; i++) {
            const particle = {
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.5) * 20,
                size: Math.random() * 5 + 2,
                life: 1,
                decay: 0.02,
                color: `hsl(${Math.random() * 60 + 280}, 100%, 70%)`
            };
            this.particles.push(particle);
        }
    }

    // Ripple effect
    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${x - 25}px;
            top: ${y - 25}px;
            width: 50px;
            height: 50px;
            border: 2px solid #8a2be2;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: rippleExpand 0.6s ease-out forwards;
        `;
        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    // Element glow effects
    addElementGlow(element) {
        element.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.8), 0 0 60px rgba(138, 43, 226, 0.4)';
        element.style.transform = 'scale(1.05) translateY(-5px)';
        element.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    }

    removeElementGlow(element) {
        element.style.boxShadow = '';
        element.style.transform = '';
    }

    // Screen shake effect
    screenShake(duration = 500) {
        const body = document.body;
        body.style.animation = `screenShake ${duration}ms ease-in-out`;
        setTimeout(() => {
            body.style.animation = '';
        }, duration);
    }

    // Color wave effect
    colorWave() {
        const wave = document.createElement('div');
        wave.style.cssText = `
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(138, 43, 226, 0.3) 50%, 
                transparent 100%);
            pointer-events: none;
            z-index: 9998;
            animation: colorWaveMove 2s ease-in-out forwards;
        `;
        document.body.appendChild(wave);
        setTimeout(() => wave.remove(), 2000);
    }

    // Matrix rain effect
    matrixRain() {
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const drops = [];
        
        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('div');
            drop.textContent = chars[Math.floor(Math.random() * chars.length)];
            drop.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -20px;
                color: #0f0;
                font-family: monospace;
                font-size: 16px;
                pointer-events: none;
                z-index: 1;
                animation: matrixFall ${Math.random() * 3 + 2}s linear forwards;
            `;
            document.body.appendChild(drop);
            drops.push(drop);
        }
        
        setTimeout(() => {
            drops.forEach(drop => drop.remove());
        }, 5000);
    }
}

// Initialize god animations
const godAnimations = new GodAnimations();

// Export functions for global use
window.godAnimations = {
    shake: () => godAnimations.screenShake(),
    wave: () => godAnimations.colorWave(),
    matrix: () => godAnimations.matrixRain(),
    burst: (x, y, type) => godAnimations.createParticleBurst(x, y, type),
    explosion: (x, y) => godAnimations.createExplosion(x, y),
    lightning: () => godAnimations.createLightning()
};