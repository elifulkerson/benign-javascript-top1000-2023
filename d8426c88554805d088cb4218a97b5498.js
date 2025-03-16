var getDivBottomFrameTop = document.querySelector(".ads__horizontal.clearfix");
        var getCloseBottomFrame = document.getElementById("dfp-Close-Bottom-Scroll");
        var getDivBottomFrame = document.getElementById("div-Bottom-Scroll");
        var getDivTransparentBf = document.getElementById("div-Bottom-Scroll-Transparent");        
        
        setTimeout(function(){ showElClose_BottomFrame(); }, 2000);
        getCloseBottomFrame.addEventListener("click",  removeEl_BottomFrame, false); 
        function showElClose_BottomFrame(){ 
            getCloseBottomFrame.style.visibility = "visible";
        }
        function removeEl_BottomFrame(){
            getDivBottomFrameTop.style.display = "none";
            getDivBottomFrame.style.display = "none";
            getCloseBottomFrame.style.display = "none";
            getDivTransparentBf.style.display = "none";
            
        }