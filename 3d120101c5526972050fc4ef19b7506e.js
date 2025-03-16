let mySearchBox = document.querySelector(".search-box-new-wrap");
            let mySearchBtn = document.querySelector(".search-button");
            let mySearchInput = document.querySelector("#myGlobalSearchInput");
            mySearchBox.addEventListener("click", function(e){
                e.preventDefault();
                let targetElm = e.target;
                if(targetElm.classList.contains("search-button")){
                    mySearchBox.classList.add('open')
                    setTimeout(function () {
                        mySearchBtn.classList.add('search-active')
                    }, 1000)
                }
                if(targetElm.classList.contains("close")){
                    mySearchBox.classList.remove('open')
                    mySearchBtn.classList.remove('search-active')
                }
                if(targetElm.classList.contains("search-active")){
                    if(mySearchInput.value.length  > 2) {
                        window.location.href= "https://www.mynet.com/arama?term="+mySearchInput.value;
                    }
                }
            })