function log() {
}
$(document).ready(function () {           
$('a[href*="/index.aspx"]').each(function () {
$(this).attr('href', $(this).attr('href').replace(/\/index.aspx/gi, '/newindex.aspx'));
});
$('a[href$=".html"]').each(function () {
if ($(this).attr('href').match(/.*\/[0-9]{1,}.html/gi))
$(this).attr('href', $(this).attr('href').replace(/.*\/(.*?).html/gi, '/newindex.aspx?pid=$1'));
});
$('a[href^="index.aspx"]').each(function () {
$(this).attr('href', $(this).attr('href').replace(/index.aspx/gi, '/newindex.aspx'));
});
});