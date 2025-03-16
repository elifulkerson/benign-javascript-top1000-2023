var el_badge = document.querySelector('.sso__badge')
var el_badge_menu = document.querySelector('.sso__badge__inline')

function checkSession() {
    var badge_temp_session = getCookie("_badge_temp_session")
    var badge_session = getCookie("badge_session")
    var badge_first_click = getCookie("badge_first_click");

    if (badge_temp_session == "" && badge_session == "")  {
        setCookie("_badge_temp_session", 1)
        setCookie("badge_session", 1, 8760)
        // console.log("test badge temp 1")
    } else if (badge_temp_session == "" && badge_session == 1) {
        setCookie("_badge_temp_session", 1)
        setCookie("badge_session", 2, 8760)
        // console.log("test badge temp 2")
    } else if (badge_temp_session == "" && badge_session == 2 && badge_first_click == 1) {
        setCookie("_badge_temp_session", 1)
        setCookie("badge_session", 3, 8760)
        // console.log("test badge temp 3")
    }

    setCookie("_badge_temp_session", 1)
}
checkSession()

function checkCookieBadgeNps() {
    var badge_session = getCookie("badge_session")
    var badge_first_click = getCookie("badge_first_click")
    var click_icon_badge = getCookie("click_icon_badge")
    var feedback_click = getCookie("feedback_click_badge")
    
    // show badge jika sesi berikutnya  
    if (badge_session == 2) {
        el_badge.style.display = "block"
        el_badge_menu.style.display = "block"
        // console.log("test 1")    
    } 

    // jika ada di sesi berikutnya dan telah click badge icon utk pertama kali, maka hide badge icon login
    if (badge_session == 2 && badge_first_click == 1) {
        el_badge.style.display = "none"
        // console.log("test 2")  
        
    // jika tidak cek,
    // jika ada di sesi berikutnya dan telah click badge icon utk pertama kali
    // atau jika di sesi berikutnya dan cookie click icon badge expired
    // atau jika di sesi berikutnya dan cookie badge feedback success expired
    } else if ((badge_session == 3 && badge_first_click == 1) || (badge_session == 3 && document.cookie.indexOf("click_icon_badge=") == -1) || (badge_session == 3 && document.cookie.indexOf("badge_feedback_success=") == -1)) {
        el_badge.style.display = "block"
        el_badge_menu.style.display = "block"
        // console.log("test 3")
    }

    // hide jika ada cookie click icon badge masih aktif 
    // utk cek cookie 2 jam, 1 hari, 1 minggu dan 4 minggu.
    if (document.cookie.indexOf("click_icon_badge=") != -1) {
        el_badge.style.display = "none"
        // console.log("test 4")
    }

    // jika "Berikan masukkanmu" telah dikilk, maka hide
    // jika tidak cek jika sesi > 1 dan cookie feedback click badge "Berikan masukkanmu" expired, maka show
    if (document.cookie.indexOf("feedback_click_badge=") != -1) {
        el_badge_menu.style.display = "none"
        // console.log("test 5")
    } else if (badge_session > 1 && document.cookie.indexOf("feedback_click_badge=") == -1) {
        el_badge_menu.style.display = "block"
        // console.log("test 6")
    }

    // hide jika telah memberi penilaian 
    if (document.cookie.indexOf("badge_feedback_success=") != -1) {
        el_badge.style.display = "none"
        el_badge_menu.style.display = "none"
        // console.log("test 7")
    }
}
checkCookieBadgeNps()

var sso__icon__login_top = document.getElementById('sso__icon__login_top')
sso__icon__login_top.addEventListener('click', function() {
    var badge_session = getCookie("badge_session")
    var badge_first_click = getCookie("badge_first_click")
    var feedback_success = getCookie("badge_feedback_success")
    var click_icon_badge = getCookie("click_icon_badge")
    var click_icon_counter_badge = getCookie("click_icon_counter_badge")

    if (feedback_success == "" || document.cookie.indexOf("badge_feedback_success=") == -1) {
        // click untuk pertama kali di sesi berikutnya
        if (badge_session == 2 && badge_first_click == "") {
            el_badge.style.display = "none"
            el_badge_menu.style.display = "block"
            setCookie("badge_first_click", 1, 8760)
            // console.log("click 1")

        // click jika sesi berikutnya setelah mengklik icon badge utk pertama kali    
        } else {
            // jika belum ada cookie click icon badge
            // dan ada di sesi berikutnya setelah click icon pertama kali
            // dan counter click icon kosong atau 0
            if (badge_session == 3 && click_icon_badge == "" && (click_icon_counter_badge == "" || click_icon_counter_badge == 0)) { 
                setCookie("click_icon_counter_badge", 1, 8760)
                setCookie("click_icon_badge", 1, 2)
                el_badge.style.display = "none"
                el_badge_menu.style.display = "block"
                // console.log("clicked 1")

            // Jika cookie badge click icon expired dan counter = 1, maka set 1 hari
            } else if (document.cookie.indexOf("click_icon_badge=") == -1 && click_icon_counter_badge == 1) { 
                setCookie("click_icon_counter_badge", parseInt(click_icon_counter_badge)+1, 8760)
                setCookie("click_icon_badge", 2, 24)
                el_badge.style.display = "none"
                el_badge_menu.style.display = "block"
                // console.log("clicked 2")

            // Jika cookie badge click icon expired dan counter = 2, maka set 1 minggu
            } else if (document.cookie.indexOf("click_icon_badge=") == -1 && click_icon_counter_badge == 2) {
                setCookie("click_icon_counter_badge", parseInt(click_icon_counter_badge)+1, 8760)
                setCookie("click_icon_badge", 3, 168)
                el_badge.style.display = "none"
                el_badge_menu.style.display = "block"
                // console.log("clicked 3")
            
            // Jika cookie badge click icon expired dan counter lebih dari 2, maka set 4 minggu
            } else if (document.cookie.indexOf("click_icon_badge=") == -1 && click_icon_counter_badge > 2) {
                setCookie("click_icon_counter_badge", 0, 8760) // reset badge counter click icon 
                setCookie("click_icon_badge", 4, 672)
                el_badge.style.display = "none"
                el_badge_menu.style.display = "block"
                // console.log("clicked 4")
            }
            // console.log("click 2")
        }  

        // jika feedback click expired dan counter >= 0, maka show
        var feedback_click_counter = getCookie("feedback_click_counter_badge")
        if (badge_session > 1 && document.cookie.indexOf("feedback_click_badge") == -1 && feedback_click_counter >= 0) {
            el_badge_menu.style.display = 'block'
        } 
    }     
})

var feedback__item = document.getElementById('feedback__item')
feedback__item.addEventListener("click", function() {
    var feedback_click = getCookie("feedback_click_badge")
    var feedback_success = getCookie("badge_feedback_success")
    var feedback_click_counter = getCookie("feedback_click_counter_badge")

    if (feedback_success == "" || document.cookie.indexOf("badge_feedback_success=") == -1) {
        // jika belum ada cookie feedback click counter, maka set 2 jam
        if (feedback_click_counter == "" || feedback_click_counter == 0) { 
            setCookie("feedback_click_counter_badge", 1, 8760)
            setCookie("feedback_click_badge", 1, 2)
            el_badge_menu.style.display = "none"
            // console.log("feedback clicked 1")

        // Jika cookie feedback click badge expired dan counter 1, maka set 1 hari
        } else if (document.cookie.indexOf("feedback_click_badge=") == -1 && feedback_click_counter == 1) { 
            setCookie("feedback_click_counter_badge", parseInt(feedback_click_counter)+1, 8760)
            setCookie("feedback_click_badge", 2, 24)
            el_badge_menu.style.display = "none"
            // console.log("feedback clicked 2")

        // Jika cookie feedback click badge expired dan counter 2, maka set 1 minggu
        } else if (document.cookie.indexOf("feedback_click_badge=") == -1 && feedback_click_counter == 2) {
            setCookie("feedback_click_counter_badge", parseInt(feedback_click_counter)+1, 8760)
            setCookie("feedback_click_badge", 3, 168)
            el_badge_menu.style.display = "none"
            // console.log("feedback clicked 3")
        
        // Jika cookie feedback click badge expired dan counter > 2, maka set 4 minggu
        } else if (document.cookie.indexOf("feedback_click_badge=") == -1 && feedback_click_counter > 2) {
            setCookie("feedback_click_counter_badge", 0, 8760)
            setCookie("feedback_click_badge", 4, 672)
            el_badge_menu.style.display = "none"
            // console.log("feedback clicked 4")
        } else {
            // jika di sesi sebelumnya sudah diklik tapi belum isi feedback
            el_badge_menu.style.display = "none"
            // console.log("feedback clicked 5")
        }
    } 
})

function setCookie(name,value,hour) {
    var expires = "";
    if (hour) {
        var date = new Date();
        date.setTime(date.getTime() + (hour*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; ;domain=.kompas.com;path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

// action create cookie badge_feedback_success expired 90 hari
var onSubmitNps = document.getElementById("nps-submit")
if (onSubmitNps !== null) {
    onSubmitNps.addEventListener("click", function(e) {
        // e.preventDefault() 
        setCookie("badge_feedback_success", 1, 2160)
    })
}