/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const res = [];
  let layerNodes = [root];

  while (layerNodes.length !== 0) {
    const tmp = [];
    let tmpLayerNodes = [];
    for (const node of layerNodes) {
      tmp.push(node.val);
      if (node.left !== null) {
        tmpLayerNodes.push(node.left);
      }
      if (node.right !== null) {
        tmpLayerNodes.push(node.right);
      }
    }
    res.push(tmp);
    layerNodes = tmpLayerNodes;
  }

  return res;
};
