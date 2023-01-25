// Exercise5.1:

async function asyncFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Async Await"), 1000)
  });
  const result = await promise; 
  // wait till the promise resolves (*)
  console.log(result); // "i am resolved!"
}
asyncFunction();


// function* generatorFunction() {
//   const promise = new Promise((resolve, reject) => {
//       resolve(10);
//   }).then(() => {
//     console.log(promise);
//   }).catch(() => {
//     console.log(promise);
//   });
// };

async function* generatorFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Async Await"), 1000)
  });
  const result = await promise; 
  // wait till the promise resolves (*)
  console.log(result); // "i am resolved!"
};

const genFunction = generatorFunction();

genFunction.next();