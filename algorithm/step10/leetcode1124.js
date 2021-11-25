// 1124. 表现良好的最长时间段

/**
 * @param {number[]} hours
 * @return {number}
 */
/**
 * @param {number[]} hours
 * @return {number}
 */
// 暴力双循环
var longestWPI = function (hours) {
    let good = 0,
        bad = 0;
    let preSum = [0]
    // 前缀和
    hours.forEach(hour => {
        if(hour > 8) good++;
        else bad++;
        preSum.push(good - bad)
    })
    // 这一步与leetcode962很类似，除了不能为等号的情况
    let max = 0
    for (let i = 0; i < preSum.length-1; i++){
        for (let j = i + 1; j < preSum.length; j++){
            if (preSum[j] - preSum[i] >0){
                max = Math.max(max, j-i)
            }
        }
    }
    return max
};

// 使用单调栈
var longestWPI = function(hours) {
    // 求前缀和
    let good = 0,
        bad = 0;
    let preSum = [0]
    hours.forEach(hour => {
        if(hour > 8) good++;
        else bad++;
        preSum.push(good - bad)
    })
    // 单减栈  栈存的是前缀和数组 值单调递减的 index
    let stack = []
    stack.push(0)
    for (let i = 1; i < preSum.length; i++){
        if (preSum[stack[stack.length-1]] > preSum[i]) stack.push(i)
    }

    // 从右到左求最大跨度
    let max = 0
    for (let i = preSum.length-1; i > max; i--){
        // 与 962 题目的区别在于这里的的判断 不包含相等的情况
        while(stack.length > 0 && preSum[stack[stack.length-1]] < preSum[i]){
            max = Math.max(max, i - stack.pop() )
        }
    }
    return max
};