// 剑指 Offer 51. 数组中的逆序对

/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力遍历 超时
 var reversePairs = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] > nums[j]) count++
        }
    }
    return count;
};


// 归并排序
var reversePairs = function(nums) {
    // 用来暂存原数组中的元素
    let tem = new Array(nums.length)
    // 归并排序 nums 并返回该次合并中的逆序对数
    const mergeNums = (left, right) => {
        // 递归终止条件
        if(left >= right) return 0;
        // 中点
        let mid = (left + right) >> 1;
        // 递归获取 归并排序子数组过程中的逆序对
        let res = mergeNums(left, mid) + mergeNums(mid+1, right);
        // 计算本次合并所产生的的逆序对
        let i = left,       // 左子数组的首元素
            j = mid + 1;    // 右子数组的首元素
        // 暂存当前的元素
        for(let k = left; k <= right; k++) {
            tem[k] = nums[k]
        }
        // 开始合并
        for(let k = left; k <= right; k++){
            if(i === mid + 1) {
                // 左子数组已经合并完，后续就是右子数组
                nums[k] = tem[j++]
            } else if(j === right + 1 || tem[i] <= tem[j]) {
                // 右子数组已经合并完，后续就是左子数组；或者左子数组的当前值小于右子数组的当前值，取其中较小的那个
                nums[k] = tem[i++]
            } else {
                // 如果左子数组的当前值大于右子数组的当前值，也是取较小的那个；
                // 但这时左子数组当前值右边的元素都可以和右子数组当前值形成逆序对，新增 mid - i + 1 个逆序对
                nums[k] = tem[j++]
                res += mid - i + 1
            }
        }
        return res
    }
    return mergeNums(0, nums.length - 1)
};