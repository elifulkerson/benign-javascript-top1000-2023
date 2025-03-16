/**
 * 语言翻译函数
 * @param langArr 语言包数组js文件
 * @param element 要翻译的内容
 * @returns {*}
 */
function languageSwitch(langArr, element) {
    if ('string' != typeof(element))
        return '';
    if ('undefined' != typeof(langArr[element]))
        return langArr[element];
    return element;
}