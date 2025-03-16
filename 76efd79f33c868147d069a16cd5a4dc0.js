/** Global hydration queue */
    window.bpHydration = window.bpHydration || [];

    /**
     * Adds hydration data for JavaScript modules in Blueprint. Any module/data combinations
     * passed into this function are used when modules instantiate themselves through the
     * {@link componentLoader} function.
     * 
     * @param {String} moduleName The name of the element/component/pattern the data applies to
     * @param {Object} [moduleData={}] Any data to be passed into the JavaScript module up instantiation
     **/
    function bpHydrate(moduleName, moduleData) {
        moduleData = moduleData || {};

        if (typeof moduleName === 'string') {
            const obj = {};
            obj[moduleName] = moduleData;

            window.bpHydration.push(obj);
        }
    }