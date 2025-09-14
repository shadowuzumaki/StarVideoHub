// Essential deployment fixes
(function() {
    // Fix image errors with fallback
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiMxMTEiLz48dGV4dCB4PSIxNTAiIHk9IjIwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0ZGRDcwMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5Nb3ZpZSBQb3N0ZXI8L3RleHQ+PC9zdmc+';
        }
    }, true);
    
    // Fix video errors
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'VIDEO') {
            console.warn('Video unavailable:', e.target.src);
        }
    }, true);
})();