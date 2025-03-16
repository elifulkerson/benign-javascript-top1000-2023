(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  	ga('create', 'UA-10041906-69', 'auto', {'allowLinker': true});
    ga('require', 'linker');
    ga('linker:autoLink', ['radiobiobio.cl'] );

    ga("create", "UA-54052200-1", "auto", "pagina7");
    ga("pagina7.set", "referrer", "https://www.biobiochile.cl");

    var title = document.title
    var i = title.indexOf('|')

    title = title.substr(0, i === -1 ? title.length : i).trim()
  	//ga('send', 'pageview', location.pathname);

    

    ga('send', 'pageview', location.pathname, {
  	title: title
  })