$(".brand-box-swiper").slide({
                        mainCell: '.el-swiper-wrapper',
                        effect: "fold",
                        autoPlay: true,
                        interTime: '5000',
                        switchLoad:"data-src",
                        delayTime:0,
                        lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
}
                    });