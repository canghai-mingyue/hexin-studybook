// 82. 删除排序链表中的重复元素 II

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
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let virtualNode = new ListNode(0, head);
    let prev = virtualNode,    // 当前节点前 已经去重后的链表的 最后一个节点
        cur = head;            // 当前节点
    while(cur) {
        // 若当前节点与下一节点值相等
        if(cur.next && cur.val === cur.next.val) {
            // 则将 cur 移动到相等节点的最后一位
            while(cur.next && cur.val === cur.next.val){
                cur = cur.next;
            }
            // 去掉相等的节点
            prev.next = cur.next;
            // 更新 cur
            cur = cur.next;
        } else {
            // 否则直接更新 prev 与 cur
            prev = cur;
            cur = cur.next
        }
    }
    return virtualNode.next;
};