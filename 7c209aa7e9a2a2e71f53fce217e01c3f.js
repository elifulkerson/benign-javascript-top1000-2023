jQuery(function($) {
		var $centerZone = $('.commu-center .commu-body .center-zone'),
			$tab = $centerZone.find('.tabs li'),
			$tabContents = $centerZone.find('.tab-contents dl');
		$tab.mouseover(function(e) {
			$tab.add($tabContents).removeClass('selected');
			$(this).add($tabContents.eq($(this).index())).addClass('selected');
		});
	});