function getLotameAudience() {
        var dartCC = "";
        if (typeof(ccauds) != 'undefined') {
            for (var cci = 0; cci < ccauds.Profile.Audiences.Audience.length; cci++) {
                if (cci > 0) dartCC += ",";
                dartCC += ccauds.Profile.Audiences.Audience[cci].abbr;
            }
        }
        return [dartCC];
    }