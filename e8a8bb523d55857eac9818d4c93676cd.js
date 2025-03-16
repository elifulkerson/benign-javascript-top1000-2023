(function ($) {
        var i = 0;
        var len = $("#modRightBrandpage .panel>li").length;
        var isAnimated = false;
        var timer;

        timer = setInterval(function(){
            if(i==len-1){
                i=0;
            }else{
                i++;
            }
            doNext(i);
        },5000);

        $("#modRightBrandpage .next").on("click",function(e){
            e.preventDefault();
            i = $("#modRightBrandpage .panel>li.on").index();

            if(i==len-1){
                i=0;
            }else{
                i++;
            }
            stop();
            doNext(i);
        });

        $("#modRightBrandpage .prev").on("click",function(e){
            e.preventDefault();
            i = $("#modRightBrandpage .panel>li.on").index();

            if(i==-len+1){
                i=0;
            }else{
                i--;
            }
            stop();
            doPrev(i);
        });


        function doNext(i){
            if(!isAnimated){
                isAnimated=true;
                nextSlide(i);
            }
        }

        function doPrev(i){
            if(!isAnimated){
                isAnimated=true;
                prevSlide(i);
            }
        }

        function nextSlide(i){
            $("#modRightBrandpage .panel>li").not('.on').css("left","100%");
            $("#modRightBrandpage .panel>li.on").stop().animate({"left":"-100%"},500,function(){
                $(this).css("left","100%").removeClass("on");
            });
            $("#modRightBrandpage .panel>li").eq(i).stop().animate({"left":"0%"},500,function(){
                $(this).addClass("on");
                isAnimated = false;
            });
        }

        function prevSlide(i){
            $("#modRightBrandpage .panel>li").not('.on').css("left","-100%");
            $("#modRightBrandpage .panel>li.on").stop().animate({"left":"100%"},500,function(){
                $(this).css("left","-100%").removeClass("on");
            });
            $("#modRightBrandpage .panel>li").eq(i).stop().animate({"left":"0%"},500,function(){
                $(this).addClass("on");
                isAnimated = false;
            });
        }
    })(jQuery)