// 103. 二叉树的锯齿形层序遍历

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
 * @return {number[][]}
 */
// BFS 层次遍历，记录层数，根据层数来决定遍历方向
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    let stack = [root],
        res = [],
        count = 0;
    while(stack.length > 0) {
        let length = stack.length,
            level = [];
        for(let i = 0; i < length; i++) {
            let cur = stack.shift()
            // 偶数层 push
            count % 2 === 0 && level.push(cur.val)
            // 奇数层 shift
            count % 2 === 1 && level.unshift(cur.val)
            cur.left && stack.push(cur.left)
            cur.right && stack.push(cur.right)
        }
        res.push(level)
        count++
    }
    return res;
};