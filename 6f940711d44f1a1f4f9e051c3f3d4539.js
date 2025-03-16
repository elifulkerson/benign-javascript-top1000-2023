/**
 * Load script functionality.
 * @param  {string} location URL of the asset.
 * @param  {function} callback Callback
 */
function loadScript(a,b){var c=document.createElement("script");c.src=a,document.head.appendChild(c),b&&(c.readyState?c.onreadystatechange=function(){("loaded"==c.readyState||"complete"==c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()})}