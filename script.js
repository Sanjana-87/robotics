JavaScript code for adding functionality
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = 'Light Mode';
    } else {
      darkModeToggle.textContent = 'Dark Mode';
    }
  });

  const contactForm = document.querySelector('#contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    contactForm.reset();
  });
});
