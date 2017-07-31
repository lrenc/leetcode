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

function getDepth(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(getDepth(root.left), getDepth(root.right));
}

var isBalanced = function(root) {
    if (root === null) {
        return true;
    }
    if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) {
        return false;
    }
    // 所有子树都必须是平衡的
    return isBalanced(root.left) && isBalanced(root.right);
};
