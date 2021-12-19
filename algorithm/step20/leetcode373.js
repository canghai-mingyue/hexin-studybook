// 373. 查找和最小的K对数字

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// 最大或最小的 k 的问题。一般都可以用堆来解决，这里求最小 k， 所以使用大顶堆
var kSmallestPairs = function(nums1, nums2, k) {
    // 比较函数，
    const comparator = (a, b) => b[0] + b[1] - a[0] - a[1]
    let heap = new MaxHeap([], comparator);
    // 因为 nums1 和 nums2 是有序的，所以无需遍历完所有组合
    let length1 = Math.min(nums1.length, k),
        length2 = Math.min(nums2.length, k);
    // 遍历入堆即可
    for(let i = 0; i < length1; i++) {
        for(let j = 0; j < length2; j++) {
            heap.offer([nums1[i], nums2[j]])
            heap.size() > k && heap.poll()
        }
    }
    return heap.data
};


// 大顶堆
class MaxHeap {
    constructor(data = [], comparator) {
        this.data = data;
        // 这个决定了小顶堆还是大顶堆
        this.comparator = comparator
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