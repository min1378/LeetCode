/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    const arr = [];
    const inOrder = (node) => {
        if(!node) return;
        inOrder(node.left);
        arr.push(node.val);
        inOrder(node.right);
    }
    inOrder(root);
    console.log(arr);
    let result = Number.MAX_VALUE;
    arr.forEach((val, index) => {
        if(index < arr.length - 1) {
            result = Math.min(arr[index + 1] - val, result);
        }
    })
    return result;
};