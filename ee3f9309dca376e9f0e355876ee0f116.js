window.__tcfapi('addEventListener', 2, function(tcData) {
        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
            window.__tcfapi('getCustomVendorConsents', 2, function(vendorConsents, success) {

                let vendorConsented = false;
                vendorConsents.consentedVendors.forEach(vendor => {
                    if (vendor && vendor._id === '5ee7add94c24944fdb5c5ac6') {
                        vendorConsented = true;
                    }
                });

                if (success && vendorConsented) {
                    const headEl = document.getElementsByTagName('head')[0];

                    for (let i=0; i < headEl.childNodes.length; i++) {
                        const isCommentNode = headEl.childNodes[i].nodeType === 8;
                        if (isCommentNode) {
                            const comment = headEl.childNodes[i].data.trim(),
                                outcommentedHotJarMatch = comment.match(/^HOTJAR/i)
                            ;
                            if (outcommentedHotJarMatch) {
                                const commentContent = comment.substring(outcommentedHotJarMatch[0].length + 1);
                                const scriptTag = document.createElement('script');
                                scriptTag.type = 'text/javascript';
                                scriptTag.text = commentContent;
                                headEl.appendChild(scriptTag);
                            }
                        }
                    }
                }
            });
            window.__tcfapi('removeEventListener', 2, function(success) {}, tcData.listenerId);
        }
    });