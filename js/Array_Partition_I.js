/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort(function(a, b) {
        return a - b;
    });
    let arr = nums.filter(function(item, index) {
        return index % 2 === 0;
    });

    return arr.reduce(function(sum, item) {
        return sum + item;
    }, 0);
};

console.log(arrayPairSum([1,4,3,2]));
