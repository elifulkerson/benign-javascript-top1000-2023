var access=0;
	$(document).ready(function(){
	  $(window).scroll(function() {
      if (($(window).scrollTop() >= ($(document).height() - $(window).height())*0.05)){ // jika  height page 10% maka di baca
				if(access==0){
				// ajax call get data from server and append to the div
				$(".ads-bott").css("display", "block")
				access=1;  // agar tidak di looping berulang2
				}
		  }else{
				$(".ads-bott").css("display", "none");
				access=0;
		  }
		});
	});