const movies = [
    {
        id: 107,
        title: "Ikko Mikke",
        genre: "comedy",
        year: 2024,
        rating: 7.2,
        poster: "images/3307 Ikko Mikke.jpg",
        movie: "movies/Ikko Mikke.mp4",
        description: "A hilarious Punjabi comedy about twin brothers and their misadventures."
    },
    {
        id: 108,
        title: "The Wheel of Time",
        genre: "fantasy",
        year: 2024,
        rating: 7.8,
        poster: "images/3354 The Wheel of Time.webp",
        movie: "movies/The Wheel of Time.mp4",
        description: "Epic fantasy series about a group chosen to face the Dark One."
    },
    {
        id: 109,
        title: "Jarnail The Warrior",
        genre: "action",
        year: 2025,
        rating: 7.5,
        poster: "images/3356 Jarnail The Warrior 2025.jpg",
        movie: "movies/Jarnail The Warrior.mp4",
        description: "An epic tale of a fearless warrior fighting for justice and honor."
    },
    {
        id: 110,
        title: "Jilabi",
        genre: "comedy",
        year: 2025,
        rating: 6.8,
        poster: "images/3357 Jilabi (2025) Hindi.jpg",
        movie: "movies/Jilabi.mp4",
        description: "A sweet comedy about love, family, and traditional Indian sweets."
    },
    {
        id: 111,
        title: "Empire State",
        genre: "action",
        year: 2013,
        rating: 5.2,
        poster: "images/3358 Empire.State.2013 Dual Audio Hindi [MkvMoviesPoint] 480p BluRay.webp",
        movie: "movies/Empire State.mp4",
        description: "Two childhood friends plan to rob an armored car depository."
    },
    {
        id: 112,
        title: "Rekhachithram",
        genre: "thriller",
        year: 2025,
        rating: 6.9,
        poster: "images/3359 Rekhachithram-(2025)-Hindi-Dubbed-Movie--480p-[Orgmovies].jpg",
        movie: "movies/Rekhachithram.mp4",
        description: "A gripping thriller about art, mystery, and hidden secrets."
    },
    {
        id: 113,
        title: "Laila",
        genre: "romance",
        year: 2025,
        rating: 7.1,
        poster: "images/3360 Laila-(2025)-Hindi-HQ-Dubbed-Movie--480p-[Orgmovies].jpg",
        movie: "movies/Laila.mp4",
        description: "A beautiful love story that transcends time and circumstances."
    },
    {
        id: 114,
        title: "Aghathiyaa",
        genre: "drama",
        year: 2025,
        rating: 7.3,
        poster: "images/3361 Aghathiyaa.2025.4.jpg",
        movie: "movies/Aghathiyaa.mp4",
        description: "A powerful drama exploring ancient wisdom and modern challenges."
    },
    {
        id: 115,
        title: "Nadaaniyan",
        genre: "comedy",
        year: 2025,
        rating: 6.7,
        poster: "images/3362 Nadaaniyan.2025.480p.Hindi.WEB-DL.ESub.x264-HDHub4u.Ms.jpg",
        movie: "movies/Nadaaniyan.mp4",
        description: "A comedy about the innocent mistakes and adventures of youth."
    },
    {
        id: 116,
        title: "Rewind",
        genre: "scifi",
        year: 2024,
        rating: 7.0,
        poster: "images/3363 Rewind.2024.jpg",
        movie: "movies/Rewind.mp4",
        description: "A sci-fi thriller about time manipulation and its consequences."
    },
    {
        id: 117,
        title: "Hosihar Singh",
        genre: "comedy",
        year: 2025,
        rating: 6.5,
        poster: "images/3364 Hosihar.Singh.2025.480p.Punjabi.WEB-DL.x264-HDHub4u.Ms.jpg",
        movie: "movies/Hosihar Singh.mp4",
        description: "A Punjabi comedy about a clever man and his witty solutions."
    },
    {
        id: 118,
        title: "Legally Veer",
        genre: "comedy",
        year: 2024,
        rating: 6.3,
        poster: "images/3365 Legally.Veer.2024.480p.Hindi.WEB-DL.x264-HDHub4u.Ms.jpg",
        movie: "movies/Legally Veer.mp4",
        description: "A legal comedy about an unlikely lawyer fighting for justice."
    },
    {
        id: 119,
        title: "My Dear Bootham",
        genre: "fantasy",
        year: 2022,
        rating: 6.8,
        poster: "images/3366 My Dear Bootham 2022.jpg",
        movie: "movies/My Dear Bootham.mp4",
        description: "A fantasy comedy about a child's friendship with a genie."
    },
    {
        id: 120,
        title: "Dragon",
        genre: "action",
        year: 2025,
        rating: 7.2,
        poster: "images/3370 Dragon 2025.jpg",
        movie: "movies/Dragon.mp4",
        description: "An action-packed martial arts film with spectacular fight sequences."
    },
    {
        id: 121,
        title: "Red Water",
        genre: "horror",
        year: 2003,
        rating: 4.8,
        poster: "images/3371 Red Water (2003) Dual Audio Hindi [MkvMoviesPoint.Moe] 480p WEB-DL.webp",
        movie: "movies/Red Water.mp4",
        description: "A horror thriller about a deadly shark terrorizing a Louisiana bayou."
    },
    {
        id: 122,
        title: "Dominique",
        genre: "thriller",
        year: 2024,
        rating: 6.1,
        poster: "images/3372 Dominique (2024) Dual Audio Hindi [MkvMoviesPoint] 480p.BluRay.webp",
        movie: "movies/Dominique.mp4",
        description: "A psychological thriller about obsession and dangerous relationships."
    },
    {
        id: 123,
        title: "Yaathisai",
        genre: "action",
        year: 2023,
        rating: 7.4,
        poster: "images/3373 Yaathisai 2023 UNCUT Dual Audio Hindi (ORG) www.SSRmovies.Com 480p WEB-DL x264 ESubs.jpg",
        movie: "movies/Yaathisai.mp4",
        description: "An epic historical action drama set in ancient Tamil Nadu."
    },
    {
        id: 124,
        title: "Plankton: The Movie",
        genre: "animation",
        year: 2025,
        rating: 6.9,
        poster: "images/3374 Plankton.The.Movie.2025 Dual Audio Hindi [MkvMoviesPoint.Moe] 480p WEB-DL.webp",
        movie: "movies/Plankton The Movie.mp4",
        description: "An animated adventure featuring the beloved SpongeBob character."
    },
    {
        id: 125,
        title: "No Love No Tension",
        genre: "comedy",
        year: 2024,
        rating: 6.2,
        poster: "images/3375 No Love No Tension (4K Full Movie 2024) Saif Ali Khan , Sobia Mehar, Sardar Khamal & Mehak Noor.jpg",
        movie: "movies/No Love No Tension.mp4",
        description: "A romantic comedy about modern relationships and their complications."
    },
    {
        id: 126,
        title: "Operation Raavan",
        genre: "action",
        year: 2024,
        rating: 6.8,
        poster: "images/3376 Operation.Raavan.2024.UNCUT.480p.WEB-DL.Hindi-Telugu.ESub.x264-HDHub4u.Ms.jpg",
        movie: "movies/Operation Raavan.mp4",
        description: "A high-stakes action thriller about a covert military operation."
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
            window.location.href = 'page2.html';
        }, 600);
    });
    
    // Next Page button functionality with god effects
    document.getElementById('nextPageBtn').addEventListener('click', function() {
        this.style.animation = 'godPulse 0.6s ease-in-out';
        window.godAnimations.explosion(this.offsetLeft + this.offsetWidth/2, this.offsetTop + this.offsetHeight/2);
        window.godAnimations.shake();
        setTimeout(() => {
            this.style.animation = '';
            window.godAnimations.wave();
            window.location.href = 'page5.html';
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