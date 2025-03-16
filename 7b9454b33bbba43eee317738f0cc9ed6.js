(function(){
        var speed = 80;
        var tab = document.getElementById("news_marq");
        var tab1 = document.getElementById("scllo_begin");
        var tab2 = document.getElementById("scllo_end");
        tab2.innerHTML = tab1.innerHTML;
        function Marquee(){
            if(tab2.offsetWidth-tab.scrollLeft<=0)
                tab.scrollLeft-=tab2.offsetWidth
            else{
                tab.scrollLeft++;
            }
        }
        var gundong=setInterval(Marquee,speed);
        tab.onmouseover=function(){  clearInterval(gundong)};
        tab.onmouseout=function(){gundong=setInterval(Marquee,speed)};
    })();