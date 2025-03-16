(function () {
var now = new Date();
var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
"0" + now.getHours();
var head = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://app.najva.com/static/css/local-messaging.css" + "?v=" + version;
head.appendChild(link);
var script = document.createElement("script");
script.type = "text/javascript";
script.async = true;
script.src = "https://app.najva.com/static/js/scripts/tebyan827-website-41646-f6b5f8f8-bd55-405d-8a15-1c5c77af60a9.js" + "?v=" + version;
head.appendChild(script);
})()