// 684. 冗余连接

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 使用并查集
var findRedundantConnection = function(edgs) {
    const n = edgs.length;
    // 记录节点的代表节点
    const parents = new Array(n+1).fill(0).map((v, i) => i);
    // 合并两个集合
    const union = (node1, node2) => {
        parents[find(node1)] = find(node2)
    }
    // 查找节点的代表节点
    const find = node => {
        if(parents[node] !== node){
            parents[node] = find(parents[node])
        }
        return parents[node];
    }
    let res = [0]
    for(const edge of edgs) {
        const node1 = edge[0],
            node2 = edge[1];
        // 若不是连通的则连通
        if(find(node1) !== find(node2)) {
            union(node1, node2)
        } else {
            // 若已经连通，则表示这条边是多余的
            res = edge
            break
        }
    }
    return res;
}