var __iub_popup_placer = function(){
	var x = document.getElementsByClassName("iubenda-advertising-preferences-link");
	if(x.length>1) x[0].addEventListener("click",function(){_iub.cs.ui.showCP(!1, !0);});
	else setTimeout(__iub_popup_placer, 300);
}
setTimeout(__iub_popup_placer, 300);