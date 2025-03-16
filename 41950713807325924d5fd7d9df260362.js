window.Aedu = { hit_data: null };
    window.Aedu.SiteStats = {"premium_universities_count":16206,"monthly_visitors":"80 million","monthly_visitor_count":80454725,"monthly_visitor_count_in_millions":80,"user_count":239083880,"paper_count":47628128,"paper_count_in_millions":47,"page_count":432000000,"page_count_in_millions":432,"pdf_count":16500000,"pdf_count_in_millions":16};
    window.Aedu.serverRenderTime = new Date(1697431143000);
    window.Aedu.isUsingCssV1 = false;
    window.Aedu.enableLocalization = true;
    window.Aedu.activateFullstory = false;

    window.Aedu.serviceAvailability = {
      status: {"attention_db":"on","bibliography_db":"on","contacts_db":"on","email_db":"on","indexability_db":"on","mentions_db":"on","news_db":"on","notifications_db":"on","offsite_mentions_db":"on","redshift":"on","redshift_exports_db":"on","related_works_db":"on","ring_db":"on","user_tests_db":"on"},
      serviceEnabled: function(service) {
        return this.status[service] === "on";
      },
      readEnabled: function(service) {
        return this.serviceEnabled(service) || this.status[service] === "read_only";
      },
    };