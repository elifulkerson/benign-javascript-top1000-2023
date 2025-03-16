jQuery(document).ready(function() {
    //carrusel();
    //carruselOtros();
    carruselContent();
    carruselSuperlike();
    carrusel();
    carruselImperdibles();
});

/*
function carruselContent() {
    jQuery('.owl-carousel-content').owlCarousel({
        items: 5,
        nav: true,
        dots: true,
        margin: 5,
        stagePadding: 5,
        loop: true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true
        },
        350:{
            items:2,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
}
*/

function carruselContent() { 
    jQuery('.owl-carousel-content').owlCarousel({
      items: 5,
      nav: true,
      dots: true,
      margin: 5,
      stagePadding: 5,
      loop: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        350: {
          items: 2,
          nav: true
        },
        600: {
          items: 3,
          nav: false
        },
        1000: {
          items: 4,
          nav: true,
          loop: false
        },
        1400: {
          items: 6,
          nav: true,
          loop: false
        }
      }
    });
}


/*
jQuery('.owl-carousel-content').owlCarousel({
        items: 8,
        nav: true,
        dots: true,
        autoWidth: true,
        margin: 5,
        stagePadding: 5,
    });
*/

function carruselSuperlike() {
    jQuery('.owl-carousel-content-notas').owlCarousel({
        items: 4,
        nav: true,
        dots: true,
        autoWidth: true,
        margin: 5,
        stagePadding: 5,

    });
}

/*function carruselOtros() {
    jQuery('.owl-carousel').owlCarousel({
        margin: 10,
        autoWidth: true,
        items: 4
    });
    jQuery('.owl-carousel').on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            jQuery('.owl-carousel').trigger('next.owl');
        } else {
            jQuery('.owl-carousel').trigger('prev.owl');
        }
        e.preventDefault();
    });
    jQuery('.owl-carousel').owlCarousel({
        margin: 10,
        autoWidth: true,
        items: 4
    });
}*/

function carrusel() {
    jQuery('.owl-carousel').owlCarousel({
        loop:true,
        navText:["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        margin:10,
        nav:true,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        responsive:{
            1280:{
                items:4
            },
            1440:{
                items:5
            },
            1920:{
                items:6
            }
        }
    })
}
function carruselImperdibles() {
    jQuery('.owl-carousel-content-imperdibles').owlCarousel({
        items: 5,
        nav: true,
        dots: true,
        margin: 5,
        stagePadding: 5,
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            350: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
            1400: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
}