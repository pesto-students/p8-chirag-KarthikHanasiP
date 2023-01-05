
// Exercise 3.3:

function createIncrement() {
	let count = 0;
	function increment() {
		count++;
		// console.log(count);
	}
	// console.log(count);

	let message = `Count is ${count}`;
	function log() {
		console.log(message);
	}

	return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();