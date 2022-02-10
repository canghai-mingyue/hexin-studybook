// 1508. 子数组和排序后的区间和

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let length = n * (n+1) / 2;
    let array = new Array(length),
        index = 0;
    // 计算子数组和
    for (let i = 0; i < n; i++) {
        let sum = 0
        for(let j = i; j < n; j++) {
            sum += nums[j]
            array[index++] = sum;
        }
    }
    // 排序
    array.sort((a, b) => a - b)
    let res = 0;
    // 取 left 到 right 之间的和
    for(let i = left; i <= right; i++) {
        res = (res + array[i-1]) % (Math.pow(10, 9) + 7)
    }
    return res;
};

rangeSum([1,2,3,4], 4, 1, 5)