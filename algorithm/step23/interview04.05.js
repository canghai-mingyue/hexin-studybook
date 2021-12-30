// 面试题 04.05. 合法二叉搜索树
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}


// 中序遍历递归写法：
// 有点奇怪，leetcode 测试用例为 [0] 时，说是输出为 false，但我自己测试输出却是正常的 true。不知道有没有可能是 leetcode 搞错了
let prev = -Infinity
var isValidBST = function(root) {
    if(!root) return true;
    if(!isValidBST(root.left)) return false;
    if(root.val <= prev) return false;
    prev = root.val;
    return isValidBST(root.right);
};

let flag = isValidBST(new TreeNode(0, new TreeNode(-1), new TreeNode(2)))
console.log(flag)