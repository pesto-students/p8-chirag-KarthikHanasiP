// Exercise 3.4

function createStack(items = []) {
	const newItems = [...items];
	function push(val) {
	  items.push(val);
	}

	function pop() {
	  return newItems.pop();
	}

	function checkItems() {
	  console.log(`items status: ${newItems}`)
	}

	return { push, pop, checkItems }
}

const items = [];
const stack = createStack(items);

stack.push(10);
stack.push(5);
items.length = 1;

stack.pop();

console.log(stack.checkItems());