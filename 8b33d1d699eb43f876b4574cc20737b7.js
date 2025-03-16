try {
var logoEl = document.querySelector('.site-logo');
if (logoEl){
var lotfLogoString = '<img alt="PCGamer logo - lords of the fallen theme" loading="eager" src="https://cdn.mos.cms.futurecdn.net/U82EBh8oMH9cywEGMz9kkB.gif"/>';
var lotfGBDates = {
start: new Date('2023-10-11T23:00:00Z'), // 12AM BST on 12th
end: new Date('2023-10-14T22:59:00Z'), // 11:59PM BST on 14th
}
var lotfUSDates = {
start: new Date('2023-10-13T04:00:00Z'), // 12AM EDT (in NY) on 13th
end: new Date('2023-10-14T06:59:00Z'), // 11:59PM PDT (in LA) on 13th
}
var now = new Date(Date.now());
if (
lotfGBDates.start < now && now < lotfGBDates.end && (
document.cookie.indexOf('FTR_Country_Code=GB') > -1 || document.cookie.indexOf('FTR_User_Defined_Country_Code=GB') > -1
)
) {
logoEl.innerHTML = lotfLogoString;
}
if (
lotfUSDates.start < now && now < lotfUSDates.end && (
document.cookie.indexOf('FTR_Country_Code=US') > -1 || document.cookie.indexOf('FTR_User_Defined_Country_Code=US') > -1
) && document.body.classList.contains('vertical-home')
) {
logoEl.innerHTML = lotfLogoString;
}
} else {
console.log('PCG no logo found for LotF logo integration')
}
} catch(e) {
console.log('Failed to set up Lords of the Fallen logo')
}