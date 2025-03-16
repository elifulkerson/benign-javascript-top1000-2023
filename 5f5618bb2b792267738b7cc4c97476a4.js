let hostName = window['location']['hostname'];

    let isLocalhost = (hostName === "localhost");
    let isN11Domain = (hostName === "test.n11.com" || hostName === "qa.n11.com" || hostName === "st.n11.com" || hostName === "www.n11.com" || hostName === "n11.com");
    let isDengageSdkUsableForHost = (isLocalhost || isN11Domain);

    if (isDengageSdkUsableForHost) {
       !function(e,a,n,d,g){e.dengage=e.dengage||function(){(e.dengage.q=e.dengage.q||[]).push(arguments)},d=a.getElementsByTagName("head")[0],(g=a.createElement("script")).async=1,g.src="https://pcdn.dengage.com/p/push/148/c89e71fb-6da3-4eb1-2479-4af53c45ae19/dengage_sdk.js",d.appendChild(g)}(window,document);

       if (isLocalhost) {
          dengage('initialize', {swUrl: '/mallfront/dengage-webpush-sw.js', swScope: '/mallfront/'});
       }
       if (isN11Domain) {
          dengage('initialize', {useSwQueryParams: false});
       }
    }