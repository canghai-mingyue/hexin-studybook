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


var reversePairs = function(nums) {

    const mergeSort = arr => {
        if(arr.length < 2) return arr;
        let middle = arr.length >> 1;
        // 拆成两部分
        let left = arr.slice(0, middle),
            right = arr.slice(middle);
    
        // 递归实现合并有序数组
        let mergeTwoArray = (arr1, arr2) => {
            if(arr1.length < 1) return arr2;
            if(arr2.length < 1) return arr1;
            if(arr1[0] < arr2[0]) return [arr1[0], ...mergeTwoArray(arr1.slice(1), arr2)]
            else return [arr2[0], ...mergeTwoArray(arr2.slice(1), arr1)]
        }
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
        return mergeTwoArray(mergeSort(left), mergeSort(right))
    }

    mergeSort(nums)
   
};