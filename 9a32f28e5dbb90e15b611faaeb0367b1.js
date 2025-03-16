JSF.index_2016 = '//vj0.6rooms.com/mini/js/index_b_69.js';


window.__NOF = '/apple/expressInstall.swf';
window.__socketProxy__ = '/apple/chatProxy/socket1.1.swf?r=';
window.__CAMERA = {
		//base:	'/apple/livePlayer/publishplayer/publishplayer1.2.swf',
	
	manyVideo: '//vj0.6rooms.com/mini/js/h5_player/h5_31_publishplayer13.js'
};

window.__PLAYER = {
	
	allplayerloader: '//vj0.6rooms.com/mini/js/video/base_player_loader_1.js'
};

window.__H5CAMERA = {
	//personal: '/mini/js/h5_player/room_strongPublish_0.js',
	//personal: '/apple/livePlayer/roomplayer/room_strongPublish_62.js',
	//v6video: '//vj0.6rooms.com/mini/js/h5_player/V6video_Publish_1.js',
	//personal: '//vj0.6rooms.com/mini/js/video/room_publish_1.js',
	//room_publish_1基础上，增加胖可争霸连麦消息id
	personal: '//vj0.6rooms.com/mini/js/video/room_publish_6.js',
	//竖屏版本，白名单显示
	personal_direction: '//vj0.6rooms.com/mini/js/video/room_publish_direction_2.4.js',
	family: '//vj0.6rooms.com/mini/js/h5_player/h5_family_publishplayer_24.js',
	v6line: '//vj0.6rooms.com/mini/js/video/v6_line_player_1.js'
};

(function(){

	function __getCookie(val) {
		var value = document.cookie.match(
			new RegExp('(?:^|;)\\s*' + val + '=([^;]*)')
		);
		return value ? decodeURIComponent(value[1]) : null;
	}
	try{

		var _coin6 = __getCookie('_coin6');
		if(_coin6){
			var _uid = _coin6.split(':')[0]
			if(location.href.indexOf('vws')>-1){
				window.__H5CAMERA.personal = '//vj0.6rooms.com/mini/js/video/room_publish_1.1.js';
				var img = new Image;
				img.src='https://m.6.cn/jslog?uid='+page.rid+'&uu=0&&mver=0&ua='+encodeURIComponent(navigator.userAgent)+'&level=v6stream_socket&content='+encodeURIComponent(location.href);
			}
		}
	}catch(e){}
})();

if(location.href.indexOf('direction')>-1){
	// 竖屏直播，恢复http心跳+胖可争霸连麦消息id
	// 去掉socket重连请求startpublish接口
	//window.__H5CAMERA.personal = '/js/mini/room_publish_direction_1.7.js';	
	window.__H5CAMERA.personal = '//vj0.6rooms.com/mini/js/video/room_publish_direction_2.4.js';
}



window.Plugin = {
	box:null,
	install:function(act){
		this.box  = (jQuery.type(this.box)=='string')?('#'+this.box):this.box;
	
		if( navigator.userAgent.toLowerCase().indexOf('chrome')>-1){
						jQuery('<div class="livePartner" style="position:absolute; width:260px; height:200px; left:50%; top:50%; margin-left:-130px; margin-top:-100px"><div id="swfPlugin"></div></div>').appendTo(this.box);
			swfobject.embedSWF('/apple/flashComponent/showSettings1.4.swf', 'swfPlugin', 260, 200, '10.1', '', {}, {wmode:'opaque'});
			
		}else{
			var _class='livePartner_status1',
				_sug = jQuery('<div>',{
					'class':'livePartner',
					//'html':'<span>关闭</span><a target="_blank" href="'+page.v6path+'">下载1</a>'
					'html':'<div class="hint"><i class="icon"></i>'+
						'<p class="ht1"><span>您尚未安装六间房直播伴侣，无法正常发起直播 !</span><em>安装完成后，请重新启动浏览器</em></p>'+
						'<p class="ht2"><span>您的六间房直播伴侣不是最新版本，请升级至最新版本。</span><em>安装完成后，请重新启动浏览器</em></p>'+
						'</div>'+
						'<p class="down"><a target="_blank" href="/down/camera.php"><i></i>下载六间房直播伴侣</a></p>'
				});
			if(!act){
				_class="livePartner_status3";
			}else{
				_class="livePartner_status2";
			}
			_sug.addClass(_class).appendTo(this.box);
			_box = null;
			this.sug=_sug;
		}
	}
};