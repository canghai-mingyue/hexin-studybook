// 13. 罗马数字转整数

/**
 * @param {string} s
 * @return {number}
 */

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50],['C', 100], ['D', 500], ['M', 1000]]);
// 思路：根据罗马数字的规则可知道，若左值大于等于右值，那么左值为加号；若左值小于右值，那么左值为减号；最后一位必为加号。
// 因此直接遍历字符串比较左值和右值即可。
const romanToInt = function(s) {
    // 返回结果初始为0
    let res = 0;
    // 遍历字符串
    for(let i = 0; i < s.length; i++) {
        if(i === s.length - 1) {
            // 处理特殊情况，字符串最后一位，以免数组越界
            res += map.get(s[i])
        } else {
            if(map.get(s[i]) >= map.get(s[i+1])) {
                // 左值大于等于右值，相加
                res += map.get(s[i])
            } else {
                // 左值小于右值，相减
                res -= map.get(s[i])
            }
        }
    }
    return res;
};