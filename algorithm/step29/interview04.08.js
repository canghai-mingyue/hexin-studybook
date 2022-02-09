// 面试题 04.08. 首个共同祖先

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 注意： 普通二叉树而不是二叉搜索树
// 深度优先遍历, 如果p和q的共同祖先不是他们其中一个的话，p和q必然在这个最近祖先的左右子树各一个。
// 因为我们是自底向上从叶子节点开始更新的，所以在所有满足条件的公共祖先中一定是深度最大的祖先先被访问到
// 且在找到首个共同祖先 x 以后，Fx 按定义被设置为 true ，即假定了这个子树中只有一个 p 节点或 q 节点，因此其他公共祖先不会再被判断为符合条件。
var lowestCommonAncestor = function(root, p, q) {
    let res = null
    // dfs函数，返回该 node 是否包含 p 或者 q 节点
    const dfs = node => {
        if(!node) return false;
        let l = dfs(node.left);
        let r = dfs(node.right);
        // 表明本节点既包含 p 又包含 q节点，得到最近的公共祖先
        if((l && r)||((p.val === node.val || q.val === node.val) && (l || r))){
            res = node
        }
        // 左子树包含 p 或 q；或者右子树包含 p 或 q；或者 node 的值等于 p 或 q
        return l || r || node.val === p.val || node.val === q.val
    }
    dfs(root)
    return res;
};