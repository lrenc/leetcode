/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var twoSum = function(start, end, nums, target, first, second, res) {
    while (start < end) {
        var a = nums[start];
        var b = nums[end];
        if (a + b === target) {
            res.push([first, second, a, b]);
            // 继续往后找
            start ++;
            while (start < end && nums[start] === a) {
                start ++;
            }
            end --;
            while (start < end && nums[end] === b) {
                end --;
            }
        } else if (a + b < target) {
            start ++;
        } else {
            end --;
        }
    }
};

var fourSum = function(nums, target) {
    // 首先nums排序
    nums.sort(function(a, b) {
        return a - b;
    });
    var res = [];
    var i = 0,
        j = 0,
        l = nums.length;
    // javascript 的undefinde真方便
    var a, b;
    for (; i < l - 1; i ++) {
            if (nums[i] === a) {
                continue;
            }
            a = nums[i];
            // reset b
            b = undefined;
        for (j = i + 1; j < l; j ++) {
            if (nums[j] !== b) {
                b = nums[j];
                twoSum(j + 1, l - 1, nums, target - a - b, a, b, res);
                
            }
        }
    }
    return res;
};

console.log(fourSum([-2, 0, 0, 1, 1, 5, 7, 7, 7, 7], 28));
//[-3, -2, -1, 0, 0, 1, 2, 3]