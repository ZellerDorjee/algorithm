// 二维数组中的查找
// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 例如输入
// [
//   [1,2,8,9]，
//   [2,4,9,12]，
//   [4,7,10,13]，
//   [6,8,11,15]
// ]
// 如果输入查找数值为7，则返回true
// 如果输入查找数值为5，则返回false。

/**
 * @param {number[][]} array
 * @param {number} target
 * @return {boolean}
 */

// 暴力查找O(n^2)
var searchArray = function(array, target) {
    let flag = false;
    for (let i = array.length - 1; i > 0; i--) {
        for (let l = array[i].length -1; l > 0; l--) {
            if(target === array[i][l]){
                flag = true
            }
        }
    }
    console.log(flag)
    return flag;
};

// 从左下角开始找O(1)
var searchArrayByLeft = function(array, target) {
    let column= 0;
    let row = array.length - 1
    let maxColumn = array[0] ? array[0].length - 1 : 0;
    while(column <= maxColumn && row >= 0) {
        let x = array[row][column];
        if(x > target) {
            row = row -1;
        }
        if(x < target) {
            column = column + 1;
        }
        if(x === target) {
            return true;
        }
    }
    return false;
}
searchArrayByLeft([], 0)