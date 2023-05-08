import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const swiperRef = document.querySelector('.swiper');
const { clientWidth } = document.documentElement;

// Swiper options for breakpoints:

let swiperWidth = 0;
let slidesPerView = 3;
let spaceBetween = 24;
let arrows = true;

let size = 30;
let top = 294 + size;
let side = -Math.abs(size + 20);

if (clientWidth >= 1920) {
  swiperWidth = 1758;
} else if (clientWidth >= 1440) {
  swiperWidth = 1279;

  top = 238 + size;
  side = -Math.abs(size + 17);
} else if (clientWidth >= 768) {
  swiperWidth = 704;
  slidesPerView = 2;
  spaceBetween = 16;

  size = 20;
  top = 212 + size;
  side = -Math.abs(size + 6);
} else {
  swiperWidth = 358;
  slidesPerView = 2;
  spaceBetween = 16;
  arrows = false;
}
console.log(swiperWidth);

// Swiper initialization with breakpoints values:

const swiper = new Swiper('.swiper', {
  autoHeight: true,
  loop: true,
  width: swiperWidth,
  slidesPerView,
  spaceBetween,

  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Options for arrows with breakpoints:

swiper.navigation.nextEl[0].style.top = `${top}px`;
swiper.navigation.nextEl[0].style.right = `${side}px`;
swiper.navigation.nextEl[0].style.width = `${size}px`;
swiper.navigation.nextEl[0].style.height = `${size}px`;

swiper.navigation.prevEl[0].style.top = `${top}px`;
swiper.navigation.prevEl[0].style.left = `${side}px`;
swiper.navigation.prevEl[0].style.width = `${size}px`;
swiper.navigation.prevEl[0].style.height = `${size}px`;

swiperRef.style = `width: ${swiperWidth}px; position:static`;
if (!arrows) {
  swiper.navigation.nextEl[0].style = `display: none;`;
  swiper.navigation.prevEl[0].style = `display: none`;
}
