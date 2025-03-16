try {
        if (typeof lazyLoadInstance != "undefined") lazyLoadInstance.update();
    } catch (e) {
        console.log('Error on Lazy Load');
    }