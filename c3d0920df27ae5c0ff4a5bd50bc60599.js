$(document).ready(function(){
(function(){
	var $backToTopTxt = "", 
	
	$backToTopEle = $('<div class="backToTop"></div>').appendTo($("body"))
		.text($backToTopTxt).attr("title", $backToTopTxt).click(function(){
			$("html, body").animate({ scrollTop: 0 }, 350);
	}), 
	$backToTopFun = function(){
		var st = $(document).scrollTop(), winh = $(window).height();
		(st > 800)? $backToTopEle.show(): $backToTopEle.hide();
		
		//(st > 800)? fnav.show(): fnav.hide();
		//IE6下的定位
		if(!window.XMLHttpRequest){
			$backToTopEle.css("top", st + winh - 280);
		}
	};
	
	$(window).bind("scroll", $backToTopFun);
	$(function(){ $backToTopFun(); });

})();
});