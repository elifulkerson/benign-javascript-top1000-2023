(function(w, d, plugins) {
	if (!location.host.match(/^([\w\-]+)\.inven\.co\.kr$/)) {
		return;
	}
	if (window.NodeList && !NodeList.prototype.forEach) {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}
	w.INVEN = w.INVEN || {};
	var domain = RegExp.$1.toLowerCase(),
		site = INVEN.heatmapPlugin && INVEN.heatmapPlugin.coerceSite
			? INVEN.heatmapPlugin.coerceSite
			: (d.querySelector('meta[name="inven-site"]').getAttribute('content') || '').toLowerCase(),
		platform = domain === 'm' ? 'mobile' : 'pc',
		isPCSubPage = false,
		isMobileSubPage = false,
		isSiteBuilder = false,
		testMode = !!location.search.match(/([\?&])testmode=heatmap(&.+)?$/),
		sending = false,
		sendData = null,
		matchsMethod = Element.prototype.matches ? 'matches' : 'msMatchesSelector',
		isSubPageCapture = INVEN.heatmapPlugin && INVEN.heatmapPlugin.subPageCapture === true;

	if (platform === 'pc' && (w.__IS_MOBILE__ === true || d.documentElement.classList.contains('mobile'))) {
		platform = 'mobile';
	}
	if (platform === 'mobile') {
		if (site == '' && !location.pathname.match(/^\/\w+(\/?|\/index.php)$/)) {
			if (location.hostname === 'm.inven.co.kr') {
				site = 'webzine';
			} else {
				return;
			}
		}
		isMobileSubPage = w.__IS_MAIN__ === false || (w.__IS_MAIN__ !== true && location.pathname.replace(/\B\/|\/\B/g, '').split('/').length > 1);
	} else if (!w.INVEN || !INVEN.heatmapPlugin || !INVEN.heatmapPlugin.coerceMain) {
		isPCSubPage = !location.pathname.match(/^(\/?|\/index.php)$/) && ((!(INVEN.heatmapPlugin && INVEN.heatmapPlugin.coerceMainPath) || INVEN.heatmapPlugin.coerceMainPath !== location.pathname.replace(/\/+$/, '')));
	}

	if (!site) {
		return;
	}

	if (plugins && w.INVEN && INVEN.heatmapPlugin && INVEN.heatmapPlugin.uniquePath) {
		var section, fn, uniquePathPlugins = {};
		for (section in INVEN.heatmapPlugin.uniquePath) {
			if (typeof INVEN.heatmapPlugin.uniquePath[section] === 'object') {
				uniquePathPlugins = {};
				for (fn in INVEN.heatmapPlugin.uniquePath[section]) {
					if (INVEN.heatmapPlugin.uniquePath[section].hasOwnProperty(fn) && typeof INVEN.heatmapPlugin.uniquePath[section][fn] === 'function') {
						uniquePathPlugins[fn] = INVEN.heatmapPlugin.uniquePath[section][fn];
					}
				}
				for (fn in plugins.uniquePath[section]) {
					if (plugins.uniquePath[section].hasOwnProperty(fn) && typeof plugins.uniquePath[section][fn] === 'function') {
						uniquePathPlugins[fn] = plugins.uniquePath[section][fn];
					}
				}
				plugins.uniquePath[section] = uniquePathPlugins;
			}
		}
	}

	if (plugins && w.INVEN && INVEN.heatmapPlugin && INVEN.heatmapPlugin.domTarget) {
		plugins.domTarget = INVEN.heatmapPlugin.domTarget;
	}

	if (plugins && w.INVEN && INVEN.heatmapPlugin && INVEN.heatmapPlugin.ignoreTarget) {
		plugins.ignoreTarget = plugins.ignoreTarget.concat(INVEN.heatmapPlugin.ignoreTarget);
	}

	/**
	 * css 타입의 클래스 셀렉터 만들기
	 * @param {HTMLElement} el
	 * @returns {string}
	 */
	function getCssTypeClass(el) {
		var cssClass = el.className.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '.');
		return cssClass ? (el.nodeName.toLowerCase() + '.' + cssClass) : '';
	}
	
	/**
	 * 자식 노드에서 해당 선택자와 동일한 선택자를 갖는 요소들
	 * @param {HTMLElement} parent
	 * @param {string} tag
	 * @returns {[]|NodeListOf<HTMLElementTagNameMap[string]>|NodeListOf<Element>|NodeListOf<SVGElementTagNameMap[string]>}
	 */
	function childClassSelector(parent, tag) {
		try {
			if (false) {
				return parent.querySelectorAll(':scope > ' + tag);
			} else {
				var nodes = [];
				[].slice.call(parent.children).forEach(function(el) {
					if (el.nodeName.toLowerCase() === tag) {
						nodes.push(el);
					}
				});
				return nodes;
			}
		} catch (e) {
			throw e;
		}
	}
	
	/**
	 * 해당 요소의 nth-of-type 구하기
	 * @param {HTMLElement} el
	 * @returns {string}
	 */
	function nthOfType(el) {
		var children = el.parentElement.children,
			tagName = el.nodeName,
			cls = getCssTypeClass(el),
			i = 0, len = children.length,
			nth = 0, child;
		
		for (; i < len; i++) {
			child = children[i];
			if (child.nodeName === tagName) {
				nth += 1;
				if (child === el) {
					break;
				}
			}
		}
		return nth ? ((cls ? cls : tagName.toLowerCase()) + ':nth-of-type(' + nth + ')') : '';
	}
	
	/**
	 * 요소에 클릭 이벤트가 있는지 체크
	 * @param {HTMLElement} el
	 * @returns {boolean}
	 */
	function hasClickEvent(el) {
		try {
			if (typeof el.onclick === 'function') {
				return true;
			}
			if (typeof w.getEventListeners === 'function') {
				return getEventListeners(el).hasOwnProperty('click');
			}
			return ($._data(el, 'events') || {}).hasOwnProperty('click');
		} catch (e) {
			return false;
		}
	}
	
	/**
	 * URL Safe Base64 Encode
	 * @param {string} str
	 * @returns {string}
	 */
	function safeBase64Encode(str) {
		if (typeof window.btoa === 'function') {
			str = btoa(str);
		} else {
			var ascii = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
				len = str.length - 1,
				i = -1,
				b64 = '',
				code = '';
			while (i < len) {
				code = str.charCodeAt(++i) << 16 | str.charCodeAt(++i) << 8 | str.charCodeAt(++i);
				b64 += ascii[(code >>> 18) & 63] + ascii[(code >>> 12) & 63] + ascii[(code >>> 6) & 63] + ascii[code & 63];
			}
			
			var pads = str.length % 3;
			if (pads > 0) {
				b64 = b64.slice(0, pads - 3);
				while (b64.length % 4 !== 0) {
					b64 += '=';
				}
			}
			str = b64;
		}
		return str
			.replace(/\+/g, '-')
			.replace(/\//g, '_')
			.replace(/\=+$/, '');
	}
	
	/**
	 * URL Safe Base64 Decode
	 * @param str
	 * @returns {string}
	 */
	function safeBase64Decode(str) {
		if (typeof w.atob === 'function') {
			var pad = str.length % 4;
			if (pad) {
				str += Array(5 - (pad)).join('=');
			}
			return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
		}
		return '';
	}

	/**
	 * 해당 요소를 건너뛸 것인지 검사
	 * @param elem
	 * @param selector
	 * @returns bool
	 */
	function isSkipTarget(path, domTarget, ignoreTarget) {
		if (Array.isArray(domTarget)) {
			var isValidTarget = path.slice(0, -1).reverse().some(function(elem) {
				return domTarget.some(function(selector) {
					return elem[matchsMethod](selector);
				});
			});
			if (!isValidTarget) {
				return true;
			}
		}
		return ignoreTarget.some(function(oriSelectors) {
			var selectors = oriSelectors.slice(0);
			if (!path[0][matchsMethod](selectors.pop())) {
				return false;
			}
			var selector = selectors.shift();
			if (path.length > 2) {
				for (var i = path.length - 2; i > 0; i--) {
					if (!selector) {
						return true;
					}
					if (path[i][matchsMethod](selector)) {
						selector = selectors.shift();
					}
				}
			}
			return !selector;
		});
	}
	
	/**
	 * 데이터 전송
	 * @param {object} data
	 */
	function send(data) {
		// if (!testMode) {
		// 	sending = true;
		// }
		try {
			if (!!navigator.sendBeacon && typeof navigator.sendBeacon === 'function') {
				navigator.sendBeacon('//www.inven.co.kr/common/module/heatmap/', JSON.stringify(data));
			} else if (!w.XDomainRequest) {
				var xhr = new XMLHttpRequest();
				xhr.open('POST', '//www.inven.co.kr/common/module/heatmap/', false);
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send(JSON.stringify(data));
			} else {
				var xdr = new w.XDomainRequest();
				xdr.timeout = 2000;
				xdr.open('POST', '//www.inven.co.kr/common/module/heatmap/', false);
				xdr.send(JSON.stringify(data));
			}
		} catch (e) {
			console.log(e);
		}
	}

	function groupProcess(el, uniquePath) {
		let group = false;
		if (el.matches('[data-heatmap-group][data-heatmap-group-target]')) {
			group = el.getAttribute('data-heatmap-group');
			let target = el.getAttribute('data-heatmap-group-target');
			if (group == 'module' && target != 'self') {
				const regexp = new RegExp(`((?:\\w+)?#${el.id}(?:[^\\w ]+[^ ]+)?\\s+.+\(${target.replace(/(?=\.)/, '\\')})(?:[^\\w ]+[^ ]+)?)\\s+.+`, 'i');
				uniquePath = uniquePath.replace(regexp, '$1');
			} else {
				uniquePath = `#${el.id}[data-heatmap-group-target="${target}"]`;
			}
		}
		return {uniquePath, group};
	}
	
	var prepareDom = function() {
		var ibuilderSectionsW100 = d.querySelectorAll('.ib_box.W100'),
			ibuilderSectionsVhalf = d.querySelectorAll('.ib_box.V_harf .verticalWrap'),
			/**
			 *
			 * @param {HTMLElement} elem
			 */
			fn = function(elem) {
				var titleSection = elem.querySelector('div.title.section'),
					title = '';
				if (titleSection) {
					title = titleSection.id.trim();
					if (title) {
						elem.id = safeBase64Encode(encodeURIComponent(title));
					}
				}
			};
		
		if (ibuilderSectionsW100.length) {
			if (typeof ibuilderSectionsW100.forEach === 'function') {
				ibuilderSectionsW100.forEach(fn);
			} else {
				Array.prototype.forEach.call(ibuilderSectionsW100, fn);
			}
		}
		
		if (ibuilderSectionsVhalf.length) {
			if (typeof ibuilderSectionsVhalf.forEach === 'function') {
				ibuilderSectionsVhalf.forEach(fn);
			} else {
				Array.prototype.forEach.call(ibuilderSectionsVhalf, fn);
			}
		}
		
		if (d.querySelector('body.styler-community') || d.querySelector('body.site-builder') || (INVEN.heatmapPlugin && INVEN.heatmapPlugin.coerceSiteBuilder)) {
			isSiteBuilder = true;
		}
	};
	
	if (d.readyState === 'complete' || d.readyState === 'interactive') {
		setTimeout(prepareDom, 1);
	} else {
		d.addEventListener('DOMContentLoaded', prepareDom);
	}
	
	/* ----------------------------------------------------------------------------------------------------------------
	 * 클릭 이벤트 캡쳐
	 * ------------------------------------------------------------------------------------------------------------- */
	d.addEventListener('click', function(e) {
		try {
			// if (sending) {
			// 	return;
			// }
			if (!e || !e.target) {
				return;
			}
			if (e.screenX === 0 && e.screenY === 0) {
				return;
			}
			if (testMode) {
				e.preventDefault();
			}
			var target = e.target,
				path = [],
				tag = '';
			while (target) {
				tag = target.nodeName;
				if (target &&
					(
						tag === 'A' || tag === 'AREA' || tag === 'BUTTON' ||
						(tag === 'INPUT' && ['submit', 'button'].indexOf(target.getAttribute('type').toLowerCase()) > -1) ||
						hasClickEvent(target)
					)
				) {
					break;
				}
				target = target.parentElement;
			}
			if (target) {
				path.push(target);
				while (target) {
					target = target.parentElement;
					if (!target) {
						break;
					}
					path.push(target);
					// if (target.id && target.id.toLowerCase().match(/$[\w]+left$/)) {
					// 	// left menu
					// }
					if (target.nodeName === 'BODY') {
						break;
					}
				}
				//console.log(path);
				if (isSkipTarget(path, plugins.domTarget, plugins.ignoreTarget)) {
					return;
				}
			}

			if (path.length) {
				try {
					var el, parent, cls, nodeName,
						uniquePath = '', uninueCount = 0,
						oriPath = '',
						groupInfo = false,
						toMain = false,
						isSubpage = platform == 'pc' ? isPCSubPage : isMobileSubPage,
						i = 0, isVirtual = false, useSelf = false;
					path = path.reverse();
					el = path.pop();
					while (el) {
						parent = el.parentElement;
						if (!parent) {
							return;
						}
						nodeName = el.nodeName.toLowerCase();
						isVirtual = isVirtual || 'heatmapVirtual' in el.dataset;
						useSelf = i === 0 ? 'heatmapSelf' in el.dataset : useSelf;
						if (el.id && !el.id.match(/^module_\d+_\d+_\d+$/) && !el.id.match(/^swiper\-wrapper\-/)) {
							cls = getCssTypeClass(el);
							uniquePath = nodeName + '#' + el.id + (cls ? cls.replace(/^[\w+\-]+/, '') : '') + ' > ' + uniquePath;
							groupInfo = groupProcess(el, uniquePath);
							if (groupInfo.group !== false) {
								uniquePath = groupInfo.uniquePath;
								toMain = groupInfo.group == 'page';
								break;
							}
						} else if (parent.childElementCount > 1) {
							cls = getCssTypeClass(el);
							if (cls && childClassSelector(parent, nodeName).length === 1) {
								uniquePath = cls + ' > ' + uniquePath;
							} else {
								uniquePath = nthOfType(el) + ' > ' + uniquePath;
							}
						} else if (el.className) {
							uniquePath = getCssTypeClass(el) + ' > ' + uniquePath;
						} else {
							uniquePath = nodeName + ' > ' + uniquePath;
						}
						el = path.pop();
						i++;
					}
					if (!toMain && isPCSubPage && (uniquePath.match(/\.([\w+\-]+)Middle2?\s+>\s+([\w\-]+)#\1Main/i) || uniquePath.match(/div(#[\w\-]+Body)(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+div(#[\w\-]+)?(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+section(#[\w\-]+)?(\.[\w\-]+)*?\.commu-content(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+article(#[\w\-]+)?(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+section(#[\w\-]+)?(\.[\w\-]+)*?\.commu-center(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?/i))) {
						return;
					}
					if (platform === 'mobile') {
						if (uniquePath.match(/^(.+\.m_viewOne(\.[\w+\-]+)*\s.+?[\w\-]+(\.[\w\-]+)*\.ib_box(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?).+?\s+section(#[\w\-]+)?(\.[\w\-]+)*?\.(tab)(\.[\w\-]+)*.+?\s+ul(#[\w\-]+)?(\.[\w\-]+)*\.tab(\.[\w\-]+)*\s+>\s+li(\#[\w\-]+)?(\.[\w\-]+)*\s+/)) {
							return;
						}
						if (!toMain && isMobileSubPage && !isSubPageCapture) {
							if (groupInfo.group === false) {
								if (!uniquePath.includes('#mobileHeadline') && !uniquePath.includes('#sideMenuWrap')) {
									return;
								}
							} else {
								const target = d.querySelector(uniquePath);
								if (!target.closest('#mobileHeadline') && !target.closest('#sideMenuWrap')) {
									return;
								}
							}
						}
					}
					if (testMode) {
						console.log(uniquePath.replace(/\s+>\s+$/, ''));
					}
					uniquePath = uniquePath.replace(/\s+>\s+$/, '');
					oriPath = uniquePath;
					
					if (typeof plugins === 'object' && !!plugins && typeof plugins.uniquePath === 'object' && !!plugins.uniquePath) {
						uniquePath = plugins.uniquePath.run(platform, uniquePath, {isSiteBuilder, useSelf});
					}
					
					if (uniquePath === false) {
						if (testMode) {
							console.log('skip count : \.' + oriPath);
						}
						return;
					}
					
					uninueCount = d.querySelectorAll(uniquePath).length;
					if (testMode) {
						console.log(safeBase64Decode(safeBase64Encode(uniquePath)));
						console.log(uninueCount);
					}

					if (uninueCount === 1 || isVirtual || plugins.duplicateElement.run(platform, uniquePath)) {
						send({_d: false, _t: Math.floor((new Date()).getTime() / 1000), site: site, platform: platform, _k: safeBase64Encode(uniquePath), _s: toMain ? false : isSubpage, _r: isSiteBuilder });
					} else {
						send({_d: true, _t: Math.floor((new Date()).getTime() / 1000), site: site, platform: platform, _k: safeBase64Encode(uniquePath), _s: toMain ? false : isSubpage, _r: isSiteBuilder, _u: safeBase64Encode(oriPath)});
					}
				} catch (e) {
					console.log(e);
				}
			}
		} catch (e) {
			console.log(e);
		}
	});
})(window, document, {
	uniquePath: {
		run: function(platform, path, option) {
			if (platform !== 'pc' && platform !== 'mobile') {
				return path;
			}
			if (platform === 'pc' && option && typeof option === 'object' && option.hasOwnProperty('isSiteBuilder') && option.isSiteBuilder === true) {
				platform = 'pc_sitebuilder';
			}
			var fn, order, section, runEntry = {1: 'common', 2: platform, 3: 'final'},
				replacePath = path, useSelf = option && option.useSelf === true;
			for (order in runEntry) {
				section = runEntry[order];
				if (!this.hasOwnProperty(section) || (section !== 'final' && replacePath !== path)) {
					continue;
				}
				path = replacePath;
				for (fn in this[section]) {
					if (typeof this[section][fn] === 'function') {
						if (useSelf && section === 'final' && fn === 'parentDivTag') {
							continue;
						}
						replacePath = this[section][fn](path);
						if (replacePath === false) {
							return false;
						}
						if (section !== 'final' && replacePath !== path) {
							break;
						}
						path = replacePath;
					}
				}
			}
			return replacePath;
		},
		common: {
			/**
			 * 유튜브 모아보기 모듈
			 * @param {string} path
			 * @returns {string}
			 */
			ibuilderYoutubeModule: function(path) {
				return path.replace(/^(.+?\sdiv(?:#[\w\-]+)?(?:\.[\w\-]+)*\.(ibuilderModules|m_viewOne)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+.+?\s+(div|section)(#module\-youtube-movie(\-list)?)).*$/i, '$1');
			}
		},
		pc: {
			/**
			 * 아이빌더 모듈
			 * @param {string} path
			 * @return {string}
			 */
			ibuilderModule: function(path) {
				return path.replace(/^(.+?\.ibuilderModules(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+.+?[\w+\-]+(\.[\w+\-]+)*\.section(\.[\w+\-]+)*(:nth\-of\-type\(\d+\))?)\s.+$/, '$1');
			},
			/**
			 * 공통영역 (commonPart)
			 * @param {string} path
			 * @return {string}
			 */
			commonPart: function(path) {
				return path.replace(/([\w\-]+#commonpart_([\w\-]+)(\.[\w\-]+)*\.commonpart(\.[\w\-]+)*)(\s+>\s+.+)?$/, '$1');
			},
			/**
			 * 좌측 메뉴의 공지 파트
			 * @param {string} path
			 * @return {string}
			 */
			leftSectionNotice: function(path) {
				return path.replace(/^(.+#module(\d+)_notice(\.[\w\-]+)*)\s+>\s+.+$/, '$1');
			},
			/**
			 * 확장된 우측 메뉴 영역
			 * @param {string} path
			 * @return {string}
			 */
			rightSectionMenuWide: function(path) {
				return path.replace(/([\w\-]+#([\w+\-]+)Right(\.[\w+\-]+)*\s+>\s+[\w\-]+#(\2)RightMenu(\.[\w+\-]+)*\s+>\s+[\w+\-]+(?:\.[\w+\-]+)*\.menuGroups\.wide(?:\.[\w+\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+(?:[\w\-]+#[\w+\-]+(\.[\w+\-]+)*|[\w+\-]+(?:\.[\w+\-]+)*:nth\-of\-type\(\d+\)|[\w+\-]+(?:\.[\w+\-]+)*))(?:(\s+>\s+[\w+\-]+\.tab_list)(?:[^>\s])*(\s+>\s+ul)(?:[^:])*(:nth\-of\-type\(\d+\)))?.*/i, '$1$8$9$10');
			},
			/**
			 * 우측 메뉴 영역
			 * @param {string} path
			 * @return {string}
			 */
			rightSectionMenu: function(path) {
				return path.replace(/([\w\-]+#([\w+\-]+)Right(\.[\w+\-]+)*\s+>\s+[\w\-]+#(\2)RightMenu(\.[\w+\-]+)*\s+>\s+[\w+\-]+(?:\.[\w+\-]+)*\.menuGroups(?:\.[\w+\-]+)*(:nth\-of\-type\(\d+\))?\s+>\s+(?:[\w\-]+#[\w+\-]+(\.[\w+\-]+)*|[\w+\-]+(?:\.[\w+\-]+)*:nth\-of\-type\(\d+\)|[\w+\-]+(?:\.[\w+\-]+)*)).*/i, '$1');
			}
		},
		/**
		 * PC 리뉴얼 레이아웃 (사이트빌더 대응)
		 */
		pc_sitebuilder: {
			/**
			 * 아이빌더 탭 모듈 - 탭메뉴 (ul.tab-menu)
			 * @param {string} path
			 * @return {string}
			 */
			ibuilder_tab_menu: function(path) {
				return path.replace(/^(.+?\.ibuilderModules(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+section(?:#[\w\-]+)?(?:\.[\w\-]+)*\.list-wrap(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+article(?:#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+[\w]+((#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+ul(?:#[\w\-]+)?(?:\.[\w\-]+)*\.tab\-menu)).+$/, '$1');
			},
			/**
			 * 아이빌더 탭 모듈 - 탭메뉴 (ul.tabContens)
			 * @param {string} path
			 * @return {string}
			 */
			ibuilder_tabContents: function(path) {
				return path.replace(/^(.+?\.ibuilderModules(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+section(?:#[\w\-]+)?(?:\.[\w\-]+)*\.list-wrap(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+article(?:#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+[\w]+((#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+ul(?:#[\w\-]+)?(?:\.[\w\-]+)*\.tabContents(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?)\s+>\s+li(?:\.[\w\-]+)*\.tab_contents)(?:\.tabhide)?(?:\.[\w\-]+)*((?::nth\-of\-type\(\d+\))?).+$/i, '$1$4');
			},
			/**
			 * 아이빌더 탭 모듈 - 탭메뉴 (.tab-menu-content)
			 * @param {string} path
			 * @return {string}
			 */
			 ibuilder_tab_menu_content: function(path) {
				return path.replace(/^(.+?\.ibuilderModules(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+section(?:#[\w\-]+)?(?:\.[\w\-]+)*\.list-wrap(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+article(?:#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+[\w]*((?:ul|div)(?:#[\w\-]+)?(?:\.[\w\-]+)*\.tab\-menu\-content(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?)).+$/i, '$1');
			},
			/**
			 * 아이빌더 모듈
			 * @param {string} path
			 * @return {string}
			 */
			ibuilderModule: function(path) {
				return path.replace(/^(.+?\.ibuilderModules(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+section(?:#[\w\-]+)?(?:\.[\w\-]+)*\.list-wrap(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+article(?:#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+[\w]+(#[\w\-]+)?(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?).*$/, '$1');
			},
			/**
			 * 공통영역 (commonPart)
			 * @param {string} path
			 * @return {string}
			 */
			commonPart: function(path) {
				return path.replace(/([\w\-]+#commonpart_([\w\-]+)(\.[\w\-]+)*\.commonpart(\.[\w\-]+)*)(\s+>\s+.+)?$/, '$1');
			},
			/**
			 * 좌측 메뉴의 공지 파트
			 * @param {string} path
			 * @return {string}
			 */
			leftSectionNotice: function(path) {
				return path.replace(/^(.+#module(\d+)_notice(\.[\w\-]+)*)\s+>\s+.+$/, '$1');
			},
			/**
			 * 우측 트위치 방송 파트
			 * @param {string} path
			 * @return {string}
			 */
			rightSectionTwitch: function(path) {
				return path.replace(/([\w\-]+#([\w+\-]+)Right(\.[\w+\-]+)*\s+>\s+[\w\-]+#(\2)RightMenu(?:\.[\w+\-]+)*\s+>\s+.+?[\w\+](#broadcastSection)).+$/i, '$1');
			},
			/**
			 * 확장된 우측 메뉴 영역
			 * @param {string} path
			 * @return {string}
			 */
			rightSectionMenuWide: function(path) {
				return path.replace(/([\w\-]+#([\w+\-]+)Right(\.[\w+\-]+)*\s+>\s+[\w\-]+#(\2)RightMenu(?:\.[\w+\-]+)*\s+>\s+[\w+\-]+(?:#[\w\-]+)?(?:\.[\w\-]+)*\.(?:menuGroup|menu_group)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?)\s\>\s.*?(?:([\w\-]+(?:#[\w\-]+)?(?:\.[\w\-]+)*\.tab_list(?:\.[\w\-]+)?)(\s+>\s+ul)(?:[^:]+)*(:nth\-of\-type\(\d+\)))?.*/i, '$1 $5$6$7').replace(/\s+$/, '');
			},
		},
		mobile: {
			/**
			 * tab-1 모듈
			 * @param {string} path
			 * @return {string}
			 */
			tab_1_Module: function(path) {
				return path.replace(/^(.+\.m_viewOne(?:\.[\w\-]+)*\s.+?[\w\-]+(?:\.[\w\-]+)*\.ib_box(?:\.[\w\-]+)*(?::nth\-of\-type\(?:\d+\))?.+?\s+div(#[\w\-]+)?(?:\.[\w\-]+)*?(?:\.swipeWrap)(?:\.[\w\-]+)*(?::nth\-of\-type\(?:\d+\))?.+?\s+section(?:#[\w\-]+)?(?:\.[\w\-]+)*\.tabWarp(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?).+$/i, function($0, $1, $2) {
					if ($2.match(/^#bbs\d+$/i)) {
						return $1.replace($2, '');
					}
					return $1;
				});
			},
			/**
			 * list-hot-contents 모듈
			 * @param {string} path
			 * @return {string}
			 */
			list_hot_contents: function(path) {
				return path.replace(/^(?:.+\s)(section#[\w\-]+)?(?:\.[\w\-]+)*\.list-hot-contents(?:\.[\w\-]+)*?(?::nth\-of\-type\(?:\d+\))?.+ul(?:\.[\w\-]+)*?\.swiper\-slide(?:\.[\w\-]+)*(?::nth\-of\-type\((\d+)\))?.*$/i, function($0, $1, $2) {
					var tab = document.querySelector($1 + ' ul.swiper-slide:nth-of-type(' + $2 + ')').getAttribute('data-swiper-slide-index');
					return $1 + ' ul.swiper-slide[data-swiper-slide-index="' + tab + '"]';
				});
			},
			/**
			 * webzine-article-rank 모듈
			 * @param path
			 * @returns {string}
			 */
			webzineArticleRank: function(path) {
				return path.replace(/^(.+\.m_viewOne(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s.+?[\w\-]+(\.[\w\-]+)*\.ib_box(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?.+?\s+section(#[\w\-]+)?(\.[\w\-]+)*?\.webzine\-article\-rank(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?).*$/i, '$1');
			},
			/**
			 * 기타 아이빌더 모듈
			 * @param {string} path
			 * @return {string}
			 */
			ibuilderModule: function(path) {
				return path.replace(/^(.+\.m_viewOne(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s.+?[\w\-]+(?:\.[\w\-]+)*\.ib_box(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?)(.+?\s+)section(#[\w\-]+)?(\.[\w\-]+)*?\.(list\-bbs([\w\-]+)?|focus(\-[\w\-]+)|input\-url|mlink\-issue\-three|list\-hot\-contents|list\-eventgroup|mo\-board\-list)(\.[\w\-]+)*.+$/i, function(match, p1, p2, p3) {
					return p1 + (p3 ? p2 + p3 : '');
				});
			},
			/**
			 * 사이드메뉴 히스토리 섹션
			 * @param {string} path
			 * @return {string}
			 */
			sideMenuHistory: function(path) {
				return path.replace(/^(.+#bbsHistoryMenu(\.[\w\-]+)*).+$/i, '$1');
			},
			/**
			 * 코스프레 슬라이드 모듈
			 * @param path
			 * @returns {string}
			 */
			cosplaySlide: function(path) {
				return path.replace(/^(.+\.home-module-cosplay(\.[\w\-]+)*).+$/i, '$1')
			},
			/**
			 * 게임 평점 모듈
			 * @param path
			 * @returns {string}
			 */
			gamePoint: function(path) {
				return path.replace(/^(.+\.module-game-point(\.[\w\-]+)*).+$/i, '$1')
			},
			/**
			 * 투표모듈
			 * @param path
			 * @returns {string}
			 */
			pollListModule: function(path) {
				return path.replace(/^(.+\.home-module-poll(\.[\w\-]+)*).+$/i, '$1')
			},
			/**
			 * 인챈트 크리에이터 모듈
			 * @param path
			 * @returns {string}
			 */
			ehchantCreator: function(path) {
				return path.replace(/^(.+\.module-enchant-creator(\.[\w\-]+)*).+$/i, '$1');
			},
			/**
			 * 모바일 레프트 메뉴
			 * @param path
			 * @returns {string|boolean}
			 */
			leftMenus: function(path) {
				if (path.includes('#sideMenuWrap')) {
					if (path.includes('#section-favorites')) {
						return path.includes('#mBookmarkList') ? '#section-favorites' : false;
					}
					if (/\.menuSideCommunity\.menuList.+?a\.menuMinPlus\.\w+$/.test(path)) {
						return false;
					}
				}
				return path;
			}
		},
		final: {
			/**
			 * a 태그 부모 li 찾기
			 * @param {string} path
			 * @return {string}
			 */
			parentListTag: function(path) {
				return path.replace(/^(.+\s+li(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?)\s+>\s+(.*?\s+>\s+)?a(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?$/i, '$1');
			},
			/**
			 * input, button 의 부모 div|li 찾기
			 * @param {string} path
			 * @return {string}
			 */
			parentDivTag: function(path) {
				return path.replace(/^(.+(div|li)(#[\w\-]+)?(\.[\w\-]+)*(:nth\-of\-type\(\d+\))?)\s+.+\s(button|input).*$/i, '$1');
			},
			/**
			 * id 정리
			 * @param {string} path
			 * @return {string}
			 */
			idSimplify: function(path) {
				return path.replace(/[\w\-]+(#[\w\-]+)(\.[\w\-]+)*/ig, '$1');
			},
			/**
			 * nth-of-type 정리
			 * @param {string} path
			 * @return {string}
			 */
			nthOfType: function(path) {
				return path.replace(/([\w\-]+)(\.[\w\-]+)+(:nth\-of\-type\(\d+\))/ig, '$1$3');
			},
			/**
			 * 마지막 ID 가 있는 곳으로 셀렉터 줄이기
			 * @param {string} path
			 * @return {string}
			 */
			recudeToLastId: function(path) {
				return path.replace(/^(.+\s+>\s+)(#[\w\-]+?(\s+>\s+.*)?)$/i, '$2');
			},
			/**
			 * body 태그는 body만 남기기
			 * @param {string} path
			 * @return {string}
			 */
			makePureBody: function(path) {
				return path.replace(/^body([^\w]+[^ ]+)/i, 'body');
			}
		}
	},
	/**
	 * 최종 결과에 중복이 될 때, 패스해도 되는지 체크
	 */
	duplicateElement: {
		run: function(platform, uniquePath) {
			if (platform === 'mobile' || platform === 'pc') {
				var elements = document.querySelectorAll(uniquePath);
				for (var fn in this[platform]) {
					if (typeof this[platform][fn] === 'function') {
						if (this[platform][fn](elements, uniquePath)){
							return true;
						}
					}
				}
			}
			return false;
		},
		mobile: {
			/**
			 * Swiper 로 복제되는 탭 컨텐츠 체크
			 * @param {NodeList} elements
			 * @param {string} uniquePath
			 * @returns {boolean}
			 */
			tab_1_Module: function(elements, uniquePath) {
				var isTabs = [];
				elements.forEach(function(e) {
					if (e.nodeName === 'SECTION') {
						if (e.className.match(/\stabWarp\s/i) && e.className.match(/\stab-content-id-/i)) {
							isTabs.push('ok');
							return;
						}
					}
					isTabs.push('no');
				});
				
				return (isTabs.indexOf('no') === -1);
			},
			/**
			 * 새로운 모바일 홈 (V2) 탭
			 * @param {NodeList} elements
			 * @param {string} uniquePath
			 * @returns {boolean}
			 */
			mobileV2TabContent: function(elements, uniquePath) {
				var found = 0;
				document.querySelectorAll('.mo-module-content > .swiper-slide-duplicate').forEach(function(el) {
					found += el.querySelectorAll(uniquePath).length;
				});
				return (elements.length - found) === 1;
			},
			/**
			 * list-hot-content 모듈
			 * @param {NodeList} elements
			 * @param {string} uniquePath
			 * @returns {boolean}
			 */
			list_hot_contents: function(elements, uniquePath) {
				if (uniquePath.match(/ul\.swiper\-slide\[data\-swiper\-slide\-index=\"\d+\"\]/)) {
					return elements.length === 2
				}
				return false;
			}
		},
		pc: {
		}
	},
	/**
	 * 기준이 되는 parent 설정
	 */
	domTarget : null,
	/**
	 * 제외시킬 요소 설정
	 */
	ignoreTarget : [['#comHeadQuickLink', 'div.backdrop'], ['#comHeadQuickLink', 'div.content','button.quicklink_close'], ['[data-heatmap-skip]']]
});