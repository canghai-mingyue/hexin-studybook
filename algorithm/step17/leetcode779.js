// 779. 第K个语法符号

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 可以发现规律，下一行是上一行 加上 上一行的按位取反 的字符串
// 暴力内存溢出
var kthGrammar = function(n, k) {
    let array = [[0]]
    for(let i = 1; i < n; i++) {
        array[i] = array[i-1].concat(array[i-1].map(v => 1 - v))
    }
    return array[n-1][k-1];
};
// 这样其实可以优化一下内存，不过不影响数组的最大长度，还是会溢出。
var kthGrammar = function(n, k) {
    let pre = [0],
        cur = [0];
    for(let i = 1; i < n; i++) {
        cur = pre.concat(pre.map(v => 1 - v))
        pre = cur;
    }
    return cur[k-1];
};
// 同上一种方法
var kthGrammar = function(n, k) {
    let cur = [0];
    for(let i = 1; i < n; i++) {
        cur = cur.concat(cur.map(v => 1 - v))
    }
    return cur[k-1];
};
// 字符串也会内存溢出
var kthGrammar = function(n, k) {
    let cur = '0';
    const revertStr = str => {
        let newStr = ''
        for(const char of str) {
            if(char === '0') newStr += '1';
            else newStr += '0';
        }
        return newStr
    };
    for(let i = 1; i < n; i++) {
        cur = cur + revertStr(cur)
    }
    return cur[k-1];
};

// 父子递归，n 行第 k 个字符是由 n-1 行 Math.floor((k+1)/2) 个字符生成的。
// n 行第 k 个字符 由它的父字符和 k 的奇偶性有关
// 父字符   k % 2   结果
//   0       0      1
//   0       1      0
//   1       0      0
//   1       1      1
// 因此结果为 父字符 与 k % 2 异或 再取反（注意：1取反为 -2，这里不能使用按位取反 ~，用 1 减去）
var kthGrammar = function(n, k) {
    if(n === 1) return 0;
    return 1 - ((k % 2) ^ kthGrammar(n-1, k + 1 >> 1));
};

// a&1 为 0，则 a 为偶数；为 1，则为奇数
// ~k&1 ，那么奇数时 ~k&1 为 0.
// 父字符   ~k & 1   结果
//   0       1      1
//   0       0      0
//   1       1      0
//   1       0      1
var kthGrammar = function(n, k) {
    if(n === 1) return 0;
    return (~k & 1) ^ kthGrammar(n-1, k + 1 >> 1);
};

// 前面的方法有点不好理解，位运算也比较不好理解
// 这种思路更好理解一些，因为后一半是前一半的反转，因此我们先看 k 在前半部分还是在后半部分。
// 在前半部分就是上一级的第 k 个， 后半部分就是上一级的第 k - half 个的反转
var kthGrammar = function(n, k) {
    if(n === 1) return 0;
    // 求出本级元素个数，得到一半的个数
    let half = Math.pow(2, n - 1) >> 1;
    return k > half ? 1 - kthGrammar(n - 1, k - half) : kthGrammar(n - 1, k)
};
