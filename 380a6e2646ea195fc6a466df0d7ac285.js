jQuery(".ranking-slide").slide({
                mainCell: ".ranking-dl",
                effect: "topLoop",
                autoPlay: true,
                vis: 5 ,
                prevCell: $('.ranking-slide-btn .btn-prev'),
                nextCell: $('.ranking-slide-btn .btn-next'),
                switchLoad:"data-src",
                        delayTime:0,
                lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
}
            });