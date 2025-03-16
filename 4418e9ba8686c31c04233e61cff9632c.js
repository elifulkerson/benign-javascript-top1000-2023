$(function() {
  // æ´å¤
  $("#navUl").on("click", "#channelMore", function(e) {
    if(e.stopPropagation) { //W3Cé»æ­¢åæ³¡æ¹æ³
      e.stopPropagation();
    } else {
      e.cancelBubble = true; //IEé»æ­¢åæ³¡æ¹æ³
    }
    $("#channelMoreUl").toggle();
    arrowsHandler()
  })

  // æ·»å æ´ä¸ªææ¡£çç¹å»äºä»¶
  document.addEventListener('click', function() {
    var isShow = $("#channelMoreUl").is(":visible");
    if(isShow) {
      $("#channelMoreUl").hide();
      arrowsHandler()
    } else {
      return
    }
  });
})
// ä¸ä¸ç®­å¤´å¤ç
function arrowsHandler() {
  var flag = $("#channelMore").hasClass("arrows-t");
  if(flag) {
    $("#channelMore").removeClass("arrows-t")
  } else {
    $("#channelMore").addClass("arrows-t")
  }
}