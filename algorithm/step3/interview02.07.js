// 面试题 02.07. 链表相交

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 先来个暴力求解 双循环
// 时间复杂度O(n2)
let getIntersectionNode = function(headA, headB) {
    let a = headA,
        b = headB;
    while(a) {
        while(b){
            if(a === b) return a;
            b = b.next;
        }
        a = a.next;
        b = headB;
    }
    return null;
};



// 思路 同样是双指针a与b，先求出两个链表的长度，假如a链表比b链表长3，则将a链表的指针向后移三位。
// 比较a与b，若不相等则同时后移，到达交点时，则a，b相等；若没有交点，则会同时等于null。
// 时间复杂度O(n)
let getIntersectionNode = function(headA, headB) {
    // 先处理特殊情况
    if(!headA || !headB) return null;
    // 分别求出两个链表的长度
    let lengthA = 0,
        lengthB = 0,
        a = headA,
        b = headB;
    while(a){
        lengthA++;
        a = a.next;
    }
    while(b){
        lengthB++;
        b = b.next;
    }
    // 获取长度差
    let gap = lengthA - lengthB;
    if(gap > 0) {
        // A长则后移A
        while(gap > 0) {
            headA = headA.next;
            gap--;
        }
    } else {
        // B长则后移B
        while(gap < 0) {
            headB = headB.next;
            gap++;
        }
    }
    // 此时A与B距离交点的距离已经相等，同时后移即可得到结果。
    while(headA !== headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
}