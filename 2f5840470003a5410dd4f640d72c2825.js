window.ISBGPC = 1;
window.bgdInfoData = {};
window.onVisitBefore = function(sessionId, userId, customersId, unionId) {
	bgdInfoData.sessionId = sessionId;
	bgdInfoData.userId = userId;
	bgdInfoData.customersId = customersId;
	bgdInfoData.unionId = unionId;
	if (window._RdAndDc_Store_arr) {
		window._RdAndDc_Store_arr.forEach(function(fn) {
			fn && fn();
		});
		delete window._RdAndDc_Store_arr;
	}
};