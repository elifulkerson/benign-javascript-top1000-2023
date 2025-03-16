var INVEN = window.INVEN || {};
INVEN.FloatStatic = window.INVEN.FloatStatic || {};

// 초기화
INVEN.FloatStatic.floats = window.INVEN.FloatStatic.floats || new Array();

/**
/* addFloat : 플로팅 추가
/* obj : 해당 오브젝트 또는 오브젝트의 ID 값
/* hstatic : 가로위치 고정 여부
/* vstatic : 세로위치 고정 여부
/* hgap : 가로상 왼쪽 여백
/* vgap : 세로상 왼쪽 여백
/* activateDelay : 스크롤후 반응시간
/* scrollSpeed : 스크롤 속도
*/
INVEN.FloatStatic.addFloat = function(obj, hstatic, vstatic, hgap, vgap, activateDelay, scrollSpeed) {
	obj = getObj(obj);
	// 기본값
	if (hstatic == undefined) hstatic = false;
	if (vstatic == undefined) vstatic = true;
	//if (left == undefined) left = 0;
	//if (top == undefined) top = 0;
	if (hgap == undefined) hgap = 0;
	if (vgap == undefined) vgap = 200;
	if (activateDelay == undefined) activateDelay = 1000;
	if (scrollSpeed == undefined) scrollSpeed = 20;

	// 새로운 플로팅 생성
	INVEN.FloatStatic.floats[obj.id] = new Array();
	INVEN.FloatStatic.floats[obj.id]['hstatic'] = hstatic;
	INVEN.FloatStatic.floats[obj.id]['vstatic'] = vstatic;
	INVEN.FloatStatic.floats[obj.id]['hgap'] = hgap;
	INVEN.FloatStatic.floats[obj.id]['vgap'] = vgap;
	INVEN.FloatStatic.floats[obj.id]['activateDelay'] = activateDelay;
	INVEN.FloatStatic.floats[obj.id]['scrollSpeed'] = scrollSpeed;
	INVEN.FloatStatic.floats[obj.id]['timerFn'] = "";

	// 초기위치 설정
	if (!obj.style.left || !obj.style.top) {
		var coord = INVEN.Coordination.getRelPos(obj);
		var coordParent = INVEN.Coordination.getRelPos(obj.parentNode);
		if (!obj.style.left) obj.style.left = coord.x - coordParent.x;
		if (!obj.style.top) obj.style.top = coord.y - coordParent.y;
	}
	
	// 플로팅 시작
	INVEN.FloatStatic.refresh(obj, hstatic, vstatic, hgap, vgap, activateDelay, scrollSpeed);
	addEvent(window,'onscroll',INVEN.FloatStatic.refreshAll);

}

INVEN.FloatStatic.refresh = function(obj, hstatic, vstatic, hgap, vgap, activateDelay, scrollSpeed) {
	obj = getObj(obj);
	var startPointX, endPointX, startPointY, endPointY, refreshTimer, timerFnStr;
	var reached = true;

	scrollLeft = document.compatMode && document.compatMode != "BackCompat" ? document.documentElement.scrollLeft : document.body.scrollLeft;
	scrollTop = document.compatMode && document.compatMode != "BackCompat" ? document.documentElement.scrollTop : document.body.scrollTop;

	startPointX = parseInt(obj.style.left, 10);
	endPointX = hstatic ? scrollLeft + hgap : startPointX;
	startPointY = parseInt(obj.style.top, 10);
	endPointY = vstatic ? scrollTop + vgap : startPointY;

	refreshTimer = activateDelay;
	timerFnStr = "INVEN.FloatStatic.refresh('"+obj.id+"',"+(hstatic ? "true" : "false")+","+(vstatic ? "true" : "false")+","+hgap+","+vgap+","+activateDelay+","+scrollSpeed+");";

	if (startPointX != endPointX) {
		scrollAmount = Math.ceil(Math.abs(endPointX - startPointX) / 15);
		obj.style.left = parseInt(obj.style.left, 10) + ((endPointX < startPointX) ? -scrollAmount : scrollAmount);
		refreshTimer = scrollSpeed;
		reached = false;
	}
	if (startPointY != endPointY) {
		scrollAmount = Math.ceil(Math.abs(endPointY - startPointY) / 15);
		obj.style.top = parseInt(obj.style.top, 10) + ((endPointY < startPointY) ? -scrollAmount : scrollAmount);
		refreshTimer = scrollSpeed;
		reached = false;
	}
	if (reached) {
		INVEN.FloatStatic.floats[obj.id]['timerFn'] = timerFnStr;
		return;
	}

	setTimeout(timerFnStr, refreshTimer);
}

INVEN.FloatStatic.refreshAll = function() {
	for (var key in INVEN.FloatStatic.floats) {
		var temp = INVEN.FloatStatic.floats[key]['timerFn'];
		INVEN.FloatStatic.floats[key]['timerFn'] = "";
		if (temp != "") eval(temp);
	}
}
