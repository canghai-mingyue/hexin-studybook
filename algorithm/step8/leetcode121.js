// 121. 买卖股票的最佳时机

/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力一下，超出时间限制
var maxProfit = function(prices) {
    if(prices.length < 2) return 0;
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            max = Math.max(prices[j] - prices[i], max);
        }
    }
    return max;
};


// 其实是动态规划
var maxProfit = function(prices) {
    // 处理特殊情况
    if(prices.length < 2) return 0;
    // 目前为止历史最低价格
    let min = prices[0],
        // 表示前 i 天的最大利润
        profit = new Array(prices.length).fill(0);
    for(let i = 1; i < prices.length; i++) {
        // 更新min
        if(prices[i] < min) min = prices[i];
        // dp方程
        profit[i] = Math.max(profit[i-1], prices[i] - min)
    }
    // 返回最后一项即可
    return profit[prices.length - 1];
};



// 优化一下，只需要遍历一次
var maxProfit = function(prices) {
    if(prices.length < 2) return 0;
    // 目前为止的最低价格
    let min = prices[0],
        // 最大利润
        profit = 0;
    // 假设在第 i 天卖出
    for(let i = 1; i < prices.length; i++) {
        // 假如 prices[i] <= min，说明当前是历史最低价，更新最低价格
        if(prices[i] <= min) min = prices[i];
        // 否则 prices[i] - min 为当天卖出的最大利润，与之前的最大利润取最大值，就是目前为止的最大利润。
        else profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};