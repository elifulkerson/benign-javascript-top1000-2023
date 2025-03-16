$(document).ready(function () {
        // slick initialization
        if ($(window).width() < 525) {
            $("#shortsslider-97760").on('init', function(event, slick) {
                let currentslide = slick.currentSlide
                let first_elt = slick.$slides.get(currentslide);
                let dataVideo = first_elt.getAttribute('data-video-id')
                $("#"+dataVideo).trigger('play');
                // console.log("slick initialised==>", slick )
            });
        }
        $("#shortsslider-97760").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 500,
            swipeToSlide: true,
            infinite: true,
            arrows: false,
            dots: false,
            variableWidth: true,
            responsive: [{
                breakpoint: 360,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    variableWidth: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 500,
                },
            },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        variableWidth: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 500,
                    },
                },
                {
                    breakpoint: 998,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        variableWidth: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        speed: 500,
                    },
                },
            ],
        });

         // Run when slides change
        if ($(window).width() < 525) {
            $("#shortsslider-97760").on('beforeChange', function(event, slick, currentSlide) {
                let before_elt = slick.$slides.get(currentSlide);
                let dataVideo = before_elt.getAttribute('data-video-id')
                $("#"+dataVideo).trigger('load');
                // console.log("beforeChange==>"+dataVideo + ",load" )
            });
            $("#shortsslider-97760").on('afterChange', function(event, slick, currentSlide){
                let after_elt = slick.$slides.get(currentSlide);
                let dataVideo = after_elt.getAttribute('data-video-id')
                $("#"+dataVideo).trigger('play');
                // console.log("afterChange==>"+ dataVideo+ ",play" )
            });
        }
    });