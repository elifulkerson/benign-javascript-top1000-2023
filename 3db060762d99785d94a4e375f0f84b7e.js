;(function(){	
	function getCookie(val){
		var value = document.cookie.match(new RegExp('(?:^|;)\\s*'+val+'=([^;]*)'));
		return (value) ? decodeURIComponent(value[1]) : null;
	}
	var __vinfo = getCookie('_vinfo'),
		__isLogin = false;
	if(  __vinfo && __vinfo!='deleted' && getCookie('ticket_v') ){
		__isLogin = true;
	};
		
	if(!__isLogin){
		/**/
		var __regx1 = /src=(z9weij983)/i;
		var __regx2 = /src=(z9weij1300|z9weij1321)/i;
		var __regx3 = /src=(z9weij1286)/i;
		var __regx4 = /src=(z9weij1302|z9weij928|z9weij1298|z9weij1299|z9weij922|z9weij1301|z9weij966|z9weij1296|z9weij965|z9weij1297|ct3bskdap3|rel6ko4q43)/i;
		
		if(__regx1.test(location.search)){
			location.replace('//v.6.cn/channel/index.php?'+location.search.replace(/^\?/,''));		
		}
		else if(/\WtodbProm=true(\W|$)/.test(location.search) && __regx2.test(location.search)){
			location.replace('//v.6.cn/event/promimg/bdPromotion.php?'+location.search.replace(/^\?/,''));		
		}
		else if(__regx3.test(location.search)){
			location.replace('//v.6.cn/event/promimg/bdPromotion.php?'+location.search.replace(/^\?/,''));	
		}
		else if(__regx4.test(location.search)){
			location.replace('//v.6.cn/event/promimg/miniVideo/?'+location.search.replace(/^\?/,''));
		}
	};
	

    var _doc = document.documentElement,
        _docWidth = _doc.clientWidth;

	if(_docWidth > 1895){
    	document.body.className = 'page-w1900';
    }else if(_docWidth > 1510){
    	document.body.className = 'page-w1500';

    	if(_docWidth > 1770){
    		document.body.className = 'page-w1500 page-w1800';
    	}else if(_docWidth > 1640){
    		document.body.className = 'page-w1500 page-w1650';
    	}
    }else{
    	document.body.className='page-w1360';

    	if(_docWidth < 1340){
    		document.body.className='page-w1360 page-w1340';
    	}
    }


	window.VIA_PAGEID = 'index_b'; /**/
	window.ZHANG_ZHI_RECID = '88324542-0'; /**/

	window._channelIds = ["singer_all","fu1","u2","u3","u10"]; /**/

	/**/
	var _styles = [];
	var _focusBgObj = [{"image":"https:\/\/vi2.xiu123.cn\/live\/2023\/09\/04\/16\/1013v1693816391980635649.jpg","imageBig":"https:\/\/vi1.xiu123.cn\/live\/2023\/09\/04\/16\/1013v1693816392244765835.jpg","imageB":"https:\/\/vi2.xiu123.cn\/live\/2023\/09\/04\/16\/1013v1693816391980635649.jpg","imageBigB":"https:\/\/vi1.xiu123.cn\/live\/2023\/09\/04\/16\/1013v1693816392244765835.jpg","imageC":"","imageBigC":"","href":"https:\/\/m.6.cn\/appmate\/magic-box","bgColor":"#fcc968","title":"\u9b54\u76d2\u5927\u4ea8","openType":"3"}];

	window.indexFocusBg = _focusBgObj[Math.floor(Math.random()*_focusBgObj.length)];
	_styles.push('.video-focus-bg{background-color:#' + indexFocusBg.bgColor.replace('#','') + '}');

	document.write('<style type="text/css">'+_styles.join('')+'</style>');

})();