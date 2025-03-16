var dynamiccontnetScrolled3 = false;
     window.addEventListener('scroll', function() {
    if (!dynamiccontnetScrolled3) {
         dynamiccontnetScrolled3 = true; 
        var activeDynamicUrl3 = document.querySelector(".sectiondynamicContent3.active").getAttribute('data-fragment-url') || '';
        var linkUrl3 = document.querySelector(".sectiondynamicContent3.active").getAttribute('data-link-url') || '';
        if(typeof activeDynamicUrl3 !="undefined" && activeDynamicUrl3.length > 0){
        fetch(activeDynamicUrl3).then(function(response) {
            if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
                dynamiccontnetScrolled3 = true;     
                return response.text();
            }
            else{
                dynamiccontnetScrolled3 = false;
            }
        }).then(function(respone) {
            document.querySelector("#nav-tabContent-cities").innerHTML = respone;
            imglazyload("#nav-tabContent-cities");
            if(typeof linkUrl3 !="undefined" && linkUrl3.length > 0 && linkUrl3 != ''){
                document.querySelector("#discoverwidget3").href = linkUrl3;
                document.querySelector("#discoverwidget3").style.display= "block";
            }
           
        }).catch(function(error) {
            dynamiccontnetScrolled3 = false;
        });
        }
     }
        });
        var myFunction3 = function() {
            
            var hasactive = $(this).hasClass('active');
            $(this).parent().children().removeClass("active")
            this.classList.add("active")
            var fragmentUrl = this.getAttribute("data-fragment-url");
            var linkUrlnew2 = this.getAttribute("data-link-url");
            if(!hasactive){
            showLoader(".citiesupdates .th-loader")
            $("#discoverwidget3").hide();
            fetch(fragmentUrl).then(function(response) {
         if(response.ok && (response.status >= 200 &&  response.status < 400)) {    
                  
                return response.text();
            }
            else{
                
            }
        }).then(function(respone) {
            hideLoader(".citiesupdates .th-loader")
            document.querySelector("#nav-tabContent-cities").innerHTML = respone;
            imglazyload("#nav-tabContent-cities");
            if(typeof linkUrlnew2 !="undefined" && linkUrlnew2.length > 0 && linkUrlnew2 != ''){
                document.querySelector("#discoverwidget3").href = linkUrlnew2;
                document.querySelector("#discoverwidget3").style.display= "block";
            }
        }).catch(function(error) {
           
        });
            }
        };
        setTimeout(function(){
        var elements = document.getElementsByClassName("sectiondynamicContent3");
        

        for (var i = 0; i < elements.length; i++) {
            
            elements[i].addEventListener('click', myFunction3, false);
        }
        }, 500);