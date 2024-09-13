// Smooth Scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission (this would need backend integration to function properly)
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
  });
  