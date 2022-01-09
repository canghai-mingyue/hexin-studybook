// 547. 省份数量

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// DFS 遍历后标记
var findCircleNum = function(isConnected) {
    let n = isConnected.length,
        visited = new Array(n).fill(false),
        count = 0;
    const dfs = index => {
        //遍历与其相连的城市
        isConnected[index].forEach((v,i) => {
            if(v === 1 && !visited[i]) {
                // 遍历后打标记
                visited[i] = true;
                dfs(i)
            }
        })
    }
    // 遍历每个城市
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            count++;
            visited[i] = true;
            // dfs遍历与其相连的城市
            dfs(i)
        }
    }
    return count;
};


// 同样也可以 BFS 遍历
var findCircleNum = function(isConnected) {
    let n = isConnected.length,
        visited = new Array(n).fill(false),
        count = 0;
    for(let i = 0; i < n; i++) {
        if(!visited[i]) {
            count++;
            // BFS 使用队列来实现
            let queue = [i]
            while(queue.length > 0) {
                let index = queue.pop()
                visited[index] = true;
                isConnected[index].forEach((v,i) => {
                    if(v === 1 && !visited[i]) {
                        queue.push(i)
                    }
                })
            }
        }
    }
    return count;
};