var swiper = new Swiper('.banner-ad-slide', {
        mainCell: '.swiper-wrapper',
        autoPlay: true,
        slidesPerView:5,
		spaceBetween: 10,
		loop: true,
		autoplay: {
        delay: 5500,
        disableOnInteraction: false,        
      },
      switchLoad:"data-src",
                delayTime:0,
      lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
}
    });