var domainURl = {
            'jikejia.cn': 'ICP备：沪B2-20090008-7',
            'jkjcdn.com': 'ICP备：沪B2-20090008-7',
            'jkjstatic.com': 'ICP备：沪B2-20090008-7',
            'ajkinclude.com': 'ICP备：沪B2-20090008-8',
            'ajkstatic.com': 'ICP备：沪B2-20090008-8',
            'ajkpic.com': 'ICP备：沪B2-20090008-8',
            'ajkpages.com': 'ICP备：沪B2-20090008-8',
            'ajkimage.com': 'ICP备：沪B2-20090008-8',
            'anjuke.com': 'ICP备：沪B2-20090008-1',
            '安居客.com': 'ICP备：沪B2-20090008-1',
            'anjuke.cn': 'ICP备：沪B2-20090008-1',
            'anjukestatic.com': 'ICP备：沪B2-20090008-6',
            'ajkdns.com': 'ICP备：沪B2-20090008-6',
            'ajkimg.com': 'ICP备：沪B2-20090008-6',
            'ajkcdn.com': 'ICP备：沪B2-20090008-6',
            'ajkdns2.com': 'ICP备：沪B2-20090008-6',
            'aifang.com': 'ICP备：沪B2-20090008-3',
            'aifcdn.com': 'ICP备：沪B2-20090008-3',
            'linganvr.com': 'ICP备：沪B2-20090008-9'
        }
        var huIcbVal = document.getElementById('huIcb');
        for (var u in domainURl) {
            if (document.location.host.indexOf(u)>0) {
                huIcbVal.innerHTML = domainURl[u]
            }
        }