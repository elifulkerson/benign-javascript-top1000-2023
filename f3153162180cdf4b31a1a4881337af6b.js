window.addEventListener('load', function (){
        TiaraTracker.getInstance()
            .setSvcDomain('user.tistory.com')
            .trackPage('user')
            .setSection('top')
            .setPage('user')
			.setKakaoAppKey('3e6ddd834b023f24221217e370daed18')
			.setAppUserId('')
			.setAutoClick(true)
			.setDisableSendLegacy(true)
            .track();
    });