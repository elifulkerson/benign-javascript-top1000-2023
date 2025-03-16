var JQ_IS_NEWS_SECTION = 0 
		function trackAndRedirect( srcUrl, trackUrl ) {
			$.ajax({
				url:trackUrl,
				type:"GET",
				cache:true,
				dataType:"jsonp",
				crossDomain:true,
				timeout:3000,
				success:function(x,t,m){
					window.location=srcUrl;
				},
				error: function (xhr, ajaxOptions, thrownError) {
					window.location=srcUrl;
				}
			});
		}