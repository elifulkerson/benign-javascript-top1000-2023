var windowwidth = $(window).width();

  $(window).resize(function(){
    windowwidth = $(this).width();
  });
  



/* MENU */
$(function(){
  /*$(".menutoggle").click(function(){
	alert("hi");
    /*if($(".menulist").hasClass("open")){
      openmicon();
      $(".menulist").animate({width:"0"},250);
      $(".menulist").removeClass("open");
    }
    else{
      closemicon();
      $(".menulist").animate({width:"320px"},250);
      $(".menulist").addClass("open");
    }
  });*/
  
  function closemicon(){
    $(".menuline.f").animate({top:"15px"},250);
    $(".menuline.t").animate({top:"15px"},250);
  }
  function openmicon(){
    $(".menuline.f").animate({top:"5px"},250);
    $(".menuline.t").animate({top:"25px"},250);
  }
  
  
});

/* SCROLL */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 0);
        return false;
      }
    }
  });
});

/* SCROLL ANIMATE */
   $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('#blogo').hide();
     }
    else
     {
      $('#blogo').show();
     }
 });


      // do all your cool stuff here for larger screens
      $(document).scroll(function () {
        if(windowwidth >= 0 && windowwidth <= 1023) {

        }else{        
          var y = $(this).scrollTop();
          if (y > 25) {
              $('#logo_m').show();
          } else {
              $('#logo_m').hide();
          }
      }

  });
  
 /*Mark D*/ 
  
$(function(){
	var lsloaded = 5;
	var docuw = $(document).width();
	
	$(document).resize(function(){
		docuw = $(document).width();	
	});
	
  $("#search").click(function(e){
    if($(".sinput").hasClass("sish")){
      $(".sinput").removeClass("sish");
    }
    else{
      $(".sinput").addClass("sish");
      $(".sinput input[type='text']").focus();
    }
    e.preventDefault();
  });
  
  
   $(".mob_search").click(function(e){
    if($(".sinput").hasClass("sish")){
      $(".sinput").removeClass("sish");
    }
    else{
      $(".sinput").addClass("sish");
      $(".sinput input[type='text']").focus();
    }
    e.preventDefault();
  });
  
  $("#menutoggle a").click(function(e){
    //$(".mobilenav").animate({width:"280px"},500);
    if($(".mobilenav").hasClass("mnopen")){
      $(".mobilenav").removeClass("mnopen");
    }
    else{
      $(".mobilenav").addClass("mnopen");
    }
    e.preventDefault();
  });
  $(".ov").click(function(){
	$(".mobilenav").removeClass("mnopen");
  });
  
  $(".acc_ch").click(function(){
    if($(this).hasClass("exp")){
      $(this).siblings(".items").stop().slideUp();
      $(this).children("img").attr("src","http://www.inquirer.net/inq2016/images/expand.png");
      $(this).removeClass("exp");     
    }
    else{
      $(this).siblings(".items").stop().slideDown();
      $(this).children("img").attr("src","http://www.inquirer.net/inq2016/images/minimize.png");
      $(this).addClass("exp");
    }
  });
 
	if(docuw<480){
		$("#tr_b_more a").click(function(e){
			if(lsloaded<30){
				var minrange = lsloaded+1;
				var maxrange = minrange+4;
				$("#tr_box:nth-child(n+"+minrange+"):nth-child(-n+"+maxrange+")").css("display","block");
				lsloaded = maxrange;
				e.preventDefault();
			}
			else{
				
			}
		}); 
	}
  
});



