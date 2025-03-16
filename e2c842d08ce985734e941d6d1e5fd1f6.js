$('.askTab_one').click(function(){
                        $('.askTab_item1').show();
                        $('.askTab_item2').hide();
                        $('.askTab_one a').addClass('current');
                        $('.askTab_two a').removeClass('current');
                    });

                    $('.askTab_two').click(function(){
                        $('.askTab_item2').show();
                        $('.askTab_item1').hide();
                        $('.askTab_two a').addClass('current');
                        $('.askTab_one a').removeClass('current');
                    });