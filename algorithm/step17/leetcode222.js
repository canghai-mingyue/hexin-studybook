// 222. 完全二叉树的节点个数

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
// DFS 深度优先遍历 递归实现
var countNodes = function(root) {
    if(!root) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
};
// DFS 深度优先遍历 使用栈迭代实现
var countNodes = function(root) {
    if(!root) return 0;
    let stack = [root],
        count = 0;
    while(stack.length > 0) {
        let tem = stack.pop();
        count++;
        tem.right && stack.push(tem.right);
        tem.left && stack.push(tem.left);
    }
    return count;
};
// 利用完全二叉树的性质来优化，如果左子树的高度等于右子树的高度，那么左子树一定是满二叉树，就可以通过数学公式直接获得左子树的节点个数
// 如果不等，那么右子树一定是满二叉树，可以通过数学公式直接获得右子树的节点个数
var countNodes = function(root) {
    if(!root) return 0;
    // 获取左子树和右子树的高度
    let heightLeft = getHeight(root.left),
        heightRight = getHeight(root.right);
    // if(heightLeft === heightRight) return Math.pow(2, heightLeft) + countNodes(root.right);
    // else return Math.pow(2, heightRight) + countNodes(root.left);
    // 2 的幂运算可以通过移位运算来计算，要注意加减乘除的运算优先级都高于移位运算
    if(heightLeft === heightRight) return (1 << heightLeft) + countNodes(root.right);
    else return (1 << heightRight) + countNodes(root.left);
};
// 递归获取树的高度
const getHeight = node => {
    if(!node) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
// 因为是完全二叉树，所以高度可以通过直接深度遍历到最左侧的节点来计算
const getHeight = node => {
    if(!node) return 0;
    let height = 0;
    while(node){
        height++;
        node = node.left
    }
    return height;
}


