jQuery(document).ready(function($) {			
		var width,html = "",label = ""; 
		var pollData;
		$.getJSON("/mobile/json/index_poll.json", function(jsonresult){
			pollData = jQuery.parseJSON(JSON.stringify(jsonresult)); 
	//console.log(pollData);
			var pollId = pollData.id;
			var pollans;
			var temp = $.cookie('polls');
			var answered_polls = [];
			var total = parseInt(pollData.total);
			if (temp)
			{
				answered_polls = temp.split(',');  
			}
			//console.log(answered_polls);   
			if(jQuery.inArray(pollId, answered_polls) != -1) {
				// console.log("is in array");
				 showResults(pollData, pollans, total);
			} else {
					get_poll(pollData);
			} 				
			$(".sub").on("click",function(){
				var selectedID = $(".options input[type=radio]:checked");
				pollans = selectedID.val();
				if(pollans == '')
				{
					alert('Choose your answer');
					return;
				}
				// Post data to server
				$.ajax({
					type: "GET", 
					url: "/updatepoll", 
					data : "nid="+pollId+"&chid="+pollans,				
					success: function(response){
							console.log("vote counted.");
					}
				});
				answered_polls.push(pollId);
				$.cookie("polls", answered_polls.join(","));					
				total = parseInt(pollData.total) + 1; 		
				showResults(pollData, pollans, total);
			});			
		}); 		
		function get_poll(pollData)
		{
			var ans = "";
			$.each(pollData.answers, function(i,val) {
			ans += '<div id = "option" ><input class="rad" type="radio" name="poll_options" id="'+i+'" value="'+val.id+'"/><label for="'+i+'">'+val.chtext+'</label></div>';
			});
			$("#sidebar_poll .poll").fadeIn("slow").html('<div class="question">'+pollData.question+'</div>').append('<div class="options">'+ans+'</div>');
		}		
		function showResults(pollData, pollans, total)
		{
			var html = "<div class='result' style='display:none'>";
			html += '<div class="question">'+pollData.question+'</div>'
			var acount = '';
			if(pollData.success == 1)
			{
				$.each(pollData.opt, function(aid,label) {					
					if (aid == pollans)
						acount = parseInt(pollData.detail[aid]) + 1;
					else
						acount = pollData.detail[aid];
					if(total != 0)
						width = Math.round((parseInt(acount)/parseInt(total)) * 100); 
					else
						width = 0;					
					// html += '<div class="bar-holder">'+label+' ('+acount+' votes)<div class="perc"></div><div class="bc"><div class="bar" style="width:'+width+'%">'+width+'% &nbsp;</div></div></div>';
                                       html += '<div class="bar-holder">'+label+'<div class="perc"></div><div class="bc"><div class="bar" style="width:'+width+'%">'+width+'% &nbsp;</div></div></div>';
				});
				html += '</div>';
				// html += '<p><span class="total">Total votes : <b>'+total+'</b></span>';
				$("#sidebar_poll .poll_container .poll").html(html);
				$("#sidebar_poll .poll_container .result").slideDown("slow");
				$("#sidebar_poll. poll_container .sub").hide();				
			}
		}
	});