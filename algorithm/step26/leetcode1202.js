// 1202. 交换字符串中的元素

/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const length = s.length;
    // 并查集 存储的是字符串 s 的 index
    const parents = new Array(length).fill(0).map((v, i) => i);
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
    // 根据 pairs 将可以任意交换的 index 连通
    for(const [a, b] of pairs){
        union(a, b)
    }
    // 建立映射： 代表元素 => 对应的字符数组
    const map = new Map()
    for(let i = 0; i < length; i++) {
        // 代表元素
        let presentIndex = find(i)
        // 更新 map 的 value
        if(map.has(presentIndex)) {
            map.get(presentIndex).push(s[i])
        } else {
            map.set(presentIndex, [s[i]])
        }
    }
    // 将同一集合下的数组进行排序，这里使用降序，方便后面拼接字符串时使用 pop 方法，性能比 shift 更好
    for(const key of map.keys()){
        map.get(key).sort((a, b) => b.charCodeAt() - a.charCodeAt())
    }
    // 重新拼接字符串
    let res = ''
    for(let i = 0; i < length; i++) {
        // 使用集合中最靠前的元素
        res += map.get(find(i)).pop()
    }
    return res;
};