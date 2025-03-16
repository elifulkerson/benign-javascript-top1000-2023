new MaMaScrollPic({
        id:"scrollList"
    })
    jQuery(".laxiu li").on("mouseover",function(){
        jQuery(this).addClass("hover").siblings("li").removeClass("hover");
    })
    show_sidebar('#scrollPic3');
    show_sidebar('#scrollPic4');
    show_sidebar('#scrollPic5');