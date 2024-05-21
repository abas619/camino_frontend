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

const swiperCalendar = new Swiper(".swiper-calendar", {
  slidesPerView: 1,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    250: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 7,
    },
  },
});

// 1535    1280 1024 768 640
if (document.getElementById("swiper-calendar-btn-prev") != null) {
  document
    .getElementById("swiper-calendar-btn-prev")
    .addEventListener("click", function () {
      swiperCalendar.slidePrev();
    });
}
if (document.getElementById("swiper-calendar-btn-next") != null) {
  document
    .getElementById("swiper-calendar-btn-next")
    .addEventListener("click", function () {
      swiperCalendar.slideNext();
    });
}

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
