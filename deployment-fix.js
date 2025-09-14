// Deployment Fix Script - Handles common deployment issues
(function() {
    'use strict';
    
    // Fix relative paths for deployment
    function fixPaths() {
        const baseUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/');
        
        // Fix image paths
        document.querySelectorAll('img[src^="images/"]').forEach(img => {
            if (!img.src.startsWith('http')) {
                img.src = baseUrl + img.getAttribute('src');
            }
        });
        
        // Fix video paths
        document.querySelectorAll('video source[src^="movies/"]').forEach(source => {
            if (!source.src.startsWith('http')) {
                source.src = baseUrl + source.getAttribute('src');
            }
        });
    }
    
    // Handle missing resources gracefully
    function handleMissingResources() {
        // Handle missing images
        document.addEventListener('error', function(e) {
            if (e.target.tagName === 'IMG') {
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMTExIi8+CjxwYXRoIGQ9Ik0xNTAgMTUwTDEyMCAyMDBIMTgwTDE1MCAxNTBaIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjRkZENzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPk1vdmllIFBvc3RlcjwvdGV4dD4KPC9zdmc+';
                e.target.alt = 'Movie Poster';
            }
        }, true);
        
        // Handle missing videos
        document.addEventListener('error', function(e) {
            if (e.target.tagName === 'VIDEO') {
                console.warn('Video failed to load:', e.target.src);
            }
        }, true);
    }
    
    // Fix CORS issues for external resources
    function fixCORS() {
        // Add crossorigin attribute to external resources
        document.querySelectorAll('link[href*="googleapis.com"]').forEach(link => {
            link.crossOrigin = 'anonymous';
        });
        
        document.querySelectorAll('script[src*="googleapis.com"]').forEach(script => {
            script.crossOrigin = 'anonymous';
        });
    }
    
    // Initialize fixes when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            fixPaths();
            handleMissingResources();
            fixCORS();
        });
    } else {
        fixPaths();
        handleMissingResources();
        fixCORS();
    }
})();