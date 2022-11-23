/** 
 * 思路：
 * 将升序数组用中序遍历的形式构建成一棵二叉树
*/
interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  // 首先找到中间节点
  const middleIndex = Math.floor(nums.length / 2);
  const root: TreeNode = {
    val: nums[middleIndex],
    left: sortedArrayToBST(nums.slice(0, middleIndex)),
    right: sortedArrayToBST(nums.slice(middleIndex + 1)),
  };

  return root;
};