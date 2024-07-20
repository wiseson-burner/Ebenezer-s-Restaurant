function showMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    document.getElementById('contactForm').reset();
});

