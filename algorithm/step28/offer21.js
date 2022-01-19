// 剑指 Offer 21. 调整数组顺序使奇数位于偶数前面

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 直接排序
var exchange = function(nums) {
    nums.sort((a, b) => b%2 - a%2)
    return nums;
};

// 双指针 从前面找到偶数 与 后面得奇数交换位置
var exchange = function(nums) {
    let l = 0, r = nums.length - 1;
    while(l < r) {
        // 找到偶数的 index
        while(l < r && (nums[l] % 2 === 1)) {
            l++
        }
        // 找到奇数的 index
        while(l < r && (nums[r] % 2 === 0)) {
            r--
        }
        // 交换位置
        [nums[l], nums[r]] = [nums[r], nums[l]]
    }
    return nums;
};

// 因为不要求原地排序，所以可以使用创建新数组
var exchange = function(nums) {
    let arr = []
    nums.forEach(num => {
        if(num & 1) arr.unshift(num)
        else arr.push(num)
    })
    return arr;
};
