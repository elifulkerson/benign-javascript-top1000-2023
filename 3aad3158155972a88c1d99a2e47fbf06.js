var done = false;
    $(window).on('scroll', function () {
        if(!done&&$(document).scrollTop() > 450) {

            done = true;

            $('.monthly').numerator( {
                easing: 'linear', // easing options.
                duration: 2000, // the length of the animation.
                delimiter: ' ',
                rounding: 0, // decimal places.
                toValue: 4000000000 // animate to this value.
            })
            $('.running').numerator( {
                easing: 'linear', // easing options.
                duration: 2000, // the length of the animation.
                delimiter: ' ',
                rounding: 0, // decimal places.
                toValue: 10000 // animate to this value.
            })
            $('.apub').numerator( {
                easing: 'linear', // easing options.
                duration: 2000, // the length of the animation.
                delimiter: ' ',
                rounding: 0, // decimal places.
                toValue: 120000 // animate to this value.
            })
            $('.sentpay').numerator( {
                easing: 'linear', // easing options.
                duration: 2000, // the length of the animation.
                delimiter: ' ',
                rounding: 0, // decimal places.
                toValue: 600000 // animate to this value.
            })
        }
    })