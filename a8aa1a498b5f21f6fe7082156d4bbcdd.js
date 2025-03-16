var g_Gazeta_AdFree = Promise.race([
new Promise(function(resolve,reject) {
window.primeHelper = window.primeHelper || [];
window.primeHelper.push(function() {
primeHelper.getSubscription(
{referrer: document.location.origin},
function (error,hasSubscription) {
if (hasSubscription) {
resolve(true);
} else {
resolve(false);
}
}
)
});
}),
new Promise(function(resolve,reject) {
//setTimeout(resolve, 1000, false);
setTimeout(function(){
resolve(true);
}, 2000, false);
})
]);
// promise will here
// now fake
var g_Gazeta_noVideo = new Promise(function(resolve,reject){
resolve(false);
})