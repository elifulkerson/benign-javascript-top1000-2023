$(function(){
        const category = '' || '';
      
        $(window).scroll(function(){
            if ($('.container-index-search').length > 0) {
              var fromTopPx = 20; // distance to trigger
              var scrolledFromtop = jQuery(window).scrollTop();
              if(scrolledFromtop > fromTopPx){
                  jQuery('.fixed-top').addClass('scrolled');
              }else{
                  jQuery('.fixed-top').removeClass('scrolled');
              }
            } else {
              jQuery('.fixed-top').addClass('scrolled');
            }
        });
      })