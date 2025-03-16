(function (w, d, c) {
w[c] = w[c] || function () {
(w[c].q = w[c].q || []).push(arguments);
}, w[c].l = 1 * new Date();
var n = d.getElementsByTagName('script')[0],
s = d.createElement('script'),
f = function () { n.parentNode.insertBefore(s, n); };
s.type = 'text/javascript';
s.async = true;
s.src = 'https://rcmjs.rambler.ru/static/recommender.js';
if (w.opera == '[object Opera]') {
d.addEventListener('DOMContentLoaded', f, false);
} else { f(); }
})(window, document, 'rcm');
window._top100q.push(function () {
window.rcm('setup', {
top100Counter: window.top100Counter,
rcmId: "RCM-E980",
'xuid': window.g_gazeta.getCookie('uid'),
});

rcm('hubpageview', {
'hubId': '/'
});


});