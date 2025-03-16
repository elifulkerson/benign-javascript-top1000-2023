window.DjangoCryptotabSharing = {};

window.DjangoCryptotabSharing.lang ='en';

window.DjangoCryptotabSharing.host = 'https://cryptobrowser.site';

window.DjangoCryptotabSharing.setLinkId = function(linkId) {
  var buttonContainers = document.getElementsByClassName('social-btns');
  for (var i = 0; i < buttonContainers.length; i++) {
      buttonContainers[i].setAttribute('data-linkid', linkId);
  }
};



window.DjangoCryptotabSharing.from ='9';




window.DjangoCryptotabSharing.blank = false;