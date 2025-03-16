INVEN.Booster = window.INVEN.Booster || {};
INVEN.Booster.objects = window.INVEN.Booster.objects || new Array();
INVEN.Booster.create = function() {
	var n = INVEN.Booster.objects.length;
	INVEN.Booster.objects[n] = new INVEN.Booster.object();
	return INVEN.Booster.objects[n];
}
INVEN.Booster.object = function() {
	/* 내부 변수 */
		var defaultGradeSplit = 50;
	/* 접근 가능 함수 */
		this.init = init;
		this.setDefaultGradeSplit = setDefaultGradeSplit;
		this.getSinBooster = getSinBooster;
	/* 초기화 */
		function init() {
		}
	/* 기본값 설정 */
		function setDefaultGradeSplit(grade) {
			if (!grade || grade < 0) {
				defaultGradeSplit = 50;
			} else {
				defaultGradeSplit = grade;
			}
		}
	/* 각도를 라디안으로 */
		function degreeToRadian(degree) {
			return degree * (Math.PI / 180);
		}
	/* 사인 곡선 부스터 */
		function getSinBooster() {
			var splitArray = new Array();
			var split = defaultGradeSplit;
			var pointLimit = 10000;
			var startRadian = degreeToRadian(270);
			var endRadian = degreeToRadian(450);
			var radianSplit = (endRadian - startRadian) / split;
			splitArray.push(0);
			for (var i = 1; i < split - 1; i++) {
				var temp = parseInt((startRadian + (radianSplit * i)) * pointLimit, 10) / pointLimit;
				temp = (parseInt(Math.sin(temp) * pointLimit, 10) / pointLimit) + 1;
				temp = parseInt(temp * pointLimit, 10) / (pointLimit * 2);
				temp = parseInt(temp * pointLimit, 10) / pointLimit;
				splitArray.push(temp);
			}
			splitArray.push(1);
			return splitArray;
		}
}
