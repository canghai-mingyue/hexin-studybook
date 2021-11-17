// 1721. 交换链表中的节点

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
// 快慢指针
var swapNodes = function(head, k) {
    // 虚拟节点
    let virtualNode = new ListNode(0, head);
    let slow = virtualNode,
        fast = virtualNode;
    for(let i = 0; i < k - 1; i++) {
        fast = fast.next
    }
    // 第 k 个节点以及第 k-1 个节点
    let leftPre = fast,
        left   = fast.next;
    fast = fast.next;
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    // 倒数第 k 个节点以及倒数第 k+1 个节点
    let rightPre = slow,
        right = slow.next;
    // 特殊情况一：第 k 个节点以及倒数第 k 个节点是同一个节点直接返回
    if(left === right) return virtualNode.next;
    // 特殊情况二：第 k 个节点刚好是倒数第 k 个节点的前一个节点
    if(left.next === right) {
        // left.next = right.next;
        // right.next = left;
        // leftPre.next = right;
        [left.next, right.next, leftPre.next] = [right.next, left, right]
        return virtualNode.next;
    }
    // 特殊情况三：第 k 个节点刚好是倒数第 k 个节点的后一个节点
    if(right.next === left){
        // right.next = left.next;
        // left.next = right;
        // rightPre.next = left;
        [right.next, left.next, rightPre.next] = [left.next, right, left]
        return virtualNode.next;
    }
    // leftPre.next = right;
    // right.next = left.next;
    // left.next = right.next;
    // rightPre.next = left;
    // 四个指针节点没有重复的情况
    [leftPre.next, right.next, left.next, rightPre.next] = [right, left.next, right.next, left]
    return virtualNode.next;
};