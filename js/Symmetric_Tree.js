/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/**
 * 
 */

var isSame = function(left, right) {
    if (left === null && right === null) {
        return true;
    }
    // 利用好之前已经过滤掉的条件
    // 此时left和right不可能同时等于null了
    if (left === null || right === null) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return isSame(left.left, right.right) && isSame(left.right, right.left);
}
var isSymmetric = function(root) {

    if (!root) {
        return true;
    }
    return isSame(root.left, root.right);
};