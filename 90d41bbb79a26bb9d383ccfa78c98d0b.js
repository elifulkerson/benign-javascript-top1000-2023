try {
			cdnTest();
		}
		catch (e) {
			function doCDNRedirect() {
				document.cookie="isCDNDisabled=1";
				if (!window.location.href.match('disable_cdn=1')) {
					var redirectUrl = (/^((.+)\?(.*))$/.test(window.location.href) ? '&' : '?') + 'disable_cdn=1';
					window.location = window.location.href + redirectUrl;
				}
			}
			doCDNRedirect();
		}