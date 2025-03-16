window.__entryChunkLoaded = false;
        window.__onEntryLoaded = [];
        window.executeAfterEntryjsLoaded = function (callback) {
            if (window.__entryChunkLoaded) {
                callback();
            } else {
                window.__onEntryLoaded.push(callback);
            }
        }