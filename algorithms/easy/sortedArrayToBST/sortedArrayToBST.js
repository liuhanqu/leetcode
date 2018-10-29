/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  const root = helper(nums, 0, nums.length - 1);
  return root;
};

function helper(nums, start, end) {
  if (start > end) {
    return null;
  }
  const mid = Math.floor((end - start) / 2) + start;
  const node = new TreeNode(nums[mid]);
  node.left = helper(nums, start, mid - 1);
  node.right = helper(nums, mid + 1, end);

  return node;
}
