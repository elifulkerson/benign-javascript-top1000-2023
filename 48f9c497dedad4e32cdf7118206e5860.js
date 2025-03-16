$(function () {
/*CheckLoginUser*/
function CheckLoginUserAccount(obj) {
if (obj.length) {
$('.js_CheckLoginUser').CheckLoginUser();
}
}
CheckLoginUserAccount($('.MainNav .js_CheckLoginUser'));
/**/
function CallNavigate(obj) {
if (obj.length) {
$('*[kind="click"]').off('click').on('click', function (e) {
eval('$(this).' + $(this).attr('fn') + '(e)');
});
$('.js_InsidePIB').live('click', function () {
$(this).siblings('.js_PopupPersonalBlog').slideToggle(0);
});
$.fn.ToggleMinimizeMenu = function () {
$('.js_MinimizeMenu').toggleClass('ActiveMinimizeMenu');
$(this).siblings('.js_LinkTN').fadeToggle(500, 'linear');
}
$('body').click(function (e) {
if (!$(e.target).closest('.js_ShyMenu').length) {
CloseMainNavigate();
}
if (!$(e.target).closest('.js_shyPersonalInfo').length)
$('.js_PopupPersonalBlog').fadeOut(500, 'linear');
});
$('html').keydown(function (e) {
if (e.which == 27) {
CloseMainNavigate();
if (!$(e.target).closest('.js_shyPersonalInfo').length)
$('.js_PopupPersonalBlog').fadeOut(500, 'linear');
return false;
}
});
function CloseMainNavigate() {
if ($('.js_LinkTN').is(':visible') && $('.ActiveMinimizeMenu').length) {
$('.js_MinimizeMenu').removeClass('ActiveMinimizeMenu');
$('.js_LinkTN').slideUp(500, 'easeOutBounce');
}
}
}
}
CallNavigate($('.GeneralNavigation:not(.js_menuplugin)'));
});