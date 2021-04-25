const slideList = document.querySelector(".slide_list");
const slideContents = document.querySelectorAll(".slide_content"); // each slide dom
const slideBtnNext = document.querySelector(".slide_btn_next"); // next button
const slideBtnPrev = document.querySelector(".slide_btn_prev"); // prev button
const pagination = document.querySelector(".slide_pagination");
const slideLen = slideContents.length; // slide length
const slideWidth = 100; // slide width
const slideSpeed = 300; // slide speed
const startNum = 0; // initial slide index (0 ~ 3)

// 슬라이드의 총 길이를 지정
slideList.style.width = slideWidth * (slideLen + 2) + "vw";

// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);

slideList.style.transform = `translate3d(-${slideWidth * (startNum + 1)}vw, 0px, 0px)`;

let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add("slide_active");

// Add pagination dynamically
let pageChild = "";
for (var i = 0; i < slideLen; i++) {
  pageChild += '<li class="dot';
  pageChild += i === startNum ? " dot_active" : "";
  pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
}
pagination.innerHTML = pageChild;
const pageDots = document.querySelectorAll(".dot"); // each dot from pagination

slideBtnNext.addEventListener("click", () => {
  if (curIndex <= slideLen - 1) {
    // 부드러운 슬라이드 속도
    slideList.style.transition = slideSpeed + "ms";
    // 현재 인덱스를 기준으로 x축을 왼쪽으로 뷰포트넓이만큼 이동한다.
    slideList.style.transform = `translate3d(-${slideWidth * (curIndex + 2)}vw, 0px, 0px)`;
  }
  if (curIndex === slideLen - 1) {
    setTimeout(() => {
      slideList.style.transition = "0ms";
      slideList.style.transform = `translate3d(-${slideWidth}vw, 0px, 0px)`;
    }, slideSpeed);
    curIndex = -1;
  }
  curSlide.classList.remove("slide_active");
  pageDots[curIndex === -1 ? slideLen - 1 : curIndex].classList.remove("dot_active");
  curSlide = slideContents[++curIndex];
  curSlide.classList.add("slide_active");
  pageDots[curIndex].classList.add("dot_active");
});

slideBtnPrev.addEventListener("click", () => {
  if (curIndex >= 0) {
    // 부드러운 슬라이드 속도
    slideList.style.transition = slideSpeed + "ms";
    // 현재 인덱스를 기준으로 x축을 왼쪽으로 뷰포트넓이만큼 이동한다.
    slideList.style.transform = `translate3d(-${slideWidth * curIndex}vw, 0px, 0px)`;
  }
  if (curIndex === 0) {
    setTimeout(() => {
      slideList.style.transition = "0ms";
      slideList.style.transform = `translate3d(-${slideWidth * slideLen}vw, 0px, 0px)`;
    }, slideSpeed);
    curIndex = slideLen;
  }
  curSlide.classList.remove("slide_active");
  pageDots[curIndex === slideLen ? 0 : curIndex].classList.remove("dot_active");
  curSlide = slideContents[--curIndex];
  curSlide.classList.add("slide_active");
  pageDots[curIndex].classList.add("dot_active");
});

let curDot;
pageDots.forEach.call((dot, i) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    curDot = document.querySelector(".dot_active");
    curDot.classList.remove("dot_active");

    curDot = this;
    this.classList.add("dot_active");

    curSlide.classList.remove("slide_active");
    curIndex = Number(this.getAttribute("data-index"));
    curSlide = slideContents[curIndex];
    curSlide.classList.add("slide_active");
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = `translate3d(-${slideWidth * (curIndex + 1)}vw, 0px, 0px)`;
  });
});
