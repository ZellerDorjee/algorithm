// 矩阵中的路径
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
// 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
// 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。
// 注意：
// 输入的路径不为空；
// 所有出现的字符均为大写英文字母；
// 样例
// matrix=
// [
//   ["A","B","C","E"],
//   ["S","F","C","S"],
//   ["A","D","E","E"]
// ]
// str="BCCE" , return "true" 
// str="ASAE" , return "false"

/**
 * @param {character[][]} matrix
 * @param {string} str
 * @return {boolean}
 */
var hasPath = function(matrix, str) {
    if(matrix.length === 0 || !matrix[0].length) {
        return false
    }
    let newStr = '';
    let row = matrix.length;
    let column = matrix[0].length;
    for(let i=0;i < row; i++) {
        for(let j=0;j < column; j++) {
            if(hasPathRecursive(matrix, str, i, j, 0)) {
                return true;
            }
        }
    }
    return false
};

const hasPathRecursive = (matrix, str, row, column, currentIndex)=>{
    if(matrix[row][column] !== str[currentIndex]) return false
    if(currentIndex === str.length - 1) return true
    let maxRow = matrix.length;
    let maxColumn = matrix[0].length;
    let dx=[-1,0,1,0], dy=[0,-1,0,1];
    let t = matrix[row][column];
    matrix[row][column] = '*'
    for(let i=0;i<4;i++) {
        let x = column + dx[i], y = row + dy[i] 
        if(x >= 0 && x < maxColumn && y >=0 && y < maxRow) {
            if(hasPathRecursive(matrix,str,y,x,currentIndex+1)) return true
        }
    }
    matrix[row][column] = t;
    return false;
}

console.log(hasPath([
    ["A","B","C","E"],
    ["S","F","B","S"],
    ["A","D","E","E"]
  ], 'ASFBC'))