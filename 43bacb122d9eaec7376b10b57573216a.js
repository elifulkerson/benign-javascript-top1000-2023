(function() {
        $('body').on('click', '.reaction > * .buttonShare, .listPop > * .buttonShare', function(e) {

            if($(this).data("type")=='buku'){
                let title = $(this).data("title");
                let url = $(this).data("url").replace('http://', 'https://');
                let copy_link = url;
                let modals = $('.reactionModal');
                modals.find('.modalTitle').html(title);
                modals.find('#copyLinkUrl').html(copy_link);
                modals.find('.socmedTitle').html('Bagikan buku ini melalui');
                modals.find('.buttonFacebook').attr("onclick", `fb_share('${title}','${url}')`);
                modals.find('.buttonTwitter').attr("onclick", `tweet_share('${url}')`);
                modals.find('.buttonWhatsapp').attr("onclick", `whatsapp_share_new('', '${url}')`);
                modals.find('.buttonLine').attr("href", `https://line.me/R/msg/text/?${url}`);
                modals.find('.buttonTelegram').attr("onclick", `telegram_share('${title}', '${url}')`);
            }else{
                let title = $(this).data("title");
                let url = $(this).data("url").replace('http://', 'https://');
                let campaign = $(this).data("campaign");
                let modals = $('.reactionModal');
                let tagline_wa = '\\n\\nKompascom+ baca berita tanpa iklan: https://kmp.im/plus3 \\nDownload aplikasi: https://kmp.im/app3';
                let tagline_tw = '\\n\\nKompascom+ baca berita tanpa iklan: https://kmp.im/plus2 \\nDownload aplikasi: https://kmp.im/app2';
                let type = $(this).data("type") ? $(this).data("type") : 'article';
                let title_klik = (type == 'article') ? 'Klik untuk baca' : 'Klik untuk lihat video';
                let title_wa = '*'+title+'*\\n\\n'+title_klik+':\\n';
                let title_tele = '**'+title+'**';
                let utm_campaign = custom_utm_campaign();
                let copy_link = title+'\n\n'+title_klik+':\n'+url+'?utm_source=Various&utm_medium=Referral&utm_campaign='+utm_campaign+'\n\nKompascom+ baca berita tanpa iklan: https://kmp.im/plus6\nDownload aplikasi: https://kmp.im/app6';
                modals.find('.modalTitle').html(title);
                modals.find('#copyLinkUrl').html(copy_link);
                modals.find('.buttonFacebook').attr("onclick", `fb_share('${title}','${url}?utm_source=Facebook&utm_medium=Referral&utm_campaign=${utm_campaign}')`);
                if(title.length < 200){
                    modals.find('.buttonTwitter').attr("onclick", `tweet_share('${title}\\n\\n`+title_klik+`: ${url}?utm_source=Twitter&utm_medium=Referral&utm_campaign=${utm_campaign}${tagline_tw}', '${url}?utm_source=Twitter&utm_medium=Referral&utm_campaign=${utm_campaign}')`);
                }else{
                    modals.find('.buttonTwitter').attr("onclick", `tweet_share('${title}\\n\\n`+title_klik+`: ${url}?utm_source=Twitter&utm_medium=Referral&utm_campaign=${utm_campaign}')`);
                }
                modals.find('.buttonWhatsapp').attr("onclick", `whatsapp_share_new('${title_wa}', '${url}?utm_source=Whatsapp&utm_medium=Referral&utm_campaign=${utm_campaign}${tagline_wa}')`);
                modals.find('.buttonLine').attr("href", `https://line.me/R/msg/text/?${title}%0D%0A%0D%0A`+title_klik+`:%0D%0A${url}%3Futm_source=Line%26utm_medium=Referral%26utm_campaign=${utm_campaign}%0D%0A%0D%0AKompascom%2B baca berita tanpa iklan: https://kmp.im/plus4%0D%0ADownload aplikasi: https://kmp.im/app4`);
                modals.find('.buttonTelegram').attr("onclick", `telegram_share('${title_tele}', '${url}?utm_source=Telegram&utm_medium=Referral&utm_campaign=${utm_campaign}', '%0D%0A%0D%0AKompascom%2B baca berita tanpa iklan: https://kmp.im/plus5%0D%0ADownload aplikasi: https://kmp.im/app5')`);
            }

            openModal('reaction-share');
        });
    })();

    function custom_utm_campaign() {
        
        
        if (window.location.hostname.indexOf('activity') == 0) {
            if (window.location.pathname == '/saved') {
                return 'Saved_Desktop'
            } else if (window.location.pathname == '/like') {
                return 'Liked_Desktop'
            }
        } else {
            var el_socmedList = document.querySelector('.socmedList');
            if (!!el_socmedList) {
                var data_area = el_socmedList.getAttribute('data-area');
                if (data_area == 'top') {
                    return 'Top_Desktop'
                } else if (data_area == 'bottom') {
                    return 'Bottom_Desktop'
                } else {
                    return 'AIML_Widget_Desktop'
                }
            }
        }

        return 'Sticky_Desktop'
    }