/**
 * 思路：
 * 注意条件判断对递归路径的影响
*/
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function dfsSum(node: TreeNode, targetSum: number, currentSum = 0): boolean {
  if (node.left) {
    const equal = dfsSum(node.left, targetSum, currentSum + node.val);
    if (equal) {
      return true;
    }
  }
  if (node.right) {
    const equal = dfsSum(node.right, targetSum, currentSum + node.val);
    if (equal) {
      return true;
    }
  }
  if (!node.left && !node.right) {
    return targetSum === currentSum + node.val;
  }
  return false;
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  return dfsSum(root, targetSum);
};