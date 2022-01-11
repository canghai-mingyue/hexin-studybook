// 128. 最长连续序列(字节面试常考的样子)

/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用 set 来去重，并且更快速的判断是否存在 num+1,
var longestConsecutive = function(nums) {
    const set = new Set(nums)
    let res = 0;
    for (const num of set){
        let cur = num
        // 如果有比 num 小 1 的数字存在，那么 num 就不需要判断，因为 num-1 的连续序列一定更长
        if(!set.has(num-1)) {
            // 寻找 num 的最长连续序列
            while(set.has(cur+1)){
                cur++
            }
        }
        // 取最长的连续序列
        res = Math.max(res, cur - num + 1)
    }
    return res;
};

// 使用 map 记录右边界
var longestConsecutive = function(nums) {
    const map = new Map();
    nums.forEach(num => {
        map.set(num, num)
    })
    let res = 0;
    for (const num of nums){
        let cur = map.get(num)
        // 避免只能一步一步的加 1 来获取边界
        while(map.has(cur+1)){
            cur = map.get(cur+1)
        }
        // 记得要更新 map 的右边界
        map.set(num, cur)
        // 取最长的连续序列
        res = Math.max(res, cur - num + 1)
    }
    return res;
};

// 动态规划
var longestConsecutive = function(nums) {
    const map = new Map();
    let res = 0;
    for (const num of nums){
        // 只有 num 第一次出现时才进入判断
        if(!map.has(num)){
            let left = map.get(num-1) || 0,         // 左边的最长连续子序列
                right = map.get(num+1) || 0,        // 右边的最长连续子序列
                value = left + right + 1;
            // 取最长的连续序列
            res = Math.max(res, value)
            // 更新 map.num 表示已经访问过 num
            map.set(num, value)
            // 然后只需要更新 num-left 和 num+right 两个边界即可，因为中间的值在遍历的时候，如果在哈希表中就会略过
            // 因为整个子序列 [num-left, num+right] 中的元素都已经被访问过了所有的值都已经存储到了map里面，那么如果其他数字只可能在这个子序列的左边或者右边
            map.set(num-left, value)
            map.set(num+right, value)
            console.log(map)
        }
    }
    return res;
};

// 并查集
var longestConsecutive = function(nums) {
    const parents = new Map();
    nums.forEach(num => {
        parents.set(num, num)
    })
    // 合并
    const union = (node1, node2) => {
        parents.set(find(node1), find(node2))
    }
    // 查找右边界
    const find = node => {
        // 判断 parents.has(node)，避免 set 值为 undefined 的 key
        if(parents.has(node) && parents.get(node) !== node){
            parents.set(node, find(parents.get(node)))
        }
        return parents.get(node);
    }
    console.log(parents)
    // 遍历 nums，连通连续的数字，也就是更新右边界
    nums.forEach(num => {
        if(find(num+1) !== undefined) {
            union(num, num+1)
        }
        console.log(parents)
    })
    let res = 0;
    // 这里不能这么遍历，因为遍历顺序的问题，所以并不是集合只有两层的
    // for(const [num, value] of parents.entries()) {
    //     res = Math.max(res, value - num + 1)
    // }
    nums.forEach(num => {
        res = Math.max(res, find(num) - num + 1)
    })
    return res;
}

longestConsecutive([100,4,200,1,3,2])
