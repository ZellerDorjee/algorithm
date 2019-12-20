// 斐波那契数列
// 输入一个整数 n ，求斐波那契数列的第 n 项。
// 假定从0开始，第0项为0。(n<=39)
// 样例
// 输入整数 n=5
// 返回 5

/**
 * @param {number} n
 * @return {number}
 */

// O(n)
var Fibonacci = function(n) {
    let a = 0,
        b = 1;
    while (n--) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
};

var R = function(n) {
    if (n < 1) {
        return 0;
    } else if (n == 1 || n == 2) {
        return 1;
    }
    return R(n - 1) + R(n - 2);
};
