// 86. 分隔链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 使用两个链表分别保存比 x 小的节点和比 x 大或等于的节点，最后将大的链表连接到小的链表的尾部
var partition = function(head, x) {
    let small = new ListNode(0),        // 比 x 小的节点链表
        large = new ListNode(0);        // 比 x 大或等于的节点链表
    let smallCur = small,                   // 小链表的尾部
        largerCur = large;                  // 大链表的尾部
    // 遍历，分类
    while(head) {
        if(head.val < x) {
            smallCur.next = head;
            smallCur = smallCur.next;
        } else {
            largerCur.next = head;
            largerCur = largerCur.next;
        }
        head = head.next
    }
    // 注意：这里要将 largerCur.next 置为 null ，否则会出现循环
    largerCur.next = null
    // 连接小链表和大链表
    smallCur.next = large.next;
    // 返回小链表的头结点
    return small.next;
};