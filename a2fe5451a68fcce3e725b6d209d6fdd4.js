var WEBZINE = window.WEBZINE || {};
                WEBZINE.Home = window.WEBZINE.Home || {};
                WEBZINE.Home.newsTabChange = function(obj, wrapObj, tab) {
                    obj = getObj(obj);
                    var tabsObj = getObj(wrapObj + 'Tabs');
                    wrapObj = getObj(wrapObj);
                    var tabObjs = INVEN.Html.getChildNodes(tabsObj, 'a');
                    switch (tab) {
                        case '1':
                            wrapObj.className = 'tabGroup tabGroup1 wrap342AQ1';
                            tabObjs[0].className = 'tab122AQ1 tab122AQ1-CommentTop tab122AQ1-CommentTop-Selected';
                            tabObjs[1].className = 'tab122AQ1 tab122AQ1-ReadTop';
                            break;
                        case '2':
                            wrapObj.className = 'tabGroup tabGroup2 wrap342AQ1';
                            tabObjs[0].className = 'tab122AQ1 tab122AQ1-CommentTop';
                            tabObjs[1].className = 'tab122AQ1 tab122AQ1-ReadTop tab122AQ1-ReadTop-Selected';
                            break;
                    }
                    obj.blur();
                }