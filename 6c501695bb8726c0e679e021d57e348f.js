var ps_container = document.getElementById('pyramid_scheme_promo_link');
  var ps_data = window.localStorage.pyramidScheme ? JSON.parse(window.localStorage.pyramidScheme) : null;
  var ps_lastSeen = ps_data ? new Date(ps_data.lastSeen) : null;
  var ps_now = new Date();
  var ps_showPlayedPromo = false;
  var ps_regularPromoUrl = "https://modulous.huffpost.com/2023/08/02/1691000779-ps-promo-desktop.gif";
	var ps_playedPromoUrl = "https://modulous.huffpost.com/2023/07/31/1690825623-ps-promo-play-again-desktop.png";
  var ps_img = new Image(300);
  if (ps_lastSeen && ps_lastSeen.toDateString() !== ps_now.toDateString()) {
		ps_showPlayedPromo = true;
  }   
  ps_img.src = ps_showPlayedPromo ? ps_playedPromoUrl : ps_regularPromoUrl;
	ps_container.append(ps_img);