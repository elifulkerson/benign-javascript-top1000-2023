mynetReady(function () {
            if(myLogin.getCookie("uvid") !== '' || myLogin.getCookie("muser") !== '') {
                myLogin.setCookie("uvid","",0,"/",".mynet.com");
                myLogin.setCookie("muser","",0,"/",".mynet.com");
            }
        })