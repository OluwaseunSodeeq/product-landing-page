//SLIDER WITH SWIPER CODE
/*
var swiper = new Swiper(".slider-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidePerGroup: 4,
  loop: true,
  centerSlide: "true",
  // fade: "true",
  // grabCursor: "true",
  // loopFillGroupWithBlank:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // dynamicBullets: true,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    400: {
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
*/

var swiper = new Swiper(".slider-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
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

// const gotoSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//   );
// };
// gotoSlide(0);

const doublebtnContainer = document.querySelector(".doubletBtn");
const doubleBtn = doublebtnContainer.querySelectorAll("span");
const sliDecardContainer = document.querySelector(".slider-container");
let myIndex;
doublebtnContainer.addEventListener("click", (e) => {
  const clickedOne = e.target.closest("span");

  if (!clickedOne) return;

  doubleBtn.forEach((btn, i) => {
    btn.classList.remove("swiper-pagination-bullet-active");
    myIndex = i;
  });
  clickedOne.classList.add("swiper-pagination-bullet-active");
  if (myIndex) {
    sliDecardContainer.style.transform = `translateX(-${50 * myIndex}%)`;
    // SliDecardContainer.style.right = "-50%";
  } else {
    sliDecardContainer.style.transform = `translateX(${140 * 1}%)`;
  }
  console.log("hello sheun");
  console.log(myIndex);
});
