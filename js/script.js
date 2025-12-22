let menuMob = document.querySelector('.header__nav-mob-button');
let sideMeny = document.querySelector('.header__nav-mob-list');
menuMob.onclick  = () => {
    menuMob.classList.toggle('active')
    sideMeny.classList.toggle('active')
}
const swiper = new Swiper('.swiper', {
slidesPerView: 1,
    loop: true, centeredSlides: true,
    spaceBetween: 100,
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})
const INVERT_SCROLL_Y = 2400;
window.addEventListener('scroll', () => {
  if (window.scrollY >= INVERT_SCROLL_Y) {
    document.body.classList.add('is-inverted');
  } else {
    document.body.classList.remove('is-inverted');
  }
});
const triggerSkill = document.querySelector('.contacts__form-box-skills');
const triggerMedia = document.querySelector('.contacts__form-box-media');
const menu = document.querySelector('.form__options-skillbox');
const input = document.querySelector('.contacts__form-item-box');

triggerSkill.addEventListener('click', () => {
    triggerSkill.classList.toggle('active');
});
triggerMedia.addEventListener('click', () => {
    triggerMedia.classList.toggle('active');
});

menu.querySelectorAll('button').forEach(option => {
  option.addEventListener('click', () => {
    input.value = option.dataset.value;
    menu.classList.remove('active');
  });
});