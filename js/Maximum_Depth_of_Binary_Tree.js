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

// 运用好递归
var maxDepth = function(root) {

    if (root === null) {
        return 0;
    }
    var l = maxDepth(root.left);
    var r = maxDepth(root.right);

    return l > r ? 1 + l : 1 + r;
};

// bfs 怎么写