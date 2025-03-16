let headerAdobePath = '/SystemFragment/adobe/header.adobe.8069c760816a82c4.js';
    var headerGlobalSearchJsPath = '/SystemFragment/search/searchBox/pc.min.8a42d0cad801bc6b.js';
    window.commonHeader = {
      type: "Standard/Large",
      isFixed: true,
      height: 0,
      isFtv: "-2" == "-2",
      isCartPage : !!(/\/cart(?!\/)/.test(flash_fe_core_tool.$util.$coreMethods.getPageName())),
      isPDP: !!(/PDP/.test(flash_fe_core_tool.$util.$coreMethods.getMetaContent("adobeParam"))),
      isOutlet: "show" == 'hide',
      isB2B: !!flash_fe_core_tool.$util.$coreMethods.checkChannel().isB2B,
      setTier2Posi :function(){
        !window.commonHeader.isFtv && Array.prototype.forEach.call(document.querySelectorAll(".second_view"),function(el){el.classList.add("posRelative")})
      }
    };
    window.commonHeader.isFixed = (typeof $$isdecorate === "undefined" && !window.commonHeader.isCartPage && !window.commonHeader.isPDP);
    (function setTier1MaxWidth(){
      let tier1Length = 0;
      let tier1count = 0;
      Array.prototype.forEach.call(document.querySelectorAll(".sup_nav>.nav_item"),function(el){
        tier1Length += el.offsetWidth;
        tier1count++
      })
      document.getElementsByClassName("sup_nav")[0].style.maxWidth = (tier1Length + ((tier1count-1)*50))+"px";
    })()
    //handle header sticky position start
    window.commonHeader.height = window.commonHeader.isFtv? 80:("show"== "show"? 125: 85) ;
    var commonHeaderPlaceHolderEl = document.getElementsByClassName("commonHeaderPlaceHolder")[0];
    var commonHeaderEl = document.getElementsByClassName("commonHeader")[0];
    if(window.commonHeader.isFixed){
      // default is fixed in window
      commonHeaderPlaceHolderEl.style.height = window.commonHeader.height+"px";
      commonHeaderPlaceHolderEl.style.display = "block";
      commonHeaderEl.style.position = "fixed";
    }else {
      // if is decorate page, keep in top of content 
      window.commonHeader.isFixed = false;
      commonHeaderPlaceHolderEl.style.display = "none";
      commonHeaderEl.style.position = "relative";
      window.commonHeader.setTier2Posi();
    }
    //handle header sticky position end
    
    // hide header for app logic
		function hideHeader(){
			commonHeaderPlaceHolderEl.style.display = "none"
			commonHeaderEl.style.display = "none"
		};
		let ua =  window.navigator.userAgent;
		function getAppVersion(){
			return ua.match(/versionCode_.+?\//)? ua.match(/versionCode_.+?\//)[0].match(/\d+/)[0] : 0;
		};
		let isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		let isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1;
		if(flash_fe_core_tool.$util.$coreMethods.isApp() && ((isIOS && getAppVersion() > 207) || (isAndroid && getAppVersion() > 848) )){
			hideHeader();
		}else{
			lecommeonHeader();
		}