// function sleep(index, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(index);
//         }, time);
//     });
// }
//
// async function test () {
//     for(let i = 0; i < 10; i++) {
//         let result = await sleep(i, 1000);
//         console.log(result);
//     }
// }
//
// test()



function curry(fn,...args){
    let fnLen = fn.length,
        argsLen = args.length;
    //对比函数的参数和当前传入参数
    //若参数不够就继续递归返回curry
    //若参数够就调用函数返回相应的值
    console.log(arguments.length)
    if(fnLen > argsLen){
        return function(...arg2s){
            return curry(fn,...args,...arg2s)
        }
    }else{
        return fn(...args)
    }
}

function sumFn(a,b,c) {
    return a + b + c
}
let sum = curry(sumFn);
// console.log(sum.length)
// console.log(sum(2).length)
sum(2)(3)(5)//10
// sum(2,3)(5)//10