// 110. 平衡二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const maxDepth = function(node) {
    // 先处理特殊情况
    if(!node) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isBalanced = function(root) {
    if(root == null) return true;
    // 注意定义：二叉树的 每个 节点的左右子树的高度差的绝对值不超过 1，则二叉树是平衡二叉树。
    // 因此除了判断左右子树的高度差 < 2 之外，还要判断每个子节点是不是平衡二叉树。
    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2  && isBalanced(root.left) && isBalanced(root.right);
};