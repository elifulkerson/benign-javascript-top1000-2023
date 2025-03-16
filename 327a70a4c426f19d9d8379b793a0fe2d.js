jQuery(document).ready(function () {
                    new Swiper('#headlines .swiper-container', {
                        direction: 'vertical',
                        slidesPerView: 'auto',
                        freeMode: true,
                        scrollbar: {
                            el: '#headlines .swiper-container .swiper-scrollbar',
                            draggable: true,
                        },
                        mousewheel: true,
                    });
                });