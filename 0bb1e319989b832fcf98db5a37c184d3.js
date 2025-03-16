(function () {
            function getCookie(name){
                try {
                    var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");

                    if (arr = document.cookie.match(reg)) {
                        return unescape(arr[2]);
                    } else {
                        return null;
                    }
                } catch (e) {
                    return null;
                }
            }
            var provCookie = getCookie('prov');
            var cityCookie = getCookie('city');
            //是否显示广告 begin
            var flag = true;

            if(
                allData &&
                allData.shopCityList &&
                allData.shopCityList.length > 0 &&
                provCookie &&
                cityCookie
            ) {
                for(var i = 0; i < allData.shopCityList.length; i ++) {
                    var shopCityListItem = allData.shopCityList[i];

                    if(!shopCityListItem || !shopCityListItem.prov) {
                        flag = true;
                        break;
                    }

                    if(
                        shopCityListItem &&
                        shopCityListItem.prov &&
                        shopCityListItem.city && 
                        shopCityListItem.prov === provCookie &&
                        shopCityListItem.city === cityCookie
                    ) {
                        flag = true;
                        break;
                    } else {
                        flag = false;
                    }

                    if (
                        shopCityListItem &&
                        shopCityListItem.prov &&
                        !shopCityListItem.city && 
                        shopCityListItem.prov === provCookie
                    ) {
                        flag = true;
                        break;
                    } else {
                        flag = false;
                    }
                }
            }

            if(!flag) {
                document.body.setAttribute('class', 'shopNoTagRegion')
            }
            // 是否显示广告 end
            
            // 是否是北京地区 start
            if(
                allData &&
                provCookie && 
                provCookie === 'cn010'
            ) {
                allData.isBeijing = true;
            } else {
                allData.isBeijing = false;
            }
            // 是否是北京地区 end
        })();