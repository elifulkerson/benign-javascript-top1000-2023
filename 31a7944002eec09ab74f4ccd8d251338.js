(function() {
var style = document.createElement('style');
style.textContent = '@import "https://content.r9cdn.net/res/combined.css?v=e14f0d47c8e1efcbf67f83ad1c0a98ffd2643893-14pre-flipped&cluster=4"; @import "https://content.r9cdn.net/res/combined.css?v=f44c7db841fbc1351c4bfa0b1ce03554cdf2fe78-14pre-flipped&cluster=4"; ';
var fi = setInterval(function() {
try {
style.sheet.cssRules;
document.body.style.display = "block";
clearInterval(fi);
} catch (e){}
}, 10);
document.head.appendChild(style);
})();