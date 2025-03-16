if (!(/bot/.test(navigator.userAgent)) && !(/Edge?\/(79|[89]\d|\d{3,})(\.\d+|)(\.\d+|)|Firefox\/(8[5-9]|9\d|\d{3,})\.\d+(\.\d+|)|Chrom(ium|e)\/(8[4-9]|9\d|\d{3,})\.\d+(\.\d+|)|Maci.+ Version\/(10\.\d+|(1[1-9]|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(9[89]|\d{3,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(12[._]([2-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Android:?[ /-](4(\.([4-9]|\d{2,})|)|([5-9]|\d{2,})(\.\d+|))(\.\d+|)|Mobile Safari.+OPR\/(7[3-9]|[89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(1{2}[5-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/([2-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(13(\.([1-9]|\d{2,})|)|(1[4-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/.test(navigator.userAgent))) {
                document.getElementById('unsupported_banner').style.display = 'block';
                document.getElementById('unsupported_banner_logo').src = '/assets/images/shutterstock-logo-pos.svg';
                document.getElementById('unsupported_banner_img').src = '/assets/images/ent_server_error_500.png';
                document.getElementsByTagName('body')[0].style.display = 'block';
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                var info = { warning: true, language: 'undefined' };
                if (window.NREUM && window.NREUM.addPageAction) {
                  window.NREUM.addPageAction('UP3-1641 block unsupported browser', info);
                }
                console.warn('UP3-1641 block unsupported browser', info);
              }