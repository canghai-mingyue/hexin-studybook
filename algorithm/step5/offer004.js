// 剑指 Offer II 004. 只出现一次的数字

/**
 * @param {number[]} nums
 * @return {number}
 */
// map 暴力一下
var singleNumber = function(nums) {
    let map = new Map();
    nums.forEach(num => {
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1);
    })
    for(let [key, value] of map.entries()){
        if (value === 1) return key;
    }
};


// 牛逼解法一 ，利用位运算
// 其他数都出现了3次，因此所有数字 其二进制的第i位 之和 的余数即为 所求只出现一次的答案的  二进制的 第 i 位，而数字范围在32位之内。
var singleNumber = function(nums) {
    let res;
    // 数字范围在32位内
    for(let i = 0; i < 32; i++) {
        // 每位的 和 都需要重新计算
        let total = 0;
        // 计算第 i 位 的和，从低位开始。右移 i 位后与 1 进行按位与运算
        nums.forEach(num => {
            total += ((num >> i) & 1);
        })
        // total % 3  只会为 0 或 1，左移后与 res进行按位或运算
        res |= (total % 3) << i
        // 按位或 其实就是相加的啦，只是这里情况特殊，所以可以使用按位或，按道理来说，位运算会比较快。
        // res += (total % 3) << i
    }
    return res;
}

// 数电牛逼，这个解法没什么普遍性，先不看具体，有时间再去了解。
var singleNumber = function(nums) {
    let a = 0, b = 0;
    for (const num of nums) {
        b = ~a & (b ^ num);
        a = ~b & (a ^ num);
    }
    return b;
};
