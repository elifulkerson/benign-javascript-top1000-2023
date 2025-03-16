var scrollState = 'top';
$(window).scroll(function(){ 
var scrollPos = $(window).scrollTop();

    if( ( scrollPos != 100 ) && ( scrollState === 'top' ) ) {
        $(".bn_skin").stop().animate({top: '90px'}, 300);
        scrollState = 'scrolled';
    }       
    else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
        $(".bn_skin").stop().animate({top: '45px'}, 300);
        scrollState = 'top';
    }

});