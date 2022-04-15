import Test from "../test/test.mjs";

const arr1 = Test.testArray(30);

const binary_search = (array, key) => {
	let min = 0;
	let max = array.length;
	while (min <= max) {
		let mid = Math.floor((min + max) * 0.5);
		if (array[mid] === key) {
			return true;
		} else if (array[mid] < key) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}
	return false;
};

Test.run(binary_search(arr1, 5), true);
Test.run(binary_search(arr1, 28), true);
Test.run(binary_search(arr1, 31), false);
Test.run(binary_search(arr1, 2), true);
