// 141. 环形链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 思路：快慢指针追及问题，若有环，则快指针一定会追上慢指针。否则则无环
var hasCycle = function(head) {
    let fast = head,
        slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true
    }
    return false;
};