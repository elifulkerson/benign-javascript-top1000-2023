const headElement = document.querySelectorAll('head')[0];
const BORDEAUX_QUERY_PARAM = 'hybrid_bordeaux_version';
const CHAMPAGNE_QUERY_PARAM = 'hybrid_champagne_version';
const bordeauxScriptTag = document.createElement('script');
bordeauxScriptTag.setAttribute("src", 'https://bordeaux.futurecdn.net/bordeaux.js');
bordeauxScriptTag.setAttribute("onerror", "handleHeaderError()");
bordeauxScriptTag.setAttribute("crossorigin", "anonymous");
bordeauxScriptTag.defer = true;
const champagneScriptTag = document.createElement('script');
champagneScriptTag.setAttribute("src", 'https://champagne.futurecdn.net/champagne.js');
champagneScriptTag.setAttribute("onerror", "handleHeaderError()");
champagneScriptTag.setAttribute("crossorigin", "anonymous");
champagneScriptTag.defer = true;
const searchParams = new URLSearchParams(window.location.search);
const qaBordeauxString = searchParams.get(BORDEAUX_QUERY_PARAM);
const qaChampagneString = searchParams.get(CHAMPAGNE_QUERY_PARAM);
let adToolVersion = '';
let featureFlags = window.vanilla.featureFlags;
let pageType = window.adParameters.type;
if (searchParams.has(BORDEAUX_QUERY_PARAM) && qaBordeauxString) {
bordeauxScriptTag.setAttribute("src", `https://bdx.${qaBordeauxString}.public.rtb-qa-eks-euw1.futureplc.engineering/bordeaux.js`);
adToolVersion = `${qaBordeauxString}`;
}
if (searchParams.has(CHAMPAGNE_QUERY_PARAM) && qaChampagneString) {
champagneScriptTag.setAttribute("src", `https://chmp.${qaChampagneString}.public.rtb-qa-eks-euw1.futureplc.engineering/champagne.js`);
}
if (window.disableBordeaux === undefined || window.disableBordeaux === false) {
headElement.append(bordeauxScriptTag, champagneScriptTag);
}
window.bordeaux = window.bordeaux || {};
window.bordeaux.cmd = window.bordeaux.cmd || [];
window.bordeaux.cmd.push(function () {
if (adToolVersion !== '') {
window.bordeaux.setAdToolVersion(adToolVersion);
}
if (window.disableBordeaux === true) {
window.bordeaux.setPageTemplate('no-ads');
return;
}
if (window.dfp_config) {
var getDfpVar = function (name) {
return window.dfp_config[name] || '';
};
var getDfpList = function (name) {
var val = getDfpVar(name);
return val ? val.split(',') : [];
};
window.bordeaux.setTargeting({
source: getDfpVar ('source'),
product: getDfpVar ('product'),
kw: getDfpList('keywords'),
genre: getDfpList('genre'),
vertical: getDfpList('vertical'),
pagetype: getDfpVar ('page_type').replace(',', '-'),
manu: window.dfp_config.product_brand,
articleid: window.dfp_config.article_id,
sitePlatform: window.dfp_config.site_platform,
});
if ((window.dfp_config.page_type === 'homepage' ||
window.dfp_config.page_type === 'list' ||
window.dfp_config.page_type === 'tag-listing') &&
window.dfp_config.vertical) {
window.bordeaux.setPageCategory(window.dfp_config.vertical);
} else {
window.bordeaux.setPageCategory(window.dfp_config.page_type || 'fallback');
}
}
if (window.FEPProcess) {
var fep = window.FEPProcess(window.FEP_object);
window.resolveFEP(fep);
window.bordeaux.setTargeting(window.FEPSanitise({
fepPrimaryProduct: fep.primaryProduct,
fepSecondaryProducts: fep.secondaryProducts,
fepCompanies: fep.companies,
fepCategory: fep.category,
fepGroups: fep.groups,
fepPrimaryCompany: fep.primaryCompany,
primaryCategory: fep.primaryCategory,
secondaryCategories: fep.secondaryCategories,
tertiaryCategories: fep.tertiaryCategories,
}));
}
if (window.VAN.abTest !== undefined) {
window.bordeaux.setTargeting({
vanillaVariationID: window.VAN.abTest.variationId,
});
}
if (window.ffte &&
window.ffte.properties &&
window.ffte.properties.articleControlTag &&
window.ffte.properties.articleControlTag.indexOf('type_buying_guide') > -1) {
window.bordeaux.setSlotAvoidanceDistance({ mobile: 600, tablet: 600, desktop: 600 });
}
window.bordeaux.setPageTemplate("home");
if (window.FUTR && window.FUTR.Kiosq && window.FUTR.Kiosq.hasBarrier) {
window.bordeaux.setPageTemplate('article-paywalled');
}
if (featureFlags.hasOwnProperty('lowAdDensity') &&
featureFlags.lowAdDensity.enabled === true &&
pageType.indexOf('listing') < 0 &&
pageType.indexOf('homepage') < 0 &&
window.innerWidth < 700) {
window.bordeaux.setPageTemplate("article-low-density");
window.bordeaux.setSlotAvoidanceDistance({ desktop: 800, mobile: 800, tablet: 800 });
}
window.bordeaux.init();
window.bordeaux.hybridId.then((id) => {
if(!window.ga) { return }
window.ga('send', 'event', 'future_id', 'set hybrid_id', '', Object.assign({}, window.analytics_ga_data, { dimension77: id, nonInteraction: true }));
});
});