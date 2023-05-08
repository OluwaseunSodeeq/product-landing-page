//SLIDER WITH SWIPER CODE

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 1,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    // nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
