// 35. 搜索插入位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法
var searchInsert = function(nums, target) {
    // 先处理特殊情况
    if(nums.length === 0) return 0;
    let left = 0,
        right = nums.length - 1;
    while(left < right) {
        let mid = (left + right) >> 1;
        // 可以提前结束循环的情况
        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        if(nums[mid] === target) return mid;
        // 二分法
        if(nums[mid] > target) right = mid - 1;
        if(nums[mid] < target) left = mid + 1;
    }
    // 最后只有没找到target的情况，根据left的值判断插入到left前还是left后
    return nums[left] >= target ? left : left+1;
};

// 思路转化一下
var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0;
    let left = 0,
        right = nums.length - 1;
    while(left <= right) {
        let mid = (left + right) >> 1;
        // 此处的 等于的情况 以及 while中 的等号， 最后会让left加到第一个大于等于target的位置，就可以直接返回left
        if(nums[mid] >= target) right = mid - 1;
        else left = mid + 1;
    }
    return left;
};