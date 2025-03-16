var getCookie = function(name) {
			var regexp = new RegExp("(?:^" + name + "|; *" + name + ")=(.*?)(?:;|$)", "g"),
				result = regexp.exec(document.cookie);
			return (result === null) ? null : result[1];
		}
		var newsId = getCookie('_ncg_id_');