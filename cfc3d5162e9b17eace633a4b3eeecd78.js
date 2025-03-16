// åå°é¡¶é¨
$(function () {
  var backTop = ('<div class="backTop"><img src="//i0cloud.jrjimg.cn/cloud/images/general/arrow-up.png" alt=""></div>')
  $("body").append(backTop);
  $(".backTop").hide();
  $(window).scroll(function () {
    // if ($(this).scrollTop() >= $(this).height()) {
    if ($(this).scrollTop() >= 500) {
      $(".backTop").fadeIn(100);
      $(".share-area").fadeIn(100);
    } else {
      $(".backTop").fadeOut(100);
      $(".share-area").fadeOut(100);
    }
  });
  $(".backTop").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 100);
  })
});