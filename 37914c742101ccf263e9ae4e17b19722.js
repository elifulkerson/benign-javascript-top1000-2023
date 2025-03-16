(function () {
        const shidArr = location.search.match(/(?:\?|&)dyshid=([^&]*)(?:&|$)/);
        const shidStr = (shidArr && shidArr[1]) || '';
        const suid = shidStr.substring(0, shidStr.indexOf('-'));
        const sdid = shidStr.substring(shidStr.indexOf('-') + 1, shidStr.length);

        const cookieUid = document.cookie.match(/(?:^| )acf_uid=([^;]*)(?:;|$)/);
        const cookieDid = document.cookie.match(/(?:^| )acf_did=([^;]*)(?:;|$)/);
        const curUid = Number(cookieUid && cookieUid[1] || '').toString(16);
        const curDid = (cookieDid && cookieDid[1]) || '';
        const msk = curUid + '-' + curDid;
        const newUrl = new URL(window.location.href);

        newUrl.searchParams.set('dyshid', msk);
        newUrl.searchParams.delete('dyshti');
        newUrl.searchParams.delete('dyshci');
        history.replaceState({}, "", newUrl);

        window.sh_u = suid !== curUid ? suid : '';
        window.sh_d = sdid;
    })();