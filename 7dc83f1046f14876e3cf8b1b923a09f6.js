/*** START of Javascript Public ****/
$(document).ready(function() {
  /*START REPLACE URL BOBOBOBO*/
  $("#network-bobobobo a").attr("href", "http://www.bobobobo.com/page/wanita?utm_source=Liputan%206%20Top%20Link&utm_medium=Partnership&utm_campaign=Affiliate&utm_content=Partnership_Liputan-6_Top-Link_[Affiliate]&utm_term=Partnership_Liputan-6_Top-Link_[Affiliate]");

  /*EOF REPLACE URL BOBOBOBO*/
  //auto resize for flash ads banner
  if ($("#Advertisement").length > 0) {
    if ($(".woi-carousel-slide").length > 0) {
      var flashbannerwidth = $(".woi-carousel-slide").width();
    } else if ($("#latest-news-headline").length > 0) {
      var flashbannerwidth = $("#latest-news-headline").width();
    } else {
      var flashbannerwidth = $(".gallery-images").width();
    }
    $("#middle_ads #Advertisement").attr('width', flashbannerwidth);
  }
});


//remove duplicate iframe on rumah indofood ads
$(window).load(function() {
  $('#div-gpt-ad-1452747766035-8 > iframe').remove();
});

$(document).ready(function() {
  var sponsoredArticle = $('.articles--iridescent-list--text-item__sponsored-label').parent().parent().parent();

  var articlePlace = [1, 2];

  sponsoredArticle.each(function(index, value) {
    $(value).insertAfter($("article.articles--iridescent-list--item").eq(articlePlace[index]));

  });

  // fix video embed mail online
  $('iframe[title*="MailOnline"]').attr('width', '100%');
});

/* Hide popular article count #128641363 */
$(document).ready(function() {
  $('.article-snippet--small__count').hide();

});

/* BEGIN IPIFY */
$(function() {
  var c = $('<script>', {
    text: "function getIP(json){if (console) { console.log('IP: ' + json.ip); } }"
  });
  var i = $('<script>', {
    src: "https://api.ipify.org?format=jsonp&callback=getIP"
  });
  $('head').append(c);
  $('head').append(i);
});
/* END IPIFY */



$(document).ready(function() {
  // remove me after fix-style-remove-custom-script
  $(".content-promotion--header-stm__link-title").css('display', 'block');
});
/*** END of Javascript Public ****/

/*** START of Moving layout for adwords ****/
$(document).ready(function(){
  if(window.kmklabs.pageType =='ChannelPage'){
    
    //$(".fixed-sidebar .content-promotion:eq(0)").after($(".channel-ad_ad-mr1").parents(".box"));  
    
    if(kmklabs.channel.full_slug =="pilkada"){
     	$(".newsletter_desktop-aside").before($(".channel-ad_ad-mr1").parents(".box"));
     }
	}else if(window.kmklabs.pageType == "ReadPage" && window.kmklabs.channel.full_slug!="apec"){
  	$(".fixed-sidebar #popular-articles").after($(".article-ad_ad-mr1").parents(".box"));
	}
  
});
/*** END of Moving layout for adwords ****/

/*** START of BUG SINGLEDOMAIN ****/
if(window.kmklabs.pageType == "ReadPage" && window.location.hostname.indexOf('www') === -1) {
  $(document).on('shown.bs.modal', function() {
    var checkExist = setInterval(function() {
      if($('.conversation--form form').length) {
        var path = $('.conversation--form form').attr("action");
        var pathArray = path.split("/read");
        path = "/read" + pathArray[1];
        $('.conversation--form form').attr("action", path);
        clearInterval(checkExist);
      }
    }, 1000);
  });
}
/*** END of BUG SINGLEDOMAIN ****/

/*** START of [ADS] Additional javascript for banner ****/
function gamScrollTweakHeader() {
	document.addEventListener('scroll', function(){
      var elSibling;
      var btnMore = document.querySelector('.hideshow.more.navbar--menu--item__more-item.navbar--menu--item__more-item_slim');
      // var moreWrapper = btnMore.querySelector('.dropdown-menu.navbar--menu--item__more-sub-menu');
      // elSibling = btnMore.previousElementSibling.previousElementSibling;
	    // if(document.documentElement.scrollTop > 50){
	    //     elSibling.style.display = 'none';
	    // }else{
	    //     elSibling.style.display = 'inline-block';
	    // }
	});
}
/*** END of [ADS] Additional javascript for banner ****/

/*** START of [URL Parameter] - [#161981220 - #161277187] [Visual Adjustment] Margin--Header-Body-Footer [readpage, home, subkanal, subchannel, video, photo] ****/
(function () {
    const cssLoader = {
        'urlPrefix': '?loadCosmetic',
        'cssFileLocation': './index.css',
        'cssInline': `
        
        .navbar--top__wrapper {
            padding: 0px 12px;
        }
        
        .navbar--menu__list {
            padding: 0px 12px;
        }
        
        .navbar--menu__right-panel {
            padding-right: 12px;
            width: 135px;
        }
        
        .navbar--menu__list_slim {
            width: 835px!important;
        }
        
        .navbar--menu_slim .navbar--menu__right-panel {
            padding-right: 0px;
            width: 133px;
        }
        
        .navbar--menu-subchannel {
            padding: 0px 12px;
        }
        
        .navbar--menu-subchannel__container{
            padding: 0px 12px;
        }
        
        .footer__row {
            padding: 0px 12px;
        }
        
        .footer__link-wrapper {
            width: 477px;
        }
    
        .container-main #main {
            padding: 0px 12px;
        }
    
        .container-main_slim #main {
            padding: 0px 12px;
        }
    
        .inner-container-article {
            width: 640px;
        }
    
        .photogalleries .container-main #main {
            padding: 0px 0px;
        }
    
        .photogalleries .container-main_slim #main {
            padding: 0px 0px;
        }
    
    
        .videogalleries .container-main #main {
            padding: 0px 0px;
        }
    
        .videogalleries .container-main_slim #main {
            padding: 0px 0px;
        }
    
        /* add padding in photo */
    
        .photogalleries .gallery--headlines__featured-aside {
            padding: 0px 12px;
            background-color: #FFFFFF;
        }
    
        .photogalleries .gallery--headlines__featured {
            position: relative;
            float: left;
            width: 725px;
        }
    
        .photogalleries .gallery--headlines--featured--photo__image img {
            position: relative;
            bottom: 21px;
        }
    
        .photogalleries section#photo-gallery-popular {
            padding: 0px 12px;
        }
    
        .photogalleries .gallery--grid__item.js-gallery-grid-item {
            width: 230px;
            margin-right: 12px;
        }
    
        .photogalleries section#photo-gallery-recommended {
            padding: 0px 12px;
        }
    
        .photogalleries section#photo-gallery-latest {
            padding: 0px 12px;
        }
    
        .videogalleries .content {
            padding: 0px 12px;
        }
    
        .videogalleries .gallery--headlines-big--video__wrapper {
            width: 294px;
        }
    
    
        .videogalleries .gallery--grid__item.js-gallery-grid-item.gallery--grid__item-headline {
            margin-right: 12px;
        }
    
        .videogalleries .main .content .box-main {
            margin-right: 16px;
        }
        
        `,
        'cssCallerExternal': function () {
            const cssLink = document.createElement("link");
            cssLink.setAttribute("rel", "stylesheet");
            cssLink.setAttribute("type", "text/css");
            cssLink.setAttribute("href", this.cssFileLocation);
            return cssLink;
        },
        'cssCreator': function () {
            const styleTag = document.createElement('style');
            styleTag.type = 'text/css';
            styleTag.appendChild(document.createTextNode(this.cssInline));
            return styleTag;

        },
        'getURL': function () {
            const rawURL = window.location.href;
            const headDOM = document.querySelector('head');
            const bodyDOM = document.querySelector('body');

            // load from href
            // rawURL.includes(this.urlPrefix) ? headDOM.appendChild(this.cssCallerExternal()) : null;

            // load from internal
            rawURL.includes(this.urlPrefix) ? bodyDOM.appendChild(this.cssCreator()) : null;
        }
    }

    const jsLoader = {
        'urlPrefix': '?loadNewJS',
        'jsInline': `
            const test = document.querySelector('.red');
                test.addEventListener('click', function(){
            console.log(this);
        })
        
        `,
        'jsCreator': function () {
            const scriptTag = document.createElement('script');
            scriptTag.type = 'text/javascript';
            scriptTag.appendChild(document.createTextNode(this.jsInline));
            return scriptTag;
        },
        'getURL': function () {
            const rawURL = window.location.href;
            const headDOM = document.querySelector('head');
            const bodyDOM = document.querySelector('body');

            // load from internal
            rawURL.includes(this.urlPrefix) ? bodyDOM.appendChild(this.jsCreator()) : null;
        }

    }

    $(document).ready(function() {
    //document.addEventListener('DOMContentLoaded', function () {
        cssLoader.getURL();
        // jsLoader.getURL();
    })

})();
/*** END of [URL Parameter] - [#161981220 - #161277187] [Visual Adjustment] Margin--Header-Body-Footer [readpage, home, subkanal, subchannel, video, photo] ****/

/*** START of [#161980855] PIP readpage kanal video ****/
$(document).ready(function () {
        (function () {
            const cssHandler = {
                'cssInline': `
                .read-page--video-gallery--item__vidio-embed {
                    -webkit-transition: opacity 0.3s ease-out;
                    -moz-transition: opacity 0.3s ease-out;
                    -o-transition: opacity 0.3s ease-out;
                    transition: opacity 0.3s ease-out;
                }
                .pip-container {
                    position: fixed;
                    top: 157px;
                    width: 300px !important;
                    z-index: 99;
                    height: 168px;
                    margin-left: 661px;
                    opacity: 1;
                    border-radius: 5px;
                    overflow: hidden;
                    -webkit-animation: fadein 0.3s; /* Safari, Chrome and Opera > 12.1 */
                    -moz-animation: fadein 0.3s; /* Firefox < 16 */
                    -ms-animation: fadein 0.3s; /* Internet Explorer */
                    -o-animation: fadein 0.3s; /* Opera < 12.1 */
                        animation: fadein 0.3s;
                }

                .pip-video {
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    width: 310px;
                }

                .i-pip-button-close {
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='30' height='30' viewBox='0 0 30 30'%3E%3Cdefs%3E%3Ccircle id='b' cx='10' cy='10' r='10'/%3E%3Cfilter id='a' width='175%25' height='175%25' x='-37.5%25' y='-37.5%25' filterUnits='objectBoundingBox'%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2.5'/%3E%3CfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(5 5)'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='%23FFF' xlink:href='%23b'/%3E%3C/g%3E%3Cpath fill='%23787878' d='M15 14.265l2.942-2.942a.52.52 0 1 1 .735.735L15.735 15l2.942 2.942a.52.52 0 1 1-.735.735L15 15.735l-2.942 2.942a.52.52 0 1 1-.735-.735L14.265 15l-2.942-2.942a.52.52 0 1 1 .735-.735L15 14.265z'/%3E%3C/g%3E%3C/svg%3E");
                    position: fixed;
                    width: 30px;
                    height: 30px;
                    top: 145px;
                    display: block;
                    border-radius: 50%;
                    background-size: 30px;
                    z-index: 101;
                    margin-left: 945px;
                    cursor: pointer;
                    opacity: 0;
                }
                
                @keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                
                /* Firefox < 16 */
                @-moz-keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                
                /* Safari, Chrome and Opera > 12.1 */
                @-webkit-keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                
                /* Internet Explorer */
                @-ms-keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                
                /* Opera < 12.1 */
                @-o-keyframes fadein {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                
                
                @keyframes fadeout {
                    from { opacity: 1; }
                    to   { opacity: 0; }
                }
                
                /* Firefox < 16 */
                @-moz-keyframes fadeout {
                    from { opacity: 1; }
                    to   { opacity: 0; }
                }
                
                /* Safari, Chrome and Opera > 12.1 */
                @-webkit-keyframes fadeout {
                    from { opacity: 1; }
                    to   { opacity: 0; }
                }
                
                /* Internet Explorer */
                @-ms-keyframes fadeout {
                    from { opacity: 1; }
                    to   { opacity: 0; }
                }
                
                /* Opera < 12.1 */
                @-o-keyframes fadeout {
                    from { opacity: 1; }
                    to   { opacity: 0; }
                }
                
                `,
                'cssCreator': function () {
                    const styleTag = document.createElement('style');
                    styleTag.type = 'text/css';
                    styleTag.appendChild(document.createTextNode(this.cssInline));
                    return styleTag;

                },
                'executor': function () {
                    const bodyDOM = document.querySelector('body');
                    bodyDOM.appendChild(this.cssCreator())
                }
            }


            const windowHandler = {
                'getWindowHeight': function () {
                    return window.innerHeight;
                },
                'getWindowWidth': function () {
                    return window.innerWidth;
                },
                'positionAtMiddle': function (iFrameDOM) {
                    let iklanHeight = document.querySelector('#dfp-topframe-main-cont') || 0;
                    const channelHeight = document.querySelector('.navbar--menu__list-wrapper').offsetHeight;
                    let subchannelHeight = document.querySelector('.navbar--menu-subchannel') || 0;
                    if (iklanHeight !== 0) {
                        iklanHeight = iklanHeight.offsetHeight;
                    } else {
                        iklanHeight = 0
                    }

                    if (subchannelHeight !== 0) {
                        subchannelHeight = subchannelHeight.offsetHeight;
                    } else {
                        subchannelHeight = 0;
                    }


                    const totalHeight = Number.parseInt(iklanHeight + channelHeight + subchannelHeight)
                    var bounding = iFrameDOM.getBoundingClientRect();
                    if (bounding.bottom <= totalHeight) {
                        return true;

                    } else {
                        return false
                    }
                },
            }
            const closeHandler = {
                'isClicked' : false,
                'executor': function() {
                    const closeButton = document.querySelector('.i-pip-button-close');
                    const videoFrame = document.querySelector('.read-page--video-gallery--item__vidio-embed')
                    const videoContainer = document.querySelector('.read-page--video-gallery--item__vidio-container');
                    closeButton.addEventListener('click', function() {
                        closeHandler.isClicked = true;
                        videoFrame.classList.remove('pip-video');
                        videoContainer.classList.remove('pip-container');
                        videoContainer.style.opacity = '1';
                        closeButton.style.opacity = '0';
                        videoContainer.style.boxShadow = 'none';
                        videoContainer.parentElement.style.backgroundColor = 'transparent';
                        //$(videoFrame).attr('src', $(videoFrame).attr('src'));
                    });
                }
            }
            const debunceFunction = {
                'delayer': 30,
                'do': function (func) {
                    var debounce_timer;
                    window.onscroll = function () {
                        if (debounce_timer) {
                            window.clearTimeout(debounce_timer);
                        }
                        debounce_timer = window.setTimeout(function () {
                            func();
                        }, debunceFunction.delayer);
                    };
                }
            }
            const miniVideoHandler = {
                'getDocumentType': function () {
                    return window.kmklabs.gtm.type;
                },
                'executor': function () {
                    if (this.getDocumentType() === 'VideoGallery') {
                        $(".read-page--video-gallery--item__vidio-embed").wrap( "<div class='read-page--video-gallery--item__vidio-container'></div>" );
                        $(".read-page--video-gallery--item").prepend('<i class="i-pip-button-close"></i>');
                        
                        cssHandler.executor();
                        closeHandler.executor();
                        
                        const optimizeFunc = debunceFunction.do;
                        const videoFrameContainer = document.querySelector('.read-page--video-gallery--item');
                        const videoFrame = document.querySelector('.read-page--video-gallery--item__vidio-embed')
                        const videoContainer = document.querySelector('.read-page--video-gallery--item__vidio-container');
                        const closeButtonElement = document.querySelector('.i-pip-button-close');
                       
                        optimizeFunc(function () {
                            const result = windowHandler.positionAtMiddle(videoFrameContainer);

                            if (result == true && !videoFrame.classList.contains('pip-video')) { 
                                // closeHandler.isClicked = true;
                                if(!closeHandler.isClicked) {
                                    videoFrame.classList.add('pip-video')
                                    videoContainer.parentElement.style.backgroundColor = '#E1E1E1';
                                    videoContainer.style.boxShadow = '0 4px 24px 0 rgba(36,51,72,0.44)';
                                    if ($('.enamplus-video-embed:eq(0)').length) {
                                      videoContainer.style.height = '460px';
                                    }
                                    videoContainer.classList.add('pip-container')
                                    closeButtonElement.style.opacity = '1';
                                }
                                // note add css
                            } else  {
                                closeHandler.isClicked = false;
                                
                                if (result == false && videoFrame.classList.contains('pip-video')){
                                    videoContainer.style.opacity = '0';
                                    closeButtonElement.style.opacity = '0';
                                    setTimeout(function () {
                                        videoFrame.classList.remove('pip-video');
                                        videoContainer.classList.remove('pip-container');
                                        videoContainer.style.opacity = '1';
                                        videoContainer.style.boxShadow = 'none';
                                        if ($('.enamplus-video-embed:eq(0)').length) {
                                          videoContainer.style.height = '';
                                        }
                                        videoContainer.parentElement.style.backgroundColor = 'transparent';
                                    }, 200);
                                }
                                // remove pip video tag class
                            }
                        })
                    }
                }
            }
            miniVideoHandler.executor();
        })();
    });
/*** END of [#161980855] PIP readpage kanal video ****/

/*** START of [DESKTOP] Pasang Widget SCTV + Indosiar [Homepage, KanalPage] ****/
$(document).ready(function () {
    (function () {

        const server = {
            'getDateTime' : function() {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', document.location, false);
                xhr.send(null);

                const response = xhr.getAllResponseHeaders().split('\r\n').reduce((result, current) => {
                    let [name, value] = current.split(': ');
                    result[name] = value;
                    return result;
                }, {});

                return response.date;
            },

            'getTimeStamp' : function() {
                // const respDate = this.getDateTime();
                // return Date.parse(respDate);
                return Date.now();
            },

            'getDateString' : function() {
                // const respDate = this.getDateTime();
                // const today = new Date(respDate);
                const today = new Date();
                const dateString = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

                return dateString;
            }
        };

        const widget = {
            'getIframeSource' : function(channel) {
                switch(channel) {
                    case "sctv":
                        return `<iframe class="vidio-embed" src="https://www.vidio.com/live/204-sctv-tv-stream/embed?autoplay=true&player_only=true&live_chat=false&mute=false" height="166" scrolling="no" frameborder="0" allowfullscreen></iframe>`;
                        break;
                    case "indosiar":
                        return `<iframe class="vidio-embed" src="https://www.vidio.com/live/205-indosiar-tv-stream/embed?autoplay=true&player_only=true&live_chat=false&mute=false" height="166" scrolling="no" frameborder="0" allowfullscreen></iframe>`;
                        break;
                    default:
                        return `<iframe class="jadwal-tv" src="https://www.liputan6.com/pages/widget-jadwal-sctv-indosiar" width="100%" height="186" style="border:none;margin-top: 15px;" scrolling="no"></iframe>`;
                        break;
                }    
            },

            'getSchedules' : function(event) {
                let start = "";
                let end   = "";
                let title = "";

                switch(event) {
                    case "lip6Malam":
                        start = "01:30:00";
                        end   = "02:00:59";
                        title = "Liputan 6 Malam SCTV";
                        break;

                    case "buser":
                        start = "02:00:00";
                        end   = "02:30:59";
                        title = "Buser SCTV";
                        break;

                    case "lip6Pagi":
                        start = "04:30:00";
                        end   = "06:00:59";
                        title = "Liputan 6 Pagi SCTV";
                        break;

                    case "lip6Siang":
                        start = "12:00:00";
                        end   = "12:30:59";
                        title = "Liputan 6 Siang SCTV";
                        break;

                    case "fokus":
                        start = "11:00:00";
                        end   = "11:30:59";
                        title = "Fokus Indosiar";
                        break;
                }

                return [start, end, title];
            },

            'getIframe' : function() {
                let events = ['lip6Malam', 'buser', 'lip6Pagi', 'lip6Siang', 'lip6Terkini', 'fokus'];
                let now = server.getTimeStamp();
                let isStreaming = false;
                let channel = "";
                let eventTitle = "";
                let iframe = "";

                events.forEach(function(event) {
                    let schedule = widget.getSchedules(event);

                    let strDate = server.getDateString();

                    let start = new Date(strDate + " " + schedule[0]).getTime();
                    let end   = new Date(strDate + " " + schedule[1]).getTime();
                    let title = schedule[2];

                    if (Math.min(now) >= Math.min(start, end)  && Math.max(now) <= Math.max(start, end)) {
                        isStreaming = true;
                        channel = (event == 'fokus') ? 'indosiar' : 'sctv';
                        eventTitle = title;
                    }
                });

                if(isStreaming && $('.live--streaming').length == 0) {
                    iframe = this.getIframeSource(channel);
                    iframe = this.getLiveStreaming(iframe, eventTitle); 
                }else{
                    iframe = this.getIframeSource("jadwal-tv");
                }

                return iframe;
            },

            'getLiveStreaming' : function(iframe, eventTitle) {
                return `<div class="live--streaming">
                            <div class="live--streaming__header live_streaming__clearfix">
                                <div class="live--streaming__left">
                                    <h2 class="live--streaming__title">Live Streaming</h2>
                                </div>
                                <div class="live--streaming__right"><span class="live--streaming__poweredby">Powered by </span></div>
                            </div>
                            <div class="live--streaming__content">
                                ${iframe}
                            </div>
                            <div class="live--streaming__footer">
                                <a class="live--streaming__link-page">
                                    <h3 class="live--streaming__versus">${eventTitle}</h3>
                                </a>
                            </div>
                        </div>`;
            }
        }


        const handler = {
            'currentSiteType': function () {
                const currentSiteType = window.kmklabs.gtm.subCategory;
                return currentSiteType;
            },

            'pasang': function () {
                if (window.location.pathname !== '/pages/infeed') {
                    if ((window.kmklabs.pageType == "ChannelPage" || window.kmklabs.pageType == "ReadPage") && (window.kmklabs.channel.full_slug != "video" && window.kmklabs.channel.full_slug != "photo")) {
                        const rightElement = document.querySelectorAll('.fixed-sidebar .box');
                        const parentSelector = $('.live--streaming').length > 0 ? '.live--streaming' : '#phenomenon-tags';

                        let iframe = $(widget.getIframe());

                        // cek if current live streaming  from cms is same with streaming from widget 
                        if(iframe.is('.live--streaming')) {
                            let iframeSrc = iframe.find('iframe').attr('src').split('/embed')[0];
                            let liveSrc = $('.live--streaming').length > 0 ? $('.live--streaming[data-component-name="desktop:asides:livestreamer"] iframe').attr('src') : '';

                            if(liveSrc.indexOf(iframeSrc) > -1) {
                                iframe = widget.getIframeSource("jadwal-tv");
                            }
                        }

                        $(iframe).insertAfter(parentSelector);
                    }
                }
            }
        };

        const windowsMessageHandler = {
            'receiveMessage': function () {
                window.addEventListener('message', function (event) {
                    const evenData = event.data;
                    if (evenData.childHeight != undefined) {
                        const tinggi = event.data.childHeight;
                        const iframe = document.querySelector('.jadwal-tv') || null;
                        if (iframe !== null) {
                            iframe.style.height = `${tinggi+20}px`;
                        }
                    }
                    // const newHeight = event.data.childHeight;


                }, false)
            }
        };
        // const getLiveStreamingStatus = {
        //     'status': {},
        //     'isItActive': function () {
        //         const klyLiveStreaming = document.querySelector('.live-streaming-kly-tv')
        //         if (klyLiveStreaming) {
        //             this.status = true
        //         } else {
        //             this.status = false;
        //         }
        //     }
        // }

        // getLiveStreamingStatus.isItActive(); // #3 
        handler.pasang();
        windowsMessageHandler.receiveMessage();
        
    })();
});
/*** END of [DESKTOP] Pasang Widget SCTV + Indosiar [Homepage, KanalPage] ****/

/*** START of [#164724658] berita terkini hide list ke 6 - 15 ****/
if (window.kmklabs.pageType === 'ReadPage') {
  if ($('ul[data-feature-name="berita-terkini"] > li').length) {
    $('ul[data-feature-name="berita-terkini"] > li').each(function(index, element) { 
      if (index > 4) { 
        $(element).hide() 
      } 
    });
  }
}
/*** END of [#164724658] berita terkini hide list ke 6 - 15 ****/

/*** START of [HOTFIX] LIvereport Desktop ****/
if (window.kmklabs.pageType === 'LiveReportPage') {
  	$('.livereport--key-moment__list-item').each(function (index, element) {
		$(element).bind("click", function() {
			scrollToTargetAdjusted('.livereport--streamline__grid:nth-child('+ (index+1) +')');
		});
	});

	function scrollToTargetAdjusted(targetClass){
	    var node = document.querySelector(targetClass);
		var yourHeight = 50;
		// scroll to your element
		node.scrollIntoView(true);
		// now account for fixed header
		var scrolledY = window.scrollY;
		if(scrolledY){
		  window.scroll({ top: scrolledY - yourHeight, behavior: "smooth"});
		}
	}
}
/*** END of [HOTFIX] LIvereport Desktop ****/

/*** START of [add 153kitchen order link on end of page] ****/
if (kmklabs.pageType === 'ReadPage' && (kmklabs.article.id === 4608664)) {
  	$('.article-content-body__item-content a[href="https://153kitchen.com/links/"]').remove();
  
    $('div.article-content-body__item-content').last().append('<a rel="nofollow" href="https://153kitchen.com/links/" target="_blank" style="margin: 15px auto; display: block; width: 228px; height: 62px; background-image: url(https://preview-kly.akamaized.net/153kitchen/button_order-di-sini.png)"></a>');
}
/*** END of [add 153kitchen order link on end of page] ****/

/*** START of [#183040840] Tracking Media Play/Complete for Vidio - Desktop ****/
$(function() {
    function pushVideoTracker(currentDuration, state) {
        var videoDuration = kmklabs.gtm.videos.video_1.video_duration;
        var convertVideoDuration = new Date(videoDuration * 1000).toISOString().substring(11, 19);
        var convertCurrentDuration = new Date(currentDuration * 1000).toISOString().substring(11, 19);
        var convertCurrentDuration = (state == 'complete') ? convertVideoDuration : convertCurrentDuration;
        var eventName = (state == 'complete') ? 'video_complete' : 'video_start';
        var videoPercentage = (state == 'complete') ? 100 : ((currentDuration / videoDuration) * 100).toFixed(2);
        window.dataLayer.push({
            event: eventName,
            video_current_time: convertCurrentDuration,
            video_duration: convertVideoDuration,
            video_percent: videoPercentage,
            video_provider: "Vidio",
            video_title: videoTitle,
            video_url: videoURL
        });
    }

    if ($('.read-page--video-gallery--item').length && window.kmklabs.pageType === 'ReadPage' && window.kmklabs.article.type === 'TextTypeArticle') {
        var videoURL = kmklabs.gtm.videos.video_1.video_url;
        var videoTitle = kmklabs.gtm.videos.video_1.video_title;
        var dataReady = false;  
        var trackerVidioPlay = false;
        var trackerVidioComplete = false;
        var secondCounter = 0;
        var counterInterval;
        window.parent.addEventListener('message', ({ data }) => {
            if (data.event === 'vidio.playback.playing' && data.properties.video_id == kmklabs.gtm.videos.video_1.video_id) {
                pushVideoTracker(secondCounter, 'play');
                secondCounter = 0;
                trackerVidioPlay = true;
                counterInterval = setInterval(function() {
                    secondCounter+=1;
                }, 1000);
            }
            if (data.event === 'vidio.playback.statechange') {
                if(data.state.paused === false && trackerVidioPlay) {
                  pushVideoTracker(secondCounter, 'play');
                  counterInterval = setInterval(function() {
                    secondCounter+=1;
                  }, 1000);
                } else if(data.state.paused === true) {
                  clearInterval(counterInterval);
                }
            }
            if (data.event === 'vidio.playback.vod.ended' && (data.properties.video_id == kmklabs.gtm.videos.video_1.video_id)) {
                if(trackerVidioComplete === false) {
                    pushVideoTracker(secondCounter, 'complete');
                    trackerVidioComplete = true;
                }
                clearInterval(counterInterval);
                secondCounter = 0;
            }
        });
    }
});
/*** END of [#183040840] Tracking Media Play/Complete for Vidio - Desktop ****/

/*** START of [#183320856] Optimize Autoplay Live Streaming - Desktop ****/
$( document ).ready(function() {
    var liveStreamingVideo = $('.live--streaming__video');
    
    if (liveStreamingVideo.length > 0) {
    //   var srcVideo = liveStreamingVideo.attr('data-src');
  
    //   var replaceProperties = "?autoplay=false&player_only=true&live_chat=false&mute=true&enable_websocket=true&sticky=false";
    //   var updateSrc         = srcVideo.replace(/\?.*/g, replaceProperties);
    //   liveStreamingVideo.attr('data-src', updateSrc);
  
      var dataReadyStream = false;
      window.parent.addEventListener('message', ({ data }) => {
          if (data.event === 'vidio.playback.ready') {
              dataReadyStream = true;
          }
          if (data.event === 'vidio.playback.playing') {
              $( document ).off("scroll");
          }
      });
  
      $( document ).on("scroll", function() {
          if (dataReadyStream) {
              var iframesStream = document.getElementsByClassName("live--streaming__video");
              iframesStream[0].contentWindow.postMessage('vidio.playback.play', '*');
          }
      });
    }
});
/*** END of [#183320856] Optimize Autoplay Live Streaming - Desktop ****/

/*** START of [#183494404] Tracker Widget Jadwal TV - Desktop ****/
$(function() {
    $(".jadwal-tv").bind("load",function(){
        var linkAll = $(this).contents().find(".schedule__link__all");
        linkAll.on('click', function() {
          window.dataLayer.push({
            'event': 'click_cta',
            'label': 'selengkapnya'
          });
        });
    });
});
/*** END of [#183494404] Tracker Widget Jadwal TV - Desktop ****/

/*** START of [#183437306] Pasang Logo A Mild ReadPage - Desktop ****/
if (window.kmklabs.pageType == 'ReadPage') {
  var tags = window.kmklabs.tag.slug.split("|");
  if (tags.includes("awake")) {
    $('<p style="border-left: 3px solid #FF5722;padding-left: 5px;margin: 8px 0;font-size: 12px;color: #787878;vertical-align: top;">Presented by <img src="https://preview-kly.akamaized.net/liputan6/logo-amild.png" style="width:40px"></p>').insertAfter('.read-page--breadcrumb');
  }
}
/*** END of [#183437306] Pasang Logo A Mild ReadPage - Desktop ****/

/*** START of [#186067801] Gateway Berita Piala Dunia U17 - Desktop ****/
$(document).ready(function() {
    const widget = {
        'getIframe': function() {
            const iframe = `<iframe class="iframe-gateway-berita-piala-dunia-u17" src="/pages/gateway-berita-piala-dunia-u-17" width="640" height="275" style="border:none; margin-top:20px; margin-bottom:20px" scrolling="no"></iframe>`
            return iframe;
        },
        'apply': function() {
            const pageType = window.kmklabs.pageType;
            const channelName = window.kmklabs.channel.name;
            const pathName = window.location.pathname;

            if (pageType === 'ChannelPage' && channelName === 'Liputan6' && pathName === '/') {
                $('.headline').after(widget.getIframe());
            }
        },
        'impression': function() {
            if (analytics) {
                var pageType = window.kmklabs.pageType;
                var position = 'top';
                pageType = (pageType === 'ChannelPage' && window.location.pathname === '/') ? 'HomePage' : pageType;

                analytics.registerGTMCustomImpression($('.iframe-gateway-berita-piala-dunia-u17'), 'gateway-berita-piala-dunia-u17', position, {'kanal_page': pageType.toLowerCase()});
            }
        }
    };

    widget.apply();
    widget.impression();
});
/*** END of [#186067801] Gateway Berita Piala Dunia U17 - Desktop ****/

/*** START of [171402059] [172853211] [Bug] Embed Kita Bisa - Desktop ****/
$(document).ready(function () {
  var gatewayIframe = document.querySelectorAll(".gateway-donation-iframe");
  var pageType = window.kmklabs.pageType;

  if (pageType === "ReadPage" && gatewayIframe.length > 0) {
    var isMultiplePage = window.kmklabs.article.isMultipage;
    var channelName = window.kmklabs.channel.full_slug;

    if (isMultiplePage && (channelName !== "hot" && channelName !== "surabaya")) {
      window.addEventListener("scroll", function () {
        gatewayIframe.forEach(function (item) {
          var contentWindowIframe = item.contentWindow;
          item.height = contentWindowIframe.document.body.offsetHeight + 10 + "px";
        });
      });
    } else if (channelName === "hot" || channelName === "surabaya") {
      gatewayIframe.forEach(function (item) {
        var iframeSrc = item.src;
        var match = iframeSrc.match(/\kitabisa\/gateway\/(\d+)/);
        if (match) {
          var gatewayId = match[1];
        }

        window.addEventListener(
          "message",
          function (event) {
            var eventData = event.data;
            var messageName = "heightEmbedKitabisa-" + gatewayId;
            var heightEmbedKitabisa = eventData[messageName];

            if (heightEmbedKitabisa != undefined) {
              item.height = heightEmbedKitabisa + 10 + "px";
            }
          },
          false
        );
      });
    }
  }
});
/*** END of [171402059] [172853211] [Bug] Embed Kita Bisa - Desktop ****/

/*** START of [#177864396] Enhance Dropdown Menu Lainnya ****/
$(document).ready(function() {

var li = $(".navbar--menu--item__more-sub-menu .navbar--menu--item").length;

$(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(1)");


var column = li / 3;
var totalColumn = Math.ceil(column);

var perColumnWidth = 110; // 90 px

var totalColumnWidth = totalColumn * perColumnWidth;

$(".navbar--menu--item__more-sub-menu").css("width", totalColumnWidth+"px");

var html = "";

var columnHtml="";


for (var i = 1 ; i <= totalColumn ; i++) {

    if( i == 1 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-one">
                <ul>
            </li>`;
    } else if( i == 2 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-two">
                <ul>
            </li>`;

    } else if( i == 3 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-three">                  
                <ul>
            </li>`;
    } else if( i == 4 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-four">
                <ul>
            </li>`;
    } else if( i == 5 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-five">
                <ul>
            </li>`;
    } else if( i == 6 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-six">
                <ul>
            </li>`;
    } else if( i == 7 ) {
        columnHtml = `
            <li class="navbar-mega-menu__column">
                <ul class="navbar-mega-menu__column_ul navbar-mega-menu__column_ul-col-seven">
                <ul>
            </li>`;
    }

    $(".navbar--menu--item__more-sub-menu").append(columnHtml);
}


$(".navbar-mega-menu__column").css({
    'display' : 'block',
    'width' : '110px',
    'float' : 'left'
});

$(".navbar-mega-menu__column_ul").css("padding-left","0px");

for (var i = totalColumn ; i >= 1; i--) {
    if (i == 7) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(20)").appendTo($(".navbar-mega-menu__column_ul-col-seven"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(19)").appendTo($(".navbar-mega-menu__column_ul-col-seven"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(18)").appendTo($(".navbar-mega-menu__column_ul-col-seven"));
        var switch0 = $(".navbar-mega-menu__column_ul-col-seven .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-seven .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } else if (i == 6) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(17)").appendTo($(".navbar-mega-menu__column_ul-col-six"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(16)").appendTo($(".navbar-mega-menu__column_ul-col-six"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(15)").appendTo($(".navbar-mega-menu__column_ul-col-six"));
        var switch0 = $(".navbar-mega-menu__column_ul-col-six .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-six .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } else if (i == 5) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(14)").appendTo($(".navbar-mega-menu__column_ul-col-five"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(13)").appendTo($(".navbar-mega-menu__column_ul-col-five"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(12)").appendTo($(".navbar-mega-menu__column_ul-col-five"));
        var switch0 = $(".navbar-mega-menu__column_ul-col-five .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-five .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } else if (i == 4) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(11)").appendTo($(".navbar-mega-menu__column_ul-col-four"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(10)").appendTo($(".navbar-mega-menu__column_ul-col-four"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(9)").appendTo($(".navbar-mega-menu__column_ul-col-four"));   
        var switch0 = $(".navbar-mega-menu__column_ul-col-four .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-four .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } else if (i == 3) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(8)").appendTo($(".navbar-mega-menu__column_ul-col-three"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(7)").appendTo($(".navbar-mega-menu__column_ul-col-three"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(6)").appendTo($(".navbar-mega-menu__column_ul-col-three"));
        var switch0 = $(".navbar-mega-menu__column_ul-col-three .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-three .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } else if (i == 2) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(5)").appendTo($(".navbar-mega-menu__column_ul-col-two"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(4)").appendTo($(".navbar-mega-menu__column_ul-col-two"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(3)").appendTo($(".navbar-mega-menu__column_ul-col-two"));
        var switch0 = $(".navbar-mega-menu__column_ul-col-two .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-two .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } else if (i == 1) {
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(2)").appendTo($(".navbar-mega-menu__column_ul-col-one"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(1)").appendTo($(".navbar-mega-menu__column_ul-col-one"));
        $(".navbar--menu--item__more-sub-menu .navbar--menu--item:eq(0)").appendTo($(".navbar-mega-menu__column_ul-col-one"));
        var switch0 = $(".navbar-mega-menu__column_ul-col-one .navbar--menu--item:eq(0)");
        var switch2 = $(".navbar-mega-menu__column_ul-col-one .navbar--menu--item:eq(2)");
        switch0.after(switch2.clone());
        switch2.after(switch0).remove();
    } 
}

$(".navbar-mega-menu__column_ul .navbar--menu--item .navbar--menu--item__link").css("color", "#000");

});
/*** END of [#177864396] Enhance Dropdown Menu Lainnya ****/

/*** START of [#178494407] Gateway Story Liputan6 - Desktop ****/
$('<li id="category-1077" class="navbar--menu--item" data-component-name="desktop:navbar:menu:item"><a class="ui--a js-navbar-channel navbar--menu--item__link js-navbar-item-link" href="https://story.liputan6.com/" title="stories" data-channel="Stories" data-gtm-channel="stories">Stories</a></li>').insertAfter('#category-14');

// $('#category-14').insertAfter('#category-1076');
/*** END of [#178494407] Gateway Story Liputan6 - Desktop ****/

/*** START of [#162749673] [#165715785] [#174333545] Widget Pasang Widget visual stories, mobil otosia, widget bola.net ****/
$(document).ready(function () {
  (function () {
    const getLiveStreamingStatus = {
      'status': {},
      'isItActive': function () {
        const klyLiveStreaming = document.querySelector('.live-streaming-kly-tv')
        if (klyLiveStreaming) {
          this.status = true
        } else {
          this.status = false;
        }
      }
    }

    const appendVisualStoriesHandler = {
      'isShowOtosia': function () {
        const channelName = window.kmklabs.channel.name || null;
        if (channelName === "Bisnis" || channelName === "Tekno") {
          return false;
        }

        return false;
      },
      'isChannelBola': function () {
        const channelName = window.kmklabs.channel.name || null;
        if (channelName === "Bola") {
          return true;
        }

        return false;
      },
      'do': function () {
        const pageType = window.kmklabs.pageType || null;
        const articleType = window.kmklabs.gtm.type || null;

        if ((pageType === "ChannelPage" || pageType === "ReadPage") && articleType !== "PhotoGallery") {
          const halfpage = $('#div-gpt-ad-liputan6-halfpage1');
          const widgetVisualStories = `<iframe class="widget-kly-visual-stories" src="https://www.liputan6.com/pages/widget-visual-stories-mobile" width="310" height="500" style="border:none;margin-bottom: 30px;" scrolling="no"></iframe>`;
          const widgetOtosiaAndBolanet = `<iframe class="widget-bola-net" src="https://www.liputan6.com/pages/widget-bola-net" width="100%" height="380" style="border:none;margin-bottom: 30px;margin-top: 30px;" scrolling="no"></iframe><iframe class="widget-mobil-otosia" src="https://www.liputan6.com/pages/mobil-dijual-otosia" width="100%" height="358" style="border:none;margin-bottom: 30px;" scrolling="no"></iframe>`;
          const widgetOtosia = `<iframe class="widget-mobil-otosia" src="https://www.liputan6.com/pages/mobil-dijual-otosia" width="100%" height="358" style="border:none;margin-bottom: 30px;" scrolling="no"></iframe>`;
          widgetHtml = widgetVisualStories;
          widgetSelector = '.widget-kly-visual-stories';

          if (appendVisualStoriesHandler.isShowOtosia()) {
            widgetHtml = widgetOtosia;
            // if (appendVisualStoriesHandler.isChannelBola()) {
            //   widgetHtml = widgetOtosiaAndBolanet;
            // }
            widgetSelector = '.widget-mobil-otosia';

            const host = location.hostname;
            if (pageType === "ReadPage") {
              $(widgetHtml).insertAfter(halfpage);
              $(widgetSelector).css('margin-bottom', '15px');
            } else {
              const contentPromotions = contentPromotionHandler.getAllContentPromotion();
              if (contentPromotions != undefined) {
                $(widgetHtml).insertAfter(contentPromotions[1]);
              } else if (host.indexOf('hot') > -1 || host.indexOf('surabaya') > -1) {
                //$("#popular-articles").before($(widgetHtml));
                //$($(".channel-ad_ad-mr1").parents('.box')).before($(widgetVisualStories));
              } else {
                $(widgetHtml).insertAfter('.jadwal-tv');
              }
            }

          }


        }
      }
    }

    const contentPromotionHandler = {
      'getAllContentPromotion': function () {
        const contentPromotions = document.querySelectorAll('.content-promotion');
        if (contentPromotions.length != 0) {
          return contentPromotions;
        }
      }
    }

    getLiveStreamingStatus.isItActive();
    appendVisualStoriesHandler.do();
  })();
});
/*** END of [#162749673] [#165715785] [#174333545] Widget Pasang Widget visual stories, mobil otosia, widget bola.net ****/

/*** START of [#163475658] Visual adjustment container slim ****/
window.addEventListener('scroll',function(){
	let container = document.querySelector('.container-main_slim');
	if(container) {
		container.style = "";	
  }
});
/*** END of [#163475658] Visual adjustment container slim ****/

/*** START of [GPT] INFEED SDK ****/
if ( ["ChannelPage"].includes(window.kmklabs.pageType) ) 
{
  	if( document.getElementById("inf-1") )
    {
        infInitCfg = {
              publisherId : 4685495694,
              wrapperPage : 'https://www.liputan6.com/infeed/wrapper.html',
              slots : ['inf-1', 'inf-2', 'inf-3','inf-4', 'inf-5', 'inf-6'],
              seoUrl : true,
              templateID : 163 
        };

        var infJS = document.createElement("script");
        infJS.type = "text/javascript";
        infJS.async = 1;
        infJS.src = "https://d.infeed.id/resources/js/v0.0.2/infeed-init.js";
        document.body.appendChild(infJS);
    } 
}
else if( ['ReadPage'].includes(window.kmklabs.pageType) )
{
  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };
  
  if( getUrlParameter('related') != 'dable' )
  {
    //var observer = new MutationObserver(function(mutations) {
        var c = 1;
        $('#related-news .relateds-slow--lattice--item').each(function(i){
          if( [7,8,9].includes((i+1)) )
            {
              $(this).addClass('infeed-slot');
              $(this).attr('data-template', 164);
              $(this).attr('data-slot', c);
              $(this).attr('replace', true);
              c++;
            }
        });
      (function(i,n,f,e,ed,kl,y){
              i.infeedConfig = ed;i[ed]=i[ed]||function(){(i[ed].q=i[ed].q||[]).push(arguments);};
              kl=n.createElement(f);y=n.getElementsByTagName(f)[0];kl.async=1;
              kl.src=e;y.parentNode.insertBefore(kl,y);
      })(window, document, 'script', '//d.infeed.id/resources/js/v1.0.0/infeed-sdk.js','inf');
      inf('publisher', '4685495694'); inf('class', 'infeed-slot'); inf('wrapper', 'https://www.liputan6.com/infeed/');
    //});
    //if ($('.relateds-async.js-related-articles-placeholder').length) {
      //observer.observe(document.querySelector('.relateds-async.js-related-articles-placeholder'), { 
    // if ($('.relateds-async').length) {
    //   observer.observe(document.querySelector('.relateds-async'), { 
    //       attributes: true, childList: true, characterData: true 
    //   }); 
    // }
  }
}
/*** END of [GPT] INFEED SDK ****/

/*** START of [#167160621] Tambah Sub Menu Klasemen di Kanal Bola - Desktop ****/
$(document).ready(function () {
    (function () {
        const urlActive = window.location.href;
        const channelName = window.kmklabs.channel.name;

        const subMenuKlasemen =
            `<li class="navbar--menu-subchannel__item" id="klasemen-liga">
                <a class="navbar--menu-subchannel__item-link js-menu-subchannel-item-link" href="https://www.liputan6.com/pages/klasemen-liga" title="klasemen">Klasemen</a>
            </li>
            `;
        if (channelName == 'Bola'){
            $('ul.navbar--menu-subchannel__list').append(subMenuKlasemen);
        }
        if (urlActive.match('\\pages/klasemen-liga')) {
            $('ul.navbar--menu-subchannel__list').append(subMenuKlasemen);
            $('li.navbar--menu-subchannel__item[id="klasemen-liga"]').addClass('navbar--menu-subchannel__item_active');
        }
    })();
});
/*** END of [#167160621] Tambah Sub Menu Klasemen di Kanal Bola - Desktop ****/

/*** START of Hide Artikel Advertorial Search Page - Desktop ****/
$(document).ready(function(){
	if (window.kmklabs.pageType === 'SearchPage') {
  	if($('#article_4345968').length > 0){
			$('#article_4345968').remove();
		}
	}
});
/*** END of Hide Artikel Advertorial Search Page - Desktop ****/

/*** START of [#185429746] Pasang Widget Pemilu - Desktop ****/
$(document).ready(function() {
    var pageType    = window.kmklabs.pageType;
    var channelName = window.kmklabs.channel.name;
    var pathName    = window.location.pathname;
    var iframeJadwalTV = $('iframe.jadwal-tv');
    var liveStreaming  = $('.live--streaming');
    var popularTopic   = $('#phenomenon-tags');

    var iframeCountdown = `<iframe class="iframe-widget-countdown-pemilu" src="https://liputanpemilu.com/widget/mobile/countdown" width="300" height="372" style="border:1px solid #e6e5e5; margin-top:20px; margin-bottom:20px" scrolling="no"></iframe>`;
    var iframeSchedule = `<iframe class="iframe-widget-schedule-pemilu" src="https://liputanpemilu.com/widget/mobile/jadwal-pemilu" width="300" height="600" style="border:1px solid #e6e5e5; margin-top:20px; margin-bottom:20px" scrolling="no"></iframe>`;
    var iframeNews = `<iframe class="iframe-widget-news-pemilu" src="https://liputanpemilu.com/widget/mobile/berita-pemilu" width="300" height="740" style="border:1px solid #e6e5e5; margin-top:20px; margin-bottom:40px" scrolling="no"></iframe>`;

    if (((pageType === 'ChannelPage' || pageType === 'ReadPage') && channelName === 'Pemilu') || pathName === '/') {

        if (iframeJadwalTV.length) {
            iframeJadwalTV.after(iframeNews);
            iframeJadwalTV.after(iframeSchedule);
            iframeJadwalTV.after(iframeCountdown);
        } else if (liveStreaming.length) {
            liveStreaming.after(iframeNews);
            liveStreaming.after(iframeSchedule);
            liveStreaming.after(iframeCountdown);
        } else {
            popularTopic.after(iframeNews);
            popularTopic.after(iframeSchedule);
            popularTopic.after(iframeCountdown);
        }

    }
});
/*** END of [#185429746] Pasang Widget Pemilu - Desktop ****/

/*** START of [Bug] [#162007226] Visual Adjustment Header, Body, & Footer [1 of  2] ****/
$(document).ready(function (){
    (function () {
        const cssLoader = {
            'urlPrefix': '?newPadding',
            'cssFileLocation': './index.css',
            'cssInline': `
            // [Bug] [#162007226] Visual Adjustment Header, Body, & Footer
            .navbar--top__wrapper {
                padding: 0px 12px;
            }
            .navbar--menu__list {
                padding: 0px 12px;
            }
            .navbar--menu__right-panel {
                padding-right: 12px;
                width: 135px;
            }
            .navbar--menu__list_slim {
                width: 835px!important;
            }
            .navbar--menu_slim .navbar--menu__right-panel {
                padding-right: 0px;
                width: 133px;
            }
            .navbar--menu-subchannel {
                padding: 0px 12px;
            }
            .navbar--menu-subchannel__container{
                padding: 0px 12px;
            }
            .footer__row {
                padding: 0px 12px 100px;
            }
            .footer__link-wrapper {
                width: 477px;
            }
            .container-main #main {
                padding: 0px 12px;
            }
            .container-main_slim #main {
                padding: 0px 12px;
            }
            .inner-container-article {
                width: 640px;
            }
            .photogalleries .container-main #main {
                padding: 0px 0px;
            }
            .photogalleries .container-main_slim #main {
                padding: 0px 0px;
            }
            .videogalleries .container-main #main {
                padding: 0px 0px;
            }
            .videogalleries .container-main_slim #main {
                padding: 0px 0px;
            }
        
            /* add padding in photo */
            .photogalleries .gallery--headlines__featured-aside {
                padding: 0px 12px;
                background-color: #FFFFFF;
            }
            .photogalleries .gallery--headlines__featured {
                position: relative;
                float: left;
                width: 725px;
            }
            .photogalleries .gallery--headlines--featured--photo__image img {
                position: relative;
                bottom: 21px;
            }
            .photogalleries section#photo-gallery-popular {
                padding: 0px 12px;
            }
            .photogalleries .gallery--grid__item.js-gallery-grid-item {
                width: 230px;
                margin-right: 12px;
            }
            .photogalleries section#photo-gallery-recommended {
                padding: 0px 12px;
            }
            .photogalleries section#photo-gallery-latest {
                padding: 0px 12px;
            }
            .videogalleries .content {
                padding: 0px 12px;
            }
            .videogalleries .gallery--headlines-big--video__wrapper {
                width: 294px;
            }
            .videogalleries .gallery--grid__item.js-gallery-grid-item.gallery--grid__item-headline {
                margin-right: 12px;
            }
            .videogalleries .main .content .box-main {
                margin-right: 16px;
            }
            #search-filter .articles--search-filter__container {
                padding: 0px 7px;
            }
            `,
            'cssCallerExternal': function () {
                const cssLink = document.createElement("link");
                cssLink.setAttribute("rel", "stylesheet");
                cssLink.setAttribute("type", "text/css");
                cssLink.setAttribute("href", this.cssFileLocation);
                return cssLink;
            },
            'cssCreator': function () {
                const styleTag = document.createElement('style');
                styleTag.type = 'text/css';
                styleTag.appendChild(document.createTextNode(this.cssInline));
                return styleTag;
            },
            'getURL': function () {
                const bodyDOM = document.querySelector('body');
                const url = window.location.href;
                // if (url.includes(cssLoader.urlPrefix)) {
                // }
                bodyDOM.appendChild(this.cssCreator())
            }
        };

        const cosmeticHandler = {
            'checkPage': function () {
                const pageType = window.kmklabs.pageType;
                const typeArticle = window.kmklabs.gtm.type;
                const category = window.kmklabs.gtm.category;
                const myProfil = window.location.pathname;
                const isItInProfilPages = myProfil.includes('/me/');

                if (pageType === "CustomPage" || (pageType === "ReadPage" && typeArticle === "PhotoGallery") || category === "TagPage" || isItInProfilPages === true || pageType === "IndeksPage") {
                    return false;
                } else {
                    return true;
                }
            }
        };

        if (cosmeticHandler.checkPage()) {
            cssLoader.getURL();
        }
    })();
});
/*** END of [Bug] [#162007226] Visual Adjustment Header, Body, & Footer [1 of  2] ****/

/*** START of [Bug] [#162007226] Visual Adjustment Header, Body, & Footer [2 of  2] ****/
$(document).ready(function () {
    const cssLoader = {
        'urlPrefix': '?newPadding',
        'cssFileLocation': './index.css',
        'cssInline': `
            
            .navbar--top--logo__site-title {
                padding: 0px 0px 0px 12px;
            }
            
            .navbar--top--user-dropdown {
                padding: 0px 12px 0px 0px;
            }
            
            `,
        'cssCallerExternal': function () {
            const cssLink = document.createElement("link");
            cssLink.setAttribute("rel", "stylesheet");
            cssLink.setAttribute("type", "text/css");
            cssLink.setAttribute("href", this.cssFileLocation);
            return cssLink;
        },
        'cssCreator': function () {
            const styleTag = document.createElement('style');
            styleTag.type = 'text/css';
            styleTag.appendChild(document.createTextNode(this.cssInline));
            return styleTag;

        },
        'getURL': function () {
            const rawURL = window.location.href;
            const headDOM = document.querySelector('head');
            const bodyDOM = document.querySelector('body');

            const subCategory = window.kmklabs.gtm.subCategory;
            const url = window.location.href;
            // if (url.includes(cssLoader.urlPrefix)) {
                if (subCategory !== "pilpres") {
                    bodyDOM.appendChild(this.cssCreator());
                }
            // }


            // load from href
            // rawURL.includes(this.urlPrefix) ? headDOM.appendChild(this.cssCallerExternal()) : null;

            // load from internal


        }
    }



        cssLoader.getURL();
        // jsLoader.getURL();
  
});
/*** END of [Bug] [#162007226] Visual Adjustment Header, Body, & Footer [2 of  2] ****/

/*** START of Info contact measure footer with ads ****/
if(kmklabs.channel.id==188 & kmklabs.category.id==188) {
		$(".main").attr("style","min-height: 145px");
		$("#skinads").attr("style","z-index: 1");
}
/*** END of Info contact measure footer with ads ****/

/*** START of [#181379414] google tapin - desktop ****/
window.onload = function() {
  if (window.gtm === undefined || (window.gtm !== undefined && window.gtm.data === undefined) || (window.gtm.data !== undefined && window.gtm.data.userId === undefined) && !isHasBeenPrompted()) {
  (function () {
        var s = window.document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
    	  s.defer = true;
        s.src = 'https://accounts.google.com/gsi/client';
        window.document.getElementsByTagName('head')[0].appendChild(s);
    })();

    var time = 0;
    var interval = setInterval(function() {
        if (time <= 15000 && window.google !== undefined) {
            google.accounts.id.initialize({
                client_id: "315184063315-7letcmip5rs6lbs3j2u2jn78e9ig3v3t.apps.googleusercontent.com",
                cancel_on_tap_outside: false,
                callback: handleCredentialResponse,
            });
            google.accounts.id.prompt();
            time += 200;
            clearInterval(interval);
            storeHasBeenPrompted();
        }
        if (time >= 15000) clearInterval(interval);
    }, 200);
  }
};


function handleCredentialResponse(response) {
    $.post('https://www.liputan6.com/auth/google/tapin', {
        id_token: response.credential,
        _token: getCsrf(),
        back_to: window.location.href
    }, function (data, status) {
        if (data.status === 'success') {
            data.redirect !== undefined ? window.location.replace(data.redirect) :
            window.location.reload();
        }
    });
}

function getCsrf() {
    xhttp = new XMLHttpRequest();
    xhttp.open('POST', 'https://www.liputan6.com/token', false);
    xhttp.send();
    return xhttp.responseText;
}

var keyCookiesTapIn = 'google_tap_signin_dialog_today';
function isHasBeenPrompted() {
    return _getCookie(keyCookiesTapIn);
}

function storeHasBeenPrompted() {
    _setCookie(keyCookiesTapIn, 1, _getMinutesToTomorrow()); // 1 days
}

// http://www.quirksmode.org/js/cookies.html
function _setCookie(name, value, ttl) {
  var expires = "";
  var cookieDomain = "";
  if (ttl) {
    var date = new Date();
    date.setTime(date.getTime() + (ttl * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  cookieDomain = "; domain=" + window.location.hostname;
  document.cookie = name + "=" + escape(value) + expires + cookieDomain + "; path=/";
}

function _getCookie(name) {
  var i, c;
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return unescape(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}

function _getMinutesToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let totalMinutesToday = (hour * 60 + minutes);
  let totalMinutesInADay = 1440;

  return totalMinutesInADay - totalMinutesToday;
}
/*** END of [#181379414] google tapin - desktop ****/

