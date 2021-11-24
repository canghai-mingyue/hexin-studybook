// 962. 最大宽度坡

/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序法
var maxWidthRamp = function(nums) {
    let length = nums.length;
    let arr = []
    for(let i = 0; i < length; i++) {
        arr.push(i)
    }
    // arr存的是nums的值升序排列后 在原nums中的索引，比如nums[arr[0]]是nums中的最小值。
    arr.sort((a, b) => nums[a] - nums[b]);
    // 此时转换为求 arr中 i、j (i < j), arr[j] - arr[i]的值最大的问题
    let min = length,    // 当前最小值，即：arr[i]
        res = 0;        //  结果  即：arr[j] - arr[i]
    arr.forEach(val => {
        res = Math.max(res, val - min);
        min = Math.min(min, val)
    })
    return res;
};