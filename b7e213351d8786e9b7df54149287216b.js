function onLoginClient (data){
            $('.loader').remove()
            let default_image = 'https://cdn.cnnindonesia.com/cnnid/images/user.png?v=10.10.6';
            const dcUrl = 'https://connect.detik.com/dashboard/';
            if (data.is_login) {
                $('#connectDetikUName').attr('href', dcUrl);
                $('#connectDetikAvatar').attr('src', data.avatar);
                $('#connectDetikAvatar').css({'background-image': `url(${data.avatar})`, 'background-size': '100% auto'});
                
                $('#UserMenu').append(`
                    <li class="relative">
                        <a aria-label="link description" href="${dcUrl}" class="block text-white p-1.5 hover:underline">${data.first_name} ${data.last_name}</a>
                    </li>
                    <li class="relative">
                        <a aria-label="link description" href="https://connect.detik.com/oauth/signout?redirectUrl=https%3A%2F%2Fwww.cnnindonesia.com%2F" class="block text-white p-1.5 hover:underline" dtr-evt="header" dtr-sec="logout" dtr-act="logout">Keluar</a>
                    </li>
                `);
            } else {
                $('#connectDetikAvatar').attr('src', default_image);
                $('#connectDetikAvatar').css('background-image', `url(${default_image})`);

                $('#UserMenu').append(`
                    <li class="relative">
                        <a aria-label="link description" href="https://connect.detik.com/accounts/register?clientId=10027&redirectUrl=https%3A%2F%2Fwww.cnnindonesia.com%2Fauthorize&backURL=https%3A%2F%2Fwww.cnnindonesia.com%2F" class="block text-white p-1.5 hover:underline" dtr-evt="header" dtr-sec="register" dtr-act="register">Daftar</a>
                    </li>
                    <li class="relative">
                        <a aria-label="link description" href="https://connect.detik.com/oauth/authorize?clientId=10027&redirectUrl=https%3A%2F%2Fwww.cnnindonesia.com%2Fauthorize%3Fu%3Dhttps%3A%2F%2Fwww.cnnindonesia.com%2F&backURL=https%3A%2F%2Fwww.cnnindonesia.com%2F" class="block text-white p-1.5 hover:underline" dtr-evt="header" dtr-sec="login" dtr-act="login">Masuk</a>
                    </li>
                `);
            }
        }