$(".brand-list-swiper").slide({
                mainCell: '.el-swiper-wrapper',
                effect: "left",
                // autoPlay: true,
                // interTime: '5000',
                pageStateCell: $('.brand-list-pagination'),//数字分页
                autoPage: true,  //自动分页
                prevCell: $('.rand-list-prev'),
                nextCell: $('.rand-list-next'),
                switchLoad:"data-src",
                        delayTime:0,
                lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
    loadPrevNext: true,
}
                // titCell:'.el-pagination',  //自动分页的元素
                // titCell:'.el-pagination span', //指定默认的切换元素
            });