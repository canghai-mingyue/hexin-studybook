// 面试题 17.14. 最小K个数

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 直接排序
var smallestK = function(arr, k) {
    arr.sort((a, b) => a - b)
    return arr.slice(0, k)
};

// 使用大顶堆
var smallestK = function(arr, k) {
    let maxHeap = new MaxHeap()
    arr.forEach(item => {
        maxHeap.offer(item)
        if(maxHeap.size() > k) maxHeap.poll()
    })
    return maxHeap.data
};

// 因为不要求返回的顺序，所以可以采用类似于 leetcode973 使用快排的思路
var smallestK = function(arr, k) {
    const quickSort = (arr, start, end) => {
        const pivot = arr[start];
        let l = start, r = end;
        while(l < r) {
            while(l < r && arr[r] >= pivot) {
                r--;
            }
            arr[l] = arr[r];
            while(l < r && arr[l] <= pivot) {
                l++;
            }
            arr[r] = arr[l];
        }
        arr[r] = pivot
        // 注意这里是 k-1 ，因为 r 为索引
        if(r === k-1) return;
        else if(r < k-1) quickSort(arr, r+1, end, k);
        else quickSort(arr, start, r-1, k);
    }
    quickSort(arr, 0, arr.length-1)
    return arr.slice(0, k)
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