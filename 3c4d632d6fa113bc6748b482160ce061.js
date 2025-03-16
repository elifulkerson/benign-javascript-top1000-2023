(runinit = window.runinit || []).push(function () {
        //VideoNotify.cookieName = getRandomString();
        VideoNotify.timerequest = 30000;//30s request 1 lần nếu ko có dữ liệu
        VideoNotify.init();

        //tam ngung vi dot nay ko co
        //TieuDungNotify.timerequest = 30000;
        //TieuDungNotify.init();
    });