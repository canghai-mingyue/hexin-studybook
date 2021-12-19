// 110. 平衡二叉树

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // 先判断特殊情况
    if(!root) return true;
    // 这是根据定义最直观的方法，左右子树的深度差小于等于 1，并且左右子树都是平衡树，这种方法节点会重复调用 treeHeight 方法，时间复杂度较高
    // return Math.abs(treeHeight(root.left) - treeHeight(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
    // 这种方法每个节点只调用一次 balenceHeight 方法
    return balenceHeight(root) > -1
};

// 判断二叉树是否是平衡树并返回平衡树的深度，如果不是则返回 -1.
const balenceHeight = node => {
    if(!node) return 0;
    let l = balenceHeight(node.left);
    if(l === -1) return -1;
    let r = balenceHeight(node.right);
    if(r === -1) return -1;
    return Math.abs(l-r) < 2 ? Math.max(l, r) + 1 : -1;
}
// 递归获取树的深度
const treeHeight = node => {
    if(!node) return 0;
    return Math.max(treeHeight(node.left), treeHeight(node.right)) + 1;
}