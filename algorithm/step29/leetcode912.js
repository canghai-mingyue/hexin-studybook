// 912. 排序数组

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Array.prototype.sort() 方法 排序
var sortArray = function(nums) {
    nums.sort((a, b) => a - b)
    return nums
};

// 快速排序
var sortArray = function(nums) {
    let left = 0,
        right = arr.length -1;

    const fastSort = (nums, l, r) => {
        // 此处需注意 l < r的情况
        if(l < r) {
            let pivotIndex = getPivotIndex(nums, l, r);
            fastSort(nums, l, pivotIndex - 1);
            fastSort(nums, pivotIndex + 1, r);
        }
    }
    // 对数据进行分组，并返回 pivot (基准值)的 index
    const getPivotIndex = (nums, l, r) => {
        let pivot = nums[l];
        while(l < r) {
            // pivot取nums[l]， 则先从右边找一个小于pivot的值 放到nums[l]上，pivot取nums[r]，则相反
            // 此处须保持 l < r
            while(l < r && nums[r] >= pivot) {
                r--;
            }
            nums[l] = nums[r];
            // 此处须保持 l < r
            while(l < r && nums[l] <= pivot) {
                l++;
            }
            nums[r] = nums[l];
        }
        nums[l] = pivot
        return l
    }

    fastSort(nums, left, right)
    return nums
};


// 归并排序
const sortArray = arr => {
    if(arr.length < 2) return arr;
    let middle = arr.length >> 1;
    // 拆成两部分
    let left = arr.slice(0, middle),
        right = arr.slice(middle);

    // 迭代实现合并有序数组
    mergeTwoArray = (arr1, arr2) => {
        if(arr1.length < 1) return arr2;
        if(arr2.length < 1) return arr1;
        let result = [];
        while(arr1.length && arr2.length) {
            if(arr1[0] < arr2[0]) result.push(arr1.shift());
            else result.push(arr2.shift());
        }
        result = result.concat(arr1.length ? arr1 : arr2);
        return result;
    }
    // 对两部分分别使用递归排序，并合并
    return mergeTwoArray(sortArray(left), sortArray(right))
}