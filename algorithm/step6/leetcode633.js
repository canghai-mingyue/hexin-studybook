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

// 小优化一下，还是超时
var judgeSquareSum = function(c) {
    for (let i = 0; i <= c; i++) {
        let tem = Math.sqrt(c - i * i);
        if(tem === parseInt(tem)) return true
    }
    return false;
};

// 再优化一下, 勉强通过
var judgeSquareSum = function(c) {
    let max = parseInt(Math.sqrt(c));
    for (let i = 0; i <= max; i++) {
        let tem = Math.sqrt(c - i * i);
        if(tem === parseInt(tem)) return true
    }
    return false;
};

// 再度优化一下， 好一点点
var judgeSquareSum = function(c) {
    let max = parseInt(Math.sqrt((c >> 1) + 1));
    for (let i = 0; i <= max; i++) {
        let tem = Math.sqrt(c - i * i);
        if(tem === parseInt(tem)) return true
    }
    return false;
};

// 另一种思路，双指针
var judgeSquareSum = function(c) {
    let a = 0,
        b = parseInt(Math.sqrt(c));
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

// 费马平方和定理，也并没有优化时间复杂度
// 一个非负整数 c 如果能够表示为两个整数的平方和，当且仅当 c 的所有形如 4k + 34k+3 的质因子的幂均为偶数。
var judgeSquareSum = function(c) {
    for (let base = 2; base * base <= c; base++) {
        // 如果不是因子，枚举下一个
        if (c % base !== 0) {
            continue;
        }

        // 计算 base 的幂
        let exp = 0;
        while (c % base === 0) {
            c /= base;
            exp++;
        }

        // 根据 Sum of two squares theorem 验证
        if (base % 4 === 3 && exp % 2 !== 0) {
            return false;
        }
    }

    // 例如 11 这样的用例，由于上面的 for 循环里 base * base <= c ，base == 11 的时候不会进入循环体
    // 因此在退出循环以后需要再做一次判断
    return c % 4 !== 3;
};