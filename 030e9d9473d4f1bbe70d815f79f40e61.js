(function (window, mr) {
    if (mr._.STUCK_IN_POT) {
        ['first', 'second'].forEach(function (name) {
            var id = "informers-" + name;
            var block = mr.id(id);
            block.id = mr.locator.transform(id);
            block.className = mr.locator.transform('informers') + " " + mr.locator.transform("informers_" + name);
            mr.setBem(block, block.id);
        });
    }
})(window, mr);
splashRadar('informers', 1);