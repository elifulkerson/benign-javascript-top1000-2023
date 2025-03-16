var INVEN = window.INVEN || {};
INVEN.Db = INVEN.Db || {};

(function(INVEN, undefined) {
	var version = 3;

	if ((INVEN.Db.Tooltip ? Math.max(parseInt(INVEN.Db.Tooltip.version) || 1, 1) : 0) >= version) return false;

	/* 환경 설정 변수 */
	var requestDelay = 100;
	var cursorOffsetX = 10;
	var cursorOffsetY = 10;
	var siteDirs = {
		// 사이트 도메인 주소와 www 디렉토리가 상이할 경우 설정함 ('서브 도메인': 'www 디렉토리')
		'2k': 'pb2k',
		'46sin': 'fsg',
		'dia3': 'diablo3',
		'fifa3': 'fifaonline3',
		'fifa4': 'fifaonline4',
		'fmo': 'fmonline',
		'heoresofthestorm': 'hos',
		'hots': 'hos',
		'm': 'mobile',
		'mabiduel': 'duel',
		'mabinogiduel': 'duel',
		'destinychild': 'dchild',
		'pubg': 'battlegrounds',
		'battleground': 'battlegrounds',
		'cod': 'blackops4',
		'dia2': 'diablo2',
		'diam': 'diablom',
		'mfr': 'marvelfuturerevolution',
		'umamusume': 'uma',
		'dnfm' : 'mdnf',
		'arclightrumble' : 'war',
		'nw' : 'nightwalker',
		'dia4': 'diablo4',
		'aw' : 'archeagewar',
		'fconline': 'fifaonline4'
	};

	INVEN.Db.Tooltip = {};
	INVEN.Db.Tooltip.version = version;
	INVEN.Db.Tooltip.objects = {};

	/* 외부 호출용 툴팁 객체 생성기 */
	INVEN.Db.Tooltip.create = function(id, wrap, site, ajaxUrl, method, attribute, callback) {
		// Tooltip Class Name
		var legacy = false;

		if(typeof id === 'string' && id.indexOf(":") != -1) {
			var _tmp = id.split(":");
			id     = trim(_tmp[0]) || '';
			legacy = (trim(_tmp[1]) === 'legacy') ? true : false;
		}else {
			id = trim(id) || '';
		}

		if (INVEN.Db.Tooltip.objects[id] === undefined) {
			// Tooltip Wrap Id
			wrap = trim(wrap);

			// Site String
			site = trim(site);
			if (site) site = site.toLowerCase();

			// AJAX Request URL
			ajaxUrl = trim(ajaxUrl);
			if (ajaxUrl) {
				if (site && (siteCode == 'www' || siteCode == site || siteDirs[siteCode] == site)) {
					ajaxUrl = ajaxUrl.replace(new RegExp('^[\/]+', 'g'), '/');
					//게시판에서 db 툴 레이어 사용을 위한 추가
					if (ajaxUrl.indexOf('db/') > -1) {
						siteCode = site;
					}
					if (siteCode == 'www') {
						ajaxUrl = 'https://www.inven.co.kr/'+(siteDirs[site] || site)+'/'+ajaxUrl;
					} else {
						ajaxUrl = 'https://'+siteCode+'.inven.co.kr/'+ajaxUrl;
					}
				} else {
					ajaxUrl = null;
				}
			}

			// AJAX Request Method(GET or POST. default: GET) [NEW Parameter]
			method = (trim(method) || 'GET').toUpperCase();
			if (method != 'GET' && method != 'POST') method = 'GET';

			// Show-Hide HTML Attribute [NEW Parameter]
			attribute = trim(attribute);

			// Callback Function [NEW Parameter]
			if (typeof(callback) == 'string') {
				callback = $.trim(callback);
				if (!(/^[a-z_][0-9a-z_\.]*[0-9a-z_]$/i).test(callback)) callback = null;
			} else if (typeof(callback) != 'function') {
				callback = null;
			}

			INVEN.Db.Tooltip.objects[id] = new Tooltip(id, wrap, site, ajaxUrl, method, attribute, callback, legacy);
		}
		return INVEN.Db.Tooltip.objects[id];
	};

	INVEN.Db.Tooltip.hide = function() {
		for (var id in INVEN.Db.Tooltip.objects) {
			INVEN.Db.Tooltip.objects[id].hide();
		}
	};

	INVEN.Db.Tooltip.updateUrl = function(id, url) {
		if (INVEN.Db.Tooltip.objects.hasOwnProperty(id) && typeof(url) == 'string' && $.trim(url).length > 0) {
			ajaxUrls[id] = $.trim(url);
		}
	};

	/* 변수 초기화 */
	var tooltip = null, tooltipParents = null, tooltipObject = null, tooltipObjectIsLoading = false;
	var showHideAttributes = {};
	var tooltipStyle = 'position: absolute; left: 0px; top: 0px; display: none; float: left; overflow: hidden;';
	var tooltipWrapStyle = 'position: absolute; left: 0px; top: 0px; display: block; clear: both; overflow: visible; width: 1px; height: 1px;';
	var siteCode = (new RegExp('^http[s]?:\/\/([a-z0-9\-_]+)\.inven\.co\.kr\/', 'i')).exec($.trim(document.location.href));
	if (siteCode) siteCode = siteCode[1].toLowerCase();
	var request = null, requestClear = null;
	var pageX = 0, pageY = 0;
	var ajaxUrls = {};

	/* 툴팁 좌표 계산 */
	var setPosition = function() {
		if (tooltip) {
			if (tooltip.css('display') == 'none') tooltip.css({ 'left': '-5000px', 'top': '-5000px', 'display': 'block' });
			var px = pageX + cursorOffsetX;
			var py = pageY + cursorOffsetY;
			var offset;
			if (tooltipParents) {
				for (var i = 0; i < tooltipParents.length; i++) {
					offset = tooltipParents[i][0].offset();
					px += offset.left - tooltipParents[i][1].body.scrollLeft;
					py += offset.top - tooltipParents[i][1].body.scrollTop;
				}
			}
			var sl = window.scrollX;
			var st = window.scrollY;
			var cw = window.innerWidth;
			var ch = window.innerHeight;
			var w = tooltip.outerWidth();
			var h = tooltip.outerHeight();
			var fixLeft = (!tooltipObjectIsLoading && tooltipObject) ? (tooltipObject.fixOffsetLeft || 0) : 0;
			px += fixLeft;
			if ((px + w) > (cw + sl)) px = Math.max(px - cursorOffsetX - w - fixLeft, sl);
			if ((py + h) > (ch + st)) py = Math.max(py - cursorOffsetY * 1.5 - h, st);
			offset = tooltip.parent().offset();
			px -= offset.left;
			py -= offset.top;
			tooltip.css({ 'left': Math.floor(px)+'px', 'top': Math.floor(py)+'px' });
		}
	};

	/* 마우스 커서 좌표 감시 */
	$(document).on('pointermove', function(e) {
		pageX = e.originalEvent.pageX;
		pageY = e.originalEvent.pageY;
		if (tooltip) setPosition();
	}).on('click', 'a[href]:not([href^="javascript:"])', function(e) {
		if (tooltipObject) tooltipObject.hide();
	});

	/* 툴팁 키 */
	var getTooltipKey = function(code, type) {
		code = trim(code);
		if (code) {
			type = trim(type);
			if (type) {
				return code+'_'+type;
			} else {
				return code;
			}
		}
		return null;
	};

	/* 내부용 툴팁 객체 */
	var Tooltip = function(id, wrap, site, ajaxUrl, method, attribute, callback_func, legacy) {
		/* 기본값 선언 */
		var self = this;
		var callback = callback_func;
		var values = {};
		var cache = {};
		var possibility = true, lastTooltip = null;
		if (!id || id == '') id = null;

		/* 툴팁 생성 */
		var create = function(key, preShow) {
			if (id && values.parent) {
				// 생성된 툴팁을 상황에 맞게 내어준다.
				if (key === true) {
					// 로딩 툴팁
					tooltip = values.loading;
					tooltipObjectIsLoading = true;
				} else if (typeof(key) == 'string') {
					// 예전 방식의 addPreData의 경우 툴팁에 id를 남겨서 따로 처리(호환성!)
					var tooltipId = id+'_'+key, preTooltip;
					if (values.tooltips[tooltipId]) {
						preTooltip = values.tooltips[tooltipId];
					} else {
						preTooltip = document.getElementById(tooltipId);
						if (preTooltip) {
							preTooltip = $(preTooltip);
						} else {
							preTooltip = $('<div id="'+tooltipId+'" class="'+id+'"><div class="'+id+'_inner"></div></div>').appendTo(values.parentPreData).attr('style', tooltipStyle);
						}
						values.tooltips[tooltipId] = preTooltip;
					}
					if (preShow) {
						preTooltip.css('display', 'none');
						return true;
					} else {
						tooltip = preTooltip;
						tooltipObjectIsLoading = false;
					}
				} else {
					// 통합 툴팁
					if (callback) {
						values.tooltip.removeClass().addClass(id);
						values.tooltip._inner = (values.tooltip._inner || values.tooltip.find('> div.'+id+'_inner:first')).removeClass().addClass(id+'_inner');
					}
					tooltip = values.tooltip;
					tooltipObjectIsLoading = false;
				}
				tooltip.css('display', 'none').css('z-index', values.zIndex);
				tooltip._inner = tooltip._inner || tooltip.find('> div.'+id+'_inner:first');
				tooltipParents = (typeof(key) != 'string' && values.parents && values.parents.length > 0) ? values.parents : null;
				tooltipObject = self;
				return true;
			} else if (id && document.body) {
				// 툴팁을 생성할 document를 찾는다. 자신이 iframe이라면 툴팁 출력이 가능한 최상위 부모 document를 구한다.
				var win = window, deep = 0;
				try {
					while (win.parent && win.parent.document && win.parent.document !== win.document && win.document.body && win.parent.INVEN && win.parent.INVEN.Db && win.parent.INVEN.Db.Tooltip && Math.max(parseInt(win.parent.INVEN.Db.Tooltip.version) || 1, 1) >= version && win.parent.INVEN.Db.Tooltip.objects[id]) {
						deep += 1;
						win = win.parent;
					}
					if (deep > 0) {
						// iframe의 부모에 DOM을 추가하거나 제거가 가능한지 테스트한다.
						var test = win.document.createElement('div');
						win.document.body.appendChild(test);
						win.document.body.removeChild(test);
					}
				} catch(e) {
					win = window;
					deep = 0;
				}
				// 자신이 iframe일 경우 부모 document에서 실제 좌표를 계산할 수 있도록 구조를 남겨둔다.
				var documents = [ document ], i;
				values.parents = null;
				if (deep > 0) {
					documents[1] = win.document;
					win = window;
					var doc, added, iframes, iframe, j;
					var selfHide = function() {
						self.hide();
					};
					for (i = 0; i < deep; i++) {
						doc = win.document;
						win = win.parent;
						added = false;
						iframes = $(win.document.body).find('iframe');
						for (j = 0; j < iframes.length; j++) {
							try {
								iframe = $(iframes[j]);
								if (iframe.contents()[0] === doc) {
									added = [ iframe, doc ];
									iframe.on('pointerout', selfHide);
									break;
								}
							} catch(e) {}
						}
						if (added) {
							values.parents = values.parents || [];
							values.parents[values.parents.length] = added;
						} else {
							values.parents = null;
							break;
						}
					}
				}
				// 툴팁 생성 : IE7 이하에서는 jQuery로 iframe 부모에 DOM 추가 및 제거가 불가능 하기에 클래식한 방법으로 DOM을 생성하고 jQuery 객체로 만든다.
				values.zIndex = 999;
				for (i = 0; i < documents.length; i++) {
					if (wrap) {
						var p = documents[i].getElementById(wrap);
						if (p) {
							documents[i] = $(p);
						} else {
							p = documents[i].createElement('div');
							p.id = wrap;
							documents[i].body.appendChild(p);
							documents[i] = $(p);
						}
						documents[i].attr('style', tooltipWrapStyle);
						values.zIndex = Math.max(parseInt(documents[i].css('z-index')) || values.zIndex, values.zIndex);
					} else {
						documents[i] = $(documents[i].body);
					}
				}
				values.parent = documents.length > 1 ? documents[1] : documents[0];
				values.parentPreData = documents[0];
				values.tooltip = values.parent.find('> div.'+id+':not([id]):first');
				if (values.tooltip.length == 0) {
					values.tooltip = win.document.createElement('div');
					values.tooltip.className = id;
					if (legacy) { values.tooltip.classList.add('legacyDbPage'); }
					values.tooltip.innerHTML = '<div class="'+id+'_inner"></div>';
					values.parent[0].appendChild(values.tooltip);
					if (legacy) { tooltipStyle += 'width:auto;margin:0;'; }
					values.tooltip = $(values.tooltip).attr('style', tooltipStyle);
				}
				values.zIndex = Math.max(parseInt(values.tooltip.css('z-index')) || values.zIndex, values.zIndex);
				for (i = 0; i < documents.length; i++) {
					if (documents[i][0].nodeName != 'BODY') documents[i].css('z-index', values.zIndex);
				}
				values.tooltips = {};
				values.loading = win.document.getElementById('InvenTooltipLoading');
				if (values.loading) {
					values.loading = $(values.loading);
				} else {
					values.loading = win.document.createElement('div');
					values.loading.id = 'InvenTooltipLoading';
					values.loading.innerHTML = '<img src="//static.inven.co.kr/image/wow/dataninfo/edb_item/loading.gif" style="width: 100px; height: 100px; border: 0px;" />';
					win.document.body.appendChild(values.loading);
					values.loading = $(values.loading).attr('style', tooltipStyle);
				}
				return create(key, preShow);
			}
			tooltip = null;
			return false;
		};

		/* 툴팁 내용 넣기 */
		var setTooltip = function(code, type, preShow) {
			var key = getTooltipKey(code, type);
			if (create(cache[key].preData === 1 ? key : null, preShow)) {
				if (!preShow) {
					values.key = key;
					values.code = code;
					values.type = type;
				}
				if (tooltip) {
					// callback 함수 가져오기
					var func = null;
					if (callback && !preShow) {
						if (typeof(callback) == 'function') {
							func = callback;
						} else {
							try {
								func = eval('window.'+callback);
								if (typeof(func) != 'function') func = null;
							} catch(e) {
								func = null;
							}
						}
					}
					if (cache[key].type == 'json') {
						// json 타입 툴팁 처리
						if (func) {
							tooltip._inner.empty();
							var result = trim(func($(tooltip[0]), code, type, cache[key].data));
							if (tooltip._inner.is(':empty')) {
								if (result) {
									tooltip._inner.html(result);
									return true;
								}
							} else {
								return true;
							}
						}
					} else if (cache[key].type == 'text') {
						// text/html 타입 툴팁 처리 (xml로 받은 툴팁은 이미 text/html로 처리되어 있음)
						if (!(cache[key].preData === 1 && !cache[key].data)) {
							tooltip._inner.html(cache[key].data);
							if (cache[key].preData === 1) cache[key].data = null;
							if (func) func($(tooltip[0]), code, type, null);
						}
						return true;
					}
				}
			}
			if (!preShow) {
				values.key = null;
				values.code = null;
				values.type = null;
			}
			return false;
		};

		/* 툴팁 보이기 */
		this.show = function(code, type, delay, edata) {
			var key = getTooltipKey(code, type);
			if (key) {
				lastTooltip = [ code, type, delay, edata ];
				if (!possibility) return;
			}
			self.hide();
			if (key) {
				if ($.isPlainObject(cache[key])) {
					// 받은 데이터가 캐싱 되어 있다.
					if (setTooltip(code, type)) {
						setPosition();
						setTimeout(setPosition, 1);
					} else {
						self.hide();
					}
				} else if (cache[key] === true) {
					// 로딩중..
					if (create(true)) {
						setPosition();
						setTimeout(setPosition, 1);
					}
				} else if (cache[key] === undefined && ajaxUrl) {
					// 서버에서 툴팁 데이터 받아옴
					if (create(true)) {
						setPosition();
						setTimeout(setPosition, 1);
					}
					values.key = key;
					cache[key] = true;
					type = trim(type);
					edata = trim(edata);
					requestClear = function() {
						requestClear = null;
						if (cache[key] === true) delete cache[key];
						if (request) {
							clearTimeout(request);
							request = null;
						}
					};
					request = setTimeout(function() {
						request = null;
						var data = { code: code };
						if (type) data.type = type;
						if (edata) data.edata = edata;
						$.ajax({
							url: ajaxUrls.hasOwnProperty(id) ? ajaxUrls[id] : ajaxUrl,
							cache: method == 'GET',
							type: method,
							data: data,
							success: function(receive) {
								requestClear = null;
								receive = getIntelligentReceivedData(receive);
								if (receive.type == 'error') {
									cache[key] = false;
								} else {
									cache[key] = receive;
									if (receive.type == 'xml') {
										receive = convertArray2HTML(convertXML2Array(receive.data));
										cache[key] = receive ? { data: receive, type: 'text' } : false;
									}
								}
								if (key == values.key) {
									if (tooltip) {
										tooltip.css('display', 'none');
										tooltip = null;
										tooltipObject = null;
									}
									if (cache[key] && setTooltip(data.code, data.type)) {
										setPosition();
										setTimeout(setPosition, 1);
									} else {
										self.hide();
									}
								}
							},
							error: function() {
								requestClear = null;
								cache[key] = false;
								if (key == values.key) self.hide();
							}
						});
					}, $.isNumeric(delay) && parseInt(delay) >= 0 ? parseInt(delay) : requestDelay);
				}
			}
		};

		/* 툴팁 숨기기 */
		this.hide = function() {
			values.key = null;
			values.code = null;
			values.type = null;
			if (lastTooltip) lastTooltip = null;
			if (tooltip) {
				tooltip.css('display', 'none');
				tooltip = null;
				tooltipObject = null;
			}
			if (requestClear) requestClear();
		};

		/* 툴팁 새로고침 */
		this.refresh = function() {
			if (callback && tooltip && values.key && values.code && $.isPlainObject(cache[values.key])) {
				if (setTooltip(values.code, values.type)) {
					setPosition();
				} else {
					self.hide();
				}
			}
		};

		/* 콜백 함수 갱신 */
		this.setCallback = function(func) {
			callback = typeof(func) == 'function' ? func : null;
		};

		/* 수동 기정보 등록 */
		this.addPreData = function(config, data) {
			// 기존 방식 이외에 html string도 추가 가능함
			var key;
			if (($.isPlainObject(config) || $.isArray(config)) && trim(config.code)) {
				key = getTooltipKey(config.code, config.type);
			} else if (trim(config)) {
				key = getTooltipKey(config);
			} else {
				return;
			}
			if ($.isPlainObject(data) || $.isArray(data)) {
				data = convertArray2HTML(data);
				if (data) cache[key] = { data: data, type: 'text', preData: 1 };
			} else {
				data = trim(data);
				if (data) cache[key] = { data: data, type: 'text', preData: 2 };
			}
		};

		/* 수동 기정보 삭제 */
		this.clearPreData = function() {
			for (var key in cache) {
				//if (cache[key].preData) delete cache[key];
			}
		};

		/* 수동 툴팁 만들기 : 기정보 등록 후 툴팁 미리 만들어놓을때 사용 */
		this.preShow = function(code, type) {
			var key = getTooltipKey(code, type);
			if (key && $.isPlainObject(cache[key]) && cache[key].preData === 1) {
				setTooltip(code, type, true);
			}
		};

		/* 레이어 왼쪽 좌표 강제 보정 */
		this.fixOffsetLeft = 0;

		/* 레이어의 부모 노드 리턴 (data-??? 형태로 된 경우에만 적용됨 onmouseover="???.show()" 형태는 안된다) */
		var anchors = [];
		this.getAnchor = function() {
			return anchors.length == 1 ? anchors[0] : null;
		};

		this.resume = function() {
			if (!possibility) {
				possibility = true;
				if (lastTooltip) this.show(lastTooltip[0], lastTooltip[1], lastTooltip[2], lastTooltip[3]);
			}
		};

		this.pause = function() {
			if (possibility) {
				possibility = false;
				this.hide();
			}
		};

		/* [id=siteDbCategoryLayer] => data-site-category-code 속성에 대해 툴팁 요청 */
		registerShowHideAttribute(id, attribute, site, this.show, this.hide, anchors);
	};

	var trim = function(str) {
		if (typeof(str) == 'string' || typeof(str) == 'number') {
			str = $.trim(str);
			if (str.length > 0) return str;
		}
		return null;
	};

	var inArray = function(array, value) {
		if ($.isArray(array) && array.length > 0) {
			for (var i = 0; i < array.length; i++) {
				if (array[i] == value) return i;
			}
		}
		return -1;
	};

	/* AJAX로 받은 데이터의 형식 분석 XML, JSON, TEXT/HTML */
	var getIntelligentReceivedData = function(data) {
		if (typeof(data) == 'string') {
			if ((/<div\s+id\s*=\s*\"err404\"/).test(data)) {
				return { data: false, type: 'error' };
			} else if ((/\shref\s*=\s*\"http:\/\/www\.inven\.co\.kr\/common\/error\/lib\/style\/common\.css(\?|\")/i).test(data)) {
				return { data: false, type: 'error' };
			}
			if ((/^\{.+\}$/m).test($.trim(data)) || (/^\[.+\]$/m).test($.trim(data))) {
				try { return { data: $.parseJSON(data), type: 'json' }; } catch(e) {}
				try { return { data: eval('(['+data+'])[0]'), type: 'json' }; } catch(e) {}
			}
			if ((/^\s*<\?xml\s+[^?>]+\?>/).test(data)) {
				try { return { data: $.parseXML(data), type: 'xml' }; } catch(e) {}
			}
			return { data: data, type: 'text' };
		} else if (typeof(data) == 'object') {
			if (typeof(data.childNodes) == 'object' && (typeof(data.getElementsByTagName) == 'function' || typeof(data.getElementsByTagName) == 'unknown')) {
				return { data: data, type: 'xml' };
			} else {
				return { data: data, type: 'json' };
			}
		} else {
			try { return { data: String(data), type: 'text' }; } catch(e) {}
			return { data: false, type: 'error' };
		}
	};

	/* 툴팁용 XML 데이터를 Array 데이터로 변환 */
	var convertXML2Array = function(xml) {
		xml = xml.getElementsByTagName("resultdata");
		if (xml.length > 0) {
			xml = $(xml[0]);
			var config = {
				code: $.trim(xml.attr('code')),
				type: $.trim(xml.attr('type')),
				colon: xml.attr('colon') || ''
			};
			var parser = function(node) {
				var result = {};
				node.children().each(function() {
					var item = $(this);
					var one = {
						type: trim(item.attr('type')) || 'text',
						caption: trim(item.attr('caption')) || ''
					};
					if (config.colon.length > 0 && one.caption.length > 0 && !item.attr('nocolon')) one.caption += config.colon;
					if (one.type == 'list') {
						one.list = [];
						item.children().each(function(i) {
							one.list.push($.trim($(this).text()));
						});
					} else if (one.type == 'group') {
						one.value = parser(item);
					} else {
						one.value = $.trim(item.text());
					}
					result[this.tagName] = one;
				});
				return result;
			};
			return parser(xml);
		} else {
			return false;
		}
	};

	/* 툴팁용 Array 데이터를 HTML로 변환 */
	var convertArray2HTML = function(array) {
		if (($.isArray(array) || $.isPlainObject(array)) && !$.isEmptyObject(array)) {
			var html = '';
			for (var k in array) {
				var v = array[k];
				var className = ' class="'+k+'"';
				html += '<dl'+className+'>';
				if (v.type != 'group') className = '';
				html += '<dt'+className+'>'+v.caption+'</dt>';
				var ddHtml = '';
				if (v.type == 'list') {
					ddHtml += '<ul>';
					if ($.isArray(v.list) && v.list.length > 0) {
						for (var i = 0; i < v.list.length; i++) {
							ddHtml += '<li>'+v.list[i]+'</li>';
						}
					} else {
						className = className == '' ? ' class="empty"' : (className.substr(0, className.length - 1)+' empty"');
					}
					ddHtml += '</ul>';
				} else if (v.type == 'group') {
					var html2 = convertArray2HTML(v.value);
					if (html2) ddHtml += html2;
				} else if (v.type == 'image') {
					ddHtml += '<img src="'+v.value+'" />';
				} else if (v.value) {
					ddHtml += v.value;
				}
				html += '<dd'+className+'>'+ddHtml+'</dd></dl>\n';
			}
			return html;
		} else {
			return false;
		}
	};

	/* [id=siteDbCategoryLayer] => data-site-category-code 속성에 대해 툴팁 요청 */
	var registerShowHideAttribute = function(id, attribute, site, show, hide, anchors) {
		if (id) {
			var attrs = {};
			if (attribute) {
				attribute = attribute.toLowerCase();
				if ((/^[a-z][0-9a-z\-]*$/).test(attribute) && attribute.indexOf('on') !== 0) {
					if (attribute.indexOf('-') == -1 && attribute != 'rel') {
						var testElements = [ 'div', 'a', 'input', 'form', 'img' ];
						for (var i = 0; i < testElements.length; i++) {
							var test = document.createElement(testElements[i]);
							if (test) {
								if (test[attribute] !== undefined) {
									attribute = null;
									break;
								} else {
									for (var k in test) {
										if (typeof(k) == 'string' && k.toLowerCase() == attribute) {
											attribute = null;
											break;
										}
									}
									if (!attribute) break;
								}
							}
						}
					}
					if (attribute) attrs[attribute] = true;
				}
			}
			attribute = (/^(.+)Db(.+)Layer$/).exec(id);
			if (attribute) {
				attribute[2] = attribute[2].toLowerCase();
				attrs['data-'+attribute[1].toLowerCase()+'-'+attribute[2]+'-code'] = true;
				for (var s in siteDirs) {
					if (site == s || site == siteDirs[s]) {
						attrs['data-'+s.toLowerCase()+'-'+attribute[2]+'-code'] = true;
						attrs['data-'+siteDirs[s].toLowerCase()+'-'+attribute[2]+'-code'] = true;
					}
				}
			}
			var processAttr = function(code) {
				var type = null, edata = null;
				if ((/\-code$/).test(code)) {
					type = code.substr(0, code.length - 4)+'type';
					edata = code.substr(0, code.length - 4)+'edata';
				}
				$(document).on('pointerover pointermove pointerout', 'body ['+code+']', function(e) {
					if (e.originalEvent.pointerType === 'touch') {
						anchors.pop();
						hide();
					} else if (e.type == 'pointerover') {
						anchors[0] = $(this);
						show(this.getAttribute(code), type ? this.getAttribute(type) : null, null, edata ? this.getAttribute(edata) : null);
					} else if (e.type == 'pointermove') {
						if (tooltip && tooltipObject === self && values.key == getTooltipKey(this.getAttribute(code), type ? this.getAttribute(type) : null)) {
							setPosition();
						}
					} else {
						anchors.pop();
						hide();
					}
				});
			};
			for (var attr in attrs) {
				if (!showHideAttributes[attr]) {
					showHideAttributes[attr] = true;
					processAttr(attr);
				}
			}
		}
	};
})(INVEN);