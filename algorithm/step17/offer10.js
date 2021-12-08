// 剑指 Offer 10- I. 斐波那契数列

/**
 * @param {number} n
 * @return {number}
 */
// 直接递归，超时
var fib = function(n) {
    if(n < 2) return n;
    return fib(n-1) + fib(n-2);
};

// 经典动态规划
var fib = function(n) {
    if(n < 2) return n;
    let arr = [0, 1]
    for(let i = 2; i <= n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1000000007
    }
    return arr[n];
};

// 动态规划，空间复杂度优化
var fib = function(n) {
    if(n < 2) return n;
    let prepre = 0,
        pre = 1,
        cur = 0;
    for(let i = 2; i <= n; i++) {
        cur = (pre + prepre) % 1000000007;
        prepre = pre;
        pre = cur;
    }
    return cur;
};