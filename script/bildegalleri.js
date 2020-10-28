console.log("bildegalleri lastet");

const slideshowSlide = document.querySelector(".slideshow-slide");
const slideshowImgs = document.querySelectorAll(".slideshow-slide img");

// knappene

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let counter = 1;
let size = slideshowImgs[0].clientWidth;

slideshowSlide.style.transform = "translate(" + -size * counter + "px)";

// legger til event listneres til knappene
next.addEventListener("click", next_function);
prev.addEventListener("click", prev_function);
slideshowSlide.addEventListener("transitionend", reset);

function next_function() {
  if (counter >= slideshowImgs.length - 1) {
    return;
  }
  slideshowSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  slideshowSlide.style.transform = "translate(" + -size * counter + "px)";
}

function prev_function() {
  if (counter <= 0) {
    return;
  }
  slideshowSlide.style.transition = "transform 1s ease-in-out";
  counter--;
  slideshowSlide.style.transform = "translate(" + -size * counter + "px)";
}

function reset() {
  if (slideshowImgs[counter].id === "lastClone") {
    slideshowSlide.style.transition = "none";
    counter = slideshowImgs.length - 2;
    slideshowSlide.style.transform = "translate(" + -size * counter + "px)";
  } else if (slideshowImgs[counter].id === "firstClone") {
    slideshowSlide.style.transition = "none";
    counter = 1;
    slideshowSlide.style.transform = "translate(" + -size * counter + "px)";
  }
}

window.onresize = updateSize;

function updateSize() {
  size = slideshowImgs[counter].clientWidth;
  slideshowSlide.style.transform = "translate(" + -size * counter + "px)";
  slideshowSlide.style.transition = "transform 0s ease-in-out";
  console.log(size);
}
