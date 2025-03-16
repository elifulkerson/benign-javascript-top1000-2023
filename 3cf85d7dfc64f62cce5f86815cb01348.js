require(['jquery'], function($) {fetch(`https://www.thehindu.com/getapplink?ref=${encodeURIComponent("https://www.thehindu.com/")}`).then((response) => {
				if(response.ok) {
					return response.json();
				} 
			}).then((res) => {
				if(typeof res.shortLink != 'undefined'){
					$(".read-in-app a").attr("href", res.shortLink)
					$(".read-in-app a > span").show();
				}			
			});
	});
	function addnewclass(){
		require(['jquery'], function($) {	
			setTimeout(function(){
				$(".read-in-app").addClass("nohover")
			}, 1000);
			
		});
	}