
// 有效的括号
// 思路：使用栈来存储，左括号则入栈，右括号则判断栈顶的元素是否与当前右括号是一对，若不是则直接返回false，若是则刚好双双抵消掉。
// 处理完所有字符串后，若栈为空则合法，否则不合法。
let input = '()';

const isValid = str => {
    // 若为奇数则肯定不合法
    if(str.length % 2) return false;
    // 使用map来存储映射关系
    let map = new Map([[')', '('], ['}', '{'], [']', '[']]);
    let stack = [];
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        if(map.get(char)){
            if(stack.pop() !== map.get(char)) {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length === 0
}

console.log(isValid(input));

