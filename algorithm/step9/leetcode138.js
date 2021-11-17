// 138. 复制带随机指针的链表

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 递归与map
const map = new Map();

var copyRandomList = function(head) {
    if(!head) return head;
    if(!map.has(head)) {
        // 此处必须先添加map的值，否则可能会陷入死循环。因为后面使用 copyRandomList 方法，可能会使用到
        map.set(head, new Node(head.val));
        Object.assign(map.get(head), { next: copyRandomList(head.next), random: copyRandomList(head.random) })
    }
    return map.get(head)
};

// 迭代与节点拆分  这个还是得配合图片更好理解一些
var copyRandomList = function(head) {
    if(!head) return head;
    // 首先新建复制节点
    let node = head;
    while(node){
        let copyNode = new Node(node.val, node.next, null);
        node.next = copyNode;
        node = copyNode.next;
    }
    // 为复制节点添加随机节点的连接
    node = head;
    while(node){
        let copyNode = node.next;
        copyNode.random = node.random ? node.random.next : null;
        node = copyNode.next;
    }
    // 断开节点与复制节点
    node = head;
    let copyHead = head.next;
    while(node){
        let copyNode = node.next;
        node.next = copyNode.next;
        copyNode.next = copyNode.next ? copyNode.next.next : null
        node = node.next
    }
    return copyHead
}
