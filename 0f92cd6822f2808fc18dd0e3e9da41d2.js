if ('IntersectionObserver' in window === false ||
        'IntersectionObserverEntry' in window === false ||
        'intersectionRatio' in window.IntersectionObserverEntry.prototype === false
    ) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://static.parastorage.com/unpkg/intersection-observer@0.12.0/intersection-observer.js');
        document.body.appendChild(s);
    }