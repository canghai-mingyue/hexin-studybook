// 剑指 Offer II 095. 最长公共子序列

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 两个字符串，二维动态规划
var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length,
        length2 = text2.length;
    // 考虑到边界情况，初始数组的长度要大1
    // 注意注意：不能这么初始化，fill方法参数为对象时，这会导致dp的每个子数组都是同一个引用。
    // let dp = new Array(length2 + 1).fill(new Array(length1 + 1).fill(0));
    // 使用map方法来初始化二维数组
    let dp = new Array(length2 + 1).fill(0).map(() => new Array(length1 + 1).fill(0));
    // 遍历开始求dp的值
    for(let i = 1; i <= length2; i++) {
        for(let j = 1; j <=length1; j++) {
            // dp方程
            if(text1[j-1] === text2[i-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    console.log(dp);
    return dp[length2][length1]
};

longestCommonSubsequence("bsbininm", "jmjkbkjkv")

// 空间复杂度优化，注意到dp[i][j]只与当前行和上一行相关，因此不需要一个二维数组，只需要两个一维数组即可。
var longestCommonSubsequence = function(text1, text2) {
    let length1 = text1.length,
        length2 = text2.length;
    // 上一行
    let pre = new Array(length1 + 1).fill(0),
        // 当前行
        cur = new Array(length1 + 1).fill(0);
    // 遍历开始求dp的值
    for(let i = 1; i <= length2; i++) {
        for(let j = 1; j <=length1; j++) {
            // dp方程
            if(text1[j-1] === text2[i-1]) cur[j] = pre[j-1] + 1;
            else cur[j] = Math.max(pre[j], cur[j-1]);
        }
        // 注意注意：这里要解构赋值！！否则还是同一个引用
        pre = [...cur];
    }
    return cur[length1]
};
