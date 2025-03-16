var browser=function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		var shell=function(){return {//浏览器版本信息
			trident: u.indexOf('Trident/') > -1, //IE内核
			presto: u.indexOf('Presto/') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit/') > -1 || u.indexOf('UCWEB') > -1, //苹果、谷歌内核（UC急速浏览器也支持webkit）
			gecko: u.indexOf('Gecko/') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*|UCWEB/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X|iOS/), //ios终端
			android: /Android|Linux.*UCWEB/i.test(u), //android终端
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari/') == -1, //是否web应该程序，没有头部与底部
			UC: u.indexOf('UC') > -1
		};
		}();
		if(shell.android || shell.iPhone || shell.UC){return true;}else{return false;}
	}
	function JumpLink(){
		var s=browser();
		var strInd = document.referrer;//获取来源链接
		var reInd =/\/\/(.+)\.caijing/; //来源匹配
		var objInd =strInd.match(reInd); 
       		if(s){
                     // alert(strInd +"----"+strInd.indexOf("http://m.caijing.com.cn"));
                      
                      if(strInd.indexOf("http://m.caijing.com.cn")>=0){//来源手机版
                          return;
                      }else{
                          window.location="http://m.caijing.com.cn/";
                      }
                }
	}JumpLink();