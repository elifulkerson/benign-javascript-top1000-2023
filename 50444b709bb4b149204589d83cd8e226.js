(function(items){var countDisplayExtNews = function (items) {
    for (var i = 0, l = items.length; i < l; i++) {
        var id = items[i].getAttribute('data-d');
        if (id) {
            mr.counter('d' + id);
        }
    }
};
countDisplayExtNews(items);
mr.countDisplayExtNews = countDisplayExtNews;
})(mr.id('news:main:extend').children);