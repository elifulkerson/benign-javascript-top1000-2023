/* 
    Implementation of Interstitial ads August 3, 2018
*/
var loadHomeFull = false,
    currentCtr = 0;
var Interstitial = {

    getScript : function (src, callback) {
        var s = document.createElement("script");
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
          if (!callback.done && (!s.readyState || /loaded|complete/.test(s.readyState))) {
            callback.done = true;
            callback();
          }
        };
        document.querySelector('head').appendChild(s);
    },

    gnoAdListen : function (){
       if (typeof gno_ad !== 'undefined'){
            gno_ad.listen();
       } else {
           console.info('Calling gnoAdListen but library not loaded.');
       }
    },

    JqueryDetection : function() {
        if( typeof jQuery !== 'undefined'){
            var $interstitial = $('body').find('.interstitial'),
                ctr = 0;
            if ($interstitial.length > 0){
                var intertstitialInterval = setInterval(function(){
                    if( typeof $interstitial.find('ads.dfped').html() !== 'undefined' && $interstitial.find('ads.dfped').html().trim() != "") {
                        clearInterval(intertstitialInterval);
                        Interstitial.init();
                    } else if ( ctr >= 10 ) {
                        clearInterval(intertstitialInterval);
                    }
                    ctr++;
                }, 1000);
            }
        }
    },

    init : function() {
        this.getScript("https://images.gmanews.tv/res/js/gnoadscript.js", this.gnoAdListen);
    }
}

// disabled 2018-11-13 @ 11:25 AM due to issue on gnoaddscript.js
// enabled 2018-12-06@ 01:54 PM issue fix by GNO team on gnoaddscript.js released on PRD
$(document).ready(function(){Interstitial.JqueryDetection();}); 