async function showKgModalJernihKomentar(data) {
    const url = `https://apis.kompas.com/api/sso_new/user/detail?token=${data['token']}&loginwith=${data['loginwith']}`
    const options = {
        method: 'GET',
        timeout: 0
    }

    const response = await fetch(url, options);
    const userProfile = await response.json();
    const user = userProfile.user

    const pattern = /\B\#[\JernihBerkomentar][\jernihberkomentar]+\b/is
    if (pattern.exec(data['comments']) !== null && (user.phone_2 == '' || typeof user.gender === 'undefined' || typeof user.birthdate === 'undefined')) {
        document.querySelector('.kgmModal-id').innerHTML = user.email
        showKgModal()
    }     
}

function showKgModal() {
    let KgComplete = document.getElementById('kgmModal-complete');
    if(!!KgComplete) {
        // Show modal
        KgComplete.classList.remove('-hide');
        // Lewati
        let KgBtnDiss = document.getElementById('kgmModal-btn-dismiss');
        if(!!KgBtnDiss) {
            KgBtnDiss.addEventListener('click', function(e){
                e.preventDefault();
                KgComplete.classList.add('-hide');
            });
        }
    }
}

function completeProfile() {
    const token = ("; "+document.cookie).split("; kmp_uid=").pop().split(";").shift();
    const jkom_hash = "$2y$10$ze3L6AYUPK4heWfgwNErNubmNl0hDiyTzF.Ony1BXFs61SsIYyScO";
    window.location.href = "https://account.kompas.com/verify_data?source=kompascom&medium=popupkomentar&vid="+token+"&rurl="+btoa(window.location.href)+"&jkom="+jkom_hash;
}