var site = window.location.host;

firebase.initializeApp({messagingSenderId:"42652921097"});

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BApaUPbkeKeQgn5TXiXSqOxM5DCPgKovoxEg4is-vYVA_-TT9lAAX05UMeTiIGNVPMm0yoY1AplwW5lw1A5rIeQ");

var uuid_c                      = getCookie('uuid_c');
var ukid                        = getCookie('ukid');
var usr_id                      = getCookie('kmps_usrid');

var id                          = "null";
var jixie_id                    = "null";
var city                        = "null"
var useragent                   = navigator.userAgent;
var uuid                        = Math.random().toString().replace("0.", "");

if(ukid){
    jixie_id = ukid;
}
if(uuid_c){
    uuid = uuid_c;
}
if(usr_id){
    id = usr_id
}

if(document.cookie.indexOf('kgnotif=') == -1 || document.cookie.indexOf('kgnotif_login=') == -1){

    navigator.serviceWorker.register('/kgnotif-kompasiana-sw.js').then(function(registration){
        messaging.useServiceWorker(registration);
        messaging.requestPermission().then(function() {
            messaging.getToken().then(function(currentToken){
                
                try{
                    if(document.cookie.indexOf('kmps_usrid=') != -1 && document.cookie.indexOf('kgnotif_login=') == -1){
                        var pos = new XMLHttpRequest();
                        pos.open("POST", "https://kgn-api.kompas.com/subscribe/kgmedia", !0);
                        pos.send(JSON.stringify({ uuid: uuid, token: currentToken, site: site, kompasid: id, jixieid: jixie_id, useragent: useragent, city: city }));    
                        pos.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {                    
                                setCookie("kgnotif_login", "true", 36525);
                                setCookie("kgnotifdaily", "true", 1);
                            }
                        }                        
                    }else{
                        if(document.cookie.indexOf('kgnotif=') == -1){
                            var pos = new XMLHttpRequest();
                            pos.open("POST", "https://kgn-api.kompas.com/subscribe/kgmedia", !0);
                            pos.send(JSON.stringify({ uuid: uuid, token: currentToken, site: site, kompasid: id, jixieid: jixie_id, useragent: useragent, city: city }));
                            pos.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {                    
                                    setCookie("kgnotif", "true", 36525);                                    
                                    setCookie("kgnotifdaily", "true", 1);
                                }
                            }                            
                        }
                    }
                    setCookie("uuid_c", uuid, 36525);
                }catch (error){	 	
                    console.log(error);
                }

            }).catch(function(err) {
                console.log('An error occurred while retrieving token. ', err);
            });

        }).catch(function(err) {
            console.log('Unable to get permission to notify.', err);
        });
    });
}

messaging.onMessage(function(payload) {

    navigator.serviceWorker.register('/kgnotif-kompasiana-sw.js');

    navigator.serviceWorker.ready.then(function(registration) {

        payload = JSON.parse(payload.data.notification)
        
        var notificationOptions = {
            body: payload.body,
            icon: payload.icon,
            data: {url:payload.click_action, id:payload.id, cover:payload.cover, require_interaction:payload.required_interaction, sound:payload.sound, action:payload.title_action}
        };
        
        if(payload.cover){
            notificationOptions.image = payload.cover;
        }
        
        if(payload.title_action){
            notificationOptions.actions = [{action: 'baca-action', title: payload.title_action}];
        }
        
        if(payload.required_interaction){
            notificationOptions.requireInteraction = payload.required_interaction;
        }
        
        registration.showNotification(payload.title, notificationOptions);
    });
});

if(document.cookie.indexOf('kgnotifdaily=') == -1 && Notification.permission == "granted"){
    messaging.getToken().then(function (currentToken) {

        try{
            var pos = new XMLHttpRequest();
            pos.open("POST", "https://kgn-api.kompas.com/subscribe/kgmedia", !0);
            pos.send(JSON.stringify({ uuid: uuid, token: currentToken, site: site, kompasid: id, jixieid: jixie_id, useragent: useragent, city: city }));    
            setCookie("kgnotifdaily", "true", 1);
        }catch (error){	 	
            console.log(error);
        }
    })
    .catch(function (err) {
        console.log("An error occurred while retrieving token. ", err);
    });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return null;
}