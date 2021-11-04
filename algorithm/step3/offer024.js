// 剑指 Offer II 024. 反转链表

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
// 双指针 迭代法
let reverseList = function(head) {
    // 先处理特殊情况
    if(!head || !head.next) return head;
    let prev = null     // 上一个节点
        cur = head;     // 当前节点
    while(cur) {
        // 先保存cur指针将要移动的节点
        let tem = cur.next;
        // 反转当前节点与上一个节点的链接关系
        cur.next = prev;
        // 向后移动指针
        prev = cur;
        cur = tem;
        // 可使用解构赋值简化代码
        // [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev;
};


// 递归法
reverseList = function(head) {
    // 先处理特殊情况
    if(!head || !head.next) return head;
    // 反转头节点之后的链表
    let tem = reverseList(head.next);
    // 反转头节点与其后面第一个节点的链接关系
    head.next.next = head;
    // 头节点的next指向null
    head.next = null;
    return tem;
}