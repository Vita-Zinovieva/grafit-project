import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// Now you can use all slider methods like

// const swiper = new Swiper(".swiper", {
//   spaceBetween: 24,
//   centeredSlides: true,
//   slidesPerView: 3,
//   loop: true,
//   height: 664,
//   width: 1861,

//   modules: [Navigation],
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   //   breakpoints: {
//   //     // when window width is >= 320px
//   //     320: {
//   //       slidesPerView: 2,
//   //       spaceBetween: 20,
//   //     },
//   //     // when window width is >= 480px
//   //     480: {
//   //       slidesPerView: 3,
//   //       spaceBetween: 30,
//   //     },
//   //     // when window width is >= 640px
//   //     640: {
//   //       slidesPerView: 4,
//   //       spaceBetween: 40,
//   //     },
//   //   },
// });

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,

  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
