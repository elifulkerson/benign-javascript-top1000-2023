if (jQuery.migrateWarnings.length > 0 && window.newrelic) {
        window.newrelic.noticeError("jQuery Migrate", {warnings: jQuery.migrateWarnings});
    }