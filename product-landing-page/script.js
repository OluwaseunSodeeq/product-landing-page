// SECTION ONE SLIDER

const slideContainer = document.querySelector(".section_container");
const slides = Array.from(slideContainer.children);
const slideBtns = document.querySelector(".links");
const btns = Array.from(slideBtns.children);
const prevButton = document.querySelector(".carousel_btn_prev");
const nextButton = document.querySelector(".carousel_btn_next");

// To get the wid th of all my slide
const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth)

//Arranging the slides horizontally: three ways toachieve it goes thus:
// slides[0].style.left = 0 + 'px';
// slides[1].style.left = slideWidth + 'px';
// slides[2].style.left = slideWidth*2 + 'px';

//OR

// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// });

//OR

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//For direction- general
const moveToSlide = (slideContainer, currentSlide, targetSlide) => {
  slideContainer.style.transform =
    "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};
//update
const updateBtns = (currentBtn, targetBtn) => {
  currentBtn.classList.remove("current_slide");
  targetBtn.classList.add("current_slide");
};
//For direction- left
prevButton.addEventListener("click", (e) => {
  const currentSlide = slideContainer.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(slideContainer, currentSlide, prevSlide);
});
//For direction- right
nextButton.addEventListener("click", (e) => {
  const currentSlide = slideContainer.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(slideContainer, currentSlide, nextSlide);
  // const amountToMove = nextSlide.style.left;

  // //move to the next slide
  // slideContainer.style.transform = 'translateX(-'+ amountToMove + ')';
  // currentSlide.classList.remove('current_slide');
  // nextSlide.classList.add('current_slide');
});
//indicator

slideBtns.addEventListener("click", (e) => {
  const targetBtn = e.target.closest("button");

  if (!targetBtn) return;

  const currentSlide = slideContainer.querySelector(".curent_slide");
  const currentBtn = slideBtns.querySelector(".current_slide");
  const targetIndex = btns.findIndex((btn) => btn === targetBtn);
  const targetSlide = slides[targetIndex];

  moveToSlide(slideContainer, currentSlide, targetSlide);

  // currentBtn.classList.remove('current_slide');
  // targetBtn.classList.add('current_slide');
});

//  SECTION FOUR SLIDER //
const sectionFourSlideContainer = document.querySelector(
  ".section_four_container"
);
const sectionFourSlides = Array.from(sectionFourSlideContainer.children);
const sectionFourSlideBtns = document.querySelector(".section_four_links");
const sectionFourSBtns = Array.from(sectionFourSlideBtns.children);
const prevyButton = document.querySelector(".carousel_btn_prevy");
const nextyButton = document.querySelector(".carousel_btn_nexty");

//to calculaTE THE WIDTH
const sectionFourSlideWidth =
  sectionFourSlides[0].getBoundingClientRect().width;

const sectionFourSetSlidePosition = (slidex, indexz) => {
  slidex.style.left = sectionFourSlideWidth * indexz + "px";
};
sectionFourSlides.forEach(sectionFourSetSlidePosition);

const tapToSlide = (
  sectionFourSlideContainer,
  newCurrentSlide,
  newTargetSlide
) => {
  sectionFourSlideContainer.style.transform =
    "translateX(-" + newTargetSlide.style.left + ")";
  newCurrentSlide.classList.remove("new_slide");
  newTargetSlide.classList.add("new_slide");
};

const updatedBtns = (newCurrentBtn, newTargetBtn) => {
  newCurrentBtn.classList.remove("new_slide");
  newTargetBtn.classList.add("new_slide");
};

// prevyButton.addEventListener("click", (e) => {
//   const newCurrentSlide = sectionFourSlideContainer.querySelector(".new_slide");
//   const prevySlide = newCurrentSlide.previousElementSibling;
//   tapToSlide(sectionFourSlideContainer, newCurrentSlide, prevySlide);
// });

// nextyButton.addEventListener("click", (e) => {
//   const newCurrentSlide = sectionFourSlideContainer.querySelector(".new_slide");
//   const nextySlide = newCurrentSlide.nextElementSibling;
//   moveToSlide(sectionFourSlideContainer, newCurrentSlide, nextySlide);
// });

sectionFourSlideBtns.addEventListener("click", (e) => {
  const newTargetBtn = e.target.closest("button");

  if (!newTargetBtn) return;

  const newCurrentSlide = sectionFourSlideContainer.querySelector(".new_slide");
  const newCurrentBtn = sectionFourSlideBtns.querySelector(".newt_slide");
  const newTargetIndex = sectionFourSBtns.findIndex(
    (btn1) => btn1 === newTargetBtn
  );
  const newTargetSlide = sectionFourSlides[newTargetIndex];

  moveToSlide(sectionFourSlideContainer, newCurrentSlide, newTargetSlide);

  // currentBtn.classList.remove('current_slide');
  // targetBtn.classList.add('current_slide');
});

// HAMBURGER JS
const hamburger = document.querySelector(".hamburger");
const nav_lists = document.querySelector(".nav-lists");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav_lists.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav_lists.classList.remove("active");
  })
);

// AACORDION

const accordionHeaders = document.querySelectorAll(".acc-header");
accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    accordionHeader.classList.toggle("active");
    //     const accordiumBody = accordionHeader.nextElementSibling;
    //     if(accordionHeader.classList.contains("active")) {
    //         accordiumBody.style.maxHeight = accordiumBody.scrollHeight + "px";
    //     }
    //     else{
    //         accordiumBody.style.maxHeight = 0;
    //     }
  });
});
//===========SMOOTH SCROLLING===(//Matching strategy)==========//
const allNavLists = document.querySelector(".nav-lists");

allNavLists.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("nav-link")) return;
  const idAttribute = e.target.getAttribute("href");
  document.querySelector(idAttribute).scrollIntoView({ behavior: "smooth" });
});
