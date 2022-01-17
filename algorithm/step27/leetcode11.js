// 11. 盛最多水的容器

/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力遍历，超时
var maxArea = function(height) {
    let max = -Infinity,
        length = height.length;
    for(let i = 0; i < length - 1; i++) {
        for(let j = i+1; j < length; j++) {
            let a = j - i,
                b = Math.min(height[i], height[j]);
            let s = a * b;
            max = Math.max(max, s)
        }
    }
    return max;
};

// 双指针，每次移动对应高度较小的那个指针
var maxArea = function(height) {
    let max = -Infinity,
        left = 0,
        right = height.length - 1;  // 初始时 左右指针分别位于两侧
    while(left !== right) {
        // 当前面积
        let s = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(max, s)
        // 每次移动较小的那个指针，直至两个指针重合
        if(height[left] < height[right]) left++;
        else right--;
    }
    console.log(max)
    return max;
};

maxArea([1,8,6,2,5,4,8,3,7])
