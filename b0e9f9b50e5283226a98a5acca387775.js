var INVEN = window.INVEN || {};
INVEN.Outlogin = window.INVEN.Outlogin || {};

INVEN.Outlogin.login = function(fmObj) {
	fmObj = fmObj ? getObj(fmObj) : getObj("comLeftLoginForm");
	if (!fmObj.user_id.value) { alert("ID를 입력하여 주십시요"); fmObj.user_id.focus(); return; }
	if (!fmObj.password.value) { alert("비밀번호를 입력하여 주십시요"); fmObj.password.focus(); return; }  
	if (fmObj.save_id.checked == true) {
		setCookie("USERID", fmObj.user_id.value, (30*24));
	}
	fmObj.submit();
} 
INVEN.Outlogin.saveId = function(fmObj) {
	fmObj = fmObj ? getObj(fmObj) : getObj("comLeftLoginForm");
	if (fmObj.save_id.checked==true) {
		if (confirm("아이디 저장 기능을 사용하시겠습니까?") == true) {
			setCookie("USERID", fmObj.user_id.value, (30 * 24));
		} else {
			fmObj.save_id.checked = false;
			setCookie("USERID", "", (30 * 24));
		}
	} else {
		if (confirm("아이디 저장 기능을 해제하시겠습니까?") == true) {
			setCookie("USERID", "", (30 * 24));
		} else {
			fmObj.save_id.checked = true;
		}
	}
	fmObj.password.focus();		
}
INVEN.Outlogin.loadSavedId = function(fmObj) {
	fmObj = fmObj ? getObj(fmObj) : getObj("comLeftLoginForm");
	var USERID = getCookie('USERID');
	if ((USERID) && (USERID != 'x')) {
		fmObj.save_id.checked = true;
		fmObj.user_id.value = USERID;
	}
}

// 아웃로긴 v3용  라벨이 텍스트박스안으로 들어가 있을때만
INVEN.Outlogin.loadSavedIdV3 = function(fmObj) {
	fmObj = fmObj ? getObj(fmObj) : getObj("comLeftLoginForm");
	var USERID = getCookie('USERID');
	if ((USERID) && (USERID != 'x')) {
		fmObj.save_id.checked = true;
		fmObj.user_id.value = USERID;
		INVEN.Html.previousObj(fmObj.user_id).style.display = 'none';
	} 
	if (fmObj.save_id.checked == false) {
		fmObj.user_id.value = "";
	}
}


