// 313. 超级丑数

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// 思路与以前类似，算是动态规划
var nthSuperUglyNumber = function(n, primes) {
    if(n === 1) return 1;
    let array = [1],                                              // 结果数组
        pointers = new Array(primes.length).fill(0);        // 每个质因子的指针
    for(let i = 1; i < n; i++) {
        // 下一个丑数的可能值
        let tem = primes.map((val, index) => val * array[pointers[index]])
        // 下一个丑数为其中最小值
        let min = Math.min(...tem)
        array[i] = min;
        // 去除可能的重复值
        pointers.forEach((val, index) => {
            if(array[val] * primes[index] === min) {
                pointers[index] = ++val;
            }
        })
    }
    return array[array.length - 1]
};

// 可以优化一下
var nthSuperUglyNumber = function(n, primes) {
    if(n === 1) return 1;
    let array = [1],
        length = primes.length,
        pointers = new Array(length).fill(0),
        vals = [...primes];
    for(let i = 1; i < n; i++) {
        // 这样取最小值效率会更高一些
        let min = Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < length; j++) {
            min = Math.min(min, vals[j]);
        }
        array[i] = min;
        // 避免每次都要创建 tem 数组
        vals.forEach((val, index) => {
            if(val === min) {
                pointers[index]++;
                vals[index] = primes[index] * array[pointers[index]]
            }
        })
    }
    return array[array.length - 1]
};


// 另一种思路：与和合并 k 个有序链表相似。因此可以采用小顶堆，虽然题解说小顶堆会超时，不过实际上还是通过了的
var nthSuperUglyNumber = function(n, primes) {
    if(n === 1) return 1;
    let array = [1]
    primes = primes.map(v => [v, 0]);
    let heap = new MinHeap(primes, (a, b) => a[0]*array[a[1]] - b[0]*array[b[1]])
    // 这样循环会出现相等的值重复插入的情况
    // for(let i = 1; i < n; i++) {
    //     let tem = heap.poll();
    //     array[i] = tem[0]*array[tem[1]]
    //     tem[1]++;
    //     heap.offer(tem)
    // }
    while(array.length < n) {
        let tem = heap.poll();
        let val = tem[0]*array[tem[1]];
        // 只有更大的值才能插入
        if(val > array[array.length - 1]) {
            array.push(val)
        }
        tem[1]++;
        heap.offer(tem)
    }
    console.log(array)
    return array[array.length - 1]
};

// 小顶堆
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

nthSuperUglyNumber(12, [2,7,13,19])

