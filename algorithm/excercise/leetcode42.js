// 42. 接雨水

/**
 * @param {number[]} height
 * @return {number}
 */
// 思路： 用总面积减去黑色的柱子的面积就是雨水的面积
var trap = function(height) {
    let length = height.length;
    let left = 0,
        right = length - 1,
        cur = 1,    // 当前柱子高度
        s = 0;      // 面积和
    while(left !== right) {
        while(left < right && height[left] < cur) {
            left++;
        }
        while(right > left && height[right] < cur) {
            right--;
        }
        // 解决类似 [2，0，2] 没有大于等于cur的柱子的问题，所以此处必须满足条件 s 才能增加
        if(height[left] >= cur) {
            s += right - left + 1
        }
        cur++;
    }
    // 解决类似 [4,9,4,5,3,2] 终点在 9 上，导致面积计算的不准确的问题
    s += height[left] - cur >= 0 ?  height[left] - cur + 1 : 0;
    // 求柱子的面积
    let sum = height.reduce((pre, cur) => pre + cur, 0);
    return s - sum
};






let input = [4,9,4,5,3,2];
trap(input)