
  // 导航
    function nicenav(){
        var $lis = $('.header_wrap .header_nav li'), $h = $('.header_wrap .header_nav .cur') ,$on;
        if( $('.header_wrap .header_nav .on').size()>0 ){
		    $on = $('.header_wrap .header_nav .on')
		} else{
		    $h.hide(); $on = $('.header_wrap .header_nav li').eq(0) ;
		}
        if($on.length < 1){return true;}
        var on_=($on.position().left);
        var w=($on.width()-$h.width())/2;
            on_=($on.position().left)+w;
        $h.stop().css({ 'left':on_}, 200); 
        $lis.mouseover(function(){ 
           var w2=($(this).width()-$h.width())/2;   $h.show();
         $h.stop().animate({ 'left': ($(this).offsetParent().context.offsetLeft)+w2 }, 200); 
       })
        $('.header_wrap .header_nav ul').mouseleave(function(){
            $('.header_wrap .header_nav .on').size()<1 ?  $h.hide(): '';
             $h.stop().animate({ 'left':on_}, 200); 
        })
    }
    nicenav()
  $(".header_wrap .header_center .header .search input").focus(function(){
    $(".header_wrap .header_center .header .search").addClass("active")
  });
  $(".header_wrap .header_center .header .search input").blur(function(){
    $(".header_wrap .header_center .header .search").removeClass("active")
  });
    
	
//cookie 
function cookie(b, j, m) {
	if (typeof j != "undefined") {
		m = m || {};
		if (j === null) {
			j = "";
			m = $.extend({}, m);
			m.expires = -1
		}
		var e = "";
		if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
			var f;
			if (typeof m.expires == "number") {
				f = new Date();
				f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
			} else {
				f = m.expires
			}
			e = "; expires=" + f.toUTCString()
		}
		var l = m.path ? "; path=" + (m.path) : "";
		var g = m.domain ? "; domain=" + (m.domain) : "";
		var a = m.secure ? "; secure" : "";
		document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
	} else {
		var d = null;
		if (document.cookie && document.cookie != "") {
			var k = document.cookie.split(";");
			for (var h = 0; h < k.length; h++) {
				var c = jQuery.trim(k[h]);
				if (c.substring(0, b.length + 1) == (b + "=")) {
					d = decodeURIComponent(c.substring(b.length + 1));
					break
				}
			}
		}
		return d
	}
};
var cookiename = "Cookienightbody", heibai = cookie(cookiename), body = '<body class="' + (heibai != null ? heibai : "nightbody") + '">';
if($(".switch_theme").size()>=1){
	$("body").addClass(cookie(cookiename));
	 if(cookie(cookiename)=='nightbody'){
        $(".switch_theme").addClass("on")
     }
}
// 切换
$(function(){
$(".switch_theme").click(function() {
	 $(this).toggleClass("on")
	$('body').toggleClass('nightbody');
	var con = $('body').attr('class').indexOf("nightbody") > -1 ? "nightbody" : "bai";
	cookie(cookiename, con, {
		expires: 365,
		path: '/',
		domain: '3dmgame.com'
	});
})
})