//621. 任务调度器

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// 思路：主要是贪心的思想，
// 首先找出数量最多的任务有几个任务，将他们按照 n 的间距排列执行，数量最多的任务有几个任务 max1， 有几个数量最多的任务 max2;
// 然后将剩余的任务插到间距之间执行，若不能插满则需要 (max1-1) * (n+1) + max2，若插满之后还有任务没做，则  tasks.length;
var leastInterval = function(tasks, n) {
    // 处理特殊情况
    if(tasks.length <= 1 ||  n === 0) return tasks.length;
    // let map = new Map();
    // tasks.forEach(v => {
    //     if(map.has(v)) map.set(v, map.get(v) + 1);
    //     else map.set(v, 1);
    // })
    // 这里用数组更方便寻找 max1 和 max2
    let array = new Array(26).fill(0);
    tasks.forEach(v => {
        // 大写字母的 ASCII 码的范围为 65 - 90，小写字母 97 - 122；
        array[v.charCodeAt()-65]++;
    })
    array.sort((a, b) => a - b);
    // 数量最多的任务有几个任务
    let max1 = array.pop();
    // 有几个数量最多的任务
    let max2 = 1;
    while(array.pop() === max1){
        max2++;
    }
    return Math.max(tasks.length, (max1-1) * (n+1) + max2);

};

leastInterval(["A","A","A","B","B","B"], 2)