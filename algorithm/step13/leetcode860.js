// 860. 柠檬水找零

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 记录当前 5 元和 10 元 的个数
    let five = 0,
        ten = 0;
    for(const bill of bills) {
        // 分类讨论
        if(bill === 5) five++;
        if(bill === 10) {
            if(five < 1) return false;
            ten++;
            five--;
        }
        else if(bill === 20) {
            // 此处为贪心的思想，找零时优先找 10 元的
            if(ten > 0 && five > 0) {
                ten--;
                five--;
            } else if(five > 2) {
                // 没有 10 元 时
                five -= 3
            } else return false;
        }
    }
    return true;
};
lemonadeChange([5,5,5,10,20])
