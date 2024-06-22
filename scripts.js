document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('mobile-menu');
    const parallax = document.querySelector('.parallax');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    window.addEventListener('mousemove', function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const moveX = (mouseX - window.innerWidth / 2) * 0.05;
        const moveY = (mouseY - window.innerHeight / 2) * 0.05;
        parallax.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    // EmailJS Initialization
    emailjs.init("santhoshb961@gmail.com");

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_006ba0q', 'template_s6wagun', this)
            .then(function () {
                alert('Message sent successfully!');
            }, function (error) {
                alert('Failed to send message. Please try again.');
            });
    });
});
