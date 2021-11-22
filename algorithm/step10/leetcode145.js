// 145. 二叉树的后序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 后序遍历 左 => 右 => 根， 经典递归
var postorderTraversal = function(root) {
    if(!root) return [];
    let left = postorderTraversal(root.left)
    let right = postorderTraversal(root.right);
    return [...left, ...right, root.val];
};

// 迭代法
// 前序：根  左  右
// 中序：左  根  右
// 后序：左  右  根
// 将前序遍历中节点插入结果链表尾部的逻辑，修改为将节点插入结果链表的头部,链表就变为了：右 -> 左 -> 根
// 将遍历的顺序由从左到右修改为从右到左，链表就变为了：左 -> 右 -> 根
var postorderTraversal = function(root) {
    if(!root) return [];
    let stack = [],
        res = [];
    stack.push(root);
    while(stack.length > 0) {
        let tem = stack.pop();
        tem.left && stack.push(tem.left);
        tem.right && stack.push(tem.right);
        res.unshift(tem.val)
    }
    return res;
};

// 经典迭代
var postorderTraversal = function(root) {
    if(!root) return [];
    let stack = [],
        res = [],
        cur = root,     // 当前遍历到的节点
        prev = null;    // 上一个遍历的节点
    while(cur !== null || stack.length > 0) {
        // 首先到达最左边的节点
        while(cur){
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop();
        if(cur.right && cur.right !== prev) {
            // r若当前节点有右节点，则将当前节点重新入栈， cur = cur.right 去遍历右节点
            // 这里的 cur.right !== prev 是为了防止遍历完右节点返回到父节点后，又重新进入这里，陷入无限循环
            stack.push(cur);
            cur = cur.right;
        } else {
            // 否则 直接将当前节点的值加入到结果中，更新 prev 和 cur
            res.push(cur.val);
            // 这里保存prev，即为后面判断使用
            prev = cur;
            cur = null;
        }
    }
    return res;
};

//  标记法: 0 表示未访问的节点， 1 表示已经访问的节点。
var postorderTraversal = function (root) {
    if(!root) return [];
    let res = [],
        stack = [];
    // 初始化stack
    stack.push([0, root]);
    while(stack.length > 0){
        let [flag, node] = stack.pop();
        if (flag === 0) {
            // 未访问的节点， 根 右 左 的顺序推入 stack， 推出栈即为 左 右 根 即为后序遍历
            // 这里只需改变推入顺序，即可得到前、中、后序任意遍历。
            stack.push([1, node]);
            node.right && stack.push([0, node.right]);
            node.left && stack.push([0, node.left]);
        } else {
            // 已经访问的节点，直接推入 val
            res.push(node.val)
        }
    }
    return res;
}

