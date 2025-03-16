var swiper = new Swiper('.banner-swipper', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
		loop: true,
        autoplay: {
    delay: 8500,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
    lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
},
      navigation: {
        nextEl: '.banner-next',
        prevEl: '.banner-prev',
      },
    });