// 75. 颜色分类

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 使用库函数
var sortColors = function(nums) {
    nums.sort((a, b) => a - b)
};

// 计数法，记录 0 1 2的个数，再修改
var sortColors = function(nums) {
    let array = [0, 0, 0]
    nums.forEach(num => {
        array[num]++
    })
    for(let i = 0; i < nums.length; i++) {
        if(i < array[0]) nums[i] = 0;
        else if(i < array[0] + array[1]) nums[i] = 1;
        else nums[i] = 2;
    }
};

// 单指针
var sortColors = function(nums) {
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            index++
        }
    }
    for(let i = index; i < nums.length; i++) {
        if(nums[i] === 1) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            index++
        }
    }
}

// 双指针
var sortColors = function(nums) {
    let left = 0,           // 用来交换 0 的指针
        right = nums.length - 1,    // 用来交换 2 的指针
        i = 0;
    // 只需要遍历到 2 之前就可以了
    while(i <= right) {
        // 这里要交换到 nums[i] !== 2 为止
        while(i <= right && nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]]
            right--
        }
        // 这里就与上面单指针交换类似
        if(nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]]
            left++
        }
        i++;
    }
}