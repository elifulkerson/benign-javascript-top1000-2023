(function(window, $, undefined) {
'use strict';

let ad = [];
if (ad.length && $('#ad-bar-block').length) {
$('#ad-bar-block').addClass('ad-block_banner_smallest').append(AdBaha.output(ad, 14));
}
})(window, jQuery);