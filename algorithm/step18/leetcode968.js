// 968. 监控二叉树

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
 * @return {number}
 */
// 主要是思路，动态规划，递归
    // 每个节点维护三种状态, a >=
// a: root 必须放置摄像头的情况下，覆盖整棵树需要的摄像头数目。
// b: 覆盖整棵树需要的摄像头数目，无论 root 是否放置摄像头。
// c: 覆盖两棵子树需要的摄像头数目，无论节点 root 本身是否被监控到。
var minCameraCover = function(root) {
    let dfs = node => {
        if(!node) return [Infinity, 0, 0]
        let [la, lb, lc] = dfs(node.left);
        let [ra, rb, rc] = dfs(node.right);
        return [lc+rc+1, Math.min(la+rb, lb+ra, lc+rc+1), Math.min(lb+rb, lc+rc+1)]
    }
    return dfs(root)[1]
};