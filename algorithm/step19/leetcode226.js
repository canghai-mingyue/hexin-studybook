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
// 递归 反转每个节点
var invertTree = function(root) {
    if(!root) return root;
    // 根据经验来看，解构赋值的效率好像要比取出来再赋值要低一些
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    return root;
};


//迭代 其实就是遍历每个节点，然后反转它的两个子节点
var invertTree = function(root) {
    if(!root) return root;
    let stack = [root]
    while(stack.length > 0) {
        let tem = stack.pop();
        [tem.left, tem.right] = [tem.right, tem.left]
        // 这里的入栈顺序是无所谓的
        tem.left && stack.push(tem.left)
        tem.right && stack.push(tem.right)
    }
    return root;
};