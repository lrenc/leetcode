/**
 * 思路：
 * 注意条件判断对递归的影响
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left && !root.right) {
    return 1;
  }
  if (root.left && !root.right) {
    return 1 + minDepth(root.left);
  }
  if (root.right && !root.left) {
    return 1 + minDepth(root.right);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};