// 142. 环形链表 II

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 使用set
var detectCycle = function(head) {
    let set = new Set();
    while(head){
        if(set.has(head)) return head;
        else set.add(head);
        head = head.next;
    }
    return null
};

// 快慢指针
var detectCycle = function(head) {
    let fast = head,
        slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next
        if(slow === fast) {
            // 此时快慢指针相遇，头节点到入环点的距离  等于 快慢指针相遇点到入环点的距离 加上  n圈(n个环的长度)
            // 因此 使用额外的指针此时从头结点出发，与慢指针一起运动，则最后会一起到达 入环点
            let third = head;
            while(third !== slow) {
                third = third.next;
                slow = slow.next;
            }
            return third;
        }
    }
    return null
};