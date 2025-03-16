(function(){
	if (mr._.STUCK_IN_POT) {
		var id = 'regional-info';
		var block = mr.id(id);
		block.className = block.id = mr.locator.transform(id);
		mr.setBem(block, block.id);
	}

	var params = [ mr.id('regionalInfoDay'), mr.id('regionalInfoMonth'), mr.id('regionalInfoTime'), mr.id('icon_cal') ],
		timestamp = (new Date).getTime(),
		serverTime = new Date(window.mr.timestamp);

		serverTime.setSeconds(new Date(timestamp).getSeconds());
		serverTime.setMilliseconds(new Date(timestamp).getMilliseconds());
		serverTime = serverTime.getTime();

	function SetDate (params) {
		if (params.length === 4) {
			this.dayEl = params[0];
			this.monthEl = params[1];
			this.timeEl = params[2];
			this.icon = params[3];
		} else {
			this.monthEl = params[0];
			this.timeEl = params[1];
			this.icon = params[2];
		}

		this.init();
	}
	SetDate.prototype = {
		init: function () {
			try {
				var self = this,
					date = new Date(this.serverTime + this.delta()),
					day, day_of_week, month, time;

				date = new Date(date.getTime() + date.getTimezoneOffset()*60*1000 + _timezone*1000);

				day = (date.getDate()).toString();
				day_of_week = this.days[date.getDay()];
				month = this.month[date.getMonth()];
				time = [date.getHours(), date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()].join(':');
				
				if (this.dayEl) this.dayEl.innerHTML = day_of_week;
				if (this.monthEl) this.monthEl.innerHTML = [day, month].join(' ');
				if (this.timeEl) this.timeEl.innerHTML = time;

				if (this.icon && this.icon.title === '') {
					if (mr.hasClass(this.icon, 'icon_cal_num')) {
						day.length > 1 && mr.removeClass(this.icon, 'icon_cal_wide');
						this.icon.innerHTML = day.length > 1 ? '<i class="mailbox__cal__num icon icon_num icon_num_' + day.substr(0, 1) + '"></i><i class="mailbox__cal__num icon icon_num icon_num_' + day.substr(1, 1) + '"></i>' : '<i class="mailbox__cal__num icon icon_num icon_num_' + day + '">';
					}
					
					this.icon.title = 'Календарь – сегодня ' + day + ' ' + month + ', ' + day_of_week;
				}

				setTimeout(function () {
					self.init();
				}, (59 - date.getSeconds()) * 1000 + (1000 - date.getMilliseconds()) + 200);
			} catch(e) {
				window.logError && logError(e, 'SetDate');
			}
		},
		delta: function () {
			return (new Date).getTime() - timestamp;
		},
		serverTime: serverTime,
		days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		month: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
	}
	
	window.dates = new SetDate(params);

	mr.SetDate = SetDate;
})();