// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


var buildTree = function (preorder, inorder) {
  // let left = [];
  // let right = [];
  // preoder.forEach((ele1, idx1) => {
  //   indorder.forEach((ele2, idx2) => {
  //     if (ele1 === ele2) {
  //       let node = new TreeNode(ele1);
  //       right = inorder.slice(idx2 + 1)
  //     } else {
  //       left.push(ele2);
  //     }
  //   })
  // })

  // if (!preorder || !inorder) return null;

  // let node = new TreeNode(preorder.shift());
  // inorder.forEach((ele, idx) => {
  //   if (node.val === ele) {
  //     node.left = buildTree(preorder, inorder.slice(0, idx));
  //     node.right = buildTree(preorder, inorder.slice(idx + 1));
  //   }
  // });

  if (preorder.length === 0 && !inorder.length === 0) return null;

  let root = preorder.shift();
  let node = new TreeNode(root);

  let idx = inorder.indexOf(root);
  let inorderLeft = inorder(0, idx);
  let inorderRight = inorder(idx + 1);
  let preorderLeft = preorder.filter(ele => ele < root);
  let preorderRight = preorder.filter(ele => ele > root);

  node.left = buildTree(preorderLeft, inorderLeft);
  node.right = buildTree(preorderRight, inorderRight);

  return node;
};