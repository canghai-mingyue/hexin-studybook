// 300. 最长递增子序列

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
// 定义dp[i]为前 i+1 个数以nums[i]结尾的最长递增子序列的长度，那么所求的结果就是dp中的最大值，此时关键就是递推公式
// 定义 0 <= j < i，状态转移方程：dp[i] = Max(dp[j]) + 1，但只有 nums[i] > nums[j] 时才能使用这个状态转移方程
var lengthOfLIS = function(nums) {
    let length = nums.length;
    // 初始化dp数组，并赋值为 1
    let dp = new Array(length).fill(1);
    // max为当前最长递增子序列的长度
    let max = 1;
    for(let i = 1; i < length; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        // 更新当max
        max = Math.max(max, dp[i])
    }
    return max;
};

// 贪心加二分，这是高手，贪心的思路：要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢
// 因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
var lengthOfLIS = function (nums) {
    let length = nums.length;
    // 先处理特殊情况
    if(length < 2) return length;
    // 定义 d[i] 为长度为 i + 1 的递增子序列的末尾的最小值
    // 初始化d[0]
    let d = [nums[0]];
    for(let i = 1; i < length; i++) {
        if(nums[i] === d[d.length - 1]) continue;
        else if(nums[i] > d[d.length - 1]) d.push(nums[i]);
        else {
            // 二分法
            let left = 0,
                right = d.length;
            while(left <= right) {
                let mid = (left + right) >> 1;
                // 此处的 等于的情况 以及 while中 的等号， 最后会让left加到第一个大于等于target的位置
                if(d[mid] >= nums[i]) {
                    right = mid -1;
                } else {
                    left = mid + 1;
                }
            }
            // 贪心，维持d[i] 为长度为 i + 1 的递增子序列的末尾的最小值
            d[left] = nums[i]
        }
    }
    // 最后返回 d 的length即可
    return d.length;
}