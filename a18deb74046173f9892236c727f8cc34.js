'use strict';

var vp = vp || {};

(function(){
    vp.getDaysSinceLastVisit = function() {
        var days = this.getActivity('l_vdays');
        if (days === -1) {
            return 'First Visit';
        } else if (days > -1 && days <= 1) {
            return 'Less than 1 day';
        } else if (days > 1 && days <= 7) {
            return 'Less than 7 days';
        } else if (days > 7 && days <= 30) {
            return 'More than 7 days';
        } else if (days > 30) {
            return 'More than 30 days';
        } else {
            return 'Cookies Not Supported';
        }
    };

    vp.getFirstFormCompleteTime = function() {
        if(this.getActivity('f_form')) {
            return  '';
        }
        // save timestamp
        this.activityData['f_form'] = this.timestamp;
        this.saveActivityData();

        var i = (this.getActivity('f_form') - this.getActivity('f_visit')) / 1000;
        var h = 60, m = 60, d = 24;
        if (i <= 0) {
            return 'No Time Available';
        } else if (i < (5 * m)) {
            return '< 5 minutes';
        } else if (i < (10 * m)) {
            return '5-10 minutes';
        } else if (i < (30 * m)) {
            return '10-30 minutes';
        } else if (i < (2 * m * h)) {
            return '30 minutes to 2 hours';
        } else if (i < (5 * m * h)) {
            return '2-5 hours';
        } else if (i < (m * h * d)) {
            return '5 hours to 1 day';
        } else if (i < (2 * m * h * d)) {
            return '1-2 days';
        } else if (i < (7 * m * h * d)) {
            return '2-7 days';
        } else if (i < (14 * m * h * d)) {
            return '1-2 weeks';
        } else {
            return '> 2 weeks';
        }
    };

    vp.getFormCompleteId = function() {
        return this.fcid;
    };

    vp.getNCCampaignId = function() {
        return typeof this.fcid === 'string' ? this.fcid.split('|')[0] : '';
    };

    vp.getHashedEmail = function() {
        return this.getProperty('sha');
    };

    let isSkipFormRedirect = function() {
        return (Util.getParam('redirect') === 'true' && Util.getParam('leadcreated') === 'true');
    };

    vp.setFormCompleteId = function() {
        //TO-DO, the order of this assignment
        //var fcid = this.getProperty('fcid') || Util.getParam('FormCampaignId');
        var fcid = Util.getParam('FormCampaignId') || (isSkipFormRedirect() && Util.getParam('nc'))
            || this.getProperty('fcid');
        if (fcid) {
            this.fcid = Util.convert15To18(fcid) + '|' + this.getProperty('hash');
        }
    };

    // record unique form complete ID if available
    if (vp.getProperty('hash') && ((vp.getProperty('fcid') || Util.getParam('FormCampaignId')) ||
        (isSkipFormRedirect() && Util.getParam('nc')))) {
        vp.setFormCompleteId();
    }
}());
/**
 * This module holds all the help methods that are re-used multiple place in Page object.
 */

'use strict';

var Page = Page || {};

(function(){
    var excludeParams = ['un', 'pw', 'vysfid', 'vyemail'];

    Page.leadCaptureForms = [];

    /**
     * Check if the url contains any of excluded params.
     * @param url
     * @returns {boolean}
     */
    Page.hasExcludedParam = function(url) {
        for (var i = 0, len = excludeParams.length; i < len; i++) {
            if (Util.getParam(excludeParams[i], url)) {
                return true;
            }
        }
        return false;
    };

    /**
     * Get display Ad Id from cookie 'adId'
     * And delete after retrieve
     * @returns {*|string}
     */
    Page.getDisplayAdId = function() {
        if (Util.getCookie('adId')) {
            this.displayAdId = Util.convert15To18(Util.getCookie('adId'));
            Util.deleteCookie('adId');
        }
        return this.displayAdId || '';
    };

    /**
     * Help method to determine if the page is a kickback form backend.
     * Common case is when user get kick back with recaptcha error.
     * @returns {boolean}
     */
    Page.isFormKickback = function() {
        return !!(Util.getParam("ve"));
    };

    /**
     * Help method to determine if the page is a skip form redirect page.
     * Base on two unique query param 'redirect=true' and 'leadcreated=true'
     * @returns {boolean|boolean}
     */
    Page.isSkipFormRedirect = function() {
        return (Util.getParam('redirect') === 'true' && Util.getParam('leadcreated') === 'true');
    };

    /**
     * Help method to determine if the page is a migrated page from OCMS.
     * @returns {boolean}
     */
    Page.isMigratedPage = function() {
        return typeof Modernizr === 'object';
    };

    /**
     * Help method to check if the page is a career form page.
     * @param pageName
     * @returns {boolean}
     */
    Page.isCareersForm = function(pageName) {
        var curName;
        if (typeof pageName === 'string') {
            curName = pageName;
        }else {
            curName = this.getName();
        }
        return curName.indexOf(':form:careers') > -1;
    };

    /**
     * Help method to check if the page has a valid lead capture form.
     * Special case for heroku signup form. Consider it as lead form.
     * @returns {boolean}
     */
    Page.hasLeadCaptureForm = function() {
        var herokuSignupEndPoint = 'https://hosted-scratch.herokuapp.com/trial',
          formSelector = 'form[data-sfdc-form]',
          leadForms = document.querySelectorAll(formSelector);
        if (!leadForms) {
            return false;
        }
        leadForms = Array.prototype.slice.call(leadForms).filter(function(form){
            return form.sfdcForm && (form.sfdcForm.formType === 'lead' || form.action.indexOf(herokuSignupEndPoint) > -1);
        });
        return leadForms.length > 0;
    };

    Page.isFromSingleLineForm = function() {
        return document.querySelectorAll('form input[name="isFromSingleLineForm"]').length > 0;
    }

    /**
     * Get the channel of the visit based on URL
     * @returns {string}
     */
    Page.getChannel = function() {
        var channel = this.getLocale() + ':' + (this.getPathNode(2) ? this.getPathNode(2) : 'other');
        if (this.getPathNode(3) === 'news-press' && this.getPathNode(4) === 'press-releases') {
            channel += ':' + this.getPathNode(3) + ':' + this.getPathNode(4);
        } else if (this.getPathNode(3) === 'careers') {
            channel += ':' + this.getPathNode(3);
        }
        return channel;
    }

}());

/**
 * This module holds all the logic that get/set/calculate page name, url.
 */

'use strict';

var Page = Page || {};

(function(){
    /** Private Methods **/

    /**
     * Special handling for login page name
     * @param name
     * @returns {string}
     */
    function nameLoginPage(name) {
        if (!name) {
            return '';
        }
        var locale = Page.getLocale();
        name = name.replace('login-messages:', '');
        name = name.replace('messages:', '');
        // Cleaning up the pathname when we changed the file to promos.html
        name = name.replace('promos:', '');
        name = name.indexOf(':') === 0 ? name.substring(1) : name;
        name = name.charAt(name.length - 1) === ':' ? name.substring(0, name.length - 1) : name;
        name = name ? name : locale;
        if (!Page.isValidLocale(name)) {
            var sites = [
                { str:'appexchange', srv:'APPX' }
                ,{ str:'appstore', srv:'STOR' }
                ,{ str:'lms', srv:'LMS' }
                ,{ str:'lmsdev', srv:'LMS' }
                ,{ str:'developer', srv:'DFC' }
                ,{ str:'community', srv:'COMM' }
            ];

            for (var i=0; i<sites.length; i++) {
                if (name.indexOf(sites[i].str) > -1) {
                    name = name.replace(sites[i].str, '');
                    name = name.indexOf(':') === 0 ? name.substring(1) : name;
                    name += (name === '' ? locale : '');
                    Page.setServer(sites[i].srv);
                    break;
                }
            }

        }
        name = ':' + name + ':login';
        if (name.indexOf('mobile') > -1) {
            name =  name.replace('mobile:login', 'login-mobile');
            name = Util.getParam('locale') ? (':' + Util.getParam('locale').toLowerCase() + name) : name;
        }

        name = vp.hasCurrentTrial() && !vp.isCustomer() && !vp.isEmployee() ? name.replace(/login/, 'login:freetrial') : name;
        name = vp.getType() === 'developer' && name.indexOf('login:freetrial') === -1 ? name.replace(/login/, 'login:developer') : name;

        return name;
    }


    /** Public Methods **/
    Page.calculateName = function(name, hostname) {
        var isError = false,
          locString = ":us",
          errorName = 'SFDC:error_404',
          locale = this.getLocale();

        if (name === errorName) {
            name = '';
            isError = true;
        } else if (!name || name.indexOf('http') > -1) {
            name = Url.sanitizedPathname();
            hostname = document.location.hostname;
        }

        // Adjust the name accordingly if an author has overridden it in page properties,
        // but only if the name parameter is for the current page as pageNameOverride only applies
        // to the current page.
        if (name === Url.sanitizedPathname()) {
            var pageNameOverride = Util.getMeta('analytics_url');
            name = pageNameOverride ? pageNameOverride : name;
        }

        if (!hostname) {
            hostname = document.location.hostname;
        }

        // run our logic if name looks like a URL path
        if (name.indexOf('/') > -1 && name.indexOf(':') < 0) {
            name = name.replace(/\//g,":");
            name = name.replace(/:index\.jsp/,"");
            name = name.replace(/\.jsp|\.htm(l?)/,"");
            name = name.charAt(name.length - 1) === ':' ? name : name + ':';
            // login pages
            if (name.indexOf('login-messages') > -1) {
                name = nameLoginPage(name);
            }

            if (name.match(/^:\w{2}-\w{2}:/) || name.match(/^:\w{2}:/)){
                locString = '';
            }
            name = this.getServer() + locString + name;

            name = name.charAt(name.length - 1) === ':' ? name.substring(0, name.length-1) : name;
        }

        // validate locale and server
        if (!this.isValidServer(this.getPathNode(0, name))) {
            this.setServer();
            name = this.getServer() + (name.charAt(0) === ':' ? '' : ':');
        }
        if (!this.isValidLocale(this.getPathNode(1, name))) {
            var nameNodes = name.split(':');
            nameNodes.splice(1, 0, this.locale);
            name = nameNodes.join(':');
        }

        // homepages
        if (!this.getPathNode(2, name)) {
            name += ':homepage';
        }

        // 404 pages
        if (isError) {
            name = errorName.replace(this.getServer() + ':', this.getServer() + ':' + locale + ':');
        }

        // certification pages
        if (hostname.indexOf('certification.salesforce.com') > -1) {
            var prefix = this.getServer() + ':' + locale;
            name = name.replace(prefix, prefix+':certification');
            name = name.replace(':Home', '');
            name = this.getServer() + name.substring(this.getServer().length).toLowerCase();
        }

        // identify confs
        if (this.isConfirmation(name) && !this.isError(name) && !this.hasLeadCaptureForm()) {
            name = name + ':[conf]';
        }

        // blog special cases to support historical reporting
        if (name === 'SFDC:' + locale  + ':blog') {
            name = name + ':homepage';
        }

        return name;
    };

    /**
     * Set the current page name as the previous page in cookie.
     * @param pageName
     * @returns {null}
     */
    Page.setPrevious = function(pageName) {
        var curName;
        if (typeof pageName === 'string') {
            curName = pageName;
        } else {
            curName = this.getName();
        }
        if (this.previous == null) {
            this.previous = vp.getActivity('l_page');
        }
        vp.activityData['l_page'] = curName;
        if (vp.activityData['pv'] == null) {
            vp.activityData['pv'] = 0;
        }
        vp.activityData['pv']++;
        vp.saveActivityData();
        return this.previous;
    };
    /**
     * Set the current page url as the previous page in cookie.
     * @param pageUrl
     * @returns {null}
     */
    Page.setPreviousUrl = function(pageUrl) {
        let curPageUrl;
        if (typeof pageUrl === 'string') {
            curPageUrl = pageUrl;
        } else {
            curPageUrl = this.getUrl();
        }
        if (this.previousUrl == null) {
            this.previousUrl = vp.getActivity('l_page_url');
        }
        vp.activityData['l_page_url'] = curPageUrl;
        vp.saveActivityData();
        return this.previousUrl;
    };
    /**
     * Set the name of the page on Page object
     * @param name (optional)
     * @returns {string}
     */
    Page.setName = function(name) {
        //calculate page name
        this.name = this.calculateName(name);
        //get user segment
        vp.activityData['seg'] = this.getSegment();
        //set current page as the previous page in vp
        this.setPrevious(this.name);

        return this.name;
    };

    /**
     * Set the url of the page on Page object
     * @param url (optional)
     * @returns {string}
     */
    Page.setUrl = function(url) {
        if(!url){
            //calculate page url
            let analyticsUrl = Util.getMeta('analytics_url'),
                currentUrl = window.location.href;
            currentUrl = Page.hasExcludedParam(currentUrl) ? currentUrl.split('?')[0] : currentUrl;
            //update this.url with author configured url if url starts with http/https else add hostname.Otherwise use current url
            if(analyticsUrl){
                if(analyticsUrl.indexOf("https") > -1 || analyticsUrl.indexOf("http") > -1){
                    this.url = analyticsUrl;
                }else{
                    this.url = document.location.hostname + analyticsUrl;
                }
            }else{
                this.url = currentUrl;
            }
        }
        this.setPreviousUrl(this.url);
        return this.url;
    };
    /**
     * Get the formatted name of the page
     * @returns {String}
     */
    Page.getName = function() {
        if (this.name && this.needNameRecal) {
            //TODO: Remove this logic after converting all migrated OCMS pages.
            this.setName(this.name);
            this.needNameRecal = false;
        } else if (this.name == null) {
            this.setName();
        }
        return this.name
    };

    /**
     * Get the url of the page
     * @returns {String}
     */
    Page.getUrl = function() {
        if (this.url && this.needNameRecal) {
            //TODO: Remove this logic after converting all migrated OCMS pages.
            this.setUrl(this.url);
            this.needNameRecal = false;
        } else if (this.url == null) {
            this.setUrl();
        }
        return this.url;
    };

    /**
     * Get the page name without locale
     * @returns {string}
     */
    Page.getNameNoLocale = function() {
        // replace only first occurrence
        return this.getName().replace(':' + this.getLocale() + ':', ':');
    };
}());

/**
 * This module holds all the methods that calculates the referrer of current visit.
 */

'use strict';

var Page = Page || {};

(function(){

    /**
     * Check if the current visit has a referrer from SFDC sub domain
     *  checks if the referrer page is within *.salesforce.com but
     *  across different subdomains and the page doesn't have a driver.
     * @returns {boolean}
     */
    function hasSFDCNetworkReferrer() {
        var internalDomain = '.salesforce.com',
          a = document.createElement('a'),    // this is a JS trick to use an <a> tag's built in location functionality
          areDifferentDomains,
          bothAreInternalSubdomains;

        a.href = document.referrer;
        areDifferentDomains = a.hostname !== location.hostname;
        bothAreInternalSubdomains = a.hostname.indexOf(internalDomain) > -1 && location.hostname.indexOf(internalDomain) > -1;

        return areDifferentDomains && bothAreInternalSubdomains && !Page.getDriver();
    }

    /**
     * Get SFDC network referrer page if it has one and there is no driver ("d" param) attached.
     * @returns {*}
     */
    Page.getSFDCNetworkReferrer = function() {
        return hasSFDCNetworkReferrer() ? this.lookupDriver(location.href, this.getReferrer()) : null;
    };

    /**
     * Main method to get the formatted referral page.
     * Check if there is overwrite from "r"/"adobe_mc_ref" query params
     * Check if there is existing cookie "referrer"
     * Check the generic "document.referrer"
     * @returns {string|string|*}
     */
    Page.getReferrer = function() {
        if (this.referrer) {
            return this.referrer;
        } else {
            this.referrer = '';
            if (Util.getParam('r')) {
                this.referrer = Util.getParam('r');
                if (this.referrer.length === 1) {
                    this.referrer = '';
                    return this.referrer;
                }
            } else if (Util.getParam('adobe_mc_ref')){
                this.referrer = Util.getParam('adobe_mc_ref');
            } else {
                var cookieRef = Util.getCookie('referrer');
                if (!(cookieRef === '' || cookieRef == null || cookieRef === 'null')) {
                    Util.deleteCookie('referrer');
                    this.referrer = cookieRef;
                } else if (document.referrer) {
                    this.referrer = this.hasExcludedParam(document.referrer) ? document.referrer.split('?')[0] : document.referrer;
                }
            }

            if (this.isLogin() && this.referrer.indexOf('https://login.salesforce.com') === 0) {
                this.referrer = 'https://login.salesforce.com';
            }

            this.referrer = this.referrer.indexOf('://') === -1 ? Url.decodeComponent(this.referrer) : this.referrer;
        }
        return this.referrer;
    };

    /**
     * Check if the current visit has an external referrer from ".my.salesforce.com"
     * @returns {boolean}
     */
    Page.hasExternalReferrer = function() {
        var r = this.getReferrer() ? this.getReferrer() : '', externals = Server.getExternalDomains();
        if (!r) {
            return true;
        }
        r = r.indexOf('?') === -1 ? r : r.substring(0, r.indexOf('?'));
        for (var i=0; i<externals.length; i++) {
            if (r.indexOf(externals[i]) > -1) {
                return true;
            }
        }
        return false;
    };

    /**
     * Check if the current visit has an internal referrer page.
     * @returns {boolean}
     */
    Page.hasInternalReferrer = function() {
        if (this.hasExternalReferrer()) {
            return false;
        }
        var r = this.getReferrer() ? this.getReferrer() : '', internals = Server.getInternalDomains();
        r = r.indexOf('?') === -1 ? r : r.substring(0, r.indexOf('?'));
        for (var i=0; i<internals.length; i++) {
            if (r.indexOf(internals[i]) > -1) {
                return true;
            }
        }
        // catching strays
        return !!(Util.getParam('internal') === 'true' || (this.getPrevious() && !(Util.getParam('r') || r)));
    };

}());

/**
 * This module holds all the related methods and objects that calculates traffic driver.
 * It can be internal, external, SEM, Email, BAN, SEO, Social Media etc.
 */

'use strict';

var Page = Page || {};

(function(){

  Page.driver = null;

  var defaultDriverStr = 'Typed/Bookmarked';

  /**
     * Driver look up table. Property key meaning:
     *  qp: query param, searched for in current URL
     *  pm: pattern match
     *  ms: match string, searched for in referrer
     *  cb: call back handling method
     *  d: driver ID
     */
  var driverLookup = {
    types: [
      { name:'SEM', qp:'d,dcmp', cb:'getSearchData' }
      ,{ name:'Email', qp:'d', cb:'getEmail', d:'70130000000sUfv' }
      ,{ name:'BAN', qp:'d,ban', cb:'getDisplay' }
      ,{ name:'SEO', cb:'getSearchData', d:'70130000000sUVb' }
      ,{ name:'Paid Social Media', qp:'d', cb:'getSocial' }
      ,{ name:'Social Media', d:'70130000000sUVl', pm:[
        { name:'youtube', ms:'youtube.com' }
        ,{ name:'vidyard', ms:'vidyard.com' }
        ,{ name:'twitter', ms:'twitter.com,.t.co,/t.co/', d:'70130000000szyK' }
        ,{ name:'linkedin', ms:'linkedin.com,lnkd.in', d:'70130000000szyP' }
        ,{ name:'facebook', ms:'facebook.com', d:'70130000000szyF' }
        ,{ name:'instagram', ms:'instagram.com', d:'701300000025Rrr' }
        ,{ name:'flickr', ms:'flickr.com,flickr.net' }
        ,{ name:'slideshare', ms:'slideshare.com,slideshare.net' }
        ,{ name:'googleplus', ms:'plus.google.com,plus.url.google.com', d:'70130000000szyU' }
        ,{ name:'vimeo' , ms:'vimeo.com' }
        ,{ name:'pinterest', ms:'pinterest.com,pintrest.com', d:'70130000000szyZ' }
        ,{ name:'foursquare' , ms:'foursquare.com' }
        ,{ name:'stumbleupon' , ms:'stumbleupon.com' }
        ,{ name:'yelp' , ms:'yelp.com' }
        ,{ name:'myspace', ms:'myspace.com' }
        ,{ name:'xing' , ms:'xing.com' }
        ,{ name:'mixi' , ms:'mixi.jp' }
        ,{ name:'viadeo' , ms:'viadeo.com' }
        ,{ name:'friendster' , ms:'friendster.com' }
        ,{ name:'badoo' , ms:'badoo.com' }
        ,{ name:'bebo' , ms:'bebo.com' }
        ,{ name:'hi5' , ms:'hi5.com' }
        ,{ name:'myyearbook' , ms:'myyearbook.com' }
        ,{ name:'nig' , ms:'nig.com' }
        ,{ name:'tumblr' , ms:'tumblr.com' }
        ,{ name:'xanga' , ms:'xanga.com' }
        ,{ name:'yammer' , ms:'yammer.com' }
        ,{ name:'medium' , ms:'medium.com' }
      ]}
      ,{ name:'SFDC Network', d:'70130000000sUW0', pm: [
        { name:'[AppExchange]', ms:'appexchange.salesforce.com,appexchangejp.salesforce.com,sites.secure.force.com/appexchange,go.appexchange.com' }
        ,{ name:'[Community Site]', ms:'success.salesforce.com,sites.secure.force.com' }
        ,{ name:'[DeveloperForce]', ms:'developer.salesforce.com' }
        ,{ name:'[Help&Training]', ms:'help.salesforce.com' }
        ,{ name:'[Foundation]', ms:'foundation.force.com,salesforcefoundation.org' }
        ,{ name:'[VMForce]', ms:'vmforce.com' }
        ,{ name:'[YourServiceCloud.com]', ms:'yourservicecloud.com,yourservicecloud.force.com' }
        ,{ name:'[JoinTheConversations.com]', ms:'jointheconversations.com' }
        ,{ name:'[Chatter.com]', ms:'chatter.com' }
        ,{ name:'[Site.com]', ms:'site.com' }
        ,{ name:'[Work.com]', ms:'work.com' }
        ,{ name:'[Database.com]', ms:'database.force.com,database.com' }
        ,{ name:'[Data.com]', ms:'data.com' }
        ,{ name:'[Jigsaw.com]', ms:'jigsaw.com' }
        ,{ name:'[Force.com]', ms:'www.force.com' }
        ,{ name:'[Force.com Sites]', ms:'.force.com' }
        ,{ name:'[www.salesforce.com]', ms:'www.salesforce.com' }
        ,{ name:'[trust.salesforce.com]', ms:'trust.salesforce.com' }
        ,{ name:'[Salesforce Blogs]', ms:'blogs.salesforce.com, cloudblog.salesforce.com' }
        ,{ name:'[Desk.com]', ms:'.desk.com' }
        ,{ name:'[Relateiq.com]', ms:'.salesforceiq.com' }
        ,{ name:'[Steelbrick.com]', ms:'.steelbrick.com, steelbrick.de' }
        ,{ name:'[Demandware]', ms:'.demandware.com' }
        ,{ name:'[Beyondcore]', ms:'.beyondcore.com,https://beyondcore.com' }
        ,{ name:'[Heywire]', ms:'.heywire.com' }
        ,{ name:'[Quip]', ms:'.quip.com,https://quip.com' }
        ,{ name:'[Gravity Tank]', ms:'.gravitytank.com' }
        ,{ name:'[MuleSoft]', ms:'mulesoft.com'}
        ,{ name:'[CloudCraze]', ms:'cloudcraze.com'}
        ,{ name:'[Datorama.com]', ms:'datorama.com'}
        ,{ name:'[MapAnything.com]', ms:'mapanything.com'}
        ,{ name:'[sfdc.co]', ms:'sfdc.co'}
        ,{ name:'[salesforce.com]', ms:'https://salesforce.com'}
        ,{ name:'[cloudforce.com sites]', ms:'.cloudforce.com'}
        ,{ name:'[heroku.com sites]', ms:'.heroku.com, heroku.support'}
        ,{ name:'[citizendevelopment.salesforce.com]', ms:'citizendevelopment.salesforce.com'}
        ,{ name:'[compliance.salesforce.com]', ms:'compliance.salesforce.com'}
        ,{ name:'[crm.dev]', ms:'crm.dev'}
        ,{ name:'[developer.mulesoft.com]', ms:'developer.mulesoft.com'}
        ,{ name:'[einstein analytics sites]', ms:'einstein.ai, einsteinanalyticslearningmap.com, einsteinreadiness.salesforce.com'}
        ,{ name:'[getessentials.com]', ms:'getessentials.com'}
        ,{ name:'[insidestories.salesforce.com]', ms:'insidestories.salesforce.com'}
        ,{ name:'[lightning sites]', ms:'lightning-assessment.salesforce.com, lightning-configuration.salesforce.com, lightningappcookbook.salesforce.com, lightningdesignsystem.com'}
        ,{ name:'[mobilebeta.salesforce.com]', ms:'mobilebeta.salesforce.com'}
        ,{ name:'[ohana.salesforce.com]', ms:'ohana.salesforce.com'}
        ,{ name:'[opensource.salesforce.com]', ms:'opensource.salesforce.com'}
        ,{ name:'[pages.mail.salesforce.com]', ms:'pages.mail.salesforce.com'}
        ,{ name:'[pardot.com]', ms:'pardot.com'}
        ,{ name:'[partnernavigator.salesforce.com]', ms:'partnernavigator.salesforce.com'}
        ,{ name:'[partners.salesforce.com]', ms:'partners.salesforce.com'}
        ,{ name:'[partnersignup.salesforce.com]', ms:'partnersignup.salesforce.com'}
        ,{ name:'[pathfinder.salesforce.com]', ms:'pathfinder.salesforce.com'}
        ,{ name:'[platform-roi-calculator.salesforce.com]', ms:'platform-roi-calculator.salesforce.com'}
        ,{ name:'[platformtour.salesforce.com]', ms:'platformtour.salesforce.com'}
        ,{ name:'[quotable.com]', ms:'quotable.com'}
        ,{ name:'[recurringrelationships.salesforce.com]', ms:'recurringrelationships.salesforce.com'}
        ,{ name:'[docs.salesforce.com]', ms:'.docs.salesforce.com'}
        ,{ name:'[salesforccesponsorship.com sites]', ms:'.salesforcesponsorship.com'}
        ,{ name:'[salesforcestore.com sites]', ms:'.salesforcestore.com'}
        ,{ name:'[service-value.salesforce.com]', ms:'service-value.salesforce.com'}
        ,{ name:'[trailblazer login]', ms:'trailblazer.me'}
        ,{ name:'[trailblazer.salesforce.com]', ms:'trailblazer.salesforce.com'}
        ,{ name:'[trailblazercommunitygroups.com]', ms:'trailblazercommunitygroups.com'}
        ,{ name:'[engineering.salesforce.com]', ms:'engineering.salesforce.com'}
        ,{ name:'[salesforce.org]', ms:'salesforce.org'}
        ,{ name:'[salesforcejapan.com sites]', ms:'.salesforcejapan.com'}
        ,{ name:'[salesforce.wd1.myworkdayjobs.com]', ms:'salesforce.wd1.myworkdayjobs.com'}
        ,{ name:'[Salesforce Essentials]', ms:'essentials.salesforce.com' }
        ,{ name:'[getessentials]' , ms:'getessentials.com'}
        ,{ name:'[partners.salesforce.com]', ms:'partners.salesforce.com'}
        ,{ name:'[trailhead.salesforce.com]', ms:'trailhead.salesforce.com'}
        ,{ name:'[trailhead]' , ms:'trailhead.com'}
        ,{ name:'[tableau]' , ms:'tableau.com'}
        ,{ name:'[evergage]' , ms:'evergage.com'}
        ,{ name:'[clicksoftware]' , ms:'clicksoftware.com'}
        //catch-all category for all residual .salesforce.com referrers
        ,{ name:'[Salesforce.com App]', ms:'.salesforce.com' }
      ]}
      ,{ name:'External Websites', cb:'getReferredDriver', d:'70130000000sUVv' }
      ,{ name:'Other', qp:'d', cb:'fixInternal' }
      ,{ name:defaultDriverStr, d:'7010M000002Mw7O' }
    ]
    ,searchEngines: [
      { se:'All The Web', ms:'alltheweb.com', kw:'q,query', dc:'US' }
      ,{ se:'AllSearchEngines', ms:'allsearchengines.co.uk', kw:'query', dc:'United Kingdom' }
      ,{ se:'AltaVista', ms:'altavista.com', kw:'q,r', dc:'US', cl:[
        { cn:'Canada', pre:'ca.' }, { cn:'Denmark', pre:'dk.' }, { cn:'France', pre:'fr.' }, { cn:'Germany', pre:'de.' }, { cn:'Italy', pre:'it.' }
        ,{ cn:'Netherlands', pre:'nl.' }, { cn:'Norway', pre:'no.' }, { cn:'Spain', pre:'es.' }, { cn:'Sweden', pre:'se.' }, { cn:'Switzerland', pre:'ch.' }, { cn:'United Kingdom', pre:'uk.' }
      ]}
      ,{ se:'AOL', ms:'.aol.', kw:'q,query', dc:'US', cl:[
        { cn:'Canada', post:'ca' }, { cn:'France', post:'fr' }, { cn:'Germany', post:'de' }, { cn:'United Kingdom', post:'co.uk' }
      ]}
      ,{ se:'Ask', ms:'ask.com', kw:'q', dc:'US', cl:[
        { cn:'Japan', pre:'jp' }, { cn:'United Kingdom', pre:'uk' }
      ]}
      ,{ se:'Baidu', ms:'baidu.com', kw:'wd,s', dc:'China' }
      ,{ se:'BeGuide.com', ms:'beguide.com', kw:'q,search', dc:'US' }
      ,{ se:'Biglobe', ms:'biglobe.ne.jp', kw:'q', dc:'Japan' }
      ,{ se:'Microsoft Bing', ms:'bing.com', kw:'q', dc:'US' }
      ,{ se:'Blue Window', ms:'search.bluewin.ch', kw:'q,qry', dc:'Switzerland' }
      ,{ se:'Business.com', ms:'business.com', kw:'query', dc:'US' }
      ,{ se:'BuyersIndex', ms:'buyersindex.com', kw:'query', dc:'US' }
      ,{ se:'Chubba', ms:'whatuseek.com', kw:'arg', dc:'US' }
      ,{ se:'CNET', ms:'cnet.com', kw:'query,q', dc:'US' }
      ,{ se:'Debriefing.com', ms:'debriefing.com', kw:'tsearch', dc:'US' }
      ,{ se:'Dmoz', ms:'dmoz.org', kw:'search', dc:'US' }
      ,{ se:'Excite', ms:'excite.com', kw:'q,search', dc:'US', cl:[
        { cn:'Netherlands', post:'.nl' }, { cn:'France', post:'.fr' }, { cn:'Germany', post:'.de' }, { cn:'Japan', post:'.co.jp' }, { cn:'Switzerland', post:'.ch' }
      ]}
      ,{ se:'Fireball', ms:'fireball.de', kw:'q,query', dc:'Germany' }
      ,{ se:'FreshEye', ms:'fresheye.com', kw:'kw,ord', dc:'Japan' }
      ,{ se:'Godado', ms:'godado.it', kw:'key', dc:'Italy' }
      ,{ se:'Goo (Jp.)', ms:'goo.ne.jp', kw:'MT', dc:'Japan' }
      ,{ se:'Google', ms:'.google.,googlesyndication.com', kw:'q', types:[{ tn:'Images', pre:'images' }, { tn:'Video', pre:'video' }], dc:'US', cl:[
        { cn:'Afghanistan', post:'com.af' }, { cn:'American Samoa', post:'as' }, { cn:'Anguilla', post:'com.ai' }, { cn:'Antigua and Barbuda', post:'com.ag' }, { cn:'Argentina', post:'com.ar' }
        ,{ cn:'Armenia', post:'am' }, { cn:'Australia', post:'com.au' }, { cn:'Austria', post:'at' }, { cn:'Azerbaijan', post:'az' }, { cn:'Bahrain', post:'com.bh' }
        ,{ cn:'Bangladesh', post:'com.bd' }, { cn:'Belarus', post:'com.by' }, { cn:'Belgium', post:'be' }, { cn:'Belize', post:'com.bz' }, { cn:'Bolivia', post:'com.bo' }
        ,{ cn:'Bosnia-Hercegovina', post:'ba' }, { cn:'Botswana', post:'co.bw' }, { cn:'Brasil', post:'com.br' }, { cn:'British Virgin Islands', post:'vg' }, { cn:'Brunei', post:'com.bn' }
        ,{ cn:'Bulgaria', post:'bg' }, { cn:'Burundi', post:'bi' }, { cn:'Cambodia', post:'com.kh' }, { cn:'Canada', post:'ca' }, { cn:'Chile', post:'cl' }
        ,{ cn:'China', post:'cn' }, { cn:'Colombia', post:'com.co' }, { cn:'Cook Islands', post:'co.ck' }, { cn:'Costa Rica', post:'co.cr' }, { cn:'Cote D\'Ivoire', post:'ci' }
        ,{ cn:'Croatia', post:'hr' }, { cn:'Cuba', post:'com.cu' }, { cn:'Czech Republic', post:'cz' }, { cn:'Denmark', post:'dk' }, { cn:'Djibouti', post:'dj' }
        ,{ cn:'Dominica', post:'dm' }, { cn:'Dominican Republic', post:'com.do' }, { cn:'Ecuador', post:'com.ec' }, { cn:'Egypt', post:'com.eg' }, { cn:'El Salvador', post:'com.sv' }
        ,{ cn:'Estonia', post:'ee' }, { cn:'Ethiopia', post:'com.et' }, { cn:'Fiji', post:'com.fj' }, { cn:'Finland', post:'fi' }, { cn:'France', post:'fr' }
        ,{ cn:'Germany', post:'de' }, { cn:'Greece', post:'gr' }, { cn:'Greenland', post:'gl' }, { cn:'Guadeloupe', post:'gp' }, { cn:'Guatemala', post:'com.gt' }
        ,{ cn:'Guernsey', post:'gg' }, { cn:'Guyana', post:'gy' }, { cn:'Haiti', post:'ht' }, { cn:'Honduras', post:'hn' }, { cn:'Hong Kong', post:'com.hk' }
        ,{ cn:'Hungary', post:'hu' }, { cn:'India', post:'co.in' }, { cn:'Indonesia', post:'co.id' }, { cn:'Ireland', post:'ie' }, { cn:'Island', post:'is' }
        ,{ cn:'Isle of Gibraltar', post:'com.gi' }, { cn:'Isle of Man', post:'im' }, { cn:'Israel', post:'co.il' }, { cn:'Italy', post:'it' }, { cn:'Jamaica', post:'com.jm' }
        ,{ cn:'Japan', post:'co.jp' }, { cn:'Jersey', post:'je' }, { cn:'Jordan', post:'jo' }, { cn:'Kazakhstan', post:'kz' }, { cn:'Kenya', post:'co.ke' }
        ,{ cn:'Kiribati', post:'ki' }, { cn:'Korea', post:'co.kr' }, { cn:'Kyrgyzstan', post:'kg' }, { cn:'Laos', post:'la' }, { cn:'Latvia', post:'lv' }
        ,{ cn:'Lesotho', post:'co.ls' }, { cn:'Libya', post:'com.ly' }, { cn:'Liechtenstein', post:'li' }, { cn:'Lithuania', post:'lt' }, { cn:'Luxembourg', post:'lu' }
        ,{ cn:'Madagascar', post:'mgz' }, { cn:'Malawi', post:'mw' }, { cn:'Malaysia', post:'com.my' }, { cn:'Maldives', post:'mv' }, { cn:'Malta', post:'com.mt' }, { cn:'Mauritius', post:'mu' }
        ,{ cn:'Mexico', post:'com.mx' }, { cn:'Micronesia', post:'fm' }, { cn:'Moldova', post:'md' }, { cn:'Mongolia', post:'mn' }, { cn:'Montserrat', post:'ms' }
        ,{ cn:'Morocco', post:'co.ma' }, { cn:'Namibia', post:'com.na' }, { cn:'Nauru', post:'nr' }, { cn:'Nepal', post:'com.np' }, { cn:'Netherlands', post:'nl' }
        ,{ cn:'New Zealand', post:'co.nz' }, { cn:'Nicaragua', post:'com.ni' }, { cn:'Nigeria', post:'com.ng' }, { cn:'Niue', post:'nu' }, { cn:'Norfolk Island', post:'com.nf' }
        ,{ cn:'Norway', post:'no' }, { cn:'Oman', post:'com.om' }, { cn:'Pakistan', post:'com.pk' }, { cn:'Panama', post:'com.pa' }, { cn:'Paraguay', post:'com.py' }
        ,{ cn:'Peru', post:'com.pe' }, { cn:'Philippines', post:'com.ph' }, { cn:'Pitcairn Islands', post:'pn' }, { cn:'Poland', post:'pl' }, { cn:'Portugal', post:'pt' }
        ,{ cn:'Puerto Rico', post:'com.pr' }, { cn:'Qatar', post:'com.qa' }, { cn:'Rep. Dem. du Congo', post:'cd' }, { cn:'Rep. du Congo', post:'cg' }, { cn:'Repulic of Georgia', post:'ge' }
        ,{ cn:'Romania', post:'ro' }, { cn:'Russia', post:'ru' }, { cn:'Rwanda', post:'rw' }, { cn:'Saint Helena', post:'sh' }, { cn:'Saint Vincent and the Grenadine', post:'com.vc' }
        ,{ cn:'Samoa', post:'ws' }, { cn:'San Marino', post:'sm' }, { cn:'Sao Tome and Principe', post:'st' }, { cn:'Saudi Arabia', post:'com.sa' }, { cn:'Senegal', post:'sn' }
        ,{ cn:'Seychelles', post:'sc' }, { cn:'Singapore', post:'com.sg' }, { cn:'Slovakia', post:'sk' }, { cn:'Slovenia', post:'si' }, { cn:'Solomon Islands', post:'com.sb' }
        ,{ cn:'South Africa', post:'co.za' }, { cn:'Spain', post:'es' }, { cn:'Sri Lanka', post:'lk' }, { cn:'Sweden', post:'se' }, { cn:'Switzerland', post:'ch' }
        ,{ cn:'Taiwan', post:'com.tw' }, { cn:'Tajikistan', post:'com.tj' }, { cn:'Thailand', post:'co.th' }, { cn:'The Bahamas', post:'bs' }, { cn:'The Gambia', post:'gm' }
        ,{ cn:'Timor-Leste', post:'tp' }, { cn:'Tokelau', post:'tk' }, { cn:'Tonga', post:'to' }, { cn:'Trinidad and Tobago', post:'tt' }, { cn:'Turkey', post:'com.tr' }
        ,{ cn:'Turkmenistan', post:'tm' }, { cn:'Uganda', post:'co.ug' }, { cn:'Ukraine', post:'com.ua' }, { cn:'United Arab Emirates', post:'ae' }, { cn:'United Kingdom', post:'co.uk' }
        ,{ cn:'Uruguay', post:'com.uy' }, { cn:'Uzbekiston', post:'co.uz' }, { cn:'Vanuatu', post:'vu' }, { cn:'Venezuela', post:'co.ve' }, { cn:'Viet Nam', post:'com.vn' }
        ,{ cn:'Virgin Islands', post:'co.vi' }, { cn:'Yugoslavia', post:'co.yu' }, { cn:'Zambia', post:'co.zm' }, { cn:'Zimbabwe', post:'co.zw' }
      ]}
      ,{ se:'Hotbot', ms:'hotbot.com', kw:'query', dc:'US' }
      ,{ se:'ilse.nl', ms:'ilse.nl', kw:'search_for', dc:'Netherlands' }
      ,{ se:'Indeed', ms:'www.indeed.', kw:'q', dc:'US', cl:[
        { cn:'Canada', post:'ca' }, { cn:'India', post:'co.in' }
      ]}
      ,{ se:'InfoSpace', ms:'infospace.com', kw:'', dc:'US' }
      ,{ se:'InfoTiger', ms:'infotiger.com', kw:'qs', dc:'US' }
      ,{ se:'Livedoor', ms:'livedoor.com', kw:'q', dc:'Japan' }
      ,{ se:'Lycos', ms:'.lycos', kw:'query', dc:'US', cl: [
        { cn:'France', post:'.fr' }, { cn:'Germany', post:'.de' }, { cn:'Italy', post:'.it' }, { cn:'Netherlands', post:'.nl' }, { cn:'Spain', post:'.es' }, { cn:'United Kingdom', post:'.co.uk' }
      ]}
      ,{ se:'Metacrawler', ms:'metacrawler.com', kw:'', dc:'US' }
      ,{ se:'Monster Crawler', ms:'monstercrawler.com', kw:'', dc:'US' }
      ,{ se:'myGO', ms:'mygo.com', kw:'', dc:'Taiwan' }
      ,{ se:'Nate.com', ms:'nate.com', kw:'q', dc:'Korea' }
      ,{ se:'Naver', ms:'naver.com', kw:'query', dc:'Korea' }
      ,{ se:'NetSearch', ms:'netscape.com', kw:'qry_str', dc:'US' }
      ,{ se:'Nifty', ms:'nifty.com,search.nifty.com', kw:'q', dc:'Japan' }
      ,{ se:'Oh! New? Mobile', ms:'ohnew.co.jp', kw:'k', dc:'Japan' }
      ,{ se:'OptusZoo', ms:'optuszoo.com.au', kw:'q', dc:'Australia' }
      ,{ se:'Reference.com', ms:'reference.com', kw:'q', dc:'US' }
      ,{ se:'Search.ch', ms:'search.ch', kw:'q', dc:'Switzerland' }
      ,{ se:'Searchalot', ms:'searchalot.com', kw:'q,query', dc:'US' }
      ,{ se:'Tiscali', ms:'tiscali.it', kw:'key', dc:'Italy' }
      ,{ se:'track.nl', ms:'track.nl', kw:'qr', dc:'Netherlands' }
      ,{ se:'Virgilio', ms:'ricerca.virgilio.it,virgilio.it', kw:'qs', dc:'Italy' }
      ,{ se:'Web Wombat', ms:'webwombat.com.au', kw:'ix,I', dc:'Australia' }
      ,{ se:'Web.de', ms:'web.de', kw:'su', dc:'Germany' }
      ,{ se:'Webalta', ms:'webalta.ru', kw:'q', dc:'Russia' }
      ,{ se:'WebCrawler', ms:'webcrawler.com', kw:'', dc:'US' }
      ,{ se:'Yahoo!', ms:'search.yahoo.', kw:'p', dc:'US', cl:[
        { cn:'Argentina', pre:'ar.' }, { cn:'Asia', pre:'asia.' }, { cn:'Australia', pre:'au.' }, { cn:'Austria', pre:'at.' }, { cn:'Brazil', pre:'br.' }
        ,{ cn:'Canada', pre:'ca.' }, { cn:'Canada (French)', pre:'qc.' }, { cn:'Catalan', pre:'ct.' }, { cn:'China', pre:'cn.' }, { cn:'Denmark', pre:'dk.' }
        ,{ cn:'Finland', pre:'fi.' }, { cn:'France', pre:'fr.' }, { cn:'Germany', pre:'de.' }, { cn:'Hong Kong', pre:'hk.' }, { cn:'India', pre:'in.' }
        ,{ cn:'Indonesia', pre:'id.' }, { cn:'Italy', pre:'it.' }, { cn:'Japan', post:'co.jp' }, { cn:'Korea', pre:'kr.' }, { cn:'Malaysia', pre:'malaysia.' }
        ,{ cn:'Mexico', pre:'mx.' }, { cn:'Netherlands', pre:'nl.' }, { cn:'New Zealand', pre:'nz.' }, { cn:'Norway', pre:'no.' }, { cn:'Philippines', pre:'ph.' }
        ,{ cn:'Russia', pre:'ru.' }, { cn:'Singapore', pre:'sg.' }, { cn:'Spain', pre:'es.' }, { cn:'Sweden', pre:'se.' }, { cn:'Switzerland', pre:'ch.' }
        ,{ cn:'Taiwan', pre:'tw.' }, { cn:'Thailand', pre:'th.' }, { cn:'UK and Ireland', pre:'uk.' }, { cn:'Viet Nam', pre:'vn.' }
      ]}
      ,{ se:'Yandex.ru', ms:'yandex.ru', kw:'text', dc:'Russia' }
      ,{ se:'zoeken.nl', ms:'zoeken.nl', kw:'q', dc:'Netherlands' }
    ],

    getReferringDomain: function () {
      var ref = Page.getReferrer(), prefix = '://';
      if (!ref || ref.indexOf('http') !== 0) {
        return '';
      }
      ref = ref.indexOf(prefix) > -1 ? ref.substring(ref.indexOf(prefix) + prefix.length) : ref;
      ref = ref.indexOf('/') > -1 ? ref.substring(0, ref.indexOf('/')) : ref;
      ref = ref.indexOf('?') > -1 ? ref.substring(0, ref.indexOf('?')) : ref;
      ref = ref.indexOf('#') > -1 ? ref.substring(0, ref.indexOf('#')) : ref;
      return ref;

    },

    getReferredDriver: function (args) {
      var ref = this.getReferringDomain();
      if (!(args && ref)) {
        return '';
      }
      args.id = (args.id ? args.id : args.type) + '|' + ref;
      return args;
    },

    fixInternal: function (args) {
      if (!args) {
        return '';
      }
      var forceList = this.types[5]; // force.com
      for (var i = 0; i < forceList.pm.length; i++) {
        var pml = forceList.pm[i].ms.split(',');
        for (var j = 0; j < pml.length; j++) {
          if (Page.getReferrer().indexOf(pml[j]) > -1) {
            return {id: forceList.name + '|' + forceList.pm[i].name, type: forceList.type, internal: Util.getParam('d')};
          }
        }
      }
      return args;
    },

    getDefault: function (type, id) {
      if (!type) {
        return '';
      }

      for (var i = 0; i < this.types.length; i++) {
        var dt = this.types[i];
        if (type === dt.name) {
          if (dt.pm) {
            var name = id.replace(type + '|', '');
            for (var j = 0; j < dt.pm.length; j++) {
              if (name === dt.pm[j].name && dt.pm[j].d) {
                return dt.pm[j].d;
              }
            }
          }
          if (dt.d) {
            return dt.d;
          }
        }
      }

      return '';
    },

    getEmail: function (args) {
      var url = document.location.href.toLowerCase();
      if (!(url.indexOf('elq_mid=') > -1 || url.indexOf('eid=') > -1 || url.indexOf('rrid') > -1 || url.indexOf('mkt_tok') > -1)) {
        return '';
      }

      return args;
    },

    getDisplay: function (args) {
      if (!(args && args.id && args.type)) {
        return '';
      }

      var ban = Url.decodeComponent(Util.getParam('ban')).replace(/_/g, '|'), pre = 'ban|';
      if (ban.indexOf(pre) === 0 || ban.indexOf(pre.toUpperCase()) === 0) {
        ban = ban.substring(pre.length - 1);
      }
      ban = ban.toLowerCase();
      if (ban.charAt(0) !== '|') {
        ban = '|' + ban;
      }
      return {id: args.id + ban, type: args.type};
    },

    getSocial: function (args) {
      var soc = Url.decodeComponent(Util.getParam('soc')).toLowerCase();
      if (!(args && soc)) {
        return '';
      }
      args.id += '|' + soc;
      return args;
    },

    isBaiduSEO: function (ref) {
      if (!ref) {
        return false;
      } else if (ref.indexOf('.baidu.') > -1 && (ref.indexOf('?wd=') > -1 || ref.indexOf('&wd=') > -1)) {
        return true;
      }
    },

    getSearchData: function (args) {
      // check for referrer match
      // then check for keyword match
      var ref = Page.getReferrer(), engine = '', country = '', keyword = '';
      if (!args) {
        return '';
      } else if (!(args.type === 'SEM' || args.type === 'SEO') || (args.type === 'SEO' && args.id)) {
        return '';
      }
      for (var i = 0; i < this.searchEngines.length; i++) {
        var ce = this.searchEngines[i], cms = this.searchEngines[i].ms.split(','); // current engine & matchstrings
        for (var j = 0; j < cms.length; j++) {
          if (cms[j] && (ref.indexOf(cms[j]) > -1)) {
            // we have a search engine; check for sub-engine (ie Google Images)
            engine = ce.se;
            if (ce.types) {
              for (var t = 0; t < ce.types.length; t++) {
                if (ce.types[t].pre && ref.indexOf(ce.types[t].pre + cms[j]) > -1) {
                  engine = engine + ' ' + ce.types[t].tn;
                  break;
                }
                if (ce.types[t].post && ref.indexOf(cms[j] + ce.types[t].post) > -1) {
                  engine = engine + ' ' + ce.types[t].tn;
                  break;
                }
              }
            }
            // check for keyword
            var kwp = ce.kw.split(',');
            for (var k = 0; k < kwp.length; k++) {
              keyword = Url.decodeComponent(Util.getParam(kwp[k], ref));
              if (keyword) {
                break;
              }
            }
            if (!keyword) {
              var tmpRef = ref.substring(ref.indexOf('//') + 2);
              if ((ref.indexOf('/url') > -1 && (ref.indexOf('q=&') > -1 || ref.indexOf('?sa=t') > -1)) || (tmpRef.indexOf('/') === -1 || tmpRef.indexOf('/') === tmpRef.length - 1) || this.isBaiduSEO(ref)) {
                keyword = 'no keyword' + (ref.indexOf('https') > -1 ? ' (secure)' : '');
              } else {
                break;
              }
            }
            // check for country
            if (ce.cl) {
              for (var l = 0; l < ce.cl.length; l++) {
                if (ce.cl[l].pre && ref.indexOf(ce.cl[l].pre + cms[j]) > -1) {
                  country = ce.cl[l].cn;
                }
                if (ce.cl[l].post && ref.indexOf(cms[j] + ce.cl[l].post) > -1) {
                  country = ce.cl[l].cn;
                }
              }
            }
            if (!country) {
              country = ce.dc || 'US';
            }
          }
        }
      }
      if ((args.id && args.type === 'SEM') || (engine && keyword)) {
        keyword = keyword ? Util.cleanUrlData(keyword) : 'no keyword';

        engine = engine ? (country.toUpperCase() !== 'US' && country !== '' ? engine + ' - ' + country : engine) : 'no search engine';
        if (args.type === 'SEM') {
          args.id += ((engine ? '|' + engine : '') + (keyword ? '|' + keyword : ''));
        }
        return {'id': (args.id ? args.id : (args.type + '|' + engine + '|' + keyword)), 'type': args.type, 'keyword': keyword, 'engine': engine};
      } else {
        return '';
      }
    }
  };

  function validateDriver(driver) {
    return (driver && driver.length > 60) ? '' : driver;
  }

  /**
     * Method to look up the traffic driver given the current and referral URLs.
     * @param url
     * @param referrer
     * @returns {{id: string, type: *}|*}
     */
  Page.lookupDriver = function(url, referrer) {
    var driverID = Util.getParam('d', url) ? Util.convert15To18(validateDriver(Util.getParam('d', url))) : '',
      driver;

    for (var i = 0; i < driverLookup.types.length; i++) {
      var dt = driverLookup.types[i];
      if (dt.qp) {
        var params = dt.qp.split(','),
          isType = true;
        for (var j = 0; j < params.length; j++) {
          if (params[j].indexOf('|') > -1) {
            var split = params[j].split('|'),
              orCheck = false;
            for (var k = 0; k < split.length; k++) {
              if (Util.getParam(split[k], url)) {
                orCheck = true;
                break;
              }
            }
            if (!orCheck) {
              isType = false;
            }
          } else if (!Util.getParam(params[j], url)) {
            isType = false;
            break;
          }
        }
        if (isType && Util.getParam('internal', url) !== 'true') {
          driver = { id:driverID + '|' + dt.name, type: dt.name };
          if (dt.cb) {
            driver = driverLookup[dt.cb](driver);
            if (driver) {
              // special case when they have an invalid driver, and no second param
              if (driver.id === 'null|Other') {
                driver = { id: defaultDriverStr, type: defaultDriverStr };
              }
              return driver;
            }
          } else {
            return driver;
          }
        }
      } else {
        if (dt.pm) {
          for (j = 0; j < dt.pm.length; j++) {
            var pml = dt.pm[j].ms.split(',');
            for (var z = 0; z < pml.length; z++) {
              if (referrer.indexOf(pml[z]) > -1) {
                driver = { id: (driverID ? driverID + '|' : '') + dt.name + '|' + dt.pm[j].name, type: dt.name };
                return driver;
              }
            }
          }
        }
        if (dt.cb) {
          // make callback
          driver = { id:(driverID ? driverID + '|' + dt.name : ''), type: dt.name };
          driver = driverLookup[dt.cb](driver);
          if (driver) {
            return driver;
          }
        }
      }
    }
  };

  /**
     * Save traffic driver to visitor profile activity cookie
     */
  function saveDriver(driver) {
    if (!driver) {
      return;
    }
    vp.activityData['l_dtype'] = driver.type;
    // Driver is hardcoded since it is the default driver
    // See JSON below in driverLookup() below to see the driver for Typed/Bookmarked, which should match the one in this block
    if (driver.id === defaultDriverStr && driver.type === defaultDriverStr) {
      vp.activityData.d = '7010M000002Mw7O';
    } else {
      vp.activityData.d = validateDriver(Util.getParam('d')) || driverLookup.getDefault(driver.type, driver.id);
    }
    vp.saveActivityData();
  }

  Page.driverLookup = driverLookup;

  /**
     * Get the driver of the current page visit.
     * It can be either external driver ex. SEO|Google|no keyword (secure)
     * Or internal driver which is specified by query param "d" ex. 7010M000002Mw7O
     * @returns {{id: string, type: string}||boolean}
     */
  Page.getDriver = function() {
    if (this.driver) {
      return this.driver;
    }
    // Default driver
    var driver = {id: defaultDriverStr, type: defaultDriverStr},
      dParam = Util.getParam('d');
    // Get internal driver
    if (this.hasInternalReferrer()) {
      if (dParam) {
        return {id: (dParam.length === 15 ? Util.convert15To18(dParam) : validateDriver(dParam)), type: 'internal'};
      } else {
        return false; //Return false here indicating that it has an internal referrer, but no driver id
      }
      // Get external driver
    } else if (this.getReferrer() || dParam) {
      driver = this.lookupDriver(location.href, this.getReferrer());
    }

    // Save to object
    this.driver = driver ? driver : '';
    saveDriver(driver);
    return this.driver;
  };
}());

/**
 * This module holds all the methods that maps the type of the page.
 */

'use strict';
/* globals vp */

var Page = Page || {};

(function(){
    Page.type = null;

    Page.isHome = function() {
        return this.getName().indexOf('homepage') > -1;
    };

    Page.isSEM = function() {
        return (this.hasLeadCaptureForm() || this.isConfirmation()) && this.getName().indexOf(':sem:') > -1;
    };

    Page.isLogin = function() {
        return (this.getName().match(/:\w{2}:(.*:)?login/) != null);
    };

    Page.is404 = function() {
        return this.getName().indexOf('error_404') > -1;
    };

    Page.isError = function(pageName) {
        var curName = typeof pageName === 'string' ? pageName : this.getName();
        return (curName.indexOf('error') !== -1 && this.isConfirmation(pageName));
    };

    Page.isSearchResults = function() {
        return (this.getName().indexOf(':blog:search') > -1 || this.getName().indexOf(':video-search') > -1);
    };

    Page.isBlog = function() {
        return this.getPathNode(2).indexOf('blog') > -1;
    };

    Page.isSFLive = function() {
        return this.getPathNode(2).indexOf('video') > -1;
    };

    Page.isDemoConfirmation = function() {
        return this.isDemo() && this.isConfirmation();
    };

    Page.isDemo = function() {
        return (this.getName().indexOf('demo:') > -1 || this.getName().indexOf('demo-') > -1 || this.getName().indexOf('demos') > -1 || this.getName().indexOf('demo_') > -1 || this.isDemoDirectory) ||
          (this.isConfirmation() && this.getPrevious().indexOf('demo') > -1);
    };

    Page.isSignup = function() {
        return this.getName().indexOf('signup') > -1 || this.getName().indexOf('trial') > -1 || document.location.href.indexOf('SignupServlet') > -1;
    };

    Page.isPricing = function() {
        return this.getName().indexOf('-pricing') > -1 || this.getName().indexOf('pricing-') > -1 || this.getName().indexOf('platform-edition') > -1 || this.getName().indexOf(':editions') > -1;
    };

    Page.isProductCategory = function() {
        var ew = [ ':crm:sales-force-automation', ':sales-cloud:overview', ':service-cloud:overview', ':data:overview', ':crm:customer-service-support', ':platform', ':chatter', ':chatter:overview', ':radian6:overview', ':jigsaw' ];
        for (var i=0; i<ew.length; i++) {
            if (Util.endsWith(this.getName(), ':' + this.getLocale() + ew[i])) {
                return true;
            }
        }
        return false;
    };

    Page.isProduct = function() {
        return !(this.isProductCategory() || this.getCloud() === 'No Cloud') || this.getName().indexOf(':products') > -1 || this.getName() .indexOf(':touch') > -1;
    };

    Page.isEvents = function() {
        var ew = [':events', ':cloudforce'];
        for (var i=0; i<ew.length; i++) {
            if (this.getName().indexOf(ew[i] + ':') > -1 || Util.endsWith(this.getName(), ew[i])) {
                return true;
            }
        }
        return false;
    };

    /**
     * Method to check if a page is a career confirmation page.
     * @param pageName
     * @returns {boolean}
     */
    Page.isCareersConfirmation = function(pageName) {
        var curName = typeof pageName === 'string' ? pageName : this.getName();
        return (curName.indexOf(':careers:career-apply-confirm') > -1 || curName.indexOf(':form:careers:conf') > -1);
    };

    /**
     * Method to check if a page is considered to be a social enterprise page.
     * @returns {boolean}
     */
    Page.isSocialEnterprise = function() {
        return (this.getName().indexOf('social') > -1 && this.getName().indexOf('enterprise') > -1) ||
          this.getChannel().indexOf(':solutions') > -1 ||
          this.getChannel().indexOf(':customers') > -1 ||
          this.getChannel().indexOf(':like') > -1 ||
          this.getName().indexOf('contactme-se') > -1;
    };

    /**
     * Help method to check if a page is considered a form confirmation page.
     * Logic return true if any of the following matches:
     *      Has ":conf:" in page name
     *      Has "[conf]" in page name
     *      Ends with "conf" in page name
     *      Has "_conf.jsp" in URL
     *      Has "SignupServlet" in URL
     *      Has "LeadCaptureServlet" in URL
     * AND the current page is not the same as the previous page (Dedupe refresh)
     * AND the current page is not career confirmation page (non lead related)
     *
     * @param pageName
     * @returns {boolean}
     */
    Page.isConfirmation = function(pageName) {
        var curName;
        if (typeof pageName === 'string') {
            curName = pageName;
        } else {
            curName = this.getName();
        }
        return (((curName.indexOf(':conf:') !== -1) ||
          (curName.indexOf('[conf]') !== -1) ||
          (Util.endsWith(curName, 'conf')) ||
          (Url.sanitizedPathname().indexOf('_conf.jsp') !== -1) ||
          (Url.sanitizedPathname().indexOf('SignupServlet') !== -1) ||
          (Url.sanitizedPathname().indexOf('LeadCaptureServlet') !== -1)) &&
          (Page.previous !== Page.name) &&
          !this.isCareersConfirmation(pageName));
    };

    /**
     * Check the type of form based on URL
     * @returns {string}
     */
    Page.getFormType = function() {
        var retVal = "";
        if (Page.isSEM()) {
            retVal = "SEM Form";
        } else if (Page.isDemo()) {
            retVal = "Demo Form";
        } else if (Page.isSignup()) {
            retVal = "Free Trial";
        } else if (!!~Page.getName().indexOf('contact')) {
            retVal = "Contact Form";
        }
        return retVal;
    };

    /**
     * The main method to get the type of the page.
     * Each type can have either:
     *  cb - callback method
     *  pm - pattern match
     * @returns {string}
     */
    Page.getType = function() {
        var pageTypes = [
            { name:'Form Page', cb:'hasLeadCaptureForm' }
            ,{ name:'Form Error Page', cb:'isError' }
            ,{ name:'Login Page', cb:'isLogin' }
            ,{ name:'404 Error Page', cb:'is404' }
            ,{ name:'Search Results Page', cb:'isSearchResults' }
            ,{ name:'Blog Page', cb:'isBlog' }
            ,{ name:'Home Page', cb:'isHome' }
            ,{ name:'Confirmation Page', cb:'isConfirmation' }
            ,{ name:'Demo Page', cb:'isDemo' }
            ,{ name:'Pricing and Editions Page', cb:'isPricing' }
            ,{ name:'Customer Testimonial Page', pm:'customers,success_stories' }
            ,{ name:'Events Page', cb:'isEvents' }
            ,{ name:'Video Page', pm:'video' }
            ,{ name:'Careers Page', pm:'company:careers' }
            ,{ name:'Press Release Page', pm:'news-press:press-releases' }
            ,{ name:'Company Page', pm:'company' }
            ,{ name:'Dreamforce Page', pm:'dreamforce' }
            ,{ name:'Services: Training Page', pm:'services-training:training_certification' }
            ,{ name:'Services: Support Page', pm:'services-training:customer-support' }
            ,{ name:'Services: Consulting Page', pm:'services-training:professional-services' }
            ,{ name:'Support: Partners Page', pm:'services-training:partner-support' }
            ,{ name:'Services Page', pm:'services-training' }
            ,{ name:'Resource Center Page', pm:'resource_center' }
            ,{ name:'Product Category Page', cb:'isProductCategory' }
            ,{ name:'Product Page', cb:'isProduct' }
            ,{ name:'Social Enterprise Page', cb:'isSocialEnterprise' }
            ,{ name:'Solutions Page', pm:'solutions' }
            ,{ name:'Country Selector Page', pm:'country_selector' }
            ,{ name:'Other Page' }
        ];

        for (var i=0; i<pageTypes.length; i++) {
            if (i === pageTypes.length - 1) {
                break;
            } else if (pageTypes[i].cb) {
                if (this[pageTypes[i].cb]()) {
                    return pageTypes[i].name;
                }
            } else if (pageTypes[i].pm) {
                var matches = pageTypes[i].pm.split(',');
                for (var j=0; j<matches.length; j++) {
                    if (this.getName().indexOf(':' + matches[j] +':') > -1 || Util.endsWith(this.getName(), ':' + matches[j])) {
                        return pageTypes[i].name;
                    }
                }
            }
        }
        return pageTypes[pageTypes.length - 1].name;
    };

    /* Here page group name is to use it in Akamai mPulse, this javascript variable should only exists for the pages to be configured using javascript variable. Apart from US homepage all other pages using URL regex pattern  */
    if(Page.isHome()){
        Page.groupName = (vp.isCustomer() ? "Customer Homepage" : "Prospect Homepage") + " - " +Page.getLocale().toUpperCase();
    }
    Page.setUrl();
}());

/**
 * This module holds all the related methods that captures CTA elements on the page.
 */

'use strict';
var Page = Page || {};

(function(){
    Page.ctas = null;

    /**
     * Given a link DOM object, check if it is a valid internal link.
     * All the required conditions are documented below.
     * @param linkObj
     * @returns {boolean}
     */
    Page.isValidLink = function(linkObj) {
        // nothing that's not a valid link
        // nothing without d=
        // nothing that's not a /form/ link (unless it's login messages)
        // nothing with class 'submit'
        // nothing that's being hidden
        // nothing whose parent(s) are hidden
        // nothing that has id='free-trial-trigger' and vp.getType == 'customer'
        // nothing that has parent with id='nav' or class='sf-menu'

        var href = Util.getHref(linkObj), isTracked = true, $ = jQuery;
        if (!href) {
            return false;
        } else if (!Util.getParam('d', href)) {
            return false;
        } else if (!Page.isLogin() && href.indexOf('/form/') === -1) {
            return false;
        } else if ($(linkObj).hasClass('submit')) {
            return false;
        } else if ($(linkObj).attr('id') === 'free-trial-trigger' && vp.isCustomer()) {
            return false;
        } else if ($(linkObj).attr('class') && $(linkObj).attr('class').indexOf('chat') > -1) {
            return true;
        } else {
            try {
                (function($) {
                    $(linkObj).parents().each(function(){
                        if ($(this).css('display') === 'none'
                          || $(this).css('visibility') === 'hidden'
                          || $(this).attr('id') === 'nav'
                          || $(this).attr('id') === 'footer'
                          || $(this).hasClass('sf-menu')) {
                            isTracked = false;
                            return false;
                        }
                    });
                })(jQuery);
            } catch(ex) {}
            if (!isTracked) {
                return false;
            }
        }
        return true;
    };

    /**
     * Scan through the page and get all the CTAs. Persist them on Page.ctas
     * @param ctas (optional) manually pass in cta
     * @param selector (optional) specify specific cta selector
     * @returns {null|[]|''}
     */
    Page.setCTAs = function(ctas, selector) {
        ctas = ctas ? ctas : '';
        selector = selector ? selector : 'a';
        if (this.ctas == null || selector) {
            // if null, find all valid <a> tags with 'd' and load them into the array
            this.ctas = [];
            try {
                (function($, page) {
                    $(selector).each(function(){
                        if(page.isValidLink(this)) {
                            page.ctas[page.ctas.length] = Util.getParam('d', Util.getHref(this)).length === 15 ? Util.convert15To18(Util.getParam('d', Util.getHref(this))) : Util.getParam('d', Util.getHref(this));
                        }
                    });
                })(jQuery, this);
            } catch(ex) {
                // login page fallback
                var linkObj = document.getElementsByTagName('a');
                for (var i=0; i<linkObj.length; i++) {
                    var href = Util.getHref(linkObj[i]);
                    if (href && Util.getParam('d', href)) {
                        this.ctas[this.ctas.length] = Util.getParam('d', href).length === 15 ? Util.convert15To18(Util.getParam('d', href)) : Util.getParam('d', href);
                    }
                }
                return false;
            }
        }
        if (ctas) {
            if (typeof(ctas) == 'string') {
                // if a string is passed in, load it into the array
                this.ctas[this.ctas.length] = ctas;

                // if comma-delimited, parse into array and then add to this.ctas
            } else {
                // if an array is passed in, add it to the array
                this.ctas.concat(ctas);
            }
        }

        if (this.ctas.length > 0) {
            // remove duplicates, limit to top 15
            this.ctas = Util.deDupe(this.ctas);
            if (this.ctas.length > 15) {
                return this.ctas.splice(15, (this.ctas.length - 15));
            } else {
                return this.ctas;
            }
        } else {
            return '';
        }
    };

    /**
     * Get all the CTAs on the page.
     * @returns {[]|string}
     */
    Page.getCTAs = function() {
        if (this.ctas == null) {
            this.setCTAs();
        }
        return this.ctas.length > 0 ? this.ctas : '';
    }

}());
/**
 * This module holds all the methods that get/set site search related data.
 */

'use strict';
var Page = Page || {};

(function(){
    Page.searchTerm = null;

    /**
     * Set the search term from URL and save in activity data
     * @param term
     * @returns {string|null}
     */
    Page.setSearchTerm = function(term) {
        if (!term) {
            return '';
        }
        this.searchTerm = Util.cleanUrlData(term);
        vp.activityData['l_search'] = this.searchTerm;
        vp.saveActivityData();
        return this.searchTerm;
    };

    /**
     * Get the search term
     * @returns {*}
     */
    Page.getSearchTerm = function() {
        return this.searchTerm == null ? '' : this.searchTerm;
    };

    /**
     * Give a page, set it as the search page.
     * TODO: Only for legacy google site search. Should be deprecated.
     * @param page
     */
    Page.setSearchPage = function(page) {
        if (!page) {
            return 1;
        }
        this.searchPage = page;
        return this.searchPage;
    };

    /**
     * Get the search page.
     * TODO: Only for legacy google site search. Should be deprecated.
     * @returns {*}
     */
    Page.getSearchPage = function() {
        return this.searchPage == null ? '' : this.searchPage;
    };

    /**
     * Get the number of search result
     * TODO: Only for legacy google site search. Should be deprecated.
     * @returns {string}
     */
    Page.getNumSearchResults = function() {
        if (this.isSearchResults()) {
            var results = '';
            try {
                results = jQuery('.gsc-cursor-page:last').html();
                results = results == null ? '0' : results;
                results = results.indexOf('(') === 0 ? results.substring(1) : results;
                results = results.lastIndexOf(')') === results.length - 1 ? results.substring(0, results.length - 1) : results;
                if ((/^\d+$/).test(results)) {
                    results = parseInt(results);
                    return results === 0 ? 'zero search results' : (results * 10 - 9).toString() + " - " + (results * 10).toString();
                } else {
                    return '[NUMBER OF RESULTS NOT AVAILABLE]';
                }
            } catch (ex) { }
        }
        return '';
    };

}());
/**
 * This module holds all the methods related to blog data,
 * which are retrieved from 'sfPageData' object.
 */

'use strict';

var Page = Page || {};

(function(){
    var dataDefined = typeof sfPageData !== 'undefined';

    /**
     * Get the blog meta data
     * @returns {*}
     */
    Page.getBlogPostMeta = function() {
        return dataDefined ? sfPageData.blogMeta : '';
    };

    /**
     * Get the blog author name
     * @returns {string}
     */
    Page.getBlogAuthor = function() {
        return dataDefined ? sfPageData.blogAuthor : '';
    };

    /**
     * Get the blog article title
     * @returns {string}
     */
    Page.getBlogArticleTitle = function() {
        var articleTitleSelector = document.querySelector('.articleInfo-title .articleInfo-title-text');
        return articleTitleSelector !== null ? articleTitleSelector.textContent.trim() : '';
    };

    /**
     * Get the cloud of the page
     * @returns {string|*}
     */
    Page.getCloud = function() {
        if (dataDefined && sfPageData.pageCloud) {
            return sfPageData.pageCloud;
        } else {
            return 'No Cloud';
        }
    }

}());

/**
 * This module holds all the specific ad hoc page object handling
 */

'use strict';
(function(){
    // Test to add first touch traffic drivers to links leading to SFIQ.com
    $(document).ready(function(){

        function updateQueryStringParameter(uri, key, value) {
            var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
            var separator = uri.indexOf('?') !== -1 ? "&" : "?";
            if (uri.match(re)) {
                return uri.replace(re, '$1' + key + "=" + value + '$2');
            }
            else {
                return uri + separator + key + "=" + value;
            }
        }

        var _drivermap = { 'SEM' : '701300000021LUP',
            'Email' : '701300000021LUU',
            'BAN' : '701300000021LUZ',
            'SEO' : '701300000021LUe',
            'Paid Social Media' : '701300000021LUj',
            'Social Media' : '701300000021LUo',
            'SFDC Network' : '701300000021LUt',
            'Typed/Bookmarked' : '701300000021LUy' };

        // Limit to salesforceIQ for now because it's risky to modify all links (takes a lot of QA). that's for phase 2
        $( "a[href*='www.salesforceiq.com'], a[href*='app.salesforceiq.com']" ).each(function(){
            var $this = $(this);
            $this.attr('href', updateQueryStringParameter($this.attr('href'), 'd', _drivermap[vp.activityData.l_dtype]));
        });
    });
}());
"use strict";

// Ensure missing digitalData object does not break JS
if (typeof digitalData === "undefined") {
    var digitalData = {
        page: {
            media: {}
        },
        user: [
            {
                profile:{
                    0: {}
                }
            }
        ],
        products: [],
        event: [],
        component: [],
        flags: {},
        ptc: (function() {
            var ptc = localStorage.getItem('ptc') || '{}';
            if(!Util.isValidJson(ptc)) {
                ptc = '{}';
                localStorage.removeItem('ptc');
            }
            return JSON.parse(ptc);
        })(),
        localStorage: (function() {
            var webactstoragedata = localStorage.getItem('webactls') || '{}';
            if(!Util.isValidJson(webactstoragedata)) {
                webactstoragedata = '{}';
                localStorage.removeItem('webactls');
            }
            return JSON.parse(webactstoragedata);
        })(),
        debug: sessionStorage.getItem('analytics_debug')
    };
} else {
    // Check for items that have not been initialized or added
    if (!digitalData.page) digitalData.page = {};
    if (!digitalData.page.media) digitalData.page.media = {}
    if (!digitalData.user) digitalData.user = [{}];
    if (!digitalData.user[0].profile) digitalData.user[0].profile = {0:{}};
    if (!digitalData.user[0].profile[0]) digitalData.user[0].profile[0] = {};
    if (!digitalData.products) digitalData.products = [];
    if (!digitalData.event) digitalData.event = [];
    if (!digitalData.component) digitalData.component = [];
    if (!digitalData.flags) digitalData.flags = {};
    if (!digitalData.ptc) digitalData.ptc = (function() {
        var ptc = localStorage.getItem('ptc') || '{}';
        if(!Util.isValidJson(ptc)) {
            ptc = '{}';
            localStorage.removeItem('ptc');
        }
        return JSON.parse(ptc);
    })();
    if (!digitalData.localStorage) digitalData.localStorage = (function() {
        var webactstoragedata = localStorage.getItem('webactls') || '{}';
        if(!Util.isValidJson(webactstoragedata)) {
            webactstoragedata = '{}';
            localStorage.removeItem('webactls');
        }
        return JSON.parse(webactstoragedata);
    })();
    if (!digitalData.debug) digitalData.debug = sessionStorage.getItem('analytics_debug')
}

(function (dataLayer) {

     // IE did not implement CustomEvent constructor correctly.
     // Rather than defining it as as a "function", it defines it as an
     // "object".
     //
     // This polyfill corrects this behavior and should prevent console errors
     // on all IE whenever emitEvent() method is called.
     // Adapted from:
     // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

     (function () {

      // All browsers except IE should return from the IIFE here
      if ( typeof window.CustomEvent === "function" ) return false;

      // IE Only
      function CustomEvent (event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(
          event,
          params.bubbles,
          params.cancelable,
          params.detail
        );
        return evt;
      }

      CustomEvent.prototype = window.Event.prototype;
      window.CustomEvent = CustomEvent;

     })();

     // Polyfill for element.matches() - IE11
     // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
     if (!Element.prototype.matches) {
         Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
     }

     // Used to ensure page load is fired once and only once.
     // This flag is ignored when tracking dynamic page loads.
     var initialized = false;

     // Data layer events that are exposed to consumers (public)
     var events = {
         BEFORE_PAGE_LOAD : 'DataLayer_beforepageload',
         PRODUCT_ADDED    : 'DataLayer_productadded',
         PROFILE_ADDED    : 'DataLayer_profileadded',
         ELEMENT_ADDED    : 'DataLayer_elementadded',
         BEHAVIOR_ADDED   : 'DataLayer_behavioradded'
     };

     // Registry of event handlers.
     var eventHandlers = {};

     // Tag Manager Proxy
     var tagManager = (
         function () {
             var jsObjectName = "MockTagManager";
             var eventFn      = "event";
             var loadFn       = "pageLoad";
             var linkFn       = "trackLink";

             // Has the tag manager js library been loaded?
             function isReady() {
                 return (typeof window[jsObjectName] !== "undefined");
             }

             // Ensure tag manager method is callable
             function methodExists(methodName){
                 return isReady() &&
                     typeof window[jsObjectName][methodName] === "function";
             }

             // Page Load Method
             function loadWrapper() {
                 if (methodExists(loadFn)) {
                     return window[jsObjectName][loadFn].apply(this, arguments);
                 }
                 return false;
             }

             // Event Tracking
             function eventWrapper() {
                 if (methodExists(eventFn)) {
                     return window[jsObjectName][eventFn].apply(this, arguments);
                 }
                 return false;
             }

             // Link Tracking
             function linkWrapper() {
                 if (methodExists(linkFn)) {
                     return window[jsObjectName][linkFn].apply(this, arguments);
                 }
                 return false;
             }

             return {
                 ready : isReady,
                 load  : loadWrapper,
                 event : eventWrapper,
                 link  : linkWrapper
             };
         }()
     );

     function exists(value){
         return !_.isUndefined(value) && !_.isNull(value);
     }

     function isEmpty(value){
         return !exists(value) || _.isEmpty(value);
     }

     function emitEvent(name, data){
         if(!isEmpty(name)){
             var event = new CustomEvent(name, {detail: data});
             document.dispatchEvent(event);
             executeEventHandlers(name);
         }
     }

     // Registers a handler for a given event name
     // (As exposed in digitalData.util.event.*)
     // and ensures that failure in a given handler won't
     // break the execution chain.
     function registerEventHandler(eventName, handler){
         if(isEmpty(eventHandlers[eventName])){
             eventHandlers[eventName] = {
                 fired: false,
                 stack: []
             };
         }
         var safeHandler = function(){
             try {
                 handler.apply(arguments);
             }catch(err){
                 console.log('Error executing handler for event' + eventName);
             }
         };
         if(!eventHandlers[eventName].fired){
             eventHandlers[eventName].stack.push(safeHandler);
         } else {
             safeHandler();
         }
     }

     // clears the handler stack and executes each handler
     // the last function in the chain is always added
     // to clear the stack. If the given event has already
     // fired, the handler is executed immediately.
     function executeEventHandlers(name){
         if(!isEmpty(eventHandlers[name])){
             var handlers = eventHandlers[name].stack;

             function clearStack(){
                 eventHandlers[name].stack = [];
                 eventHandlers[name].fired = true;
             }

             function compose(p, n){
                 return _.compose(p,n);
             }

             var handlerChain = _.reduce(handlers, compose, clearStack);
             handlerChain();
         }
     }

     // central method for seting an object property
     function setElement(root, name, value){
         if(tagManager.ready() && exists(root) && !isEmpty(name) && exists(value)){
             root[name] = value;
         }
     }

     // Set an element based on a deep path
     function setElementDeep(path, data){
         if(!isEmpty(path)){
             var arrayRef = /(\w[\w\d]+)\[([\d]+)\]/i;
             var objectRef = /(\w[\w\d]+)\[['"]?([\w]+)['"]?\]/i;
             function walk(parent, nodes, value){
                 if(isEmpty(nodes)){
                     return value;
                 }else {
                     var child = nodes.shift();
                     if(arrayRef.test(child)){
                         var match = child.match(arrayRef);
                         var n = match[1];
                         var i = match[2];
                         if(typeof parent[n] !== "object"){
                             parent[n] = [];
                         }
                         if(!parent[n][i]){
                             parent[n][i] = {};
                         }
                         if(!nodes.length){
                             parent[n][i] = walk(parent, nodes, value);
                         } else {
                             walk(parent[n][i], nodes, value);
                         }
                     } else if (objectRef.test(child)){
                         var match = child.match(objectRef);
                         var n = match[1];
                         var i = match[2];
                         if(typeof parent[n] !== "object"){
                             parent[n] = {};
                         }
                         if(!parent[n][i]){
                             parent[n][i] = {};
                         }
                         if(!nodes.length){
                             parent[n][i] = walk(parent, nodes, value);
                         } else {
                             walk(parent[n][i], nodes, value);
                         }
                     } else {
                         if(!parent[child]){
                             parent[child] = {};
                         }
                         if(!nodes.length){
                             parent[child] = walk(parent, nodes, value);
                         } else {
                             walk(parent[child], nodes, value);
                         }
                     }
                 }
                 return value;
             }

             var nodes = path.split('.');
             return walk(dataLayer, nodes, data);
         }
         return false;
     }


     // central method for pushing to an array
     function pushElement(path, data){
         if(tagManager.ready() && _.isArray(path) && exists(data)){
             path.push(data);
         }
     }

     /*
      * Public Interface
      */

     // Set page data elements
     function addPageData(element, data){
         if(!isEmpty(element) && !isEmpty(data)){
             setElement(dataLayer.page, element, data);
             var eventData = {
                 path: 'page.' + element,
                 value: data
             };
             emitEvent(events.ELEMENT_ADDED, eventData);
         }
     }
     // Retrieve a profile by name
     function getUserProfileByName(name){
         var index = name;
         if(name && name.toLowerCase() === "legacy"){
             index = 0;
         }
         return dataLayer.user[0].profile[index];
     }

     // Set a profile by name
     function setUserProfileByName(name, data){
         if(!isEmpty(name) && !isEmpty(data)){
             var profileInfo = data;
             profileInfo.profileID = name;
             if(name && name.toLowerCase() === "legacy"){
                 name = 0;
             }
             setElement(dataLayer.user[0].profile, name, profileInfo);
             emitEvent(events.PROFILE_ADDED, profileInfo);
         }
     }

     // Add product to products array
     function addProduct(name, category){
         if(!isEmpty(name)){
             var productInfo = {
                 productInfo: {
                     productName: name
                 },
                 category: {
                     primaryCategory: category || ""
                 }
             };
             pushElement(dataLayer.products, productInfo);
             emitEvent(events.PRODUCT_ADDED, productInfo);
         }
     }

     /*
      * Behavior object
      * name (String): The name of the behavior
      * options (Object): A map of properties to set on the object.
      *
      * Supported optional properties are:
      * primaryCategory (String): The category of the behavior.
      * value (Number): The value of the behavior, if unset it
      * defaults to 1 (this is useful for "counter" behaviors.)
      */

     function Behavior(name, options){
         this.eventInfo = {
             eventName: name,
             eventID: name,
             timeStamp: new Date(),
             data: options
         };
         if(!isEmpty(options)){
             this.eventInfo.eventPoints = options.value || 1;
             if(!_.isEmpty(options.primaryCategory)){
                 this.eventInfo.category = {
                     primaryCategory : options.primaryCategory
                 };
             }
         }
         return this;
     }

     function isBehavior(obj){
         return (_.isObject(obj) && _.has(obj, 'eventInfo'));
     }

     function ensureBehavior(behavior, options){
         var behaviorObject = null;
         if(isBehavior(behavior)){
             behaviorObject = behavior;
         } else if(_.isString(behavior)){
             behaviorObject = new Behavior(behavior, options);
         }
         return behaviorObject;
     }

     /*
      * Set behavior and add to events array
      *
      * This can be called two ways:
      * addBehavior(String behavior, Object options)
      * addBehavior(Behavior behavior)
      *
      * If the first method is used (a simple string
      * and associated options map) then it will be
      * converted into an Behavior object and added.
      */
     function addBehavior(behavior, options) {
         var behaviorObject = ensureBehavior(behavior, options);
         if(exists(behaviorObject)){
             tagManager.event(behaviorObject);
             pushElement(dataLayer.event, behaviorObject);
             emitEvent(events.BEHAVIOR_ADDED, behaviorObject);
         }
     }

     // Track a behavior with associated data and
     // Fire beacon
     // To be deprecated once a tag manager is available.
     function trackBehavior(activity, behaviors, elements){
         if(!isEmpty(activity)){
             if (tagManager.ready()) {
                 tagManager.link(activity,
                     _(behaviors).chain().map(
                         function(behavior){
                             var behaviorObject = ensureBehavior(behavior, {primaryCategory: activity, elements: elements});
                             dataLayer.util.addBehavior(behaviorObject);
                             return behaviorObject;
                         }).value(),
                     elements);
             } else {
                 behaviors.forEach(function(behavior){
                     dataLayer.util.addBehavior(behavior);
                 });
             }
             if (dataLayer.debug) {
                 console.log("Analytics dynamic event tracking fired:", activity, "\nEvents:", behaviors, "\nData points:", elements);
             }
         }
     }

     // Retrieve the value of a data element
     // given a relative path as a string
     function getElement(root, path){
         function get(node, paths){
             if(node && paths.length){
                 var child = paths.shift();
                 return get(node[child], paths);
             }
             return node;
         }
         if(path && path.length){
             // Convert paths like a.b['c'][0] into an array
             // of nodes like: ['a','b','c','0']
             var paths = path.replace(/\[/g,'.').replace(/\]|\'|\"/g,'').split('.');
             return get(root, paths);
         }
         return null;
     }

     function getDataLayerElement(path){
        return getElement(dataLayer, path);
     }

     function getLocalStorage(path) {
        return getElement(dataLayer.localStorage, path) || "";
     }

     // Replacement for s.c_w interface
     function writeCookie(name, value, expire, domain){
         if(name && value && name.length >= 1 && value.length >= 1){
             Util.setCookie(value, encodeURIComponent(name), expire, domain || location.hostname);
         }
         return value;
     }

     // Replacement for s.c_r interface
     function readCookie(name){
         if(name && name.length >= 1){
             name = encodeURIComponent(name);
             return Util.getCookie(name);
         }
         return null;
     }

     // Replacement for s object delete cookie
     function deleteCookie(name) {
         if(name && name.length >= 1) {
            name = encodeURIComponent(name);
            Util.deleteCookie(name);
         }
     }

     // Replacement for s.getValOnce interface
     function getValueOnce(value, cookie, expiresInDays){
         var cookieValue = readCookie(cookie);
         if(value){
             var expire = expiresInDays ? (expiresInDays * 86400) : void 0;
             writeCookie(cookie, value, expire, location.hostname);
         }
         return value == cookieValue ? '' : value;
     }

     function getAndPersistValue(value, cookie, expiresInDays){
         var expire = expiresInDays ? (expiresInDays * 86400) : void 0;
         if(value){
             writeCookie(cookie, value, expire);
         }
         return readCookie(cookie);
     }

     // Page Load - Initialize and fire page load
     // The method exposed for page load actually ensures that any registered hooks
     // are executed first.
     function pageLoad() {
         if (tagManager.ready() && !initialized) {
             tagManager.load();
             initialized = true;
         }
     }

     function beforePageLoadHook() {
         executeEventHandlers(events.BEFORE_PAGE_LOAD);
     }

     registerEventHandler(events.BEFORE_PAGE_LOAD, pageLoad);

     function dynamicPageLoad(pageName, behaviors, elements) {
         // Preserve the additionalelements
         var preserve = _.reduce(
             elements,
             function (memo, element) {
                 var value = dataLayer.util.getElement(element);
                 memo.push({
                               element: element,
                               value: value
                           });
                 return memo;
             }, []);

         // Reset to empty data layer
         resetDataLayer();

         // Populate global page load elems
         dataLayer.util.trackPageGlobal();

         //take care of page name. keep the Page object in sync (so Page.Previous will work... or, modify setPrevious)
         dataLayer.page.pagename = pageName;

         // remember the current page name in cookie; will be used on next omniture request for the previous page           variable
         Page.setPrevious(dataLayer.page.pagename);

         // Ensure elements are tracked with behaviors
         behaviors = _(behaviors).chain().map(
             function(behavior){
                 return ensureBehavior(behavior, {primaryCategory: pageName, elements: elements});
             }).value(),

         // Fire Page Load
         tagManager.load(behaviors, elements, preserve);
     }

     function resetDataLayer(){
         dataLayer.page = {};
         dataLayer.user[0].profile = {0: {}};
         dataLayer.event = [];
         dataLayer.product = [];
         dataLayer.flags = {};
     }


    function saveLocalStorage() {
        if (SfdcWwwBase.gdpr && SfdcWwwBase.gdpr.isEnabled()){
            if(SfdcWwwBase.gdpr.getActiveCookies().length > 0){
                $.each( dataLayer.localStorage, function(key) {
                    if(!SfdcWwwBase.gdpr.isCookieActive(key)){
                        delete dataLayer.localStorage[key];
                    }
                });
            localStorage.setItem('webactls', JSON.stringify(dataLayer.localStorage));
            }
        }else{
            localStorage.setItem('webactls', JSON.stringify(dataLayer.localStorage));
        }
        return true;
    }

    /**
     * Get form field value by name
     * @returns {string}
     */
    function getFormFieldValue(form, fieldName) {
        return form && form[fieldName] ? form[fieldName].value : '';
    }

    // TODO Remove this after migrating forms V1 to V2.
    function trackForm(fields, numInvalidFormFields, numValidFormFields, ajax) {
        var loc = Page.getLocale();
        var errors = '';
        var errorsAll = '';
        var trackFormEvents = [];
        var trackFormProperties = [];

        dataLayer.util.addPageData('formerrors', '');
        dataLayer.util.addPageData('formerrorsall', '');
        dataLayer.util.addPageData('formerrorspercentage', '');

        if (!fields) {
            return false;
        }

        for (var f in fields){
            var newError = (loc + ':' + f);
            if ((errors + newError).length < 100) {
                errors += (errors == '' ? '' : '|') + newError;
            }
            if ((errorsAll + newError).length < 255) {
                errorsAll += (errorsAll == '' ? '' : '|') + newError;
            }
        }

        if (errors) {
            errors = errors.toLowerCase();
            errorsAll = errorsAll.toLowerCase();

            dataLayer.util.addPageData('formerrors', errors);
            trackFormProperties.push('page.formerrors');
            dataLayer.util.addPageData('formerrorsall', errorsAll);
            trackFormProperties.push('page.formerrorsall');
            dataLayer.util.addPageData('formerrorspercentage', Math.round(numInvalidFormFields/(numValidFormFields+numInvalidFormFields)*100).toString()+'%');
            trackFormProperties.push('page.formerrorspercentage');

            trackFormEvents.push('form_errors');
        } else {
            dataLayer.util.setFormFillVals();
            trackFormProperties.push('user[0].profile[0].usercompanysize');
            trackFormProperties.push('user[0].profile[0].usercompanycountry');
            trackFormProperties.push('user[0].profile[0].userprimaryprodinterest');
            trackFormProperties.push('user[0].profile[0].usercompanyname');
            trackFormProperties.push('user[0].profile[0].userfirstformcompletetime');
        }

        trackFormEvents.push('formbutton_clicks');

        if (trackFormEvents.length === 0) {
            trackFormEvents.push('');
        }

        dataLayer.util.trackBehavior('Form error tracking', trackFormEvents, trackFormProperties)
    }

    function trackAjaxForm() {
        dataLayer.util.trackBehavior('Ajax form view', [''], []);
    }

    function trackSocial(channel, action) {
        var eventsList = [];
        var propertiesList = [];

        //examples of channel: Facebook-like, linkedin
        if (!channel) {
            return false;
        }
        if (!action) {
            action = 'Social sharing';
        }

        if (action === 'Social signup') {
            dataLayer.util.addPageData('sharechannel', channel);
            propertiesList.push('page.sharechannel');
            dataLayer.util.addPageData('customlink', action);
            propertiesList.push('page.customlink');
        } else if (action === 'Social success') {
            dataLayer.util.addBehavior('social_signin_success');
            eventsList.push('social_signin_success');
        } else {
            dataLayer.util.addBehavior('socialshares');
            eventsList.push('socialshares');
            dataLayer.util.addPageData('sharechannel', channel);
            propertiesList.push('page.sharechannel');
            action = channel + ': social share';
        }

        if (eventsList.length === 0) {
            eventsList.push('');
        }
        dataLayer.util.trackBehavior(action, eventsList, propertiesList);
    }

    /**
     * Get pipe delimited string of Time and Day of Week
     * Used for Populating hour of day, day of week values into custom variables.
     * @returns {String}
     * e.g.'7:43 AM|Tuesday'
     */
    function getTimeParting() {
        //convert visitor's current date and time from current timezone to pacific time zone
       let convertedDateTime = new Date().toLocaleString("en-US", {timeZone: "US/Pacific", hour:"numeric", minute:'numeric', weekday:'long'}),
           //e.g. Tuesday 7:40 AM
           convertedDateTimeArray = convertedDateTime.split(' ');
          //['Tuesday', '7:40', 'AM']
        return convertedDateTimeArray[1] + ' ' + convertedDateTimeArray[2] + '|' + convertedDateTimeArray[0];
    }

    /**
     * Get the referrer page name based on the calculated page name.
     *
     * @returns {String}
     */
    function getReferrerPageName() {
        var cpDocReferrerPath = '';

        //using <a> element - it implements location
        var cpAnchorElement = document.createElement('a');
        cpAnchorElement.href = Page.getReferrer();
        //make sure the path starts with leading '/', IE patch
        if (cpAnchorElement.pathname) {
            cpDocReferrerPath = cpAnchorElement.pathname.replace(/(^\/?)/,"/");
        }

        var referrerPageName = Page.calculateName(cpDocReferrerPath, cpAnchorElement.hostname);

        // support for legacy blog home page name (when it was on it's own domain)
        if (referrerPageName === Page.getServer() + ':' + Page.getLocale() + ':blog') {
            referrerPageName += ':homepage';
        }

        // handle edge case for links from login.salesforce.com parent frame
        // Page.calculateName gets confused by the '/' path and thinks it's the homepage
        // treat links from parent document as if they were from marketing frame
        if (document.referrer.indexOf('login.salesforce.com') > -1) {
            referrerPageName = Page.getServer() + ':' + Page.getLocale() + ':' + 'login';
        }

        return referrerPageName;
    }

    /**
     * Help function to format DemandBase data
     * @param data {object} JSON response object from DemandBase
     */
    function formatDBData(data) {
        var formattedData = {};
        if (data) {
            formattedData = {
                name: !data.company_name ? '' : data.company_name.toLowerCase()
                , size: !data.employee_range ? '' : data.employee_range.toLowerCase()
                , sic: !data.primary_sic ? '' : data.primary_sic
                , ind: (!data.industry ? '' : (data.industry + (!data.sub_industry ? '' : ':' + data.sub_industry))).toLowerCase()
                , cmp: !data.db_campaign ? '' : data.db_campaign.toLowerCase()
                , aud: (!data.audience ? '' : (data.audience + (!data.audience_segment ? '' : ':' + data.audience_segment))).toLowerCase()
                , atype: !(data.watch_list && data.watch_list.account_type) ? '' : data.watch_list.account_type
                , city: !data.city ? '' : data.city.toLowerCase()
                , state: !data.state ? '' : data.state.toLowerCase()
                , requestMade: true
            }
        }
        return formattedData;
    }

    /**
     * Method to format and set demandBase value to digitalData.
     */
    function trackDemandBase() {
        var legacyProfile = getUserProfileByName("legacy") || {};
        //Adding DemandBase data to the legacy profile, and as its own profile
        if (demandBase && demandBase.loaded) {
            demandBase.loaded.done(function() {
                var data = dataLayer.localStorage.db;
                setUserProfileByName("demandbase", demandBase.data);
                //Also added as a field on the legacy profile
                legacyProfile["db"] = demandBase.data;
                legacyProfile["formattedDB"] = data;
                //Formatting DemandBase data
                legacyProfile["targetingcompanysize"] = 'DB=' + (data.size || '[NO DATA]');
                legacyProfile["accounttype"] = 'DB=' + (data.atype || '[NO DATA]');
                legacyProfile["targetingcompanyindustry"] = 'DB=' + (data.ind || '[NO DATA]');
                legacyProfile["targetingcompanyname"] = 'DB=' + (data.name || '[NO DATA]');
                legacyProfile["targetingaudience"] = 'DB=' + (data.aud || '[NO DATA]');
                setUserProfileByName("legacy", legacyProfile);
            })
        }
    }

    /**
     * Method to get the CTAs on the page.
     * @returns {*|string}
     */
    function getCTAs() {
        if (!Page.getCTAs()) {
            Page.setCTAs();
        }
        return Page.getCTAs();
    }

    /**
     * Core method to dynamically invoke tracking for multiple events
     * And send specific evars/props along with the request.
     * Example usage:
     *      trackActivity("some-str", {events:["event16","event17"],
     *          properties:{prop22:"prop 22 value", eVar72:"evar 72 value"}});
     * @param activity
     * @param options
     */
    function trackActivity(activity, options) {
        if(!dataLayer.util.mappings.adobe)
            return;
        if (!activity) {
            return;
        }
        var events = options && options.events || [];
        var properties = options && options.properties || {}; // evars and props

        events.push("event66"); // Always send customlink event (event66)

        // Set data layer events
        var dlEvents = _(events)
          .chain()
          .map(dataLayer.util.mappings.adobe.getEventName)
          .uniq().value();

        // Set data layer elements
        var dlElements = [];
        _(properties).chain().keys().each(
          function (key) {
              var element = dataLayer.util.mappings.adobe.getDataElementName(key);
              if (element) {
                  if (element === "products") {
                      _(properties[key]).map(
                        function (product) {
                            var eventName;
                            if (_.indexOf(dlEvents, "intdriverclick") > -1) {
                                eventName = "intdriverclick";
                            } else {
                                eventName = "intdriverimp";
                            }
                            addProduct(product, eventName);
                        }
                      );
                  } else {
                      setElementDeep(element, properties[key]);
                  }
                  dlElements.push(element);
              }
          }
        );
        // Ensure activity name is tracked
        addPageData("customlink", activity);
        if (dlElements.length) {
            dlElements.push("page.customlink");
        } else {
            dlElements = ["page.customlink"];
        }
        trackBehavior(activity, dlEvents, dlElements);
    }

    /**
     * Add internal drivers to dataLayer product list
     * Also add internal driver impression event.
     * @param drivers
     */
    function addDrivers(drivers) {
        if (drivers && drivers.length > 0) {
            var eventName = "intdriverimp";
            for (var i = 0; i < drivers.length; i++) {
                var driver = drivers[i];
                addProduct(driver, eventName);
            }
            addBehavior(eventName);
        }
    }

    /**
     * Method to set the values user filled & submitted in the form to digitalData user profile
     */
    function setFormFillVals() {
        var legacyProfile = digitalData.user[0].profile[0];
        legacyProfile.usercompanysize = vp.getCompanyEmployees() ? vp.getCompanyEmployees() : '[FORM:NO COMPANY SIZE]';
        legacyProfile.usercompanycountry = vp.getCompanyCountry() ? vp.getCompanyCountry() : '[FORM:NO COUNTRY]';
        legacyProfile.userprimaryprodinterest = vp.getPrimaryProductInterest() ? vp.getPrimaryProductInterest() : '[FORM:NO PRIMARY PRODUCT INTEREST]';
        legacyProfile.usercompanyname = vp.getCompanyName() ? vp.getCompanyName() : '[FORM:NO COMPANY NAME]';
        legacyProfile.userfirstformcompletetime = vp.getFirstFormCompleteTime();
    }

    /**
     * Help function to check if an event present in digitalData
     * @param evt {string}
     * @returns {boolean}
     */
    function hasEvent(evt) {
        for (var i = 0; i < digitalData.event.length; i++) {
            if (dataLayer.event[i].eventInfo.eventID === evt) {
                return true;
            }
        }
        return false;
    }

    /**
     * Help method for adobe analytics specific CTA tracking
     * It is used to format CTA impressions that goes into s.products
     * @returns {string}
     */
    function trackCTAs(impr, clck) {
        var ctas = '';
        clck = clck || '';
        if (!impr) {
            return clck ? ';' + clck + ';;;event25=1' : '';
        }
        if (clck) {
            ctas = ';' + clck + ';;;event25=1';
        }

        for (var i=0; i<impr.length; i++) {
            if (ctas.indexOf(impr[i]) === -1) {
                ctas += (ctas !== '' ? ',' : '') + ';' + impr[i] + ';;;event19=1';
            }
        }
        return ctas;
    }

     // Create public interface:
     // digitalData.util.on
     // digitalData.util.pageLoad
     // digitalData.util.addPageData
     // digitalData.util.getUserProfileByName
     // digitalData.util.setUserProfileByName
     // digitalData.util.addProduct
     // digitalData.util.addBehavior
     // digitalData.util.Behavior
     // digitalData.util.trackBehavior
     // digitalData.util.getElement
     // digitalData.util.setElement
     // digitalData.util.writeCookie
     // digitalData.util.readCookie
     // digitalData.util.getValueOnce
     // digitalData.util.getAndPersistValue
     // digitalData.util.dynamicPageLoad
     // digitalData.util.event.BEFORE_PAGE_LOAD
     // digitalData.util.event.PRODUCT_ADDED
     // digitalData.util.event.PROFILE_ADDED
     // digitalData.util.event.ELEMENT_ADDED
     dataLayer.util = {
         on                   : registerEventHandler,
         pageLoad             : beforePageLoadHook,
         emitEvent            : emitEvent,
         addPageData          : addPageData,
         getUserProfileByName : getUserProfileByName,
         setUserProfileByName : setUserProfileByName,
         addProduct           : addProduct,
         addBehavior          : addBehavior,
         Behavior             : Behavior,
         trackBehavior        : trackBehavior,
         getElement           : getDataLayerElement,
         setElement           : setElementDeep,
         writeCookie          : writeCookie,
         readCookie           : readCookie,
         deleteCookie         : deleteCookie,
         getValueOnce         : getValueOnce,
         getAndPersistValue   : getAndPersistValue,
         dynamicPageLoad      : dynamicPageLoad,
         event                : events,
         saveLocalStorage     : saveLocalStorage,
         getLocalStorage      : getLocalStorage,
         getFormFieldValue    : getFormFieldValue,
         trackForm            : trackForm,
         trackAjaxForm        : trackAjaxForm,
         trackSocial          : trackSocial,
         getTimeParting       : getTimeParting,
         getReferrerPageName  : getReferrerPageName,
         getCTAs              : getCTAs,
         trackActivity        : trackActivity,
         addDrivers           : addDrivers,
         setFormFillVals      : setFormFillVals,
         hasEvent             : hasEvent,
         trackCTAs            : trackCTAs,
         trackDemandBase      : trackDemandBase,
         components           : {}
     };

    /**
     * Initialize data Layer local storage based on visitor profile and page data
     */
    dataLayer.initLocalStorage = function() {
        var fromCookieToLS = ['chat', 'db', 'kxsfdc', 'l_cloud', 'ptb', 'version'],
          storage = dataLayer.localStorage;

        if (!storage || typeof vp === 'undefined' || typeof Page === 'undefined') {
            return;
        }

        // Move related vp webact cookie field into digitalData local storage
        if (vp.activityData) {
            fromCookieToLS.forEach(function(key){
                if (vp.activityData[key]) {
                    storage[key] = vp.activityData[key];
                }
                delete vp.activityData[key];
            });
        }

        // This 'chat' flag is used by chat modal to indicate if a chat has already dropped for the current session.
        // Reset it to 0 here indicate chat modal has not dropped for the session.
        if (vp.isNewSession()) {
            storage.chat = 0;
        }

        // Set version for new visitor
        if (vp.isNewVisitor() && vp.firstVisit() === 0) {
            storage.version = vp.version;
        }

        // Get demandBase values from visitor profile
        if (demandBase && demandBase.loaded) {
            demandBase.loaded.done(function() {
                storage.db = formatDBData(demandBase.data);
            })
        }

        // Get krux segment data from visitor profile
        var kruxItems = vp.getKruxSegment();
        storage.kxsfdc = {
            segs: kruxItems ? kruxItems : ''
        };

        // Get cloud/segment based on page data
        storage.l_cloud = Page.getCloud();

        saveLocalStorage();
    }

 }(digitalData));

"use strict";
/*
 * This provides an subset of the functionality in s.Media.
 * The purpose is to allow tracking of video viewing metrics
 * in consistent manner without relying on Adobe Analytics
 * specific functionality.
 *
 * The following data layer elements are populated:
 * - videoname
 * - videoplayername
 * - videoduration
 * - customlink
 *
 * The following events are fired:
 * number_video_views
 * video_seconds_length
 *
 * Additionally, it will fire milestone events at
 * 25%, 50%, 75% & 100%
 *
 * Additional milestones can be tracked simply by
 * adding them to milestoneEvents.
 */
(function() {
    if (digitalData && digitalData.util) {
        var dataLayer = digitalData.util;
        dataLayer.media = dataLayer.media || {};
        var trackedMedia = {};
        var videoNameElement = 'page.videoname';
        var videoPlayerElement = 'page.videoplayername';
        var videoDurationElement = 'page.videoduration';
        var customLinkElement = 'page.customlink';
        var videoIdElement = 'page.videoid';

        var elements = [videoNameElement, videoPlayerElement, videoDurationElement, customLinkElement];
        var milestoneEvents = {
            25: 'video_25percent_viewed',
            50: 'video_50percent_viewed',
            75: 'video_75percent_viewed',
            100: 'video_100percent_viewed'
        };
        var viewEvent = 'number_video_views';
        var timePlayedEvent = 'video_seconds_viewed';
        var loadEvent = 'video_load';

        /*
         * Load tracking for a given video.
         * - This is for GA only -
         */
        dataLayer.media.load = function(name, videoId) {
            dataLayer.setElement(videoNameElement, name);
            dataLayer.setElement(videoIdElement, videoId);
            dataLayer.trackBehavior(digitalData.page.pagename, [loadEvent], [videoNameElement]);
        };

        /*
         * Initiate tracking for a given player.
         * (replaces s.Media.open)
         */
        dataLayer.media.open = function(name, length, player, videoId) {
            if (!_.isEmpty(name)) {
                trackedMedia[name] = new MediaTracker(name, length, player);
                trackedMedia[name].timer.start();
                dataLayer.setElement(videoDurationElement, 0);
                dataLayer.setElement(videoIdElement, videoId);
                track(trackedMedia[name].name, [viewEvent]);
            }
        };

        /*
         * Pauses tracking for a given player.
         * (replaces s.Media.stop)
         */
        dataLayer.media.stop = function(name, offset) {
            if (!_.isEmpty(name) && _.isObject(trackedMedia[name])) {
                trackedMedia[name].timer.pause();
            }
        };

        /*
         * Resumes tracking for a given player.
         * (replaces s.Media.play)
         */
        dataLayer.media.play = function(name, offset, segmentNum, segment) {
            if (!_.isEmpty(name) && _.isObject(trackedMedia[name])) {
                trackedMedia[name].timer.resume();
            }
        };

        /*
         * Completes tracking for a given player.
         * (replaces s.Media.close)
         */
        dataLayer.media.close = function(name) {
            if (!_.isEmpty(name) && _.isObject(trackedMedia[name])) {
                trackedMedia[name].timer.stop();
                track(name);
            }
        };

        /*
         * Add data layer elements to track. This is useful if additional/ad-hoc
         * data layer elements need to be tracked.
         */
        dataLayer.media.trackElement = function(elem){
            elements.push(elem);
        };

        function track(name, events) {
            if (!_.isEmpty(name) && _.isObject(trackedMedia[name])) {
                var media = trackedMedia[name];
                // Set Data Layer Elements
                dataLayer.setElement(videoNameElement, media.name);
                dataLayer.setElement(videoPlayerElement, media.player);
                dataLayer.setElement(customLinkElement, Page.getName() + '|' + media.name);
                dataLayer.trackBehavior(digitalData.page.pagename, events || [], elements);
            }
        }

        function MediaTracker(name, length, player) {
            this.name = name;
            this.length = length;
            this.player = player;
            this.timer = new Timer();
            var lastDuration = 0;

            // Convert milestone maps into relative timecodes
            // to optimize the predicate evaluated onTick
            var milestones = _(milestoneEvents).chain().keys()
                .sortBy(
                    function(n){
                        return Number(n);
                    })
                .reduce(
                    function(marks, milestone){
                        var timecode = Math.floor(1000 * length * (milestone / 100));
                        marks.push(
                            {
                                milestone: timecode,
                                event: milestoneEvents[milestone]
                            }
                        );
                        return marks;
                    }
                    , []).value();

            var nextMilestone = _(milestones).chain().pluck('milestone').min().value();

            this.timer.onTick(
                (function(that){
                     return function(duration){
                         if(duration >= nextMilestone){
                             var milestone = milestones.shift();

                             var opts = {
                                 'value': Math.round((duration - lastDuration) / 1000)
                             };
                             var timePlayed = new digitalData.util.Behavior(timePlayedEvent, opts);

                             dataLayer.setElement(videoDurationElement, Math.round(duration / 1000));
                             lastDuration = duration;

                             track(that.name, [timePlayed, milestone.event]);
                             nextMilestone = _(milestones).chain().pluck('milestone').min().value();
                         }
                     };
                 }(this))
            );
            return this;
        }

        function Timer() {
            console.log('Timer initiated');
            var State = {
                INITIALIZED: -1,
                COUNTING: 0,
                PAUSED: 1,
                STOPPED: 2
            };
            var interval = 100; //ms
            var mark = 0;
            var duration = 0;
            var handlers = [];
            var currentState = State.INITIALIZED;

            function tick() {
                var now = _.now();
                if (currentState === State.COUNTING) {
                    duration += now - mark;
                }
                mark = now;
                if (currentState < State.STOPPED) {
                    window.setTimeout(tick, interval);
                }
                _.map(handlers, function(f){
                          f.apply(this,[duration]);
                      });
            }

            this.start = function() {
                if (currentState === State.INITIALIZED) {
                    currentState = State.COUNTING;
                    console.log('currentState in timer.start is ', currentState)
                    mark = _.now();
                    window.setTimeout(tick, interval);
                }
            };

            this.pause = function() {
                if (currentState === State.COUNTING) {
                    currentState = State.PAUSED;
                    mark = _.now();
                }
            };

            this.resume = function() {
                if (currentState === State.PAUSED) {
                    currentState = State.COUNTING;
                    mark = _.now();
                }
            };

            this.stop = function() {
                if (currentState < State.STOPPED) {
                    currentState = State.STOPPED;
                    mark = _.now();
                }
            };

            this.onTick = function(handler){
                handlers.push(handler);
                return this;
            };

            this.getDuration = function() {
                return duration;
            };

            return this;
        }
    }
}());

"use strict";

(function(){
    digitalData.util.mappings = digitalData.util.mappings || {};
    var gEventMap = {},
      userProfile = digitalData.user[0].profile[0],
      pageData = digitalData.page,
      podcastPoints = ['podcastName', 'episodeName', 'episodeID'],
      podcastMap = {
        'podcastName': 'podcastname',
        'episodeName': 'episodename',
        'episodeID': 'episodeid',
        'totalLength': 'episodelength',
        'startTime': 'episodestart',
        'stopTime': 'episodestop',
        'currentTime': 'episodecurrenttime',
        'percentComplete': 'episodepercent',
        'takeawayName': 'takeawayname',
        'takeawayID': 'takeawayid',
        'takeawayStartTime': 'takeawaystart',
        'takeawayEndTime': 'takeawayend'
      };

    var MockTagManager = {};

    MockTagManager.pageLoad = function (events, elements, preservedElements) {
    };

    MockTagManager.event = function(){
        //TODO, noop
    };

    MockTagManager.trackLink = function(activity, events, elements){
    };

    window['MockTagManager'] = MockTagManager;

    function constructImpressions(dynamicOfferCollection) {
        var impressionList = [],
            counter = 1;
        dynamicOfferCollection.forEach(function(offerObj) {
            var offerDivId = offerObj.divId;
            impressionList.push({
                name: 'div_' + offerDivId,
                list: offerDivId,
                position: counter,
                dimension60: offerObj.formDriverIdList.join('|'),
                dimension94: offerDivId,
                dimension95: offerObj.campaignUrl,
                metric15: 1
            });
            counter++;
        });
        return impressionList;
    }

    /**
     * This formulates array of promoFieldObjects
     * to track promotion view/impression
     */
    function processPromoViews() {
        var compArr = digitalData.component || [{}],
            compArrLen = compArr.length,
            promoViewObj = {
                'event' : 'promotionImpression',
                'ecommerce' : {
                    'promoView' : {
                        'promotions' : []
                    }
                }
            },
            promoArr = [];

        if (compArrLen === 0) return promoViewObj;

        var cur = compArrLen,
            curCompInfo = compArr[compArrLen-1].componentInfo,
            campId = curCompInfo.campaign || '',
            expId = curCompInfo.experience || '';
        do {
            cur = cur - 1;
            curCompInfo = compArr[cur].componentInfo;
            promoArr.push({
                'id' : curCompInfo.componentID || '',
                'name' : campId,
                'creative' : expId,
                'position' : (curCompInfo.itemType || '') + '|' + (curCompInfo.position)
            });
        } while (compArr[cur - 1]
            && (compArr[cur - 1].componentInfo.campaign === campId)
            && (compArr[cur - 1].componentInfo.experience === expId));

        promoViewObj.ecommerce.promoView.promotions = promoArr;
        // return the promoFieldObjects
        return promoViewObj;
    }

    /**
     * This formulates array of promoFieldObject
     * to track promotion click
     */
    function processPromoClick() {
        var promoData = pageData.personalization,
            promoClickObj = {
                'event' : 'promotionClick',
                'ecommerce' : {
                    'promoClick' : {
                        'promotions' : []
                    }
                }
            };

        if (!promoData) return promoClickObj;

        promoClickObj.ecommerce.promoClick.promotions = [
            {
                // Name or ID is required.
                'id' : promoData.clickItemId || '',
                'name': promoData.clickCampId || '',
                'creative': promoData.clickExpId || '',
                'position': (promoData.clickItemType || '') + '|' + (promoData.clickItemPos || '')
            }
        ];
        // return the promoFieldObjects
        return promoClickObj;
    }

    /**
     * This formulates the event related data points
     * @param eventName - the event
     * @param dataPoints - which are necessary for the event
     * @returns {{event: *}} Object of event and related data points
     */
    function processPodcastEvent(eventName, dataPoints) {
        var mediaData = pageData.media,
            eventData = {
                event: eventName
            };

        dataPoints.forEach(function(prop){
            if (prop in podcastMap) {
                // Add to event data
                eventData[prop] = mediaData[podcastMap[prop]];
            }
        });
        // Return the event details object
        return eventData;
    }

    function getNameCaptureCampaignId() {
        var nameCaptureCampaignId = '';
        try {
            if (embedded_svc && embedded_svc.settings && embedded_svc.settings.extraPrechatFormDetails) {
                var dcid = embedded_svc.settings.extraPrechatFormDetails.filter(function(data){ return data.label == 'Driver Campaign' });
                nameCaptureCampaignId = dcid.length > 0 ? dcid[0].value : '';
            }
        }catch (e) {
            //nothing to do
        }
        return nameCaptureCampaignId;
    }

    function getFormJoinIDUnique() {
        var formJoinIDUnique = '';
        try {
            if (embedded_svc && embedded_svc.settings && embedded_svc.settings.extraPrechatFormDetails) {
                var joinId = embedded_svc.settings.extraPrechatFormDetails.filter(function(data){ return data.label == 'CM_OMTRJoinID' });
                formJoinIDUnique = joinId.length > 0 ? joinId[0].value : '';
            }
        } catch (e) {}
        return formJoinIDUnique;
    }

    digitalData.util.mappings.google = {
        register : function (dlEvent, mapper){
            if(typeof dlEvent === "string"){
                var name = dlEvent.toLowerCase();
                if(!gEventMap[name]){
                    gEventMap[name] = mapper;
                }
            }
            return this;
        },
        getEvent : function(dlEvent){
            if(typeof dlEvent === "string"){
                var name = dlEvent.toLowerCase();
                var mapper = gEventMap[name];
                if(typeof mapper === "function"){
                    return mapper();
                }
            }
            return undefined;
        }
    };

    digitalData.util.mappings.google
      .register("chatdrop", function() {
          //chat drop through waterfall
          return {
              'event': 'custEv_chatDrop',
              'eventCat': 'Chat',
              'eventAct': 'Chat Drop',
              'eventLbl': 'Chat Drop',
              'eventVal': 0,
              'nonInteraction': 1,
              'chatDrops': '1'
          }
      })
      .register("chat_view", function() {
          var customLink = pageData.customlink;
          var triggerType = customLink === 'chat-invite' ? 'PopUp' :  customLink === 'chat-anchor' ? 'Anchor' : 'CTA';
          return {
              'event': 'custEv_chatView',
              'chatLocation': triggerType,
              'nameCaptureCampaignId': getNameCaptureCampaignId(),
              'formJoinIDUnique': getFormJoinIDUnique()
          }
      })
      .register("chat_init", function() {
          var customLink = pageData.customlink;
          var triggerType = customLink === 'chat-invite' ? 'PopUp' :  customLink === 'chat-anchor' ? 'Anchor' : 'CTA';
          return {
              'event': 'custEv_chatInitialization',
              'chatLocation': triggerType,
              'nameCaptureCampaignId': getNameCaptureCampaignId(),
              'formJoinIDUnique': getFormJoinIDUnique()
          }
      })
      .register("chat_invite", function () { return { 'event': 'custEv_chatPopUp' }})
      .register("destroy_chat", function () { return { 'event': 'custEv_chatClose' }})
      .register("chat_ended", function () {
        return {
            'event': 'custEv_chatEnded',
            'chatEndedBy': pageData.customlink
        }
      })
      .register("currentbottomnavigationclicks", function() {
          return {
              'event': 'custEv_bottomNavLinkClick',
              'navLocation': 'bottom',
              'navItem': pageData.navItem
          }
      })
      .register("legacycurrenttopnavigationclicks", function() {
        return {
            'event': 'custEv_topNavLinkClick',
            'navLocation': 'top',
            'navItem': pageData.navItem
        }
    })
      .register("currenttopnavigationclicks", function() {
          return {
            'event': 'custEv_navigationClick',
            'navItem': pageData.navItem,
            'navType': 'global',
            'clickText': pageData.navItemClickText,
            'clickURL': pageData.navItemClickHref,
            'internalDriver': pageData.navItemInternalDriver,
          }
      })
      .register("currentleftnavigationclicks", function() {
          return {
              'event': 'custEv_leftNavLinkClick',
              'navLocation': 'left',
              'navItem': pageData.navItem
          }
      })
      .register('userLogin', function () {
        return {
            event: 'custEv_userLogin',
            authenticationMethod: 'tbid',
            id: {
                tb: digitalData.user[0].profile.tb
            }
        };
      })
      .register("internaldriverclicks", function(){
          var path = pageData.internalclickpath;
          var driver = pageData.internalclickdriver;
          var CTAtext = pageData.internalclicktext;
          return {
              event: 'custEv_internalDriverClick',
              eventCat: 'Internal Driver Click',
              eventAct: pageData.pagename + '|' + driver,
              eventLbl: path,
              eventVal: 0,
              nonInteraction: 0,
              internalDrivers: pageData.pagename + '|' + driver,
              internalDriverId: driver,
              calltoActionText: CTAtext
          }
      })
      .register("formview", function() {
          // fork formview if form is role-based newsletter
          if (pageData.is_roll_based_newsletter === 'true') {
            return {
                'event': 'custEv_formImpression',
                'convertingPage': pageData.convertingpage,
                'convertingPageUrl': pageData.convertingpageurl,
                'formEnvironmentType': pageData.form_environment_type,
                'formExperienceType': pageData.form_experience_type,
                'formJoinIDUser': userProfile.transactionid,
                'newsletterSubscription': true,
                'formJoinIDUnique': pageData.formJoinIDUnique,
                'nameCaptureCampaignId': userProfile.nameCaptureCampaignId
            }
          } else {
            return {
                'event': 'custEv_formImpression',
                'eventCat': 'Form Engagement',
                'eventAct': 'Form Views',
                'eventLbl': Page.getFormType(),
                'eventVal': 0,
                'nonInteraction': 0,
                'formID': pageData.offerid,
                'localizedFormName': Page.getName(),
                'formType': Page.getFormType(),
                'convertingPage': pageData.convertingpage,
                'convertingPageUrl': pageData.convertingpageurl,
                'formViews':1,
                'formEnvironmentType': pageData.form_environment_type,
                'formExperienceType': pageData.form_experience_type,
                'internalDrivers': pageData.persistedInternalDriver,
                'partnerPromoCode': pageData.partnerpromocode,
                'formName': pageData.formname,
                'diagnosticsLeadIndustry': pageData.diagnosticsleadindustry,
                'formJoinIDUnique': pageData.formJoinIDUnique,
                'nameCaptureCampaignId': userProfile.nameCaptureCampaignId
            }
          }
      })
      .register("formcompletesubmitbuttonclick", function() {
          // fork form submit if form is role-based newsletter
          if (pageData.is_roll_based_newsletter === 'true') {
            return {
                'event': 'custEv_formCompletion',
                'convertingPage': pageData.convertingpage,
                'convertingPageUrl': pageData.convertingpageurl,
                'formCountry': userProfile.usercompanycountry,
                'formEnvironmentType': pageData.form_environment_type,
                'formExperienceType': pageData.form_experience_type,
                'formJoinIDUser': userProfile.transactionid,
                'newsletterSubscription': true,
                'newsletterSelection': pageData.newsletter_subscriptions,
                'formJoinIDUnique': pageData.formJoinIDUnique,
                'nameCaptureCampaignId': userProfile.nameCaptureCampaignId,
                'hashedEmailAddress': userProfile.hashedEmailAddress
            }
          } else {
            return {
                'event': 'custEv_formCompletion',
                'eventCat': 'Form Engagement',
                'eventAct': 'Form Completion',
                'eventLbl': Page.getFormType(),
                'eventVal': 0,
                'nonInteraction': 0,
                'formID': pageData.offerid,
                'localizedFormName': Page.getName(),
                'formJoinIDUser': userProfile.transactionid,
                'formJoinIDHit': userProfile.transactionid,
                'formType': Page.getFormType(),
                'convertingPage': pageData.convertingpage,
                'convertingPageUrl': pageData.convertingpageurl,
                'formCompanyName': userProfile.usercompanyname,
                'formCompanySize': userProfile.usercompanysize,
                'formCountry': userProfile.usercompanycountry,
                'formPrimaryProductInterest': userProfile.userprimaryprodinterest,
                'formCompletions':'1',
                'formEnvironmentType': pageData.form_environment_type,
                'formExperienceType': pageData.form_experience_type,
                'internalDrivers': pageData.persistedInternalDriver,
                'formJoinIDUnique': pageData.formJoinIDUnique,
                'nameCaptureCampaignId': userProfile.nameCaptureCampaignId,
                'hashedEmailAddress': userProfile.hashedEmailAddress
            }
          }
      })
      .register("form_errors", function() {
          return {
              'event': 'custEv_formErrors',
              'eventCat': 'Form Engagement',
              'eventAct': 'Form Errors',
              'eventLbl': pageData.formerrorsall,
              'eventVal': 0,
              'nonInteraction': 0,
              'formID': pageData.offerid,
              'localizedFormName': Page.getName(),
              'formType': Page.getFormType(),
              'formErrors':'1'
          }
      })
      .register("two_step_form_submit", function() {
          return {
              'event': 'custEv_twoStepFormPreStepSubmit',
              'eventCat': 'Form Engagement',
              'eventAct': 'Two-step-form submit',
              'eventLbl': pageData.twostepfieldname + ':' + pageData.twostepbuttontext,
              'eventVal': 0,
              'nonInteraction': 0
          }
      })
      // nonlead forms are not tracked by default, however authors can add an event that fires after
      // submission (ex: custEv_feedbackSubmitted) that gets mapped here
      .register("form_nonlead_submission", function() { return { 'event': pageData.formCustomEv }})
      .register("social_signin_success", function() {
          return {
              'event': 'custEv_formFillUsingSocialNetwork',
              'eventCat': 'Form Engagement',
              'eventAct': 'Form Fill Using Social Account',
              'eventLbl': pageData.sharechannel,
              'eventVal': 0,
              'nonInteraction': 0,
                'formID': pageData.offerid,
                'formType': Page.getFormType()
            }
      })
      .register("video_load", function() {
          return {
              'event': 'custEv_videoLoad',
              'eventCat': 'Video Engagement',
              'eventAct': pageData.videoname,
              'eventLbl': 'Load',
              'eventVal': 0,
              'nonInteraction': 1,
              'videoLoads': 1,
              'videoName': pageData.videoname,
              'videoId': pageData.videoid
          }
      })
      .register("number_video_views", function() {
         return {
             'event': 'custEv_videoPlay',
             'eventCat': 'Video Engagement',
             'eventAct': pageData.videoname,
             'eventLbl': 'Play',
             'eventVal': 0,
             'nonInteraction': 0,
             'videoName': pageData.videoname,
             'videoAction': 'Play',
             'videoPercentageWatched': "1%",
             'videoSecondsWatched': pageData.videoduration,
             'videoPlays': 1,
             'videoId': pageData.videoid
         }
      })
      .register("video_25percent_viewed", function() {
         return {
             'event': 'custEv_precentComplete',
             'eventCat': 'Video Engagement',
             'eventAct': pageData.videoname,
             'eventLbl': '25% Completion',
             'eventVal': 0,
             'nonInteraction': 0,
             'videoName': pageData.videoname,
             'videoAction': '25% Completion',
             'videoPercentageWatched': "25%",
             'videoSecondsWatched': pageData.videoduration,
             'videoId': pageData.videoid
         }
      })
      .register("video_50percent_viewed", function() {
         return {
             'event': 'custEv_precentComplete',
             'eventCat': 'Video Engagement',
             'eventAct': pageData.videoname,
             'eventLbl': '50% Completion',
             'eventVal': 0,
             'nonInteraction': 0,
             'videoName': pageData.videoname,
             'videoAction': '50% Completion',
             'videoPercentageWatched': "50%",
             'videoSecondsWatched': pageData.videoduration,
             'videoId': pageData.videoid
         }
      })
      .register("video_75percent_viewed", function() {
         return {
             'event': 'custEv_precentComplete',
             'eventCat': 'Video Engagement',
             'eventAct': pageData.videoname,
             'eventLbl': '75% Completion',
             'eventVal': 0,
             'nonInteraction': 0,
             'videoName': pageData.videoname,
             'videoAction': '75% Completion',
             'videoPercentageWatched': "75%",
             'videoSecondsWatched': pageData.videoduration,
             'videoId': pageData.videoid
         }
      })
      .register("video_100percent_viewed", function() {
         return {
             'event': 'custEv_precentComplete',
             'eventCat': 'Video Engagement',
             'eventAct': pageData.videoname,
             'eventLbl': '100% Completion',
             'eventVal': 0,
             'nonInteraction': 0,
             'videoName': pageData.videoname,
             'videoAction': '100% Completion',
             'videoPercentageWatched': "100%",
             'videoSecondsWatched': pageData.videoduration,
             'videoCompletions':1,
             'videoId': pageData.videoid
         }
      })
      .register("intsearch", function() {
          return {
              event: "custEv_siteSearch",
              eventCat: "Site Search",
              eventAct: pageData.searchterm,
              eventLbl: pageData.numsearchresults,
              eventVal: 0,
              nonInteraction: 0
          }
      })
      .register("feedbackbuttonclick", function() {
          return {
              event: 'custEv_feedbackButtonClick',
              eventCat: 'Feedback',
              eventAct: 'Feedback Button Click',
              eventLbl: 'Bottom',
              eventVal: 0,
              nonInteraction: 0
          }
      })
      .register("atcbuttonclick", function() {
        return {
            event: 'custEv_addToCalendar',
            eventTitle: pageData.atcTitle,
            eventTime: pageData.atcTime,
            eventDate: pageData.atcDate,
            eventLocation: pageData.atcLocation,
            calendarType: pageData.atcCalendarType
        }
    })
      .register("contactdockexpand", function() {
        return {
            event: 'custEv_contactDockExpand',
            eventCat: 'Navigation Link Click',
            eventAct: 'ContactDock:' + pageData.scrollDepth,
            eventLbl: pageData.contactDockStatus,
            eventVal: 0,
            nonInteraction: 0
        }
      })
      .register("contactdockcollapse", function() {
        return {
            event: 'custEv_contactDockcollapse',
            eventCat: 'Navigation Link Click',
            eventAct: 'ContactDock:' + pageData.scrollDepth,
            eventLbl: 'Close',
            eventVal: 0,
            nonInteraction: 0
        }
      })
      .register("autoformcomplete", function() {
          return {
              event: 'custEv_autoFormComplete',
              eventCat: 'Form Engagement',
              eventAct: 'Auto Form Completion',
              eventLbl: Page.getFormType(),
              formJoinIDUser: userProfile.transactionid,
              formJoinIDHit: userProfile.transactionid,
              formID: pageData.offerid,
              convertingPage: pageData.convertingpage,
              convertingPageUrl: pageData.convertingpageurl,
              formCompanyName: userProfile.usercompanyname,
              formCompanySize: userProfile.usercompanysize,
              formCountry: userProfile.usercompanycountry,
              formPrimaryProductInterest: userProfile.userprimaryprodinterest,
              autoFormCompletions: 1,
              nonInteraction: 0,
              internalDrivers: pageData.persistedInternalDriver,
              formJoinIDUnique: pageData.formJoinIDUnique,
              nameCaptureCampaignId: userProfile.nameCaptureCampaignId,
              hashedEmailAddress: userProfile.hashedEmailAddress
          }
      }).register("blogtagimpression", function() {
          return {
              event: 'custEv_blogTagImpression',
              eventCat: 'Blog Tag Impression',
              eventAct: pageData.blogArticleTitle,
              eventLbl: pageData.blogpostmeta,
              eventVal: 0,
              nonInteraction: 1,
              blogAuthor: pageData.authorName,
              blogTag: pageData.blogpostmeta,
              blogTagImpressions: 1
          }
      }).register("stepbystepformprogress", function() {
          return {
              event: 'custEv_stepbystepFormProgress',
              eventCat: 'Form Engagement',
              eventAct: 'Form Step Engagement',
              eventLbl: pageData.currentFormStep + '/' + pageData.totalFormStep,
              nonInteraction: 0,
              formID: pageData.offerid,
              formEnvironmentType: pageData.form_environment_type,
              formExperienceType: pageData.form_experience_type
          }
      }).register("dynamicofferimpression", function() {
          return {
              event: 'custEv_offerImpressions',
              eventCat: 'dynamic content',
              eventAct: 'campaigns',
              eventLbl: 'offers',
              nonInteraction: 1,
              ecommerce: {
                  impressions: constructImpressions(pageData.dynamicoffercollection)
              }
          }
      }).register('podcast_load', function() {
        return processPodcastEvent('custEv_podcastLoad', podcastPoints.concat(['totalLength']));
      }).register('podcast_first_play', function() {
        return processPodcastEvent('custEv_podcastFirstPlay', podcastPoints.concat(['startTime', 'totalLength']));
      }).register('podcast_play', function() {
        return processPodcastEvent('custEv_podcastPlay', podcastPoints.concat(['startTime', 'totalLength']));
      }).register('podcast_stop', function() {
        return processPodcastEvent('custEv_podcastStop', podcastPoints.concat(['startTime', 'stopTime', 'totalLength']));
      }).register('podcast_percent', function() {
        return processPodcastEvent('custEv_podcastPercentComplete', podcastPoints.concat(['startTime', 'currentTime', 'percentComplete', 'totalLength']));
      }).register('takeaway_click', function() {
        return processPodcastEvent('custEv_podcastTakeawayClick', podcastPoints.concat(['takeawayName', 'takeawayID', 'takeawayStartTime', 'takeawayEndTime']));
      }).register("eventregidsuccess", function() {
        return {
            event: 'custEv_eventRegID',
            tzRegID: pageData.tzregid
        }
      }).register('promo_impression', function() {
        return processPromoViews();
      }).register('promo_click', function() {
        return processPromoClick();
    }).register('popoffer', function() {
        return {
            event: 'custEv_offerPrompt',
            eventID: pageData.offerID,
            offerText: pageData.popOfferText
        }
      }).register('popofferaccepted', function() {
        return {
            event: 'custEv_offerAccepted',
            eventID: pageData.offerID,
            offerText: pageData.popOfferText,
            clickText: pageData.popAcceptBtn
        }
      }).register('popoffercancel', function() {
        return {
            event: 'custEv_offerRejected',
            eventID: pageData.offerID,
            offerText: pageData.popOfferText,
            clickText: pageData.popCancelBtn
        }
      });
}());

"use strict";

(function(){

    /**
     * digitalData.util.gaPageviewComplete will be resolved by a Custom HTML tag in GTM
     * This Custom HTML tag will be run by Tag Sequencing: 'Fire a tag after Google Analytics Pageview fires'
     */
    digitalData.util.gaPageviewComplete = $.Deferred();
    var eventsList= (function () {
        return Object.keys(digitalData.util.event).reduce(function (previous, key) {
            return previous + digitalData.util.event[key] + " " ;
        }, "" );
    }());


    $(document).on(eventsList, function(evt){
        var e = evt.originalEvent;

        if(e && e.detail && e.detail.eventInfo) {
            if (e.detail.eventInfo) {
                var eventName = e.detail.eventInfo.eventID;
                var gEvent = digitalData.util.mappings.google.getEvent(eventName);
                if(typeof gEvent !== "undefined"){
                    $.when(digitalData.util.gaPageviewComplete).done(function() {
                        dataLayer.push(gEvent);
                        let observer = digitalData.page.observer;
                        if(gEvent.event === 'custEv_formImpression' && observer){
                            document.querySelectorAll('.form-builder-form').forEach(function(form){
                                observer.unobserve(form);
                            });
                        }
                    });
                }
            }
        }
    });
}());

// W-4333723
// MutationObserver (MO) is currently not supported on IE<11 (https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
// We use MO to determine when the target content has been loaded (see line 313 in 
// sfdc-aem-master/sfdc-aem-master-clientlibs/src/main/content/jcr_root/etc/clientlibs/sfdc-aem-master/clientlibs_analytics_bottom/js/digitalData.js)
// This polyfill is to mitigate JS errors caused by the non-availablity of MO in older browsers.

// Approved by trust (https://gus.lightning.force.com/one/one.app#/sObject/a07B00000041sbqIAA/view)

// mutationobserver-shim v0.3.2 (github.com/megawac/MutationObserver.js)
// Authors: Graeme Yeates (github.com/megawac) 
window.MutationObserver=window.MutationObserver||function(w){function v(a){this.i=[];this.m=a}function I(a){(function c(){var d=a.takeRecords();d.length&&a.m(d,a);a.h=setTimeout(c,v._period)})()}function p(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==w&&a[c]!==w&&(b[c]=a[c]);return b}function J(a,b){var c=C(a,b);return function(d){var f=d.length,n;b.a&&3===a.nodeType&&
    a.nodeValue!==c.a&&d.push(new p({type:"characterData",target:a,oldValue:c.a}));b.b&&c.b&&A(d,a,c.b,b.f);if(b.c||b.g)n=K(d,a,c,b);if(n||d.length!==f)c=C(a,b)}}function L(a,b){return b.value}function M(a,b){return"style"!==b.name?b.value:a.style.cssText}function A(a,b,c,d){for(var f={},n=b.attributes,k,g,x=n.length;x--;)k=n[x],g=k.name,d&&d[g]===w||(D(b,k)!==c[g]&&a.push(p({type:"attributes",target:b,attributeName:g,oldValue:c[g],attributeNamespace:k.namespaceURI})),f[g]=!0);for(g in c)f[g]||a.push(p({target:b,
    type:"attributes",attributeName:g,oldValue:c[g]}))}function K(a,b,c,d){function f(b,c,f,k,y){var g=b.length-1;y=-~((g-y)/2);for(var h,l,e;e=b.pop();)h=f[e.j],l=k[e.l],d.c&&y&&Math.abs(e.j-e.l)>=g&&(a.push(p({type:"childList",target:c,addedNodes:[h],removedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),y--),d.b&&l.b&&A(a,h,l.b,d.f),d.a&&3===h.nodeType&&h.nodeValue!==l.a&&a.push(p({type:"characterData",target:h,oldValue:l.a})),d.g&&n(h,l)}function n(b,c){for(var g=b.childNodes,
    q=c.c,x=g.length,v=q?q.length:0,h,l,e,m,t,z=0,u=0,r=0;u<x||r<v;)m=g[u],t=(e=q[r])&&e.node,m===t?(d.b&&e.b&&A(a,m,e.b,d.f),d.a&&e.a!==w&&m.nodeValue!==e.a&&a.push(p({type:"characterData",target:m,oldValue:e.a})),l&&f(l,b,g,q,z),d.g&&(m.childNodes.length||e.c&&e.c.length)&&n(m,e),u++,r++):(k=!0,h||(h={},l=[]),m&&(h[e=E(m)]||(h[e]=!0,-1===(e=F(q,m,r,"node"))?d.c&&(a.push(p({type:"childList",target:b,addedNodes:[m],nextSibling:m.nextSibling,previousSibling:m.previousSibling})),z++):l.push({j:u,l:e})),
    u++),t&&t!==g[u]&&(h[e=E(t)]||(h[e]=!0,-1===(e=F(g,t,u))?d.c&&(a.push(p({type:"childList",target:c.node,removedNodes:[t],nextSibling:q[r+1],previousSibling:q[r-1]})),z--):l.push({j:e,l:r})),r++));l&&f(l,b,g,q,z)}var k;n(b,c);return k}function C(a,b){var c=!0;return function f(a){var k={node:a};!b.a||3!==a.nodeType&&8!==a.nodeType?(b.b&&c&&1===a.nodeType&&(k.b=G(a.attributes,function(c,f){if(!b.f||b.f[f.name])c[f.name]=D(a,f);return c})),c&&(b.c||b.a||b.b&&b.g)&&(k.c=N(a.childNodes,f)),c=b.g):k.a=
    a.nodeValue;return k}(a)}function E(a){try{return a.id||(a.mo_id=a.mo_id||H++)}catch(b){try{return a.nodeValue}catch(c){return H++}}}function N(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}function G(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function F(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}v._period=30;v.prototype={observe:function(a,b){for(var c={b:!!(b.attributes||b.attributeFilter||b.attributeOldValue),c:!!b.childList,g:!!b.subtree,
    a:!(!b.characterData&&!b.characterDataOldValue)},d=this.i,f=0;f<d.length;f++)d[f].s===a&&d.splice(f,1);b.attributeFilter&&(c.f=G(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({s:a,o:J(a,c)});this.h||I(this)},takeRecords:function(){for(var a=[],b=this.i,c=0;c<b.length;c++)b[c].o(a);return a},disconnect:function(){this.i=[];clearTimeout(this.h);this.h=null}};var B=document.createElement("i");B.style.top=0;var D=(B="null"!=B.attributes.style.value)?L:M,H=1;return v}(void 0);
(function(){
    'use strict';

    /**
     * Constructs tracking var for OpinionLab
     */
    function setOpinionLabVar() {
        try {
           window.custom_var = Page.getLocale() + '|' + vp.getType() + '|' + Page.getSegment() + '|' + vp.getTypeDetailed() + '|' + vp.getVisitNumber() + '|' + Page.getName();
        } catch(ex) {

        }
    }

    /**
     * trackPromoClick performs common tasks of storing in digitalData, sessionStorage
     * and sending click data to GA's dataLayer
     * @param clickData: {
     *       campId: string,
     *       expId: string,
     *       itemPos: number,
     *       itemId: string,
     *       itemType: string
     *   }
     */
    function trackPromoClick(clickData) {
        var camp = clickData.campId || '',
            exp = clickData.expId || '',
            pos = clickData.itemPos || '',
            item = clickData.itemId || '',
            type = clickData.itemType || '';
        digitalData.page.personalization = digitalData.page.personalization || {};
        digitalData.page.personalization.clickItemId = item;
        digitalData.page.personalization.clickCampId = camp;
        digitalData.page.personalization.clickExpId = exp;
        digitalData.page.personalization.clickItemType = type;
        digitalData.page.personalization.clickItemPos = pos;

        // persist promo clicked until end of session
        sessionStorage.setItem('promoClickData', JSON.stringify(digitalData.page.personalization));
        // persist evergage user data until end of session
        sessionStorage.setItem('evgData', JSON.stringify(digitalData.user[0].profile[0].personalization.evergage));

        digitalData.util.trackBehavior('promo-click', ['promo_click'],
            ['page.personalization.clickItemId',
                'page.personalization.clickCampId',
                'page.personalization.clickExpId',
                'page.personalization.clickItemType',
                'page.personalization.clickItemPos',
                'user[0].profile[0].personalization.evergage.userGroup',
                'user[0].profile[0].personalization.evergage.userId']);
    }

    /**
     * Manual handle of clickthrough on SFDC card thumbnails
     * @param el element to track click on
     * @param clickData: {
     *       campId: string,
     *       expId: string,
     *       itemPos: number,
     *       itemId: string,
     *       itemType: string
     *   }
     */
    function manualTrackClick (el, clickData) {
        if (!el) return;
        // Item Id (URL in our implementation)
        var url = clickData.itemId || '';

        el.addEventListener('click', function (e) {
            trackPromoClick(clickData);
            window.location = url;
        });
    }

    /**
     * Prepare to handle click statistics on personalized areas using data attributes
     * <div id="evg-product-recs" data-evg-campaign-id="{{campaign}}" data-evg-experience-id="{{experience}}" data-evg-user-group="{{userGroup}}">
     *      {{#each items}}
     *          <div class="evg-item" data-evg-item-id="{{id}}" data-evg-item-type="{{../itemType}}">
     *      {{/each}}
     * </div>
     * @param campId campaign ID
     * @param expId experience ID
     * @param zoneName Evergage Content Zone Name
     */
    function prepClickStat (campId, expId, zoneName) {
        if (!campId || !expId || !zoneName) return;
        // Since evergage binds listeners only for anchor and button tags
        // we need to track clickthrough on SFDC card thumbnails
        var cardSel = '[data-evg-campaign-id="' + campId + '"][data-evg-experience-id="' + expId + '"] .thumbnail-content.thumbnail-linked';
        if (document.querySelectorAll(cardSel).length === 0) return;

        var itemSel = '[data-evg-campaign-id="' + campId + '"][data-evg-experience-id="' + expId + '"] [data-evg-item-id]',
            // Resource center category page template has id 'evg-rc-cat-template' and some clickable anchor/button tags
            // so this selector is for other HTML tags which are expected to be clickable within 'evg-rc-cat-template'
            rcCatSel = '.headingComponent, .bodyCopyComponent',
            pos = 0;

        document.querySelectorAll(itemSel).forEach(function (el) {
            pos = pos + 1;
            var clickData = {
                    campId : campId,
                    expId : expId,
                    itemPos : pos,
                    itemId : el.getAttribute('data-evg-item-id') || '',
                    itemType : el.getAttribute('data-evg-item-type') || ''
                };
            if (zoneName === 'rc_right_rail') {
                manualTrackClick(el, clickData);
            } else if (zoneName === 'rc_category_header') {
                el.querySelectorAll(rcCatSel).forEach(function (elm) {
                    manualTrackClick(elm, clickData);
                });
            }
        });
    }

    /**
     * Handle tracking for an Promotion Impression
     * CampaignStat: {
     *       experienceId: string,
     *       stat: 'Impression' | 'Click' | 'Dismissal',
     *       control: boolean,
     *       catalog: { [itemTypeKey: string]: string[] }
     *   }
     * CampaignResponse:
     *  {
     *       campaignId: string;
     *       campaignJavascriptContent: string;
     *       campaignName: string;
     *       campaignType: string;
     *       experienceId: string;
     *       experienceName: string;
     *       experienceSourceCode: string;
     *       payload: {};
     *       state: string;
     *       templateNames: string[];
     *       type: string;
     *       userGroup: string;
     *   }
     * @param stats Campaign Statistics
     * @param resp Campaign Response
     */
    function handleViewStat (stats, resp) {
        if (!stats || !resp || !stats.catalog) return;

        // map the event to a new obj
        var menu = stats.catalog,
            // we can execute query (recipe) on one table (itemType) in evergage,
            // so look for first key to find table (itemType) name
            itemType = Object.keys(menu)[0],
            recs = itemType ? menu[itemType] : [],
            recLen = recs ? recs.length : 0;

        if (recLen === 0) return;

        var campId = resp.campaignId || '',
            expId = stats.experienceId || '',
            payload = resp.payload || {},
            // Evergage Content Zone Name
            zoneName = payload ? (payload.contentZone || '') : '';

        // prepare to handle click statistics on personalized areas,
        // for all individual items within the area (content zone)
        prepClickStat(campId, expId, zoneName);

        digitalData.component = digitalData.component || [];
        for (var i = 0; i < recLen; i++) {
            var eventObj = {
                componentInfo: {
                    componentID: recs[i] || '',
                    campaign: campId,
                    experience: expId,
                    itemType: itemType,
                    position: i + 1
                },
                category: {
                    primaryCategory: 'promoimp'
                }
            };
            digitalData.component.push(eventObj);
        }

        var userProfile = digitalData.user[0].profile[0];
        // set defaults if this is the first impression/view being intercepted
        digitalData.user[0].profile[0].personalization = userProfile.personalization || {};
        digitalData.user[0].profile[0].personalization.evergage = userProfile.personalization.evergage || {};
        digitalData.user[0].profile[0].personalization.evergage.userGroup = resp.userGroup || '';
        digitalData.user[0].profile[0].personalization.evergage.userId = Evergage && Evergage.getCurrentPage() && Evergage.getCurrentPage().user
            ? Evergage.getCurrentPage().user.anonId : '';
        digitalData.util.trackBehavior('promo-impression', ['promo_impression'],
            ['component','user[0].profile[0].personalization.evergage.userGroup','user[0].profile[0].personalization.evergage.userId']);
    }

    /**
     * Handle tracking for an Promotion Clicks
     * CampaignStat: {
     *       experienceId: string,
     *       stat: 'Impression' | 'Click' | 'Dismissal',
     *       control: boolean,
     *       catalog: { [itemTypeKey: string]: string[] }
     *   }
     * CampaignResponse:
     *  {
     *       campaignId: string;
     *       campaignJavascriptContent: string;
     *       campaignName: string;
     *       campaignType: string;
     *       experienceId: string;
     *       experienceName: string;
     *       experienceSourceCode: string;
     *       payload: {};
     *       state: string;
     *       templateNames: string[];
     *       type: string;
     *       userGroup: string;
     *   }
     * @param stats Campaign Statistics
     * @param resp Campaign Response
     */
    function handleClickStat (stats, resp) {
        if (!stats || !resp || !stats.catalog) return;

        // map the event to a new obj
        var menu = stats.catalog,
            // we can execute query (recipe) on one table (itemType) in evergage,
            // so look for first key to find table (itemType) name
            itemType = Object.keys(menu)[0],
            recs = itemType ? menu[itemType] : [],
            recLen = recs ? recs.length : 0;

        if (recLen === 0) return;

        var pos = '',
            campId = resp.campaignId || '',
            expId = stats.experienceId || '',
            itemTypeName = itemType.toLowerCase() + 's',
            payload = resp.payload,
            respRecs = payload ? payload[itemTypeName] : [],
            recsLen = respRecs ? respRecs.length : 0;

        for (var i = 0; i < recsLen; i++) {
            // click is on one item, therefore compare recs[0]
            if (recs[0] === respRecs[i].id) {
                pos = i + 1;
                break;
            }
        }

        var clickData = {
            campId : campId,
            expId : expId,
            itemPos : pos,
            itemId : recs[0],
            itemType : itemType
        };
        // click is on one item, therefore recs[0]
        trackPromoClick(clickData);
        if (clickData.itemId) {
            window.location = clickData.itemId;
        }
    }

    /**
     * Handle tracking Evergage Campaign Statistics Event
     * @param {*} event data sent from EVG
     */
    function handleEvergageStatEvent (event) {
        // safety check -- ensure the data we're looking for is in the event
        if (!event || !event.detail || !event.detail.campaignStat || !event.detail.campaignResponse) {
            return;
        }
        var stats = event.detail.campaignStat,
            resp = event.detail.campaignResponse;
        switch (stats.stat) {
            case "Impression" : handleViewStat(stats, resp);
                                break;

            case "Clickthrough" : handleClickStat(stats, resp);
                            break;

            default : break;
        }
    }

    /**
     * initialize tracking related to Evergage/Interaction Studio personalization
     */
    function initEvergageTracking() {
        // safety check
        if (!digitalData || !digitalData.util) {
            return;
        }
        // add an event listener for when an evergage campaign statistic is sent
        document.addEventListener('evergage:onStatSend', handleEvergageStatEvent);
    }

    /**
     * On page load, if personalization details are present in session storage (from c360), apply to digitalData
     */
    function storePersonalizationDetails() {
      if (!digitalData || !digitalData.user[0] || !digitalData.util) {
        return;
      }
      const sessionDetails = digitalData.util.readCookie('pbc');
      let peronalizationDetails = null;
      if (sessionDetails) {
        try {
          peronalizationDetails = JSON.parse(atob(sessionDetails));
        } catch (e) {
          // invalid json
        }
      }
      if (peronalizationDetails) {
        var userProfile = digitalData.user[0];
        digitalData.user[0].personalization = userProfile.personalization || {};
        digitalData.user[0].personalization.InteractionStudio = userProfile.personalization.InteractionStudio || {};
        digitalData.user[0].personalization.InteractionStudio.userID = peronalizationDetails.userID || '';
        digitalData.user[0].personalization.InteractionStudio.userGroup = peronalizationDetails.userGroup || '';
        digitalData.user[0].personalization.InteractionStudio.campaignID = peronalizationDetails.campaign || '';
        digitalData.user[0].personalization.InteractionStudio.experienceID = peronalizationDetails.experience || '';
      }
    }

    /**
     * Used for adding 3rd party tracking integrations to our pages.
     */
    digitalData.util.components.addIntegrations = function(){
        setOpinionLabVar();
        initEvergageTracking();
        storePersonalizationDetails();
    };

}());

//TODO: Refactor this to remove jQuery usage when moving to webpack
(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined' ||
        typeof Util === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page;

    function trackBrand() {
        var brand = Util.getParam('brand');
        pageData.sembrand = brand === 'yes' || brand === 'no' ? brand : '';
    }

    function setNewSessionEvents() {
        vp.isNewVisitor() ? utils.addBehavior('firsttimevisit') : utils.addBehavior('returnvisit');
    }

    /**
     * Method to track specific modules on the page
     * Add module tracking page property to digitalData
     */
    function moduleTracking() {
        //TO-DO conform this to W3C
        pageData.moduletracking = pageData.sharechannel = pageData.captchatype = "";

        // MODULE TRACKING
        if (utils.readCookie('v32')) {
            //s.eVar32
            pageData.moduletracking = utils.readCookie('v32');
            utils.deleteCookie('v32');

            try {
                if (pageData.moduletracking) {
                    // Nav tracking
                    var _navClicked = '';
                    if (pageData.moduletracking.indexOf('|left-nav') > -1) {
                        _navClicked = 'Left';
                    } else if (pageData.moduletracking.indexOf('|topnav-products-menu') > -1) {
                        _navClicked = 'products-menu-Top';
                    } else if (pageData.moduletracking.indexOf('|topnav') > -1) {
                        _navClicked = 'Top';
                    } else if (pageData.moduletracking.indexOf('|footer') > -1) {
                        _navClicked = 'Bottom';
                    }
                    if (_navClicked) {
                        //s.events = s.apl(s.events,'event2',',',2);
                        var _curPageNameSuffix = Page.getNameNoLocale();
                        _curPageNameSuffix = _curPageNameSuffix.replace(Page.getServer() + ':', '');
                        pageData.toporleftnav = _navClicked + '|' + _curPageNameSuffix;
                    }
                }
            } catch (err) {
            }
        }
    }

    // Data collection across all properties (global SDR definitions)
    utils.trackPageGlobal = function() {
        utils.trackDemandBase();
        moduleTracking();
        pageData.type = Page.getType();
        pageData.cloud = Page.getCloud();

        if (Page.isBlog()) {
            pageData.blogpostmeta = Page.getBlogPostMeta();
            pageData.authorName = Page.getBlogAuthor();
            pageData.blogArticleTitle = Page.getBlogArticleTitle();
            if (pageData.blogpostmeta !== '' && pageData.authorName !== '') {
                utils.addBehavior('blogtagimpression');
            }
        }

        // Event Use Case 2 - Internal Driver Click
        utils.addDrivers(utils.getCTAs());

        // PRODUCT VIEWS
        if (Page.isProductCategory()) {
            //scRemove
            utils.addBehavior('scremove');
        }

        // Special case for old-ocms migrated conf page
        // For page that is not under /conf/, it will still overwrite the Page.name to conf page by a run-time JS execute in header
        // This is to respect the original calculate page name based on the path.
        if (Page.isMigratedPage() && Page.isConfirmation()) {
            Page.name = Page.calculateName();
            pageData.pagename = Page.name;
        }

    };

    utils.components.trackPage = function() {
        var curDate, url,
            alphaLenRegex=/^[a-zA-Z]{1,25}$/,  // length check is an arbitrary guardrail against excessive data
            botCategory = Util.getParam('bc'),
            promoClickData = JSON.parse(sessionStorage.getItem('promoClickData')),
            evgData = JSON.parse(sessionStorage.getItem('evgData'));

        digitalData.event = [];
        utils.addPageData('pagename', Page.getName());
        utils.addPageData('prevpage', Page.getPrevious());
        pageData.pagename = pageData.pagename ? pageData.pagename : Page.getName();
        pageData.charSet = "UTF-8";
        pageData.sitesection = Page.getChannel();
        pageData.server = 'SFDC';
        pageData.locale = Page.getLocale();
        pageData.prevpage = Page.getPrevious();
        pageData.prevpageurl = Page.getPreviousUrl();
        pageData.prevpagesanitized = pageData.prevpage || '[NO PREVIOUS PAGE AVAILABLE]';
        pageData.namenolocale = Page.getNameNoLocale();
        pageData.uiframework = 'AEM framework';

        curDate = new Date();
        curDate.setDate(curDate.getDate() - 1);
        pageData.expdate = curDate;

        pageData.referrer = Page.getReferrer();
        pageData.subdomainReferrer = Page.getSFDCNetworkReferrer() && Page.getSFDCNetworkReferrer().id;

        url = window.location.href;
        pageData.url = Page.hasExcludedParam(url) ? url.split('?')[0] : url;
        pageData.numberpageviews = '+1';
        pageData.segment = Page.getSegment();

        pageData.botcategory = alphaLenRegex.test(botCategory) ? botCategory : "";

        if (promoClickData) {
            pageData.personalization = pageData.personalization || {};
            pageData.personalization.clickItemId = promoClickData.clickItemId || '';
            pageData.personalization.clickCampId = promoClickData.clickCampId || '';
            pageData.personalization.clickExpId = promoClickData.clickExpId || '';
            pageData.personalization.clickItemType = promoClickData.clickItemType || '';
            pageData.personalization.clickItemPos = promoClickData.clickItemPos || '';
        }

        if (evgData) {
            digitalData.user[0].profile[0].personalization = digitalData.user[0].profile[0].personalization || {};
            digitalData.user[0].profile[0].personalization.evergage = digitalData.user[0].profile[0].personalization.evergage || {};
            digitalData.user[0].profile[0].personalization.evergage.userGroup = evgData.userGroup || '';
            digitalData.user[0].profile[0].personalization.evergage.userId = evgData.userId || '';
        }

        if (window.pagemeta) {
            pageData.image = window.pagemeta.image || '';
            pageData.tags = Util.convertTagsObjIntoOldSpec(window.pagemeta.tags);
        }

        if (Page.is404()) {
            pageData.spagetype = 'errorPage';
        }
        pageData.reportsuite = Server.getAccount();
        pageData.pageloadtime = (function() {
            if (!window._pageLoadTime) {
                var curTime = new Date().getTime(),
                timingObject = window.performance ? performance.timing : 0,
                reqStartTime = timingObject ? timingObject.requestStart : 0,
                _pageLoadTime = reqStartTime ? Math.round((curTime - reqStartTime) / 100) : '';
            }
            return _pageLoadTime;
        })();

        pageData.lastvaliddriver = digitalData.localStorage['lastvaliddriver'] ? digitalData.localStorage['lastvaliddriver'] : '';
        pageData.lastvaliddrivercookie = utils.readCookie('lastvaliddriver');

        if (vp.isNewSession()) {
            setNewSessionEvents();
        }
        if (Page.isSEM()) {
            trackBrand();
        }

        utils.trackPageGlobal();
        utils.addBehavior('pageview');
    };
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined' ||
      typeof vp === 'undefined' ||
      typeof Url === 'undefined') { return; }

    var utils = digitalData.util,
      storage = digitalData.localStorage,
      userProfile = digitalData.user[0].profile[0];

    function setOrgInfo(legacyProfile) {
        try{
            if (vp.OrgInfo.getStatus() || vp.OrgInfo.getType()) {
                legacyProfile["orgEdition"] = vp.OrgInfo.getEdition();
            }
            legacyProfile["orgId"] = vp.OrgInfo.getID();
        } catch(ex) {
            //
        }        
    }

    function setLoginType(legacyProfile) {
        if (vp.hasCurrentTrial()) {
            legacyProfile["logintype"] = 'freetrial';
            utils.addBehavior('freetriallogin');
        } else {
            legacyProfile["logintype"] = userProfile.usertype === 'developer' ? 'developer' : 'customer';
        }
    }

    utils.components.trackLegacyProfile = function() {
        var legacyProfile = utils.getUserProfileByName("legacy") || {};
        legacyProfile["usertype"] = vp.getType();
        legacyProfile["timepartinghour"] = utils.getTimeParting(-8).split("|")[0];
        legacyProfile["timepartingday"] = utils.getTimeParting(-8).split("|")[1];
        legacyProfile["dayssincelastvisit"] = vp.getDaysSinceLastVisit();
        legacyProfile["visitnumber"] = vp.getVisitNumber();
        legacyProfile["detailedusertype"] = vp.getTypeDetailed();
        legacyProfile["formfillstatus"] = vp.getUserEmail() ? 'known' : 'anonymous';
        legacyProfile["neustar"] = 'neustar=' + (vp.getNeustarInfoForOmniture() ? vp.getNeustarInfoForOmniture() : '[NO DATA]');
        legacyProfile["dreamforcerole"] = vp.getActivity('DFrole') || '';
        legacyProfile["kxsfdc"] = 'kxsfdc=' + (storage.kxsfdc && storage.kxsfdc.segs ? storage.kxsfdc.segs.replace(/,/g, "|") : 'NONE') ;
        setOrgInfo(legacyProfile);
        utils.trackDemandBase();
        if (Page.isLogin()) {
            setLoginType(legacyProfile);
        }
        utils.setUserProfileByName("legacy", legacyProfile);        
    }

}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined' ||
        typeof _ === 'undefined' ||
        typeof Util === 'undefined' ||
        typeof Url === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page;

    /**
     * Supports the migration of combined cookies set by the Adobe library (multiple k/v pairs in one cookie)
     * into individual cookies, in order to decouple from Adobe's cookie reading/writing utils
     * @returns {String}
     */
    function migrateLegacyCookie(name, migrate) {
        var legacyCookieName = "s_pers";
        var longExpire = 60 * 60 * 24 * 365 * 10; // 10 years
        var persistCookie = utils.readCookie(legacyCookieName);
        if (persistCookie && persistCookie.length > 0) {
            // Convert encoded cookie string into key,value object
            var subCookieMap = _(persistCookie.replace(/\s/g, '').split(';'))
            .chain()
            .map(
                function(cookie){
                  var elems = cookie.split('=');
                  return [elems[0],  elems[1]];
                }
            ).filter(
                function(xs){
                  return xs && xs.length === 2 && xs[0] && xs[1];
                }
            ).object().value();

            // Retrieve the value for 'name'
            var value = subCookieMap[name];

            // Store the remaining values back in the cookie
            // or delete if there's nothing left
            subCookieMap = _.omit(subCookieMap, [name]);

            if (_.keys(subCookieMap).length > 0) {
                var updatedCookieValue = _(subCookieMap).chain().pairs().map(
                    function(xs){
                        return xs.join('=');
                    }
                ).value().join('; ');
                utils.writeCookie(legacyCookieName, updatedCookieValue, longExpire);
            } else {
                Util.deleteCookie(legacyCookieName);
            }

            // Finally handle or return the extracted value
            if(value){
                if(value.indexOf('|') > 0){
                    value = value.split('|')[0];
                }
                value = Url.decodeComponent(value);
                if(migrate){
                    return migrate(value);
                }
                return value;
            }
        }
        return undefined;
    }

    function setCrossVisitDriverType() {
        var longExpire = 60 * 60 * 24 * 365 * 10; // 10 years
        var crossVisitDriverTypes = [];
        var cvtdtCookieName = 'cvtdt';
        var cvtdtCookie = utils.readCookie(cvtdtCookieName);

        function shouldTrackDriver(drivers, driver){
          var singularlyTrackedDrivers = ['Typed/Bookmarked', 'Force.com'];
          return !(_.contains(singularlyTrackedDrivers, driver) && _.contains(drivers, driver));
        }

        if(_.isString(cvtdtCookie) && cvtdtCookie.length > 0){
          crossVisitDriverTypes = cvtdtCookie.split('~');
        } else {
          crossVisitDriverTypes = migrateLegacyCookie('v44',
              function(legacyValue){
                if(legacyValue && legacyValue.length > 0){
                  return legacyValue.split('~');
                }
                return [];
              }) || [];
        }

        if(pageData.drivertype && shouldTrackDriver(crossVisitDriverTypes, pageData.drivertype)){
            crossVisitDriverTypes.push(pageData.drivertype);
        }
        while(crossVisitDriverTypes.length > 5) {
            crossVisitDriverTypes.shift();
        }
        utils.addPageData('crossvisittrafficdrivertype', crossVisitDriverTypes);
        if(pageData.crossvisittrafficdrivertype && pageData.crossvisittrafficdrivertype.length){
            utils.writeCookie(cvtdtCookieName, pageData.crossvisittrafficdrivertype.join('~'), longExpire);
        }
    }    

    function setInternalDriver(currDriver) {
        var internaldrivers;
        if (!currDriver) {
            return;
        }

        var referrerPageName = utils.getReferrerPageName();
        utils.addPageData('persistedInternalDriver', referrerPageName + "|" + currDriver.id);

        internaldrivers = utils.getValueOnce(currDriver.internal || currDriver.id, 'v22');
        if (internaldrivers) {
            internaldrivers = referrerPageName + '|' + internaldrivers;
            utils.addPageData('internaldrivers', internaldrivers);
            utils.addBehavior('intdriverclick');
        } 
    }

    function setNewDriverTypeAndPathing(currDriver) {
        var pathing;
        if (!currDriver) {
            return;
        }        
        pathing = utils.getAndPersistValue(currDriver.type,'c22');
        utils.addPageData('drivertype', pathing);
        utils.addPageData('drivertypepathing', pathing);
    }    

    function setExternalDriver(currDriver) {
        if (!currDriver) {
            return;
        }        
        if (currDriver.type !== 'internal') {
            if((currDriver.type === 'Typed/Bookmarked' || currDriver.type === 'Force.com') && utils.readCookie('v0')){
                currDriver.id = '';
            }
            currDriver.id = utils.getValueOnce(currDriver.id, 'v0', 0);

            if(currDriver.id) {
                utils.addPageData('scampaign', currDriver.id);

                // For GA to mimic the traffic driver persistence tracking behavior that AA has.
                if (currDriver.id !== pageData.lastvaliddriver) {
                    pageData.lastvaliddriver = currDriver.id;
                    digitalData.localStorage['lastvaliddriver'] = currDriver.id;
                }
                if (currDriver.id !== pageData.lastvaliddrivercookie) {
                    pageData.lastvaliddrivercookie = currDriver.id;
                }
                // Always update the cookie and reset the expiration time.
                utils.writeCookie('lastvaliddriver', currDriver.id, 7 * 86400);

                if(currDriver.type === 'SEO') {
                    utils.addBehavior('seosearches');
                } else if (currDriver.type === 'SEM') {
                    utils.addBehavior('semsearches');
                }
                setNewDriverTypeAndPathing(currDriver);
                setCrossVisitDriverType();
            }
        }        
    }

    function formatDriverTypePathing() {
        pageData.drivertypepathing = utils.getAndPersistValue('', 'c22');
        pageData.drivertypepathing = pageData.drivertypepathing ? pageData.drivertypepathing + ":" + pageData.pagename : '';        
    }

    function formatDriverType() {
        if (utils.readCookie('c40') || pageData.drivertype) {
            if (!pageData.drivertype || (pageData.drivertype === utils.readCookie('c40'))) {
                pageData.drivertype = 'did not bounce';
            }
            else if (pageData.drivertype !== utils.readCookie('c40')) {
                pageData.drivertype = utils.getAndPersistValue(pageData.drivertype,'c40');
            }
        }
    }

    function getPaidParameterValue() {
        return Util.getParam('elq_mid') || Util.getParam('RRID') || Util.getParam('eid') ||
        Util.getParam('ban') || Util.getParam('dcmp') || Util.getParam('soc') ||
        Util.getParam('mkt_tok');
    }    

    function setPaidParameter() {
        pageData.emailid = utils.getValueOnce(getPaidParameterValue(), 'v42');
    }

    function setDisplayAd() {
        pageData.displayadid = Page.getDisplayAdId();
        if (pageData.displayadid) {
            utils.addBehavior('displayadid');
        }        
    }

    utils.components.trackDriver = function() {
        var currDriver = Page.getDriver();
        setPaidParameter();
        setDisplayAd();
        // CAMPAIGNS
        if (currDriver) {
            if (currDriver.type === 'internal') {
                setInternalDriver(currDriver);
            } else {
                setExternalDriver(currDriver);
            }
        }
        formatDriverTypePathing();
        formatDriverType();
    }

}());

(function () {
    "use strict";

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined' ||
      typeof vp === 'undefined' ||
      typeof Util === 'undefined') {
        return;
    }

    var utils = digitalData.util,
      pageData = digitalData.page,
      userProfile = digitalData.user[0].profile[0],

      /** PRIVATE METHODS **/
      formV2Selector = 'form[data-sfdc-form]',
      formEnvironmentAttribute = 'data-form-environment-type',
      // Intentionally hard-code this to check if a special purpose form is setup that points to this heroku trail signup endpoint
      herokuSignupEndPoint = 'https://hosted-scratch.herokuapp.com/trial',
      // Form environments mapping
      formEnvironments = {
          modal: 'Modal',
          dropPanel: 'Drop panel',
          swapContainer: 'Swap container',
          onPage: 'On page'
      },
      propKey = 'sfdcForm',

      /**
       * Help function to determine if a v2 form element is a lead form.
       * @param form {HTMLFormElement}
       * @returns {boolean}
       */
      isLeadForm = function (form) {
          return form[propKey].formType === "lead";
      },

      /**
       * Help function to determine if a v2 form element is a signup form.
       * @param form {HTMLFormElement}
       * @returns {boolean}
       */
      isSignupForm = function (form) {
          return !!(form[propKey].signup);
      },

      /**
       * Help function to determine if a v2 form is a special purpose heroku signup form.
       * @param form {HTMLFormElement}
       * @returns {boolean}
       */
      isHerokuSignupForm = function (form) {
          return !!(form && form.action.indexOf(herokuSignupEndPoint) > -1);
      },

      /**
       * Help function to determine if a v2 form is loaded dynamically on the page from (modal/drop panel/content swap)
       * @param form {HTMLFormElement}
       * @returns {boolean}
       */
      isDynamicLoadedForm = function (form) {
          return form.classList.contains('dynamic-load');
      },

      /**
       * Help function to check if the form has been validated and there is no invalid fields.
       * @param form {HTMLFormElement}
       * @returns {boolean}
       */
      isFormValid = function (form) {
          var invalidFieldsProp = 'invalidFields';
          return invalidFieldsProp in form && !form[invalidFieldsProp].length;
      },

      /**
       * Help function to check if `twoStep` exist in session storage, which indicates
       * The form view is form the first step of a two step form.
       * @returns {boolean}
       */
      isFromTwoStep = function () {
          var formSessionData = JSON.parse(sessionStorage.getItem('form_session'));
          return !!(formSessionData && formSessionData.twoStep);
      },

      /**
       * Help function to get form filled value directly from the field and set to digitalData userProfile.
       * This is currently only used for heroku signup form as it doesn't set filled value to cookie on submission.
       * @param form
       */
      setFormFilledValueOnPage = function (form) {
          var formCompanySize = utils.getFormFieldValue(form, 'CompanyEmployees'),
            formCompanyCountry = utils.getFormFieldValue(form, 'CompanyCountry'),
            formCompanyName = utils.getFormFieldValue(form, 'CompanyName'),
            formPPI = utils.getFormFieldValue(form, 'Lead.Primary_Product_Interest__c');

          userProfile.usercompanysize = formCompanySize ? formCompanySize : '[FORM:NO COMPANY SIZE]';
          userProfile.usercompanycountry = formCompanyCountry ? formCompanyCountry : '[FORM:NO COUNTRY]';
          userProfile.usercompanyname = formCompanyName ? formCompanyName : '[FORM:NO COMPANY NAME]';
          userProfile.userprimaryprodinterest = formPPI ? formPPI : '[FORM:NO PRIMARY PRODUCT INTEREST]';
          userProfile.userfirstformcompletetime = vp.getFirstFormCompleteTime();
      },

      /**
       * Help function to directly create the form complete ID using form campaign ID and hashed user email.
       * This is currently only used for heroku signup form as it doesn't set the form completion ID on submission.
       * @param form
       */
      setFormCompleteIdOnPage = function (form) {
          var formCampaignIdStr = 'FormCampaignId',
            formCampaignField = form.elements[formCampaignIdStr],
            formEmailField = form.elements['UserEmail'],
            formCompleteId = Util.getParam(formCampaignIdStr) || (formCampaignField ? formCampaignField.value : '');
          if (formCompleteId && typeof (SHA1) !== 'undefined' && formEmailField) {
              vp.fcid = Util.convert15To18(formCompleteId) + '|' + SHA1(formEmailField.value);
          }
          return vp.fcid;
      },
      setNCCampaignId = function (form) {
          var formCampaignIdStr = 'FormCampaignId',
          formCampaignField = form.elements[formCampaignIdStr],
          formCompleteId = Util.getParam(formCampaignIdStr) || (formCampaignField ? formCampaignField.value : '');
          if (formCompleteId) {
              userProfile.nameCaptureCampaignId = Util.convert15To18(formCompleteId);
          }
      },
      setHashedEmail = function (form) {
          var formEmailField = form.elements['UserEmail'];
          if (typeof (SHA256) === 'function' && formEmailField && formEmailField.value) {
              userProfile.hashedEmailAddress = SHA256(formEmailField.value);
          }
      },
      /**
       * Help function to check if the form is the role based newsletter.
       * This looks for a required hidden input with the value of RBNBlog.
       * @returns {boolean}
       */
      isFormRoleBasedNewsletter = function (form) {
        var checkRBN = (utils.getFormFieldValue(form, 'subname') ? utils.getFormFieldValue(form, 'subname') : false); // required by author
        return (checkRBN && checkRBN === 'RBNBlog');
      },

      /**
       * Push the current form to leadCaptureForms array and set/update page type.
       *
       * @param form
       */
      setPageType = function (form) {
          Page.leadCaptureForms.push(form);
          utils.addPageData('type', Page.getType());
      },

      /**
       * Overwrite converting page to be the current page is a dynamic form is opened on current page.
       */
      overwriteConvertPage = function () {
          pageData.convertingpage = pageData.pagename;
          pageData.convertingpageurl = pageData.url;
      },

      /**
       * Help function to dynamically track form completion.
       * @param form {HTMLFormElement}
       */
      trackFormConf = function (form) {
          var behaviorList = [],
            isSignup = isSignupForm(form),
            isHerokuSignup = isHerokuSignupForm(form),
            isRoleBasedNews = isFormRoleBasedNewsletter(form),
            activityName = isSignup || isHerokuSignup ? 'syncSignupFormCompleted' : 'Form Completion';

          userProfile.transactionid = setFormCompleteIdOnPage(form);
          setNCCampaignId(form);
          setHashedEmail(form);
          setFormFilledValueOnPage(form);

          if (isRoleBasedNews) {
            // Set Value to conditionally return desired analytics data
            utils.addPageData('is_roll_based_newsletter', 'true');
            var selectedRoles = [],
            roleCheckboxes = document.querySelectorAll('.field input[type=checkbox]:checked');
            // Collect newsletter selections and push to datalayer
            if (roleCheckboxes) {
                for (var i = 0; i < roleCheckboxes.length; i++) {
                    selectedRoles.push(roleCheckboxes[i].name)
            }
            var selectedChecks = selectedRoles.join(", ");
            utils.addPageData('newsletter_subscriptions', selectedChecks);
            }
          }

          if (userProfile.transactionid) {
              // Get offerID
              if (utils.readCookie('c30')) {
                  pageData.offerid = utils.readCookie('c30');
              } else {
                  pageData.offerid = pageData.offerid ? pageData.offerid : '[NO OFFER ID]';
              }
              pageData.numberofformcompletes = '+1';
              behaviorList.push('formcompletesubmitbuttonclick');
              if (isSignup || isHerokuSignup) {
                  behaviorList.push('signupformcomplete');
              }
              // Due to timing issue, for heroku form, do form submit and completion tracking in single call
              if (isHerokuSignup) {
                  behaviorList.push('formbutton_clicks');
              }
          }
          // WIPE OUT DRIVER/PLACEMENT/OFFER/CONVERTING PAGE
          utils.deleteCookie('v0');
          utils.deleteCookie('v20');
          utils.deleteCookie('convertingPageUrl');
          utils.deleteCookie('v22');
          utils.deleteCookie('v28');
          utils.deleteCookie('c30');
          utils.trackBehavior(activityName, behaviorList, utils.formDataPoints.concat([
              "user[0].profile[0].usercompanysize",
              "user[0].profile[0].usercompanycountry",
              "user[0].profile[0].userprimaryprodinterest",
              "user[0].profile[0].usercompanyname",
              "user[0].profile[0].userfirstformcompletetime",
              "user[0].profile[0].transactionid",
              "page.numberofformcompletes"
          ]));
      },

      /**
       * Help function to dynamically track form button click.
       */
      trackOnSubmit = function () {
          utils.trackBehavior("Form Button Click", ["formbutton_clicks"], ["user[0].profile[0].userfirstformcompletetime"]);
      },

      /**
       * Help function to dynamically track V2 form errors, this function adds some
       * tracking data as form errors percentage and the fields that has errors.
       *
       * @param fields Array that contains the fields with errors.
       * @param numInvalidFormFields Integer that indicates the number of invalid fields.
       * @param numValidFormFields Integer that indicates the number of valid fields.
       * @returns {boolean}
       */
      trackFormErrors = function (fields, numInvalidFormFields, numValidFormFields) {
          var loc = Page.getLocale(),
            errors = '',
            errorsAll = '',
            trackFormProperties = [];

          // Adding form error page data
          utils.addPageData('formerrors', '');
          utils.addPageData('formerrorsall', '');
          utils.addPageData('formerrorspercentage', '');

          if (!fields) {
              return false;
          }

          fields.forEach(function (f) {
              var newError = (loc + ':' + f);
              if ((errors + newError).length < 100) {
                  errors += (errors === '' ? '' : '|') + newError;
              }
              if ((errorsAll + newError).length < 255) {
                  errorsAll += (errorsAll === '' ? '' : '|') + newError;
              }
          });

          if (errors) {
              errors = errors.toLowerCase();
              errorsAll = errorsAll.toLowerCase();
              // Calculate the form errors percentage based in the valid and invalid fields.
              var formErrorsPercentage =
                Math.round(numInvalidFormFields / (numValidFormFields + numInvalidFormFields) * 100).toString() + '%';

              utils.addPageData('formerrors', errors);
              trackFormProperties.push('page.formerrors');
              utils.addPageData('formerrorsall', errorsAll);
              trackFormProperties.push('page.formerrorsall');
              utils.addPageData('formerrorspercentage', formErrorsPercentage);
              trackFormProperties.push('page.formerrorspercentage');

              utils.trackBehavior('Form error tracking', ['form_errors'], trackFormProperties)
          }
      },

      /**
       * Function to track step by step form progress.
       * Should be fired when the user get to next step of the form and it's the farthest step the user ever get to.
       * @param curStep
       */
      trackStepbyStepFormProgress = function (curStep) {
          if (pageData.currentFormStep && curStep > pageData.currentFormStep && pageData.totalFormStep) {
              pageData.currentFormStep = curStep;
              utils.addBehavior('stepbystepformprogress');
          }
      },

      /**
       * Function to track two step form progress.
       * Should be fired when the user fill and submit the first step of a two step form.
       */
      trackTwoStepFormProgress = function (form, fieldName) {
          var submitButtonText = form.querySelector("[type=submit]").innerText.trim();
          utils.addPageData('twostepbuttontext', submitButtonText);
          utils.addPageData('twostepfieldname', fieldName);
          utils.addBehavior('two_step_form_submit');
      },

      /**
       * Add the environment type (modal, swap container or drop panel) and the experience type to the page data.
       *
       * @param form
       * @param isFromTwoStep {boolean} Indicate if the form is referred from a two step form
       */
      setFormTypeEngagement = function (form, isFromTwoStep) {
          var stepByStepStr = 'Step by step',
            stackedStr = 'Stacked',
            twoStepStr = 'Two Step',
            onPageStr = 'onPage',
            formExperienceType = form["sfdcForm"].paginated ? stepByStepStr : stackedStr,
            formEnvironmentType =
              form.classList.contains(formEvents.dynamicLoad) ? form.getAttribute(formEnvironmentAttribute) : onPageStr;

          if (typeof (isFromTwoStep) === 'boolean' && isFromTwoStep) {
              formExperienceType = twoStepStr;
          }
          utils.addPageData('form_experience_type', formExperienceType);
          utils.addPageData('form_environment_type', formEnvironments[formEnvironmentType]);

          // Initialize form step tracking data reference
          if (formExperienceType === stepByStepStr && form[propKey].paginate) {
              pageData.currentFormStep = -1;
              pageData.totalFormStep = form[propKey].paginate.total;
              // Track the first step view on load
              trackStepbyStepFormProgress(1);
              // Track step by step form progress.
              form.addEventListener(formEvents.stepProgress, function (event) {
                  var curStep = parseInt(event.detail);
                  if (curStep) trackStepbyStepFormProgress(curStep);
              })
          }
      },

      setFormJoinIDUnique = function() {
        try {
          digitalData.page.formJoinIDUnique = Util.createUUID();
        } catch(e) {}
      },

      /**
       * Form event mapping. It should be used in form logic to trigger handlers accordingly.
       */
      formEvents = {
          init: "init-form",                          //Trigger when a v2 form get initialized
          submit: "submit-form",                      //Trigger when a v2 form is submitted
          invalid: "invalid-form",                    //Trigger when a v2 form has any invalid field
          error: "error-form",                        //Trigger when error is displayed on the form
          success: "success-form",                    //Trigger when an ajax v2 form is submitted successfully
          failed: "failed-form",                      //Trigger when an ajax v2 form fail to be submitted
          closeParent: 'close-parent',                //Trigger when the parent container is closed.
          dynamicLoad: 'dynamic-load',                //Trigger when a form is dynamically loaded.
          stepProgress: 'step-progress',              //Trigger when the user progress to next step in a step-by-step form.
          twoStepProgress: 'two-step-progress',       //Trigger when the user complete the first step of the two step form.
      };

    /**
     * Same digitalData data points that need to be send on both form view and form completion event tracking.
     * @type {string[]}
     */
    utils.formDataPoints = ["page.url", "page.referrer", "page.locale", "user[0].profile[0].dayssincelastvisit",
        "page.pagename", "user[0].profile[0].targetingcompanysize", "user[0].profile[0].usertype",
        "page.convertingpage", "page.internaldrivers", "user[0].profile[0].timepartinghour",
        "user[0].profile[0].timepartingday", "user[0].profile[0].formfillstatus", "page.scampaign",
        "page.offerid", "user[0].profile[0].visitnumber", "page.cloud", "page.type", "page.prevpage",
        "user[0].profile[0].targetingcompanyindustry", "page.formname", "page.sembrand", "user[0].profile[0].targetingcompanyname",
        "user[0].profile[0].targetingaudience", "user[0].profile[0].accounttype", "user[0].profile[0].kxsfdc",
        "user[0].profile[0].hassmbinference", "page.form_environment_type", "page.form_experience_type", "page.partnerpromocode",
        "page.drivertypepathing", "user[0].profile[0].detailedusertype", "page.prevpagesanitized",
        "page.namenolocale", "page.drivertype", "page.uiframework", "page.segment", "page.reportsuite", "page.convertingpageurl"];

    /**
     * The main tracking logic for v2 form lives here.
     * Listen to events emit from (dynamic) loaded v2 form elements.
     * The event triggering is defined in sfdc-www, clientlib_sfdc_form.
     */
    utils.components.trackFormV2 = function () {
        var self = this;

        $(document).on(formEvents.dynamicLoad, formV2Selector, function (event) {
            this.classList.add(formEvents.dynamicLoad);
            // Setting the environment to the form
            this.setAttribute(formEnvironmentAttribute, event.detail);
        });

        $(document).on(formEvents.init, formV2Selector, function (event) {
            var form = this;

            // If form properties are not defined, don't bind any event listener.
            if (!form[propKey]) {
                return;
            }

            setFormJoinIDUnique();
            setNCCampaignId(form);

            var isHerokuSignup = isHerokuSignupForm(form),
              isDynamic = isDynamicLoadedForm(form),
              isLead = isLeadForm(form) || isHerokuSignup;

            // Regular lead form tracking events
            if (isLead) {
                // Sef form related data layer collections
                setPageType(form);
                self.trackConverting();
                if (isDynamic) overwriteConvertPage();
                setFormTypeEngagement(form, isFromTwoStep());

                // Track form view event when a v2 form get initialized.
                //trigger form view event once the form is visible to user but not on the page load-W-1076628
                if(window.IntersectionObserver !== null){
                    var observer = new IntersectionObserver(function(entries) {
                        // isIntersecting is true when element and viewport are overlapping
                        // isIntersecting is false when element and viewport don't overlap
                        if(entries[0].isIntersecting === true){
                            // Track form view event when a v2 form get initialized.
                            self.trackFormView(form);
                        }
                    }, { threshold: [0] });

                    observer.observe(form);
                    digitalData.page.observer = observer;
                } else {
                    self.trackFormView(form);
                }


                // Track form completion event when a v2 form get submit successfully.
                form.addEventListener(formEvents.success, function () {
                    if (isDynamic) overwriteConvertPage();
                    setFormTypeEngagement(form);
                    trackFormConf(form);
                });

                // Track form submit button click when a v2 form attempt to submit.
                form.addEventListener(formEvents.submit, function () {
                    if (isDynamic) overwriteConvertPage();
                    if (isHerokuSignup && isFormValid(form)) {
                        trackFormConf(form);
                        return;
                    }
                    trackOnSubmit();
                });

                // Track form error when user click submit.
                form.addEventListener(formEvents.error, function (event) {
                    if (isDynamic) overwriteConvertPage();
                    var data = event.detail;
                    if (!data) {
                        return;
                    }
                    var errorFields = data.fields,
                      numValidFields = data.numValid;
                    if (errorFields && typeof numValidFields === 'number') {
                        trackFormErrors(errorFields, errorFields.length, numValidFields);
                    }
                });

            } else if (form[propKey].twoStep) {
                // Non-lead special form tracking events
                // Track first step form completion for two step form
                form.addEventListener(formEvents.twoStepProgress, function (event) {
                    var fieldName = event.detail;
                    trackTwoStepFormProgress(form, fieldName);
                });
            }
            else {
                // assume if all else fails this is a non-lead form
                // if the form is configured with a GA event, fire it on submit
                var gaEvent = form[propKey].submitEvent;
                if (gaEvent) {
                    form.addEventListener(formEvents.submit, function () {
                        utils.addPageData('formCustomEv', gaEvent);
                        utils.trackBehavior('form_nonlead_submission', ['form_nonlead_submission'], ['page.formCustomEv']);
                    });
                }
            }
        });
    };
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined') { return; }

    var utils = digitalData.util,
        feedbackBtnSelector = ".opinionlab-trigger, .feedback-trigger-reskin, .feedback-trigger";
    
    /**
     * Initialize feedback button tracking and bind necessary event listener.
     * `isTrigger` check is added to make sure all the events are triggered by human.
     */
    utils.components.trackFeedbackBtn = function() {
        // Track feedback button click
        var feedbackBtn = document.querySelector(feedbackBtnSelector);
        // If feedback button exist on the page
        if (feedbackBtn){
            feedbackBtn.addEventListener('click', function(){
                utils.addBehavior('feedbackbuttonclick');
            })
        }
    };
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
        localStore = digitalData.localStorage,
        pageName = Page.getName(),
        chatTriggerOnFooter = {
            selector: ".embeddedServiceHelpButton[data-sf-chat='chat']",
            label: "chat-anchor"
        },
        chatTriggerOnInvite = {
            selector: ".chat-btn[data-sf-chat='chat']",
            label: "chat-invite"
        },
        chatTriggerOnLink = {
            selector: ".chat-trigger-v2",
            label: "chat-cta"
        },
        chatViewEvent = "chat_view",
        chatInitEvent = "chat_init",
        chatWindowSelector = ".featureBody.embeddedServiceSidebarFeature",
        eventLabel, // Shared private variable to distinguish where the chat is triggered and send as event label
        chatBotEnabled = true, // Shared private variable to indicate if chatbot is enabled on the page (default is chatbot is enabled)
        destroyChatKey = "destroy_chat",
        chatInviteKey = "chat_invite",
        chatEndedKey = "chat_ended",

        /**
         * Help function to check if the chat window is already opened.
         * Return the window body element if it's opened.
         * @returns {HTMLElement}
         */
        chatWindowOpened = function () {
            return document.querySelector(chatWindowSelector)
        },

        /**
         * Specific logic for tracking the chat drop event.
         * This should be fired when the water fall modal appears on the page.
         */
        trackChatDropEvent = function () {
            utils.addPageData("customlink", "chat-fall");
            utils.addPageData("drivertypepathing", "prop 22 value");
            utils.addPageData("moduletracking", pageName + "|chat-fall");
            utils.trackBehavior("chat-fall", ["chatdrop"], ["page.pagename", "page.drivertypepathing", "page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
        },

        /**
         * Update digitalData layer and trigger chat related tracking event.
         * @param eventName {string} The name of the tracking event
         */
        trackChatEvent = function (eventName) {
            utils.addPageData("customlink", eventLabel);
            utils.addPageData("moduletracking", pageName + "|" + eventLabel);
            utils.trackBehavior(eventLabel, [eventName], ["page.pagename", "page.customlink", "page.moduletracking", "user[0].profile[0].usertype"]);
        },

        /**
         * Tracks chat_init event for each unique liveAgentSessionKey (chasitorData.chatKey)
         * @param data is the chat embedded_svc event data
         */
        processChatInit = function (data) {
            var chatKey = data.liveAgentSessionKey;
            if (!localStore['chatInitKeys'].includes(chatKey)) {
                localStore['chatInitKeys'].push(chatKey);
            } else {
                //chat_init event was already tracked for this liveAgentSessionKey
                //liveAgentSessionKey is chasitorData.chatKey
                //onChatTransferSuccessful fires not just Bot -> Agent but also Agent -> Agent
                return;
            }
            trackChatEvent(chatInitEvent);
        },

        /**
         * Method to bind click event handler to given chat triggering element on the page.
         * @param triggerObj {object}
         */
        bindClickEventHandler = function(triggerObj) {
            var element = document.querySelector(triggerObj.selector);
            if (element) {
                element.addEventListener('click', function(){
                    if (!chatWindowOpened()) {
                        eventLabel = triggerObj.label;
                        trackChatEvent(chatViewEvent);
                    }
                })
            }
        },

        /**
         * Listen to events from embedded chat service, as a better way of tracking chat events
         * see https://developer.salesforce.com/docs/atlas.en-us.snapins_web_dev.meta/snapins_web_dev/snapins_web_chat_events.htm
         * Important Note: Calls to embedded_svc.addEventHandler must take place before calls to embedded_svc.init.
         * If your code snippet contains calls to embedded_svc.init, make sure that you enter your calls in the correct order.
         */
        handleWebChatEvents = function () {
            //embedded_svc.settings.wwwChatBotEnabled configured within 'Live Agent' Cloud Config
            //default is chatbot is enabled, so Strict equality check to insure author has disabled option on AEM cloud config
            if (embedded_svc && embedded_svc.settings && (embedded_svc.settings.wwwChatBotEnabled === false)) {
                chatBotEnabled = false;
            }

            //Set liveAgentSessionKey (chasitorData.chatKey) in localStorage if this is the first page with Chat that user is visiting
            if (!('chatInitKeys' in localStore)) {
                localStore['chatInitKeys'] = [];
                utils.saveLocalStorage();
            }

            /**
             * Currently, there are two different live chat experience:
             *   1. For US and CA, chat bot is enabled to capture user information before initiating the live chat.
             *   2. For other locales, user need to fill out a form to initiate the live chat.
             * The chat bot is going to roll out to all the locales in the future
             * We determine if chat_init event has occurred based on embedded_svc events and if chatbot is enabled
             */

            // build map of web chat events -> callbacks
            // each of these will be added as an event listener to the document
            var webChatEventMap = {
                // Custom event within 'Live Agent' Cloud Config, is fired once user submits preChat form, for locales such as UK/AU etc
                'sfdc-onChatRequestSuccess': {
                    callback: function (event) {
                        //Strict equality check to insure author has disabled option on AEM cloud config
                        if (chatBotEnabled === false) {
                            processChatInit(event.detail);
                        }
                    }
                },
                'sfdc-onChatTransferSuccessful': {
                    //Custom event within 'Live Agent' Cloud Config, is fired after user completes last form field question from chatBot for US/CA locales
                    callback: function (event) {
                        if (chatBotEnabled) {
                            processChatInit(event.detail);
                        }
                    }
                },
                'sfdc-afterDestroy': {
                    label: destroyChatKey,
                    callback: trackChatEvent,
                    param: destroyChatKey
                },
                'sfdc-chatInvite': {
                    label: chatInviteKey,
                    callback: function () {
                        trackChatEvent(chatInviteKey);
                        // bind the click handler for invite here, since the button doesn't exist until now
                        bindClickEventHandler(chatTriggerOnInvite);
                    }
                },
                'sfdc-onChatEndedByAgent': {
                    label: 'agent',
                    callback: trackChatEvent,
                    param: chatEndedKey
                },
                'sfdc-onChatEndedByChasitor': {
                    label: 'visitor',
                    callback: trackChatEvent,
                    param: chatEndedKey
                }
            };

            // create an event listener for each event in the map
            Object.keys(webChatEventMap).forEach(function(webEvent) {
                document.addEventListener(webEvent, function (event) {
                    var data = webChatEventMap[webEvent];
                    if (!data) { return; }

                    if (data.label) {
                        eventLabel = data.label;
                    }
                    data.callback(data.param || event);
                });
            });
        },

        /**
         * Track live chat events by binding all the possible triggering actions.
         * There are three possible actions that could trigger chat view:
         *   1. Click on the "Let's Chat" button on the Contact Us page.
         *   2. Click on the "Let's Chat" button at the footer of page.
         *   3. Click on the "Let's Chat" button in the chat pop-up invite (older version - water fall modal). (This is loaded dynamically).
         */
        init = function () {
            document.addEventListener("sfdc-chatLoaded", function() {
                // add listeners for the two
                var triggerList = [ chatTriggerOnFooter, chatTriggerOnLink ];
                triggerList.forEach(function(triggerObj){
                    bindClickEventHandler(triggerObj);
                });

                handleWebChatEvents();
            });
            // Add listener to capture when the waterfall modal shows up.
            // The event should be triggered at component level.
            document.addEventListener("sfdc-waterfall", function(){
               trackChatDropEvent();
            });

        };

    /**
     * Initialize live chat tracking. It targets for chat view and chat initialization events.
     */
    utils.components.trackLiveChat = function() {
        init();
    };
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined') { return; }

    var utils = digitalData.util,
        dockOpenButton = {
            selector: ".initial-chat-wrap",
            label: "dock-expand"
        },
        dockCloseButton = {
            selector: ".close-chat-wrap",
            label: "dock-collapse"
        },
        firstLoad = true,
        dockStatus = null,

        getScrollDepth = function () {
            var scrollDepth  = window.pageYOffset || document.documentElement.scrollTop;
            return scrollDepth.toString()
        },

        updateDockStatus = function () {
            var isCollapsed = localStorage.getItem('closedInitialChat');
            if(isCollapsed === null){
                dockStatus = "Initial";
            }else{
                dockStatus = "Collapse";
            }
        },
       
        /**
         * Specific logic for tracking the dock expand event.
         * This should be fired when the user clicks on the dock button wether it is on it's initial state or expanded.
         * Initial state happens if the user never closed the dock. Once the dock is closed, a localstorage item is saved that prevents the 'initial' state from displaying in the future.
         * updateDockStatus() updates 'dockStatus' with the current state of the button. This enables us to know if the user is using it for the first time.
         */
        trackDockExpandEvent = function () {
            firstLoad ? firstLoad = false : updateDockStatus();
            utils.addPageData("scrollDepth", getScrollDepth());
            utils.addPageData("contactDockStatus", dockStatus);
            utils.addBehavior("contactdockexpand");
        },

        /**
         * Specific logic for tracking the dock expand/collapse event.
         * This should be fired when the user clicks on the close button.
         */
        trackDockCollapseEvent = function () {
            utils.addPageData("scrollDepth", getScrollDepth());
            utils.addBehavior("contactdockcollapse");
        },

        init = function () {
            var dockOpenTrigger = document.querySelector(dockOpenButton.selector);
            if (dockOpenTrigger) {
                dockOpenTrigger.addEventListener("click", function () {
                    trackDockExpandEvent();
                });
            }

            var dockCloseTrigger = document.querySelector(dockCloseButton.selector);
            if (dockCloseTrigger) {
                dockCloseTrigger.addEventListener("click", function () {
                    trackDockCollapseEvent();
                });
            }
            updateDockStatus();

        };

    /**
     * Initialize dock tracking.
     */
    utils.components.trackContactDock = function() {
        init();
    };
}());

(function(){
    "use strict";

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined' ||
      typeof Util === 'undefined') { return; }

    var utils = digitalData.util,
      propKey = 'sfdcForm';
    /**
     * Given a form element, obtain the nameCaptureID based on the form CampaignId
     * @param form
     * @returns {string}
     */
    var getNameCaptureId = function(form) {
        var nc = 'FormCampaignId', ncAlt = 'radio1'; // aka namecapture campaign id; ncAlt is only for old event reg forms
        if (form.elements[nc] != null) {
            Page.nameCaptureId = Util.convert15To18(form.elements[nc].value);
            if (!Page.nameCaptureId && form.elements[ncAlt] != null) {
                Page.nameCaptureId = Util.convert15To18(form.elements[ncAlt][0].value);
            }
        }
        return Page.nameCaptureId == null ? '' : Page.nameCaptureId;
    };

    /**
     * Get/create the offer ID and store in cookie.
     * @returns {string}
     */
    var getFormOfferId = function(form) {
        var offerId = (digitalData.page.offerid && digitalData.page.offerid.indexOf('|') === -1) ? digitalData.page.offerid : getNameCaptureId(form);
        if (offerId) {
            utils.writeCookie('lastOffer', offerId + ':view');

            //s.eVar28 = s.getValOnce(s.offerId,'v28');
            // Get v28 once per visit session.
            // This is to avoid inflated tracking when visitor refresh the form page within the same session.
            digitalData.page.offerid = utils.getValueOnce(offerId,'v28');
            if (digitalData.page.offerid) {
                offerId = digitalData.page.pagename + '|' + offerId;
                offerId = (form.className.indexOf('form-builder-form') > -1 ? 'form-builder' : 'old-form') + '|' + offerId;
                if (digitalData.page.offerid && digitalData.page.offerid.indexOf(digitalData.page.pagename) === -1) {
                    digitalData.page.offerid = offerId;
                    utils.writeCookie('c30', digitalData.page.offerid);
                }
            } else {
                offerId = "";
            }
        }
        return offerId
    };

    /**
     * Get formatted value for Lead.Industry field.
     * @returns {string}
     */
    var getIndustry = function(form) {
        var leadIndustry = form && form['Lead.Industry'];
        return leadIndustry ? 'Lead.Industry' + (leadIndustry.type ? '|' + leadIndustry.type : '') : '';
    };

    /**
     * Help function to check if the form is the role based newsletter.
     * This looks for a required hidden input with the value of RBNBlog.
     * @returns {boolean}
     */
    var isFormRoleNewsletter = function (form) {
        var checkRBN = (utils.getFormFieldValue(form, 'subname') ? utils.getFormFieldValue(form, 'subname') : false);
        return (checkRBN && checkRBN === 'RBNBlog');
    };


    /** PUBLIC METHODS **/

    /**
     * Track a single form page view event.
     */
    utils.components.trackFormView = function(form) {
        var offerId = getFormOfferId(form),
            isRoleBasedNews = isFormRoleNewsletter(form);

        if (isRoleBasedNews){
            // Set Value to conditionally return desired analytics data
            utils.addPageData('is_roll_based_newsletter', 'true');
        }
        if (offerId) {
            // Don't track form view if the user is kicked back to the from due to server side error.
            if (Page && !Page.isFormKickback()) {
                utils.addPageData('partnerpromocode', utils.getFormFieldValue(form, 'PartnerPromoCode'));
                utils.addPageData('formname', utils.getFormFieldValue(form, 'mcloudFormName'));
                utils.addPageData('diagnosticsleadindustry', getIndustry(form));
                //if form is not a skip form trigger form view event
                if(!form[propKey].skip){
                    utils.trackBehavior("Form View", ["formview"], utils.formDataPoints.concat(["page.diagnosticsleadindustry"]));
                }else{
                    // if "appxud" has been created in the session, form autocomplete event will be triggered. Hence no need to trigger form view event
                    //if it is a skip form and "appxud" cookie is not yet created in the session then trigger the form view event
                    if(Util.getCookie('appxud') === ''){
                        utils.trackBehavior("Form View", ["formview"], utils.formDataPoints.concat(["page.diagnosticsleadindustry"]));
                    }
                }

            }
        }
    };
}());

(function () {
    'use strict';

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined' ||
      typeof vp === 'undefined' ||
      typeof Util === 'undefined') {
        return;
    }

    var utils = digitalData.util,
      pageData = digitalData.page,
      userProfile = digitalData.user[0].profile[0],

      setSkipNCCampaignId = function () {
        if (vp.getNCCampaignId()) {
            userProfile.nameCaptureCampaignId = vp.getNCCampaignId();
        }
      },
      setSkipHashedEmail = function () {
        if (vp.getHashedEmail()) {
            userProfile.hashedEmailAddress = vp.getHashedEmail();
        }
      },
      setFormJoinID = function () {
        try {
            var skipFormUUID = Util.getParam('sfuuid');
            pageData.formJoinIDUnique = skipFormUUID || pageData.formJoinIDUnique || Util.createUUID();
        } catch(e) {}
      },

      /**
       * Track form confirmation page view event.
       * Handle skip form differently to update necessary dataLayer data points
       */
      trackSkipForm = function () {
          // TODO: The skipform redirect servlet should handle this special case of internaldrivers when redirecting. After so, we can remove the logic below and simplify converting page tracking.
          let navType=window.performance.getEntriesByType("navigation")[0].type;
          if("navigate" !== navType){
            return;
          }
          var internaldrivers = Util.convert15To18(Util.getParam('d') ? Util.getParam('d') : Util.getParam('DriverCampaignId'));
          setFormJoinID();
          if (internaldrivers && !Util.getParam('d')) {
              var referrerWithInternalDrivers = utils.getReferrerPageName() + "|" + internaldrivers;
              utils.addPageData('persistedInternalDriver', referrerWithInternalDrivers);
              //TO-DO fix products logic below
              //conform to W3C
              // Event Use Case 2 - Internal Driver Click
              utils.addProduct(internaldrivers, "intdriverclick");
              utils.addPageData('internaldrivers', referrerWithInternalDrivers);
              utils.addBehavior("intdriverclick");
          }
          pageData.offerid = Util.convert15To18(Util.getParam('nc') ? Util.getParam('nc') : Util.getParam('FormCampaignId'));
          if (pageData.offerid) {
              pageData.offerid = 'form-builder|' + Page.calculateName(Util.getParam('landing_page')) + '|' + pageData.offerid;
          }
          if (vp.getFormCompleteId()) {
              userProfile.transactionid = vp.getFormCompleteId();
          }
          setSkipNCCampaignId();
          setSkipHashedEmail();
          if (userProfile.transactionid) {
              pageData.numberofformcompletes = '+1';
              utils.addBehavior('autoformcomplete');
          }
      },

       /**
       * Track inline form confirmation page view event.
       * Handle inline skip form differently to update necessary dataLayer data points
       */
      trackInlineSkipForm = function () {
        let navType=window.performance.getEntriesByType("navigation")[0].type;
        if("navigate" !== navType){
          return;
        }
        var cData = (utils.readCookie('appxud') ? utils.readCookie('appxud') : []);
        var internaldrivers = Util.convert15To18(cData['d'] ? cData['d'] : '');
        setFormJoinID();
        if (internaldrivers) {
            var referrerWithInternalDrivers = utils.getReferrerPageName() + "|" + internaldrivers;
            utils.addPageData('persistedInternalDriver', referrerWithInternalDrivers);
            //TO-DO fix products logic below
            //conform to W3C
            // Event Use Case 2 - Internal Driver Click
            utils.addProduct(internaldrivers, "intdriverclick");
            utils.addPageData('internaldrivers', referrerWithInternalDrivers);
            utils.addBehavior("intdriverclick");
        }
        pageData.offerid = Util.convert15To18(Util.getParam('nc') ? Util.getParam('nc') : Util.getParam('FormCampaignId'));
        if (pageData.offerid) {
            pageData.offerid = 'form-builder|' + Page.calculateName(Util.getParam('landing_page')) + '|' + pageData.offerid;
        }

        if (vp.getFormCompleteId()) {
            userProfile.transactionid = vp.getFormCompleteId();
        }
        setSkipNCCampaignId();
        setSkipHashedEmail();
        if (userProfile.transactionid) {
            pageData.numberofformcompletes = '+1';
            utils.addBehavior('autoformcomplete');
        }
      },

      /**
       * Update user profile data points based on the value submitted in the form.
       * Values are obtained from cookie.
       */
      updateUserProfile = function () {
          utils.setFormFillVals();
      },

      /**
       * If form completes button clicked, in another word, form completion tracked,
       * reset all the driver, placement offer and converting page to start a fresh tracking session.
       */
      resetTracking = function () {
          // DEFAULT DRIVER/PLACEMENT/OFFER WHEN NONE PRESENT
          if (utils.hasEvent('formcompletesubmitbuttonclick')) {

              if (!utils.readCookie('v22')) {
                  // s.eVar22
                  pageData.internaldrivers = '[NO INTERNAL PLACEMENT ID]';
              }

              // WIPE OUT DRIVER/PLACEMENT/OFFER/CONVERTING PAGE
              utils.deleteCookie('v0');
              utils.deleteCookie('v20');
              utils.deleteCookie('convertingPageUrl');
              utils.deleteCookie('v22');
              utils.deleteCookie('v28');
              utils.deleteCookie('c30');
          }
      };

    /** PUBLIC METHODS **/

    /**
     * The main tracking logic lives here.
     * Essentially it check URL param to determine if the page is a skip form conf page.
     * If so, track skip form event.
     */
    utils.components.trackFormConfPage = function () {
        if (Page.isSkipFormRedirect()) {
            updateUserProfile();
            this.trackConverting(); // Explicitly track converting page here. So that it can be sent with form conf events.
            trackSkipForm();
            resetTracking();
        }

        // Add event listener for inline conf skip form
        document.addEventListener('inline-form-skip-success', function(e) {
            // Page is skip form inline
            updateUserProfile();
            utils.components.trackConverting(); // Explicitly track converting page here. So that it can be sent with form conf events.
            trackInlineSkipForm();
            resetTracking();
        })
    }
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page,
        currentConvertingPage; //variable to cache the initial converting page.

    /**
     * Check if the page needs to track converting
     * @returns {boolean}
     */
    function needTrackConverting() {
        //if ((s.campaign||s.eVar22||(Page.hasLeadCaptureForm()&&!s.c_r('v20'))))
        // Don't set/send converting page when the page is a kickback form
        return (pageData.scampaign || pageData.internaldrivers || (Page.hasLeadCaptureForm() && !utils.readCookie('v20')&& !utils.readCookie('convertingPageUrl'))) && !Page.isFormKickback()
    }

    /**
     * Get the referrer page name based on the calculated page name.
     *
     * @returns {String}
     */
    function getReferrerPageName() {
        var cpDocReferrerPath = '';

        //using <a> element - it implements location
        var cpAnchorElement = document.createElement('a');
        cpAnchorElement.href = Page.getReferrer();
        //make sure the path starts with leading '/', IE patch
        if (cpAnchorElement.pathname) {
            cpDocReferrerPath = cpAnchorElement.pathname.replace(/(^\/?)/,"/");
        }

        var referrerPageName = Page.calculateName(cpDocReferrerPath, cpAnchorElement.hostname);

        // support for legacy blog home page name (when it was on it's own domain)
        if (referrerPageName === Page.getServer() + ':' + Page.getLocale() + ':blog') {
            referrerPageName += ':homepage';
        }

        // handle edge case for links from login.salesforce.com parent frame
        // Page.calculateName gets confused by the '/' path and thinks it's the homepage
        // treat links from parent document as if they were from marketing frame
        if (document.referrer.indexOf('login.salesforce.com') > -1) {
            referrerPageName = Page.getServer() + ':' + Page.getLocale() + ':' + 'login';
        }

        return referrerPageName;
    }

    /**
     * The main tracking logic lives here.
     * Essentially if a page has a raw internal driver or has a lead capture form
     * Converting page should attempted to get calculated if there is a internal referrer data point.
     */
    utils.components.trackConverting = function(){
        let convertingPageStored = utils.readCookie('v20'),
            convertingPage = convertingPageStored;
        let convertingPageUrlStored = utils.readCookie('convertingPageUrl'),
            convertingPageUrl = convertingPageUrlStored;
        try {
            //W-10341665 -> For redirect tests executed through Optimizely Performance Edge
            //convertingPage and referrer are not being passed correctly into GA360
            if (typeof optimizelyEdge !== 'undefined' && optimizelyEdge.get('state').getRedirectInfo() && optimizelyEdge.get('state').getRedirectInfo().referrer){
                var referrerFromOptimizely = optimizelyEdge.get('state').getRedirectInfo().referrer;
                Page.referrer = pageData.referrer = convertingPageUrl = referrerFromOptimizely;
            }
        }catch (err) {
            //continue
        }
        if (needTrackConverting() || Page.isFromSingleLineForm()) {
            if (pageData.prevpage) {
                // By default, the converting page is the previous page.
                convertingPage = pageData.prevpage;
                convertingPageUrl = pageData.prevpageurl;

                //fix for the case when a link opens a new window
                //and the user returns to original window and clicks to a form from there.
                try{
                    //only proceed if there is a referrer, and it's an internal referrer
                    //but do not proceed if s.prevPage value is not from this site, 'SFDC'
                    if (Page.hasInternalReferrer()) {
                        convertingPage = utils.getReferrerPageName();
                        convertingPageUrl = pageData.referrer;
                    }
                }catch (err) {
                    //continue on
                }
            } else {
                if (!convertingPageStored) {
                    //s.eVar20 = 'Direct Landing';
                    convertingPage = 'Direct Landing';
                }
                if (!convertingPageUrlStored) {
                    convertingPageUrl = 'Direct Landing';
                }
            }
        }
        if (convertingPageStored !== convertingPage) {
            utils.writeCookie('v20', convertingPage);
        }
        if (convertingPageUrlStored !== convertingPageUrl) {
            utils.writeCookie('convertingPageUrl', convertingPageUrl);
        }

    pageData.convertingpage = currentConvertingPage = convertingPage;
        pageData.convertingpageurl = convertingPageUrl;
        digitalData.page.referrername = getReferrerPageName();
    }
}());

(function(){
    /*************************************************
     * Shared tracking utils for both navs
     **************************************************/

    'use strict';

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
      pageName = Page.getName();

    /**
     * Tracking logic for the bottom navigation bar.
     */
    var trackBottomNavBar = function () {
        // 12-2019 TML: refactoring this to vanilla ES5 to meet an AC to remove jquery while still staying consumable by AEM compressor.

        // Since the footer is rendered via JS
        // need to use $(document) because the event handler is on elements
        // that were rendered on the page via JS

        var twitterStr = 'social:twitter', //twitter is supposed to be lowercase
            facebookStr = 'social:Facebook',
            linkedinStr = 'social:LinkedIn',
            youtubeStr = 'social:Youtube',
            instagramStr = 'social:Instagram',
            googleStr = 'social:Google';

        document.addEventListener('click', function(e){
            var nvItem = 'undefined';
            if (e.target.matches('footer.bottom a')) {
                var _this = e.target,
                navName = _this.innerText.trim().toLowerCase(),
                topNav = _this.closest('.genericLinkListComponent') ? _this.closest('.genericLinkListComponent').previousElementSibling : '',
                topNavName = topNav ? topNav.innerText.trim().toLowerCase() : (_this.closest('.page-footer_content') ? 'legal and privacy' : '');

                nvItem = topNavName ? topNavName + ":" + navName : navName;
            }

            // Logo Clicked
            if (e.target.matches('footer .footer-logo a') || e.target.matches('footer .footer-logo a img')) {
                nvItem = 'home:logo';
            }

            // Social tracking
            var imageEl = e.target, imageElClass = imageEl.classList ;
            if (imageEl.getAttribute("src") && imageElClass && imageElClass.contains("salesforce-social-icon")) {
                var imgSrc = imageEl.getAttribute("src");

                if (imgSrc.includes("linkedin") ) {
                    nvItem = linkedinStr;
                } else if (imgSrc.includes("twitter")) {
                    nvItem = twitterStr;
                } else if (imgSrc.includes("facebook")) {
                    nvItem = facebookStr;
                } else if (imgSrc.includes("youtube")) {
                    nvItem = youtubeStr;
                } else if (imgSrc.includes("instagram")) {
                    nvItem = instagramStr;
                } else if (imgSrc.includes("google")) {
                    nvItem = googleStr;
                }
            }

            // Only fire tag if nvItem populated
            if (nvItem !== 'undefined') {
                utils.addPageData("navItem", nvItem);
                utils.addBehavior("currentbottomnavigationclicks");
            }
        });
    };

    /*
     Tracking logic for adding www_track events to datalayer for the MFE Mav.
     */
    var addWWWTrack = function () {
        if (document.getElementsByTagName('hgf-c360nav')) { // C360 nav is present
            var addTrackingEvent = function (event) {
                // Ensure there is a child property named "event" before passing to GA
                if (event.detail && event.detail.event) {
                    dataLayer.push(event.detail)
                }
            };
            document.addEventListener("www_track", addTrackingEvent, false);
        }
    }

    /**
     * Tracking logic for the left navigation bar.
     */
    var trackLeftNavBar = function () {
        // 12-2019 TML: refactoring this to vanilla ES5 to meet an AC to remove jquery, while still staying consumable by AEM compressor.
        var leftNavLinks = document.querySelectorAll('.leftnav a');
        for (var i = 0; i < leftNavLinks.length; i++) {
            leftNavLinks[i].addEventListener('click', function(e){
                var _this = e.target;
                utils.addPageData("navItem", _this.innerText.trim().toLowerCase());
                utils.addBehavior("currentleftnavigationclicks");
            })
        }
    };

    /**
     * Tracking logic for videos that are placed in the global nav (Top nav bar).
     * This can be removed after Vidyard video event tracking is figured out for modal videos.
     */
    var trackVideoTopNavBar = function () {
        // 12-2019 TML: refactoring this to vanilla ES5 to meet an AC to remove jquery, while still staying consumable by AEM compressor.
        var videoTopNavBarLinks = document.querySelectorAll(".globalNavigationBar .tab-content .tab-pane");
        function trackVideoImage(){
            var product = itemId.split("_")[0];
            var videoLinkName = pageName + "|navvideoplay|" + product;
            utils.addPageData("moduletracking", videoLinkName);
            utils.trackBehavior(videoLinkName, ["topnavigationclicks", "customlink"], ["page.moduletracking"]);
        }
        for (var i = 0; i < videoTopNavBarLinks.length; i++) {
            var item = videoTopNavBarLinks[i];
            var itemId = item.getAttribute('id');
            var videoImage = item.querySelector(".image-link[data-modal-src] img");
            if (itemId && !!videoImage) {
                for (var j = 0; j < videoImage.length; j++) {
                    videoImage[j].addEventListener('click',function(){
                        trackVideoImage();
                    })
                }
            }
        }
    };

    /**
     * Tracking logic for the expandable navigation bar component.
     */
    var trackExpandableNavBar = function () {
        // Expandable navigation bar container tracking
        // 12-2019 TML: refactoring this to vanilla ES5 to meet an AC to remove jquery, while still staying consumable by AEM compressor.
        var expandableNavBarLinks = document.querySelectorAll('.nav-container a');
        for (var i = 0; i < expandableNavBarLinks.length; i++) {
            expandableNavBarLinks[i].addEventListener('click',function(e){
                var cleanLinktxt = e.target.querySelector('.header-text').innerText.toLowerCase().trim().replace(/ /g,'_'),
                  datastr = pageName + "|topnav-toplevel|" + cleanLinktxt;

                utils.addPageData("moduletracking", datastr);
                utils.trackBehavior(datastr, ["topnavigationclicks", "customlink"], ["page.moduletracking"]);
            });
        }
    };


    /*************************************************
     * Branch global top nav tracking based on which nav is present
     **************************************************/

    var trackGlobalTopNavBar;
    if (document.querySelector('.globalNavigationBarConsolidated')) { // new nav is present
        //new nav tracking code
        // NOTE - this has been "down-factored" to ES5 so that the AEM compiler will not choke on it; we'll likely want to re-factor back up to ES6 at some point in the future.
        trackGlobalTopNavBar = function () {
            var globalNavBarLinks = document.querySelectorAll('.globalNavigationBarConsolidated a');
            for (var i = 0; i < globalNavBarLinks.length; i++) {
                globalNavBarLinks[i].addEventListener('click', function(e) {
                    var _this = e.target,
                      navLocation = "Top",
                      navName = _this.innerText.trim().toLowerCase(),
                      cleanedLinktxt = navName.replace(/ /g, '_'),
                      valueEvar37 = navLocation + "|" + cleanedLinktxt,
                      primaryMenuItemId = _this.closest('.wwww-main-nav > .nav-item')? _this.closest('.wwww-main-nav > .nav-item').getAttribute("id") : '',
                      navItem = 'undefined',
                      datastr = pageName + "|" + valueEvar37;

                    if (primaryMenuItemId) {
                        var primaryMenuName = primaryMenuItemId.replace("_menu_item", ""),
                         navGrp = _this.closest('.sub-nav') ? _this.closest('.sub-nav').previousElementSibling : '',
                         navGrpName = navGrp ? navGrp.innerText.trim().toLowerCase() : '',
                         topNav = _this.closest('.wwww-main-nav > .nav-item > .sub-nav') ? _this.closest('.wwww-main-nav > .nav-item > .sub-nav').previousElementSibling : '',
                         topNavName = topNav ? topNav.innerText.trim().toLowerCase() : '';
                        if (navGrpName) {
                            navItem = topNavName + ":" + navGrpName + ":" + navName;
                        } else {
                            navItem = topNavName + ":" + navName;
                        }
                        valueEvar37 = navLocation + "|" + primaryMenuName + "|" + cleanedLinktxt;
                        datastr = pageName + "|" + valueEvar37;
                    }
                    // Additional logic for unified menu
                    if ((_this.closest("ul") && _this.closest("ul").classList.contains("flyout-menu-login")) || cleanedLinktxt === "login") {
                        navItem = "login:" + navName;
                        valueEvar37 = navLocation + "|Login|" + cleanedLinktxt;
                        datastr = pageName + "|" + valueEvar37;
                    }

                    // below if is to skip click tracking on collapse fly-out menu heading
                    if (!_this.closest('.panel-heading')) {

                        // Search Clicked
                        if (_this.closest("a") && _this.classList.contains("icon-sfdc-icon-magnifying-glass")) {
                            navItem = 'search:search';
                        }

                        // Logo Clicked
                        if ((_this.closest("a") && _this.closest("a").classList.contains("logo"))) {
                            navItem = 'home:logo';
                        }

                        // Phone Clicked
                        if ((_this.closest("a") && _this.closest("a").classList.contains("display-phone"))) {
                            navItem = navName ? 'contact us:' + navName : 'contact us';
                        }

                        if (navItem === 'undefined' && navName) {
                            navItem = navName
                        }

                        // Lines 201 and 202 are necessary for "custEv_topNavLinkClick"
                        utils.addPageData("navItem", navItem);
                        utils.addBehavior("legacycurrenttopnavigationclicks");
                        utils.addPageData("user[0].profile[0].usertype", vp.getType() ? vp.getType() : "");
                        utils.addPageData("moduletracking", datastr);
                        utils.addPageData("customlink", valueEvar37);
                        utils.trackBehavior(datastr, ["topnavigationclicks", "customlink"], ["page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
                    }
                })
            }


        // Since the Regional selector in the top nav is rendered via JS
        // need to use $(document) because the event handler is on elements
        // that were rendered on the page via JS
        document.addEventListener('click', function(e){

            if (e.target.matches('.header-right-content .region-selector a')) {
                var _this = e.target,
                navName = _this.innerText.trim().toLowerCase(),
                topNav = _this.closest('.genericLinkListComponent') ? _this.closest('.genericLinkListComponent').previousElementSibling : '',
                topNavName = topNav ? topNav.innerText.trim().toLowerCase() : '',
                navItem = topNavName ? topNavName + ":" + navName : navName;

                utils.addPageData("navItem", navItem);
                utils.addBehavior("legacycurrenttopnavigationclicks");
            }
        });

            /* ES6 implementation for future use
            document.querySelectorAll('.globalNavigationBarConsolidated .nav-item a').forEach((el) => {
              const _this = el;
              _this.addEventListener('click', (e) => {
                let navLocation = "Top",
                  cleanedLinktxt = _this.innerText.trim().toLowerCase().replace(/ /g, '_'),
                  valueEvar37 = navLocation + "|" + cleanedLinktxt,
                  primaryMenuItemId = _this.closest('.wwww-main-nav > .nav-item').getAttribute("id"),
                  datastr = pageName + "|" + valueEvar37;
                if (primaryMenuItemId) {
                  let primaryMenuName = primaryMenuItemId.replace("_menu_item", "");
                  let secondaryMenu = _this.closest('.menu-section').querySelector('.child-menu span:not([class])');
                  let secondaryMenuId = secondaryMenu ? secondaryMenu.innerText : '';
                  if (secondaryMenuId) {
                    valueEvar37 = navLocation + "|" + primaryMenuName + "|" + (secondaryMenuId + primaryMenuName) + "|" + cleanedLinktxt;
                  } else {
                    valueEvar37 = navLocation + "|" + primaryMenuName + "|" + cleanedLinktxt;
                  }
                  datastr = pageName + "|" + valueEvar37;
                }
                // Additional logic for unified menu
                if ((_this.closest("ul") && _this.closest("ul").classList.contains("flyout-menu-login")) || cleanedLinktxt == "login") {
                  valueEvar37 = navLocation + "|Login|" + cleanedLinktxt;
                  datastr = pageName + "|" + valueEvar37;
                }
                // TML 12-12-19: not sure what below block was originally for in the old tracking
                // the only place in the nav that has a .panel-heading element is in the login flyout
                // so I think this is only tracking links which did not come from inside the flyout, so
                // clicks linking to other logins are being exempted from tracking by this block.
                // I've refactored the selector to seek an accordionItemComponent parentage as that
                // seems to be the best way to detect these "alternate login links" here.
                // below if is to skip click tracking on collapse fly-out menu heading
                if (!_this.closest('.accordionItemComponent')) {
                  utils.addPageData("customlink", getNavLink(this));
                  utils.addBehavior("currenttopnavigationclicks");
                  utils.addPageData("user[0].profile[0].usertype", s.eVar14 ? s.eVar14 : "");
                  utils.addPageData("moduletracking", datastr);
                  utils.addPageData("customlink", valueEvar37);
                  utils.trackBehavior(datastr, ["topnavigationclicks", "customlink"], ["page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
                }
              })
            });
            */
        }


    }
    else { // new nav is absent
        /**
         * Tracking logic for the top navigation bar in WWW, SF-Live and Blog.
         */
        function trackLink(el){
            var navLocation = "Top";
            var _this = el;
            var linkTxt = _this.innerText.toLowerCase(),
              cleanedLinktxt = linkTxt.trim().replace(/ /g, '_'),
              valueEvar37 = navLocation + "|" + cleanedLinktxt,
              primaryMenuItem = _this.closest("li.primary-menu-item"),
              primaryMenuItemId = (primaryMenuItem)? primaryMenuItem.getAttribute('id') : '',
              datastr = pageName + "|" + valueEvar37;

            if (primaryMenuItemId) {
                var primaryMenuName = primaryMenuItemId.replace("_menu_item", "");
                var closestTabPane = _this.closest(".tab-pane");
                var secondaryMenuId = closestTabPane? closestTabPane.getAttribute("id") : "";
                if (secondaryMenuId) {
                    valueEvar37 = navLocation + "|" + primaryMenuName + "|" + secondaryMenuId.replace("_" + primaryMenuName, "") + "|" + cleanedLinktxt;
                } else {
                    valueEvar37 = navLocation + "|" + primaryMenuName + "|" + cleanedLinktxt;
                }
                datastr = pageName + "|" + valueEvar37;
            }

            // Additional logic for unified menu
            if ((_this.closest("ul") && _this.closest("ul").classList.contains("flyout-menu-login")) || cleanedLinktxt === "login") {
                valueEvar37 = navLocation + "|Login|" + cleanedLinktxt;
                datastr = pageName + "|" + valueEvar37;
            }

            // below if to skip click tracking on collapse fly-out menu heading
            if (!_this.parentElement.classList.contains('panel-heading')) {
                utils.addPageData("user[0].profile[0].usertype", vp.getType() ? vp.getType() : "");
                utils.addPageData("moduletracking", datastr);
                utils.addPageData("customlink", valueEvar37);

                utils.trackBehavior(datastr, ["topnavigationclicks", "customlink"], ["page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
            }
        }
        trackGlobalTopNavBar = function () {
            var navLinks = document.querySelectorAll('.globalNavigationBar a, .skinnynav a');
            for (var i = 0; i < navLinks.length; i++) {
                navLinks[i].addEventListener('click',function(e){
                    trackLink(e.target);
                })
            }
        };
    }

    /**
     * Tracking logic for the navigation bars (Top, left and bottom) in WWW, SF-Live and Blog.
     * Basically this adds onClicks event listeners to all the navigation bars available in SFDC.
     */
    utils.components.trackGlobalNavBar = function () {
        trackGlobalTopNavBar();
        trackLeftNavBar();
        trackBottomNavBar();
        trackVideoTopNavBar();
        trackExpandableNavBar();
        addWWWTrack();
    }
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined')  { return; }

    var utils = digitalData.util,
        pdfSelector = 'div[data-href*=".pdf"], a[href*=".pdf"]';

    /**
     * This is a simplified version of the Page.isConfirmation()
     * which decoupled from any form related logic/exception.
     * @param pageName
     * @returns {boolean}
     */
    function isConfPage(pageName) {
        return (pageName.indexOf(':conf:') !== -1) || (pageName.indexOf('[conf]') !== -1) || (Util.endsWith(pageName, 'conf'));
    }

    /**
     * Given the href/download url of a pdf resource, return the pdf name.
     * Ex. input: "https://c1.sfdcstatic.com/content/dam/web/en_us/www/documents/white-papers/marketing-performance-optimization.pdf"
     * Ex. output: "marketing-performance-optimization"
     * @param href {string}
     * @returns {string}
     */
    function getPDFName(href) {
        // use regex to test for pdf name pattern
        var pdfNameRegex = new RegExp('^[https:\/\/]?.*\/(.*).pdf'),
            test = pdfNameRegex.exec(href);
        // return filename if test succeeded, otherwise return null
        return test != null && test.length > 1 ? test[1] : null;
    
    }

    /**
     * Method to capture pdf href resource existing on the page and store the pdf name to digitalData page object.
     */
    utils.components.trackPDFImpression = function() {
        // Get the pdf resource element.
        var pdfElement = document.querySelector(pdfSelector);
        // Only populate dD element when it's on a page that contains "conf".
        if (pdfElement && typeof Page !== 'undefined' && isConfPage(Page.getName())){
            var pdfName = getPDFName(pdfElement.dataset.href ? pdfElement.dataset.href : pdfElement.href);
            if (pdfName) {
                utils.addPageData('pdfname', pdfName);
            }
        }
    };
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
        twitterStr = 'twitter', //twitter is supposed to be lowercase
        facebookStr = 'Facebook',
        linkedinStr = 'LinkedIn';

    function trackSocialShares(socialstring) {
        utils.addPageData("customlink", "Social Sharing Click");
        utils.addPageData("sharechannel", socialstring);
        utils.trackBehavior("Social Sharing Click", ["socialshares", "customlink"], ["page.pagename", "page.segment", "page.cloud", "user[0].profile[0].usertype", "page.customlink", "page.sharechannel"])
    }

    utils.components.trackSocial = function () {
        if (Page.isBlog()) {
            document.addEventListener('click', function(event){
                var socialstring = event.target && event.target.parentElement && event.target.parentElement.getAttribute('onclick');
                // no need to go forward if onclick attribute is undefined or not for social sharing
                if (socialstring && socialstring.indexOf('SfdcWwwBase.socialshare') === 0) {
                    socialstring = socialstring.substring(0, socialstring.indexOf("("));
                    socialstring = socialstring.split('.').pop();
                    if (socialstring) {
                        if (socialstring === "linkedin") {
                            socialstring = linkedinStr;
                        } else if (socialstring === "facebook") {
                            socialstring = facebookStr;
                        } else if (socialstring === "twitter") {
                            socialstring = twitterStr;
                        }
                        trackSocialShares(socialstring);
                    }
                }
            });
        } else {
            //resource and other pages
            document.addEventListener('click', function(event){
                var imageEl = event.target, socialstring = '' , imageElClass = imageEl.classList ;
                if (imageEl.getAttribute("src") && imageElClass && imageElClass.contains("salesforce-social-icon")) {
                    if (imageEl.getAttribute("src").includes("linkedin") ) {
                        socialstring = linkedinStr;
                    } else if ( imageEl.getAttribute("src").includes("twitter")) {
                        socialstring = twitterStr;
                    } else if ( imageEl.getAttribute("src").includes("facebook")) {
                        socialstring = facebookStr;
                    }
                }
                if (socialstring) {
                    trackSocialShares(socialstring);
                }
            });
        }
    }

}());

//TODO: Refactor this to remove jQuery usage when moving to webpack
(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page,
        $body = $('body'),
        pdfSelector = 'div[data-href*=".pdf"], a[href*=".pdf"]',
        accordionSelector = '.accordionContainer .panel .panel-heading a',
        dropdownSelector = '.dropdown-menu li a.dropdown-menu-item',
        trailmapSessionSelector = '.trailmaps-sessionlist-container .body-title a',
        regionSelector = '.region-selector_content .genericLinkListComponent .generic-links a',
        scrollableNavSelector = '.scrollable-nav .nav-pills a',
        authoredCustomLinkSelector = 'a[data-qe^="TRACK_CUSTOMLINK_"],img[data-qe^="TRACK_CUSTOMLINK_"],div[data-qe^="TRACK_CUSTOMLINK_"]',
        hotspotSelector = 'div[data-qe^="Hotspot_"]';

    function trackCustomLinkClick(customLink, moduleStr) {
        // add customlink to page data
        utils.addPageData("customlink", customLink);
        // add module tracking to page data
        utils.addPageData("moduletracking", moduleStr);
        // track the behavior using digital data's new trackBehavior function
        utils.trackBehavior("Custom Link Click", ["customlink"], ["page.pagename", "page.segment", "page.cloud", "page.moduletracking", "user[0].profile[0].usertype", "page.customlink"]);
    }

    utils.components.trackCustomLinkClicks = function () {

        // tracking PDFs as pages
        $(pdfSelector).on('click', function () {
            var clickEl = this, prevpageval, oldpagename;
            var downloadUrl = clickEl.dataset.href ? clickEl.dataset.href.toLowerCase() : clickEl.href.toLowerCase();
            downloadUrl = pageData.server + ":" + pageData.sitesection + ":file:" + downloadUrl;
            prevpageval = Page.setPrevious() ? Page.setPrevious() : "[NO PREVIOUS PAGE AVAILABLE]";
            oldpagename = pageData.pagename;

            digitalData.page = pageData;
        });

        // click tracking for accordions
        $body.on('click', accordionSelector, function () {
            var clickEl = this,
                customLink = '',
                moduleStr = '';
            //check for collapsed class (avoid duplicate tracking on closing accordion)
            if (this.matches('.collapsed')) {
                var panelTitle = clickEl.querySelector('.panel-title').innerText.trim();
                //try another method to get title, just in case
                if (panelTitle === '') {
                    panelTitle = clickEl.innerText.trim();
                }
                if (panelTitle !== '') {
                    customLink = panelTitle;
                    moduleStr = pageData.pagename + "|accordions|" + panelTitle;
                    trackCustomLinkClick(customLink, moduleStr);
                }
            }
        });

        // click tracking for event page dropdown (ex. trailmap selection)
        $(dropdownSelector).on('click', function(){
            var clickEl = this,
                moduleStr = '',
                userText = clickEl.innerText.trim();

            if (userText) {
                userText = "Custom Link Click|Trail Maps|" + userText;
                moduleStr = pageData.pagename + '|' + userText;
                trackCustomLinkClick(userText, moduleStr);
            }
        });

        $('#mainContent').on('click', trailmapSessionSelector, function(){
            var clickEl = this,
                customLink = '',
                moduleStr = '',
                userText = clickEl.textContent;

            if (userText) {
                customLink = "Custom Link Click|Trail Maps|" + userText;
                moduleStr = pageData.pagename + '|' + customLink;
                trackCustomLinkClick(customLink, moduleStr);
            }
        });

        // click tracking for region selector
        $body.on('click', regionSelector, function () {
            var clickEl = this,
                customLink = '',
                moduleStr = '',
                headerEl = document.querySelector('header'),
                position = headerEl.contains(clickEl) ? 'Header' : 'Footer',
                linkID = clickEl.parentNode.innerText.trim();

            if (linkID !== '') {
                customLink = "RegionSelector|" + position + "|" + linkID;
                moduleStr = pageData.pagename + "|RegionSelector|" + position + "|" + linkID;
                trackCustomLinkClick(customLink, moduleStr);
            }
        });

        // click tracking for scrollable nav
        $(scrollableNavSelector).on('click', function () {
            var clickEl = this,
                customLink = '',
                moduleStr = '',
                linkText = clickEl.innerText;

            if (linkText) {
                linkText = linkText.toLowerCase().trim();
                customLink = "Scrollable_Nav|" + linkText;
                moduleStr = pageData.pagename + "|Scrollable_Nav|" + linkText;
                trackCustomLinkClick(customLink, moduleStr);
            }
        });

        // click tracking for authored TRACK_CUSTOMLINK tracking
        $body.on('click', authoredCustomLinkSelector, function () {
            var clickEl = this,
                customLink = '',
                moduleStr = '',
                linkID = clickEl.dataset.qe.replace("TRACK_CUSTOMLINK_", "").trim();

            if (linkID !== '') {
                customLink = linkID;
                moduleStr = pageData.pagename + "|customLink|" + linkID;
                trackCustomLinkClick(customLink, moduleStr);
            }
        });

        // click tracking for 'hotspot'
        $(hotspotSelector).on('click', function () {
            var clickeEl = this,
                customLink = '',
                moduleStr = '',
                linkID = clickeEl.dataset.qe.replace("Hotspot_", "").trim();

            if (linkID !== '') {
                customLink = linkID;
                moduleStr = pageData.pagename + "|Hotspot|" + linkID;
                trackCustomLinkClick(customLink, moduleStr);
            }
        });
    }
}());

//TODO: Refactor this to remove jQuery usage when moving to webpack
(function() {
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page;

    /**
     * Method to track specific project modules live in blogs, sflive and www.
     * @param obj
     * @param applicationType {String}
     */
    function trackModules(obj, applicationType) {
        /*
            #header a       -> header
            #nav a          -> topnav
            #footer a       -> footer
            #seo-container a    -> seo
        */
        var module = '';
        try {
            switch (applicationType) {
                case "blogs":
                    (function ($, obj) {
                        $(obj).parentsUntil('.page-wrap').each(function () {
                            var $this = $(this), id = $this.attr('id') || '', css = $this.attr('class') || '';
                            if (css.indexOf('header-main') > -1) {
                                module = 'topnav';
                            } else if (id === 'blogspotlightwrap') {
                                module = 'grid-row-1';
                            } else if (css === 'container-fluid container-width-md top-20') {
                                module = 'grid-row-2';
                            } else if (css === 'footer') {
                                module = 'footer';
                            }
                            if (module) {
                                return false;
                            }
                        });
                    })($, obj);
                    break;
                case "sflive":
                    (function ($, obj) {
                        $(obj).parentsUntil('body').each(function () {
                            var $this = $(this), css = $this.attr('class') || '';
                            if (css.indexOf('header-container') > -1) {
                                module = 'topnav';
                            } else if (css === 'bottom') {
                                module = 'footer';
                            } else if ($this.parent().get(0).className.indexOf('content-container') > -1) {
                                module = 'grid-row-' + ($(this).index() + 1);
                            }
                            if (module) {
                                return false;
                            }
                        });
                    })($, obj);
                    break;
                default:
                    (function ($, obj) {
                        // This is an extremely ugly hack.
                        var parentsUntilObjInclSelf = $(obj).parentsUntil('body').addBack(),
                          selfUpToParents = $(parentsUntilObjInclSelf).get().reverse();
                        $(selfUpToParents).each(function () {
                            var $this = $(this), id = $this.attr('id') || '', css = $this.attr('class') || '';
                            if (id.indexOf('products_expand_par') > -1) {
                                module = 'topnav-products-menu';
                            } else if (css.indexOf('navbar-expandable-container') > -1 || (css.indexOf('overlayMenuItem') > -1) || css.indexOf('globalNavigationBarConsolidated') > -1) {
                                module = 'topnav';
                            } else if (id === 'navigation_left' || (css.indexOf('leftnav') > -1)) { //will need to update this one; just a placeholder
                                module = 'left-nav';
                            } else if (css.indexOf('navbar-header-container') > -1) {
                                module = 'header';
                            } else if (css === 'bottom') {
                                module = 'footer';
                            } else if ($this.parent().get(0).className.indexOf('content-container') > -1) {
                                module = 'grid-row-' + ($(this).index() + 1);
                            }
                            if (module) {
                                return false;
                            }
                        });
                    })($, obj);
            }
        } catch (ex) {
        }

        if (module) {
            utils.writeCookie('v32', pageData.pagename + '|' + module);
        }
    }

    /**
     * Function to track custom plugins, particularly modules lives on blogs, sflive and www.
     */
    utils.components.doCustomPlugins = function () {
        // module tracking
        if (Page.isBlog()) {
            $('header a, .page-content a').click(function () {
                trackModules(this, "blogs");
            });
        } else if (Page.isSFLive()) {
            $('header.header-container a, footer.bottom a, .content-container a').click(function () {
                trackModules(this, "sflive");
            });
        } else {
            $('header.header-container a, footer.bottom a, .content-container a, .leftnav a').click(function () {
                trackModules(this, "www");
            });
        }
        //TO-DO ask Blaise & Alex if they plan on having SEO module
    };
}());
//TODO: Refactor this to remove jQuery usage when moving to webpack
(function () {
    'use strict';

    if (typeof digitalData === 'undefined') { return; }

    var utils = digitalData.util,
        internalDriverElSelector = 'a[href*="?d="], a[href*="&d="], div.thumbnail-linked[data-href*="?d="], div.thumbnail-linked[data-href*="&d="]';

    /**
     * Help function to get path from href link with a IE patch.
     * @param link {string} The href link
     * @returns {string}
     */
    function getPathFromLink(link) {
        var path = '', anchorEl;
        if (link) {
            anchorEl = document.createElement('a');
            anchorEl.href = link;
            //make sure the path starts with leading '/', IE patch
            if (anchorEl.protocol && anchorEl.host && anchorEl.pathname) {
                path = [anchorEl.protocol, '//', anchorEl.host, anchorEl.pathname.replace(/(^\/?)/, "/")].join('');
            }
        }
        return path;
    }

    /**
     * Help function to check if the click event is happening on .salesforce.com
     * Also check if the pointed href link is also under .salesforce.com
     *
     * @param eventObj {event} The click event
     * @param link {string} The href link
     * @returns {boolean}
     */
    function isInternalLink(eventObj, link) {
        var tempElement;
        var returnVal = false;
        // the element is an anchor.
        if (eventObj.currentTarget.hostname) {
            if (eventObj.currentTarget.hostname.indexOf('.salesforce.com') > -1) {
                returnVal = true;
            }
        } else if (link) {
            if (link.indexOf('/') === 0) {
                returnVal = true;
            } else {
                tempElement = document.createElement('a');
                tempElement.href = link;
                if (tempElement.hostname.indexOf('.salesforce.com') > -1) {
                    returnVal = true;
                }
            }
        }
        return returnVal;
    }

    /**
     * Method to get all the internal drivers on the page from CTAs
     * And add them to digitalData
     */
    function getInternalDrivers() {
        var driver = Page.getDriver();
        //e-commerce report/driver CTR
        if (driver && driver.type === "internal") {
            utils.addProduct(driver.id, "intdriverclick");
        }

        // Event Use Case 2 - Internal Driver Click
        utils.addDrivers(utils.getCTAs());
    }

    /**
     * This method is to track the click event happens on CTAs with a internal driver attached.
     */
    utils.components.trackInternalDriver = function () {
        getInternalDrivers();
        $('body').on('click', internalDriverElSelector, function (e) {
            var clickEl = this,
                CTAtext = clickEl.innerText.trim(),
                link = clickEl.href ? clickEl.href : clickEl.dataset.href,
                path = getPathFromLink(link),
                driver = Util.convert15To18(Util.getParam('d', link));

            utils.addPageData('internalclickpath', path);
            utils.addPageData('internalclickdriver', driver);
            utils.addPageData('internalclicktext', CTAtext);

            // only to pages on www.salesforce.com
            if (isInternalLink(e, link)) {
                utils.addBehavior('internaldriverclicks');
                // prevent double tracking for nested clickable elements
                e.stopPropagation();
            }
        });
    }
}());

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
      typeof Page === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page;

    /**
     *  This function tracks outbound link calls to Trailhead via a Custom Link call
     *  We do not want to send any additional eVars/events besides eVar37, event66
     */
    utils.components.trackTrailheadLinks = function() {
        var trailheadLinkSelector = "a[href^='https://trailhead.salesforce.com'], div.thumbnail-linked[data-href^='https://trailhead.salesforce.com']";
        var currentPage = pageData.pagename || Page.getName();
        document.addEventListener('click', function(e){
            if (e.target && e.target.matches(trailheadLinkSelector)) {
                utils.trackBehavior("Trailhead_" + currentPage, ['customlink'], ['page.customlink']);
            }
        });
    }
}());

/**
 * This feature is to track the impression of the personalized section loaded on the page.
 * Each section is considered as a individual "offer"
 * Also track the content campaign and the CTAs loaded inside the content.
 * It is a tracking feature consumed by both AA and GA.
 *
 * @author sitian-lu
 * @since 2019-08-26
 */

(function(){
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Page === 'undefined' ||
        typeof Util === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page,
        userProfile = digitalData.user[0].profile[0],
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        offerCollection = [];

    /**
     * Class for dynamic loaded offer section.
     * @param divId {String} the div ID of the loading section.
     * @constructor
     */
    function DynamicOffer(divId) {
        this.divId = divId;
        this.observer = null;
        this.campaignUrl = "";
        this.driverIdList = [];
        this.formDriverIdList = [];
    }

    /**
     * Help method to get all offer section parent div IDs.
     * @returns {[]}
     */
    function getAllDivId() {
        var allDivIds = [];
        offerCollection.forEach(function(offerObj){
            allDivIds.push(offerObj.divId);
        });
        return allDivIds;
    }

    /**
     * Help method to get all the internal driver IDs from the offer collection.
     * Also remove duplicated driver IDs if there is any.
     * @returns {*[]}
     */
    function getAllFormDriverId() {
        var allDriverIds = [];
        offerCollection.forEach(function(offerObj){
            allDriverIds = allDriverIds.concat(offerObj.formDriverIdList);
        });
        // Remove duplicated driver IDs
        allDriverIds = allDriverIds.filter(function (item, pos) {return allDriverIds.indexOf(item) === pos});
        return allDriverIds;
    }

    /**
     * Help method to get all the campaign IDs from the offer collection.
     * @returns {*[]}
     */
    function getAllCampaignUrl() {
        var allCampaignUrls = [];
        offerCollection.forEach(function(offerObj){
            allCampaignUrls.push(offerObj.campaignUrl);
        });
        return allCampaignUrls;
    }

    /**
     * Function to init a mutation observer instance that listens for DOM elements get added under the given obj
     * Execute callback when the mutation catches DOM updates.
     * @param el {HTMLElement}
     * @param offerObj {DynamicOffer}
     * @param callback {function}
     */
    function initMutationObserver(el, offerObj, callback) {
        if (MutationObserver) {
            // Have the observer observe campaign divs for changes in children
            var obs = new MutationObserver(callback);
            offerObj.observer = obs;
            obs.observe(el, { childList:true, subtree:true });
        } else {
            el.addEventListener('DOMNodeInserted', callback, false);
        }
    }

    /**
     * Callback function to handle the personalized mutation change.
     * For each mutated node:
     * - First check if the added node is indeed a personalized section which contains a campaign URL. Then:
     *      1. Capture the singular outer wrap campaign URL path.
     *      2. Capture all the CTAs loaded inside the node that contains a internal driver.
     * @param mutation
     * @param offerObj {DynamicOffer}
     */
    function mutationHandler(mutation, offerObj) {
        var mutationNodes = mutation.addedNodes;
        if (mutationNodes && mutationNodes.length > 0) {
            var campaignNode = mutationNodes[0].parentNode;
            var campaignUrl = captureCampaign(campaignNode);
            if(campaignUrl){
                offerObj.campaignUrl = campaignUrl;
                var driverListSet = captureAnchors(campaignNode);
                offerObj.driverIdList = offerObj.driverIdList.concat(driverListSet.driverIds);
                offerObj.formDriverIdList = offerObj.formDriverIdList.concat(driverListSet.formDriverIds);
                offerObj.observer.disconnect();
                offerCollection.push(offerObj);
            }
        }
    }

    /**
     * Method to capture the campaign url of the added node. Then format it, and persis to a list.
     * @param nodeEl {HTMLElement}
     */
    function captureCampaign(nodeEl) {
        var campaignPath = nodeEl.dataset.campaignUrl;
        if (campaignPath) {
            campaignPath = campaignPath.replace("|content|campaigns|","").replace("|_jcr_content|par", "");
            return campaignPath;
        }
        return "";
    }

    /**
     * Method to capture all the anchor links inside the given node that contains a "d" param (internal driver id).
     * Store all of them in the global Page.clientContextCTAs list.
     * @param nodeEl {HTMLElement}
     */
    function captureAnchors(nodeEl) {
        var anchorEls = nodeEl.querySelectorAll('a'),
            driverIdList = [],
            formDriverIdList = [];

        anchorEls.forEach(function(anchorEl) {
            // If the anchorEl is not visible, stop proceeding
            if (!(anchorEl.offsetWidth > 0 && anchorEl.offsetHeight > 0)) { return; }
            // Get href and "d" param from the anchor element
            var hrefLink = Util.getHref(anchorEl),
                driverId = Util.getParam('d', hrefLink);
            // If the anchor doesn't have a href link or the link doesn't have a "d" param, stop proceeding
            if (!hrefLink || !driverId) { return; }

            var internalDriverId = driverId.length === 15 ? Util.convert15To18(driverId) : driverId;
            driverIdList.push(internalDriverId);
            // Only capture drivers that lead to a form page. Unless it's on blog page.
            if (hrefLink.indexOf('/form/') > -1 || (Page && Page.isBlog())) {
                formDriverIdList.push(internalDriverId);
            }
        });
        return { driverIds: driverIdList, formDriverIds: formDriverIdList };
    }

    /**
     * Set the targeting user profile.
     */
    function setTargetingProfile() {
        var legacyProfile = userProfile,
            dbData = legacyProfile.formattedDB,
            noDataStr = '[NO DATA]';
        if (dbData){
            legacyProfile.targetingcompanyindustry = 'DB=' + (dbData.ind || noDataStr);
            legacyProfile.targetingcompanyname = [
                'DB=' + (dbData.name || noDataStr),
                'SFDC=' + (vp.getCompanyName() || noDataStr)
            ].join('|');
            legacyProfile.targetingaudience = 'DB=' + (dbData.aud || noDataStr);
        }
    }

    /**
     * The actual tracking logic for dynamic content impression.
     * Grab all the required data point and trigger the analytics event.
     */
    function trackDynamicContent() {
        var products = getAllFormDriverId(),
            dbLocale = '';
        if (userProfile && userProfile.db && userProfile.db.city && userProfile.db.state) {
            dbLocale = userProfile.db.city + "|" + userProfile.db.state;
        }
        // For GA
        utils.addPageData('dynamicoffercollection', offerCollection);
        utils.addBehavior('dynamicofferimpression');
    }

    /**
     * The public main method to track dynamic personalized content impression that get loaded on page load.
     * The logic uses a mutation observer to monitor the change of the DOMs that are supposed to get dynamic content.
     * For each dynamic loaded content, capture its campaign url and inner internal driver CTAs.
     */
    utils.components.trackDynamicContentImpressions = function() {
        // neither CC nor aem/ats works on OCMS migrated pages
        if (typeof Modernizr === 'object' || typeof Page === 'undefined') { return; }

        // Get all the divs that are supposed to get dynamic personalized content.
        var teaserEls = document.querySelectorAll('.campaign'),
          loadedEventStr = 'targetedContentLoaded';

        // Monitor each div for DOM changes with mutation observer.
        teaserEls.forEach(function(teaserEl) {
            var offerObj = new DynamicOffer(teaserEl.id);
            initMutationObserver(teaserEl, offerObj, function(mutations) {
                // Dynamic offer object to hold all the related info of this dynamic content section
                mutations.forEach(function(mutation){
                    mutationHandler(mutation, offerObj);
                });

                // If it's the last of the mutation load
                if (offerCollection.length === teaserEls.length) {
                    // Emit an event to indicate the targeted content has loaded
                    document.dispatchEvent(new CustomEvent(loadedEventStr, {'detail': {'targetDivs': getAllDivId()}}));
                }
            });
        });

        // Post content loading handling
        document.addEventListener(loadedEventStr, function() {
            setTargetingProfile();
            trackDynamicContent();
        });
    };
}());

//TODO: Refactor this to remove jQuery usage when moving to webpack
(function() {
    'use strict';

    if (typeof digitalData === 'undefined' ||
        typeof Util === 'undefined') { return; }

    var utils = digitalData.util,
        pageData = digitalData.page,
        userProfile = digitalData.user[0].profile[0];

    try {
        // is the current page an SMB page?
        function isSMBPage() {
            var pagename = pageData.pagename;
            return pagename.indexOf("SFDC:us:solutions:small-business-solutions") !== -1 ||
                pagename.indexOf("SFDC:us:solutions:essentials") !== -1;
        }

        // does the digitalData profile show that user has smb inference?
        // public for use with other JS
        utils.hasSMBInference = function() {
            return userProfile.inference &&
                userProfile.inference.smb;
        };

        // set inference field on digitalData (get the record from localstorage if it exists, or assign an empty object)
        userProfile.inference = (function() {
          var inference = localStorage.getItem('inference') || '{}';
          if(!Util.isValidJson(inference)) {
              inference = '{}';
              localStorage.removeItem('inference');
          }
          return JSON.parse(inference);
        })();


        /**
         * Keeps a record of whether or not the visitor has visited one of the SMB pages defined in isSMBPage()
         * Used for optimizely/personalization and analytics
         */        
        utils.components.trackSMBInference = function() {       
          // if the current page is an SMB page
          if (isSMBPage()) {
            // set
            // could set the pagename here and be able to breakdown eVars by the last SMB page seen?
            userProfile.inference.smb = true;

            //don't update storage until functional preference is set
            $.when(SfdcWwwBase.gdpr.hasFunctional).done(function(){
              localStorage.setItem('inference', JSON.stringify(userProfile.inference));
            });
          }

          // track
          // could use userProfile.inference.smb as the value, and keep last SMB pagename for conversion breakdown
          if (utils.hasSMBInference()) {
            userProfile.hassmbinference = 'true';
          }
        }
      
    } catch(error) {
        // do nothing
    }
}());
(function(){
    'use strict';

    if (typeof digitalData === 'undefined' || typeof vp === 'undefined') {
        return;
    }

    var utils = digitalData.util,
        localStore = digitalData.localStorage,
        commonPoints = ['podcastname', 'episodename', 'episodeid'],
        /**
         * Adds podcast data to digitalData.page and returns event data points array
         * @param dataMap of page.media.* elements to Casted message payload elements
         * @param array of relevant digitalData element names under page.media for this event
         * @returns {[]} Array filled with digitalData elements which store podcast values
         */
        addPodcastData = function (dataMap, array) {
            var mediaData = {},
                dataPoints = []; // This builds the array for tracked data

            array.forEach(function(prop){
                if (prop in dataMap) {
                    // Add the data
                    mediaData[prop] = dataMap[prop];
                    // build the event dataPoints array
                    dataPoints.push(['page','media',prop].join('.'));
                }
            });
            utils.addPageData('media', mediaData);
            // Return the array to use within event handler
            return dataPoints;
        },
        /**
         * Object containing casted event and their handlers
         * @type {{castedEpisodeReady: castedEpisodeReady, episodePlaybackStarted: episodePlaybackStarted, takeawayClicked: takeawayClicked, episodePlaybackStopped: episodePlaybackStopped, playbackProgress: playbackProgress}}
         */
        castedEventsAnalytics = {
            'castedEpisodeReady': function (data) {
                var dataPoints = addPodcastData(data, commonPoints.concat(['episodelength']));
                utils.trackBehavior('podcast-load', ['podcast_load'], dataPoints);
            },
            'episodePlaybackStarted': function (data) {
                var dataPoints = addPodcastData(data, commonPoints.concat(['episodelength', 'episodestart']));
                var episodeid = data['episodeid'];
                if (vp.isNewSession() && ('podcastepisodelist' in localStore)
                    && !localStore['podcastepisodelist'].includes(episodeid)) {
                    localStore['podcastepisodelist'].push(episodeid);
                    utils.saveLocalStorage();
                    utils.trackBehavior('podcast-first-play', ['podcast_first_play'], dataPoints);
                } else {
                    utils.trackBehavior('podcast-play', ['podcast_play'], dataPoints);
                }
            },
            'episodePlaybackStopped': function (data) {
                var dataPoints = addPodcastData(data, commonPoints.concat(['episodelength', 'episodestart', 'episodestop']));
                utils.trackBehavior('podcast-stop', ['podcast_stop'], dataPoints);
            },
            'playbackProgress': function (data) {
                var dataPoints = addPodcastData(data, commonPoints.concat(['episodelength', 'episodestart', 'episodecurrenttime', 'episodepercent']));
                utils.trackBehavior('podcast-percent', ['podcast_percent'], dataPoints);
            },
            'takeawayClicked': function (data) {
                var dataPoints = addPodcastData(data, commonPoints.concat(['takeawayname', 'takeawayid', 'takeawaystart', 'takeawayend']));
                utils.trackBehavior('takeaway-click', ['takeaway_click'], dataPoints);
            }
        },
        castedEvents = {
            'castedSizeUpdate': function (payload) {
                if(isNaN(parseInt(payload.height))){
                    return;
                }
                document.getElementById('casted-playlist-embed').height = parseInt(payload.height) + 'px';
            }
        },
        /**
         * receiveMessage listens for messages dispatched via Window.postMessage()
         * method, which safely enables cross-origin communication between a page
         * and an iframe embedded within it.
         * @param message is the object sent through Window.postMessage() method
         */
        receiveMessage = function (message) {
            // Ensure event is coming from Casted
            if (message.origin !== 'https://podcasts.salesforce.com') return;
            // Handle events
            if (!message.data || !message.data.event || !message.data.payload) return;

            var payloadData = message.data.payload;

            if(message.data.event in castedEvents){
                castedEvents[message.data.event](payloadData);
            }

            if (message.data.event in castedEventsAnalytics) {
                var dataMap = {
                    episodestart: payloadData.startTime,
                    episodestop: payloadData.stopTime,
                    episodecurrenttime: payloadData.currentTime,
                    episodepercent: payloadData.progress
                };
                if (payloadData.podcast) {
                    dataMap.podcastname = payloadData.podcast.name;
                }
                if (payloadData.episode) {
                    dataMap.episodename = payloadData.episode.name;
                    dataMap.episodeid = payloadData.episode.id;
                    dataMap.episodelength = payloadData.episode.duration;
                }
                if (payloadData.takeaway) {
                    dataMap.takeawayname = payloadData.takeaway.name;
                    dataMap.takeawayid = payloadData.takeaway.id;
                    dataMap.takeawaystart = payloadData.takeaway.startTime;
                    dataMap.takeawayend = payloadData.takeaway.endTime;
                }
                castedEventsAnalytics[message.data.event](dataMap);
            }
        };

    /**
     * Conditionally starts tracking Podcast component events
     */
    utils.components.trackPodcast = function () {
        //check if podcast component is on page
        if (document.querySelector('.podcastComponent') === null) {
            return;
        }

        //Set podcastepisodelist in localStorage if this is the first page with podcast that user is visiting
        //Reset podcastepisodelist in localStorage at beginning of New Visitor Session
        if (vp.isNewSession() || !('podcastepisodelist' in localStore)) {
            localStore['podcastepisodelist'] = [];
            utils.saveLocalStorage();
        }

        // Listen for event's posted to window from child iframe
        window.addEventListener('message', receiveMessage);
    }
}());

'use strict';

/**
 * W3C - digitalData object - contains all business logic for tracking app/setting vars and events
 * The ultimate source of truth for all web analytics logic, method and data points
**/
var digitalData = digitalData || {},
  SfdcWwwBase = SfdcWwwBase || {};

(function () {
  var utils = digitalData.util,
    trackComponents = utils.components;

  digitalData.initLocalStorage();

  trackComponents.trackPage();
  trackComponents.trackLegacyProfile();
  trackComponents.trackDriver();
  trackComponents.trackFormV2();
  trackComponents.doCustomPlugins();
  trackComponents.trackDynamicContentImpressions();
  trackComponents.addIntegrations();
  trackComponents.trackLiveChat();
  trackComponents.trackSMBInference();
  trackComponents.trackTrailheadLinks();

  $(document).ready(function () {
    trackComponents.trackConverting();
    trackComponents.trackFormConfPage();
    trackComponents.trackFeedbackBtn();
    trackComponents.trackGlobalNavBar();
    trackComponents.trackPDFImpression();
    trackComponents.trackCustomLinkClicks();
    trackComponents.trackInternalDriver();
    trackComponents.trackPodcast();
  });

  $(window).load(function () {
    trackComponents.trackContactDock();
    trackComponents.trackSocial();
  });
}());

(function(){
  if(!window.optimizelyEdge || !SfdcWwwBase.gdpr.isAdvertisingActive())
    return;

  window.optlyHelper = (function(){
    return {
      v: '1.26',
      getCookieValue: function(a) {
        var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
        return b ? b.pop() : '';
      },
      setCookieValue: function(cname, cvalue, exdays){
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = 'expires='+ d.toUTCString();
        document.cookie = cname + '=' + cvalue + ';' + expires + ';domain=.{salesforce}.com;path=/';
      },
      activeExperiments: {}
    };
  })();
  // Module to save all Experiment Information, also from redirect cookie
  const getExperimentInfo = (function(){
    let activeExperiments,
      redirectCookie,
      redirectVariables;
    function _getCookieValue(a) {
      var b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)');
      return b ? b.pop() : '';
    }
    function _getQueryVariable(cookieValue) {
      var query = {};
      var pairs = (cookieValue[0] === '?' ? cookieValue.substr(1) : cookieValue).split('&');
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      }
      return query;
    }
    function _writeRedirectInfo(r){
      optlyHelper.redirectInfo = r;
    }
    function init(){
      activeExperiments = window.optimizelyEdge.get('state').getActiveExperiments();
      redirectCookie = _getCookieValue('optimizelyRedirectData');
      // Init redirect object
      // optlyHelper.redirectInfo = {};
      if (redirectCookie.length > 0) {
        redirectVariables = _getQueryVariable(redirectCookie);
        if (redirectVariables.hasOwnProperty('r')){
          _writeRedirectInfo(redirectVariables);
        }
        // Override Referrer of Page
        if (redirectVariables.hasOwnProperty('r') && redirectVariables.r.length > 0){
          Object.defineProperty(document, 'referrer', {get : function(){ return redirectVariables.r; }});
        }
        activeExperiments[redirectVariables.x] = {
          'id': redirectVariables.x,
          'variation': {
            'id': redirectVariables.v
          }
        };
      }
      optlyHelper.activeExperiments = activeExperiments;
    }
    return {
      init: init
    };
  })();
  // GA INTEGRATION MODULE
  const gaIntegration = (function(){
    var timeoutInterval = 100,
      maxWait = 10000,
      waited = 0,
      allActiveExperiments;
    function _sendGaEvent(decisionString){
      if(decisionString) {
        var prefix = 'tealium_0' + '.'; // Assign to ‘’ if no custom tracker
        window.ga(prefix + 'send', 'event', 'Optimizely', 'Assigned to Experiment', decisionString, {nonInteraction:true});
      }
    }
    // Needs to be customized for specific websites. Defines how we identify if GA is available
    function waitForGaEventApi(method) {
      if (window.ga && window.ga.getByName) {
        method();
      } else {
        if (waited < maxWait){
          setTimeout(function() {
            waited = waited + timeoutInterval;
            waitForGaEventApi(method);
          }, timeoutInterval);
        }
      }
    }
    function _getDecisionString(experimentInfo){
      return '(' + experimentInfo.id + ':' + experimentInfo.variation.id + ')';
    }
    function init(){
      waitForGaEventApi(function(){
        allActiveExperiments = optlyHelper.activeExperiments;

        for (var exp in allActiveExperiments) {
          if (allActiveExperiments.hasOwnProperty(exp)) {
            var experimentInfo = allActiveExperiments[exp];

            // Manage sending GA event
            var decisionString = _getDecisionString(experimentInfo);
            _sendGaEvent(decisionString);
          }
        }
      });
    }
    return {
      init: init,
      waitForGaEventApi: waitForGaEventApi
    };
  })();
  getExperimentInfo.init();
  gaIntegration.init();
})();

