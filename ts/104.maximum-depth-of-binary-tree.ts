
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