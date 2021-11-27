
// 因式分解找哪两个素数乘积
let input = readline();

const isPrime = num => {
    if(num <= 1) return false;
    for(let i = 2; i * i <= num; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

const rsa = num => {
    let a = -1,
        b = -1;
    for(let i = 2; i * i <= num; i++) {
        if(isPrime(i) && num % i === 0 && isPrime(num / i)){
            a = i,
                b = num/i
        }
    }
    console.log(a, b)
}

rsa(input);

// 字符串统计，输出剩余可用字符集
let input = readline();

const surplusChar = str => {
    let arr = str.split('@');
    let arr0 = arr[0].split(','),
        arr1 = arr[1].split(',');
    arr0 = arr0.map(v => v.split(':'));
    arr1 = arr1.map(v => v.split(':'));
    let map0 = new Map(arr0),
        map1 = new Map(arr1);
    map1.forEach((value, key) => {
        map0.set(key, parseInt(map0.get(key)) - parseInt(value))
    })
    arr0 = Array.from(map0);
    arr0 = arr0.filter(v => v[1] > 0);
    arr0 = arr0.map(v => v.join(':'))
    let result = arr0.join(',')
    console.log(result)
}

surplusChar(input);


// 求源节点到目的节点的最小传输时延
let input = readline();
let [m, n] = input.split(' ').map(v => parseInt(v));
let delayList = [];
for(let i = 0; i < n; i++) {
    let str = readline();
    delayList.push(str.split(' ').map(v => parseInt(v)));
}
input = readline();
let [u, v] = input.split(' ').map(v => parseInt(v));

const array = new Array(m+1).fill(0).map(() => new Array(m+1).fill(200));
delayList.forEach(v=> {
    array[v[0]][v[1]] = v[2]
})
let result = Number.MAX_SAFE_INTEGER,
    flag = false;

const dfs = (u, v, time = 0) => {
    if(u === v) return;
    if(array[u][v] !== 200) {
        flag = true
        result = Math.min(result, time + array[u][v]);
    }
    for(let i = 1; i <= m; i++) {
        if(array[u][i] !== 200) {
            dfs(i, v, time + array[u][i]);
        }
    }
}

dfs(u, v, 0)

if(flag) {
    console.log(result);
} else {
    console.log(-1);
}
