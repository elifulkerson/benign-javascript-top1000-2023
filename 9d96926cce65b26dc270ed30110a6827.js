"use strict";

var sliders = document.querySelectorAll(".slider-container");
var scrollSupport = ("scrollBehavior" in document.documentElement.style);

function showHideArrows(slider) {
  var card = slider.querySelectorAll(".slider-card"),
    prev = slider.querySelector(".prev"),
    next = slider.querySelector(".next"),
    scroll = slider.scrollLeft,
    scrollRemaining = slider.scrollWidth - slider.clientWidth - scroll;

  if (scroll < 16) {
    prev.style.display = "block";
    prev.style.visibility = "visible";
    prev.style.opacity = "0.5";
    prev.style.cursor = "not-allowed";
    prev.style.pointerEvents = "none"
  } else {
    prev.style.display = "block";
    prev.style.visibility = "visible";
    prev.style.opacity = "1";
    prev.style.cursor = "pointer";
    prev.style.pointerEvents = "visible";
  }

  if (scrollRemaining < 16) {
    next.style.display = "block";
    next.style.visibility = "visible";
    next.style.opacity = "0.5";
    next.style.cursor = "not-allowed";
    next.style.pointerEvents = "none";
  } else {
    next.style.display = "block";
    next.style.visibility = "visible";
    next.style.opacity = "1";
    next.style.cursor = "pointer";
    next.style.pointerEvents = "visible";
  }
}

function slideCards(e) {
  var slider = this,
    card = slider.querySelectorAll(".slider-card");
  var cardMargin = parseInt(getComputedStyle(card[0]).marginLeft) * 2,
    cardWidth = card[0].clientWidth + cardMargin + 2;

  if ((e.target.getAttribute("class") == "next" || e.target.getAttribute("transform") == "scale(1,1)") && (e.type === "click" || e.keyCode === 13) || e.keyCode === 39) {
    e.preventDefault();

    if (scrollSupport) {
      slider.scroll({
        behavior: "smooth",
        left: slider.scrollLeft + cardWidth
      });
    } else {
      slider.scrollLeft = slider.scrollLeft + cardWidth;
    }
  } else if ((e.target.getAttribute("class") == "prev" || e.target.getAttribute("transform") == "scale(-1,1)") && (e.type === "click" || e.keyCode === 13) || e.keyCode === 37) {
    e.preventDefault();

    if (scrollSupport) {
      slider.scroll({
        behavior: "smooth",
        left: slider.scrollLeft - cardWidth
      });
    } else {
      slider.scrollLeft = slider.scrollLeft - cardWidth;
    }
  }
}

function sliderInit() {
  sliders.forEach(function (slider) {
    slider.addEventListener("click", slideCards);
    slider.addEventListener("keydown", slideCards);
    slider.addEventListener("scroll", function () {
      showHideArrows(slider);
    });
    showHideArrows(slider);
  });
}

sliderInit();

document.addEventListener("pvd-expand-collapse-change", function () {
  sliderInit();
});
