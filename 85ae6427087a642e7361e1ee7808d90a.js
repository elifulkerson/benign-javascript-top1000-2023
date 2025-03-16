$(function () {
		showWxLoginIndex('https://res.doc88.com');
		if (window.PIE) {
			$('.rounded').each(function () {
				PIE.attach(this);
			});
		}
		Captcha.init('nocaptcha_login');

		if ("") {
			//none
			$('.user_login').html('');
			//get_login_done();
			function getMessageState() {
				$.ajax({
					url: '/uc/index.php?act=message_read_state',
					type: "get",
					dataType: "html",
					success: function(msg) {
						if (msg != '00') {
							$("#new_msg").html('<span class="red"></span>');
						} else {
							$("#new_msg").html("");
						}
					}
				});
			}
			getMessageState();
		}else{
			re_wxcode();
		}

	});

//获取banner

fetchBanner();
//用户头像

//猜你喜欢
indexLike();
//频道
channelShow();
//var current_type= $('#current_type_doc').children('.current').attr('value');
//免费下载的分类
fetchFreeDownloadCatalog();
//免费下载
getFreeDownload();
//广告位1
fetchAdsShow1();
//最新上传的分类
fetchLastUploadDoc();
//最新上传
getQualityDoc();
//最新模板
fetchNewModule();
//广告位2
fetchAdsShow2();
//广告位3
fetchAdsShow3();
//文档求助
getDocHelp();
//中标动态
getBiddingDynamics(site_url);
//文辑广场
getCorpusSquare();
//机构专区
getOrganizationZone();
//判断显示是否是vip 还是热门
//judgeVipDiscountDoc();
if(city==0){
	//不是北京 vip文档
	var html1 ='';
	html1 +='<a class="up-vip-min" href="/vip.html" target="_blank" onclick="indexAddLog(\'vip\',\'a\',\'0\',\'开通VIP\',27)">开通VIP</a>VIP折扣文档';
	$('#show_doc_type').html(html1);
	/*<a class="up-vip-min" href="https://res.doc88.com/vip.html" target="_blank">升级VIP</a>VIP折扣文档*/
	vipDiscountDoc();
}else{
	var html2 ='';
	html2 +='热门文档';
	$('#show_doc_type').html(html2);
	hotDocShow();
}
/*//vip折扣文档
vipDiscountDoc();
//热门文档
hotDocShow();*/
//推荐文辑
corpusRecommend();
//judgeVipDiscountDoc();
//认证用户
authenticationUser();
/*//机构分类图片
authenticationInstitutionImage();*/
//机构文档
authenticationInstitutionDoc();
//入驻文库的机构
joinStoreInstitution();
//入驻文库的机构的数量
/*joinStoreNumber();*/
/*setDocImg("https://png.doc88.com");*/

function search_submit(){
	//获取格式
	var form_id=$('.type-cho-con').children('label').find('b.check').children('input').attr('id');
//console.log(form_id);
//form_id.replace('t_','');
	var form=form_id.toLocaleUpperCase();
	form=form.replace('T_','');
	if(form=='ALL'){
		form='';
	}
//console.log(form);
	setCookie('cdb_search_format',form);
	/*var form_sign=getCookie('cdb_form');
	console.log(form_sign);*/
	keyword = document.getElementById("keyword").value;
	var regEx = /[\^\{\}\?\*\\]/g;
	keywordnew = keyword.replace(regEx, "");
	regEx = /[\[\]\(\)\/]/g;
	keywordnew = keywordnew.replace(regEx, " ");
	if(keyword != keywordnew){
		keyword = keywordnew;
		document.getElementById("keyword").value = keyword;
	}
	if(keyword == ""){
		document.getElementById("keyword").focus();
		return false;
	}
	var searchForm1 = document.getElementById('searchForm');
	searchForm1.action='/tag/'+encodeURIComponent(document.getElementById("keyword").value);
	return true;
}
function doc_for_help(){
	//获取格式
	var form_id=$('.type-cho-con').children('label').find('b.check').children('input').attr('id');
//console.log(form_id);
//form_id.replace('t_','');
	var form=form_id.toLocaleUpperCase();
	form=form.replace('T_','');
	if(form=='ALL'){
		form='';
	}
//console.log(form);
	setCookie('cdb_search_format',form);
	/*var form_sign=getCookie('cdb_form');
	 console.log(form_sign);*/
	keyword = document.getElementById("keyword").value;
	var regEx = /[\^\{\}\?\*\\]/g;
	keywordnew = keyword.replace(regEx, "");
	regEx = /[\[\]\(\)\/]/g;
	keywordnew = keywordnew.replace(regEx, " ");
	if(keyword != keywordnew){
		keyword = keywordnew;
		document.getElementById("keyword").value = keyword;
	}
	if(keyword == ""){
		document.getElementById("keyword").focus();
		return false;
	}
	var searchForm = document.getElementById('searchForm');
	window.location.href='/t-list-1-00000-1-'+encodeURIComponent(document.getElementById("keyword").value)+'.html';
}
function search_submit_float(){
	//alert(111);
	keyword = document.getElementById("keyword1").value;
	//alert(keyword);
	var regEx = /[\^\{\}\?\*\\]/g;
	keywordnew = keyword.replace(regEx, "");
	regEx = /[\[\]\(\)\/]/g;
	keywordnew = keywordnew.replace(regEx, " ");
	if(keyword != keywordnew){
		keyword = keywordnew;
		document.getElementById("keyword1").value = keyword;
	}
	if(keyword == ""){
		document.getElementById("keyword1").focus();
		return false;
	}
	//alert(222);
	var searchForm = document.getElementById('searchForm1');
	searchForm.action='/tag/'+encodeURIComponent(document.getElementById("keyword1").value);
	//window.location.href="http://www.baidu.com";
	return true;
}
function float_doc_for_help(){
	//alert(111);
	keyword = document.getElementById("keyword1").value;
	//alert(keyword);
	var regEx = /[\^\{\}\?\*\\]/g;
	keywordnew = keyword.replace(regEx, "");
	regEx = /[\[\]\(\)\/]/g;
	keywordnew = keywordnew.replace(regEx, " ");
	if(keyword != keywordnew){
		keyword = keywordnew;
		document.getElementById("keyword1").value = keyword;
	}
	if(keyword == ""){
		document.getElementById("keyword1").focus();
		return false;
	}
	//alert(222);
	var searchForm1 = document.getElementById('searchForm1');
	window.location.href='/t-list-1-00000-1-'+encodeURIComponent(document.getElementById("keyword1").value)+'.html';
	//window.location.href="http://www.baidu.com";
}