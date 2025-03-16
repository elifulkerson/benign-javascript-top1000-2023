$(function() {
  var offsetY = -10;
  var time = 500;
  $('#backToTop').click(function(){
    $("html, body").animate({scrollTop:0}, time, "swing");
    return false;
  }); 
  $('a[href^="#"]').click(function() {
    var target = $(this.hash);
    if (!target.length) return ;
    var targetY = target.offset().top+offsetY;
    $('html,body').animate({scrollTop: targetY}, time, 'swing');
    window.history.pushState(null, null, this.hash);
    return false;
  });
 var url = window.location;
//$('#gnav a[href="'+url+'"]').parent().addClass('active');
  $('#gnav a[href="'+url+'"]').contents().unwrap();
 
  $("#menu_btn").on("click", function() {
    $('#gnav').animate({width: 'toggle'}, 300);
  /*$('.box').not('#b').animate({height: 'hide'}, speed);
$(this).next().slideToggle();*/
    $(this).toggleClass("active");
    $("#gnav").toggleClass("on");
  });
  $(".gnav1").on("click", function() {
    (this).next().slideToggle();            
  });
});