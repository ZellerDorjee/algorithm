// 找出数组中重复的元素
// 在一个长度为n的数组里的所有数字都在0~n-1的范围内。数组中某些数字是重复的，
// 但是不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// 例如，如果输入长度为7,的数组{2,3,1,0,2,5,3}，那么对应的输出是重复的数组2或者3。（n个元素，n种可能的取值）

/**
 * @param {number[]} nums
 * @return {number}
 */
// hashmap
var duplicateInArraybyHash = function(nums) {
    let numsObj = {};
    let duplicateNum = 0;
    let unRange = false;
    let x = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (numsObj[nums[i]]) {
            numsObj[nums[i]]++;
            duplicateNum++;
            x = nums[i];
        } else {
            numsObj[nums[i]] = 1;
        }
        if (nums[i] < 0 || nums[i] > nums.length - 1) {
            unRange = true;
        }
    }

    return unRange || !duplicateNum ? -1 : x;
};

// swap
var duplicateInArraybySwap = function(nums) {
    let duplicateNum = -1;
    let isOver = false;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] < 0 || nums[i] > nums.length - 1) {
            isOver = true;
        }
    }
    for (let i = 0; i <= nums.length - 1; i++) {

        if (nums[nums[i]] !== nums[i]) {
            let z = nums[i];
            nums[i] = nums[nums[i]];
            nums[z] = z;
        }

        if (i !== nums[i] && nums[nums[i]] === nums[i]) {
            duplicateNum = nums[i];
        }
    }
    console.log(isOver ? -1 : duplicateNum);
    return isOver ? -1 : duplicateNum;
};
