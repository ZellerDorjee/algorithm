// 替换空格
// 请实现一个函数，把字符串中的每个空格替换成"%20"。
// 你可以假定输入字符串的长度最大是1000。
// 注意输出字符串的长度可能大于1000。
// 样例
// 输入："We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
// 用正则
var replaceSpacesByReg = function(str) {
    return str.replace(/\s+/g, '%20')
};

// 直接替换
var replaceSpaces = function(str) {
    let newStr = ''
    for(let i=0;i<str.length;i++){
        newStr += str[i] === ' ' ? '%20' : str[i]
    }
    return newStr
};

replaceSpaces('We are happy')