
/**
 * 思路：
 * 递归对比
 */
interface TreeNode {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null,
}

function compare(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }
  if (a.val === b.val) {
    return compare(a.left, b.right) && compare(a.right, b.left);
  } else {
    return false;
  }
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  return compare(root.left, root.right);
};