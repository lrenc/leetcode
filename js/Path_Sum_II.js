/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var dfs = function(node, count, sum, list, res) {
    if (!node.left && !node.right) {
        // 到叶子节点了
        if (count + node.val === sum) {
            list.push(node.val);
            // 加入结果集
            res.push(list.slice());
            list.pop();
        }
        return;
    }
    // 先进左子树
    count += node.val;
    list.push(node.val);

    if (node.left) {
        dfs(node.left, count, sum, list, res);
    }
    if (node.right) {
        dfs(node.right, count, sum, list, res);
    }
    list.pop();
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) {
        return [];
    }
    var res = [];
    dfs(root, 0, sum, [], res);
    return res;
}