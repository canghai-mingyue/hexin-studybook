// isPalindromic

// 是否为回文数

let input = '12321';
// 简单粗暴通过库函数来求解
let isPalindromic = str => {
    return str === str.split('').reverse().join('')
}

console.log(isPalindromic(input))


