// 不修改数组找出重复的数字
// 给定一个长度为 n+1 的数组nums，数组中所有的数均在 1∼n 的范围内，其中 n≥1。
// 请找出数组中任意一个重复的数，但不能修改输入的数组。
// 例如给定 nums = [2, 3, 5, 4, 3, 2, 6, 7]。返回 2 或 3。
// 思考题：如果只能使用 O(1) 的额外空间，该怎么做呢？
/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力查找O(n^2)
var duplicateInArray = function(nums) {
    let duplicateNum = 0;
    for(let i=0; i<nums.length; i++) {
        for(let j=0; j<nums.length;j++) {
            if( i!==j && nums[i] === nums[j]){
                duplicateNum = nums[j]
            }
        }
    }
    return duplicateNum
};

// 分治思想O(nlogn)
var duplicateInArrayByDrawer = function(nums) {
    let n = nums.length - 1;
    let l = 1
    while(n > l) {
        let mid = Math.floor((l + n) / 2)
        let s = 0;
        nums.forEach(val => {
            if(val <= mid && val >= l){
                s++;
            }
        });
        if(s > mid - l +1) {
            n = mid 
        }else {
            l = mid + 1
        }
    }
    return n
}