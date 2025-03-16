(function () {
function setupStylesList () {
var styleList = []
var fonts = window.document.querySelectorAll(
"[type='font/woff2'], link[href^='https://fonts']",
)
fonts.forEach(function (font) {
if (font.tagName === 'link') {
styleList.push({
into: 'head',
type: 'link',
href: font.href,
class: font.className
})
} else {
styleList.push({
into: 'head',
type: 'style',
style: font.innerHTML,
class: font.className
})
}
})
var styles = window.document.querySelectorAll('style')
styles.forEach(function (style) {
styleList.push({
into: 'body',
type: 'style',
style: style.innerHTML,
class: style.className
})
})
var progressiveLinkStyles = window.document.querySelectorAll(
'link.vanilla-progressive',
)
progressiveLinkStyles.forEach(function (linkStyle) {
styleList.push({
into: 'body',
type: 'link',
href: linkStyle.href,
class: linkStyle.className
})
})
return styleList
}
window.addEventListener('message', function (event) {
if (!event.data) {return}
if (!event.source) {return}
if (typeof event.data !== 'object') {return}
if (!event.data.requestId) {return}
if (event.data.type !== 'future-sponsored-setup-styles-request') {return}
event.source.postMessage({
type: 'future-sponsored-setup-styles-response',
responseId: event.data.requestId,
styles: setupStylesList(),
}, event.origin)
}, false)
})()