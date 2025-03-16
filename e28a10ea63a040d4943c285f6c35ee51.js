document.addEventListener("DOMContentLoaded", function () {
    var currentFormStatus = window.localStorage.getItem("homeForm");
    var targetNode = document.querySelector(".home-form");
    // Options for the observer (which mutations to observe)
    var config = {
        attributes: false,
        childList: true,
        subtree: true
    };

    function contains(arrList, findValue) {
        var i = arrList.length;
        while (i--) {
            if (arrList[i] === findValue) return true;
        }
        return false;
    }

    // Callback function to execute when mutations are observed
    var callback = function (mutationsList, observer) {
        // traditional 'for loops' for IE 11
        for (var m = 0; m < mutationsList.length; m++) {
            var mutation = mutationsList[m];
            if (mutation.addedNodes.length > 0) {
                for (var n = 0; n < mutation.addedNodes.length; n++) {
                    var node = mutation.addedNodes[n];
                    if (node.className.includes('onFormSubmittedFeedback')) {
                        observer.disconnect();
                        localStorage.setItem('homeForm', 'true');
                    }
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);
    if (document.getElementById('a02791bb-a190-ea11-a811-000d3a3b1bf3')) {
        return;
    } else {
        // if the form isn't here yet observing the target node for configured mutations
        observer.observe(targetNode, config);
    }
    // remove the form if user had submitted form
    if (currentFormStatus && currentFormStatus === "true") {
        targetNode.remove();
    }
});