function fbs_click() {
        var u = 'http://www.mynet.com/soz/gununsozu.php' + '?' + Math.random();
        var t = ' Denedin, yenildin. Yine dene, yine yenil. Daha iyi yenil! Samuel Beckett';
        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    }