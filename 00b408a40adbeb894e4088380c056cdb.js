$.ajax({
			type: "GET",			
			url: "https://www.inquirer.net/61405/IP2Location/ipnewsletter.php",
			success: function(data) {
				 		
				jQuery(".country_get input").val(data);
			
				console.log(data);
					console.log('country located');
													}
												 });