// 969. 煎饼排序

/**
 * @param {number[]} arr
 * @return {number[]}
 */
// 思路：每回找到最大的值，做两次煎饼翻转，第一次将最大值放到首位，第二次将最大值放到末尾。递归循环执行此操作即可完成排序。
var pancakeSort = function(arr) {
    let res = [];
    // 找到最大值的索引
    const findMax = array => {
        let maxIndex = 0;
        array.forEach((val, index) => {
            val > array[maxIndex] && (maxIndex = index)
        })
        return maxIndex;
    }
    while(arr.length > 0) {
        let maxIndex = findMax(arr);
        // 第一次煎饼翻转
        arr = arr.slice(0, maxIndex+1).reverse().concat(arr.slice(maxIndex+1));
        res.push(maxIndex+1);
        // 第二次煎饼翻转
        arr.reverse();
        res.push(arr.length);
        // 去掉末尾的最大值以便后续计算与循环
        arr.pop()
    }
    return res;
};