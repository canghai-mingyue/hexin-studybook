// 剑指 Offer 18. 删除链表的节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    // 使用虚拟节点避免分类讨论
    let virtualNode = new ListNode(0, head),
        node = virtualNode;
    while(node) {
        if(node.next.val === val) {
            node.next = node.next.next;
            break;
        }
        node = node.next;
    }
    return virtualNode.next;
};


// 这双指针也没提升时间复杂度吧，咋快这么多。
var deleteNode = function(head, val) {
    let virtualNode = new ListNode(0, head),
        pre = virtualNode,
        cur = virtualNode.next;
    while(cur) {
        if(cur.val === val) {
            pre.next = cur.next;
            break;
        }
        pre = cur;
        cur = cur.next;
    }
    return virtualNode.next;
};