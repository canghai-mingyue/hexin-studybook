// 101. 对称二叉树

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
 * @return {boolean}
 */
// 递归
var isSymmetric = function(root) {
    if(!root) return true;
    // 两个指针，递归判断左子树等于右子树
    const dfs = (left, right) => {
        if(!left && !right) return true;
        if(!left || !right) return false;
        return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left)
    }
    return dfs(root.left, root.right)
};


// 迭代
var isSymmetric = function(root) {
    // 先处理特殊情况
    if(!root) return true;
    if(!root.left && !root.right) return true;
    if(!root.left || !root.right) return false;
    // 左右依次入队，相邻的两个节点的值应该是相等的
    let queue = [root.left, root.right];
    while(queue.length > 0) {
        let tem1 = queue.pop(),
            tem2 = queue.pop();
        if(!tem1 && !tem2) continue;
        if(!tem1 || !tem2) return false;
        if(tem1.val !== tem2.val) return false;
        // 这里两个节点的子节点相反的顺序入队列，即可保证相邻的两个节点相等，否则就不是镜像对称的
        queue.push(tem1.left)
        queue.push(tem2.right)
        queue.push(tem2.left)
        queue.push(tem1.right)
    }
    return true
};