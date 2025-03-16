function removeAlert() {
        var alertStatus = "AlertaActiva";
        document.getElementById("cont_alerta").style.display = "none";
        setCookieAlerta('alerta', alertStatus, 5);
    }
    function setCookieAlerta(cname, cvalue, expMin) {
        var Sitio = document.location.href;
        var path = "/";
        var domain = (Sitio.indexOf("emol.com") > -1) ? ".emol.com" : ".emol.cl";
        var date = new Date();
        date.setTime(date.getTime() + (expMin * 60 * 1000));
        document.cookie = cname + "=" + cvalue + ";expires=" + date.toUTCString() + ";path=" + path + " ;domain=" + domain;
    }