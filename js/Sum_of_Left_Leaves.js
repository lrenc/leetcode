/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 需要对是否是左子节点进行标记
var getSum = function(root, sum, isLeft) {
    if (root.left) {
        getSum(root.left, sum, true);
    }
    if (!root.left && !root.right && isLeft) {
        sum[0] += root.val;
    } else if (root.right) {
        getSum(root.right, sum, false);
    }
}

var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }
    var sum = [0];
    getSum(root, sum);
    return sum[0];
};
