export class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

export class Tree {
    constructor() {
        this.root = null;
    }

    // append(root, element) {
    //     let current = root;

    //     while(current.element !== element) {
    //         if(current.element < element) {
    //             if(!current.element < element) {
    //                 current.right = new TreeNode(element);
    //             } else {
    //                 current = current.right;
    //             }
    //         } else {
    //             if(!current.left) {
    //                 current.left = new TreeNode(element);
    //             } else {
    //                 current = current.left;
    //             }
    //         }
    //     }
    //     return root;
    // }

    append(data) {
        let newNode = new TreeNode(data);
        if(this.root === null) {
           this.root = newNode;
        }else{
           this.insertNode(this.root, newNode);
        }
     }

    insertNode(node, newNode) {
        if(newNode.data < node.data){
           if(node.left === null) {
              node.left = newNode;
           }else{
              this.insertNode(node.left, newNode);
           }
        } else {
           if(node.right === null) {
              node.right = newNode;
           }else{
              this.insertNode(node.right,newNode);
           }
        }
    }

    // maxDepth(root) {
    //     if(this.root === null) return;
    //     return 1 + Math.max(maxDepth(this.root.left), maxDepth(this.root.right));
    // }
   

    print() {
        return this.root;
    }
  }


export default {Tree, TreeNode};