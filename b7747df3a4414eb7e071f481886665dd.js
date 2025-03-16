function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
 var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function launchWindow(url,name,w,h,x,y,menu,scroll,status,resize) {
		win = window.open(url,name,'width='+w+',height='+h+',left='+x+',top='+y+',screenx='+x+',screeny='+y+',menubar='+menu+',scrollbars='+scroll+',status='+status+',resizable='+resize+'');
		win.moveTo(x,y); 
		setTimeout("win.focus();",200);
}
function loadWindow(myURL,myWidth,myHeight,myScroll)
{
	if(arguments.length ==4 ){
		myScroll = 1;
		myMenu = 0;
		myStatus = 0;
		myLeft = 200;
	}else{
		myScroll = 0;
		myMenu = 0;
		myStatus = 0;
		myLeft = 0;
	}
	browserType=navigator.appName.charAt(0)+navigator.appVersion.charAt(0)
    if (browserType=="N2")
	{
		thisWindow=window.open("","","toolbar=0,location=0,left="+myLeft+",directories=0,status="+myStatus+",menubar="+myMenu+",scrollbars="+myScroll+",resizable=1,width="+myWidth+",height="+myHeight);
		thisWindow.opener=self;
		thisWindow=myURL;
	}
    if (browserType.charAt(0)=="M")
	{
				thisWindow=window.open(myURL,"","toolbar=0,location=0,left="+myLeft+",directories=0,status="+myStatus+",menubar="+myMenu+",scrollbars="+myScroll+",resizable=1,width="+myWidth+",height="+myHeight);
        thisWindow.opener=self;
    }
    else
	{
		thisWindow=window.open(myURL,"","toolbar=0,location=0,left="+myLeft+",directories=0,status="+myStatus+",menubar="+myMenu+",scrollbars="+myScroll+",resizable=1,width="+myWidth+",height="+myHeight);
        thisWindow.opener=self;
    }
	setTimeout("thisWindow.focus();",200);
}
function MM_preloadImages() { //v3.0
 var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

var quote1, quote2, quote3, quote4, quote5;
quote1="This is quote 1";
quote2="This is quote 2";
quote3="This is quote 3";
quote4="This is quote 4";
quote5="This is quote 5";
function getQuote(){
	var quoteNumber = Math.floor ((Math.random() * 5 + 1))
	document.all.quoteDiv.style.visibility = "visible";
	document.all["quoteDiv"].innerHTML = eval("quote" + quoteNumber);
}
function killQuote(){
	document.all.quoteDiv.style.visibility = "hidden";
}
var quoteNumber = Math.floor ((Math.random() * 10 + 1))
var homeimageNumber = Math.floor ((Math.random() * 10 + 1))



