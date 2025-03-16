window.start_loading_page = new Date();

       
       var logged_in = 0;
       

       var site_user_id = 0;
       var site_user_country = '';
       var site_user_edition = 'us';
       var site_ui_version = 'desktop';
       var site_host = 'spankbang.com'

       var session_token = '';
       var session_sakey = '';

       var app_branch = 'master';
      var ana_experiment_id = 'master';


    
    var page_matadata = [];
    


    function analytics_track_event(category, label, value, method, branch){ return true;}
    function analytics_track_pageview(source) { return true;}
    function analytics_ping(method, branch) {return true;}