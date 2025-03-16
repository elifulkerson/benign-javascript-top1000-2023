var oAnalysisUtil = {
	// ë°ì´í° ì´ê¸°í
	szUrl : '//eventapi.' + DOMAIN + '/set_log_api.php'
	,base64_encode : function( szData  ){
		if (window.btoa) // Internet Explorer 10 and above
		{
			 return window.btoa(unescape(encodeURIComponent( szData )));
		}
		else
		{
			// Cross-Browser Method (compressed)
			// Create Base64 Object
			var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
			// Encode the String
			return Base64.encode(unescape(encodeURIComponent( szData )));
		}
	}
	,base64_decode : function( szData ){
		if (window.atob) // Internet Explorer 10 and above
		{
			return decodeURIComponent(escape(window.atob( szData )));
		}
		else
		{
			// Cross-Browser Method (compressed)
			// Create Base64 Object
			var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
			// Encode the String
			return decodeURIComponent(escape(Base64.decode( szData )));
		}
	}
	,setTranslationLog : function( szActionType, szSendData, szSysType ) {
		if (typeof(szSysType) == 'undefined' || szSysType == '')
		{
			szSysType = 'web'
		}

		//$.ajaxSettings.traditional = true;
		$.ajax({
			type : "POST"
			, url: this.szUrl
			, data : {
				sztype : 'TRANSLATION'
				,action_type : szActionType
				,send_data : szSendData
				,sys_type : szSysType
			}
			, dataType	: 'json'
			, cache	: false
			, crossDomain: true
			, xhrFields: {
				withCredentials: true
			}
			, beforeSend : function(request) {
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
			}
			, success : function( data ) {
			}
			, error : function(jqXHR, textStatus, errorThrown ) {
			}
			, complete : function(jqXHR, textStatus ) {
			}
		});
	}
	,setClickLog : function( szCodeType, szSendData, szSysType ) {
		// ucc
		szSendData = szSendData.replace('szBjId', 'bj_id');
		szSendData = szSendData.replace('nBbsNo', 'bbs_no');
		szSendData = szSendData.replace('nTitleNo', 'title_no');
		szSendData = szSendData.replace('szCategory', 'category_no');

		// sports
		szSendData = szSendData.replace('b_no', 'bbs_no');
		szSendData = szSendData.replace('c_id', 'category_id');

		if (typeof(szSysType) == 'undefined' || szSysType == '')
		{
			szSysType = 'web'
		}

		var oData = {
			sztype : 'CLICK'
			,code_type : szCodeType
			,send_data : szSendData
			,sys_type : szSysType
		};

		//$.ajaxSettings.traditional = true;
		$.ajax({
			type : "POST"
			, url: this.szUrl
			, data : oData
			, dataType	: 'json'
			, cache	: false
			, crossDomain: true
			, xhrFields: {
				withCredentials: true
			}
			, beforeSend : function(request) {
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
			}
			, success : function( data ) {
			}
			, error : function(jqXHR, textStatus, errorThrown ) {
			}
			, complete : function(jqXHR, textStatus ) {
			}
		});
	}
    , setInflowLog: function (codeType, contentNo, addData, isSet, paramPathKey, bIsExternal, sysTypeParam) {
    	//@TODO. logData ì ëªë²ì§¸ í­ëª©ê¹ì§ ì¸ê±´ì§ ì²´í¬í´ë´ì¼ í  ë¯
    	var logData, inflowLogData;
    	if (typeof (addData['path1']) !== 'undefined') {
    		logData = $.extend(logData, {
    			path1: addData['path1']
    		});
    		inflowLogData = $.extend(inflowLogData, {
    			path1: addData['path1']
    		});
    	}
    	if (typeof (addData['path2']) !== 'undefined') {
    		logData = $.extend(logData, {
    			path2: addData['path2']
    		});
    		inflowLogData = $.extend(inflowLogData, {
    			path2: addData['path2']
    		});
    	}
    	if (typeof (addData['path3']) !== 'undefined') {
    		logData = $.extend(logData, {
    			path3: addData['path3']
    		});
    		inflowLogData = $.extend(inflowLogData, {
    			path3: addData['path3']
    		});
    	}
    	if (typeof (addData['path4']) !== 'undefined') {
			// VODì ê²½ì° VOD LOGìë path4 ê¸°ë¡íê¸°ë¡
			if (codeType == 'VOD') {
				logData = $.extend(logData, {
					path4: addData['path4']
				});
			}
    		inflowLogData = $.extend(inflowLogData, {
    			path4: addData['path4']
    		});
    	}

		if(typeof (addData['path5']) !== 'undefined'){
			if (codeType == 'VOD') {
				logData = $.extend(logData, {
					path5: addData['path5']
				});
			}
			inflowLogData = $.extend(inflowLogData, {
    			path5: addData['path5']
    		});
		}
		if(typeof (addData['path6']) !== 'undefined'){
			if (codeType == 'VOD') {
				logData = $.extend(logData, {
					path6: addData['path6']
				});
			}
			inflowLogData = $.extend(inflowLogData, {
    			path6: addData['path6']
    		});
		}

		if (typeof (addData['bj_id']) !== 'undefined') {
    		inflowLogData = $.extend(inflowLogData, {
    			bj_id: addData['bj_id']
    		});
		}
		
		if (typeof (addData['is_embed']) !== 'undefined') {
    		logData = $.extend(logData, {
				is_embed: addData['is_embed']
			});
			inflowLogData = $.extend(inflowLogData, {
				is_embed: addData['is_embed']
			});
    	}

		if(codeType == 'VOD'){
			if (typeof addData['list_type'] !== 'undefined') {
				logData = $.extend(logData, {
					list_type: addData['list_type']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_type: addData['list_type']
				});
			}
			if (typeof addData['list_data_type'] !=='undefined'){
				logData = $.extend(logData, {
					list_data_type: addData['list_data_type']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_data_type: addData['list_data_type']
				});
			}
			
			if(typeof addData['vod_idx'] !== 'undefined'){
				logData = $.extend(logData, {
					vod_idx: addData['vod_idx']
				});
				inflowLogData = $.extend(inflowLogData, {
					vod_idx: addData['vod_idx']
				}); 
			}

			if(typeof addData['list_idx'] !== 'undefined'){
				logData = $.extend(logData, {
					list_idx: addData['list_idx']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_idx: addData['list_idx']
				}); 
			}

			if(typeof addData['list_data_idx'] !== 'undefined'){
				logData = $.extend(logData, {
					list_data_idx: addData['list_data_idx']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_data_idx: addData['list_data_idx']
				}); 
			}

			if(typeof addData['list_data_detail'] !== 'undefined'){
                if(typeof(addData['list_data_detail']) == 'object') {
                    addData['list_data_detail'] = JSON.stringify(addData['list_data_detail']);
                }
                
				logData = $.extend(logData, {
					list_data_detail: addData['list_data_detail']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_data_detail: addData['list_data_detail']
				}); 
			}

			if(typeof addData['list_view_session'] !== 'undefined'){
				logData = $.extend(logData, {
					list_view_session: addData['list_view_session']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_view_session: addData['list_view_session']
				}); 
			}

			if(typeof addData['list_view_type'] !== 'undefined'){
				logData = $.extend(logData, {
					list_view_type: addData['list_view_type']
				});
				inflowLogData = $.extend(inflowLogData, {
					list_view_type: addData['list_view_type']
				}); 
			}
            
            if(typeof addData['data_src_type'] !== 'undefined'){
				logData = $.extend(logData, {
					data_src_type: addData['data_src_type']
				});
				inflowLogData = $.extend(inflowLogData, {
					data_src_type: addData['data_src_type']
				}); 
			}
            
            if(typeof addData['is_autoplay'] !== 'undefined'){
				logData = $.extend(logData, {
					is_autoplay: addData['is_autoplay']
				});
				inflowLogData = $.extend(inflowLogData, {
					is_autoplay: addData['is_autoplay']
				}); 
			}

			if (typeof addData['rec_detail'] !== 'undefined') {
				if(typeof(addData['rec_detail']) == 'object') {
                    addData['rec_detail'] = JSON.stringify(addData['rec_detail']);
                }
				logData = $.extend(logData, {
					rec_detail: addData['rec_detail']
				});
				inflowLogData = $.extend(inflowLogData, {
					rec_detail: addData['rec_detail']
				});
			}

			if(typeof addData['filter_id'] !=='undefined'){
				logData = $.extend(logData, {
					filter_id: addData['filter_id']
				});
				inflowLogData = $.extend(inflowLogData, {
					filter_id: addData['filter_id']
				});
			}

			if(typeof addData['ex_category_no'] !=='undefined'){
				logData = $.extend(logData, {
					ex_category_no: addData['ex_category_no']
				});
				inflowLogData = $.extend(inflowLogData, {
					ex_category_no: addData['ex_category_no']
				});
			}

			if(typeof addData['is_render'] !== "undefined"){
				logData = $.extend(logData, {
					is_render: addData['is_render']
				});
				inflowLogData = $.extend(inflowLogData, {
					is_render: addData['is_render']
				});
			}

			if(typeof addData['cli_list_data_idx'] !== "undefined"){
				logData = $.extend(logData, {
					cli_list_data_idx: addData['cli_list_data_idx']
				});
				inflowLogData = $.extend(inflowLogData, {
					cli_list_data_idx: addData['cli_list_data_idx']
				});
			}
			
		}
    	inflowLogData = $.extend(inflowLogData, {
    		referer: location.href
    	});

		var path_key;
    	var tmToday = new Date();
                
		// ì´ë¯¸ ì¸íë path_key ê° ì ë¬ ë°ìê² ìë¤ë©´ ê·¸ê±°ë¥¼ path_key ì¸í
		if (typeof paramPathKey !== 'undefined') {
			path_key = paramPathKey;
		} else {
            // Parse_Cookie(document);
			// var _au = Read_Cookie("_au");
			var _au = this.getCookie('_au');
            //@TODO. _auê° ìì ê²½ì°ì í¤ë¥¼ ë­ë¡ í ê¹ë..            
            path_key = _au + '_' + contentNo + '_' + tmToday.getTime();
        }
        //@TODO. í¤ë¥¼ íë² ìí¸íë¼ë í´ì¼ íë ¤ë? ì¤ë³µëë¯ ì´ì¼?

    	logData = $.extend(logData, {
    		path_key: path_key
		});

    	var name;
    	var value;
    	switch (codeType) {
    		case 'LIVE':
    			name = 'LIN';
    			value = $.param(logData);
    			inflowLogData = $.extend(inflowLogData, {
    				broad_no: contentNo
    			});
    			break;
    		case 'VOD':
    			name = 'VIN';
    			value = $.param(logData);
    			inflowLogData = $.extend(inflowLogData, {
    				title_no: contentNo
    			});
    			break;
    	}

		var setInflowLogSysType = 'web';
		if (typeof sysTypeParam != 'undefined' && sysTypeParam != '') {
			setInflowLogSysType = sysTypeParam;
		}

    	$.ajax({
    		type: "POST",
    		url: this.szUrl,
    		data: {
    			sztype: 'INFLOW_PATH',
    			code_type: codeType,
    			path_key: path_key,
    			send_data: $.param(inflowLogData),
    			sys_type: setInflowLogSysType
    		},
    		dataType: 'json',
    		cache: false,
    		crossDomain: true,
    		xhrFields: {
    			withCredentials: true
    		},
    		beforeSend: function (request) {
    			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    		},
    		success: function (data) {},
    		error: function (jqXHR, textStatus, errorThrown) {},
    		complete: function (jqXHR, textStatus) {}
    	});

    	if (typeof isSet == 'undefined') {

			// ì¸ë¶ í ì¬ì´í¸ ì¼ ë ì¿ í¤ ìµì ì¶ê° (SameSite=None; Secure;)
			var szAddOption = ""
			if(typeof bIsExternal !== 'undefined' && bIsExternal !== '' && bIsExternal == true){
				szAddOption = " SameSite=None; Secure;"
			}

    		tmToday.setTime(tmToday.getTime() + (10 * 1000)); //10ì´ í ë§ë£

    		document.cookie = name + '=' + escape(value) + '; ' +
    			"path=/; expires=" + tmToday.toGMTString() + '; ' +
    			"domain=" + DOMAIN + ";" + szAddOption;
    	} else {
    		return value;
		}
		
	}
    , setVodPath: function (path1, path2, path3, path4, setType) {
		var fullpath = {};

		if (typeof setType == "undefined") {
			setType = 0;
		}

		// ì ì ê²½ë¡ ë°ì´í° ì¸í
		if (path1 !== undefined && path2 !== undefined && path3 !== undefined && path4 !== undefined) {
			fullpath = {path1:path1, path2:path2, path3:path3, path4:path4};
		}else if (path1 !== undefined && path2 !== undefined && path3 !== undefined) {
			fullpath = {path1:path1, path2:path2, path3:path3};
		} else if (path1 !== undefined && path2 !== undefined) {
			fullpath = {path1:path1, path2:path2};
		}else if(path1 !== undefined){
			fullpath = {path1:path1};
		}else{
			fullpath = {path1:'etc'};
		}

		// ëí´í¸ íí
		if(setType == 0){
			fullpath = JSON.stringify(fullpath).replace(/"/g, "'");
		}

		return fullpath;
	}
	, setVodCategoryPath: function (addData, list_type) {
		var fullpath = {};
		var i=1;
		addData.forEach(function(element){
			fullpath['path'+i] = element;
			i++;
		})
		
		fullpath['list_type'] = list_type;

		if(addData.length == 0){
			fullpath = {list_type:list_type, path1:'etc'};
		}
		
				

		return fullpath;
	}
	//ì ìê²½ë¡ í¨ì íë¼ë¯¸í° ê°ì ¸ì¤ë ë¶ë¶ objectë¡ ê°ì ¸ì¤ë í¨ì
	, setVodPathBindObject: function (addData, etcData) {
		var fullpath = {};
		var i=1;
		addData.forEach(function(element){
			fullpath['path'+i] = element;
			i++;
		})
		
		
		if(typeof etcData !== "undefined"){
			if(typeof etcData['list_type'] !== "undefined"){
				fullpath['list_type'] = etcData['list_type'];
			}
			if(typeof etcData['list_data_type'] !== "undefined"){
				fullpath['list_data_type'] = etcData['list_data_type'];
			}
		
			if(typeof etcData['list_idx'] !== "undefined"){
				fullpath['list_idx'] = etcData['list_idx'];
			}
		}
	
		if(addData.length == 0){
			fullpath = {list_type:list_type, path1:'etc'};
		}
		
				

		return fullpath;
	}
    , sendLiveInflowLog : function (bjId, broadNo, addData, paramPathKey, sendLogLength, szReferer, sysType) {
        this.sendInflowLog2('LIVE', bjId, broadNo, addData, paramPathKey, sendLogLength, szReferer, sysType);
    }
    , sendVodInflowLog: function (bjId, titleNo, addData, paramPathKey, sendLogLength, szReferer, sysType) {
        this.sendInflowLog2('VOD', bjId, titleNo, addData, paramPathKey, sendLogLength, szReferer, sysType);
    }
    , sendInflowLog: function (codeType, contentNo, addData, paramPathKey, sendLogLength, szReferer) {
        this.sendInflowLog2(codeType, '', contentNo, addData, paramPathKey, sendLogLength, szReferer);
    }
    , sendInflowLog2 : function (codeType, bjId, contentNo, addData, paramPathKey, sendLogLength, szReferer, sysType) {
        //@TODO. codeType, contentNo, addData, paramPathKey xss íí°ë§
    	var logData, inflowLogData;
        var tmpData = addData;
        if(typeof sysType === 'undefined') {
            sysType = 'web'; //ì ê· ì¤ì¹íì ê°ì´ ëì´ì´
        }
        
        //ë¡ê·¸ ì ì¡ì© ê²½ë¡
        inflowLogData = this.convertInflowPath.apply(this, tmpData); 
        //ì¿ í¤ ì¸íì© ê²½ë¡ (ê²½ë¡ ì¤ ì¼ë¶ë§ ì¸ííê³  ì¶ì¼ë©´ sendLogLength ê°ì¼ë¡ slice ì²ë¦¬
        if(typeof sendLogLength !== 'undefined' && $.isNumeric(sendLogLength) && sendLogLength < 0) {
            logData = this.convertInflowPath.apply(this, tmpData.slice(0, sendLogLength));
        } else {
            logData = inflowLogData;
		}
        
		var referer = (typeof szReferer !== 'undefined' && szReferer !== null) ? szReferer : location.href;          
        inflowLogData = $.extend({
    		referer: referer
    	}, inflowLogData);   
        
        var path_key;
    	var tmToday = new Date();
         
		// ì´ë¯¸ ì¸íë path_key ê° ì ë¬ ë°ìê² ìë¤ë©´ ê·¸ê±°ë¥¼ path_key ì¸í
		if (typeof paramPathKey !== 'undefined' && paramPathKey !== null && paramPathKey !== '') {
			path_key = paramPathKey;
		} else {
            //Parse_Cookie(document);
            //var _au = Read_Cookie("_au");
            var _au = this.getCookie('_au');
            //@TODO. _auê° ìì ê²½ì°ì í¤ë¥¼ ë­ë¡ í ê¹ë..            
            path_key = _au + '_' + ((typeof contentNo !== 'undefined' && contentNo !== null && contentNo !== '' && Number(contentNo) !== 0) ? contentNo : bjId) + '_' + tmToday.getTime();
        }
        //@TODO. í¤ë¥¼ íë² ìí¸íë¼ë í´ì¼ íë ¤ë? ì¤ë³µëë¯ ì´ì¼?

    	logData = $.extend({
    		path_key: path_key
		}, logData);

    	
        var name;
    	var value;
    	switch (codeType) {
    		case 'LIVE':
    			name = 'LIN';
    			value = $.param(logData);
    			inflowLogData = $.extend({
                    bj_id : bjId,
    				broad_no: contentNo                    
    			}, inflowLogData);
    			break;
    		case 'VOD':
    			name = 'VIN';
    			value = $.param(logData);
    			inflowLogData = $.extend({
                    bj_id : bjId,
    				title_no: contentNo
    			}, inflowLogData);
    			break;
    	}
		
		
        $.ajax({
    		type: "POST",
    		url: this.szUrl,
    		data: {
    			sztype: 'INFLOW_PATH',
    			code_type: codeType,
    			path_key: path_key,
    			send_data: $.param(inflowLogData),
    			sys_type: sysType //ê¸°ë³¸ì web, ì ê· ì¤ì¹íììë§ ê°ì´ atvappì¼ë¡ ëì´ì´
    		},
    		dataType: 'json',
    		cache: false,
    		crossDomain: true,
    		xhrFields: {
    			withCredentials: true
    		},
    		beforeSend: function (request) {
    			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    		},
    		success: function (data) {},
    		error: function (jqXHR, textStatus, errorThrown) {},
    		complete: function (jqXHR, textStatus) {}
    	});

    	tmToday.setTime(tmToday.getTime() + (10 * 1000)); //10ì´ í ë§ë£

    	document.cookie = name + '=' + escape(value) + '; ' +
    		"path=/; expires=" + tmToday.toGMTString() + '; ' +
    		"domain=" + DOMAIN + ";";
	}
    , convertInflowPath : function (path1, path2, path3, path4, path5, path6) {
		var fullpath = {};
        
        // ì ì ê²½ë¡ ë°ì´í° ì¸í
		if (path1 !== undefined && path2 !== undefined && path3 !== undefined && path4 !== undefined && path5 !== undefined && path6 !== undefined){
			fullpath = {path1:path1, path2:path2, path3:path3, path4:path4, path5:path5, path6:path6};	
		}  
		else if (path1 !== undefined && path2 !== undefined && path3 !== undefined && path4 !== undefined && path5 !== undefined) {
            fullpath = {path1:path1, path2:path2, path3:path3, path4:path4, path5:path5};
        } 
		else if (path1 !== undefined && path2 !== undefined && path3 !== undefined && path4 !== undefined) {
            fullpath = {path1:path1, path2:path2, path3:path3, path4:path4};
        } else if (path1 !== undefined && path2 !== undefined && path3 !== undefined) {
			fullpath = {path1:path1, path2:path2, path3:path3};
		} else if (path1 !== undefined && path2 !== undefined) {
			fullpath = {path1:path1, path2:path2};
		} else if(path1 !== undefined){
			fullpath = {path1:path1};
		} else{
			fullpath = {path1:'etc'};
		}

		return fullpath;
	}
    , getCookie : function(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
	/**
     * ì ì ê²½ë¡ ë¡ê·¸ ì ì¡ ì ì¶ê°ë¡ ë¡ê·¸ ë³´ë¼ ì ìë í¨ì
     * @param {string} bjId
     * @param {int} contentNo ìì title no or broad_no
     * @param {Array} pathData ì ìê²½ë¡
     * @param {string} sysType ìì¤í íì
     * @param {object} addData ì¶ê° ë¡ê·¸
	 * @param {string} codeType LIVE OR VOD
	 * @param {boolean} bIsExternal ìë² ëë ì¿ í¤ ìµìì¬ë¶
     */
	, sendInflowLogWithData: function (bjId, contentNo, pathData, sysType, addData, codeType, bIsExternal, szReferer) {
		var logData, inflowLogData;

		if(typeof sysType === 'undefined') {
			sysType = 'web'; //ì ê· ì¤ì¹íì ê°ì´ ëì´ì´
		}
		
		//ë¡ê·¸ ì ì¡ì© ê²½ë¡
		inflowLogData = this.convertInflowPath.apply(this, pathData); 
		//ì¿ í¤ ì¸íì© ê²½ë¡ (ê²½ë¡ ì¤ ì¼ë¶ë§ ì¸ííê³  ì¶ì¼ë©´ sendLogLength ê°ì¼ë¡ slice ì²ë¦¬
		if(typeof sendLogLength !== 'undefined' && $.isNumeric(sendLogLength) && sendLogLength < 0) {
			logData = this.convertInflowPath.apply(this, pathData.slice(0, sendLogLength));
		} else {
			logData = inflowLogData;
		}

		var referer = (typeof szReferer !== 'undefined' && szReferer !== null) ? szReferer : location.href;             
		inflowLogData = $.extend({
			referer: referer
		}, inflowLogData);   

		var tmToday = new Date();
		var tmNow = tmToday.getTime();
		var _au = this.getCookie('_au');
		var path_key = _au + '_' + ((typeof contentNo !== 'undefined' && contentNo !== null && contentNo !== '' && Number(contentNo) !== 0) ? contentNo : bjId) + '_' + tmNow;

		logData = $.extend({
			path_key: path_key
		}, logData);

		if (typeof (addData['list_data_type']) !== 'undefined') {
			logData = $.extend({
				list_data_type: addData['list_data_type']
			}, logData);
    	}

		if (typeof (addData['list_idx']) !== 'undefined') {
			logData = $.extend({
				list_idx: addData['list_idx']
			}, logData);
    	}

		var name;
    	var value;
    	switch (codeType) {
    		case 'LIVE':
    			name = 'LIN';
    			value = $.param(logData);
    			inflowLogData = $.extend({
                    bj_id : bjId,
    				broad_no: contentNo                    
    			}, inflowLogData);
    			break;
    		case 'VOD':
    			name = 'VIN';
    			value = $.param(logData);
    			inflowLogData = $.extend({
                    bj_id : bjId,
    				title_no: contentNo
    			}, inflowLogData);
    			break;
		}
		
		// ì¶ê° ë°ì´í° ì¶ê°íê¸°
		inflowLogData = $.extend(addData, inflowLogData);
		
		this.sendInflowPath(codeType, path_key, inflowLogData, sysType);

		tmToday.setTime(tmNow + (10 * 1000)); //10ì´ í ë§ë£

		// ì¸ë¶ í ì¬ì´í¸ ì¼ ë ì¿ í¤ ìµì ì¶ê° (SameSite=None; Secure;)
        var szAddOption = ""
        if(typeof bIsExternal !== 'undefined' && bIsExternal !== '' && bIsExternal == true){
            szAddOption = " SameSite=None; Secure;"
        }

		// ì¿ í¤ ì¸í
		document.cookie = name + '=' + escape(value) + '; ' +
			"path=/; expires=" + tmToday.toGMTString() + '; ' +
			"domain=" + DOMAIN + ";" + szAddOption;
	}
	/**
     * ì ìê²½ë¡ ì ë¬ set_log_api
     * @param string codeType VOD / LIVE
     * @param string path_key
     * @param object inflowLogData
     * @param string sysType
     */
	, sendInflowPath: function (codeType, path_key, inflowLogData, sysType) {
		$.ajax({
			type: "POST",

			url: this.szUrl,
			data: {
				sztype: 'INFLOW_PATH',
				code_type: codeType,
				path_key: path_key,
				send_data: $.param(inflowLogData),
				sys_type: sysType //ê¸°ë³¸ì web, ì ê· ì¤ì¹íììë§ ê°ì´ atvappì¼ë¡ ëì´ì´
			},
			dataType: 'json',
			cache: false,
			crossDomain: true,
			xhrFields: {
				withCredentials: true
			},
			beforeSend: function (request) {
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
			},
			success: function (data) {},
			error: function (jqXHR, textStatus, errorThrown) {},
			complete: function (jqXHR, textStatus) {}
		});
	}

	/**
     * VOD_UA LOG í¨ì
     * @param string btnType
     */
	 , sendVodUaLogBtnType: function (btnType) {
        var szEtcData = 'location=VOD&action=share&share_type=url&btn_type=' + btnType;

        $.ajax({
            type : "POST"
            , url : this.szUrl
            , data : {
                sztype : 'VOD_UA'
                , send_data : szEtcData,
            }
            , dataType : 'json'
            , xhrFields: {
                withCredentials: true
            }
            , beforeSend : function(request) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            }
            , success : function(response) {
            }
            , error : function(xhr, ajaxOptions, thrownError) {
            }
        });
	}

	/**
	 *  ëê²° ë¯¸ì ë°©ì¡íë©´ ê¾¸ë¯¸ê¸° ë²í¼ í´ë¦­ ë¡ê·¸
	 * @param string szSendData
	 * @param string btnType
	 */
	, sendMissionBtnLog: function( szSendData, szSysType ){
		if (typeof(szSysType) == 'undefined' || szSysType == '')
		{
			szSysType = 'web'
		}

		var oData = {
			sztype : 'M_FUND'
			,sys_type : szSysType
			,send_data : szSendData
		};

		$.ajax({
			type : "POST"
			, url: this.szUrl
			, data : oData
			, dataType	: 'json'
			, cache	: false
			, crossDomain: true
			, xhrFields: {
				withCredentials: true
			}
			, beforeSend : function(request) {
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
			}
			, success : function( data ) {
			}
			, error : function(jqXHR, textStatus, errorThrown ) {
			}
			, complete : function(jqXHR, textStatus ) {
			}
		});

	}

	/**
	 * openapi íì¥íë¡ê·¸ë¨ ê°ì¸ì ë³´ëì í´ë¦­ ë¡ê·¸
	 * @param string sendData
	 * @param string sysType
	 */
	, sendExtensionBtnLog: function(sendData, sysType) {
		if (typeof(sysType) == 'undefined' || sysType == '') {
			sysType = 'web'
		}

		var oData = {
			sztype : 'EXT_SVC'
			, sys_type : sysType
			, log_type : 'ext_svc'
			, action_type : 'bj_grant'
			, client_type : 'ext_market'
			, extension_type : sendData['extension_type']
			, extension_view_type : sendData['extension_view_type']
			, extension_target : sendData['extension_target']
			, extension_mobile : sendData['extension_mobile']
			, extension_version : sendData['extension_version']
			, developer_id : sendData['developer_id']
		};

		$.ajax({
			type : "POST"
			, url: this.szUrl
			, data : oData
			, async : false
			, dataType : 'json'
			, crossDomain: true
            , xhrFields: {
                withCredentials: true
            }
            , beforeSend : function(request) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            }
			, success : function(response) {
            }
            , error : function(xhr, ajaxOptions, thrownError) {
            }
		});
	}

}
