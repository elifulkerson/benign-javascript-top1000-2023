var isInIframe = (window.location != window.top.location);
		var isNotDotcom = ( window.location.href.indexOf('samsung.com') < 0);
        var isTopNotDotcom = ( window.top.location.href.indexOf('samsung.com') < 0);
        
		//404 페이지에서는 실행하지 않음.
		if ( window.location.href.indexOf('404') < 0 && isTopNotDotcom) {
			if ( isInIframe == true ) {
				   console.log('isInIframe =' + isInIframe );
				   //에러 페이지 이동  self.location.href   /"+siteCd+"/common/404.html 
				   window.location.href = '/us/common/404.html';
				} else {
				   console.log('isInIframe =' + isInIframe );
				}    
		}