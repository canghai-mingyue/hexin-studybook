// 61. 旋转链表

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
// 先连接成环，再断开。向右移k位，即向右移 k%length = kk 位，即在第 length - kk 个节点处断开。
let rotateRight = function(head, k) {
    // 先处理特殊情况
    if(!head || !head.next) return head;
    // 求链表长度
    let a = head,
        length = 1;
    while(a.next) {
        length++;
        a = a.next;
    }
    // 此时 a 在链表末尾，方便连环
    // 取余数 kk 获得向右移的最少次数
    let kk = k % length;
    // 处理特殊情况
    if(kk === 0) return head;


    // 连接成环
    a.next = head;
    // 需要断开的节点距离头节点的距离
    let count = length - kk - 1;
    while(count > 0) {
        head = head.next;
        count--;
    }
    // 此时head即为需要断开的节点，head.next即为新链表的头节点
    let res = head.next;
    // 断开环 再返回
    head.next = null;
    return res;
};

// 快慢指针   向右移k位，即向右移 k%length = kk 位，也就是将后面kk位移到链表前面。
// 先让快指针右移kk位，此时同时移动快慢指针，则当快指针到达链表尾部时，慢指针到达需要断开的节点，此时再将慢指针后面的链表移到前面
let rotateRight = function(head, k) {
    if(!head || !head.next) return head;
    let a = head,
        length = 1;
    while(a.next) {
        length++;
        a = a.next;
    }
    let kk = k % length;
    if(kk === 0) return head;
    // 在这之前与上一个思路一样

    let slow = head,
        fast =head;
    while(kk > 0) {
        fast = fast.next;
        kk--;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    // 此时慢指针在断开点，快指针在链表尾部
    let res = slow.next;
    fast.next = head;
    slow.next = null;
    return res
}