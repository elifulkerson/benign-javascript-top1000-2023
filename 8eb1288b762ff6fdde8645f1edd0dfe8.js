function Placeholder(i, p){
	if ('placeholder' in i){
		i.placeholder = p.innerHTML;
		p.style.display = 'none';

		this.native = true;

		return this;
	}

	this._hasFocus = false;
	this.i = i;
	this.p = p;
	var _this = this;
	mr.bind(i, 'focus', function(){_this.focus()});
	mr.bind(i, 'blur', function(){_this.blur()});
	this.toggle();

	function t(){
		if (!_this._hasFocus){
			_this.toggle();
		}
		setTimeout(t, 50);
	}
	setTimeout(t, 50);
}

Placeholder.prototype = {
	focus: function(){
		if (this.native){
			return;
		}
		this._hasFocus = true;
		this.toggle();
	},
	blur: function(){
		if (this.native){
			return;
		}
		this._hasFocus = false;
		this.toggle();
	},
	toggle: function(){
		if (this.native){
			return;
		}
		this.p.style.display = this.i.value || this._hasFocus ? 'none' : 'block';
	}
};

function rotateSlots(){}
mr.switchers = {okBigBlock:false,xhrAuth:1,footerBrand:false,refreshBannerOnFocus:0,refreshBannerOnAuthChange:1};mr.is_oil_update = true;mr.is_news_update = true;
			mr.news_updatables =["main","regional"];mr.is_weather_update = true;mr.UP_AD_TIMEOUT =600000;

		mr.domains =["mail.ru","inbox.ru","list.ru","bk.ru","xmail.ru","internet.ru"];
		mr.blockVersions ={"newsVersion":4,"mapsVersion":3,"trafficVersion":3,"quotationsVersion":4,"posterVersion":4,"scheduleVersion":2,"horoscopeVersion":6,"gamesVersion":6,"textBannerVersion":4,"socialOkVersion":3,"socialVersion":1,"liveVersion":1,"version_event":1,"version_currency":1,"updateVersion":3,"jsonRbVersion":1};

		mr.externalDomainsEnabled =false;

		mr.slidotype_id = '';
		mr.ajaxUrl = 'https:\/\/mail.ru?json=1&nano=1';mr._.CSRF = "f7dbf37d56044ef7b4da874783f7ee80";