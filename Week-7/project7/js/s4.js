// Problem 7.4: Parenthesis Checker
// Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.

import Stack from './stack_queue.js';

const st = new Stack();
// const expr = '([{}])';
st.push('(');
st.push('[');
st.push('{');
st.push('}');
st.push(']');
st.push(')');
console.log(st.parenthesisChecker());