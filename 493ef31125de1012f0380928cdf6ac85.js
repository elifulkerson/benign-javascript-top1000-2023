(function(window, $, undefined){
var changeRank = {
gshopbillBoard: function(tabs, _this) {
$(_this).closest("ul").find('.is-now').removeClass('is-now');
$(_this).addClass('is-now');

$(_this).closest("ul").children().last().stop().animate({
left: $(_this).position().left,
width: $(_this).outerWidth(),
opacity: 1
}, 200);

$('.ranking-list-timeupdate').hide();
$('.ranking-list-timeupdate:eq('+tabs+')').show();
$('.rank-ranking-list-area').hide();
$('.rank-ranking-list-area:eq('+tabs+')').show();
}
};

window.GshopBoard = changeRank;
})(window, jQuery);