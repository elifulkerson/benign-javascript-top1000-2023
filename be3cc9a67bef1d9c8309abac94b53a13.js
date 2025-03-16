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

    gpt_billboard = googletag.defineSlot('/4905536/CNN_desktop/home/billboard', [970, 250], 'div-gpt-ad-1562938269760-0').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      setTargeting('test', 'event').
      addService(googletag.pubads());
      
    gpt_leaderboard = googletag.defineSlot('/4905536/CNN_desktop/home/leaderboard', [728, 90], 'div-gpt-ad-1509450871354-0').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      setTargeting('test', 'event').
      addService(googletag.pubads());
      
    gpt_medium_rectangle1 = googletag.defineSlot('/4905536/CNN_desktop/home/medium_rectangle1', [[300, 600], [300, 250]], 'div-gpt-ad-1536905982732-0').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      setTargeting('test', 'event').
      addService(googletag.pubads());

    gpt_medium_rectangle2 = googletag.defineSlot('/4905536/CNN_desktop/home/medium_rectangle2', [300, 250], 'div-gpt-ad-1509450955476-0').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      setTargeting('test', 'event').
      addService(googletag.pubads());
      
    
    /*googletag.defineSlot('/4905536/CNN_desktop/home/medium_rectangle3', [300, 250], 'div-gpt-ad-1602742170967-0').
      setTargeting(REFRESH_KEY, REFRESH_VALUE).
      setTargeting('test', 'event').
      addService(googletag.pubads());*/

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
    
gpt_balloonads = "";
//googletag.defineSlot('/4905536/CNN_desktop/home/ballon_ads', [1, 1], 'div-gpt-ad-1648723971629-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/CNN_desktop/home/parallax', [[1, 1], [300, 250]], 'div-gpt-ad-1577360764832-0').addService(googletag.pubads());


gpt_newsfeed2 = googletag.defineOutOfPageSlot('/4905536/CNN_desktop/home/newsfeed-2', 'div-gpt-ad-1657224236116-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/CNN_desktop/home/newsfeed-2', ['fluid'], 'div-gpt-ad-1540273489018-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/CNN_desktop/home/newsfeed-3', ['fluid'], 'div-gpt-ad-1628189020952-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/CNN_desktop/home/skinner_kiri', [160, 600], 'div-gpt-ad-1542120937589-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/CNN_desktop/home/skinner_kanan', [160, 600], 'div-gpt-ad-1542120990374-0').addService(googletag.pubads());

gpt_newsfeed1 = googletag.defineOutOfPageSlot('/4905536/CNN_desktop/home/newsfeed-1', 'div-gpt-ad-1657276491750-0').addService(googletag.pubads());
//googletag.defineSlot('/4905536/CNN_desktop/home/newsfeed-1', ['fluid'], 'div-gpt-ad-1565284166485-0').addService(googletag.pubads());

gpt_bottomframe = "";
//googletag.defineSlot('/4905536/CNN_desktop/home/bottomframe', [970, 50], 'div-gpt-ad-1603691899477-0').addService(googletag.pubads());

gpt_topframe = "";

gpt_parallax1fixesize = "";

gpt_balloon = "";
//googletag.defineSlot('/4905536/CNN_desktop/home/ballon_ads', [400, 250], 'div-gpt-ad-1639457675616-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/CNN_desktop/home/topframe', [1, 1], 'div-gpt-ad-1625750922177-0').addService(googletag.pubads());

gpt_newsfeed3 = googletag.defineOutOfPageSlot('/4905536/CNN_desktop/home/newsfeed-3', 'div-gpt-ad-1657224289835-0').addService(googletag.pubads());

//googletag.defineSlot('/4905536/CNN_desktop/home/center1', [300, 250], 'div-gpt-ad-1571231087169-0').addService(googletag.pubads());

gpt_slot_objects.push(gpt_newsfeed1, gpt_bottomframe, gpt_medium_rectangle1, gpt_medium_rectangle2, gpt_leaderboard, gpt_billboard, gpt_newsfeed2, gpt_newsfeed3);


/* S- Custom DFP For Callback Function */
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
try {

if (event.slot == gpt_parallax1fixesize && !event.isEmpty) {
var containsAdPX1 = !event.isEmpty,
widthPX1 = event.size[0],
heightPX1 = event.size[1];
$('.para1').show();
$('.para_fix').width(widthPX1);
if (heightPX1 == 250 && widthPX1 == 300) {
$('.para1').css("margin-bottom", "0px");
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

if(event.slot == gpt_leaderboard && event.isEmpty){
removeElement('leaderboard');
}

if(event.slot == gpt_leaderboard){
}

if(event.slot == gpt_medium_rectangle2 && event.isEmpty){
removeElement('mr2');
}

if(event.slot == gpt_medium_rectangle2){
}

if(event.slot == gpt_medium_rectangle1){
}
if (event.slot == gpt_bottomframe && !event.isEmpty){
$('.close_tbot').show();
$('.bottom_banner_bar').show();
}
if (event.slot == gpt_topframe && !event.isEmpty){
$('.close_tb').show();
}
if (event.slot == gpt_balloon && !event.isEmpty) {
var containsAdBalloon = !event.isEmpty,
widthBalloon = event.size[0],
heightBalloon = event.size[1];
$('.balloon').show();
if (heightBalloon == 600 && widthBalloon == 300){
$('.balloon').css({'height':'600px','width':'300px'});
$('.balloon_close').css({'display':'block','top':'0px'});
}
} 
} catch (e) {
}
});
/*E- Custom DFP */


    googletag.pubads().enableSingleRequest();
    googletag.pubads().disableInitialLoad();
    googletag.pubads().setTargeting('site', ['cnn']).setTargeting('section', ['home']).setTargeting('medium', ['desktop']);
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

function refreshPositionSlot(slot) {
googletag.cmd.push(function() {
var displaySlot = googletag.display(slot);
googletag.pubads().refresh([displaySlot]);
});
}

function refreshSlotDfp(pos) {
var label = {
//parallax1:'div-gpt-ad-1577360764832-0',
bottomframe:'div-gpt-ad-1603691899477-0',
newsfeed1:'div-gpt-ad-1657276491750-0',
newsfeed2:'div-gpt-ad-1657224236116-0',
newsfeed3:'div-gpt-ad-1657224289835-0',
mediumrectangle1:'div-gpt-ad-1536905982732-0',
mediumrectangle2:'div-gpt-ad-1509450955476-0'
};
if (typeof label[pos] != "undefined") {
refreshPositionSlot(label[pos]);
}
}