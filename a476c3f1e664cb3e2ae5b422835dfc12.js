var voice_num = 1;
            function loadVoice(){
                $('#1apr_sound').html('<audio id="1apr_maxim" src="//www.yaplakal.com/html/static/voices/voice'+voice_num+'.mp3"></audio>');
                document.getElementById("1apr_maxim").play();
                voice_num++;
                if(voice_num>5){ voice_num = 1; }
                return false;
            }