((INVEN, factory) => {
    window.INVEN = INVEN || {};
	if (!window.INVEN.hasOwnProperty('quickLink') || typeof window.INVEN.quickLink !== 'object' || window.INVEN.quickLink === null) {
		window.INVEN.quickLink = factory();
	} else if (!window.INVEN.quickLink.hasOwnProperty('toggle')) {
		window.INVEN.quickLink = factory();
	}
})(window.INVEN, () => {
	let quicklink, content, closeBtn;
	let handleCalled = false, loadCalled = false;
	let channelIconVersion = '';

	const isDocumentReady = () => [ 'interactive', 'complete' ].indexOf(document.readyState) > -1;
	const isShown = () => quicklink && quicklink.classList.contains('show');

	const load = () => {
		if (!quicklink) {
			if (isDocumentReady()) {
				quicklink = createElement('div', { id: 'comHeadQuickLink' }, document.body);
				content = createElement('div', {
					className: 'content loading',
					innerHTML: `<div class="quickHead"><h1 class="hidden">INVEN 퀵링크</h1></div><div class="logo_svg spin-opacity loading"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 34.5" xml:space="preserve"><g class="gr1"><path class="lo-spot dot" fill="#231F20" d="M0 0h7v7H0z"/><path class="w1 lo-i" fill="#231F20" d="M8.2 8.2h7v25.7h-7z"/></g><g class="gr2"><path class="w2 lo-n" d="m37 8.3.1 14.2L23.8 7.9l-4.5 1.5V34h6.5l-.1-14L39 34.5l4.5-1.6V8.3z"/></g><g class="gr3"><path class="w3 lo-v" fill="#231F20" d="M58.9 23.9 52.5 7.8l-7 1.6L56 34h5.4L71.8 9.4l-6.3-1.6z"/></g><g class="gr4"><path class="w4 lo-e" d="M80.6 28.6v-5.3h8.6v-5.1h-8.6v-4.6h9.6V8.3H73.8V34h16.9l1.1-5.4z"/></g><g class="gr5"><path class="w5 lo-n" d="m111.5 8.3.1 14.2L98.3 7.9l-4.5 1.5V34h6.5l-.1-14 13.4 14.5 4.4-1.6V8.3z"/></g></svg></div>`
				}, quicklink);
				closeBtn = createElement('button', { className: 'quicklink_close' }, content);
				if (typeof handleBase === 'function') handleBase();
				setTimeout(request, 100);
			} else if (!loadCalled) {
				loadCalled = true;
				$(document).ready(load);
			}
		}
	};

	const open = () => {
		if (!isShown() && (quicklink || isDocumentReady())) {
			load();
			if (quicklink.parentNode !== document.body) document.body.appendChild(quicklink);
			document.body.classList.remove('quicklink');
			document.body.style.setProperty('--ql-scrollbar-width', `${window.innerWidth - document.body.clientWidth}px`);
			document.body.classList.add('quicklink');
			quicklink.classList.add('show');
			$.ajax({
				type: "POST",
				url: "https://www.inven.co.kr/api/channels/c.php",
				timeout: 1000
			});
		}
    };

    const close = () => {
		if (quicklink && isShown()) {
			quicklink.classList.remove('show');
			document.body.classList.remove('quicklink');
			document.body.style.removeProperty('--ql-scrollbar-width');
			search.close();
		}
    };

	const toggle = () => isShown() ? close() : open();

	const createElement = (tagName, attributes, parent) => {
		let node = tagName instanceof HTMLElement ? tagName : document.createElement(tagName);
		if (typeof attributes === 'object' && attributes !== null) {
			if (attributes.hasOwnProperty('style')) {
				if (typeof attributes.style === 'string') {
					node.setAttribute('style', attributes.style);
				} else if (typeof attributes.style === 'object' && attributes.style !== null) {
					for (let k of attributes.style) {
						if (attributes.style.hasOwnProperty(k)) node.style[k] = attributes.style[k];
					}
				}
				delete(attributes.style);
			}
			for (let [k, v] of Object.entries(attributes)) {
				if (typeof k === 'string' && k.trim().length > 0 && attributes.hasOwnProperty(k)) {
					k = k.trim();
					if (k in node) {
						if (k.substring(0, 2) === 'on' && k.length > 2) {
							if (v === null || typeof v === 'function') {
								node[k] = v;
							} else if (typeof v === 'string') {
								node.setAttribute(k, v);
							}
						} else if (v === null || 'string|number|boolean'.indexOf(typeof v) > -1) {
							if (node[k] === null || 'string|number|boolean'.indexOf(typeof node[k]) > -1) {
								node[k] = v;
							}
						}
					} else if (v === null) {
						node.removeAttribute(k);
					} else if ('string|number|boolean'.indexOf(typeof v) > -1) {
						node.setAttribute(k, v);
					}
				}
			}
		}
		if (parent instanceof HTMLElement || parent instanceof DocumentFragment) parent.appendChild(node);
		return node;
	};

	const request = () => {
		let searchParams = new URLSearchParams(location.search);
		searchParams.set('mode', 'quicklink');
		fetch(`https://www.inven.co.kr/sitebuilder/common/?${searchParams.toString()}`, {
			credentials: 'include',
			mode: 'cors',
		}).then(response => {
			return response.text();
		}).then(html => {
			if (/comHeadQuickLink/.test(html)) {
				let newQuicklink = createElement('div', { innerHTML: html }, document.createDocumentFragment()).querySelector('#comHeadQuickLink');
				quicklink.style.visibility = 'hidden';
				quicklink.innerHTML = '';
				if (newQuicklink.hasAttribute('data-channel-icon-version')) {
					quicklink.setAttribute('data-channel-icon-version', newQuicklink.getAttribute('data-channel-icon-version'));
				}
				while (true) {
					let node = newQuicklink.firstElementChild;
					if (node) {
						quicklink.appendChild(node);
					} else {
						break;
					}
				}
				quicklink.style.visibility = '';
				if (typeof handleLoaded === 'function') handleLoaded();
			}
		});
	};

	let handleBase = () => {
		if (quicklink) {
			handleBase = null;
			quicklink.addEventListener('click', e => {
				if (e.target === quicklink) {
					close();
				} else if (closeBtn && e.target === closeBtn) {
					close();
				} else if (e.target.classList.contains('ba')) {
					close();
				}
			});
		}
	};

	let handleLoaded = () => {
		handleLoaded = null;
		content = quicklink.querySelector('div.content');
		closeBtn = quicklink.querySelector('button.quicklink_close');
		channelIconVersion = quicklink.hasAttribute('data-channel-icon-version') ? `?v=${quicklink.getAttribute('data-channel-icon-version')}` : '';

		if (typeof handleBase === 'function') handleBase();

		let $content = $(content).on('click', 'div.menu_selector button', function() {
			// 장르별 / 가나다순
			$content.find('div.menu_selector button').removeClass('active');
			this.classList.add('active');
			let div = $content.find('div.quickContents > div').addClass('hidden');
			if (this.classList.contains('genre')) {
				div.filter('.genre').removeClass('hidden');
			} else if (this.classList.contains('kanada')) {
				div.filter('.kanada').removeClass('hidden');
				$content.find('div.kanada div.topMenu button[quick-search-code="all"]').trigger('click');
			}
		}).on('click', 'div.kanada div.topMenu button[quick-search-code]', function() {
			// 가나다 - 초성 검색 버튼
			let kanada = $(quicklink).find('div.kanada');
			kanada.find('> div.topMenu button[quick-search-code].active').removeClass('active');
			kanada.find('> div:not(.topMenu)').addClass('hidden');
			kanada.find(`div.${this.getAttribute('quick-search-code')}`).removeClass('hidden');
			this.classList.add('active');
		});

		let banner = quicklink.querySelector('.quick-banner');
		let bannerBtn = quicklink.querySelector('.banner-switch .on-off-btn');
		if (bannerBtn) {
			bannerBtn.addEventListener('click', () => {
				bannerBtn.classList.toggle('off');
				if (banner) banner.classList.toggle('off');
			});
		}
		
		// 최근방문 하단 quick-banner02영역 - 파티 배너 랜덤 노출로 인해 추가
		quickBanner02 = document.querySelector('div.quick-banner02');
		if (quickBanner02) {
			let items = $(quickBanner02).find('a.banner02-item');
			let num = Math.floor(Math.random() * items.length);
			$(items[num]).show();
		}

		search.init();
	};

    const search = {
		listPane: null,
		inputForm: null,
		closeBttn: null,
		lastCall: null,
		lastXHR: null,
		selectSite: 0,
		result: $(),
		count: 0,
		cache: {},
		init: function() {
			let prevText = '';
			const searchBar = $(quicklink).find('div.h_searchBar');
			this.inputForm = searchBar.find('input[type="search"]');
			this.searchBtn = searchBar.find('button.submit');
			this.listPane = searchBar.find('div.search_result');
			this.closeBttn = searchBar.find('div.command > a.close');
			this.lastCall = new Date();
			this.inputForm.on({
				keydown: function(e) {
					// ↑: 38 ↓ : 40
					if (e.keyCode == 40 || e.keyCode == 38) {
						e.preventDefault();
                        let scrollpx = 0;
						search.result.removeClass('active');
						if (e.keyCode == 40) {
							if (search.count > search.selectSite) {
								search.result.eq(search.selectSite).addClass('active');
								search.selectSite++;
							} else if (search.count == search.selectSite) {
								search.result.eq(search.selectSite-1).addClass('active');
							}
						} else {
							if (search.selectSite == 0 || search.selectSite == 1) {
								if (search.selectSite) {
									search.result.eq(0).addClass('active');
								}
								scrollpx = 0;
							} else {
								search.selectSite--;
								search.result.eq(search.selectSite-1).addClass('active');
							}
						}
						scrollpx = Math.floor(search.selectSite)*30;
						if (scrollpx > 0) {
							search.listPane.find('ul').scrollTop(scrollpx-90);
						}
						return false;
					} else if (e.keyCode == 13) { // enter
						e.preventDefault();
						if (search.selectSite > 0) {
							let searchResult = $('div.search_result').find('ul > li');
							location.href = searchResult.eq(search.selectSite-1).find('a').attr('href');
						}
						return false;
					}
				},
				input: function(e) {
					// 검색
					let str = $.trim($(this).val());
					if (prevText != str) {
						prevText = str;
						if (search.lastXHR !== null) {
							search.lastXHR.abort();
							search.lastXHR = null;
						}
						let ul = search.listPane.find('ul');
						if (str.length) {
							if (search.cache.hasOwnProperty(str)) {
								search.listPane.prop('className', search.cache[str].className);
								ul.html(search.cache[str].ul);
								search.listPane.find('p').html(search.cache[str].p);
								search.update(true);
							} else {
								search.doSearch(str);
							}
						} else {
							search.listPane.removeClass('list show').find('ul').empty();
							search.update(true);
						}
					}
				},
				focus: function() {
					prevText = '';
				},
				blur: function() {
                    if (search.listPane.hasClass('nolist')) {
                        search.listPane.removeClass('list show nolist');
                        search.selectSite = 0;
                        search.listPane.find('ul').scrollTop(0);
                    }
				}
			});
			this.searchBtn.on('click', function(e) {
				e.preventDefault();
				search.inputForm.trigger('input');
			});
			this.listPane.on('mousedown mouseup click', 'a', function(e) {
				search.inputForm.focus();
				if (e.type != 'click') {
					e.preventDefault();
				}

			});
			this.closeBttn.on('click', function(e) {
				search.listPane.removeClass('show');
				e.preventDefault();
			});
			$('#h_searchBar_form').submit(function(e) {
				e.preventDefault();
				return false;
			});
		},
		close: function() {
			if (this.inputForm) {
				this.inputForm.val('').trigger('input');
			}
		},
		update: function(resetScroll) {
			let ul = this.listPane.find('ul');
			this.result = ul.find('> li');
			this.count = this.result.length;
			if (resetScroll) {
				this.selectSite = 0;
				ul.scrollTop(0);
			}
		},
		doSearch: function(str) {
			if (this.lastXHR !== null) {
				this.lastXHR.abort();
				this.lastXHR = null;
			}
			this.lastCall = new Date();
			this.lastXHR = $.ajax({
				type: 'POST',
				url: 'https://www.inven.co.kr/common/quicklink/search.ajax.php',
				dataType: 'json',
				data: { search: str, target: [ 'site' ], searchID: this.lastCall, maxLength: 20 },
				_keyword: str,
				success: this.onSuccess,
				error: this.onFail
			});
		},
		onSuccess: function(r) {
			search.lastXHR = null;
			let part, list, i, txt, data = r.data, ul, nolist = true;
			ul = search.listPane.removeClass('list show').find('ul').empty();
			if (r) {
				if (r.data && r.searchID) {
					if (r.searchID != search.lastCall) { return 0; }
					for (part in data) {
						if (!data.hasOwnProperty(part)) { continue; }
						list = data[part];
						if (list.length || typeof list.constructor == 'function') {
							for (i in list) {
								if (list.hasOwnProperty(i)) {
									if (nolist) { nolist = false; }
									txt = list[i];
									if (part == 'site') {
										ul.append(`<li class="site site-${i}"><a href="${txt.link}" title=""><img src="//static.inven.co.kr/image_2011/common/channel/icon_32x32_${txt.icon}.gif${channelIconVersion}" alt="${txt.name}">${txt.name}</a></li>`);
									}
								}
							}
							if (nolist) {
								search.listPane.removeClass('list').addClass('show nolist').find('p').text('추천 검색어가 없습니다.');
							}
						} else {
							search.listPane.removeClass('list').addClass('show nolist').find('p').text('추천 검색어가 없습니다.');
						}
					}
					if (ul.find('> li').length) {
						search.listPane.removeClass('nolist').addClass('show list');
					}
					if (this.hasOwnProperty('_keyword')) {
						search.cache[this._keyword] = {
							className: search.listPane.prop('className'),
							ul: ul.html(),
							p: search.listPane.find('p').html()
						};
					}
					search.update(true);
					return 1;
				} else {
					search.listPane.removeClass('list').addClass('show nolist').find('p').text('검색오류가 발생하였습니다.');
				}
			} else {
				search.listPane.removeClass('list').addClass('show nolist').find('p').text('검색오류가 발생하였습니다.');
			}
			search.update(true);
			return 0;
		},
		onFail: function(xhr, status) {
			search.lastXHR = null;
			if (status != 'abort') {
				search.listPane.removeClass('list').addClass('show nolist').find('p').text('검색오류가 발생하였습니다.');
				search.update(true);
			}
		}
	};

	$(document).ready(() => {
		quicklink = document.querySelector('#comHeadQuickLink');
		if (quicklink) {
			handleLoaded();
		}
		if ((new URLSearchParams(location.search)).get('ad-quicklink-open') === '1') {
			open();
		}
	});

	return {
		openQuickLink: toggle,
		openQuickLinkNew: toggle,
		isShown: isShown,
		toggle: toggle,
		open: open,
		close: close,
		load: load
    };
});