var honorNav = document.querySelector('.menu-sub-item-honor');
var crucialNav = document.querySelector('.menu-sub-item-crucial');
var withinDate = false
var startDate = new Date('2023-08-28T00:00:00');
var endDate = new Date('2023-09-30T23:00:00');
var now = new Date(Date.now());
withinDate = startDate < now && now < endDate;
// Show honor nav within dates
if (honorNav && withinDate) {
honorNav.style.display = 'inline-block';
}
// Remove crucial within dates only if honor is present
if (crucialNav && honorNav && startDate < now) {
crucialNav.style.display = 'none'
}
// Remove crucial at end date, when no honor present
if (crucialNav && !honorNav && now > endDate) {
crucialNav.style.display = 'none'
}