$("body,html").bind("touchstart touchmove scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
			  $("script").each(function(){
			    var get_script = $(this).attr("rancak-hold");
			    $(this).attr('src', get_script);
			  })
			});