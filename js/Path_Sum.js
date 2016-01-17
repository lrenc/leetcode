/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var dfs = function(node, res, sum) {
    // 是一个叶子节点
    if (!node.left && !node.right) {
        if (res + node.val === sum) {
            return true;
        }
        return false;
    }
    var flag = false;
    if (node.left) {
        flag = flag || dfs(node.left, res + node.val, sum);
    }
    if (node.right) {
        flag = flag || dfs(node.right, res + node.val, sum);
    }
    return flag;
};

var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    return dfs(root, 0, sum);
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(1);
var node1 = root.left = new TreeNode(2);
var node2 = node1.left = new TreeNode(3);
var node3 = node2.left = new TreeNode(4);
var node4 = node3.left = new TreeNode(5);

console.log(hasPathSum(root, 15));