$LAB.script(JSF.jq).wait()
.script(JSF.login).wait(function(){

	jQuery('html,body').scrollLeft(0);

	Login.write();
	//小骥需求 20200526
	if(location.search.indexOf('mkc=bdpz')>-1){
		jQuery('.side-tool .code img').attr('src', '//vr0.6rooms.com/images/home/2020/xiaoji_baidu.png');
		jQuery('.side-tool .code span').html('六间房直播');
	}
})
.script(JSF.swf).wait(function(){
	var $ = jQuery;	
	
	var numF = function(n){
		n = String(n);
		if(n.length<4) return n;
		var a = n.split('').reverse().join('');
		a = a.replace(/(\d{3})/g, '$1,');
		a = a.split('').reverse().join('');
		return a.replace(/^,/,'');
	}	
	
	//4个视频推荐 播放区
	window.VideoFocus = {
		box: 0,
		swfBox: 0,
		tm: 0,
		tpl: '',
		tplUser: '',
		init: function(){
			var that = this;
			this.box = $('#videoFocus');
			this.listBox = this.box.find('.video-item');
			this.userBox = this.box.find('.video-user');
			this.tm = (new Date()).getTime();
			
			this.tpl = this.listBox.find('ul.template').html().replace('src3', 'src');
			this.listBox.find('ul.template').remove();

			var tpl = this.userBox.find('.template');
			this.tplUser = tpl.eq(0).html().replace('src3', 'src');
			this.tplRich = tpl.eq(1).html().replace('src3', 'src');
			this.tplFamily = tpl.eq(2).html().replace('src3', 'src');
			this.tplLove = tpl.eq(3).html().replace('src3', 'src');			
			this.userBox.find('.template').remove();

			this.tplRecom = this.userBox.find('.template-recom').html();
			this.userBox.find('.template-recom').remove();

			this.tplStar = this.userBox.find('.template-star').html();
			this.userBox.find('.template-star').remove();

			this.tplSvip = this.userBox.find('.svip-template').html();
			this.userBox.find('.svip-template').remove();

			this.setNext();

			this.listBox.on('click', 'li', function(){
				$(this).siblings('li').removeClass('on');
				$(this).addClass('on');

				var user = $(this).data('user');
				that.play(user);
			});

			this.listBox.on('mouseenter mouseleave', 'li', function(event){
				var _this = $(this);

				if(event.type=='mouseenter' && !_this.hasClass('on') ) {
					_this.addClass('over');
				}else{
					_this.removeClass('over');
				}
					
			});

			//监控所有跳转
			$(document.body).on('click', 'a', function(){
				var opentype = $(this).attr('opentype') || $(this).attr('data-opentype');
				if($(this).attr('target') && opentype!=2){
					that.pause();
				}
			});
			
			this.getData(function(){
				var _curUser = that.listBox.find('li:eq(0)').addClass('on').data('user'),
				_curUserInfo = that.parseUserInfo(_curUser);
			
				that.writeSwf(_curUserInfo);
				that.setUser(_curUser);
			});
		},
		tongJi: function(){
			var _videoFocus = this;
			if(!window.Index || !window.Index.Lives){				
				setTimeout( function(){
					_videoFocus.tongJi();
				}, 1000)
				return;
			}
			if(Index._curPanel != 'home') return;

			var _tracing = this.box.attr('data-tracing');
			var list = this.listBox.find('img[uid]');
			var uids = [];
			for(var i=0; i<list.length; i++){
				var _a = list.eq(i).parents('a');
				var _stat = (_a.attr('data-stat') || '').split('|');
				var _uid = _stat[0] || '';
				var _liveid = _stat[1] || '';
				var _recsrc = _stat[2] || '';


				uids.push({
					uid: _uid,
					liveid: _liveid, 
					recsrc: _recsrc
				});
				var buryObj =window.toCollectEvent && toCollectEvent.transformToObj((_a.attr('data-buryval') || ''));
				window.toCollectEvent && toCollectEvent.upEvent('room_exposure',{
						anchor_id: buryObj.anchor_id,
						liveid: buryObj.liveid,
						recsrc: buryObj.recsrc,
						rank_num: buryObj.rank_num,
						poster_id: buryObj.poster_id,
						anchor_area: buryObj.anchor_area,
						anchor_name: buryObj.anchor_name,
						anchor_rank: buryObj.anchor_rank
					},_tracing)
			}
			
			Index.Lives.toZhangZhi.recodeLazy(_tracing, uids);
		},
		_playerState: {},
		writeSwf: function(_userInfo){
			var _focus = this;

			window._homeFocusReady = function(){
				// _focus._player = swfobject.getObjectById('videoPlayer');
				_focus._player = _focus._playerLoader.getPlayer();
				_focus._player.setEnterRoomURL(_userInfo.url, _userInfo.tracing, _userInfo.stat, _userInfo.bury);	

				if(_focus.spamUser){
					_focus.play(_focus.spamUser);
				}
			};

			//flash视频流结束，播放下一个
			window._homeFocusStop = function(){
				VideoFocus.next();
			};

			//播放器各种状态
			window._homePlayerState = function(obj){
				_focus._playerState = obj || {};
			};

			var params = {
				protocol: location.protocol+'//',
				mode: 'homepage',
				fristPlayerType: 'h5',
				videoId: 'videoPlayer',				
				ruid: _userInfo.uid,
				fileName: _userInfo.flv,
				isPhoneLive: _userInfo.isPhone,
				bg: _userInfo.bg,
				toRoomUrl: _userInfo.url,
				readyFun: '_homeFocusReady',
				stopFun: '_homeFocusStop',
				playerFun: '_homePlayerState',
				tracing: _userInfo.tracing + '|' + _userInfo.stat, //flash用
				chID: 0,
				swfData: {allowscriptaccess:'always', wmode:'opaque', bgcolor:'#333333'}
			};

			$LAB.script(__PLAYER.allplayerloader).wait(function(){
				_focus._playerLoader = new all_playerLoader(params);
				_focus._playerLoader.loadPlayer();
			});	
		},
		parseUserInfo: function(user){
			var _isPhone = user.recordtype>1 ? 1 : 0;
			var _bg = user.pic.replace('_s', '_b');
			var _url = user.link.indexOf('6.cn')>-1 ? user.link : location.protocol+'//v.6.cn'+ user.link;
			var _url = _url + ((window.location.hostname == 'www.6.cn' && jQuery.browser.msie) 
					? '?_tra_='+VIA_PAGEID+'-ipvafi4f' : '');
			var _tracing = user.tracing || 'ipvafi4f';
			var _stat = user.rid+ '|' + (user.liveid||0) + '|' + (user.recSrc||0);
			function tranformBury(user){
				var arr = [];
				var obj = {
					recsrc:user.recsrc || 'None',
					anchor_name:user.alias || '',
					liveid:user.liveid || '',
					rank_num:user.rank_num || user.cur_index || 'None',
					anchor_id:user.uid || '',
					anchor_rank:user.wealthrank || '',
					anchor_area:user.anchor_area || '',
					poster_id:user.poster_id || 0
				}
				for(var key in obj){
					var str = key+'='+obj[key];
					arr.push(str)
				} 
				return arr.join('|');
			}
			var _bury = tranformBury(user);

			return jQuery.extend(user, {
				flv: user.flvtitle,
				isPhone: _isPhone,
				bg: _bg,
				url: _url,
				tracing: _tracing,
				stat: _stat,
				bury: _bury
			});
		},
		setUser: function(user){
			//this.eventRecom(user.eid);

			var tpl = this.tplUser;
			if(user.recUid){
				if(user.eid/1){
					switch(user.eid/1){
						case 162: //情人节神豪推荐
							tpl = this.tplLove;
							break;
						case 10000: //svip推荐
							tpl = this.tplSvip;
							break;
						case 10001: //神豪推荐
						case 10004: //闪光巨星推荐
							tpl = this.tplStar
						case 2590: //频道代言人推荐
						case 10003: //穿云箭推荐
							tpl = this.tplRecom;
							break;
						default:
							tpl = this.tplRich;
					}
				}else if(user.recUid > 900000000){//排位赛家族推荐
					tpl = this.tplFamily;
				}
			}
							
			var _html = tpl.replace(/\{rid\}/g, user.rid)
					.replace(/\{link\}/g, user.link)
					.replace(/\{alias\}/g, user.alias)
					.replace(/\{pic\}/g, user.picuser)
					.replace(/\{uid\}/g, user.uid)
					.replace(/\{eid\}/g, user.eid)
					.replace(/\{count\}/g, numF(user.count))
					.replace(/\{richlink\}/g, user.recUrl)
					.replace(/\{richalias\}/g, user.recName)
					.replace(/\{flink\}/g, user.recUrl)
					.replace(/\{fname\}/g, user.recName)
					.replace(/\{taghtml\}/g, user.tagname ? '<span class="icon-tag">'+user.tagname+'</span>' : '')
					.replace(/\{liveid\}/g, user.liveid || '')
					.replace(/\{recSrc\}/g, user.recSrc || '');

			this.userBox.html(_html);
		},
		curUser:{},
		play: function(user){
			if(this._player){
				var _userInfo = this.parseUserInfo(user);
				this._player.JsStartLive(_userInfo.flv, {
					isphoneLive: _userInfo.isPhone, 
					bgUrl: _userInfo.bg
				});
				this._player.setEnterRoomURL(_userInfo.url, _userInfo.tracing, _userInfo.stat,_userInfo.bury);				
				this.setUser(user);
			}else{
				this.spamUser = user;
			}
		},
		pause: function(){	
			try{
				if(this._player){
					this._player.videoPause();
				}
			}catch(e){}
		},
		reset: function(){
			var _li = this.listBox.find('li.on').eq(0);
			_li.click();
		},
		setNext: function(){
			var that = this;

			clearTimeout(this.nextTimer);
			this.nextTimer = setTimeout(function(){
				if(Index._curPanel=='home' && that._playerState.state != 'pause'){
					that.next();
				}else{
					that.setNext();
				}				
			}, 3*60*1000);
		},
		next: function(){
			// var _tm_dif = (new Date()).getTime() - this.tm;

			// //超过20分钟请求新数据
			// if(_tm_dif > 5*60*1000){ 
			// 	this.getData();
			// }else{
			// 	var _list = this.listBox;
			// 	var _cur_li =  _list.find('li.on');
			// 	var _next_li = _cur_li.next('li');
			// 	var _first_li = _list.find('li:first');

			// 	if(_next_li[0]){ //有下一个
			// 		_next_li.click();
			// 	}else{
			// 		_first_li.click();
			// 	}
			// }

			var _list = this.listBox;
			var _cur_li =  _list.find('li.on');
			var _next_li = _cur_li.next('li');
			if(_next_li[0]){ //有下一个
				_next_li.click();
			}else{
				this.getData();
			}

			this.setNext();
		},
		getData: function(callback){
			var that = this;
			this.tm = (new Date()).getTime();

			var _data = {
				act: 'new',
				uid: _puser.uid || 0,
				rich: _puser.rich || 0
			}

			$.getJSON('/api/getIndexBigLiveListNew.php', _data, function(obj){
				if(obj.flag == '001'){
					var _list = that.listBox;
					if( $.type(callback) == 'function'){
						that.parseData(obj.content.list);
						callback();
					}else{
						that.parseData(obj.content.list, 1);
					}
					
					if(obj.content.chinesenewyear == 1){
						_list.addClass('chinesenewyear');
					}else{
						_list.removeClass('chinesenewyear');
					}
				}else{
					setTimeout(that.getData, 1000);
				}
			});
		},
		// isUpdate 中间更新列表用
		parseData: function(list, isUpdate){
			var that = this,
				$ul = $('<ul class="list"></ul>');
			function tranformBury(user){
				var arr = [];
				var obj = {
					recsrc:user.recsrc || 'None',
					anchor_name:user.alias || '',
					liveid:user.liveid || '',
					rank_num:user.rank_num || user.cur_index || 'None',
					anchor_id:user.uid || '',
					anchor_rank:user.wealthrank || '',
					anchor_area:user.anchor_area || '',
					poster_id:user.poster_id || 0
				}
				for(var key in obj){
					var str = key+'='+obj[key];
					arr.push(str)
				} 
				return arr.join('|');
			}
			$.each(list, function(i, user){
				/*  */
				user.cur_index = i+1;
				var bury = tranformBury(user,i);
				var $li = $(that.tpl.replace('{rank}', i+1)
						.replace('{rid}', user.rid)
						.replace(/\{alias\}/g, user.alias)
						.replace('{pic}', user.pic)
						.replace(/{uid}/g, user.uid)
						.replace('{count}',numF(user.count))
						.replace('{taghtml}', user.tagname ? '<span class="icon-tag">'+user.tagname+'</span>' : '')
						.replace(/{liveid}/g, user.liveid || '')
						.replace(/{recSrc}/g, user.recSrc || '')
						.replace(/{buryval}/g, bury || '')
					);

				$li.data('user', user);
				$li.appendTo($ul);
			});

			this.listBox.html('').append($ul);			
			if(isUpdate){
				this.listBox.find('.pic img').one('load', function(){
					$(this).css('opacity', 1);
				});

				this.listBox.find('li:eq(0)').click();
			}else{
				//初始化不要效果
				this.listBox.find('.pic img').css('opacity', 1);
			}

			this.tongJi();
			
		},
		eventClass: '',
		eventRecom: function(eid){ //活动推荐边框
			if(this.eventClass){
				this.box.removeClass(this.eventClass);
			}

			if(eid/1){ //活动推荐
				this.eventClass = 'video-focus-e'+eid;
				this.box.addClass(this.eventClass);
			}else{ //默认
				this.eventClass = '';
			}
		}
	};

	VideoFocus.init();

})
.script(JSF.z).wait(function(){
    new ControlCenter({centerBtn:jQuery('#myAccountTool')});
})
.script(JSF.gift_conf).wait()
.script(JSF.gift).wait(function(){
	var $ = jQuery;

	window.__JingCaiTuiJian__ = [{"uid":"99895976","rid":"10676","alias":"\u5c0f\u751c\u751c\u597d\u8272\u8d2a\u8d22\u2764","count":"6031","wealthrank":21,"starttime":"45\u5206\u524d","picuser":"https:\/\/vi3.6rooms.com\/live\/2023\/08\/05\/20\/1003v1691237138443793300.jpg","pic":"https:\/\/vi3.6rooms.com\/live\/2021\/03\/27\/00\/1010v1616777884570353284_b.jpg","rtype":"u2","recordtype":"1","link":"\/10676","recHonour":0,"score":"7.50","rate":"A","flvtitle":"v99895976-219954954","userMood":"\u591a\u5e78\u8fd0\u9047\u5230\u4e86\u4f60\u3002","tagid":9000001,"tagname":"\u91d1\u724c","honor":"","liveid":"219954954","poster_id":"1147230","anchor_area":"\u8131\u53e3\u79c0","recSrc":"2_ExcelNewAnchor_1","recsrc":"ExcelNewAnchor","rank_num":1,"tagids":"9000001"},{"uid":"106020661","rid":"81911","alias":"\u7f8e\u82bd\ud83d\udc37\u9526\u9ca4","count":"7235","wealthrank":24,"starttime":"1\u5c0f\u65f658\u5206\u524d","picuser":"https:\/\/vi0.6rooms.com\/live\/2023\/08\/07\/22\/1003v1691417727384229349.jpg","pic":"https:\/\/vi3.6rooms.com\/live\/2023\/03\/21\/10\/1010v1679364808499341416_b.jpg","rtype":"r10","recordtype":"1","link":"\/81911","recHonour":0,"score":0,"rate":"S","flvtitle":"v106020661-219954849","userMood":"\u7f8e\u7684\u5192\u70df\u4e86","tagid":"1000225","tagname":"\u5973\u795e\u7ecf","honor":"","liveid":"219954849","poster_id":"1559087","anchor_area":"\u6b4c\u533a","recSrc":"2_PopTop20_2","recsrc":"PopTop20","rank_num":2,"tagids":"1000225,9000001"},{"uid":"107554165","rid":"76718","alias":"\u6d0b\u599e\u266c\u7231\u5531\u6b4c","count":"3119","wealthrank":18,"starttime":"6\u5c0f\u65f629\u5206\u524d","picuser":"https:\/\/vi0.6rooms.com\/live\/2023\/08\/27\/09\/1003v1693099749681598743.jpg","pic":"https:\/\/vi0.6rooms.com\/live\/2023\/05\/10\/17\/1010v1683712306072437820_b.jpg","rtype":"r5","recordtype":"1","link":"\/76718","recHonour":0,"score":"8.00","rate":"B","flvtitle":"v107554165-219954412","userMood":"\u5f88\u7b28-\u559c\u6b22\u7b80\u5355\u548c\u771f\u8bda","tagid":"1000099","tagname":"\u66fc\u5999","honor":"","liveid":"219954412","poster_id":"1567065","anchor_area":"\u6b4c\u533a","recSrc":"2_ExcelNewAnchor_3","recsrc":"ExcelNewAnchor","rank_num":3,"tagids":"1000099,9000001"},{"uid":"87437171","rid":"871891","alias":"\u673a\u7075\u5a07~","count":"7153","wealthrank":26,"starttime":"2\u5c0f\u65f643\u5206\u524d","picuser":"https:\/\/vi1.6rooms.com\/live\/2023\/08\/06\/11\/1003v1691291018386951168.jpg","pic":"https:\/\/vi1.6rooms.com\/live\/2022\/03\/15\/11\/1010v1647314308392478664_b.jpg","rtype":"r10","recordtype":"1","link":"\/871891","recHonour":0,"score":"8.50","rate":"S","flvtitle":"v87437171-219954762","userMood":"\uff0c\uff0c","tagid":"1000236","tagname":"\u6e05\u7eaf","honor":"","liveid":"219954762","poster_id":"1418988","anchor_area":"\u6b4c\u533a","recSrc":"2_ExcelNewAnchor_4","recsrc":"ExcelNewAnchor","rank_num":4,"tagids":"1000236,9000001"},{"uid":"94267486","rid":"594288","alias":"\u5ba2\u5b98\u91cc\u9762\u8bf7\uff01\uff01","count":"7236","wealthrank":19,"starttime":"2\u5c0f\u65f62\u5206\u524d","picuser":"https:\/\/vi3.6rooms.com\/live\/2023\/08\/27\/22\/1003v1693147821876026580.jpg","pic":"https:\/\/vi3.6rooms.com\/live\/2023\/04\/03\/19\/1010v1680520896775710121_b.jpg","rtype":"u1","recordtype":"1","link":"\/594288","recHonour":0,"score":"8.00","rate":"A","flvtitle":"v94267486-219954841","userMood":"\u841d\u8389\u8138\uff0c\u5fa1\u59d0\u8eab\uff01","tagid":9000001,"tagname":"\u91d1\u724c","honor":"","liveid":"219954841","poster_id":"1562930","anchor_area":"\u821e\u533a","recSrc":"2_ExcelNewAnchor_5","recsrc":"ExcelNewAnchor","rank_num":5,"tagids":"9000001"},{"uid":"87803401","rid":"847503","alias":"\u51b0\u9b44\u7490\u513f","count":"5105","wealthrank":29,"starttime":"2\u5c0f\u65f65\u5206\u524d","picuser":"https:\/\/vi1.6rooms.com\/live\/2021\/04\/15\/10\/1003v1618452473945640295.jpg","pic":"https:\/\/vi1.6rooms.com\/live\/2020\/10\/18\/06\/1010v1602972191456932870_b.jpg","rtype":"u1","recordtype":"1","link":"\/847503","recHonour":0,"score":"8.50","rate":"A","flvtitle":"v87803401-219954834","userMood":"\u6709\u4f60\u4e0d\u7528\u7fa1\u6155\u522b\u4eba\u7684\u5149","tagid":"1000099","tagname":"\u66fc\u5999","honor":"","liveid":"219954834","poster_id":"1032146","anchor_area":"\u821e\u533a","recSrc":"2_ConsumeTop_6","recsrc":"ConsumeTop","rank_num":6,"tagids":"1000099,9000001"},{"uid":"107481332","rid":"9256","alias":"\u4e00\u53ea\u5c0f\u7eee\u68a6\ud83d\udc97\u65fa\u65fa\u65fa","count":"7483","wealthrank":30,"starttime":"1\u5c0f\u65f61\u5206\u524d","picuser":"https:\/\/vi0.6rooms.com\/live\/2023\/09\/18\/21\/1003v1695043205432621856.jpg","pic":"https:\/\/vi3.6rooms.com\/live\/2023\/07\/04\/20\/1010v1688475150830974205_b.jpg","rtype":"u1","recordtype":"1","link":"\/9256","recHonour":0,"score":"8.00","rate":"S","flvtitle":"v107481332-219954923","userMood":"6\u623f\u7537\u4eba\u7684\u68a6","tagid":9000001,"tagname":"\u91d1\u724c","honor":"","liveid":"219954923","poster_id":"1569171","anchor_area":"\u821e\u533a","recSrc":"2_ConsumeTop_7","recsrc":"ConsumeTop","rank_num":7,"tagids":"9000001"},{"uid":"101518715","rid":"633605","alias":"\u94ae\u795c\u7984\u5341\u4e09\u5450","count":"2644","wealthrank":6,"starttime":"3\u5c0f\u65f654\u5206\u524d","picuser":"https:\/\/vi2.6rooms.com\/live\/2023\/10\/01\/09\/1003v1696125405644229799.jpg","pic":"https:\/\/vi0.6rooms.com\/live\/2023\/10\/01\/21\/1010v1696168286406669021_b.jpg","rtype":"r1","recordtype":"1","link":"\/633605","recHonour":0,"score":"7.00","rate":"B","flvtitle":"v101518715-219954616","userMood":"\u98ce\u4e00\u6837\u7684\u5973\u5b50","tagid":"","tagname":"","honor":"29001,29201","liveid":"219954616","poster_id":"1572173","anchor_area":"\u6b4c\u533a","recSrc":"2_UnShow_8","recsrc":"UnShow","rank_num":8,"tagids":""},{"uid":"85953856","rid":"780681","alias":"\u5f00\u6717\u4f17\u7b79\u5347\u7ea7\u5566~","count":"6956","wealthrank":30,"starttime":"2\u5c0f\u65f640\u5206\u524d","picuser":"https:\/\/vi3.6rooms.com\/live\/2023\/08\/04\/22\/1003v1691157979682897211.jpg","pic":"https:\/\/vi1.6rooms.com\/live\/2021\/06\/01\/00\/1010v1622480381377218824_b.jpg","rtype":"r10","recordtype":"1","link":"\/780681","recHonour":0,"score":"10.00","rate":"S","flvtitle":"v85953856-219954770","userMood":"\u5883\u968f\u5fc3\u8f6c","tagid":"","tagname":"","honor":"","liveid":"219954770","poster_id":"1214028","anchor_area":"\u6b4c\u533a","recSrc":"2_PopTop20_9","recsrc":"PopTop20","rank_num":9,"tagids":""},{"uid":"61087919","rid":"19092","alias":"\u8c01\u7684\u7cd6","count":"785","wealthrank":38,"starttime":"9\u5206\u524d","picuser":"https:\/\/vi3.6rooms.com\/live\/2022\/06\/30\/17\/1003v1656580163106068580.jpg","pic":"https:\/\/vi1.6rooms.com\/live\/2022\/12\/02\/01\/1010v1669916413515895312_b.jpg","rtype":"u1","recordtype":"1","link":"\/19092","recHonour":0,"score":"10.00","rate":"A","flvtitle":"v61087919-219955004","userMood":"\u4e00\u8111\u888b\u5305w","tagid":"1000161","tagname":"\u751c\u7f8e","honor":"12101","liveid":"219955004","poster_id":"1530289","anchor_area":"\u821e\u533a","recSrc":"2_ConsumeTop_10","recsrc":"ConsumeTop","rank_num":10,"tagids":"1000161,9000001"},{"uid":"102493342","rid":"798170","alias":"@\u590f\u5929\u59b9\u59b9","count":"7022","wealthrank":20,"starttime":"2\u5c0f\u65f654\u5206\u524d","picuser":"https:\/\/vi1.6rooms.com\/live\/2023\/06\/27\/18\/1003v1687862634715253393.jpg","pic":"https:\/\/vi1.6rooms.com\/live\/2023\/06\/19\/15\/1010v1687160053939760103_b.jpg","rtype":"r10","recordtype":"1","link":"\/798170","recHonour":0,"score":"7.00","rate":"S","flvtitle":"v102493342-219954731","userMood":"\u65e2\u7136\u6765\u4e86\u5c31\u522b\u6025\u7740\u8d70\u5457","tagid":"1000236","tagname":"\u6e05\u7eaf","honor":"26030,30002","liveid":"219954731","poster_id":"1568583","anchor_area":"\u6b4c\u533a","recSrc":"2_PopTop20_11","recsrc":"PopTop20","rank_num":11,"tagids":"1000236"},{"uid":"93414661","rid":"91905","alias":"\u590f\u81f3\ud83c\udf38\u6b22\u8fce\u79cb\u6708\u964d\u4e34","count":"3530","wealthrank":21,"starttime":"3\u5c0f\u65f632\u5206\u524d","picuser":"https:\/\/vi1.6rooms.com\/live\/2022\/04\/19\/16\/1003v1650358746104713203.jpg","pic":"https:\/\/vi2.6rooms.com\/live\/2021\/02\/06\/13\/1010v1612589414736559687_b.jpg","rtype":"u2","recordtype":"1","link":"\/91905","recHonour":0,"score":"14.00","rate":"B","flvtitle":"v93414661-219954659","userMood":"\u56e0\u4e3a\u559c\u6b22\uff0c\u53ef\u8fce\u4e07\u96be","tagid":9000001,"tagname":"\u91d1\u724c","honor":"","liveid":"219954659","poster_id":"1109969","anchor_area":"\u8131\u53e3\u79c0","recSrc":"2_UnShow_12","recsrc":"UnShow","rank_num":12,"tagids":"9000001"}];

	//年度总决赛获奖主播角标初始化
	(function(){
		var ele = $('.niandu-user');
		if(ele.length){
			$.each(ele, function(i, k){
				var dom = $(this);
				var uid = dom.attr('data-id');
				var honor = Index.nianduUser[uid];
				var conf = Index.Lives.honor[honor];

				if(honor){
					dom.addClass('icon-' + honor).show();
					conf && dom.attr('title', conf.title);
				};
			});
		};
	})();

	//特色主播户外标题位置
	;(function(){
		var _ele = $('.mm-taglist-area .mm-mod-list li');
		$.each(_ele, function(i, item){
			var _title = $(item).find('.live-title');
			if(_title[0]){
				var _tag = $(item).find('.icon-tags i');
				if(_tag[0]){
					_title.addClass('live-title-bt')
				}
			}

		});
	})();

	giftUtil.ready(function(){
		$LAB.script(JSF.index_2016).wait()
		.script(JSF.feed).wait(function(){
			Index.init();
		});

		/*  */
		if(_puser.uid){
			jQuery.getJSON('/im/rc/isNewIm.php', function(obj){
				if(obj.content==1){
					$LAB.script(JSF.imr).wait();
				}else{
					$LAB.script(JSF.im).wait();
				}
			});
		}
	}); //giftUtil.ready();

	/*  */
	var _focusBg = $('div.video-focus-bg');
	var _styles = [];
	_focusBg.find('a').attr('href', indexFocusBg.href).attr('title', indexFocusBg.title).attr('opentype', indexFocusBg.openType);
	_styles.push('.video-focus-bg{background-image:url(' + indexFocusBg.imageB + ')}');
	_styles.push('.page-w1900 .video-focus-bg{background-image:url(' + indexFocusBg.imageBigB + ')}');
	$('<style type="text/css">'+_styles.join('')+'</style>').appendTo($(document.body));


	$LAB.script(JSF.webview).wait(function(){
	    $('#homeEvent, #homeFocusVideo, #zoneBanner').on('click', 'a[opentype=2],a[opentype=3]', function(e){
	    	e.preventDefault();

			var opentype = $(this).attr('opentype');
			if(opentype == 2){
				var arr = $(this).attr('href').split('?');
				var url = arr[0] + '?platform=pc' + (arr[1] ? '&'+arr[1] : '');
				var title = $(this).attr('title') || '六间房';
					
				new WebviewCreate({
					url: url,
					title: title,
					width: 400,
					height: 650,
					pointer: false,
					extClass: '',
					effect: 'webview-iframe-right',
					target: 'body'
				});
			}else if(opentype == 3){
				var url = $(this).attr('href');
				var title = $(this).attr('title') || '六间房';
				var height = $(this).attr('height') || 700;

				if (url.indexOf('gashapon' > -1)) {
					height = 567;
				}
			    window.openReactIframe && window.openReactIframe.open('reactPage', {
			    	url: url,
					height: height,
			    	title: title
			    });
			}
		});
	});
	
});