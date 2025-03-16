console.log("Previous URL : "+ document.referrer);
        //console.log("Previous URL type : "+ typeof(document.referrer));
        //console.log("Previous URL size : "+ document.referrer.length);
        let previousUrl = document.referrer;
        
        //Set cookie 
        function setCookie(cname, cvalue) {
            const d = new Date();
            //expires in 24 hours
            d.setTime(d.getTime() + (24 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        //Delete cookie 
        function delCookie(cname, cvalue) {
            const d = new Date();
            //expires in 24 hours
            d.setTime(d.getTime() - (24 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }

        //Get Cookie
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        let enableHomepageAd = 0;
        
        //Clear cookie if site not visited but cookie exist
        if(typeof(previousUrl) == 'undefined' || previousUrl.length == 0){
            //deleted cookie
            delCookie("homepageAdVisitedFlag", "no");
        }

        let homepageAdVisited = getCookie("homepageAdVisitedFlag");
        if (homepageAdVisited == "" && enableHomepageAd == 1) {
            console.log("inside home page-loader ad");
            //set ad visited flag
            setCookie("homepageAdVisitedFlag", "yes");
            window.location.href = "/abnads";
        }