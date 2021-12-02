// 682. 棒球比赛

/**
 * @param {string[]} ops
 * @return {number}
 */
// 遍历分类讨论，最后求和即可
var calPoints = function(ops) {
    let arr = [];
    ops.forEach(char => {
        if(char === 'C') {
            arr.pop();
        } else if(char === 'D') {
            arr.push(arr[arr.length - 1] * 2);
        } else if(char === '+') {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        } else {
            arr.push(parseInt(char))
        }
    })
    return arr.reduce((pre, cur) => pre + cur, 0)
};