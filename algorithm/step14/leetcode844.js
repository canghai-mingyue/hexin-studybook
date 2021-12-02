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

// 第二种思路，双指针从后往前遍历
var backspaceCompare = function(s, t) {
    // 记录当前 s 和 t 需要删除的字符数量
    let skipS = 0,
        skipT = 0;
    let i = s.length - 1,
        j = t.length - 1;
    // 从后往前 每次寻找最后一个字符
    while(i >= 0 || j >= 0) {
        // 寻找 s 的最后一位
        let charS = ''
        while(i >= 0 && charS === '') {
            if(s[i] === '#') {
                skipS++;
                i--;
            } else{
                if(skipS === 0) {
                    charS = s[i]
                    i--;
                } else {
                    skipS--;
                    i--;
                }
            }
        }
        // 寻找 t的最后一位
        let charT = ''
        while(j >= 0 && charT === '') {
            if(t[j] === '#') {
                skipT++;
                j--;
            } else{
                if(skipT === 0) {
                    charT = t[j]
                    j--;
                } else {
                    skipT--;
                    j--;
                }
            }
        }
        // 只要当前最后一位不相等 就返回false
        if(charS !== charT) return false;
    }
    return true;
};

backspaceCompare("xywrrmp","xywrrmu#p")