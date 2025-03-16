!function (a, b, c) {
            a.MynetObject = c;
            a[c] = a[c] || function () {
                var asyncReq = typeof (arguments[1]) === "undefined" ? -1 : Math.abs(parseInt(arguments[1]));
                a[c].q = a[c].q || [];
                typeof (a[c].executeStatus) !== "undefined"
                    ? (asyncReq === -1 ? arguments[0]() : setTimeout(function (fnc) {
                        fnc();
                    }, asyncReq, arguments[0]))
                    : a[c].q.push(arguments);
            };
        }(window, document, "mynetReady");