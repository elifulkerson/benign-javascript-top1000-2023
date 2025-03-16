var dynamiccontnetScrolled = false;
         window.addEventListener('scroll', function() {
        if (!dynamiccontnetScrolled) {
            dynamiccontnetScrolled = true; 
            var activeDynamicUrl = document.querySelector(".sectiondynamicContent.active").getAttribute('data-fragment-url') || '';
            var linkUrl = document.querySelector(".sectiondynamicContent.active").getAttribute('data-link-url') || '';
            if(typeof activeDynamicUrl !="undefined" && activeDynamicUrl.length > 0){
            fetch(activeDynamicUrl).then(function(response) {
                if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
                    dynamiccontnetScrolled = true;     
                    return response.text();
                }
                else{
                    dynamiccontnetScrolled = false;
                }
            }).then(function(respone) {
                document.querySelector("#nav-tabContent").innerHTML = respone;
                imglazyload("#nav-tabContent");
                dynamicadwidgetdisplay("dynamicadwidget");
                if(typeof linkUrl !="undefined" && linkUrl.length > 0 && linkUrl != '' && linkUrl != '#'){
                    document.querySelector("#discoverwidget1").href = linkUrl;
                    document.querySelector("#discoverwidget1").style.display= "block";
                }
               
            }).catch(function(error) {
                dynamiccontnetScrolled = false;
            });
            }
         }
            });
            var myFunction = function() {
               
                var hasactive = $(this).hasClass('active');
                $(this).parent().children().removeClass("active")
                this.classList.add("active")
                var fragmentUrl = this.getAttribute("data-fragment-url");
                var linkUrlnew = this.getAttribute("data-link-url");
                if(!hasactive){

                if(fragmentUrl){
                    showLoader(".topnewstoday .th-loader")
                    $("#discoverwidget3").hide();
                fetch(fragmentUrl).then(function(response) {
             if(response.ok && (response.status >= 200 &&  response.status < 400)) {    
                      
                    return response.text();
                }
                else{
                    
                }
            }).then(function(respone) {
                hideLoader(".topnewstoday .th-loader")
                document.querySelector("#nav-tabContent").innerHTML = respone;
                imglazyload("#nav-tabContent");
                dynamicadwidgetdisplay("dynamicadwidget");
                if(typeof linkUrlnew !="undefined" && linkUrlnew.length > 0 && linkUrlnew != '' && linkUrlnew != '#'){
                    document.querySelector("#discoverwidget1").href = linkUrlnew;
                    document.querySelector("#discoverwidget1").style.display= "block";
                }
            }).catch(function(error) {
               
            });
                }
                }
            };
            setTimeout(function(){
            var elements = document.getElementsByClassName("sectiondynamicContent");
            

            for (var i = 0; i < elements.length; i++) {
                
                elements[i].addEventListener('click', myFunction, false);
            }
            }, 500);
            function dynamicadwidgetdisplay(selector){
                userIdentify.then(function() {
                    if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {
                     googletag.cmd.push(function() { googletag.display(selector); });
                        var googletagslots = googletag.pubads().getSlots();
                        var refreshslots = googletagslots.find(element => element.getSlotId().toString().indexOf("/22390678/TH_Desktop_HP_RM") > -1);
                        if (typeof refreshslots !="undefined"){
                            googletag.cmd.push(function() {
                                googletag.pubads().refresh([refreshslots]);
                            });
                        }
                    }
                });
            }