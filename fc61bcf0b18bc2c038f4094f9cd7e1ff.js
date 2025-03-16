$(function () {
        /* 品牌推荐滚动广告 */
        autoScroll('#jsBrandView', '#jsBrandView ul', 50);

        $('.js-tab-span span').click(function (e) {
            var index = $(this).addClass('on').siblings('span').removeClass('on').end().index()
            $('.js-tab-card>div').eq(index).show().siblings().hide();
        });


        /* 品牌推荐 */
        $('.js-switchTab span').mouseenter(function (e) {
            var index = $(this).index();
            $(this).addClass('on').siblings('span').removeClass('on');
            $('.js-ulBlock ul').eq(index).fadeIn().siblings('ul').hide();
        });

        $('.ranking-dl dd').mouseenter(function () {
            $(this).addClass('on').siblings().removeClass('on');
        });

        $('.js-tab span').click(function (e) {
            e.preventDefault();
            var index = $(this).addClass('on').siblings('span').removeClass('on').end().data('index');
            $(this).parent().siblings('.ul-pages').find('ul').eq(index).fadeIn().siblings('ul').hide();
        });

        $(".brand-img-swiper").slide({
        mainCell: '.el-swiper-wrapper',
        effect: "leftLoop",
        autoPlay: true,
        interTime: '5000',
        pageStateCell: '.el-pagination',
        lazyLoading : true,
	lazyLoadingInPrevNext : true,
	lazy: {
    elementClass : 'swiper-lazy',
    loadPrevNext: true,
}
        });
    })



    var isScroll = false;

    window.addEventListener('scroll', function () {
        if (isScroll) return;
        var $winodwScrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var slideBar = document.querySelector('.slide-nav .navigator-ul');
        $winodwScrollTop >= 300? $('.slide-nav .navigator-ul').addClass('active'):$('.slide-nav .navigator-ul').removeClass('active')
        var elBlockoffsetTop = $('.el-block').offsetTop;
        $.each($('.el-block'), function (indexInArray, valueOfElement) {
            if ($winodwScrollTop >= $(this)[0].offsetTop) {
                $('.slide-nav .navigator-ul').find('a[href="#' + $(this).attr('id') + '"]').addClass('on').parent('li').siblings('li').find('a').removeClass('on');
            }
        });
    })


    window.onload = function () {
        /* 返回顶部 */
        $BackTop('backTop');

        $('.navigator-ul a').click(function (e) {
            e.preventDefault();
            isScroll = true;
            if(!isScroll) {return;}
            $(this).addClass('on').parent('li').siblings().find('a').removeClass('on');
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, 300, function () {
                isScroll = false;
            });
        });
    }


    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7a17074bfab334b546f771ccaeb99243";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();