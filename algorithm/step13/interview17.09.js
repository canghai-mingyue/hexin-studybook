// 面试题 17.09. 第 k 个数

/**
 * @param {number} k
 * @return {number}
 */
let array = [1, 3]
// 超时了
var getKthMagicNumber = function(k) {
    if(array.length >= k) {
        return array[k-1]
    }
    let arr = [3, 5, 7]
    for(let i = array[array.length-1] + 1; array.length < k; i++) {
        if(arr.includes(i)) {
            array.push(i);
            continue;
        }
        let flag = true,
            count = 0;
        for(let j = 2; j*j <= i; j++) {
            if(i%j === 0) count++;
            if(i%j === 0 && (!arr.includes(j) || !arr.includes(i/j))){
                flag = false
                break;
            }
        }
        if(flag && count > 0) array.push(i)
    }
    return array[k-1]
};



// 第二种思路，主要还是发现数字的规律，每一个丑数总是由前面的某一个丑数 x3 / x5 / x7 得到。
var getKthMagicNumber = function (k){
    let a3 = 0,
        a5 = 0,
        a7 = 0,
        array = [1];
    for(let i = 1; i < k; i++) {
        array[i] = Math.min(array[a3] * 3, array[a5] * 5, array[a7] * 7);
        array[i] === array[a3] * 3 && a3++;
        array[i] === array[a5] * 5 && a5++;
        array[i] === array[a7] * 7 && a7++;
    }
    return array[array.length - 1]
}

// 将 array 提出去，免得每次都要重新开始计算 array 的值
let array = [1];
let a3 = 0,
    a5 = 0,
    a7 = 0;
var getKthMagicNumber = function (k){
    if(k <= array.length) return array[k - 1]

    for(let i = array.length; i < k; i++) {
        array[i] = Math.min(array[a3] * 3, array[a5] * 5, array[a7] * 7);
        array[i] === array[a3] * 3 && a3++;
        array[i] === array[a5] * 5 && a5++;
        array[i] === array[a7] * 7 && a7++;
    }
    return array[array.length - 1]
}