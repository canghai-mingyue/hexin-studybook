// 230. 二叉搜索树中第K小的元素

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
 * @param {number} k
 * @return {number}
 */
// 一样的思路，中序遍历，递归写法
var kthSmallest = function(root, k) {
    let count = 0,          // 记录元素的顺序
        res = null;
    const dfs = node => {
        if(!node) return;
        if(node.left) dfs(node.left)
        count++;
        if(k === count) res = node.val;
        if(node.right) dfs(node.right)
    }
    dfs(root)
    return res;
};