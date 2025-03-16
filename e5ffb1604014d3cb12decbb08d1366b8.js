$(window).scroll(function(){
        if($(window).scrollTop() > 300){
            $(".goTop").show();
        }else{
            $(".goTop").hide();
        }
    });
    //返回顶部
    $(".goTop .topArrow").on("click",function(){
        $('html,body').animate({scrollTop: '0px'}, 600);
    });