(function(window, $, undefined) {
'use strict';
var _ad = [["<a href=\"https:\/\/prj.gamer.com.tw\/27y\/market_list.php\" target=\"_blank\" class=\"a-mercy-d\" data-mercy=\"\" data-si=\"\" data-ssn=\"246040\"><img border=\"0\" src=\"https:\/\/p2.bahamut.com.tw\/S\/2KU\/43\/0a7353e94d28abfaf7340937b21niuv5.JPG\"><\/a>"]];
if (_ad.length) {
document.write('<div style="margin-bottom:10px">' + AdBaha.output(_ad, 5) + '</div>');
}

_ad = [];
if ($(_ad.fixed).length) {
$.each(_ad.fixed, function(k, val) {
if (val.length == 1) {
document.write('<div style="margin-bottom:10px">' + val + '</div>');
} else {
document.write('<div style="margin-bottom:10px">' + val[AdBaha.ck('S', k, val.length)] + '</div>');
}
});
}

if ($(_ad.unfixed).length) {
_ad.unfixed = AdBaha.Shuffle(_ad.unfixed);
$.each(_ad.unfixed, function(k, val) {
if (val.length == 1) {
document.write('<div style="margin-bottom:10px">' + val + '</div>');
} else {
document.write('<div style="margin-bottom:10px">' + val[AdBaha.ck('S', k, val.length)] + '</div>');
}
});
}
})(window, jQuery);