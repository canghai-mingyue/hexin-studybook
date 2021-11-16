// 647. 回文子串

/**
 * @param {string} s
 * @return {number}
 */
// 暴力法 时间复杂度O(n3) 双重循环O(n2)加判断是否为回文串O(n)
var countSubstrings = function(s) {
    let length = s.length;
    if(length < 2) return 1;
    // arr[i] 表示以第 i 个字符 为结尾的回文串的个数
    let arr = new Array(length).fill(1);
    for(let i = 1; i < length; i++) {
        // 求arr[i]
        for(let j = 0; j < i; j++) {
            if(isPalindromic(s.substring(j, i+1))) arr[i]++;
        }
    }
    // 最后自然是返回 arr 各项的和
    return arr.reduce((pre, cur) => pre + cur, 0)
};
// 判断字符串是否是回文串 O(n)
let isPalindromic = str => {
    return str === str.split('').reverse().join('')
}

// 动态规划： dp[i][j]表示 s[i] 到 s[j] 是不是回文串，j >= i
// dp方程：dp[i][j] = s[i] === s[j] && (dp[i+1][j-1] || j - i < 2)
var countSubstrings = function(s) {
    let length = s.length;
    if(length < 2) return 1;
    let count = 0,
        dp = new Array(length).fill(false).map(() => new Array(length).fill(false));
    // 注意：这里因为求dp[i][j]，要先知道 dp[i+1][j-1]，所以双重循环应当让 i 逐渐减小， j 逐渐增大，否则结果会不准确。
    for(let j = 0; j < length; j++) {
        for(let i = j; i >= 0; i--) {
            if(s[i] === s[j] && (j - i < 2 || dp[i+1][j-1])) {
                dp[i][j] = true;
                count++;
            }
        }
    }
    return count;
}



// 中心扩展法，只能说666   时间复杂度O(n2)
// 思路：枚举回文中心，向外扩展，计算回文串数量。而回文中心可以为 1 个或 2 个字符，因此长度为 length 的字符串，可以有 2*length - 1 个回文中心。
// 长度为 length 的字符串，可以有 2*length - 1 个回文中心
var countSubstrings = function(s) {
    let length = s.length;
    if(length < 2) return 1;
    // 回文子串个数
    let count = 0;
    // 这里回文中心的 index 与 i 有一定关系，当然也可以奇偶分别求解
    for(let i = 0; i < 2 * length - 1; i++) {
        // 回文中心左index
        let left = i >> 1;
        // 回文中心右index
        let right = left + i % 2;
        // 当前回文中心可得到的回文子串数量
        while(left >= 0 && right < length && s[left] === s[right]) {
            count++;
            // 向外扩展
            left--;
            right++;
        }
    }
    return count;
}