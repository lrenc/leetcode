
/**
 * 思路：
 * 递归遍历树，注意不能将左右子树分开进行return
 */
interface TreeNode {
  val: number,
  left: TreeNode | null,
  right: TreeNode | null
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }
  if (p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
};