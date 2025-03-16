var linkType = 'baidu';
        var gameName = [
            {
                name: '堕落之主',
                linkName: '堕落之主'
            },{
                name: '刺客信条幻景',
                linkName: '刺客信条幻景'
            },{
                name: '2077DLC',
                linkName: '赛博朋克2077'
            },{
                name: '逸剑风云决',
                linkName: '逸剑风云决'
            },{
                name: '博德之门3',
                linkName: '博德之门3'
            },{
                name: '无尽地牢',
                linkName: '无尽地牢'
            },{
                name: '蜘蛛侠2',
                linkName: '漫威蜘蛛侠2'
            },{
                name: '天际线2',
                linkName: '城市天际线2'
            },{
                name: '心灵杀手2',
                linkName: '心灵杀手2'
            },{
                name: 'COD20',
                linkName: '使命召唤20现代战争3'
            }
                    ];
        var SearchHtm = '';
        var linkName = '';
        
        if (linkType == 'baidu') {
            linkName = 'https://www.baidu.com/s?ie=utf-8&wd=';
            $('#search-form .Sinput[name=q]').parent().attr('data-action','https://www.baidu.com/s?ie=utf-8');
        } else {
            linkName = 'http://soso.gamersky.com/cse/search?s=3068275339727451251&q=';
            $('#search-form .Sinput[name=q]').parent().data('action','http://soso.gamersky.com/cse/search?s=3068275339727451251')
        }
        $.each(gameName, function (n, d) { 
            if (linkType == 'baidu') {
                SearchHtm += '<a target="_blank" href="'+ linkName + encodeURIComponent(d.linkName+' site:www.gamersky.com') +'">'+ d.name +'</a>'
            } else if(linkType == 'soso') {
                SearchHtm += '<a target="_blank" href="'+ linkName + d.linkName +'">'+ d.name +'</a>'
            }
        });
  
        $('.SearchR').html('<span>热门搜索：</span>' + SearchHtm);