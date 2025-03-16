<!--
var __last_scroll_top = 0;
$(window).on('load scroll resize',function(){
  var __scroll_top = $(window).scrollTop();
  if(__scroll_top > 35 && __last_scroll_top <= 35) {
    $('#hd').css({'position':'fixed','top':'0px'});
  } else if(__scroll_top <= 35 && __last_scroll_top > 35) {
    $('#hd').removeAttr('style');
  }
  __last_scroll_top = __scroll_top;
});
// -->