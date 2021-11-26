// 19. 删除链表的倒数第 N 个结点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 找到倒数第 n 个节点，删除它即可，删除的话就需要找到倒数第 n+1 个节点
var removeNthFromEnd = function(head, n) {
    // 使用虚拟节点避免讨论头结点被删除的情况
    let virtualNode = new ListNode(0, head);
    // 使用快慢指针来找到倒数第 n+1 各节点
    let slow = virtualNode,
        fast = virtualNode;
    // fast指针先跑n步
    while(n-- > 0) {
        fast = fast.next;
    }
    // 那么当 fast 跑到最后一个节点时，slow 就是倒数第 n+1 个节点
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    // 删除倒数第 n 个节点即可
    slow.next = slow.next.next;
    return virtualNode.next;
};