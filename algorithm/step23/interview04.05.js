// 面试题 04.05. 合法二叉搜索树
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 二叉搜索树的中序遍历为升序，所以只需要中序遍历二叉树，若途中发现当前值小于等于上一个值即可返回 false，否则返回 true。
var isValidBST = function(root) {
    // 先处理特殊情况
    if(!root) return true;
    let result = [];
    let stack = [] ;
    let cur = root;
    while(cur !== null || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop()
        // 若当前节点的值小于等于上一个节点的值则返回 false
        if(result.length > 0 && cur.val <= result[result.length-1]) return false;
        result.push(cur.val);
        cur = cur.right
    }
    return true
};

// 可以优化一下不保存中序遍历的所有结果，只保留上一个节点的值
var isValidBST = function(root) {
    // 给一个 -Infinity 的初始值，避免分类讨论第一个节点的情况
    let prev = -Infinity;
    let stack = [];
    while(root !== null || stack.length > 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop()
        // 若当前节点的值小于等于上一个节点的值则返回 false
        if(root.val <= prev) return false;
        prev = root.val
        root = root.right
    }
    return true
};

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

//  还可以递归
var isValidBST = function(root) {
    // helper 函数判断节点 node 是否在 min 和 max 范围内（开区间）
    const helper = (node, min, max) => {
        if(!node) return true;
        if(node.val <= min || node.val >= max) return false;
        // 在判断子树时，要根据根节点的值来缩小值范围
        return helper(node.left, min, node.val) && helper(node.right, node.val, max);
    }
    return helper(root, -Infinity, Infinity)
};

