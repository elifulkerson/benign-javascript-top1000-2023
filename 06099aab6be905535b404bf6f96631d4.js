var getContBottomFrame = document.querySelector(".ads__horizontal");
        var getCloseBottomFrame = document.getElementById("dfp-close-bottomframe");

        //Tweaking -> Remove href to place close button space
        var getHrefBottomFrame = document.querySelector(".ads__horizontal a[target]");
        getHrefBottomFrame.removeAttribute('href');
        setTimeout(function(){ showElClose_BottomFrame(); }, 10000);
        getCloseBottomFrame.addEventListener("click",  removeEl_BottomFrame, false); 
                                                         
        //delay the close button
        function showElClose_BottomFrame(){ 
            getCloseBottomFrame.style.visibility = "visible";
        }
        function removeEl_BottomFrame(){ //Hide the banner
            getContBottomFrame.style.display = "none";
            getCloseBottomFrame.style.display = "none";
        }