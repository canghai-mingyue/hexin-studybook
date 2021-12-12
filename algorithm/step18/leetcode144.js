// 144. 二叉树的前序遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归， 根 => 左 => 右
var preorderTraversal = function(root) {
    return root?[root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]:[]
};


// 迭代  根 => 左 => 右
var preorderTraversal = function(root) {
    if(!root) return [];
    let stack = [],
        res = [];
    stack.push(root)
    while(stack.length > 0) {
        let tem = stack.pop();
        res.push(tem.val);
        tem.right && stack.push(tem.right);
        tem.left && stack.push(tem.left);
    }
    return res;
};