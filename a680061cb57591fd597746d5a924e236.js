jQuery(function($){
		var windowwidth = $(window).width();
		//givemob();
		
		//console.log("I'm working?");
		
		function giveamp(){
			if(windowwidth<480){
				$("a").each(function(i){
					var linklink = $(this).attr("href");
					var ifmatch = linklink.match(/https:\/\/(?!frame|esports)\w+\.inquirer\.net\/[0-9]+\/[a-z]+/g);
				//	console.log(ifmatch);
					if(ifmatch){
						$(this).attr("href",linklink+"/amp");
						//console.log(ifmatch);
					}
				});
					
			}
		}
		function givemob(){
			if(windowwidth<480){
				$("a").each(function(i){
					var linklink = $(this).attr("href");
					if(linklink!=null){
						var getslash = linklink.split("/");
						var getcha = (getslash[2] ? getslash[2].split(".") : null);
						var ifmatch = linklink.match(/https:\/\/(?!frame|esports)\w+\.inquirer\.net\/[0-9]+\/[a-z]+/g);
						console.log(ifmatch);
						if(ifmatch){
							$(this).attr("href","https://m.inquirer.net/"+getcha[0]+"/"+getslash[3]);
						}
					}
				});
			}
		}
		
		//giveamp();
		/*JS RESPONSIVE*/
		$(window).resize(function(){
			windowwidth = $(this).width();
		 
			//givemob();
			//giveamp();
			
		});
		/*END OF JS RESPONSIVE*/
		
	});
	
	
	
	var windowwidth = $(window).width();

  $(window).resize(function(){
    windowwidth = $(this).width();
  });

  
$(function(){
	var lsloaded = 5;
	var docuw = $(document).width();
	
	$(document).resize(function(){
		docuw = $(document).width();	
	});
  
  $("#menutoggle2 a").click(function(e){
    //$(".mobilenav").animate({width:"280px"},500);
    if($("#twokexpand-wrap").hasClass("mnopenb")){
      $("#twokexpand-wrap").removeClass("mnopenb");
    }
    else{
      $("#twokexpand-wrap").addClass("mnopenb");
    }
    e.preventDefault();
  });
  /*
  $(".ov").click(function(){
	$("#twokexpand-wrap").removeClass("mnopenb");
  });
  */
  $(".navclose").click(function(){
  $("#twokexpand-wrap").removeClass("mnopenb");
  });
  
  $(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.a').fadeOut();
  } else {
	  if($(document).width() < 720 ) {
          // dont do anything if mobile
	  }else{
		  $('.a').fadeIn();
	  }
  }
  });

});