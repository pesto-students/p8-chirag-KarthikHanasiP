// Exercise4.3:

const fibonacci = {
  [Symbol.iterator]() {
    let n1 = 0, n2 = 1, value;
    return {
      next() {
        // The next line performs parallel assignment using destructuring.
        // It is equivalent to value = n1; n1 = n2; n2 = n1 + n2;
        [value, n1, n2] = [n1, n2, n1 + n2];
 
        // The next line is equal to return {value: value};
        return {value};
      }
    };
  }
};
 

for (const n of fibonacci) {
  if (n > 100) break;
  console.log(n);
}