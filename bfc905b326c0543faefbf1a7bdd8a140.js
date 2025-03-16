var system ={
        win : false,
        mac : false,
        xll : false
    };

    var mobileScan = parseInt(myGetCookie('mobile_scan'),10);
	if( !(mobileScan > 0)  ){
		//检测平台
	    var p = navigator.platform;
	    system.win = p.indexOf("Win") == 0;
	    system.mac = p.indexOf("Mac") == 0;
	    //system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

	    var isPad = isPad();
	    //跳转语句
	    //if( isPad ||  !(system.win||system.mac||system.x11)){
	    if(isMobile()){
			var tmpWapUrl = "http://m.mama.cn/";
			var tmpProtocol = window.location.protocol;
			if(tmpWapUrl.indexOf("http") >= 0 && tmpProtocol == 'https:'){
				tmpWapUrl = tmpWapUrl.replace('http', 'https')
			}
			window.location.href=tmpWapUrl;
	    }
	}

	function isMobile()
    {
        return /(iPhone|iPad|iPod|iOS|Android|Linux armv8l|Linux armv7l|Linux aarch64)/i.test(navigator.platform);
    }

    function isPad(){
    	equipmentInfo = navigator.userAgent;
		equipmentInfo = equipmentInfo.substring(0,40);
		equipmentInfo = equipmentInfo.toLowerCase();

		if(equipmentInfo.indexOf("pad") > 0){
			return true;
		}else{
			return false;
		}
    }