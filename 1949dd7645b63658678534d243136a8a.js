function moveScroller_boxright() {
    var moveright = function() {
        var wct = $(window).scrollTop();
	    var brfc = $("#boxright_fixc").offset().top - $(window).height();
        var brf = $("#boxright_fix");
		var wbr = $("#boxright").width();
		if(wct < brfc) {
        	brf.css({
                position: "relative",
           		bottom: "",
				width: wbr
            });
			$("#boxright_fixb").height(0);
        }
        if(wct > brfc) {
            brf.css({
                position: "fixed",
                bottom: "0px",
				width: wbr
            });
			$("#boxright_fixb").height(brf.height());
        }
    };
    $(window).scroll(moveright);
    moveright();
}

function moveScroller_menu2() {
    var movemenu = function() {
        var st = $(window).scrollTop();
        var ot = $("#fixposmenu").offset().top - 30;
        var s = $(".main-menu");
        if(st > ot) {
			if(window.innerHeight < 700) {
				var heo = 0;
			}else {
				var heo = 1;
			}
            s.css({
                "position": "fixed",
                "top": "50px",
				"left": "0",
				"margin-top": "40px",
				"z-index":"9",
				"opacity":heo,
				"width":"100%",
				"background":"rgba(1,111,186,.95)"
            });
			$(".main-menu > div > ul > li:first-child").css("border-left","1px solid rgba(0,0,0,.1)");
			$(".main-menu > div > ul > li:last-child").css("border-right","1px solid rgba(0,0,0,.1)");
			$(".theader").hover(function(){
				s.css({
					"opacity":"1",
				});
				if($( "#share" ).css( "top" ) == '60px') {
					$("#share").css({
						"top":"95px",
					});
				}
			});
			$("#fixposmenu").html("&nbsp");
        } else {
            if(st <= ot) {
                s.css({
                    "position": "relative",
                    "top": "",
					"opacity":"1",
					"margin-top": "0px",
					"background":"rgba(1,111,186,1)"
                });
				$(".main-menu > div > ul > li:first-child").css("border-left","none");
				$(".main-menu > div > ul > li:last-child").css("border-right","none");
				$("#fixposmenu").html("");
       	     }
        }
    };
    $(window).scroll(movemenu);
    movemenu();
}

$(document).ready(function(){
	moveScroller_boxright();
});