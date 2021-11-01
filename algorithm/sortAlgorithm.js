
const testArr = [5, 6, 4, 3, 2, 1]

// 简单选择排序
// 每次找到最小值与前面做交换
const selectSort = arr => {
    let length = arr.length,
        minIndex;           // 记录最小值的index
    for(let i = 0; i < length; i++) {
        minIndex = i;       //  先假设minIndex为第一个数
        // 找寻后面的最小值并更新minIndex
        for (let j = i + 1; j < length; j++) {
            if(arr[j] < arr[minIndex]) minIndex = j;
        }
        // 交换i与minIndex
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}

// 简单插入排序
// 假设前面已经排序，后面的数据依次向前插入有序序列
const insertSort = arr => {
    let length = arr.length;
    for(let i = 1; i < length; i++) {
        let cur =  arr[i],        // 先保存当前值
          preIndex = i - 1;     //  从前一个值开始比较
        // 开始比较并插入，找寻插入的位置
        while(arr[preIndex] > cur) {
          arr[preIndex+1] = arr[preIndex];
          preIndex--;
        }
        // 将当前值插入其应在的位置
        arr[preIndex+1] = cur
    }
    return arr
}

// 冒泡排序
// 每次比较将最大值放到最后
const bubbleSort = arr => {
    let length = arr.length;
    // 一共需要 length - 1 次冒泡
    for(let i = 1; i < length; i++) {
        // 第 i 次冒泡，需要比较 length - i 次
        for(let j = 0; j < length - i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

// 希尔排序
// 增量插入排序
const shellSort = arr => {
    let length = arr.length
}





console.log(bubbleSort(testArr), 'bubbleSort')

