// 331. 验证二叉树的前序序列化

/**
 * @param {string} preorder
 * @return {boolean}
 */
// 使用栈，前序遍历为 根 => 左 => 右，因此叶子节点的遍历一定为 ‘val,#,#’，因此将‘val,#,#’用‘#’代替，那么叶子节点就会变成空节点
// 递归判断则最后树会变为一个空节点，那么数组也就会变成 ['#']，若不满足则不是二叉树的前序遍历而来的，递归改为循环也就会使用栈。
var isValidSerialization = function(preorder) {
    let stack = [];
    let arr = preorder.split(',');
    arr.forEach(val => {
        stack.push(val)
        if(val === '#') {
            // 判断是否满足 ‘val,#,#’ 的形式，满足则 替换为 ‘#’
            while(stack.length > 2 && stack[stack.length-1] === '#' && stack[stack.length-2] === '#' && stack[stack.length-3] !== '#') {
                stack.pop()
                stack.pop()
                stack.pop()
                stack.push(val)
            }
        }
    })
    // 最后判断是否为 ['#']
    return stack.length === 1 && stack[0] === '#'
};

// 根据二叉树和的入度和出度之和为 0 来判断是是否合法
// 空节点入度为 1，出度为 0， 非根节点的非空节点入度为 1，出度为 2， 根节点的入度为 0，出度为 2
var isValidSerialization = function(preorder) {
    // 假设 degreeDiff 为入度减去出度
    let degreeDiff = 0;
    let arr = preorder.split(',');
    for(const val of arr) {
        // 因为前序遍历为 根 => 左 => 右，先遍历根节点 所以循环过程中 degreeDiff 应当小于等于 0，大于 0 则不符合前序遍历的规则，直接返回false
        if(degreeDiff > 0) return false;
        // 非空节点 入度比出度小 1，因此degreeDiff--
        if(val !== '#') degreeDiff--;
        // 空节点 入度比出度大1，因此degreeDiff++
        else degreeDiff++;
    }
    // 因为在循环中 遇到根节点 也degreeDiff--，实际上应该degreeDiff-2 才能等于0， 因此检验结果 degreeDiff === 1
    return degreeDiff === 1;
};