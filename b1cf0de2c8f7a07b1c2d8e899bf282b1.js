// 特别推荐
var mySwiperTbtj = new Swiper('.group_swiper_tbtj', {
	slidesPerView: 3,
	loop: true,
	autoplay : 3000,
	paginationClickable: true
})

$('.group_carousel_tbtj .arrow_left').on('click', function (e) {
	e.preventDefault()
	mySwiperTbtj.swipePrev()
})
$('.group_carousel_tbtj .arrow_right').on('click', function (e) {
	e.preventDefault()
	mySwiperTbtj.swipeNext()
})


/*** 当窗口变小 ***/

$(window).resize(function() {

if($('.tout h1').width()<$('.tout h1 a').width()){
littel_letter();
}

});

$(function(){
if($('.tout h1').width()<$('.tout h1 a').width()){
littel_letter();
}
});

function littel_letter(){

if($('.tout h1').width()<$('.tout h1 a').width()){
$('.tout h1').css("font-size",$('.tout h1').width()/($('.tout h1 a').text().length)-1);
littel_letter();
}

}