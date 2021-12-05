// 143. 重排链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 思路：将链表保存下来，然后前后依次取下节点形成链表即可
var reorderList = function(head) {
    //首先处理特殊情况
    if(!head || head.length < 3) return head;
    // 保存链表的节点
    let stack = [];
    while(head) {
        stack.push(head);
        head = head.next;
    }
    let virtualNode = new ListNode(),
        node = virtualNode,
        length = stack.length;
    // 前后依次取节点，来形成链表
    for(let i = 0; i < length; i++) {
        // 偶数从前取节点
        if(i % 2 === 0) node.next = stack.shift();
        // 奇数从后面取节点
        else node.next = stack.pop();
        node = node.next
    }
    // 最后一定要将末尾的节点置为 null，否为会形成循环
    node.next = null;
    return virtualNode.next;
};
// 上面直接用 shift 方法，时间复杂度会比较高，因此考虑使用两个指针来直接获取节点
var reorderList = function(head) {
    if(!head || head.length < 3) return head;
    let stack = [];
    while(head) {
        stack.push(head);
        head = head.next;
    }
    // 前面不变
    let virtualNode = new ListNode(),
        node = virtualNode,
        length = stack.length,
        // 这里使用两个指针来表示前后应该取的节点
        left = 0,
        right = length - 1;
    for(let i = 0; i < length; i++) {
        if(i % 2 === 0) node.next = stack[left++];
        else node.next = stack[right--];
        node = node.next
    }
    node.next = null;
    return virtualNode.next;
};