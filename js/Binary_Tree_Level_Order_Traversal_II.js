/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
    if (!root) {
        return [];
    }

    var res = [];
    var level = [];
    var queue = [root];

    var nextLevelStarter = null;
    
    if (root.left) {
        nextLevelStarter = root.left;
    } else if (root.right) {
        nextLevelStarter = root.right;
    }

    while (queue.length) {
        var node = queue.shift();
        // 找到了当前的节点
        if (nextLevelStarter === node) {
            res.push(level);
            level = [];
            nextLevelStarter = null;
        }
        if (nextLevelStarter === null) {
            if (node.left) {
                nextLevelStarter = node.left;
            } else if (node.right) {
                nextLevelStarter = node.right;
            }
        }
        level.push(node.val);
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
    }
    if (level) {
        res.push(level);
    }
    return res.reverse();
};