window.sfdcBase = window.sfdcBase || {};
    if (!sfdcBase.env) window.sfdcBase.env = ({
        'www.salesforce.com': 'PROD',
        'www-uat1.salesforce.com': 'UAT',
        'www-uat2.salesforce.com': 'UAT',
        'www-perf.salesforce.com': 'PERF',
        'www-qa1.salesforce.com': 'QA',
        'www-qa2.salesforce.com': 'QA',
        'www-int.salesforce.com': 'INT',
    })[location.hostname] ?? 'PROD';
    window.sfdcBase.locale="en-us";
    window.sfdcBase.chat = window.sfdcBase.chat || {};
    window.sfdcBase.chat.preventChat=false;