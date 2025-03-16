FlexiLoader.requires.push((function () {
new Flexi.Lazy({init: true, offsetY:150, delegateOn: 'body', 'elementsAccessor': '.lazy, .lazyload'});
if (Flexi.Carouzelize) {
Flexi.Carouzelize();
}
//new Flexi.DelayedHover();
}));