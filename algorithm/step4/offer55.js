// 剑指 Offer 55 - I. 二叉树的深度

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归  二叉树的深度等于 Math.max(左子树的深度, 右子树的深度) + 1
var maxDepth = function(root) {
    // 先处理特殊情况
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};