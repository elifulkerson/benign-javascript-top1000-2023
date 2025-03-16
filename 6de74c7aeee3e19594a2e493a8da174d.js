var gptadslots = [];
window.googletag = window.googletag || {cmd: []};

// initialize pbjs
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
    
gpt_slot_objects = [];

  googletag.cmd.push(function() {
      
//Adslot 1 declaration
    var REFRESH_KEY = 'refresh';
    var REFRESH_VALUE = 'true';
    // This slot is allowed to refresh, as it contains the targeting keys which have been declared for refresh.

    gpt_mediumrectangle1 = googletag.defineSlot('/4905536/detik_desktop/wp/medium_rectangle1', [[300, 250], [300, 600], [300, 500]], 'div-gpt-ad-1572110512991-0').
        setTargeting(REFRESH_KEY, REFRESH_VALUE).
        setTargeting('test', 'event').
        addService(googletag.pubads());


    // Number of seconds to wait after the slot becomes viewable.
    var SECONDS_TO_WAIT_AFTER_VIEWABILITY = 30;
    googletag.pubads().addEventListener('impressionViewable', function(event) {
      var slot = event.slot;
      if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
        setTimeout(function() {
          googletag.pubads().refresh([slot]);
        }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
      }
    });

gpt_billboardtop = googletag.defineSlot('/4905536/detik_desktop/wp/billboard', [970, 250], 'div-gpt-ad-1535011949711-0').setTargeting('pos', ['billboard']).addService(googletag.pubads());

gpt_leaderboard = googletag.defineSlot('/4905536/detik_desktop/wp/leaderboard', [728, 90], 'div-gpt-ad-1629684611153-0').addService(googletag.pubads());


gpt_mediumrectangle2 = googletag.defineSlot('/4905536/detik_desktop/wp/medium_rectangle2', [300, 250], 'div-gpt-ad-1535014085963-0').setTargeting('test', 'lazyload').addService(googletag.pubads());

gpt_mediumrectangle3 = googletag.defineSlot('/4905536/detik_desktop/wp/medium_rectangle3', [300, 250], 'div-gpt-ad-1631082776371-0').setTargeting('test', 'lazyload').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/wp/topframe', [[970, 50], [1104, 50], [970, 250]], 'div-gpt-ad-1609516302326-0').addService(googletag.pubads());

gpt_billboard = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/topframe', [[970, 50], [1104, 50], [970, 250]], 'div-gpt-ad-1609516302326-0').addService(googletag.pubads());


//googletag.defineSlot('/4905536/detik_desktop/wp/center2', [300, 250], 'div-gpt-ad-1590938292944-0').addService(googletag.pubads());

gpt_promobox = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/promobox', [[600, 250], [400, 250]], 'div-gpt-ad-1675354767032-0').addService(googletag.pubads());


/*MEDIUM RECTANGLE SLOT*/

//googletag.defineSlot('/4905536/detik_desktop/wp/medium_rectangle1', [1, 1], 'div-gpt-ad-1581397390862-0').addService(googletag.pubads());


//googletag.defineSlot('/4905536/detik_desktop/wp/medium_rectangle4', [300, 250], 'div-gpt-ad-1537376336099-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/wp/medium_rectangle5', [300, 250], 'div-gpt-ad-1637285628568-0').addService(googletag.pubads());


/*BALLOON ADS SLOT*/
gpt_balloon = googletag.defineSlot('/4905536/detik_desktop/wp/balloon_ads', [[400, 250], [300, 600], [300, 500]], 'div-gpt-ad-1611048875551-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/detik_desktop/wp/balloon_ads', [1, 1], 'div-gpt-ad-1587563774594-0').addService(googletag.pubads());


gpt_balloonkiri = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/bottomframe', [[400, 250], [300,500]], 'div-gpt-ad-1608018266850-0').addService(googletag.pubads());


/*TOP & BOTTOM FRAME SLOT*/
gpt_bottomframe = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/bottomframe', [1, 1], 'div-gpt-ad-1608109673548-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/detik_desktop/wp/bottomframe', [970, 50], 'div-gpt-ad-1556125066123-0').addService(googletag.pubads());


gpt_topframe = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/topframe', [1, 1], 'div-gpt-ad-1589255476007-0').addService(googletag.pubads());

gpt_parallax1fixesize = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/parallax', [[300, 250], [480, 600], [300, 600]], 'div-gpt-ad-1572942201238-0').addService(googletag.pubads());

gpt_parallax2fixesize = "";
//googletag.defineSlot('/4905536/detik_desktop/wp/parallax2', [[300, 250], [480, 600], [300, 600]], 'div-gpt-ad-1572942389690-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/wp/center1', [300, 250], 'div-gpt-ad-1565183879836-0').setTargeting('pos', ['center1']).addService(googletag.pubads());

/*SKINNER SLOT*/
//googletag.defineSlot('/4905536/detik_desktop/wp/skinner_kiri', [[160, 600], [300, 700], [120, 600]], 'div-gpt-ad-1575954832037-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/detik_desktop/wp/skinner_kanan', [[160, 600], [300, 700], [120, 600]], 'div-gpt-ad-1575954913930-0').addService(googletag.pubads());


/*NATIVE NEWSFEED SLOT*/
//googletag.defineSlot('/4905536/detik_desktop/wp/newsfeed1', ['fluid'], 'div-gpt-ad-1535014274004-0').setTargeting('pos', ['newsfeed1']).addService(googletag.pubads());
gpt_newsfeed1 = googletag.defineOutOfPageSlot('/4905536/detik_desktop/wp/newsfeed1', 'div-gpt-ad-1612605119627-0').addService(googletag.pubads());

gpt_newsfeed2 = googletag.defineOutOfPageSlot('/4905536/detik_desktop/wp/newsfeed2', 'div-gpt-ad-1613262723921-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/detik_desktop/wp/newsfeed2', ['fluid'], 'div-gpt-ad-1535014379334-0').addService(googletag.pubads()); 
//googletag.defineSlot('/4905536/detik_desktop/wp/newsfeed2', ['fluid'], 'div-gpt-ad-1535014379334-0').setTargeting('pos', ['newsfeed2']).addService(googletag.pubads());



gpt_newsfeed3 = googletag.defineOutOfPageSlot('/4905536/detik_desktop/wp/newsfeed3', 'div-gpt-ad-1624873610990-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/detik_desktop/wp/newsfeed3', ['fluid'], 'div-gpt-ad-1535014432247-0').setTargeting('pos', ['newsfeed3']).addService(googletag.pubads());

//googletag.defineSlot('/4905536/detik_desktop/wp/newsfeed_nhl', ['fluid'], 'div-gpt-ad-1535014219032-0').setTargeting('pos', ['newsfeed_nhl']).addService(googletag.pubads());
gpt_newsfeednhl = "";
//googletag.defineOutOfPageSlot('/4905536/detik_desktop/wp/newsfeed_nhl', 'div-gpt-ad-1612975809736-0').addService(googletag.pubads());


//googletag.defineSlot('/4905536/detik_desktop/wp/pop_ups', [785, 440], 'div-gpt-ad-1567442414301-0').addService(googletag.pubads());

gpt_slot_objects.push(gpt_balloon, gpt_billboardtop, gpt_leaderboard, gpt_mediumrectangle1, gpt_mediumrectangle2, gpt_mediumrectangle3,gpt_newsfeed1);


//conditional empty gpt_promobox 1
//if (document.getElementById('div-gpt-ad-1675354767032-0') != null) {
//gpt_slot_objects.push(gpt_promobox);
//}

//conditional empty newsfeed 1
if (document.getElementById('div-gpt-ad-1612605119627-0') != null) {
gpt_slot_objects.push(gpt_newsfeed1);
}

//conditional empty newsfeed 2
if (document.getElementById('div-gpt-ad-1613262723921-0') != null) {
gpt_slot_objects.push(gpt_newsfeed2);
}

//conditional empty newsfeed 3
if (document.getElementById('div-gpt-ad-1624873610990-0') != null) {
gpt_slot_objects.push(gpt_newsfeed3);
}

//conditional empty parallax 1
if (document.getElementById('div-gpt-ad-1572942201238-0') != null) {
gpt_slot_objects.push(gpt_parallax1fixesize);
}

/* S- Custom DFP For Callback Function */

   googletag.pubads().addEventListener('slotRenderEnded', function(event) {
       try {
if (event.slot == gpt_newsfeed1 && !event.isEmpty ){
var $head = $("#div-gpt-ad-1612605119627-0 iframe").contents().find("head");
var url = "https://awscdnstatic.detik.net.id/live/_rmbassets/newsfeed/detikRedesign.css";
$head.append($("<link />", { rel: "stylesheet", href: url, type: "text/css" } ));
var Adv1 = $("#div-gpt-ad-1612605119627-0 iframe").contents().find(".AdvDetikcomRedesign-m");
if(Adv1.length ){
$("#div-gpt-ad-1612605119627-0 iframe").height("1px");
}
}
if (event.slot == gpt_newsfeed2 && !event.isEmpty ){
var $head2 = $("#div-gpt-ad-1613262723921-0 iframe").contents().find("head");
var url2 = "https://awscdnstatic.detik.net.id/live/_rmbassets/newsfeed/detikRedesign2.css";
$head2.append($("<link />", { rel: "stylesheet", href: url2, type: "text/css" } ));
var Adv2 = $("#div-gpt-ad-1613262723921-0 iframe").contents().find(".AdvDetikcomRedesign-m");
if(Adv2.length ){
$("#div-gpt-ad-1613262723921-0 iframe").height("1px");
}
}
if (event.slot == gpt_newsfeed3 && !event.isEmpty ){
var $head3 = $("#div-gpt-ad-1624873610990-0 iframe").contents().find("head");
var url3 = "https://awscdnstatic.detik.net.id/live/_rmbassets/newsfeed/detikRedesign.css";
$head3.append($("<link />", { rel: "stylesheet", href: url3, type: "text/css" } ));
var Adv3 = $("#div-gpt-ad-1624873610990-0 iframe").contents().find(".AdvDetikcomRedesign-m");
if(Adv3.length ){
$("#div-gpt-ad-1624873610990-0 iframe").height("1px");
}
}
if(event.slot == gpt_billboardtop && !event.isEmpty){
$("#megabillboard-desktop").height('250px');
}
       if(event.slot == gpt_billboard && !event.isEmpty){
          $(document).ready(function(){
           $('#billboard_banner').show();
             Billboard_Sticky();
          });
    }
if (event.slot == gpt_balloon && !event.isEmpty) {
   var containsAdBalloon = !event.isEmpty,
   widthBalloon = event.size[0],
   heightBalloon = event.size[1];
    $('.balloon').show();
    $('.balloon_close').show();
   if (heightBalloon == 500 && widthBalloon == 300){
      $('.balloon').css({'height':'500px','width':'300px'});
      $('.balloon_close').css({'top':'0px'});

     }
 } 
 if (event.slot == gpt_balloonkiri && !event.isEmpty) {
   var containsAdBalloonKiri = !event.isEmpty,
   widthBalloonKiri = event.size[0],
   heightBalloonKiri = event.size[1];
    $('.balloon_adskiri').show();
    $('.balloon_closekiri').show();
   if (heightBalloonKiri == 500 && widthBalloonKiri == 300){
      $('.balloon_adskiri').css({'height':'500px','width':'300px'});

     }
 }
        if (event.slot == gpt_topframe && !event.isEmpty ){
            $('.top_banner_bar').height('50px');
           $('.close_tb').show();
        }
        if (event.slot.getSlotElementId() =='div-gpt-ad-1563778625822-0') {
            setTimeout(function(){$('.slideleft').css('display', 'block');}, 500);
        }
        if (event.slot == gpt_bottomframe && !event.isEmpty){
            $('.close_tbot').show();
            $('.bottom_banner_bar').show();
        }

if (event.slot == gpt_parallax1fixesize && !event.isEmpty) {
  var containsAdPX1 = !event.isEmpty,
    widthPX1 = event.size[0],
    heightPX1 = event.size[1];
  $('.para1').show();
  if (heightPX1 == 250 && widthPX1 == 300) {
    $('.para1').css("padding-bottom", "0px");
    $('.para1 .para').css("height", "250px");
    $('.para1 .para_fix').css("position", "relative");
    $('.para1 .para_ads').css({
      "top": "0",
      "transform": "translateX(-50%)",
      "-moz-transform": "translateX(-50%)",
      "-webkit-transform": "translateX(-50%)",
      "-ms-transform": "translateX(-50%)",
      "-o-transform": "translateX(-50%)"
    });
    $('.para1 #para_caption').hide();
    $('.para1 #para_caption2').hide();
    
  }
}
if (event.slot == gpt_parallax2fixesize && !event.isEmpty) {
  var containsAdPX2 = !event.isEmpty,
    widthPX2 = event.size[0],
    heightPX2 = event.size[1];
    $('.para2').show();
  if (heightPX2 == 250 && widthPX2 == 300) {
    $('.para2').css("padding-bottom","0px");
    $('.para2 .para').css("height", "250px");
    $('.para2 .para_fix').css("position", "relative");
    $('.para2 .para_ads').css({
      "top": "0",
      "transform": "translateX(-50%)",
      "-moz-transform": "translateX(-50%)",
      "-webkit-transform": "translateX(-50%)",
      "-ms-transform": "translateX(-50%)",
      "-o-transform": "translateX(-50%)"
    });
    $('.para2 #para_caption').hide();
    $('.para2 #para_caption2').hide();
  }
}

       //  if(event.slot == gpt_leaderboard && event.isEmpty){
          // console.log("gpt_leaderboard");
         //  removeElement('header__leaderboard');
        // }
    if(event.slot == gpt_leaderboard && !event.isEmpty){
    var containsLead = !event.isEmpty,
    widthLead= event.size[0],
    heightLead = event.size[1];
    $("#adv-caption-lead").show();
	$("#adv-caption-lead").width(widthLead+22);
}
       } catch (e) {
           console.log(e);
       }
   });
   /*E- Custom DFP */

    googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
    googletag.pubads().setTargeting('site', ['detikcom']).setTargeting('section', ['home']).setTargeting('medium', ['desktop']);
    googletag.pubads().collapseEmptyDivs(true);
    googletag.enableServices();

// request pbjs bids when it loads
  pbjs.que.push(function() {
    pbjs.rp.requestBids({
      callback: callAdserver,
      gptSlotObjects: gpt_slot_objects
    });
});

// failsafe in case PBJS doesn't load
setTimeout(function() {
callAdserver(gpt_slot_objects);
}, 2000);
//lazyLoad
googletag.pubads().enableLazyLoad({
fetchMarginPercent: 500,
renderMarginPercent: 40,
mobileScaling: 2.0
});
});

function callAdserver(gptSlots) {
    if (pbjs.adserverCalled) return;
    pbjs.adserverCalled = true;
    googletag.pubads().refresh(gptSlots);
  }
  
   function removeElement(classname) {
   var elem = document.getElementsByClassName(classname)[0];
   return elem.parentNode.removeChild(elem);
 }