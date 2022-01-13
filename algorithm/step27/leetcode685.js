// 685. 冗余连接 II

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 并查集
// 附加的边指向根节点，则包括根节点在内的每个节点都有一个父节点，此时图中一定有环路；
// 附加的边指向非根节点，则恰好有一个节点（即被附加的边指向的节点）有两个父节点，导致冲突，此时图中可能有环路也可能没有环路。
var findRedundantDirectedConnection = function(edges) {
    // 记录节点的父节点
    const parents = new Array(edges.length+1).fill(0).map((v, i) => i)
    // 并查集 记录节点的根节点，其实就是树
    const unionFind = new Array(edges.length+1).fill(0).map((v, i) => i)
    // 合并
    const union = (node1, node2) => {
        unionFind[find(node1)] = find(node2)
    }
    // 获取节点的根节点
    const find = node => {
        if(unionFind[node] !== node) {
            unionFind[node] = find(unionFind[node])
        }
        return unionFind[node]
    }
    let conflict = null,        // 导致冲突的边
        round = null;           // 导致形成环的边
    edges.forEach(edge => {
        const [parent, child] = edge
        if(parents[child] !== child) {
            // 已有父节点，说明当前这条边会导致冲突
            conflict = edge
        } else {
            parents[child] = parent
            if(find(child) === find(parent)) {
                // 两个节点的根节点相同，那么这条边会导致 形成环
                round = edge
            } else {
                // 否则合并
                union(child, parent)
            }
        }
    })
    console.log(parents)
    console.log(unionFind)
    console.log(conflict)
    console.log(round)
    if(!conflict){
        // 没有冲突的边，那么附加的边指向根节点，导致形成环
        return round
    } else {
        // 有冲突的边，说明指向非根节点，有两条边指向 conflict[1]
        // 有导致形成环的边，则附加的边不可能是 conflict（因为 conflict 已经被记为导致冲突的边，不可能被记为导致环路出现的边），因此附加的边是为指向 conflict[1] 的另一条边。
        if(round) return [parents[conflict[1]], conflict[1]]
        // 没有导致形成环的边，那么附加的边一定是导致冲突的边
        else return conflict
    }
};

findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]])