$(".rz-brand-swiper").slide({
        mainCell: '.el-swiper-wrapper',
        effect: "left",
        autoPlay: false,
        interTime: '5000',
        pageStateCell: $('.rz-brand-pagination'),//数字分页
        autoPage: true,  //自动分页
        prevCell: $('.rz-brand-prev'),
        nextCell: $('.rz-brand-next'),
        switchLoad:"data-src",
        delayTime:0,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        lazy: {
        	elementClass : 'swiper-lazy',
        }
    });