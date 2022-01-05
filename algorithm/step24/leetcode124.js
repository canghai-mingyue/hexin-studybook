// 124. 二叉树中的最大路径和

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
// DFS 递归
 var maxPathSum = function(root) {
    if(!root) return 0;
    let maxPath = -Infinity;
    // 辅助函数，获取每个节点的最大贡献值
    const maxSum = node => {
        if(!node) return 0;
        let left = Math.max(maxSum(node.left), 0);
        let right = Math.max(maxSum(node.right), 0);
        let max = left + right + node.val;
        maxPath = Math.max(maxPath, max);
        return Math.max(left, right) + node.val;
    }
    maxSum(root)
    return maxPath
};