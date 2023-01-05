// Exercise 3.2:

// The bind method creates a new function and sets the this keyword to the specified object.

function greeting(lang) {
  console.log(`${lang}: I am ${this.name}`);
}
const john = {
  name: 'John'
};
const jane = {
  name: 'Jane'
};
const greetingJohn = greeting.bind(john, 'en');
greetingJohn();
const greetingJane = greeting.bind(jane, 'es');
greetingJane();



// The call method sets the this inside the function and immediately executes that function.

function greet(greeting) {
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const johnCall = {
  name: 'John',
  age: 24,
};
const janeCall = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greet.call(johnCall, 'Hi');
// Hi, I am Jane and I am 22 years old
greet.call(janeCall, 'Hello');



// The apply() method is similar to call(). The difference is that the apply() method accepts an array 
// of arguments instead of comma separated values.

function greet(greeting, lang) {
  console.log(lang);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const johnApply = {
  name: 'John',
  age: 26,
};
const janeApply = {
  name: 'Jane',
  age: 28,
};
// Hi, I am John and I am 24 years old
greet.apply(johnApply, ['Hi', 'en']);
// Hi, I am Jane and I am 22 years old
greet.apply(janeApply, ['Hello', 'es']);

// Difference

// The call and apply methods set this to a function and call the function.
// The bind method will only set this to a function. We will need to separately invoke the function.
