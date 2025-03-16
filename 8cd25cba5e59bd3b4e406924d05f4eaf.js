window.Site.adFoxParams = {
        // set up additional targeting
        puid1: 'homepage',
        puid2: (window.Site.targeting.category || [])[0] || '',
        puid3: (window.Site.targeting.tags || []).join(':'),
        puid4: (window.Site.targeting.subcategory || [])[0] || '',
        puid5: window.Site.targeting.attr_sponsored_by || '',
        puid6: window.Site.targeting.attr_content_type || ''
    }