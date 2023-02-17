// Problem 7.6: Implement a Queue using 2 stack

import {Queue} from './stack_queue.js';

const qu = new Queue();
qu.enqueue('a');
qu.enqueue('b');
qu.enqueue('c');
qu.dequeue();
console.log(qu.printS1());
console.log(qu.printS2());