// 计数排序

let input = '[2,-3,-8,7,1,2,-2,8,9]';
let array = JSON.parse(input).map(Number);

// 先考虑值都是非负整数
let countingSort = arr => {
    // 首先处理特殊情况
    if(arr.length < 2) return arr;
    // 获取最大最小值
    let max = arr[0],
        min = arr[0];
    arr.forEach(val => {
        max < val && (max = val)
        val < min && (min = val)
    });
    // 创建保存每个数出现个数的数组
    let bucket = new Array(max + 1).fill(0);
    arr.forEach(val => {
        bucket[val]++
    })
    //  根据bucket反填排序后的数组
    let result = [];
    bucket.forEach((val, index) => {
        while(val > 0) {
            result.push(index)
            val--;
        }
    })
    return result;
}


// 若包含负数的情况
countingSort = arr => {
    // 首先处理特殊情况
    if(arr.length < 2) return arr;
    // 获取最大最小值
    let max = arr[0],
        min = arr[0];
    arr.forEach(val => {
        max < val && (max = val)
        val < min && (min = val)
    });
    // 创建保存每个数出现个数的数组， max - min + 1 得出所需要的数组大小
    let bucket = new Array(max - min + 1).fill(0);
    arr.forEach(val => {
        // val - min  保证数组不会越界
        bucket[val - min]++
    })
    //  根据bucket反填排序后的数组
    let result = [];
    bucket.forEach((val, index) => {
        while(val > 0) {
            // index + min 还原原本数值
            result.push(index + min)
            val--;
        }
    })
    return result;
}

console.log(countingSort(array).join(','))