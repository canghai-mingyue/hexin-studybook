// 933. 最近的请求次数

var RecentCounter = function() {
    // this.requestCount = 0;
    this.time = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // this.requestCount++;
    // this.time.push(t);
    // let res = 1;
    // for(let i = this.time.length - 2; i >= 0; i--) {
    //     if(this.time[i] >= t - 3000) res++;
    //     else break
    // }
    // return res;

    this.time.push(t);
    while(this.time[0] < t - 3000) {
        this.time.shift();
    }
    return this.time.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */