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


// 双端队列，存储 index， 其对应的值为单调递减
var maxSlidingWindow = function(nums, k) {
    let queue = [0],    // 双端队列，存储当前窗口元素的 index，其对应的值要单调递减
        res = [];
    // 根据初始窗口将队列初始化
    for(let i = 1; i < k; i++) {
        // 维护队列 对应值 的单调性
        while(nums[i] > nums[queue[queue.length-1]]) {
            queue.pop()
        }
        queue.push(i)
    }
    res.push(nums[queue[0]])
    // 窗口开始滑动
    for(let i = k; i < nums.length; i++) {
        // 维护队列只存储当前窗口的元素
        if(i - queue[0] >= k ) queue.shift()
        // 维护队列 对应值 的单调性
        while(nums[i] >= nums[queue[queue.length-1]]) {
            queue.pop()
        }
        queue.push(i)
        // 本窗口的最大值就是对首对应的元素
        res.push(nums[queue[0]])
    }
    return res;
}

// 分块 + 预处理  将数组分为 k 个一组的块
// left[i]为块开始到left[i]的最大值，right[j]为块结束到right[j]的最大值
var maxSlidingWindow = function(nums, k) {
    const length = nums.length;
    let res = [],
        left = new Array(length).fill(0),
        right = new Array(length).fill(0);
    // 分块 预处理 left 与 right
    for(let i = 0; i < length; i++){
        // 块的分界点
        if(i % k === 0) left[i] = nums[i]
        // 非分界点
        else left[i] = Math.max(nums[i], left[i-1])

        let j = length - 1 -i;
        // 块的分界点 以及处理最后一个块元素不足 k 个的情况
        if((j + 1) % k === 0 || j === length - 1) right[j] = nums[j]
        // 非分界点
        else right[j] = Math.max(nums[j], right[j+1])
    }
    for(let i = 0; i < length - k + 1; i++){
        // 窗口范围为 i 到 j ，最大值即为 left[j] 和 right[i] 中较大的那个
        res.push(Math.max(right[i], left[i + k - 1]))
    }
    return res;
}





