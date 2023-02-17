// Problem 7.3: Detect loop in a linked list
import LinkedList from './linkedList.js';
const li = new LinkedList();
li.append(1);
// li.append(8);
li.append(3);
li.append(4);
// li.append(7);
// li.append(5);
// li.append(3);
// li.append(1);
console.log(li.detectLoop());