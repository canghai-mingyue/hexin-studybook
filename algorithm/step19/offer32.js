// 剑指 Offer 32 - II. 从上到下打印二叉树 II

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 层次遍历，也就是广度优先遍历 BFS
var levelOrder = function(root) {
    if(!root) return [];
    let stack = [root],
        res = []
    while(stack.length > 0) {
        let length = stack.length,   // 当前层的元素数量啊
            level = [];  // 当前层的遍历结果
        for(let i = 0; i < length; i++) {
            let cur = stack.shift()         // 从队列头部取当前层的元素
            level.push(cur.val)
            // 队列尾部添加下一层的元素
            cur.left && stack.push(cur.left)
            cur.right && stack.push(cur.right)
        }
        // 当前层遍历完毕
        res.push(level)
    }
    return res;
};