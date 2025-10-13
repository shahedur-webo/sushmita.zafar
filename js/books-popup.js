document.addEventListener('DOMContentLoaded', () => {
  const popupOverlay = document.getElementById('book-popup');
  const closeBtn = popupOverlay.querySelector('.close-popup');
  const popupTitle = popupOverlay.querySelector('.popup-title');
  const popupSubtitle = popupOverlay.querySelector('.popup-subtitle');
  const popupDescription = popupOverlay.querySelector('.popup-description');
  const popupImgSide = popupOverlay.querySelector('.popup-img-side');

  document.querySelectorAll('.project-card .view-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.project-card');
      popupTitle.textContent = card.dataset.title;
      popupSubtitle.textContent = card.dataset.subtitle;
      popupDescription.textContent = card.dataset.description;
      popupImgSide.src = card.dataset.image;
      popupOverlay.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => popupOverlay.classList.remove('active'));
  popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) popupOverlay.classList.remove('active');
  });
});
