// 633. 平方数之和

/**
 * @param {number} c
 * @return {boolean}
 */
// 暴力双循环   超出时间限制
var judgeSquareSum = function(c) {
    for (let i = 0; i <= c; i++) {
        for(let j = 0; j <= c; j++) {
            if((i * i + j * j) === c) return true;
        }
    }
    return false;
};

// 小优化一下，换个思路，减少一次循环，还是超时
var judgeSquareSum = function(c) {
    for (let i = 0; i <= c; i++) {
        let tem = Math.sqrt(c - i * i);
        if(tem === parseInt(tem)) return true
    }
    return false;
};

// 再优化一下, 勉强通过
var judgeSquareSum = function(c) {
    // 很明显 i 的平方小于等于 c， 因此 i不会大于 c 的平方根，再优化一下。
    let max = parseInt(Math.sqrt(c));
    for (let i = 0; i <= max; i++) {
        let tem = Math.sqrt(c - i * i);
        if(tem === parseInt(tem)) return true
    }
    return false;
};

// 再度优化一下， 好一点点
var judgeSquareSum = function(c) {
    // 我们假设 i 是两个数中较小的那一个， 那么 i 的平方不会大于 c 的一半，
    let max = parseInt(Math.sqrt(c >> 1));
    for (let i = 0; i <= max; i++) {
        let tem = Math.sqrt(c - i * i);
        if(tem === parseInt(tem)) return true
    }
    return false;
};

// 另一种思路，双指针
var judgeSquareSum = function(c) {
    // 假设 a <= b， 起始 a = 0，b = Math.sqrt(c)
    // 若 a2 + b2 = c，则找到解
    // 若 a2 + b2 > c，则b--
    // 若 a2 + b2 < c，则a++
    // 最后 a = b 时还无解，那就是真无解了。
    let a = 0,
        b = parseInt(Math.sqrt(c));
    // 循环终止条件 a = b
    while(a <= b) {
        if (a * a + b * b === c) return true;
        if (a * a + b * b < c) {
            a++;
            continue;
        }
        if (a * a + b * b > c) {
            b--;
        }
    }
    return false
}

// 首先，任何一个合数都可以由多个质数相乘得到，也就是质因子。
// 其次，费马平方和定理
// 一个非负整数 c 如果能够表示为两个整数的平方和，当且仅当 c 的所有形如 4k + 3 的质因子的幂均为偶数。
// 注意： c 至多只有一个质因数大于 根号c！！
var judgeSquareSum = function(c) {
    let max = parseInt(Math.sqrt(c));       // 除去可能存在的大于根号c的质因数之外，质因数的可能最大值
    // 质数从2开始
    for(let factor = 2; factor <= max; factor++) {
        // 如果factor不是c的因数，则直接找下一个因数
        if(c % factor !== 0) continue;
        // 计算该因数的指数，也就是幂
        let power = 0;
        while(c % factor === 0) {
            power++;
            c /= factor;
        }
        // 若质因子是4k + 3 的形式，并且它的幂 power 是奇数，那么就不满足条件
        if(factor % 4 === 3 && power % 2 !== 0) return false;
    }
    // 例如 11 这样的用例，由于上面的 for 循环里 factor <= max ，base == 11 的时候不会进入循环体
    // 因此在退出循环以后需要再做一次判断
    // 这里其实就是检验 可能存在的大于根号c的质因数，它的幂必定为1，因此检验其是否形如 4k + 3， 不形如才符合条件
    return c % 4 !== 3;
};