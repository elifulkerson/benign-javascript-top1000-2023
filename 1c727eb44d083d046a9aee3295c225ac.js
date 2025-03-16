if(!window["ya_params"]) {
window["ya_params"] = {};
}
ya_params.application = "desktop";
// if ( window['adv_off_btn_location'] ) {
// switch(window['adv_off_btn_location']) {
// case "1":
// ya_params.ab_advoff = "top";
// break;
// case "2":
// ya_params.ab_advoff = "bottom";
// break;
// case "3":
// ya_params.ab_advoff = "none";
// break;
// }
// }
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
ym(27775902, "init", {
id:27775902,
clickmap:true,
trackLinks:true,
accurateTrackBounce:true,
webvisor:true,
params: ya_params
});
ym(230672, "init", {
id:230672,
clickmap:true,
trackLinks:true,
accurateTrackBounce:true,
params: ya_params
});
function g_gazeta_ym_reload() {
ym(27775902, 'hit', location.href, {
referer: "/",
params: ya_params
});
ym(230672, "hit", location.href, {
referer: "/",
params: ya_params
});
}