// Common JavaScript functions for all slides

// Toggle fullscreen mode
function toggleFullscreen() {
    const elem = document.documentElement;
    const icon = document.getElementById('fullscreen-icon');
    
    if (!document.fullscreenElement && !document.mozFullScreenElement && 
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        // Enter fullscreen
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
        sessionStorage.setItem('isFullscreen', 'true');
    } else {
        // Exit fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
        sessionStorage.setItem('isFullscreen', 'false');
    }
}

// Check fullscreen before navigating
function checkFullscreenBeforeNavigate() {
    if (document.fullscreenElement || document.mozFullScreenElement || 
        document.webkitFullscreenElement || document.msFullscreenElement) {
        sessionStorage.setItem('maintainFullscreen', 'true');
    }
}

// Navigate to a specific slide
function goToSlide(slideNumber) {
    checkFullscreenBeforeNavigate();
    window.location.href = `slide${slideNumber}.html`;
}

// Initialize fullscreen on page load
function initializeFullscreen() {
    // Check if we should restore fullscreen
    if (sessionStorage.getItem('maintainFullscreen') === 'true') {
        sessionStorage.removeItem('maintainFullscreen');
        setTimeout(() => {
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            const icon = document.getElementById('fullscreen-icon');
            if (icon) {
                icon.classList.remove('fa-expand');
                icon.classList.add('fa-compress');
            }
        }, 100);
    }
}

// Common keyboard navigation
function setupKeyboardNavigation(config) {
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Home' || event.key === 'Escape') {
            checkFullscreenBeforeNavigate();
            window.location.href = 'slide1.html';
        } else if (event.key === 'ArrowRight' && config.nextSlide) {
            checkFullscreenBeforeNavigate();
            window.location.href = config.nextSlide;
        } else if (event.key === 'ArrowLeft' && config.prevSlide) {
            checkFullscreenBeforeNavigate();
            window.location.href = config.prevSlide;
        } else if (config.slideNumbers && event.key >= '1' && event.key <= '5') {
            const slideNumber = parseInt(event.key) + 1;
            goToSlide(slideNumber);
        }
    });
}

// Initialize common functionality on page load
window.addEventListener('load', function() {
    initializeFullscreen();
});