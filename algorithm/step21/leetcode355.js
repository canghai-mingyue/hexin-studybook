// 355. 设计推特

var Twitter = function() {
    // 用户 map， key 为 userId， value 为 关注人 数组
    this.userMap = new Map();
    // 推文数组， 二维数组 [userId, tweetId]
    this.news = []
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.userMap.has(userId)) this.userMap.set(userId, [])
    this.news.push([userId, tweetId])
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = [];
    for(let i = this.news.length -1; i >= 0; i--) {
        // 获取关注人包括自己的最近 10 条推文
        if(userId === this.news[i][0] || this.userMap.get(userId).includes(this.news[i][0])) {
            res.push(this.news[i][1])
        }
        if(res.length >= 10) break;
    }
    return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(this.userMap.has(followerId)) this.userMap.get(followerId).push(followeeId)
    else this.userMap.set(followerId, [followeeId])
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.userMap.set(followerId, this.userMap.get(followerId).filter(v => v !== followeeId))
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */