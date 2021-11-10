// 704. 二分查找

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 经典二分法
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    let left = 0,
        right = nums.length - 1;
    while(left <= right) {
        let mid = (left + right) >> 1;
        if(nums[mid] === target) return mid;
        if(nums[mid] > target) right = mid -1;
        else left = mid + 1
    }
    return -1
};