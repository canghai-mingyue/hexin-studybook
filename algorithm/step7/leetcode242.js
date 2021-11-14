// 242. 有效的字母异位词

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 使用 map
var isAnagram = function(s, t) {
    let map = new Map();
    for (const char of s) {
        if(map.has(char)) map.set(char, map.get(char) + 1);
        else map.set(char, 1);
    }
    for (const char of t) {
        if(map.has(char)) {
           if(map.get(char) >= 1)  map.set(char, map.get(char) - 1);
           else return false;
        } else {
            return false
        }
    }
    // 最后判断map的每一项是否都为0
    let arr = Array.from(map).map(item => item[1]);
    return arr.every(v => v===0)
};

// 可以换一下判断思路
var isAnagram = function(s, t) {
    let map = new Map();
    for (const char of s) {
        if(map.has(char)) map.set(char, map.get(char) + 1);
        else map.set(char, 1);
    }
    for (const char of t) {
        if(map.has(char)) {
            if(map.get(char) > 1)  map.set(char, map.get(char) - 1);
            // 这里次数等于 1 可以直接删掉这个key，以方便用map的size来判断
            else map.delete(char);
        } else {
            return false
        }
    }
    // 最后根据map的尺寸判断即可，有效的字母异位词map的size应该为0
    return !map.size
};

// 可以sort判断
var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}