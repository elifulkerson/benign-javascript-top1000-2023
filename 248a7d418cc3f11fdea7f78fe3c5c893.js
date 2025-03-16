var cam = cam || { opt: {} };
    var clcGamLoaderOptions = cam || { opt: {} };
    var opt = clcGamLoaderOptions.opt;

        opt.refresh = !1;
    opt.refreshInterval = 0;
    opt.sf = !1;
    opt.hb = !1;
    opt.ll = !0;
    opt.tlb_position = 0;
    opt.personalization_consent = !1;
    opt.targeting_consent = !1;
    opt.performance_consent = !1;

    opt.targeting = {Registered:['false']};
    opt.adReportEnabled = !1;
    opt.adReportUrl = '/ads/report-ad';
    opt.adReportText = 'Report this ad';
	opt.adReportFileTypeErrorMessage = 'Please select a PNG or JPG file.';
    opt.adReportFileSizeErrorMessage = 'The file must be under 2 MiB.';
	opt.adReportErrorText = 'Error uploading ad report.';
	opt.adReportThanksText = 'Thanks for your feedback. We’ll review this against our code of conduct and take action if necessary.';
    opt.adReportLoginExpiredMessage = 'Your login session has expired, please login and try again.';
    opt.adReportLoginErrorMessage = 'An error occurred when loading the report form - please try again';
	opt.adReportModalClass = 'js-ad-report';
    opt.requestGuid = 'b375652c-f6aa-4320-8fc6-a8ab69d10ea4';


    opt.targeting.TargetingConsent = ['False_Passive'];

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('dfptestads')) {
        const dfptestads = urlParams.get('dfptestads');
        opt.targeting.DfpTestAds = dfptestads;
    }