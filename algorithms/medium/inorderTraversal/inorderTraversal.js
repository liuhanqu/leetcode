/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];
  helper(root, res);
  return res;
};

function helper(node, res) {
  if (node === null) {
    return;
  }
  if (node.left !== null) {
    helper(node.left, res);
  }
  res.push(node.val);
  if (node.right !== null) {
    helper(node.right, res);
  }
}
