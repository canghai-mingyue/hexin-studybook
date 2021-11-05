// 226. 翻转二叉树

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
 * @return {TreeNode}
 */
// 递归 DFS深度优先遍历翻转
let invertTree = function(root) {
    // 处理特殊情况
    if(!root) return root;
    // 翻转
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};

// 迭代法  BFS广度优先遍历翻转
invertTree = function(root) {
    // 处理特殊情况
    if(!root) return root;
    // 使用栈来存储待处理节点
    let stack = [];
    stack.push(root);
    while(stack.length) {
     let tem = stack.pop();
     // 翻转左右
     [tem.left, tem.right] = [tem.right, tem.left];
     if(tem.left) stack.push(tem.left);
     if(tem.right) stack.push(tem.right);
    }
    return root;
};
