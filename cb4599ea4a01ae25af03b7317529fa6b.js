function pushToDataLayer (delay) {
window.dataLayer.push(Object.assign({
'event': 'pageLoad',
'pageName': document.getElementById("gtm_pageName").value || undefined,
'pageLanguage': document.getElementById("gtm_pageLanguage").value || undefined,
'userCountry': document.getElementById("gtm_userCountry").value || undefined,
'zoom_id': window.zmGlobalMrktKey || undefined,
'fullUrl': window.location.href || undefined,
'userStatus': document.getElementById("gtm_userStatus").value || undefined,
'userRole': document.getElementById("gtm_userRole").value || undefined,
'productUserType': document.getElementById("gtm_productUserType").value || undefined,
'accountType': document.getElementById("gtm_accountType").value || undefined,
'accountPlanType': document.getElementById("gtm_accountPlanType").value || undefined,
'accountChannel': document.getElementById("gtm_accountChannel").value || undefined,
'domainType': document.getElementById("gtm_domainType").value || undefined,
'billingCycle': document.getElementById("gtm_billingCycle").value || undefined,
'expirationDate': document.getElementById("gtm_expirationDate").value || undefined,
'autoRenew': document.getElementById("gtm_autoRenew").value || undefined,
'rateMrr': document.getElementById("gtm_rateMrr").value || undefined,
'chargeType': document.getElementById("gtm_chargeType").value || undefined,
'licenseCount': document.getElementById("gtm_licenseCount").value || undefined,
'paidStartDate': document.getElementById("gtm_paidStartDate").value || undefined,
'licenseDiscount': document.getElementById("gtm_licenseDiscount").value || undefined,
'addOns': document.getElementById("gtm_addOns").value || undefined,
'trackingGuid': document.getElementById("gtm_trackingGuid").value || undefined,
'visitorGuid': document.getElementById("gtm_visitorGuid").value || undefined,
'salesChannel': document.getElementById("gtm_salesChannel").value || undefined,
'verticalSegment': document.getElementById("gtm_verticalSegment").value || undefined,
'salesSegment' : document.getElementById("gtm_salesSegment").value || undefined,
'salesDivision' : document.getElementById("gtm_salesDivision").value || undefined,
'billingCountry': document.getElementById("gtm_billingCountry").value || undefined,
'employeeCount' : document.getElementById("gtm_employeeCount").value || undefined,
}, window.extraPageLoadFields || {}));
}
document.addEventListener('DOMContentLoaded', function () {
// Fire GTM Page Load event with data.
window.dataLayer = window.dataLayer || [];
if (window.gtmPromise) {
window.gtmPromise.then(function () {
pushToDataLayer();
});
} else {
pushToDataLayer();
}
});