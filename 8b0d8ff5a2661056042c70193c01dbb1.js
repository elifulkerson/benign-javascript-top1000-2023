var INVEN = window.INVEN || {};
INVEN.Layer = window.INVEN.Layer || {};

INVEN.Layer.mousex = 0;
INVEN.Layer.mousey = 0;
INVEN.Layer.ready = false;
INVEN.Layer.floatIframes = window.INVEN.Layer.floatIframes || new Array();

INVEN.Layer.setReady = function() {
	INVEN.Layer.ready = true;
}

INVEN.Layer.forceReady = INVEN.Layer.setReady;

INVEN.Layer.trackMouse = function() {};

INVEN.Layer.getFloatControl = function(floatControl) {
	if (floatControl == undefined) {
		floatControl = 'none';
	} else if (typeof(floatControl) == 'boolean') {
		floatControl = floatControl ? 'select' : 'none';
	} else if (floatControl == 'iframe') {
		floatControl = 'iframe';
	} else {
		floatControl = 'none';
	}
	return floatControl;
}
// xplus : [w/e/m]+/-[pixel] plus/minus from west/east/mouse end of baseObj
// xplus : [n/s/m]+/-[pixel] plus/minus from north/south/mouse end of baseObj
// basePos : -mouse, -body, [object]
INVEN.Layer.show = function(obj, xplus, yplus, floatControl, toBody, baseObj, autoPosition) {
	if (!INVEN.Layer.ready) return;
	obj = getObj(obj);
	if (!obj) return;
	if (typeof(toBody) == 'undefined') toBody = true;
	if (typeof(baseObj) == 'undefined') baseObj = "-mouse";
	if (typeof(autoPosition) == 'undefined') autoPosition = true;

	floatControl = INVEN.Layer.getFloatControl(floatControl);

	obj.style.visibility = 'hidden';
	obj.style.display = 'none';
	obj.style.left = '-5000px';
	obj.style.top = '-5000px';
	obj.style.visibility = 'visible';
	obj.style.display = 'inline';

	var fixXPos = false, fixYPos = false;

	// 기준좌표 계산 (baseObj, xplus, yplus 이용)
	switch (baseObj) {
		case '-mouse':
			break;
		case '-body':
			baseObj = document.body;
			if (!baseObj) return;
			break;
		default:
			baseObj = getObj(baseObj);
			if (!baseObj) return;
	}

	var basePos = INVEN.Coordination.create();
	if (baseObj == '-mouse') {
		basePos.x = INVEN.Layer.mousex;
		basePos.y = INVEN.Layer.mousey;
	} else {
		var baseObjPos = $(baseObj).offset();
		switch (typeof(xplus) == 'string' ? xplus.substring(0,1).toLowerCase() : 'm') {
			case 'm':
				basePos.x = INVEN.Layer.mousex;
				break;
			case 'e':
				basePos.x = baseObjPos.left + $(baseObj).outerWidth();
				break;
			default:
				basePos.x = baseObjPos.left;
				break;
		}
		switch (typeof(yplus) == 'string' ? yplus.substring(0,1).toLowerCase() : 'm') {
			case 'm':
				basePos.y = INVEN.Layer.mousey;
				break;
			case 's':
				basePos.y = baseObjPos.top + $(baseObj).outerHeight();
				break;
			default:
				basePos.y = baseObjPos.top;
				break;
		}
	}
	if (typeof(xplus) == 'string') {
		if (xplus.search(/f/i) != -1) { fixXPos = true; }
		xplus = parseInt(xplus.replace(/[^0-9\-]/ig,''), 10) || 0;
	} else if (typeof(xplus) != 'number') {
		xplus = 0;
	}
	if (typeof(yplus) == 'string') {
		if (yplus.search(/f/i) != -1) { fixYPos = true; }
		yplus = parseInt(yplus.replace(/[^0-9\-]/ig,''), 10) || 0;
	} else if (typeof(yplus) != 'number') {
		yplus = 0;
	}

	// Layer 바깥쪽으로 빼기
	if (toBody && document.body) {
		if (obj.parent) obj.parentNode.removeChild(obj);
		document.body.appendChild(obj);
	}

	var x = basePos.x + xplus;
	var y = basePos.y + yplus;
	if (!fixXPos) {
		var w = $(obj).outerWidth();
		var sl = Math.max(document.body.scrollLeft || 0, document.documentElement.scrollLeft || 0);
		var cw = Math.max(document.body.clientWidth || 0, document.documentElement.clientWidth || 0);
		if (autoPosition && (x + w) > (cw + sl)) x = sl + cw - w;
		if (x < sl) x = sl;
	}
	if (!fixYPos) {
		var h = $(obj).outerHeight();
		var st = Math.max(document.body.scrollTop || 0, document.documentElement.scrollTop || 0);
		var ch = Math.max(document.body.clientHeight || 0, document.documentElement.clientHeight || 0);
		if (autoPosition && (y + h) > (ch + st)) y = st + ch - h;
		if (y < st) y = st;
	}
	obj.style.left = x + 'px';
	obj.style.top = y + 'px';

	switch (floatControl) {
		case 'select':
			INVEN.Layer.floatShow(obj);
			break;
		case 'iframe':
			if (!obj.uniqueID) obj.uniqueID = "inven_" + new Date().getMilliseconds() + "_" + Math.round(Math.random() * 1000);
			if (!INVEN.Layer.floatIframes[obj.uniqueID]) {
				INVEN.Layer.floatIframes[obj.uniqueID] = document.createElement("IFRAME");
				INVEN.Layer.floatIframes[obj.uniqueID].frameBorder = "0";
				INVEN.Layer.floatIframes[obj.uniqueID].frameSpacing = "0";
				INVEN.Layer.floatIframes[obj.uniqueID].style.position = "absolute";
				INVEN.Layer.floatIframes[obj.uniqueID].style.styleFloat = "left";
				INVEN.Layer.floatIframes[obj.uniqueID].style.display = "inline";

			}
			if (INVEN.Layer.floatIframes[obj.uniqueID].parentNode && (INVEN.Layer.floatIframes[obj.uniqueID].parentNode != document.body)) { INVEN.Layer.floatIframes[obj.uniqueID].parentNode.removeChild(INVEN.Layer.floatIframes[obj.uniqueID]); }
			//INVEN.Layer.floatIframes[obj.uniqueID].style.zIndex = obj.style.zIndex;
			//obj.parentNode.insertBefore(INVEN.Layer.floatIframe, obj);
			var objAbsPos = INVEN.Coordination.getAbsPos(obj);
			INVEN.Layer.floatIframes[obj.uniqueID].style.zIndex = obj.style.zIndex - 1;
			INVEN.Layer.floatIframes[obj.uniqueID].style.width = obj.offsetWidth;
			INVEN.Layer.floatIframes[obj.uniqueID].style.height = obj.offsetHeight;
			INVEN.Layer.floatIframes[obj.uniqueID].style.left = objAbsPos.x;
			INVEN.Layer.floatIframes[obj.uniqueID].style.top = objAbsPos.y;
			try {
				if (self.pageYOffset) { // all except Explorer
					INVEN.Layer.floatIframes[obj.uniqueID].style.left = objAbsPos.x;
					INVEN.Layer.floatIframes[obj.uniqueID].style.top = objAbsPos.y;
				} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
					INVEN.Layer.floatIframes[obj.uniqueID].style.left = objAbsPos.x;
					INVEN.Layer.floatIframes[obj.uniqueID].style.top = objAbsPos.y;
				} else if (document.body && obj.currentStyle) { // all other Explorers
					INVEN.Layer.floatIframes[obj.uniqueID].style.left = objAbsPos.x - parseInt(obj.currentStyle.borderLeftWidth, 10);
					INVEN.Layer.floatIframes[obj.uniqueID].style.top = objAbsPos.y - parseInt(obj.currentStyle.borderTopWidth, 10);
				}
			} catch (e) {}

			document.body.appendChild(INVEN.Layer.floatIframes[obj.uniqueID]);
			INVEN.Layer.floatIframes[obj.uniqueID].style.visibility = 'hidden';
			INVEN.Layer.floatIframes[obj.uniqueID].style.visibility = 'visible';
			break;
	}
}
INVEN.Layer.hide = function(obj, floatControl) {
	obj = getObj(obj);
	if (!obj) return;
	floatControl = INVEN.Layer.getFloatControl(floatControl);
	obj.style.display = 'none';

	switch (floatControl) {
		case 'select':
			INVEN.Layer.floatHide(obj);
			break;
		case 'iframe':
			if (!obj.uniqueID) obj.uniqueID = "inven_" + new Date().getMilliseconds() + "_" + Math.round(Math.random() * 1000);
			if (INVEN.Layer.floatIframes[obj.uniqueID] && INVEN.Layer.floatIframes[obj.uniqueID].parentNode) {
				INVEN.Layer.floatIframes[obj.uniqueID].parentNode.removeChild(INVEN.Layer.floatIframes[obj.uniqueID]);
			}
			break;
	}
}
/* FLOAT CONTROL */
INVEN.Layer.floatObjs = window.INVEN.Layer.floatObjs || new Array();
INVEN.Layer.floatSelects = window.INVEN.Layer.floatObjsState || new Array();

INVEN.Layer.floatShow = function(obj) {
	// IE가 아니면 작동안함
	if (!window.ActiveXObject) return;

	// 초기화
	obj = getObj(obj);
	if (!obj) return;

	// SELECT 추출
	var docSelect = document.getElementsByTagName("SELECT");
	var childSelect = obj.getElementsByTagName("SELECT");
	var dsCount = docSelect.length;
	var csCount = childSelect.length;

	// 좌표 계산
	var objPos = INVEN.Coordination.getRelPos(obj);
	var objPosEnd = INVEN.Coordination.create();
	objPosEnd.x = objPos.x + obj.offsetWidth;
	objPosEnd.y = objPos.y + obj.offsetHeight;

	for (var ds = 0; ds < dsCount; ds++) {
		var item = docSelect[ds];

		// 플로팅 내부인지 확인
		var isChild = false;
		for (var cs = 0; cs < csCount; cs++) {
			if (item == childSelect[cs]) isChild = true;
		}
		if (!isChild) {
			if (!item.uniqueID) item.uniqueID = "inven_" + new Date().getMilliseconds() + "_" + Math.round(Math.random() * 1000);

			itemPos = INVEN.Coordination.getAbsPos(item);
			var itemPosEnd = INVEN.Coordination.create();
			itemPosEnd.x = itemPos.x + item.offsetWidth;
			itemPosEnd.y = itemPos.y + item.offsetHeight;

			// 겹치는지 채크
			if (((itemPos.x >= objPos.x) && (itemPos.y >= objPos.y) && (itemPos.x <= objPosEnd.x) && (itemPos.y <= objPosEnd.y)) /* 시작지점 검사 */
				|| ((itemPosEnd.x >= objPos.x) && (itemPosEnd.y >= objPos.y) && (itemPosEnd.x <= objPosEnd.x) && (itemPosEnd.y <= objPosEnd.y))) /* 끝지점 검사 */ {
				if (item.style.visibility != 'hidden') {
					INVEN.Layer.floatSelects[item.uniqueID] = new Array();
					INVEN.Layer.floatSelects[item.uniqueID]['obj'] = item;
					INVEN.Layer.floatSelects[item.uniqueID]['state'] = item.style.visibility;
					item.style.visibility = 'hidden';
				}
			}
		} else {
			if (item.style.visibility == 'hidden') {
				// 안보일 경우 플로팅컨트롤에 의해 감춰진지 확인
				for (var foKey in INVEN.Layer.floatSelects) {
					if (foKey == item.uniqueID) {
						item.style.visibility = INVEN.Layer.floatSelects[foKey]['state'];
					}
				}
			}
		}

		INVEN.Layer.floatObjs[obj.id] = 1;
	}
}
INVEN.Layer.floatHide = function(obj) {
	// IE가 아니면 작동안함
	if (!window.ActiveXObject) return;

	// 초기화
	obj = getObj(obj);
	if (!obj) return;

	// 다 보여주기
	for (var key in INVEN.Layer.floatSelects) {
		INVEN.Layer.floatSelects[key]['obj'].style.visibility = INVEN.Layer.floatSelects[key]['state'];
	}

	INVEN.Layer.floatObjs[obj.id] = 0;

	// 다른 플로팅 재계산
	for (var key in INVEN.Layer.floatObjs) {
		if (INVEN.Layer.floatObjs[key]) INVEN.Layer.floatShow(key);
	}
}

$(document).on('mousemove.InvenLayer', function(e) {
	INVEN.Layer.ready = true;
	INVEN.Layer.mousex = e.pageX;
	INVEN.Layer.mousey = e.pageY;
});