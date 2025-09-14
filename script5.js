const movies = [
    {
        id: 81,
        title: "Dhoom Dhaam",
        genre: "action",
        year: 2025,
        rating: 7.2,
        poster: "images/3310 Dhoom Dhaam 2025 NF.jpg",
        movie: "movies/Dhoom Dhaam.mp4",
        description: "High-octane action thriller with spectacular chase sequences and explosive stunts."
    },
    {
        id: 82,
        title: "MAX",
        genre: "action",
        year: 2025,
        rating: 6.8,
        poster: "images/3311 MAX 2025.jpg",
        movie: "movies/MAX.mp4",
        description: "An intense action drama about survival against all odds in extreme conditions."
    },
    {
        id: 83,
        title: "Illti",
        genre: "drama",
        year: 2025,
        rating: 7.1,
        poster: "images/3312 Illti 2025 Punjabi www.moviespapa.cz 480p PreDVD 650MB.jpg",
        movie: "movies/Illti.mp4",
        description: "A powerful Punjabi drama exploring family bonds and traditional values."
    },
    {
        id: 84,
        title: "Sulthan",
        genre: "action",
        year: 2025,
        rating: 7.5,
        poster: "images/3313 Sulthan.jpg",
        movie: "movies/Sulthan.mp4",
        description: "An epic tale of a young man who must lead his father's loyal followers."
    },
    {
        id: 85,
        title: "DEVA",
        genre: "action",
        year: 2025,
        rating: 7.8,
        poster: "images/3314 DEVA.jpg",
        movie: "movies/DEVA.mp4",
        description: "A gripping action thriller about a police officer fighting corruption."
    },
    {
        id: 86,
        title: "Jetty",
        genre: "thriller",
        year: 2022,
        rating: 6.4,
        poster: "images/3315 Jetty (2022) Hindi Dubbed Full Movie Watch Online HD Print Free Download.jpg",
        movie: "movies/Jetty.mp4",
        description: "A suspenseful thriller set against the backdrop of coastal crime."
    },
    {
        id: 87,
        title: "Along With the Gods: The Two Worlds",
        genre: "fantasy",
        year: 2017,
        rating: 7.3,
        poster: "images/3319 Along With the Gods The Two Worlds.jpg",
        movie: "movies/Along With the Gods.mp4",
        description: "A fantasy epic about the afterlife journey of a deceased firefighter."
    },
    {
        id: 88,
        title: "The Skin Painter",
        genre: "thriller",
        year: 2024,
        rating: 6.2,
        poster: "images/3320 The Skin Painter.webp",
        movie: "movies/The Skin Painter.mp4",
        description: "A psychological thriller about an artist with a dark obsession."
    },
    {
        id: 89,
        title: "Total Recall",
        genre: "scifi",
        year: 2012,
        rating: 6.2,
        poster: "images/3321 Total Recall.jpg",
        movie: "movies/Total Recall.mp4",
        description: "A factory worker discovers that his memories of a fantasy vacation are real."
    },
    {
        id: 90,
        title: "The Red Ghost",
        genre: "war",
        year: 2020,
        rating: 6.8,
        poster: "images/3323 The_Red_Ghost_.jpg",
        movie: "movies/The Red Ghost.mp4",
        description: "A World War II drama about a Soviet sniper's legendary exploits."
    },
    {
        id: 91,
        title: "Srikakulam Sherlock Holmes",
        genre: "mystery",
        year: 2024,
        rating: 6.9,
        poster: "images/3325 Srikakulam Sherlock Holmes.jpg",
        movie: "movies/Srikakulam Sherlock Holmes.mp4",
        description: "A detective comedy-drama with a local twist on the classic character."
    },
    {
        id: 92,
        title: "Sector 17",
        genre: "thriller",
        year: 2024,
        rating: 6.7,
        poster: "images/3327 Sector 17 2024.jpg",
        movie: "movies/Sector 17.mp4",
        description: "A tense thriller set in a restricted government facility."
    },
    {
        id: 93,
        title: "Kaushaljis Vs Kaushal",
        genre: "comedy",
        year: 2025,
        rating: 6.5,
        poster: "images/3328 Kaushaljis Vs Kaushal 2025.jpg",
        movie: "movies/Kaushaljis Vs Kaushal.mp4",
        description: "A hilarious comedy about mistaken identities and family confusion."
    },
    {
        id: 94,
        title: "Majhail",
        genre: "drama",
        year: 2025,
        rating: 7.0,
        poster: "images/3329 Majhail 2025.jpg",
        movie: "movies/Majhail.mp4",
        description: "A heartwarming drama about rural life and community bonds."
    },
    {
        id: 95,
        title: "Mere Husband Ki Biwi",
        genre: "comedy",
        year: 2025,
        rating: 6.3,
        poster: "images/3330 Mere Husband Ki Biwi 2025 Hindi.jpg",
        movie: "movies/Mere Husband Ki Biwi.mp4",
        description: "A comedy of errors involving marriage and mistaken relationships."
    },
    {
        id: 96,
        title: "Autumn and the Black Jaguar",
        genre: "adventure",
        year: 2024,
        rating: 6.8,
        poster: "images/3331 Autumn and the Black Jaguar.webp",
        movie: "movies/Autumn and the Black Jaguar.mp4",
        description: "An adventure film about a girl's bond with wildlife in the Amazon."
    },
    {
        id: 97,
        title: "Pixels",
        genre: "comedy",
        year: 2015,
        rating: 5.5,
        poster: "images/3334 Pixels (2015) ORG Hindi Dubbed.png",
        movie: "movies/Pixels.mp4",
        description: "Video game experts are recruited to fight alien invaders based on classic arcade games."
    },
    {
        id: 98,
        title: "Do Khiladi",
        genre: "action",
        year: 2024,
        rating: 6.6,
        poster: "images/3336 Do Khiladi.jpg",
        movie: "movies/Do Khiladi.mp4",
        description: "Two players team up for the ultimate game of survival and strategy."
    },
    {
        id: 99,
        title: "BadAss Ravi Kumar",
        genre: "action",
        year: 2025,
        rating: 6.9,
        poster: "images/3337 BadAss.RaviKumar.2025.720p.HEVC.Hindi.DS4K.WEB.DL.HC.ESub.x264.HDHub4u.Tv.jpg",
        movie: "movies/BadAss Ravi Kumar.mp4",
        description: "An action-packed story of a man fighting against injustice and corruption."
    },
    {
        id: 100,
        title: "East Dragon",
        genre: "action",
        year: 2018,
        rating: 6.1,
        poster: "images/3339 East Dragon 2018 ORG Hindi.png",
        movie: "movies/East Dragon.mp4",
        description: "A martial arts action film featuring spectacular fight sequences."
    },
    {
        id: 101,
        title: "Crazy Lizard",
        genre: "comedy",
        year: 2024,
        rating: 5.8,
        poster: "images/3343 Crazy Lizard.jpg",
        movie: "movies/Crazy Lizard.mp4",
        description: "A wild comedy adventure featuring an unlikely reptilian hero."
    },
    {
        id: 102,
        title: "Warchief",
        genre: "action",
        year: 2024,
        rating: 6.7,
        poster: "images/3344 Warchief 2024.jpg",
        movie: "movies/Warchief.mp4",
        description: "An epic war drama about leadership and sacrifice in ancient times."
    },
    {
        id: 103,
        title: "Raduaa Returns",
        genre: "comedy",
        year: 2024,
        rating: 6.4,
        poster: "images/3345 Raduaa Returns.jpg",
        movie: "movies/Raduaa Returns.mp4",
        description: "The beloved character returns in this hilarious Punjabi comedy sequel."
    },
    {
        id: 104,
        title: "Rakshana",
        genre: "thriller",
        year: 2024,
        rating: 7.1,
        poster: "images/3346 Rakshana 2024.jpg",
        movie: "movies/Rakshana.mp4",
        description: "A gripping thriller about protection and survival against dangerous forces."
    },
    {
        id: 105,
        title: "Sankranthiki Vasthunam",
        genre: "comedy",
        year: 2025,
        rating: 6.8,
        poster: "images/3348 Sankranthiki.Vasthunam.2025.480p..jpg",
        movie: "movies/Sankranthiki Vasthunam.mp4",
        description: "A festive comedy celebrating traditions and family relationships."
    },
    {
        id: 106,
        title: "Outside the Wire",
        genre: "scifi",
        year: 2021,
        rating: 5.4,
        poster: "images/3352 Outside the Wire.jpg",
        movie: "movies/Outside the Wire.mp4",
        description: "A drone pilot teams with an android officer to locate a nuclear device."
    }
];

const loadingScreen = document.querySelector('.loading-screen');
const moviesGrid = document.getElementById('moviesGrid');
const genreFilter = document.getElementById('genreFilter');
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
            if (window.currentMovie.movie.includes('drive.google.com')) {
                window.open(window.currentMovie.movie, '_blank');
            } else {
                openVideoPlayer(window.currentMovie);
            }
        }
    });
    
    initVideoPlayer();
    createFloatingParticles();
    
    // Previous Page button functionality with god effects
    document.getElementById('prevPageBtn').addEventListener('click', function() {
        this.style.animation = 'godPulse 0.6s ease-in-out';
        window.godAnimations.explosion(this.offsetLeft + this.offsetWidth/2, this.offsetTop + this.offsetHeight/2);
        window.godAnimations.shake();
        setTimeout(() => {
            this.style.animation = '';
            window.godAnimations.wave();
            window.location.href = 'page4.html';
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