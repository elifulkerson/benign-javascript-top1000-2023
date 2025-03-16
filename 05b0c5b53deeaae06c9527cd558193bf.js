var mercyoldbrowser = (function () {
var oldbrowser = {};

oldbrowser.show = function () {
jQuery('.oldbrowser-close').parent().show();
};

oldbrowser.hide = function () {
jQuery('.oldbrowser-close').parent().hide();
};

oldbrowser.check = function () {
if (localStorage.getItem('oldbrowsermercy') === null) {
jQuery('.oldbrowser-close').parent().show();
} else {
var hourts = Math.floor(Date.now() / 1000)-86400;
if (localStorage.getItem('oldbrowsermercy') < hourts) {
jQuery('.oldbrowser-close').parent().show();
localStorage.removeItem('oldbrowsermercy');
}
}
};

return oldbrowser;
} ());

jQuery(".oldbrowser-close").click(function () {
mercyoldbrowser.hide();

if (typeof(Storage) !== "undefined") {
localStorage.setItem('oldbrowsermercy', Math.floor(Date.now() / 1000));
}
});

var isIEFlag=window.ActiveXObject || "ActiveXObject" in window;
jQuery(function () {
if (isIEFlag) {
if (typeof(Storage) === "undefined") {
mercyoldbrowser.show();
} else {
mercyoldbrowser.check();
}
}
});