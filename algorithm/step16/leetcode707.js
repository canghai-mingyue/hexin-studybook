// 707. 设计链表

// 使用单链表实现
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var MyLinkedList = function() {
    this.head = null;       // 头节点
    this.length = 0;        // 链表长度
    return this.head;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    // index不合法时
    if(index >= this.length || index < 0) return -1;
    // 遍历链表找到节点
    let node = this.head;
    while(index-- > 0) {
        node = node.next;
    }
    return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    this.head = new ListNode(val, this.head);
    this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = this.head;
    // 要考虑头节点为空时的情况，此时相当于在头部添加节点
    if(node) {
        // 不为空时，遍历找到末尾节点
        while(node.next) {
            node = node.next;
        }
        node.next = new ListNode(val);
        this.length++;
    } else {
        this.addAtHead(val);
    }

};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    // 处理特殊情况
    if(index <= 0) this.addAtHead(val);
    else if(index === this.length) this.addAtTail(val);
    else if(index > this.length) return;
    else {
        // 遍历链表添加节点
        let node = this.head
        while(index-- > 1) {
            node = node.next;
        }
        node.next = new ListNode(val, node.next);
        this.length++;
    }

};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    // 处理特殊情况
    if(index >= this.length || index < 0) return;
    else if(index === 0) {
        this.head = this.head.next;
        this.length--;
    } else {
        // 遍历找到 index 的前一个结点来删除 index节点
        let node = this.head;
        while(index-- > 1) {
            node = node.next;
        }
        node.next = node.next.next;
        this.length--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */