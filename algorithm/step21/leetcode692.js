// 692. 前K个高频单词

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// 使用 map 记录次数然后排序即可
var topKFrequent = function(words, k) {
    let map = new Map();
    // map 记录次数
    words.forEach(word => {
        if(map.has(word)) map.set(word, map.get(word) + 1);
        else map.set(word, 1);
    })
    // 排序 compareFn ，先按照次数降序排列，次数相同则比较字符的顺序，字符升序
    let arr = Array.from(map).sort((a, b) => b[1] - a[1] !== 0 ? b[1] - a[1] : (a[0] > b[0] ? 1 : -1))
    // 最后返回前 k 个
    return arr.slice(0, k).map(v => v[0])
};