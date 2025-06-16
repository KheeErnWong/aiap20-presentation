// Navigation functionality for McKinsey-style presentation
document.addEventListener('DOMContentLoaded', function() {
    // Add navigation to all slides
    addNavigation();
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            navigateToNext();
        } else if (e.key === 'ArrowLeft') {
            navigateToPrevious();
        } else if (e.key === 'Home') {
            window.location.href = 'index.html';
        }
    });
});

function addNavigation() {
    const slides = [
        { file: 'index.html', title: 'Home' },
        { file: 'slide1.html', title: '1' },
        { file: 'slide2.html', title: '2' },
        { file: 'slide3.html', title: '3' },
        { file: 'slide4.html', title: '4' },
        { file: 'slide5.html', title: '5' },
        { file: 'slide6.html', title: '6' },
        { file: 'slide7.html', title: '7' },
        { file: 'slide8.html', title: '8' },
        { file: 'slide9.html', title: '9' },
        { file: 'slide10.html', title: '10' }
    ];
    
    // Create navigation bar
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';
    
    slides.forEach(slide => {
        const link = document.createElement('a');
        link.href = slide.file;
        link.textContent = slide.title;
        
        // Highlight current slide
        if (window.location.pathname.includes(slide.file) || 
            (slide.file === 'index.html' && window.location.pathname.endsWith('/'))) {
            link.style.background = '#007bff';
            link.style.color = 'white';
        }
        
        navBar.appendChild(link);
    });
    
    document.body.appendChild(navBar);
}

function getCurrentSlideNumber() {
    const path = window.location.pathname;
    const match = path.match(/slide(\d+)\.html/);
    return match ? parseInt(match[1]) : 0;
}

function navigateToNext() {
    const current = getCurrentSlideNumber();
    if (current < 10) {
        window.location.href = `slide${current + 1}.html`;
    }
}

function navigateToPrevious() {
    const current = getCurrentSlideNumber();
    if (current > 1) {
        window.location.href = `slide${current - 1}.html`;
    } else if (current === 1) {
        window.location.href = 'index.html';
    }
}
