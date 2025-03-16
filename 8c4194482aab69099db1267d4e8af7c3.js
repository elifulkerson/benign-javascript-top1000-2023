$(window).on('load', function () {
            const coverSwiper = new Swiper(".videoSwiper", {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "1.2",
                loop: true,
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                },
                parallax: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });

            var swiper = new Swiper(".rkSwiper", {
                slidesPerView: 1,
                spaceBetween: 15,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                },
            });

            var swiper = new Swiper(".photoSwiper", {
                slidesPerView: 2,
                spaceBetween: 15,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                },
            });
        });