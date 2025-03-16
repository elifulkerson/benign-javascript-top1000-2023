var detailAttr = [];

        function setDetailAttributes(detailId, attr) {
            var names = {
                ci: 'cacheId',
                ts: 'thumbnailsSmall',
                tl: 'thumbnailsLarge',
                tz: 'thumbnailsZoom',
                mk: 'mainKeywords',
                mkl: 'mainKeywordsLabel',
                mks: 'mainKeywordsSponsor',
                dc: 'downloads',
                dfu: 'downloadFileUrl',
                dlu: 'downloadLandingUrl',
                diu: 'downloadLicenseUrl',
                aid: 'authorId',
                aname: 'authorName',
                auid: 'authorUserId',
                aavatar: 'authorAvatar',
                alink: 'authorLink',
                cd: 'creationDate',
                ca: 'creationAgo',
                ph: 'previewHeight',
                pw: 'previewWidth',
                al: 'attributionLink',
                at: 'attributionText',
                atr: 'authorTotalResources',
                kw: 'keywords',
                ct: 'comments',
                cl: 'likes',
                ls: 'selection',
                lp: 'premium',
                ptv: 'printTypeValue',
                pti: 'printTypeId',
                tp: 'typology',
				ris: 'ris',
				fe: 'freepikEditor',
				fs: 'freepikStories',
            }
            var link = document.getElementById("dtl-" + detailId);
            for (var k in attr) {
                link.dataset[names[k] || k] = attr[k];
            }
        }