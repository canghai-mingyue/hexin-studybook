// 100. 相同的树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归判断每个节点的值相等
var isSameTree = function(p, q) {
    if(p === null) return !q
    if(q === null) return !p
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

