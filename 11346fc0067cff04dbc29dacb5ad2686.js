jQuery(document).ready(function($) {
		var opts = {"namespace":"flex-","selector":".slides > li","easing":"linear","direction":"horizontal","reverse":false,"smoothHeight":false,"startAt":0,"animationSpeed":600,"initDelay":0,"useCSS":true,"touch":true,"video":false,"keyboard":true,"multipleKeyboard":false,"mousewheel":0,"controlsContainer":".flex-control-nav-container","sync":"","asNavFor":"","itemWidth":0,"itemMargin":0,"minItems":1,"maxItems":1,"move":1,"animation":"slide","slideshow":true,"slideshowSpeed":"7000","directionNav":true,"controlNav":false,"prevText":"","nextText":"","pausePlay":false,"pauseText":"Pause","playText":"Play","randomize":false,"thumbCaptions":false,"thumbCaptionsBoth":false,"animationLoop":true,"pauseOnAction":true,"pauseOnHover":false,"manualControls":""};
		$('#topstories-block1').flexslider(opts);		
	});

<!-- new code -->
jQuery(window).on('load',function() 
{
    var numItems = $('.views-row').length;  
     var i = 0;
            $('.views-row').each(function(){
                i++;                
                if(i == 5)
                {                   
                  //$(this).find('.field-content').html('<a href="/telugu-news/advt/my-twins-are-weak-and-struggling-help-me-save-them-1460200">ADVT: ఈ పసి పిల్లల ప్రాణాలకు దక్కాలంటే...</a>');
                }
            });   
});