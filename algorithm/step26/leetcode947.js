// 947. 移除最多的同行或同列石头

/**
 * @param {number[][]} stones
 * @return {number}
 */
// 并查集
var removeStones = function(stones) {
    // 并查集，存储 x坐标 和 y 坐标
    const parents = new Map();
    let count = 0;
    // 合并 x 和 y 坐标
    const union = (x, y) => {
        let xx = find(x),
            yy = find(y);
        if(xx === yy) return;
        // 合并节点，集合数 -1
        parents.set(xx, yy)
        count--;
    }
    // 查找代表节点
    const find = v => {
        if(!parents.has(v)){
            // 新建节点，集合数 +1
            parents.set(v, v)
            count++;
        }
        if(parents.get(v) !== v) {
            parents.set(v, find(parents.get(v)))
        }
        return parents.get(v)
    }
    // 连通 x, y 坐标节点
    stones.forEach(stone => {
        const [x, y] = stone
        // 因为 x， y 的范围为 0 ~ 10000，因此 x 坐标加上 10001 来区分 x 坐标和 y 坐标
        union(x + 10001, y)
        console.log(parents)
    })
    // 结果即为 石头总数 减去 连通分量集合的个数
    return stones.length - count;
};

removeStones([[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]])