// Binary Tree Level Order Traversal

import {TreeNode} from './binary_tree.js';

let root = null;

function printLevelOrder() {
    let h = height(root);
    let i;
    for (i = 1; i <= h; i++)
        printCurrentLevel(root, i);
}

function height(root) {
    if (root == null) {
        return 0;
    } else {
        let lheight = height(root.left);
        let rheight = height(root.right);
        
        if (lheight > rheight)
            return (lheight + 1);
        else
            return (rheight + 1);
    }
}

function printCurrentLevel(root , level) {
    if (root == null)
        return;
    if (level == 1)
        console.log(root.data + " ");
    else if (level > 1) {
        printCurrentLevel(root.left, level - 1);
        printCurrentLevel(root.right, level - 1);
    }
}


root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

printLevelOrder();