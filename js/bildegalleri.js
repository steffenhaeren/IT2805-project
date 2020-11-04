console.log("bildegalleri lastet");

setInterval(next_function, 5000);

// henter bildegalleriet og bildene
const slideshowSlide = document.querySelector(".slideshow-slide");
const slideshowImgs = document.querySelectorAll(".slideshow-slide img");

// prev og next knappene

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

// starter på første bilde
let counter = 1;
// henter størrelsen på bildet
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

// hvis bruker er på første eller siste bildet, vil css-en settes til null og counteren vil oppdateres
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

// oppdaterer size-variabelen hver gang bruker skalerer siden
window.onresize = updateSize;

// funksjon som oppdaterer size-var, og oppdaterer css-en til slideshowet
function updateSize() {
  size = slideshowImgs[counter].clientWidth;
  slideshowSlide.style.transform = "translate(" + -size * counter + "px)";
  slideshowSlide.style.transition = "transform 0s ease-in-out";
  console.log(size);
}
