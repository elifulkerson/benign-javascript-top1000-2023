(function (window, $, undefined) {
'use strict';
var box = $('#fuli-ad .BA-rbox1');
var objAd = $('.fuli-item-a');
var obj1 = $('.fuli-item-priority-1');
var obj2 = $('.fuli-item-priority-2');
box.find('.fuli-item-a').remove();
box.find('.fuli-item-b').remove();

var objAdList = [[], [], []];
var objAdListIndex = 0;
var tmpStartTime = '';
var tmpPriority = 10;
objAd.each(function () {
let tmpObj = $(this);
if ((tmpStartTime != tmpObj.data('start_time') && tmpStartTime.length != 0) || tmpPriority != tmpObj.data('priority')) {
objAdListIndex++;
}

objAdList[objAdListIndex].push(tmpObj);
tmpStartTime = tmpObj.data('start_time');
tmpPriority = tmpObj.data('priority');
});

shuffle(objAdList[0]);
shuffle(objAdList[1]);
shuffle(objAdList[2]);

$.each(objAdList[0], function (k, v) {
box.append(v);
});

$.each(objAdList[1], function (k, v) {
box.append(v);
});

$.each(objAdList[2], function (k, v) {
box.append(v);
});

shuffle(obj1);
shuffle(obj2);

var maxShow = 5;
if (new Date() >= new Date('2021/10/22 12:00:00') && new Date() <= new Date('2021/10/28 23:59:59')) {
maxShow = 7;
}

obj1.each(function () {
if (box.find('a').length >= maxShow) {
return false;
}

box.append($(this));
});

obj2.each(function () {
if (box.find('a').length >= maxShow) {
return false;
}

box.append($(this));
});

$('.fuli-item-b').show();

function shuffle(array) {
for (var i = array.length - 1; i > 0 ; i--) {
var j = Math.floor(Math.random() * (i+1));
[array[i], array[j]] = [array[j], array[i]];
}
}
})(window, jQuery);