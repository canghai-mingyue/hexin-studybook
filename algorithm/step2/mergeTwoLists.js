
// 2、合并两个有序链表
// 链表节点定义
class ListNode{
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
// 数组转链表
const arrayToLinkedList = arr => {
    let virtualNode = new ListNode()
    let current = virtualNode
    arr.forEach(val => {
        current.next = new ListNode(val)
        current = current.next
    })
    return virtualNode.next
}
// 链表转数组
const linkedListToArray = linkedList => {
    let arr = [];
    while(linkedList) {
        arr.push(linkedList.val)
        linkedList = linkedList.next
    }
    return arr;
}

let input1 = '[1, 2, 3]'
let input2 = '[2, 3, 4]'

// 合并两个有序链表，迭代法
let mergeTwoLists = (l1, l2) => {
    // 首先处理特殊情况
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    // 使用虚拟节点减少判断
    let virtualNode = new ListNode();
    // 当前节点
    let cur = virtualNode;
    // 只要两个节点都不为空，则进行循环
    while(l1 && l2){
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    // 有一个链表已经处理完毕时，直接连接到另一个链表。
    cur.next = l1 === null ? l2 : l1
    return virtualNode.next;
}

// 递归法
mergeTwoLists = (l1, l2) => {
    // 首先处理特殊情况
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    if(l1.val < l2.val) {
        // l1.val < l2.val 则合l1.next与l2，并返回l1
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        // 相反，同上
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
}

let array1 = JSON.parse(input1),
    array2 = JSON.parse(input2);
let linkedList1 = arrayToLinkedList(array1),
    linkedList2 = arrayToLinkedList(array2);
let resultLinkedList = mergeTwoLists(linkedList1, linkedList2);
let resultArray = linkedListToArray(resultLinkedList)

console.log(JSON.stringify(resultArray))