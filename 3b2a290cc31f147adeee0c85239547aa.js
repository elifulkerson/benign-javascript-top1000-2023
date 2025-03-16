"use strict";


var ria_live_manager = {

	init: function () {
		var _this = this;
		_this.$live = $('#widgetRLive');

		if (_this.$live.length <= 0) return false;

		//console.log('RIA - LIVE inited');
		//console.log(_this.$live);

        _this.mod = {
            view_list : 'm-view-list',
            no_list : 'm-no-list'
        };

        _this.$title = $('.widgets__r-header-one span', _this.$live);
        _this.$url = $('.widgets__r-header-one a', _this.$live);
        _this.$loader = $('.widgets__r-loader', _this.$live);
		_this.$list = $('.widgets__r-list', _this.$live);
		_this.$back = $('.widgets__r-header-button.m-back', _this.$live);

		_this.checkActive();
		_this.addEvents();

	},

	addEvents : function(){
		var _this = this;

		_this.$list.on('click', '.r-list__item', function(){
			_this.toOnline($(this));
		});

		_this.$back.on('click', function(){
			_this.toList();
		})
	},

	checkActive : function(){
		var _this = this;
        if (_this.$live.hasClass(_this.mod.view_list)){
            _this.toList();
        } else if (_this.$list.length <= 0){
			_this.$live.addClass(_this.mod.no_list);
		}
	},

	toList: function () {
		var _this = this;
		_this.$live.addClass(_this.mod.view_list);
	},

	toOnline: function (obj) {
		var _this = this;
        _this.setTitle(obj.data('title'));
        _this.setUrl(obj.data('url'));
        //_this.$loader.show();
		_this.$live.removeClass(_this.mod.view_list);
		if ( typeof obj == 'object' ){
			// проверка какой онлайн уже загружен
			// если нужен другой - AJAX запрос
			// показываем лоадер
			// заменяем контент
			// скрываем лоадер
		}

	},

	setTitle: function (text) {
		return (!this.$title) ? false : this.$title.html(text);
	},
	setUrl: function (text) {
		return (!this.$url) ? false : this.$url.attr('href', text);
	}


};

$(function(){
    ria_live_manager.init();
});























