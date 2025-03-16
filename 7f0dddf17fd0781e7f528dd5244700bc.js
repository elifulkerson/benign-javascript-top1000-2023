var loadDeferredStyles_kemnaker = function() {
	var addStylesNode = document.getElementById("widget-kemnaker-deferred");
	var replacement = document.createElement("div");
	replacement.innerHTML = addStylesNode.textContent;
	document.body.appendChild(replacement)
	addStylesNode.parentElement.removeChild(addStylesNode);
  };
  var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  if (raf) raf(function() { window.setTimeout(loadDeferredStyles_kemnaker, 0); });
  else window.addEventListener('load', loadDeferredStyles_kemnaker);