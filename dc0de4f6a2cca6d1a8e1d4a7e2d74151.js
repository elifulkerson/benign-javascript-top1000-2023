$(window).on('load', function() {
        // initialization of svg injector module
        $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
    });

    $(document).on('ready', function() {
        // initialization of header
        $.HSCore.components.HSHeader.init($('#header'));

        // initialization of show animations
        $.HSCore.components.HSShowAnimation.init('.js-animation-link');


        // initialization of text animation (typing)
        var typed = new Typed(".u-text-animation.u-text-animation--typing", {
            strings: lang_json["index"]["animation_text"],
            typeSpeed: 60,
            loop: true,
            backSpeed: 25,
            backDelay: 1500
        });

        // initialization of slick carousel
        $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

        // initialization of go to
        $.HSCore.components.HSGoTo.init('.js-go-to');
    });