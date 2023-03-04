// Validate a Binary Tree

import {TreeNode} from './binary_tree.js';

let root = null;
function isBST() {
    return isBSTUtil(root, Number.MIN_VALUE, Number.MAX_VALUE);
}
     

function isBSTUtil(node,min,max) {
    /* an empty tree is BST */
    if (node == null)
        return true;

    /* false if this node violates
    the min/max constraints */
    if (node.data < min || node.data > max)
        return false;

    return (isBSTUtil(node.left, min, node.data-1) &&
            isBSTUtil(node.right, node.data+1, max));
}

root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.left.left.left = new TreeNode(1);


console.log(isBST());