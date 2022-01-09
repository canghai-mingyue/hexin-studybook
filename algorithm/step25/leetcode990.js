// 990. 等式方程的可满足性

/**
 * @param {string[]} equations
 * @return {boolean}
 */
// 同样是用并查集，先判断等式，将等式的变量连通，然后再判断不等式，他们不能连通
var equationsPossible = function(equations) {
    // 并查集
    const parents = new Array(26).fill(0).map((v, i) => i);
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
    // 判断等式，将相等的变量连通
    equations.forEach(equation => {
        if(equation[1] === '=') {
            union(equation[0].charCodeAt()-97, equation[3].charCodeAt()-97)
        }
    })
    let res = true
    // 判断不等式，他们的代表元素不能相同
    for(const equation of equations){
        if(equation[1] === '!') {
            // 如果相同的话就返回false
            if(find(equation[0].charCodeAt()-97) === find(equation[3].charCodeAt()-97)) {
                res = false;
                break;
            }
        }
    }
    return res;
};