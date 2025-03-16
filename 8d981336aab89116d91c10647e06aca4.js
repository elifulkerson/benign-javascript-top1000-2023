var site = window.location.hostname;
var firebaseConfig = {
    apiKey: "AIzaSyCA_2Cws3WRV8zDgRNA-ENpD1r-ULOakSc",
    authDomain: "k0mp45d0tc0m.firebaseapp.com",
    databaseURL: "https://k0mp45d0tc0m.firebaseio.com",
    projectId: "k0mp45d0tc0m",
    storageBucket: "k0mp45d0tc0m.appspot.com",
    messagingSenderId: "789521393658",
    appId: "1:789521393658:web:02d2c0bb13cde48f266643",
    measurementId: "G-LE47K9659F"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BJ3tbRbZ9QGajqvrMTLPpMWie0CIWnk1odpXw2X7LM6f1H4O9cfJjTkFVjjI2ZoOu3jyQtf0ackGQlLVCE00lh8");
var ukid = getCookieNotif("ukid");
var usr_id = getCookieNotif('kmps_usrid');
var id = "null";
var jixie_id = "null";
var useragent = navigator.userAgent;
if (ukid) {
    jixie_id = ukid;
}
if(usr_id){
    id = usr_id
}
if(document.cookie.indexOf('kgnotifkompascom=') == -1){
    messaging.requestPermission().then(function() {
        setCookieNotif("kgnotifkompascom", "true", 365);
        messaging.getToken().then(function (currentToken) {
            req = new XMLHttpRequest();
            req.open("POST", "https://kgn-api.kompas.com/subscribe", !0);
            req.send(JSON.stringify({ token: currentToken, site: site, kompasid: id, jixieid: jixie_id, useragent: useragent }));
            req.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {                    
                    setCookieNotif("kgnotifkompascomdaily", "true", 1);
                    setCookieNotif("t_kgn", currentToken, 365);
                }
            };
        })
        .catch(function (err) {
            console.log("An error occurred while retrieving token. ", err);
        });
    }).catch(function(err) {
        console.log('Unable to get permission to notify.', err);
    });
}
navigator.serviceWorker.register("/firebase-messaging-sw.js", { scope: "/firebase-cloud-messaging-push-scope" });
messaging.onMessage(function (payload) {
    navigator.serviceWorker.register("/firebase-messaging-sw.js");
    navigator.serviceWorker.ready.then(function (registration) {
        payload = JSON.parse(payload.data.notification);
        var notificationOptions = {
            body: payload.body,
            icon: payload.icon,
            data: { url: payload.click_action, id: payload.id, cover: payload.cover, require_interaction: payload.required_interaction, sound: payload.sound, action: payload.title_action, action_url: payload.action_url, show_tracker: payload.show_tracker },
        };
        if (payload.cover) {
            notificationOptions.image = payload.cover;
        }
        if (payload.title_action) {
            notificationOptions.actions = [{ action: "baca-action", title: payload.title_action }];
        }
        if (payload.required_interaction) {
            notificationOptions.requireInteraction = payload.required_interaction;
        }
        registration.showNotification(payload.title, notificationOptions);

        if(payload.id && payload.show_tracker)
        {
            fetch('https://mcf-push.kompas.com/tracker', {
                mode: "no-cors",
                method: 'post',
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                },
                body: '{"id": "'+payload.id+'", "useragent": "'+navigator.userAgent+'", "action":"show"}'
            })
            .then(function (data) {
                console.log('Show');
            })
            .catch(function (error) {
                console.log('Show Error');
            });
        }
    });
});

if(document.cookie.indexOf('kgnotifkompascomdaily=') == -1 && Notification.permission == "granted" && site == getCookieNotif('KgnotifDuplicateSw')){
    messaging.getToken().then(function (currentToken) {
        req = new XMLHttpRequest();
        req.open("POST", "https://kgn-api.kompas.com/subscribe", !0);
        req.send(JSON.stringify({ token: currentToken, refresh_token:"1", site: site, kompasid: id, jixieid: jixie_id, useragent: useragent }));
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {                    
                setCookieNotif("kgnotifkompascomdaily", "true", 1);
                setCookieNotif("t_kgn", currentToken, 365);
            }
        };
    })
    .catch(function (err) {
        console.log("An error occurred while retrieving token. ", err);
    });
}

function setCookieNotif(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.kompas.com;path=/;secure;SameSite=None";
}
function getCookieNotif(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}