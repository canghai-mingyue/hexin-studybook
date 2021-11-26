// 622. 设计循环队列

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = [];
    this.capacity = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.queue.length === this.capacity) return false;
    else {
        this.queue.push(value)
        return true
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    return typeof this.queue.shift() !== 'undefined'
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.queue.length > 0 ? this.queue[0] : -1
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.queue.length > 0 ? this.queue[this.queue.length-1] : -1
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.queue.length === this.capacity;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */