// 112. 路径总和

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
 * @param {number} targetSum
 * @return {boolean}
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// 递归 也就是 DFS
var hasPathSum = function(root, targetSum) {
    // 空节点
    if(!root) return false;
    // 叶子节点的两种情况
    // if(!root.left && !root.right && targetSum === root.val) return true;
    // if(!root.left && !root.right && targetSum !== root.val) return false;
    // 写法可以这样优化一下
    if(!root.left && !root.right) return targetSum === root.val;
    // 非叶子节点
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};

// 也可以用 BFS , 也就是迭代
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let stack1 = [root]
    stack2 = [root.val];
    while(stack1.length > 0) {
        let curNode = stack1.pop(),
            curVal = stack2.pop();
        if(!curNode.left && !curNode.right && curVal === targetSum) return true;
        if(curNode.right) {
            stack1.push(curNode.right);
            stack2.push(curVal + curNode.right.val);
        }
        if(curNode.left) {
            stack1.push(curNode.left);
            stack2.push(curVal + curNode.left.val);
        }

    }
    return false;
};

// BFS 还可以优化一下空间复杂度，只使用一个栈即可
var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    let stack = [[root, root.val]]
    while(stack.length > 0) {
        let [curNode, curVal] = stack.pop();
        if(!curNode.left && !curNode.right && curVal === targetSum) return true;
        if(curNode.right) stack.push([curNode.right, curVal + curNode.right.val]);
        if(curNode.left) stack.push([curNode.left, curVal + curNode.left.val]);
    }
    return false;
};

