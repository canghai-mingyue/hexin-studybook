// 973. 最接近原点的 K 个点

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// 其实就是求最小的 k 个点，很容易想到用大顶堆来实现
var kClosest = function(points, k) {
    // 大顶堆
    const heap = new Heap([], (a, b) => b[0]*b[0] + b[1]*b[1] - a[0]*a[0] - a[1]*a[1])
    // 插入堆，并维持堆的大小为 k
    points.forEach(point => {
        heap.offer(point)
        if(heap.size() > k) heap.poll()
    })
    // 返回堆中数据即可
    return heap.data
};


// 堆类
class Heap {
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


var kClosest = function (points, K) {
    if (points.length <= K) {
        return points;
    }
    quickSelect(points, 0, points.length - 1, K); // 范围是整个数组
    return points.slice(0, K);  // 排完后，取前K个
};

function quickSelect(points, start, end, K) {
    const pivot = distance(points[start]);
    let l = start, r = end;
    while (l <= r) { 	     // 左右两个指针
        if (distance(points[l]) <= pivot) { // 左指针指向的元素比pivot小，没毛病，看下一个，指针右移
            l++;
            continue;
        }
        if (distance(points[r]) > pivot) { // 右指针指向的元素比pivot大，没毛病，看下一个，指针左移
            r--;
            continue;
        }
        // 左指针指向的元素比pivot大，右指针指向的元素比pivot小，交换左右指针指向的元素
        [points[l], points[r]] = [points[r], points[l]];
        l++;
        r--;        // 指针同时收缩1
    }
    [points[start], points[r]] = [points[r], points[start]]; // 交换pivot元素和右指针指向的元素
    if (r == K) { // 排好了
        return;
    } else if (r < K) { // 左边还不够K个，则[r+1:end]要继续排
        quickSelect(points, r + 1, end, K);
    } else { // 左边大于K个，则对左边继续排
        quickSelect(points, start, r - 1, K);
    }
}

function distance(point) {  // 求point到原点的距离
    return point[0] * point[0] + point[1] * point[1];
}





// 快排的思路
var kClosest = function(points, k) {
    const getDistance = point => point[0]*point[0] + point[1]*point[1]
    const quickSort = (points, start, end, k) => {
        const pivot = getDistance(points[start]),
            pivotPoint = [...points[start]]
        let l = start, r = end;
        while(l < r) {
            while(l < r && getDistance(points[r]) >= pivot) {
                r--;
            }
            points[l] = points[r];
            while(l < r && getDistance(points[l]) <= pivot) {
                l++;
            }
            points[r] = points[l];
        }
        points[r] = pivotPoint
        // 注意这里是 k-1 ，因为 r 为索引
        if(r === k-1) return;
        else if(r < k-1) quickSort(points, r+1, end, k);
        else quickSort(points, start, r-1, k);
    }
    quickSort(points, 0, points.length-1, k)
    console.log(points)
    return points.slice(0, k)
};

kClosest([[0,1],[1,0]], 2)
