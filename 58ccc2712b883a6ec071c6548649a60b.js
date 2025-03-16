var athenaJsSdkUrl = 'https://n11scdn.akamaized.net/custom/athena/athena.2daeaaf02ae.js';
var athenaProducerUrl = 'https://athena-event-provider.n11.com/events';

if (athenaJsSdkUrl !== '' && athenaProducerUrl !== '') {
(function(_,A,t,h,e,n,a){_['_ATHENA']=e;_[e]=_[e]||function(){(_[e].q=_[e].q||[]).push(arguments)},_[e].l=1*new Date();n=A.createElement(t),n.async=1;n.src=h;a=A.getElementsByTagName(t)[0];a.parentNode.insertBefore(n,a)})(window,document,'script',athenaJsSdkUrl,'athena');
athena('init', 'WEB', { defaultApp: 'n11', apiUrl: athenaProducerUrl});
athena('setCallback', function(e){if(e.eventName === "productView" || e.eventName === "order" || e.eventName === "addToCart"){dataLayer.push({"eventID": e.eventId,"event": "eventidfacebook-"+e.eventName})}})
}