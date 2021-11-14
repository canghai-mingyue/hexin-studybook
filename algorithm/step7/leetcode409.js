// 409. 最长回文串

/**
 * @param {string} s
 * @return {number}
 */
// 根据回文串性质，我们可以知道，只有一个字母出现次数可以为奇数，就是最中心的字母，其他的必须为偶数。
var longestPalindrome = function(s) {
    // 首先使用map存储出现次数
    let map = new Map();
    for(const char of s) {
        if(map.has(char)) map.set(char, map.get(char) + 1);
        else map.set(char, 1);
    }
    let res = 0,
        // 是否有字母出现了奇数次
        hasOdd = 0;
    for (const value of map.values()) {
        // 出现次数为偶数可以直接加上使用
        if(value % 2 === 0) res += value;
        else {
            // 出现次数为奇数，则必须减去1，取小于它的最大偶数。
            res += value - 1;
            // 表示有字母出现了奇数次
            hasOdd = 1;
        }
    }
    // 有字母出现了奇数次，则最后的结果还需要加上1
    return res + hasOdd;
};