// 1319. 连通网络的操作次数

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// 并查集
var makeConnected = function(n, connections) {
    // 并查集
    const parents = new Array(n).fill(0).map((v, i) => i);
    let size = n,           // 当前并查集的集合个数
        edges = 0;          // 多余的边的数量
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
    connections.forEach(connection => {
        const [node1, node2] = connection
        if(find(node1) === find(node2)) {
            // 若两个节点已经连通，则这条边是多余的
            edges++
        } else {
            // 否则连通两个节点，集合的个数减少一个
            union(node1, node2)
            size--;
        }
    })
    // 若要连通整个网络那么多余的边 应该大于等于 集合数
    return edges >= size - 1 ? size - 1 : -1
};