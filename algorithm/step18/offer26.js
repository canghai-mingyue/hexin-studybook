// 剑指 Offer 26. 树的子结构

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 递归
// B 是 A 的子结构那么有三种情况 (当然首先 A 和 B 都不能为 null)
// 1、 B 是 A 以 A为根节点的子树   2、B 是 A.left 的子结构   3、B 是 A.right 的子结构
// 判断子结构的方法
var isSubStructure = function(A, B) {
    return (A !== null && B !== null) && (isSubStructure(A.left, B) || isSubStructure(A.right, B) || isChild(A, B))
};
// 判断 B 是不是 A 以 A为根节点的子树
const isChild = (A, B) => {
    // 注意这里判断的是子树，因此 null 是任意树的子树
    if(B == null) return true;
    if(A == null || A.val !== B.val) return false;
    // 同样递归判断
    return isChild(A.left, B.left) && isChild(A.right, B.right)
}