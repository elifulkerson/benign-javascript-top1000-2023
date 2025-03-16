var INVEN = window.INVEN || {};
INVEN.Location = window.INVEN.Location || {};

// INVEN.Location.openWin = function(url, target, opt)

/* 쿼리 생성기 */
	INVEN.Location.makeQueryDefault = new Array(',', '->', 'rurl');
	INVEN.Location.setMakeQueryDefault = function() {
		INVEN.Location.makeQueryDefault = new Array(',', '->', 'rurl');
	}
	INVEN.Location.makeQuery = function(file, change, option, rurl) {

		// 주소 가져오기
			var url = location.href.toString();
			var temp = url.split('?');
			if (!file) {
				file = temp[0];
			}
			var query = temp[1];

		// 원본 쿼리 배열화
			var urlQueryArray = new Array();
			if (query) {
				var optArray = query.split('&');
				for (var opt in optArray) {
					var temp = optArray[opt].split('=');
					urlQueryArray[temp[0]] = temp[1];
				}
			}

		// 변경 쿼리 배열화
			var optArray = change.split(INVEN.Location.makeQueryDefault[0]);
			var changeQueryArray = new Array();
			for (var opt in optArray) {
				var temp = optArray[opt].split(INVEN.Location.makeQueryDefault[1]);
				changeQueryArray[temp[0]] = temp[1];
			}

		// 옵션 배열화
			if (option) {
				var optionArray = new Array();
				var temp = option.split(INVEN.Location.makeQueryDefault[1]);
				var option = temp[0];
				if (temp[1]) {
					optionArray = temp[1].split(INVEN.Location.makeQueryDefault[0]);
				}
			}

		// 원본 쿼리 <- 변경 쿼리
			var outQueryArray = new Array();
			// 원본 쿼리 중 변경 쿼리에 없는 것만 아웃 쿼리에 입력
				for (var opt in urlQueryArray) {
					var value = urlQueryArray[opt];
					if (!changeQueryArray[opt]) {
						outQueryArray[opt] = value;
					}
				}
			// 변경 쿼리를 아웃 쿼리에 덧씌움
				for (var opt in changeQueryArray) {
					var value = changeQueryArray[opt];
					outQueryArray[opt] = value;
				}

		// 옵션값에 따라 아웃 쿼리 변경
			switch (option) {
				case 'leave':
					var outQueryArrayTemp = new Array();
					for (var opt in outQueryArray) {
						var value = outQueryArray[opt];
						for (var key in optionArray) {
							if (opt == optionArray[key]) {
								outQueryArrayTemp[opt] = value;
							}
						}
					}
					for (var opt in changeQueryArray) {
						var value = changeQueryArray[opt];
						outQueryArrayTemp[opt] = value;
					}
					outQueryArray = outQueryArrayTemp;
					break;
				case 'remove':
					for (var key in optionArray) {
						if (outQueryArray[optionArray[key]]) {
							outQueryArray[optionArray[key]] = '';
						}
					}
					break;
				case 'clear':
					outQueryArray = changeQueryArray;
					break;
			}

		// 아웃 쿼리중 내용이 없는 것 삭제
			var outQueryArrayTemp = new Array();
			for (var opt in outQueryArray) {
				var value = encodeURIComponent(outQueryArray[opt]);
				if (opt && value) {
					outQueryArrayTemp[opt] = value;
				}
			}
			outQueryArray = outQueryArrayTemp;

		// rurl 추가
			if (rurl) {
				var temp = location.href.toString().replace(/[^:]+:[\/]+[^\/]+/, "");
				outQueryArray[INVEN.Location.makeQueryDefault[2]] = encodeURIComponent(temp);
			}

		// 쿼리 생성
			var opts = new Array();
			var count = 0;
			for (var opt in outQueryArray) {
				var value = outQueryArray[opt];
				opts[count] = opt + '=' + value;
				count++;
			}
			var query = opts.join('&');

		// 주소 생성
			var link = file;
			if (query) {
				link += '?' + query;
			}

		return link;
	}

// 게시판 검색
	function searchBoard(comeidx, name, keyword, iskin, target) {
		// 폼 만들기
			var fObj = document.createElement('form');
			fObj.method = 'get';
			fObj.action = 'https://www.inven.co.kr/board/powerbbs.php';
			fObj.style.display = 'none';
			if (target) {
				fObj.target = target;
			}
		// comeidx 만들기
			var cInput = document.createElement('input');
			cInput.name = "come_idx";
			cInput.value = comeidx;
			fObj.appendChild(cInput);
		// 검색 종류 만들기
			var nInput = document.createElement('input');
			nInput.name = "name";
			nInput.value = name;
			fObj.appendChild(nInput);
		// 검색 내용 만들기
			var sInput = document.createElement('input');
			sInput.name = "keyword";
			sInput.value = keyword;
			fObj.appendChild(sInput);
		// iskin이 있으면 정의
			if (iskin) {
				var iInput = document.createElement('input');
				iInput.name = "iskin";
				iInput.value = iskin;
				fObj.appendChild(iInput);
			}
		// 폼 붙이기
			document.body.appendChild(fObj);
		// 폼 submit
			fObj.submit();
		// 폼 
			document.body.removeChild(fObj);
	}