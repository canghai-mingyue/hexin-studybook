// 206. 反转链表

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
// 递归
var reverseList = function(head) {
    // 处理特殊情况
    if(!head || !head.next) return head;
    // 反转 后面的节点
    let tem = reverseList(head.next);
    // 将 head 拼接到末尾并将 head.next 置为 null
    head.next.next = head;
    head.next = null;
    // 返回新的头节点
    return tem;
};

// 双指针

var reverseList = function(head) {
    // 处理特殊情况
    if(!head || !head.next) return head;
    let prev = null,        // 前一个结点
        cur = head;         // 当前节点
    while(cur) {
        // 每次反转当前节点
        let tem = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tem;
    }
    return prev;
};