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
// 树的问题一般都可以递归解决
var invertTree = function(root) {
    if(!root) return root;
    // let left = invertTree(root.left);
    // let right = invertTree(root.right);
    // root.left = right;
    // root.right = left;
    // 解构赋值简化代码
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root;
};

// 树的问题，涉及到遍历的话，一般也可以使用迭代法
var invertTree = function(root) {
    if(!root) return root;
    let stack = [];
    stack.push(root);
    while(stack.length > 0) {
        let tem = stack.pop();
        tem.left && (stack.push(tem.left));
        tem.right && (stack.push(tem.right));
        [tem.left, tem.right] = [tem.right, tem.left]
    }
    return root;
};