if(document.getElementById("live_match_info_box_wrap"))
{
	loadScript("https://embed.urdupoint.com/rss/json/sports_match_data_json.json",function(){
		
		document.getElementById("live_match_info_box_wrap").innerHTML = '<div class="urdu main_univ_score_box ac rtl mb8 mt8">'+sports_match_data_json+'</div>';
		
	});		
}