// 721. 账户合并

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
// 并查集
var accountsMerge = function(accounts) {
    let emailToName = new Map(),     // 根据邮箱获取账户名称
        emailToIndex = new Map(),    // 根据邮箱获取邮箱序号
        emailCount = 0;              // 邮箱总数
    // 首先遍历账户，更新两个 map
    accounts.forEach((account, index) => {
        let name = account[0];      // 账户名称
        for(let i = 1; i < account.length; i++) {
            let email = account[i]
            if(!emailToIndex.has(email)) {
                emailToName.set(email, name)
                emailToIndex.set(email, emailCount++)
            }
        }
    })

    // 并查集
    const parents = new Array(emailCount).fill(0).map((v, i) => i);
    // 合并： 将 node1 的代表节点设为 node2 的代表节点，也就是 1 放到 2 的底下
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
    // 再度遍历账户，开始合并集合，合并的是序号
    accounts.forEach(account => {
        let firstEmail = account[1],
            firstEmailIndex = emailToIndex.get(firstEmail)
        for(let i = 2; i < account.length; i++) {
            let curEmail = account[i],
                curEmailIndex = emailToIndex.get(curEmail);
            union(curEmailIndex, firstEmailIndex)
        }
    })
    console.log(emailToIndex)
    // 遍历所有邮箱，map 保存的为：代表邮箱的index  =>  与其同一集合的所有邮箱
    const indexToEmails = new Map()
    for(const [email, index] of emailToIndex.entries()){
        // 找到该邮箱的代表邮箱，也就是一个集合
        const presentIndex = find(index);
        if(indexToEmails.has(presentIndex)) {
            indexToEmails.get(presentIndex).push(email)
        } else {
            indexToEmails.set(presentIndex, [email])
        }
    }
    console.log(indexToEmails)
    // map 转为数组，并作排序，index 转为 name
    return Array.from(indexToEmails).map(v => [emailToName.get(v[1][0]), ...v[1].sort()])
}
const input = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
accountsMerge(input)