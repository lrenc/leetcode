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

var dfs = function(node, path, res) {
    // 是页节点
    if (!node) {
        return;
    }
    path.push(node.val);
    // 弄清楚在每个地方执行的逻辑
    dfs(node.left, path, res);
    dfs(node.right, path, res);
    // 弹出当前节点
    if (!node.left && !node.right) {
        res.push(+path.join(''));
    }
    path.pop();
};

var sumNumbers = function(root) {
    /**
     * 深度遍历所有路径，然后相加
     */
    if (!root) {
        return 0;
    }
    var res = [];
    dfs(root, [], res);
    // console.log(res);
    return res.reduce(function(prev, curr) {
        return prev + curr;
    });
};