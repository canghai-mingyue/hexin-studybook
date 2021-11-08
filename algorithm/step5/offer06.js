// 剑指 Offer 06. 从尾到头打印链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 直接使用js的unshift方法
var reversePrint = function(head) {
    let res = [];
    while(head) {
      res.unshift(head.val);
      head = head.next;
    }
    return res;
};

// 不使用unshift方法
var reversePrint = function(head) {
    let stack = [],
        res = []
    // 利用栈先进后出的性质
    while(head) {
        stack.push(head.val);
        head = head.next;
    }
    while(stack.length > 0) {
        res.push(stack.pop());
    }
    return res;
};