try {
        var cccNavIsOptimize = true
        var cccTransformLeft = localStorage.getItem('transformDistance') || 0
        document.querySelector('.header-optimize__cate-controller').style.transform = 'translateX(' + cccTransformLeft + 'px)'  
    } catch (error) {
    }