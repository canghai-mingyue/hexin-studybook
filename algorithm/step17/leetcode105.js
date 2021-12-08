// 105. 从前序与中序遍历序列构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 递归
// 前序： 根 => 左 => 右；中序：左 => 根 => 右
var buildTree = function(preorder, inorder) {
    // 处理特殊情况
    if(preorder.length === 0) return null;
    let head = new TreeNode(preorder[0]);
    if(preorder.length === 1) return head;
    // 找到根节点在中序遍历中的 index，以便于找到左子树和右子树的 前序和后序遍历
    let index = inorder.findIndex(v => v === head.val);
    let inorderLeft = inorder.slice(0, index),          // 左子树的中序遍历
        inorderRight = inorder.slice(index+1),          // 右子树的中序遍历
        preorderLeft = preorder.slice(1, index+1),      // 左子树的前序遍历
        preorderRight = preorder.slice(index+1);        // 右子树的前序遍历
    // 递归的到左子树和右子树
    head.left = buildTree(preorderLeft, inorderLeft);
    head.right = buildTree(preorderRight, inorderRight);
    return head;
};

// 同样是递归，做一下性能优化，在原数组上操作，而不是使用 slice 方法去切割数组，这会加大性能损耗
var buildTree = function(preorder, inorder) {
    // 这里的 start1，end1 表示前序遍历的开始与结束位置的索引，start2，end2 表示中序序遍历的开始与结束位置的索引。
    // 本方法卸载函数内部，preorder 和 inorder 这两个参数甚至可以不用传
    let createTree = function(preorder, start1, end1, inorder, start2, end2){
        // 同样是处理特殊情况
        if(start1 > end1) return null;
        let head = new TreeNode(preorder[start1]);
        if(start1 === end1) return head;
        let index;
        // 找到根节点在中序遍历中的索引
        for(let i = start2; i <= end2; i++) {
            if(inorder[i] === head.val) {
                index = i;
                break;
            }
        }
        head.left = createTree(preorder, start1+1, start1+index-start2, inorder, start2, index-1);
        head.right = createTree(preorder, start1+index-start2+1, end1, inorder, index+1, end2);
        return head;
    }
    return createTree(preorder, 0, preorder.length-1, inorder, 0, inorder.length-1);
};