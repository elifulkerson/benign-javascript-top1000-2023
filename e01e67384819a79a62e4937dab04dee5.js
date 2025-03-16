var dataLayer = window.dataLayer || [];
tp = window["tp"] || [];
tp.push(["init", function () {
if (tp.user.isUserValid()) {
dataLayer.push({
'data' : {
'email': tp.pianoId.getUser().email,
'uid': tp.pianoId.getUser().uid,
'platform': thgpiplatform()
} });
}
}]);