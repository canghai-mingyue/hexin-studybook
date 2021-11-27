// 641. 设计循环双端队列

/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.queue = [];
    this.capacity = k
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(this.queue.length === this.capacity) return false;
    else {
        this.queue.unshift(value);
        return true;
    }
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(this.queue.length === this.capacity) return false;
    else {
        this.queue.push(value);
        return true;
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(this.queue.length === 0) return false;
    else {
        this.queue.shift()
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(this.queue.length === 0) return false;
    else {
        this.queue.pop()
        return true
    }
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    return this.queue.length === 0 ? -1 : this.queue[0]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.queue.length === 0 ? -1 : this.queue[this.queue.length - 1]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.queue.length === this.capacity
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */