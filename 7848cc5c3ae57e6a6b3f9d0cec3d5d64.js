window.onerror = function (message, file, line) {
			var sFormattedMessage = '[' + file + ' (' + line + ')] ' + message;
			sFormattedMessage = sFormattedMessage.length > 150 ? sFormattedMessage.substring(0, 150) : sFormattedMessage;
			gtag('event', 'exception', {
				'description': sFormattedMessage,
				'fatal': false
			});
		}