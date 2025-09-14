const animeList = [
    {
        id: 1,
        title: "Chainsaw Man: Movie",
        genre: "anime",
        year: 2024,
        rating: 9.4,
        poster: "https://via.placeholder.com/300x400/ff69b4/ffffff?text=Chainsaw+Man",
        description: "Denji's story continues in this epic movie adaptation."
    },
    {
        id: 2,
        title: "My Hero Academia: Final War",
        genre: "anime",
        year: 2024,
        rating: 9.2,
        poster: "https://via.placeholder.com/300x400/9b59b6/ffffff?text=My+Hero+Academia",
        description: "The ultimate battle between heroes and villains."
    },
    {
        id: 3,
        title: "Spy x Family: Code White",
        genre: "anime",
        year: 2024,
        rating: 8.9,
        poster: "https://via.placeholder.com/300x400/3498db/ffffff?text=Spy+x+Family",
        description: "The Forger family's most dangerous mission yet."
    },
    {
        id: 4,
        title: "Dragon Ball Super: Super Hero 2",
        genre: "anime",
        year: 2024,
        rating: 9.1,
        poster: "https://via.placeholder.com/300x400/e74c3c/ffffff?text=Dragon+Ball+Super",
        description: "Goku and Vegeta face a new universal threat."
    }
];

const comingSoonList = [
    {
        id: 1,
        title: "Spider-Man 4",
        genre: "action",
        releaseDate: "July 2025",
        poster: "https://via.placeholder.com/300x400/ffd700/000000?text=Spider-Man+4",
        description: "Tom Holland returns as the web-slinger in his biggest adventure yet."
    },
    {
        id: 2,
        title: "Fantastic Four",
        genre: "action",
        releaseDate: "February 2025",
        poster: "https://via.placeholder.com/300x400/4ecdc4/000000?text=Fantastic+Four",
        description: "Marvel's first family finally joins the MCU."
    },
    {
        id: 3,
        title: "Deadpool 3",
        genre: "action",
        releaseDate: "May 2025",
        poster: "https://via.placeholder.com/300x400/333333/ffffff?text=Deadpool+3",
        description: "The Merc with a Mouth breaks into the MCU."
    },
    {
        id: 4,
        title: "Blade",
        genre: "action",
        releaseDate: "September 2025",
        poster: "https://via.placeholder.com/300x400/ff6b6b/ffffff?text=Blade",
        description: "The daywalker returns to hunt vampires in the MCU."
    }
];

const movies = [
    {
        id: 15,
        title: "Yaaran Da Rutbaa",
        genre: "drama",
        year: 2025,
        rating: 8.1,
        poster: "images/3807 Yaaran Da Rutbaa.jpg",
        movie: "https://drive.google.com/file/d/1SD-TiW4T49LGIXfaDA49AEkGUxLy4Qsl/view?usp=drive_link",
        description: "A powerful Punjabi drama about friendship, loyalty, and the bonds that define us."
    },
    {
        id: 16,
        title: "Inspector Zende",
        genre: "action",
        year: 2025,
        rating: 8.3,
        poster: "images/3808 Inspector Zende 2025.jpg",
        movie: "https://drive.google.com/file/d/1oGe9WODxXuBvcxBqzv7Bs070L0v63ICj/view?usp=drive_link",
        description: "A dedicated police officer fights corruption and crime in this intense action thriller."
    },
    {
        id: 17,
        title: "Baaghi 4",
        genre: "action",
        year: 2025,
        rating: 8.7,
        poster: "images/3809 Baaghi 4 2025 Hindi (Cleaned).jpg",
        movie: "https://drive.google.com/file/d/1x4bWpN2ZQBRKHGBhUhc97aTjXieZimbe/view?usp=drive_link",
        description: "The rebellious hero returns with more explosive action and death-defying stunts."
    },
    {
        id: 18,
        title: "The Conjuring: Last Rites",
        genre: "horror",
        year: 2025,
        rating: 8.9,
        poster: "images/3810 The Conjuring Last Rites 2025.jpg",
        movie: "https://drive.google.com/file/d/1-u7tJijmDZY0CWFmh_IYOIOww4vcr29L/view?usp=drive_link",
        description: "The Warrens face their most terrifying case yet in this spine-chilling horror sequel."
    },
    {
        id: 19,
        title: "Locked",
        genre: "thriller",
        year: 2025,
        rating: 7.8,
        poster: "images/3811 Locked 2025 AMZN Dual Audio.jpg",
        movie: "https://drive.google.com/file/d/10pNcWtiB2vtcWYK05vd9TLwtrzehTXrl/view?usp=drive_link",
        description: "A psychological thriller about being trapped with no way out and dark secrets unfolding."
    },
    {
        id: 20,
        title: "Madharaasi",
        genre: "action",
        year: 2025,
        rating: 8.2,
        poster: "images/3812 Madharaasi 2025 Hindi.jpg",
        movie: "https://drive.google.com/file/d/1UDdSnyCrTpx1gi4kVutXBYu2nfzFEPfR/view?usp=drive_link",
        description: "A South Indian action drama featuring intense fight sequences and emotional storytelling."
    },
    {
        id: 21,
        title: "The Bengal Files",
        genre: "thriller",
        year: 2025,
        rating: 8.4,
        poster: "images/3813 The Bengal Files 2025 Hindi.jpg",
        movie: "https://drive.google.com/file/d/1qnz398OcrQjNoMkCLpXr9pWxrmIy52vu/view?usp=drive_link",
        description: "A gripping investigative thriller uncovering dark secrets in the heart of Bengal."
    },
    {
        id: 22,
        title: "Mithde",
        genre: "drama",
        year: 2025,
        rating: 7.9,
        poster: "images/3814 Mithde (2025).jpg",
        movie: "https://drive.google.com/file/d/1jgBiGlP1oXYCUkZomHm29CXugJhN4-as/view?usp=drive_link",
        description: "A heartwarming family drama exploring relationships and the sweetness of life."
    },
    {
        id: 23,
        title: "Qaid: No Way Out",
        genre: "action",
        year: 2025,
        rating: 8.5,
        poster: "images/3815 Qaid No Wayyy Out.jpg",
        movie: "https://drive.google.com/file/d/1aELx1QYildCRo_gKOqkR_HQzXaIRHmXC/view?usp=drive_link",
        description: "An intense prison break thriller where escape seems impossible but hope never dies."
    },
    {
        id: 24,
        title: "Coolie",
        genre: "action",
        year: 2025,
        rating: 8.6,
        poster: "images/3816 Coolie 2025 Dual.jpg",
        movie: "https://drive.google.com/file/d/1YxD5cev88j-WGvxJuWkWNUo8LZVEJXOX/view?usp=drive_link",
        description: "A high-octane action film featuring spectacular stunts and heroic adventures."
    },
    {
        id: 25,
        title: "Ufff Yeh Siyapaa",
        genre: "comedy",
        year: 2025,
        rating: 7.6,
        poster: "images/3817 Ufff Yeh Siyapaa.jpg",
        movie: "https://drive.google.com/file/d/1EwjqBmLCWRR9bGCcweKMtlywrdeKhU08/view?usp=drive_link",
        description: "A hilarious comedy of errors where everything that can go wrong, does go wrong."
    },
    {
        id: 26,
        title: "Mehar",
        genre: "drama",
        year: 2025,
        rating: 8.0,
        poster: "images/3818 Mehar 2025.jpg",
        movie: "https://drive.google.com/file/d/1YViHzb5evsGSYmWRjYxfFVlPEqpB75Kw/view?usp=drive_link",
        description: "A touching drama about love, sacrifice, and the kindness that defines humanity."
    },
    {
        id: 27,
        title: "Top Gear",
        genre: "action",
        year: 2022,
        rating: 8.1,
        poster: "images/3819 Top Gear 2022 Hindi (ORG 5.1).jpg",
        movie: "movies/3819 Top Gear 2022 Hindi (ORG 5.1).mp4",
        description: "High-speed action and adrenaline-pumping car chases in this thrilling adventure."
    },
    {
        id: 28,
        title: "The Bad Guys 2",
        genre: "comedy",
        year: 2025,
        rating: 7.8,
        poster: "images/3820 The Bad Guys 2 Streamtape.com.jpg",
        movie: "movies/3820 The Bad Guys 2 Streamtape.com.mp4",
        description: "The lovable criminals return for more hilarious heists and heartwarming adventures."
    },
    {
        id: 29,
        title: "Mufasa: The Lion King",
        genre: "animation",
        year: 2024,
        rating: 7.1,
        poster: "images/3317 Mufasa The Lion King.jpg",
        movie: "movies/Mufasa The Lion King.mp4",
        description: "The story of the legendary lion king Mufasa and his rise to power in the Pride Lands."
    },
    {
        id: 30,
        title: "Vida Muyarchi",
        genre: "action",
        year: 2025,
        rating: 7.8,
        poster: "images/3318 VidaaMuyarchi 2025.jpg",
        movie: "movies/VidaaMuyarchi.mp4",
        description: "A thrilling action drama about determination and the will to overcome all obstacles."
    },
    {
        id: 31,
        title: "Ghostbusters: Afterlife",
        genre: "comedy",
        year: 2021,
        rating: 7.1,
        poster: "images/3322 Ghostbusters_Afterlife.jpg",
        movie: "movies/Ghostbusters Afterlife.mp4",
        description: "A single mother and her children discover their connection to the original Ghostbusters."
    },
    {
        id: 32,
        title: "Ghost in the Shell",
        genre: "scifi",
        year: 2017,
        rating: 6.3,
        poster: "images/3324 Ghost in the Shell.jpg",
        movie: "movies/Ghost in the Shell.mp4",
        description: "In the near future, Major is the first of her kind: a human saved from a terrible crash."
    },
    {
        id: 33,
        title: "Daaku Maharaaj",
        genre: "action",
        year: 2024,
        rating: 7.6,
        poster: "images/3326 Daaku Maharaaj 2024.jpg",
        movie: "movies/Daaku Maharaaj.mp4",
        description: "A fearless outlaw becomes a legendary figure in this epic action adventure."
    },
    {
        id: 34,
        title: "Viswam",
        genre: "action",
        year: 2024,
        rating: 6.8,
        poster: "images/3332 Viswam.jpg",
        movie: "movies/Viswam.mp4",
        description: "A man must protect his family from dangerous enemies in this high-octane thriller."
    }
];

const loadingScreen = document.querySelector('.loading-screen');
const moviesGrid = document.getElementById('moviesGrid');
const genreFilter = document.getElementById('genreFilter');
const trendingTrack = document.getElementById('trendingTrack');
const movieModal = document.getElementById('movieModal');
const navLinks = document.querySelectorAll('.nav-link');

const FALLBACK_POSTER = './fallback-poster.svg';
const imageCache = new Map();

function handleImageError(img) {
    img.onerror = null;
    img.src = FALLBACK_POSTER;
    img.alt = 'Movie poster unavailable';
    img.classList.add('loaded');
}

function preloadImage(url) {
    if (imageCache.has(url)) {
        return Promise.resolve(imageCache.get(url));
    }
    
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            imageCache.set(url, img);
            resolve(img);
        };
        img.onerror = reject;
        img.src = url;
    });
}

function preloadInitialImages() {
    const initialMovies = movies.slice(0, 6);
    initialMovies.forEach(movie => {
        preloadImage(movie.poster).catch(() => {
            console.warn(`Failed to preload: ${movie.title}`);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    displayMovies(movies);
    displayTrendingMovies();
    displayAnime();
    displayComingSoon();
    
    setTimeout(preloadInitialImages, 1000);
    
    genreFilter.addEventListener('change', filterMovies);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelector('.close-modal').addEventListener('click', closeModal);
    movieModal.addEventListener('click', function(e) {
        if (e.target === movieModal) {
            closeModal();
        }
    });
    
    document.getElementById('watchNowBtn').addEventListener('click', function() {
        if (window.currentMovie) {
            openVideoPlayer(window.currentMovie);
        }
    });
    

    
    initVideoPlayer();
    createFloatingParticles();
    
    // Next Page button functionality with god effects
    document.getElementById('nextPageBtn').addEventListener('click', function() {
        this.style.animation = 'godPulse 0.6s ease-in-out';
        window.godAnimations.explosion(this.offsetLeft + this.offsetWidth/2, this.offsetTop + this.offsetHeight/2);
        window.godAnimations.shake();
        setTimeout(() => {
            this.style.animation = '';
            window.godAnimations.wave();
            window.location.href = 'page4.html';
        }, 600);
    });
    
    // Auth system initialization
    initAuthSystem();
    initProfileSystem();
});

function displayMovies(moviesToShow) {
    moviesGrid.innerHTML = '';
    
    moviesToShow.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" 
                 alt="${movie.title} movie poster" 
                 class="movie-poster loading-shimmer"
                 onerror="handleImageError(this)"
                 onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                 loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">
                    <span>⭐</span>
                    <span>${movie.rating}</span>
                </div>
                <button class="watch-btn">▶ Watch Now</button>
            </div>
        `;
        
        movieCard.addEventListener('click', () => openModal(movie));
        
        const watchBtn = movieCard.querySelector('.watch-btn');
        watchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openVideoPlayer(movie);
        });
        
        moviesGrid.appendChild(movieCard);
    });
}

function filterMovies() {
    const selectedGenre = genreFilter.value;
    
    if (selectedGenre === 'all') {
        displayMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => movie.genre === selectedGenre);
        displayMovies(filteredMovies);
    }
}

function displayTrendingMovies() {
    const trendingMovies = movies.slice(0, 8);
    const allTrendingMovies = [...trendingMovies, ...trendingMovies];
    
    trendingTrack.innerHTML = '';
    
    allTrendingMovies.forEach(movie => {
        const trendingCard = document.createElement('div');
        trendingCard.className = 'trending-card';
        trendingCard.innerHTML = `
            <img src="${movie.poster}" 
                 alt="${movie.title} trending movie poster" 
                 class="trending-poster loading-shimmer"
                 onerror="handleImageError(this)"
                 onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                 loading="lazy">
            <div class="trending-overlay">
                <h4>${movie.title}</h4>
                <p>⭐ ${movie.rating}</p>
            </div>
        `;
        
        trendingCard.addEventListener('click', () => openModal(movie));
        trendingTrack.appendChild(trendingCard);
    });
}

function openModal(movie) {
    const modalPoster = document.getElementById('modalPoster');
    modalPoster.src = movie.poster;
    modalPoster.alt = `${movie.title} movie poster`;
    modalPoster.className = 'modal-poster loading-shimmer';
    modalPoster.onerror = () => handleImageError(modalPoster);
    modalPoster.onload = () => {
        modalPoster.classList.remove('loading-shimmer');
        modalPoster.classList.add('loaded');
    };
    
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalGenre').textContent = `Genre: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}`;
    document.getElementById('modalYear').textContent = `Year: ${movie.year}`;
    document.getElementById('modalRating').textContent = `Rating: ⭐ ${movie.rating}`;
    document.getElementById('modalDescription').textContent = movie.description;
    
    window.currentMovie = movie;
    
    movieModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    movieModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = '#ffd700';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 6 + 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.opacity = Math.random() * 0.8 + 0.2;
        
        particlesContainer.appendChild(particle);
    }
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

function initVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const mainVideo = document.getElementById('mainVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const progressThumb = document.getElementById('progressThumb');
    const timeDisplay = document.getElementById('timeDisplay');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const closePlayer = document.querySelector('.close-player');
    const playerOverlay = document.getElementById('playerOverlay');
    
    let isDragging = false;
    
    closePlayer.addEventListener('click', closeVideoPlayer);
    playPauseBtn.addEventListener('click', togglePlayPause);
    mainVideo.addEventListener('click', togglePlayPause);
    progressBar.addEventListener('mousedown', startDrag);
    progressBar.addEventListener('click', seekVideo);
    volumeBtn.addEventListener('click', toggleMute);
    volumeSlider.addEventListener('input', changeVolume);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    mainVideo.addEventListener('timeupdate', updateProgress);
    mainVideo.addEventListener('loadedmetadata', updateDuration);
    mainVideo.addEventListener('play', () => {
        playPauseBtn.textContent = '⏸';
        playerOverlay.classList.remove('show');
    });
    mainVideo.addEventListener('pause', () => {
        playPauseBtn.textContent = '▶';
        playerOverlay.classList.add('show');
    });
    
    document.addEventListener('keydown', handleKeyboard);
    
    function togglePlayPause() {
        if (mainVideo.paused) {
            mainVideo.play();
        } else {
            mainVideo.pause();
        }
    }
    
    function startDrag(e) {
        isDragging = true;
        seekVideo(e);
        document.addEventListener('mousemove', seekVideo);
        document.addEventListener('mouseup', stopDrag);
    }
    
    function stopDrag() {
        isDragging = false;
        document.removeEventListener('mousemove', seekVideo);
        document.removeEventListener('mouseup', stopDrag);
    }
    
    function seekVideo(e) {
        if (!isDragging && e.type !== 'click') return;
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const seekTime = percent * mainVideo.duration;
        mainVideo.currentTime = seekTime;
    }
    
    function updateProgress() {
        let percent = 0;
        if (mainVideo.duration && !isNaN(mainVideo.duration) && mainVideo.duration > 0) {
            percent = (mainVideo.currentTime / mainVideo.duration) * 100;
        }
        progressFill.style.width = percent + '%';
        progressThumb.style.left = percent + '%';
    }
    
    function updateDuration() {
        timeDisplay.textContent = `${formatTime(mainVideo.currentTime)} / ${formatTime(mainVideo.duration)}`;
    }
    
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    function toggleMute() {
        mainVideo.muted = !mainVideo.muted;
        volumeBtn.textContent = mainVideo.muted ? '🔇' : '🔊';
        volumeSlider.value = mainVideo.muted ? 0 : mainVideo.volume * 100;
    }
    
    function changeVolume() {
        mainVideo.volume = volumeSlider.value / 100;
        mainVideo.muted = false;
        volumeBtn.textContent = mainVideo.volume === 0 ? '🔇' : '🔊';
    }
    
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            videoPlayer.requestFullscreen();
            fullscreenBtn.textContent = '⛶';
        } else {
            document.exitFullscreen();
            fullscreenBtn.textContent = '⛶';
        }
    }
    
    function handleKeyboard(e) {
        if (videoPlayer.style.display === 'none') return;
        
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowLeft':
                mainVideo.currentTime -= 10;
                break;
            case 'ArrowRight':
                mainVideo.currentTime += 10;
                break;
            case 'ArrowUp':
                e.preventDefault();
                mainVideo.volume = Math.min(1, mainVideo.volume + 0.1);
                volumeSlider.value = mainVideo.volume * 100;
                break;
            case 'ArrowDown':
                e.preventDefault();
                mainVideo.volume = Math.max(0, mainVideo.volume - 0.1);
                volumeSlider.value = mainVideo.volume * 100;
                break;
            case 'Escape':
                closeVideoPlayer();
                break;
        }
    }
}

function openVideoPlayer(movie) {
    const videoPlayer = document.getElementById('videoPlayer');
    const mainVideo = document.getElementById('mainVideo');
    const playerOverlay = document.getElementById('playerOverlay');
    const playerTitle = document.getElementById('playerTitle');
    
    mainVideo.src = movie.movie;
    playerTitle.textContent = movie.title;
    
    videoPlayer.style.display = 'block';
    setTimeout(() => {
        videoPlayer.classList.add('active');
    }, 10);
    
    playerOverlay.classList.add('show');
    closeModal();
    document.body.style.overflow = 'hidden';
}

function closeVideoPlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    const mainVideo = document.getElementById('mainVideo');
    
    videoPlayer.classList.remove('active');
    setTimeout(() => {
        videoPlayer.style.display = 'none';
        mainVideo.pause();
        mainVideo.src = '';
    }, 400);
    
    document.body.style.overflow = 'auto';
}

// Auth System
function initAuthSystem() {
    const loginBtn = document.getElementById('loginBtn');
    const authModal = document.getElementById('authModal');
    const closeAuth = document.querySelector('.close-auth');
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    loginBtn.addEventListener('click', () => {
        authModal.style.display = 'block';
        setTimeout(() => authModal.classList.add('active'), 10);
    });
    
    closeAuth.addEventListener('click', closeAuthModal);
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) closeAuthModal();
    });
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.dataset.tab;
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (tabType === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
            }
        });
    });
    
    document.getElementById('loginSubmit').addEventListener('click', handleLogin);
    document.getElementById('registerSubmit').addEventListener('click', handleRegister);
    
    // Real OAuth login buttons
    document.getElementById('githubLogin').addEventListener('click', () => initiateGitHubLogin());
    document.getElementById('discordLogin').addEventListener('click', () => initiateDiscordLogin());
    document.getElementById('githubRegister').addEventListener('click', () => initiateGitHubLogin());
    document.getElementById('discordRegister').addEventListener('click', () => initiateDiscordLogin());
}

function closeAuthModal() {
    const authModal = document.getElementById('authModal');
    authModal.classList.remove('active');
    setTimeout(() => authModal.style.display = 'none', 400);
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (email && password) {
        localStorage.setItem('user', JSON.stringify({
            name: 'John Doe',
            email: email,
            vipLevel: 1,
            moviesWatched: 24,
            hoursWatched: 156,
            avgRating: 8.5
        }));
        
        closeAuthModal();
        updateLoginButton();
        showNotification('Login successful!');
    }
}

function handleRegister() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    if (username && email && password) {
        localStorage.setItem('user', JSON.stringify({
            name: username,
            email: email,
            vipLevel: 1,
            moviesWatched: 0,
            hoursWatched: 0,
            avgRating: 0
        }));
        
        closeAuthModal();
        updateLoginButton();
        showNotification('Registration successful!');
    }
}

// Real Google Sign-In Handler
function handleGoogleLogin(response) {
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    
    const googleUser = {
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
        vipLevel: 2,
        moviesWatched: Math.floor(Math.random() * 50) + 10,
        hoursWatched: Math.floor(Math.random() * 300) + 50,
        avgRating: (Math.random() * 2 + 7).toFixed(1)
    };
    
    localStorage.setItem('user', JSON.stringify(googleUser));
    closeAuthModal();
    updateLoginButton();
    showNotification(`Welcome ${payload.name}!`);
}

// OAuth Configuration
const OAUTH_CONFIG = {
    github: {
        clientId: 'YOUR_GITHUB_CLIENT_ID',
        redirectUri: window.location.origin + '/auth/github/callback',
        scope: 'user:email'
    },
    discord: {
        clientId: 'YOUR_DISCORD_CLIENT_ID',
        redirectUri: window.location.origin + '/auth/discord/callback',
        scope: 'identify email'
    }
};

// GitHub OAuth Login
function initiateGitHubLogin() {
    const params = new URLSearchParams({
        client_id: OAUTH_CONFIG.github.clientId,
        redirect_uri: OAUTH_CONFIG.github.redirectUri,
        scope: OAUTH_CONFIG.github.scope,
        state: generateRandomState()
    });
    
    window.location.href = `https://github.com/login/oauth/authorize?${params}`;
}

// Discord OAuth Login
function initiateDiscordLogin() {
    const params = new URLSearchParams({
        client_id: OAUTH_CONFIG.discord.clientId,
        redirect_uri: OAUTH_CONFIG.discord.redirectUri,
        response_type: 'code',
        scope: OAUTH_CONFIG.discord.scope,
        state: generateRandomState()
    });
    
    window.location.href = `https://discord.com/api/oauth2/authorize?${params}`;
}

// Handle OAuth Callbacks
function handleOAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    
    if (code) {
        if (window.location.pathname.includes('/auth/github/callback')) {
            handleGitHubCallback(code);
        } else if (window.location.pathname.includes('/auth/discord/callback')) {
            handleDiscordCallback(code);
        }
    }
}

// GitHub Callback Handler
async function handleGitHubCallback(code) {
    try {
        const response = await fetch('/api/auth/github', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });
        
        const userData = await response.json();
        
        const githubUser = {
            name: userData.name || userData.login,
            email: userData.email,
            picture: userData.avatar_url,
            vipLevel: 3,
            moviesWatched: Math.floor(Math.random() * 80) + 20,
            hoursWatched: Math.floor(Math.random() * 500) + 100,
            avgRating: (Math.random() * 2 + 7.5).toFixed(1)
        };
        
        localStorage.setItem('user', JSON.stringify(githubUser));
        closeAuthModal();
        updateLoginButton();
        showNotification(`Welcome ${githubUser.name}!`);
        
    } catch (error) {
        console.error('GitHub login error:', error);
        showNotification('GitHub login failed. Please try again.');
    }
}

// Discord Callback Handler
async function handleDiscordCallback(code) {
    try {
        const response = await fetch('/api/auth/discord', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code })
        });
        
        const userData = await response.json();
        
        const discordUser = {
            name: userData.username,
            email: userData.email,
            picture: `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`,
            vipLevel: 2,
            moviesWatched: Math.floor(Math.random() * 60) + 15,
            hoursWatched: Math.floor(Math.random() * 400) + 80,
            avgRating: (Math.random() * 2 + 7).toFixed(1)
        };
        
        localStorage.setItem('user', JSON.stringify(discordUser));
        closeAuthModal();
        updateLoginButton();
        showNotification(`Welcome ${discordUser.name}!`);
        
    } catch (error) {
        console.error('Discord login error:', error);
        showNotification('Discord login failed. Please try again.');
    }
}

// Generate random state for OAuth security
function generateRandomState() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Check for OAuth callback on page load
if (window.location.search.includes('code=')) {
    handleOAuthCallback();
}

// Make handleGoogleLogin globally available
window.handleGoogleLogin = handleGoogleLogin;

// Profile System
function initProfileSystem() {
    const profileModal = document.getElementById('profileModal');
    const closeProfile = document.querySelector('.close-profile');
    const logoutBtn = document.getElementById('logoutBtn');
    
    closeProfile.addEventListener('click', closeProfileModal);
    profileModal.addEventListener('click', (e) => {
        if (e.target === profileModal) closeProfileModal();
    });
    
    logoutBtn.addEventListener('click', handleLogout);
    
    updateLoginButton();
}

function openProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileEmail').textContent = user.email;
        document.querySelector('.stat-item:nth-child(1) .stat-number').textContent = user.moviesWatched;
        document.querySelector('.stat-item:nth-child(2) .stat-number').textContent = user.hoursWatched;
        document.querySelector('.stat-item:nth-child(3) .stat-number').textContent = user.avgRating;
        
        const profileModal = document.getElementById('profileModal');
        profileModal.style.display = 'block';
        setTimeout(() => profileModal.classList.add('active'), 10);
    }
}

function closeProfileModal() {
    const profileModal = document.getElementById('profileModal');
    profileModal.classList.remove('active');
    setTimeout(() => profileModal.style.display = 'none', 400);
}

function handleLogout() {
    localStorage.removeItem('user');
    closeProfileModal();
    updateLoginButton();
    showNotification('Logged out successfully!');
}

function updateLoginButton() {
    const loginBtn = document.getElementById('loginBtn');
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        loginBtn.textContent = user.name;
        loginBtn.onclick = openProfile;
    } else {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = null;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #ffd700, #4ecdc4);
        color: #000;
        padding: 15px 25px;
        border-radius: 15px;
        font-weight: 600;
        z-index: 4000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Display Anime Function
function displayAnime() {
    const animeGrid = document.getElementById('animeGrid');
    if (!animeGrid) return;
    
    animeGrid.innerHTML = '';
    
    animeList.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';
        animeCard.innerHTML = `
            <img src="${anime.poster}" 
                 alt="${anime.title} anime poster" 
                 class="movie-poster loading-shimmer"
                 onerror="handleImageError(this)"
                 onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                 loading="lazy">
            <div class="movie-info">
                <h3 class="movie-title">${anime.title}</h3>
                <p class="movie-genre">Anime</p>
                <p class="movie-year">${anime.year}</p>
                <div class="movie-rating">
                    <span>⭐</span>
                    <span>${anime.rating}</span>
                </div>
                <div class="movie-actions">
                    <button class="watch-btn" onclick="showComingSoonMessage()">🌸 Watch Soon</button>
                </div>
            </div>
        `;
        
        animeCard.addEventListener('click', () => openAnimeModal(anime));
        animeGrid.appendChild(animeCard);
    });
}

// Display Coming Soon Function
function displayComingSoon() {
    const comingSoonGrid = document.getElementById('comingSoonGrid');
    if (!comingSoonGrid) return;
    
    comingSoonGrid.innerHTML = '';
    
    comingSoonList.forEach(movie => {
        const comingSoonCard = document.createElement('div');
        comingSoonCard.className = 'coming-soon-card';
        comingSoonCard.innerHTML = `
            <div style="position: relative;">
                <img src="${movie.poster}" 
                     alt="${movie.title} coming soon poster" 
                     class="coming-soon-poster loading-shimmer"
                     onerror="handleImageError(this)"
                     onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                     loading="lazy">
                <div class="coming-soon-overlay">
                    <div class="coming-soon-badge">🚀 COMING SOON 🚀</div>
                </div>
            </div>
            <div class="coming-soon-info">
                <h3 class="coming-soon-title-card">${movie.title}</h3>
                <p class="coming-soon-date">📅 ${movie.releaseDate}</p>
                <p class="coming-soon-description">${movie.description}</p>
            </div>
        `;
        
        comingSoonCard.addEventListener('click', () => openComingSoonModal(movie));
        comingSoonGrid.appendChild(comingSoonCard);
    });
}

// Open Anime Modal
function openAnimeModal(anime) {
    const modalPoster = document.getElementById('modalPoster');
    modalPoster.src = anime.poster;
    modalPoster.alt = `${anime.title} anime poster`;
    
    document.getElementById('modalTitle').textContent = anime.title;
    document.getElementById('modalGenre').textContent = 'Genre: Anime';
    document.getElementById('modalYear').textContent = `Year: ${anime.year}`;
    document.getElementById('modalRating').textContent = `Rating: ⭐ ${anime.rating}`;
    document.getElementById('modalDescription').textContent = anime.description;
    
    // Hide download button for anime
    const downloadBtn = document.getElementById('downloadBtn');
    const watchBtn = document.getElementById('watchNowBtn');
    downloadBtn.style.display = 'none';
    watchBtn.textContent = '🌸 Coming Soon';
    watchBtn.onclick = showComingSoonMessage;
    
    movieModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open Coming Soon Modal
function openComingSoonModal(movie) {
    const modalPoster = document.getElementById('modalPoster');
    modalPoster.src = movie.poster;
    modalPoster.alt = `${movie.title} coming soon poster`;
    
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalGenre').textContent = `Genre: ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}`;
    document.getElementById('modalYear').textContent = `Release: ${movie.releaseDate}`;
    document.getElementById('modalRating').textContent = '🚀 Coming Soon';
    document.getElementById('modalDescription').textContent = movie.description;
    
    // Hide download button and modify watch button
    const downloadBtn = document.getElementById('downloadBtn');
    const watchBtn = document.getElementById('watchNowBtn');
    downloadBtn.style.display = 'none';
    watchBtn.textContent = '🚀 Notify Me';
    watchBtn.onclick = showNotifyMessage;
    
    movieModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Show Coming Soon Message
function showComingSoonMessage() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #ff69b4, #9b59b6);
        color: #fff;
        padding: 15px 25px;
        border-radius: 15px;
        font-weight: 600;
        z-index: 4000;
        animation: comingSoonPulse 0.6s ease;
        border: 2px solid rgba(255, 105, 180, 0.5);
        box-shadow: 0 10px 30px rgba(255, 105, 180, 0.4);
    `;
    notification.textContent = '🌸 Anime coming soon! Stay tuned!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show Notify Message
function showNotifyMessage() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #ffd700, #ff6b6b);
        color: #000;
        padding: 15px 25px;
        border-radius: 15px;
        font-weight: 600;
        z-index: 4000;
        animation: comingSoonPulse 0.6s ease;
        border: 2px solid rgba(255, 215, 0, 0.5);
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
    `;
    notification.textContent = '🚀 You\'ll be notified when available!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Download Movie Function
function downloadMovie(moviePath, movieTitle) {
    const link = document.createElement('a');
    link.href = moviePath;
    link.download = `${movieTitle}.${moviePath.split('.').pop()}`;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // God-level download animation
    const downloadNotification = document.createElement('div');
    downloadNotification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #e74c3c, #c0392b);
        color: #fff;
        padding: 15px 25px;
        border-radius: 15px;
        font-weight: 600;
        z-index: 4000;
        animation: downloadPulse 0.6s ease;
        border: 2px solid rgba(231, 76, 60, 0.5);
        box-shadow: 0 10px 30px rgba(231, 76, 60, 0.4);
    `;
    downloadNotification.textContent = `Downloading ${movieTitle}...`;
    document.body.appendChild(downloadNotification);
    
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
        downloadNotification.remove();
    }, 3000);
}

// Enhanced Video Player with God-Level Effects
function enhanceVideoPlayer() {
    const mainVideo = document.getElementById('mainVideo');
    const playerContainer = document.querySelector('.player-container');
    
    // Add video loading effects
    mainVideo.addEventListener('loadstart', () => {
        playerContainer.style.filter = 'blur(5px)';
        playerContainer.style.transform = 'perspective(1000px) rotateX(5deg) scale(0.95)';
    });
    
    mainVideo.addEventListener('canplay', () => {
        playerContainer.style.filter = 'blur(0px)';
        playerContainer.style.transform = 'perspective(1000px) rotateX(2deg) scale(1)';
    });
    
    // Add epic video effects
    mainVideo.addEventListener('play', () => {
        playerContainer.style.boxShadow = `
            0 30px 80px rgba(255, 215, 0, 0.6),
            0 0 0 1px rgba(255, 215, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
        `;
    });
    
    mainVideo.addEventListener('pause', () => {
        playerContainer.style.boxShadow = `
            0 30px 80px rgba(255, 215, 0, 0.4),
            0 0 0 1px rgba(255, 215, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `;
    });
}

// Initialize enhanced video player
enhanceVideoPlayer();

setTimeout(() => {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}, 100);