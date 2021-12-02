// 1021. 删除最外层的括号

/**
 * @param {string} s
 * @return {string}
 */
// 使用栈
var removeOuterParentheses = function(s) {
    let res = '',
        stack = [],
        start = 0;  // 记录第一个原语的 start index
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') stack.push(s[i]);
        else {
            stack.pop();
            if(stack.length === 0) {
                // 当栈为空时，说明找到了一个 原语，截取其 并去掉最外层的括号，再拼接到 res 上
                res += s.substring(start+1, i);
                start = i+1;
            }
        }
    }
    return res;
};