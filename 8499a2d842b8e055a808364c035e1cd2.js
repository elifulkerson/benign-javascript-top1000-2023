setTimeout(function(){
if(typeof snowplow != "function"){
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];
p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)
};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;n.class='optanon-category-C0001';
n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","https://cdn.jsdelivr.net/npm/@snowplow/javascript-tracker@3.4.0/dist/sp.min.js?cl=1","snowplow"));
snowplow('newTracker', 'sp', 'sp.bitly.com', {
appId: 'bitly-marketing',
anonymousTracking: { withServerAnonymisation: true },
stateStorageStrategy: "none",
discoverRootDomain: true,
cookieSameSite: 'Lax', // Recommended
contexts: {
session: true,
performanceTiming: true
}
});
snowplow('trackPageView');
} 
}, 2000);