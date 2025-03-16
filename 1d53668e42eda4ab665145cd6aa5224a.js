var render = $('.render').text();
            console.log(render);

            (function($){$.fn.clickToggle = function(func1,func2){var funcs = [func1,func2];this.data('toggleclicked',0);this.click(function(){var data = $(this).data();var tc = data.toggleclicked;$.proxy(funcs[tc], this)();data.toggleclicked = (tc + 1) % 2;});return this;};}(jQuery));
            $(function(){
                setTimeout(mpistore, 3000);function mpistore(){var mycode = getCookie('orionAnonID');$.ajax({url:'https://www.sindonews.com/mind',method:'POST',data:{sincode: mycode,tag: ''},success: function(out){if(typeof(Storage) !== "undefined" && out.success == 1){window.localStorage.setItem('idmpi', out.result.sessionid);}console.log('mpi-logging');}});}
                
                var site_url = 'https%3A%2F%2Fwww.sindonews.com%2F';
                orionInit(site_url);

                var imagesLoad = new LazyLoad({
                    elements_selector: '.lazyload',
                    callback_error: function() {
                        $('img.error').remove();
                    }
                });

                var lazyLoadInstances = [];
                var initOneLazyLoad = function(horizContainerElement) {
                    var oneLL = new LazyLoad({
                        container: horizContainerElement
                    });
                    lazyLoadInstances.push(oneLL);
                };

                var lazyHiLite = new LazyLoad({
                    elements_selector: '.lazyhilite',
                    callback_enter: initOneLazyLoad,
                    unobserve_entered: true
                });

                var lazyScope = new LazyLoad({
                    elements_selector: '.lazyscope',
                    callback_error: function() {
                        $('img.error').remove();
                    }
                });

                var lazyOpini = new LazyLoad({
                    elements_selector: '.lazyopini',
                    callback_error: function() {
                        $('img.error').remove();
                    }
                });

                var lazyInfografis = new LazyLoad({
                    elements_selector: '.lazyinfografis',
                    callback_error: function() {
                        $('img.error').remove();
                    }
                });

                var lazyVideo = new LazyLoad({
                    elements_selector: '.lazyvideo',
                    callback_error: function() {
                        $('img.error').remove();
                    }
                });
                
                imgLoading();
                function imgLoading(){
                    $('img').attr('loading','lazy');
                }
                
                /* Ajax Widget */
                $.ajax({url:'https://www.sindonews.com/ajaxpage/dhilite',method:"GET",success:function(result){$('#hilite').html(result);imagesLoad.update();hiliteTracking();imgLoading();}});
                var widgetScope = new LazyLoad({elements_selector:'#sindoscope',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dscope',method:"GET",success:function(result){$('#sindoscope').html(result);$('.hilite-shadow').remove();showScope();imgLoading();}});}});
                var widgetInfografis = new LazyLoad({elements_selector:'#infografis',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dinfografis',method:"GET",success:function(result){$('#infografis').html(result);lazyInfografis.update();showInfografis();imgLoading();}});}});
                var widgetVideo = new LazyLoad({elements_selector:'#video',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dvideo',method:"GET",success:function(result){$('#video').html(result);lazyVideo.update();showVideo();imgLoading();}});}});
                var widgetPhoto = new LazyLoad({elements_selector:'#photo',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dphoto',method:"GET",success:function(result){$('#photo').html(result);imagesLoad.update();imgLoading();}});}});

                var widgetCerita = new LazyLoad({elements_selector:'#cerita',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dsup/29',method:"GET",success:function(result){$('#cerita').html(result);imagesLoad.update();imgLoading();}});}});
                var widgetJagad = new LazyLoad({elements_selector:'#jagad',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dsup/46',method:"GET",success:function(result){$('#jagad').html(result);imagesLoad.update();imgLoading();}});}});
                var widgetRed = new LazyLoad({elements_selector:'#red',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dsup/187',method:"GET",success:function(result){$('#red').html(result);imagesLoad.update();imgLoading();}});}});
                /*var widgetKoran = new LazyLoad({elements_selector:'#koran',callback_set:function(){$.ajax({url:'',method:"GET",success:function(result){$('#koran').html(result);imagesLoad.update();trackKoran();}});}});*/

                var widgetStreaming = new LazyLoad({elements_selector:'#streaming',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dstreaming',method:"GET",success:function(result){$('#streaming').html(result);imagesLoad.update();imgLoading();}});}});
                var widgetVideoads = new LazyLoad({elements_selector:'#videoads',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dvideoads',method:"GET",success:function(result){$('#videoads').html(result);imagesLoad.update();imgLoading();}});}});

                var widgetOpini = new LazyLoad({elements_selector:'#opini',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dopini',method:"GET",success:function(result){$('#opini').html(result);lazyOpini.update();imgLoading();}});}});
                var widgetPopular = new LazyLoad({elements_selector:'#popular',callback_set:function(){$.ajax({url:'https://www.sindonews.com/ajaxpage/dpopular',method:"GET",success:function(result){$('#popular').html(result);imagesLoad.update();popularTracking();imgLoading();}});}});

                
                function trenTopik(id_topik, slug_topik, url_topik) {
                    $.ajax({
                        url: 'https://www.sindonews.com/dtren',
                        method: 'GET',
                        data: {
                            id: id_topik,
                            topik: slug_topik
                        },
                        success: function(result) {
                            $('#tren-result').html(result);
                            $('.btn-tren-more a').attr('href', url_topik);
                            imagesLoad.update();
                        }
                    });
                }

                var trenDefaultID = $('.tren-0').attr('data-id');
                var trenDefaultTopik = $('.tren-0').attr('data-slug');
                var trenURLTopik = $('.tren-0').attr('data-url');
                trenTopik(trenDefaultID, trenDefaultTopik, trenURLTopik);

                $('.trenlist').each(function(i) {
                    $('.tren-' + i).click(function() {
                        $('.trenlist').removeClass('active');
                        var trenID = $('.tren-' + i).attr('data-id');
                        var trenTopik = $('.tren-' + i).attr('data-slug');
                        var trenURL = $('.tren-' + i).attr('data-url');
                        $.ajax({
                            url: 'https://www.sindonews.com/dtren',
                            method: 'GET',
                            data: {
                                id: trenID,
                                topik: trenTopik
                            },
                            success: function(result) {
                                $('#tren-result').html(result);
                                $('.tren-' + i).addClass('active');
                                $('.btn-tren-more a').attr('href', trenURL);
                                imagesLoad.update();
                            }
                        });
                    });
                });

                var numPilihan = 0;
                var totalPilihan = '5';
                setInterval(function() {
                    if (numPilihan > (totalPilihan - 1)) {
                        numPilihan = 0;
                    }

                    var titlePilihan = $('.queues-' + numPilihan).attr('data-title');
                    var urlPilihan = $('.queues-' + numPilihan).attr('data-url');
                    var textPilihan = '<p>' + titlePilihan + ' <span><a href="' + urlPilihan + '">Lihat Selengkapnya <img src="https://sd.sindonews.net/wp/2022/d/images/chevron-right.png" width="7" height="13" alt="icon right"></a></span></p>';
                    $('.show-pilihan').empty().append(textPilihan);
                    numPilihan++;
                }, 7000);

                $('.center-fclose').clickToggle(function() {
                    $('.center-float-large').addClass('mbmin50').removeClass('mb0').addClass('clicked');
                    $('.up').show();
                    $('.down').hide();
                }, function() {
                    $('.center-float-large').removeClass('mbmin50').addClass('mb0').removeClass('clicked');
                    $('.up').hide();
                    $('.down').show();
                });

                $(window).scroll(function() {
                    if (($(window).scrollTop() + $(window).height()) >= ($(document).height() - 600)) {
                        $('.center-float-large').addClass('mbmin50').removeClass('mb0');
                        $('.up').show();
                        $('.down').hide();
                    } else {
                        if (!$('.center-float-large').hasClass('clicked')) {
                            $('.center-float-large').removeClass('mbmin50').addClass('mb0');
                            $('.up').hide();
                            $('.down').show();
                        }
                    }
                });

                $('.hl-event').each(function(i) {
                    $('.hl-track-' + i + ' a').click(function() {
                        var topHLnum = $('.hl-track-' + i).attr('data-no');
                        var topHLID = $('.hl-track-' + i).attr('data-id');
                        var topHLtitle = $('.hl-track-' + i + ' a').text();
                        var topHLlink = $('.hl-track-' + i + ' a').attr('href');
                        var topHLdate = $('.hl-track-' + i).attr('data-publish');
                        var topHLkanal = $('.hl-track-' + i).attr('data-kanal');

                        window.dataLayer.push({
                            event: 'promotion_click',
                            event_category: 'article',
                            event_action: 'article_list_click',
                            event_label: topHLkanal + ' - ' + topHLlink,
                            content_type: 'artikel',
                            judul: topHLtitle,
                            publish_date: topHLdate,
                            ecommerce: {
                                promoClick: {
                                    promotions: [{
                                        id: topHLID,
                                        name: topHLtitle,
                                        creative: topHLlink,
                                        position: topHLnum + '_headline'
                                    }]
                                }
                            }
                        });
                    });
                });

                $('.latest-event').each(function(i) {
                    $('.latest-track-' + i + ' a').click(function() {
                        var topHLnum = $('.latest-track-' + i).attr('data-no');
                        var topHLID = $('.latest-track-' + i).attr('data-id');
                        var topHLtitle = $('.latest-track-' + i + ' .news-title a').text();
                        var topHLlink = $('.latest-track-' + i + ' .news-title a').attr('href');
                        var topHLdate = $('.latest-track-' + i).attr('data-publish');
                        var topHLkanal = $('.latest-track-' + i).attr('data-kanal');

                        window.dataLayer.push({
                            event: 'promotion_click',
                            event_category: 'article',
                            event_action: 'article_list_click',
                            event_label: topHLkanal + ' - ' + topHLlink,
                            content_type: 'artikel',
                            judul: topHLtitle,
                            publish_date: topHLdate,
                            ecommerce: {
                                promoClick: {
                                    promotions: [{
                                        id: topHLID,
                                        name: topHLtitle,
                                        creative: topHLlink,
                                        position: topHLnum + '_berita_terkini'
                                    }]
                                }
                            }
                        });
                    });
                });

                function popularTracking() {
                    $('.pop-event').each(function(i) {
                        $('.pop-track-' + i + ' a').click(function() {
                            var topHLnum = $('.pop-track-' + i).attr('data-no');
                            var topHLID = $('.pop-track-' + i).attr('data-id');
                            var topHLtitle = $('.pop-track-' + i + ' a h3').text();
                            var topHLlink = $('.pop-track-' + i + ' a').attr('href');
                            var topHLdate = $('.pop-track-' + i).attr('data-publish');
                            var topHLkanal = $('.pop-track-' + i).attr('data-kanal');

                            window.dataLayer.push({
                                event: 'promotion_click',
                                event_category: 'article',
                                event_action: 'article_list_click',
                                event_label: topHLkanal + ' - ' + topHLlink,
                                content_type: 'artikel',
                                judul: topHLtitle,
                                publish_date: topHLdate,
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            id: topHLID,
                                            name: topHLtitle,
                                            creative: topHLlink,
                                            position: topHLnum + '_terpopuler'
                                        }]
                                    }
                                }
                            });
                        });
                    });
                }

                function hiliteTracking() {
                    $('.hi-lite-cover a').click(function() {
                        window.dataLayer.push({
                            event: 'general_event',
                            event_category: 'article',
                            event_action: 'explore_more',
                            event_label: 'hilite_top_wp',
                            data_source: 'Non AMP',
                        });
                    });

                    $('.hilite-slide').each(function(i) {
                        $('.hilite-' + i + ' a').click(function() {
                            var id_news = $('.hilite-' + i).attr('data-id');
                            var title = $('.hilite-' + i).attr('data-title');
                            var kanal = $('.hilite-' + i).attr('data-kanal');
                            var subkanal = $('.hilite-' + i).attr('data-subkanal');
                            var publish = $('.hilite-' + i).attr('data-publish');
                            var url = $('.hilite-' + i).attr('data-url');
                            var tipe = $('.hilite-' + i).attr('data-content-type');
                            var author = $('.hilite-' + i).attr('data-author');
                            var editor = $('.hilite-' + i).attr('data-editor');
                            var number = $('.hilite-' + i).attr('data-no');

                            window.dataLayer.push({
                                event: 'promotion_click',
                                event_category: 'article',
                                event_action: 'article_list_click',
                                event_label: kanal + '_' + url,
                                content_type: tipe,
                                judul: title,
                                kanal: kanal,
                                subkanal: subkanal,
                                article_id: id_news,
                                publish_date: publish,
                                data_source: 'Non AMP',
                                author: author,
                                editor: editor,
                                ecommerce: {
                                    promoClick: {
                                        promotions: [{
                                            id: id_news,
                                            name: title,
                                            creative: url,
                                            position: number + '_hilite_top_wp'
                                        }]
                                    }
                                }
                            });
                        });
                    });
                }

                $('.mnc-portal').each(function(i) {
                    $('.portal-track-' + i + ' a').click(function() {
                        var topHLnum = $('.portal-track-' + i).attr('data-no');
                        var topHLID = $('.portal-track-' + i).attr('data-id');
                        var topHLtitle = $('.portal-track-' + i + ' .news-title a').text();
                        var topHLlink = $('.portal-track-' + i + ' .news-title a').attr('href');
                        var topHLdate = $('.portal-track-' + i).attr('data-publish');
                        var topHLkanal = $('.portal-track-' + i).attr('data-kanal');

                        window.dataLayer.push({
                            event: 'promotion_click',
                            event_category: 'article',
                            event_action: 'article_list_click',
                            click_label: topHLkanal + ' - ' + topHLlink,
                            content_type: 'artikel',
                            judul: topHLtitle,
                            publish_date: topHLdate,
                            ecommerce: {
                                promoClick: {
                                    promotions: [{
                                        id: topHLID,
                                        name: topHLtitle,
                                        creative: topHLlink,
                                        position: topHLnum + '_berita_terkini'
                                    }]
                                }
                            }
                        });
                    });
                });

                $('.advertorial').each(function(i) {
                    $('.advpos-' + i + ' a').click(function() {
                        var topHLnum = $('.advpos-' + i).attr('data-no');
                        var topHLID = $('.advpos-' + i).attr('data-id');
                        var topHLtitle = $('.advpos-' + i + ' a').text();
                        var topHLlink = $('.advpos-' + i + ' a').attr('href');
                        var topHLdate = $('.advpos-' + i).attr('data-publish');
                        var topHLkanal = $('.advpos-' + i).attr('data-kanal');

                        window.dataLayer.push({
                            event: 'promotion_click',
                            event_category: 'article',
                            event_action: 'article_list_click',
                            event_label: topHLkanal + ' - ' + topHLlink,
                            content_type: 'artikel',
                            judul: topHLtitle,
                            publish_date: topHLdate,
                            ecommerce: {
                                promoClick: {
                                    promotions: [{
                                        id: topHLID,
                                        name: topHLtitle,
                                        creative: topHLlink,
                                        position: 'advertorial-' + topHLnum + '_berita_terkini'
                                    }]
                                }
                            }
                        });
                    });
                });

                var pageStatus = new LazyLoad({
                    elements_selector: '.list-kanal-more',
                    callback_enter: function() {
                        window.dataLayer.push({
                            event: 'general_event',
                            event_category: 'scroll_depth',
                            event_action: '100%',
                            event_label: 'https://www.sindonews.com/'
                        });
                    }
                });

                /* Swipe Widget Video */
                function showVideo() {
                    var SwiperVideo = new Swiper(".SwiperVideo", {
                        slidesPerView: "auto",
                        spaceBetween: 24,
                        loop: true,
                        navigation: {
                            nextEl: ".SwiperVideo-next",
                            prevEl: ".SwiperVideo-prev"
                        }
                    });

                    SwiperVideo.on('slideChange', function() {
                        lazyVideo.update();
                    });
                }

                /* Swipe Infografis */
                function showInfografis() {
                    var SwiperInfografis = new Swiper(".SwiperInfografis", {
                        slidesPerView: "auto",
                        centeredSlides: true,
                        loop: true,
                        navigation: {
                            nextEl: ".swiper-button-next-infografis",
                            prevEl: ".swiper-button-prev-infografis"
                        }
                    });

                    SwiperInfografis.on('slideChange', function() {
                        lazyInfografis.update();
                    });
                }

                /* Swipe Sindocope */
                function showScope() {
                    lazyScope.update();

                    var SwiperScope = new Swiper(".SwiperScope", {
                        slidesPerView: "auto",
                        centeredSlides: true,
                        loop: true,
                        navigation: {
                            nextEl: ".swiper-button-next-scope",
                            prevEl: ".swiper-button-prev-scope"
                        }
                    });

                    SwiperScope.on('slideChange', function() {
                        lazyScope.update();
                    });
                }
                
                function trackKoran(){
                    window.dataLayer.push({
                        event: 'general_event',
                        event_category: 'e-paper_wp_desktop',
                        event_action: 'e-paper_wp_click_desktop',
                        event_label: 'koran-sindo.com'
                    });
                }

                                    var lazyEvent = new LazyLoad({
                        elements_selector: '.lazyload',
                        callback_enter: initOneLazyLoad,
                        unobserve_entered: true
                    });

                    var SwiperNewsMpi = new Swiper(".SwiperEvents", {
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        loop: true,
                        navigation: {
                            nextEl: ".SwiperEvents-next",
                            prevEl: ".SwiperEvents-prev"
                        }
                    });

                    SwiperNewsMpi.on('slideChange', function() {
                        lazyEvent.update();
                    });
                
                var b_subuh = new Date('2023-10-16 04:14:00').getTime();
                var a_subuh = new Date('2023-10-16 04:20:00').getTime();
                var b_dzuhur = new Date('2023-10-16 11:41:00').getTime();
                var a_dzuhur = new Date('2023-10-16 11:47:00').getTime();
                var b_ashar = new Date('2023-10-16 14:46:00').getTime();
                var a_ashar = new Date('2023-10-16 14:52:00').getTime();
                var b_maghrib = new Date('2023-10-16 17:48:00').getTime();
                var a_maghrib = new Date('2023-10-16 17:54:00').getTime();
                var b_isya = new Date('2023-10-16 18:57:00').getTime();
                var a_isya = new Date('2023-10-16 19:03:00').getTime();
                                var callPrayer = setInterval(function(){
                    var datetime = moment().format('YYYY-MM-DD HH:mm:ss');
                    var current = new Date(datetime).getTime();
                    
                    if (current >= b_subuh && current <= a_subuh){
                        showadzan('fajr','Subuh');
                        clearInterval(callPrayer);
                    }
                    
                    if (current >= b_dzuhur && current <= a_dzuhur){
                        showadzan('dzuhur','Dzuhur');
                        clearInterval(callPrayer);
                    }
                    
                    if (current >= b_ashar && current <= a_ashar){
                        showadzan('ashar','Ashar');
                        clearInterval(callPrayer);
                    }
                    
                    if (current >= b_maghrib && current <= a_maghrib){
                        showadzan('maghrib','Maghrib');
                        clearInterval(callPrayer);
                    }
                    
                    if (current >= b_isya && current <= a_isya){
                        showadzan('isya','Isya');
                        clearInterval(callPrayer);
                    }
                }, 1000);
                
                function showadzan(fajr,adzan) {
                    $('#timesignal').remove();
                    
                    $.ajax({
                        url: 'https://www.sindonews.com/adzan/waktuadzan',
                        method: 'POST',
                        data: {fa:'aHR0cHM6Ly93d3cuc2luZG9uZXdzLmNvbS9hZHphbi9k',t:fajr,a:adzan},
                        success: function (result) {                            
                            $('.showadzan').html(result).addClass('sadzan').removeClass('hadzan');
                        }
                    });
                }
                
                function bindEvent(element, eventName, eventHandler) {
                    if (element.addEventListener){
                        element.addEventListener(eventName, eventHandler, false);
                    } else if (element.attachEvent) {
                        element.attachEvent('on' + eventName, eventHandler);
                    }
                }

                bindEvent(window, 'message', function (e) {
                    if (typeof e.data.playerAction !== 'undefined'){
                        if(e.data.playerAction === 'stop'){
                            $('.showadzan').removeClass('sadzan').addClass('hadzan');
                            setTimeout(function(){
                                $('.showadzan').children().remove();
                            },3000);
                        }
                        console.log(e.data.playerAction);
                    }
                    
                    if (typeof e.data.adzanAction !== 'undefined'){
                        window.dataLayer.push({
                            event: 'general_event',
                            event_category: 'waktu_adzan',
                            event_action: e.data.adzanAction,
                            event_label: 'https://www.sindonews.com/'
                        });
                    }

                });

                setTimeout(mncshow,3000);
                function mncshow() {
                    $.ajax({url:'https://salam.sindo.media/widget/wp',type:'GET',success:function(result){$('.widget-partner').html(result);}});
                }
            });

                        /*
            window._izq.push(["registerSubscriptionCallback",function(obj){
                if(obj.statuscode === 1 || obj.statuscode === 2) {
                    fcmRequest();
                }
            }]);
            */
            function fcmUcookie(){var cookiename='d-www';var subdomain='www.sindonews.com';var getme = getCookie(cookiename);if(getme === ''){setCookie(cookiename,randomuv(),7,subdomain);fcmRequest();console.log('sin.do-logging');}else{console.log('sin.do-logging: '+getme+'#!@#'+sindotime);}}
            function randomuv(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);}