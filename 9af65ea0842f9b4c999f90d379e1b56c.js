var allobjs = document.querySelectorAll("object");
for (var i = 0, l = allobjs.length; i < l; i++) {
allobjs[i].style.visibility="hidden";
allobjs[i].style.visibility="visible";
}

buttonToMobile();

/****右邊固定****/
(function (window, $, undefined) {
var fBoxPosX = 0;
var fBoxPosY = 0;
var rightBox = $('#flyRightBox');
var fuliAdBox = $('#fuli-ad');

var ad = {
fixedFuliBoxTop: function () {
var scrollbarTop = $(window).scrollTop();
var scrollbarLeft = $(window).scrollLeft();
var contxClientWidth = $(window).width();
var contxClientHeight = $(window).height();
var fBoxHeight = rightBox.height() + fuliAdBox.height();

var fBoxRemnants = fuliAdBox.height() - rightBox.height();

if (scrollbarTop > ($('.BA-center').offset().top - fBoxRemnants) && fBoxRemnants <= 0) {
rightBox.css('position', 'fixed');
rightBox.css('top', fBoxRemnants + 15 + 'px');

if (scrollbarLeft !== 0) {
rightBox.css('left', fBoxPosX - scrollbarLeft + 'px');
} else {
rightBox.css('left', fBoxPosX + 'px');
}
} else if (scrollbarTop > fBoxPosY && fBoxRemnants > 0) {
rightBox.css('position', 'fixed');
rightBox.css('top', 0);

if (scrollbarLeft !== 0) {
rightBox.css('left', fBoxPosX - scrollbarLeft + 'px');
} else {
rightBox.css('left', fBoxPosX + 'px');
}
} else {
rightBox.css('position', '');
}
},

boxResize: function () {
rightBox.css('position', '');
fBoxPosX = rightBox.offset().left;
ad.fixedFuliBoxTop();
}
};

if ($('#BA-center-id').height() > rightBox.height()) {
fBoxPosX = rightBox.offset().left;
fBoxPosY = rightBox.offset().top;

$(window).on('scroll', ad.fixedFuliBoxTop);
$(window).on('resize', ad.boxResize);
}

ad.fixedFuliBoxTop();
}) (window, jQuery);
/****右邊固定****/

jQuery(".a-mercy-d").click(function() {
var url = this.href;
var goRedirect = false;
var openNew = (this.target) ? true : false;

if( url ) {
jQuery.get( "/ajax/baha_lkasoo.php", { id: jQuery(this).data('ssn') } )
.done(function() {
goRedirect = true;
if (!openNew) {
document.location = url;
}
});

setTimeout(function() {
if (!goRedirect) {
if (!openNew) {
document.location = url;
}
}
}, 1500);
}

if( !openNew ){
return false;
}
});

var mercyadblock = (function () {
var adblock = {};

adblock.show = function () {
jQuery('.adb-close').parent().show();
};

adblock.hide = function () {
jQuery('.adb-close').parent().hide();
};

adblock.check = function () {
if (localStorage.getItem('admercyblocks') === null) {
jQuery('.adb-close').parent().show();
} else {
var hourts = Math.floor(Date.now() / 1000)-86400;
if (localStorage.getItem('admercyblocks') < hourts) {
jQuery('.adb-close').parent().show();
localStorage.removeItem('admercyblocks');
}
}
};

return adblock;
} ());