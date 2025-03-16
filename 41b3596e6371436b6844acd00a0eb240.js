window.onLoadRecaptchaV3Callback = function() {
grecaptcha.ready(function() {
grecaptcha.execute('6LfzopcUAAAAAPh4ue2iRjzP6XdxDVpwJigtlmeD', {action: 'index'}).then(function(token) {
var target = $('[data-component*="emk/subscription-entry-point"]');
target.append("<input type=hidden name=recaptcha_token value=" + token +" data-ajax-submit>");
target.closest('form').submit(function() {
$('.grecaptcha-badge').show().css('visibility', 'visible');
});
});
});
};