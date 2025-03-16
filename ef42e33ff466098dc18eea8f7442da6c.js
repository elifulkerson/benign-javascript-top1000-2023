$("#webzine_20180528 .corner.btn_tab .btn.tab").on("mouseover", function() {
		showBottomCornerTab( $(this) );
	});	

	function showBottomCornerTab(tarObj){
		var btn = $("#webzine_20180528 .btn_tab .btn");
		var wrap = $("#webzine_20180528 .corner_wrap");
		var cornerIdx = false;

		btn.removeClass('active');
		if (typeof tarObj == "object") {
			cornerIdx = tarObj.index();
			tarObj.addClass('active');	
		}else{
			//cornerIdx = Math.floor(Math.random()*5);
            cornerIdx = 0;
			btn.eq(cornerIdx).addClass('active');	
		}
		cornerIdx++;
		wrap.removeClass('active');
		wrap.filter('[data-corner="'+ cornerIdx +'"]').addClass('active');	
	}

	showBottomCornerTab();