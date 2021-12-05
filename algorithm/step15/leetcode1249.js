// 1249. 移除无效的括号

/**
 * @param {string} s
 * @return {string}
 */
// 这种有效括号很容易想到用栈来做，左括号直接入栈，遇到右括号则看栈是否为空，因为要删掉无效括号，因此栈存的时括号的索引
var minRemoveToMakeValid = function(s) {
    // 使用数组更方便删除
    let arr = s.split('')
    let stack = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === '('){
            // 左括号入栈
            stack.push(i);
        } else if(arr[i] === ')') {
            // 右括号时，若有左括号即可抵消
            if(stack.length > 0) stack.pop();
            // 否则则直接删除这个右括号
            else  arr[i] = ''
        }
    }
    // 最后栈若不为空，那就是有多余的左括号，依次删除
    stack.forEach(i => {
        arr[i] = ''
    })

    return arr.join('');
};``