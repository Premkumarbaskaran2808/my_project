// ==========================================
// ANNIVERSARY DATE CONFIGURATION
// ==========================================
// CHANGE THIS TO YOUR ANNIVERSARY DATE!
const ANNIVERSARY_DATE = new Date('2022-08-28'); // Format: 'YYYY-MM-DD'
// ==========================================

// Current slide index for slideshow
let currentSlide = 0;
const photos = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg'
];

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    updateCountdown();
    setInterval(updateCountdown, 1000); // Update countdown every second
    autoSlideshow();
    animateLoveMeter();
    updateAnniversaryDate();
    initializeParticles();
});

// ==========================================
// COUNTDOWN TIMER
// ==========================================
function updateCountdown() {
    const now = new Date();
    const difference = now - ANNIVERSARY_DATE;

    // Calculate years, days, hours, minutes
    const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const millisecondsPerHour = 60 * 60 * 1000;
    const millisecondsPerMinute = 60 * 1000;

    const years = Math.floor(difference / millisecondsPerYear);
    const remainderAfterYears = difference % millisecondsPerYear;
    const days = Math.floor(remainderAfterYears / millisecondsPerDay);
    const remainderAfterDays = remainderAfterYears % millisecondsPerDay;
    const hours = Math.floor(remainderAfterDays / millisecondsPerHour);
    const remainderAfterHours = remainderAfterDays % millisecondsPerHour;
    const minutes = Math.floor(remainderAfterHours / millisecondsPerMinute);

    // Update DOM
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
}

// ==========================================
// FLOATING HEARTS
// ==========================================
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartEmojis = ['💕', '💖', '💗', '💝', '❤️'];

    // Create multiple hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (4 + Math.random() * 4) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);

        // Recreate heart when animation ends
        heart.addEventListener('animationend', function() {
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (4 + Math.random() * 4) + 's';
            heart.style.animationDelay = '0s';
        });
    }
}

// ==========================================
// SLIDESHOW FUNCTIONALITY
// ==========================================
function showSlide(n) {
    const slideshow = document.getElementById('slideshow');
    slideshow.src = photos[n];
    document.getElementById('currentSlide').textContent = n + 1;
    document.getElementById('totalSlides').textContent = photos.length;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % photos.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + photos.length) % photos.length;
    showSlide(currentSlide);
}

function autoSlideshow() {
    showSlide(currentSlide);
    // Auto advance every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);
}

// ==========================================
// LOVE METER ANIMATION
// ==========================================
function animateLoveMeter() {
    const loveFill = document.getElementById('loveFill');
    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            loveFill.style.width = width + '%';
        }
    }, 15);
}

// ==========================================
// UPDATE ANNIVERSARY DATE DISPLAY
// ==========================================
function updateAnniversaryDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = ANNIVERSARY_DATE.toLocaleDateString('en-US', options);
    document.getElementById('anniversary-date').textContent = 'Anniversary: ' + dateString;
}

// ==========================================
// PARTICLE ANIMATION (Canvas-based)
// ==========================================
function initializeParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = 30;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(255, 105, 180, 0.3)';

        particles.forEach((p, index) => {
            // Update position
            p.x += p.vx;
            p.y += p.vy;

            // Wrap around edges
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Draw particle
            ctx.globalAlpha = p.opacity;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ==========================================
// SMOOTH SCROLL BEHAVIOR
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// MOUSE FOLLOWER - OPTIONAL EFFECT
// ==========================================
document.addEventListener('mousemove', function(e) {
    // Create a subtle glow effect near cursor (optional)
    // You can enhance this with additional effects
});

// ==========================================
// KEYBOARD CONTROLS FOR SLIDESHOW
// ==========================================
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        previousSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});

console.log('✨ Anniversary UI Loaded! Edit the ANNIVERSARY_DATE in script.js to set your date.');
