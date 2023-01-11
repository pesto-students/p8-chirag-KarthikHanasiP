***Exercise 3.2***
Bind()
The bind method creates a new function and sets the this keyword to the specified object.

Call()
The call method sets the this inside the function and immediately executes that function.

Apply()
The apply() method is similar to call(). The difference is that the apply() method accepts an array of arguments instead of comma separated values.



***Exercise 3.3***
1. 'Count is 0' is logged to console. Try the demo.

2. increment() function has been called 3 times, effectively incrementing count to value 3.

3. message variable exists within the scope of createIncrement() function. Its initial value is 'Count is 0'. However, even if count variable has been incremented a few times, message variable always holds 'Count is 0'.

4. log() function is a closure that captures message variable from the createIncrement() scope. console.log(message) logs 'Count is 0' to console.



***Exercise 3.4***

1. Original Code was returning array to the calling function so array items were accessing outside of function

2. In the updated code we are created arguments as array and used Spread operator array value cloning.