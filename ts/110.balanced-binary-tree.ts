
/**
 * 思路：
 * 由于getHeight方法获取的是树的最大高度，因此需要对所有子树做递归遍历
 */
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function getHeight(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }
  if (Math.abs(getHeight(root.left) - getHeight(root.right)) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};