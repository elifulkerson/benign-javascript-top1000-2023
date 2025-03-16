(function () {
			var DWH = '&ver=full&l=0&em=0&a=0&xy=0';/**
 *
 * @param {string} name - Имя метрики
 * @param {boolean} ignoreZeroDuration - Игнорировать метрики с нулевым duration
 * @param {string} log - Сообщение для логирования
 * @param {*} DWH
 */
function createRadar(name, ignoreZeroDuration, log, DWH) {
	var data = {};
	var one = function(opts) {
		new Image().src =
			'https://xray.mail.ru/update?p=splash' +
			'&t=' +
			opts.name +
			'&v=' +
			opts.time +
			(opts.timers ? '&i=' + opts.timers : '') +
			(opts.dwh ? opts.dwh : '') +
			(opts.log ? '&rlog=splash_' + opts.name + '&rlog_message=' + opts.log : '') +
			(document.referrer ? '&r=' + escape(document.referrer) : '') +
			'&rnd=' +
			Math.random() * 1e17;
	};

	/**
	 *
	 * @param {*} s Имя метрики, если прилетает не стринга, то это как бы коммит, все собранные радары дёргаются в одном запросе
	 * @example createRadar('error')('all', 0, 1)('all', 1, 2)(name, 0, 1)(name, 1, 2)(true) <- здесь смотри true - не стринга
	 * @param {0|1} x - markStart если не единица, если единица - markEnd
	 * @param {number} timing - Это может быть просто 1 в простейшем случае, или некое число, либо автоматом запишется timestamp
	 */
	var radar = function(s, x, timing) {
		// Очищаем данные всех сабметрик
		if (s === 'clear') {
			data = {};
		} else if (typeof s === 'string') {
			// Собираем все сабметрики
			if (x === 1 && data[s] && !data[s][1]) {
				if (typeof timing === 'number') {
					data[s][1] = timing;
				} else {
					data[s][1] = +new Date();
				}
			} else if (x !== 1 && !data[s]) {
				if (typeof timing === 'number') {
					data[s] = [timing, 0];
				} else {
					data[s] = [+new Date(), 0];
				}
			}
		} else {
			// Отсылаем данные
			var i = [];
			var a;
			var v;
			var k;
			var duration;

			for (k in data) {
				if (data.hasOwnProperty(k)) {
					v = data[k];
					duration = v[1] - v[0];
					if (duration < 0) {
						data = {};

						return;
					} else if (ignoreZeroDuration && !duration) {
						continue;
					}

					i.push(k + ':' + duration);

					if (k == 'all') {
						a = duration;
					}
				}
			}

			if (i.length && a) {
				one({
					name: name,
					time: a,
					timers: i.join(','),
					dwh: DWH,
					log: log
				});
			}

			data = {};
		}

		return radar;
	};

	radar.one = one;
	radar.clear = function() {
		data = {};
		return radar;
	};

	return radar;
}

window.createRadar = createRadar;
window.splashRadar = createRadar('page', false, false, DWH);
			splashRadar('all')('preleftcol');
			window.onloadRadar = createRadar('load');
			onloadRadar('all')('load');
		})();
		splashRadar('server', 0,1697422171641);