<!--
$(function(){
  if( navigator && navigator.userAgent && navigator.userAgent.match(/(Android|iPod|iPhone)/) ) {
    $('#footer').prepend('<div id="footer-switcher">表示：<span><a href="#" id="footer-switcher-pc2lite">モバイル</a></span><span class="grey">｜</span><span class="bold">PC</span></div>');
    $('#footer-switcher-pc2lite').click(function(){
      var datetime = new Date();
      datetime.setYear(datetime.getYear() - 1);
      document.cookie = 'viewmode=;' + 'expires=' + datetime.toUTCString() + ';domain=' + '.tenki.jp' + ';path=/;';
      location.href = 'https://tenki.jp/lite/';
      return false;
    });
  }
});
// -->