/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var i = 0,
        l = nums.length - 1;

    // 使用二分查找
    while (i <= l) {
        var m = parseInt((i + l) / 2);
        var curr = nums[m];
        // find it
        if (target === curr) {
            return m;
        }
        if (target < curr) {
            if (m === 0) {
                return 0;
            }
            if (target > nums[m - 1]) {
                return m;
            }
            l = m;
        } else {
            if (m === l) {
                return l + 1;
            }
            if (target < nums[m + 1]) {
                return m + 1;
            }
            // 注意这里要用m+1
            i = m + 1;
        }
    }
};

// 使用普通的查找方法
 
var searchInsert = function(nums, target) {
    var i = 0,
        l = nums.length;

    for (; i < l; i ++) {
        var curr = nums[i];
        if (target <= curr) {
            return i;
        }
        if (i === l - 1) {
            return l;
        }
        if (target > curr && target < nums[i + 1]) {
            return i + 1;
        }

    }
}