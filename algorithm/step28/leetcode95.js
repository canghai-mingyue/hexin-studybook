// 95. 不同的二叉搜索树 II

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 递归
// 枚举每个节点为根节点 i，递归生成 [start,i−1] 和 [i+1,end] 的二叉搜索树，也就是左子树和右子树，在各取一个与根节点组成二叉搜索树
var generateTrees = function(n) {
    if(n < 1) return []
    // 表示当前值的集合为 [start,end]，返回序列 [start,end] 生成的所有可行的二叉搜索树
    const generateTree = (start, end) => {
        let res = []
        // 递归终止条件
        if(start > end) return [null]
        // 枚举 i 为根节点
        for(let i = start; i <= end; i++) {
            // 可行的左子树，二叉搜索树
            let leftTrees = generateTree(start, i-1);
            // 可行的左子树，二叉搜索树
            let rightTrees = generateTree(i+1, end);
            // 各取其一组成二叉树
            for(const leftTree of leftTrees) {
                for(const rightTree of rightTrees) {
                    res.push(new TreeNode(i, leftTree, rightTree))
                }
            }
        }
        return res;
    }
    return generateTree(1, n)
};