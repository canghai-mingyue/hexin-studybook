// 227. 基本计算器 II

/**
 * @param {string} s
 * @return {number}
 */
// 使用栈记录每一个操作数
// 先计算乘法和除法，记录数字和它前面的符号，若为乘法或除法，则先计算再入栈，最后栈的所有数字相加即可
// 另外注意：leetcode本题要求的不是最后的结果取整，而是在其中的每次除法中就要取整数。
var calculate = function(s) {
    let stack = [],
        codes = ['+', '-', '*', '/'],
        preCode = '+',          //  第一个数字的符号为 ‘+’
        curFigure = '';
    for(const char of s){
        if(codes.includes(char)) {
            if(preCode === '*') {
                // 乘法则与前一个操作数相乘再推入栈
                let code = stack.pop()
                stack.push(parseInt(curFigure) * code)
            } else if(preCode === '/'){
                // 乘法则与前一个操作数相除再推入栈
                let code = stack.pop()
                // 注意 这里保留整数不能用 Math.floor()，因为可能会出现负小数
                stack.push(parseInt(code / parseInt(curFigure)))
            } else {
                // 加法则推入自身，减法则推入相反数
                stack.push(parseInt(preCode + curFigure))
            }
            curFigure = '';
            preCode = char;
        } else {
            // 另外这里要注意空格的存在
            char !== ' ' && (curFigure += char);
        }
    }
    // 循环完后仍有一个操作数未计算。需要再判断一下
    if(preCode === '*') {
        let code = stack.pop()
        stack.push(parseInt(curFigure) * code)
    } else if(preCode === '/'){
        let code = stack.pop()
        stack.push(parseInt(code / parseInt(curFigure)))
    } else {
        stack.push(parseInt(preCode + curFigure))
    }
    // 求和即可
    return stack.reduce((pre, cur) => pre + cur, 0);
};

let input = "14-3/2"

calculate(input)