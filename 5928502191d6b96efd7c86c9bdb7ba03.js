if (top.location.hostname != location.hostname || top.location.pathname != location.pathname) {
                top.location.href = document.location.href ;
            }