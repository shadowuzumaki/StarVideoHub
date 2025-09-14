// Enhanced fixes with cool interactions
(function() {
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMxMTEiLz48dGV4dCB4PSIxNTAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0ZGRDcwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5Nb3ZpZSBQb3N0ZXI8L3RleHQ+PC9zdmc+';
        }
    }, true);
    
    document.addEventListener('DOMContentLoaded', function() {
        // Enhanced button interactions
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('watch-btn') || 
                e.target.classList.contains('btn-primary') || 
                e.target.classList.contains('btn-secondary')) {
                
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.8);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                    left: ${e.offsetX - 10}px;
                    top: ${e.offsetY - 10}px;
                    width: 20px;
                    height: 20px;
                `;
                
                e.target.style.position = 'relative';
                e.target.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            }
        });
        
        // Fix watch buttons
        setTimeout(() => {
            document.querySelectorAll('.watch-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const movieCard = this.closest('.movie-card');
                    const movieTitle = movieCard.querySelector('.movie-title').textContent;
                    
                    const notification = document.createElement('div');
                    notification.style.cssText = `
                        position: fixed;
                        top: 100px;
                        right: 20px;
                        background: linear-gradient(45deg, #ff0080, #ff8c00);
                        color: white;
                        padding: 15px 25px;
                        border-radius: 15px;
                        font-weight: 600;
                        z-index: 9999;
                        animation: slideIn 0.5s ease;
                        box-shadow: 0 10px 30px rgba(255, 0, 128, 0.5);
                    `;
                    notification.textContent = `🎬 Loading ${movieTitle}...`;
                    document.body.appendChild(notification);
                    
                    setTimeout(() => notification.remove(), 3000);
                });
            });
        }, 1000);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to { transform: scale(4); opacity: 0; }
            }
            @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);
    });
})();