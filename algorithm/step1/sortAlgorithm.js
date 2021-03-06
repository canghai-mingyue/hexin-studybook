
let testArr = [5, 6, 4, 3, 2, 7, 5, 1];

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
        // 开始比较并插入，找寻插入的位置，若arr[pre]
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
    // 增量gap每次减半来进行多次增量插入排序
    for(let gap = length >> 1; gap > 0; gap = gap >> 1) {
        // 类似简单插入排序
        for(let i = gap; i < length; i += gap) {
            let cur = arr[i],
                preIndex = i - gap;
            while(cur < arr[preIndex]) {
                arr[preIndex+gap] = arr[preIndex];
                preIndex -= gap;
            }
            arr[preIndex + gap] = cur
        }
    }
    return arr
}

// 快速排序
// 分治思想，采用递归来实现
const quickSort = arr => {
    let left = 0,
        right = arr.length -1;

    const fastSort = (array, l, r) => {
        // 此处需注意 l < r的情况
        if(l < r) {
            let pivotIndex = getPivotIndex(array, l, r);
            fastSort(array, l, pivotIndex - 1);
            fastSort(array, pivotIndex + 1, r);
        }
    }
    // 对数据进行分组，并返回 pivot (基准值)的 index
    const getPivotIndex = (array, l, r) => {
        let pivot = array[l];
        while(l < r) {
            // pivot取array[l]， 则先从右边找一个小于pivot的值 放到array[l]上，pivot取array[r]，则相反
            // 此处须保持 l < r
            while(l < r && array[r] >= pivot) {
                r--;
            }
            array[l] = array[r];
            // 此处须保持 l < r
            while(l < r && array[l] <= pivot) {
                l++;
            }
            array[r] = array[l];
        }
        array[l] = pivot
        return l
    }

    fastSort(arr, left, right)

    return arr
}

testArr = [5, 6, 4, 3, 2, 7, 5, 1]
// 归并排序
// 同样是分治加递归的思想，合并有序子数组，先拆成两部分，分别使用归并排序，最后合并到一起。
const mergeSort = arr => {
    if(arr.length < 2) return arr;
    let middle = arr.length >> 1;
    // 拆成两部分
    let left = arr.slice(0, middle),
        right = arr.slice(middle);

    // 递归实现合并有序数组
    let mergeTwoArray = (arr1, arr2) => {
        if(arr1.length < 1) return arr2;
        if(arr2.length < 1) return arr1;
        if(arr1[0] < arr2[0]) return [arr1[0], ...mergeTwoArray(arr1.slice(1), arr2)]
        else return [arr2[0], ...mergeTwoArray(arr2.slice(1), arr1)]
    }
    // 迭代实现合并有序数组
    mergeTwoArray = (arr1, arr2) => {
        if(arr1.length < 1) return arr2;
        if(arr2.length < 1) return arr1;
        let result = [];
        while(arr1.length && arr2.length) {
            if(arr1[0] < arr2[0]) result.push(arr1.shift());
            else result.push(arr2.shift());
        }
        result = result.concat(arr1.length ? arr1 : arr2);
        return result;
    }
    // 对两部分分别使用递归排序，并合并
    return mergeTwoArray(mergeSort(left), mergeSort(right))
}





console.log(mergeSort(testArr), 'mergeSort')

