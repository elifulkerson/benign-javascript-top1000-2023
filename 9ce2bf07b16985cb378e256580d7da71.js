/* SlideHotissue */
		window.WEBZINE = window.WEBZINE || {};
		WEBZINE.Home = WEBZINE.Home || {};
		WEBZINE.Home.SlideHotissue = window.WEBZINE.Home.SlideHotissue || {};
		WEBZINE.Home.SlideHotissue.readyHotissue = function() {
			var totalCount = $(".centerPart ul li").length;
			var widthLimit = ((totalCount - 6) * 103) * -1;
			var listWidth  = totalCount * 103;
			var moveSpeed  = 400;
			var tmpCheck   = true;
			$(".centerPart ul").css('width', listWidth);
			if(totalCount>=7) {
				$(".leftArrowPart a").click(function(e) { if(tmpCheck)  { onMoveHotissue('left');  } e.preventDefault(); });
				$(".rightArrowPart a").click(function(e) { if(tmpCheck) { onMoveHotissue('right'); } e.preventDefault(); });
			} else {
				$(".rightArrowPart a").addClass('lock');
				$(".leftArrowPart a, .rightArrowPart a").click(function(e) { e.preventDefault(); });
			}
			function onMoveHotissue(type) {
				tmpCheck = false;
				var tempNum = parseInt($(".centerPart ul").css("margin-left"));
				if(type=='left') {
					if((tempNum+618) >= 0) {
						$(".centerPart ul").animate({'margin-left': '0px'}, moveSpeed, moveLock);
						if(totalCount >= 7) { $(".rightArrowPart a").removeClass('lock'); }
					} else {
						$(".centerPart ul").animate({'margin-left': '+=618px'}, moveSpeed, moveLock);
						$(".rightArrowPart a").removeClass('lock');
					}
				} else if(type=='right'){
					if((tempNum+(-618)) <= widthLimit) {
						$(".centerPart ul").animate({"margin-left" : widthLimit}, moveSpeed, moveLock);
						if(totalCount >= 7) { $(".leftArrowPart a").removeClass('lock'); }
					} else {
						$(".centerPart ul").animate({"margin-left" : "-=618px"}, moveSpeed, moveLock);
						$(".leftArrowPart a").removeClass('lock');
					}
				}
			}
			function moveLock() {
				var tempNum = parseInt($(".centerPart ul").css("margin-left"));
				if(tempNum == 0) {$(".leftArrowPart a").addClass('lock');}
				if(tempNum == widthLimit) {$(".rightArrowPart a").addClass('lock');}
				tmpCheck = true;
			}
		}

		WEBZINE.Home.SlideHotissue.mainImageCt = function(tgNum) {
			$(".hotissueImage li a").css('display', 'none');
			$(".hotissueImage li:eq("+tgNum+") a").fadeTo(300,1.0); 
			$(".centerPart ul li a").removeClass('selected');
			$(".centerPart ul li:eq("+tgNum+") a").addClass('selected');
		}

		function displaylastNews(){
			$(".hotissuePartNew div.selectors .centerPart ul li").removeClass("hidden");
		}

		$(document).ready(function() {
		/* Slide hot issue */
		var tmpRandom = Math.floor(Math.random() * 7);
		WEBZINE.Home.SlideHotissue.mainImageCt(tmpRandom);
		WEBZINE.Home.SlideHotissue.readyHotissue();
		setTimeout(displaylastNews, 500);
	});