function moveScroller_sec() {
    var movesec = function() {
        var ssec = $("#popsec");
        var stsec = $(window).scrollTop();
        var otsecb = $("#fixpos_secb").offset().top - ssec.height() - 120;
        if(stsec > otsecb) {
			var vtop = 54;
			if($(".main-menu").css("opacity") == "1") vtop = 65 + $(".main-menu").height();
            ssec.css({
                position: "fixed",
                top: vtop,
				zIndex: "2",
            });
			$("#fixposc").height(ssec.height());
			$("#fixpos_sec").html("&nbsp;");
			ssec.attr("class","w160");

        } 
		else {
            ssec.css({
               	position: "relative",
        		top: ""
            });
			$("#fixposc").height(0);
			$("#fixpos_sec").html("&nbsp;");
			ssec.attr("class","w160");
        }
    };
    $(window).scroll(movesec);
    movesec();
}
$(document).ready(function(){
	moveScroller_sec();
});