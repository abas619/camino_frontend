const swiperComments = new Swiper(".swiper-comments", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "vertical",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

//   breakpoints: {
//     390: {
//       slidesPerView: 3,
//     },
//     480: {
//       slidesPerView: 4,
//     },
//     768: {
//       slidesPerView: 5,
//     },
//     992: {
//       slidesPerView: 6,
//     },
//     1200: {
//       slidesPerView: 7,
//     },
//   },
// });
