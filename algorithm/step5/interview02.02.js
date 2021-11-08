// 02.02. 返回倒数第 k 个节点

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 使用数组
var kthToLast = function(head, k) {
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    return arr[arr.length - k];
};

// 快慢指针
var kthToLast = function(head, k) {
    let fast = head,
        slow = head;
    while(k > 1) {
        fast = fast.next;
        k--;
    }
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow.val;
}