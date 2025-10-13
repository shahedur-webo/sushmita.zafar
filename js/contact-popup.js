document.addEventListener('DOMContentLoaded', () => {
  const contactPopup = document.getElementById('contactPopup');
  const closeContact = document.getElementById('closeContact');
  const pageWrapper = document.querySelector('.page-wrapper');
  const contactNavLinks = document.querySelectorAll('.nav-contact');

  // Open popup from any navbar contact button
  contactNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      contactPopup.classList.add('active');
      pageWrapper.classList.add('blur');
    });
  });

  // Close popup
  closeContact.addEventListener('click', () => {
    contactPopup.classList.remove('active');
    pageWrapper.classList.remove('blur');
  });

  // Close popup when clicking outside
  contactPopup.addEventListener('click', (e) => {
    if (e.target === contactPopup) {
      contactPopup.classList.remove('active');
      pageWrapper.classList.remove('blur');
    }
  });
});
