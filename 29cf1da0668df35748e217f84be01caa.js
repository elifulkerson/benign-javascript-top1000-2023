try {
            window._pageTimings = window._pageTimings || {};
            window._pageTimings["TTJSStart"] = Math.round(performance.now());
        } catch (e) {
            console.error("Error in adding TTJSStart marker");
        }