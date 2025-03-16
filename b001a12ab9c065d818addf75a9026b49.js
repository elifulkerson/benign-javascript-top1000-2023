var hidden, visibilityChange, activeFlag;
activeFlag = true;
if (typeof document.hidden !== "undefined") {
// Opera 12.10 and Firefox 18 and later support
hidden = "hidden";
visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
hidden = "msHidden";
visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
hidden = "webkitHidden";
visibilityChange = "webkitvisibilitychange";
}
function handleVisibilityChange() {
if (document[hidden]) {
} else {
if (activeFlag) {
window.addEventListener("googletagloaded", (evt) => {
googletag.cmd.push(function () {
googletag.display("1x1_over");
});
activeFlag = false;
});
}
}
}
if (
typeof document.addEventListener === "undefined" ||
typeof document[hidden] === "undefined"
) {
window.addEventListener("googletagloaded", (evt) => {
googletag.cmd.push(function () {
googletag.display("1x1_over");
});
});
} else {
if (document[hidden] == true) {
document.addEventListener(visibilityChange, handleVisibilityChange, false);
} else {
window.addEventListener("googletagloaded", (evt) => {
googletag.cmd.push(function () {
googletag.display("1x1_over");
});
});
}
}