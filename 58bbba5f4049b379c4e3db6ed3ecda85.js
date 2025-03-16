WH.qsa('.news-pagination [aria-label]').forEach(button => {
            WH.News.addPaginationButtonTooltip(button);
        });