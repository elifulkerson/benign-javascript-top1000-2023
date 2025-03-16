(function(o,n,e,p,l,u,s){o[l]=o[l]||function(){(o[l].q=o[l].q||[]).push(arguments);};
u=n.createElement(e);u.async=1;u.src=p;s=n.getElementsByTagName(e)[0];s.parentNode.insertBefore(u,s);
}(window,document,"script","https://cdn.opecloud.com/ope-inquirer.js","ope"));

ope("inquirer", "init", "implied");
ope("inquirer", "send", "pageType", { 
  page: "landing", 
    tags: "www"
  });
 
 
 ope("inquirer", "onProfile", function(error, profile) {
  if(error){
    console.log("Failed to load profile: " + error);
  } else {	  
	  
	  
	var googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
     googletag.pubads().setTargeting("1plusX", profile.s);  
     googletag.pubads().setTargeting("opectx", profile.t);  
    });   
	  
	  
    console.log("User segments: " + profile.s);
    console.log("Contextual topics: " + profile.t);
	//console.log(JSON.stringify(profile));
  }
});