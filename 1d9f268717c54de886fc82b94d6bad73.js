//Header and Search animation no homepage
    function SearhAnimationOnHomepage() {
        var interval = setInterval(function() {
            if (!!window.$) {
                clearInterval(interval);
                /* Header - Sticky on Scroll */
                $(document).scroll(function() {
                    var sticky_offset = 0;
                    if ($(this).scrollTop() > sticky_offset) {
                        $('.header, .top-nav, .menu-icon').addClass('sticky');

                        $('.homepage-logo svg #Web-Header').css('fill', '#ffffff');
                        if ($(window).width() <= 767) {
                            $('.logo').addClass('logo-onMobile');
                            $('.search.inside').addClass('search-onMobile');
                            $('.top-nav').removeClass('sticky');
                        }
                    } else {
                        $('.header, .top-nav, .menu-icon').removeClass('sticky');
                        $('.logo').removeClass('logo-onMobile');
                        $('.search.inside').removeClass('search-onMobile');
                        $('.homepage-logo svg #Web-Header').css('fill', '#27b5bb');
                    }
                    var homeSearchPos = document.getElementById("middle-block").offsetTop;
                    var y = window.pageYOffset;
                    var d = document.getElementById("search_home");
                    var windowwidth = window.innerWidth;
                    if (y > homeSearchPos && windowwidth > 969) {
                        if (d.className.indexOf("sticky") == -1) {
                            d.className = d.className + " sticky";
                        }
                    } else if (y < homeSearchPos && windowwidth > 969) {
                        d.className = "search home";
                    }
                    if (y > homeSearchPos && windowwidth <= 969) {
                        var homeSearchPos1 = $('.side-block.right').offset().top - 50;
                        var homeAddspos = $('#Leaderboard').offset().top - 50;
                        var $w = $(document).scroll(function() {
                            if ($w.scrollTop() > homeSearchPos1 || $w.scrollTop() > homeAddspos) {
                                $('.middle-block .search').addClass('inside search-onMobile');
                                $('.middle-block .search').removeClass('home sticky');
                            } else {
                                $('.middle-block .search').removeClass('inside search-onMobile');
                                $('.middle-block .search').addClass('home');
                            }
                        });
                    }
                });


            }
        }, 100);
    } //end SearhAnimationOnHomepage