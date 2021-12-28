// 1801. 积压订单中的订单总数


/**
 * @param {number[][]} orders
 * @return {number}
 */
// 使用大顶堆来存采购订单，小顶堆来存销售订单
var getNumberOfBacklogOrders = function(orders) {
    const minHeap = new MinHeap(),
          maxHeap = new MaxHeap();
    orders.forEach(order => {
        if(order[2] === 0) {
            // 采购订单，与价格最低的销售订单来比较
            while(minHeap.peek() && minHeap.peek()[0] <= order[0] && order[1] > 0) {
                // 匹配订单，则删除一个积压订单，并继续看是否可以匹配
                if(order[1] >= minHeap.peek()[1]) {
                    order[1] -= minHeap.poll()[1]
                } else {
                    // 否则更新积压订单数目，并将该订单数目置为 0
                    minHeap.peek()[1] -= order[1]
                    order[1] = 0
                }
            }
            // 便于判断本订单是否需要入堆
            order[1] > 0 && maxHeap.offer(order)


        } else {
            // 销售订单，与价格最高的采购订单来比较，思路相同
            while(maxHeap.peek() && maxHeap.peek()[0] >= order[0] && order[1] > 0) {
                // 匹配订单，则删除一个积压订单，并继续看是否可以匹配
                if(order[1] >= maxHeap.peek()[1]) {
                    order[1] -= maxHeap.poll()[1]
                } else {
                    maxHeap.peek()[1] -= order[1]
                    order[1] = 0
                }
            }
            order[1] > 0 && minHeap.offer(order)
        }
    })
    // 最后返回堆中的剩余数据的订单和
    return (minHeap.data.map(v => v[1]).reduce((a, b) => a + b, 0) + maxHeap.data.map(v => v[1]).reduce((a, b) => a + b, 0)) % (Math.pow(10, 9) + 7)
};




// 小顶堆
class MinHeap {
    constructor(data = []) {
        this.data = data;
        // 这个决定了小顶堆还是大顶堆
        this.comparator = (a, b) => a[0] - b[0];
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

