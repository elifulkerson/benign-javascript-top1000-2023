(function () {
		let svgCircle = [...document.querySelectorAll('.gameReview.floatGroup .svg-circle .score-circle')];
		//퍼센테이지 추가
		svgCircle.forEach((ele) => {
			let circleTotalLength = Math.ceil(ele.getTotalLength()),
				percent = ele.closest('.score').querySelector('.percent');
			percentNum = Number(percent.innerText) * 10;
			ele.style = `stroke-dasharray: ${circleTotalLength}; stroke-dashoffset: ${circleTotalLength - circleTotalLength * percentNum / 100}`;
		});
	})()