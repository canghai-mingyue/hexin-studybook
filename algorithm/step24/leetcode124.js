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
        // 分别计算左右节点的最大贡献值，但只有正数才会被计入
        let left = Math.max(maxSum(node.left), 0);
        let right = Math.max(maxSum(node.right), 0);
        // 节点的最大路径和等于左右节点的最大贡献值加上节点本身的值
        let max = left + right + node.val;
        // 递归遍历时更新最大路径和
        maxPath = Math.max(maxPath, max);
        // 返回最大贡献值
        return Math.max(left, right) + node.val;
    }
    maxSum(root)
    return maxPath
};