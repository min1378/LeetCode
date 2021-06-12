/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const map = {};
  inorder.forEach((value, idx) => (map[value] = idx));

  let postOrderIdx = postorder.length - 1;

  function binaryTree(start, end) {
    if (start > end) {
      return null;
    }
    const value = postorder[postOrderIdx--],
      idx = map[value];

    const node = new TreeNode(value);
    node.right = binaryTree(idx + 1, end);
    node.left = binaryTree(start, idx - 1);
    return node;
  }

  return binaryTree(0, inorder.length - 1);
};