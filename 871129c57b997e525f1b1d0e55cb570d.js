if (window.performance.timing !== undefined && window.performance.timing.responseStart !== 0) {
        window.serverTimeDiff = window.performance.timing.responseStart - (1697428223 * 1000);
    } else {
        window.serverTimeDiff = new Date().getTime() - (1697428223 * 1000);
    }

    if (window.hide_entrance_terms === undefined) {
        window.hide_entrance_terms = false
    }