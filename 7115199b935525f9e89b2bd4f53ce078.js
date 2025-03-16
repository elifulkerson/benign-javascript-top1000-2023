var browserType = navigator.userAgent;
    if(browserType.indexOf("MSIE")>=0){
        function getParentWithClass(ele, parentClass){
            var e = ele;
            while(e.className.indexOf(parentClass)<0){
                e = e.parentElement;
            }
            return e;
        }

        function showMessageHideAll() {
            document.querySelector('#amex-header').style.display='none';
            document.querySelector('#amex-footer').style.display='none';

            var condContainerElement = document.querySelector('.conditional-container');
            var containingParentGrid = getParentWithClass(condContainerElement, 'aem-GridColumn');
            if(!containingParentGrid) { return; }
            var absParentNode = containingParentGrid.parentNode;
            if(!containingParentGrid) { return; }
            var childElements = absParentNode.children;
            for (i = 0; i < childElements.length; i++) {
                if (!childElements[i]) { continue;}
                if (childElements[i].querySelectorAll(".conditional-container").length > 0) {
                    document.querySelector('.legacy-browser').style.display = "block";
                } else {
                    childElements[i].style.display = "none";
                }
            }
        };
        document.onreadystatechange = function () {
            console.debug("onreadystatechange");
            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                showMessageHideAll();
            }
        }
    }