window.region    = getRegion();
    window.continent = getContinent();
    window.isAllowAddressByRegion = isAllowAddressByRegion();

    function getRegion(){
        var region = getCookie('region');

        if(region === ""){
            var Httpreq = new XMLHttpRequest(); 
            Httpreq.open("GET","https://pro.ip-api.com/json/?key=tZjXsR6xtdknm7C&fields=region",false);
            Httpreq.send(null);
            region = JSON.parse(Httpreq.responseText).region;
            createCookie('region', region);
            return region;
        }

        return region;        
    }

    function getContinent(){
        var continent = getCookie('continent');

        if(continent === ""){
            var Httpreq = new XMLHttpRequest(); 
            Httpreq.open("GET","https://pro.ip-api.com/json/?key=tZjXsR6xtdknm7C&fields=continent",false);
            Httpreq.send(null);
            continent = JSON.parse(Httpreq.responseText).continent;
            createCookie('continent', continent);
            return continent;
        }

        return continent;
    }

    function isAllowAddressByRegion(){

      
               
            
            if(window.continent == 'Europe'){
                return false;
            }

            if(window.region == 'CA'){
                return false;
            }

               

        return true;
    }

    function createCookie(cookieName, cookieValue)
    {
        var date = new Date();
        date.setTime( date.getTime() + (5 * 60000) );

        document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
    }

    function getCookie(cookieName)
    {
        var name = cookieName + "=";
        var allCookieArray = document.cookie.split(';');
        for(var i=0; i<allCookieArray.length; i++)
        {
            var temp = allCookieArray[i].trim();
            if (temp.indexOf(name) == 0)
                return temp.substring(name.length,temp.length);
        }
        return "";
    }