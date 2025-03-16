const swiper_latestnews = new Swiper('.swiper_latestnews', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination4',
    type: 'bullets',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },

  slidesPerView: 2,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            720: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            551: {
                slidesPerView: 1,
                spaceBetween: 60
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 60
            },
            375: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            360: {
                slidesPerView: 1,
                spaceBetween: 40
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 40
            }
        }
});