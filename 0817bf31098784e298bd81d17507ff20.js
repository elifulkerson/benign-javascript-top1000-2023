//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
	$(".open-modal").on("click", function() {
		$(".popup-overlay, .popup-content, .brand_wrapper, .brand_item").addClass("active");
	});

	//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
	$(".close-modal, .popup-overlay").on("click", function() {
		$(".popup-overlay, .popup-content, .brand_wrapper, .brand_item").removeClass("active");
	});