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
// 遍历链表，若当前节点与前一个节点相等，则删除当前元素
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let prev = head,
        cur = head.next;
    while(cur) {
        // 当前节点与前一个节点相等，则删除当前元素
        if(cur.val === prev.val) prev.next = cur.next
        // 否则更新 prev
        else prev = prev.next;
        // 当然无论相等与否都要更新 cur
        cur = cur.next;
    }
    return head;
};