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
  accordionHeader.addEventListener("click", (e) => {
    e.preventDefault();
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

//REAVILING CONTENTS ON 20% ANIMATION
const allMySections = document.querySelectorAll("section");
console.log(allMySections);
const revealFunction = function (entries, observer) {
  [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entry, entry.target);

  entry.target.classList.remove("opa");
  entry.target.classList.add("trans");
  observer.unobserve(entry.target);
};

const sectionObservers = new IntersectionObserver(revealFunction, {
  root: null,
  threshold: 0.1,
});

allMySections.forEach((eachSectn) => {
  sectionObservers.observe(eachSectn);
  eachSectn.classList.add("opa");
  console.log("added");
});
///Section of video
const proVideo = document.querySelector("#playmEiCON");
const videoParent = document.querySelector("#videoDiv");
const mainVideo = document.querySelector("main");
const closeVideoBtn = document.querySelector(".bi-x-lg");
const videoOverLay = document.querySelector(".videoOverLay");
const videoContainer = document.querySelector(".videoContainer");
const videoId = document.querySelector("video");
console.log(videoId);

proVideo.addEventListener("click", function () {
  // console.log("Hello");
  videoId.classList.add("videoStyle");
  const myVideo = proVideo.src;
  /*
  const html = `
  <main>
    <div class="videoOverLay">
      <div class="videoTimes">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </div>
      <div class="videoIframeDiv">
        <iframe
          id="videoIframe"
          src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
          frameborder="0"
          allowfullscreen
          loop
        ></iframe>
      </div>
    </div>
  </main>
  `;
  videoContainer.insertAdjacentHTML("afterbegin", html);
  */
  mainVideo.classList.add("playVideo");
  videoId.classList.add("leftVideo");
  videoId.autoplay = true;
  videoId.load();
  console.log("it worked");

  // console.log(myVideo);

  // myVideo.play();
});

const closeVideoFuntion = function () {
  mainVideo.classList.remove("playVideo");
  mainVideo.classList.remove("leftVideo");
};
closeVideoBtn.addEventListener("click", closeVideoFuntion);
videoOverLay.addEventListener("click", closeVideoFuntion);

//Play Icon aniamtion
// function playiconAnimation() {
//   const pBox = document.querySelector(".pBox");
//   const pbox = document.querySelector(".pbox");
//   pBox.classList.add(playAnimation);
//   pbox.classList.add(playAnimation);
//   console.log("added aniamtion");
// }
// playiconAnimation();
const sectionThreeCardsContainer = document.querySelector(".cards");
const sectionThreeAllCardContainer = document.querySelectorAll(".card");

const removeHoverFuntion = function () {
  const firstPathColor = "#3a424e";
  const mostPathColor = "#00adb5";

  sectionThreeAllCardContainer.forEach((each) => {
    let allpathAttr = each.querySelectorAll("path"); // each.removeAttribute("fill");
    [fisrattribute, ...others] = allpathAttr;
    fisrattribute.setAttribute("fill", firstPathColor);
    [...others].forEach((each) => {
      each.setAttribute("fill", mostPathColor);
    });
  });
};

const addHoverFuntion = function (e) {
  const cardHovered = e.target.closest(".card");
  const allPathsHoverd = cardHovered.querySelectorAll("path");

  //===to remove the effect from other cards
  removeHoverFuntion();

  if (!cardHovered) return;
  allPathsHoverd.forEach((each) => {
    let myvalue = each.getAttribute("fill");
    if (myvalue !== null) {
      each.setAttribute("fill", "#ffffff");
    }
  });
};

//prettier-ignore
sectionThreeCardsContainer.addEventListener("mouseover", addHoverFuntion.bind());
// sectionThreeCardsContainer.addEventListener("mouseover",addHoverFuntion); This still works!
sectionThreeCardsContainer.addEventListener("mouseout", removeHoverFuntion);
