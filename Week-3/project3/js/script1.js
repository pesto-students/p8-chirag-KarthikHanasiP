// Exercise 3.1:

function factorial(label, numbers, callback) {
  console.time(label);
  // console.log(numbers);
  for (let number in numbers) {
    callback(number);
  }
  console.timeEnd(label);
}

function memoize(fn) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);

    return result;
  };
}

function getNumbers(limit = 100) {
  let numbers = [];

  for (let i = 0; i < limit; i++) {
    numbers.push(i);
  }

  return numbers;
}

const numbers = getNumbers();
// console.log(numbers);
const memoizeFactorial = memoize(factorial);

factorial("First Call", [1,2,3,4,5], memoizeFactorial);
factorial("Cached Call", [1,2,3,4,5], memoizeFactorial);