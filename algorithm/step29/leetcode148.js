// 148. 排序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const mergeTwoList = (l1, l2) => {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
        l1.next = mergeTwoList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoList(l2.next, l1)
        return l2
    }
}


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head){
    const mergeSort = (head, tail) => {
        if(!head) return head;
        if(head.next == )
    }
    return mergeSort(head, null)
}

