// Problem 7.2: Rotate Linked List

import LinkedList from './linkedList.js';
const li = new LinkedList();
li.append(2);
li.append(4);
li.append(7);
li.append(8);
li.append(9);
li.rotateLinkedList(3);
console.log(li.print());