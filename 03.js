function smallEnough(a, limit) {
	for (let i = 0; i < a.length; i++) {
		if (a[i] > limit) {
			return false;
		}
	};
	return true;
};

console.log(smallEnough([1, 2, 0, 3, 5], 6));