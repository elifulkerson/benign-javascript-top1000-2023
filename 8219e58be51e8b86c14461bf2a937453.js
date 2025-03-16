(function (n, i, v, r, s, c, x, z) {
            x = window.AwsRumClient = { q: [], n: n, i: i, v: v, r: r, c: c };
            window[n] = function (c, p) {
                x.q.push({ c: c, p: p });
            };
            z = document.createElement("script");
            z.async = true;
            z.src = s;
            document.head.insertBefore(z, document.getElementsByTagName("meta")[0]);
        })("cwr", "ae193c96-7b32-494b-9958-42f735b49e2b", "1.0.0", "us-east-1", "https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js", {
            sessionSampleRate: 0.1,
            guestRoleArn: "arn:aws:iam::344193339475:role/RUM-Monitor-us-east-1-344193339475-7464459394461-Unauth",
            identityPoolId: "us-east-1:aec28603-b38d-43b7-9fa3-abf641f79d72",
            endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
            telemetries: ["performance", "errors", "http"],
            allowCookies: true,
            enableXRay: false,
        });