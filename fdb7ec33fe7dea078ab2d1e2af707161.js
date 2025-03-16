// serviceagreement privacypolicy
var footerStr = '<div class="footer">' +
                  '<div class="about">' +
                    '<div class="about-item">' +
                      '<div class="title">å³äºéèç</div>' +
                      '<div class="links">' +
                        '<a href="//www.jrj.com.cn/list/footer_info.shtml?funname=business">åä¸åä½</a>' +
                        '<a href="//www.jrj.com.cn/list/footer_info.shtml?funname=contactus">èç³»æä»¬</a>' +
                        '<a href="//www.jrj.com.cn/sitemap.shtml">ç½ç«å°å¾</a>' +
                      '</div>' + 
                      '<div class="links">' + 
                        '<a href="//www.jrj.com.cn/list/footer_info.shtml?funname=serviceagreement">æå¡åè®®</a>' +
                        '<a href="//www.jrj.com.cn/list/footer_info.shtml?funname=privacypolicy">éç§æ¿ç­</a>' +
                      '</div>' +
                    '</div>' +
                    // '<div class="about-item" style="margin-left: 26px;margin-right: 187px">' +
                    //   '<div class="title">æä»¬çåä½ä¼ä¼´</div>' + 
                    //   '<a href="http://www.sse.com.cn">ä¸æµ·è¯åµäº¤ææ</a>' +
                    //   '<a href="http://www.szse.cn">æ·±å³è¯åµäº¤ææ</a>' +
                    // '</div>' +
                    '<div class="img-link">' +
                      '<div class="net">' + 
                        '<div class="net-item">' +
                          '<a href="//beian.miit.gov.cn/#/Integrated/index"><img src="//i0cloud.jrjimg.cn/cloud/images/common/archival-info.png" /></a>' + 
                          '<a href="//www.12377.cn/"><img src="//i0cloud.jrjimg.cn/cloud/images/common/report-area.png" /></a>' +
                        '</div>' +
                        '<div class="net-item">' +
                          '<a href="http://www.bjjubao.org/index.html"><img src="//i0cloud.jrjimg.cn/cloud/images/common/report-center.png" /></a>' +
                          '<a href="http://cyberpolice.mps.gov.cn/wfjb/html/index.shtml"><img src="//i0cloud.jrjimg.cn/cloud/images/common/alert-service.png" /></a>' +
                        '</div>' +
                      '</div>' +
                      '<div class="app">' +
                        '<img src="//static.jrj.com.cn/resource/web/qr_code_app.png" />' +
                        '<span>éèçAPP</span>' +
                      '</div>' +
                      '<div class="app">' +
                        '<img src="//static.jrj.com.cn/resource/web/qr_code_wx.png" />' +
                        '<span>éèçå¬ä¼å·</span>' +
                      '</div>' +
                      '<div class="app">' +
                        '<img src="//static.jrj.com.cn/resource/web/qr_code_glt.png" />' +
                        '<span>éèçè¡çµé</span>' +
                      '</div>' +
                      '<div class="app">' +
                        '<img src="//static.jrj.com.cn/resource/web/qr_code_sph.png" />' +
                        '<span>éèçè§é¢å·</span>' +
                      '</div>' +
                    '</div>' + 
                  '</div>'
document.writeln(footerStr);
document.writeln('<div class="copyright">Copyright Â© 2023 JRJ.COM All Rights Reserved.<span>|</span>è¿æ³åä¸è¯ä¿¡æ¯/æªæå¹´äººä¿æ¤ï¼ä¸¾æ¥çµè¯ï¼010-83363200<span>|</span>ä¸¾æ¥é®ç®±ï¼jiankong@jrj.com.cn</div>');
document.writeln('<div class="copyright"><img src="https://i0cloud.jrjimg.cn/cloud/images/common/police-shield.png" />äº¬å¬ç½å®å¤ 11010202000191å·<span>|</span>äº¬ICPè¯010031å·<span>|</span>äº¬éä¿¡å¤ã2021ã2å·<span>|</span>å¹¿æ­çµè§èç®å¶ä½ç»è¥è®¸å¯è¯ï¼äº¬ï¼å­ç¬¬854å·<span>|</span>å¢å¼çµä¿¡ä¸å¡ç»è¥è®¸å¯è¯<span>|</span><span>ä¿¡æ¯ç½ç»ä¼ æ­è§å¬èç®è®¸å¯è¯0110554</span></div></div>');
// document.writeln('<script src="//jscloud.jrjimg.cn/common/foot/jrj_dcs_tag-min.js"></script>')
document.writeln('<script src="https://jscloud.jrjimg.cn/cloud/js/common/jrj_dcs_tag-min.js"></script>')
$(function () {
  var copyright = 'Copyright Â© 2023 JRJ.COM All Rights Reserved.<span>|</span>è¿æ³åä¸è¯ä¿¡æ¯/æªæå¹´äººä¿æ¤ï¼ä¸¾æ¥çµè¯ï¼010-83363200<span>|</span>ä¸¾æ¥é®ç®±ï¼jiankong@jrj.com.cn'
  $("#copyright").html(copyright)
})