// 24. 两两交换链表中的节点

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
var swapPairs = function(head) {
    // 处理特殊情况先
    if(!head || !head.next) return head;
    let tem = head.next.next;
    // 注意，交换后头结点会变化，所以要先保存下来
    let res = head.next;
    // 两两翻转
    head.next.next = head;
    head.next = swapPairs(tem);
    return res;
};
// 递归的思路和代码可以优化一下
var swapPairs = function(head) {
    // 处理特殊情况先
    if(!head || !head.next) return head;
    // 新的头结点
    let newHead = head.next;
    // 两两翻转
    head.next = swapPairs(head.next.next);
    newHead.next = head;
    return newHead;
};

// 试一试迭代
var swapPairs = function(head) {
    // 处理特殊情况先
    if(!head || !head.next) return head;
    // 链表的迭代操作经常使用到虚拟节点，来避免特殊情况的处理
    let virtualNode = new ListNode(0, head);
    let cur = virtualNode;
    // 每次交换cur之后的两个节点
    while(cur.next && cur.next.next) {
        let node1 = cur.next,
            node2 = cur.next.next;
        // 两两翻转
        cur.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        // 更新cur
        cur = node1;
    }
    return virtualNode.next;
};