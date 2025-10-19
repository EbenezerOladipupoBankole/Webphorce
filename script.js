// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Check if the mobile nav is active before closing
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        }
    });
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    // This effect is for a transparent-to-solid header.
    // Since we want a solid white header, we can simplify or remove this.
    // For now, let's ensure it doesn't interfere.
    if (currentScroll > 10) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    };

    // Simulate form submission (in reality, you'd send this to a server)
    formMessage.textContent = 'Sending your message...';
    formMessage.className = 'form-message';
    formMessage.style.display = 'block';

    // Simulate server delay
    setTimeout(() => {
        formMessage.textContent = 'Thank you for contacting us! We will get back to you within 24 hours.';
        formMessage.className = 'form-message success';
        
        // Reset form
        contactForm.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 1500);
});

// Form validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value) && this.value !== '') {
        this.style.borderColor = '#dc3545';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

// Interactive Team Section Scrolling
const teamGrid = document.querySelector('.team-grid');

if (teamGrid) {
    teamGrid.addEventListener('mousemove', (e) => {
        // We only want this effect on desktop
        if (window.innerWidth < 768) return;

        // Get the bounding rectangle of the container
        const rect = teamGrid.getBoundingClientRect();

        // Calculate the mouse position as a percentage from left (0) to right (1)
        const mouseX = e.clientX - rect.left;
        const percent = mouseX / rect.width;

        // Calculate the maximum scrollable distance
        const maxScroll = teamGrid.scrollWidth - teamGrid.clientWidth;

        // Set the scroll position based on the mouse percentage
        teamGrid.scrollLeft = maxScroll * percent;
    });
}