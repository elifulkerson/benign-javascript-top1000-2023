/* jquery passive listeners */
jQuery.event.special.touchstart = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};

$(document).ready(function () {

    $(".js--slide").slick({
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        dots: !1,
        infinite: !0,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        arrows: !0,
    });

    $(".timeline--trenpekanini__slide").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });
    $(".event__slide").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !0,
    })
    // $(".reward__slide").slick({
    //     infinite: !0,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     dots: true,
    //     autoplay: !0
    // });
    $(".timeline--writer__slide").slick({
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 1
    }), $(".close").on("click", function (a) {
        $(this).parent().fadeOut("slow", function (a) { })
    }), $(".close--writer").on("click", function (a) {
        $(this).parent().parent().fadeOut("slow", function (a) { })
    }), $(".close-skin").on("click", function (a) {
        $(this).parent().parent().fadeOut("slow", function (a) { })
    }),
        $(".close-pol").on("click", function (a) {
            $(this).parent().parent().fadeOut("slow", function (a) { })
            a.preventDefault();
        }), size = parseInt($(".read-content").css("font-size")), line = parseInt($(".read-content").css("line-height")), $("#big").on("click", function () {
            size += 2, line += 5, $(".read-content").css({
                "font-size": size + "px",
                "line-height": line + "px"
            }), size <= 26 ? $(".read-content").css({
                "font-size": size + "px",
                "line-height": line + "px"
            }) : (size = 26, line = 51, $(".read-content").css({
                "font-size": size + "px",
                "line-height": line + "px"
            }))
        }), $("#small").on("click", function () {
            size -= 2, line -= 5, $(".read-content").css({
                "font-size": size + "px",
                "line-height": line + "px"
            }), size >= 12 ? $(".read-content").css({
                "font-size": size + "px",
                "line-height": line + "px"
            }) : (size = 12, line = 16, $(".read-content").css({
                "font-size": size + "px",
                "line-height": line + "px"
            }))
        }), $(window).scroll(function () {
            var a = $(window).scrollTop(),
                b = $("header").outerHeight();
            $(".sticky-bar").outerHeight();
            a > b + 20 ? ($("header").addClass("header-sticky"),
                $(".user-notif").addClass("user-notif-noarrow"),
                $(".sticky-bar").addClass("sticky-fixed"),
                //                    $(".top-bar").addClass("hide-bar"),
                //                    $(".bottom-bar").addClass("hide-bar"),
                $(".sticky-bar").removeClass("hide-bar"),
                $(".js-nav-offset").addClass("active")) :
                ($("header").removeClass("header-sticky"),
                    $(".user-notif").removeClass("user-notif-noarrow"),
                    $(".sticky-bar").removeClass("sticky-fixed"),
                    //                    $(".top-bar").removeClass("hide-bar"),
                    //                    $(".bottom-bar").removeClass("hide-bar"),
                    $(".sticky-bar").addClass("hide-bar"),
                    $(".js-nav-offset").removeClass("active"))
            // sidebar video small 
            if (a > $(window).height()) {
                $(".read-video--big").addClass("read-video--small");
            } else {
                $(".read-video--big").removeClass("read-video--small");
            }
        }), $(window).scroll(function () {
            let wscroll = $(window).scrollTop(),
                hscroll = ($(window).height() - $(".header").outerHeight());

            wscroll > hscroll ? $(".ads-skin").css({
                // top: "55px"
                transform: "translateY(55px)"
            }) : wscroll < hscroll && $(".ads-skin").removeAttr("style")
        })

    // if maintenance bar visible for ads skin
    /*
    if ($(".maintenance").css("display") == "table") {
        $(".ads-skin").css("top", "700px");
    } else {
    }
    */

    //add margin to short article title
    // $('.timeline--artikel .title').each(function () {
    //     if ($(this).height() <= 50) {
    //         $(this).addClass('mt40');
    //         $(".timeline--artikel.timeline--artikel__nphoto .title").removeClass('mt40');
    //         $(".timeline--artikel.timeline--artikel__adv .title").removeClass('mt40');
    //     }
    // });

    //popup tnc
    $('.js-tnc').click(function (e) {
        e.preventDefault();
        $("#popup__tnc").addClass('active');
        $(".popup__tnc").css({
            'display': 'block'
        });
    });
    $('#popup__tnc .close').click(function (e) {
        e.preventDefault();
        $("#popup__tnc").removeClass('active');
    });

    //timeout popup notif 
    setTimeout(function () {
        $(".user-notif").slideDown({
            duration: '200',
            queue: false
        });
    }, 3000); // 3 second delay

    // s: report flag
    $(document).on('click', '.-reportChoose', function(){
        event.preventDefault()
        event.stopPropagation();
        event.stopImmediatePropagation();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.reportbtnMenu').slideUp();
        } else {
            $('.reportbtnMenu').slideUp();
            $('.showBtn').removeClass('active');
            $(this).addClass('active');
            $(this).next().filter('.reportbtnMenu').slideDown();
        }
    });
    $(document).on('click', '.-reportKonten', function(){
        $('.-reportChoose').removeClass('active');
        $('.reportbtnMenu').slideUp();
        $('.reportpopupTitle').text("LAPORKAN KONTEN");
        $('.reportpopup').show();
    });
    $(document).on('click', '.-reportAkun', function(){
        $('.-reportChoose').removeClass('active');
        $('.reportbtnMenu').slideUp();
        $(".reportpopupTitle").text("LAPORKAN AKUN");
        $('.reportpopup').show();
    })
    $(document).on('click', '.-reportlanjut', function(){
        event.preventDefault()
        $('.reportpopup').hide();
        $('.reportpopupMessage').show();
    });
    $(document).on('click', '.-reportbatal', function(){
        event.preventDefault()
        $('.reportpopup').hide();
        $('input[type="radio"]').attr('checked', false);
        $('.-reportlanjut').removeClass('active');
    });
    $(document).on('click', '.reportpopupContent', function(){
        if ($('input[type="radio"]').is(':checked')) {
            $('.-reportlanjut').addClass('active');
        }
    });
    // e: report flag

    // s:bookmark
    $(document).on('click', '.timeline__ribbon', function(){
        event.preventDefault()
        event.stopPropagation();
        event.stopImmediatePropagation();
        if ($(this).hasClass('-marked')) {
            $(this).removeClass('-marked');
        } else {
            $('.reportbtnMenu').slideUp();
            $('.showBtn').removeClass('-marked');
            $(this).addClass('-marked');
        }
    });
    // e:bookmark

});

$(window).load(function () {
    // if height banner-top 250 for ads skin
    /*
    var banrow = $(".banner-top");
    var banads = banrow.outerHeight();
    if (banads < 250) {
        $(".ads-skin").css("top", "540px");
        $(window).scroll(function () {
            var a = $(window).scrollTop(),
                c = ($(window).scrollTop(), $(window).height(), $(".header-sticky").outerHeight());

            $("footer").outerHeight();
            a > c + 220 ? $(".ads-skin").css({
                // top: "55px"
                transform: "translateY(55px)"
            }) : a < c + 220 && $(".ads-skin").css("top", "540px")
        })
    } else {}
    */

    //r1 fast sticky 
    $(".banner-right-sticky").stick_in_parent({
        parent: ".sidebar",
        inner_scrolling: false,
        spacer: false,
        offset_top: 55,
    }).on("sticky_kit:stick", function (e) {
        $(window).scroll(function (event) {
            var windowscroll = $(window).scrollTop();
            var parentss = $('.banner-right-sticky-wrap').offset().top + 300;
            if (windowscroll > parentss) {
                $('.sidebar').css('position', 'relative');
                $('.banner-right-sticky').css('position', 'relative');
                $('.banner-right-sticky').css('top', '0');
            }
        });
    }).on('sticky_kit:bottom', function (e) { }).on('sticky_kit:unbottom', function (e) { });

    //banner bottom right
    var heightL = $(".leftside").outerHeight();
    var heightR = $(".sidebar").outerHeight();
    if (heightL > heightR) {
        $(".js-giant-wp-sticky").stick_in_parent({
            parent: ".js-giant-wp-sticky-parent",
            inner_scrolling: true,
            spacer: false,
            // offset_top: $('.sticky-fixed').outerHeight() + 54,
        }).on('sticky_kit:bottom', function (e) {
            // console.log('stuck');
            // $(this).parent().css('position', 'static');
            $(this).css('position', 'fixed');
            $(this).css('top', '0');
            $(this).css('transform', 'translateY(55px)');
        }).on('sticky_kit:unbottom', function (e) {
            // console.log('unstuck');
            // $(this).parent().css('position', 'relative');
        });
    } else { }

    //scroll reward
    var rewarditem = $(".reward__widget").find(".reward__item");
    var rewardcont = $(".reward__content");
    var rewardleft = $(".reward__button--left");
    var rewardright = $(".reward__button--right");
    if (rewarditem.length > 1) {
        rewardcont.css("overflow-x", "scroll");
        // console.log(rewarditem);

        rewardright.click(function () {
            event.preventDefault();
            rewardcont.animate({
                scrollLeft: "+=688px"
            }, "slow");
        });

        rewardleft.click(function () {
            event.preventDefault();
            rewardcont.animate({
                scrollLeft: "-=688px"
            }, "slow");
        });
        rewardcont.scroll(function () {
            if (rewardcont.scrollLeft() == 0) {
                rewardright.css("display", "block");

            } else if (rewardcont.scrollLeft() > 0) {
                rewardleft.css("display", "block");
            }

        }).scroll(); // Fires the scroll function to start
    }

    //scroll tren
    var trencont = $(".timeline--trenpekanini__wrapper");
    var trenleft = $(".timeline--trenpekanini__button--left");
    var trenright = $(".timeline--trenpekanini__button--right");

    trenright.click(function () {
        event.preventDefault();
        trencont.animate({
            scrollLeft: "+=718px"
        }, "slow");
    });

    trenleft.click(function () {
        event.preventDefault();
        trencont.animate({
            scrollLeft: "-=718px"
        }, "slow");
    });
    trencont.scroll(function () {
        if (trencont.scrollLeft() == 0) {
            trenright.css("display", "block");

        } else if (trencont.scrollLeft() > 0) {
            trenleft.css("display", "block");
        }

    }).scroll(); // Fires the scroll function to start

    // slider kompasiana related
    let width_related = 263; //width item
    let relatedlist = $('.-js-related');
    let buttonR = $('.-relateRight');
    let buttonL = $('.-relateLeft');

    if (!!relatedlist) {
        itemRelate = relatedlist.find('li');
        totalRelate = itemRelate.length;
        //console.log(total);

        initRelate();
    }

    function initRelate() {
        if (totalRelate > 2) {

            //enable button left
            buttonR.removeClass('-disabled');

            buttonL.click(function (e) {
                e.preventDefault();
                relateLeft(this);
            })
            buttonR.click(function (e) {
                e.preventDefault();
                relateRight(this);
            })
        }
    }

    function relateRight(thisObj) {
        let thislist = $(thisObj).siblings('.-js-related');
        let thisButtonR = $(thisObj);
        let thisButtonL = $(thisObj).siblings('.-relateLeft');
        let maxScrollLeft = thislist.get(0).scrollWidth - thislist.get(0).clientWidth; //max scroll ul 
        let countScrollLeft = thislist.get(0).scrollLeft;
        //scroll right
        thislist.animate({
            scrollLeft: '+=' + width_related
        }, 0);
        // console.log(countScrollLeft, maxScrollLeft);

        //if scroll Right == max
        if (countScrollLeft >= (maxScrollLeft - width_related)) {
            //disable button right
            thisButtonR.addClass('-disabled');
        }
        //enable button left
        thisButtonL.removeClass('-disabled');
    }

    function relateLeft(thisObj) {
        let thislist = $(thisObj).siblings('.-js-related');
        let thisButtonL = $(thisObj);
        let thisButtonR = $(thisObj).siblings('.-relateRight');
        let countScrollLeft = thislist.get(0).scrollLeft;
        //scroll left
        thislist.animate({
            scrollLeft: (countScrollLeft - width_related)
        }, 0);
        //console.log(countScrollLeft, maxScrollLeft);

        //if scroll Left == max
        if (countScrollLeft <= (width_related)) {
            //disable button left
            thisButtonL.addClass('-disabled');
        }
        //enable button right
        thisButtonR.removeClass('-disabled');
    }

});

// slider kompasiana related vanilla
/*
let relatedlist = document.querySelector('.-js-relate');
let width_related = 263; //width item
let buttonR = document.querySelector('.-right');
let buttonL = document.querySelector('.-left');

if (!!relatedlist) {
    item = relatedlist.querySelectorAll('li');
    total = item.length;
    console.log(total);

    initSlider();
}

function initSlider() {
    if (total > 2) {
        //add overflow scroll to list
        relatedlist.addClass('scroll');

        //enable button left
        buttonR.removeClass('-disabled');

        buttonL.addEventListener('click', function (e) {
            e.preventDefault();
            slideLeft();
        })
        buttonR.addEventListener('click', function (e) {
            e.preventDefault();
            slideRight();
        })
    }
}

function slideRight() {
    let maxScrollLeft = relatedlist.scrollWidth - relatedlist.clientWidth; //max scroll ul
    let countScrollLeft = relatedlist.scrollLeft;
    //scroll right
    relatedlist.scrollLeft += width_related;
    // console.log(countScrollLeft, maxScrollLeft);

    //if scroll Right == max
    if (countScrollLeft >= (maxScrollLeft - width_related)) {
        //disable button right
        buttonR.addClass('-disabled');
    }
    //enable button left
    buttonL.removeClass('-disabled');
}

function slideLeft() {
    let maxScrollLeft = relatedlist.scrollWidth - relatedlist.clientWidth; //max scroll ul
    let countScrollLeft = relatedlist.scrollLeft;
    //scroll left
    relatedlist.scrollLeft += -width_related;
    // console.log(countScrollLeft, maxScrollLeft);

    //if scroll Left == max
    if (countScrollLeft <= (0 + width_related)) {
        //disable button left
        buttonL.addClass('-disabled');
    }
    //enable button right
    buttonR.removeClass('-disabled');
}
*/