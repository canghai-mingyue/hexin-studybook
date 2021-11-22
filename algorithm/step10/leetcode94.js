// leetcode 94 二叉树中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 利用栈来迭代
// 中序：左  根  右
const inorderTraversal = function(root) {
    let result = [];
    let stack = [] ;
    let cur = root;
    while(cur !== null || stack.length > 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop()
        result.push(cur.val);
        cur = cur.right
    }
    return result
};


// 递归
const inorderTraversal = function(root) {
    return root ? [ ...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
};

// 辅助函数递归
const inorderTraversal = function(root) {
    const result = []
    helper(root, result)
    return result
};

const helper = function(root, result) {
    if (root == null) return ;
    helper(root.left, result);
    result.push(root.val);
    helper(root.right, result);
}

// 通用的标记法
var inorderTraversal = function(root) {
    if(!root) return [];
    let res = [],
        stack = [];
    // 初始化stack
    stack.push([0, root]);
    while(stack.length > 0){
        let [flag, node] = stack.pop();
        if (flag === 0) {
            // 未访问的节点， 右 根 左 的顺序推入 stack， 推出栈即为 左 根 右 即为中序遍历
            // 这里只需改变推入顺序，即可得到前、中、后序任意遍历。
            node.right && stack.push([0, node.right]);
            stack.push([1, node]);
            node.left && stack.push([0, node.left]);
        } else {
            // 已经访问的节点，直接推入 val
            res.push(node.val)
        }
    }
    return res;
};