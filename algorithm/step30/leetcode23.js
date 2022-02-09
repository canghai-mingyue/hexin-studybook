// 23. 合并K个升序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 根据合并两个有序链表来进行两两合并
var mergeKLists = function(lists) {
    // 特殊情况处理
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
    if(lists.length === 2) return mergeTwoLists(...lists);
    // 其他情况
    else {
        // 使用递归 + 分治的思想来，二分来分治
        let length = lists.length;
        let mid = length >> 1;
        return mergeTwoLists(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)))
    }
}

// 利用小顶堆来迭代实现合并
var mergeKLists = function(lists) {
    // 特殊情况处理
    if(lists.length === 0) return null;
    if(lists.length === 1) return lists[0];
    // 小顶堆存储每个链表最小的节点也就是最前面的元素
    // 这里要 filter 掉 null 节点
    let minHeap = new MinHeap(lists.filter(v => !!v), (a, b) => a.val - b.val)
    let virtualNode = new ListNode(0),
        cur = virtualNode;
    while(minHeap.size() > 0) {
        let tem = minHeap.poll()
        cur.next = tem;
        tem.next && minHeap.offer(tem.next);
        cur = tem;
    }
    return virtualNode.next;
}

// 递归实现合并两个有序链表
const mergeTwoLists = function (l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l2.next, l1);
        return l2;
    }
}

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