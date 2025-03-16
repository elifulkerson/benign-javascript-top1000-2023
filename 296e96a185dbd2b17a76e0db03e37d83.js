$(document).on('ready', function() {
        $(".variable").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            variableWidth: true,
            centerMode: true
        });
    });