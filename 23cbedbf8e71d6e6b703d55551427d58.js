$.fn.isInViewport=function(){var elementTop=$(this).offset().top;var elementBottom=elementTop+$(this).outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom;}
$.fn.floater=function(options){this.addClass("flow-in");var block=$(this);$("#breaking-float__close").click(function(e){e.preventDefault();flowOut();block.removeClass("flow-in");});function flowOut(){$(".flow-in").removeClass("flowed");}
function flowIn(){$(".flow-in").addClass("flowed");}
return $(window).scroll(function(){if($(".headline--breakingnews").isInViewport()||($(".berita-utama").isInViewport())){flowOut();}
else{flowIn();}});}
function float_video(){$(".float-vid").floater();}
float_video();