// 445. 两数相加 II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 将链表翻转过来，按位相加即可，要注意进位
var addTwoNumbers = function(l1, l2) {
    // 使用栈来保存数据
    let stack1 = [],
        stack2 = [],
        stack3 = [];
    // 首先使用栈保存两个链表
    while(l1){
        stack1.push(l1.val)
        l1 = l1.next;
    }
    while(l2){
        stack2.push(l2.val)
        l2 = l2.next;
    }
    // 进位
    let carry = 0;
    // 开始相加
    while(stack1.length > 0 || stack2.length > 0) {
        // 按位相加，考虑 stack 为空的情况
        let tem = (stack1.pop() || 0) + (stack2.pop() || 0)
        // 加上进位
        tem = tem + carry;
        if(tem > 9) {
            // 进位最多只能为 1
            carry = 1
            stack3.push(tem - 10)
        } else {
            // 要没有进位要置为 0
            carry = 0
            stack3.push(tem)
        }
    }
    // 最后的进位要加上
    carry === 1 && stack3.push(carry)
    let virtualNode = new ListNode(),
        node = virtualNode;
    // 将 stack 转为链表
    while(stack3.length > 0) {
        node.next = new ListNode(stack3.pop())
        node = node.next;
    }
    return virtualNode.next;
};