
interface TreeNode {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}

function traversal(root: TreeNode | null, values: number[]): void {
  if (!root) {
    return;
  }
  if (root.left) {
    traversal(root.left, values);
  }
  values.push(root.val);
  if (root.right) {
    traversal(root.right, values);
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  const res: number[] = [];
  traversal(root, res);
  return res;
};