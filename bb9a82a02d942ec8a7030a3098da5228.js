(function (w, d, c) {
(w[c] = w[c] || []).push(function() {
var options = {
project: 46589,
element: 'top100_widget',
pub_id: window.g_publisher_uid,
pub_scope: window.g_publisher_uid_scope
};
try {
w.top100Counter = new top100(options);
} catch(e) { }
var advOffOptions = {
project: 7040998
};
try {
w.advOffTop100Counter = new top100(advOffOptions);
if(w['g_Gazeta_AdFree']) {
g_Gazeta_AdFree.then(function(hasSubscription) {
w.advOffTop100Counter.sendCustomVars({"prime_enabled": Boolean(hasSubscription)})
})
}
} catch(e) { }
});
var n = d.getElementsByTagName("script")[0],
s = d.createElement("script"),
f = function () { n.parentNode.insertBefore(s, n); };
s.type = "text/javascript";
s.async = true;
s.src =
(d.location.protocol == "https:" ? "https:" : "http:") +
"//st.top100.ru/top100/top100.js";
if (w.opera == "[object Opera]") {
d.addEventListener("DOMContentLoaded", f, false);
} else { f(); }
})(window, document, "_top100q");