var targetWin = 'https://www.ndtv.com/sites/newsalert/share.aspx?ch=' + Date.now();
function submitFormInPopUp() {
    window.open('', 'Prvwindow', 'top=150,left=350,height=350,width=650,directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,addressbar=no');
    var Mainform = document.getElementById('Mainform');
    Mainform.action = targetWin;
    Mainform.target = "Prvwindow";
    Mainform.submit();
    return false;
}

function closeNewsflash() {
    document.getElementById("breakingnews2015").style.display = "none";
    
}
(function jqIsReady() {
    if (typeof $ === "undefined") {
        setTimeout(jqIsReady, 10);
        return;
    }


    
    var _breakinghtml = "";
    var agentType = String($('.breaking_alert').attr('data-type')).toLowerCase();
    if (agentType === "desktop") {
        $("<link/>", {
            rel: "stylesheet",
            type: "text/css",
            href: "https://drop.ndtv.com/homepage/css/2022/realtimenewsalertkootwn1.css"
        }).appendTo("head");
    }
    _breakinghtml=''
    _breakinghtml = '<div class="breaking-strip"  id="breakingnews2015">';
    _breakinghtml += '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"> <defs> <symbol id="flash_fb" viewBox="0 0 32 32"> <path d="M12.185 7.178v3.965h-2.905v4.849h2.905v14.408h5.967v-14.408h4.004c0 0 0.375-2.325 0.557-4.867h-4.539v-3.315c0-0.495 0.651-1.162 1.294-1.162h3.251v-5.048h-4.42c-6.262-0-6.115 4.853-6.115 5.578z"> </path> </symbol> <symbol id="flash_tw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.57 19.5"><path d="m16.99,0h3.31l-7.23,8.26,8.5,11.24h-6.66l-5.21-6.82-5.97,6.82H.43l7.73-8.84L0,0h6.83l4.71,6.23L16.99,0Zm-1.16,17.52h1.83L5.83,1.88h-1.97l11.97,15.64Z"></path></symbol> <symbol id="flash_koos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206.07 300.48"> <path id="b" d="M205.84,173.35c-.93-9.16-3.8-18.03-8.41-26-1.23-2.12-2.65-4.13-4.23-6-.21-.24-.48-.41-.79-.49-.31-.07-.63-.05-.92,.07-.29,.12-.54,.33-.7,.6-.17,.27-.24,.58-.22,.9,1.01,12.89,.99,25.84-.05,38.73-.53,5.99-1.42,11.94-2.67,17.82-.07,.25-.07,.52,0,.77,.08,.25,.22,.48,.42,.65,.2,.17,.43,.29,.69,.34,.26,.05,.52,.03,.77-.06,3.32-1.1,6.38-2.85,9-5.16,5.75-5.07,8.11-12.53,7.11-22.17ZM126.23,28.05c.4,.08,.8,.08,1.2,0,.8-.18,1.48-.68,1.9-1.38,.21-.34,.35-.73,.4-1.13,2.71-17.86-14.87-29.12-18.9-24.51-3.36,3.83,3.7,6.85,4.57,11.3-5.52-3-12.34-4.8-13.48-.61-1,3.88,4.12,5.94,8.83,8.16-3.71,.2-8.13,.4-10.29,3.77-.31,.49-.47,1.07-.46,1.65,0,.58,.19,1.15,.51,1.63,.33,.49,.79,.86,1.33,1.09,.54,.23,1.13,.29,1.7,.18l1.52-.22c7.02-1.01,14.15-.99,21.17,.07Zm57.77,105.19c-.06-.61-.12-1.22-.17-1.82-.42-4.27-.88-8.35-1.34-12.16-4.35-36.31-15.41-61.55-32.88-75-15-11.59-32.06-12.09-43.74-10.48-20.61,2.85-55.79,17.43-60,83-.3,4.72-.52,9.22-.65,13.51-.01,.32,.18,.62,.48,.74,2.67,1.16,5.19,3.62,7.35,7.22,6.14,10.2,8.84,28.28,1.73,41.69-6.78,12.78-18.6,17.53-25,19.23h-.13c-3.72,1.01-7.57,1.48-11.42,1.38h-4.36c-7.64,0-12.38,.64-13.73,5.5-.64,2.3,.69,8.72,7,17,5.09,6.71,14.69,16.34,31.48,24.18,10.07,4.63,20.72,7.9,31.65,9.72l1.15,3.1c.37,1,.75,2.07,1.13,3.15,2.47,6.86,5.11,14.15,5.93,16.33,.32,.83,0,1.87-1.54,1.87h-9.16s-2.74,6.08,4.72,5.86c20.7-.62,18.45,15.95,25,12.82,6.27-3-5.67-12.85-5.49-12.82,23.85,3,16.23-5.88,16.23-5.88,0,0-12.08,.09-16.63,0-2.64-.06-4.99-1.72-5.91-4.2l-4.79-13-1.13-3.07-1.13-3c6.76,.77,13.55,1.15,20.35,1.14,7.16,.03,14.31-.52,21.38-1.64,.28,.76,.63,1.73,1,2.8,.32,.87,.66,1.81,1,2.77,1.37,3.78,2.79,7.72,2.94,8.18,.43,1.32,.12,1.83-2.23,1.83h-8.86s-2.56,5.71,7.24,5.71c20,0,15.81,16.78,23.5,12.5,4.91-2.75-4.22-10.49-4.95-11.41-.41-.52-.07-1.26,1-1.1,20.41,3.12,15.4-5.7,15.4-5.7,0,0-14.08,.08-20.09,.08-1.2,0-2.27-.73-2.71-1.84-.86-2.16-2.33-6.26-3.62-9.87l-1-2.73c-.39-1.08-.74-2-1-2.77,3.74-.9,7.41-2.05,11-3.44,9.75-3.73,18.48-9.72,25.46-17.49,6.94-7.81,12.1-17.41,15.58-29,.18-.61,.36-1.23,.53-1.85l.51-1.86c1.82-7.16,3.05-14.46,3.68-21.82,1.4-15.31,.7-31.3-.58-45.52-.11-.58-.17-1.21-.23-1.86l.05,.02Zm-78.96-30.89c-.94,.2-1.93,.1-2.81-.3-1.78-.85-2.79-2.75-2.51-4.7,.14-.95,.58-1.83,1.26-2.5,.68-.68,1.56-1.12,2.51-1.26,1.43-.2,2.87,.3,3.87,1.35s1.42,2.52,1.13,3.94c-.17,.87-.59,1.66-1.22,2.28-.62,.63-1.42,1.05-2.28,1.23l.05-.04Zm36.19,14.7l-11.49,7.45c-.41,.29-.91,.44-1.42,.42h0c-.5,.02-1-.13-1.41-.42l-11.52-7.45c-.33-.18-.59-.46-.76-.8-.34-.69-.24-1.51,.25-2.1,.24-.28,.56-.49,.92-.6l11.31-4.69c.38-.14,.78-.21,1.19-.21h0c.41,0,.82,.07,1.2,.21l11.3,4.69c.36,.1,.69,.31,.93,.6,.24,.28,.4,.63,.45,1,.04,.37-.02,.75-.19,1.08-.16,.34-.42,.62-.75,.81h-.01Zm11-14.7c-.94,.18-1.91,.07-2.78-.34-2.11-.99-3.1-3.44-2.28-5.61,.82-2.18,3.17-3.37,5.41-2.73,2.24,.64,3.61,2.89,3.16,5.17-.36,1.77-1.73,3.15-3.5,3.51h-.01ZM19.33,194.76h.9c2.7-.11,5.39-.52,8-1.22l.65-.21c3.14-.89,6.15-2.19,8.95-3.87,1.61-.96,3.14-2.06,4.56-3.29,2.93-2.53,5.35-5.58,7.15-9,5.88-11.1,3.81-27-1.58-35.94-.8-1.4-1.82-2.68-3-3.78-1-.83-1.9-1.48-2.71-1.36-.07,.02-.14,.05-.2,.09-1.12,.71-2.13,1.59-3,2.6-3.28,3.7-6.23,7.68-8.82,11.9-5.62,8.79-10.5,18.03-14.6,27.62-2.57,6.16-3.55,9.95-3.88,12.22-.13,.88,.08,1.78,.6,2.5,.52,.72,1.29,1.22,2.16,1.39,1.59,.28,3.2,.39,4.81,.35h.01Z"></path> </symbol> <symbol id="flash_email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 328.2"> <path id="Page-1" d="M295.2,176.9,473.3,328.2H16.7L195.6,177l43.8,37.1a9.36,9.36,0,0,0,12,0h0ZM0,11.3,180.1,164.1,0,316.9Zm490,0V316.9L309.9,164.1ZM473.3,0,245,193.7,16.7,0Z"></path> </symbol></defs></svg>';
    _breakinghtml += '<div class="breaking-strip_head"><span class="alertType"></span></div>';
    _breakinghtml += '<div class="breaking-strip_bdy"><a id="alertNews" href=""></a></div>';
    _breakinghtml += '<div class="breaking-strip_share">';
    _breakinghtml += '<a href="javascript:void(0);"  onclick="window.open(\'https://www.facebook.com/dialog/feed?app_id=966242223397117&display=popup&title={~title~}&link=https://www.ndtv.com\', \'fshare\', \'width=500, height=350\'); return false;" ><svg class="flash_icn flash_fb"><use xlink:href="#flash_fb"></use></svg><span class="strip-tooltip">Facebook</span></a>';
    _breakinghtml += '<a href="javascript:void(0);"  onclick="twittershare(\'{~titletweet~}\');"><svg class="flash_icn flash_tw"><use xlink:href="#flash_tw"></use></svg><span class="strip-tooltip">Twitter</span></a>';
  // _breakinghtml += '<a href="javascript:void(0);"  onclick="window.open(\'https://kooapp.com/create?title={~title~}+&link=https://www.ndtv.com&language=en&handle=ndtv&utm_source=ndtv&utm_campaign=ndtv_flash\', \'kshare\', \'width=500, height=350\'); return false;" ><svg class="flash_icn flash_koos"><use xlink:href="#flash_koos"></use></svg><span class="strip-tooltip">Koo</span></a>';
     _breakinghtml += '<a href="javascript:void(0);" onclick="submitFormInPopUp();"><svg class="flash_icn flash_email"><use xlink:href="#flash_email"></use></svg><span class="strip-tooltip">Email</span></a>';
    _breakinghtml += '</div>';
    _breakinghtml += '<a class="breaking-strip_close" href="javascript:void(0);"  onclick="closeNewsflash();"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></a>';
    _breakinghtml += '</div>';

    _breakinghtml += '<form action="" id="Mainform" name="Mainform" method="post"> ';
    _breakinghtml += '<input id="MainContent_hdnTitle" type="hidden" value="" name="ctl00$MainContent$hdnTitle">';
    _breakinghtml += '<input id="MainContent_hdnUrl" type="hidden" value="" name="ctl00$MainContent$hdnUrl">';
    _breakinghtml += '<input id="MainContent_hdnnewsType" type="hidden" value="" name="ctl00$MainContent$hdnnewsType">';
    _breakinghtml += '<input type="hidden" name="ctl00$MainContent$hdnRealTitle" id="MainContent_hdnRealTitle" value="{~titleshare~}" />';
    _breakinghtml += '<input type="hidden" name="ctl00$MainContent$hdnRealUrl" id="MainContent_hdnRealUrl" value="Shared via http://www.ndtv.com" />';
    _breakinghtml += '<input type="hidden" name="ctl00$MainContent$hdnRealType" id="MainContent_hdnRealType" value="News Flash" />';
    _breakinghtml += '</form>';


    $(document).ready(function () {
        var proRandom = getRandomNumber(1, 4);
        
        var brkconfig = {

            projectId: "fir-breaking-bucket-" + proRandom
        };

        var canUrl = $("link[rel='canonical']").attr("href");
        var brkApp = firebase.initializeApp(brkconfig, "secondary");
        var dbCollection = 'elections.ndtv.com';
        var db1 = brkApp.firestore();
        var alertType = String($('.breaking_alert').attr('data-alert')).toLowerCase();

        
     //  var alertDoc = "ndtv-breakingnews-stage";


        var alertDoc = alertType + "-breakingnews";

        db1.collection(dbCollection).doc(alertDoc).onSnapshot(function (doc) {
            if ($('.breaking_alert').html() !== '') {
                $('.breaking_alert').html('');

            }

            var breakingNewsData = doc.data().data;
          
          


            if (breakingNewsData !== null && breakingNewsData.alerttext !== "") {

                var newsalerttext = breakingNewsData.alerttext.replace(/'/g, "\'");
                var tweetEncode_newsalerttext = encodeURI(breakingNewsData.alerttext).replace(/'/g, "\\'");
                var shareEncode_newsalerttext = encodeURI(breakingNewsData.alerttext.replace(/'/g, "\'"));
                var encode_newsalerttext = encodeURI(breakingNewsData.alerttext.replace(/'/g, ""));


                var new_breakinghtml = _breakinghtml.replace(/{~title~}/g, encode_newsalerttext).replace(/{~titleshare~}/g, shareEncode_newsalerttext).replace(/{~titletweet~}/g, tweetEncode_newsalerttext);


                $('.breaking_alert').html(new_breakinghtml);

                var unixTimestamp = breakingNewsData.updatedtime;
                

                var storyUrl = breakingNewsData.storylink == '' ? "" : breakingNewsData.storylink + (breakingNewsData.storylink.indexOf('?') > 0 ? "&pfrom=web-homepagerealtime"  : "?pfrom=web-homepagerealtime");
                $('.alertType').html(breakingNewsData.alerttype);
                $('#alertNews').html(newsalerttext).attr('href', storyUrl);

                if (storyUrl === '') {
                    $('#alertNews').removeAttr('href');

                }

            }

        });


    });
})();
function getRandomNumber(low, high) {
    var r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
}


function twittershare(text) {
    window.open('https://www.twitter.com/share?text=' + text + 's&url=https://www.ndtv.com', 'Tweet', 'width=500, height=400');
}