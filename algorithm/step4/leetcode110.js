// 110. 平衡二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 获取树的深度
const maxDepth = function(node) {
    // 先处理特殊情况
    if(!node) return 0;
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 自顶向下的递归，  同一个节点会多次调用maxDepth方法重复计算，时间复杂度较高。
let isBalanced = function(root) {
    if(root == null) return true;
    // 注意定义：二叉树的 每个 节点的左右子树的高度差的绝对值不超过 1，则二叉树是平衡二叉树。
    // 因此除了判断左右子树的高度差 < 2 之外，还要判断每个子节点是不是平衡二叉树。
    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2  && isBalanced(root.left) && isBalanced(root.right);
};

// 自底向上的递归，每个节点只会调用一次balancedHeight方法
isBalanced = (root) => {
    return balancedHeight(root) > -1
}

// 检查二叉树是否是平衡树，是的话则返回树的深度，不是则返回-1；
const balancedHeight = node => {
    if(node == null) return 0;
    // 左右子树只要有一个不是平衡树，那么该二叉树就不是平衡树，直接返回-1；
    let left = balancedHeight(node.left);
    if(left === -1) return -1;
    let right = balancedHeight(node.right);
    if(right === -1) return -1;
    // 左右子树都是平衡树，则还要检查二者的高度差是否不大于1；
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}

