try {
        var ua=navigator.userAgent.toLowerCase();
        if((ua.indexOf("msie 9")>-1 || ua.indexOf("msie 8")>-1 || ua.indexOf("msie 7")>-1 || ua.indexOf("msie 6")>-1 || ua.indexOf("msie 5")>-1)){
            document.getElementById('popup').style.display='block';document.getElementById('ie-update').style.display='block';
        }
    } catch(e){}