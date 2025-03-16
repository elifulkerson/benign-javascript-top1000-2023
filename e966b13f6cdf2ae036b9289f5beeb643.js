$(document).ready(function(){
	$(".image").width($("#slider").width()/3);

	

	function reset(){
		$(".image").width($("#slider").width()/3);
		$(".image").attr("data-click",0);
    
    
	}



//	$(window).resize(function(){
//		reset();
//	})

	$(".item-img-1, .item-img-2").each(function(){
		var src = $(this).attr("data-src")
		$(this).css({
			background:`url(${src}) no-repeat`,
		})
	})

	$(".image").mouseover(function(){
		if ($(window).width() > 1024) {
			
			$(".image").width($("#slider").width()/3)
			$(this).width($("#slider").width()/2)
		}
        
	})

	$(".image").mouseout(function(){
		if ($(window).width() >= 1024) {
			$(".image").width($("#slider").width()/2.8)
		}
	})

	$(".image:last-child").mouseover(function(event){
		if ($(window).width() > 1024) {
			
			$(".image").width($("#slider").width()/3.5)
			$(this).width($("#slider").width()/1)
		}
	})

	$(".image").click(function(event){
		event.stopPropagation();
		if ($(window).width() > 1024) {
			window.open($(".image").attr("data-href") || "/");
		}

		if ($(window).width() <= 1024) {
			if ($(this).attr("data-click") == 0) {

				$(".image").attr("data-click",0)

				$(this).attr("data-click",1)

				

				if ($(event.currentTarget).hasClass("image-first")) {
					$(".image").width($("#slider").width()/2.5)
					$(this).width($("#slider").width()/2.5)
				}
				else{
					$(".image").width($("#slider").width()/3)
					$(this).width($("#slider").width()/2.5)
				}

			}
			else{
				window.open($(".image").attr("data-href") || "/");
				$(this).attr("data-click",0);
			}
		}
	})

	// note to remove
	//$(".image:first-child").mouseover();

	$(window).click(function(){
        reset();
	})
    
   
})
