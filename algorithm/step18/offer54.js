// 剑指 Offer 54. 二叉搜索树的第k大节点

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 因为是二叉搜索树，所以中序遍历即为升序，就可得到第 k 大节点，因此就是求二叉树的中序遍历
// 这里使用递归来求中序遍历  左 => 根 => 右 的顺序
var kthLargest = function(root, k) {
    let arr = [];
    const dfs = node => {
        if(!node) return;
        if(node.left) dfs(node.left);
        arr.push(node.val);
        if(node.right) dfs(node.right);
    }
    dfs(root);
    return arr[arr.length - k];
};

// 也可以使用栈来迭代求中序遍历
// 不断往左边走，当左边走不下去了，就打印节点，并转向右边，然后右边继续这个过程。
var kthLargest = function(root, k) {
    let stack = [],
        arr = [],
        cur = root; // 当前节点
    while(cur !== null || stack.length > 0){
        while(cur) {
            stack.push(cur)
            cur = cur.left;
        }
        cur = stack.pop();
        arr.push(cur.val);
        cur = cur.right;
    }
    return arr[arr.length - k];
};

// 迭代的优化，根据题意，我们可以以 右 => 根 => 左 的顺序来遍历即为降序，遍历到的第 k 个节点即为第 k 大的节点
// 这样可以提前结束遍历
var kthLargest = function(root, k) {
    let stack = [],
        count = 0,   // 已经遍历的节点个数
        cur = root;  // 当前节点
    while(cur !== null || stack.length > 0){
        while(cur) {
            stack.push(cur)
            cur = cur.right;
        }
        cur = stack.pop();
        count++;
        // 可以提前结束循环，优化时间复杂度
        if(count === k) break;
        cur = cur.left;
    }
    return cur.val;
};