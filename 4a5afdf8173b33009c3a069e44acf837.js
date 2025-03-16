(function(window, $, undefined) {
    'use strict';

    const MORE_URL = {
        newrelease: {
            mobile: 'k=4',
            pc: 'k=1',
            tv: 'k=3',
            acn: 'k=5'
        },
        othernews: {
            esports: 'k=13',
            events: 'k=11'
        }
    };

    const GTM_AREA = {
        'newrelease': '新作區',
        'othernews': '綜合區'
    };

    const GTM_TYPE = {
        'newrelease_all': '新作情報',
        'newrelease_tv': 'TV掌機',
        'newrelease_pv': 'PC',
        'newrelease_acn': '動漫畫',
        'newrelease_mobile': '手機',
        'othernews_all': '綜合新聞',
        'othernews_newrevision': '更新',
        'othernews_fun': '宅物',
        'othernews_somebody': '人物',
        'othernews_tech': '3C',
        'othernews_movie': '影劇',
        'othernews_tidbit': '花絮',
        'othernews_esports': '電競',
        'othernews_business': '產業',
        'othernews_events': '活動'
    };

    let tabNow = new Map();   //目前選中的tab
    let fetchIng = new Map(); //是否取資料中
    let pageNow = new Map();

    function fetchData(area, tab)
    {
        return new Promise((resolve, reject) => {
            //有在storage中就直接回傳
            if (sessionStorage.getItem(`Gnn_${area}_${tab}`)) {
                resolve($.parseJSON(sessionStorage.getItem(`Gnn_${area}_${tab}`)));
                return;
            }

            fetch(`/ajax/gnn.php?area=${area}&tab=${tab}`).then(resp => {
                if (!resp.ok) {
                    throw new Error('系統忙碌中，請稍候。');
                }

                resp.json().then(json => {
                    if (json.error) {
                        reject(json.error.message);
                        return;
                    }

                    if (!json.data || json.data.list.length < 1) {
                        reject('查無資料');
                        return;
                    }

                    //存下本次取得的資料
                    setData(`Gnn_${area}_${tab}`, JSON.stringify(json.data.list));

                    resolve(json.data.list);
                });
            }).catch(error => reject(error.message));
        });
    }

    function setData(keyname, data)
    {
        sessionStorage.setItem(keyname, data);
    }

    function change(tabObj, area, tab)
    {
        let boxId = `${area}_${tab}`;

        //記錄當前的tab
        tabNow.set(area, tab);

        //正在取得資料中就略過
        if (fetchIng.has(boxId)) {
            return;
        }
        fetchIng.set(boxId, 1);

        fetchData(area, tab).then(data => {
            //回來的資料不是當前的tab時就略過
            if (tabNow.get(area) != tab) {
                return;
            }
            pageNow.delete(area);

            const container = tabObj.closest('div[data-block="gnn"]');
            const totalPage = Math.floor(data.length / container.data('rows')); //總頁數

            //回填內容
            showContent(container.find('div[data-content="gnn"]'), container, data.slice(0, container.data('rows')), area, tab);

            //變更tab樣式
            $('li > a.is-now', container.find('ul')).removeClass('is-now');
            tabObj.addClass('is-now');

            container.find('ul').children().last().stop().animate({
                left: tabObj.position().left,
                width: tabObj.outerWidth(),
                opacity: 1
            }, 200);

            //看更多
            container.find('nav.bh-index_commontab > .bh-btn_more').attr({
                'href': '//gnn.gamer.com.tw' + (MORE_URL[area][tab] ? `?${MORE_URL[area][tab]}` : ''),
                'data-gtm-service': 'gnn',
                'data-gtm-page': '首頁',
                'data-gtm-click': '點擊看更多',
                'data-gtm-area': GTM_AREA[area],
                'data-gtm-type': GTM_TYPE[`${area}_${tab}`]
            });

            //清空分頁
            container.find('div.gnn-section-more').attr('data-gtmgamer', tabObj.attr('data-gtm')).removeClass('is-show');
            container.find('div[data-pagenav="gnn"]').remove();

            //重設分頁
            if (totalPage > 1) {
                container.find('div.gnn-section-more.is-right').addClass('is-show');

                let tmpHtml = $('<div/>');
                for (let i = 1; i <= totalPage; i++) {
                    tmpHtml.append($('<div class="dot"></div>').addClass(i==1 ? 'is-now' : ''));
                }
                container.append($('<div/>').addClass('gnn-section-more_pagedot').attr('data-pagenav', 'gnn').append(tmpHtml.html()));
                tmpHtml.remove();
            }
        }).catch(() => {
            //不做任何事
        }).finally(() => {
            fetchIng.delete(boxId);
        });
    }

    function showContent(oo, container, data, area, tab) {
        let tmpHtml = $('<div/>');

        data.forEach((json) => {
            let html = $($(container.data('template')).html());
            html.addClass(container.data('class')).attr({
                'href': `//gnn.gamer.com.tw/detail.php?sn=${json.sn}`,
                'data-gtm-service': 'gnn',
                'data-gtm-page': '首頁',
                'data-gtm-click': '點擊新聞',
                'data-gtm-var1': json.sn,
                'data-gtm-area': GTM_AREA[area],
                'data-gtm-type': GTM_TYPE[`${area}_${tab}`]
            });
            html.find('.img_content > img').attr('src', `//p2.bahamut.com.tw/${container.data('picsize')}/2KU/${json.pic}${(container.data('picsize') == 'B' ? '?w=360' : '')}`);
            html.find('.img_content > .label-type').text(json.machine);
            html.find('.gnn-text').text(json.title);

            if (json.icon && json.icon.player) {
                html.find('.img_content > .label-type').append('<span class="contribution">投稿</span>');
            }

            tmpHtml.append(html);
        });

        //回填內容
        oo.empty().append(tmpHtml.html());
        tmpHtml.remove();
    }

    function pagination(pageObj) {
        const container = pageObj.closest('div[data-block="gnn"]');
        const area = pageObj.data('pageitem');
        const tab = tabNow.get(area);

        const json = $.parseJSON(sessionStorage.getItem(`Gnn_${area}_${tab}`));
        if (!json || json.length < 1) {
            container.find('div.gnn-section-more').removeClass('is-show');
            container.find('div[data-pagenav="gnn"]').remove();
            return;
        }

        const totalPage = Math.floor(json.length / container.data('rows')); //總頁數
        if (totalPage <= 1) {
            container.find('div.gnn-section-more').removeClass('is-show');
            container.find('div[data-pagenav="gnn"]').remove();
            return;
        }

        let page = pageNow.get(area) || 1;
        if (pageObj.hasClass('is-left')) {
            page -= 1;
        }

        if (pageObj.hasClass('is-right')) {
            page += 1;
        }

        page = (page > totalPage) ? 1 : (page < 1 ? totalPage : page);
        pageNow.set(area, page);

        if ((page-1) >= 1) {
            container.find('div.gnn-section-more.is-left').addClass('is-show');
        }

        if ((page+1) <= totalPage) {
            container.find('div.gnn-section-more.is-right').addClass('is-show');
        }

        container.find('[data-pagenav="gnn"]').children().removeClass('is-now').eq(page-1).addClass('is-now');

        const boxId = `${area}_${tab}`;
        fetchIng.set(boxId, 1);

        const start = (page - 1) * container.data('rows');
        const end = page * container.data('rows');
        showContent(container.find('div[data-content="gnn"]'), container, json.slice(start, end), area, tab);

        fetchIng.delete(boxId);
    }

    //設定新作區和綜合區預設的tab
    function setDefault(area, tab, data)
    {
        if (area == '' || tab == '') {
            return;
        }

        setData(`Gnn_${area}_${tab}`, JSON.stringify(data));
        tabNow.set(area, tab);
    }

    //刪除已存在於storage的資料
    $.each($('#gnnContainer [data-gnnbox]'), function() {
        let area = $(this).data('gnnbox');
        let tab = $(this).data(area);
        sessionStorage.removeItem(`Gnn_${area}_${tab}`);
    });

    //儲存預設tab的資料(此動作要再刪除完後)
        setDefault('newrelease', 'all', [{"sn":257672,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u300a\u6211\u5011\u7684\u96e8\u8272\u5354\u8b70\u300b\u96fb\u7af6\u984c\u6750\u539f\u5275\u52d5\u756b \u56e0\u904a\u6232\u800c\u751f\u7684\u7f88\u7d46","pic":"91\/5250fd7b7dd5e30e27df243f0a1nka75.JPG","priority":"2"},{"sn":257669,"machine":"\u591a\u5e73\u53f0","title":"\u300aSaGa\u300b\u7cfb\u5217\u7e3d\u76e3\u53ca\u88fd\u4f5c\u4eba\u5c08\u8a2a \u66a2\u8ac7\u7e41\u9ad4\u4e2d\u6587\u5708\u672a\u4f86\u898f\u5283\u53ca\u65b0\u4f5c\u300aEmerald Beyond\u300b\u7279\u8272","pic":"99\/aa5f971ab4afc2b7903e8ca06d1nl7r5.JPG","priority":"2"},{"sn":257664,"machine":"\u52d5\u6f2b\u756b","title":"\u300a\u8f2a\u8ff4\u7b2c 7 \u6b21\u7684\u60e1\u5f79\u4ee4\u5b43\uff0c\u5728\u524d\u6575\u570b\u4eab\u53d7\u81ea\u7531\u81ea\u5728\u7684\u65b0\u5a18\u751f\u6d3b\u300b\u516c\u958b\u5ba3\u50b3\u5f71\u7247\u7b49\u8cc7\u8a0a","pic":"56\/110bda6da0dc5e2bab7da1795e1nl6k5.JPG","priority":"2"},{"sn":257674,"machine":"\u52d5\u6f2b\u756b","title":"\u8f15\u5c0f\u8aaa\u300a\u516c\u7235\u5343\u91d1\u7684\u5bb6\u5ead\u6559\u5e2b\u300b\u5ba3\u5e03\u52d5\u756b\u5316\u6d88\u606f","pic":"80\/3b6b37534c4d28ab4b5c83cfe41nla05.PNG","priority":"3","icon":{"player":1}},{"sn":257661,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u7121\u5398\u982d\u7cfb\u990a\u5973\u65e5\u5e38\u300a\u51f9\u51f8\u9b54\u5973\u7684\u89aa\u5b50\u65e5\u5e38\u300b\u863f\u8389\u5abd\u5abd\u7684\u5973\u5152\u597d\u50cf\u6709\u9ede\u5927\uff1f","pic":"07\/01630f604e2c5f5848c24b76a01nk7v5.JPG","priority":"2"},{"sn":257660,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u300a\u91cd\u751f\u8005\u7684\u9b54\u6cd5\u4e00\u5b9a\u8981\u7279\u5225\u300b\u5f9e\u5730\u7344\u7684\u76e1\u982d\u6b78\u4f86 \u5c07\u7121\u6578\u7684\u72a7\u7272\u8207\u52aa\u529b\u9298\u8a18\u5728\u5fc3","pic":"71\/b6182811fbfdfad7d9090d94bb1nk6v5.JPG","priority":"2"},{"sn":257659,"machine":"\u591a\u5e73\u53f0","title":"\u985e\u9b42\u7cfb\u52d5\u4f5c\u904a\u6232\u300a\u827e\u8afe\u63d0\u4e9e\uff1a\u5931\u843d\u4e4b\u6b4c\u300b\u5c07\u5728 2024 \u5e74\u6625\u5b63\u767c\u552e","pic":"10\/c149ac75de932bef03c59b864a1nl2i5.JPG","priority":"3"},{"sn":257656,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u9078\u4e86\u5f13\u7bad\u624b\u53c8\u600e\u6a23\uff1f\u300a\u67d0\u5927\u53d4\u7684 VRMMO \u6d3b\u52d5\u8a18\u300b\u6240\u4ee5\u8aaa\u6211\u53ea\u60f3\u4f4e\u8abf\u7684\u73a9\u904a\u6232\u554a","pic":"73\/a5eb8272c408e714033bd58cbe1nk455.PNG","priority":"2"},{"sn":257655,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u5802\u5802\u6b63\u6b63\u7684\u767e\u5408\u611b\u60c5\u559c\u5287\u300a\u6211\u7684\u63a8\u662f\u58de\u4eba\u5927\u5c0f\u59d0\u3002\u300b\u8abf\u6232\u5927\u5c0f\u59d0\u6700\u597d\u73a9\u4e86\uff01","pic":"00\/fda32947cd14cfc0258c02cbe01njr05.JPG","priority":"2"},{"sn":257654,"machine":"NS","title":"\u300a\u8d85\u7d1a\u746a\u5229\u6b50\u5144\u5f1f \u9a5a\u5947\u300b\u4ecb\u7d39\u7cfb\u5217\u6b77\u4f86\u6700\u591a\u7684 12 \u7a2e\u64cd\u4f5c\u89d2\u8272","pic":"11\/906c83a0d708a51bb5c338cb861nl2j5.JPG","priority":"2"},{"sn":257653,"machine":"\u591a\u5e73\u53f0","title":"\u300aGUNVOLT RECORDS \u96fb\u5b50\u8ecc\u9304\u5f8b\u300b\u904a\u6232\u672c\u9ad4\u642d\u8f09\u6a02\u66f2\u3001\u904a\u73a9\u5f71\u50cf\u516c\u958b","pic":"06\/6010c9f19e31b982a7c53cb3481neqm5.JPG","priority":"3"},{"sn":257563,"machine":"\u52d5\u6f2b\u756b","title":"\u4e03\u9f8d\u73e0\u5b8c\u5168\u65b0\u4f5c\u52d5\u756b\u300a\u4e03\u9f8d\u73e0\uff1aDAIMA\u300b \u5ba3\u5e03\u5c07\u65bc 2024 \u5e74\u79cb\u5b63\u5168\u7403\u63a8\u51fa","pic":"34\/285c51dcaf95b51d35e66fad1c1nkjq5.JPG","priority":"1","icon":{"player":1}},{"sn":257650,"machine":"PC","title":"\u300a\u541b\u671b\u300b\u91cd\u65b0\u958b\u767c\uff01\u7d93\u5178 PC \u904a\u6232\u300a\u4f60\u6240\u671f\u671b\u7684\u6c38\u9060\u300b\u5ba3\u5e03\u5c55\u958b\u52df\u8cc7","pic":"91\/c58102f1b7a6ed178a25c3fc6a1nl1z5.JPG","priority":"2"},{"sn":257626,"machine":"\u624b\u6a5f","title":"\u300aBLEACH \u6b7b\u795e\u300b\u6b63\u7248\u6388\u6b0a\u300a\u6b7b\u795e \u5200\u9cf4\u300b\u570b\u969b\u7248\u91cb\u51fa\u9996\u652f\u5ba3\u50b3\u5f71\u7247 \u9810\u544a\u65bc 2024 \u5e74\u63a8\u51fa","pic":"37\/a13ce3d140f8563d9db706fdf21nkxp5.JPG","priority":"2"},{"sn":257622,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u300a\u5bb6\u88e1\u8e72\u5438\u8840\u59ec\u7684\u9b31\u60b6\u300b\u4e00\u5104\u5e74\u96e3\u5f97\u4e00\u898b\u7684\u7f8e\u5c11\u5973 \u5373\u4f7f\u4ec0\u9ebc\u90fd\u4e0d\u6703\u4e5f\u8981\u6210\u5c31\u9738\u696d","pic":"46\/bb580fcfe4c58e3a238df578f21njjy5.JPG","priority":"2"},{"sn":257597,"machine":"\u591a\u5e73\u53f0","title":"\u300aHoledown\u300b\u958b\u767c\u5718\u968a\u65b0\u4f5c\u300asubpar pool\u300b\u4e0a\u5e02 \u7531\u9ad8\u723e\u592b\u7403\u8207\u649e\u7403\u4ea4\u7e54\u800c\u6210\u7684\u6b61\u6a02\u5192\u96aa","pic":"23\/dc3d145369b4304bf163fe3de11nkrr5.JPG","priority":"2"},{"sn":257578,"machine":"\u591a\u5e73\u53f0","title":"\u300a\u5973\u795e\u7570\u805e\u9304 3 Reload\u300b\u516c\u958b\u5c55\u793a\u5bbf\u820d\u65e5\u5e38\u7684\u6700\u65b0\u5f71\u7247 \u5404\u89d2\u8272\u4ecb\u7d39\u5f71\u7247\u9678\u7e8c\u767b\u5834","pic":"30\/699e14f0a98f0aaca01f2dcda81nkme5.JPG","priority":"2"},{"sn":257576,"machine":"\u52d5\u6f2b\u756b","title":"\u3010\u8a66\u7247\u3011\u300a\u5de8\u7378\u9632\u885b\u4f01\u696d\u300b\u602a\u7378\u5927\u6230\u6a5f\u68b0\u4eba\u7684\u4f01\u696d\u7d93\u71df\u52d5\u756b \u5728\u6d6a\u6f2b\u8207\u73fe\u5be6\u4e2d\u6399\u624e\u6c42\u751f","pic":"84\/56b617a74898bdaa648bc19a791njfg5.JPG","priority":"2"},{"sn":257649,"machine":"OLG","title":"\u300a\u5929\u9f8d\u516b\u90e8 Online \u5b97\u5e2b\u7248\u300b\u9810\u5148\u8a3b\u518a\u4eca\u65e5\u958b\u8dd1 \u7814\u767c\u5718\u968a\u900f\u9732\u65b0\u904a\u6232\u5167\u5bb9","pic":"87\/862c0b1f6c14db776bd2efe9361nl1v5.JPG","priority":"3"},{"sn":257643,"machine":"PC","title":"VR\u300a\u6b61\u6a02\u68ee\u5df4\uff1a\u865b\u64ec\u6416\u6416\u6d3e\u5c0d\u300b\u6b63\u5f0f\u767b\u9678 Meta Quest \u5e73\u53f0 \u7368\u7279\u6a21\u5f0f\u8b93\u623f\u9593\u5316\u8eab\u6d3e\u5c0d\u73fe\u5834","pic":"62\/e0f9c165b29737e0f9377350c01nl165.JPG","priority":"3"},{"sn":257639,"machine":"\u591a\u5e73\u53f0","title":"\u300a\u5973\u795e\u7570\u805e\u9304 5 \u6230\u7565\u7248\u300b\u904a\u6232\u8c6a\u83ef\u9ad4\u9a57\u6703\u4e0b\u9031\u516d\u767b\u5834 \u5206\u4eab\u8a66\u73a9\u5fc3\u5f97\u53ef\u7372\u5f97\u7cbe\u7f8e\u8d08\u54c1","pic":"50\/31b062fc40fe30ee922ea3eec71nl0u5.JPG","priority":"3"},{"sn":257627,"machine":"\u591a\u5e73\u53f0","title":"\u7b2c\u4e00\u4eba\u7a31\u5075\u63a2\u65b0\u4f5c\u300a\u6797\u5730\u5bc6\u5ba4\u300b11 \u6708\u5e95\u63a8\u51fa \u4e32\u9023\u96f6\u6563\u8b49\u64da\u62fc\u6e4a\u771f\u76f8","pic":"82\/b13a6fbed1930cb7d6d8c526881nkyy5.JPG","priority":"3"},{"sn":257625,"machine":"\u52d5\u6f2b\u756b","title":"\u300a\u5982\u679c 30 \u6b72\u9084\u662f\u8655\u7537\uff0c\u4f3c\u4e4e\u5c31\u80fd\u6210\u70ba\u9b54\u6cd5\u5e2b\u300b\u516c\u958b\u524d\u5c0e\u5ba3\u50b3\u5f71\u7247 \u9810\u5b9a 2024 \u5e74 1 \u6708\u958b\u64ad","pic":"09\/9a80873aeb1f37a93aa2c7aa1b1nkwx5.JPG","priority":"3"},{"sn":257624,"machine":"PC","title":"\u50cf\u7d20\u98a8\u5192\u96aa RPG\u300a\u9748\u9b42\u5149\u8b5c\u300b19 \u65e5\u4e0a\u5e02 \u8f49\u8b8a 4 \u7a2e\u578b\u614b\u4ee5\u9003\u96e2\u6c38\u751f\u7981\u932e\u76e3\u7344","pic":"89\/ed0e77975f1ad42f64d0acfd1a1nkwd5.JPG","priority":"3"}]);
    
        setDefault('othernews', 'all', [{"sn":257673,"machine":"\u591a\u5e73\u53f0","title":"\u300a\u771f\u4eba\u5feb\u6253 1\u300b\u516c\u5e03\u8ffd\u52a0\u89d2\u8272\u300c\u5168\u80fd\u4eba\u300d\u5ba3\u50b3\u5f71\u7247 \u91cd\u73fe\u539f\u4f5c\u8840\u8165\u7d42\u7d50\u62db\u5f0f","pic":"32\/ef87b71859821063a7a380d0121nl8o5.JPG","priority":"2","ctime":"2023-10-16 12:06:32"},{"sn":257678,"machine":"\u5176\u4ed6","title":"\u300chololive production\u300d\u4e3b\u984c\u5496\u5561\u5ef3\u7d50\u5408\u4e09\u671f\u8207\u516d\u671f\u751f 10 \u6708\u5e95\u8d77\u65bc\u53f0\u5317\u3001\u53f0\u4e2d\u958b\u5e55","pic":"18\/741aefa73bc2620944a601bffd1nlb25.JPG","priority":"3","ctime":"2023-10-16 12:55:01"},{"sn":257676,"machine":"\u624b\u6a5f","title":"\u300aMemento Mori\u300b1 \u9031\u5e74\u7d00\u5ff5\u512a\u60e0 10\/18 \u767b\u5834 \u540c\u6b65\u65b0\u589e\u4e3b\u7dda\u5192\u96aa\u7b2c 26\u300127 \u7ae0","pic":"10\/a8f5c4258f033f27586121f2db1nlau5.JPG","priority":"3","ctime":"2023-10-16 12:45:40"},{"sn":257667,"machine":"OLG","title":"\u300a\u82f1\u96c4\u806f\u76df\u300b\u4e16\u754c\u5927\u8cfd\u745e\u58eb\u8f2a\u958b\u5e55\u6230\u7531 T1 \u5c0d TL\u3000T1 \u516c\u958b Keria\u3001Zeus \u8a2a\u8ac7\u5f71\u7247","pic":"04\/f3975bf40965c97fa530ab87ba1nl7w5.JPG","priority":"3","ctime":"2023-10-16 11:33:07"},{"sn":257675,"machine":"PC","title":"Acer \u5728\u53f0\u65b0\u63a8\u51fa\u5927\u5c3a\u5bf8 34 \u540b\u66f2\u9762\u96fb\u7af6\u87a2\u5e55","pic":"95\/d8a0875aa35b5eb7a65ae26b691nlaf5.PNG","priority":"5","ctime":"2023-10-16 12:39:48"},{"sn":257677,"machine":"\u624b\u6a5f","title":"\u300a\u8056\u706b\u964d\u9b54\u9304 \u82f1\u96c4\u96f2\u96c6\u300b\u65b0\u82f1\u96c4\u53ec\u559a\u6d3b\u52d5\u300c\u97ff\u5fc3\u76ae\u4e9e\u5c3c\uff06\u97ff\u5fc3\u53f2\u5361\u7562\u6b50\u85a9\u300d\u4eca\u65e5\u958b\u8dd1","pic":"17\/2e8f29e2f217341da328bf1a791nlb15.JPG","priority":"49","ctime":"2023-10-16 12:53:28"},{"sn":257671,"machine":"\u52d5\u6f2b\u756b","title":"\u300a\u7d04\u6703\u5927\u4f5c\u6230\u300b\u7b2c\u4e94\u5b63\u52d5\u756b\u91cb\u51fa\u65b0\u524d\u5c0e\u5f71\u7247\u8207\u65b0\u89d2\u8272\u8996\u89ba\u5716 \u9810\u8a08 2024 \u5e74\u958b\u64ad","pic":"28\/1321172f5dbe1e71e1e66307f51nl8k5.JPG","priority":"50","icon":{"player":1},"ctime":"2023-10-16 11:57:52"},{"sn":257670,"machine":"\u5176\u4ed6","title":"\u300a\u9a5a\u5947\u968a\u9577 2\u300b\u6700\u65b0\u89d2\u8272\u6d77\u5831\u4eae\u76f8 11 \u6708 8 \u65e5\u5728\u53f0\u4e0a\u6620","pic":"21\/cef0b8c7e1b7a86337a38066561nl8d5.JPG","priority":"50","ctime":"2023-10-16 11:56:07"},{"sn":257668,"machine":"\u52d5\u6f2b\u756b","title":"\u52d5\u756b\u300a\u8eab\u70ba VTuber \u7684\u6211\u56e0\u70ba\u5fd8\u8a18\u95dc\u53f0\u800c\u6210\u4e86\u50b3\u8aaa\u300b\u91cb\u51fa\u5fc3\u97f3\u6de1\u96ea\u89d2\u8272\u8996\u89ba\u5716\u8207\u8ffd\u52a0\u8072\u512a","pic":"12\/9a9e3d1f3d0fff5e6c7d773f841nl845.JPG","priority":"50","icon":{"player":1},"ctime":"2023-10-16 11:38:46"},{"sn":257666,"machine":"PC","title":"\u300a\u5730\u4e0b\u57ce\u8ffd\u96a8\u8005\u300b\u3001\u300a\u5c4d\u6230\u671d\u9bae\uff1a\u8840\u8108\u300b\u53ca\u672a\u66dd\u5149\u65b0\u4f5c\u9810\u5b9a 11 \u6708\u5e95\u8d77\u9678\u7e8c\u5c55\u958b\u9810\u5148\u6e2c\u8a66","pic":"98\/28761a719dc6a3d2fb19c431831nl7q5.JPG","priority":"50","ctime":"2023-10-16 11:17:10"},{"sn":257665,"machine":"\u52d5\u6f2b\u756b","title":"\u52d5\u756b\u300a\u846c\u9001\u7684\u8299\u8389\u84ee\u300b\u91cb\u51fa\u300c\u65b7\u982d\u53f0\u963f\u70cf\u62c9\u7bc7\u300d\u65b0\u8996\u89ba\u5716\u8207\u8ffd\u52a0\u8072\u512a\u540d\u55ae","pic":"97\/45c18174732a43ac2ba67c98a01nl7p5.JPG","priority":"50","icon":{"player":1},"ctime":"2023-10-16 11:15:18"},{"sn":257663,"machine":"OLG","title":"\u300a\u82f1\u96c4\u806f\u76df\u300b\u4e16\u754c\u5927\u8cfd\u745e\u58eb\u5236\u7b2c\u4e00\u8f2a\u62bd\u7c64\u51fa\u7210  BLG \u8207 KT \u4e2d\u97d3\u5927\u6230\u3001JDG \u5c0d\u4e0a\u6b50\u6d32 BDS","pic":"33\/1d7929101a5bea97b79185f1881nl5x5.PNG","priority":"2","ctime":"2023-10-15 20:11:19"},{"sn":257658,"machine":"\u624b\u6a5f","title":"\u3010\u96fb\u73a9\u760b\u3011\u624b\u6a5f\u9031\u5831\u300a\u9b54\u6cd5\u5c11\u5e74\u8cc8\u4fee \u6c38\u6046\u7f88\u7d46\u7684\u5925\u4f34\u300b\u3001\u300aCypher 007\u300b\u8207\u300aElderand\u300b\u7b49\u904a\u6232","pic":"89\/f146643e03d3332414fe6485721nl1x5.PNG","priority":"2","ctime":"2023-10-14 20:00:00"},{"sn":257657,"machine":"OLG","title":"\u300a\u82f1\u96c4\u806f\u76df\u300b2023 \u4e16\u754c\u5927\u8cfd\u5165\u570d\u8cfd\u7b2c\u4e94\u5929 \u6b50\u6d32 BDS \u7b2c\u4e8c\u5834\u9006\u8f49\u3001\u4ee5 2:0 \u64ca\u9000 CFO","pic":"29\/209ab73d9e01ea027c2d588d971nl315.JPG","priority":"50","ctime":"2023-10-14 18:53:00"},{"sn":257651,"machine":"\u591a\u5e73\u53f0","title":"\u3010\u96fb\u73a9\u760b\u3011670 \u96c6 PS5 \u65b0\u6b3e\u4e3b\u6a5f 11 \u6708\u5c07\u63a8\u51fa\u3001\u9ed1\u6697\u5947\u5e7b ARPG\u300a\u58ae\u843d\u4e4b\u738b\u300b\u7b49\u60c5\u5831","pic":"86\/cc966931d9d6058fe625b833891nl1u5.JPG","priority":"2","ctime":"2023-10-13 20:00:00"},{"sn":257633,"machine":"NS","title":"Nintendo Live 2023 TAIPEI \u5165\u5834\u7968\u5238\u5c07\u65bc 10 \u6708 14 \u65e5\u300128 \u65e5\u5206\u5169\u68af\u6b21\u958b\u653e\u9810\u7d04","pic":"10\/fe95e3c2c8cd5e5bd6c89835961nkzq5.JPG","priority":"2","ctime":"2023-10-13 17:56:23"},{"sn":257610,"machine":"\u5176\u4ed6","title":"\u82f1\u570b\u76e3\u7ba1\u6a5f\u69cb CMA \u6279\u51c6\u5fae\u8edf\u6536\u8cfc Activision \u4ea4\u6613\u6848 \u6392\u9664\u6536\u8cfc\u6848\u6700\u5f8c\u969c\u7919","pic":"05\/9fb0f458a155213b2ae51c04d61nku15.PNG","priority":"2","ctime":"2023-10-13 16:13:54"},{"sn":257648,"machine":"OLG","title":"\u300a\u82f1\u96c4\u806f\u76df\u300b\u4e16\u754c\u5927\u8cfd CFO \u660e\u65e5\u51fa\u6230\u6b50\u6d32 BDS\u3000\u65e5\u672c DFM\u3001\u62c9\u4e01\u7f8e\u6d32 R7 \u906d\u5230\u6dd8\u6c70","pic":"83\/53759ff0fcca189f7b17809a821nl1r5.JPG","priority":"3","ctime":"2023-10-13 19:02:42"},{"sn":257641,"machine":"\u591a\u5e73\u53f0","title":"\u300a\u4e03\u9f8d\u73e0 \u7570\u6230 2\u300b\u514d\u8cbb\u66f4\u65b0\u7b2c 17 \u5f48\u73fe\u5df2\u767c\u5e03 \u5168\u65b0\u6230\u9b25\u6a21\u5f0f\u300cX \u6230\u7dda\u300d\u767b\u5834","pic":"64\/6213f15b74c740d4150bd748b21nl185.PNG","priority":"3","ctime":"2023-10-13 18:28:56"},{"sn":257631,"machine":"\u624b\u6a5f","title":"\u300aFate\/Grand Order\u300b\u65e5\u7248\u672c\u9031\u672b\u8fce\u63a5\u4e0a\u7dda\u6eff 3000 \u65e5 \u5c07\u8209\u8fa6 \u26054 \u5f9e\u8005\u81ea\u9078\u6d3b\u52d5","pic":"11\/98b89e1726718f4a79e453b0691nkzr5.PNG","priority":"3","ctime":"2023-10-13 17:53:24"},{"sn":257628,"machine":"OLG","title":"\u300a\u82f1\u96c4\u806f\u76df\u300b\u91cb\u51fa\u958b\u767c\u65b0\u8a0a\u5f71\u7247 \u5206\u4eab\u65b0\u82f1\u96c4\u300c\u8d6b\u5a01\u300d\u8207\u91cd\u88fd\u82f1\u96c4\u300c\u53f2\u52a0\u7d0d\u300d\u60f3\u6cd5","pic":"83\/3dc5bafe3edf92b29c7f6963971nkyz5.JPG","priority":"3","ctime":"2023-10-13 17:32:09"},{"sn":257621,"machine":"OLG","title":"\u300a\u6230\u8266\u4e16\u754c\u300bX\u300a\u9b54\u6cd5\u9580\u4e4b\u82f1\u96c4\u7121\u6575 3\u300b\u65b0\u82f1\u96c4\u6307\u63ee\u5b98 19 \u65e5\u73fe\u8eab \u516c\u958b 12.9 \u7248\u672c\u3001\u842c\u8056\u7bc0\u5167\u5bb9","pic":"88\/88ecd8dbd409bbe5fd975f5ee01nkwc5.JPG","priority":"3","ctime":"2023-10-13 16:56:25"},{"sn":257613,"machine":"\u591a\u5e73\u53f0","title":"\u7b2c\u4e00\u4eba\u7a31\u5bc6\u5ba4\u6050\u6016\u904a\u6232\u300a\u5343\u4ee3\u300b10 \u6708\u5e95\u4e0a\u5e02 \u5373\u65e5\u65bc Steam \u5e73\u53f0\u958b\u653e\u8a66\u73a9\u7248\u6436\u5148\u9ad4\u9a57","pic":"35\/638eb0facf3f327507afb8c4921nkuv5.JPG","priority":"3","ctime":"2023-10-13 16:22:24"},{"sn":257612,"machine":"\u624b\u6a5f","title":"\u300a\u7121\u671f\u8ff7\u9014\u300b\u300c\u5239\u96e8\u300d\u5168\u65b0\u7248\u672c\u767b\u5834 \u91cb\u51fa\u300c\u96e8\u591c\u92d2\u83ef\u300d\u65b0\u73a9\u6cd5\u53ca\u65b0\u7981\u9589\u8005","pic":"37\/b47f1fc64be373b891d97a2f061nkux5.PNG","priority":"3","ctime":"2023-10-13 16:21:32"}]);
    
    
    //tab切換
    $('#gnnContainer nav.bh-index_commontab > ul > li > a').on({
        mouseenter: function() {
            let area = $(this).data('gnnbox');
            let tab = $(this).data(area);

            if (tabNow.get(area) == tab) {
                return;
            }
            change($(this), area, tab);
        }
    });

    //分頁
    $('#gnnContainer .gnn-section-more').click(function() {
        pagination($(this));
    });
})(window, jQuery);