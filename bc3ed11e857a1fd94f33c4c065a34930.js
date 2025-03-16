var widget = new MailWidget({
container: document.querySelector('#login-frame-wraper'),
host: 'https://mail.ukr.net',
skin: navigator.userAgent.indexOf('MSIE 9.') === -1 ? 'desktop' : 'light',
lang: 'uk',
iframeName: 'mail widget',
onLogin: function (email) {
$.ajax({
url: 'https://mail.ukr.net/settings/bookmark/check_is_enabled?email=' + email,
dataType: "jsonp",
'success': function(resp) {
if (resp.enabled) {
$('#bookmarks-wraper').show();
userLoginData = {status:'1'};
User.render_logoned();
} else {
$('#bookmarks-wraper').hide();
$('#login-frame-wraper').addClass('no-user-bookmarks');
User.onlogouted();
}
}
})
},onLogout: function () {
$('#login-frame-wraper').removeClass('no-user-bookmarks');
$('#bookmarks-wraper').hide();
User.onlogouted();
},onReady: function () {
__advShowDeferred.resolve();
},onStats: function (payload) {
//gtag('event', 'mail_enter', {'event_category': payload.name});
window.dataLayer.push({'event':payload.name})
}
});setTimeout(function () {
__advShowDeferred.resolve();
}, 5000);