/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var traversal = function(root, res) {
    if (!root) {
        return;
    }
    if (root.left) {
        traversal(root.left, res);
    }
    res.push(root.val);
    if (root.right) {
        traversal(root.right, res);
    }
};

var inorderTraversal = function(root) {
    var res = [];
    traversal(root, res);
    return res;
};