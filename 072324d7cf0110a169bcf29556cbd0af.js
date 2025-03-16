
var ad_qglp_switch = {
	
	qiangguo:{
		qg_2014 : false,
		qg_2015 : false,
		qg_2016 : false,
		qg_2017 : false,
		qg_2018 : false,
		qg_2019 : false,
		qg_2020 : false,
		qg_2021 : false,
		qg_2022 : false,
		qg_2023 : false,
		qg_2024 : false,
		qg_2025 : false,
		qg_2026 : false,
		qg_2027 : false,
		qg_2028 : false,
		qg_2029 : false,
		qg_2030 : false,
		qg_2031 : false,
		qg_2032 : false,
		qg_2033 : false
	},
	
	
	lingpao:{
		lg_2034 : false,
		lg_2035 : false,
		lg_2036 : false,
		lg_2037 : false,
		lg_2038 : false,
		lg_2039 : false,
		lg_2040 : false,
		lg_2041 : false,
		lg_2042 : false,
		lg_2043 : false,
		lg_2044 : false,
		lg_2045 : false,
		lg_2046 : false,
		lg_2047 : false,
		lg_2048 : false,
		lg_2049 : false,
		lg_2050 : false,
		lg_2051 : false,
		lg_2052 : false,
		lg_2053 : false
	}
	
};
var pinpai = [];
var lingpao=[];
for(var i=2014;i<2033;i++){
	if(eval("ad_qglp_switch.qiangguo.qg_"+i)){
		pinpai.push(i)
	}
};
for(var i=2034;i<2053;i++){
	if(eval("ad_qglp_switch.lingpao.lg_"+i)){
		lingpao.push(i)
	}
};
if(pinpai.length>0){
	var newpinpai = pinpai.toString();
	CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c='+newpinpai+'&op=7','cntvPczh_2014',function(data){
		data.clickUrl = decodeURI(data.clickUrl);
		//$("#cntvPczh_1890").attr('href',data.clickUrl);
			$(".cntvPczh_2014").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
			//$(".cntvPczh_2014 a").attr('href',data.clickUrl);
			//$(".cntvPczh_2014 img").attr('src',data.smallImg);
			//$(".cntvPczh_2014 img").attr('data-echo',data.smallImg);
			if(data.ad_text=='true'){
				$(".cntvPczh_2014 a em").show();
			}else{
				$(".cntvPczh_2014 a em").hide();
			}
		
		if(data.eventExposure!=''){
			$("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
		}
	})
	picListFun($(".picList .left"));
}else{
	picListFun($(".picList .left"));
};
if(lingpao.length>0){
	var newlingpao = lingpao.toString();
	//console.log(newlingpao)
	CCTV_2020ad_1116._ajax('//galaxy.bjcathay.com/s?z=cathay&c='+newlingpao+'&op=7','cntvPczh_2034',function(data){
		data.clickUrl = decodeURI(data.clickUrl);
		//$("#cntvPczh_1890").attr('href',data.clickUrl);
			$(".cntvPczh_2034").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
			if(data.ad_text=='true'){
				$(".cntvPczh_2034 a em").show();
			}else{
				$(".cntvPczh_2034 a em").hide();
			}
			
		if(data.eventExposure!=''){
			$("body").append('<iframe frameborder="0" width="0" height="0" scrolling="no" src="'+data.eventExposure+'" style="display:none;"></iframe>')
		}
	})
	picListFun($(".picList .right"));
}else{
	picListFun($(".picList .right"));
}


/*function cntvPczh_2014(data){
	$(".cntvPczh_2014 a").attr('href',data.clickUrl);
	$(".cntvPczh_2014 img").attr('src',data.smallImg);
	if(data.ad_text=='true'){
		$(".cntvPczh_2014 a em").show();
	}else{
		$(".cntvPczh_2014 a em").hide();
	}
}*/
function cntvPczh_2015(data){
	$(".cntvPczh_2015").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2015 a em").show();
	}else{
		$(".cntvPczh_2015 a em").hide();
	}
}
function cntvPczh_2016(data){
	$(".cntvPczh_2016").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2016 a em").show();
	}else{
		$(".cntvPczh_2016 a em").hide();
	}
}
function cntvPczh_2017(data){
	$(".cntvPczh_2017").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2017 a em").show();
	}else{
		$(".cntvPczh_2017 a em").hide();
	}
}
function cntvPczh_2018(data){
	$(".cntvPczh_2018").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2018 a em").show();
	}else{
		$(".cntvPczh_2018 a em").hide();
	}
}
function cntvPczh_2019(data){
	$(".cntvPczh_2019").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2019 a em").show();
	}else{
		$(".cntvPczh_2019 a em").hide();
	}
}
function cntvPczh_2020(data){
	$(".cntvPczh_2020").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2020 a em").show();
	}else{
		$(".cntvPczh_2020 a em").hide();
	}
}
function cntvPczh_2021(data){
	$(".cntvPczh_2021").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2021 a em").show();
	}else{
		$(".cntvPczh_2021 a em").hide();
	}
}
function cntvPczh_2022(data){
	$(".cntvPczh_2022").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2022 a em").show();
	}else{
		$(".cntvPczh_2022 a em").hide();
	}
}
function cntvPczh_2023(data){
	$(".cntvPczh_2023").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2023 a em").show();
	}else{
		$(".cntvPczh_2023 a em").hide();
	}
}
function cntvPczh_2024(data){
	$(".cntvPczh_2024").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2024 a em").show();
	}else{
		$(".cntvPczh_2024 a em").hide();
	}
}
function cntvPczh_2025(data){
	$(".cntvPczh_2025").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2025 a em").show();
	}else{
		$(".cntvPczh_2025 a em").hide();
	}
}
function cntvPczh_2026(data){
	$(".cntvPczh_2026").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2026 a em").show();
	}else{
		$(".cntvPczh_2026 a em").hide();
	}
}
function cntvPczh_2027(data){
	$(".cntvPczh_2027").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2027 a em").show();
	}else{
		$(".cntvPczh_2027 a em").hide();
	}
}
function cntvPczh_2028(data){
	$(".cntvPczh_2028").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2028 a em").show();
	}else{
		$(".cntvPczh_2028 a em").hide();
	}
}
function cntvPczh_2029(data){
	$(".cntvPczh_2029").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2029 a em").show();
	}else{
		$(".cntvPczh_2029 a em").hide();
	}
}
function cntvPczh_2030(data){
	$(".cntvPczh_2030").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2030 a em").show();
	}else{
		$(".cntvPczh_2030 a em").hide();
	}
}
function cntvPczh_2031(data){
	$(".cntvPczh_2031").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2031 a em").show();
	}else{
		$(".cntvPczh_2031 a em").hide();
	}
}
function cntvPczh_2032(data){
	$(".cntvPczh_2032").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2032 a em").show();
	}else{
		$(".cntvPczh_2032 a em").hide();
	}
}
function cntvPczh_2033(data){
	$(".cntvPczh_2033").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>强国</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2033 a em").show();
	}else{
		$(".cntvPczh_2033 a em").hide();
	}
}
function cntvPczh_2035(data){
	$(".cntvPczh_2035").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2035 a em").show();
	}else{
		$(".cntvPczh_2035 a em").hide();
	}
}
function cntvPczh_2036(data){
	$(".cntvPczh_2036").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2036 a em").show();
	}else{
		$(".cntvPczh_2036 a em").hide();
	}
}
function cntvPczh_2037(data){
	$(".cntvPczh_2037").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2037 a em").show();
	}else{
		$(".cntvPczh_2037 a em").hide();
	}
}
function cntvPczh_2038(data){
	$(".cntvPczh_2038").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2038 a em").show();
	}else{
		$(".cntvPczh_2038 a em").hide();
	}
}
function cntvPczh_2039(data){
	$(".cntvPczh_2039").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2039 a em").show();
	}else{
		$(".cntvPczh_2039 a em").hide();
	}
}
function cntvPczh_2040(data){
	$(".cntvPczh_2040").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2040 a em").show();
	}else{
		$(".cntvPczh_2040 a em").hide();
	}
}
function cntvPczh_2041(data){
	$(".cntvPczh_2041").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2041 a em").show();
	}else{
		$(".cntvPczh_2041 a em").hide();
	}
}
function cntvPczh_2042(data){
	$(".cntvPczh_2042").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2042 a em").show();
	}else{
		$(".cntvPczh_2042 a em").hide();
	}
}
function cntvPczh_2043(data){
	$(".cntvPczh_2043").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2043 a em").show();
	}else{
		$(".cntvPczh_2043 a em").hide();
	}
}
function cntvPczh_2044(data){
	$(".cntvPczh_2044").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2044 a em").show();
	}else{
		$(".cntvPczh_2044 a em").hide();
	}
}
function cntvPczh_2045(data){
	$(".cntvPczh_2045").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2045 a em").show();
	}else{
		$(".cntvPczh_2045 a em").hide();
	}
}
function cntvPczh_2046(data){
	$(".cntvPczh_2046").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2046 a em").show();
	}else{
		$(".cntvPczh_2046 a em").hide();
	}
}
function cntvPczh_2047(data){
	$(".cntvPczh_2047").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2047 a em").show();
	}else{
		$(".cntvPczh_2047 a em").hide();
	}
}
function cntvPczh_2048(data){
	$(".cntvPczh_2048").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2048 a em").show();
	}else{
		$(".cntvPczh_2048 a em").hide();
	}
}
function cntvPczh_2049(data){
	$(".cntvPczh_2049").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	if(data.ad_text=='true'){
		$(".cntvPczh_2049 a em").show();
	}else{
		$(".cntvPczh_2049 a em").hide();
	}
}
function cntvPczh_2050(data){
	$(".cntvPczh_2050").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	
	if(data.ad_text=='true'){
		$(".cntvPczh_2050 a em").show();
	}else{
		$(".cntvPczh_2050 a em").hide();
	}
}
function cntvPczh_2051(data){
	$(".cntvPczh_2051").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	
	if(data.ad_text=='true'){
		$(".cntvPczh_2051 a em").show();
	}else{
		$(".cntvPczh_2051 a em").hide();
	}
}
function cntvPczh_2052(data){
	$(".cntvPczh_2052").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	
	if(data.ad_text=='true'){
		$(".cntvPczh_2052 a em").show();
	}else{
		$(".cntvPczh_2052 a em").hide();
	}
}
function cntvPczh_2053(data){
	$(".cntvPczh_2053").html('<div class="image"><a href="'+data.clickUrl+'" target="_blank"><img src="'+data.smallImg+'" class="lazy" data-echo="'+data.smallImg+'" alt="广告"><em class="show">广告</em><i>领跑</i></a></div><div class="clear"></div>');
	
	if(data.ad_text=='true'){
		$(".cntvPczh_2053 a em").show();
	}else{
		$(".cntvPczh_2053 a em").hide();
	}
}




