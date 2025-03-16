if($('.adfloat').length) {
	var scradd = $(".adfloat").eq(0).offset().top;
	$(window).scroll(function(){
		if ($(window).scrollTop() > scradd){
			$('.adfloat').addClass('posfixadd');
		} else {
			$('.adfloat').removeClass('posfixadd');   
		}
	});
}