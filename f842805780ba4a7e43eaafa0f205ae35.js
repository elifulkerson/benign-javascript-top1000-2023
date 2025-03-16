$(document).ready(function() {
        /* MOBILE GAME RANK */
        $('.title .w343H-Rank > .rank_flatform > a').on({
            mouseover: function (e) {
                var me = $(this);
                me.parent().find('a').removeClass('active-google active-apple');
                me.addClass('active-' + (me.hasClass('rank-apple') ? 'apple' : 'google'));
                me.closest('h2').next().find('li').addClass('hidden').filter('.' + (me.hasClass('rank-apple') ? 'apple' : 'google')).removeClass('hidden');
            },
            click: function (e) {
                e.preventDefault();
            }
        });
    });