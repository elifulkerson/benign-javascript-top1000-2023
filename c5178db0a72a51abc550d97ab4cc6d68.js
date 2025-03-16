var ck=document.cookie;
function getcookie(n){
	var ar=n+"=";var al=ar.length;var cl=ck.length;var i=0;while(i<cl)
	{j=i+al;if(ck.substring(i,j)==ar)
	{e=ck.indexOf(";",j);if(e==-1)
	e=ck.length;return unescape(ck.substring(j,e));}
	i=ck.indexOf(" ",i)+1;if(i==0)
	break;}
	return "";
}
var querystring = "";var path = "";var domain = "";var Rkey_data = "";var Rkey = Math.floor(Math.random() * 1000000);
querystring = window.location.search;
path = window.location.pathname;
domain = window.location.host;
var tmp_ref = encodeURIComponent(document.referrer);
if((tmp_ref == null) || (tmp_ref.length == 0)){tmp_ref = "";}
var resolution = screen.width+'x'+screen.height;
if (querystring == ""){Rkey_data = "?rkey="+Rkey+"&w="+resolution;}else{Rkey_data = "&rkey="+Rkey+"&w="+resolution;}
if(tmp_ref != ""){Rkey_data += "&ref="+tmp_ref;}
var metriccall_img = new Image();
metriccall_img.src ='//usmetric.rediff.com/'+domain+path+querystring+Rkey_data+'&device=pc';

var Rlo="";var Rl = "";
Rlo	= getcookie("Rlo");
Rlo = unescape(Rlo).replace(/\+/g," ");
Rlo = Rlo.replace("@rediffmail.com","");
Rlo = Rlo.replace(/[^\w\d\s\-\_]/ig,'');
Rl = getcookie("Rl");
Rl = Rl.replace(/[^\w\d\s\-\_@\.]/ig,'');
var tmp_rsc1 = "";
tmp_rsc1 = getcookie("Rsc");