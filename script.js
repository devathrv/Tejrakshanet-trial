const hamburger = document.getElementById('hamburger');
const overlayMenu = document.getElementById('overlay-menu');
const closeBtn = document.getElementById('close');

hamburger.addEventListener('click', () => {
  overlayMenu.style.left = '0';
  hamburger.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  overlayMenu.style.left = '-100%';
  hamburger.style.display = 'block';
});
