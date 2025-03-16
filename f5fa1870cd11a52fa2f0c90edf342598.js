window.INVEN = window.INVEN || {};
INVEN.heatmapPlugin = INVEN.heatmapPlugin || {};

if (!INVEN.heatmapPlugin.hasOwnProperty('uniquePath')) {
	INVEN.heatmapPlugin.uniquePath = {};
}

if (!INVEN.heatmapPlugin.uniquePath.hasOwnProperty('pc')) {
	INVEN.heatmapPlugin.uniquePath.pc = {};
}
if (!INVEN.heatmapPlugin.uniquePath.hasOwnProperty('mobile')) {
	INVEN.heatmapPlugin.uniquePath.mobile = {};
}
if (!INVEN.heatmapPlugin.uniquePath.hasOwnProperty('pc_sitebuilder')) {
	INVEN.heatmapPlugin.uniquePath.pc_sitebuilder = {};
}
if (!INVEN.heatmapPlugin.uniquePath.hasOwnProperty('final')) {
	INVEN.heatmapPlugin.uniquePath.final = {};
}

/**
 * 핫이슈
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.slideHotissue = function(path) {
	var m = path.match(/(div#webzineHome)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(?:.+?)(\s+div)(?:\.[\w\-]+)*(\.hotissuePartNew)(?:\.[\w\-]+)*(?:.+?)(\s+div)(?:\.[\w\-]+)*(\.hotissueBody)/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.slideHotissue = INVEN.heatmapPlugin.uniquePath.pc.slideHotissue;

/**
 * Center Zone
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.centerZoneTab = function(path) {
	var m = path.match(/(div#webzineHome)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>.+\s+>(\s+div)(?:\.[\w\-]+)*(\.center-zone)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.centerZone = INVEN.heatmapPlugin.uniquePath.pc.centerZone;

/**
 * 주요뉴스 (today_news)
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.todayNews = function(path) {
	var m = path.match(/(div#todayNews)/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.todayNews = INVEN.heatmapPlugin.uniquePath.pc.todayNews;

/**
 * 오피니언 (opinion)
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.opinion = function(path) {
	var m = path.match(/(div#homePart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)(?:\.[\w\-]+)*(\.homeGroups)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)(?:\.[\w\-]+)*(\.focusPart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)(?:\.[\w\-]+)*(\.overviewPart|\.gstarNewsList)(?:\.[\w\-]+)*(\.overviewPart|\.gstarNewsList)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+(>\s+div)(?:\.[\w\-]+)*(\.overviewSplit)(?:\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+(>\s+div)(?:\.[\w\-]+)*(\.review)(?:\.[\w\-]+)*(:nth\-of\-type\(\d+\))?/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.opinion = INVEN.heatmapPlugin.uniquePath.pc.opinion;

/**
 * 스페셜코너 special_corner()
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.special_corner = function(path) {
	var m = path.match(/(div#homePart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)(?:\.[\w\-]+)*(\.homeGroups)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)(?:\.[\w\-]+)*(\.focusPart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)(?:\.[\w\-]+)*(\.overviewPart|\.gstarNewsList)(?:\.[\w\-]+)*(\.overviewPart|\.gstarNewsList)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+(>\s+div)(?:\.[\w\-]+)*(\.overviewSplit)(?:\.[\w\-]+)*(:nth\-of\-type\(\d+\))?\s+(>\s+div)(?:\.[\w\-]+)*(\.special_corner)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.special_corner = INVEN.heatmapPlugin.uniquePath.pc.special_corner;

/**
 * 에디터스픽 (editorpick)
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.editorpick = function(path) {
	var m = path.match(/(div#editorpick).+?(\s+ul)(?:\.[\w\-]+)*(\.editorspick)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?/i);
	return m ? m[1] : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.editorpick = INVEN.heatmapPlugin.uniquePath.pc.editorpick;

/**
 * 에디터스픽 - 슬라이드버튼 (editorpick - slide button)
 * @param {string} path
 * @return {string|false}
 */
INVEN.heatmapPlugin.uniquePath.pc.editorpickSlideButton = function(path) {
	var m = path.match(/(div#editorpick).+?(\s+a)(?:\.[\w\-]+)*(\.btnLeft|\.btnRight|\.btn)(?:\.[\w\-]+)*(\.btnLeft|\.btnRight|\.btn)/i);
	return m ? false : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.editorpickSlideButton = INVEN.heatmapPlugin.uniquePath.pc.editorpickSlideButton;

/**
 * 모바일 게임 랭크
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.mobileGameRank = function(path) {
	var m = path.match(/(#webzineHome)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+.+?(\s+div)(?:\.[\w\-]+)*(\.gameRank|\.overviewPart)(?:\.[\w\-]+)*(\.gameRank|\.overviewPart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?.+?\s+ul(?:\.[\w\-]+)*(?:\.focusType\-rank)/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.mobileGameRank = INVEN.heatmapPlugin.uniquePath.pc.mobileGameRank;

/**
 * 모바일 게임 랭크 - 플랫폼 버튼
 * @param {string} path
 * @return {string|false}
 */
INVEN.heatmapPlugin.uniquePath.pc.mobileGameRankTabButton = function(path) {
	var m = path.match(/(#webzineHome)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+.+?(\s+div)(?:\.[\w\-]+)*(\.gameRank|\.overviewPart)(?:\.[\w\-]+)*(\.gameRank|\.overviewPart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?.+?\s+h2/i);
	return m ? false : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.mobileGameRankTabButton = INVEN.heatmapPlugin.uniquePath.pc.mobileGameRankTabButton;

/**
 * Top 기사
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.topArticles = function(path) {
	var m = path.match(/(#webzineHomeG1)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+.+?\sdiv#webzineHomeG1A[1-9](?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?/i);
	return m ? m[1] : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.topArticles = INVEN.heatmapPlugin.uniquePath.pc.topArticles;

/**
 * Top 기사 - tab
 * @param {string} path
 * @return {string|false}
 */
INVEN.heatmapPlugin.uniquePath.pc.topArticlesTab = function(path) {
	var m = path.match(/(#webzineHomeG1Tabs)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?/i);
	return m ? false : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.topArticlesTab = INVEN.heatmapPlugin.uniquePath.pc.topArticlesTab;

/**
 * 실시간 뉴스
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.realtimeNews = function(path) {
	var m = path.match(/(#webzineHome)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s.+?(\s+div)(?:\.[\w\-]+)*(\.realTimeNewsWrap|\.overviewPart)(?:\.[\w\-]+)*(\.realTimeNewsWrap|\.overviewPart)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?(\s+>\s+div)/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.realtimeNews = INVEN.heatmapPlugin.uniquePath.pc.realtimeNews;

/**
 * webzine_20180528 코너 - tab
 * @param {string} path
 * @return {string|false}
 */
INVEN.heatmapPlugin.uniquePath.pc.webzine_20180528_tab = function(path) {
	var m = path.match(/(#webzine_20180528)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>(\s+div)(?:\.[\w\-]+)*(\.corner|\.btn_tab)(?:\.[\w\-]+)*(\.corner|\.btn_tab)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>\s+button/i);
	return m ? false : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.webzine_20180528_tab = INVEN.heatmapPlugin.uniquePath.pc.webzine_20180528_tab;

/**
 * webzine_20180528 코너
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.webzine_20180528 = function(path) {
	var m = path.match(/(#webzine_20180528)/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.webzine_20180528 = INVEN.heatmapPlugin.uniquePath.pc.webzine_20180528;

/**
 * 우측 코너
 * @param {string} path
 * @return {string}
 */
INVEN.heatmapPlugin.uniquePath.pc.webzineRight = function(path) {
	var m = path.match(/(#webzineRightMenu)(?:\.[\w\-]+)*(?::nth\-of\-type\(\d+\))?\s+>(\s+div)(#[^\.\s]+)?((?:\.[\w\-]+)+)?(?::nth\-of\-type\(\d+\))?\s.+/i);
	return m ? m.splice(1).join('') : path;
};
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.webzineRight = INVEN.heatmapPlugin.uniquePath.pc.webzineRight;

/**
 * 우측 로그인
 * @param path
 * @returns {*}
 */
INVEN.heatmapPlugin.uniquePath.pc.webzineLogin = function(path) {
	return path.replace(/.+\.webzine-login[^\w].+(?:a|button)(#[^ .]+).*/i, '$1');
}
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.webzineLogin = INVEN.heatmapPlugin.uniquePath.pc.webzineLogin;

/**
 * 헤더 검색 버튼
 * @param path
 * @returns {*}
 */
INVEN.heatmapPlugin.uniquePath.pc.webzineHeaderSearch = function(path) {
	return path.replace(/(\.webzin-header)(\.ad)?\.act/, '$1$2').replace(/.+\#webzineHeadmenuF1[^\w].+(?:a|button|#div)(#[^ .]+).*/i, '$1');
}
INVEN.heatmapPlugin.uniquePath.pc_sitebuilder.webzineHeaderSearch = INVEN.heatmapPlugin.uniquePath.pc.webzineHeaderSearch;

$(function($) {
	var $header = $('.webzin-header.ad > .header-top');
	$header.add($header.find('.search-icon,.right-logo')).click(function() {});
});