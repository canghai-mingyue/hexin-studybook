// 394. 字符串解码

// 双栈法
var decodeString = function(s) {
    let result = '',    // 最终结果
        numStack = [],  // 数字栈
        strStack = [],  // 字符串栈
        multiple = 0;   // 进位，用于计算数字
    for(const char of s) {
        if(isNaN(char)){
            if(char === '[') {
                // 遇到左括号，前面数字计算完毕，推入栈并重新置为 0
                numStack.push(multiple)
                multiple = 0
                // 将前面的结果推入栈中保存
                strStack.push(result);
                result = '';
            } else if(char === ']'){
                // 遇见右括号，则将之前的结果 与 当前括号内的字符串拼接
                result = strStack.pop() + result.repeat(numStack.pop())
            } else {
                // 来拼接当前括号内的字符串
                result += char
            }
        } else {
            // 计算数字
            multiple = multiple * 10 + Number(char)
        }
    }
    return result;
};

// 单栈法：遇到右括号开始向前遍历
var decodeString = function(s) {
    let stack = []
    for (const char of s) {
        if(char !== ']') {
            stack.push(char)
        } else {
            // 遇到右括号时，开始向前遍历得到当前右括号所对应的 str
            // 获取当前括号中的字符串
            let tem = stack.pop();
            let str = '';   // 当前括号中的字符串
            while(tem !== '[') {
                str = tem + str;
                tem = stack.pop();
            }
            // 此时 tem === ‘[’, 继续向前遍历得到当前字符串需要重复的次数
            let num = '';
            let numTem = stack.pop();
            while(!isNaN(numTem)) {
                num = numTem + num;
                numTem = stack.pop();
            }
            // 此时 numTem 指向 [ 或者 ], 需要再推进去
            stack.push(numTem);
            // 将重复后的 str 推入栈
            stack.push(str.repeat(Number(num)))
        }
    }
    // 最后返回结果
    return stack.join('')
}

// 正则
var decodeString = function(s) {
    const reg = /(\d+)\[([a-z]+)\]/g
    while (s.includes('[')) s = s.replace(reg, ($, $1, $2) => $2.repeat($1))
    return s
};

// 递归
var decodeString = function(s) {
    // 返回当前括号内的字符串，以及当前括号的末尾 index，用于更新上层递归的 index
    const dfs = (i) => {
        let multiple = 0,
            res = '';
        while(i < s.length) {
            let char = s[i]
            if(isNaN(char)){
                if(char === '[') {
                    // 左括号的时候继续递归
                    let [str, index] = dfs(i+1)
                    res += str.repeat(multiple)
                    multiple = 0
                    i = index
                } else if(char === ']'){
                    // 右括号则本括号内的内容遍历完毕，返回
                    return [res ,i]
                } else {
                    res += char
                }
            } else {
                // 计算数字
                multiple = multiple * 10 + Number(char)
            }
            i++
        }
        return [res, i]
    }
    console.log(dfs(0))
    return dfs(0)[0]
}

decodeString("3[a]2[bc]")
