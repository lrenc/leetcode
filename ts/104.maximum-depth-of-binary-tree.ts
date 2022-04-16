/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
interface TreeNode {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  } else {
    return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
  }
};