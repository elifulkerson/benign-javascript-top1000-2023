$(function () {
  if ($('.swiper-slide').length > 1) {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    $('.swiper-button-next,.swiper-button-prev').hide()
    var mySwiper = new Swiper('.swiper-container', {
      loop: false,
    });
  }
})