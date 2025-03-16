$(function(){
        var jsonLdOrg = {
        "@context": "https://schema.org", 
        "@type": "Organization", 
        "name": "Elsevier",
        "url": "https://www.elsevier.com",
        "sameAs": [
            "https://www.facebook.com/ElsevierConnect", 
            "https://twitter.com/ElsevierConnect", 
            "https://www.youtube.com/c/elsevier/", 
            "https://www.linkedin.com/company/elsevier", 
            "https://plus.google.com/+elsevier"
          ]
        };
        var logo =  { 
          "@type": "ImageObject", 
          "url": ""
        };
        var logoURL = $(".elsevier-wordmark > img").attr("src");
        if($.trim(logoURL)!=="") {
            logo.url = logoURL;
            jsonLdOrg.logo = logo;
        };
        createSchemaTag(jsonLdOrg);
        
        var jsonLdWebPage = {
            "@context": "http://schema.org", 
            "@type": "WebPage", //static
            "headline": $("h1").text() + " - " + $("p.description").text(),
            "image": { //static
            "@type": "ImageObject", //static
            "url": $("section").css("backgroundImage").replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, ''),
            },
            "description": $("meta[name=description]").attr("content"),
            "significantLink":"https://www.elsevier.com/connect, https://www.elsevier.com/rd-solutions, https://www.elsevier.com/research-intelligence, https://www.elsevier.com/clinical-solutions, https://www.elsevier.com/education, https://www.elsevier.com/research-platforms, https://www.elsevier.com/books-and-journals" // Main link from connect section ++ dynamic large-6 columns > h2 > a (all links)
        };
        
        var links = [];
        $(".significantLink").each(function(i,e){links.push(e.href)});
        jsonLdWebPage.significantLink = links.join(", ");

        
        createSchemaTag(jsonLdWebPage);
        
        var jsonLD = {
              "@context": "http://schema.org", 
              "@type": "WebSite", 
              "name": "Elsevier", 
              "url": "https://www.elsevier.com", 
              "potentialAction": {
                "@type": "SearchAction", 
                "target": "https://www.elsevier.com/search-results?query={query}",  //"https://www.elsevier.com/search-results?query={"+query+"}", 
                "query-input": "required name=query"
              }
            }
        createSchemaTag(jsonLD);
    });
   
    
    function createSchemaTag(str) {
        var script_tag = document.createElement('script');
        script_tag.type = 'application/ld+json';
        script_tag.text = JSON.stringify(str, null, '\t');
        document.body.appendChild(script_tag);    
    }