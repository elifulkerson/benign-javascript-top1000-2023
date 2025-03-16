/*--------------------------Header scripts Start---------------------------------*/
$(function() {
    if ($(window).width() > 768) {
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });
        // Add slideDown animation to Bootstrap dropdown when expanding.
        $('.dropdown').on('show.bs.dropdown', function() {
            $('a.hide-menu').html('<i class="fas fa-times align-middle pr-2"></i> আরও');
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.dropdown').on('hide.bs.dropdown', function() {
            $('a.hide-menu').html('<i class="fas fa-bars align-middle pr-2"></i> আরও');
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
        });

    } else {
        $('#MenuWrapper').on('hide.bs.collapse', function () {
            $('a.hide-menu').html('<i class="fas fa-bars align-middle"></i>');
        });

        $('#MenuWrapper').on('show.bs.collapse', function () {
            $('a.hide-menu').html('<i class="fas fa-times align-middle"></i>');
        });
    }


    if ($(window).width() > 768) {

        $(".header_right_part").click(function () {
            $(".header").toggleClass("change_border");
            $("#navcol-1 ul.navbar-nav:first-child").toggleClass("hide_main_menu");
        });

        $(".search-icon").click(function () {
            $(".navbar-brand,.header_right_part,.icon-search").toggle('fast');
            // $("ul.navbar-nav li.nav-item").toggleClass("hide_main_menu");
            $("#navcol-1 ul li").toggleClass("hide_main_menu");
            $(".search-box").toggleClass('pt-2');
        });

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > 0) {
                $(document).on('click', '.dropdown-menu', function (e) {
                    e.stopPropagation();
                });

                $("#desktop_navbar nav").removeClass('header').addClass("header_shadow");

                $("#navcol-1 ul.navbar-nav:first-child").removeClass("hide_main_menu");
                $('a.hide-menu').html('<i class="fas fa-bars align-middle pr-2"></i> আরও');
                $('#desktopMenuWrapper').removeClass('show').slideUp('fast');
                $('.dropdown').on('show.bs.dropdown', function() {
                    $("#navcol-1 ul.navbar-nav:first-child").addClass("hide_main_menu");
                    $('a.hide-menu').html('<i class="fas fa-times align-middle pr-2"></i> আরও');
                    $(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
                });
                $('.dropdown').on('hide.bs.dropdown', function() {
                    $("#navcol-1 ul.navbar-nav:first-child").removeClass("hide_main_menu");
                    $('a.hide-menu').html('<i class="fas fa-bars align-middle pr-2"></i> আরও');
                    $('this').find('.dropdown-menu').first().stop(true, true).slideUp('fast');
                });

            }
           else {
                $("#desktop_navbar nav").addClass('header').removeClass("header_shadow").removeClass("change_border");
            }

        });

    } else {
        $(".search-icon").click(function () {
            $(".mobile-navbar").toggle('fast');
            $(".search-box").toggleClass('pb-2').toggleClass('pt-2').toggleClass('px-1');

        });
        $("a.hide-menu").click(function () {
            $(".mobile-top-header").toggle();
            $('#MenuWrapper').toggleClass('fullscreen').css({'border-top': '2px solid #ddd'});
            $('.mobile_header').toggleClass('hide_header');
        });
    }

});

/*--------------------------Header scripts End----------------------------------*/

/*--------------------------Footer Script Start---------------------------------*/
$("#back-top").hide();
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top a').click(function () {
        $('body,html').animate({scrollTop: 0}, 'fast');
        return false;
    });
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*--------------------------Footer Script End---------------------------------*/

/*--------------------------Tab News Slimscroll Script Start------------------*/
$(function(){
    if ($(window).width() > 768) {
        $('#most-recent-news').slimScroll({
            height: 410
        });
        $('#most-viewed-news').slimScroll({
            height: 410
        });
    }
    if ($(window).width() > 768) {
        $('#most-recent-news-home').slimScroll({
            height: 410
        });
        $('#most-viewed-news-home').slimScroll({
            height: 410
        });
    }

    $('#live-news-sidebar').slimScroll({
        height:375
    });
    
/*    $('#spc-news-list').slimScroll({
        height:118
    });*/

});
/*--------------------------Tab News Slimscroll Script End--------------------*/

/*--------------------------Map Script Start---------------------------------*/
$('select[name="bd_division"]').on('change', function(){
    var sel_div = $(this).val();
    $('select[name="bd_district"] option').css('display','none');
    $('select[name="bd_district"] .dist-' + sel_div).css('display','block');
});

$('select[name="bd_district"]').on('change', function(){
    var sel_div = $(this).val();
    $('select[name="bd_thana"] option').css('display','none');
    $('select[name="bd_thana"] .thana-' + sel_div).css('display','block');
});

$('.dist_news_srch').on('click', function(){
    var div_data = '', dist_data = '';
    if($('select[name="bd_division"] option:selected').attr('data-val'))
        div_data = $('select[name="bd_division"] option:selected').attr('data-val');

    if($('select[name="bd_district"] option:selected').attr('data-val'))
        dist_data = $('select[name="bd_district"] option:selected').attr('data-val');

    var thana_data = $('select[name="bd_thana"]').val();

    var URL = 'country-news';

    if(div_data==''){
        alert('please select the division first');
        $('select[name="bd_division"]').focus();
        return false;
    }

    URL = URL + '/' + div_data;
    if(dist_data!='') URL = URL + '/' + dist_data;
    if(thana_data!='') URL = URL + '/' + thana_data;
    var getUrl = '/';
    window.location.href = getUrl + URL;

    return false;
});
/*--------------------------Map Script End---------------------------------*/

//Top header Special Event blink script
$(document).ready(function() {
    function blink_text() {
        $('.blink').fadeOut(1000);
        $('.blink').fadeIn(1000);
    }
    setInterval(blink_text, 1000);
});

