//Set Header Footer
        setHeaderFooter();

        // (Chitrajyothy news)
        articleList = getChitrajyothyArticles();
        setChitrajyothyTemplate(articleList, 'chitrajyothyNewsDiv', 9);

        //Optimize images
        optimizeImages();