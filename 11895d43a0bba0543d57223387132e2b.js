surveyOptions = {
      startDate: 1380622914,
      endDate: 1609373814,
      frequency: '',
      url: 'https://survey.confirmit.com/wix2/p2683244022.aspx',
      inactive: 'No',
      target: 0.1,
      cookieName: 'survey'
    }
  // Increase frequency of survey to 1 in 100 visitors
  
    var urls = ["/journals/", "/books/", "/solutions/sciencedirect/content/articlechoice", "/solutions/embase-biomedical-research", "/solutions/geofacets"];
    
    var currentPath = window.location.pathname;
    
    urls = urls.filter(function(url) {
      return currentPath.indexOf(url)==0;
    });
    
    if(urls.length > 0) {
        surveyOptions.target = 1;  
    }
    
    $(function(){
      surveyInit(surveyOptions);
    });