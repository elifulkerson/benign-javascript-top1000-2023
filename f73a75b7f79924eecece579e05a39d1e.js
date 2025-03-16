$(document).ready(() => {
	const knowStarEle = $('.knowyourstar .astro-list-block');
	const insideContentBlock = knowStarEle.find('.cmp-astro__result-block').siblings('.cmp-astro__inside-content-block');
	const resultUl = knowStarEle.find('.cmp-astro__result-block ul.cmp-astro__star-result');
	$('.knowyourstar #submit').on('click', function () {
		const { year, month, date, time } = getBirthDetails($(this));
		if (year && month && date && time) {
			const currentPath = currentPagePath;
			const mmastro = "mmastro";
			$.ajax({
				url: currentPath + '.' + mmastro + '.' + date + '.' + month + '.' + year + '.' + time + '.json',
				dataType: 'json',
				success: (data) => {
					const astroResultBlock = knowStarEle.find(".cmp-astro__result-block").css("display", "block");
					insideContentBlock.css("display", "none");
					if (astroResultBlock && data) {
						let { rashi, star } = data;
                   		const astroLi = resultUl.closest('.cmp-astro__star-result').find('.cmp-astro__star-li');
                   		if (!astroLi.length) {
                            if (rashi) {
                                let rashiLi = `<li class="cmp-astro__star-li"><p class="cmp-astro__star-p"><span class="bold">Rashi: </span>${rashi}</p></li>`;
                                resultUl.append(rashiLi);
                            }
                            if (star) {
                                let starLi = `<li class="cmp-astro__star-li"><p class="cmp-astro__star-p"><span class="bold">Star: </span>${star}</p></li>`;
                                resultUl.append(starLi);
                            }
                		}
						closePopup();
					}
				},
				error: () => {
				}
			});
		} else {
			const errorBlock = '<p class="cmp-error__blk">Please select all the fields</p>';
			if (!insideContentBlock.find('.cmp-error__blk').length) {
				insideContentBlock.find('button').before(errorBlock);
			}
			insideContentBlock.find('select').on('change', function () {
				const { year, month, date, time } = getBirthDetails($(this));
				if (year && month && date && time) {
					insideContentBlock.find('.cmp-error__blk').remove();
				}
			});
		}
	});

	function getBirthDetails(ele) {
		const wrpEle = ele.closest('.cmp-astro__inside-content-block');
		return {
			year: wrpEle.find('#birthyear').val(),
			month: wrpEle.find('#birthmonth').val(),
			date: wrpEle.find('#birthdate').val(),
			time: wrpEle.find('#birthtime').val()
		};
	}

	function closePopup() {
		knowStarEle.find(".cmp-astro__result-close").on('click', () => {
			knowStarEle.find(".cmp-astro__result-block").css("display", "none");
			insideContentBlock.css("display", "block");
			$('.cmp-astro__inside-content-block select').each(function () {
				$(this).val($(this).find('option:first').val());
			});
			knowStarEle.find('.cmp-astro__star-result .cmp-astro__star-li').remove();
			//$(".cmp-error__blk").remove();
		});
	}
});
