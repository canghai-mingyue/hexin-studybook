// 470. 用 Rand7() 实现 Rand10()

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand7 = function() {}

// 拒绝采样
var rand10 = function() {
    let row, column, product;
    do {
        row = rand7();
        column = rand7();
        product = column + (row - 1) * 7
    } while (product > 40)   // 只取前40种结果
    return 1 + (product - 1) % 10;
};

// 减少拒绝的概率
var rand10 = function() {
    var a, b, idx;
    while (true) {
        a = rand7();
        b = rand7();
        idx = b + (a - 1) * 7;
        if (idx <= 40) {
            return 1 + (idx - 1) % 10;
        }
        a = idx - 40;
        b = rand7();
        // 1 到 63 的随机数
        idx = b + (a - 1) * 7;
        if (idx <= 60) {
            return 1 + (idx - 1) % 10;
        }
        a = idx - 60;
        b = rand7();
        // 1 到 21 的随机数
        // get uniform dist from 1 - 21
        idx = b + (a - 1) * 7;
        if (idx <= 20) {
            return 1 + (idx - 1) % 10;
        }
    }
};
// 万能构造法  https://leetcode-cn.com/problems/implement-rand10-using-rand7/solution/mo-neng-gou-zao-fa-du-li-sui-ji-shi-jian-9xpz/
// 构造 2 次采样，分别有 2 和 5 种结果，组合起来便有 10 种概率相同的结果。
// 把这 10 种结果映射到 [1,10] 即可。
var rand10 = function() {
    let first, second;
    while((first = rand7()) > 6);
    while((second = rand7()) > 5);
    return first % 2 === 0 ? second : second+5
}