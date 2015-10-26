/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var twoSum = function(start, end, nums, target, first, res) {
    while (start < end) {
        var a = nums[start];
        var b = nums[end];
        if (a + b === target) {
            res.push([first, a, b]);
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

var threeSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    var i = 0,
        l = nums.length;

    var res = [];
    var first;
    for (; i < l; i ++) {
        if (nums[i] === first) {
            continue;
        };
        first = nums[i];
        // 这样可能会误杀
        /*if (nums[i + 1] === first) {
            continue;
        }*/
        twoSum(i + 1, l - 1, nums, -first, first, res);
    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]))