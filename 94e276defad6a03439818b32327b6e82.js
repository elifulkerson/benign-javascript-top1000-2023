// Detect use of a translation tool and redirect to align to corresponding language version as appropriate
function alignLanguage(language) {
	const languageAltList = [...document.querySelectorAll("[rel=alternate]")];
	let languageArray = [];
	languageAltList.forEach((element) => {
		languageArray[element.hreflang.split("-")[0]] = element.href;
	});
	if (languageArray[language] !== undefined) {
		location.href = languageArray[language];
	}
}

const htmlEl = document.querySelector("html");
const onTranslationMutation = function (mutationsList, observer) {
	if (document.querySelector("html").className.indexOf("translated-") > -1) {
		alignLanguage(document.documentElement.lang.split("-")[0]);
	}
};
const observer = new MutationObserver(onTranslationMutation);
observer.observe(htmlEl, { attributes: true });
