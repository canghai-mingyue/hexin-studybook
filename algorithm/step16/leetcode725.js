// 725. 分隔链表

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
 * @return {ListNode[]}
 */
// 思路：先求 length，除以 k 根据余数（remainder）和商（consult）去拆分。
// 一共 k 组，每组 consult 个节点，其中有 remainder 组会有 consult + 1 个节点
var splitListToParts = function(head, k) {
    // 先求 length
    let length = 0,
        node = head;
    while(node) {
        length++;
        node = node.next;
    }
    let remainder = length % k,                         // 余数
        consult = Math.floor(length / k),            // 商
        result = [],                                    // 最终结果
        virtualNode = new ListNode(0, head),        // 使用虚拟节点便于计数
        cur = virtualNode;                              // 当前节点
    // remainder 组会有 consult + 1 个节点
    for(let i = 0; i < remainder; i++) {
        let item = cur.next;
        result.push(item);
        cur.next = null;
        for(let j = 0; j < consult; j++) {
            item = item.next;
        }
        cur = item;
    }
    // k - remainder 组有 consult 个节点
    if(!cur.next) {
        // 考虑 consult 为 0 时，剩下的组都是 null
        for(let i = 0; i < k - remainder; i++) {
            result.push(null);
        }
    } else {
        for(let i = 0; i < k - remainder; i++) {
            let item = cur.next;
            result.push(item);
            cur.next = null;
            for(let j = 1; j < consult; j++) {
                item = item.next;
            }
            cur = item;
        }
    }
    return result;
};


// 代码优化
var splitListToParts = function(head, k) {
    let length = 0,
        node = head;
    while(node) {
        length++;
        node = node.next;
    }
    let remainder = length % k,
        consult = Math.floor(length / k);
    // 这里提前先初始为 null， 后面就不用分类讨论了
    const parts = new Array(k).fill(null);
    let curr = head;
    for (let i = 0; i < k && curr != null; i++) {
        parts[i] = curr;
        // 这里可以不用分开循环
        let partSize = consult + (i < remainder ? 1 : 0);
        for (let j = 1; j < partSize; j++) {
            curr = curr.next;
        }
        const next = curr.next;
        curr.next = null;
        curr = next;
    }
    return parts;
};