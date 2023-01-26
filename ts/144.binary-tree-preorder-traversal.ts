
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function dfs(root: TreeNode | null, result: number[] = []) {
  if (!root) {
    return;
  }
  result.push(root.val);
  if (root.left) {
    dfs(root.left, result);
  }
  if (root.right) {
    dfs(root.right, result);
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];
  dfs(root, result);
  return result;
};