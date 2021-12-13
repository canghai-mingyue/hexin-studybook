// 107. 二叉树的层序遍历 II

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
// BFS 层次遍历，最后反转即可
var levelOrderBottom = function(root) {
    if(!root) return [];
    let stack = [root],
        res = []
    while(stack.length > 0) {
        let length = stack.length,
            level = [];
        for(let i = 0; i < length; i++) {
            let cur = stack.shift()
            level.push(cur.val)
            cur.left && stack.push(cur.left)
            cur.right && stack.push(cur.right)
        }
        res.push(level)
    }
    // 最后反转即可
    return res.reverse();
};