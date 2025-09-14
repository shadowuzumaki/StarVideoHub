const animeList = [
    {
        id: 1,
        title: "Attack on Titan: Final Season",
        genre: "anime",
        year: 2024,
        rating: 9.8,
        poster: "images/Attack on TitanFinal Season.jpg",
        description: "The epic conclusion to humanity's fight against the Titans."
    },
    {
        id: 2,
        title: "Demon Slayer: Infinity Castle",
        genre: "anime",
        year: 2024,
        rating: 9.5,
        poster: "images/Demon SlayerInfinity Castle.jpg",
        description: "Tanjiro faces his greatest challenge in the Infinity Castle."
    },
    {
        id: 3,
        title: "Jujutsu Kaisen: Shibuya Arc",
        genre: "anime",
        year: 2024,
        rating: 9.3,
        poster: "https://via.placeholder.com/300x400/3498db/ffffff?text=Jujutsu+Kaisen",
        description: "The most intense arc of Jujutsu Kaisen comes to life."
    },
    {
        id: 4,
        title: "One Piece: Gear 5 Saga",
        genre: "anime",
        year: 2024,
        rating: 9.7,
        poster: "https://via.placeholder.com/300x400/e74c3c/ffffff?text=One+Piece",
        description: "Luffy unleashes his ultimate power in this epic saga."
    }
];

const comingSoonList = [
    {
        id: 1,
        title: "Avengers: Secret Wars",
        genre: "action",
        releaseDate: "May 2026",
        poster: "images/Avengers Secret Wars.jpg",
        description: "The ultimate Marvel crossover event that will change everything."
    },
    {
        id: 2,
        title: "Avatar 3: The Seed Bearer",
        genre: "scifi",
        releaseDate: "December 2025",
        poster: "images/Avatar 3 The Seed Bearer.jpg",
        description: "Jake Sully's family faces new threats on Pandora."
    },
    {
        id: 3,
        title: "The Batman 2",
        genre: "action",
        releaseDate: "October 2025",
        poster: "images/The Batman 2.jpg",
        description: "The Dark Knight returns to face his greatest enemy yet."
    },
    {
        id: 4,
        title: "Dune: Part Three",
        genre: "scifi",
        releaseDate: "November 2026",
        poster: "images/Dune Part Three.jpg",
        description: "Paul Atreides' journey reaches its epic conclusion."
    }
];

const movies = [
    {
        id: 1,
        title: "Shadow Force",
        genre: "action",
        year: 2025,
        rating: 9.5,
        poster: "images/3797 Shadow Force 2025.jpg",
        movie: "movies/Shadow Force.mkv",
        description: "An elite team of operatives must stop a global threat in this high-octane action thriller."
    },
    {
        id: 2,
        title: "Sisu",
        genre: "action",
        year: 2023,
        rating: 7.8,
        poster: "images/3798 Sisu 2023.jpg",
        movie: "movies/Sisu.mp4",
        description: "A former special forces operative must fight his way through enemy territory in this gritty war film."
    },
    {
        id: 3,
        title: "The Fantastic Four: First Steps",
        genre: "scifi",
        year: 2025,
        rating: 8.2,
        poster: "images/3804 The Fantastic Four First Steps 2025 Hindi (Cleaned) 480p HDRip x264.jpg",
        movie: "https://drive.google.com/file/d/1fKLnKFc8i4dUE22RlF1dnS336tQVFLim/view?usp=drive_link",
        description: "Marvel's first family begins their incredible journey as they gain amazing powers and face cosmic threats."
    },
    {
        id: 4,
        title: "Thunderbolts",
        genre: "action",
        year: 2025,
        rating: 8.7,
        poster: "images/3508 Thunderbolts 2025.jpg",
        movie: "movies/Thunderbolts 2025.mkv",
        description: "A team of reformed villains must work together to save the world in this explosive Marvel adventure."
    },
    {
        id: 5,
        title: "King Kong is Coming Back",
        genre: "action.Fight",
        year: 2024,
        rating: 8.0,
        poster: "images/3792 King Kong is Coming Back 2024 www.moviespapa..jpg",
        movie: "",
        description: "The legendary giant ape returns in this spectacular action adventure with groundbreaking visual effects."
    },
    {
        id: 6,
        title: "Vash: Level 2",
        genre: "horror",
        year: 2025,
        rating: 8.3,
        poster: "images/3794 Vash.Level.2.2025.4.webp",
        movie: "movies/Vash.Level.2.2025.mkv",
        description: "A terrifying supernatural horror sequel where evil forces reach new levels of darkness."
    },
    {
        id: 7,
        title: "Akshardham: Operation Vajra Shakti",
        genre: "action",
        year: 2025,
        rating: 8.8,
        poster: "images/3795 Akshardham Operation Vajra.Shakti.jpg",
        movie: "movies/Akshardham Operation Vajra.Shakti.mkv",
        description: "A patriotic action thriller based on true events showcasing India's counter-terrorism operations."
    },
    {
        id: 8,
        title: "Param Sundari",
        genre: "drama",
        year: 2025,
        rating: 7.8,
        poster: "images/3796 Param Sundari 2025 Hindi (Cleaned) 480p HQ HDTC x264.mkv.mp4 at Streamtape.com.jpg",
        movie: "movies/Param Sundari 2025.mp4",
        description: "A beautiful romantic drama exploring love, sacrifice, and tradition in modern India."
    },
    {
        id: 9,
        title: "Hello Mummy",
        genre: "comedy",
        year: 2025,
        rating: 7.6,
        poster: "images/3802 Hello Mummy..webp",
        movie: "https://drive.google.com/file/d/1VFI4MSbk0wXskYoiOmWXVly6GgRo-1X3/view?usp=drive_link",
        description: "A hilarious family comedy where a mother's ghost returns to help her dysfunctional family."
    },
    {
        id: 10,
        title: "Nocturnal",
        genre: "thriller",
        year: 2025,
        rating: 8.1,
        poster: "images/3803 Nocturnal..jpg",
        movie: "https://drive.google.com/file/d/1nk6vjjLUckJDEs1jaHDOthvrA9S6rpwO/view?usp=drive_link",
        description: "A dark psychological thriller that unfolds during one terrifying night in the city."
    },
    {
        id: 11,
        title: "Lokah: Chapter 1 - Chandra",
        genre: "drama",
        year: 2025,
        rating: 8.5,
        poster: "images/3805 Lokah Chapter 1 Chandra 2025 Hindi (Cleaned) 480p HQ HDTC x264.jpg",
        movie: "https://drive.google.com/file/d/1nfw4FiavTaMvZQFTBKNrohw1echXFhKu/view?usp=drive_link",
        description: "An epic fantasy drama beginning the legendary saga of Chandra in the mystical world of Lokah."
    },
    {
        id: 12,
        title: "Maa Jaye",
        genre: "drama",
        year: 2025,
        rating: 7.8,
        poster: "images/3799 Maa.Jaye.2025.480p.HDCAM..jpg",
        movie: "movies/Maa.Jaye.mkv",
        description: "An emotional family drama exploring the bond between a mother and her children across generations."
    },
    {
        id: 13,
        title: "Yeh Hai Mera Watan",
        genre: "drama",
        year: 2025,
        rating: 8.2,
        poster: "images/3801 Yeh Hai Mera Watan 2025.jpg",
        movie: "https://drive.google.com/file/d/1Ar0seLwJudNags0K_AjOiqtom1vwv9hs/view?usp=drive_link",
        description: "A patriotic drama celebrating the spirit of nationalism and sacrifice for one's country."
    },
    {
        id: 14,
        title: "Mukk Gyi Feem Dabbi Cho Yaaro",
        genre: "comedy",
        year: 2025,
        rating: 7.4,
        poster: "images/3800 Mukk Gyi Feem Dabbi Cho Yaaro 2025.jpg",
        movie: "https://drive.google.com/file/d/15Ht-OjN_6eWzDtS_RB8p1XEKPUO_ijxZ/view?usp=sharing",
        description: "A hilarious Punjabi comedy about friendship, dreams, and the unexpected twists of life."
    },
    {
        id: 15,
        title: "The Beekeeper",
        genre: "action",
        year: 2024,
        rating: 6.4,
        poster: "images/1518 The Beekeeper (2024).jpg",
        movie: "movies/The Beekeeper.mp4",
        description: "A man's campaign for vengeance takes on national stakes after he is revealed to be a former operative."
    },
    {
        id: 16,
        title: "Red One",
        genre: "action",
        year: 2024,
        rating: 6.7,
        poster: "images/3028 Red One 2024.jpg",
        movie: "movies/Red One.mp4",
        description: "After Santa Claus is kidnapped, the North Pole's Head of Security must team up with a bounty hunter."
    },
    {
        id: 17,
        title: "Agni",
        genre: "action",
        year: 2024,
        rating: 6.1,
        poster: "images/3119 Agni 2024.jpg",
        movie: "movies/Agni.mp4",
        description: "A firefighter and his police officer brother-in-law must put aside their differences to battle a massive fire."
    },
    {
        id: 18,
        title: "Marco",
        genre: "action",
        year: 2024,
        rating: 7.2,
        poster: "images/3306 Marco 2024 Dual.jpg",
        movie: "movies/Marco.mp4",
        description: "A young man seeks revenge against those who wronged his family in this intense action thriller."
    },
    {
        id: 19,
        title: "Chhaava",
        genre: "biography",
        year: 2024,
        rating: 8.1,
        poster: "images/3308 Chhaava.jpg",
        movie: "movies/Chhaava.mp4",
        description: "The story of Maratha warrior king Sambhaji Maharaj, son of the great Chhatrapati Shivaji Maharaj."
    },
    {
        id: 20,
        title: "Captain America",
        genre: "action",
        year: 2025,
        rating: 8.5,
        poster: "images/3309 Captain America.jpg",
        movie: "movies/Captain America.mp4",
        description: "The First Avenger returns in a new adventure to protect freedom and justice."
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
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
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
            if (window.currentMovie.movie.includes('drive.google.com')) {
                window.open(window.currentMovie.movie, '_blank');
            } else {
                openVideoPlayer(window.currentMovie);
            }
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
            window.location.href = 'page2.html';
        }, 600);
    });
    
    // Add god effects to hero buttons
    document.querySelectorAll('.hero-buttons .btn-primary, .hero-buttons .btn-secondary').forEach(btn => {
        btn.addEventListener('click', function() {
            window.godAnimations.lightning();
            window.godAnimations.burst(this.offsetLeft + this.offsetWidth/2, this.offsetTop + this.offsetHeight/2, 'magic');
        });
    });
    
    // Add matrix effect on logo click
    document.querySelector('.logo').addEventListener('click', function() {
        window.godAnimations.matrix();
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
            <div class="poster-container">
                <img src="${movie.poster}" 
                     alt="${movie.title} movie poster" 
                     class="movie-poster loading-shimmer"
                     onerror="handleImageError(this)"
                     onload="this.classList.remove('loading-shimmer'); this.classList.add('loaded');"
                     loading="lazy">
                <div class="poster-overlay">
                    <button class="overlay-watch-btn">▶ WATCH NOW</button>
                </div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                <p class="movie-year">${movie.year}</p>
                <div class="movie-rating">
                    <span>⭐</span>
                    <span>${movie.rating}</span>
                </div>
            </div>
        `;
        
        movieCard.addEventListener('click', () => openModal(movie));
        
        const overlayWatchBtn = movieCard.querySelector('.overlay-watch-btn');
        overlayWatchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (movie.movie.includes('drive.google.com')) {
                window.open(movie.movie, '_blank');
            } else {
                openVideoPlayer(movie);
            }
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
        // Simulate login
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
        // Simulate registration
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
    // Decode the JWT token
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    
    // Create user object from Google data
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
        // Exchange code for access token (requires backend)
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
        // Exchange code for access token (requires backend)
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
    
    // Modify watch button for anime
    const watchBtn = document.getElementById('watchNowBtn');
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