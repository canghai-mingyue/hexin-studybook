// 746. 使用最小花费爬楼梯

/**
 * @param {number[]} cost
 * @return {number}
 */
// 动态规划，注意：
// 1、一个cost是可以上两级台阶的，不用×2
// 2、到达楼层顶 是指的在在到达最后一个阶梯时，还需要再上一级
// dp方程：dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
var minCostClimbingStairs = function(cost) {
    let length = cost.length;
    // 处理特殊情况
    if(length < 2) return 0;
    // 根据到达楼层顶的意思，此处初始化的dp数组长度应为 length + 1
    let dp = new Array(length + 1).fill(0);
    for(let i = 2; i <= length; i++) {
        // dp方程求dp数组
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }
    // 返回dp方程的最后一位即可
    return dp[length]
};

// 根据前面动态规划的经验来看，不需要所谓的dp数组存储所有数据，只需要存储当前的以及其前两位的数据即可
// 这可以优化空间复杂度，这叫 滚动数组 的思想
var minCostClimbingStairs = function(cost) {
    let length = cost.length;
    // 处理特殊情况
    if(length < 2) return 0;
    let prepre = 0,             // 当前位置前两位的最小花费
        pre = 0,                // 当前位置前一位的最小花费
        min = 0;                // 当前位置的最小花费
    for(let i = 2; i <= length; i++) {
        // dp方程求 min
        min = Math.min(pre + cost[i-1], prepre + cost[i-2]);
        // 更新 pre 与 prepre
        prepre = pre;
        pre = min;
    }
    return min;
};
