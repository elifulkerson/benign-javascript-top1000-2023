$(document).ready(function(){
												  
	if (window.location.href.indexOf("hindi") > -1) {
       $jsonFilePath = '../hindi/';
    } else { 
	   $jsonFilePath = 'sbijava';
	}

	$('#myCarousel').carousel({
	  interval: 10000,
	  cycle: true
	});
	
	//RINB Video
	$(".rinb_video").click(function(){
		$("#inb-list").toggle("slow");
	});
	
	//Scroll Message
	setTimeout(function(){
		$.getJSON($jsonFilePath+'/js/scroll_data.json',function(v){
			if( v.scroll_message.scroll_value =='' || v.scroll_message.flag === 'false') {
				$('#message p').hide();
			} 
			else {
				$('#message p').html(v.scroll_message.scroll_description);	
			}
		});
	},300);
	
	//Dynamic Banner - Json
	$.getJSON($jsonFilePath+'/js/banner_data.json',function(data){ 
		$.each(data.items, function (i, f) { 
			if( f.display =='true') {
				var active_class = "";
				if(i==0){
					active_class = "active";
				}
				var add_content = '<div class="item '+active_class+'"><div class="fill">';
				var add_indicator = '<li data-target="#myCarousel" data-slide-to="'+i+'" class="'+active_class+'"></li>';
				if(f.html_content){
					add_content += f.html_content;
				}else{
					if(f.a_href_link){
						add_content += "<a href='"+f.a_href_link+"' class='banner_link' target='_blank'><img title='"+f.img_title+"' alt='"+f.img_alt+"' src='"+$jsonFilePath+"/images/" + f.banner_img + "' / ></a>";
					}else{
						add_content += "<img title='"+f.img_title+"' alt='"+f.img_alt+"' src='"+$jsonFilePath+"/images/" + f.banner_img + "' / >";
					}
				}	
				add_indicator += '</li>';
				add_content += '</div></div>';
				$(".carousel-indicators").append(add_indicator);
				$(".carousel-inner").append(add_content);
			}
			i++;
		});
	});
	//Dynamic Banner - Json - Ends
	
	//Anchor Tag
	$('A[rel="_blank"]').each(function(){
        $(this).attr('target', '_blank');
    });
	
	//Custom Select
	$(".custom-select").each(function(){
		$(this).wrap("<span class='select-wrapper'></span>");
		$(this).after("<span class='holder'></span>");
	});
	
	$(".custom-select").change(function(){
		var selectedOption = $(this).find(":selected").text();
		$(this).next(".holder").text(selectedOption);
	}).trigger('change');
	
	// Accordian - Netbanking branches
	/* $('.useful_link a').click(function(){
		if($('#netbanking_popup').is(':hidden')) {
			$('#netbanking_popup').slideDown(400);
			$('#header').animate({'marginTop':'0px'});
			$(this).addClass('netbanking_button_up');
		}else{
			$('#netbanking_popup').slideUp(400);
			$('#header').animate({'marginTop':'0px'});
			$(this).removeClass('netbanking_button_up');
		}
	});
	
	$('.useful_link_mob a').click(function(){
		$('#netbanking_popup_mob').css('height','100%');
	});
	$('.closebtn').click(function(){
		$('#netbanking_popup_mob').css('height','0%');
	}); */
		
});

//Corporate Dropdown
function goToNewPage(){
	var corporateValue = document.getElementById('target').value;
	if(corporateValue == "Select")
	{
		alert("Please Select Corporate Type");
	}
	else
	{
		if(document.getElementById('target').value){
			window.location.href = document.getElementById('target').value;
		}
	}
}

//New User Click
function fnNewUserClick(){
      /* var retVal = confirm("If you have already obtained Pre-Printed Kit  from the branch for activating INB facility , please don't proceed  with this link. You can input userid and password given in PPK on normal login screen.");
      if( retVal == true ){ 
            window.open('https://retail.onlinesbi.sbi/retail/userdrivenregdetailswin.htm','aboutus','width=920, height=500 ,status=1, scrollbars=1, location=0');
      } */
	  
	  window.open('https://retail.onlinesbi.sbi/retail/newuserreg.htm','aboutus','width=920, height=500 ,status=1, scrollbars=1, location=0');
	  
}

//Salary Account
function salaryClick(){
	var salVal = confirm("Salary Account  link is meant for opening salary account of such employee(s), whose employer have tie up with SBI under Corporate Salary Package. If your employer does not have such tie-up, please go to Regular Savings Account link.");
	if( salVal == true ){ 
		window.open('https://www.sbiyono.sbi/wps/portal/accountopening/digital-account#!/aoCustomerOpenOVD');
	}
}
