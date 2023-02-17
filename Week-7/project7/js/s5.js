// Problem 7.5: Next Greater Element

import Stack from './stack_queue.js';

const st = new Stack();

// st.push(1);
// st.push(3);
// st.push(2);
// st.push(4);
st.push(6);
st.push(8);
st.push(0);
st.push(1);
st.push(3);

st.nextGreaterElement();