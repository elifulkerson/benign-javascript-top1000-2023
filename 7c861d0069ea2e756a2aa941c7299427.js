const publisher = "buzzfeedinc-huffpostus";
        const taboolaNewsroomSrc = `//c2.taboola.com/nr/${publisher}/newsroom.js`;
        window._newsroom = window._newsroom || [];

        window._newsroom.push({ pageTemplate: "home" });
        window._newsroom.push({ pageDashboard: "home" });
        window._newsroom.push('auditClicks');
        window._newsroom.push('trackPage');

        !function(e,f,u){
            e.async=1;
            e.src=u;
            f.parentNode.insertBefore(e,f);
        }(
            document.createElement('script'),
            document.getElementsByTagName('script')[0],
            taboolaNewsroomSrc,
        );