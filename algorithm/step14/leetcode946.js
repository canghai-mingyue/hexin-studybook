// 946. 验证栈序列

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [],
        index = 0;
    pushed.forEach(item => {
        stack.push(item);
        // 此处要加上 stack.length > 0 条件，否则会出现无限循环
        while(stack.length > 0 && stack[stack.length - 1] === popped[index]) {
            stack.pop()
            index++
        }
    })
    return stack.length === 0
};