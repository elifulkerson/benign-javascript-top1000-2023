$(".news-tab-swiper").slide({
                        mainCell: '.el-swiper-wrapper',
                        effect: "left",
                        autoPlay: false,
                        titCell:'.el-news-pagination span', //指定默认的切换元素
                        switchLoad:"data-src",
                        delayTime:0,
                        lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
}
                    });