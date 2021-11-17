// 剑指 Offer 22. 链表中倒数第k个节点

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
 * @return {ListNode}
 */
//直接暴力获取
var getKthFromEnd = function(head, k) {
    if(!head) return head;
    let length = 0,
        tem = head;
    // 先求链表长度
    while(tem){
        tem = tem.next;
        length++
    }
    // 然后再去查找倒数第k个，也就是是正数第 kk+1 个
    let kk = length - k;
    while(kk > 0) {
        head = head.next
        kk--;
    }
    return head;
};

// 使用数组保存链表，避免二次遍历
var getKthFromEnd = function(head, k) {
    let arr = [];
    while(head){
        arr.push(head);
        head = head.next;
    }
    return arr[arr.length - k];
};

// 第 k 个的问题，一般都可以使用双指针的方法
var getKthFromEnd = function(head, k) {
    let fast = head,
        slow = head;
    // 先让fast指针跑k步
    while(k > 0) {
        fast = fast.next;
        k--;
    }
    // 则最后fast指针 到 null 时，slow指针即为倒数第 k 个节点
    while(fast){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};