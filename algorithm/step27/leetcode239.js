// 239. 滑动窗口最大值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 使用大顶堆来维护滑动窗口中的最大值
var maxSlidingWindow = function(nums, k) {
    let res = []
    let maxHeap = new MaxHeap()
    // 先往堆中添加 k 个初始值
    for(let i = 0; i < k; i++) {
        // 这里堆的元素除了保存元素值以外，还保存元素的索引，方便用来判断该元素是否在当前窗口内
        maxHeap.offer([nums[i], i])
    }
    res.push(maxHeap.peek()[0])
    for(let i = k; i < nums.length; i++) {
        maxHeap.offer([nums[i], i])
        // 如果堆顶最大的元素已经在当前滑动窗口左侧，则直接移除掉
        while(maxHeap.peek()[1] <= i - k){
            maxHeap.poll()
        }
        // 当前窗口的最大值
        res.push(maxHeap.peek()[0])
    }
    return res;
};


class MaxHeap {
    constructor(data = []) {
        this.data = data;
        this.comparator = (a, b) => b[0] - a[0];
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
    // 返回堆顶值，即最大值
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