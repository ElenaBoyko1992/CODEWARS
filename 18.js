/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more 
than one digit, continue reducing in this way until a single-digit 
number is produced. The input will be a non-negative integer.
*/

//response:
function digitalRoot(n) {
	n = n.toString();
	let newVar = 0;

	for (let i = 0; i < n.length; i++) {
		newVar += +n[i];
	}

	n = newVar;

	if (n.toString().length == 1) {
		return n;
	} else {
		return digitalRoot(n);
	}
};