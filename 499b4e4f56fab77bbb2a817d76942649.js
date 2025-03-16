(function (window, options) {
    var scrollOffset = options.sOffset || 100;
    var videoOffset = options.vOffset || 100;
    var useStickyRR = options.enableStickyRR || false;
    var stickyRRMinWidth = options.stickyRRMinWidth || 901;
    var scrolledClass = 'hasScrolled';
    var scrolledVideoClass = 'hasScrolledPastVideoPlayer';
    var stickyEnabledClass = 'stickyEnabled';
    var stickyRRClass = 'RightRail--sticky';
    var stickyBottomClass = 'sticky-bottom';

    var docIsReady = function (callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            setTimeout(callback, 1);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };

    var throttleFn = function (callback, time) {
        if (typeof requestAnimationFrame === 'function') {
            return function () {
                requestAnimationFrame(callback);
            };
        } else {
            var throttling = false;
            return function () {
                if (throttling) {
                    return;
                }
                throttling = true;
                setTimeout(function () {
                    callback();
                    throttling = false;
                }, time);
            };
        }
    };

    docIsReady(function() {
        var bodyElem = document.body;
        var docElem = document.documentElement;
        var videoElem = document.querySelector('.m-video-wafer');
        var rightRailParent = document.querySelector('.RightRail');
        var rightRailStack = rightRailParent ? rightRailParent.firstChild : null;
        var main = document.getElementById('main');
        var middle = document.querySelector('.Middle');
        var masterWrap = document.querySelector('.Masterwrap');
        var footer = document.querySelector('.Footerwrap');

        var scrollHandler = throttleFn(function() {
            var scrollTop = Math.max(bodyElem.scrollTop, docElem.scrollTop);
            var topOffset = (main && main.offsetTop || 0) + (masterWrap && masterWrap.offsetTop || 0) ;

            if (scrollTop >= scrollOffset) {
                docElem.classList.add(scrolledClass);
            } else {
                docElem.classList.remove(scrolledClass);
            }
            if (videoElem) {
                var vidBottom = videoElem.offsetHeight + videoElem.offsetTop + topOffset - scrollTop;
                if (vidBottom < (window.innerHeight - videoOffset)) {
                    docElem.classList.add(scrolledVideoClass);
                } else {
                    docElem.classList.remove(scrolledVideoClass);
                }
            }
            if (useStickyRR && rightRailParent && rightRailStack && stickyRRMinWidth <= window.innerWidth) {
                docElem.classList.add(stickyEnabledClass);
                var rrHeight = rightRailStack.offsetHeight;
                var rrBottom = rrHeight + rightRailStack.offsetTop + topOffset - scrollTop;
                var footerOffset = footer ? footer.clientHeight : 0;
                var scrollBottom = bodyElem.clientHeight - scrollTop - window.innerHeight;
                var middleHeight = middle && middle.clientHeight || 0;
                var rrIsLargerThanMain = (main.clientHeight + middleHeight) - rrHeight <= 0;
                var rrIsSmallerThanWindow = (rrHeight + topOffset) <= window.innerHeight;
                if (rrIsSmallerThanWindow || (!rrIsLargerThanMain && rrBottom <= window.innerHeight)) {
                    rightRailParent.classList.add(stickyRRClass);
                    !rrIsSmallerThanWindow && rightRailStack.classList.add(stickyBottomClass);
                    if (footer && scrollBottom < footerOffset && (rrHeight + footerOffset > window.innerHeight)) {
                        rightRailStack.style.transform = 'translateY(' + (scrollBottom - footerOffset) + 'px)';
                    }
                }
                if (rrIsLargerThanMain || (!rrIsLargerThanMain && scrollTop < Math.abs((rrHeight + topOffset) - window.innerHeight))) {
                    rightRailStack.style.transform = '';
                    !rrIsSmallerThanWindow && rightRailParent.classList.remove(stickyRRClass);
                    !rrIsSmallerThanWindow && rightRailStack.classList.remove(stickyBottomClass);
                }
            } else {
                docElem.classList.remove(stickyEnabledClass);
                rightRailParent && rightRailParent.classList.remove(stickyRRClass);
                if (rightRailStack) {
                    rightRailStack.style.transform = '';
                    rightRailStack.classList.remove(stickyBottomClass);
                }
            }
        }, 100);

        window.addEventListener('scroll', scrollHandler);
    });
})(window, {"scrollOffset":100,"videoOffset":100,"stickyRRMinWidth":901,"enableStickyRR":false});