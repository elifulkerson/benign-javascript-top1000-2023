readyToDo("$,HP", function () {
        var dela = $("<a id='delinfo' href='' rel='nofollow' class='search-no' title='可删除手机号被冒用发布的信息'>修改/删除信息<\/a>");
				dela.attr({
					"href": '//help.58.com/maoyonginfo/index/',
					'onClick': "_gaq.push(['pageTracker._trackEvent', 'home', 'click', 'info_del']);"
				});
        $('#fabu').after(dela);
      });