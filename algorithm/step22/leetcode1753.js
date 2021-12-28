// 1753. 移除石子的最大得分

// 找数学规律
var maximumScore = function(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b)
    if(a + b <= c) return a + b;
    else if((a + b - c) % 2 === 0) return (a + b + c)  / 2
    else return (a + b + c - 1)  / 2
};


// 贪心加大顶堆，贪心的思想，每次从最多的两堆中取石子，取至第二多的堆的石子与最少石子的堆的数目相同
// 注意：如果第二多的石子与最少的石子的堆数目相同，那么至少需要取一个石子
var maximumScore = function(a, b, c) {
    let heap = new MaxHeap([a, b, c]),
        score = 0;
    while(true) {
        let max = heap.poll(),
            mid = heap.poll(),
            min = heap.poll();
        if(mid === 0) break;
        // 这里至少要取一个石子才行
        let tem = Math.max(1, mid - min)
        score += tem;
        heap.offer(min);
        heap.offer(mid - tem);
        heap.offer(max - tem);
    }
    return score;
};

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


