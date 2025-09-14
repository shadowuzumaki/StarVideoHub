// God-Level Search System with Cross-Page Functionality
class GodSearchSystem {
    constructor() {
        this.allMovies = [];
        this.searchModal = null;
        this.searchInput = null;
        this.searchResults = null;
        this.isSearchOpen = false;
        this.init();
    }

    init() {
        this.loadAllMovies();
        setTimeout(() => {
            this.setupSearchElements();
            this.bindEvents();
        }, 100);
    }

    loadAllMovies() {
        // Get movies from script.js if available
        if (typeof movies !== 'undefined') {
            const indexMovies = movies.map(movie => ({ ...movie, page: 'index.html' }));
            this.allMovies = [...indexMovies];
        }
        
        // Add additional movies from other pages
        const additionalMovies = [
            { id: 21, title: "Mufasa: The Lion King", genre: "animation", year: 2024, poster: "images/3317 Mufasa The Lion King.jpg", page: "page2.html" },
            { id: 22, title: "Vida Muyarchi", genre: "action", year: 2025, poster: "images/3318 VidaaMuyarchi 2025.jpg", page: "page2.html" },
            { id: 23, title: "Ghostbusters: Afterlife", genre: "comedy", year: 2021, poster: "images/3322 Ghostbusters_Afterlife.jpg", page: "page2.html" },
            { id: 24, title: "Ghost in the Shell", genre: "scifi", year: 2017, poster: "images/3324 Ghost in the Shell.jpg", page: "page2.html" },
            { id: 25, title: "Daaku Maharaaj", genre: "action", year: 2024, poster: "images/3326 Daaku Maharaaj 2024.jpg", page: "page2.html" },
            { id: 26, title: "Viswam", genre: "action", year: 2024, poster: "images/3332 Viswam.jpg", page: "page2.html" },
            { id: 107, title: "Ikko Mikke", genre: "comedy", year: 2024, poster: "images/3307 Ikko Mikke.jpg", page: "page4.html" },
            { id: 108, title: "The Wheel of Time", genre: "fantasy", year: 2024, poster: "images/3354 The Wheel of Time.webp", page: "page4.html" },
            { id: 109, title: "Jarnail The Warrior", genre: "action", year: 2025, poster: "images/3356 Jarnail The Warrior 2025.jpg", page: "page4.html" },
            { id: 110, title: "Jilabi", genre: "comedy", year: 2025, poster: "images/3357 Jilabi (2025) Hindi.jpg", page: "page4.html" },
            { id: 111, title: "Empire State", genre: "action", year: 2013, poster: "images/3358 Empire.State.2013 Dual Audio Hindi [MkvMoviesPoint] 480p BluRay.webp", page: "page4.html" },
            { id: 112, title: "Rekhachithram", genre: "thriller", year: 2025, poster: "images/3359 Rekhachithram-(2025)-Hindi-Dubbed-Movie--480p-[Orgmovies].jpg", page: "page4.html" },
            { id: 113, title: "Laila", genre: "romance", year: 2025, poster: "images/3360 Laila-(2025)-Hindi-HQ-Dubbed-Movie--480p-[Orgmovies].jpg", page: "page4.html" },
            { id: 114, title: "Aghathiyaa", genre: "drama", year: 2025, poster: "images/3361 Aghathiyaa.2025.4.jpg", page: "page4.html" },
            { id: 115, title: "Nadaaniyan", genre: "comedy", year: 2025, poster: "images/3362 Nadaaniyan.2025.480p.Hindi.WEB-DL.ESub.x264-HDHub4u.Ms.jpg", page: "page4.html" },
            { id: 116, title: "Rewind", genre: "scifi", year: 2024, poster: "images/3363 Rewind.2024.jpg", page: "page4.html" },
            { id: 81, title: "Dhoom Dhaam", genre: "action", year: 2025, poster: "images/3310 Dhoom Dhaam 2025 NF.jpg", page: "page5.html" },
            { id: 82, title: "MAX", genre: "action", year: 2025, poster: "images/3311 MAX 2025.jpg", page: "page5.html" },
            { id: 83, title: "Illti", genre: "drama", year: 2025, poster: "images/3312 Illti 2025 Punjabi www.moviespapa.cz 480p PreDVD 650MB.jpg", page: "page5.html" },
            { id: 84, title: "Sulthan", genre: "action", year: 2025, poster: "images/3313 Sulthan.jpg", page: "page5.html" },
            { id: 85, title: "DEVA", genre: "action", year: 2025, poster: "images/3314 DEVA.jpg", page: "page5.html" }
        ];
        
        this.allMovies = [...this.allMovies, ...additionalMovies];
    }

    setupSearchElements() {
        this.searchModal = document.getElementById('searchModal');
        this.searchInput = document.getElementById('searchInput');
        this.searchResults = document.getElementById('searchResults');
        
        if (!this.searchModal || !this.searchInput || !this.searchResults) {
            console.warn('Search elements not found, retrying...');
            setTimeout(() => this.setupSearchElements(), 500);
            return;
        }
        
        // Add display styles
        this.searchModal.style.display = 'none';
    }

    bindEvents() {
        const searchBtn = document.getElementById('searchBtn');
        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggleSearch();
            });
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            this.searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeSearch();
            });
        }

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.closeSearch();
            }
        });
    }

    toggleSearch() {
        if (this.isSearchOpen) {
            this.closeSearch();
        } else {
            this.openSearch();
        }
    }

    openSearch() {
        if (!this.searchModal) return;
        
        const searchBtn = document.getElementById('searchBtn');
        
        this.isSearchOpen = true;
        this.searchModal.style.display = 'block';
        this.searchModal.classList.add('active');
        if (searchBtn) searchBtn.classList.add('active');
        
        // God-level opening effects
        this.triggerOpenEffects();
        
        setTimeout(() => {
            if (this.searchInput) {
                this.searchInput.focus();
            }
        }, 300);
    }

    closeSearch() {
        if (!this.searchModal) return;
        
        const searchBtn = document.getElementById('searchBtn');
        
        // God-level closing effects
        this.triggerCloseEffects();
        
        setTimeout(() => {
            this.isSearchOpen = false;
            this.searchModal.style.display = 'none';
            this.searchModal.classList.remove('active');
            if (searchBtn) searchBtn.classList.remove('active');
            if (this.searchInput) this.searchInput.value = '';
            if (this.searchResults) this.searchResults.innerHTML = '';
        }, 300);
    }

    triggerOpenEffects() {
        // Screen flash
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: radial-gradient(circle, rgba(0,255,0,0.4) 0%, transparent 70%);
            z-index: 9998; pointer-events: none;
            animation: searchFlash 0.6s ease-out;
        `;
        document.body.appendChild(flash);
        
        // Particle explosion
        this.createParticles();
        
        // Screen shake
        document.body.style.animation = 'searchShake 0.4s ease-in-out';
        
        setTimeout(() => {
            flash.remove();
            document.body.style.animation = '';
        }, 600);
    }

    triggerCloseEffects() {
        // Implosion effect
        const implosion = document.createElement('div');
        implosion.style.cssText = `
            position: fixed; top: 50%; left: 50%;
            width: 200px; height: 200px; border-radius: 50%;
            background: radial-gradient(circle, rgba(255,0,0,0.8) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            z-index: 9998; pointer-events: none;
            animation: searchImplosion 0.5s ease-in;
        `;
        document.body.appendChild(implosion);
        
        setTimeout(() => implosion.remove(), 500);
    }

    createParticles() {
        const searchBtn = document.getElementById('searchBtn');
        if (!searchBtn) return;
        
        const rect = searchBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed; left: ${centerX}px; top: ${centerY}px;
                width: 6px; height: 6px; background: #00ff00;
                border-radius: 50%; z-index: 9999; pointer-events: none;
                box-shadow: 0 0 15px #00ff00;
            `;
            
            const angle = (i / 25) * Math.PI * 2;
            const velocity = 80 + Math.random() * 120;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            particle.style.animation = `searchParticle 1.2s ease-out forwards`;
            particle.style.setProperty('--vx', vx + 'px');
            particle.style.setProperty('--vy', vy + 'px');
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1200);
        }
    }

    handleSearch(query) {
        if (!query.trim()) {
            this.searchResults.innerHTML = '';
            return;
        }

        const results = this.allMovies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase()) ||
            movie.genre.toLowerCase().includes(query.toLowerCase()) ||
            movie.year.toString().includes(query)
        );

        this.displayResults(results);
    }

    displayResults(results) {
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="no-results">No movies found</div>';
            return;
        }

        const resultsHTML = results.map(movie => `
            <div class="search-result-item" onclick="godSearch.navigateToMovie('${movie.page}', ${movie.id})">
                <img src="${movie.poster}" alt="${movie.title}" class="result-poster">
                <div class="result-info">
                    <h4 class="result-title">${movie.title}</h4>
                    <p class="result-details">${movie.genre} • ${movie.year}</p>
                    <span class="result-page">Page: ${movie.page.replace('.html', '')}</span>
                </div>
                <div class="result-glow"></div>
            </div>
        `).join('');

        this.searchResults.innerHTML = resultsHTML;
    }

    navigateToMovie(page, movieId) {
        // God-level transition effects
        if (window.godAnimations) {
            window.godAnimations.explosion(window.innerWidth / 2, window.innerHeight / 2);
            window.godAnimations.shake();
        }
        
        this.closeSearch();
        
        setTimeout(() => {
            if (page === 'index.html') {
                window.location.href = 'index.html#movies';
            } else {
                window.location.href = page;
            }
        }, 600);
    }
}

// Add CSS animations
const searchCSS = `
@keyframes searchFlash {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}
@keyframes searchShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
}
@keyframes searchImplosion {
    0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
    50% { transform: translate(-50%, -50%) scale(4); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
}
@keyframes searchParticle {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(var(--vx), var(--vy)) scale(0); opacity: 0; }
}
`;

if (!document.querySelector('#search-effects')) {
    const style = document.createElement('style');
    style.id = 'search-effects';
    style.textContent = searchCSS;
    document.head.appendChild(style);
}

// Initialize search system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.godSearch = new GodSearchSystem();
});