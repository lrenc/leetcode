/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function createBST(root, nums, start, end) {
    if (start < end) {
        let middle = Math.floor((start + end) / 2);
        let node = Reflect.construct(TreeNode, [nums[middle]]);
        if (root.val > nums[middle]) {
            root.left = node;
        } else {
            root.right = node;
        }
        createBST(node, nums, start, middle);
        createBST(node, nums, middle + 1, end);
    }
    return root;
}

var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null;
    }
    // 二分法
    var start = 0;
    var end = nums.length;
    var middle = Math.floor((start + end) / 2);
    let root = Reflect.construct(TreeNode, [nums[middle]]);
    createBST(root, nums, start, middle);
    createBST(root, nums, middle + 1, end);
    return root;
};

// 1,2,3,4,5,6,7,8,9
