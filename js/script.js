// Navbar mobile toggle
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const body = document.querySelector('body');
const logo = document.querySelector('.logo');

// Toggle menu
menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
  body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
};

// Close when clicking outside
window.addEventListener('click', (event) => {
  if (navLinks.classList.contains('active') &&
      !navLinks.contains(event.target) &&
      !menuIcon.contains(event.target)) {
    navLinks.classList.remove('active');
    body.style.overflow = 'auto';
  }
});

// Scroll to top on logo click
logo.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

