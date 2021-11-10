// 912. 排序数组
// 可以参考step1的各类排序

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 归并排序
// 分治加递归的思想，合并有序子数组，先拆成两部分，分别使用归并排序，最后合并到一起。
var sortArray = function(nums) {
    if(nums.length < 2) return nums;
    let mid = nums.length >> 1,
        arr1 = nums.slice(0, mid),
        arr2 = nums.slice(mid);
    return mergeTwoArray(sortArray(arr1), sortArray(arr2))
};

// 合并两个有序数组
// 递归会栈溢出
let mergeTwoArray = function (arr1, arr2) {
    if(arr1.length < 1) return arr2;
    if(arr2.length < 1) return arr1;
    let res = [];
    if(arr1[0] < arr2[0]) return  [arr1.shift(), ...mergeTwoArray(arr1, arr2)];
    else return  [arr2.shift(), ...mergeTwoArray(arr1, arr2)];
}

// 采用迭代实现
mergeTwoArray = function (arr1, arr2) {
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