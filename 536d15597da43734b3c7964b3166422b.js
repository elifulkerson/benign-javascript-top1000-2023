(function setColorsByTheme(fromHook, isDarkMode) {
    const entries = function(obj) {
        let ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i); // preallocate the Array
        while(i--)resArray[i] = [
            ownProps[i],
            obj[ownProps[i]]
        ];
        return resArray;
    };
    /* eslint-disable */ const colors = fromHook ? src_styles_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP : {"main100":{"light":"#ECF2FF","dark":"#28344E"},"main200":{"light":"#D5E3FF","dark":"#2F436E"},"main300":{"light":"#B3CDFF","dark":"#2F436E"},"main400":{"light":"#81ACFF","dark":"#4171D6"},"main500":{"light":"#5383E8","dark":"#5383E8"},"main600":{"light":"#4171D6","dark":"#5383E8"},"main700":{"light":"#2F5EC0","dark":"#5383E8"},"main800":{"light":"#2F436E","dark":"#81ACFF"},"main900":{"light":"#28344E","dark":"#81ACFF"},"gray0":{"light":"#FFF","dark":"#31313C"},"gray100":{"light":"#F7F7F9","dark":"#282830"},"gray200":{"light":"#ebeef1","dark":"#1C1C1F"},"gray250":{"light":"#DBE0E4","dark":"#424254"},"gray300":{"light":"#C3CBD1","dark":"#515163"},"gray400":{"light":"#9AA4AF","dark":"#7B7A8E"},"gray500":{"light":"#758592","dark":"#9E9EB1"},"gray600":{"light":"#57646F","dark":"#9E9EB1"},"gray700":{"light":"#44515C","dark":"#B7B7C9"},"gray800":{"light":"#34414D","dark":"#B7B7C9"},"gray900":{"light":"#202D37","dark":"#FFF"},"red100":{"light":"#FFF1F3","dark":"#59343B"},"red200":{"light":"#FFD8D9","dark":"#703C47"},"red300":{"light":"#FFBAC3","dark":"#703C47"},"red400":{"light":"#FF6C81","dark":"#D31A45"},"red500":{"light":"#E84057","dark":"#E84057"},"red600":{"light":"#D31A45","dark":"#E84057"},"red700":{"light":"#B61337","dark":"#E84057"},"red800":{"light":"#703C47","dark":"#FF6C81"},"red900":{"light":"#59343B","dark":"#FF6C81"},"orange100":{"light":"#FFF1E6","dark":"#703100"},"orange200":{"light":"#FFD1A9","dark":"#8E3E00"},"orange300":{"light":"#FCB77A","dark":"#8E3E00"},"orange400":{"light":"#FF9F4A","dark":"#F06F00"},"orange500":{"light":"#FF8200","dark":"#FF8200"},"orange600":{"light":"#F06F00","dark":"#FF8200"},"orange700":{"light":"#C55900","dark":"#FF8200"},"orange800":{"light":"#8E3E00","dark":"#FF9F4A"},"orange900":{"light":"#703100","dark":"#FF9F4A"},"yellow100":{"light":"#FFF9DB","dark":"#4A340E"},"yellow200":{"light":"#FEEC9C","dark":"#76480F"},"yellow300":{"light":"#FFD424","dark":"#76480F"},"yellow400":{"light":"#FFB900","dark":"#E28400"},"yellow500":{"light":"#EB9C00","dark":"#EB9C00"},"yellow600":{"light":"#E28400","dark":"#EB9C00"},"yellow700":{"light":"#AC6306","dark":"#EB9C00"},"yellow800":{"light":"#76480F","dark":"#FFB900"},"yellow900":{"light":"#4A340E","dark":"#FFB900"},"green100":{"light":"#E6F7DB","dark":"#304A1D"},"green200":{"light":"#D0F1BB","dark":"#24662B"},"green300":{"light":"#A8E082","dark":"#24662B"},"green400":{"light":"#6CC92D","dark":"#139020"},"green500":{"light":"#00AE0A","dark":"#00AE0A"},"green600":{"light":"#139020","dark":"#00AE0A"},"green700":{"light":"#1B7D25","dark":"#00AE0A"},"green800":{"light":"#24662B","dark":"#6CC92D"},"green900":{"light":"#304A1D","dark":"#6CC92D"},"teal100":{"light":"#E5FAF3","dark":"#1D4346"},"teal200":{"light":"#BBECDB","dark":"#00666E"},"teal300":{"light":"#89DFC4","dark":"#00666E"},"teal400":{"light":"#00D7B0","dark":"#00A399"},"teal500":{"light":"#00BBA3","dark":"#00BBA3"},"teal600":{"light":"#00A399","dark":"#00BBA3"},"teal700":{"light":"#008889","dark":"#00BBA3"},"teal800":{"light":"#00666E","dark":"#00D7B0"},"teal900":{"light":"#1D4346","dark":"#00D7B0"},"blue100":{"light":"#DDF9FF","dark":"#183955"},"blue200":{"light":"#90E5F7","dark":"#114882"},"blue300":{"light":"#52D5F3","dark":"#114882"},"blue400":{"light":"#00B8ED","dark":"#006DE2"},"blue500":{"light":"#0093FF","dark":"#0093FF"},"blue600":{"light":"#006DE2","dark":"#0093FF"},"blue700":{"light":"#095BB3","dark":"#0093FF"},"blue800":{"light":"#114882","dark":"#00B8ED"},"blue900":{"light":"#183955","dark":"#00B8ED"},"purple100":{"light":"#F3EEFF","dark":"#332353"},"purple200":{"light":"#DECFFF","dark":"#3F2A75"},"purple300":{"light":"#C0A5FF","dark":"#3F2A75"},"purple400":{"light":"#A072FF","dark":"#6B42DC"},"purple500":{"light":"#7D59EA","dark":"#7D59EA"},"purple600":{"light":"#6B42DC","dark":"#7D59EA"},"purple700":{"light":"#5836B2","dark":"#7D59EA"},"purple800":{"light":"#3F2A75","dark":"#A072FF"},"purple900":{"light":"#332353","dark":"#A072FF"},"pink100":{"light":"#FFE4F4","dark":"#5F225E"},"pink200":{"light":"#FFCDEA","dark":"#8F178D"},"pink300":{"light":"#FF9BD2","dark":"#8F178D"},"pink400":{"light":"#F56CB6","dark":"#D932D6"},"pink500":{"light":"#E537A2","dark":"#E537A2"},"pink600":{"light":"#D932D6","dark":"#D932D6"},"pink700":{"light":"#B920B7","dark":"#D932D6"},"pink800":{"light":"#8F178D","dark":"#B920B7"},"pink900":{"light":"#5F225E","dark":"#B920B7"},"bronze100":{"light":"#F6EDE3","dark":"#3A3734"},"bronze200":{"light":"#E6D4BF","dark":"#52493F"},"bronze300":{"light":"#D7B792","dark":"#52493F"},"bronze400":{"light":"#A88A67","dark":"#7C6750"},"bronze500":{"light":"#907659","dark":"#907659"},"bronze600":{"light":"#7C6750","dark":"#907659"},"bronze700":{"light":"#6B5D4D","dark":"#907659"},"bronze800":{"light":"#52493F","dark":"#A88A67"},"bronze900":{"light":"#3A3734","dark":"#A88A67"},"homeDesktop":{"light":"#5383E8","dark":"#1C1C1F"},"homeMobile":{"light":"#ebeef1","dark":"#1C1C1F"}};
    // 시스템 컬러 모드
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersDarkFromMQ = mql.matches;
    let colorMode = prefersDarkFromMQ ? "dark" : "light";
    // localStorage 에 사용자 설정이 있을 경우
    // user color mode preference
    const userPreference = isDarkMode;
    const userDarkMode = userPreference && JSON.parse(userPreference);
    if (userDarkMode !== undefined) colorMode = userDarkMode ? "dark" : "light";
    // add or update css vars
    const root = document.documentElement;
    entries(colors).forEach(function(arr) {
        const name = arr[0];
        const colorByTheme = arr[1];
        const cssVarName = "--" + name;
        root.style.setProperty(cssVarName, colorByTheme[colorMode]);
    });
    // 시스템 컬러모드 변경 이벤트 캐치할 리스너
    if (!fromHook) {
        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        mql.onchange = function(event) {
            colorMode = event.matches ? "dark" : "light";
            if (!window.localStorage.getItem(src_constants__WEBPACK_IMPORTED_MODULE_3__/* .OPGG_THEME_MODE */ .KY)) {
                entries(colors).forEach(function(arr) {
                    const name = arr[0];
                    const colorByTheme = arr[1];
                    const cssVarName = "--" + name;
                    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
                });
            }
        };
    }
    // ie 일때 data-theme 예외
    if (!window.document["documentMode"]) {
        root.setAttribute("data-theme", colorMode);
    } else {
        root.setAttribute("data-ie", "true");
    }
// add theme attribute to root (for css selector)
})(false, undefined)