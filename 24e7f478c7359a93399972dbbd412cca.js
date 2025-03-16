$(".slide-line-swiper").slide({
                mainCell: '.el-swiper-wrapper',
                effect: "leftMarquee",
                autoPlay: true,
                interTime: '50',
                vis: 7,
                switchLoad:"data-src",
                delayTime:0,
                lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
}
            });