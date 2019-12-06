class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root=this.root) {
       let treeNode = new TreeNode(val);
       if (!this.root) return this.root = treeNode;

       if (val < root.val) {
           !root.left ? root.left = treeNode : this.insert(val, root.left);
       } else {
           !root.right ? root.right = treeNode : this.insert(val, root.right);
       }
   }

   searchRecur(val, root=this.root) {
       if (!root) return false;

       if (val < root.val) {
           return this.searchRecur(val, root.left);
       } else if (val > root.val) {
           return this.searchRecur(val, root.right);
       } else {
           return true;
       }
   }

   searchIter(val) {
       let currentNode = this.root;
       if (!currentNode) return false;

       while(currentNode.left || currentNode.right) {
           if (val < currentNode.val) {
               currentNode = currentNode.left;
           } else if (val < currentNode.val) {
               currentNode = currentNode.right;
           } else {
               return true;
           }
       }
       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};