// 765. 情侣牵手

/**
 * @param {number[]} row
 * @return {number}
 */
// 很容易想到这种思路，其实是贪心的思路，每个座位保留一位，交换一位。
var minSwapsCouples = function(row) {
    // 使用 map 记录元素位置，便于获取元素位置
    let map = new Map()
    row.forEach((v, i) =>{
        map.set(v, i)
    })
    let count = 0;
    // 从前往后遍历并交换元素
    for(let i = 0; i < row.length; i++) {
        // 假设偶数位置元素不变，根据奇数位置的元素来判断是否需要交换
        if(i % 2 === 1) {
            let index
            // 获取本应在 i 位置的元素的目前 index
            if(row[i-1] % 2 === 1) {
                index = map.get(row[i-1] - 1)
            } else {
                index = map.get(row[i-1] + 1)
            }
            // 若不在 当前的位置 i 处，则交换，交换次数加 1
            if(index !== i) {
                count++
                // 这里不能忘记更新 map
                map.set(row[i], index)
                map.set(row[index], i)
                // 交换
                [row[i], row[index]] = [row[index], row[i]]
            }
        }
        console.log(row, i)
    }
    console.log(count)
    return count
};

// 并查集
var minSwapsCouples = function(row) {
    // 并查集，存的是人的编号
    const parents = new Array(row.length).fill(0).map((v, i) => i);
    // 合并
    const union = (node1, node2) => {
        parents[find(node1)] = find(node2)
    }
    // 查找代表节点
    const find = node => {
        if(parents[node] !== node){
            parents[node] = find(parents[node])
        }
        return parents[node];
    }
    // 先将情侣合并到一起
    for(let i = 0; i < row.length; i = i+ 2){
        union(i, i+1)
    }
    // 当前并查集中集合的数量
    let count = row.length >> 1;
    // 将坐在同一座位上的两个人合并
    for(let i = 0; i < row.length; i = i+ 2){
        if(find(row[i]) !== find(row[i+1])) {
            union(row[i], row[i+1])
            // 集合数量减 1
            count--
        }
    }
    // 情侣对数 减去 集合数量 即为结果
    // 因为同一集合中有 n 对情侣，那么需要交换 n - 1 次
    return (row.length >> 1) - count;
}







minSwapsCouples([5,4,2,6,3,1,0,7])