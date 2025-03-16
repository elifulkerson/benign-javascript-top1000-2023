$(function () {

                $(".gotop").click(function () {
                    $('body').css('overflow','visible');
                    $('body').animate({scrollTop: '0'}, 500, function () {
                        $('body').css('overflow','hidden');

                    });

                });                    
                    $(".featured, .movies, .series, .tv_programs, .games, .prgormas, .more_sec").click(function () {
                        $('body').css('overflow','visible');
                        setTimeout(function() {

                            $('body').css('overflow','hidden');

                        }, 3000);
                    });
                });