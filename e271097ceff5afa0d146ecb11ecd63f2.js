$(document).ready(function() {
		let timer;
		reloading = () => {
												timer = setTimeout(function(){
						location.reload();	
					}, 120000);			
										
		}
		reloading();
		$(window).on('scroll', function() {
			clearTimeout(timer);
			reloading();
		});
		
	});