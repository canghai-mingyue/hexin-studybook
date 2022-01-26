// 1305. 两棵二叉搜索树中的所有元素

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
// 遍历两棵树 然后合并排序即可，因为是二叉搜索树，所以使用中序遍历，在归并排序比较好
var getAllElements = function(root1, root2) {
    // 获取二叉树的中序遍历
    const inorderTraversal = node => {
        let res = [],
            stack = [],
            cur = node;
        while(cur !== null || stack.length > 0) {
            while(cur) {
                stack.push(cur)
                cur = cur.left
            }
            cur = stack.pop()
            res.push(cur.val)
            cur = cur.right
        }
        return res;
    }
    // 递归实现合并两个有序数组，但是这会导致栈内存溢出
    // const mergeTwoArray = (arr1, arr2) => {
    //     if(arr1.length < 1) return arr2;
    //     if(arr2.length < 1) return arr1;
    //     if(arr1[0] < arr2[0]) return [arr1[0], ...mergeTwoArray(arr1.slice(1), arr2)]
    //     else return [arr2[0], ...mergeTwoArray(arr2.slice(1), arr1)]
    // }
    // 使用迭代 实现合并两个有序数组
    const mergeTwoArray = (arr1, arr2) => {
        if(arr1.length < 1) return arr2;
        if(arr2.length < 1) return arr1;
        let result = [];
        while(arr1.length && arr2.length) {
            if(arr1[0] < arr2[0]) result.push(arr1.shift());
            else result.push(arr2.shift());
        }
        result = result.concat(arr1.length ? arr1 : arr2);
        return result;
    }
    return mergeTwoArray(inorderTraversal(root1), inorderTraversal(root2))
};