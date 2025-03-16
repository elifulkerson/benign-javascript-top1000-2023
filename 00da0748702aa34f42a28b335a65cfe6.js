var url = window.location.href;
        var pathname = window.location.pathname;
        var lastIndex = pathname.substring(pathname.lastIndexOf('/') + 1);
        var pagename = lastIndex.slice(0, lastIndex.indexOf("."));

        function getMeta(metaName) {
          var metas = document.getElementsByTagName('meta');
          for (let i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('property') === metaName || metas[i].getAttribute('name') === metaName) {
              return metas[i].getAttribute('content');
            }
          }
          return '';
        }
        var pageMetaName = getMeta("og:title");
        var env = getMeta("env");

        var tc_vars = {
            cms_template_name: '/apps/labanquepostale/sitepublic/templates/homepage',
            cms_page_name: window.location.pathname,
            cms_page_title: pagename  !== "" ? pagename : pageMetaName,
            override_page_name: "",
            xiti_xtpage: 'particulier',
            xiti_xtsite: '388889',
            environnement: env
        };