var lastScrollY=0;
var percent;
function heartBeat(){
lastScrollY =document.documentElement.scrollTop || document.body.scrollTop;
if(lastScrollY<800)
{
document.getElementById("float_nav").style.display="none";
}
else
{
document.getElementById("float_nav").style.display="block";
}
}
window.setInterval("heartBeat()",1);