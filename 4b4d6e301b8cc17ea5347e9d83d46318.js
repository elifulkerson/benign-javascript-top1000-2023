try {
let pcg_total_war_pharaoh_logo_takeover_in_US = {
start: Math.floor(new Date('October 11, 2023 5:01:00') / 1000),
end: Math.floor(new Date('October 13, 2023 3:59:00') / 1000),
now: Math.floor(Date.now() / 1000)
};
if (
pcg_total_war_pharaoh_logo_takeover_in_US.now > pcg_total_war_pharaoh_logo_takeover_in_US.start &&
pcg_total_war_pharaoh_logo_takeover_in_US.now < pcg_total_war_pharaoh_logo_takeover_in_US.end && document.cookie.indexOf('FTR_Country_Code=US') > -1 && 1
) {
document.querySelector('.site-logo').innerHTML = '<img alt="PC GAMER" loading="eager" src="https://cdn.mos.cms.futurecdn.net/mgPvXEs45PjPwYF3kJJWYK-140-80.gif">';
}
else {
}
} catch(e) {
console.log("Total war pharaoh failed", e)
};