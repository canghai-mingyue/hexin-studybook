// 剑指 Offer 35. 复杂链表的复制


// Definition for a Node.
function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}


/**
 * @param {Node} head
 * @return {Node}
 */
// 使用map
var copyRandomList = function(head) {
    if(!head) return null;
    let map = new Map(),
        node = head;
    // 先复制节点
    while(node) {
        map.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    // 再添加 next和 random 指针
    while(node) {
        let cur = map.get(node);
        cur.next = node.next ? map.get(node.next) : null;
        cur.random = node.random ? map.get(node.random) : null;
        node = node.next;
    }
    return map.get(head);

};

// 递归，注意递归调用 map 应在函数外声明
let map = new Map();

var copyRandomList = function(head) {
    if(!head) return null;
    if(!map.has(head)) {
        //  先复制节点
        map.set(head, new Node(head.val))
        // 再添加 next和 random 指针
        Object.assign(map.get(head), {next: copyRandomList(head.next), random: copyRandomList(head.random)})
    }
    return map.get(head);
};

// 节点拆分
var copyRandomList = function(head) {
    if(!head) return null;
    let node = head;
    // 复制节点
    while(node) {
        let copyNode = new Node(node.val, node.next, null)
        node.next = copyNode;
        node = copyNode.next;
    }
    node = head;
    // 为复制节点添加随机指针
    while(node) {
        let copyNode = node.next;
        copyNode.random = node.random ? node.random.next : null;
        node = node.next.next
    }
    let result = head.next;
    node = head;
    // 断开复制链表与原链表的连接
    while(node) {
        let copyNode = node.next;
        node.next = copyNode.next;
        copyNode.next = copyNode.next ? copyNode.next.next : null;
        node = node.next;
    }
    return result;
};