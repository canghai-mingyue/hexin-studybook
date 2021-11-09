// 25. K 个一组翻转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
//
var reverseKGroup = function(head, k) {
    // 使用虚拟节点避免处理特殊情况
    let virtualNode = new ListNode(0, head);
    // 需要处理的一组节点 的前一个节点
    let pre = virtualNode;
    // head表示每组节点的第一个节点
    while(head) {
        // 先找到魅族节点的最后一个节点tail
        let tail = head;
        for(let i = 0; i < k - 1; i++) {
            tail = tail.next;
            // tail为null则说明不足k个，直接返回
            if(!tail) return virtualNode.next;
        }
        // 需要处理的一组节点 的后一个节点
        let next = tail.next;
        // 反转当前处理一组节点
        [head, tail] = reverseGroup(head, tail);
        // 重新连接到主链表上
        pre.next = head;
        tail.next = next;
        // 更新pre与head
        pre = tail;
        head = tail.next;
    }
    return virtualNode.next;
};

//反转链表，并返回新的头节点和尾节点，可以参考 剑指 Offer II 024. 反转链表
const reverseGroup = function(head, tail) {
    let prev = null,
        cur = head,
        next = tail.next;
    while(cur !== next) {
        let tem = cur.next
        cur.next = prev
        prev = cur
        cur = tem
    }
    return [prev, head]
}