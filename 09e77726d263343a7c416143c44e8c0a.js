userIdentify.then(function() {
if(!isNonSubcribedUser()) {
	document.querySelector(".btn-title").innerText ="Make most of your subscription";
}});