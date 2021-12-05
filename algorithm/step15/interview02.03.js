// 面试题 02.03. 删除中间节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 只能来个伪删除了
var deleteNode = function(node) {
    let next = node.next;
    node.next = next.next;
    node.val = next.val
};