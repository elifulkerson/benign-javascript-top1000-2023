window.deferredEnrollmentEvents = {};
      
    fetch(
      "https://www.google-analytics.com/batch", {
        method: "POST",
        body: `v=1&t=event&tid=UA-11757081-1&ds=mp&cd5=mp&uid=cdf6f5870b26dc7f68960993d046342d&ec=asanadotcomLoggedOutExperimentEnrollment&ea=GrowthBook+enrollment&el=nav_whats_new-mp_precons+-+cdf6f5870b26dc7f68960993d046342d+-+1&ev=1&cid=undefined
v=1&t=event&tid=UA-11757081-1&ds=mp&cd5=mp&uid=cdf6f5870b26dc7f68960993d046342d&ec=GrowthBookExperimentEnrollment&ea=GrowthBook+reporting&el=nav_whats_new-mp_precons+-+1&ev=1&cid=undefined
v=1&t=event&tid=UA-11757081-1&ds=mp&cd5=mp&uid=cdf6f5870b26dc7f68960993d046342d&ec=asanadotcomLoggedOutExperimentEnrollment&ea=GrowthBook+enrollment&el=nav_004_feature_detail_feature_category-mp_precons+-+cdf6f5870b26dc7f68960993d046342d+-+4&ev=4&cid=undefined
v=1&t=event&tid=UA-11757081-1&ds=mp&cd5=mp&uid=cdf6f5870b26dc7f68960993d046342d&ec=GrowthBookExperimentEnrollment&ea=GrowthBook+reporting&el=nav_004_feature_detail_feature_category-mp_precons+-+4&ev=4&cid=undefined`,
      }
    );
  

      fetch(
        "/api/update-metrics", {
          method: "POST",
          body: JSON.stringify({
            metrics: [{"event":"asanadotcomLoggedOutExperimentEnrollment","eventCategory":"asanadotcomLoggedOutExperimentEnrollment","eventAction":"GrowthBook enrollment","eventValue":1,"eventLabel":"nav_whats_new - cdf6f5870b26dc7f68960993d046342d - 1","experiment_id":"nav_whats_new","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":1,"variant_label":"On","bucketing_system_id":"GrowthBook"},{"event":"GrowthBookExperimentEnrollment","eventCategory":"GrowthBookExperimentEnrollment","eventAction":"GrowthBook reporting","eventValue":1,"eventLabel":"nav_whats_new - 1","experiment_id":"nav_whats_new","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":1,"variant_label":"On","bucketing_system_id":"GrowthBook"},{"event":"asanadotcomLoggedOutExperimentEnrollment","eventCategory":"asanadotcomLoggedOutExperimentEnrollment","eventAction":"GrowthBook enrollment","eventValue":4,"eventLabel":"nav_004_feature_detail_feature_category - cdf6f5870b26dc7f68960993d046342d - 4","experiment_id":"nav_004_feature_detail_feature_category","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":4,"variant_label":"Features Descriptions","bucketing_system_id":"GrowthBook"},{"event":"GrowthBookExperimentEnrollment","eventCategory":"GrowthBookExperimentEnrollment","eventAction":"GrowthBook reporting","eventValue":4,"eventLabel":"nav_004_feature_detail_feature_category - 4","experiment_id":"nav_004_feature_detail_feature_category","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":4,"variant_label":"Features Descriptions","bucketing_system_id":"GrowthBook"}].filter((evt) => evt.event === "asanadotcomLoggedOutExperimentEnrollment").map(event => (
              {
                type: "increment",
                metricName: "experimentation.enrollment_funnel.script_executed",
                value: 1,
                tags: "experiment_name:" + event.experiment_id + ",experiment_variant:" + event.variant_id + ",event_type:pageload"
              }
            )).concat(Object.entries(window.deferredEnrollmentEvents).map(([experiment_name, events]) => {
              const event = events.find((evt) => evt.event === "asanadotcomLoggedOutExperimentEnrollment");
              if (!event) {
                return {
                  type: "increment",
                  metricName: "experimentation.enrollment_funnel.script_executed.deferred_enrollment_event_missing",
                  value: 1,
                  tags: "experiment_name:" + experiment_name
                };
              }
              return {
                type: "increment",
                metricName: "experimentation.enrollment_funnel.script_executed",
                value: 1,
                tags: "experiment_name:" + event.experiment_id + ",experiment_variant:" + event.variant_id + ",event_type:deferred"
              }
            }))
          }),
        }
      );

      window.AsanaStorage.logEnrollmentEvent({"event":"asanadotcomLoggedOutExperimentEnrollment","eventCategory":"asanadotcomLoggedOutExperimentEnrollment","eventAction":"GrowthBook enrollment","eventValue":1,"eventLabel":"nav_whats_new - cdf6f5870b26dc7f68960993d046342d - 1","experiment_id":"nav_whats_new","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":1,"variant_label":"On","bucketing_system_id":"GrowthBook"}, false, null, null);
window.AsanaStorage.logEnrollmentEvent({"event":"GrowthBookExperimentEnrollment","eventCategory":"GrowthBookExperimentEnrollment","eventAction":"GrowthBook reporting","eventValue":1,"eventLabel":"nav_whats_new - 1","experiment_id":"nav_whats_new","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":1,"variant_label":"On","bucketing_system_id":"GrowthBook"}, false, null, null);
window.AsanaStorage.logEnrollmentEvent({"event":"asanadotcomLoggedOutExperimentEnrollment","eventCategory":"asanadotcomLoggedOutExperimentEnrollment","eventAction":"GrowthBook enrollment","eventValue":4,"eventLabel":"nav_004_feature_detail_feature_category - cdf6f5870b26dc7f68960993d046342d - 4","experiment_id":"nav_004_feature_detail_feature_category","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":4,"variant_label":"Features Descriptions","bucketing_system_id":"GrowthBook"}, false, 961, null);
window.AsanaStorage.logEnrollmentEvent({"event":"GrowthBookExperimentEnrollment","eventCategory":"GrowthBookExperimentEnrollment","eventAction":"GrowthBook reporting","eventValue":4,"eventLabel":"nav_004_feature_detail_feature_category - 4","experiment_id":"nav_004_feature_detail_feature_category","bucketing_id":"cdf6f5870b26dc7f68960993d046342d","variant_id":4,"variant_label":"Features Descriptions","bucketing_system_id":"GrowthBook"}, false, 961, null);