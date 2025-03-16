var dynamiccontnetScrolled2 = false;
     window.addEventListener('scroll', function() {
    if (!dynamiccontnetScrolled2) {
         dynamiccontnetScrolled2 = true; 
        var activeDynamicUrl2 = document.querySelector(".sectiondynamicContent2.active").getAttribute('data-fragment-url') || '';
        var linkUrl2 = document.querySelector(".sectiondynamicContent2.active").getAttribute('data-link-url') || '';
        if(typeof activeDynamicUrl2 !="undefined" && activeDynamicUrl2.length > 0){
        fetch(activeDynamicUrl2).then(function(response) {
            if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
                dynamiccontnetScrolled2 = true;     
                return response.text();
            }
            else{
                dynamiccontnetScrolled2 = false;
            }
        }).then(function(respone) {
            document.querySelector("#nav-tabContent-regional").innerHTML = respone;
            imglazyload("#nav-tabContent-regional");
            if(typeof linkUrl2 !="undefined" && linkUrl2.length > 0 && linkUrl2 != ''){
                document.querySelector("#discoverwidget2").href = linkUrl2;
                document.querySelector("#discoverwidget2").style.display= "block";
            }
           
        }).catch(function(error) {
            dynamiccontnetScrolled2 = false;
        });
        }
     }
        });
        var myFunction2 = function() {
            
            var hasactive = $(this).hasClass('active');
            $(this).parent().children().removeClass("active")
            this.classList.add("active")
            var fragmentUrl = this.getAttribute("data-fragment-url");
            var linkUrlnew2 = this.getAttribute("data-link-url");
            if(!hasactive){
            showLoader(".regionalupdates .th-loader")
            $("#discoverwidget3").hide();
            fetch(fragmentUrl).then(function(response) {
         if(response.ok && (response.status >= 200 &&  response.status < 400)) {    
                  
                return response.text();
            }
            else{
                
            }
        }).then(function(respone) {
            hideLoader(".regionalupdates .th-loader")
            document.querySelector("#nav-tabContent-regional").innerHTML = respone;
            imglazyload("#nav-tabContent-regional");
            if(typeof linkUrlnew2 !="undefined" && linkUrlnew2.length > 0 && linkUrlnew2 != ''){
                document.querySelector("#discoverwidget2").href = linkUrlnew2;
                document.querySelector("#discoverwidget2").style.display= "block";
            }
        }).catch(function(error) {
           
        });
            }
        };
        setTimeout(function(){
        var elements = document.getElementsByClassName("sectiondynamicContent2");
        

        for (var i = 0; i < elements.length; i++) {
            
            elements[i].addEventListener('click', myFunction2, false);
        }
        }, 500);