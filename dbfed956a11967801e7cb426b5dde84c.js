$(document).ready(function () {
        $("#wtshopslider").bxSlider({
			controls: true,
            nextSelector: "#nxtwts",
            prevSelector: "#prvwts",
            nextText: '<i class="fa fa-chevron-right"></i>',
            prevText: '<i class="fa fa-chevron-left"></i>',
            pager: false,
            slideWidth: 220,
            minSlides: 1,
            maxSlides: 4,
            infiniteLoop: false,
			adaptiveHeight: true,
            hideControlOnEnd: true
        })
    });