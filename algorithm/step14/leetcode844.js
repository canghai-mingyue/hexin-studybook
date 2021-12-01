// 844. 比较含退格的字符串

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [],
        stack2 = [];
    for (const char of s) {
        if(char === '#') stack1.pop();
        else stack1.push(char)
    }
    for (const char of t) {
        if(char === '#') stack2.pop();
        else stack2.push(char)
    }
    return stack1.join('') === stack2.join('')
};

var backspaceCompare = function(s, t) {
    let skipS = 0,
        skipT = 0;
    let i = s.length - 1,
        j = t.length - 1;


};