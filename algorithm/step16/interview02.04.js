// 面试题 02.04. 分割链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 用两个数组分别保存小于 x 的节点和大于等于 x 的节点，然后连成链表即可
var partition = function(head, x) {
    let stack1 = [],
        stack2 = [];
    // 分别保存
    while(head) {
        if(head.val < x) stack1.push(head);
        else stack2.push(head);
        head = head.next;
    }
    let virtualNode = new ListNode(),
        node = virtualNode;
    // 连接成链表。因为不需要保留每个分区中各节点的初始相对位置，所以直接 pop 就行了
    while(stack1.length > 0) {
        node.next = stack1.pop()
        node = node.next;
    }
    while(stack2.length > 0) {
        node.next = stack2.pop()
        node = node.next;
    }
    node.next = null;
    return virtualNode.next;
};