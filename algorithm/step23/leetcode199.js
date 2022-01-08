// 199. 二叉树的右视图

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
 * @return {number[]}
 */
// BFS 层次遍历，每层将最后一个节点的值推入 res
var rightSideView = function(root) {
    if(!root) return [];
    let queue = [root],
        res = []
    while(queue.length > 0) {
        let length = queue.length;
        for(let i = 0; i < length; i++) {
            let tem = queue.shift()
            if(i === length - 1) res.push(tem.val);
            tem.left && queue.push(tem.left)
            tem.right && queue.push(tem.right)
        }
    }
    return res;
};

// DFS 按照根 => 右 => 左的顺序去遍历树，保证每层一定是最右边的节点最先被遍历到
// 并且递归时候，传递当前所在的层数，来分辨当前层是否已经将最右侧的节点推入 res
var rightSideView = function(root) {
    if(!root) return [];
    let res = []
    const dfs = (node, depth) => {
        if(!node) return;
        if(depth > res.length) res.push(node.val)
        dfs(node.right, depth+1)
        dfs(node.left, depth+1)
    }
    dfs(root, 1)
    return res;
};
