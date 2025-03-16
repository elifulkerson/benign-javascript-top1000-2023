$(document).ready(function(){
    setTimeout(function(){
        $('.balloon').animate({bottom: '0px'}, "slow", "swing");
        $('.balloon_close').fadeIn();
        setTimeout(function(){
            if ($('.headline').hasClass("breakingnews-float--right"))
            {
            var p1 = $('.balloon').animate({bottom: '-630px'}, "fast", "swing").promise();
                $.when(p1).then(function() {
                    $('.balloon').css("right", "auto").promise();
$('.balloon').animate({bottom: '0px'}, "slow", "swing").promise();
                });
           }
        },2000);
    }, 5000);
    $('.balloon_close').click(function(){
        $('.balloon').animate({bottom: '-630px'}, "slow", "swing");
        setTimeout(function(){$('.balloon').remove();}, 500);
    });
    
});