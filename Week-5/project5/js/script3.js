// Exercise5.3:

function containsDuplicate(arrValues) {
	
	const hasDuplicate = arr => new Set(arr).size !== arr.length;
	console.log(hasDuplicate(arrValues));
}

containsDuplicate([1,5,-1,4]);