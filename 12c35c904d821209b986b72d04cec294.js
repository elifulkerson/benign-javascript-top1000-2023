const xhr = new XMLHttpRequest()
        xhr.open('GET', '/ngamg/assets/sprite-v3.min.svg', true)
        xhr.send()
        xhr.addEventListener('load', () => {
            document.head.insertAdjacentHTML('beforeend', xhr.responseText)
        })