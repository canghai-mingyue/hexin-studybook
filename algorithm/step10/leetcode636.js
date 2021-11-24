// 636. 函数的独占时间

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
// 使用栈
var exclusiveTime = function(n, logs) {
    let res = new Array(n).fill(0);
    let stack = [];
    let logArray = logs.map(v => v.split(':'));
    for(const [id, status, time] of logArray) {
        if(status === 'start') {
            stack.push([id, status, time]);
        } else {
            let tem = stack.pop()
            res[parseInt(id)] += parseInt(time) - parseInt(tem[2]) + 1;
        }
    }
    return res;
};
// 上边没有考虑独占的函数互相调用的情况
var exclusiveTime = function(n, logs) {
    let res = new Array(n).fill(0);
    let stack = [];
    let logArray = logs.map(v => v.split(':'));
    // 使用prev来表示当前栈顶 函数运行的起始时间
    let prev = 0;
    for(const [id, status, timeStr] of logArray) {
        const time = parseInt(timeStr)
        // time - prev 即为当前栈顶的函数运行的时间
        if(status === 'start') {
            // 这里要考虑栈为空的情况
            if(stack.length > 0) res[parseInt(stack[stack.length-1][0])] += time - prev;
            stack.push([id, status, time]);
            prev = time;
        } else {
            stack.pop()
            // end 要加 1
            res[parseInt(id)] += time - prev + 1;
            prev = time + 1;
        }
    }
    return res;
};

