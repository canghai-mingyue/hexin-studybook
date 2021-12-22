// 面试题 17.20. 连续中值

/**
 * initialize your data structure here.
 */
// 思路：使用两个堆，小顶堆来保存比中位数大的一半，大顶堆保存比中位数小的一半。
// 当然中位数是既可能在大顶堆中，也可能在小顶堆中，也可能两个二堆中各一个，这取决于堆的大小
var MedianFinder = function() {
    // 这里初始化添加两个 Infinity 的值来避免分类讨论空堆的情况
    this.minHeap = new MinHeap([Infinity]);
    this.maxHeap = new MaxHeap([-Infinity]);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // 先根据 num 的大小来决定插入到哪个堆里面，大的插入到小顶堆中，否则插入到大顶堆中
    if(num > this.minHeap.peek()) {
        this.minHeap.offer(num)
        // 插入后要调整两个堆的大小差距不超过 1，这样就使得中位数一直在堆顶
        if(this.minHeap.size() - this.maxHeap.size() === 2) {
            this.maxHeap.offer(this.minHeap.poll())
        }
    } else {
        this.maxHeap.offer(num)
        if(this.maxHeap.size() - this.minHeap.size() === 2) {
            this.minHeap.offer(this.maxHeap.poll())
        }
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // 根据堆的大小来判断中位数
    if(this.minHeap.size() === this.maxHeap.size()) return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
    if(this.minHeap.size() > this.maxHeap.size()) return this.minHeap.peek();
    if(this.minHeap.size() < this.maxHeap.size()) return this.maxHeap.peek();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */





// 小顶堆
class MinHeap {
    constructor(data = []) {
        this.data = data;
        // 这个决定了小顶堆还是大顶堆
        this.comparator = (a, b) => a - b;
        this.heapify();
    }
    // 生成堆
    heapify() {
        if (this.size() < 2) return;
        // 堆的构建
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    // 返回堆顶值，即最小值
    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }
    // 向堆中插入数据
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }
    // 移除堆顶元素
    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
    // 堆向上调整
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    // 堆向下调整
    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }
    // 交换数据
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    // 返回堆的大小
    size() {
        return this.data.length;
    }
}

// 大顶堆
class MaxHeap {
    constructor(data = []) {
        this.data = data;
        // 这个决定了小顶堆还是大顶堆
        this.comparator = (a, b) => b - a;
        this.heapify();
    }
    // 生成堆
    heapify() {
        if (this.size() < 2) return;
        // 堆的构建
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i);
        }
    }
    // 返回堆顶值，即最小值
    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }
    // 向堆中插入数据
    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }
    // 移除堆顶元素
    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
    // 堆向上调整
    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    // 堆向下调整
    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
                findIndex = leftIndex;
            }
            if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }
    // 交换数据
    swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
    // 返回堆的大小
    size() {
        return this.data.length;
    }
}