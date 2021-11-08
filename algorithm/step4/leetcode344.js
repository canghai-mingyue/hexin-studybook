// 344. 反转字符串


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 使用库函数
var reverseString = function(s) {
    return s.reverse();
};

// 手写实现
reverseString = function(s) {
    let left = 0,
        right = s.length - 1;
    while(left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};
