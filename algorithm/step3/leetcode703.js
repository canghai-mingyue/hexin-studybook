// 703. 数据流中的第 K 大元素

// 首先 简单粗暴暴力法
/**
 * @param {number} k
 * @param {number[]} nums
 */
let KthLargest = function(k, nums) {
    this.index = k;
    this.data = nums.sort((a, b) => b - a)
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.data.push(val)
    this.data = this.data.sort((a, b) => b - a)
    return this.data[this.index - 1]
};


// 使用小顶堆
class KthLargest{
    constructor(k, nums) {
        this.k = k;
        this.heap = new MinHeap();
        nums.forEach(num => this.add(num))
    }
    add(val){
        this.heap.offer(val);
        if(this.heap.size() > this.k) {
            this.heap.poll();
        }
        return this.heap.peek();
    }
}


// 小顶堆类
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





/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */