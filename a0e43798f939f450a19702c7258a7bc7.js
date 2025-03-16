$(document).ready(function () {
        $("#slick122458").slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            variableWidth: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            swipeToSlide:true,
            responsive: [
                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        speed: 300,
                        infinite: true,
                        dots: false,
                        variableWidth: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    },
                },
            ],
            responsive: [
                {
                    breakpoint: 998,
                    settings: {
                        slidesToShow: 2,
                        speed: 300,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        variableWidth: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    },
                },
            ],
        });
    });