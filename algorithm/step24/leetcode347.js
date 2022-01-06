// 347. 前 K 个高频元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 使用map，并数组排序，sort方法的时间复杂度为O(NlogN)
var topKFrequent = function(nums, k) {
    const map = new Map();
    // 使用map记录每个元素出现的频次
    nums.forEach(num => {
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1)
    })
    // map转为数组，并根据出现次数降序排列
    let arr = Array.from(map).sort((a, b) => b[1] - a[1]);
    let res = [];
    // 返回前 k 个即可
    while(k > 0) {
        res.push(arr[k - 1][0]);
        k--;
    }
    return res
};


// 小顶堆类
class MinHeap {
    constructor(data = [], comparator) {
        this.data = data;
        // 这个决定了小顶堆还是大顶堆
        this.comparator = comparator;
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

// 使用堆  O(Nlogk)
var topKFrequent = function(nums, k) {
    const map = new Map();
    nums.forEach(num => {
        if(map.has(num)) map.set(num, map.get(num) + 1);
        else map.set(num, 1)
    })
    let arr = Array.from(map)
    // 前面不变，只是不使用 sort方法，而使用堆，根据出现 频次的大小 来维护一个小顶堆，保持堆的大小为 k
    let heap = new MinHeap([], (a, b) => a[1] - b[1]);
    arr.forEach(num => {
        if(heap.size() >= k) {
            // 如果堆中元素已经满了k个，则比较堆顶元素的出现频次与当前元素的出现频次，若当前的比较大，则去掉堆顶元素，将当前元素加入堆中
            if(heap.peek()[1] < num[1]) {
                heap.poll();
                heap.offer(num);
            }
        } else {
            // 如果堆中的元素少于k个，则直接加入堆中
            heap.offer(num)
        }
    })
    // 最后堆中的k个元素即为出现次数最多的k个元素。
    return heap.data.map(v => v[0]);
};
