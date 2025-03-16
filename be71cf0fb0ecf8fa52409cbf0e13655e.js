function bootDrift() {
	if (window.drift_loaded) return;
	if (!window.OnetrustActiveGroups || false) {
		window.drift_loaded = true;
		setTimeout(
			function() {
			window.generateNewContext = () => {
					return {
						window: {
							location: {
								hash: window.location.hash,
								host: window.location.host,
								hostname: window.location.hostname,
								href: window.location.href,
								origin: window.location.origin,
								pathname: window.location.pathname,
								port: window.location.port,
								protocol: window.location.protocol,
								search: window.location.search,
							},
							navigator: {
								language: window.navigator.language,
								browserLanguage: window.navigator.browserLanguage,
								userAgent: window.navigator.userAgent,
							},
							innerHeight: window.innerHeight,
							innerWidth: window.innerWidth,
						},
						document: {
							title: document.title,
							referrer: document.referrer,
						},
					};
				};
				window.addEventListener("resize", () => {
					const driftiframe = document.getElementById("drift-iframe");
					if (!driftiframe) return;
					driftiframe.contentWindow.postMessage({type: "driftUpdateContext", data: generateNewContext()}, "*");
				});
				window.addEventListener("scroll", (event) => {
					const driftiframe = document.getElementById("drift-iframe");
					if (!driftiframe) return;
					driftiframe.contentWindow.postMessage({type: "driftParentScroll", data: {scroll: true}, target: "drift.parentScroll"}, "*");
				});
				window.addEventListener("message", function (event) {
					const driftiframe = document.getElementById("drift-iframe");
					if (!driftiframe) return;
					if (!driftiframe.contentWindow && event.source === driftiframe.contentWindow) return;
					// on startup - pass created context into iframe
					var message = event.data;
					if (message.type === "driftIframeReady") {
						driftiframe.contentWindow.postMessage({type: "driftSetContext", data: generateNewContext()}, "*");
					}
					// on widget size change - apply new size / positioning to iframe
					if (message.type === "driftIframeResize") {
						var styles = message.data.styles;
						for (var key in styles) {
							if (!styles.hasOwnProperty(key)) {
								continue;
							}
							driftiframe.style.setProperty(key, styles[key]);
						}
					}
				});
			},
		0);
	}
}
function OptanonWrapper() {
	window.dataLayer.push({'event': 'OneTrustReady'});
	if (!Optanon.GetDomainData().ShowAlertNotice || false) {
		bootDrift();
		const bottomBannerEl = document.querySelector('.c-announcement-banner-bottom');
		if (bottomBannerEl !== null) {
			bottomBannerEl.classList.remove('c-announcement-banner-bottom-invisible');
		}

	}
	Optanon.OnConsentChanged(function() {
		bootDrift();
		const bottomBannerEl = document.querySelector('.c-announcement-banner-bottom');
		if (bottomBannerEl !== null) {
			bottomBannerEl.classList.remove('c-announcement-banner-bottom-invisible');
		}
	});
}