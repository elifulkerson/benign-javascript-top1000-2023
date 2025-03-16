var isTabActive;
  var data1="";

  function refreshFun(){

    $.ajax({
      url: '/section/tne-mal-home-7.3087',
	  type: "GET",
	  dataType: 'html',
	  success: function(data, status,xhr){
        	if(data1 != data){	
              //console.log("data checking....................");
              var topstories="",middleStories="",rightStories=""
      	      $('.mpp-main-element-left').hide();;
              $('.mpp-main-element-middle').hide();;
			  $('.mpp-main-element-right-news-card').hide()

            	$($(data).find('.mpp-main-element-left')).each(function() {
	            	topstories = $(this).html();
	        	});
              
              	$($(data).find('.mpp-main-element-middle')).each(function() {
	            	middleStories = $(this).html();
	        	});
              	$($(data).find('.mpp-main-element-right-news-card')).each(function() {
	            	rightStories = $(this).html();
	        	});
              	
              	
              $('.mpp-main-element-left').html(topstories);
			  $('.mpp-main-element-left ').show();;
              
              $('.mpp-main-element-middle').html(middleStories);
			  $('.mpp-main-element-middle ').show();;
              
              $('.mpp-main-element-right-news-card').html(rightStories);
			  $('.mpp-main-element-right-news-card ').show();
              
              googletag.pubads().refresh();


            } 	
        data1 = data;
          
          
        //console.log("data loaded./..............")
          
        }
    })
  }
  
  
  window.onfocus = function () {
    isTabActive = true;
  	refreshFun()
    //console.log("onFocus.......")
  }
  
  window.onblur = function () {
  	isTabActive = false;
    // console.log("onBlur..........................")

  };