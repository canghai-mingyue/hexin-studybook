// 451. 根据字符出现频率排序

/**
 * @param {string} s
 * @return {string}
 */
// 使用map，并数组排序，sort方法的时间复杂度为O(NlogN)
var frequencySort = function(s) {
    // 使用map记录每个元素出现的频次
    const map = new Map();
    for(let char of s){
        if(map.has(char)) map.set(char, map.get(char) + 1)
        else map.set(char, 1)
    }
    // map转为数组，并根据出现次数降序排列
    const arr = Array.from(map).sort((a, b) => b[1] - a[1]);
    // 遍历生成目标字符串
    let res = ''
    arr.forEach(item => {
        let [char, count] = item;
        while(count > 0) {
            res += char;
            count--;
        }
    })
    return res;
};


var frequencySort = function(s) {
    // 因为是字符串，所以根据 ASCLL 码来创建一个 length 为 128 的数组来存储每个元素出现的频次
    let arr = new Array(128).fill(0).map((item, index) => [index, 0] );
    for(let char of s){
        arr[char.charCodeAt()][1]++
    }
    arr.sort((a, b) => b[1] - a[1]);
    // 遍历生成目标字符串
    let res = ''
    arr.forEach(item => {
        let [char, count] = item;
        while(count > 0) {
            res += String.fromCharCode(char);
            count--;
        }
    })
    return res;
};

// 桶排序
var frequencySort = function(s) {
    // 使用map记录每个元素出现的频次
    const map = new Map();
    let maxFrequency = 0;
    for(let char of s){
        let frequency = (map.get(char) || 0) + 1
        map.set(char, frequency)
        maxFrequency = Math.max(maxFrequency, frequency)
    }
    // 桶，存储从 1 到 maxFreq 的每个出现频率的字符；
    const buckets = new Array(maxFrequency+1).fill(0).map(() => new Array());
    for(const [char, frequency] of map.entries()){
        buckets[frequency].push(char)
    }
    // 遍历生成目标字符串
    let res = '';
    for(let i = maxFrequency; i > 0; i--) {
        const bucket = buckets[i];
        for(const char of bucket) {
            for(let j = 0; j < i; j++){
                res += char
            }
        }
    }
    return res;
};