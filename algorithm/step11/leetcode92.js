// 92. 反转链表 II

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 思路： 反转 left 和 right 之间的节点，再连接到原链表中，所以要先找到 left 的前一个节点
var reverseBetween = function(head, left, right) {
    // 使用虚拟节点防止讨论头节点发生变化的情况
    let virtualNode = new ListNode(0, head);
    // 先找到 left 的前一个节点以及 left 和 node 节点
    let cur = virtualNode;
    let i = 1;
    while(i < left) {
        cur = cur.next
        i++;
    }
    // left 的前一个节点和 left 节点
    let leftPrevNode = cur,
        leftNode = cur.next;
    while(i <= right) {
        cur = cur.next
        i++;
    }
    // right 节点
    let rightNode = cur;
    // 可参考 206 题目，迭代反转 left 和 right 之间的节点
    let prev =  null;
    cur = leftNode;
    while(prev !== rightNode) {
        let tem = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tem;
    }
    // 此时 prev 位于 rightNode 节点，cur 位于 rightNode 的后一个节点
    // 将反转后的链表连接到原链表中
    leftPrevNode.next = prev;
    leftNode.next = cur;
    //返回头节点
    return virtualNode.next;
};

// 优化：上面的方法 left 和 right 之间需要遍历两边，寻找 right 节点一遍，反转 left 和 right 之间的节点一遍
// 每次将待反转的第一个节点放到已反转区域的前方，这样只需要遍历一遍，也就是头插法
var reverseBetween = function(head, left, right) {
    let virtualNode = new ListNode(0, head),
        node = virtualNode;
    for(let i = 1; i < left; i++) {
        node = node.next;
    }
    let prev = node,            // left 的前一个结点，循环中保持不变，
        cur = prev.next,        //已反转区域的最后一个节点， 循环中指向也不变。
        next = cur.next;        // 待反转区域的第一个节点，会变化
    for(let i = 0; i < right - left; i++) {
        let tem = next.next;        // 先保存下一个next
        // 将 next 插入到 prev 后
        next.next = prev.next;
        prev.next = next;
        cur.next = tem;
        // 更新 next 继续循环
        next = tem;
    }
    return virtualNode.next;
}