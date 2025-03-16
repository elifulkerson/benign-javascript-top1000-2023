$(".news-img-swiper").slide({
                        mainCell: '.el-swiper-wrapper',
                        effect: "leftLoop",
                        autoPlay: true,
                        interTime: '5000',
                        pageStateCell: '.el-pagination', //数字分页
                        switchLoad:"data-src",
                        delayTime:0,
                        lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
}
                    });