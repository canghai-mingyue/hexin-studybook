// 202. 快乐数

/**
 * @param {number} n
 * @return {boolean}
 */
// 三种情况
// 最终得到1
// 最终进入循环
// 值越来越大，进入无穷。最坏的情况下，算法可能会在 243 以下的所有数字上循环，然后回到它已经到过的一个循环或者回到 1，这种情况不可能发生
var isHappy = function(n) {
    let map = new Map();
    // 检测是否有环
    while(!map.has(n)){
        if(n === 1) return true;
        map.set(n, true)
        n = help(n)
    }
    return false
};

// 给定一个数字，获取它的next
let help = num => {
    // 此处不能直接.map(parseInt)，因为parseInt的第二个参数是radix(解析基数)，这会导致把index当作基数解析，不符合预期
    let arr = num.toString().split('').map(v => parseInt(v));
    return arr.reduce((pre, cur) => pre + cur * cur, 0)
}
// 上面的方法不是很正
let help = num => {
    let res = 0;
    while(num) {
        let tem = num % 10;
        res += tem * tem;
        num = parseInt(num / 10);
    }
    return res;
}




// 环的问题，除了map外，也可使用快慢指针来实现，类似于 leetcode 141. 环形链表
var isHappy = function(n) {
    let fast = n,
        slow = n;
    // 这里help(fast)会计算两次，不太好。
    while(fast !== 1 && help(fast) !==1) {
        fast = help(help(fast));
        slow = help(slow)
        if(fast === slow) return false
    }
    return true
};

var isHappy = function(n) {
    let fast = help(n),
        slow = n;
    while(fast !== 1 && fast !== slow) {
        fast = help(help(fast));
        slow = help(slow)
    }
    return fast === 1
};