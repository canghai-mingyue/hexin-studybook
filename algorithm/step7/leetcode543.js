// 543. 二叉树的直径

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS   以某一节点为根节点，则经过其的最长路径为 左子树的深度 加 右子树的深度
// 那么树的直径就是以每个节点为根节点，其最长路径中最长的那个，即：
// 假设maxPath(node)为以node为根节点的最长路径，直接则为 Max(maxPath(node))
var diameterOfBinaryTree = function(root) {
    // 树的直径
    let res = 0;
    // 获取树的深度
    const getDepth = node => {
        if(!node) return 0;
        let left = getDepth(node.left);
        let right = getDepth(node.right);
        // 获取节点深度的同时，计算其最长路径，并与当前最长路径作比较
        res = Math.max(left + right, res);
        return Math.max(left, right) + 1;
    }
    // 获取根节点的长度会 dfs 遍历每个节点
    getDepth(root);
    return res;
};

