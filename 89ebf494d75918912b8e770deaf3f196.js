window.M = window.M || {}
    M.fn = {}
    M.state = {
        app: {
            lang: 'ru',
            domain: 'ru',
            subdomain: 'www',
            layout: 'desktop',
            project: 'weather',
            version: 'master',
            build: '4.0.339',
            host: 'http://api.gismeteo.ng/v3',
            api: 'v3',
            timestamps: {
                now: new Date('2023/10/16 04:42:30'),
                local: Date.now()
            },
            dc: 'nord',
            uniq: '5e611966ad22cab5993722c1e5fc9b93',
            day: '1',
            section: 'index',
            counters: {
                ym: [],
                ga: [],
                gtag: [],
            },
            X: +'0',
            device: {
                type: 'desktop',
                origin: 'desktop'
            },
            cacheDate: ''
        },
        advert: {
            puids: {},
            pubads: [],
            slots: []
        },
        abtests: {
            group: +'8',
            cookie: 'ab_audience_2',
            current: null
        },
        city: null,
        news: {},
        weather: {
            cw: null
        },
        maps: {},
        popup: {
            dates: [],
            units: [
                { key: 1, title: 'Celsius', isActive: true, unit: 'c' },
                { key: 2, title: 'Fahrenheit', isActive: false, unit: 'f' }
            ],
            horizontal: []
        },
        info: {}
    }
    try {
        M.state.city = {"source":"fetch","id":29414,"url":"/weather-tucson-29414/","slug":"tucson","kind":"A","coordinates":{"latitude":32.116089,"longitude":-110.94099399999999},"obsStationId":2833,"timeZone":-420,"country":{"id":181,"url":"/catalog/united-states/","code":"US"},"district":{"id":380,"url":"/catalog/united-states/arizona/"},"subdistrict":null,"translations":{"ru":{"city":{"name":"Тусон","nameP":"Тусон","nameR":""},"country":{"name":"США","nameP":"в США","nameR":"США"},"district":{"name":"Аризона","nameP":"в Аризоне","nameR":"Аризоны"},"subdistrict":null}},"lang":"ru","originUrl":"/weather-tucson-29414/","dates":{"local":"2023-10-15T21:42:29.626Z","utc":"2023-10-16T04:42:29.626Z"}}
        M.state.weather.cw = {"source":"fetch","date":["2023-10-16T03:55:00.000Z"],"kind":["ObsCor"],"iconWeather":["n"],"description":["Ясно"],"precipitation":[0],"roadConditionIcon":[null],"roadConditionCode":[null],"radiation":[null],"pollenGrass":[null],"pollenBirch":[null],"pollenRagweed":[null],"snowFall":[null],"snowHeight":[null],"snowIcon":[null],"temperatureAir":[26],"temperatureWater":[26],"temperatureHeatIndex":[26],"iconBg":[],"visibility":[null],"humidity":[24],"pressure":[695],"windDirection":[120],"windSpeed":[2],"windGust":[null],"stormPrediction":[],"precipitationType":[0],"cloudiness":[0],"importTime":["2023-10-16T03:55:00.000Z"],"forecastDate":[],"type":"current","cityid":29414,"version":"v3","range":[0,1]}
    } catch (e) {
        console.error(e)
    }

    M.state.info.articlePollenLink = "https://www.gismeteo.ru/news/weather/prognoz-allergii-na-gismeteo-allergeny-i-indeks-pylcy/"

    
    
    
        M.state.app.isNowcast = false
    
    M.state.app.dictionary = {"actions":{"loading":"Загрузка...","feedback":"Оставить отзыв","moreNews":"Ещё новости","readMore":"Читайте также","clear":"Очистить","fullversion":"Для больших экранов","mobileVersion":"Перейти на мобильную версию","search":"Поиск местоположения","searchPlaceholder":"поиск — через пробел можно уточнить страну или регион","geoConfirm":"Разрешите определить ваше местоположение","print":"Распечатать...","changeLocation":"Изменить пункт","searchGeoProcess":"Определение местоположения","cancel":"Отмена"},"error":{"400":{"message":"Извините, сайт временно недоступен &mdash; заходите позже","title":"Ошибка 400"},"403":{"message":"Доступ запрещен.","title":"Ошибка 403"},"404":{"message":"Неправильно набран адрес, или&nbsp;такой страницы на сайте больше не существует.","searchMessage":"Воспользуйтесь поиском или перейдите на <a href=\"/\">главную</a>","title":"Ошибка 404"},"500":{"message":"Извините, сайт временно недоступен &mdash; заходите позже","title":"Ошибка 500"},"timeup":"Увеличить время?","geo":{"0":"Произошла ошибка","1":"Вы запретили определение местоположения","2":"Не работает сеть или нет связи со спутниками","3":"Определение координат занимает слишком много времени"},"common":"Произошла ошибка","timeout":"Нет сети. Проверьте соединение с интернетом","error":"Ошибка","mainPageLinkMobile":"Перейти на главную","mainPageLink":"Перейдите на <a href=\"/\">{DOMAIN}</a>","userEcho":"Если уверены, что по этому адресу должна быть страница, <a href=\"javascript:void(0);\" class=\"js-ue-feedback\">напишите нам</a>."},"city_examples":{"0":"ивановка бельский","1":"некрасовка москва","2":"воронеж украина","3":"воронеж россия","4":"мирный брянск","5":"мирный саха","6":"москва польша","7":"париж челябинск","8":"берлин челябинск","9":"питер сша","10":"со франция","11":"хутор россия","12":"э нормандия","13":"сидней канада","14":"ватерлоо канада","15":"сан-хосе мексика"},"date":{"format":{"polar":"j M, G:i","tab_next":"D, j","full":"D, j F, G:i","header":"D, j M, G:i","menu_calendar":"D, j F","weather_link":"D, j F","tab":"D, j M","time":"G:i","weather_title":"j F","from_now":"j F, G:i","from_now_with_year":"j F Y, G:i"},"month_short":{"0":"янв","1":"фев","2":"мар","3":"апр","4":"май","5":"июнь","6":"июль","7":"авг","8":"сен","9":"окт","10":"нояб","11":"дек"},"month_short_r":{"0":"янв","1":"фев","2":"мар","3":"апр","4":"мая","5":"июня","6":"июля","7":"авг","8":"сен","9":"окт","10":"нояб","11":"дек"},"month":{"0":"январь","1":"февраль","2":"март","3":"апрель","4":"май","5":"июнь","6":"июль","7":"август","8":"сентябрь","9":"октябрь","10":"ноябрь","11":"декабрь"},"day_short":{"0":"Вс","1":"Пн","2":"Вт","3":"Ср","4":"Чт","5":"Пт","6":"Сб"},"today":"сегодня","month_r":{"0":"января","1":"февраля","2":"марта","3":"апреля","4":"мая","5":"июня","6":"июля","7":"августа","8":"сентября","9":"октября","10":"ноября","11":"декабря"},"year":"Год","now":"сейчас","tomorrow":"завтра","day":{"0":"Воскресение","1":"Понедельник","2":"Вторник","3":"Среда","4":"Четверг","5":"Пятница","6":"Суббота"}},"words":{"settlements":"Город, район, область, страна, аэропорт","weather":"Погода","close":"Закрыть","nearestams":"Ближайшие метеостанции","nearesttime":"на&nbsp;ближайшее время","more":"ещё","nowcast":"Смотрите осадки<br />на карте","now":"Сейчас","no_data":"Нет данных","example":"Например","last_news":"Последние новости","readMore":"Читать дальше","aggregator":"Дайджест","company":"Компания","others":"Другие","airports":"Аэропорты","expand":"Развернуть","collapse":"Свернуть","fact":"Фактические данные от:","forecast":"Прогноз от:","next_day":"Следующий день","prev_day":"Предыдущий день"},"search":{"notFound":"Ничего не найдено","lastViewed":"Вы недавно смотрели","findAll":"Найти все пункты","nearest":"Поблизости","favoritesTitle":"Избранные пункты","viewedTitle":"Просмотренные","ipTitle":"Ближайшие города по IP-адресу","countries":"Страны","allWorld":"Весь мир","citiesTitle":"Пункты","settlements":"Населённые пункты","onQuery":"По запросу &laquo;{QUERY}&raquo; найдено {TOTAL} {PLACES}","myCities":"Мои пункты","saved":"Сохранённые"},"widgetsParams":{"title":"Набор данных в прогнозе","settings":"Набор данных","add":"Добавить в прогноз","remove":"Убрать из прогноза","dismiss":"Оставить","teaser":"<b>Что нового:</b> теперь можно настраивать прогноз","tips":{"0":"Тут можно убрать или добавить параметры для прогноза","1":"Настройте прогноз по вашим интересам","2":"Геомагнитное поле, влажность, УФ-индекс и другие параметры","3":"Выберите параметры, которые хотите видеть в прогнозе"},"description":"Выберите параметры, которые хотите видеть в прогнозе","accent":{"snow-add":"Смотрите как меняется высота снежного покрова","snow-remove":"Похоже, что снег не лежит и в ближайшее время не выпадет","pollen-birch-add":"Идёт сезон цветения берёзы. Следите за аллергеном","pollen-grass-add":"Идёт сезон цветения злаков. Следите за аллергеном","pollen-ragweed-add":"Идёт сезон цветения амброзии. Следите за аллергеном","pollen-remove":"Снизилась концентрация пыльцы в воздухе","pollen-map":"Следите за активностью аллергенов на карте","radiation":"Чтобы не обгореть, смотрите на индекс ультрафиолета","roadcondition":"Погода на дорогах у вас в&nbsp;прогнозе"},"info":{"more":"Подробнее о параметре","toggle":"Отображать в прогнозе"},"ariaLabels":{"dataset":"Набор данных в прогнозе","info":"Как настроить прогноз","back":"Обратно","hide-teaser":"Скрыть подсказку"},"groups":{"temperature":"Температура","wind":"Ветер","precipitation":"Осадки","allergy":"Аллергия","more":"Ещё"},"IconWeather":{"title":"Погодная иконка","description":""},"TemperatureAir":{"title":"Температура воздуха","description":""},"TemperatureHeatIndex":{"title":"Температура по ощущению","description":""},"TemperatureAvg":{"title":"Среднесуточная температура","description":"Только в&nbsp;прогнозе по&nbsp;дням"},"WindSpeed":{"title":"Средняя скорость ветра","description":""},"WindGust":{"title":"Порывы ветра","description":""},"WindDirection":{"title":"Направление ветра","description":""},"Birch":{"title":"Пыльца берёзы","description":""},"Ragweed":{"title":"Пыльца амброзии","description":""},"Grass":{"title":"Пыльца злаковых трав","description":""},"Precipitation":{"title":"Осадки в жидком эквиваленте","description":""},"RoadCondition":{"title":"Погода на дорогах","description":""},"Pressure":{"title":"Давление","description":""},"Humidity":{"title":"Относительная влажность","description":""},"Radiation":{"title":"УФ-индекс","description":""},"Gm":{"title":"Геомагнитная активность","description":""},"SnowFall":{"title":"Выпадающий снег","description":""},"SnowHeight":{"title":"Высота снежного покрова","description":""}},"interactive_map":{"toggle":{"birch":"Берёза","grass":"Злаки","ragweed":"Амброзия"},"title":{"birch":"Концентрация пыльцы берёзы","grass":"Концентрация пыльцы злаков","ragweed":"Концентрация пыльцы амброзии"}},"measureUnits":{"n_a":"н/д","mm_hg_atm":"мм рт. ст.","hg_atm":"рт. ст.","h_pa":"гПа","C":"°C","F":"F","percent":"%","min":"мин","hour":"ч","mm":"мм","m":"м","km_h":"км/ч","km":"км","point":"балл","points":"баллы","m_s":"м/c","kp_index":"Кп-индекс","point_m3":"ед./м<sup>3</sup>"}}