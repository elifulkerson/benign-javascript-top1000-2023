if(GetCookie('un_type')){
$('#check-smart').show();
}
function gosmart(){
DeleteCookie('un_type');
window.location.href = Core.base;
}