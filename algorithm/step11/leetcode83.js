// 83. 删除排序链表中的重复元素

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let prev = head,
        cur = head.next;
    while(cur) {
        if(cur.val === prev.val) prev.next = cur.next
        else prev = prev.next;
        cur = cur.next;
    }
    return head;
};