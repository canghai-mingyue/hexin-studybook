// 589. N 叉树的前序遍历

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 前序遍历：根 => 左 => 右，深度优先遍历 -- 递归
var preorder = function(root) {
    if(!root) return [];
    let res = [];
    const dfs = node => {
        res.push(node.val);
        node.children.forEach(v => dfs(v))
    }
    dfs(root)
    return res;
};

// 深度优先遍历 -- 栈迭代法
var preorder = function(root) {
    if(!root) return [];
    let stack = [root],
        res = [];
    while(stack.length > 0) {
        let {val, children} = stack.pop();
        res.push(val);
        // 这里要从右往左入栈
        for(let i = children.length - 1; i >= 0; i--) {
            stack.push(children[i])
        }
    }
    return res;
};