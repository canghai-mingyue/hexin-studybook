// 23. 合并K个升序链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

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

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 直观粗暴的方法，两两合并
var mergeKLists = function(lists) {
  // 特殊情况处理
  if(lists.length === 0) return null;
  if(lists.length === 1) return lists[0];
  if(lists.length === 2) return mergeTwoLists(...lists);
  // 普遍情况
  else {
    let res = mergeTwoLists(lists[0], lists[1]);
    for(let i = 2; i < lists.length; i++) {
      res = mergeTwoLists(res, lists[i])
    }
    return res;
  }
};

// 尝试优化一下
var mergeKLists = function(lists) {
  // 特殊情况处理
  if(lists.length === 0) return null;
  if(lists.length === 1) return lists[0];
  // 普遍情况
  else {
    // 感觉可以使用递归 + 分治的思想，二分来分治
    let length = lists.length;
    let mid = length >> 1;
    return mergeTwoLists(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)))
  }
};

// 根据递归合并两个有序链表的思路，试试多个的递归
// 但是：数据量过大会导致 堆内存 溢出，至少 leetcode 上不能完全通过
var mergeKLists = function (lists) {
  // 特殊情况处理
  lists = lists.filter( list => !!list);    // lists = lists.filter( list => list.length > 0) 这里要记住list为链表 没有length，不能这么写。
  if(lists.length === 0) return null;
  if(lists.length === 1) return lists[0];

  let head = lists[0],
      index = 0;
  for(let i = 1; i < lists.length; i++) {
    if(lists[i].val < head.val) {
      head = lists[i];
      index = i;
    }
  }
  lists[index] = head.next
  head.next = mergeKLists(lists)
  return head
}



// 优先队列，也就是小顶堆
var mergeKLists = function(lists) {
  // 特殊情况处理
  lists = lists.filter( list => !!list);    // lists = lists.filter( list => list.length > 0) 这里要记住list为链表 没有length，不能这么写。
  if(lists.length === 0) return null;
  if(lists.length === 1) return lists[0];
  // 创建小顶堆，维护每个链表没有被合并的元素的最前面的一个
  let heap = new MinHeap([], (a, b) => a.val - b.val);
  // 给小顶堆添加初始数据
  lists.forEach(list => {
    heap.offer(list)
  });
  // 创建虚拟节点以避免分类讨论第一个节点
  let head = new ListNode(0);
  // 已经合并了的节点中的最后一个节点
  let cur = head;
  while(heap.size() > 0) {
    // 推出当前最小值
    let tem = heap.poll();
    // 维护堆，向其中添加节点
    tem.next && heap.offer(tem.next);
    // 合并
    cur.next = tem;
    // 更新cur
    cur = cur.next
  }
  return head.next;
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

