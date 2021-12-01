// 859. 亲密字符串

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// 主要是分析 与 分类讨论
var buddyStrings = function(s, goal) {
    // 首先 length 不同， 则必定为 false
    if(s.length !== goal.length) return false;
    // 其次 length 为 1，也必定为 false
    if(s.length === 1) return false;
    // 普遍情况则计算不同的位数，indexArray 保存不同的 index
    let indexArray = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== goal[i]) indexArray.push(i);
    }
    // 若有两位以上或者只有一位不同则必定为 false
    if(indexArray.length > 2 || indexArray.length === 1) return false;
    // 若两个字符串相等，则要看 s 字符串有没有相同的字母，有相同的字母则可以交换得到
    if(indexArray.length === 0) {
        // 使用 map 来判断是否有相同字符
        let map = new Map();
        for(let i = 0; i < s.length; i++) {
            if(map.has(s[i])) return true;
            else map.set(s[i], 1);
        }
        return false;
    }
    // 最后只有两位不同，则应当互相想等
    else return s[indexArray[0]] === goal[indexArray[1]] && s[indexArray[1]] === goal[indexArray[0]]
};

buddyStrings('ab', 'ab')