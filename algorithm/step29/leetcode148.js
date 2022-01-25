// 148. 排序链表

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
// 归并排序
var sortList = function(head){
    return mergeSort(head, null)
}
// 归并排序，将 tail 之前的节点进行排序，包括 head，不包括 tail 本身
// 自顶向下的归并排序  时间复杂度 O(nlogn)  空间复杂度 O(logn)
const mergeSort = (head, tail) => {
    // 处理特殊情况  空链表
    if(head === null) return head;
    // 链表只有一个节点
    if(head.next === tail) {
        head.next = null;
        return head;
    }
    // 使用快慢指针来找到链表中点
    let slow = head,
        fast = head;
    while(fast !== tail) {
        fast = fast.next;
        slow = slow.next;
        if(fast !== tail) fast = fast.next;
    }
    // 递归
    return mergeTwoList(mergeSort(head, slow), mergeSort(slow, tail))
}

// 自底向上的递归排序，这可以优化空间复杂度，因为自顶向下的归并排序会递归调用栈空间
// 时间复杂度 O(nlogn)  空间复杂度 O(1)
const sortList = function(head){
    // 处理特殊情况  空链表
    if(head === null) return head;
    // 获取链表长度
    let length = 0,
        node = head;
    while(node) {
        length++
        node = node.next
    }
    // 使用虚拟节点
    const virtualNode = new ListNode(0, head)
    // 开始自底向上进行归并排序
    for(let len = 1; len < length; len <<= 1) {
        let prev = virtualNode,         // 已经合并排序的链表的最后一个节点
            cur = virtualNode.next;     // 还未合并排序的链表的第一个节点
        while(cur !== null) {
            // 第一段链表的头节点
            let head1 = cur;
            // 向后移动找到第二段链表的头节点
            for(let i = 1; i < len && cur.next !== null; i++) {
                cur = cur.next;
            }
            // 第二段链表的头节点
            let head2 = cur.next;
            // 这里要断开两段链表的连接 来进行合并
            cur.next = null;
            cur = head2;
            // 向后移动找到下一组链表的起始节点
            for(let i = 1; i < len && cur !== null && cur.next !== null; i++) {
                cur = cur.next;
            }
            // 下一组链表的起始节点
            let next = null
            if(cur !== null) {
                next = cur.next;
                // 断开与下一组链表的连接
                cur.next = null;
            }
            // 合并当前组的两个链表，并追加到已经合并好的链表后
            prev.next = mergeTwoList(head1, head2)
            // 更新 prev
            while (prev.next) {
                prev = prev.next
            }
            // 更新 cur
            cur = next;
        }
    }
    return virtualNode.next;
}





const mergeTwoList = (l1, l2) => {
    // 递归实现合并两个有序链表
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
        l1.next = mergeTwoList(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoList(l2.next, l1)
        return l2
    }
    // 以下为迭代实现合并两个有序链表
    // const head = new ListNode()
    // let prev = head;
    // while(l1 !== null && l2 !== null) {
    //     if(l1.val <= l2.val) {
    //         prev.next = l1
    //         l1 = l1.next
    //     } else {
    //         prev.next = l2
    //         l2 = l2.next
    //     }
    //     prev = prev.next;
    // }
    // prev.next = l1 === null ? l2 : l1
    // return head.next;
}