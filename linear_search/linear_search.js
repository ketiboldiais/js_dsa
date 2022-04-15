import Test from "../test/test.mjs";

const arr1 = Test.testArray(100_000_000)

const linearSearch = (arr, query) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === query) {
			return true;
		}
	}
	return false;
};

Test.time(linearSearch(arr1, 1_000));




