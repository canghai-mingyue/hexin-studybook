// 264. 丑数 II

/**
 * @param {number} n
 * @return {number}
 */
// 主要是思路，每一个丑数都是由前面的丑数 * 2 或 3 或 5 所得到的，所以采用迭代的方法获取第 n 个丑数
var nthUglyNumber = function(n) {
    if(n === 1) return 1;
    let array = [1],        // 丑数列表
        count2 = 0,         // 2 倍的指针
        count3 = 0,         // 3 倍的指针
        count5 = 0;         // 5 倍的指针
    for(let i = 1; i < n; i++) {
        // 每回取最小值
        array[i]  = Math.min(array[count2]*2, array[count3]*3, array[count5]*5)
        array[i] === array[count2]*2 && count2++;
        array[i] === array[count3]*3 && count3++;
        array[i] === array[count5]*5 && count5++;
    }
    return array[array.length - 1]
};




// 多次执行本函数的话，可以将 array 和指针写到外面，不需要每次调用都重新初始化，
let array = [1],
    count2 = 0,
    count3 = 0,
    count5 = 0;

var nthUglyNumber = function(n) {
    if(n < array.length) return array[n - 1];
    let length = array.length;
    // 也不需要每次都从第二个丑数开始寻找
    for(let i = length; i < n; i++) {
        array[i]  = Math.min(array[count2]*2, array[count3]*3, array[count5]*5)
        array[i] === array[count2]*2 && count2++;
        array[i] === array[count3]*3 && count3++;
        array[i] === array[count5]*5 && count5++;
    }
    return array[array.length - 1]
};