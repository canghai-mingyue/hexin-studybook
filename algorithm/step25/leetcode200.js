// 200. 岛屿数量

/**
 * @param {character[][]} grid
 * @return {number}
 */
// 思路：遍历二维数组，遇到 1 则岛屿数量加 1，并将其上下左右的节点置为 0，避免重复计算。
var numIslands = function(grid) {
    const length = grid.length,
        width = grid[0].length;
    const dfs = (i , j) => {
        // 处理特殊情况
        if(i < 0 || j < 0 || i >= length || j >= width ||grid[i][j] === '0') return;
        grid[i][j] = '0';
        dfs(i-1, j);
        dfs(i, j+1);
        dfs(i+1, j);
        dfs(i, j-1);
    }
    let count = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < width; j++){
            if(grid[i][j] === '1') {
                count++;
                dfs(i, j)
            }
        }
    }
    return count;
};

// BFS 这会超时
var numIslands = function(grid) {
    const length = grid.length,
        width = grid[0].length;
    let count = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < width; j++){
            if(grid[i][j] === '1') {
                count++;
                let queue = [[i, j]]
                while(queue.length > 0) {
                    let [ii, jj] = queue.shift()
                    grid[ii][jj] = '0'
                    if(ii - 1 >= 0 && grid[ii-1][jj] === '1') queue.push([ii-1, jj])
                    if(jj + 1 < width && grid[ii][jj+1] === '1') queue.push([ii, jj+1])
                    if(ii + 1 < length && grid[ii+1][jj] === '1') queue.push([ii+1, jj])
                    if(jj - 1 >= 0 && grid[ii][jj-1] === '1') queue.push([ii, jj-1])
                }
            }
        }
    }
    return count;
};
// 修改一下存储方式竟然就通过了
var numIslands = function(grid) {
    const length = grid.length,
        width = grid[0].length;
    let count = 0;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < width; j++){
            if(grid[i][j] === '1') {
                count++;
                // 这里不用数组来存储下标，而是使用余数的方式来存储
                let queue = [i * width + j];
                while(queue.length > 0) {
                    let tem = queue.pop();
                    let jj = tem % width;
                    let ii = (tem - jj) / width;
                    grid[ii][jj] = '0'
                    if(ii - 1 >= 0 && grid[ii-1][jj] === '1') queue.push([(ii-1) * width + jj])
                    if(jj + 1 < width && grid[ii][jj+1] === '1') queue.push(ii * width + jj + 1)
                    if(ii + 1 < length && grid[ii+1][jj] === '1') queue.push((ii+1) * width + jj)
                    if(jj - 1 >= 0 && grid[ii][jj-1] === '1') queue.push(ii * width + jj - 1)
                }
            }
        }
    }
    return count;
};