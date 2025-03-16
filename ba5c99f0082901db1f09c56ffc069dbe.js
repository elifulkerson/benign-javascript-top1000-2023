document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
      loop: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
      loopedSlides: 2,
      spaceBetween: 24,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 4.3,
          slidesPerGroup: 4,
          loopedSlides: 4,
        },
        1200: {
          slidesPerView: 5.3,
          slidesPerGroup: 5,
          loopedSlides: 5,
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    });
})