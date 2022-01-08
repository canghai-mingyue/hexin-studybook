// 剑指 Offer 68 - I. 二叉搜索树的最近公共祖先

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 思路：因为是二叉搜索树，因此可以先获取根节点到两个节点的路径，最近共同祖先即为路径开始分叉的节点。
var lowestCommonAncestor = function(root, p, q) {
    let pathp = [root],
        pathq = [root],
        cur = root;
    // 获取 p 的路径
    while(cur.val !== p.val) {
        if(cur.val > p.val) cur = cur.left;
        else cur = cur.right;
        pathp.push(cur)
    }
    // 获取 q 的路径
    cur = root;
    while(cur.val !== q.val) {
        if(cur.val > q.val) cur = cur.left;
        else cur = cur.right;
        pathq.push(cur)
    }
    // 寻找分叉点
    let length = Math.max(pathp.length, pathq.length),
        res = 0;
    for(let i = 0; i < length; i++) {
        if(pathp[i] !== pathq[i]){
            res = i - 1;
            break;
        }
    }
    return pathq[res]
};

// 另一种思路：同样是因为二叉搜索树，从根节点开始遍历，所以当 p、q 一个大于 cur，一个小于 cur 时，cur即为分叉点
// 否则则根据大小关系来移动 cur 节点。
var lowestCommonAncestor = function(root, p, q) {
    let cur = root;
    while(true){
        if(p.val < cur.val && q.val < cur.val) cur = cur.left;
        else if(p.val > cur.val && q.val > cur.val) cur = cur.right;
        else break;
    }
    return cur;
};