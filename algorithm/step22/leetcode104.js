// 104. 二叉树的最大深度

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
var maxDepth = function(root) {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// BFS 当某一层的节点数量为 0 时，即得到最大深度
var maxDepth = function(root) {
    if(!root) return 0;
    let queue = [root],
        depth = 0;
    while(queue.length > 0) {
        depth++;
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            // 这里本层节点从头部移除，而下层节点从尾部推入
            let tem = queue.shift();
            tem.left && queue.push(tem.left)
            tem.right && queue.push(tem.right)
        }
    }
    return depth;
};