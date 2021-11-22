//leetcode 144 二叉树的前序遍历

/**
 * Definition for a binary tree node.
 * */
 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }

/**
 * @param {TreeNode} root
 * @return {number[]}
 * 迭代法
 */
// 前序：根  左  右
const preorderTraversal = function(root) {
    if (root == null) return [];
    let stack = [];
    let output = [];
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.pop();
        output.push(node.val);
        if (node.right != null) stack.push(node.right);
        if (node.left != null) stack.push(node.left);
    }
    return output;
}

// 递归
var preorderTraversal= function(root) {
    return root ? [root.val, ...preorderTraversal2(root.left), ...preorderTraversal2(root.right)] : []
};

// 辅助函数递归
var preorderTraversal = function(root) {
    let array = [];
    helper(root, array);
    return array;
};
const helper = function(root, array) {
    if (root == null) return null;
    array.push(root.val);
    helper(root.left, array);
    helper(root.right, array);
}

// 通用的标记法
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [],
        stack = [];
    // 初始化stack
    stack.push([0, root]);
    while(stack.length > 0){
        let [flag, node] = stack.pop();
        if (flag === 0) {
            // 未访问的节点， 右 左 根的顺序推入 stack， 推出栈即为 根 左 右 即为前序遍历
            // 这里只需改变推入顺序，即可得到前、中、后序任意遍历。
            node.right && stack.push([0, node.right]);
            node.left && stack.push([0, node.left]);
            stack.push([1, node]);
        } else {
            // 已经访问的节点，直接推入 val
            res.push(node.val)
        }
    }
    return res;
};