// 二叉树的前序遍历

// 树节点的声明
class TreeNode{
    constructor(val) {
        this.val = (val === undefined ? null : val);
        this.left = null;
        this.right = null;
    }

}

// 数组转换为二叉树
const arrayToTree = arr => {
    let root;
    const insertNode = (parentNode, childNode) => {
        // 若节点的值为空，则不插入。
        if(!childNode || childNode.val === '') return;
        if(childNode.val > parentNode.val) {
            if (parentNode.right) insertNode(parentNode.right, childNode);
            else parentNode.right = childNode;
        } else {
            if (parentNode.left) insertNode(parentNode.left, childNode);
            else parentNode.left = childNode;
        }
    }
    arr.forEach(val => {
        if(root) insertNode(root, new TreeNode(val))
        else root = new TreeNode(val)
    })

    return root;
}

let input = '1,,2,3'

let tree = arrayToTree(input.split(','))

// 前序遍历，按照 根 => 左 => 右 的顺序   递归法
let preorderTraversal = root => {
    if(!root) return [];
    let result = [];
    const help = (node, result) => {
        result.push(node.val);
        node.left && help(node.left, result);
        node.right && help(node.right, result);
    }
    help(root, result);
    return result;
};

// 迭代法  使用栈来实现
preorderTraversal = root => {
    if(!root) return [];
    let stack = [],
        result = [];
    // 先将根节点推入栈，开启循环
    stack.push(root);
    while(stack.length > 0) {
        let cur = stack.pop();
        result.push(cur.val);
        // 由于栈先入后出的特性，所以此处先右子树先入栈
        cur.right && stack.push(cur.right);
        cur.left && stack.push(cur.left);
    }
    return result
}

let res = preorderTraversal(tree)

console.log(res.join(','))