// 662. 二叉树最大宽度

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
// BFS 层次遍历的思路，但是会超时
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let stack = [root],
        max = 1;
    while(stack.length > 0) {
        let length = stack.length;
        max = Math.max(max, length)
        for(let i = 0; i < length; i++) {
            let tem = stack.pop()
            stack.unshift(tem?tem.left:null)
            stack.unshift(tem?tem.right:null)
        }
        // 去掉首尾的 null
        while(stack[stack.length - 1] === null) {
            stack.pop()
        }
        while(stack[0] === null) {
            stack.shift()
        }
    }
    return max;
};
// 不用 unshift 一样会超时
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let stack = [root],
        max = 1;
    while(stack.length > 0) {
        let length = stack.length;
        max = Math.max(max, length);
        let copy = [...stack]
        stack.length = 0;
        for(let i = 0; i < copy.length; i++) {
            let tem = copy[i];
            stack.push(tem?tem.left:null)
            stack.push(tem?tem.right:null)
        }
        while(stack[stack.length - 1] === null) {
            stack.pop()
        }
        while(stack[0] === null) {
            stack.shift()
        }
    }
    return max;
};
// BFS遍历时给每一个节点添加索引，左节点等于父节点 * 2，右节点等于父节点 * 2 + 1,
var widthOfBinaryTree = function(root) {
    if(!root) return 0;
    let stack = [[root, 0]],
        maxLength = -Infinity;      // 最大宽度
    while(stack.length > 0) {
        let length = stack.length;
        // 这一步是当本层只有一个节点是将 index 置为 0， 防止后面的 index 过大，会导致内存溢出
        length === 1 && (stack[0][1] = 0)
        // 本层的最小最大索引值
        let min = Infinity,
            max = -Infinity;
        for(let i = 0; i < length; i++) {
            let [node, index] = stack.shift();
            max = Math.max(max, index),
                min = Math.min(min, index);
            // 给子节点添加 index
            node.left && stack.push([node.left, index * 2])
            node.right && stack.push([node.right, index * 2 + 1])
        }
        maxLength = Math.max(maxLength, max - min + 1)
    }
    return maxLength;
};

