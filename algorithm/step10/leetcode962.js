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


// 使用单调栈
var maxWidthRamp = function(A) {
    // 求单减栈 栈存的是 A 的值单调递减的 index， 坡底的 index 一定在单间栈中，可通过反证法证明
    // 假设存在某个元素位置k不存在 单减栈 中，且有最大宽度 j-k ，这也就说明 k 位置的元素一定是小于 k 前面所有的元素的，否则就会有更长的宽度，
    // 但是既然 k 小于前面所有的元素，那么k就一定会被加入到 单减栈 中，与假设矛盾，所以不存在 k，解一定存在 单减栈 中
    let stack = []
    A.forEach((val, index) => {
        // 这里的判断 不需要等号是因为 贪心 的思想来看 坡底自然越靠左越长，而从左到右遍历，相等靠右的情况可以直接 pass 掉
        if(stack.length === 0 || A[stack[stack.length - 1]] > val) {
            stack.push(index)
        }
    })
    // 求最大宽度
    let max = 0;
    for(let i = A.length - 1; i > max; i--){
        // 与 1124 题目的区别在于这里的的判断为 >=
        while(stack.length > 0 && A[i] >= A[stack[stack.length - 1]]) {
            max = Math.max(max, i - stack.pop())
        }
    }
    return max;
};