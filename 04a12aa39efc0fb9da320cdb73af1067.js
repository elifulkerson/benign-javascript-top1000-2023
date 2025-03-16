function getActionIsDefined() {
const consentCookieIndex = document.cookie.indexOf("CookieScriptConsent=");
let consentCookie = null;
let actionDefined = false;
if (consentCookieIndex !== -1) {
const startIndex = consentCookieIndex + "CookieScriptConsent=".length;
let endIndex = document.cookie.indexOf(";", startIndex);
if (endIndex === -1) {
endIndex = document.cookie.length;
}
consentCookie = document.cookie.substring(startIndex, endIndex);
const cookieData = JSON.parse(decodeURIComponent(consentCookie));
if (cookieData.hasOwnProperty("action")) {
actionDefined = true;
}
}
return actionDefined;
}
function showSocialLogin() {
let actionDefined = getActionIsDefined();
if (!(document.cookie.indexOf('userID=') !== -1) && actionDefined === true) {
window.onload = function () {
google.accounts.id.initialize({
client_id: "699621046070-qajra0rrsahiqmumvkg7fagujfd78tm8.apps.googleusercontent.com",
callback: handleTokenSocialLogin
});
google.accounts.id.renderButton(
document.getElementById("googleButtonDiv"),
{
theme: "outline",
size: "large",
type: "standard",
text: "sign_in_with",
shape: "rectangular",
width: 300
}
);
google.accounts.id.prompt();
}
}
}
showSocialLogin();
['CookieScriptAcceptAll','CookieScriptReject'].forEach( function(evt) {
window.addEventListener(evt, function() {
google.accounts.id.initialize({
client_id: "699621046070-qajra0rrsahiqmumvkg7fagujfd78tm8.apps.googleusercontent.com",
callback: handleTokenSocialLogin
});
google.accounts.id.renderButton(
document.getElementById("googleButtonDiv"),
{
theme: "outline",
size: "large",
type: "standard",
text: "sign_in_with",
shape: "rectangular",
width: 300
}
);
google.accounts.id.prompt(); });
});