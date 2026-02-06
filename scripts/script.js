const mediaImage = document.querySelectorAll('.media-grid-box-image');

mediaImage.forEach((media) => {
  media.addEventListener('click', function () {
    media.classList.toggle('active');
  });
});

const burgerButton = document.querySelector('.header-burger-button');

const burgerMenu = document.querySelector('.header-menu');

burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('active-button');
  burgerMenu.classList.toggle('active-menu');
});
