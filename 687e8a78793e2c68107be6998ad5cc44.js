$(document).ready(function () {
        $('.mpp-offcanvas-menu-mobile-click').on('click', function () {
            if (($(window).width() < 576) && (!$(this).parent().hasClass('open'))) {
                $('.hasSubMenu').removeClass('open');
                $(this).parent().addClass('open');
                $('.mpp-offcanvas-menu-sub-list').slideUp();
                $(this).parent().siblings('ul').slideDown();
            }
        });

        $('.mpp-offcanvas-menu-collapse-mobile-click').on('click', function () {
            if (($(window).width() < 576) && ($(this).parent().hasClass('open'))) {
                // console.log("collapse........")
                // $('.hasSubMenu').removeClass('open');
                $(this).parent().removeClass('open');
                $('.mpp-offcanvas-menu-sub-list').slideUp();
                // $(this).parent().siblings('ul').slideDown();
            }
        });

        $(".mbilogo img").addClass("img-fluid mpp-offcanvas-logo");
        $(".logo-desk img").addClass("mpp-header-logo-desktop");
        $(".logo-mob img").addClass("d-block d-sm-none mpp-mobile-logo");
        $(".mpp-header-other-list a").addClass("m-0 english mt-1");
        $(".mpp-more-list-2 a").addClass("m-0 p-0");
    });