var nonce = document.querySelector('script[nonce]').nonce	
		mr._.SCRIPTS = ['//limg.imgsmail.ru/splash/v/j/s_n-fp-30d71e28c2.js'];
		if (mr._.STUCK_IN_POT && mr.encrypt) {
			var apiproxyParams = function(url) {
				var adqLength = 119;
				var param = '?till=';
				return String.prototype.repeat ? url + param + '0'.repeat(adqLength - url.length - param.length) : url;
			};
			document.write('\x3Cscript src="' + mr.encrypt(apiproxyParams(mr._.SCRIPTS[0])) + '" nonce="' + nonce + '">\x3C/script>')
		} else {
			document.write('\x3Cscript src="' + mr._.SCRIPTS[0] + '" nonce="' + nonce + '">\x3C/script>')
		}