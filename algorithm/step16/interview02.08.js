// 面试题 02.08. 环路检测

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
// 使用 map
var detectCycle = function(head) {
    let map = new Map();
    while(head) {
        if(map.has(head)) return head;
        else map.set(head, true)
        head = head.next;
    }
    return null;
};

// 标记法
var detectCycle = function(head) {
    while(head) {
        if(head.flag) return head;
        else head.flag = true;
        head = head.next;
    }
    return null;
};
// 快慢指针
// 主要是分析，快慢指针相遇时，头节点到入环点的距离等于相遇点到入环点的距离加上 n 圈。
var detectCycle = function(head) {
    let fast = head,
        slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            fast = head;
            while(fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};