! function (window, $) {

    $('.headline a,.special a').removeAttr('style')
    $('.headline p').each(function (idx, el) {
        var text = $.trim($(el).text())
        if (text == '') {
            $(el).hide()
        }
    })

    $('.contentFiles').each(function (idx, el) {
        $(el).removeAttr('style')
    })

    // 导航栏
    var navCur = 0,
        navSum = $('.nav li').length;

    $('.nav li').on('mouseenter', function () {

        navCur = $(this).index()

        if (navCur == 0 || navCur == navSum - 1) {
            $('.nav li').removeClass('showNav')
            $('.pushNav li').css('opacity', '0')
            $('.pushNav').height('0')
            return
        }

        $('.nav li').removeClass('showNav')
        $('.pushNav li').removeAttr('style')

        $(this).addClass('showNav')
        var pushli_height = $('.pushNav li:eq(' + (navCur - 1) + ')').innerHeight()
        $('.pushNav').height(pushli_height)
        $('.pushNav li:eq(' + (navCur - 1) + ')').css({
            'opacity': '1',
            'visibility': 'visible'
        })

    })

    $('.nav_wrap').on('mouseleave', () => {
        $('.nav li').removeClass('showNav')
        $('.pushNav li').removeAttr('style')
        $('.pushNav').height('0')
    })

    // $('.addSpan').each(function (idx, el) {
    //     var html = $.trim($(el).find('a').text());

    //     $(el).find('a').html(html.replace(/(.*?)\|/, `<span>$1</span> |`))

    // })


    // 融媒体栏目切换
    var rong_cur = 0; //融媒矩阵

    $('.service_fun .rong_hover').on('mouseenter', function () {
        $(this).find('.rong').addClass('show')
    })
    $('.service_fun .rong_hover').on('mouseleave', function () {
        $('.rong').removeClass('show')
    })

    $('.rong_list>p').on('mouseenter', function () {
        var p_class = $(this).find('font').attr('class'),
            target_dom = $(this).parent().find('.rongEM');


        target_dom.find('img').hide()

        if (target_dom.find('img').hasClass(p_class)) {
            target_dom.stop(true, true).slideDown(() => {
                target_dom.find('img').hide()
                target_dom.find('.' + p_class).show()
            })
            return
        }
        target_dom.slideUp()
    })

    $('.rong_list font').each(function (idx, el) {
        var alength = $(el).find('a').attr('href').length
        if (alength == 1) {
            $(el).find('a').addClass('noclick')
        }
    })

    $('.jumpShow').on('mouseenter', function () {
        $(this).find('.jumpNav').addClass('show')
    }).on('mouseleave', function () {
        $('.jumpNav').removeClass('show')
    })

    $('.rong').on('mouseleave', function () {
        $('.rong .rongEM').find('img').hide()
        $('.rong .rongEM').slideUp()
    })

    function change_rong() {
        $('.rong_name p').removeClass('rong_cur')
        $('.rong_con .rong_list').hide();
        $('.rong_name p:eq(' + rong_cur + ')').addClass('rong_cur')
        $('.rong_con .rong_list:eq(' + rong_cur + ')').show();
    }
    change_rong();
    $('.rong_name p').on('click', function () {
        rong_cur = $(this).index();
        change_rong();
    })

    $('.judSpan span').each(function (idx, el) {
        if (!$(el).hasClass('small_play_btn')) {
            $(el).parents('.judSpan').addClass('noBtn')
        }
    })

}(window, jQuery);

! function (window, $) {

    var cwCur = 0,
        cwAll = $('.cw_pic div').length,
        cwChange = function (idx) {
            $('.cw_pic div').hide()
            $('.cw_pic div:eq(' + idx + ')').show()
            $('.cw_txt li').removeClass('cur')
            $('.cw_txt li:eq(' + idx + ')').addClass('cur')
        },
        cwAutoChange = function () {
            cwCur = (cwCur + 1) % cwAll
            cwChange(cwCur)
        },
        cwAuto = window.setInterval(cwAutoChange, 3000);

    $('.cw_txt li').each(function (idx, el) {
        $(el).on('click', function () {
            if (cwCur !== idx) {
                cwCur = idx
                cwChange(idx)
            }
        })
    })

    $('.cw').on('mouseenter', function () {
        window.clearInterval(cwAuto)
    }).on('mouseleave', function () {
        cwAuto = window.setInterval(cwAutoChange, 3000)
    })


}(window, jQuery);

// 评观世界
/*(function (window, $) {
    var comment_cur = 0,
        comment_sum = $('.comment_Pic li').size() * 2,
        comment_arr = [],
        timer = 2000,
        comment_auto = null,
        comment_lock = false;

    $('.comment_Pic').prepend($('.comment_Pic li').clone())

    function autoRoll() {
        comment_fun((comment_cur + 1) % comment_sum)
    }

    comment_auto = window.setInterval(autoRoll, timer);
    $('.comment_Pic').on('mouseover', function () {
        window.clearInterval(comment_auto)
    }).on('mouseleave', function () {
        comment_auto = window.setInterval(autoRoll, timer)
    })

    $('.comment_Pic li').each(function (idx, el) {
        comment_arr[idx] = 'comment_arrHide'
        if (idx == 0 || idx == 1 || idx == 2) {
            comment_arr[idx] = `comment_arr${idx}`
        }
        if (idx == (comment_sum - 1)) {
            comment_arr[idx] = 'comment_arrLast'
        }
        if (idx == (comment_sum - 2)) {
            comment_arr[idx] = 'comment_arrpreLast'
        }

        $(el).addClass(comment_arr[idx]).show()
        $(el).find('p').hide();
    });
    $('.comment_Pic li:eq(' + comment_cur + ') p').fadeIn();
    $('.comment_Pic li:eq(' + comment_cur + ')').addClass('comment_cur');

    function comment_fun(temp_cur) {
        if (comment_lock) {
            return
        }
        comment_cur = temp_cur
        comment_lock = true
        var temp = [];
        for (var i = 0; i < comment_sum; i++) {
            temp[comment_cur] = comment_arr[i];
            comment_cur = comment_cur + 1;
            comment_cur = comment_cur % comment_sum;
        }

        $('.comment_Pic li').each(function (idx, el) {
            $('.comment_Pic li:eq(' + idx + ')').removeClass();
            $('.comment_Pic li:eq(' + idx + ')').addClass(temp[idx]);
            $('.comment_Pic li p').fadeOut();
            $(this).removeClass('comment_cur')
        });
        $('.comment_Pic li:eq(' + comment_cur + ') p').fadeIn(function () {
            comment_lock = false
        });
        $('.comment_Pic li:eq(' + comment_cur + ')').addClass('comment_cur');
    }

    $('.comment_next').on('click', function () {
        comment_fun((comment_cur + 1) % comment_sum)
    });

    $('.comment_prev').on('click', function () {
        comment_fun((comment_cur - 1 + comment_sum) % comment_sum)
    })

    $('.comment_Pic li').on('click', function () {
        comment_cur = $(this).index();
        comment_fun(comment_cur)
    });

})(window, jQuery);*/

// 大图+播放视频
(function (window, $) {

    // new Swiper(".direct_scroll", {
    //     direction: "vertical",
    //     slidesPerView: "auto",
    //     freeMode: true,
    //     scrollbar: {
    //         el: ".direct-bar",
    //         draggable: true,
    //         snapOnRelease: false,
    //     },
    //     mousewheel: true,
    // });

    var txtRoll = new Swiper(".textRoll", {
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: ".txtNext",
            prevEl: ".txtPrev",
        },
    });

    /*var read_special = new Swiper(".read_special", {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 300, //匀速时间d
        navigation: {
            nextEl: ".read_special .swiper-button-next",
            prevEl: ".read_special .swiper-button-prev",
        },
    });*/

    var marvellousSwiper = new Swiper(".marvellousSwiper", {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        speed: 300, //匀速时间d
        navigation: {
            nextEl: ".marvellousSwiper .swiper-button-next",
            prevEl: ".marvellousSwiper .swiper-button-prev",
        },
    });

    var citySwiper = new Swiper(".citySwiper", {
        slidesPerView: 6,
        spaceBetween: 15,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        freeMode: false,
        speed: 300, //匀速时间d
        navigation: {
            nextEl: ".citySwiper .swiper-button-next",
            prevEl: ".citySwiper .swiper-button-prev",
        },
    });

    // swiper_autoplay('.read_special', read_special)
    swiper_autoplay('.marvellousSwiper', marvellousSwiper)
    swiper_autoplay('.citySwiper', citySwiper)

    function swiper_autoplay(el, swiper_name) {
        $(el).on('mouseover', function () {
            swiper_name.autoplay.stop();
        }).on('mouseleave', function () {
            swiper_name.autoplay.start();
        })
    }

    var news_pic_move = new Swiper(".news_pic_move", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
        }),
        video_src = null,
        video_title = null;

    $('.news_pic_move').on('mouseover', function () {
        news_pic_move.autoplay.stop();
    }).on('mouseleave', function () {
        if (!$('.news_video').hasClass('news_video_show')) {
            news_pic_move.autoplay.start();
        }
    })

    $('.playBlock').each(function (idx, el) {
        var video_src = $(el).attr('data-vdosrc'),
            is_video = /^https?:\/\/[^\?#]+\.(mp4|m4v|wmv)$/.test(video_src);
        if (!is_video) {
            $(el).hide()
        }
    })

    $('.news_pic_move .swiper-slide,.news_pic_list li').on('click', '.playBlock', function () {
        video_src = $.trim($(this).attr('data-vdosrc'));
        video_title = $.trim($(this).parents('li,.swiper-slide').find('p').text());

        $('.news_pic_move .swiper-pagination').hide();
        $('.news_pic_move .swiper-slide p').css('opacity', '0');

        $('.news_video').show();
        $('.news_video video').attr('src', video_src);
        setTimeout(() => {
            $('.news_video .video_title').html(video_title).show();
        }, 200);

        setTimeout(() => {
            $('.news_video video')[0].play();
        }, 1500);

        news_pic_move.autoplay.stop();
    })

    $('.news_video .video_close').on('click', function () {
        $('.news_pic_move .swiper-pagination').show();
        $('.news_pic_move .swiper-slide p').css('opacity', '1');

        $('.news_video').hide();
        $('.news_video video').attr('src', '');
        $('.news_video .video_title').html(video_title).hide();

        $('.news_video video').trigger('pause')

        news_pic_move.autoplay.start();
    })

    // $(window).on('scroll', () => {
    //     var real_top = document.body.scrollTop || document.documentElement.scrollTop,
    //         vdo_top = $('.news_pic_list').offset().top - 20;

    //     console.log();

    //     if (real_top > vdo_top && $('.news_video').css('display') != 'none') {
    //         $('.news_video').addClass('fix')
    //         return
    //     }
    //     $('.news_video').removeClass('fix')
    // })

})(window, jQuery);

(function (window, $) {
    var fixed_top, scroll_bottom, news_video_bottom, fixed_bottom = parseInt($('.fixed').css('bottom'));

    function getIcon() {
        couplet_top = parseInt($('.couplet_left').css('top'));
        fixed_bottom = parseInt($('.fixed').css('bottom'))
        news_video_bottom = $(window).width() > 1400 ? 150 : 100;
    }

    getIcon()

    $(window).on('resize', function () {
        getIcon()
    })

    $(window).on('scroll', () => {
        // 显示视频窗口
        var real_top = document.documentElement.scrollTop || document.body.scrollTop,
            vdo_top = $('.news_pic_list').offset().top - 20;
        var lastMenu_top = $('.more_language').offset().top,
            lastMenu_height = $('.more_language').height(),
            fixed_height = $('.fixed_left').height(),
            stop_pos = lastMenu_top + lastMenu_height - fixed_height;

        if (real_top > $('.direct').offset().top) {
            $('.scroll_top').slideDown();
        } else {
            $('.scroll_top').slideUp();
        }

        if (real_top > vdo_top && $('.news_video').css('display') != 'none') {
            $('.news_video').addClass('fix')
        } else {
            $('.news_video').removeClass('fix')
        }

        if ($(document).height() - $('.pc_footer').innerHeight() < real_top + $(window).height()) {
            // 返回顶部
            $('.fixed').css({
                'bottom': real_top - $(document).height() + $(window).height() + $('.pc_footer').innerHeight() + fixed_bottom
            })

            // 视频窗口
            $('.news_video.fix').css({
                'bottom': real_top - $(document).height() + $(window).height() + $('.pc_footer').innerHeight() + news_video_bottom
            })

        } else {
            $('.fixed').removeAttr('style')
            $('.news_video.fix').attr('style', 'display:block;')
        }

        // 对联
        if (real_top + couplet_top >= stop_pos) {
            $('.couplet_left,.couplet_right').css({
                'position': 'absolute',
                'top': stop_pos
            })
            return
        }

        $('.couplet_right,.couplet_left').removeAttr('style')

    })

})(window, jQuery);


// (function (window, $) {

//     var fixed_top;

//     function getIcon() {
//         fixed_top = parseInt($('.fixed_left').css('top'));
//     }

//     getIcon()

//     $(window).on('resize', function () {
//         getIcon()
//     })

//     $(window).on('scroll', () => {
//         var real_top = document.body.scrollTop || document.documentElement.scrollTop,
//             vdo_top = $('.news_pic_list').offset().top - 20;

//         if (real_top > vdo_top) {
//             $('.news_video').addClass('fix')
//         } else {
//             $('.news_video').removeClass('fix')
//         }

//         var lastMenu_top = $('.more_language').offset().top,
//             lastMenu_height = $('.more_language').height(),
//             fixed_height = $('.fixed_left').height(),
//             stop_pos = lastMenu_top + lastMenu_height - fixed_height;

//         if (real_top + fixed_top >= stop_pos) {
//             $('.fixed_left,.fixed_right').css({
//                 'position': 'absolute',
//                 'top': stop_pos
//             })
//             return
//         }

//         $('.fixed_right,.fixed_left').removeAttr('style')

//     })

// })(window, jQuery);

// (function (window, $) {
//     var document_height = $(document).height(),
//         winH = $(window).height(),
//         fixed_height = $('.fixed_right').height(),
//         scroll_top_bottom = parseInt($('.scroll_top').css('bottom')),
//         news_video_bottom = 150;

//     $(window).on('scroll', () => {
//         var real_top = document.documentElement.scrollTop || document.body.scrollTop;

//         $('.fixed_right,.fixed_left,.scroll_top').removeAttr('style')

//         if (document_height - $('.pc_footer').innerHeight() < real_top + winH) {

//             console.log(1111);
//             // 对联
//             // $('.fixed_right,.fixed_left').css({
//             //     'background': 'red',
//             //     'top': document_height - real_top - $('.pc_footer').outerHeight(true) - fixed_height
//             // })

//             // 返回顶部
//             $('.scroll_top').css({
//                 'bottom': real_top - document_height + winH + $('.pc_footer').outerHeight() + scroll_top_bottom
//             })

//             // 视频窗口
//             $('.news_video.fix').css({
//                 'bottom': real_top - document_height + winH + $('.pc_footer').outerHeight() + news_video_bottom
//             })
//         }
//     });

// })(window, jQuery);



// 中国人的故事
(function (window, $) {
    $('.story_item:first').addClass('story_cur').find('.black').fadeOut(300)

    var winW = 0,
        story_show = 0,
        story_hide = 0;

    function story_change() {
        winW = $(window).width();
        story_show = winW > 1400 ? 560 : 400;
        story_hide = winW > 1400 ? 120 : 85;
        $('.story_item').each(function (idx, el) {
            if ($(el).hasClass('story_cur')) {
                $(el).css('width', story_show);
                $(el).find('p').show();
            } else {
                $(el).css('width', story_hide)
                $(el).find('p').hide();
            }
        })
    }

    story_change();

    $(window).resize(function () {
        story_change();
    })

    $('.story_item').on('mouseover', function () {
        storyCur = $(this).index();

        $(this).siblings().removeClass('story_cur').stop().animate({
            width: story_hide
        }, 200, function () {
            $(this).find('.black').fadeIn(300);
            $(this).find('p').hide();
        })

        if (!$(this).hasClass('story_cur')) {
            $(this).addClass('story_cur').stop().animate({
                width: story_show
            }, 200, function () {
                $(this).find('.black').fadeOut(300);
                $(this).find('p').show();
            })
        }
    })

})(window, jQuery);

// 广告
(function (window, $) {

    $('.showAdv').each(function () {
        var $el = $(this).find('li'),
            adv_cur = 0,
            adv_sum = $el.length,
            adv_autoplay = null;

        $el.eq(adv_cur).show();

        if (adv_sum <= 1) {
            return
        }

        function adv_play() {
            if (adv_cur == adv_sum - 1) {
                adv_cur = 0;
            } else {
                adv_cur += 1;
            }
            $el.hide();
            $el.eq(adv_cur).show();
        }

        adv_autoplay = window.setInterval(adv_play, 3000)
        $el.on('mouseover', function () {
            window.clearInterval(adv_autoplay)
        }).on('mouseleave', function () {
            adv_autoplay = window.setInterval(adv_play, 3000)
        })
    })

    $('.couplet_left p a').on('click', function () {
        $('.couplet_left').hide()
    })


})(window, jQuery);